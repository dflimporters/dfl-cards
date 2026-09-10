// Network-first passthrough -- exists only to satisfy PWA installability
// criteria. Never caches: card data is per-person and lookups are live, so
// serving a stale response would show someone the wrong name or number.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
