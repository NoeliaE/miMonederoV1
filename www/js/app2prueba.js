/*var config = {
    apiKey: "AIzaSyCcVgNXK-eclIBU-gheCZfWx6CQJBTRP8M",
    authDomain: "app-noe-a11b2.firebaseapp.com",
    databaseURL: "https://app-noe-a11b2.firebaseio.com",
    projectId: "app-noe-a11b2",
    storageBucket: "app-noe-a11b2.appspot.com",
    messagingSenderId: "1034446476934"
};
firebase.initializeApp(config);
var db = firebase.firestore();*/

var misDatos = db.doc("datos/miPresupuesto");

var _ingresoTotal = 0;
var _meta = 0;
var _gastos = 0;
var _dia = 0;
var _mes = 0;
var dias30 = false;
var dias31 = false;
var dias28 = false;
var fecha = new Date();
var mesAhora = fecha.getMonth() + 1;
console.log(mesAhora);
var diaHoy = fecha.getDate();
var diasRestantes = 0;


actualizarDatos = function () {
    misDatos.get().then((function (doc) {
        //console.log(doc.data());
        _ingresoTotal * 1;
        _meta * 1;
        _gastos * 1;
        _dia * 1;
        _mes * 1;
        _ingresoTotal = doc.data().ingresoTotal; //TODO el ingreso
        _meta = doc.data().meta; //La meta
        _gastos = doc.data().gasto;
        _dia = doc.data().dia;
        _mes = doc.data().mes;
        dias30 = doc.data().dias30;
        dias31 = doc.data().dias31;
        dias28 = doc.data().dias28;
        var _disponibleTotal = _ingresoTotal - _meta; //es la plata TOTAL que puedo usar en el ciclo
        var _disponibleActual = _disponibleTotal - _gastos;
        var _disponibleActual2 = _ingresoTotal - _gastos;
        //var _gastoActual = _ingresoTotal - doc.data().gasto;
        //var _miDisponibilidad = _gastoActual - _meta;
        //var _gastosTotales; //debería ser la suma de los gastos en cada área

        //var _plataParaUsar = _ingresoTotal - _meta; //es la plata TOTAL que puedo usar en el ciclo
        var _porcentajeParcial = _disponibleTotal - _gastos; //es la plata que ESTOY GASTANDO en el ciclo
        var _porcentajeGastado = (_porcentajeParcial * 100) / _disponibleTotal; //es el porcentaje


        var cambiarAltura = _porcentajeGastado + "%"
        function cambioAltura() {
            document.querySelector(".progreso").style.height = cambiarAltura;
            if (_porcentajeGastado >= 75) {
                document.querySelector(".progreso").style.backgroundColor = "#095c15"; //verde
            } else if (_porcentajeGastado >= 55) {
                document.querySelector(".progreso").style.backgroundColor = "#507715"; //verdish
            } else if (_porcentajeGastado >= 45) {
                document.querySelector(".progreso").style.backgroundColor = "#ffb815"; //amarillo
            } else if (_porcentajeGastado >= 25) {
                document.querySelector(".progreso").style.backgroundColor = "#f45e0e"; //rojish
            } else if (_porcentajeGastado >= 0) {
                document.querySelector(".progreso").style.backgroundColor = "#e90006";
            } else if (_porcentajeGastado < 0) {
                document.querySelector(".progreso").style.height = "100%";
                document.querySelector(".progreso").style.backgroundColor = "#e90006";
            }
        }


        function calcularDias() {
            if (mesAhora == _mes && dias30 == true) {
                diasRestantes = 30 - (diaHoy - _dia);
            } else if (mesAhora == _mes && dias31 == true) {
                diasRestantes = 31 - (diaHoy - _dia);
            } else if (mesAhora == _mes && dias28 == true) {
                diasRestantes = 31 - (diaHoy - _dia);
            } else if (mesAhora == (_mes + 1)) {
                diasRestantes = _dia - diaHoy;
            }
        }

        cambioAltura();
        calcularDias();

        //esta función cambia el innerHTML de los totales
        if (doc && doc.exists) {
            //console.log(doc.data());
            //console.log(doc.data().ingresoTotal);
            // document.querySelector(".plataDisponible").innerHTML = _disponibleActual;
            document.querySelector(".miMeta").innerHTML = doc.data().meta;
            document.querySelector(".plataTotal").innerHTML = _disponibleActual2;
            document.querySelector(".miGastoTotal").innerHTML = _gastos;
            document.querySelector("#dias").innerHTML = diasRestantes;
        } else {
            console.log("keep tryin'");
        }
    })
    );
}

// agregarIngreso = function (){

// }

actualizarDatos();

document.querySelector(".nuevoIngreso").addEventListener("submit", nuevoIngreso);

/*function obtenerDatos() {
    //return "asd";
    var _ingresoTotal;
    misDatos.get().then(function (doc) {
        _ingresoTotal = doc.data().ingresoTotal * 1;
        return _ingresoTotal;
    });
}*/

// var _ingresoTotal = 0;
var _ingresoNuevo = 0;
//var _ingresoNuevo = 0;
//var _ingresoTotal = misDatos.data().ingresoTotal;
function nuevoIngreso(event) {
    event.preventDefault();
    //_ingresoTotal * 1;
    //_ingresoTotal * 1;
    _ingresoNuevo * 1;
    _ingresoNuevo = document.getElementById("monto").value * 1;

    //ES IMPORTANTE ACTUALIZAR EL INGRESO TOTAL
    misDatos.get().then(function (doc) {
        _ingresoTotal = doc.data().ingresoTotal * 1;
        console.log("todo mi ingreso " + _ingresoTotal);
    });
    console.log(_ingresoNuevo + " ingreso nuevo");

    /* misDatos.get().then(function(doc){
         _ingresoTotal = doc.data().ingresoTotal * 1;
         console.log(_ingresoTotal + " ingreso total1");
     });*/
    //console.log(_ingresoTotal + " ingreso total");
    //console.log(_ingresoNuevo);*/
    misDatos.update({
        ingresoTotal: _ingresoTotal + _ingresoNuevo
    })
        .then(function () {
            actualizarDatos();
            document.querySelector("#nuevoIngreso").style.display = "none";
            document.getElementById("monto").value = "";
        });


}
document.querySelector(".agregarGasto").addEventListener("click", function () {
    location.replace("gastoAdicional.html");
});

document.querySelector(".agregarIngreso").addEventListener("click", modalIngreso);

function modalIngreso() {
    document.querySelector("#nuevoIngreso").style.display = "block";
}

document.querySelector("#cancelar").addEventListener("click", function () {
    document.querySelector("#nuevoIngreso").style.display = "none";
});

document.querySelector(".verEstadisticas").addEventListener("click", function () {
    location.replace("estadisticas.html");
})



console.log("success!");