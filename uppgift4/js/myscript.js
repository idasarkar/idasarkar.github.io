// Inloggningen 
function password() {

    user = document.getElementById("username").value;
    pass = document.getElementById("password").value;


    // Jämför vad som är skrivet med lista av godkända användare och lösenord
    if (user == "Belle Andersson" && pass == "Himlenärblå") {
        loginuser(user);
        window.open("secret2.html", "_top");
    }
    // Släpp inte in om uppgifterna är fel
    else {
        logoutuser();
        document.getElementById("myAnswer").innerHTML = "Username or Password is wrong. Please try again. ";
    }
}

//Sparar användaren i session
function loginuser(name) {
    sessionStorage.setItem("username", name);
}

//Tarbort användaren i session
function logoutuser() {
    sessionStorage.setItem("username", "");
}

//Loggar ut användaren och laddar om sidan
function logoutandreload() {
    logoutuser();
    location = location;
    return false;
}

//Hämta användaren ifrån sessionen
function getuser() {
    return sessionStorage.getItem("username");
}

//Den sätter användarnamn och profilbild
function checkloggedinuser() {
    var user = getuser();
    if ((user != "") && (user != null)) {
        document.getElementById("username").innerHTML = user;
        document.getElementById("headerimage").src = "images/" + user + ".jpg";
        document.getElementById("newpostimage").src = "images/" + user + ".jpg";
        document.getElementById("loggedinuser").innerHTML = user;
    } else {
        window.location.replace("login.html");
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
