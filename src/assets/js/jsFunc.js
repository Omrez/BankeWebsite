function myFunc() {

    if(document.getElementById("problemstillinger").selectedIndex == 1){
        //alert("har du strømmen i?");
        document.getElementById("årsag1").style.visibility = "visible";
        var select = document.getElementById('problemstillinger');
        var value = select.options[select.selectedIndex].value;
        //console.log(value);
        

    }if(document.getElementById("årsag1").selectedIndex==1){

        var t = document.createTextNode("Søg efter utæt hydraulikolie, eller Kontakt Opbygger");
        
        document.getElementById("fejlName").appendChild(t);
        document.getElementById("fejlName").style.visibility = "visible";
      
        console.log("vognnr value: ",document.getElementById('vognNr').value);
        console.log("fejlmelding value: ",document.getElementById("fejlName").innerHTML);
     
    }
}

function loginForm(){
    document.getElementById('loginContent').style.display = 'block';
    
    //document.body.style.overflow = 'hidden';
}

function hidePopup(){
    document.querySelector(".modal").style.display = "none";
   
}

function getIdString(){
    var select = document.getElementById('problemstillinger');
    var value = select.options[select.selectedIndex].value;
    //console.log(value);
}

function successAlert(){
   
      alert("Successfully ")
   
}

function changeLang(){
    document.documentElement.lang = 'es';
}