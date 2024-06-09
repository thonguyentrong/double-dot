class Validation {
  constructor(email, password, confirmPw) {
    this.email = email;
    this.password = password;
    this.confirmPw = confirmPw;
    this.error = {};
    this.isEmail();
    this.isPassword();
  }
  isEmail() {
    const regexEmail =
      /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!regexEmail.test(this.email)) {
      this.error.email = "Bạn vui lòng nhập đúng email";
    }
  }
  isPassword() {
    //   const regexPassword =
    //     /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    //   if (!regexPassword.test(this.password)) {
    //     this.error.password = "Bạn vui lòng nhập đúng password";
    //   }
    // }
    if (this.password.length < 1) {
      this.error.password = "Bạn vui lòng nhập đúng password";
    }
  }
  isConfirmPw() {
    const regexConfirmPw =
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    if (this.confirmPw === "") {
      this.error.confirm = "Bạn vui lòng xác thực lại mật khẩu";
    }
    if (this.password !== this.confirmPw) {
      this.error.confirmPw = "Bạn vui lòng nhập lại mk cho đúng";
    }
  }

  toggleErr(node, err) {
    node.textContent = err;
    node.style.visibility = err ? "visible" : "hidden";
    node.parentNode.className = err ? "form-control has-error" : "form-control";
    // node.parentNode.classList.add("has-error");
  }

  // hideErr(node, err) {
  //   node.textContent = err;
  //   node.style.visibility = "hidden";
  //   node.parentNode.classList.remove("has-error");
  // }
}

export default Validation;

// const lan1 = new validation("lan1@gmail.com", "123456", "123456");
// const lan2 = new validation("245768645", "Abcx6z12@", "Abcx6z12@");
// lan1.isConfirmPw();
// lan2.isConfirmPw();
