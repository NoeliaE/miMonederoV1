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
//v rutas para los documentos respectivos 
var misDatos = db.doc("datos/miPresupuesto");
var misGastos = db.doc("datos/miPresupuesto/cuentaGastos/misGastos");

misGastos.get().then(function(doc){
    document.querySelector(".superv").innerHTML = doc.data().supervivencia;
    document.querySelector(".ocioyv").innerHTML = doc.data().ocio;
    document.querySelector(".cultura").innerHTML = doc.data().cultura;
    document.querySelector(".extras").innerHTML = doc.data().extras;
});

misDatos.get().then(function(doc){
    var miObjetivo = doc.data().objetivo;
    _ingresoTotal = doc.data().ingresoTotal; //TODO el ingreso
    _meta = doc.data().meta; //La meta
    _gastos = doc.data().gasto;
    var miDispobible = _ingresoTotal - _meta - _gastos;
    console.log(miObjetivo);
    if (miObjetivo == undefined){
        document.querySelector(".miObjetivo").innerHTML = "llegar a la meta";
    } else{
        document.querySelector(".miObjetivo").innerHTML = miObjetivo;
    }
    document.querySelector(".gastoTotal").innerHTML = doc.data().gasto;
    document.querySelector(".miDisponible").innerHTML = miDispobible;
});


document.querySelector(".volver").addEventListener("click",function(){
    location.replace("seguimientoPrincipal.html");
});





