FROM node:current

WORKDIR app

RUN npm install -g nodemon

COPY package.json package-lock.json /app

COPY file.txt /app

COPY db /app/db

COPY src /app/src

RUN npm install

CMD npm start