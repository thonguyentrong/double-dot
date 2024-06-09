const dropDownEmail = document.querySelector(".dropdown-email");
const logOut = document.querySelector(".header-dropdown-item:last-child p");

const user = JSON.parse(
  sessionStorage.getItem(
    "firebase:authUser:AIzaSyDrf9k0fRLEKQqF44Y0ExAfk4L25gRdYRk:[DEFAULT]"
  )
);
// console.log(JSON.parse(user));
// if (!user) {
//   window.location.href = "../html/signIn.html";
// }

dropDownEmail.textContent = user.email;

logOut.addEventListener("click", () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      window.location.href = "../html/signIn.html";
    })
    .catch((error) => {
      // An error happened.
    });
});
