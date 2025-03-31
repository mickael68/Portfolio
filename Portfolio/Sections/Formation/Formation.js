function Formation(){
    let div = document.getElementById('formation-container');
    div.innerHTML = `
    <h1>Formation</h1>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>UHA 4.0, Université de Haute-Alsace, Mulhouse</h3>
                        <p>Préparation à la Licence Professionnelle Métiers de l’Informatique en mode projets</p>
                        <span class="timeline-date-mobile">2024 - 2027</span>
                    </div>
                    <div class="timeline-date">2024 - 2027</div>
                </div>
        
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Baccalauréat Général</h3>
                        <p>Spécialités Mathématiques, Physique-chimie, option Mathématiques experte - Lycée Ribeaupierre (Ribeauvillé)</p>
                        <span class="timeline-date-mobile">2023</span>
                    </div>
                    <div class="timeline-date">2023</div>
                </div>
            </div>
    `;
}

Formation();