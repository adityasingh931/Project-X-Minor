// rendering redirect message
var time = 5;
var intervalId = setInterval(function () {
    if (time > 0) {
        document.querySelector("#timer span").innerHTML = time;
        time--;
    } else if (time == 0) {
        document.querySelector("#timer").innerText = "Redirecting ....."
    }
    else {
        clearInterval(intervalId);
    }
}, 1000);

//redirecting
/* setTimeout(function () {
    window.location.href = "/";
}, 6000); */
