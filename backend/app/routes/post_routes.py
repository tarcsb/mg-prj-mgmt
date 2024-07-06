from flask import Blueprint, jsonify, request
from app import db
from app.models import Post

post_bp = Blueprint('post_bp', __name__)

@post_bp.route('/posts', methods=['GET'])
def get_posts():
    posts = Post.query.all()
    return jsonify([post.to_dict() for post in posts])

@post_bp.route('/posts', methods=['POST'])
def create_post():
    data = request.get_json()
    post = Post(title=data['title'], content=data['content'])
    db.session.add(post)
    db.session.commit()
    return jsonify(post.to_dict()), 201

# No init_app function here
