
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
        if (icon.className === "uil uil-plus"){
            icon.className = "uil uil-minus";
        }
        else{
            icon.className = 'uil uil-plus';
        }
    })
})