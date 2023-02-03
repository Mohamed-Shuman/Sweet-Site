let usern = document.querySelector("#user-name");
let mail = document.querySelector("#email-inp");
// form check
let emailRegExp = /(\W|^)[\w.\-]{0,25}@(yahoo|hotmail|gmail)\.com(\W|$)/;
let bassRegExp = 
document.forms[0].onsubmit= function (e) {
    let uinvalid=false;
    let mailinvalid=false;
    if(usern.value!=="" && usern.value.length<=10){
        uinvalid=true;
    }
    if(mail.value!=="" && mail.Value.length>=20){
        mailinvalid=true;
    }
    if(uinvalid===false || mailinvalid===false || regExp.test(emailRegExp.value) === false){
        e.preventDefault();
    }    
};
// sign in pop-up
let signIn = document.querySelector(".log span")
signIn.addEventListener("click",function(){
    // create Overlay div
    window.scrollY = 0;
    let htmlcode = `<div class="card-two">
    <h3>Sign up</h3>
    <form action="">
        <label>Email</label>
        <input id="email-inp" type="email" name="email">
        <label>Password</label>
        <input id="password" type="password" name="password">
        <input id="submit" type="submit" name="submit">
    </form>
    <div class="icons">
        <i class="fa-brands fa-square-google-plus"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-linkedin"></i>
    </div>
    <p class="log2">Not a user? <span>SIGN UP</span></p>
</div>`;
    let overlay = document.createElement("div")
    overlay.className = "popup-overlay2";
    overlay.innerHTML = htmlcode;
    document.body.appendChild(overlay)
    document.querySelector(".popup-overlay2").addEventListener("click",(e)=>{
        if(e.target.className === "popup-overlay2"){
            document.querySelector(".popup-overlay2").remove();
        }
    })
})
//End sub figure