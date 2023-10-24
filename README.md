# Liip Styleguide

A living documentation of the components used, essentially, on [liip.ch](https://www.liip.ch). The goal of this documentation is to illustrate all the elements available and therefor have an overview of the style and behavior of the interface of the website.

## Project setup

1. Clone the repository
```bash
git clone git@github.com:liip/styleguide.git
```
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server

Go to [localhost:3000](http://localhost:3000/).

## Build a static version

```bash
npm run build
```

Webpack bundle files in the `dist` folder which is then copied over to the `build` folder where Fractal exports the documentation. We have two different folder to be able to include `dist` within the npm package while ignoring the `build`.

## Release a new version

Bump the version in package.json, update the Changelog, build, commit, tag, push, publish to npm repository and deploy automatically:

```bash
npm run release
```

Package lives at [npmjs.com/package/@liip/styleguide](https://www.npmjs.com/package/@liip/styleguide).
Documentation is deployed to [styleguide.liip.ch](https://styleguide.liip.ch).

## Contribute

### Commit guidelines

Follow the [Angular commit guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) to help generating a clean and readable Changelog.

### Issues

Use [issues](https://github.com/liip/styleguide/issues) to report anything, from bugs to feature requests.

### Code

To contribute to this project, [open a pull request](https://github.com/liip/styleguide/pulls).

If you make changes in the JavaScript, setup [EsLint](https://eslint.org/) in your editor or run `npm run lint` to ensure consistency.

You might be interested in the [coding standards](https://github.com/team-rawbot/coding-standards) applied to this project.
