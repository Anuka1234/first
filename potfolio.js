const btn = document.querySelector("#btn");
const modal = document.querySelector(".modal");
btn.addEventListener("click",()=>{
    modal.style.visibility ="unset";
    console.log("garch irlee")
});
window.addEventListener("click", (e) => {
    if(e.target == modal){
        modal.style.visibility = "hidden";
    }

})
const cal = document.querySelector("#cal");
const cons = document.querySelector(".cons");
cal.addEventListener("click",()=>{
    cons.style.visibility ="unset";
    console.log("garch irlee")
});
window.addEventListener("click", (e) => {
    if(e.target == cons){
        cons.style.visibility = "hidden";
    }

})
const zrg = document.querySelector("#zrg");
const album = document.querySelector(".album");
zrg.addEventListener("click",()=>{
    album.style.visibility ="unset";
    console.log("garch irlee")
});
window.addEventListener("click", (e) => {
    if(e.target == album){
        album.style.visibility = "hidden";
    }

})




