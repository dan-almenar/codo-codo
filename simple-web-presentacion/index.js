/* elementos del DOM */
// navbar 
const homeBtn = document.getElementById('home-btn')
const bioBtn = document.getElementById('bio-btn')
const projectsBtn = document.getElementById('projects-btn')
const contactBtn = document.getElementById('contact-btn')
const appsBtn = document.getElementById('apps-btn')

// otros links
const bioActionBtn = document.getElementById('bio-action-btn')
const projectsLink = document.getElementById('projects-link')

/* la constante linkButtons encapsula todos los links  autorreferenciales
de la página (links que llevan a otras secciones de la misma página) */
const linkButtons = [homeBtn, bioBtn, projectsBtn, contactBtn, appsBtn, bioActionBtn, projectsLink]


// body
const homeSection = document.getElementById('home')
const bioSection = document.getElementById('bio')
const projectsSection = document.getElementById('projects')
const contactSection = document.getElementById('contact')
const appsSection = document.getElementById('apps')
const bodySections = [homeSection, bioSection, projectsSection, contactSection, appsSection]

/*
Cada botón (link) de la barra de navegación automáticamente esconde todos los elementos del body
que no comparten el prefijo de su clase (ej: boton clase 'home-btn' hará que sólo sea visible el div con id="home")
*/
linkButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const btnClassPrefix = btn.id.split('-')[0]
        console.log(btnClassPrefix)
        bodySections.forEach((div) => {
            if (div.id != btnClassPrefix){
                div.classList.contains('visible') ? div.classList.remove('visible') : div.classList = div.classList
                div.classList.contains('hidden') ? div.classList = div.classList : div.classList.add('hidden')
            } else {
                div.classList.contains('hidden') ? div.classList.remove('hidden') : div.classList = div.classList
                div.classList.contains('visible') ? div.classList = div.classList : div.classList.add('visible')
            }
        })        
    })
})
