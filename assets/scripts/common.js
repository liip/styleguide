/*----------------------------------------*\
  LIIP STYLEGUIDE JS COMPONENTS
\*----------------------------------------*/

/**
 * Vendors
 */

import Prism from 'prismjs';
import 'prismjs/plugins/custom-class/prism-custom-class';
import 'prismjs/components/prism-php';
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
import 'prismjs/components/prism-kotlin';

Prism.plugins.customClass.map({});
Prism.plugins.customClass.prefix('prism--');

/**
 * Globals
 */

import 'ui';
import '../scss/common.scss';

/**
 * Components
 */

import Navbar from 'components/Navbar';
import Reel from 'components/Reel';
import Collapse from 'components/Collapse';
import ContactForm from 'components/ContactForm';

export default {
  Navbar,
  Reel,
  Collapse,
  ContactForm,
};
