from flask import Blueprint, jsonify, request
from app import db
from app.models import ParsedData

parse_bp = Blueprint('parse_bp', __name__)

@parse_bp.route('/parse', methods=['POST'])
def parse_data():
    data = request.get_json()
    # Here you would add your parsing logic
    parsed_data = ParsedData(name=data['name'], email=data['email'])
    db.session.add(parsed_data)
    db.session.commit()
    return jsonify(parsed_data.to_dict()), 201

# No init_app function here
