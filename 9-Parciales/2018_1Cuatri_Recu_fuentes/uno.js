function mostrar()
{
    var mascota1;
    var mascota2;
    var peso1;
    var peso2;
    var suma;
mascota1=prompt("ingrese el nombre de su mascota: ");
peso1=prompt("ingrese el peso:");
mascota2=prompt("ingrese el nombre de otra mascota:");
peso2=prompt("ingrese su peso");
suma= parseInt(peso1)+parseInt(peso2);
alert("tenés dos mascotas " + mascota1 +" y "+ mascota2 + " que pesan "+ peso1 + " y " + peso2 + " la suma de los kilos es " + suma);

}
