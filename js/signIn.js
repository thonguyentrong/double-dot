import Validation from "./validation.js";

const email = document.querySelector("#email");
const loginButton = document.querySelector(".login-button");
const password = document.querySelector("#password");
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
  const validation = new Validation(emailValue, passwordValue);
  console.log(isEmpty(validation.error));
  const [nodeEmailErr, nodePwErr] = inputError;
  validation.toggleErr(nodeEmailErr, validation.error.email);
  validation.toggleErr(nodePwErr, validation.error.password);

  if (isEmpty(validation.error)) {
    let isSuccess = false;
    loginButton.style.pointerEvent = "none";
    loader.style.display = "block";
    loginButtonText.style.display = "none";

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        return firebase
          .auth()
          .signInWithEmailAndPassword(emailValue, passwordValue)
          .then((userCredential) => {
            var user = userCredential.user;
            console.log(user);
            successMessage.style.display = "block";
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMsg = error.message;
            errorMessage.textContent = errorMsg;

            if (errorCode === "auth/internal-error") {
              errorMessage.textContent = "Thông tin sai";
            } else if (errorCode === "auth/too-many-requests") {
              errorMessage.textContent = "Xử lý nhiều yêu cầu";
            } else if (errorMsg) {
              errorMessage.textContent = errorMsg;
            }

            errorMessage.style.display = "block";

            window.location.href = "../html/admin.html"
            
          .finally(() => 
            loginButton.style.pointerEvent = "auto";
            loader.style.display = "none";
            loginButtonText.style.display = "block";
            setTimeout(() => {
              successMessage.style.display = "none";
            }, 3000);
          );
        });
      });
    

//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMsg = error.message;

//       if (!isSuccess) {
//         if (errorCode === "auth/argument-error") {
//           errorMessage.textContent = "Thông tin sai";
//         } else {
//           errorMessage.textContent = errorMsg;
//         }
//         errorMessage.style.display = "block";

//         setTimeout(() => {
//           successMessage.style.display = "none";
//         }, 3000);
//       }
//     })

//     .finally(() => {
//       loginButton.style.pointerEvent = "auto";
//       loader.style.display = "none";
//       loginButtonText.style.display = "block";
//       isSuccess = false;
//     });
// }

//Truethy, falsy
//falsy (sai): false, null, undefined, 0, NaN, ""
