var MetodoEnum = {
  Ingresar: 1,
  Salir: 2,
  Jugar:3,
  InicioParticipacion:4,
  ActualizaParticipacion:5,
  Validar_Fecha:6,
  Obtener_cupones:7,
  Cupones_obtenidos:8
 };
var param1;
var param2;
var param3;

function ingresar() {
  param1=$('#username')[0].value;
  param2=$('#password')[0].value;
  param3=MetodoEnum.Ingresar;
  actualizadiv();
}
function salir() {
  param1='';
  param2='';
  param3=MetodoEnum.Salir;
  actualizadiv();
}
function actualizadiv(){
  var dataString = 'param1=' + param1 + '&param2=' + param2+'&param3=' + param3;
  console.log(dataString);
  $.ajax({  
    type : 'POST',
    url  : 'respuesta.php',
    data:  dataString, 
    success:function(data) {  
      console.log(data);
      $('#general').html(data).fadeIn();
    }  
  });     
} 
function opentab(evt, tabname) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
} 