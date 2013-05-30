# chop - A chop()/chomp() library for Node.js

# DEVELOPMENT

Checkout the code, and install the dependencies:

    $ git clone https://github.com/mcandre/node-chop.git
    $ npm install

# Linting

Keep the code tidy:

    $ npm run-script lint

# EXAMPLE

    $ npm install -g chop
    $ node
    > var chop = require("./chop");
    undefined
    > chop.chop("Howdy!");
    'Howdy'
    > chop.chop("Howdy!\n");
    'Howdy!'
    > chop.chop("Howdy!\n\n");
    'Howdy!\n'
    > chop.chomp("Howdy!\n\n");
    'Howdy!'
    > chop.chomp("Howdy!\r\n");
    'Howdy!'
    > chop.chop("Howdy!\r\n");
    'Howdy!\r'
