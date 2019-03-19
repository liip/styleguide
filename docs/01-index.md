---
title: Overview
---

# Liip Web Styleguide

A living documentation of the components used, essentially, on [liip.ch](https://www.liip.ch). The goal of this documentation is to illustrate all the elements available and therefor have an overview of the style and behavior of the interface of the website.

This project is based on Kanbasu 2 and reuse most of its components. For the sake of clarity, those components are not documented here. You can find a dedicated documentation at [kanbasu.liip.ch/2](http://kanbasu.liip.ch/2/).

[The code](https://github.com/liip/styleguide) is available on Github and licensed under the MIT license.

## Usage

Recommended way is to install with npm:

```bash
npm install @liip/styleguide
```

### With a module bundler such as Webpack

```js
// Load style
import '@liip/styleguide/dist/common.css';

// Load Styleguide module
import Styleguide from '@liip/styleguide';

// Initialize a Contact Form
const form = document.querySelector('.my-contact-form');
new Styleguide.ContactForm(form);
```

### With a script tag

```html
<!-- Load style -->
<link rel="stylesheet" href="node_modules/@liip/styleguide/dist/common.css">

<!-- Expose "Styleguide" globally -->
<script src="node_modules/@liip/styleguide/dist/common.js"></script>

<!-- Initialize a Contact Form -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.my-contact-form');
  new Styleguide.ContactForm(form);
});
</script>
```

## Contribute

### Issues

Use [Github issues](https://github.com/liip/styleguide/issues) to report anything, from bugs to feature requests.

### Code

To contribute to this project, [open a pull request](https://github.com/liip/styleguide/pulls) on GitHub. If you make changes in the JavaScript, setup [EsLint](https://eslint.org/) in your editor or run `npm run lint` to ensure consistency. Also check the [coding standards](https://github.com/team-rawbot/coding-standards) applied to this project before you start.
