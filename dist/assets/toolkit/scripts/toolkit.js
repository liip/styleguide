/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(24);
	
	__webpack_require__(19);
	
	__webpack_require__(11);
	
	__webpack_require__(13);
	
	__webpack_require__(14);
	
	__webpack_require__(15);
	
	__webpack_require__(12);
	
	__webpack_require__(16);
	
	__webpack_require__(17);
	
	__webpack_require__(18);
	
	__webpack_require__(20);
	
	__webpack_require__(21);
	
	__webpack_require__(22);
	
	__webpack_require__(23);
	
	__webpack_require__(8);
	
	var _multiplier = __webpack_require__(5);
	
	var _multiplier2 = _interopRequireDefault(_multiplier);
	
	var _navbar = __webpack_require__(6);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	var _weather = __webpack_require__(9);
	
	var _weather2 = _interopRequireDefault(_weather);
	
	var _accordion = __webpack_require__(2);
	
	var _accordion2 = _interopRequireDefault(_accordion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Components
	window.Toolkit = {
	  Multiplier: _multiplier2.default,
	  Navbar: _navbar2.default,
	  Weather: _weather2.default,
	  Accordion: _accordion2.default
	};
	
	// Globals
	// Vendors

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*jshint browser:true, node:true*/
	
	'use strict';
	
	/**
	 * @preserve Create and manage a DOM event delegator.
	 *
	 * @version 0.3.0
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
	var Delegate = __webpack_require__(10);
	
	module.exports = function(root) {
	  return new Delegate(root);
	};
	
	module.exports.Delegate = Delegate;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(1);
	
	var _domDelegate2 = _interopRequireDefault(_domDelegate);
	
	var _utils = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Accordion = function () {
	  function Accordion(el) {
	    _classCallCheck(this, Accordion);
	
	    this._accordion = el;
	    this._list = this._accordion.querySelector('.accordion-list');
	    this._elements = [].concat(_toConsumableArray(this._list.querySelectorAll('.accordion__collapse')));
	    this._nav = this._accordion.querySelector('.accordion-nav');
	    this._current = this._list.querySelector('.accordion-list__item.is-active');
	
	    this._delegate = new _domDelegate2.default(this._accordion);
	    this._debounceResize = this._debounceResize.bind(this);
	
	    this._hardcodeDimensions();
	    this._addEventListeners();
	  }
	
	  _createClass(Accordion, [{
	    key: 'destroy',
	    value: function destroy() {
	      this._removeEventListeners();
	      delete this._accordion;
	      delete this._list;
	      delete this._elements;
	      delete this._nav;
	      delete this._current;
	      delete this._delegate;
	      delete this._debounceResize;
	    }
	  }, {
	    key: '_addEventListeners',
	    value: function _addEventListeners() {
	      this._delegate.on('click', '[data-toggle="accordion"]', this._handleShow.bind(this));
	      window.addEventListener('resize', this._debounceResize);
	    }
	  }, {
	    key: '_removeEventListeners',
	    value: function _removeEventListeners() {
	      this._delegate.destroy();
	      window.removeEventListener('resize', this._debounceResize);
	    }
	  }, {
	    key: '_debounceResize',
	    value: function _debounceResize() {
	      (0, _utils.debounce)(this._hardcodeDimensions.bind(this));
	    }
	
	    /**
	     * Hardcode the height one both collapse elements and the whole accordion
	     */
	
	  }, {
	    key: '_hardcodeDimensions',
	    value: function _hardcodeDimensions() {
	      var currentHeight = this._current && this._current.getBoundingClientRect().height || 0;
	      var tallestHeight = 0;
	
	      // Hardcode the height of each collapse to allow CSS transition
	      this._elements.forEach(function (el) {
	        el.classList.remove('is-ready');
	        el.style.height = 'auto';
	
	        var itemHeight = el.closest('.accordion-list__item').getBoundingClientRect().height;
	        var collapseHeight = el.getBoundingClientRect().height;
	
	        el.style.height = collapseHeight + 'px';
	        el.classList.add('is-ready');
	        tallestHeight = Math.max(tallestHeight, itemHeight);
	      });
	
	      // Set a min-height on the container to avoid wiggles during transitions
	      this._accordion.style.minHeight = 'auto';
	      var minHeight = this._accordion.getBoundingClientRect().height - currentHeight + tallestHeight + 18;
	      this._accordion.style.minHeight = minHeight + 'px';
	    }
	  }, {
	    key: '_handleShow',
	    value: function _handleShow(e, el) {
	      e.preventDefault();
	
	      var target = el.getAttribute('href');
	
	      this._updateList(target);
	      this._updateNav(target);
	    }
	  }, {
	    key: '_updateList',
	    value: function _updateList(target) {
	      var targetEl = this._accordion.querySelector(target);
	      var currentEl = this._accordion.querySelector('.accordion-list__item.is-active');
	
	      if (currentEl) {
	        currentEl.classList.remove('is-active');
	      }
	
	      if (targetEl) {
	        targetEl.classList.toggle('is-active');
	        this._current = targetEl;
	        this._accordion.dataset.current = [].concat(_toConsumableArray(this._list.children)).indexOf(this._current) + 1;
	      }
	    }
	  }, {
	    key: '_updateNav',
	    value: function _updateNav(target) {
	      if (!this._nav) {
	        return;
	      }
	
	      var targetEl = this._nav.querySelector('a[href="' + target + '"]');
	      var currentEl = this._nav.querySelector('.accordion-nav__link.is-active');
	
	      if (currentEl) {
	        currentEl.classList.remove('is-active');
	      }
	
	      if (targetEl) {
	        targetEl.classList.toggle('is-active');
	      }
	    }
	  }]);
	
	  return Accordion;
	}();
	
	exports.default = Accordion;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateIcon = updateIcon;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * Change an SVG icon source
	 * @param  {DOMElement} el    The SVG element
	 * @param  {String}     icon  The icon ID to use
	 */
	function updateIcon(el, icon) {
	  var _el$classList;
	
	  var use = el.querySelector('use');
	  var classes = el.getAttribute('class').split(' ');
	  var modifiers = classes.filter(function (className) {
	    return className.match(/icon--/);
	  });
	
	  // Clean-up all `icon--` classes
	  (_el$classList = el.classList).remove.apply(_el$classList, _toConsumableArray(modifiers));
	  el.classList.add('icon--' + icon);
	
	  use.setAttribute('xlink:href', '#' + icon);
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.debounce = debounce;
	var timeout = void 0;
	
	/**
	 * Wait to execute a function if it’s called again in the given timeframe
	 * @param  {Function}   callback  The function to call when the delay is over
	 * @param  {Number}     delay     Delay before calling the function in milliseconds
	 */
	function debounce(callback) {
	  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
	
	  if (timeout) {
	    clearTimeout(timeout);
	  }
	
	  timeout = setTimeout(callback, delay);
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Multiplier = function () {
	  function Multiplier(el, imageUrl) {
	    _classCallCheck(this, Multiplier);
	
	    if (!el || !imageUrl) {
	      return;
	    }
	
	    this._el = el;
	    this._imageUrl = imageUrl;
	    this._width = 0;
	    this._height = 0;
	
	    this._loadImage();
	  }
	
	  _createClass(Multiplier, [{
	    key: '_loadImage',
	    value: function _loadImage() {
	      var _this = this;
	
	      this.image = new Image();
	      this.image.addEventListener('load', function () {
	        _this._updateDimensions();
	        _this._paint();
	      }, false);
	      this.image.src = this._imageUrl;
	    }
	  }, {
	    key: '_updateDimensions',
	    value: function _updateDimensions() {
	      this._width = this._el.width = this.image.width;
	      this._height = this._el.height = this.image.height;
	    }
	  }, {
	    key: '_paint',
	    value: function _paint() {
	      if (this._el.getContext) {
	        var context = this._el.getContext('2d');
	
	        // Create the gradient
	        var gradient = context.createLinearGradient(0.7 * this._width, 0.125 * this._height, 0.924 * this._width, 0.813 * this._height);
	        gradient.addColorStop(0, '#6EA644');
	        gradient.addColorStop(1, '#A4C339');
	        context.fillStyle = gradient;
	        context.fillRect(0, 0, this._width, this._height);
	
	        // Set blend mode to multiply
	        context.globalCompositeOperation = 'multiply';
	
	        // Draw the requested image
	        context.drawImage(this.image, 0, 0, this._width, this._height);
	      }
	    }
	  }]);
	
	  return Multiplier;
	}();
	
	exports.default = Multiplier;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(1);
	
	var _domDelegate2 = _interopRequireDefault(_domDelegate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MIN_HEIGHT = 80;
	var MAX_HEIGHT = 160;
	
	var Navbar = function () {
	  function Navbar(el) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	      mode: 'instant'
	    };
	
	    _classCallCheck(this, Navbar);
	
	    this._el = el;
	    this._options = options;
	
	    this._logoEl = this._el.querySelector('.logo');
	    this._isNegative = this._el.classList.contains('navbar--negative');
	
	    switch (this._options.mode) {
	      case 'window':
	        this._threshold = window.innerHeight;
	        break;
	      default:
	        this._threshold = MAX_HEIGHT;
	        break;
	    }
	
	    this._addEventListeners();
	  }
	
	  _createClass(Navbar, [{
	    key: '_addEventListeners',
	    value: function _addEventListeners() {
	      window.addEventListener('scroll', this._handleChange.bind(this));
	      window.addEventListener('resize', this._handleChange.bind(this));
	    }
	  }, {
	    key: '_handleChange',
	    value: function _handleChange() {
	      if (window.requestAnimationFrame) {
	        window.requestAnimationFrame(this._handleScroll.bind(this));
	      } else {
	        this._handleScroll();
	      }
	    }
	  }, {
	    key: '_handleScroll',
	    value: function _handleScroll() {
	      var scrollY = window.scrollY;
	      var animationBase = Math.max(Math.min(1, (scrollY - this._threshold + MAX_HEIGHT) / MIN_HEIGHT), 0);
	      var logoScale = 1 - animationBase / 2;
	      var navbarHeight = Math.max(Math.min(MAX_HEIGHT, this._threshold - scrollY), 60);
	
	      if (matchMedia('(min-width: 769px)').matches) {
	        this._logoEl.style.transform = 'scale(' + logoScale + ')';
	        this._el.style.height = navbarHeight + 'px';
	      } else {
	        this._logoEl.removeAttribute('style');
	        this._el.removeAttribute('style');
	      }
	
	      if (this._threshold - scrollY <= MIN_HEIGHT) {
	        this._logoEl.classList.add('logo--shrinked');
	      } else {
	        this._logoEl.classList.remove('logo--shrinked');
	      }
	
	      if (this._threshold - scrollY <= MIN_HEIGHT / 2) {
	        if (this._isNegative) {
	          this._el.classList.remove('navbar--negative');
	        }
	        this._el.classList.add('navbar--overlay');
	      } else {
	        if (this._isNegative) {
	          this._el.classList.add('navbar--negative');
	        }
	        this._el.classList.remove('navbar--overlay');
	      }
	    }
	  }]);
	
	  return Navbar;
	}();
	
	/**
	 * Automatically handle toggle for all navbars
	 */
	
	
	exports.default = Navbar;
	document.addEventListener('DOMContentLoaded', function () {
	  new _domDelegate2.default(document).on('click', '.navbar__toggle', function (e, el) {
	    var navbar = el.closest('.navbar');
	    navbar.classList.toggle('navbar--expanded');
	  });
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
	 */
	
	if (window.Element && !Element.prototype.closest) {
	  Element.prototype.closest = function (s) {
	    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
	        i,
	        el = this;
	    do {
	      i = matches.length;
	      while (--i >= 0 && matches.item(i) !== el) {};
	    } while (i < 0 && (el = el.parentElement));
	    return el;
	  };
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(7);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ui = __webpack_require__(3);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ENDPOINT = 'http://api.openweathermap.org/data/2.5/group';
	var ICONS = {
	  '01d': 'sunny',
	  '02d': 'day-cloud',
	  '03d': 'cloud',
	  '04d': 'cloud-double',
	  '09d': 'rain',
	  '10d': 'day-rain',
	  '11d': 'day-thunder-storm',
	  '13d': 'snow',
	  '50d': 'mist',
	  '01n': 'night',
	  '02n': 'night-cloud',
	  '03n': 'cloud',
	  '04n': 'cloud-double',
	  '09n': 'rain',
	  '10n': 'night-rain',
	  '11n': 'night-thunder-storm',
	  '13n': 'snow',
	  '50n': 'mist'
	};
	
	var Weather = function () {
	  function Weather(appId) {
	    _classCallCheck(this, Weather);
	
	    this._appId = appId;
	    this._cities = [];
	    this._elements = [];
	    this._data = {};
	  }
	
	  /**
	   * Init all .weather elements in the page
	   */
	
	
	  _createClass(Weather, [{
	    key: 'initAll',
	    value: function initAll() {
	      var _this = this;
	
	      this._elements = [].concat(_toConsumableArray(document.querySelectorAll('.weather')));
	
	      this._elements.forEach(function (el) {
	        _this.init(el, false);
	      });
	
	      this._fetch().then(this._updateIcons.bind(this));
	    }
	
	    /**
	     * Init the given element and then possibly fetch the weather
	     */
	
	  }, {
	    key: 'init',
	    value: function init(el) {
	      var fetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	      var city = el.dataset.city;
	
	      if (city) {
	        this._elements.push(el);
	        this._cities.push(city);
	
	        if (fetch) {
	          this._fetch().then(this._updateIcons.bind(this));
	        }
	      }
	    }
	  }, {
	    key: '_fetch',
	    value: function _fetch() {
	      var _this2 = this;
	
	      return fetch(ENDPOINT + '?id=' + this._cities.join(',') + '&units=metric&appid=' + this._appId).then(function (response) {
	        return response.json();
	      }).then(function (json) {
	        var list = json.list;
	
	        if (list) {
	          list.forEach(function (item) {
	            _this2._data[item.id] = item;
	          });
	        }
	      });
	    }
	  }, {
	    key: '_updateIcons',
	    value: function _updateIcons() {
	      var _this3 = this;
	
	      this._elements.forEach(function (el) {
	        var iconEl = el.querySelector('.weather__icon');
	        var id = el.dataset.city;
	        var weather = _this3._getWeather(id);
	
	        if (weather) {
	          el.setAttribute('title', weather.main);
	        }
	        (0, _ui.updateIcon)(iconEl, _this3._getIcon(id));
	      });
	    }
	  }, {
	    key: '_getWeather',
	    value: function _getWeather(id) {
	      var city = this._data[id];
	      return city && city.weather && city.weather[0];
	    }
	  }, {
	    key: '_getIcon',
	    value: function _getIcon(id) {
	      var weather = this._getWeather(id);
	      return weather ? ICONS[weather.icon] : 'weather-unknown';
	    }
	  }]);
	
	  return Weather;
	}();
	
	exports.default = Weather;

/***/ },
/* 10 */
/***/ function(module, exports) {

	/*jshint browser:true, node:true*/
	
	'use strict';
	
	module.exports = Delegate;
	
	/**
	 * DOM event delegator
	 *
	 * The delegator will listen
	 * for events that bubble up
	 * to the root node.
	 *
	 * @constructor
	 * @param {Node|string} [root] The root node or a selector string matching the root node
	 */
	function Delegate(root) {
	
	  /**
	   * Maintain a map of listener
	   * lists, keyed by event name.
	   *
	   * @type Object
	   */
	  this.listenerMap = [{}, {}];
	  if (root) {
	    this.root(root);
	  }
	
	  /** @type function() */
	  this.handle = Delegate.prototype.handle.bind(this);
	}
	
	/**
	 * Start listening for events
	 * on the provided DOM element
	 *
	 * @param  {Node|string} [root] The root node or a selector string matching the root node
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.root = function(root) {
	  var listenerMap = this.listenerMap;
	  var eventType;
	
	  // Remove master event listeners
	  if (this.rootElement) {
	    for (eventType in listenerMap[1]) {
	      if (listenerMap[1].hasOwnProperty(eventType)) {
	        this.rootElement.removeEventListener(eventType, this.handle, true);
	      }
	    }
	    for (eventType in listenerMap[0]) {
	      if (listenerMap[0].hasOwnProperty(eventType)) {
	        this.rootElement.removeEventListener(eventType, this.handle, false);
	      }
	    }
	  }
	
	  // If no root or root is not
	  // a dom node, then remove internal
	  // root reference and exit here
	  if (!root || !root.addEventListener) {
	    if (this.rootElement) {
	      delete this.rootElement;
	    }
	    return this;
	  }
	
	  /**
	   * The root node at which
	   * listeners are attached.
	   *
	   * @type Node
	   */
	  this.rootElement = root;
	
	  // Set up master event listeners
	  for (eventType in listenerMap[1]) {
	    if (listenerMap[1].hasOwnProperty(eventType)) {
	      this.rootElement.addEventListener(eventType, this.handle, true);
	    }
	  }
	  for (eventType in listenerMap[0]) {
	    if (listenerMap[0].hasOwnProperty(eventType)) {
	      this.rootElement.addEventListener(eventType, this.handle, false);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * @param {string} eventType
	 * @returns boolean
	 */
	Delegate.prototype.captureForType = function(eventType) {
	  return ['blur', 'error', 'focus', 'load', 'resize', 'scroll'].indexOf(eventType) !== -1;
	};
	
	/**
	 * Attach a handler to one
	 * event for all elements
	 * that match the selector,
	 * now or in the future
	 *
	 * The handler function receives
	 * three arguments: the DOM event
	 * object, the node that matched
	 * the selector while the event
	 * was bubbling and a reference
	 * to itself. Within the handler,
	 * 'this' is equal to the second
	 * argument.
	 *
	 * The node that actually received
	 * the event can be accessed via
	 * 'event.target'.
	 *
	 * @param {string} eventType Listen for these events
	 * @param {string|undefined} selector Only handle events on elements matching this selector, if undefined match root element
	 * @param {function()} handler Handler function - event data passed here will be in event.data
	 * @param {Object} [eventData] Data to pass in event.data
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.on = function(eventType, selector, handler, useCapture) {
	  var root, listenerMap, matcher, matcherParam;
	
	  if (!eventType) {
	    throw new TypeError('Invalid event type: ' + eventType);
	  }
	
	  // handler can be passed as
	  // the second or third argument
	  if (typeof selector === 'function') {
	    useCapture = handler;
	    handler = selector;
	    selector = null;
	  }
	
	  // Fallback to sensible defaults
	  // if useCapture not set
	  if (useCapture === undefined) {
	    useCapture = this.captureForType(eventType);
	  }
	
	  if (typeof handler !== 'function') {
	    throw new TypeError('Handler must be a type of Function');
	  }
	
	  root = this.rootElement;
	  listenerMap = this.listenerMap[useCapture ? 1 : 0];
	
	  // Add master handler for type if not created yet
	  if (!listenerMap[eventType]) {
	    if (root) {
	      root.addEventListener(eventType, this.handle, useCapture);
	    }
	    listenerMap[eventType] = [];
	  }
	
	  if (!selector) {
	    matcherParam = null;
	
	    // COMPLEX - matchesRoot needs to have access to
	    // this.rootElement, so bind the function to this.
	    matcher = matchesRoot.bind(this);
	
	  // Compile a matcher for the given selector
	  } else if (/^[a-z]+$/i.test(selector)) {
	    matcherParam = selector;
	    matcher = matchesTag;
	  } else if (/^#[a-z0-9\-_]+$/i.test(selector)) {
	    matcherParam = selector.slice(1);
	    matcher = matchesId;
	  } else {
	    matcherParam = selector;
	    matcher = matches;
	  }
	
	  // Add to the list of listeners
	  listenerMap[eventType].push({
	    selector: selector,
	    handler: handler,
	    matcher: matcher,
	    matcherParam: matcherParam
	  });
	
	  return this;
	};
	
	/**
	 * Remove an event handler
	 * for elements that match
	 * the selector, forever
	 *
	 * @param {string} [eventType] Remove handlers for events matching this type, considering the other parameters
	 * @param {string} [selector] If this parameter is omitted, only handlers which match the other two will be removed
	 * @param {function()} [handler] If this parameter is omitted, only handlers which match the previous two will be removed
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.off = function(eventType, selector, handler, useCapture) {
	  var i, listener, listenerMap, listenerList, singleEventType;
	
	  // Handler can be passed as
	  // the second or third argument
	  if (typeof selector === 'function') {
	    useCapture = handler;
	    handler = selector;
	    selector = null;
	  }
	
	  // If useCapture not set, remove
	  // all event listeners
	  if (useCapture === undefined) {
	    this.off(eventType, selector, handler, true);
	    this.off(eventType, selector, handler, false);
	    return this;
	  }
	
	  listenerMap = this.listenerMap[useCapture ? 1 : 0];
	  if (!eventType) {
	    for (singleEventType in listenerMap) {
	      if (listenerMap.hasOwnProperty(singleEventType)) {
	        this.off(singleEventType, selector, handler);
	      }
	    }
	
	    return this;
	  }
	
	  listenerList = listenerMap[eventType];
	  if (!listenerList || !listenerList.length) {
	    return this;
	  }
	
	  // Remove only parameter matches
	  // if specified
	  for (i = listenerList.length - 1; i >= 0; i--) {
	    listener = listenerList[i];
	
	    if ((!selector || selector === listener.selector) && (!handler || handler === listener.handler)) {
	      listenerList.splice(i, 1);
	    }
	  }
	
	  // All listeners removed
	  if (!listenerList.length) {
	    delete listenerMap[eventType];
	
	    // Remove the main handler
	    if (this.rootElement) {
	      this.rootElement.removeEventListener(eventType, this.handle, useCapture);
	    }
	  }
	
	  return this;
	};
	
	
	/**
	 * Handle an arbitrary event.
	 *
	 * @param {Event} event
	 */
	Delegate.prototype.handle = function(event) {
	  var i, l, type = event.type, root, phase, listener, returned, listenerList = [], target, /** @const */ EVENTIGNORE = 'ftLabsDelegateIgnore';
	
	  if (event[EVENTIGNORE] === true) {
	    return;
	  }
	
	  target = event.target;
	
	  // Hardcode value of Node.TEXT_NODE
	  // as not defined in IE8
	  if (target.nodeType === 3) {
	    target = target.parentNode;
	  }
	
	  root = this.rootElement;
	
	  phase = event.eventPhase || ( event.target !== event.currentTarget ? 3 : 2 );
	  
	  switch (phase) {
	    case 1: //Event.CAPTURING_PHASE:
	      listenerList = this.listenerMap[1][type];
	    break;
	    case 2: //Event.AT_TARGET:
	      if (this.listenerMap[0] && this.listenerMap[0][type]) listenerList = listenerList.concat(this.listenerMap[0][type]);
	      if (this.listenerMap[1] && this.listenerMap[1][type]) listenerList = listenerList.concat(this.listenerMap[1][type]);
	    break;
	    case 3: //Event.BUBBLING_PHASE:
	      listenerList = this.listenerMap[0][type];
	    break;
	  }
	
	  // Need to continuously check
	  // that the specific list is
	  // still populated in case one
	  // of the callbacks actually
	  // causes the list to be destroyed.
	  l = listenerList.length;
	  while (target && l) {
	    for (i = 0; i < l; i++) {
	      listener = listenerList[i];
	
	      // Bail from this loop if
	      // the length changed and
	      // no more listeners are
	      // defined between i and l.
	      if (!listener) {
	        break;
	      }
	
	      // Check for match and fire
	      // the event if there's one
	      //
	      // TODO:MCG:20120117: Need a way
	      // to check if event#stopImmediatePropagation
	      // was called. If so, break both loops.
	      if (listener.matcher.call(target, listener.matcherParam, target)) {
	        returned = this.fire(event, target, listener);
	      }
	
	      // Stop propagation to subsequent
	      // callbacks if the callback returned
	      // false
	      if (returned === false) {
	        event[EVENTIGNORE] = true;
	        event.preventDefault();
	        return;
	      }
	    }
	
	    // TODO:MCG:20120117: Need a way to
	    // check if event#stopPropagation
	    // was called. If so, break looping
	    // through the DOM. Stop if the
	    // delegation root has been reached
	    if (target === root) {
	      break;
	    }
	
	    l = listenerList.length;
	    target = target.parentElement;
	  }
	};
	
	/**
	 * Fire a listener on a target.
	 *
	 * @param {Event} event
	 * @param {Node} target
	 * @param {Object} listener
	 * @returns {boolean}
	 */
	Delegate.prototype.fire = function(event, target, listener) {
	  return listener.handler.call(target, event, target);
	};
	
	/**
	 * Check whether an element
	 * matches a generic selector.
	 *
	 * @type function()
	 * @param {string} selector A CSS selector
	 */
	var matches = (function(el) {
	  if (!el) return;
	  var p = el.prototype;
	  return (p.matches || p.matchesSelector || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector);
	}(Element));
	
	/**
	 * Check whether an element
	 * matches a tag selector.
	 *
	 * Tags are NOT case-sensitive,
	 * except in XML (and XML-based
	 * languages such as XHTML).
	 *
	 * @param {string} tagName The tag name to test against
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesTag(tagName, element) {
	  return tagName.toLowerCase() === element.tagName.toLowerCase();
	}
	
	/**
	 * Check whether an element
	 * matches the root.
	 *
	 * @param {?String} selector In this case this is always passed through as null and not used
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesRoot(selector, element) {
	  /*jshint validthis:true*/
	  if (this.rootElement === window) return element === document;
	  return this.rootElement === element;
	}
	
	/**
	 * Check whether the ID of
	 * the element in 'this'
	 * matches the given ID.
	 *
	 * IDs are case-sensitive.
	 *
	 * @param {string} id The ID to test against
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesId(id, element) {
	  return id === element.id;
	}
	
	/**
	 * Short hand for off()
	 * and root(), ie both
	 * with no parameters
	 *
	 * @return void
	 */
	Delegate.prototype.destroy = function() {
	  this.off();
	  this.root();
	};


/***/ },
/* 11 */
/***/ function(module, exports) {

	(function(Prism) {
		var insideString = {
			variable: [
				// Arithmetic Environment
				{
					pattern: /\$?\(\([\w\W]+?\)\)/,
					inside: {
						// If there is a $ sign at the beginning highlight $(( and )) as variable
						variable: [{
								pattern: /(^\$\(\([\w\W]+)\)\)/,
								lookbehind: true
							},
							/^\$\(\(/,
						],
						number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,
						// Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
						operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
						// If there is no $ sign at the beginning highlight (( and )) as punctuation
						punctuation: /\(\(?|\)\)?|,|;/
					}
				},
				// Command Substitution
				{
					pattern: /\$\([^)]+\)|`[^`]+`/,
					inside: {
						variable: /^\$\(|^`|\)$|`$/
					}
				},
				/\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i
			],
		};
	
		Prism.languages.bash = {
			'shebang': {
				pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,
				alias: 'important'
			},
			'comment': {
				pattern: /(^|[^"{\\])#.*/,
				lookbehind: true
			},
			'string': [
				//Support for Here-Documents https://en.wikipedia.org/wiki/Here_document
				{
					pattern: /((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,
					lookbehind: true,
					greedy: true,
					inside: insideString
				},
				{
					pattern: /(["'])(?:\\\\|\\?[^\\])*?\1/g,
					greedy: true,
					inside: insideString
				}
			],
			'variable': insideString.variable,
			// Originally based on http://ss64.com/bash/
			'function': {
				pattern: /(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,
				lookbehind: true
			},
			'keyword': {
				pattern: /(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,
				lookbehind: true
			},
			'boolean': {
				pattern: /(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,
				lookbehind: true
			},
			'operator': /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
			'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
		};
	
		var inside = insideString.variable[1].inside;
		inside['function'] = Prism.languages.bash['function'];
		inside.keyword = Prism.languages.bash.keyword;
		inside.boolean = Prism.languages.bash.boolean;
		inside.operator = Prism.languages.bash.operator;
		inside.punctuation = Prism.languages.bash.punctuation;
	})(Prism);


/***/ },
/* 12 */
/***/ function(module, exports) {

	Prism.languages.c = Prism.languages.extend('clike', {
		'keyword': /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
		'operator': /\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,
		'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i
	});
	
	Prism.languages.insertBefore('c', 'string', {
		'macro': {
			// allow for multiline macro definitions
			// spaces after the # character compile fine with gcc
			pattern: /(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,
			lookbehind: true,
			alias: 'property',
			inside: {
				// highlight the path of the include statement as a string
				'string': {
					pattern: /(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,
					lookbehind: true
				},
				// highlight macro directives as keywords
				'directive': {
					pattern: /(#\s*)\b(define|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
					lookbehind: true,
					alias: 'keyword'
				}
			}
		},
		// highlight predefined macros as constants
		'constant': /\b(__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|stdin|stdout|stderr)\b/
	});
	
	delete Prism.languages.c['class-name'];
	delete Prism.languages.c['boolean'];


/***/ },
/* 13 */
/***/ function(module, exports) {

	Prism.languages.csharp = Prism.languages.extend('clike', {
		'keyword': /\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,
		'string': [
			/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/,
			/("|')(\\?.)*?\1/
		],
		'number': /\b-?(0x[\da-f]+|\d*\.?\d+f?)\b/i
	});
	
	Prism.languages.insertBefore('csharp', 'keyword', {
		'generic-method': {
			pattern: /[a-z0-9_]+\s*<[^>\r\n]+?>\s*(?=\()/i,
			alias: 'function',
			inside: {
				keyword: Prism.languages.csharp.keyword,
				punctuation: /[<>(),.:]/
			}
		},
		'preprocessor': {
			pattern: /(^\s*)#.*/m,
			lookbehind: true,
			alias: 'property',
			inside: {
				// highlight preprocessor directives as keywords
				'directive': {
					pattern: /(\s*#)\b(define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
					lookbehind: true,
					alias: 'keyword'
				}
			}
		}
	});


/***/ },
/* 14 */
/***/ function(module, exports) {

	Prism.languages.java = Prism.languages.extend('clike', {
		'keyword': /\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
		'number': /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,
		'operator': {
			pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
			lookbehind: true
		}
	});
	
	Prism.languages.insertBefore('java','function', {
		'annotation': {
			alias: 'punctuation',
			pattern: /(^|[^.])@\w+/,
			lookbehind: true
		}
	});


/***/ },
/* 15 */
/***/ function(module, exports) {

	Prism.languages.json = {
	    'property': /"(?:\\.|[^|"])*"(?=\s*:)/ig,
	    'string': /"(?!:)(?:\\.|[^|"])*"(?!:)/g,
	    'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,
	    'punctuation': /[{}[\]);,]/g,
	    'operator': /:/g,
	    'boolean': /\b(true|false)\b/gi,
	    'null': /\bnull\b/gi
	};
	
	Prism.languages.jsonp = Prism.languages.json;


/***/ },
/* 16 */
/***/ function(module, exports) {

	Prism.languages.objectivec = Prism.languages.extend('c', {
		'keyword': /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
		'string': /("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
		'operator': /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
	});


/***/ },
/* 17 */
/***/ function(module, exports) {

	Prism.languages.python= {
		'triple-quoted-string': {
			pattern: /"""[\s\S]+?"""|'''[\s\S]+?'''/,
			alias: 'string'
		},
		'comment': {
			pattern: /(^|[^\\])#.*/,
			lookbehind: true
		},
		'string': {
			pattern: /("|')(?:\\\\|\\?[^\\\r\n])*?\1/,
			greedy: true
		},
		'function' : {
			pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,
			lookbehind: true
		},
		'class-name': {
			pattern: /(\bclass\s+)[a-z0-9_]+/i,
			lookbehind: true
		},
		'keyword' : /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,
		'boolean' : /\b(?:True|False)\b/,
		'number' : /\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
		'operator' : /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
		'punctuation' : /[{}[\];(),.:]/
	};


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Original by Samuel Flores
	 *
	 * Adds the following new token classes:
	 * 		constant, builtin, variable, symbol, regex
	 */
	(function(Prism) {
		Prism.languages.ruby = Prism.languages.extend('clike', {
			'comment': /#(?!\{[^\r\n]*?\}).*/,
			'keyword': /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/
		});
	
		var interpolation = {
			pattern: /#\{[^}]+\}/,
			inside: {
				'delimiter': {
					pattern: /^#\{|\}$/,
					alias: 'tag'
				},
				rest: Prism.util.clone(Prism.languages.ruby)
			}
		};
	
		Prism.languages.insertBefore('ruby', 'keyword', {
			'regex': [
				{
					pattern: /%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,
					inside: {
						'interpolation': interpolation
					}
				},
				{
					pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,
					inside: {
						'interpolation': interpolation
					}
				},
				{
					// Here we need to specifically allow interpolation
					pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
					inside: {
						'interpolation': interpolation
					}
				},
				{
					pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,
					inside: {
						'interpolation': interpolation
					}
				},
				{
					pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,
					inside: {
						'interpolation': interpolation
					}
				},
				{
					pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
					lookbehind: true
				}
			],
			'variable': /[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,
			'symbol': /:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/
		});
	
		Prism.languages.insertBefore('ruby', 'number', {
			'builtin': /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
			'constant': /\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/
		});
	
		Prism.languages.ruby.string = [
			{
				pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,
				greedy: true,
				inside: {
					'interpolation': interpolation
				}
			},
			{
				pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,
				greedy: true,
				inside: {
					'interpolation': interpolation
				}
			},
			{
				// Here we need to specifically allow interpolation
				pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
				greedy: true,
				inside: {
					'interpolation': interpolation
				}
			},
			{
				pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,
				greedy: true,
				inside: {
					'interpolation': interpolation
				}
			},
			{
				pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,
				greedy: true,
				inside: {
					'interpolation': interpolation
				}
			},
			{
				pattern: /("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/,
				greedy: true,
				inside: {
					'interpolation': interpolation
				}
			}
		];
	}(Prism));

/***/ },
/* 19 */
/***/ function(module, exports) {

	Prism.languages.scss = Prism.languages.extend('css', {
		'comment': {
			pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
			lookbehind: true
		},
		'atrule': {
			pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		// url, compassified
		'url': /(?:[-a-z]+-)*url(?=\()/i,
		// CSS selector regex is not appropriate for Sass
		// since there can be lot more things (var, @ directive, nesting..)
		// a selector must start at the end of a property or after a brace (end of other rules or nesting)
		// it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
		// the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
		// can "pass" as a selector- e.g: proper#{$erty})
		// this one was hard to do, so please be careful if you edit this one :)
		'selector': {
			// Initial look-ahead is used to prevent matching of blank selectors
			pattern: /(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,
			inside: {
				'parent': {
					pattern: /&/,
					alias: 'important'
				},
				'placeholder': /%[-_\w]+/,
				'variable': /\$[-_\w]+|#\{\$[-_\w]+\}/
			}
		}
	});
	
	Prism.languages.insertBefore('scss', 'atrule', {
		'keyword': [
			/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
			{
				pattern: /( +)(?:from|through)(?= )/,
				lookbehind: true
			}
		]
	});
	
	Prism.languages.scss.property = {
		pattern: /(?:[\w-]|\$[-_\w]+|#\{\$[-_\w]+\})+(?=\s*:)/i,
		inside: {
			'variable': /\$[-_\w]+|#\{\$[-_\w]+\}/
		}
	};
	
	Prism.languages.insertBefore('scss', 'important', {
		// var and interpolated vars
		'variable': /\$[-_\w]+|#\{\$[-_\w]+\}/
	});
	
	Prism.languages.insertBefore('scss', 'function', {
		'placeholder': {
			pattern: /%[-_\w]+/,
			alias: 'selector'
		},
		'statement': {
			pattern: /\B!(?:default|optional)\b/i,
			alias: 'keyword'
		},
		'boolean': /\b(?:true|false)\b/,
		'null': /\bnull\b/,
		'operator': {
			pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
			lookbehind: true
		}
	});
	
	Prism.languages.scss['atrule'].inside.rest = Prism.util.clone(Prism.languages.scss);

/***/ },
/* 20 */
/***/ function(module, exports) {

	// issues: nested multiline comments
	Prism.languages.swift = Prism.languages.extend('clike', {
		'string': {
			pattern: /("|')(\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: true,
			inside: {
				'interpolation': {
					pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
					inside: {
						delimiter: {
							pattern: /^\\\(|\)$/,
							alias: 'variable'
						}
						// See rest below
					}
				}
			}
		},
		'keyword': /\b(as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|Protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
		'number': /\b([\d_]+(\.[\de_]+)?|0x[a-f0-9_]+(\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
		'constant': /\b(nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
		'atrule': /@\b(IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
		'builtin': /\b([A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/
	});
	Prism.languages.swift['string'].inside['interpolation'].inside.rest = Prism.util.clone(Prism.languages.swift);

/***/ },
/* 21 */
/***/ function(module, exports) {

	Prism.languages.twig = {
		'comment': /\{#[\s\S]*?#\}/,
		'tag': {
			pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,
			inside: {
				'ld': {
					pattern: /^(?:\{\{\-?|\{%\-?\s*\w+)/,
					inside: {
						'punctuation': /^(?:\{\{|\{%)\-?/,
						'keyword': /\w+/
					}
				},
				'rd': {
					pattern: /\-?(?:%\}|\}\})$/,
					inside: {
						'punctuation': /.*/
					}
				},
				'string': {
					pattern: /("|')(?:\\?.)*?\1/,
					inside: {
						'punctuation': /^['"]|['"]$/
					}
				},
				'keyword': /\b(?:even|if|odd)\b/,
				'boolean': /\b(?:true|false|null)\b/,
				'number': /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+([Ee][-+]?\d+)?)\b/,
				'operator': [
					{
						pattern: /(\s)(?:and|b\-and|b\-xor|b\-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
						lookbehind: true
					},
					/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/
				],
				'property': /\b[a-zA-Z_][a-zA-Z0-9_]*\b/,
				'punctuation': /[()\[\]{}:.,]/
			}
		},
	
		// The rest can be parsed as HTML
		'other': {
			// We want non-blank matches
			pattern: /\S(?:[\s\S]*\S)?/,
			inside: Prism.languages.markup
		}
	};


/***/ },
/* 22 */
/***/ function(module, exports) {

	Prism.languages.typescript = Prism.languages.extend('javascript', {
		'keyword': /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield|module|declare|constructor|string|Function|any|number|boolean|Array|enum)\b/
	});
	
	Prism.languages.ts = Prism.languages.typescript;

/***/ },
/* 23 */
/***/ function(module, exports) {

	Prism.languages.yaml = {
		'scalar': {
			pattern: /([\-:]\s*(![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\3[^\r\n]+)*)/,
			lookbehind: true,
			alias: 'string'
		},
		'comment': /#.*/,
		'key': {
			pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
			lookbehind: true,
			alias: 'atrule'
		},
		'directive': {
			pattern: /(^[ \t]*)%.+/m,
			lookbehind: true,
			alias: 'important'
		},
		'datetime': {
			pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(\d{4}-\d\d?-\d\d?([tT]|[ \t]+)\d\d?:\d{2}:\d{2}(\.\d*)?[ \t]*(Z|[-+]\d\d?(:\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(:\d{2}(\.\d*)?)?)(?=[ \t]*($|,|]|}))/m,
			lookbehind: true,
			alias: 'number'
		},
		'boolean': {
			pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(true|false)[ \t]*(?=$|,|]|})/im,
			lookbehind: true,
			alias: 'important'
		},
		'null': {
			pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(null|~)[ \t]*(?=$|,|]|})/im,
			lookbehind: true,
			alias: 'important'
		},
		'string': {
			pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')(?=[ \t]*($|,|]|}))/m,
			lookbehind: true
		},
		'number': {
			pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)[+\-]?(0x[\da-f]+|0o[0-7]+|(\d+\.?\d*|\.?\d+)(e[\+\-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
			lookbehind: true
		},
		'tag': /![^\s]+/,
		'important': /[&*][\w]+/,
		'punctuation': /---|[:[\]{}\-,|>?]|\.\.\./
	};


/***/ },
/* 24 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/* **********************************************
	     Begin prism-core.js
	********************************************** */
	
	var _self = (typeof window !== 'undefined')
		? window   // if in browser
		: (
			(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
		);
	
	/**
	 * Prism: Lightweight, robust, elegant syntax highlighting
	 * MIT license http://www.opensource.org/licenses/mit-license.php/
	 * @author Lea Verou http://lea.verou.me
	 */
	
	var Prism = (function(){
	
	// Private helper vars
	var lang = /\blang(?:uage)?-(\w+)\b/i;
	var uniqueId = 0;
	
	var _ = _self.Prism = {
		util: {
			encode: function (tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
				} else if (_.util.type(tokens) === 'Array') {
					return tokens.map(_.util.encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},
	
			type: function (o) {
				return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
			},
	
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},
	
			// Deep clone a language definition (e.g. to extend it)
			clone: function (o) {
				var type = _.util.type(o);
	
				switch (type) {
					case 'Object':
						var clone = {};
	
						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = _.util.clone(o[key]);
							}
						}
	
						return clone;
	
					case 'Array':
						// Check for existence for IE8
						return o.map && o.map(function(v) { return _.util.clone(v); });
				}
	
				return o;
			}
		},
	
		languages: {
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);
	
				for (var key in redef) {
					lang[key] = redef[key];
				}
	
				return lang;
			},
	
			/**
			 * Insert a token before another token in a language literal
			 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
			 * we cannot just provide an object, we need anobject and a key.
			 * @param inside The key (or language id) of the parent
			 * @param before The key to insert before. If not provided, the function appends instead.
			 * @param insert Object with the key/value pairs to insert
			 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || _.languages;
				var grammar = root[inside];
	
				if (arguments.length == 2) {
					insert = arguments[1];
	
					for (var newToken in insert) {
						if (insert.hasOwnProperty(newToken)) {
							grammar[newToken] = insert[newToken];
						}
					}
	
					return grammar;
				}
	
				var ret = {};
	
				for (var token in grammar) {
	
					if (grammar.hasOwnProperty(token)) {
	
						if (token == before) {
	
							for (var newToken in insert) {
	
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}
	
						ret[token] = grammar[token];
					}
				}
	
				// Update references in other language definitions
				_.languages.DFS(_.languages, function(key, value) {
					if (value === root[inside] && key != inside) {
						this[key] = ret;
					}
				});
	
				return root[inside] = ret;
			},
	
			// Traverse a language definition with Depth First Search
			DFS: function(o, callback, type, visited) {
				visited = visited || {};
				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);
	
						if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
							visited[_.util.objId(o[i])] = true;
							_.languages.DFS(o[i], callback, null, visited);
						}
						else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
							visited[_.util.objId(o[i])] = true;
							_.languages.DFS(o[i], callback, i, visited);
						}
					}
				}
			}
		},
		plugins: {},
	
		highlightAll: function(async, callback) {
			var env = {
				callback: callback,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};
	
			_.hooks.run("before-highlightall", env);
	
			var elements = env.elements || document.querySelectorAll(env.selector);
	
			for (var i=0, element; element = elements[i++];) {
				_.highlightElement(element, async === true, env.callback);
			}
		},
	
		highlightElement: function(element, async, callback) {
			// Find language
			var language, grammar, parent = element;
	
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}
	
			if (parent) {
				language = (parent.className.match(lang) || [,''])[1].toLowerCase();
				grammar = _.languages[language];
			}
	
			// Set language on the element, if not present
			element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
	
			// Set language on the parent, for styling
			parent = element.parentNode;
	
			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
	
			var code = element.textContent;
	
			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};
	
			_.hooks.run('before-sanity-check', env);
	
			if (!env.code || !env.grammar) {
				if (env.code) {
					env.element.textContent = env.code;
				}
				_.hooks.run('complete', env);
				return;
			}
	
			_.hooks.run('before-highlight', env);
	
			if (async && _self.Worker) {
				var worker = new Worker(_.filename);
	
				worker.onmessage = function(evt) {
					env.highlightedCode = evt.data;
	
					_.hooks.run('before-insert', env);
	
					env.element.innerHTML = env.highlightedCode;
	
					callback && callback.call(env.element);
					_.hooks.run('after-highlight', env);
					_.hooks.run('complete', env);
				};
	
				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			}
			else {
				env.highlightedCode = _.highlight(env.code, env.grammar, env.language);
	
				_.hooks.run('before-insert', env);
	
				env.element.innerHTML = env.highlightedCode;
	
				callback && callback.call(element);
	
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			}
		},
	
		highlight: function (text, grammar, language) {
			var tokens = _.tokenize(text, grammar);
			return Token.stringify(_.util.encode(tokens), language);
		},
	
		tokenize: function(text, grammar, language) {
			var Token = _.Token;
	
			var strarr = [text];
	
			var rest = grammar.rest;
	
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}
	
				delete grammar.rest;
			}
	
			tokenloop: for (var token in grammar) {
				if(!grammar.hasOwnProperty(token) || !grammar[token]) {
					continue;
				}
	
				var patterns = grammar[token];
				patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];
	
				for (var j = 0; j < patterns.length; ++j) {
					var pattern = patterns[j],
						inside = pattern.inside,
						lookbehind = !!pattern.lookbehind,
						greedy = !!pattern.greedy,
						lookbehindLength = 0,
						alias = pattern.alias;
	
					if (greedy && !pattern.pattern.global) {
						// Without the global flag, lastIndex won't work
						var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
						pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
					}
	
					pattern = pattern.pattern || pattern;
	
					// Don’t cache length as it changes during the loop
					for (var i=0, pos = 0; i<strarr.length; pos += strarr[i].length, ++i) {
	
						var str = strarr[i];
	
						if (strarr.length > text.length) {
							// Something went terribly wrong, ABORT, ABORT!
							break tokenloop;
						}
	
						if (str instanceof Token) {
							continue;
						}
	
						pattern.lastIndex = 0;
	
						var match = pattern.exec(str),
						    delNum = 1;
	
						// Greedy patterns can override/remove up to two previously matched tokens
						if (!match && greedy && i != strarr.length - 1) {
							pattern.lastIndex = pos;
							match = pattern.exec(text);
							if (!match) {
								break;
							}
	
							var from = match.index + (lookbehind ? match[1].length : 0),
							    to = match.index + match[0].length,
							    k = i,
							    p = pos;
	
							for (var len = strarr.length; k < len && p < to; ++k) {
								p += strarr[k].length;
								// Move the index i to the element in strarr that is closest to from
								if (from >= p) {
									++i;
									pos = p;
								}
							}
	
							/*
							 * If strarr[i] is a Token, then the match starts inside another Token, which is invalid
							 * If strarr[k - 1] is greedy we are in conflict with another greedy pattern
							 */
							if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
								continue;
							}
	
							// Number of tokens to delete and replace with the new match
							delNum = k - i;
							str = text.slice(pos, p);
							match.index -= pos;
						}
	
						if (!match) {
							continue;
						}
	
						if(lookbehind) {
							lookbehindLength = match[1].length;
						}
	
						var from = match.index + lookbehindLength,
						    match = match[0].slice(lookbehindLength),
						    to = from + match.length,
						    before = str.slice(0, from),
						    after = str.slice(to);
	
						var args = [i, delNum];
	
						if (before) {
							args.push(before);
						}
	
						var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);
	
						args.push(wrapped);
	
						if (after) {
							args.push(after);
						}
	
						Array.prototype.splice.apply(strarr, args);
					}
				}
			}
	
			return strarr;
		},
	
		hooks: {
			all: {},
	
			add: function (name, callback) {
				var hooks = _.hooks.all;
	
				hooks[name] = hooks[name] || [];
	
				hooks[name].push(callback);
			},
	
			run: function (name, env) {
				var callbacks = _.hooks.all[name];
	
				if (!callbacks || !callbacks.length) {
					return;
				}
	
				for (var i=0, callback; callback = callbacks[i++];) {
					callback(env);
				}
			}
		}
	};
	
	var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
		this.type = type;
		this.content = content;
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || "").length|0;
		this.greedy = !!greedy;
	};
	
	Token.stringify = function(o, language, parent) {
		if (typeof o == 'string') {
			return o;
		}
	
		if (_.util.type(o) === 'Array') {
			return o.map(function(element) {
				return Token.stringify(element, language, o);
			}).join('');
		}
	
		var env = {
			type: o.type,
			content: Token.stringify(o.content, language, parent),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language,
			parent: parent
		};
	
		if (env.type == 'comment') {
			env.attributes['spellcheck'] = 'true';
		}
	
		if (o.alias) {
			var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
			Array.prototype.push.apply(env.classes, aliases);
		}
	
		_.hooks.run('wrap', env);
	
		var attributes = Object.keys(env.attributes).map(function(name) {
			return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}).join(' ');
	
		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
	
	};
	
	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _self.Prism;
		}
	 	// In worker
		_self.addEventListener('message', function(evt) {
			var message = JSON.parse(evt.data),
			    lang = message.language,
			    code = message.code,
			    immediateClose = message.immediateClose;
	
			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	
		return _self.Prism;
	}
	
	//Get current script and highlight
	var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
	
	if (script) {
		_.filename = script.src;
	
		if (document.addEventListener && !script.hasAttribute('data-manual')) {
			if(document.readyState !== "loading") {
				if (window.requestAnimationFrame) {
					window.requestAnimationFrame(_.highlightAll);
				} else {
					window.setTimeout(_.highlightAll, 16);
				}
			}
			else {
				document.addEventListener('DOMContentLoaded', _.highlightAll);
			}
		}
	}
	
	return _self.Prism;
	
	})();
	
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Prism;
	}
	
	// hack for components to work correctly in node.js
	if (typeof global !== 'undefined') {
		global.Prism = Prism;
	}
	
	
	/* **********************************************
	     Begin prism-markup.js
	********************************************** */
	
	Prism.languages.markup = {
		'comment': /<!--[\w\W]*?-->/,
		'prolog': /<\?[\w\W]+?\?>/,
		'doctype': /<!DOCTYPE[\w\W]+?>/i,
		'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
		'tag': {
			pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
			inside: {
				'tag': {
					pattern: /^<\/?[^\s>\/]+/i,
					inside: {
						'punctuation': /^<\/?/,
						'namespace': /^[^\s>\/:]+:/
					}
				},
				'attr-value': {
					pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
					inside: {
						'punctuation': /[=>"']/
					}
				},
				'punctuation': /\/?>/,
				'attr-name': {
					pattern: /[^\s>\/]+/,
					inside: {
						'namespace': /^[^\s>\/:]+:/
					}
				}
	
			}
		},
		'entity': /&#?[\da-z]{1,8};/i
	};
	
	// Plugin to make entity title show the real entity, idea by Roman Komarov
	Prism.hooks.add('wrap', function(env) {
	
		if (env.type === 'entity') {
			env.attributes['title'] = env.content.replace(/&amp;/, '&');
		}
	});
	
	Prism.languages.xml = Prism.languages.markup;
	Prism.languages.html = Prism.languages.markup;
	Prism.languages.mathml = Prism.languages.markup;
	Prism.languages.svg = Prism.languages.markup;
	
	
	/* **********************************************
	     Begin prism-css.js
	********************************************** */
	
	Prism.languages.css = {
		'comment': /\/\*[\w\W]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
		'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
		'string': {
			pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
		'property': /(\b|\B)[\w-]+(?=\s*:)/i,
		'important': /\B!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:]/
	};
	
	Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);
	
	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'style': {
				pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
				lookbehind: true,
				inside: Prism.languages.css,
				alias: 'language-css'
			}
		});
		
		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|').*?\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: Prism.languages.markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, Prism.languages.markup.tag);
	}
	
	/* **********************************************
	     Begin prism-clike.js
	********************************************** */
	
	Prism.languages.clike = {
		'comment': [
			{
				pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
				lookbehind: true
			},
			{
				pattern: /(^|[^\\:])\/\/.*/,
				lookbehind: true
			}
		],
		'string': {
			pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
		'class-name': {
			pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
			lookbehind: true,
			inside: {
				punctuation: /(\.|\\)/
			}
		},
		'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
		'boolean': /\b(true|false)\b/,
		'function': /[a-z0-9_]+(?=\()/i,
		'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
		'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
		'punctuation': /[{}[\];(),.:]/
	};
	
	
	/* **********************************************
	     Begin prism-javascript.js
	********************************************** */
	
	Prism.languages.javascript = Prism.languages.extend('clike', {
		'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
		'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
		// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
		'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
		'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
	});
	
	Prism.languages.insertBefore('javascript', 'keyword', {
		'regex': {
			pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
			lookbehind: true,
			greedy: true
		}
	});
	
	Prism.languages.insertBefore('javascript', 'string', {
		'template-string': {
			pattern: /`(?:\\\\|\\?[^\\])*?`/,
			greedy: true,
			inside: {
				'interpolation': {
					pattern: /\$\{[^}]+\}/,
					inside: {
						'interpolation-punctuation': {
							pattern: /^\$\{|\}$/,
							alias: 'punctuation'
						},
						rest: Prism.languages.javascript
					}
				},
				'string': /[\s\S]+/
			}
		}
	});
	
	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'script': {
				pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
				lookbehind: true,
				inside: Prism.languages.javascript,
				alias: 'language-javascript'
			}
		});
	}
	
	Prism.languages.js = Prism.languages.javascript;
	
	/* **********************************************
	     Begin prism-file-highlight.js
	********************************************** */
	
	(function () {
		if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
			return;
		}
	
		self.Prism.fileHighlight = function() {
	
			var Extensions = {
				'js': 'javascript',
				'py': 'python',
				'rb': 'ruby',
				'ps1': 'powershell',
				'psm1': 'powershell',
				'sh': 'bash',
				'bat': 'batch',
				'h': 'c',
				'tex': 'latex'
			};
	
			if(Array.prototype.forEach) { // Check to prevent error in IE8
				Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
					var src = pre.getAttribute('data-src');
	
					var language, parent = pre;
					var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
					while (parent && !lang.test(parent.className)) {
						parent = parent.parentNode;
					}
	
					if (parent) {
						language = (pre.className.match(lang) || [, ''])[1];
					}
	
					if (!language) {
						var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
						language = Extensions[extension] || extension;
					}
	
					var code = document.createElement('code');
					code.className = 'language-' + language;
	
					pre.textContent = '';
	
					code.textContent = 'Loading…';
	
					pre.appendChild(code);
	
					var xhr = new XMLHttpRequest();
	
					xhr.open('GET', src, true);
	
					xhr.onreadystatechange = function () {
						if (xhr.readyState == 4) {
	
							if (xhr.status < 400 && xhr.responseText) {
								code.textContent = xhr.responseText;
	
								Prism.highlightElement(code);
							}
							else if (xhr.status >= 400) {
								code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
							}
							else {
								code.textContent = '✖ Error: File does not exist or is empty';
							}
						}
					};
	
					xhr.send(null);
				});
			}
	
		};
	
		document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);
	
	})();
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);
//# sourceMappingURL=toolkit.js.map