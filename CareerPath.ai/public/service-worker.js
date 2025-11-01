const CACHE = 'careerpath-v1';
const ASSETS = [
  '/', '/styles/globals.css', '/manifest.json',
  '/icons/icon-192.png', '/icons/icon-512.png',
  '/wasm/matcher/pkg/career_matcher.js',
  '/wasm/matcher/pkg/career_matcher_bg.wasm',
  '/pyodide/interest_parser.py',
  '/wasm/pdfgen.wasm'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
