console.log("Hello world");
self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("bootstrap.min.css")) {
    event.respondWith(
      new Response(
        ".hotel-slogan {background:green !important} nav{display:none}",
        { headers: { "Content-Type": "text/css" } }
      )
    );
  }
});
