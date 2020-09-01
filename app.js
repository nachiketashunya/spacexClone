/* toggle hide class to hamberger menu */
let hamberger = document.querySelector(".hamberger-show");
let hambergerMenu = document.querySelector(".hamberger-menu");
let hambergerHideBtn = document.querySelector(".hamberger-hide-btn");

//add event to hamberger show btn
hamberger.addEventListener("click", showHambergerMenu);

function showHambergerMenu(){
    hambergerMenu.classList.toggle("show");
}


//add event to hamberger hide btn
hambergerHideBtn.addEventListener("click", hideHambergerMenu);

function hideHambergerMenu(){
    hambergerMenu.classList.toggle("show");
}