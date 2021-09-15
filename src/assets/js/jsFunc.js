function myFunc() {

    if(document.getElementById("problem1").selected){
        //alert("har du strømmen i?");
        document.getElementById("årsag1").style.display = "block";
        

    }else if(document.getElementById("na").selected) {
        alert("Påfyld Olie");
        //document.getElementById("option3").style.display = "block";
    }else if(document.getElementById("problem5").selected){
        document.getElementById("problem2").style.display = "none";
        document.getElementById("årsag4").style.display = "block";
    }if(document.getElementById("fpls").selected){
        //alert("Søg efter utæt hydraulikolie, eller Kontakt Opbygger");

        //var pTag = document.createElement("INPUT");
        //var getP = document.getElementById('fejlName');
        //pTag.type = "text";
        
        var t = document.createTextNode("Søg efter utæt hydraulikolie, eller Kontakt Opbygger");
        
        document.getElementById("fejlName").value = "for testing";
        //document.getElementById("fejlName").setAttribute("readonly", "true");


        console.log("vognnr value: ",document.getElementById('vognNr').value);
        console.log("fejlmelding value: ",document.getElementById("fejlName").value);
        
        
       
        
    }
}
