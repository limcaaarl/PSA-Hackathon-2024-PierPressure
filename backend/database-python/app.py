from flask import Flask, jsonify
from firebase_admin import firestore
from firebase_config import query_ref

app = Flask(__name__)

# Route to add test data to Firestore
@app.route('/add_test_data', methods=['GET'])
def add_test_data():
    try:
        # Create a new document in the "Query" collection
        test_data = {
            'name': 'Test Data',
            'description': 'This is a test entry',
            'timestamp': firestore.SERVER_TIMESTAMP
        }

        # Add the data to Firestore
        query_ref.add(test_data)

        return jsonify({"success": True, "message": "Data added successfully!"}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=4000)