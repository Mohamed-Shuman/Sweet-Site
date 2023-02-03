
let cartImg = document.querySelector(".cart-img")
// console.log(cartImg)
let imgch = document.querySelectorAll(".main-fig .sub-fig");
cartImg.onclick=function(){
    window.location.assign("cart.html")
} 
let co = document.querySelector(".contt")

imgch.forEach((figure) => {
    figure.addEventListener("click",()=>{
        window.localStorage.setItem("product",figure.value);
    })
});
let removeAll = document.querySelector(".Action")
let remove = document.querySelector(".remove")
let item = document.querySelector(".Cart-Items")
removeAll.addEventListener("click",function(){
    item.remove();
})
remove.addEventListener("click",function(){
    item.remove()
})
// check out
let check = document.querySelector(".button")
check.addEventListener("click",function(){
    // create Overlay div
    let overlay = document.createElement("div")
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay)
    let popupCheckOut = document.createElement("div")
    let btn = document.createElement("button")
    btn.innerHTML = "Done !";
    overlay.appendChild(popupCheckOut)
    popupCheckOut.className = "popup-checkout";
    popupCheckOut.appendChild(btn)
    document.body.appendChild(popupCheckOut)
    btn.addEventListener("click",function(){
        overlay.remove();
        popupCheckOut.remove();
    })
})
// counter
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let counter = document.querySelector(".count")
btn1.addEventListener("click",function(){
    counter.innerHTML++;
})
btn2.addEventListener("click",function(){
    counter.innerHTML--;
})