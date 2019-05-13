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

function checkStatus() {
  misDatos.get().then((function (doc) {
    if (doc && doc.exists) {
      location.replace("html/seguimientoPrincipal.html");
    } else {
      location.replace("html/iniciarPresupuesto.html");
    }
  })
  );
}

checkStatus();