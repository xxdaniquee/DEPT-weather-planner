const activity = document.querySelector(".activity");
const activityOverlay = document.querySelector(".activity-overlay");

activity.addEventListener('click', () => {
  activityOverlay.showModal();
});

const overlayClose = document.querySelector(".overlay-close");
overlayClose.addEventListener('click', () => {
  activityOverlay.close();
});
