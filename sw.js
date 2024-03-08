const CACHE_NAME = 'v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/sw.js',
    '/icon/lowres.webp',
    '/icon/hd_hi.ico'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});