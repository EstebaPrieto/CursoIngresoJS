/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precio1;
var precio2;
var precio3;
var suma;
var promedio;

function Sumar () 
{
    precio1=document.getElementById("PrecioUno").value; 
    precio2=document.getElementById("PrecioDos").value;
    precio3=document.getElementById("PrecioTres").value;
suma=alert(parseInt(precio1)+parseInt(precio2)+parseInt(precio3));    

}
function Promedio () 
{
    precio1=document.getElementById("PrecioUno").value; 
    precio2=document.getElementById("PrecioDos").value;
    precio3=document.getElementById("PrecioTres").value;
    suma=parseInt(precio1)+parseInt(precio2)+parseInt(precio3);
promedio= parseInt(suma)/3;
alert("el promedio es " + promedio);
	
}
function PrecioFinal () 
{
    precio1=document.getElementById("PrecioUno").value; 
    precio2=document.getElementById("PrecioDos").value;
    precio3=document.getElementById("PrecioTres").value;
    suma=parseInt(precio1)+parseInt(precio2)+parseInt(precio3);
    alert("precio mas IVA: " + suma * 1.21);	
}