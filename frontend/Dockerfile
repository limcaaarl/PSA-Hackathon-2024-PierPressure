FROM node:20-alpine

WORKDIR /app
COPY package.json ./
RUN npm install
RUN npm install -g @angular/cli@18.2.8
RUN npm install chart.js --save
COPY . .
EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
