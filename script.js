/* adding invalid background coloring for required input after user clicks on the field */
let inp = document.querySelectorAll("input")
inp.forEach(n => n.addEventListener("click", function(){
    n.classList.add("inputInvalid")
}))

/* to check if password and confirm password has the same characters */
let pass = document.querySelector("#pass")
let confirmPass = document.querySelector("#confirm-pass")
confirmPass.addEventListener("click",function(){
    if(pass.value != confirmPass.value){
        confirmPass.setAttribute("pattern" , `${pass.value}`);
    }
})
