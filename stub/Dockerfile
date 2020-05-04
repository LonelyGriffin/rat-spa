FROM nginx:alpine

LABEL maintainer="lonelygriffin@gmail.com"

# add nginx conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY out /www/stub

CMD ["nginx", "-g", "daemon off;"]
