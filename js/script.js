//-- Función que elimina la clase Visible y crea otra para la siguiente pantalla --
function gotoSection(_id){
currentSection.removeClass('visible');
var nextSection = $('#'+_id);
   nextSection.addClass('visible');
   currentSection = nextSection;
}
//----------------------- Funciones para pedir al servidor los Ganadores ----
function getHistorial() {
$.ajax({
url: 'http://test-ta.herokuapp.com/games'
}).done(function (_data) {
dibujarHistorial(_data);
});
}

function dibujarHistorial(_datos) {
//console.log(_datos);
var lista = $('#lista-juegos');

for (var i in _datos) {
console.log(_datos[i].winner_player);

var html = '<li class="list-group-item">Ganador: ' + _datos[i].winner_player + '</li>';
lista.append(html);
}
}

