# base image
FROM node:9.6.1

# set working directory
RUN mkdir /webapp
WORKDIR /webapp

# add `/webapp/node_modules/.bin` to $PATH
ENV PATH /webapp/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /webapp/package.json

RUN npm install
RUN npm install react-scripts@1.1.1 -g

RUN mkdir /webapp/node_modules
ADD node_modules /webapp/node_modules