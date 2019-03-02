function mostrar()
{
var respuesta=true;
var pais;
var sup;
var superficie;
var contadorImpar=0;
var contadorMenos100=0;
var contadorIgual100=0;
var paisMas100;
var paisMenos;
var bandera=true;
var contador=0;
var acumuladorSup=0;
var promedio;
var supMin;

while (respuesta == true) {
    //tomar dato y validar
    pais = prompt("pais:");
    sup = prompt("superficie:");
    superficie = parseInt(sup);
    while (superficie < 1) {
        sup = prompt("no valido. Superficie:");
        superficie = parseInt(sup);
    }
    //logica
    //parte 1
    if (superficie % 2 == 0 ) {
        
    }else{
        contadorImpar++;
    }
    //parte 4
    if (bandera == true && superficie >100) {
            paisMas100 = pais;
            bandera = false;
    }
    //parte 2
    if (superficie < 100) {
        contadorMenos100++;
    }
   
    //parte 3
    if (superficie == 100) {
        contadorIgual100++;
    }
    //parte 5 y 6
    
    if (contador == 0) {
        supMin = superficie;
        paisMenos = pais;
    } else {
        if (superficie < supMin) {
            supMin = superficie;
            paisMenos = pais;
        }
    }//fin else
acumuladorSup = acumuladorSup + superficie;
contador++;
respuesta = confirm("Continuar?");   
}//fin respuesta true 
promedio = acumuladorSup / contador;
document.write("Paises con Sup Impar: " + contadorImpar + "<br/>Paises con menos de 100 km: " + contadorMenos100 +
"<br/>Paises con 100 km: " + contadorIgual100 + "<br/>Primer pais con mas de 100km: " + paisMas100 +
"<br/>Pomedio de km: " + promedio + "<br/>Pais con menos territorio: " + paisMenos );

}//fin funcion
