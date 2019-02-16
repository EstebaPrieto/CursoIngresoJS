var nota;
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	nota=Math.floor(Math.random() * 10)+1;	
	if (nota==9||nota==10) {
		alert("exceleten");
	}
	if (nota >=4) {
		alert("aprobó");}
	
	if (nota<4) {
		alert("vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN