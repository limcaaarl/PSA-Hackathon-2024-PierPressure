from firebase_admin import firestore
from firebase_config import send_data_to_firestore


def handle_ml_output(warning_level):
    """
    Function to handle the ML output (e.g., warning level) and send it to Firestore.
    """
    data = {
        'warning_level': warning_level,
        'timestamp': firestore.SERVER_TIMESTAMP
    }
    send_data_to_firestore(data)


if __name__ == "__main__":
    # Simulate output from ML model
    ml_warning_level = "High"
    print(f"Sending ML warning level: {ml_warning_level}")
    handle_ml_output(ml_warning_level)
    print("Data sent to Firestore.")
