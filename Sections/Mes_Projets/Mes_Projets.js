function afficherProjets(type) {
    let div = document.getElementById('projets-container');
    if (type === 'universitaire') {
        div.innerHTML = `
            <h1 class="title-projets">Mes expériences académiques</h1>
            <div class="carousel-container">
                <button class="carousel-button prev" onclick="previousPage()">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white">
                        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
                    </svg>
                </button>
                <div class="carousel">
                    <div class="carousel-item">
                        <h1 class="title-projets">Projet de mise en application de la méthode de projet Agile « EPICUR » - Septembre 2024</h1>
                        <div class="card">
                            <img src="Image/Epicur.jpg" alt="Epicur">
                            <div class="card-content">
                                <h3>Travail de groupe en anglais avec des étudiants internationaux pour une prise en main des outils de gestion de projet.</h3>
                                <br>
                                <b>Frameworks :</b> <p>Scrum, méthode de projet Agile.</p>
                                <b>Logiciels :</b> <p>Slack, Confluence, Jira.</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <h1 class="title-projets">Projet en autonomie « fil rouge » - Septembre à novembre 2024</h1>
                        <div class="card">
                            <img src="Image/Logo.png" alt="Fil rouge">
                            <div class="card-content">
                                <h3>Développement d’un site web dynamique : mise en application des compétences en programmation web.</h3>
                                <br>
                                <b>Langages :</b> <p>PHP, Javascript, JSON, SQL, HTML/CSS, Bash.</p>
                                <b>Base de données :</b> <p>MySQL.</p>
                                <b>Logiciels :</b> <p>Visual Studio Code, Slack, Confluence, Git.</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <h1 class="title-projets">Projet d’entreprise  « Kageco » - Novembre à décembre 2024</h1>
                        <div class="card">
                            <img src="Image/Projet_Kageco.png" alt="Projet Kageco">
                            <div class="card-content">
                                <h3>Projet de groupe consistant au développement d’un site de marketing pour l’entreprise Kageco.</h3>
                                <br>
                                <b>Langages :</b> <p>PHP, Javascript, JSON, SQL, HTML/CSS.</p>
                                <b>Frameworks :</b> <p>Scrum, méthode de projet Agile, Symfony.</p>
                                <b>Base de données :</b> <p>MySQL.</p>
                                <b>Logiciels :</b> <p>Visual Studio Code, Slack, Confluence, Jira, Git.</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <h1 class="title-projets">Projet lycéen « E-mersion » - Janvier à février 2025</h1>
                        <div class="card">
                            <img src="Image/Projet_E-mersion.png" alt="Projet E-mersion">
                            <div class="card-content">
                                <h3>Application de co-voiturage pour le lycée Henner d'Altkirch.</h3>
                                <br>
                                <b>Langages :</b> <p>PHP, Javascript, JSON, SQL, HTML/CSS.</p>
                                <b>Frameworks :</b> <p>Scrum, méthode de projet Agile.</p>
                                <b>Base de données :</b> <p>MySQL.</p>
                                <b>Logiciels :</b> <p>Visual Studio Code, Slack, Confluence, Jira, Git.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-button next" onclick="nextPage()">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white">
                        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                    </svg>
                </button>
            </div>`;
    } else if (type === 'professionnel') {
        div.innerHTML = `
            <h1 class="title-projets">Mes expériences professionnelles</h1>
            <br>
            <div>
                <h1 class="title-projets">Webtotem - Mars à juillet 2025 - Stage de 4 mois</h1>
                <div class="card">
                    <img src="Image/Steiner.jpg" alt="Projet E-mersion">
                    <div class="card-content">
                        <h3>Développement d’un site de e-commerce pour le domaine Steiner.</h3>
                        <br>
                        <b>Langages :</b> <p>PHP, Javascript, XML, SQL, HTML/CSS.</p>
                        <b>Frameworks :</b> <p>Magento 2</p>
                        <b>Base de données :</b> <p>MySQL.</p>
                        <b>Logiciels :</b> <p>PHPStorm, Drive, Jira, BitBucket.</p>
                    </div>
                </div>
            </div>`;
    }
}

afficherProjets('universitaire');


let currentIndex = 0;

const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function previousPage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;
    }
    updateCarousel();
}

function nextPage() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}
