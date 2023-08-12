let inp = document.querySelectorAll("input")
inp.forEach(n => n.addEventListener("click", function(){
    n.classList.add("inputInvalid")
}))