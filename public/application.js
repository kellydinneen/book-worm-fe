if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/serviceworker.js')
  .then(function(reg) {
     console.log('Service worker change, registered the service worker');
  });
}
// Otherwise, no push notifications :(
else {
  console.error('Service worker is not supported in this browser');
};

navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
  serviceWorkerRegistration.pushManager
  .subscribe({
    userVisibleOnly: true,
    applicationServerKey: window.vapidPublicKey
  });
});

$(".webpush-button").on("click", (e) => {
  navigator.serviceWorker.ready
  .then((serviceWorkerRegistration) => {
    serviceWorkerRegistration.pushManager.getSubscription()
    .then((subscription) => {
      $.post("localhost:3000/api/v1/web_push_notifications", { subscription: subscription.toJSON(), message: "You clicked a button!" });
    });
  });
});

if (!("Notification" in window)) {
  console.error("This browser does not support desktop notification");
}

// Let's check whether notification permissions have already been granted
else if (Notification.permission === "granted") {
  console.log("Permission to receive notifications has been granted");
}

// Otherwise, we need to ask the user for permission
else if (Notification.permission !== 'denied') {
  Notification.requestPermission(function (permission) {
    // If the user accepts, let's create a notification
    if (permission === "granted") {
      console.log("Permission to receive notifications has been granted");
    }
  });
}