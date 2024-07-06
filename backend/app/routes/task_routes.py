from flask import Blueprint, jsonify, request
from app import db
from app.models import Task

task_bp = Blueprint('task_bp', __name__)

@task_bp.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    return jsonify([task.to_dict() for task in tasks])

@task_bp.route('/tasks', methods=['POST'])
def create_task():
    data = request.get_json()
    task = Task(name=data['name'], status=data['status'])
    db.session.add(task)
    db.session.commit()
    return jsonify(task.to_dict()), 201

@task_bp.route('/tasks/<int:id>', methods=['PUT'])
def update_task(id):
    data = request.get_json()
    task = Task.query.get_or_404(id)
    task.name = data.get('name', task.name)
    task.status = data.get('status', task.status)
    db.session.commit()
    return jsonify(task.to_dict())

@task_bp.route('/tasks/<int:id>', methods=['DELETE'])
def delete_task(id):
    task = Task.query.get_or_404(id)
    db.session.delete(task)
    db.session.commit()
    return '', 204
