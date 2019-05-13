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
var misGastos = db.doc("datos/miPresupuesto/cuentaGastos/misGastos");


var _btnMenu = document.getElementById('menu');
var _btnCerrarPanel = document.getElementById('cerrarPanel');
//var _panel = document.getElementById('panel');

document.querySelector(".sombra").addEventListener("click", function () {
  document.getElementById('panel').style.display = 'none';
  document.querySelector(".sombra").style.display = 'none';
});

//abre el panel lateral
_btnMenu.addEventListener('click', function () {
  document.getElementById('panel').style.display = 'block';
  document.querySelector(".sombra").style.display = 'block';
});

//cierra el panel
_btnCerrarPanel.addEventListener('click', function () {
  document.getElementById('panel').style.display = 'none';
  document.querySelector(".sombra").style.display = 'none';
});


//borrar COLLECCION
document.querySelector("#reiniciar").addEventListener("click", function(){
  document.getElementById('alerta').style.display = 'grid';
});
document.querySelector(".reinicioNO").addEventListener("click", function(){
  document.getElementById('alerta').style.display = 'none';
});
document.querySelector(".reinicioOK").addEventListener("click", function () {
  misGastos.delete().then(function(){
    console.log("Document successfully deleted!");
  }).catch(function (error) {
    console.error("Error removing document: ", error);
  });
  misDatos.delete().then(function () {
    console.log("Document successfully deleted!");
    location.replace("iniciarPresupuesto.html");
  }).catch(function (error) {
    console.error("Error removing document: ", error);
  });
  
})
  
//});

