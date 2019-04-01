FROM ruby:2.6.2-alpine as build

RUN apk add -u build-base
RUN gem install jekyll bundler
RUN gem install jekyll-feed
RUN gem install octopress-minify-html

WORKDIR /website
