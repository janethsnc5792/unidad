function convertir() {

    let cantidad = parseFloat(document.getElementById("cantidad").value);

    let tipoMilimetro = 10;
    let tipoMetro = 100;
    let tipoKilometro = 100000;
    let tipoPulgada = 2.54;

    let milimetros = cantidad * tipoMilimetro;
    let metros = cantidad / tipoMetro;
    let kilometros = cantidad / tipoKilometro;
    let pulgadas = cantidad / tipoPulgada;

    document.getElementById("mm").innerHTML =
    "Milímetros: " + milimetros.toFixed(2);

    document.getElementById("m").innerHTML =
    "Metros: " + metros.toFixed(2);

    document.getElementById("km").innerHTML =
    "Kilómetros: " + kilometros.toFixed(2);

    document.getElementById("pulgadas").innerHTML =
    "Pulgadas: " + pulgadas.toFixed(2);

}