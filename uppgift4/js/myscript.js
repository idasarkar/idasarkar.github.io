// Inloggningen 
function password() {

    user = document.getElementById("username").value;
    pass = document.getElementById("password").value;


    // Jämför vad som är skrivet med lista av godkända användare och lösenord
    if (user == "Belle Andersson" && pass == "Himlenärblå") {
        loginuser(user);
        window.open("secret2.html");
    }
    // Släpp inte in om uppgifterna är fel
    else {
        logoutuser();
        document.getElementById("myAnswer").innerHTML = "Username or Password is wrong. Please try again. ";
    }
}

//sparar användaren i session
function loginuser(name) {
    sessionStorage.setItem("username", name);
}

//tarbort användaren i session
function logoutuser() {
    sessionStorage.setItem("username", "")
}

//Hämta användaren ifrån sessionen
function getuser() {
    return sessionStorage.getItem("username")
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
