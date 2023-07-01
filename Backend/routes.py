from flask import Flask, jsonify, request
from pymongo import MongoClient


client = MongoClient('mongodb://localhost:27017/')
db = client.mydatabase  # שנה את "mydatabase" לשם המסד הנתונים שלך

app = Flask(__name__)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = db.collection.find()  # שנה "collection" לשם האוסף (collection) שלך במסד הנתונים
    result = []
    for item in data:
        result.append({'name': item['name'], 'age': item['age']})  # שנה את המפתחות והערכים להתאימים למבנה הנתונים שלך
    return jsonify(result)

@app.route('/api/data', methods=['POST'])
def add_data():
    new_data = request.get_json()
    db.collection.insert(new_data)  # שנה "collection" לשם האוסף (collection) שלך במסד הנתונים
    return jsonify({'message': 'Data added successfully'})


if __name__ == '__main__':
    app.run()