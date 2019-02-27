function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var numero;
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=prompt("ingrese un numero");
	if (contador==0) {
		maximo=numero;
		minimo=numero;
	}
	
	if (numero>maximo) {
		maximo=numero;
	}
	if (numero<minimo) {
		minimo=numero;
	}
	contador=contador+1;
	respuesta=prompt("para salir ingrese no");
	}
	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;



}//FIN DE LA FUNCIÓN