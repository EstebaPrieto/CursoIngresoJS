function mostrar()
{
var numero;
var divisor;
var acumulador=0;
numero=prompt("ingrese un numero");
numero=parseInt(numero);
for(var contador=0; contador<=numero; contador=contador+1){
    if (numero%contador==0 ) {
     
        acumulador=acumulador+1;
          console.log(contador);
         
    }


}  console.log("cantidad de divisores "+acumulador);
//console.log(acumulador);



}//FIN DE LA FUNCIÓN