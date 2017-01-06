/**
 * Change an SVG icon source
 * @param  {DOMElement} el    The SVG element
 * @param  {String}     icon  The icon ID to use
 */
export function updateIcon(el, icon) {
  const use = el.querySelector('use');
  const classes = el.getAttribute('class').split(' ');
  const modifiers = classes.filter((className) => {
    return className.match(/icon--/);
  });

  // Clean-up all `icon--` classes
  el.classList.remove.apply(el.classList, modifiers);
  el.classList.add(`icon--${icon}`);

  use.setAttribute('xlink:href', `#${icon}`);
}
