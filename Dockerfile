FROM nginx:alpine

LABEL maintainer="lonelygriffin@gmail.com"

# add nginx conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY mobile/out /www/mobile
COPY desktop/out /www/desktop

CMD ["nginx", "-g", "daemon off;"]
