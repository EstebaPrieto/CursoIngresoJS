function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	
	while(respuesta!="no") 
	{
		 numero = prompt("Ingrese Un Numero");
         numero = parseInt(numero);

          while(numero<1 || numero>10)
           {
            numero = prompt("Ingrese Un Numero");
            numero = parseInt(numero);       
           }

           acumulador = acumulador + numero;

           contador = contador + 1;
	       
	       respuesta = prompt("Desea ingresar otro numero? si/no")

	}

		
        //respuesta = confirm("Desea ingresar otro numero? si/no")
        //"confirm" es una ventana que devuenve True o False.

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;





/*while (respuesta ="si") {
	
	var numero=parseInt(prompt("Ingrese el numero:"));
	acumulador= acumulador+numero;
	contador=contador+1;
	respuesta=prompt("Quiere ingresar otro numero?");
}
//respuesta=prompt("Quiere ingresar otro numero?");
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;*/

}//FIN DE LA FUNCIÓN