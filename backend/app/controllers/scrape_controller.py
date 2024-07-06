from flask import Blueprint, request, jsonify
from app.models import db, Scrape
import requests
from bs4 import BeautifulSoup

scrape_blueprint = Blueprint('scrape', __name__)

@scrape_blueprint.route('/scrape', methods=['POST'])
def scrape_url():
    data = request.get_json()
    url = data.get('url', '')

    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Example: extracting title and all paragraph text
    title = soup.find('title').get_text() if soup.find('title') else 'No Title'
    paragraphs = [p.get_text() for p in soup.find_all('p')]

    scraped_data = {
        'title': title,
        'content': '\n'.join(paragraphs)
    }

    # Save to database
    scrape_entry = Scrape(url=url, content=scraped_data['content'])
    db.session.add(scrape_entry)
    db.session.commit()

    return jsonify(scraped_data)
