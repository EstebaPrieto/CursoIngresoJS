function mostrar()
{
var marca;
var p; 
var peso;
var t;
var temp;
var respuesta="si";
var contadorTempPar=0;
var masPesado;
var contadorTempMenos0=0;
var promPeso=0;
var pesoMax;
var pesoMin;
var contador=0;
var marcaMasPes;
var acumuladorPeso=0;


while (respuesta!="no") {
    //toamr dato parsear y validar
    marca=prompt("ingrese MARCA");
    p=prompt("ingrese PESO");
    peso=parseInt(p);
    while (peso<1||peso>100) {
        peso=prompt("PESO ENTRE 1 Y 100")
       
    }
    t=prompt("ingrese TEMPERATURA");
    temp=parseInt(t);
    while (temp<-30||temp>30) {
        temp=prompt("TEMPERATURA ENTRE -30 Y 30");
}//fin val temp
    
    //logica
    //A
    if (temp%2==0) {
        contadorTempPar++;
    }
    if (contador==0) {
        masPesado=peso;
        pesoMax=peso;
        pesoMin=peso;
        marcaMasPes=marca;
    }
    //B
    if (peso>masPesado&&contador!=0) {
        marcaMasPes=marca;
    }
    //C
    if (temp<0) {
        contadorTempMenos0++;
    }
    //F
    if (peso>pesoMax&&contador!=0) {
        pesoMax=peso;
    }
    if (peso<pesoMin&&contador!=0) {
        pesoMin=peso;
    }
    //contador
    contador++;
    //D
    acumuladorPeso=parseInt(acumuladorPeso)+peso;
    
    //respuesta
    respuesta=prompt("NO para terminar");

     
}


    
//fin val peso
promPeso=acumuladorPeso/contador;
document.write("Temperaturas pares: "+contadorTempPar+"<br/>Marca de Prod. MAS PESADO: "+marcaMasPes+
"<br/>Productos con MENOS DE 0°: "+contadorTempMenos0+
"<br/>Promedio de pesos: "+promPeso+"<br/>Peso MAX: "+pesoMax+"<br/>Peso MIN: "+pesoMin);

}
