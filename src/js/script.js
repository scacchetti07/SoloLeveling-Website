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