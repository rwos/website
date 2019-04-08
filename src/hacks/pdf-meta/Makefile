GZIPPED=compatibility.js.gz index.html.gz l10n.js.gz pdf.js.gz pdf.worker.js.gz

all: $(GZIPPED)

%.gz: %
	gzip -c $^ > $@

clean:
	rm -f *.gz

