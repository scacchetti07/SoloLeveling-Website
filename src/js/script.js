// Declaração de variáveis com DOM
const headerMenu = document.querySelector(".header-menu");
const sanduiche = document.querySelector(".sanduiche"); // Seleciona a primeira instância da classe sanduiche no html e retorna o objeto

// Criando function

function toggleMenu() {
    // Ele adiciona a classe 'active' caso o elemento exista, se não ele remove.
    sanduiche.classList.toggle('active');
    headerMenu.classList.toggle('active');
}
// Criar evento, que ao clicar executa a function
sanduiche.addEventListener('click', toggleMenu);

headerMenu.addEventListener('click', (event) => {
    // Verifica qual classe que recebe esse nome
    if (event.target.classList.contains('item-menu')) {
        toggleMenu();
    }
});

// Declarando um Array de imagens
const banners = [
    './src/assets/banners/banner1.jpg',
    './src/assets/banners/banner2.jpeg',
    './src/assets/banners/banner3.jpg',
    './src/assets/banners/banner4.png',
];

// Declarando as variáveis
let i = 0; // Index
const tempo = 3000; // Tempo entre troca das imagens
const hero = document.querySelector(".hero");

// Criando a função do slideshow

function slideshow() {
    if (hero) {
        hero.style.backgroundImage = `var(--gradient), url(${banners[i]})`;
    }

    i++;
    if (i == banners.length) {
        i = 0;
    }
    setTimeout(slideshow, tempo);
}
slideshow();

// Evento que que carrega a pagina antes de ser analisado pelo css

document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.motiva-grid-item'); // Pega todos com a classe especificada
    const modalContainer = document.getElementById('modal-container');
    const modalImage = document.getElementById('modal-image');
    const modalTexto = document.getElementById('modal-text');
    const closeButton = document.querySelector('.close-btn');

    gridItems.forEach((item) => {
        const link = item.querySelector('a');
        link?.addEventListener('click', e => {
            e.preventDefault(); // impedir que o link navegue antes de executar
            const img = item.querySelector('img');
            const text = item.querySelector('p');

            if (img && text) {
                modalImage.src = img.src;
                modalImage.alt = img.alt;
                modalTexto.textContent = text.textContent;
                modalContainer.style.display = 'flex'; // exibe a modal
            }
        })
    });

    const closeModal = () => {
        modalContainer.style.display = 'none';
    }
    closeButton.addEventListener("click", closeModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            closeModal();
        }
    })
})