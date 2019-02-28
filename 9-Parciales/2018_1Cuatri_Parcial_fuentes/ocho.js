function mostrar()
{
var letra;
var num;

var respuesta="si";

var contadorPares=0;
var contadorImpares=0;
var contadorCero=0;
var acumuladorPositivos=0;
var acumuladorNegativos=0;
var promedio=0;
var numeroMax=0;
var numeroMinimo=0;
var letraMax;
var letraMin;
var contadorPositivos=0;
//parsear
//var numeroMax=parseInt(numMax);
//var numeroMinimo=parseInt(numMin);

//logica
while (respuesta!="no") {
    letra=prompt("ingrese una letra");
    numero=prompt("ingrese un numero");
    var numero=parseInt(numero)
    
    while (numero<-100||numero>100) {
        numero=prompt("ingrese un numero entre -100 y 100");    
    }
    
    
    if (numero%2==0 && numero!=0) {
        contadorPares++; 
    }else{
       if (numero!=0) {
            contadorImpares++;   
       }
    }
    if (numero==0) {
        contadorCero++; 
    }
    if (numero>0) {
        contadorPositivos++
        acumuladorPositivos=contadorPositivos+1;    
    }
    if (numero<0) {
        acumuladorNegativos=acumuladorNegativos+numero;        
    }
    
    if (numero<numeroMinimo) {
        numeroMinimo=numero;
        letraMin=letra;
    }
    if (numero>numeroMax) {
        numeroMax=numero;
        letraMax=letra;
    }
    respuesta=prompt("ingrese NO para salir");
}
promedio=acumuladorPositivos/contadorPositivos;
document.write("cant pares: "+contadorPares+"<br/>Cant impares: "+contadorImpares+
"<br/>Cant ceros: "+contadorCero+"<br/>promedio de positivos: "+promedio+
"<br/>suma de negativos: "+acumuladorNegativos+"<br/>Num MAX: "+numeroMax+" letra Max: "+letraMax+
"<br/>Num Min: "+numeroMinimo+" letra Min: "+letraMin);
//alert(contadorImpares);
}
