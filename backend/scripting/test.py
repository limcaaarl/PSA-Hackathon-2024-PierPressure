import json
from datetime import datetime


def simulate_task():
    data = {
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "status": "Simulation success",
        "message": "Scraping task completed successfully."
    }

    json_output = json.dumps(data)

    print(json_output)


if __name__ == "__main__":
    simulate_task()
