from flask import Blueprint, jsonify, request
from app import db
from app.models import Job

job_bp = Blueprint('job_bp', __name__)

@job_bp.route('/jobs', methods=['GET'])
def get_jobs():
    jobs = Job.query.all()
    return jsonify([job.to_dict() for job in jobs])

@job_bp.route('/jobs', methods=['POST'])
def create_job():
    data = request.get_json()
    job = Job(description=data['description'], schedule_time=data['schedule_time'])
    db.session.add(job)
    db.session.commit()
    return jsonify(job.to_dict()), 201

def init_app(app):
    app.register_blueprint(job_bp)
