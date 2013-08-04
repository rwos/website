up: final.tmp
	sudo cp -vuRf final.tmp/. /var/www/website/

# merging generated html with static stuff
final.tmp: generated/index static/*
	mkdir -p final.tmp
	cp --archive static/* static/.h* $@
	cp -R generated/index/* $@

# html generation
generated/index: src/*.rkt src/blog/*.md
	mkdir -p generated
	cd src && racket generate.rkt

.PHONY: clean
clean:
	rm -rf ./final.tmp

.PHONY: nuke
nuke: clean
	rm -rf ./generated

