function mostrar()
{
var cant_libro;
var precio1;
var precio2;
var precio3;
var suma;
var precio10;
var precio15;
var preciotarj;
var cond_pago;
cant_libro=prompt("ingrese cantidad de libros: ");
precio1=prompt("ingrese precio del libros: ");
precio2=prompt("ingrese precio del libros: ");
precio3=prompt("ingrese precio del libros: ");
cond_pago=prompt("usted paga con tarjeta o efectivo: ");
suma=parseInt(precio1)+parseInt(precio2)+parseInt(precio3);
if (cant_libro>=2) {

    precio10=90*suma/100;
if (cond_pago=="tarjeta") {
    preciotarj=suma
}
   
}
if (suma>=2000) {
    precio15=85*suma/100;
    if (cond_pago=="tarjeta") {
      preciotarj=precio15*1.10  
    }
}

alert("usted compro: "+ cant_libro+ " el total es de " +suma+ " si compra mas de dos libro pagarìa: "+precio10+" si la compra supera los 2000 pagaria " + precio15 + " si abona con tarjeta pagaria: "+ preciotarj );
}
