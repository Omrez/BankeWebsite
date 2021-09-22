function myFunc() {

    if(document.getElementById("problemstillinger").selectedIndex = 1){
        //alert("har du strømmen i?");
        document.getElementById("årsag1").style.visibility = "visible";
        console.log(document.getElementsByTagName('option').innerHTML);
        

    }else if(document.getElementById("na").selected) {
        alert("Påfyld Olie");
        //document.getElementById("option3").style.display = "block";
    }else if(document.getElementById("problem5").selected){
        document.getElementById("problem2").style.display = "none";
        document.getElementById("årsag4").style.visibility = "visible";
    }if(document.getElementById("fpls").selected){
        //alert("Søg efter utæt hydraulikolie, eller Kontakt Opbygger");

        //var pTag = document.createElement("INPUT");
        //var getP = document.getElementById('fejlName');
        //pTag.type = "text";
        
        var t = document.createTextNode("Søg efter utæt hydraulikolie, eller Kontakt Opbygger");
        
        document.getElementById("fejlName").appendChild(t);
        document.getElementById("fejlName").style.visibility = "visible";
      


        console.log("vognnr value: ",document.getElementById('vognNr').value);
        console.log("fejlmelding value: ",document.getElementById("fejlName").innerHTML);
        
        
       
        
    }
}

function changeLang(){
    document.documentElement.lang = 'es';
}