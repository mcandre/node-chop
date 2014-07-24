# chop - A chop()/chomp() library for Node.js

# INSTALL

    $ npm install chop

# EXAMPLE

    $ npm test

    > chop@0.0.1 test /Users/andrew/Desktop/src/node-chop
    > node example.js

    Howdy
    Howdy!
    Howdy!

    Howdy!
    Howdy!
    Howdy!

# HOMEPAGE

https://github.com/mcandre/node-chop

# REQUIREMENTS

* [Node.js](http://nodejs.org/) 0.10+

## Optional

* [Ruby](https://www.ruby-lang.org/) 2+
* [Bundler](http://bundler.io/)
* [Cucumber](http://cukes.info/)
* [Guard](http://guardgem.org/)
* [aspelllint](https://github.com/mcandre/aspelllint)

# DEVELOPMENT

## Test

Ensure the example script works as expected:

    $ bundle
    $ cucumber
    Feature: Run example tests

      Scenario: Running example tests            # features/run_example_tests.feature:3
        Given the program has finished           # features/step_definitions/steps.rb:1
        Then the output is correct for each test # features/step_definitions/steps.rb:5

    1 scenario (1 passed)
    2 steps (2 passed)
    0m0.059s

Guard can automatically run testing when the code changes:

    $ bundle
    $ guard -G Guardfile-cucumber
    ...

## Lint

Keep the code tidy:

    $ npm run-script lint

## Spell Check

    $ aspelllint
    ...

## Local CI

Guard can automatically lint when the code changes:

    $ bundle
    $ guard -G Guardfile-lint
    ...

## Git Hooks

See `hooks/`.
