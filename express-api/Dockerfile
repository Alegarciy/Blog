FROM node:16

WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) from express-api directory
COPY express-api/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's code from express-api directory
COPY express-api .

EXPOSE 3000

CMD [ "node", "server.js" ]