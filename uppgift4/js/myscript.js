// Inloggningen 
function password() {

    x = document.getElementById("username").value;
    y = document.getElementById("password").value;


    // Jämför vad som är skrivet med lista av godkända användare och lösenord
    if (x == "Belle Andersson" && y == "Himlenärblå") {

        window.open("secret2.html");
    }
    // Släpp inte in om uppgifterna är fel
    else {
        document.getElementById("myAnswer").innerHTML = "Username or Password is wrong. Please try again. ";
    }
}

// Likes knappen 
function myFunction(x) {
    x.classList.toggle("fa-heart-o");
}

// Visar och döljer en div när man klickar på den
function showHide(id) {
    var x = document.getElementById(id.id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
