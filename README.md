# Frontend Mentor - Stats Preview Card Solution

This is a solution to the [Stats Preview Card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62).

## Table of contents

- [Frontend Mentor - Stats Preview Card Solution](#frontend-mentor---stats-preview-card-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Demo](#demo)
    - [Solution Screenshot](#solution-screenshot)
    - [Built with](#built-with)
    - [Backlog](#backlog)
    - [What I learned](#what-i-learned)
      - [`testing-library`](#testing-library)
      - [`tsconfig.json`](#tsconfigjson)
      - [Import type definitions in a `js` file](#import-type-definitions-in-a-js-file)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

- Build the Order Component which looks as closely as the design template
- Users should be able to see hover states for interactive elements

### Demo

[Solution Demo](https://dazzling-roentgen-c2c3a7.netlify.app)

### Solution Screenshot

![solution](./doc/mobile-screenshot.jpeg)

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/)
- [Material - UI](https://material-ui.com) - React components framework
- [Netlify Static Site Hosting](https://netlify.com)

### Backlog

1. fix overflow for devices smaller than iPhone XS
2. Implement desktop version
3. add jest-tests

### What I learned

#### `testing-library`

- [Queries](https://testing-library.com/docs/queries/about/) - `getBy...`, `queryBy...`, `findBy...`

#### `tsconfig.json`

- If `types` is specified, only packages listed will be included in the global scope. For instance:

```json
{
  "compilerOptions": {
    "types": ["node", "jest", "express"]
  }
}
```

This `tsconfig.json` file will only include `./node_modules/@types/node`, `./node_modules/@types/jest` and `./node_modules/@types/express`. Other packages under `node_modules/@types/*` will not be included.

#### Import type definitions in a `js` file

Add on top of the `js`-file:
`/// <reference types="Cypress" />`

## Acknowledgments

- [How to Test an Application that Changes a CSS Variable](https://www.cypress.io/blog/2020/03/17/how-to-test-an-application-that-changes-css-variable/)
- [Visual Testing](https://docs.cypress.io/guides/tooling/visual-testing#Functional-vs-visual-testing)
