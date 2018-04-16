/// Navbar scroll event trigger
window.onscroll = function () { myFunction() };
function myFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("navbar1").classList.add("navbar-default1");
    } else {
        document.getElementById("navbar1").classList.remove("navbar-default1");
    }
}