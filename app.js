
// passer de noir à blanc

let buttonClic = document.getElementById("button-clic");
document.body.style.background ="black";

buttonClic.addEventListener("click", function(){
    document.body.style.background = "white";
    document.body.style.transition = "7s";
    setTimeout(()=>{
       document.body.style.background = "black";
        }, 7000)
})

