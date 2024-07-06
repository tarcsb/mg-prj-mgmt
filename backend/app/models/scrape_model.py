from app import db

class Scrape(db.Model):
    id = db.Column(db.Integer, primary key=True)
    url = db.Column(db.String(512), nullable=False)
    content = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return '<Scrape {}>'.format(self.url)
