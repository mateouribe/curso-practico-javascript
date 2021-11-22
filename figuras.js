//CÓDIGO PARA EL CUADRADO

console.group("Cuadrados");

function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado*4; 
}

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado **2; 
}
console.groupEnd();

//CÓDIGO DE TRIANGULO
console.group("Triangulos"); 

function perimetroTriangulo(lado1, lado2, baseT){
    return lado1 + lado2 + baseT;
}

function areaTriangulo(baseT, alturaT){
    return (baseT*alturaT)/2;
}

console.groupEnd(); 

//CÓDIGO DE CIRCULO
console.group("Circulos")

const pi = Math.PI; 
function circunferenciaCirculo (radio){
    diametro = radio * 2;
    return diametro * pi;
}

function areaCirculo(radio) {
    return pi * (radio ** 2);
}

console.groupEnd();

//CÓDIGO ALTURA TRIANGULO ISÓSCELES


function alturaTriangulo(l1, b) {
    const mitad = b/2;
    const altura = (l1*l1)-(mitad*mitad);
    return console.log(Math.sqrt(altura));
}
