let diccionario = ["APPLE","PLAZA","ARBOL","ANGEL","HOUSE","TRAIN","CHAIN","PLACE"]
let random = Math.random()*diccionario.length //numero aleatorio entre 0 y 5
random = Math.floor(random)


let palabraSecreta = diccionario[random]
let oportunidades = 6 

let button = document.getElementById("guess-button")
let input = document.getElementById("guess-input")
let grid = document.getElementById("grid")
console.log(grid)

button.addEventListener("click",enter)

function enter(){
    let intento = input.value.toUpperCase() 
    if (intento == palabraSecreta){
        gameOver("Ganaste")
        confetti();
    }
    let row = document.createElement("div")
    row.className = "row"
    for (let i in palabraSecreta){
        let letra = document.createElement("span")
        letra.className = "letter"
        letra.innerHTML = intento[i]
        if (palabraSecreta[i] == intento[i]){
            letra.style.backgroundColor = "#9bfab0"
        }else if ( palabraSecreta.includes(intento[i])){
            letra.style.backgroundColor = '#FFD94D'
        }else{
            letra.style.backgroundColor = '#aaaaaa'
        }
        row.appendChild(letra)
    }
    grid.appendChild(row)
    oportunidades--
    if (oportunidades == 0){
        gameOver("Perdiste")
    }
}

function gameOver(mensaje){
    button.disabled = true
    input.disabled = true
    let contenedor = document.getElementById("guesses")
    contenedor.innerHTML = "<h1>" + mensaje + "</h1>"
    
}
