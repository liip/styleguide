/*----------------------------------------*\
  LIIP STYLEGUIDE JS COMPONENTS
\*----------------------------------------*/

/**
 * Vendors
 */

import './prism';

/**
 * Globals
 */

import './ui';
import '../scss/common.scss';

/**
 * Helpers
 */

import media from './helpers/media';
import * as utils from './helpers/utils';

/**
 * Components
 */

import Navbar from './components/Navbar';
import Collapse from './components/Collapse';
import ContactForm from './components/ContactForm';
import Dialog from './components/Dialog';
import CookiesBanner from './components/CookiesBanner';

export default {
  helpers: {
    media,
    utils,
  },
  Navbar,
  Collapse,
  ContactForm,
  Dialog,
  CookiesBanner,
};
