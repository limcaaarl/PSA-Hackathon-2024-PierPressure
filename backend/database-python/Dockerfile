FROM python:3.9-slim

WORKDIR /app

COPY . /app

RUN pip install --no-cache-dir -r requirements.txt

# Ensure the serviceAccountKey.json file is copied to the container
# (Note: Don't commit this file to version control. Use secrets or environment variables instead in production)
COPY serviceAccountKey.json /app/serviceAccountKey.json

CMD ["python", "app.py"]