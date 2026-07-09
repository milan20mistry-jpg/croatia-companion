const cacheName = "croatia-companion-v2";

const filesToCache = [
    "/",
    "index.html",
    "style.css",
    "app.js",
    "data.js",
    "manifest.json"
];


self.addEventListener("install", event => {

    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache);
        })
    );

});


self.addEventListener("activate", event => {

    event.waitUntil(
        caches.keys()
        .then(keys => {
            return Promise.all(
                keys.map(key => {

                    if(key !== CACHE_NAME){
                        return caches.delete(key);
                    }

                })
            );
        })
    );

});