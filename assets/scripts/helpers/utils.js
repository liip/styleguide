/**
 * Return the scroll top of the window/document
 * @return {Integer}
 */
export function getDocumentScrollTop() {
  return (
    window.scrollY ||
    Math.max(document.documentElement.scrollTop, document.body.scrollTop) ||
    window.pageYOffset ||
    0
  );
}

/**
 * Return the given element offsetTop value
 * @return {Integer}
 */
export function offsetTop(element) {
  return (
    element.getBoundingClientRect().top +
    getDocumentScrollTop() -
    (document.documentElement.clientTop || document.body.clientTop)
  );
}
