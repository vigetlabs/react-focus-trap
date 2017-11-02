all: bundle package.json documentation

bundle:
	@ ./bin/bundle

package.json:
	@ node -p 'p=require("./package");p.private=undefined;p.scripts=p.devDependencies=undefined;JSON.stringify(p,null,2)' > dist/package.json

documentation: README.md LICENSE.md
	@ mkdir -p dist
	@ cp -r $^ dist

release: clean all
	@ npm publish dist

prerelease: clean all
	@ npm publish dist --tag beta

clean:
	@ rm -rf dist

.PHONY: clean package.json bundle release documentation
