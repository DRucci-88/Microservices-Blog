# Specify a base image
FROM node:16-alpine3.14

#https://stackoverflow.com/questions/57534295/npm-err-tracker-idealtree-already-exists-while-creating-the-docker-image-for
WORKDIR /app

# Install some depedencies

COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default Command
CMD [ "npm", "start" ]