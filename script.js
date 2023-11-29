// NAVIGATION BAR TOGGLER LOGIC
document.getElementById('mobile-menu').addEventListener('click', function () {
    let nav= document.getElementById('nav');
    let menu= document.getElementById("menu");
    let rightnav= document.getElementById('right')
    nav.classList.toggle('resp-nav')
    menu.classList.toggle('resp-menu')
    rightnav.classList.toggle('resp-right-nav')
});
