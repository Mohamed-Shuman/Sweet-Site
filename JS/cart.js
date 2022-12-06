
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
// co.innerHTML=`your product is : `

