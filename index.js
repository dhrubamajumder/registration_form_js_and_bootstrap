function showForm(type) {
  document.getElementById("registerForm").classList.add("d-none");
  document.getElementById("loginForm").classList.add("d-none");

  if (type === "register") {
    document.getElementById("registerForm").classList.remove("d-none");
  } else if (type === "login") {
    document.getElementById("loginForm").classList.remove("d-none");
  }
}

function register() {
  const fullname = document.getElementById("regFullname").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regpassword").value;

  // Register form empty value remender --------------------
  if (!fullname) {
    alert("Please enter your full name.");
  }

  if (!email) {
    alert("Please enter your email.");
  }

  if (!password) {
    alert("Please enter your password.");
  }

  // Register form input value (save in localstorage)  ------------
  const user = { fullname, email, password };
  localStorage.setItem(email, JSON.stringify(user));
  alert("Registration successfull ! You can now login.");

  // Register form input value empty    ---------------
  document.getElementById("regFullname").value = "";
  document.getElementById("regEmail").value = "";
  document.getElementById("regpassword").value = "";

  showForm("login");
}

function login() {
  const email = document.getElementById("logingEmail").value;
  const inputpassword = document.getElementById("loginpassword").value;

  // form validation check
  if (!email) {
    alert("Email field is required!");
  }
  if (!inputpassword) {
    alert("Password field is required!");
  }
  // form validation check

  // get data by email
  const user = localStorage.getItem(email);
  console.log("user is :", user);
  // get data by email

  // user check by email
  if (!user) {
    alert("user not exist!");
    return;
  }

  // convert into string to object
  const parseuser = JSON.parse(user);

  // password check
  if (inputpassword != parseuser.password) {
    alert("Incorrect password");
    return;
  }

  alert("Login successfull! " + parseuser.fullname);

  // form data reset 
  document.getElementById("logingEmail").value = "";
  document.getElementById("loginpassword").value = "";
}
