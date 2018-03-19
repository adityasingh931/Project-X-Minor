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
});

login.addEventListener("click", function () {
    loginView();
});

function loginView() {
    for (var i = 0; i < hidden.length; i++) {
        hidden[i].classList.add("hidden");
    }
    // signup.classList.remove("active");
    signup.classList.remove("btn-info");
    login.classList.add("btn-info");
    // login.classList.add("active");
    document.querySelector("#lgn").classList.remove("hidden");
    document.querySelector(".check").classList.remove("hidden");
    document.querySelector("a.dropdown-item").classList.remove("hidden");
}

function signupView() {
    for (var i = 0; i < hidden.length; i++) {
        hidden[i].classList.remove("hidden");
    }
    // login.classList.remove("inactive");
    login.classList.remove("btn-info");
    signup.classList.add("btn-info");
    // signup.classList.add("active");
    document.querySelector("#lgn").classList.add("hidden");
    document.querySelector(".check").classList.add("hidden");
    document.querySelector("a.dropdown-item").classList.add("hidden");
}
