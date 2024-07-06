from flask import Blueprint, jsonify, request
from app.models import db, Post

post_blueprint = Blueprint('post', __name__)

@post_blueprint.route('/posts', methods=['GET'])
def get_posts():
    posts = Post.query.all()
    return jsonify([post.to_dict() for post in posts])

@post_blueprint.route('/posts', methods=['POST'])
def create_post():
    data = request.get_json()
    post = Post(title=data['title'], content=data['content'])
    db.session.add(post)
    db.session.commit()
    return jsonify(post.to_dict())

def init_app(app):
    app.register_blueprint(post_blueprint, url_prefix='/api')
