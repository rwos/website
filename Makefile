all:
	cd src && go mod tidy && go fmt ./... && go run main.go
