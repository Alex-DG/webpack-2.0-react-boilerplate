/* *
 * Mocha and Webpack, the problem is: How do we handle Webpack-specific features that Mocha doesn’t understand like required images and CSS ?
 * read: https://github.com/coryhouse/react-slingshot/issues/102
 * */
function noop() {
  return null;
}

require.extensions['.css'] = noop;
require.extensions['.scss'] = noop;
require.extensions['.png'] = noop;
