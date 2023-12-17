const mob_nav = document.querySelector(".burger");
const head = document.querySelector(".header");

const toogle = () => {
    head.classList.toggle("active");    
    // alert("k")
};

mob_nav.addEventListener("click",()=> toogle());