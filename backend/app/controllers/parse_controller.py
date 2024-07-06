from flask import Blueprint, request, jsonify
from app.models import db, Parse
import re
import tensorflow as tf
import tensorflow_hub as hub

parse_blueprint = Blueprint('parse', __name__)

@parse_blueprint.route('/parse', methods=['POST'])
def parse_text():
    data = request.get_json()
    text = data.get('text', '')

    # Simple regex-based parsing logic
    emails = re.findall(r'\S+@\S+', text)
    names = re.findall(r'\b[A-Z][a-z]+\s[A-Z][a-z]+\b', text)
    companies = re.findall(r'\b[A-Z][a-z]+(?:\s[A-Z][a-z]+)*\b(?:,? Inc\.| Ltd\.| LLC| Corp\.| Co\.)', text)

    # TensorFlow-based parsing (e.g., named entity recognition)
    embed = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")
    embeddings = embed([text])

    parsed_data = {
        'emails': emails,
        'names': names,
        'companies': companies,
        'embeddings': embeddings.numpy().tolist()
    }

    return jsonify(parsed_data)
