from firebase_admin import firestore
from firebase_config import send_data_to_firestore


def handle_ml_output(content, location, link, timestamp):
    """
    Function to handle the ML output (e.g., warning level) and send it to Firestore.
    """
    data = {
        'content': content,
        'location': location,
        'link': link,
        'timestamp': timestamp
    }
    send_data_to_firestore(data)


if __name__ == "__main__":
    # Simulate output from ML model
    ml_tweet_content = "The infidels will regret stepping into our territory. Soon, the coast will be ours! #RedSeaWar"
    ml_tweet_location = "Yemeni Coast"
    ml_tweet_link = "https://twitter.com/yemeni_avenger/status/3"
    ml_tweet_timestamp = "2024-10-02 07:15:30"

    handle_ml_output(ml_tweet_content, ml_tweet_location, ml_tweet_link, ml_tweet_timestamp)

    print("Data sent to Firestore.")
