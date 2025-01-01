# -*- coding: utf-8 -*-
class TrelloReportService:
    def __init__(self, api_key=None, token=None):
        self.api_key = api_key
        self.token = token

    def get_boards(self):
        # Placeholder for now
        return [
            {'id': '1', 'name': 'Test Board 1'},
            {'id': '2', 'name': 'Test Board 2'}
        ]
