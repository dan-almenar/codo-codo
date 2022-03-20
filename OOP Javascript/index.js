class Polygon {
    constructor(sides, len) {
        this.sides = sides
        this.len = len
        this.name = this.setName()

        // auto fix this.sidesQuantity para que no haya figuras con más de 360 lados (circulos) o menores a 3 lados (triángulos)
        this.sides >= 360 ? this.sides = 360 - this.sides : this.sides = this.sides
        this.sides >= 3 ? this.sides = this.sides : this.sides = 360
    }

    getAngles(){
        return this.sides === 360 ? this.sides : 360 / this.sides
    }
    draw(){
        // const canvas = document.getElementById('canvas')
        const resultsGraph = document.getElementById('results-graph')
        const resultsArea = document.getElementById('results-area')
        const canvas = document.createElement('canvas')
        canvas.classList.add('canvas')
        canvas.height = 100
        canvas.width = 100
        const figureName = document.createElement('p')
        const figureArea = document.createElement('p')
        const figureAngles = document.createElement('p')

        figureName.classList.add('figure-title')

        figureName.innerHTML = this.name
        figureArea.innerHTML = 'Área : ' + this.getArea()
        figureAngles.innerHTML = 'Cada ángulo interno mide: ' + this.getAngles().toFixed(2)
        resultsGraph.appendChild(canvas)
        resultsArea.appendChild(figureName)
        resultsArea.appendChild(figureArea)
        resultsArea.appendChild(figureAngles)

        if (canvas.getContext){
            const ctx = canvas.getContext('2d')
            const xCenter = 50
            const yCenter = 50
            const size = 30

            ctx.beginPath()
            ctx.moveTo(xCenter + size * Math.cos(0), yCenter + size * Math.sin(0))

            for (let i = 1; i <= this.sides; i++){
                ctx.lineTo(xCenter + size * Math.cos(i * 2 * Math.PI / this.sides), yCenter + size * Math.sin(i * 2 * Math.PI / this.sides))
            }
            ctx.strokeStyle = '#000000'
            ctx.lineWidth = 2
            ctx.stroke()
        }
    }
    getArea(){
        // definimos la variable a retornar
        let area = 0
        // calculamos el área de un
        //triángulo equilátero cuyos lados miden this.len
        const triangleArea = ((Math.sqrt(3)/4) * (this.len**2)).toFixed(3)
        
        // definimos el área para cada caso de polinomio
        if (this.sides === 3){
            return triangleArea
        } else if (this.sides === 4) {
            return this.len**2
        } else {
            return triangleArea * (this.sides -1)
        }
    }
    setName(){
        switch (parseInt(this.sides)) {
            case 3:
                return 'Triángulo'
            case 4:
                return 'Cuadrado'
            case 5:
                return 'Pentágono'
            case 6:
                return 'Hexágono'
            case 7:
                return 'Heptágono'
            case 8:
                return 'Octágono'
            case 9:
                return 'Nonágono'
            case 10:
                return 'Decágono'
            case 11:
                return 'Endecágono'
            case 12:
                return 'Dodecágono'
        }
    }
}

class Circle extends Polygon {
    constructor(len){
        super(360, len)
        this.name = 'Círculo'
    }

    // sobreescribimos el método para el cálculo del área
    getArea(){
        return (Math.PI * (this.len**2)).toFixed(3)
    }
}

// variables
let figuresList = []
// DOM elements
const polygonCheckbox = document.getElementById('polygon-checkbox')
const lenInput = document.getElementById('len-input')
const rangeValSpan = document.getElementById('range-val')
const sidesInput = document.getElementById('sides-input')

rangeValSpan.innerHTML = parseFloat(lenInput.value).toFixed(2)

const setRangeValSpan = (val) => {
    rangeValSpan.innerHTML = parseFloat(val).toFixed(2)
}

sidesInput.disabled = true
sidesInput.classList.add('hidden')
const toggleSidesInput = (val) => {
    if (val === true){
        sidesInput.disabled = false
        sidesInput.classList.remove('hidden')
    } else {
        sidesInput.disabled = true
        sidesInput.classList.add('hidden')
    }
}

const createFigure = (e) => {
    e.preventDefault()
    const sides = sidesInput.disabled ? null : sidesInput.value
    len = lenInput.value
    let newFig = undefined
    if (sides){
        newFig = new Polygon(sides, len)
    } else {
        newFig = new Circle(len)
    }
    newFig.draw()
    return
}

