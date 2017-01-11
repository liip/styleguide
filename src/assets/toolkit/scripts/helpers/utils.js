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
