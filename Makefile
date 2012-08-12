FTP = $(shell cat FTP_ACCESS)
# sync to live
# # XXX add --delete
sync: final.tmp
	cd final.tmp && lftp -c " \
		set ftp:list-options -a; \
		set ssl:verify-certificate no; \
		open $(FTP) \
		lcd ./; \
		cd /; \
		mirror --reverse --use-cache --verbose --allow-chown \
			   --allow-suid --no-umask --parallel=9 \
			   --exclude-glob .git/ \
			   --exclude-glob *.swp "

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
	rm -rf ./final.tmp

