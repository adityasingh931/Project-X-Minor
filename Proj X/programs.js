var bussUser = document.getElementById("business-user");
var workUser = document.getElementById("work-user");
var lgnFlag = false;  //variable to track state of login form

bussUser.addEventListener("click", function () {
    if (lgnFlag) {
        loginView();
    }
});

workUser.addEventListener("click", function () {
    if (lgnFlag) {
        loginView();
    }
});

// form login & sign-up control
var signup = document.querySelector("#signup");
var login = document.querySelector("#login");
var hidden = document.querySelectorAll(".hidden");

signup.addEventListener("click", function () {
    signupView();
    lgnFlag = !lgnFlag;
});

login.addEventListener("click", function () {
    loginView();
});

function loginView(){
    for (var i = 0; i < hidden.length; i++) {
        hidden[i].classList.add("hidden");
    }
    signup.classList.remove("active");
    signup.classList.remove("btn-info");
    login.classList.add("btn-info");
    login.classList.add("active");
    document.querySelector("#lgn").classList.remove("hidden");
}

function signupView(){
    for (var i = 0; i < hidden.length; i++) {
        hidden[i].classList.remove("hidden");
    }
    login.classList.remove("active");
    login.classList.remove("btn-info");
    signup.classList.add("btn-info");
    signup.classList.add("active");
    document.querySelector("#lgn").classList.add("hidden");
}
