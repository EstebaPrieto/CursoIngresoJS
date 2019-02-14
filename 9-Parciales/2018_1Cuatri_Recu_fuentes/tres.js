function mostrar()
{
    var precio;
    var descuento;
    var porcentaje;
    var preciofinal;
    precio=prompt("Ingrese el precio: ");
    porcentaje=prompt("ingrese el porcentaje de descuento: ");
    descuento=parseInt(porcentaje)* parseInt(precio)/100;
    preciofinal=parseInt(precio)-parseInt(descuento);
    document.getElementById("elPrecioFinal").value=preciofinal;

}
