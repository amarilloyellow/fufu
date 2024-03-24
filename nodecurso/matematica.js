function suma(x1, x2){
    return x1 + x2;
}

function restar(x1, x2){
    return x1 - x2;
}

function multi(x1, x2){
    return x1 * x2;
}

function dividir(x1, x2){
    if (x2 == 0){
        console.error('No se puede Dividir');
    } else {
        return x1 / x2;
    }
    
}

exports.suma = suma;
exports.restar = restar;
exports.multi = multi;
exports.dividir = dividir;