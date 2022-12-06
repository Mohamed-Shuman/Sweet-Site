let usern = document.querySelector("[name='firstname']");
let lUsername = document.querySelector("[name='lastname']");
let mail = document.querySelector("[name='email']");
document.forms[0].onsubmit= function (e) {
    let uinvalid=false;
    let luinvalid=false;
    let mailinvalid=false;

    if(usern.value!=="" && usern.value.length<=10){
         uinvalid=true;    
    }
    if(lUsername.value!=="" && lUsername.Value.length<=10){
         luinvalid=true;  
    }
    if(mail.value!=="" && mail.Value.length>=20){
        mailinvalid=true;
    }

    if(uinvalid===false || luinvalid===false || mailinvalid===false){
        e.preventDefault();
    }    

};