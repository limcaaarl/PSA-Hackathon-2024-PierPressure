FROM python:3.9-slim

WORKDIR /app

COPY . /app

RUN pip install --no-cache-dir -r requirement.txt

RUN apt-get update && apt-get install -y cron

# Ensure the serviceAccountKey.json file is copied to the container
# (Note: Don't commit this file to version control. Use secrets or environment variables instead in production)
COPY serviceAccountKey.json /app/serviceAccountKey.json

COPY time.sh /app/time.sh
RUN chmod +x /app/time.sh

CMD ["/app/time.sh"]