function mostrar()
{
var cant_persona;
var precio_total;
var precio_cadauno;
var precio_prop;
var preciofinal;    

cant_persona=prompt("ingrese la cantidad de omensales: ");
precio_total=document.getElementById("elPrecioFinal").value;
precio_prop=parseInt(precio_total)*1.10;
preciofinal=precio_prop*1.21;
precio_cadauno=preciofinal/parseInt(cant_persona);
alert("el total es " +precio_total+" mas la propina: "+ precio_prop+" mas el IVA: "+ preciofinal+ " cada uno debe pagar: "+ precio_cadauno );
}
