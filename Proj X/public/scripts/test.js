// redirecting back to homePage in 5 seconds script

        // rendering redirect message
        var time = 5;
        var intervalId = setInterval(function () {
            if (time > 0) {
                document.querySelector("#timer span").innerHTML = time;
                time--;
            } else if (time == 0) {
                document.querySelector("#timer").innerText = "Redirecting ......"
            }
            else {
                clearInterval(intervalId);
            }
        }, 1000);

        //redirecting
        setTimeout(function () {
            window.location.href = "/";
        }, 5000);

        /*
//query on db
bussUser.create({
    firstName: "Adarsh",
    lastName: "Aggarwal",
    email: "adarsh.steel10@gmail.com",
    password: "23101",
    rePassword: "23101",
    terms: true
}, function (err, returnVal) {
    if (err) {
        console.log("Some Error occured.");
        console.log(err);
    } else {
        console.log("Collection added to db");
        console.log(returnVal);
    }
});

bussUser.find({}, function (err, returnVal) {
    if (err) {
        console.log("Some Error occured.");
        console.log(err);
    } else {
        console.log("Here is the list of all values in db's business User Collection");
        console.log(returnVal);
    }
}); */