#################
# Build the app #
#################
FROM node:18-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm install -g @angular/cli
RUN ng build --configuration production --output-path=/dist

################
# Run in NGINX #
################
FROM nginx:alpine
#COPY nginx.conf /etc/nginx/conf.d/default.conf
# copy the custom nginx configuration file to the container in the 
# default location
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /dist /usr/share/nginx/html

# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
