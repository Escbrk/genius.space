const modal = document.querySelector(".mobile-modal");
const modalCloseBtn = document.querySelector(".mobile-modal-cls");
const modalOpenBtn = document.querySelector(".mobile-modal-opn");

const toggleModal = () => modal.classList.toggle("is-open");

modalCloseBtn.addEventListener("click", toggleModal);
modalOpenBtn.addEventListener("click", toggleModal);
