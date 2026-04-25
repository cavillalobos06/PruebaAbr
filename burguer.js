const abrir = document.querySelector('.abrir');
const cerrar = document.querySelector('.cerrar');
const navList = document.querySelector('.nav-list');

abrir.addEventListener('click', () => {
    navList.classList.add('active');
});

cerrar.addEventListener('click', () => {
    navList.classList.remove('active');
});