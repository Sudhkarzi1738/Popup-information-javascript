const openBtn=document.querySelector(".open");
const modelcontainer=document.querySelector(".model-container");
const closeBtn=document.querySelector(".model-btn");

openBtn.addEventListener("click",function(){
    modelcontainer.classList.add("show");
})

closeBtn.addEventListener("click",function(){
    modelcontainer.classList.remove("show");
})