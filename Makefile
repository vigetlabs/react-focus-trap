NPM_BIN   = $$(npm bin)
BABEL     = $(NPM_BIN)/babel
COVERALLS = $(NPM_BIN)/coveralls
KARMA     = $(NPM_BIN)/karma
WEBPACK   = $(NPM_BIN)/webpack

.PHONY: clean test test-coverage build package.json javascript release example documentation

build:
	make clean
	make javascript
	make package.json
	make documentation

javascript: $(shell find src -name '*.js*' ! -name '*.test.js*')
	mkdir -p dist
	$(BABEL) -d dist $^

package.json:
	node -p 'p=require("./package");p.private=undefined;p.scripts=p.devDependencies=undefined;JSON.stringify(p,null,2)' > dist/package.json

documentation: README.md LICENSE.md
	mkdir -p dist
	cp -r $^ dist

release:
	make build
	npm publish dist

example:
	open example/index.html
	$(WEBPACK) -wd

clean:
	rm -rf dist

test:
	NODE_ENV=test $(KARMA) start --single-run

test-watch:
	NODE_ENV=test $(KARMA) start

test-coverage:
	make test
	$(COVERALLS) < coverage/report-lcov/lcov.info
