FROM node:14.15-alpine as build
WORKDIR /client
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

#run
FROM nginx:stable-alpine
COPY --from=build /client/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]