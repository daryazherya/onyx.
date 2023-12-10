FROM nginx:alpine
# https://hub.docker.com/layers/library/nginx/stable-alpine3.17-slim/images/sha256-7dc1fb53813c6fd41931f53a41738b29949857e1a433d42d515ef6ed329650a8?context=explore
RUN rm -rf /usr/share/nginx/html/*

COPY build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
