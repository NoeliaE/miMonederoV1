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

var misDatos = db.doc("datos/miPresupuesto");

actualizarDatos = function () {
    misDatos.get().then((function (doc) {
        //console.log(doc.data());
        var _ingresoTotal = doc.data().ingresoTotal; //TODO el ingreso
        var _meta = doc.data().meta; //La meta
        var _gastos = doc.data().gasto;
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
            if (_porcentajeGastado >= 60) {
                document.querySelector(".progreso").style.backgroundColor = "green";
            } else if (_porcentajeGastado >= 25) {
                document.querySelector(".progreso").style.backgroundColor = "yellow";
            } else if (_porcentajeGastado >= 0) {
                document.querySelector(".progreso").style.backgroundColor = "red";
            }
        }

        cambioAltura();

        //esta función cambia el innerHTML de los totales
        if (doc && doc.exists) {
            //console.log(doc.data());
            //console.log(doc.data().ingresoTotal);
            document.querySelector(".plataDisponible").innerHTML = _disponibleActual;
            document.querySelector(".miMeta").innerHTML = doc.data().meta;
            document.querySelector(".plataTotal").innerHTML = _disponibleActual2;
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




var _todoMiIngreso = 0;
var _ingresoNuevo = 0;
//var _ingresoNuevo = 0;
//var _ingresoTotal = misDatos.data().ingresoTotal;
function nuevoIngreso(event) {
    event.preventDefault();
    //_todoMiIngreso * 1;
    _ingresoNuevo * 1;
    _ingresoNuevo += document.getElementById("monto").value * 1;
    misDatos.get().then(function (doc) {
        _todoMiIngreso * 1;
        _todoMiIngreso += doc.data().ingresoTotal * 1;
        console.log("todo mi ingreso " + _todoMiIngreso);
    });
    console.log(_ingresoNuevo + " ingreso nuevo");

    /* misDatos.get().then(function(doc){
         _ingresoTotal = doc.data().ingresoTotal * 1;
         console.log(_ingresoTotal + " ingreso total1");
     });*/
    //console.log(_ingresoTotal + " ingreso total");
    //console.log(_ingresoNuevo);
    misDatos.update({
        ingresoTotal: _todoMiIngreso + _ingresoNuevo
    });

}

console.log("success!");


//document.querySelector(".plataDisponible").innerHTML = query;
//db.collection("miPresupuesto").doc("ingresoTotal");
