self.addEventListener("install",e=>{
    e.waitUntill(
        caches.open("static").then(caches=>{
            return caches.addAll(["./index.html","./About.html","./Books.html","./contact.html","./contribute.html","./E-books.html","./E-pepar.html","./megazin.html","./news.html","./privacy.html","./css/style.css","./css/bootstrap.css","./css/bootstrap.min.css","./images/bennar.jpg","./images/download.jfif","./images/ICON.jpeg","./images/ICON64.png","./images/ICON512.png","./images/logo.png"]);

        })
    )
})



self.addEventListener("fetch  ",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request)
        })
    )
})