# [3.3.0](https://github.com/liip/styleguide/compare/3.2.0...3.3.0) (2019-08-16)


### Features

* **icons:** add « prototyping » icon ([20d0b70](https://github.com/liip/styleguide/commit/20d0b70))



# [3.2.0](https://github.com/liip/styleguide/compare/3.1.0...3.2.0) (2019-06-25)


### Features

* **Navbar:** allow tu customize collapsing breakpoint ([bb69b76](https://github.com/liip/styleguide/commit/bb69b76))



# [3.1.0](https://github.com/liip/styleguide/compare/3.0.2...3.1.0) (2019-06-24)


### Features

* allow to customize Sass assets paths ([d43f32f](https://github.com/liip/styleguide/commit/d43f32f))



## [3.0.2](https://github.com/liip/styleguide/compare/3.0.1...3.0.2) (2019-05-17)



## [3.0.1](https://github.com/liip/styleguide/compare/3.0.0...3.0.1) (2019-05-14)


### Bug Fixes

* **Typography:** drop difficult to read uppercased texts ([11962d5](https://github.com/liip/styleguide/commit/11962d5))



# [3.0.0](https://github.com/liip/styleguide/compare/2.1.0...3.0.0) (2019-05-14)


### Features

* **Expertise Tile:** Contain text/icon size on large screens ([4407fbb](https://github.com/liip/styleguide/commit/4407fbb))
* **Typography:** Replace Etica font by Archivo ([e76e0c9](https://github.com/liip/styleguide/commit/e76e0c9))
* Add new alternate colors ([2860c03](https://github.com/liip/styleguide/commit/2860c03))


### Removals

* **Navbar:** Drop expertise variant ([fee435f](https://github.com/liip/styleguide/commit/fee435f))


### BREAKING CHANGES

* **Typography:** Etica font has been replaced by Archivo, assets must be updated and mentions of the previous font replaced.
* **Navbar:** Navbar “expertise” variant with toggle to display expertises reel has been removed.



# [2.1.0](https://github.com/liip/styleguide/compare/2.0.2...2.1.0) (2019-03-21)


### Features

* Add Breadcrumb component ([4394320](https://github.com/liip/styleguide/commit/4394320))
* Add subtitle helper class ([d79b94b](https://github.com/liip/styleguide/commit/d79b94b))



## [2.0.2](https://github.com/liip/styleguide/compare/2.0.1...2.0.2) (2019-03-20)


### Bug Fixes

* avoid prism error caused by missing markup-templating ([4178401](https://github.com/liip/styleguide/commit/4178401))



## [2.0.1](https://github.com/liip/styleguide/compare/2.0.0...2.0.1) (2019-01-25)


### Features

* **Haiku:** increase negative variant contrast ([02595a1](https://github.com/liip/styleguide/commit/02595a1))



# [2.0.0](https://github.com/liip/styleguide/compare/2.0.0-beta.2...2.0.0) (2019-01-23)


### Features

* Add Teal & Agile icon ([05d7d5f](https://github.com/liip/styleguide/commit/05d7d5f))



# [2.0.0-beta.2](https://github.com/liip/styleguide/compare/2.0.0-beta.1...2.0.0-beta.2) (2019-01-23)



# [2.0.0-beta.1](https://github.com/liip/styleguide/compare/2.0.0-beta.0...2.0.0-beta.1) (2019-01-22)


### Features

* add favicon.ico to the build ([704e6ad](https://github.com/liip/styleguide/commit/704e6ad))



# [2.0.0-beta.0](https://github.com/liip/styleguide/compare/1.3.3...2.0.0-beta.0) (2019-01-22)


### Code Refactoring

* **Accordion:** Remove unused composant ([d3d2f08](https://github.com/liip/styleguide/commit/d3d2f08))


* Update Webpack, Babel & other dependencies ([bf7f1e2](https://github.com/liip/styleguide/commit/bf7f1e2))


### BREAKING CHANGES

* Library is now exposed as an UMD module under the `Styleguide` namespace instead of `Toolkit`. Advanced Polyfills such as Promise or Fetch have been removed, you must polyfill these manually on your own depending on your needs.
* **Accordion:** Accordion component has been removed



<a name="1.3.3"></a>
## [1.3.3](https://github.com/liip/styleguide/compare/1.3.2...1.3.3) (2018-09-04)


### Features

* **Expertises:** Add data science icon ([5abf269](https://github.com/liip/styleguide/commit/5abf269))



<a name="1.3.2"></a>
## [1.3.2](https://github.com/liip/styleguide/compare/1.3.1...1.3.2) (2018-09-03)


### Features

* **Expertises:** add content icon ([8ae8d39](https://github.com/liip/styleguide/commit/8ae8d39))



<a name="1.3.1"></a>
## [1.3.1](https://github.com/liip/styleguide/compare/1.3.0...1.3.1) (2018-08-27)


### Bug Fixes

* **wysiwyg:** prevent invisibility of embeds within figures ([89eb0aa](https://github.com/liip/styleguide/commit/89eb0aa))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/liip/styleguide/compare/1.2.0...1.3.0) (2018-08-27)


### Features

* **wysiwyg:** add support for figure with caption ([8eb113c](https://github.com/liip/styleguide/commit/8eb113c))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/liip/styleguide/compare/1.1.5...1.2.0) (2018-07-10)


### Features

* **Code:** Add syntax highlighting for Kotlin ([0ec6c33](https://github.com/liip/styleguide/commit/0ec6c33))
* **Footer:** Reorganize to allow more navigation items ([66344d8](https://github.com/liip/styleguide/commit/66344d8))



<a name="1.1.5"></a>
## [1.1.5](https://github.com/liip/styleguide/compare/1.1.4...1.1.5) (2018-06-05)


### Bug Fixes

* **Brand:** Remove state change on non-interactive elements ([52257d3](https://github.com/liip/styleguide/commit/52257d3))
* **Navbar:** Ensure style matches scroll position on page load ([deaf2ec](https://github.com/liip/styleguide/commit/deaf2ec))


### Features

* **Expertises:** Add SEA icon ([2582f87](https://github.com/liip/styleguide/commit/2582f87))



<a name="1.1.4"></a>
## [1.1.4](https://github.com/liip/styleguide/compare/1.1.3...1.1.4) (2018-04-24)


### Features

* **wysiwyg:** Style blockquotes ([25b70e6](https://github.com/liip/styleguide/commit/25b70e6))



<a name="1.1.3"></a>
## [1.1.3](https://github.com/liip/styleguide/compare/1.1.2...1.1.3) (2018-04-09)


### Features

* **wysiwyg:** Center images on the horizontal axis ([176c2fc](https://github.com/liip/styleguide/commit/176c2fc))



<a name="1.1.2"></a>
## [1.1.2](https://github.com/liip/styleguide/compare/1.1.1...1.1.2) (2018-04-09)


### Features

* **wysiwyg:** Remove first/last element top/bottom margins ([768b4df](https://github.com/liip/styleguide/commit/768b4df))



## 1.1.1

* Review liiper cards line-height and margins to allow extra content

# 1.1.0
* Add phone field to contact form
* Add “Home” example page

## 1.0.2
* Add table component and auto-style table inside wysiwyg
* Enable Kanbasu table responsive component

## 1.0.1
* Add LinkedIn svg icon
* Add title to all svg icons
* Update footer layout with language switcher as a select and LinkedIn icon

# 1.0.0
Initial release
