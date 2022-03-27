// DOM elements
const negativeInfinitySection = document.getElementById('negative-infinity--section')
const forOfSection = document.getElementById('for-of--section')
const respuestasSection = document.getElementById('respuestas--section')
const forOfBtn = document.getElementById('for-of--btn')
const respuestasBtn = document.getElementById('respuestas--btn')
const backNegativeBtn = document.getElementById('negative-infinity--back')

const sections = [negativeInfinitySection, forOfSection, respuestasSection]
const buttons = [forOfBtn, respuestasBtn, backNegativeBtn]

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const btnPrefix = btn.id.split('--')[0]
        for (section of sections){
            const sectionPrefix = section.id.split('--')[0]
            if (btnPrefix === sectionPrefix){
                section.classList.remove('hidden')
            } else {
                section.classList.add('hidden')
            }
        }
    })
})

const numsInput = document.getElementById('nums-input')
const validateWarning = document.getElementById('validate-warning')

// verificador de los datos ingresados
let numsArray = []
function validateInput () {
    let inputArray = numsInput.value.trim()
    inputArray = inputArray.split(',')
    const regex = /^-?\d*\.?\d*$/
    for (num of inputArray){
        if (!regex.test(num)){
            validateWarning.innerHTML = 'Por favor introduzca únicamente valores numéricos...'
        } else {
            numsArray.push(parseFloat(num.trim()))
        }
    }
}

numsInput.addEventListener('keyup', () => {
    validateInput()
    console.log(numsArray)
})
