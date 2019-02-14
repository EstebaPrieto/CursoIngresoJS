/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largo;
var ancho;
var perimetro;
var radio;
var cemento;
var cal;
var rectangulo;
function Rectangulo () 
{
largo=document.getElementById("Largo").value;
ancho=document.getElementById("Ancho").value;
perimetro= parseInt(largo)*2+ parseInt(ancho)*2;
alert("se deben comprar "+ perimetro*3 + " metros de alambre" );

}
function Circulo () 
{
radio=document.getElementById("Radio").value;
alert("comprar "+ 2*3.14 * parseInt(radio) *3 + " metros de alambre");
}
function Materiales () 
{
    largo=document.getElementById("Largo").value;
    ancho=document.getElementById("Ancho").value;
    rectangulo= parseInt(largo)*parseInt(ancho);
    cemento=rectangulo*2;
    cal=rectangulo*3;
    alert("se nececitan "+ cemento + " bolsas de cemento y " + cal+" bolsas de cal");
}