# wpcli

[![NPM version](https://img.shields.io/npm/v/wpcli.svg)](https://www.npmjs.org/package/wpcli) 
[![Travis Build Status](https://img.shields.io/travis/itgalaxy/wpcli/master.svg?label=build)](https://travis-ci.org/itgalaxy/wpcli) 
[![dependencies Status](https://david-dm.org/itgalaxy/wpcli/status.svg)](https://david-dm.org/itgalaxy/wpcli) 
[![devDependencies Status](https://david-dm.org/itgalaxy/wpcli/dev-status.svg)](https://david-dm.org/itgalaxy/wpcli?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/itgalaxy/wpcli.svg)](https://greenkeeper.io/)

Wrapper to use wp-cli with promises.

## Install

```shell
npm install wpcli --save-dev
```

## Usage

```js
const wpCli = require('wpcli').default;

wpCli('./wp-cli.phar', ['--version'], {
    cwd: 'vendor/bin'
})
    .then((result) => {
        console.log(result);
    });
```

## API

### wpCli(bin, arguments, options)

Same options as [`child_process.execFile`](https://nodejs.org/api/child_process.html#child_process_child_process_execfile_file_args_options_callback).

Think of this as a mix of `child_process.execFile` and `child_process.spawn`.

Returns a [`child_process` instance](https://nodejs.org/api/child_process.html#child_process_class_childprocess), 
which is enhanced to also be a `Promise` for a result `Object` with `stdout` and `stderr` properties.

## Related

-   [wp-cli](https://github.com/wp-cli/wp-cli) - Main package.

## Contribution

Feel free to push your code if you agree with publishing under the MIT license.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
