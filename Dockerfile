FROM node:16-alpine

# Working Directory
WORKDIR /app

# ENV Path
ENV PATH /app/node_modules/.bin:$PATH

# Copy Dependencies
COPY package.json ./
COPY package-lock.json ./

# Install Dependencies
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent

# Copy Webpack File
COPY ./tmp/webpack.config.js ./node_modules/react-scripts/config/webpack.config.js
RUN npm i stream-browserify --save \
        npm i crypto-browserify --save \
        npm i stream-http --save \
        npm i https-browserify --save \
        npm i os-browserify --save
COPY . ./
CMD ["npm", "start"]