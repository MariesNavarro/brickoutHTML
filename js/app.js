class Settings {

  constructor(data) {
    //data.split("&")[0];
    // (myValue == 'true');
    //parseInt("10")
    // parseFloat("10")
    this._ball_speed= parseInt(data.split("&")[1]);
    this._bricks_score= [parseInt(data.split("&")[2]), parseInt(data.split("&")[3]), parseInt(data.split("&")[4]), parseInt(data.split("&")[5]), parseInt(data.split("&")[6]), parseInt(data.split("&")[7])];
    this._bricks_resistance= [parseInt(data.split("&")[8]), parseInt(data.split("&")[9]), parseInt(data.split("&")[10]), parseInt(data.split("&")[11]), parseInt(data.split("&")[12]), parseInt(data.split("&")[13])];
    this._bricks_destructible= [(data.split("&")[14] == 'true'), (data.split("&")[15] == 'true'), (data.split("&")[16] == 'true'), (data.split("&")[17] == 'true'), (data.split("&")[18] == 'true'), (data.split("&")[19] == 'true')];
    this._bonus_speed= parseInt(data.split("&")[20]);
    this._bonus_time= {t0: parseInt(data.split("&")[21]), t1: parseInt(data.split("&")[22]), t2: parseInt(data.split("&")[23]), t3: parseInt(data.split("&")[24]), t6: parseInt(data.split("&")[25])};
    this._bonus_score= {s0: parseInt(data.split("&")[26]), s1: parseInt(data.split("&")[27]), s2: parseInt(data.split("&")[28]), s3: parseInt(data.split("&")[29]), s4: parseInt(data.split("&")[30]), s5: parseInt(data.split("&")[31]), s6: parseInt(data.split("&")[32]), s7: parseInt(data.split("&")[33]), s8: parseInt(data.split("&")[34]), s9: parseInt(data.split("&")[35])};
    this._life= parseInt(data.split("&")[36]);
    this._bullet_speed= parseFloat(data.split("&")[37]);
    this._speed_down_ball=parseFloat(data.split("&")[38]);;
    this._speed_up_ball= parseFloat(data.split("&")[39]);;
    this._fullscreen=(data.split("&")[40] == 'true');
    this._check_orientation=(data.split("&")[41] == 'true');
    this._num_levels_for_ads= parseInt(data.split("&")[42]);
  }
}

var MetodoEnum = {
  Registro: 1,
  SinRegistro: 2,
  Jugar:3,
  InicioParticipacion:4,
  ActualizaParticipacion:5,
  Validar_Fecha:6,
  Obtener_cupones:7,
  Cupones_obtenidos:8,
  Validar_Pais:9
 };
 var sett;
 var param1;
 var param2;
 var param3;
 var param4;
 var data1;
 var data2;
 var msjscore;
 var msjcupon;
 var msjposicion;
 var msjpuntospos;
 var jugando=true;
 var sonido=false;
 var canvatop="130";
 function getPermitionsFB() {
  FB.login(function (response) {
    if (response.authResponse) {
      FB.api('/me?fields=id,name,email,first_name,last_name,middle_name', function(response) {
        //console.log('Good to see you, ' + response.name+ ' '+response.email+' '+response.id);
        param1=response.name;
        param2=response.email;
        param3=response.id;
        param4=MetodoEnum.Registro;
        actualizadiv();
      });
    }
    else {
      //document.getElementById('login').hidden=true;
      //document.getElementById('jugarsinregistro').hidden=false;
    }
  }, {
    scope: 'public_profile,email' ,
    auth_type: 'rerequest'
  });
}

function sinregistro() {
  param1='';
  param2='';
  param3='';
  param4=MetodoEnum.SinRegistro;
  actualizadiv();
}
function but_jugar()
{
  param1='';
  param2='';
  param3='';
  param4=MetodoEnum.Jugar;
  actualizadivjug();
}
function actualizadiv(){
  var dataString = 'param1=' + param1 + '&param2=' + param2+'&param3=' + param3 + '&param4=' + param4;
  //console.log(dataString);
  $.ajax({
    type : 'POST',
    url  : 'respuesta.php',
    data:  dataString,
    success:function(data) {
      //console.log(data);
      var pagina=data.split("&")[0];
      data1=data.split("&")[1];
      var anunciocupon='';
      if(data.split("&").length>2)
      {
        actValByClassName("displayBest",data.split("&")[2]);
        actValByClassName("displayPosition",data.split("&")[3]);
        actValByClassName("displayUserName",data.split("&")[4]);
      }
      if(data.split("&").length>5)
      {
        var eje=data.split("&")[5];
        var estado=data.split("&")[6];
        var ciudad=data.split("&")[7];
        if(eje=="SI")
        {
          //alert(eje+' '+estado+' '+ciudad);
          //enviardata(param2,param1,ciudad,estado);
        }
        else
        {
          //alert('El usuario ya esta registrado');
        }
      }
      but_jugar();

      //$('#general').html(pagina).fadeIn();

    }
  });
}

function quitarregistrogetpermisions()
{
   quitarRegistroFront();
   getPermitionsFB();
}
function actualizadivjug(){
  var dataString = 'param1=' + param1 + '&param2=' + param2+'&param3=' + param3 + '&param4=' + param4;
  //console.log(dataString);
  $.ajax({
    type : 'POST',
    url  : 'respuesta.php',
    data:  dataString,
    success:function(data) {
      sett=new Settings(data);
      var pagina=data.split("&")[0];
      //console.log(data1);
      $('#general').html(pagina).fadeIn();
    }
  });
}
function regpart(){
  var dataString = 'param1=' + param1 + '&param2=' + param2+'&param3=' + param3 + '&param4=' + param4;
  //console.log(dataString);
  $.ajax({
    type : 'POST',
    url  : 'respuesta.php',
    data:  dataString,
    success:function(data) {
      data2=data;
      //console.log(data2);
    }
  });
}
function regpartupd(){
  var dataString = 'param1=' + param1 + '&param2=' + param2+'&param3=' + param3 + '&param4=' + param4;
  //console.log(dataString);
  $.ajax({
    async:false,
    cache:false,
    type : 'POST',
    url  : 'respuesta.php',
    data:  dataString,
    success:function(data) {
      msjscore=data.split("&")[0];
      msjcupon=data.split("&")[1];
      msjposicion=data.split("&")[2];
      msjpuntospos=data.split("&")[3];
      //alert(msjscore);
      if(msjcupon.split("=").length>1)
      {
        alert(msjcupon);
      }
      //alert(msjposicion);
      //console.log(data);
    }
  });
}
function registroparticipacion()
{
  param1=data1;
  param2='';
  param3='';
  param4=MetodoEnum.InicioParticipacion;
  regpart();
}
function actparticipacion(param)
{
  param1=param;
  param2=data1;
  param3=data2;
  param4=MetodoEnum.ActualizaParticipacion;
  regpartupd();
}
function checkLoginState() {
  (function (d) {
    var js, id = 'facebook-jssdk'; if (d.getElementById(id)) { return; }
    js = d.createElement('script'); js.id = id; js.async = true;
    js.src = "//connect.facebook.net/es_LA/all.js";
    d.getElementsByTagName('head')[0].appendChild(js);
  }(document));
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '525797254172859',
      cookie     : true,
      xfbml      : true,
      version    : 'v3.0'
    });
    FB.getLoginStatus(function(response) {
     if (response.status === 'connected') {

       getPermitionsFB();
      }
      else if (response.status === "not_authorized") {
        //document.getElementById('login').hidden=false;
        //document.getElementById('jugarsinregistro').hidden=false;
      }
      else {
        //document.getElementById('login').hidden=false;
        //document.getElementById('jugarsinregistro').hidden=false;
      }
    });
  }

 }
function jugar()
{
  var oMain = createdatagame();
  $(oMain).on("start_session", function (evt) {
    //compartir1();
    registroparticipacion();
   if (getParamValue('ctl-arcade') === "true") {
      parent.__ctlArcadeStartSession();
    }
  });
  $(oMain).on("end_session", function (evt) {
    if (getParamValue('ctl-arcade') === "true") {
      parent.__ctlArcadeEndSession();
    }
  });
  $(oMain).on("start_level", function (evt, iLevel) {
     changeFrontLevel(iLevel);
     if (getParamValue('ctl-arcade') === "true") {
       parent.__ctlArcadeStartLevel({level: iLevel});
      }
  });
  $(oMain).on("end_level", function (evt, iLevel) {
    if (getParamValue('ctl-arcade') === "true") {
      parent.__ctlArcadeEndLevel({level: iLevel});
    }
  });
  $(oMain).on("save_score", function (evt, iScore) {
    if (getParamValue('ctl-arcade') === "true") {
      parent.__ctlArcadeSaveScore({score: iScore});

    }
  });
  $(oMain).on("show_interlevel_ad", function (evt) {
    if (getParamValue('ctl-arcade') === "true") {
      parent.__ctlArcadeShowInterlevelAD();
    }
  });
  $(oMain).on("share_event", function (evt, iScore) {
    if (getParamValue('ctl-arcade') === "true") {
      parent.__ctlArcadeShareEvent({img: TEXT_SHARE_IMAGE,
       title: TEXT_SHARE_TITLE,
       msg: TEXT_SHARE_MSG1 + iScore
          + TEXT_SHARE_MSG2,
          msg_share: TEXT_SHARE_SHARE1
          + iScore + TEXT_SHARE_SHARE1
      });
    }
  });
  if (isIOS()) {
    setTimeout(function () {
      sizeHandler();
    }, 200);
  } else {
    sizeHandler();
  }
}
function desbloqueo() {
    document.getElementById("block_game").style.display="none";
}
function checkPopUp() {
    var bloq = window.open('https://google.com')
    if (!bloq) {
        alert("Se detectó que tienes las ventanas emergentes de tu navegador bloqueadas, para el buen funcionamiento del Juego se requiere que las habilites.");
        return false;
    }
    else {
        bloq.close();
        return true;
    }
}
function ValidateDate() {
  var dataString = 'param1=' + param1 + '&param2=' + param2+'&param3=' + param3 + '&param4=' + param4;
  //console.log(dataString);
  $.ajax({
    type : 'POST',
    url  : 'respuesta.php',
    data:  dataString,
    success:function(data) {
      //console.log(data);
      if(data=="SI")
      {
        checkLoginState();
      }
      else
      {
        checkLoginState();
        // alert('Fecha no valida');
      }
    }
  });
}
function valido()
{
  param1='';
  param2='';
  param3='';
  param4=MetodoEnum.Validar_Fecha;
  ValidateDate();
}
function Validatepais() {
  var dataString = 'param1=' + param1 + '&param2=' + param2+'&param3=' + param3 + '&param4=' + param4;
  //console.log(dataString);
  $.ajax({
    type : 'POST',
    url  : 'respuesta.php',
    data:  dataString,
    success:function(data) {
      //console.log(data);
      if(data=="SI")
      {
        checkLoginState();
      }
      else
      {
          // checkPais(data);
         checkLoginState();
      }
    }
  });
}
function paisvalido()
{
  param1='';
  param2='';
  param3='';
  param4=MetodoEnum.Validar_Pais;
  Validatepais();
}
function compartir(){
  FB.ui({
   method: "feed",
   link: 'https://budlightdocs.com/',
   picture:'https://budlightdocs.com/img/bugdoodle.JPG',
   name: 'Cambia miles de vidas',
   caption: '¡Conoce, ayuda con un clic y comparte!',
   description: 'Por cada clic que des, Tupperware® donará dinero para ayudar a transformar positivamente la vida de miles de niños. ¡1.Conoce 2.Ayuda con un clic y 3.Comparte! #Tupperware123'
   }, function(response){});
}
function compartir1(){
FB.ui({
  method: 'share_open_graph',
  action_type: 'og.shares',
  display: 'popup',
  action_properties: JSON.stringify({
    object: {
      'og:url': 'https://budlightdocs.com',
      'og:title': 'Juega con budlight',
      'og:description': 'Disfrutando del dia de Gamer con budlight',
      'og:image': 'https://budlightdocs.com/fun/img/bugdoodle.JPG'
    }
  })
}, function(response) {
});
}
function cuponesenpromocion()
{
  param1='';
  param2='';
  param3='';
  param4=MetodoEnum.Obtener_cupones;
  actualizadivcup();
}
function cuponesobtenidos()
{
  param1=data1;
  param2='';
  param3='';
  param4=MetodoEnum.Cupones_obtenidos;
  actualizadivcup();
}
function actualizadivcup(){
  var dataString = 'param1=' + param1 + '&param2=' + param2+'&param3=' + param3 + '&param4=' + param4;
 // console.log(dataString);
  $.ajax({
    type : 'POST',
    url  : 'respuesta.php',
    data:  dataString,
    success:function(data) {
      //console.log(data);
      $('#general').html(data).fadeIn();
    }
  });
}
function registrado()
{
  if(disclaimer.style.opacity!=="0"){
    checkAge("true");
    quitarRegistroFront();
  }
}
function actValByClassName(classname,valor)
{
  var arrayobj=document.getElementsByClassName(classname);
  for(var i=0;i<arrayobj.length;i++)
  {
    arrayobj[i].innerHTML=""+valor;
  }
}
function mute()
{
  sonido=!sonido;
  Howler.mute(sonido);
}
function principal()
{
  s_oMain.gotoMenu();
}
function fullscreen()
{
  if(s_oMenu!=null)
  {
    s_oMenu._onFullscreenRelease();
  }
  if(s_oInterface!=null)
  {
    s_oInterface._onFullscreenRelease();
  }
}
