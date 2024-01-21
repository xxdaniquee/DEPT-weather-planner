const activity = document.querySelectorAll(".activity");
const activityOverlay = document.querySelector(".activity-overlay");

activity.forEach(activity => {
  activity.addEventListener('click', () => {
    activityOverlay.showModal();
  });
});

const overlayClose = document.querySelector(".overlay-close");
overlayClose.addEventListener('click', () => {
  activityOverlay.close();
});