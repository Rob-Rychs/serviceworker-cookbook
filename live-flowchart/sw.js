console.log('\nsw.js');

this.addEventListener('install', function oninstallHandler(event) {
  console.info('\nService worker installed, oninstall fired');
  console.debug(event);

  // event.waitUntil();

  console.info('Use oninstall to install app dependencies');
});

this.addEventListener('activate', function onactivateHandler(event) {
  console.info('\nService worker activated, onactivate fired');
  console.debug(event);

  console.info('Use onactivate to cleanup old resources');
});

this.addEventListener('fetch', function onfetchHandler(event) {
  console.info('\nonfecth fired');
  console.debug(event);

  // event.respondWith();

  console.info('Modify requests, do whatever you want');
});
