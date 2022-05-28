function valorentrada(){
    var categoria= document.getElementById('inputCategoria').value;

    var cantidad=parseInt(document.getElementById('inputCantidad').value);

    var monto=cantidad*200;

    switch(categoria){
        case 'Estudiante':parseInt(document.getElementById('inputPago').value=(monto-(monto*0.8)));
        break;

        case 'Trainee':parseInt(document.getElementById('inputPago').value=(monto-(monto*0.5)));
        break;

        case 'Junior':parseInt(document.getElementById('inputPago').value=(monto-(monto*0.15)));
        break;    
    }
}

function borrarelemento(){
    document.getElementById('formulario_').reset();
}

