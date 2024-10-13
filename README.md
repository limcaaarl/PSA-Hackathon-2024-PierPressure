# Pier Pressure - Early Threat Warning System

*PSA Hackathon: Code Sprint*

## Team Name: Pier Pressure

**Theme 1: Resilient Port Operations Globally**

### Project Overview

As global port operators and supply chain solutions providers, PSA faces growing challenges in maintaining resilient
port operations due to unpredictable threats such as the Red Sea crisis. These volatile events call for innovative and
AI-driven solutions to optimize port resilience and efficiency across the global network.

### Objective

The objective of this project is to develop an **Early Threat Warning System** that identifies potential sea-based
threats (such as terrorist activities or other disturbances) before they happen, enabling preemptive actions.

---

### Key Features

| Feature                                 | Description                                                                                                                       |
|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| **Automated Web Scraper**               | Collects real-time data on sea and terrorist threats through social media platforms.                                              |
| **Training Large Language Model (LLM)** | Uses an LLM to analyze incoming data from the web scraper and detect patterns that could signify potential threats.               |
| **Sentiment Analysis of Live Tweets**   | Evaluates public sentiment in real-time to help identify possible threats through social media platforms.                         |
| **Smart Dashboard**                     | Provides a centralized interface for visualizing detected threats, with alerts to notify decision-makers of high-risk situations. |

### System Workflow

1. **Data Collection**: Real-time data is scraped from social media platforms to identify mentions of potential threats
   in maritime regions.
2. **Data Processing**: The scraped data is analyzed using a pre-trained LLM to detect patterns or key phrases
   associated with terrorist threats or attacks.
3. **Sentiment Analysis**: Tweets and social media posts are evaluated for sentiment, identifying early signs of fear,
   tension, or unrest.
4. **Threat Visualization**: The dashboard displays the results, with clear alerts and threat levels to help port
   operators respond quickly.

---

### Technology Stack

- **Backend**: Python, Flask
- **Web Scraper**: 
- **Language Model**: LLama 3
- **Database**: Firebase, Firestore
- **Dashboard**: HTML, CSS, JavaScript, Angular

---

### Get Started Guide

#### Step 1: Clone the repository

```bash
git clone https://github.com/limcaaarl/PierPressure.git
```

#### Step 2: Set up Firebase Configuration for Backend

- Go to `root/backend/scripting/`.
- Create a file named `serviceAccountKey.json`.
- This file should contain your Firebase credentials in the following format:
```json
{
  "type": "service_account",
  "project_id": "your_project_id",
  "private_key_id": "your_private_key_id",
  "private_key": "your_private_key",
  "client_email": "your_client_email",
  "client_id": "your_client_id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/your_project_id"
}
```
#### Step 3: Set up Firebase Configuration for Frontend

- Go to `root/frontend/src/app/`.
- Create a file named `firebase.config.ts`.
- This file should contain your Firebase credentials in the following format:
```typescript
export const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_auth_domain",
  projectId: "your_project_id",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "your_messaging_sender_id",
  appId: "your_app_id"
};
```

#### Step 4: Build the Docker containers
```bash
docker compose build
```

#### Step 5: Run the Docker containers
```bash
docker compose up -d
```

#### Step 6: Access the dashboard
- Open your browser and go to `http://localhost:4200/`. You will be directed to the login page. Sign up using an email and password to view the dashboard.

#### Step 7: Stop the containers
```bash
docker compose down -v
```

---

### Team

- **Team Name**: Pier Pressure
- **Members**: Carl, Hari, Nigel, Khoon Sun

---
