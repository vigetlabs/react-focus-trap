SHELL := /bin/bash
PATH  := ./node_modules/.bin:$(PATH)

.PHONY: clean test test-watch build package.json javascript release example documentation

all: clean javascript package.json documentation

javascript: $(shell find src -name '*.js*' ! -name '*.test.js*')
	mkdir -p dist
	babel -d dist $^

package.json:
	node -p 'p=require("./package");p.private=undefined;p.scripts=p.devDependencies=undefined;JSON.stringify(p,null,2)' > dist/package.json

documentation: README.md LICENSE.md
	mkdir -p dist
	cp -r $^ dist

release: all
	npm publish dist

release-support:
	make build
	npm publish dist --tag support

example:
	open example/index.html
	webpack -wd

clean:
	rm -rf dist

lint:
	@ eslint {src,test}/**/*.{js,jsx}

test: lint
	NODE_ENV=test karma start --single-run
