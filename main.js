
// change navbar style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// Show/Hide FAQ's answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // chnange arrow icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === "uil uil-plus") {
            icon.className = "uil uil-minus";
        }
        else {
            icon.className = 'uil uil-plus';
        }
    })
})



// SHOW/HIDE MOBILE MENU (NAVBAR)
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

// show menu

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
})

// hide menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener("click", closeNav);
