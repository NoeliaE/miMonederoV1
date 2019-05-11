var _btnMenu = document.getElementById('menu');
var _btnCerrarPanel = document.getElementById('cerrarPanel');
//var _panel = document.getElementById('panel');


//abre el panel lateral
_btnMenu.addEventListener('click', function (){
    document.getElementById('panel').style.display = 'block';
    console.log('hai');
});

//cierra el panel
_btnCerrarPanel.addEventListener('click', function(){
    document.getElementById('panel').style.display = 'none';
    console.log('bai');
})




var _ingresoTotal = 12000;
var _meta = 3000;
var _gastosTotales = 550; //debería ser la suma de los gastos en cada área

var _plataParaUsar = _ingresoTotal - _meta; //es la plata TOTAL que puedo usar en el ciclo
var _porcentajeParcial = _plataParaUsar - _gastosTotales; //es la plata que ESTOY GASTANDO en el ciclo
var _porcentajeGastado = (_porcentajeParcial * 100) / _plataParaUsar; //es el porcentaje


var cambiarAltura =  _porcentajeGastado +"%"
function cambioAltura(){
document.querySelector(".progreso").style.height = cambiarAltura;
}

cambioAltura();
