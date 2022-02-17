let toggle = document.querySelector(".nav-toggler");
let aside = document.querySelector(".aside");

toggle.onclick = function() {
    aside.classList.toggle('visivel');
}

let hashchange_handler = function() {
    let hash = window.location.hash;

    let myTabs = document.getElementById('nav');

    let active;
    while (active = nav.querySelector('.invisivel'))
        active.classList.remove("active");

    active = nav.querySelector('.visivel')
    active.parentNode.classList.add("active");
}

if (window.location.hash)
    window.addEventListener("load", hashchange_handler)
window.addEventListener("hashchange", hashchange_handler);