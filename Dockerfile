FROM node:10-alpine
RUN apk add --no-cache git
RUN apk add --no-cache openssh
RUN mkdir -p /src/app
RUN git clone https://github.com/weto/gestaolivros.git /src/app
WORKDIR /src/app
RUN npm install
COPY . /src/app
EXPOSE 3000
CMD [ "npm", "start" ]
