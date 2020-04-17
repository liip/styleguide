/**
 * Ensure entry is an Element by either returning it or running a querySelector on the document
 * @param {String|Element} el A String representing a valid selector or an Element
 * @return {Element}
 */
export function lazySelector(el) {
  if (el instanceof Element) {
    return el;
  } else if (typeof el === 'string') {
    return document.querySelector(el);
  }
  throw new Error(`Expected Element or String, got ${typeof el}.`);
}
