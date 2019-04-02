FROM ruby:2.6.2-alpine as build

RUN apk add -u build-base nodejs gsl-dev gsl
RUN gem install jekyll bundler jekyll-feed octopress-minify-html \
    classifier-reborn rb-gsl

WORKDIR /website
