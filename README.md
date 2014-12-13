# chop - A chop()/chomp() library for Node.js

# EXAMPLE

```
$ grunt test
Running "exec:test" (exec) task

> chop@0.0.1 test /Users/andrew/Desktop/src/node-chop
> mocha



  chop
    chop
      ✓ should handle EOLs 
      ✓ should handle no EOLs 
    chomp
      ✓ should handle EOLs 
      ✓ should handle no EOLs 


  4 passing (6ms)


Done, without errors.
```

# HOMEPAGE

https://github.com/mcandre/node-chop

# NPM

https://www.npmjs.com/package/chop

# INSTALL

```
$ npm install [-g] chop
```

# REQUIREMENTS

* [Node.js](http://nodejs.org/) 0.8+

## Optional

* [Ruby](https://www.ruby-lang.org/) 2+
* [Bundler](http://bundler.io/)
* [Guard](http://guardgem.org/)
* [aspelllint](https://github.com/mcandre/aspelllint)

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
