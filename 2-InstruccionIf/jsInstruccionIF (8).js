var edad;
var estadocivil;
function mostrar()
{
//tomo la edad  
edad=document.getElementById("edad").value;
estadocivil=document.getElementById("estadoCivil").value;
if (edad >18 && estadocivil == "Soltero") {
    alert("es soltero y no es menor");

    
}
	


}//FIN DE LA FUNCIÓN