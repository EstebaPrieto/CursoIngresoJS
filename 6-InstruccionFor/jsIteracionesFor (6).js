function mostrar()
{
    var numero;
    var numerosPares;
    var acumulador=0;
    numero=prompt("ingrese un numero");
    numero=parseInt(numero);
    //validar el numero
    while (numero>0) {
        
    
for(var contador=0;contador<=numero ;contador=contador+1){
    
    //console.log(contador);
    
    if (contador%2==0 && contador!=0 ) {
        acumulador=acumulador+1;	
        console.log("numero pares "+contador);
        
		}
        
    
    }
    console.log("cantidad de numeros pares "+ acumulador);
    
   break; 
}

}

//FIN DE LA FUNCIÓN