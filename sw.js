// Service Worker for offline caching
const CACHE = 'jp-quiz-v1';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => {
      return cache.addAll([
        '.',
        'index.html',
        'css/style.css',
        'js/app.js',
        'manifest.json',
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request))
  );
});
