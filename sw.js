// Service Worker for offline caching
const CACHE = 'jp-quiz-v2';

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
  // Network-first for HTML, cache-first for static assets
  if (e.request.destination === 'document') {
    e.respondWith(
      fetch(e.request)
        .then(r => { const clone = r.clone(); caches.open(CACHE).then(c => c.put(e.request, clone)); return r; })
        .catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then((r) => r || fetch(e.request))
    );
  }
});
