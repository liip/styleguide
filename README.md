# Liip Styleguide

A living documentation of the components used, essentially, on [liip.ch](https://www.liip.ch). The goal of this documentation is to illustrate all the elements available and therefor have an overview of the style and behavior of the interface of the website.

For more information about this project, visit [styleguide.liip.ch](http://styleguide.liip.ch).

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

The output goes to the `dist` directory.

## Release a new version

Bump the version in package.json, update the Changelog, build, commit, tag, push and deploy automatically:

```bash
npm run release [patch|minor|major]
```

Build is done in the `dist` folder and website deployed to [styleguide.liip.ch](https://styleguide.liip.ch).

## Contribute

### Commit guidelines

Follow the [Angular commit guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) to help generating a clean and readable Changelog.

### Issues

Use [issues](https://github.com/liip/styleguide/issues) to report anything, from bugs to feature requests.

### Code

To contribute to this project, [open a pull request](https://github.com/liip/styleguide/pulls).

If you make changes in the JavaScript, setup [EsLint](https://eslint.org/) in your editor or run `npm run lint` to ensure consistency.

You might be interested in the [coding standards](https://github.com/team-rawbot/coding-standards) applied to this project.
