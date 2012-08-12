# merging generated html with static stuff
final.tmp: generated/index
	mkdir -p final.tmp
	cp -R static/* $@
	cp -R generated/index/* $@

# html generation
generated/index: src/*.rkt
	mkdir -p generated
	cd src && racket make.rkt

.PHONY: clean
clean:
	rm -rf ./generated

