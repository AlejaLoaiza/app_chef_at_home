function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('menu-visible'); 
}

let slideIndex = 0;
mostrarSlide(slideIndex);

function cambiarSlide(n) {
    mostrarSlide(slideIndex += n);
}

function mostrarSlide(n) {
    const testimonio = document.getElementsByClassName("testimonio");
    if (n >= testimonio.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = testimonio.length - 1; }
    
    for (let i = 0; i < testimonio.length; i++) {
        testimonio[i].classList.remove("active");
    }
    
    testimonio[slideIndex].classList.add("active");
}