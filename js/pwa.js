if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sworker.js").then(registration=>{
        console.log("service worker")
        console.log(registration)
    }    ).catch(error=>{
        console.log("sarvice worker is error")
        console.log(error)
    })
}else{
    alert("service worker is not working")
}