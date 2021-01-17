self.addEventListener("install",e=>{
    e.waitUntill(
        caches.open("static").then(caches=>{
            return caches.addAll(["./index.html","./css/style.css","./css/bootstrap.css","./css/bootstrap.min.css","./images/bennar.jpg","./images/download.jfif","./images/ICON.jpeg","./images/ICON64.png","./images/ICON512.png","./images/logo.png"]);

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