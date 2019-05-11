var config = {
    apiKey: "AIzaSyCcVgNXK-eclIBU-gheCZfWx6CQJBTRP8M",
    authDomain: "app-noe-a11b2.firebaseapp.com",
    databaseURL: "https://app-noe-a11b2.firebaseio.com",
    projectId: "app-noe-a11b2",
    storageBucket: "app-noe-a11b2.appspot.com",
    messagingSenderId: "1034446476934"
};
firebase.initializeApp(config);
var db = firebase.firestore();
//v rutas para los documentos respectivos 
var misDatos = db.doc("datos/miPresupuesto");
var misGastos = db.doc("datos/miPresupuesto/cuentaGastos/misGastos");

document.querySelector(".gastoAdicional").addEventListener("submit", agregarGasto);

//defino mi gasto total
var miGastoTotal = 0;
var miGastoSupervivencia = 0;
var miGastoOcio = 0;
var miGastoCultura = 0;
var miGastoExtra = 0;

//actualizo mi gasto total según la base
misDatos.get().then(function (doc) {
    miGastoTotal * 1;
    miGastoTotal += doc.data().gasto * 1;
    console.log("mi gasto:" + miGastoTotal);
    console.log(typeof miGastoTotal);
});
//después de la ejecución de esa función mi gasto se acomoda al de la base

//obtiene los datos de la base
misGastos.get().then(function (doc) {
    miGastoSupervivencia * 1;
    //console.log("supervivencia" + doc.data().supervivencia);
    miGastoSupervivencia = doc.data().supervivencia;
    miGastoOcio * 1;
    miGastoOcio = doc.data().ocio;
    miGastoCultura * 1;
    miGastoCultura = doc.data().cultura;
    miGastoExtra * 1;
    miGastoExtra = doc.data().extras;
})

//agrega el gasto
function agregarGasto(event) {
    event.preventDefault();
    miGastoTotal;
    miGastoSupervivencia;
    miGastoOcio;
    miGastoCultura;
    miGastoExtra;
    var gastoIngresado = document.querySelector("#importeGastado").value;
    gastoIngresado *= 1;
    actualizarDato();
    console.log("tipo de Gasto ingresado" + typeof gastoIngresado);
    if (document.getElementById("Supervivencia").checked) {
        console.log("supervivencia chequeado");
        misGastos.update({
            supervivencia: miGastoSupervivencia + gastoIngresado
        });
    }
    if (document.getElementById("Ocio").checked) {
        console.log("ocio chequeado");
        misGastos.update({
            ocio: miGastoOcio + gastoIngresado
        });
    }
    if (document.getElementById("Cultura").checked) {
        console.log("Cultura chequeado")
        misGastos.update({
            cultura: miGastoCultura + gastoIngresado
        });
    }
    if (document.getElementById("Extras").checked) {
        console.log("Extras chequeado")
        misGastos.update({
            extras: miGastoExtra + gastoIngresado
        });
    }
    misDatos.get().then(function (doc) {
        console.log(doc.data().gasto);
        console.log(gastoIngresado);
        //add(doc.data().gasto += gastoIngresado);
    });
    //v actualiza el dato en el gasto
    function actualizarDato() {
        misDatos.update({
            gasto: gastoIngresado + miGastoTotal
        })
        .then(function(){
            location.replace("gastoAdicional.html");
        });
    }
    //console.log(data().gasto);

}

document.querySelector(".volver").addEventListener("click", function(){
    location.replace("seguimientoPrincipal.html");
})

/*
    //para mostrar las explicaciones
    document.querySelector(".inter").addEventListener("click", mostrarExplicacion);
    var miTexto;

    document.querySelector(".expSuper").addEventListener("click", function(){
        miTexto = 0;
    });
    document.querySelector(".expOcio").addEventListener("click", function(){
        miTexto = 1;
    });




function mostrarExplicacion(){

    switch(miTexto){
        
        
        case 0:
        document.querySelector("#explicacion").innerHTML ="Explicacion supervivencia";
        break;
        case 1:
        document.querySelector("#explicacion").innerHTML ="Explicacion ocio";
        break;
        case 2:
        miTexto = "explicacion cultura";
        break;
        case 3:
        miTexto = "explicacion extras";
        break;
        default:
        miTexto = "explicacion? no hay explicacion";
    }
    document.querySelector(".explicacion").style.display = "block";
}*/

console.log("mi gasto final" + miGastoTotal);