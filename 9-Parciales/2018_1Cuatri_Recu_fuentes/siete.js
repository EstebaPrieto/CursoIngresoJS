function mostrar()
{
var contadorVehiculos=0;    
var velocidad;
var combustible;
var velocidadMin;
var velocidadMax;
var combustibleMin;
var contadorCombustible=0;
var velocidadCombS;
var promedio;
var prom;
var acumuladorVelocidad=0;
var acumulador;

while (contadorVehiculos < 5) {
    //tomar datos y validar
    var vel = prompt("VELOCIDAD:");
    velocidad = parseInt(vel);
    while (velocidad < 0 || velocidad > 250) {
        vel = prompt("velocidad entre 0 y 250");
        velocidad = parseInt(vel);
    }
    combustible = prompt("COMBUSTIBLE: S = solido o L = liquido");
    while (combustible != 's' && combustible != 'l') {
        combustible = prompt("re ingrese COMBUSTIBLE: S = solido o L = liquido");
    }
    //parte 2
    if (contadorVehiculos == 0) {
        velocidadMin = velocidad;
        combustibleMin = combustible;
        velocidadMax = velocidad;
        
    } else {
        if (velocidad < velocidadMin) {
            velocidadMin = velocidad;
            combustibleMin = combustible;
        }
    }
    
   //parte 3
   if (velocidad > 100 && combustible == 'l') {
       contadorCombustible++;
   }
   //parte 4
   
   if (combustible == 's' && velocidad > velocidadMax) {
       velocidadMax = velocidad;
   }
   contadorVehiculos++;
   //parte1
   acumuladorVelocidad =parseInt(acumuladorVelocidad) + velocidad; 
   
   

}//fin contadorVehiculos

prom = acumuladorVelocidad / 5;
promedio = parseInt(prom);

document.write("Promedio de velocidades: " + promedio + 
"<br/> Velocidad mas baja: " + velocidadMin + " tipo de combustible: " + combustibleMin + 
"<br/>Cant de combustibles Liquidos que superan los 100km: " + contadorCombustible +
"<br/>Velocidad mas alta de combustible solido: " + velocidadMax);
}
