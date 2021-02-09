from flask import Flask, jsonify, request, Response
import time
import json
import os
import requests
from pymongo import MongoClient
from flask_jsonschema_validator import JSONSchemaValidator

app = Flask(__name__)

client = MongoClient(
    "mongodb+srv://ninja:1234@rest-api.yiibl.mongodb.net/mongo?retryWrites=true&w=majority")

mydb = client["support"]
mycol = mydb["users"]


@app.route("/api/contact", methods=["POST"])
def add_user():
    json = request.json
    name = json['name']
    email = json['email']
    message = json['message']

    if name and email and message and request.method == 'POST':
        id = mydb.users.insert_one(
            {'name': name, 'email': email, 'message': message})

        return {"status": "success", "message": "Message successfully added"}, 200
    else:
        return not_found()


@app.errorhandler(404)
def not_found():
    message = {
        'status': 'error',
        'message': 'All fields are required'
    }
    resp = jsonify(message)
    resp.status_code = 404
    return resp


if __name__ == '__main__':
    app.run(debug=True)
