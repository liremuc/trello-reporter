﻿from flask import Flask, render_template, jsonify, request
from trello_service import TrelloReportService

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/boards')
def get_boards():
    trello = TrelloReportService(
        api_key='your_api_key',
        token='your_token'
    )
    boards = trello.get_boards()
    return jsonify(boards)

if __name__ == '__main__':
    app.run(debug=True)
