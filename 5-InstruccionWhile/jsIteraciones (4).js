function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
	
	while (numero<0||numero>9)
	{
		numero = prompt("Ingrese un numero entre 0 y 9.");
		numero = parseInt(numero);
	}
	document.getElementById('Numero').value = numero;


}//FIN DE LA FUNCIÓN