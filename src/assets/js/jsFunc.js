function myFunc() {

    if(document.getElementById("problemstillinger").selectedIndex = 1){
        //alert("har du strømmen i?");
        document.getElementById("årsag1").style.visibility = "visible";
        
        
        

    }if(document.getElementById("mo").selected) {
        var t = document.createTextNode("Søg efter utæt hydraulikolie, eller Kontakt Opbygger");
        
        document.getElementById("fejlName").appendChild(t);
        document.getElementById("fejlName").style.visibility = "visible";
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

function clearAll(){
    document.getElementById("vognNr").value = '';
    document.getElementById("serieNr").value = '';
    document.getElementById("problemstillinger").selectedIndex = 0;
    /*document.getElementById("årsag1").selectedIndex = 0;
    window.location.reload();
    document.querySelectorAll('select').forEach( select => {
        select.selectedIndex = 0;
        
      });
    document.querySelectorAll('input').forEach( input => {
        input.value = '';
        
      });*/
    //document.getElementById('fejlName').value = '';
    document.getElementById('årsag1').style.visibility  ='hidden';
      
   
}

function changeLang(){
    document.documentElement.lang = 'es';
}