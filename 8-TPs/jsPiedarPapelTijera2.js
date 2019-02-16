var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina=Math.round(Math.random()*2)+1;	


}//FIN DE LA FUNCIÓN
function piedra()
{
if (eleccionMaquina==1) {
	alert("empató");
	ContadorDeEmpates=ContadorDeEmpates+1;
	document.getElementById("empatadas").value=ContadorDeEmpates;
}	
if (eleccionMaquina==2) {
	alert("perdió");
	ContadorDePerdidas=ContadorDePerdidas+1;
	document.getElementById("perdidas").value=ContadorDePerdidas;
}
if (eleccionMaquina==3) {
	alert("ganó");
	ContadorDeGanadas=ContadorDeGanadas+1;
	document.getElementById("ganadas").value=ContadorDeGanadas;
}
}//FIN DE LA FUNCIÓN
function papel()
{
if (eleccionMaquina==1) {
	alert("ganó");
	ContadorDeGanadas=ContadorDeGanadas+1;
	document.getElementById("ganadas").value=ContadorDeGanadas;
}	
if (eleccionMaquina==2) {
	alert("empató");
	ContadorDeEmpates=ContadorDeEmpates+1;
	document.getElementById("empatadas").value=ContadorDeEmpates;
}
if (eleccionMaquina==3) {
	alert("perdió");
	ContadorDePerdidas=ContadorDePerdidas+1;
	document.getElementById("perdidas").value=ContadorDePerdidas;
}	

}//FIN DE LA FUNCIÓN
function tijera()
{
if (eleccionMaquina==1) {
	alert("perdió");
	ContadorDePerdidas=ContadorDePerdidas+1;
	document.getElementById("perdidas").value=ContadorDePerdidas;
}	
if (eleccionMaquina==2) {
	alert("ganó");
	ContadorDeGanadas=ContadorDeGanadas+1;
	document.getElementById("ganadas").value=ContadorDeGanadas;
}
if (eleccionMaquina==3) {
	alert("empató");
	ContadorDeEmpates=ContadorDeEmpates+1;
	document.getElementById("empatadas").value=ContadorDeEmpates;
}			 	
}
function mostrarResultado()
{/*
document.getElementById("ganadas").value=ContadorDeGanadas;
document.getElementById("empatadas").value=ContadorDeEmpates;
document.getElementById("perdidas").value=ContadorDePerdidas;*/
}