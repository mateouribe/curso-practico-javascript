//CÓDIGO PARA EL CUADRADO

console.group("Cuadrados");



const ladoCuadrado = 5; 
console.log("La medida de los lados del cuadrado son: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4; 
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado ** 2;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

//CÓDIGO DE TRIANGULO
console.group("Triangulos"); 

const ladoTriangulo1 = 6; 
const ladoTriangulo2 = 6; 
const baseTriangulo = 4; 
const alturaTriangulo = 5.5;
console.log("La medida de los lados del triangulo son: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo; 
console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd(); 


//CÓDIGO DE CIRCULO
console.group("Circulos")

const radioCirculo = 4;
console.log("El rádio del circulo es de: " + radioCirculo + "cm");

const diametroCiruclo = radioCirculo * 2; 
console.log("El diametro del circulo es de: " + diametroCiruclo + "cm");
const pi = Math.PI; 

const circunferenciaCirculo = pi * diametroCiruclo; 
console.log("La circunferencia del circulo es de: " + circunferenciaCirculo + "cm"); 

const areaCirculo = pi * (radioCirculo**2); 
console.log("El área del circulo es de: " + areaCirculo + "cm^2");
