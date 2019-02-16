/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos=0;
var numero;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
numeroSecreto=Math.round(Math.random()*99)+1;
	alert(parseInt(numeroSecreto));	 
	

}

function verificar()
{
numero=document.getElementById("numero").value;
numero=parseInt(numero);
contadorIntentos=contadorIntentos+1;
if (numero!=numeroSecreto) {
	if (numero<numeroSecreto) {
		alert("falta...")
	} else {
		alert("se pasó")
	}
} 
if (numero==numeroSecreto) {
	
if (contadorIntentos==1) {
	alert(contadorIntentos+"° Intento: usted es un Psíquico");
}
if (contadorIntentos==2) {
	alert(contadorIntentos+"° Intento: excelente percepción");
}
if (contadorIntentos==3) {
	alert(contadorIntentos+"° Intento: Esto es suerte");
}
if (contadorIntentos==4) {
	alert(contadorIntentos+"° Intento: Excelente técnica");
}
if (contadorIntentos==5) {
	alert(contadorIntentos+"° Intento: usted está en la media");
}
if (contadorIntentos>5 || contadorIntentos<11) {
	alert(contadorIntentos+"° Intento: falta técnica");
}
if (contadorIntentos>10) {
	alert(contadorIntentos+"° Intento: afortunado en el amor!!");
}
}
document.getElementById("intentos").value=contadorIntentos;
}	
	

