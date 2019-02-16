/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %
 y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
var precio=35;
var total;
var cant;
var marca;
var iibb;

 function CalcularPrecio () 
{
    /*tomo los datos*/
cant=document.getElementById("Cantidad").value;
marca=document.getElementById("Marca").value;   
    /*caso a*/
if (cant<6) {
 
    /*caso B*/
if (cant==5 && marca =="ArgentinaLuz") {
    total=precio*parseInt(cant);
    total=total*0.6;
} else {
    total=precio*parseInt(cant);
    total=total*0.7;
}
    /*caso C*/
  /*  C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
  se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.*/
if (cant==4) {
   if (marca=="ArgentinaLuz"||marca=="FelipeLamparas") {
    total=precio*parseInt(cant);
    total=total*0.75; 
   } else {
    total=precio*parseInt(cant);
    total=total*0.8;
   } 
}
/*D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz" 
 el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.*/
if (cant==3) {
    if (marca=="ArgentinaLuz") {
    total=precio*parseInt(cant);
    total=total*0.85;  
    }
    if (marca=="FelipeLamparas") {
    total=precio*parseInt(cant);
    total=total*0.9;    
    }
    if (marca=="JeLuz"||marca=="HazIluminacion"||marca=="Osram") {
    total=precio*parseInt(cant);
    total=total*0.95; 
    }
} 
    /*fin caso a*/
} else {
    total=precio*parseInt(cant);
    total=total*0.5;
}
/*E.	Si el importe final con descuento suma más de $120 
 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */
if (total>120) {
    iibb=parseInt(total)*0.1;
    
    alert("IIBB: Usted pagó $"+iibb);
}   

document.getElementById("precioDescuento").value=total;
     
} 
    




 	

