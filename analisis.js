// Helpers
function esPar(numero) {
    return (numero % 2 == 0); 
}; 

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}; 

//Calculadora de medianas
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

   if (esPar(lista.length)) 
   {
       const personaMitad1 = lista[mitad - 1 ]; 
       const personaMitad2 = lista[mitad]; 
       const mediana = calcularMediaAritmetica([ personaMitad1 , personaMitad2 ]);
       return mediana; 
   } 
   else 
   {
       const personaMitad = lista[mitad]; 
       return personaMitad; 
   }

}

//Mediana General 
const salaryCol = colombia.map((persona) => persona.salary);
const salaryAr = argentina.map((persona)=>persona.salary);

const salariosColSorted = salaryCol.sort((a,b) => a-b);
const salariosArSorted = salaryAr.sort((a,b)=> a-b);



const medianaGeneralCol = medianaSalarios(salariosColSorted);
const medianaGeneralAr = medianaSalarios(salariosArSorted); 

//Mediana del top 10%
const spliceStartCol = (salariosColSorted.length * 90) / 100; 
const spliceCountCol = salariosColSorted.length - spliceStartCol; 

const spliceStartAr = (salariosArSorted.length * 90) /100; 
const spliceCountAr = salariosArSorted.length - spliceStartAr; 

const salariosColTop10 = salariosColSorted.splice(spliceStartCol, spliceCountCol);
const salariosArTop10 = salariosArSorted.splice(spliceStartAr, spliceCountAr); 

const medianaTop10Col = medianaSalarios(salariosColTop10);
const medianaTop10Ar = medianaSalarios(salariosArTop10); 


console.log(medianaGeneralCol); 
console.log(medianaTop10Col);

console.log(medianaGeneralAr); 
console.log(medianaTop10Ar);
