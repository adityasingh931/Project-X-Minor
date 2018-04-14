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
});

login.addEventListener("click", function () {
    loginView();
});

function loginView() {
    for (var i = 0; i < hidden.length; i++) {
        hidden[i].classList.add("hidden");
    }
    document.querySelector("#lgn").classList.remove("hidden");
    document.querySelector(".check").classList.remove("hidden");
    document.querySelector("a.dropdown-item").classList.remove("hidden");
    login.classList.add("active");
    signup.classList.remove("active");
    login.children[0].style.color = "#337ab7";
    signup.children[0].style.color = "grey";
}

function signupView() {
    for (var i = 0; i < hidden.length; i++) {
        hidden[i].classList.remove("hidden");
    }
    document.querySelector("#lgn").classList.add("hidden");
    document.querySelector(".check").classList.add("hidden");
    document.querySelector("a.dropdown-item").classList.add("hidden");
    signup.classList.add("active");
    login.classList.remove("active");
    signup.children[0].style.color = "#337ab7";
    login.children[0].style.color = "grey";
}

/*$(document).ready(function () {
    $("window").scroll(function () {
        $("#navbar1").removeClass("navbar-default");
    });
});*/