FROM node:16.13.1 as build
WORKDIR /app
COPY / ./
COPY package.json .
COPY package-lock.json .
RUN npm install -g @angular/cli
RUN npm install
RUN ng build
COPY . .

FROM nginx:alpine
WORKDIR /app
COPY --from=build /app/dist/cv-austin /usr/share/nginx/html