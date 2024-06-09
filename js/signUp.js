import Validation from "./validation.js";
// // const str1 = "abc";
// const str2 = "edf";
// console.log(str2.toString());

// const str1 = new String("abc");
// console.log(str1.toString());

const email = document.querySelector("#email");
const loginButton = document.querySelector(".login-button");
const password = document.querySelector("#password");
const confirmPw = document.querySelector("#confirm-password");
const inputError = document.querySelectorAll(".input-error");
const successMessage = document.querySelector(".success-message");
const errorMessage = document.querySelector(".error-message");
const loader = document.querySelector(".loader");
const loginButtonText = document.querySelector(".login-button-text");
function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = email.value;
  const passwordValue = password.value;
  const confirmPwValue = confirmPw.value;

  const validation = new Validation(emailValue, passwordValue, confirmPwValue);
  console.log(isEmpty(validation.error));
  const [nodeEmailErr, nodePwErr, nodeConfirmErr] = inputError;
  validation.toggleErr(nodeEmailErr, validation.error.email);
  validation.toggleErr(nodePwErr, validation.error.password);
  validation.toggleErr(nodeConfirmErr, validation.error.confirmPw);
  if (isEmpty(validation.error)) {
    loginButton.style.pointerEvent = "none";
    loader.style.display = "block";
    loginButtonText.style.display = "none";

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailValue, passwordValue)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        successMessage.style.display = "block";

        window.location.href = "../html/signIn.html";
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMsg = error.message;
        errorMessage.style.display = "block";
        errorMessage.textContent = errorMsg;

        console.log(errorCode);
        console.log(errorMessage);
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 3000);
      })
      .finally(() => {
        loginButton.style.pointerEvent = "auto";
        loader.style.display = "none";
        loginButtonText.style.display = "block";
      });
  }
});
