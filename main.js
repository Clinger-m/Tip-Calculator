let checked = 0

// pega as divs para exibir os resultados
let billValue = document.getElementById('bill-value')
let people = document.getElementById('people')

// div onde serão exibidos os resultados 
let resTip = document.getElementById('tip__amount-res')
let resTotal = document.getElementById('total-res')

// pega os links 
let cinco = document.getElementById('5-porcento')
let dez = document.getElementById('10-porcento')
let quinze = document.getElementById('15-porcento')
let vCinco = document.getElementById('25-porcento')
let cinquenta = document.getElementById('50-porcento')

cinco.addEventListener('click', function () {
    //remove classe para mudar cor
    limpaCores()
    //add classe para mudar cor
    cinco.classList.add('clicked__color')

    checked = 5
    cinco.value = 5 / 100   
})

dez.addEventListener('click', function () {
    //remove classe para mudar cor
    limpaCores()
    //add classe para mudar cor
    dez.classList.add('clicked__color')   

    checked = 10
    dez.value = 10 / 100    
})

quinze.addEventListener('click', function () {
    //remove classe para mudar cor
    limpaCores()
    //add classe para mudar cor
    quinze.classList.add('clicked__color')

    checked = 15
    quinze.value = 15 / 100
})

vCinco.addEventListener('click', function () {
    //remove classe para mudar cor
    limpaCores()
    //add classe para mudar cor
    vCinco.classList.add('clicked__color')   
    
    checked = 25
    vCinco.value = 25 / 100
})

cinquenta.addEventListener('click', function () {
    //remove classe para mudar cor
    limpaCores()
    //add classe para mudar cor
    cinquenta.classList.add('clicked__color')   
    
    checked = 50
    cinquenta.value = 50 / 100
})


// pega o valor do input custom
let custom = document.getElementById('custom')

custom.addEventListener('click', limpaCores)

// pega o botão reset
const reset = document.getElementById('btn__reset')

//funções para capturar os eventos
reset.addEventListener('click', limpar)
people.addEventListener('input', calcular)


/*=================== Funcionalidades ===================*/
function calcular() {
    let percent = custom.value / 100

    if (checked == 5) {

        calculoTip = ((billValue.value * cinco.value)) / people.value
        calculoTotal = ((parseFloat(billValue.value) * cinco.value) + parseFloat(billValue.value)) / parseFloat(people.value)
        resTip.innerHTML = '$' + calculoTip.toFixed(2)
        resTotal.innerHTML = '$' + calculoTotal.toFixed(2)
        custom.disabled = true
        custom.value = ''
        
        

    } else if (checked == 10) {

        
        calculoTip = ((billValue.value * dez.value)) / people.value
        calculoTotal = ((parseFloat(billValue.value) * dez.value) + parseFloat(billValue.value)) / parseFloat(people.value)
        resTip.innerHTML = '$' + calculoTip.toFixed(2)
        resTotal.innerHTML = '$' + calculoTotal.toFixed(2)
        custom.disabled = true
        custom.value = ''

    } else if (checked == 15) {

       
        calculoTip = ((billValue.value * quinze.value)) / people.value
        calculoTotal = ((parseFloat(billValue.value) * quinze.value) + parseFloat(billValue.value)) / parseFloat(people.value)
        resTip.innerHTML = '$' + calculoTip.toFixed(2)
        resTotal.innerHTML = '$' + calculoTotal.toFixed(2)
        custom.disabled = true
        custom.value = ''

    } else if (checked == 25) {

        
        calculoTip = ((billValue.value * vCinco.value)) / people.value
        calculoTotal = ((parseFloat(billValue.value) * vCinco.value) + parseFloat(billValue.value)) / parseFloat(people.value)
        resTip.innerHTML = '$' + calculoTip.toFixed(2)
        resTotal.innerHTML = '$' + calculoTotal.toFixed(2)
        custom.disabled = true
        custom.value = ''

    } else if (checked == 50) {

        
        calculoTip = ((billValue.value * cinquenta.value)) / people.value
        calculoTotal = ((parseFloat(billValue.value) * cinquenta.value) + parseFloat(billValue.value)) / parseFloat(people.value)
        resTip.innerHTML = '$' + calculoTip.toFixed(2)
        resTotal.innerHTML = '$' + calculoTotal.toFixed(2)
        custom.disabled = true
        custom.value = ''
    }
    else {

        
        calculoTip = ((billValue.value * custom.value) / 100) / people.value
        calculoTotal = ((parseFloat(billValue.value) * percent) + parseFloat(billValue.value)) / parseFloat(people.value)
        resTip.innerHTML = '$' + calculoTip.toFixed(2)
        resTotal.innerHTML = '$' + calculoTotal.toFixed(2)
        checked = 0
    }
    verificaErro()
}

// função para limpar os dados
function limpar() {
    billValue.value = ''
    custom.value = ''
    people.value = ''
    resTip.innerHTML = '$' + 0
    resTotal.innerHTML = '$' + 0
    checked = 0
    custom.disabled = false
    limpaCores()
}

// função para verificar se os dados estão nulos ou negativos
function verificaErro(){
    if (people.value <= 0 || billValue.value <= 0) {
        alert('Os valores dos campos devem ser maior 0')
        limpar()   
    }
    if (custom.value < 0) {
        alert('Valor da porcentagem deve ser maior que 0')
        limpar()
    }
}

function limpaCores(){
    cinco.classList.remove('clicked__color')
    dez.classList.remove('clicked__color')
    quinze.classList.remove('clicked__color')
    vCinco.classList.remove('clicked__color')
    cinquenta.classList.remove('clicked__color')  

}