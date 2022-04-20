dev: build
	cd src && ./renderer
	cd build && ../src/server

.PHONY: build
build:
	rm -rf build
	cd src && go mod tidy && go fmt ./...
	cd src && go build -o renderer main.go
	cd src && go build -o server server.go

### docker stuff

docker-build:
	rm -rf build
	docker build -t website -f Dockerfile .

docker-run:
	docker run --rm -it -p 8080:8080 website

docker-dev: docker-build docker-run
