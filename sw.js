self.addEventListener('install', function () {
  self.skipWaiting();
});
self.addEventListener('activate', function (e) {
  e.waitUntil(clients.claim());
});
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (liste) {
    for (var i = 0; i < liste.length; i++) {
      if (liste[i].url.indexOf('sofor') > -1) { return liste[i].focus(); }
    }
    return clients.openWindow('sofor');
  }));
});
