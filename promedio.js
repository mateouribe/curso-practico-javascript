function CalcularMediaAritmetica(lista) {

    /*let sumaLista = 0;
    for(let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];*/
    const  sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
        

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}



//MEDIANA

function calMediana(listaM){


    listaM.sort((a,b) => a-b);
     
    console.log(listaM)
    const mitadLista = parseInt(listaM.length / 2); 

    function esPar(numero) {
        if(numero % 2 == 0) {
            return true;
        } else {
            return false
        }
    }
    
    let mediana; 

        if(esPar(listaM.length)){
            const elemento1 = listaM[mitadLista];
            const elemento2 = listaM[mitadLista-1];
            
            const promedioElemento1yElemento2 = CalcularMediaAritmetica([elemento1, elemento2]); 
    
            mediana = promedioElemento1yElemento2;
    
        }else {
            mediana = listaM[mitadLista];
        }
    
    return mediana; 
    
}

