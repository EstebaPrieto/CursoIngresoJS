/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var fahrenheit;
var centígrados;
var conversion;
function FahrenheitCentigrados () 
{
fahrenheit=document.getElementById("Temperatura").value;
conversion=parseInt(fahrenheit)-32;
centigrados=conversion*5/9;    
alert(fahrenheit+" fahrenheit son " + centigrados + " grados centigrados");	
}

function CentigradosFahrenheit () 
{
    centigrados=document.getElementById("Temperatura").value;
    conversion=parseInt(centigrados)*9/5;
    fahrenheit=conversion+32;    
    alert(centigrados+" centigrados son " + fahrenheit + " fahrenheit");
	
}
