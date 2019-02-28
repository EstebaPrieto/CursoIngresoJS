function mostrar()
{
//variables
var sexo;

var notaMenor;
var acumuladorVarones=0;
var sexoNotaMenor;

//inicializacion
var nota;
var contador=0;
var acumuladorNota=0;
var promedio=0;

while (contador<5) {
    
//tomar y verificar
    nota=prompt("ingrese nota");
    nota=parseInt(nota);
while (nota<0||nota>10) {
    nota=prompt("ingrese un nota entre 0 y 10");
    nota=parseInt(nota);
}
    sexo=prompt("ingrese sexo");
while (sexo!="f"&&sexo!="m") {
    sexo=prompt("ingrese SEXO");
}
if (contador==0) {
    notaMenor=nota;
    sexoNotaMenor=sexo;
}
if (nota<notaMenor) {
    notaMenor=nota;
    sexoNotaMenor=sexo;
}
if (nota<7&&sexo=="m") {
    acumuladorVarones=acumuladorVarones+1;
}

acumuladorNota=parseInt(acumuladorNota)+nota;
contador=contador+1;
}
promedio=acumuladorNota/contador;
alert("promedio: "+promedio+" nota mas baja: "+notaMenor+" sexo de nota menor: "+sexoNotaMenor+" cant de varones menos de 6: "+acumuladorVarones);
}