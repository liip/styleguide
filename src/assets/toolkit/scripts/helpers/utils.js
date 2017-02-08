let timeout;

/**
 * Wait to execute a function if it’s called again in the given timeframe
 * @param  {Function}   callback  The function to call when the delay is over
 * @param  {Number}     delay     Delay before calling the function in milliseconds
 */
export function debounce(callback, delay = 250) {
  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(callback, delay);
}

/**
 * Return the scroll top of the window/document
 * @return {Integer}
 */
export function getDocumentScrollTop() {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop, 0);
}

/**
 * Return the given element offsetTop value
 * @return {Integer}
 */
export function offsetTop(element) {
  return element.getBoundingClientRect().top + getDocumentScrollTop()
    - (document.documentElement.clientTop || document.body.clientTop);
}

/**
 * Variable operators
 */
export const operators = {
  '+': (a, b) => { return a + b; },
  '-': (a, b) => { return a - b; },
}
