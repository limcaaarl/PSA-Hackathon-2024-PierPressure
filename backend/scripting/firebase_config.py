import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase app with credentials
cred = credentials.Certificate("/app/serviceAccountKey.json")
firebase_admin.initialize_app(cred)

# Initialize Firestore client
db = firestore.client()


def send_data_to_firestore(data):
    """
    Function to send data to Firestore in the 'Warning' collection.
    """
    try:
        # Change 'alerts' to 'test' to send data to the 'test' collection
        db.collection('test').add(data)
        print("Data sent to Firestore successfully")
    except Exception as e:
        print(f"An error occurred while sending data to Firestore: {e}")
