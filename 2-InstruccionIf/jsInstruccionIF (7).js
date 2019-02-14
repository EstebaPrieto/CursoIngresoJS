var edad;
var estadocivil;
function mostrar()
{
//tomo la edad  
edad=document.getElementById("edad").value;
estadocivil=document.getElementById("estadoCivil");
if (edad <18 && estadocivil != "soltero") {
    alert("es muy pequeño para no ser soltero");
}

	


}//FIN DE LA FUNCIÓN