


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}



function totalPay(){
    const precioH = document.querySelector(".getPrecio").value;
    const descuentoH = document.querySelector(".getDescuento").value;

    const precioFinal = calcularPrecioConDescuento(precioH, descuentoH);
    const espacio = document.querySelector(".resultado");
    
    espacio.innerHTML += precioFinal + "$"
}

