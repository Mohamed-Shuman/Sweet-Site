// Start randum background
let images= ["/ima/1.jpg","/ima/2.webp","/ima/3.jpg"];
let h = document.querySelector("[name='slid']");
let i=0;
function s(){
    h.style.cssText=`background-image: url(${images[i]}) `;
    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("s()",3000);
}
s();
// End randum background

// burger menu
let links = document.querySelector(".links-container .links");
let burgIcon = document.querySelector(".links-container i");
burgIcon.addEventListener("click",(e)=>{
    links.classList.toggle("open")
}) 
links.addEventListener("click",function(e){
    e.stopPropagation()
})

document.addEventListener("click",function(e){
    if(e.target !== burgIcon && e.target !== links){
        if(links.classList.contains("open")){
            links.classList.toggle("open")
        }
    }
})
// End menu

// Start More button onclick 
let more=document.querySelector(".more")
more.addEventListener("click",function(){
    window.location.assign("../HTML/services.html")

});
// End More button onclick 

// Start arrow Image
let scrollImg = document.querySelector(".arrow-img")
window.onscroll=function(){
    if(window.scrollY>=560){
        scrollImg.style.display="block";
    }
    else{
        scrollImg.style.display="none";
    }
}
scrollImg.addEventListener("click",function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth",
    })
});
// End arrow Image

//Start sub figure
let subFigure = document.querySelectorAll(".sub-fig");
let figImage = document.querySelector(".sub-fig a img")
subFigure.forEach((subFig)=>{
    subFig.addEventListener("click",function(e){
        // create Overlay div
        let overlay = document.createElement("div")
        overlay.className = "popup-overlay";
        document.body.appendChild(overlay)
        let popUpBox = document.createElement("div")
        // create close span
        let close = document.createElement("span")
        close.className = "close-span"
        close.innerHTML = "&times;"
        popUpBox.appendChild(close);
        let popupImage = document.createElement("img")
        popUpBox.className = "popup-box";
        overlay.appendChild(popUpBox);
        popupImage.className = "popup-img";
        popupImage.src = "";
        popUpBox.appendChild(popupImage)
        let moreLink = document.createElement("a")
        moreLink.href = "../HTML/cart.html";
        let h2 = document.createElement("h2")
        let h2Text = document.createTextNode("Add To Cart")
        moreLink.appendChild(h2Text)
        h2.appendChild(moreLink)
        popUpBox.appendChild(h2)
        popupImage.src = figImage.src;
    })
})
document.addEventListener("click",(e)=>{
    if(e.target.className == "close-span"){
        document.querySelector(".popup-overlay").remove()
    }
})
//End sub figure