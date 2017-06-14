# chop - A chop()/chomp() library for Node.js

# EXAMPLE

```
$ node
> var chop = require("chop");
> chop.chop("abc\n");
'abc'
> chop.chop("abc\r\n");
'abc\r'
> chop.chop("abc");
'ab'
> chop.chomp("abc\n");
'abc'
> chop.chomp("abc\r\n");
'abc'
> chop.chomp("abc");
'abc'
```

# HOMEPAGE

https://github.com/mcandre/node-chop

# NPM

https://www.npmjs.com/package/chop

# REQUIREMENTS

* [Node.js](http://nodejs.org/) 0.11.6+

## Optional

* [Ruby](https://www.ruby-lang.org/) 2.3+
* [Bundler](http://bundler.io/)
* [Guard](http://guardgem.org/)
* [aspelllint](https://github.com/mcandre/aspelllint)
* [editorconfig-cli](https://github.com/amyboyd/editorconfig-cli) (e.g. `go get github.com/amyboyd/editorconfig-cli`)
* [flcl](https://github.com/mcandre/flcl) (e.g. `go get github.com/mcandre/flcl/...`)

# DEVELOPMENT

## Test

Ensure the logic is correct:

```
$ grunt test
...
```

Guard can automatically run testing when the code changes:

```
$ bundle
$ guard -G Guardfile
...
```

## Lint

Keep the code tidy:

```
$ grunt lint
```

## Spell Check

```
$ grunt aspelllint
```

## Local CI

Guard can automatically lint when the code changes:

```
$ bundle
$ guard -G Guardfile-lint
...
```

## Git Hooks

See `hooks/`.
