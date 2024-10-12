import snscrape.modules.twitter as sntwitter
from transformers import pipeline
import csv

# Step 1: Scrape Tweets using snscrape
def scrape_tweets(keyword, max_tweets=100):
    tweets = []
    for i, tweet in enumerate(sntwitter.TwitterSearchScraper(f'{keyword}').get_items()):
        if i >= max_tweets:
            break
        tweet_data = {
            "date": tweet.date,
            "content": tweet.content,
            "username": tweet.user.username,
            "location": tweet.user.location,
            "coordinates": tweet.coordinates
        }
        tweets.append(tweet_data)
    return tweets

# Step 2: Load the pre-trained LLM for sentiment analysis or text classification
# You can change "sentiment-analysis" to another model depending on your task
classifier = pipeline("sentiment-analysis")  # You can load a custom model here if needed

# Step 3: Classify tweets using the LLM
def classify_threat(tweet):
    result = classifier(tweet['content'])
    label = result[0]['label']  # Get the sentiment label (POSITIVE, NEGATIVE)
    score = result[0]['score']  # Confidence score
    
    # Threat classification logic based on LLM output
    if label == "NEGATIVE" and score > 0.7:
        return "Red"     # High threat level
    elif label == "NEGATIVE" and score > 0.5:
        return "Orange"  # Medium threat level
    else:
        return "Green"   # Low threat level

# Step 4: Save classified tweets to a CSV file
def save_to_csv(tweets, filename='classified_tweets.csv'):
    with open(filename, mode='w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(['Date', 'Content', 'Username', 'Location', 'Threat Level'])
        for tweet in tweets:
            threat_level = classify_threat(tweet)
            writer.writerow([tweet['date'], tweet['content'], tweet['username'], tweet.get('location', 'Unknown'), threat_level])

# Step 5: Main function to scrape, classify, and save to CSV
def main():
    # Define your keywords
    keywords = "storm OR hurricane OR piracy AND damage"

    # Scrape tweets related to the keywords
    sea_threats = scrape_tweets(keywords, max_tweets=100)

    # Save classified tweets to CSV
    save_to_csv(sea_threats, 'classified_tweets.csv')

    print(f"Scraping and classification completed. Results saved to 'classified_tweets.csv'.")

# Run the main function
if __name__ == "__main__":
    main()
