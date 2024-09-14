const form = document.querySelector(".newsletter-form");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector(".submit");
const errorMsg = document.querySelector(".error-message");
const successMobile = document.querySelector(".success-mobile");
const successDesktop = document.querySelector(".success");
const dismissMobile = document.querySelector(".dismiss-mobile");
const dismissDesktop = document.querySelector(".dismiss-desktop");
const emailMobile = document.querySelector(".email-mobile");
const emailDesktop = document.querySelector(".email-desktop");
const newsletter = document.querySelector(".newsletter");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    emailInput.value === "" ||
    !emailInput.value.includes("@") ||
    !emailInput.value.endsWith(".com")
  ) {
    errorMsg.classList.remove("hide");
    emailInput.classList.add("error");
  } else {
    errorMsg.classList.add("hide");
    emailInput.classList.remove("error");
    if (window.matchMedia("(min-width: 768px)").matches) {
      successDesktop.classList.remove("hide");
      emailDesktop.textContent = emailInput.value;
      newsletter.classList.add("hide");
    } else {
      successMobile.classList.remove("hide");
      emailMobile.textContent = emailInput.value;
    }

    emailInput.value = "";
  }
});

emailInput.addEventListener("keypress", (e) => {
  emailInput.classList.remove("error");
  errorMsg.classList.add("hide");
});

dismissMobile.addEventListener("click", (e) => {
  console.log(successMobile);
  successMobile.classList.add("hide");
});

dismissDesktop.addEventListener("click", (e) => {
  successDesktop.classList.add("hide");
  newsletter.classList.remove("hide");
});
