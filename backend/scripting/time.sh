#!/bin/bash

# Install required dependencies
pip install -r requirement.txt

# Add cron job - the test.py need to change to scraper_lim.py
echo "*/1 * * * * /usr/bin/python3 /app/test.py >> /app/output.json 2>> /app/logfile.log" | crontab -

# Start cron service in the foreground
cron -f