function mostrar()
{
var numero;
var acumulador=0;
numero=prompt("ingrese un numero");
numero=parseInt(numero);
if (numero==2) {
    alert("es primo");
}
for(var contador=2; contador<numero;contador+1 ){
    if (numero%contador==0 ) {
        acumulador=acumulador+1;
        if (acumulador>2) {
            alert("no es primo");
          
        }else{
            alert("es es primo");
            
    }
    
        
    
}

}

}//FIN DE LA FUNCIÓN