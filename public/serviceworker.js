console.log("Hello world");
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => fetch("/index-offline.html"))
  );
});
