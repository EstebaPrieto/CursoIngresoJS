function mostrar()
{
	

	var contador=0;
	var positivo=0;
	var negativo=-1;
	var numero;
	var respuesta;
	while (respuesta!="no") {
		numero=prompt("ingrese el numero");
		if (numero>0) {
			positivo=parseInt(numero)+parseInt(positivo);
		} else {
			negativo=parseInt(negativo)*numero;
		}
		respuesta=prompt("quiere ingresar otro numero?")
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN