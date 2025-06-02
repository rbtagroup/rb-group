self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("rb-taxi-cache").then((cache) =>
      cache.addAll([
        "./",
        "./index.html",
        "./vysledek.html",
        "./style.css",
        "./app.js",
        "./vysledek.js",
        "./icon-192.png",
        "./icon-512.png"
      ])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request))
  );
});
