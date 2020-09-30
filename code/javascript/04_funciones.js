var nombreApellido = "Ruth Alvarado"
var edad = 37

// Funcion tipo declarativa
function imprimirEdad(nombre, edad){
    console.log(`${nombre} tiene la edad de ${edad}.`)
}
// Funcion tipo flecha
var imprimirEdad2 = (nombre, edad) => { console.log( `${nombre} tiene la edad de ${edad}.`)}

// Funcion tipo expresiva
var imprimirEdad3 = function(nombre, edad){
    console.log( `${nombre} tiene la edad de ${edad}.`)
}

imprimirEdad( nombreApellido, edad)
imprimirEdad( "Karol Moncayo", 1)
imprimirEdad2( nombreApellido, edad)
imprimirEdad3("Belén Alvarado", 4)