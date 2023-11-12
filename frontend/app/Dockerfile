FROM alpine:3.17

WORKDIR /app/frontend

COPY package*.json ./

# Install app dependencies
RUN npm install

COPY . .

EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
