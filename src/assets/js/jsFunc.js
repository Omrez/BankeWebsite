

function loginForm(){
    var popup = document.getElementById('loginContent').style.display = 'block';
    
    //var popup = document.getElementById("loginContent");
    popup.classList.toggle("show");
    //document.body.style.overflow = 'hidden';
}

function signForm(){
    document.getElementById('signupContent').style.display = 'none';
    document.getElementById('loginContent').style.display = 'block';
}

function signupForm(){
    document.getElementById('loginContent').style.display = 'none';
    document.getElementById('signupContent').style.display = 'block';
}

function hidePopup(){
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".modal2").style.display = "none";  
}

function changeLang(){
    document.documentElement.lang = 'es';
}