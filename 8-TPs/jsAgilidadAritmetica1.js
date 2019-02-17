/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var num1;
var num2;
var operador=4;
var resultado;
function comenzar()
{
//generar los numeros
num1=Math.floor(Math.random()*10)+1;
num2=Math.floor(Math.random()*10)+1;
//operador=Math.floor(Math.random()*4)+1;
alert(operador);
//mostrar los datos
//document.getElementById("PrimerNumero").value=num1;
//document.getElementById("SegundoNumero").value=num2;

switch (operador) {
    case 1:
        document.getElementById("Operador").value="+";
        document.getElementById("PrimerNumero").value=num1;
        document.getElementById("SegundoNumero").value=num2;
        break;
    case 2:
        document.getElementById("Operador").value="-";
        document.getElementById("PrimerNumero").value=num1;
        document.getElementById("SegundoNumero").value=num2;
        break;
    case 3:
        document.getElementById("Operador").value="x";
        document.getElementById("PrimerNumero").value=num1;
        document.getElementById("SegundoNumero").value=num2;
        break;   
    case 4:
        document.getElementById("Operador").value="/";
        if (num1>=num2) {
            document.getElementById("PrimerNumero").value=num1;
            document.getElementById("SegundoNumero").value=num2;  
        } else {
            document.getElementById("PrimerNumero").value=num2;
            document.getElementById("SegundoNumero").value=num1;
        }
        break;     
    
}
//tomar la respuesta
//respuesta=document.getElementById("Respuesta").value;

}//FIN DE LA FUNCIÓN*/
function Responder()
{
    respuesta=document.getElementById("Respuesta").value;
if (operador==1) {
    resultado=parseInt(num1)+parseInt(num2);
    if (resultado==parseInt(respuesta)) {
        alert("Respuesta correcta!!!"); 
    } else {
        alert("Respuesta Incorrecta :(");
    }
    } 
if (operador==2) {
    resultado=num1-num2;
    if (resultado==parseInt(respuesta)) {
        alert("Respuesta correcta!!!"); 
    } else {
        alert("Respuesta Incorrecta :(");
    }
    }
if (operador==3) {
    resultado=num1*num2;
    if (resultado==parseInt(respuesta)) {
        alert("Respuesta correcta!!!"); 
    } else {
        alert("Respuesta Incorrecta :(");
    }
    }
if (operador==4) {
    resultado=num1/num2;
    if (resultado==parseInt(respuesta)) {
        alert("Respuesta correcta!!!"); 
    } else {
        alert("Respuesta Incorrecta :(");
    }
    }
}





/*if (parseInt(respuesta)==resultado) {
    alert("Respuesta correcta!!!");
}else {
    alert("Respuesta Incorrecta :(");*/
//}
    
  


//alert(resultado);
//}//FIN DE LA FUNCIÓN
