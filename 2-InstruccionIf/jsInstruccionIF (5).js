var edad;
function mostrar()
{
//tomo la edad  
edad=document.getElementById("edad").value;
if (edad <13 || edad >17) {
    alert("no es adolescente");
    
}
}