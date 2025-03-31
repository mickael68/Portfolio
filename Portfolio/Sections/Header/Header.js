function Header() {
    const div = document.getElementById('header-container');
    div.innerHTML = `
        <header>
            <nav aria-label="Navigation principale">
                <h1>Mickaël Marco</h1>
                <div class="burger-menu" id="burger-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                    </svg>
                </div>
                <ul>
                    <li><a href="#A_propos">A propos</a></li>
                    <li><a href="#projets">Mes Projets</a></li>
                    <li><a href="#competence">Competence</a></li>
                    <li><a href="#formation">Formation</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    `;
}

Header();

const burgerMenu = document.getElementById('burger-menu');
const menu = document.querySelector('nav ul');

burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('nav ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});
