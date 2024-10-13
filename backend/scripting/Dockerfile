FROM python:3.9-slim

WORKDIR /app
COPY . /app

RUN pip install --no-cache-dir -r requirement.txt

RUN apt-get update && apt-get install -y cron

RUN which python3

# Copy the serviceAccountKey.json from your host to the container
# (ensure this is excluded from version control)
COPY serviceAccountKey.json /app/serviceAccountKey.json

# Add the cron job directly during build - need to change it to every 15 minutes
RUN echo "*/1 * * * * /usr/local/bin/python3 /app/test.py >> /app/output.json 2>> /app/logfile.log" | crontab -

# Start the cron service in foreground mode
CMD ["cron", "-f"]