FROM python:3.9-slim

WORKDIR /app

# Copy your files into the Docker container
COPY . /app

# Install the required dependencies
RUN pip install --no-cache-dir -r requirement.txt

# Install cron in the container
RUN apt-get update && apt-get install -y cron

# Copy the serviceAccountKey.json from your host to the container
# (ensure this is excluded from version control)
COPY /path/to/serviceAccountKey.json /app/serviceAccountKey.json

# Make time.sh executable
RUN chmod +x /app/time.sh

# Start time.sh which contains the cron setup
CMD ["/app/time.sh"]