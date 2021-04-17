// require('dotenv').config();
window.vapidPublicKey = new Uint8Array(Base64.urlsafe_decode64(process.env.VAPID_PUBLIC_KEY).bytes);
// const envVariables = process.env;
window.vapidPublicKey = process.env.VAPID_PUBLIC_KEY
export function swSubscribe(){
  navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
    serviceWorkerRegistration.pushManager
    .subscribe({
      userVisibleOnly: true,
      applicationServerKey: window.vapidPublicKey
    });
    // console.log('key', envVariables);
  });
}


// $(".webpush-button").on("click", (e) => {
//   navigator.serviceWorker.ready
//   .then((serviceWorkerRegistration) => {
//     serviceWorkerRegistration.pushManager.getSubscription()
//     .then((subscription) => {
//       $.post("localhost:3001/api/v1/web_push_notifications", { subscription: subscription.toJSON(), message: "You clicked a button!" });
//     });
//   });
// });

export function notificationPermission(){
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
}
