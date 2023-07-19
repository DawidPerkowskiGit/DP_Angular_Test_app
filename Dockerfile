FROM node:16-alpine3.17 as build
WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install
COPY . .
RUN ng build

FROM nginx as runtime
COPY --from=build /app/dist/hotelinventoryapp /usr/share/nginx/html