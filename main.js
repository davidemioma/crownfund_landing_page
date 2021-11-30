//Selectors
const navToggler = document.querySelector(".nav_toggler");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");
const backToProjectBtn = document.querySelector(".first_btn");
const openRewardModalBtn = document.querySelectorAll(".open_reward-modal");
const rewardModal = document.querySelector(".reward_modal");
const closeRewardModalBtn = document.querySelector(".close_reward-modal");
const noReward = document.querySelector(".no-reward");
const bambooReward = document.querySelector(".bamboo");
const BlackEditionReward = document.querySelector(".black_editon");
const submitted = document.querySelector(".submit_modal");
const closeSubmitModalBtn = document.querySelector(".submit_modal button");

//Function
const openModal = function () {
  modal.style.display = "block";
  modal.scrollIntoView({ behavior: "smooth" });
};

const closeModal = function () {
  modal.style.display = "none";
};

const openRewardModal = function () {
  rewardModal.classList.remove("hidden");
  rewardModal.scrollIntoView({ behavior: "smooth" });
};

const closeRewardModal = function () {
  rewardModal.classList.add("hidden");
};

const activateReward = function (reward) {
  reward.querySelector(".circle span").classList.remove("hidden");

  reward.querySelector(".details").classList.remove("hidden");

  reward.querySelector("button").addEventListener("click", function (e) {
    const input = +reward.querySelector("input").value;

    if (input === "" || input < 1) return;

    submitted.style.display = "grid";

    rewardModal.classList.add("hidden");
  });
};

const deactivateReward = function (reward) {
  reward.querySelector(".circle span").classList.add("hidden");

  reward.querySelector(".details").classList.add("hidden");
};

const closeSubmitModal = function () {
  submitted.style.display = "none";
};

//Event Listeners
navToggler.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

backToProjectBtn.addEventListener("click", openRewardModal);

openRewardModalBtn.forEach((btn) => {
  btn.addEventListener("click", openRewardModal);
});

closeRewardModalBtn.addEventListener("click", closeRewardModal);

noReward.addEventListener("click", function () {
  activateReward(noReward);
  deactivateReward(bambooReward);
  deactivateReward(BlackEditionReward);
});

bambooReward.addEventListener("click", function () {
  activateReward(bambooReward);
  deactivateReward(noReward);
  deactivateReward(BlackEditionReward);
});

BlackEditionReward.addEventListener("click", function () {
  activateReward(BlackEditionReward);
  deactivateReward(noReward);
  deactivateReward(bambooReward);
});

closeSubmitModalBtn.addEventListener("click", closeSubmitModal);
