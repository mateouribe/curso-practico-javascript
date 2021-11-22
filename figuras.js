//CÓDIGO PARA EL CUADRADO
console.group("Cuadrados");

function perimetroCuadrado(ladosCuadrado){
    return ladosCuadrado*4; 
    
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
function perimetroCirculo (radio){
    diametro = radio * 2;
    return diametro * pi;
}

function areaCirculo(radio) {
    return pi * (radio ** 2);
}

console.groupEnd();

//INTERACTIAR CON HTML

//CUADRADO
function calcularPerimetroCuadrado() {
    const inputCuadrado = document.querySelector(".ladoCuadrado");
    const valueCuadrado = inputCuadrado.value;

    const perimetroC = perimetroCuadrado(valueCuadrado);
    console.log(perimetroC);
}

function calcularAreaCuadrado() {
    const inputCuadrado = document.querySelector(".ladoCuadrado");
    const valueCuadrado = inputCuadrado.value;

    const areaC = areaCuadrado(valueCuadrado);
    console.log(areaC);
}


//TRIANGULO
function calcularPerimetroTriangulo() {
    const L1 = document.querySelector(".lado1Triangulo");
    const L2 = document.querySelector(".lado2Triangulo");
    const b = document.querySelector(".baseTriangulo");
    const h = document.querySelector(".alturaTriangulo");

    const valueL1 = parseInt(L1.value);
    const valueL2 = parseInt(L2.value);
    const valueb = parseInt(b.value);
    const valueh = parseInt(h.value);

    const perimetroT = perimetroTriangulo(valueL1, valueL2, valueb);
    console.log(perimetroT);
}

function calcularAreaTriangulo() {

    const b = document.querySelector(".baseTriangulo");
    const h = document.querySelector(".alturaTriangulo");
    const valueb = parseInt(b.value);
    const valueh = parseInt(h.value);

    const areaT = areaTriangulo(valueb, valueh);
    console.log(areaT);
}


function calcularPerimetroCirculo() {
    const inputCirculo = document.querySelector(".radioCirculo");
    const valueCirculo = inputCirculo.value;

    const perimetroCi = perimetroCirculo(valueCirculo);
    console.log(perimetroCi);
}

function calcularAreaCirculo() {
    const inputCirculo = document.querySelector(".radioCirculo");
    const valueCirculo = inputCirculo.value;

    const areaCi = areaCirculo(valueCirculo);
    console.log(areaCi);
}