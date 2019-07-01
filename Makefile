build:
	docker build -t website-build --target build .

serve: build
	docker run -it \
		-v "$(PWD)/src:/website" -p 4000:4000 \
		website-build \
		jekyll serve --lsi --host=0.0.0.0

build-prod:
	docker build -t website-prod --target prod .

serve-prod: build-prod
	docker run -it \
		-p 8080:80 \
		website-prod

lint: bin/deadlink-check
	bin/deadlink-check
