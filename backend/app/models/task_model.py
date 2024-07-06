from app import db

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(128), nullable=False)
    status = db.Column(db.String(64), nullable=False, default='started')
    contact_email = db.Column(db.String(120), nullable=True)
    details = db.Column(db.Text, nullable=True)

    def __repr__(self):
        return '<Task {}>'.format(self.title)
