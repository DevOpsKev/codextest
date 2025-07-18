# Stage 1: Build the Angular app
FROM node:20 as build
WORKDIR /usr/src/app
COPY mailbox-app/package*.json ./mailbox-app/
WORKDIR /usr/src/app/mailbox-app
RUN npm install
COPY mailbox-app/ ./
RUN npm run build -- --configuration production

# Stage 2: Run the compiled app using nginx
FROM nginx:alpine
COPY --from=build /usr/src/app/mailbox-app/dist/mailbox-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
