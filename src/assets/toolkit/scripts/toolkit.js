/*----------------------------------------*\
  LIIP STYLEGUIDE JS COMPONENTS
\*----------------------------------------*/

/**
 * Vendors
 */

import Prism from 'prismjs';
import 'prismjs/plugins/custom-class/prism-custom-class';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-objectivec';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-twig';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-yaml';

Prism.plugins.customClass.map({});
Prism.plugins.customClass.prefix('prism--');

/**
 * Globals
 */

import 'polyfills';

/**
 * Components
 */

import Multiplier from './multiplier';
import Navbar from './navbar';
import Weather from './weather';
import Accordion from './accordion';
import Reel from './reel';
import Collapse from './collapse';

/**
 * Expose modules to the Toolkit namespace
 */
window.Toolkit = {
  Multiplier,
  Navbar,
  Weather,
  Accordion,
  Reel,
  Collapse,
};
