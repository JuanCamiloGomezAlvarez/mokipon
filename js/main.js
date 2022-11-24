//Selector del boton de inicio del juego
const botonMascota = document.querySelector("#botonMascota")
botonMascota.addEventListener("click", seleccionarMascotaJugador)

//variables de seleccion de personajes
const hipodoge = document.querySelector("#hipodoge")
const capipepo = document.querySelector("#capipepo")
const ratigueya = document.querySelector("#ratigueya")

// variables de nombres de los personajes en la seccion de Elige tu ataque
const mascotaSeleccionada = document.querySelector("#mascotaSeleccionada")
const mascotaPC = document.querySelector("#mascotaPC")

//variable del campo de las habilidades
const habilidades = document.querySelector("#habilidades")

//variables de salud de los personajes
let saludJugador1 = document.querySelector("#saludJugador1")
let saludEnemigo1 = document.querySelector("#saludEnemigo1")

// variable del mensaje de combate
const mensajes = document.querySelector("#mensajes")

let eleccionJugador = ""
let eleccionPC = ""
// este objeto contiene a todas las macotas
const mascotas = {
    "Hipodoge":{
                "salud": 100,
                "ataque": 30,
                "defensa":20,
                "esquiva":{
                            1: false,
                            2: true
                        },
                },
    "Capipepo":{
                "salud": 100,
                "ataque": 25,
                "defensa":25,
                "esquiva":{
                            1: false,
                            2: true
                        },
                },
    "Ratigueya":{
                "salud": 100,
                "ataque": 20,
                "defensa":30,
                "esquiva":{
                            1: false,
                            2: true
                        },
                }
}



function seleccionarMascotaJugador(){
    if(hipodoge.checked == true){
        eleccionJugador = Object.keys(mascotas)[0]
        alert("seleccionaste a Hipodoge")
        mascotaSeleccionada.innerHTML = `<strong>${eleccionJugador}</strong>`
        saludJugador1.innerText = mascotas[eleccionJugador]["salud"]
        habilidades.innerHTML = `<button id="btnFuego1">Bomba de fuego</button>
                                 <button id="btnFuego2">Escudo de fuego</button>
                                 <button id="btnFuego3">Esquivar</button>`

        seleccionarMascotaPC()

        //botones de ataque con fuego
        const btnFuego1 = document.querySelector("#btnFuego1")
        btnFuego1.addEventListener("click", ataqueFuego1)       
        const btnFuego2 = document.querySelector("#btnFuego2")
        btnFuego2.addEventListener("click", ataqueFuego2)
        const btnFuego3 = document.querySelector("#btnFuego3")
        btnFuego3.addEventListener("click", ataqueFuego3)

    }else if(capipepo.checked == true){
        eleccionJugador = Object.keys(mascotas)[1]
        alert("seleccionaste a Capipepo")
        mascotaSeleccionada.innerHTML = `<strong>${eleccionJugador}</strong>`
        saludJugador1.innerText = mascotas[eleccionJugador]["salud"]
        habilidades.innerHTML = `<button id="btnAgua1">Chorro de agua</button>
                                 <button id="btnAgua2">Escudo de agua</button>
                                 <button id="btnAgua3">Esquivar</button>`
        seleccionarMascotaPC()

        //botones de ataque con agua
        const btnAgua1 = document.querySelector("#btnAgua1")
        btnAgua1.addEventListener("click", ataqueAgua1)
        const btnAgua2 = document.querySelector("#btnAgua2")
        btnAgua2.addEventListener("click", ataqueAgua2)
        const btnAgua3 = document.querySelector("#btnAgua3")
        btnAgua3.addEventListener("click", ataqueAgua3)

    }else if(ratigueya.checked == true){
        eleccionJugador = Object.keys(mascotas)[2]
        alert("seleccionaste a Ratigueya")
        mascotaSeleccionada.innerHTML = `<strong>${eleccionJugador}</strong>`
        saludJugador1.innerText = mascotas[eleccionJugador]["salud"]
        habilidades.innerHTML = `<button id="btnTierra1">puños de piedra</button>
                                 <button id="btnTierra2">Escudo de roca</button>
                                 <button id="btnTierra3">Esquivar</button>`
        seleccionarMascotaPC()

        //botones de ataque con tierra
        const btnTierra1 = document.querySelector("#btnTierra1")
        btnTierra1.addEventListener("click", ataqueTierra1)
        const btnTierra2 = document.querySelector("#btnTierra2")
        btnTierra2.addEventListener("click", ataqueTierra2)
        const btnTierra3 = document.querySelector("#btnTierra3")
        btnTierra3.addEventListener("click", ataqueTierra3)
    }else{
        alert("aun no seleccionas una mascota")
    }
    
}

// funcion de eleccion de la PC
function seleccionarMascotaPC(){

    let pcElige = 0

    function aleatorio(min, max){
        return Math.floor(Math.random()*(max - min + 1) + min)
    }

    pcElige = aleatorio(1,3)

    if(pcElige == 1){
        alert("PC eligio a Hipodoge")
        eleccionPC = Object.keys(mascotas)[0]
        mascotaPC.innerHTML = `<strong>${eleccionPC}</strong>`
        saludEnemigo1.innerText = mascotas[eleccionPC]["salud"]
    }else if(pcElige == 2){
        alert("PC eligio a Capipepo")
        eleccionPC = Object.keys(mascotas)[1]
        mascotaPC.innerHTML = `<strong>${eleccionPC}</strong>`
        saludEnemigo1.innerText = mascotas[eleccionPC]["salud"]
    }else{
        alert("PC eligio a Ratigueya")
        eleccionPC = Object.keys(mascotas)[2]
        mascotaPC.innerHTML = `<strong>${eleccionPC}</strong>`
        saludEnemigo1.innerText = mascotas[eleccionPC]["salud"]
    }
}

//Funciones de habilidades de los personajes
//fuego
function ataqueFuego1(){
    alert("hiciste un ataque con Bomba de fuego")
    let valorJugador = "ataque"
    let valorEnemigo = ataqueEnemigo()
    let resultadoRonda = combate(valorJugador, valorEnemigo, eleccionJugador, eleccionPC)
    return resultadoRonda
    
}
function ataqueFuego2(){
    alert("Usaste la habilidad Escudo de fuego")
    let valorJugador = "defensa"
    let valorEnemigo = ataqueEnemigo()
    let resultadoRonda = combate(valorJugador, valorEnemigo, eleccionJugador, eleccionPC)
    return resultadoRonda 
    
}
function ataqueFuego3(){
    alert("Usaste la habilidad Esquivar")
    let valorJugador = "esquiva"
    let valorEnemigo = ataqueEnemigo()
    let resultadoRonda = combate(valorJugador, valorEnemigo, eleccionJugador, eleccionPC)
    return resultadoRonda
}
//agua
function ataqueAgua1(){
    alert("Atacaste con Chorro de agua")
    let valorJugador = "ataque"
    let valorEnemigo = ataqueEnemigo()
    let resultadoRonda = combate(valorJugador, valorEnemigo, eleccionJugador, eleccionPC)
    return resultadoRonda
}
function ataqueAgua2(){
    alert("Usaste la habilidad Escudo de agua")
    let valorJugador = "defensa"
    let valorEnemigo = ataqueEnemigo()
    let resultadoRonda = combate(valorJugador, valorEnemigo, eleccionJugador, eleccionPC)
    return resultadoRonda 
}
function ataqueAgua3(){
    alert("Usaste la habilidad Esquivar")
    let valorJugador = "esquiva"
    let valorEnemigo = ataqueEnemigo()
    let resultadoRonda = combate(valorJugador, valorEnemigo, eleccionJugador, eleccionPC)
    return resultadoRonda
}
//tierra
function ataqueTierra1(){
    alert("Atacaste con Puños de piedra")
    let valorJugador = "ataque"
    let valorEnemigo = ataqueEnemigo()
    let resultadoRonda = combate(valorJugador, valorEnemigo, eleccionJugador, eleccionPC)
    return resultadoRonda
}
function ataqueTierra2(){
    alert("Usaste la habilidad Escudo de roca")
    let valorJugador = "defensa"
    let valorEnemigo = ataqueEnemigo()
    let resultadoRonda = combate(valorJugador, valorEnemigo, eleccionJugador, eleccionPC)
    return resultadoRonda 
}
function ataqueTierra3(){
    alert("Usaste la habilidad esquivar")
    let valorJugador = "esquiva"
    let valorEnemigo = ataqueEnemigo()
    let resultadoRonda = combate(valorJugador, valorEnemigo, eleccionJugador, eleccionPC)
    return resultadoRonda
}
// esta es la funcion de ataque enemigo
function ataqueEnemigo(){

    let ataquePC = 0

    function ataqueAleatorio(min, max){
        return Math.floor(Math.random()*(max - min + 1) + min)
    }

    ataquePC = ataqueAleatorio(1,3)

    if(mascotaPC.innerText == "Hipodoge"){
        if(ataquePC == 1){
            alert("PC ataca con Bomba de fuego")
            return "ataque"
        }else if(ataquePC == 2){
            alert("PC usa habilidad de Escudo de fuego")
            return "defensa"
        }else{
            alert("PC usa habilidad de Esquivar")
            return "esquiva"
        }
    }else if(mascotaPC.innerText == "Capipepo"){
        if(ataquePC == 1){
            alert("PC ataca con Chorro de agua")
            return "ataque"
        }else if(ataquePC == 2){
            alert("PC usa habilidad de Escudo de agua")
            return "defensa"
        }else{
            alert("PC usa habilidad de Esquivar")
            return "esquiva"
        }
    }else if(mascotaPC.innerText == "Ratigueya"){
        if(ataquePC == 1){
            alert("PC ataca con Puños de piedra")
            return "ataque"
        }else if(ataquePC == 2){
            alert("PC usa habilidad de Escudo de roca")
            return "defensa"
        }else{
            alert("PC usa habilidad de Esquivar")
            return "esquiva"
        }
    }else{
        alert("algo salio mal")
    }
}
// Esta funcion contiene toda la logica de combate de los personajes
function combate(valorJugador, valorEnemigo, eleccionJugador, eleccionPC){

    let ataqueJugador = mascotas[eleccionJugador]["ataque"]
    let ataquePc = mascotas[eleccionPC]["ataque"]
    let defensaJugador = mascotas[eleccionJugador]["defensa"]
    let defensaPc = mascotas[eleccionPC]["defensa"]
    let esquivaJugador = mascotas[eleccionJugador]["esquiva"]
    let esquivaPc = mascotas[eleccionPC]["esquiva"]
    let esquivaHabilidad = 0

    //funcion de aleatoriedad
    function esquivarAleatorio(min, max){
        return Math.floor(Math.random()*(max - min + 1) + min)
    }

    if(valorJugador == "ataque" && valorEnemigo == "ataque"){
        let saludJugador = parseInt(saludJugador1.innerText) - ataquePc
        saludJugador1.innerText = String(saludJugador)
        let saludEnemigo = parseInt(saludEnemigo1.innerText) - ataqueJugador
        saludEnemigo1.innerText = String(saludEnemigo)
        mensajes.innerHTML = `<p>${eleccionJugador} de Jugador inflinge ${ataqueJugador} de daño a ${eleccionPC} de PC. ${eleccionPC} de PC inflinge ${ataquePc} de daño a ${eleccionJugador} de Jugador.</p>`
    }else if(valorJugador == "ataque" && valorEnemigo == "defensa"){
        let saludJugador = parseInt(saludJugador1.innerText) - defensaPc
        saludJugador1.innerText = String(saludJugador)
        mensajes.innerHTML = `<p>${eleccionPC} de PC refleja ${defensaPc} de daño a ${eleccionJugador} de Jugador al usar la habilidad de Escudo.</p>`
    }else if(valorJugador == "ataque" && valorEnemigo == "esquiva"){
        esquivaHabilidad = esquivarAleatorio(1,2)
        if(esquivaPc[esquivaHabilidad] == false){
            let saludEnemigo = parseInt(saludEnemigo1.innerText) - ataqueJugador
            saludEnemigo1.innerText = String(saludEnemigo)
            mensajes.innerHTML = `<p> ${eleccionPC} de PC no pudo esquivar el ataque y recibe ${ataqueJugador} de daño.</p>`
        }else{
            let saludEnemigo = parseInt(saludEnemigo1.innerText) + ataqueJugador
            saludEnemigo1.innerText = String(saludEnemigo)
            mensajes.innerHTML = `<p> ${eleccionPC} de PC pudo esquivar el ataque con exito y restaura ${ataqueJugador} de salud. </p>`
        }
    }else if(valorJugador == "defensa" && valorEnemigo == "ataque"){
        let saludEnemigo = parseInt(saludEnemigo1.innerText) - defensaJugador
        saludEnemigo1.innerText = String(saludEnemigo)
        mensajes.innerHTML = `<p> ${eleccionJugador} de Jugador refleja ${defensaJugador} de año a ${eleccionPC} de PC al usar la habilidad de Escudo </p>`
    }else if(valorJugador == "defensa" && valorEnemigo == "defensa"){
        mensajes.innerHTML = `<p>Ambos personajes se defienden y ninguno sufre daño.</p>`
    }else if(valorJugador == "defensa" && valorEnemigo == "esquiva"){
        mensajes.innerHTML = `<p>ninguno de los personajes sufre daño.</p>`
    }else if(valorJugador == "esquiva" && valorEnemigo == "ataque"){
        esquivaHabilidad = esquivarAleatorio(1,2)
        if(esquivaJugador[esquivaHabilidad] == false){
            let saludJugador = parseInt(saludJugador1.innerText) - ataquePc
            saludJugador1.innerText = String(saludJugador)
            mensajes.innerHTML = `<p> ${eleccionJugador} de Jugador no pudo esquivar el ataque y recibe ${ataquePc} de daño.</p>`
        }else{
            let saludJugador = parseInt(saludJugador1.innerText) + ataquePc
            saludJugador1.innerText = String(saludJugador)
            mensajes.innerHTML = `<p> ${eleccionJugador} de Jugador pudo esquivar el ataque con exito y restaura ${ataquePc} de salud. </p>`
        }
    }else if(valorJugador == "esquiva" && valorEnemigo == "defensa"){
        mensajes.innerHTML = `<p>ninguno de los personajes sufre daño.</p>`
    }else if(valorJugador == "esquiva" && valorEnemigo == "esquiva"){
        mensajes.innerHTML = `<p> anbos personajes usan la habilidad de esquivar.</p>`
    }else{
        mensajes.innerHTML = `<p>algo salio mal.</p>`
    }

}