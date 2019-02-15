var precio1;
var precio2;
var suma;
var descuento;/*porcentaje descuento*/
var calculo;
var preciodescueto;/*precio menos descuento*/
var preciofinal;/*precio con descuento mas iva*/
function mostrar()
{
precio1=document.getElementById("elNombre").value;
precio2=document.getElementById("laLocalidad").value;
suma=parseInt(precio1)+parseInt(precio2);
calculo= 90 * suma;
descuento=calculo/suma;
preciofinal=descuento*1.21;
alert("tu compra es de $"+suma+" tenes un descuento del 10% queda en " + descuento + " más el IVA es $"+preciofinal);  

}
