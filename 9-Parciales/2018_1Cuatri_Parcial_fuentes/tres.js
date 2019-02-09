function mostrar()
{
var precio;
var porcentaje;
var descuento;
var preciofinal;
precio=prompt("ingrese el precio");
porcentaje=prompt("ingrese el % de descuento");
descuento= parseInt(porcentaje)* parseInt(precio) /100;
preciofinal= parseInt(precio) - descuento;

document.getElementById("elPrecioFinal").value=preciofinal;
}
