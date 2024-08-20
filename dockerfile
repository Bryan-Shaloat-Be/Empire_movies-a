FROM node:18doc AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/empire_movies-a /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]