//Selectors
const navToggler = document.querySelector(".nav_toggler");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");
const openRewardModal = document.querySelectorAll(".open_reward-modal");
const rewardModal = document.querySelector(".reward_modal");

//Function
const openModal = function () {
  modal.style.display = "block";
};

const closeModal = function () {
  modal.style.display = "none";
};

const openRewardModal = function () {
  rewardModal.classList.remove("hidden");
};

//Event Listeners
navToggler.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

openRewardModal.forEach((btn) => {
  btn.addEventListener("click", openRewardModal);
});
