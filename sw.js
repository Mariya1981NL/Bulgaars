// Service Worker — Български за деца
// Caches all app files for offline use

var CACHE_NAME = 'bg-leren-v21';
var ASSETS = [
  './',
  './index.html',
  './data-words.js',
  './data-words-b1.js',
  './data-words-b2.js',
  './data-badges.js',
  './data-stories.js',
  './data-culture.js',
  './data-dialogues.js',
  './data-grammar.js',
  './data-numbers.js',
  './data-fairytales.js',
  './data-missions.js',
  './data-proverbs.js',
  './data-holidays.js',
  './data-lyrics.js',
  './data-minpairs.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

// Install: cache all assets
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// Activate: clean old caches
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Fetch: serve from cache, fall back to network, then update cache
self.addEventListener('fetch', function(e) {
  // Only handle same-origin GET requests
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(function(cached) {
      // Return cached version immediately, but also fetch update in background
      var fetchPromise = fetch(e.request).then(function(response) {
        // Only cache successful responses for same-origin
        if (response.ok && response.type === 'basic') {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(e.request, clone);
          });
        }
        return response;
      }).catch(function() {
        // Network failed, cached version already served (or will fail)
      });

      return cached || fetchPromise;
    })
  );
});
