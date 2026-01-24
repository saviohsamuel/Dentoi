export function initMenu() {
    const menuBtn = document.querySelector('.icon');
    const menu = document.querySelector('.menu');
    if (!menuBtn || !menu) return;
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
    })
}