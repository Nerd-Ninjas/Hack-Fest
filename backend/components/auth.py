from flask import Blueprint, jsonify, request, session
from werkzeug.security import generate_password_hash, check_password_hash
from .connection import connection

auth_routes = Blueprint('auth', __name__)
db = connection()
users = db["users"]

@auth_routes.route("/register", methods=['POST'])
def register():
    data = request.json
    name = data.get("name")
    age = data.get('age')
    email = data.get('email')
    password = data.get('password')

    if not name or not email or not password:
        return jsonify({"message": "Missing required fields"}), 400

    existing_user = users.find_one({"email": email})
    if existing_user:
        return jsonify({"message": "User already exists"}), 400

    hash_pass = generate_password_hash(password, method="pbkdf2:sha256")

    new_user = {
        'name': name,
        'age': age,
        'email': email,
        'password': hash_pass
    }
    users.insert_one(new_user)

    return jsonify({"message": "User registered successfully"}), 201

# 🔹 User Login
@auth_routes.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "Missing email or password"}), 400

    existing_user = users.find_one({"email": email})
    if existing_user and check_password_hash(existing_user['password'], password):
        session['email'] = email
        session['logged_in'] = True
        session.modified = True
        
        return jsonify({
            'message': "Login Successful",
            'session': session.get('email')  
        }), 200
    
    return jsonify({"message": "Invalid email or password"}), 401
@auth_routes.route("/session", methods=["GET"])
def check_session():
    if 'logged_in' in session and session['logged_in']:
        return jsonify({"logged_in": True, "email": session.get('email')}), 200
    return jsonify({"logged_in": False}), 401

# 🔹 User Logout
@auth_routes.route("/logout", methods=['POST'])
def logout():
    session.clear()
    return jsonify({"message": "Logged out successfully"}), 200

# 🔹 Check Login Status
@auth_routes.route("/check", methods=['GET'])
def check_login():
    if 'logged_in' in session and session['logged_in']:
        return jsonify({"message": "User is logged in", "email": session.get('email')}), 200
    return jsonify({"message": "User is not logged in"}), 401
