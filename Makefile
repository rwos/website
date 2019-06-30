build:
	docker build -t website-build --target build .

serve: build
	docker run -it -v "$(PWD)/src:/website" -p 4000:4000 website-build jekyll serve --lsi --host=0.0.0.0

lint: bin/deadlink-check
	bin/deadlink-check

build-prod:
	docker build -t website .
