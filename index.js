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