from flask import Blueprint, jsonify, request, url_for, session
from werkzeug.utils import secure_filename
from .connection import connection
import os
import traceback
from bson import ObjectId

info_routes = Blueprint('info', __name__)


db = connection()
userinfomain = db["info"]
users = db["users"]

UPLOAD_FOLDER = os.path.join('static', 'uploads/profile')

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
import logging

logging.basicConfig(level=logging.DEBUG)  

@info_routes.route("/userinfo", methods=["POST"])
def userinfo():
    try:
        if 'logged_in' not in session or not session['logged_in']:
            return jsonify({"error": "User not logged in"}), 401

        email = session.get('email')
        user = users.find_one({"email": email})

        if not user:
            return jsonify({"error": "User not found"}), 404

        user_id = str(user['_id'])

      
        print("Raw Request JSON:", request.json)
        print("Raw Request Form:", request.form)

        img_url = None
        if 'profile_picture' in request.files:
            picture = request.files['profile_picture']
            if picture and picture.filename:
                filename = secure_filename(picture.filename)
                img_path = os.path.join(UPLOAD_FOLDER, filename)
                try:
                    picture.save(img_path)
                    img_url = url_for('static', filename=f'uploads/profile/{filename}')
                except Exception as e:
                    return jsonify({"error": f"Failed to save profile picture: {str(e)}"}), 500

        user_data = request.json if request.json else request.form.to_dict()

        user_data["user_id"] = user_id
        user_data["img_url"] = img_url 

        print("Processed Data to Insert:", user_data)

        
        result = userinfomain.insert_one(user_data)
        print("Inserted Data ID:", result.inserted_id)

        return jsonify({"message": "User registered successfully", "image_url": img_url}), 201

    except Exception as e:
        print("Error Traceback:", traceback.format_exc())
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500
