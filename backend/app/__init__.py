import os
import logging
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS  # Import Flask-CORS
from dotenv import load_dotenv
from logging.handlers import RotatingFileHandler

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    
    # Load environment variables from .env file
    load_dotenv()
    
    # Configuring the database URL
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    db.init_app(app)
    migrate.init_app(app, db)
    
    # Register blueprints
    from app.routes import register_blueprints
    register_blueprints(app)
    
    # Configure CORS to allow requests from the frontend
    CORS(app, resources={r"/*": {"origins": "*"}})

    # Configure logging
    if not app.debug:
        if not os.path.exists('logs'):
            os.mkdir('logs')
        file_handler = RotatingFileHandler('logs/myapp.log', maxBytes=10240, backupCount=10)
        file_handler.setFormatter(logging.Formatter(
            '%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]'))
        file_handler.setLevel(logging.INFO)
        app.logger.addHandler(file_handler)
    
    # Always log errors regardless of debug mode
    if app.debug or app.testing:
        app.logger.setLevel(logging.DEBUG)
    else:
        app.logger.setLevel(logging.INFO)
    
    return app
