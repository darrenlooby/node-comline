node-opt
========

Parse command-line into your NodeJS applications.

# node-comline - is a small command-line parser for your NodeJS application.

## Installation

    npm install node-comline

## Bit more detail

Parses your command-line arguments and returns an object with them all in.

## Usage

``` js

var com = require('node-comline');

// The module provides a single function to interact with, that simply returns
// all arguments parsed when the application was run

// By default, "-" and "--" are removed from the begining of
// the arguements provided; so "--that=argument" will return
// {"that":"argument"}

var config = {"removesingles":false, "removedoubles":false};
// Do this to turn that off

//The core function, set to "com()" in this case...
// Will directly return an object of arugment and value pairs

// So...

console.log(com());
// Will return an [object], without any configuration

// Whereas...

console.log(com(config));
// Will return an [object], and take into account the above created configuration


```
## License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/deed.en_GB"><img alt="Creative Commons Licence" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">NodeOpt</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/darrenlooby" property="cc:attributionName" rel="cc:attributionURL">Darren Looby</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/deed.en_GB">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/darrenlooby/node-comline" rel="dct:source">https://github.com/darrenlooby/node-comline</a>.