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
let more=document.querySelector(".more")
more.addEventListener("click",function(){
    window.location.assign("services.html")
});
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