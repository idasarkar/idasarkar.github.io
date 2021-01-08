
function password() {

    x = document.getElementById("username").value;
    y = document.getElementById("password").value;


    if (x == "Belle Andersson" && y == "Himlenärblå") {

        window.open("secret2.html");
    }


    else {
        document.getElementById("myAnswer").innerHTML = "Username or Password is wrong. Please try again. ";
    }
}


function myFunction(x) {
    x.classList.toggle("fa-heart-o");
}

function showHide(id) {
    var x = document.getElementById(id.id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
