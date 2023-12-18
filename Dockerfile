FROM node:21-alpine3.18

WORKDIR /app
COPY . .

RUN npm install

# CMD ["npm", "run", "build"]
RUN npm run build
