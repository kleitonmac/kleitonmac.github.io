let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-bars');
    navbar.classList.toggle('open');
};

function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block'; // Mostra o menu
    } else {
        menu.style.display = 'none'; // Esconde o menu
    }
}

let form = document.querySelector("intro");










