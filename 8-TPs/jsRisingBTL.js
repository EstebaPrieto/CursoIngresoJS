/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

var edad;
var sexo;
var estadoCivil;
var sueldo;
var legajo;
var nacionalidad;

function ComenzarIngreso () 
{
edad = prompt("ingrese edad: ")
edad = parseInt(edad);
while (edad < 18 && edad > 90) {
    edad = prompt("edad entre 18 y 90");
    edad = parseInt(edad);
}

sexo = prompt("ingrese f ó m .");
while (sexo!= "f" && sexo !="m") {
    var sexo = prompt("ingrese f ó m .");
}
estadoCivil = prompt("Estado Civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos ");
estadoCivil = parseInt(estadoCivil);
while (estadoCivil < 1 || estadoCivil > 5 ) {
    estadoCivil = prompt("Estado Civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos ");
    estadoCivil = parseInt(estadoCivil);
}
sueldo = prompt("ingrese sueldo");
sueldo = parseInt(sueldo);
while (sueldo < 8000) {
    
}

}//fin funcion
