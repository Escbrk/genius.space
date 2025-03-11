const modal = document.querySelector(".backdrop");
const modalCloseBtn = document.querySelector(".modal-close-btn");
// const modalOpenBtn = document.querySelector(".modal-open-btn");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalCloseBtn.addEventListener("click", toggleModal);
