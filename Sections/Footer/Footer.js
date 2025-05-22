function Footer(){
    let div = document.getElementById('footer-container');
    div.innerHTML = `
        <footer id="contact">
        <h1>Contactez-moi</h1>
        <p>En pleine recherche de talents ? Parlons-en !</p>
        <div class="footer-container">
            <hr>
            <div class="footer-info">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
                    </svg>
                    <a href="mailto:mmarco68650@gmail.com">mmarco68650@gmail.com</a>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                        <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
                    </svg>
                    <a href="tel:0623829184">06 23 82 91 84</a>
                </div>
            </div>
            <hr>
            <div class="footer-socials">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                        <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>
                    </svg>
                    <a href="Fichier/MARCO_Mickaël_CV_Apprentissage.pdf" download class="btn-cv">Télécharger mon CV</a>
                </div>
            </div>
        </div>
    </footer>
    `;
}

Footer();