from app.routes.post_routes import post_bp
from app.routes.task_routes import task_bp
from app.routes.parse_routes import parse_bp
from app.routes.scrape_routes import scrape_bp
from app.routes.job_routes import job_bp

def register_blueprints(app):
    app.register_blueprint(post_bp)
    app.register_blueprint(task_bp)
    app.register_blueprint(parse_bp)
    app.register_blueprint(scrape_bp)
    app.register_blueprint(job_bp)
