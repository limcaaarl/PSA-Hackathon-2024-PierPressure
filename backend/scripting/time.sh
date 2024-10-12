#!/bin/bash

# Install required dependencies
pip install -r requirement.txt

# Run the test.py script and save output in JSON format
# python3 test.py >> output.json 2>> logfile.log

# Add cron job
echo "*/15 * * * * /usr/bin/python3 /app/test.py >> /app/output.json 2>> /app/logfile.log" | crontab -

Start cron service in foreground
cron -f