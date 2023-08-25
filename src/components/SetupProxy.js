/**
 * http://localhost:3000) to the backend server (running on http://intranet). 
 * This way, the request will be made from the same origin as your React app, 
 * bypassing the CORS issue during development.
 * 
 */

// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/empllist.php',
//     createProxyMiddleware({
//       target: 'http://intranet',
//       changeOrigin: true,
//     })
//   );
// };
