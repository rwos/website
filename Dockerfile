FROM ruby:2.6.2-alpine as build
RUN apk add -u build-base nodejs gsl-dev gsl
RUN gem install jekyll bundler jekyll-feed octopress-minify-html \
    classifier-reborn rb-gsl
WORKDIR /website

FROM ruby:2.6.2-alpine as prod-build
RUN apk add -u build-base nodejs gsl-dev gsl
RUN gem install jekyll bundler jekyll-feed octopress-minify-html \
    classifier-reborn rb-gsl
WORKDIR /website
COPY ./src /website
RUN jekyll build --lsi

FROM nginx:alpine as prod
COPY --from=prod-build /website/_site /usr/share/nginx/html
