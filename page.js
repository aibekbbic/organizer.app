let modalButtons = document.querySelectorAll("[data-m]");
let cancel = document.querySelectorAll(".cancel");
let allModals = document.querySelectorAll(".modal");

modalButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    let button = this.dataset.m;
    let modal = document.querySelector("#" + button);
    modal.classList.remove("hidden");

    modal.querySelector(".content").addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });
});

cancel.forEach(function (item) {
  item.addEventListener("click", function () {
    let modal = this.closest(".modal");
    modal.classList.add("hidden");
  });
});

allModals.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.add("hidden");
  });
});
