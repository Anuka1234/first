const btn = document.querySelector("#btn")
const modal = document.querySelector(".modal")

btn.addEventListener("click", (e)=>{
   
        modal.style.visibility = "unset";
        console.log("garch irlee")
    
});
window.addEventListener("click", (e)=>{
    if(e.target== modal){
        modal.style.visibility="hidden"
    }
});
const email = document.getElementById("email");
const pass = document.getElementById("password");
const Logbtn = document.getElementById("Logbtn");
Logbtn.addEventListener("click",() => {
    if(email.value !=0 && pass.value !=0){
        if(email.value == "ganuzin0@gmail.com"&& pass.value == "1234"){
            location.href= "flex.html                        ";
        } 
        else{
            alert("wrong email or passwor...");
        }
    }
    else{
        alert("Please enter your pass or email")
    }
})
