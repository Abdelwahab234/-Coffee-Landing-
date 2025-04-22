
nav = document.querySelector("body header .navlist");
menuIcon = document.querySelector("#menu-icon");
let acces = 0;
let save = null;
menuIcon.onclick = function(){
    nav.classList.toggle("active");
    
    console.log("im here" , this.classList);
}
