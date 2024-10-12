FROM python:3.9-slim

WORKDIR /app

COPY . /app

RUN pip install --no-cache-dir -r requirement.txt

RUN apt-get update && apt-get install -y cron

COPY time.sh /app/time.sh
RUN chmod +x /app/time.sh

CMD ["/app/time.sh"]