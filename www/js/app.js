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

//const docRef = firestore.collection("nombreColeccion").doc("NombreDoc");

//setea el primer nivel
var data = {
}

//setea el segundo nivel
var conjuntoGastos = {
}


var _gastosTotales; //debería ser la suma de los gastos en cada área

/*var _plataParaUsar = _ingresoTotal - _meta; //es la plata TOTAL que puedo usar en el ciclo
var _porcentajeParcial = _plataParaUsar - _gastosTotales; //es la plata que ESTOY GASTANDO en el ciclo
var _porcentajeGastado = (_porcentajeParcial * 100) / _plataParaUsar; //es el porcentaje


var cambiarAltura =  _porcentajeGastado +"%"
function cambioAltura(){
document.querySelector(".progreso").style.height = cambiarAltura;
}

cambioAltura();*/

document.querySelector("#primerIngreso").addEventListener("submit", obtenerIngresos);


function obtenerIngresos(event) {
  event.preventDefault();
  var mesHoy = 0;
  var diaHoy = 0;

  var fecha = new Date();
  var _ingresoTotal = document.querySelector("#presupuestoInicial").value * 1;
  var _meta = document.querySelector("#meta").value * 1;
  var _objetivo = document.querySelector("#miObjetivo").value;
  diaHoy = fecha.getDate();
  mesHoy = fecha.getMonth() + 1;
  console.log(mesHoy);
  var dias30 = false;
  var dias31 = false;
  var dias28 = false;
  if (mesHoy == 4 || mesHoy == 6 || mesHoy == 9 || mesHoy == 11) {
    var dias30 = true;
    var dias31 = false;
    var dias28 = false;
  } else if (mesHoy == 1 || mesHoy == 3 || mesHoy == 5 || mesHoy == 7 || mesHoy == 8 || mesHoy == 10 || mesHoy == 12) {
    var dias30 = false;
    var dias31 = true;
    var dias28 = false;
  } else if (mesHoy == 2) {
    var dias30 = false;
    var dias31 = false;
    var dias28 = true;
  }
  console.log(mesHoy);
  data.ingresoTotal = _ingresoTotal;
  data.meta = _meta;
  data.objetivo = _objetivo
  data.gasto = 0;
  data.dia = diaHoy;
  data.mes = mesHoy;
  data.dias30 = dias30;
  data.dias31 = dias31;
  data.dias28 = dias28;

  conjuntoGastos.supervivencia = 0;
  conjuntoGastos.ocio = 0;
  conjuntoGastos.cultura = 0;
  conjuntoGastos.extras = 0;

  db.collection("datos").doc("miPresupuesto").set(data)
    .then(function (resultado) {
      console.log('Se guardó de forma correcta');
    })
    .catch(function (error) {
      console.error('error escribiendo el documento', error);
    });
  db.collection("datos").doc("miPresupuesto").collection("cuentaGastos").doc("misGastos").set(conjuntoGastos)
    .then(function (resultado) {
      console.log('Se guardó de forma correcta');
    })
    .then(function () {
      cambiarPantalla();
    })
    .catch(function (error) {
      console.error('error escribiendo el documento', error);
    });


}

function cambiarPantalla() {
  location.replace("seguimientoPrincipal.html");
}



