function afficherProjets(type) {
    let div = document.getElementById('projets-container');
    let content = '';

    if (type === 'universitaire') {
        content = `
            <h1 class="title">Mes expériences académiques</h1>
            <div class="carousel-container">
                <button class="carousel-button prev" onclick="previousPage()">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white">
                        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
                    </svg>
                </button>
                <div class="carousel">
                    <div class="carousel-item">
                        <div class="card">
                            <img src="Image/Epicur.jpg" alt="Epicur" class="carousel-img">
                            <div class="card-content">
                                <h2 class="title-projets">Projet de mise en application de la méthode de projet Agile « EPICUR » - Septembre 2024</h2>
                                <div id="button">
                                    <button class="openModalBtn" data-modal="modal1">Afficher la description</button>
                                </div>
                                <div id="modal1" class="modal">
                                    <div class="modal-content">
                                        <span class="fermer">&times;</span>
                                        <a class="description">
                                            Il s'agit d'un travail de groupe en anglais avec des étudiants internationaux pour une prise en main des outils de gestion de projet.
                                            C'est un projet qui a duré une semaine et qui consiste à créer une vidéo de prévention contre l'abandon d'animaux.
                                            C'est un projet dans lequel j'ai appris à utiliser des outils collaboratifs de gestion de projet, à collaborer au sein d’une équipe pour atteindre les objectifs visés, et à exécuter les tâches attribuées en respectant les délais impartis.
                                        </a>
                                    </div>
                                </div>
                                <br>
                                <b>Frameworks :</b> <p>Scrum, méthode de projet Agile.</p>
                                <b>Logiciels :</b> <p>Slack, Confluence, Jira.</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            <img src="Image/Logo.png" alt="Fil rouge">
                            <div class="card-content">
                                <h2 class="title-projets">Projet en autonomie « fil rouge » - Septembre à novembre 2024</h2>
                                <div id="button">
                                    <button class="openModalBtn" data-modal="modal2">Afficher la description</button>
                                </div>
                                <div id="modal2" class="modal">
                                    <div class="modal-content">
                                        <span class="fermer">&times;</span>
                                        <a class="description">
                                            Développement d’un site web dynamique en autonomie en début d’année à l’UHA 4.0.
                                            J’ai conçu un site complet en créant un système CRUD en PHP connecté à une base de données MySQL via phpMyAdmin.
                                            J’ai utilisé HTML, CSS, JavaScript et PHP pour le front-end, et Bash pour cloner et déployer le projet.
                                            Ce projet m’a permis de structurer une application web, d’adapter les outils aux besoins, de travailler en autonomie, et de résoudre des problèmes techniques concrets.
                                        </a>
                                    </div>
                                </div>
                                <br>
                                <b>Langages :</b> <p>PHP, Javascript, JSON, SQL, HTML/CSS, Bash.</p>
                                <b>Base de données :</b> <p>MySQL.</p>
                                <b>Logiciels :</b> <p>Visual Studio Code, Slack, Confluence, Git.</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            <img src="Image/Projet_Kageco.png" alt="Projet Kageco">
                            <div class="card-content">
                                <h2 class="title-projets">Projet d’entreprise  « Kageco » - Novembre à décembre 2024</h2>
                                <div id="button">
                                    <button class="openModalBtn" data-modal="modal3">Afficher la description</button>
                                </div>
                                <div id="modal3" class="modal">
                                    <div class="modal-content">
                                        <span class="fermer">&times;</span>
                                        <a class="description">
                                            Développement d’un site e-commerce en groupe pour l’entreprise Kageco.
                                            C’était mon premier projet en équipe, où j’ai appris à collaborer efficacement avec d’autres développeurs pour atteindre nos objectifs.
                                            Nous avons utilisé Symfony pour le back-end (entités, contrôleurs, système CRUD) et HTML/CSS/JavaScript pour le front-end.
                                            Nous avons aussi utilisé Jira, Confluence et Slack pour la gestion des tâches, la documentation et la communication au sein du groupe.
                                            Ce projet m’a permis de renforcer mes compétences techniques tout en découvrant l'importance du travail collaboratif dans un projet structuré avec des objectifs concrets.
                                        </a>
                                    </div>
                                </div>
                                <br>
                                <b>Langages :</b> <p>PHP, Javascript, JSON, SQL, HTML/CSS.</p>
                                <b>Frameworks :</b> <p>Scrum, méthode de projet Agile, Symfony.</p>
                                <b>Base de données :</b> <p>MySQL.</p>
                                <b>Logiciels :</b> <p>Visual Studio Code, Slack, Confluence, Jira, Git.</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            <img src="Image/Projet_E-mersion.png" alt="Projet E-mersion">
                            <div class="card-content">
                                <h2 class="title-projets">Projet lycéen « E-mersion » - Janvier à février 2025</h2>
                                <div id="button">
                                    <button class="openModalBtn" data-modal="modal4">Afficher la description</button>
                                </div>
                                <div id="modal4" class="modal">
                                    <div class="modal-content">
                                        <span class="fermer">&times;</span>
                                        <a class="description">
                                            Il s’agit d’un projet dont l’objectif était de créer une application de covoiturage pour le lycée Henner d'Altkirch.
                                            Nous nous sommes rendus sur place pour faire découvrir le métier de développeur aux lycéens.
                                            Nous n’avons pas utilisé de framework pour ce projet, mais avons travaillé avec HTML, CSS et JavaScript pour le front-end, et PHP pour le back-end.
                                            Nous avons également utilisé Jira, Confluence et Slack pour organiser les tâches, documenter le projet et communiquer en équipe.
                                            Ce projet m’a permis de renforcer mes compétences techniques, mais aussi de transmettre mes connaissances à des personnes qui n’avaient jamais programmé.
                                        </a>
                                    </div>
                                </div>
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
        content = `
            <h1 class="title">Mes expériences professionnelles</h1>
            <br>
            <div>
                <div class="card">
                    <img src="Image/Steiner.jpg" alt="Projet E-mersion">
                    <div class="card-content">
                        <h2 class="title-projets">Webtotem - Mars à juillet 2025 - Stage de 4 mois</h2>
                        <div id="button">
                            <button class="openModalBtn" data-modal="modal5">Afficher la description</button>
                        </div>
                        <div id="modal5" class="modal">
                            <div class="modal-content">
                                <span class="fermer">&times;</span>
                                <a class="description">
                                    Le but de mon stage chez WebTotem était de développer un site e-commerce pour le domaine Steiner.
                                    Ce stage étant réalisé en distanciel, m'a permis de gagner en autonomie tout en développant mes compétences en communication au sein d'une équipe et avec le client.
                                </a>
                            </div>
                        </div>
                        <br>
                        <b>Langages :</b> <p>PHP, Javascript, XML, SQL, HTML/CSS.</p>
                        <b>Frameworks :</b> <p>Magento 2</p>
                        <b>Base de données :</b> <p>MySQL.</p>
                        <b>Logiciels :</b> <p>PHPStorm, Drive, Jira, BitBucket.</p>
                    </div>
                </div>
            </div>`;
    }

    div.innerHTML = content;

    const openModalBtns = div.querySelectorAll('.openModalBtn');
    const modals = div.querySelectorAll('.modal');
    const closeModalBtns = div.querySelectorAll('.fermer');

    openModalBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
        });
    });

    modals.forEach((modal) => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    closeModalBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            modal.style.display = 'none';
        });
    });

    currentIndex = 0;
    updateCarousel();
}

let currentIndex = 0;

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
}

function previousPage() {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;
    }
    updateCarousel();
}

function nextPage() {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

afficherProjets('universitaire');
