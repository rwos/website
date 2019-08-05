FROM ruby:2.6.2-alpine as build
RUN apk add -u build-base nodejs gsl-dev gsl
RUN gem install jekyll bundler jekyll-feed octopress-minify-html \
    classifier-reborn rb-gsl
WORKDIR /website

#FROM openresty/openresty:alpine as prod
#COPY ./nginx.conf /etc/nginx/conf.d/default.conf
FROM nginx:alpine as prod
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./src/_site /usr/share/nginx/html
