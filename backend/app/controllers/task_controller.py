from flask import Blueprint, jsonify, request
from app.models import db, Task

task_blueprint = Blueprint('task', __name__)

@task_blueprint.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    return jsonify([task.to_dict() for task in tasks])

@task_blueprint.route('/tasks', methods=['POST'])
def create_task():
    data = request.get_json()
    task = Task(title=data['title'], status=data['status'], contact_email=data.get('contact_email'), details=data.get('details'))
    db.session.add(task)
    db.session.commit()
    return jsonify(task.to_dict())

def init_app(app):
    app.register_blueprint(task_blueprint, url_prefix='/api')
