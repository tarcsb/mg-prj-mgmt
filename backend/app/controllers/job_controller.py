from flask import Blueprint, request, jsonify
from app.models import db, Job
import datetime

job_blueprint = Blueprint('job', __name__)

@job_blueprint.route('/jobs', methods=['GET'])
def get_jobs():
    jobs = Job.query.all()
    return jsonify([job.to_dict() for job in jobs])

@job_blueprint.route('/jobs', methods=['POST'])
def create_job():
    data = request.get_json()
    job = Job(
        title=data['title'],
        description=data['description'],
        interval=data['interval'],
        next_run=datetime.datetime.strptime(data['next_run'], '%Y-%m-%d %H:%M:%S')
    )
    db.session.add(job)
    db.session.commit()
    return jsonify(job.to_dict())

@job_blueprint.route('/jobs/<int:job_id>', methods=['PUT'])
def update_job(job_id):
    data = request.get_json()
    job = Job.query.get(job_id)
    if not job:
        return jsonify({'error': 'Job not found'}), 404

    job.title = data['title']
    job.description = data['description']
    job.interval = data['interval']
    job.next_run = datetime.datetime.strptime(data['next_run'], '%Y-%m-%d %H:%M:%S')

    db.session.commit()
    return jsonify(job.to_dict())

@job_blueprint.route('/jobs/<int:job_id>', methods=['DELETE'])
def delete_job(job_id):
    job = Job.query.get(job_id)
    if not job:
        return jsonify({'error': 'Job not found'}), 404

    db.session.delete(job)
    db.session.commit()
    return jsonify({'message': 'Job deleted'})
