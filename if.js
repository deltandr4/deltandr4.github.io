var jugador1 = prompt("jugador rojo, que elige?")

var jugador2 = prompt("jugador azul, que elige?")


var jugador1 = jugador1.toLowerCase()
var jugador2 = jugador2.toLowerCase()

if (jugador1 === "piedra" && jugador2 === "tijeras") {
    alert ("gano el jugador rojo")
}if (jugador1 === "papel" && jugador2 === "piedra") {
    alert ("gano el jugador rojo")
}if (jugador1 === "tijeras" && jugador2 === "papel") {
    alert ("gano el jugador rojo")
}if (jugador1 === "tijeras" && jugador2 === "piedra") {
    alert ("gano el jugador azul")
}if (jugador1 === "papel" && jugador2 === "tijeras") {
    alert ("gano el jugador azul")
}if (jugador1 === "piedra" && jugador2 === "papel") {
    alert ("gano el jugador azul")
}if (jugador1 === "tijeras" && jugador2 === "tijeras") {
    alert ("empate")
}if (jugador1 === "piedra" && jugador2 === "piedra") {
    alert ("empate")
}if (jugador1 === "papel" && jugador2 === "papel") {
    alert ("empate")
}