const CACHE_NAME = "wheelcleaner-cache-v1";
const urlsToCache = [
  "/dhgate-style-index.html",
  "/buynow.html",
  "/purchase-confirmation.html",
  "/manifest.json"
];

// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch from cache or network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
