function numBoletoRandom() {
    var boleto = Math.floor(Math.random() * 999999).toString();
    return boleto;
}

function asignaBoleto() {
    $.palanca.image = "widget/bg-palanca-abajo.png";
    var numBoleto = numBoletoRandom();
    $.pickerBoletos.setSelectedRow(0, numBoleto[0], true);
    $.pickerBoletos.setSelectedRow(1, numBoleto[1], true);
    $.pickerBoletos.setSelectedRow(2, numBoleto[2], true);
    $.pickerBoletos.setSelectedRow(3, numBoleto[3], true);
    $.pickerBoletos.setSelectedRow(4, numBoleto[4], true);
    $.pickerBoletos.setSelectedRow(5, numBoleto[5], true);

    setTimeout(function() {
        $.palanca.image = "widget/bg-palanca-arriba.png";
    }, 400);
}

setTimeout(function() {
    asignaBoleto();
}, 1000); 