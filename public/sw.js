self.addEventListener("push", async(event) => {
  let title = (event.data && event.data.text()) || "Yay a message";
  let body = "We have received a push message";

  event.waitUntil(
    self.registration.showNotification(title, { body })
  )
});
