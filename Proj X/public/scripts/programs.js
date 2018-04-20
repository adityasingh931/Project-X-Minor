// business users & work users selection
var bussUser = document.getElementById("business-user");
var workUser = document.getElementById("work-user");

bussUser.addEventListener("click", function () {
    loginView();
});

workUser.addEventListener("click", function () {
    loginView();
});

// form login & sign-up control
var signup = document.querySelector("#signup");
var login = document.querySelector("#login");
var hidden = document.querySelectorAll(".hidden");

signup.addEventListener("click", function () {
    signupView();
    hidden
});

login.addEventListener("click", function () {
    loginView();
});

function loginView() {
    for (var i = 0; i < hidden.length; i++) {
        hidden[i].classList.add("hidden");
    }
    document.querySelector("#login-btn").classList.remove("hidden");
    document.querySelector(".check").classList.remove("hidden");
    document.querySelector("a.dropdown-item").classList.remove("hidden");
    login.classList.add("active");
    signup.classList.remove("active");
    document.forms[0].action = "/login";
    login.children[0].style.color = "#337ab7";
    signup.children[0].style.color = "grey";
    document.querySelector(".px-4").reset();
    removeRequired();
}

function signupView() {
    for (var i = 0; i < hidden.length; i++) {
        hidden[i].classList.remove("hidden");
    }
    document.querySelector("#login-btn").classList.add("hidden");
    document.querySelector(".check").classList.add("hidden");
    document.querySelector("a.dropdown-item").classList.add("hidden");
    signup.classList.add("active");
    login.classList.remove("active");
    document.forms[0].action = "/signup";
    signup.children[0].style.color = "#337ab7";
    login.children[0].style.color = "grey";
    document.querySelector(".px-4").reset();
    addRequired();
}

// adding required function for signup view
function addRequired() {
    document.getElementById("first-name").required = true;
    document.getElementById("last-name").required = true;
    document.getElementById("re-enter-password").required = true;
    document.getElementById("terms").required = true;
}

// removing required function for login view
function removeRequired() {
    document.getElementById("first-name").required = false;
    document.getElementById("last-name").required = false;
    document.getElementById("re-enter-password").required = false;
    document.getElementById("terms").required = false;
}

// verify password and re-enter password are same in signup view
document.getElementById("re-enter-password").addEventListener("blur", passValidate);

function passValidate() {
    if (document.getElementById("re-enter-password").value !== password.value) {
        document.querySelector(".error-msg strong").innerText = "Password & Re-Enter password not matched";
        $(".error-msg").fadeIn(1200, function () {
            $(".error-msg").fadeOut(5000);
        });
        document.getElementById("signup-btn").disabled = true;
        // To handle situation where 'password field' is entered with extra characters after entering 're-enter-password field'
        password.addEventListener("blur", passValidate);
    } else {
        document.getElementById("signup-btn").disabled = false;
    }
}

/*$(document).ready(function () {
    $("window").scroll(function () {
        $("#navbar1").removeClass("navbar-default");
    });
});*/