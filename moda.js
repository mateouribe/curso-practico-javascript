function encontrarModa([lista]) {
    const listaCount = {}; 
    
    lista.map ({
            function (elemento) {
                if(listaCount[elemento]) {
                    listaCount[elemento] += 1; 
                } else {
                    listaCount[elemento] = 1;
                }
            }
    })

    const listaArray = Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor) { 
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    
    return listaArray[listaArray.length - 1] ;
}




