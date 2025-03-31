function Competence(){
    let div = document.getElementById('competence-container');
    div.innerHTML = `
    <h1>Competences</h1>
            <div class="competence-container">
                <div class="card-competence">
                    <h3>Programmation</h3>
                    <div class="skill">
                        <p>HTML/CSS</p>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>JavaScript</p>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>Markdown</p>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>Bash</p>
                        <div class="progress-container">                        
                            <div class="progress-bar"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>XML</p>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>JSON</p>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>PHP</p>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>SQL</p>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                    </div>
                </div>
                <div class="card-competence">
                    <h3>Bases de données</h3>
                    <div class="skill">
                        <p>MySQL</p>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>MariaDB</p>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                    </div>
                </div>
                <div class="card-competence">
                    <h3>Frameworks</h3>
                    <div class="skill">
                        <p>Symfony</p>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>Magento 2</p>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>Scrum</p>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                    </div>
                </div>
                <div class="card-competence">
                    <h3>Divers</h3>
                    <div class="skill">
                        <p>Jira/Confluence/Slack</p>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>Git</p>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>Microsoft Office/Libre Office</p>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>Visual Studio Code</p>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                    </div>
                </div>
            </div>`;
}

Competence();

document.addEventListener("DOMContentLoaded", () => {
    const skills = [
        { name: "HTML/CSS", percent: 75 },
        { name: "Javascript", percent: 15 },
        { name: "Markdown", percent: 50 },
        { name: "Bash", percent: 10 },
        { name: "XML", percent: 15 },
        { name: "JSON", percent: 75 },
        { name: "PHP", percent: 30 },
        { name: "SQL", percent: 50 },
        { name: "MySQL", percent: 50 },
        { name: "MariaDB", percent: 50 },
        { name: "Symfony", percent: 30 },
        { name: "Magento 2", percent: 10 },
        { name: "Scrum", percent: 90 },
        { name: "Jira/Confluence/Slack", percent: 90 },
        { name: "Git", percent: 30 },
        { name: "Microsoft Office/Libre Office", percent: 60 },
        { name: "Visual Studio Code", percent: 30 },
    ];

    const skillElements = document.querySelectorAll(".skill");

    skillElements.forEach((skill, index) => {
        const progressBar = skill.querySelector(".progress-bar");
        const percent = skills[index].percent;
        
        // Ajout du texte à la barre de progression
        progressBar.textContent = percent + "%";

        skill.addEventListener("mouseenter", () => {
            progressBar.style.width = percent + "%";
            progressBar.textContent = percent + "%";
        });

        skill.addEventListener("mouseleave", () => {
            progressBar.style.width = "100%";
            progressBar.textContent = percent + "%";
        });
    });
});
