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

misGastos.get().then(function(doc){
    document.querySelector(".superv").innerHTML = doc.data().supervivencia;
    document.querySelector(".ocioyv").innerHTML = doc.data().ocio;
    document.querySelector(".cultura").innerHTML = doc.data().cultura;
    document.querySelector(".extras").innerHTML = doc.data().extras;
});


document.querySelector(".volver").addEventListener("click",function(){
    location.replace("seguimientoPrincipal.html");
});





