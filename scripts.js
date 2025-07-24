// Lógica para o menu hambúrguer
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Lógica para adicionar a classe fade
document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body');
    body.classList.add('in');
});

// Lógica para o FAQ
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function () {
            // Fecha todas as FAQs abertas, exceto a clicada
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Abre ou fecha a FAQ clicada
            item.classList.toggle('active');

            // Rola a página até a pergunta aberta, se estiver ativa
            if (item.classList.contains('active')) {
                item.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// Lógica para o Back to Top
const backToTopButton = document.querySelector('.back-to-top');

if (backToTopButton) { // Verifica se o botão existe
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault(); // Evita o comportamento padrão do link
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rola suavemente para o topo da página
        });
    });

    // Mostrar/ocultar o botão Back to Top ao rolar a página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block'; // Mostra o botão
        } else {
            backToTopButton.style.display = 'none'; // Oculta o botão
        }
    });
} else {
    console.error('Botão "Back to Top" não encontrado!');
}
