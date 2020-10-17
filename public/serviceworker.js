const CACHE_NAME = "gih-cache";
const CACHED_URLS = [
  "/index-offline.html",
  "/css/gih-offline.css",
  "/img/jumbo-background-sm.jpg",
  "/img/logo-header.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CACHED_URLS))
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches //
        .match(event.request)
        .then((response) => {
          if (response) {
            return response;
          } else if (
            event.request.headers.get("accept").includes("text/html")
          ) {
            return caches.match("/index-offline.html");
          }
        })
    )
  );
});
