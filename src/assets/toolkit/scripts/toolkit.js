// Vendors
import 'prismjs';
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

// Globals
import 'polyfills';

// Components
import Multiplier from './multiplier';
import Navbar from './navbar';
import Weather from './weather';
import Accordion from './accordion';
import Reel from './reel';

window.Toolkit = {
  Multiplier,
  Navbar,
  Weather,
  Accordion,
  Reel,
};
