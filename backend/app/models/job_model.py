from app import db
import datetime

class Job(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(128), nullable=False)
    description = db.Column(db.Text, nullable=False)
    interval = db.Column(db.String(64), nullable=False)  # e.g., 'daily', 'weekly'
    next_run = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    def __repr__(self):
        return '<Job {}>'.format(self.title)
