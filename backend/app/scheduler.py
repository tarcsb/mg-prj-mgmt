from apscheduler.schedulers.background import BackgroundScheduler
from app.models import db, Job
import datetime

scheduler = BackgroundScheduler()

def run_jobs():
    jobs = Job.query.filter(Job.next_run <= datetime.datetime.utcnow()).all()
    for job in jobs:
        # Here you would implement the logic to handle the job execution
        print(f"Running job: {job.title}")

        # Schedule the next run
        if job.interval == 'daily':
            job.next_run += datetime.timedelta(days=1)
        elif job.interval == 'weekly':
            job.next_run += datetime.timedelta(weeks=1)
        elif job.interval == 'monthly':
            job.next_run += datetime.timedelta(weeks=4)  # Simplified monthly interval

        db.session.commit()

def start_scheduler():
    scheduler.add_job(func=run_jobs, trigger="interval", seconds=60)  # Check every minute
    scheduler.start()
