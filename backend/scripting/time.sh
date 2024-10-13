#!/bin/bash

# Install required dependencies (optional step for dependencies installed inside Docker)
pip install -r requirement.txt

# Add cron job that runs every minute and logs output to output.json and logfile.log
echo "*/1 * * * * /usr/bin/python3 /app/test.py >> /app/output.json 2>> /app/logfile.log" | crontab -

# Start cron in the foreground
cron -f