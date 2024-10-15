# Run this to test whether the firebase connection works
# python app.py

from firebase_config import send_data_to_firestore
import os
import pandas as pd


def handle_ml_output(content, link, timestamp):
    """
    Function to handle the ML output (e.g., warning level) and send it to Firestore.
    """
    data = {
        'content': content,
        'link': link,
        'timestamp': timestamp
    }
    send_data_to_firestore(data)


if __name__ == "__main__":
    # Path to the folder
    folder_path = './positive predictions/'

    # Get all Excel files in the folder
    excel_files = [f for f in os.listdir(folder_path) if f.endswith('.xlsx')]

    # Ensure there are Excel files in the folder
    if not excel_files:
        raise FileNotFoundError("No Excel files found in the directory.")

    # Get the most recently modified Excel file
    latest_file = max([os.path.join(folder_path, f) for f in excel_files], key=os.path.getmtime)

    # Read the latest Excel file
    df_pos = pd.read_excel(latest_file)
    
    print(df_pos.columns)
    for index, row in df_pos.iterrows():
        tweet_content = row['translated_summary']
        tweet_link = row['link']
        tweet_timestamp = row['timestamp']
        handle_ml_output(content=tweet_content, link=tweet_link,  timestamp=tweet_timestamp)
        