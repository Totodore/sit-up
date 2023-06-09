FROM node:18-alpine as build

WORKDIR /build

COPY . .

RUN yarn && yarn build

FROM nginx:latest

WORKDIR /app

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build /build/dist /app/

EXPOSE 80