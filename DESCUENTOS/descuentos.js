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

function calcularPrecioConCupon(precio, cupon){
    
    if(cupon == CUPONES[0] ){
        const porcentajePrecioConDescuento = 100 - 50;
        const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
        return precioConDescuento;
    } else if(cupon == CUPONES[1]) {
        const porcentajePrecioConDescuento = 100 - 40;
        const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
        return precioConDescuento;
    } else if(cupon == CUPONES[2]) {
        const porcentajePrecioConDescuento = 100 - 30;
        const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
        return precioConDescuento;
    } else if(cupon == CUPONES[3]) {
        const porcentajePrecioConDescuento = 100 - 20;
        const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
        return precioConDescuento;
    }else if(cupon == CUPONES[4]) {
        const porcentajePrecioConDescuento = 100 - 10;
        const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
        return precioConDescuento;
    } else {
        alert ("¡Cupon no valido!")
    }
}

function totalPayCupon(){
    const precioHS = document.querySelector(".getPrecioC").value;
    const cuponH = document.querySelector(".getCupon").value;
    const precioFinal = calcularPrecioConCupon(precioHS, cuponH);
    const espacio = document.querySelector(".resultados");
    
    espacio.innerHTML += precioFinal + "$"
}

const CUPONES = ["cody", "andy", "alana", "lucas", "timon"]; 