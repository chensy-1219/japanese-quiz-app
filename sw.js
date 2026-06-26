// Service Worker for offline caching
const CACHE = 'jp-quiz-v3';

// Immediately activate new SW
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then((cache) => {
      return cache.addAll([
        '.',
        'index.html',
        'css/style.css',
        'js/app.js',
        'js/synonyms_data.js',
        'manifest.json',
      ]);
    })
  );
});

self.addEventListener('activate', (e) => {
  // Delete old caches
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    }).then(() => clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  // Stale-while-revalidate: serve cache, update cache from network in background
  e.respondWith(
    caches.open(CACHE).then((cache) => {
      return cache.match(e.request).then((cached) => {
        const fetchPromise = fetch(e.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            cache.put(e.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => cached);
        // Return cached immediately, network updates cache for next time
        return cached || fetchPromise;
      });
    })
  );
});
