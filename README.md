# Liip Styleguide

## Project setup

1. Clone the repository
1. `npm install`
1. `npm start`

## Deploy to demo server

**Requirement:** a `demo` entry in your SSH config file describing connection settings to the demo server.

```
npm run build
npm run deploy
```

## Coding style

We lint the JavaScript with EsLint and the Sass with CSSComb. Travis CI automatically run both for every commit & merge requests.

You can manually run them locally:

```bash
npm run lint:js
npm run lint:style
```

Both support an "autofix" mode where it will try to fix all the offenses it can. To do so, run:

```bash
npm run lint:js:fix
npm run lint:style:fix
```

## Help

The Styleguide is built with Fabricator. If you need help on the tool, [read the docs →](http://fbrctr.github.io/docs)
