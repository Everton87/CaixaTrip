const botao = document.querySelector('.header-menu');
const sidebar = document.querySelector('.sidebar');

botao.addEventListener('click', () => {
    sidebar.classList.toggle('ativo');
    botao.classList.toggle('ativo')
});

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});