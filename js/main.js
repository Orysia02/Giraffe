const butonOpenModal = document.querySelector("#button1");
const modal = document.querySelector("#modal");
const closeModalBtn = document.querySelector("#closeModalBtn");
const formContent = document.getElementById("modal-content");
const thankYouMessage = document.getElementById("success");
const consultationForm = document.getElementById("consultationForm");

butonOpenModal.addEventListener('click', () =>{
    modal.style.display = 'flex';
    thankYouMessage.style.display = 'none';
});

closeModalBtn.addEventListener('click', () =>{
    modal.style.display = 'none';
    thankYouMessage.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  consultationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formContent.style.display = "none";
    thankYouMessage.style.display = "block";
});

const buttonStatement = document.querySelector("#button2");
const modalSecond = document.querySelector("#modalTwo");
const closeModalBtnSecond = document.querySelector("#closeModalBtnTwo");
const formContentSecond = document.getElementById("modal-contentTwo");
const thankYouMessageSecond = document.getElementById("successTwo");
const consultationFormSecond = document.getElementById("consultationFormTwo");

buttonStatement.addEventListener('click', () =>{
    modalSecond.style.display = 'flex';
    thankYouMessageSecond.style.display = 'none';
});

closeModalBtnSecond.addEventListener('click', () =>{
    modalSecond.style.display = 'none';
    thankYouMessageSecond.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modalSecond) {
      modalSecond.style.display = 'none';
    }
  });

  consultationFormSecond.addEventListener("submit", (event) => {
    event.preventDefault();
    formContentSecond.style.display = "none";
    thankYouMessageSecond.style.display = "block";
});
