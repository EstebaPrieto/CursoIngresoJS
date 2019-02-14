var edad;
function mostrar()
{
//tomo la edad  
edad=document.getElementById("edad").value;
if (edad >18) {
    alert("mayor de edad");
}
 if (edad >13 && edad <=17) {
     alert("es adolescente");
 } 
 if (edad <13) {
     
 
     alert("es niño");
 }
    





}//FIN DE LA FUNCIÓN