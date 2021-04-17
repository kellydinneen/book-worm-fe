export default function registerSW() {
  const swUrl = `${process.env.PUBLIC_URL}/sw.js`
  if (navigator.serviceWorker && process.env.NODE_ENV !== 'production') {

    window.addEventListener("push", (event) => {
      let title = (event.data && event.data.text()) || "Yay a message";
      let body = "We have received a push message";
    
      event.waitUntil(
        window.registration.showNotification(title, { body })
      )
    });

    navigator.serviceWorker.register(swUrl)
    .then(function(reg) {
       console.log('Service worker change, registered the service worker');
    });
  }
  // Otherwise, no push notifications :(
  else {
    console.error('Service worker is not supported in this browser');
  };
  
}