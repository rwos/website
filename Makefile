FTP = $(shell cat FTP_ACCESS)
SYNC_EXCLUDE = --exclude-glob .git/ --exclude-glob *.swp --exclude-glob logs --exclude-glob logs/*

# sync witout data
sync-no-data: SYNC_EXCLUDE += --exclude-glob *.png --exclude-glob *.jpg --exclude-glob *.gif --exclude-glob *.ico
sync-no-data: sync

# sync to live
sync: final.tmp
	cd final.tmp && lftp -c " \
		set ftp:list-options -a; \
		set ssl:verify-certificate no; \
		open $(FTP) \
		lcd ./; \
		cd /; \
		mirror --reverse --delete --ignore-time --use-cache --verbose --allow-chown \
			   --allow-suid --no-umask --parallel=9 \
			   $(SYNC_EXCLUDE)"

# sync from live
down:
	cd static && lftp -c " \
		set ftp:list-options -a; \
		set ssl:verify-certificate no; \
		open $(FTP) \
		lcd ./; \
		cd /; \
		mirror --use-cache --verbose --allow-chown \
			   --allow-suid --no-umask --parallel=9"

up: final.tmp
	sudo cp -vuRf final.tmp/. /var/www/website/

# merging generated html with static stuff
final.tmp: generated/index static/* sundown/sundown
	mkdir -p final.tmp
	cp --archive static/* static/.h* $@
	cp -R generated/index/* $@

# html generation
generated/index: src/*.rkt src/blog/*.md src/about.js
	mkdir -p generated
	cd src && racket generate.rkt

sundown/sundown:
	git submodule update
	cd sundown && make

.PHONY: clean
clean:
	rm -rf ./final.tmp

.PHONY: nuke
nuke: clean
	rm -rf ./generated

.PHONY: install
install:
	raco pkg install markdown

build:
	docker build -t website-build --target build .

serve: build
	docker run -it -v "$(PWD)/src:/website" -p 4000:4000 website-build jekyll serve --lsi --host=0.0.0.0
