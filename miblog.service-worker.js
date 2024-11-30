// Instalar el Service Worker y almacenar en caché los recursos
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('blog-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/scripts.js',
                '/icono-192x192.png',
                '/icono-512x512.png'
            ]);
        })
    );
});

// Servir los archivos desde la caché cuando no haya conexión
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
