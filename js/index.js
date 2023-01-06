const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors()) // solucion a todos los posibles errores con cors al usar dicha libreria
app.use(express.json()) // esta linea me permite usar POST que traingan contenido en json

const jugadores = []

class Jugador{
    constructor(id){
        this.id = id
    }
    asignarMokepon(mokepon){
        this.mokepon = mokepon
    }
}

class Mokepon{
    constructor(nombre){
        this.nombre = nombre
    }
}

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`

    const jugador = new Jugador(id)
    jugadores.push(jugador)
    console.log("este es el id del jugador", jugador)

    res.setHeader("Access-Control-Allow-Origin", "*") //en caso de que salga el error de CORS
    res.send(id)

})

app.post("/mokepon/:jugadorId", (req, res) =>{
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.mokepon || ""
    const mokepon = new Mokepon(nombre)
    
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if(jugadorIndex >= 0 ){
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }
    console.log(" este es el array ", jugadores)
    console.log(jugadorId)
    res.end()
})

app.listen(8080, () =>{
    console.log("servidor en linea")
})