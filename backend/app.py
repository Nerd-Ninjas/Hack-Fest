from flask import Flask, session
from flask_cors import CORS
from components.auth import auth_routes 
from components.info import info_routes 
from components.dashboard import dashboard_routes 
from components.connection import connection 
import os

app = Flask(__name__)
CORS(app, supports_credentials=True)  


app.config["SECRET_KEY"] = os.urandom(24)  
app.config["SESSION_PERMANENT"] = False  
app.config["SESSION_TYPE"] = "filesystem"
app.config["SESSION_COOKIE_SAMESITE"] = "Lax"

app.register_blueprint(auth_routes, url_prefix="/auth")
app.register_blueprint(info_routes, url_prefix="/info")

@app.route("/")
def home():
    return {"message": "Welcome to the NERD API"}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=2000, debug=True)
