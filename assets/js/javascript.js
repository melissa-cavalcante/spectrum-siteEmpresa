const divButton = document.querySelector("#btn-toggle");
  
function myFunction(x) {
    x.classList.toggle("change");
}
  
  
  divButton.addEventListener("click", myFunction);
  