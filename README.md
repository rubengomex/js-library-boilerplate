# Javascript Library Boilerplate

[![docs](http://inch-ci.org/github/rubengomex/js-library-boilerplate.svg?branch=master)](https://rubengomex.github.io/js-library-boilerplate/)
[![travis build](https://img.shields.io/travis/rubengomex/js-library-boilerplate.svg)](https://travis-ci.org/rubengomex/js-library-boilerplate)
[![codecov coverage](https://img.shields.io/codecov/c/github/rubengomex/js-library-boilerplate.svg)](https://codecov.io/gh/rubengomex/js-library-boilerplate)
[![Maintainability](https://api.codeclimate.com/v1/badges/a30f3e3286b4c0406f5f/maintainability)](https://codeclimate.com/github/rubengomex/js-library-boilerplate/maintainability)
[![downloads](https://img.shields.io/npm/dm/js-library-boilerplate.svg)](https://npm-stat.com/charts.html?package=js-library-boilerplate&from=2017-08-11)
[![node version](https://img.shields.io/node/v/js-library-boilerplate.svg)](https://nodejs.org)
[![MIT Licence](https://img.shields.io/github/license/rubengomex/js-library-boilerplate.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/js-library-boilerplate.png?downloads=true&downloadRank=true&stars=true)](https://npm.im/js-library-boilerplate)

A javascript library boilerplate to start new projects

## Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 67+ ✔                                                                                    | 52+ ✔                                                                                       | 16+ ✔                                                                                    | 54+ ✔                                                                                 | 16+ ✔                                                                              | 11 ✔                                                                                                                         |

## Table of Contents

-   [Features](#features)
-   [Dependencies](#dependencies)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Api](#api)
-   [Development](#development)

## Features

The library includes helper functions to do the following:

> **Note:** Most of them are still in progress to make (sections marked with TODO)

#### Some features

-   Feature topic 1
-   Feature topic 2

## Dependencies

-   To use this library you will need a node version `>= 6.0.0`.

-   Download one of the follows `Node Version Managers` to manage the node versions easily:
    -   [nvm](https://github.com/creationix/nvm/blob/master/README.md)
    -   [n](https://github.com/tj/n)

## Installation

From npm

```bash
$ npm i -S js-library-boilerplate
```

From git

```bash
    $ git clone https://github.com/rubengomex/js-library-boilerplate.git
    $ cd js-library-boilerplate
    $ npm i
```

## Tests

You can run the tests by running the follow command:

```bash
    $ npm t
```

> **Note:** You only can run the tests if you clone the repository from github

## Usage

### ES6

```js
// to import a specific method
import JSLibrary from 'js-library-boilerplate'

const jsLibrary = new JSLibrary({
  token: 'YOUR_TOKEN_HERE'
})

// using  method
jsLibrary.getTodo({ name: 'Incubus' }).then(todo => console.log(todo))
```

### CommonJS

```js
const JSLibrary = require('js-library-boilerplate')

const jsLibrary = new JSLibrary({
  token: 'YOUR_TOKEN_HERE'
})
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="js-library-boilerplate.umd.js"></script>

<!-- to import minified version -->
<script src="js-library-boilerplate.umd.min.js"></script>
```

After that the library will be available to the Global as `JSLibrary`. Follow an example:

```js
const jsLibrary = new JSLibrary({
  token: 'YOUR_TOKEN_HERE'
})

let todo
jsLibrary
  .getTodo({ name: 'Chosen name' })
  .then(_todo => (todo = _todo))
  .catch(err => console.log(err))

console.log(todo)

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await jsLibrary.getTodo({ name: 'Chosen name' })
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
```

> **NOTE:** `async/await` is part of ECMAScript 2017 and is not supported in Internet
> Explorer and older browsers, so use with caution.

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

## Development

See something you think can be improved? Please [open an issue](https://github.com/rubengomex/js-library-boilerplate/issues/new) for that 😎
