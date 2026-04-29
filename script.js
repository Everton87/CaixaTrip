const botao = document.querySelector('.header-menu');
const sidebar = document.querySelector('.sidebar');

if (botao && sidebar) {
    botao.addEventListener('click', () => {
        sidebar.classList.toggle('ativo');
        botao.classList.toggle('ativo');
    });
}


const header = document.querySelector('.header');

if (header) {
    window.addEventListener('scroll', () => {
        if (window.innerWidth > 1024) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}
