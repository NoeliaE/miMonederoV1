var _btnMenu = document.getElementById('menu');
var _btnCerrarPanel = document.getElementById('cerrarPanel');
//var _panel = document.getElementById('panel');


//abre el panel lateral
_btnMenu.addEventListener('click', function () {
  document.getElementById('panel').style.display = 'block';
  console.log('hai');
});

//cierra el panel
_btnCerrarPanel.addEventListener('click', function () {
  document.getElementById('panel').style.display = 'none';
  console.log('bai');
});
