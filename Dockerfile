FROM golang:1-alpine AS build
RUN apk add -u make
WORKDIR /app
# dependencies
RUN mkdir /app/src
COPY src/go.mod src/go.sum /app/src
RUN cd src && go mod download && go mod verify
# content
COPY ./src/content /app/src/content
# app
COPY ./ /app
RUN make build
RUN cd /app/src && ./renderer

FROM alpine AS runtime
WORKDIR /app
COPY --from=build /app/build /app
COPY --from=build /app/src/server /app/server
EXPOSE 8080
CMD "/app/server"
