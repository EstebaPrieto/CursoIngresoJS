function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var acumuladorPositivo=0;
	var acumuladorNegativos=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCero=0;
	var contadorPares=0;
	var promedioPos;
	var promedioNeg;
	var diferencia;
	var respuesta="si";

	while(respuesta!="no")
	{
		var numero=parseInt(prompt("ingrese un numero"));
		contador++;
		if (numero%2==0 && numero!=0) {
		contadorPares++;	
		}
		if (numero<0) {
		contadorNegativos++;
		acumuladorNegativos=acumuladorNegativos+numero;	
		}
		if (numero >0) {
		contadorPositivos++;
		acumuladorPositivo=acumuladorPositivo+numero;	
		}
		if (numero==0) {
		contadorCero++;	
		}
		respuesta=prompt("ingrese no pasa salir");	
	}
	//alert(acumuladorPositivo)
	promedioNeg=acumuladorNegativos/contadorNegativos;
	promedioPos=acumuladorPositivo/contadorPositivos;
	diferencia=acumuladorPositivo+acumuladorNegativos;
document.write("suma de negativos:"+acumuladorNegativos +"<br/>suma de positivos: " +acumuladorPositivo+
"<br/> Cantidad de positivos:" +contadorPositivos+"<br/>Cantidad de negativos: "+contadorNegativos+
"<br/> Cantidad de ceros: "+contadorCero+"<br/> Cantidad de pares: "+contadorPares+"<br/> Promedio positivos: "+promedioPos+
"<br/> Promedio negativos: "+promedioNeg+"<br/> diferencia: "+diferencia );


}//FIN DE LA FUNCIÓN