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
var promPeso;
var pesoMax;
var pesoMin;
var contador=0;
var marcaMasPes;
var acumuladorPeso;


while (respuesta!="no") {
    //toamr dato parsear y validar
    marca=prompt("ingrese MARCA");
    p=prompt("ingrese PESO");
    peso=parseInt(p);
    while (peso<1||peso>100) {
        peso=prompt("PESO ENTRE 1 Y 100");
        peso=parseInt(peso);
               
    }
    t=prompt("ingrese TEMPERATURA");
    temp=parseInt(t);
    while (temp<-30||temp>30) {
        temp=prompt("TEMPERATURA ENTRE -30 Y 30");
        temp=parseInt(temp);
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
    
    //D
    if (peso > 0 && peso < 101) {
       acumuladorPeso = acumuladorPeso + peso;
    }
   
    //contador
    contador++;
    //respuesta
    respuesta=prompt("NO para terminar");

     
}

//alert(acumuladorPeso)
    

promPeso=acumuladorPeso/contador;
document.write("Temperaturas pares: "+contadorTempPar+"<br/>Marca de Prod. MAS PESADO: "+marcaMasPes+
"<br/>Productos con MENOS DE 0°: "+contadorTempMenos0+
"<br/>Promedio de pesos: "+promPeso+"<br/>Peso MAX: "+pesoMax+"<br/>Peso MIN: "+pesoMin);

}
