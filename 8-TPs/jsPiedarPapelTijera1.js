/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
eleccionMaquina=Math.round(Math.random()*2)+1;	


}//FIN DE LA FUNCIÓN
function piedra()
{
if (eleccionMaquina==1) {
    alert("empató");
}	
if (eleccionMaquina==2) {
    alert("perdió");
}
if (eleccionMaquina==3) {
    alert("ganó");
}		
}//FIN DE LA FUNCIÓN
function papel()
{
if (eleccionMaquina==1) {
    alert("ganó");
}	
if (eleccionMaquina==2) {
    alert("empató");
}
if (eleccionMaquina==3) {
    alert("perdió");
}	

}//FIN DE LA FUNCIÓN
function tijera()
{
if (eleccionMaquina==1) {
    alert("perdió");
}	
if (eleccionMaquina==2) {
    alert("ganó");
}
if (eleccionMaquina==3) {
    alert("empató");
}		

}//FIN DE LA FUNCIÓN