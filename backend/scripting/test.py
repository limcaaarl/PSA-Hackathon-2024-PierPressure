import logging
from datetime import datetime
from firebase_config import send_data_to_firestore

logging.basicConfig(filename='logfile.log', level=logging.INFO)


def simulate_task():
    data = {
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "status": "Simulation success",
        "content": "Simulated data for test.",
        "location": "Yemeni Coast",
        "link": "https://twitter.com/example/status/12345"
    }

    try:
        # Send data to Firebase Firestore
        send_data_to_firestore(data)
        logging.info(f"Data sent successfully at {data['timestamp']}")
    except Exception as e:
        logging.error(f"Error occurred: {e}")


if __name__ == "__main__":
    simulate_task()
