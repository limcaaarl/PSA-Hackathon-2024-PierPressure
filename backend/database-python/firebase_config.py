import firebase_admin
from firebase_admin import credentials, firestore

# Correct the path to your service account key file
cred = credentials.Certificate("serviceAccountKey.json")

# Initialize the Firebase app
firebase_admin.initialize_app(cred)

# Initialize Firestore DB
db = firestore.client()

# Reference to the "Query" collection in Firestore
query_ref = db.collection('Query')