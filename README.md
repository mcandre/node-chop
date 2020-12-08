# chop - A chop()/chomp() library for Node.js

# EXAMPLE

```console
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

# DOCUMENTATION

https://mcandre.github.io/node-chop/

# NPM

https://www.npmjs.com/package/chop

# REQUIREMENTS

* [Node.js](http://nodejs.org/) 14.15.1+

## Optional

* [Ruby](https://www.ruby-lang.org/) 2.7+
* [Bundler](http://bundler.io/)
* [Guard](http://guardgem.org/)
* [aspelllint](https://github.com/mcandre/aspelllint)
* [editorconfig-cli](https://github.com/amyboyd/editorconfig-cli) (e.g. `go get github.com/amyboyd/editorconfig-cli`)
* [flcl](https://github.com/mcandre/flcl) (e.g. `go get github.com/mcandre/flcl/...`)

# DEVELOPMENT

## Test

Ensure the logic is correct:

```console
$ grunt test
```

## Lint

Keep the code tidy:

```console
$ grunt lint
```

## Document

```console
$ grunt doc
```

## Spell Check

```
$ grunt aspelllint
```
