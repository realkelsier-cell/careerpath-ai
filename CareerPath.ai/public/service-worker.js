const CACHE = 'careerpath-v2';
const ASSETS = ['/', '/index.html', '/src/index.css', '/manifest.json', '/icons/icon-192.png', '/wasm/matcher/pkg/career_matcher.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
