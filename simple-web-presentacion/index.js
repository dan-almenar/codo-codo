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

// forms
function calculateArea() {
    // regex incluye números y puntos.
    // regex.test() retornará false para strings que incluyan caracteres distintos
    const regex = /^-?\d*\.?\d*$/
    const areaInputSpan = document.getElementById('area-input-span')
    const circle = document.getElementById('circle')
    const square = document.getElementById('square')
    const numValue = document.getElementById('area-input').value.trim()
    const pi = 3.1416
    const circleArea = pi * (numValue * numValue)
    const squareArea = numValue * numValue

    const figureSpans = [circle, square]
    
    /*
    Si numValue es un string vacío el span se mantiene escondido
    Si no pasa el test del regex, se pide ingresar un número válido
    Si pasa la prueba, se procede a calcular las áreas
    y se muestran los resultados en los spans correspondientes
    */
    if (numValue === '') {
        areaInputSpan.classList.add('hidden')
        figureSpans.forEach((span) => span.classList.add('hidden'))
    } else if (numValue.length > 0 && !regex.test(numValue)) {
        // mostramos advertencia y ocultamos potenciales resultados
        areaInputSpan.classList.contains('hidden') ? areaInputSpan.classList.remove('hidden') : areaInputSpan.classList = areaInputSpan.classList
        areaInputSpan.innerHTML = 'Ingrese un número válido'
        figureSpans.forEach((span) => span.classList.add('hidden'))
    } else {
        areaInputSpan.classList.add('hidden')        
        figureSpans.forEach((span) => {
            span.classList.contains('hidden') ? span.classList.remove('hidden') : span.classList = span.classList
        })
        circle.innerHTML = 'Área de círculo: ' + circleArea
        square.innerHTML = 'Área de cuadrado: ' + squareArea
    }
}
