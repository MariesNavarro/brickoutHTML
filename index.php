<!DOCTYPE html>
<html>
    <head>
        <title>Bud Light Docs | Día Gamer</title>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700" rel="stylesheet">
        <link rel="stylesheet" href="css/main.css" type="text/css">
        <link rel="stylesheet" href="css/orientation_utils.css" type="text/css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui" />
        <meta name="msapplication-tap-highlight" content="no"/>
        <link rel="apple-touch-icon" sizes="180x180" href="css/fav/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="css/fav/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="css/fav/favicon-16x16.png">
        <link rel="manifest" href="css/fav/site.webmanifest">
        <link rel="mask-icon" href="css/fav/safari-pinned-tab.svg" color="#263270">
        <meta name="msapplication-TileColor" content="#000000">
        <meta name="theme-color" content="#ffffff">
        <script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
        <script type="text/javascript" src="js/createjs-2015.11.26.min.js"></script>
        <script type="text/javascript" src="js/howler.min.js"></script>
        <script type="text/javascript" src="js/screenfull.js"></script>
        <script type="text/javascript" src="js/ctl_utils.js"></script>
        <script type="text/javascript" src="js/sprite_lib.js"></script>
        <script type="text/javascript" src="js/settings.js"></script>
        <script type="text/javascript" src="js/CLang.js"></script>
        <script type="text/javascript" src="js/CPreloader.js"></script>
        <script type="text/javascript" src="js/CMain.js"></script>
        <script type="text/javascript" src="js/CTextButton.js"></script>
        <script type="text/javascript" src="js/CTextToggle.js"></script>
        <script type="text/javascript" src="js/CToggle.js"></script>
        <script type="text/javascript" src="js/CNumToggle.js"></script>
        <script type="text/javascript" src="js/CGfxButton.js"></script>
        <script type="text/javascript" src="js/CMenu.js"></script>
        <script type="text/javascript" src="js/CGame.js"></script>
        <script type="text/javascript" src="js/CSettingsLevel.js"></script>
        <script type="text/javascript" src="js/CInterface.js"></script>
        <script type="text/javascript" src="js/CBall.js"></script>
        <script type="text/javascript" src="js/CBrick.js"></script>
        <script type="text/javascript" src="js/CBonus.js"></script>
        <script type="text/javascript" src="js/CBullet.js"></script>
        <script type="text/javascript" src="js/CVector2.js"></script>
        <script type="text/javascript" src="js/CLevelMenu.js"></script>
        <script type="text/javascript" src="js/CLevelBut.js"></script>
        <script type="text/javascript" src="js/CCreditsPanel.js"></script>
        <script type="text/javascript" src="js/frontEnd.js"></script>
        <script type="text/javascript" src="js/app.js"></script>
        <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-124110799-1"></script>
<script>
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());
 gtag('config', 'UA-124110799-1');
</script>
<!-- BEGIN Salesforce DMP ControlTag for "BudLight_GamersDay" -->
<script class="kxct" data-id="s8tl8k3wi" data-timing="async" data-version="3.0" type="text/javascript">
  window.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]);
  (function(){
   var k=document.createElement('script');k.type='text/javascript';k.async=true;
    k.src=(location.protocol==='https:'?'https:':'http:')+'//cdn.krxd.net/controltag/s8tl8k3wi.js';
    var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(k,s);
  }());
</script>
<!-- END Salesforce DMP ControlTag -->
<script type="text/javascript">
  !function(t,e){if(void 0===e[t]){e[t]=function(){e[t].clients.push(this),this._init=[Array.prototype.slice.call(arguments)]},e[t].clients=[];for(var r=function(t){return function(){return this["_"+t]=this["_"+t]||[],this["_"+t].push(Array.prototype.slice.call(arguments)),this}},s=["blockEvents","unblockEvents","setSignedMode","setAnonymousMode","resetUUID","addRecord","fetchGlobalID","set","trackEvent","trackPageview","trackClicks","ready"],n=0;n<s.length;n++){var c=s[n];e[t].prototype[c]=r(c)}var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=('https:'===document.location.protocol?'https:':'http:')+'//cdn.treasuredata.com/sdk/2.1/td.min.js';var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)}}("Treasure",this);
 // Configure an instance for your database
  var td = new Treasure({
                  host: 'in.treasuredata.com',
                  writeKey: '10086/9c06ed6fa48e0fb6952ed42773cca1cc1d43684e',
                  database: 'maz_source',
                  startInSignedMode: true
  });
  var pageViewsTableName = 'mex_page_views';
  var webFormTableName = 'mex_web_form';
  // Enable cross-domain tracking
  td.set('$global', 'td_global_id', 'td_global_id');
  td.trackPageview(pageViewsTableName);
</script>
 <script type="text/javascript">
        function enviardata(emailfb,nombrefb,cityip,codstate)
        {
          var event = {
             event: 'form_submit',// Este es fijo o deberiamos carmbiarlo.
             form_name: 'Registro_dia_Gamer', //Nome do formulario
             email: emailfb, // Email del usuario que estamos registrando
             name: nombrefb, //Case sensitive Nombre completo del usuario que se registro
             city: cityip, //Case sensitive Aqui es el nombre de la ciudad o igual es un codigo
             state: codstate, //2 letras Para obtener estado y ciudad utilizamos una api y el valor que nos regresa varia entre 2 y tres caracteres lo que podemos hacer es que nos pases una lista de estados con codigos a dos caracteres y nosotros los converetimos, necesitariamos esta lista lo antes posible.
             opt_in: 'Y' //'Y' ou 'N' Este campo que indica
            }
            td.trackEvent(webFormTableName, event);
        }
</script>
  </head>
     <body ondragstart="return false;" ondrop="return false;" >
       <!-- Menu mobile -->
       <div id="menumobile" class="trans7">
        <div id="barmenumobile" class="flexDisplay back_word">
          <a id="" role="button" class="flexDisplay" ontouchstart="buttonPausa()">
            <img src="img/mobile/bandeja.svg" alt="">
            <p>Bandeja</p>
          </a>
          <p>
            <span id="hidedocumobile">Documento </span> <span class="displayUserName">sin titulo</span>
          </p>
          <a id="" role="button" class="flexDisplay">
            <img src="img/mobile/corcholata.svg" alt="">
            <p>Bud Light</p>
          </a>
        </div>
       </div>
       <!-- menu outter -->
       <div id="menuMobileOutter">

       </div>
        <!-- Menu Desktop -->
        <div id="menu" class="trans7">
          <div id="head" class="back_word" style="opacity:0;top:-200px">
            <p>Documento <span class="displayUserName">sin titulo</span></p>
            <div id="top" class="flexDisplay">
              <!-- Parte Izq -->
              <div id="izq" class="flexDisplay">
                <div id="closewindow"></div>
                <p id="pipe">|</p>
                <p id="gamertit">Gamer mood</p>
                 <img id="gamermood" src="img/head/gamermood-wrd.svg">
                <ul class="flexDisplay">
                  <li><img src="img/head/disk.svg"></li>
                  <li><img src="img/head/print.svg"></li>
                  <li><img src="img/head/ccw.svg"></li>
                  <li><img src="img/head/cw.svg"></li>
                  <li><img src="img/head/down.svg"></li>
                </ul>
              </div>
              <div id="der" class="flexDisplay">
                <img id="searchBar" src="img/head/search-wrd.svg">
                <a href="#" class="trans7">
                  <img src="img/head/budlight.svg">
                </a>
              </div>
            </div>
            <ul class="flexDisplay">
              <li class="tabButts"><a role="button" style="cursor:not-allowed" title="Necesitas estar registrado">Partida</a></li>
              <li class="tabButts"><a role="button" style="cursor:not-allowed" title="Necesitas estar registrado">Mi Cupón</a></li>
              <li class="tabButts"><a role="button" style="cursor:not-allowed" title="Necesitas estar registrado">Cupones</a></li>
              <li class="tabButts"><a role="button" style="cursor:not-allowed" title="Necesitas estar registrado">Instrucciones</a></li>
              <!-- <li class="tabButts"><a role="button" style="cursor:not-allowed" title="Necesitas estar registrado">Créditos</a></li> -->
              <a id="facebookShare" onclick="compartirfb();" class="trans7">
                <img src="img/head/facebookShare.svg">
              </a>
            </ul>
          </div>
          <div id="bar" class="flexDisplay trans7" style="opacity:0;top:-200px">
            <!-- iconos -->
            <div>
            <a role="button" id="imgLevel" class="level_begin"></a>
            <p class="textFuncional">Nivel</p>
            </div>

            <span></span>

            <div>
            <a role="button" id="imgLives" class="iconChange livesWrd" data-icon="lives"></a>
            <p class="displayLives textFuncional">?</p>
            </div>

            <span></span>

            <div>
            <a role="button" id="imgScore" class="iconChange scoreWrd" data-icon="score"></a>
            <p class="displayScore textFuncional">?</p>
            </div>

            <span></span>

            <div>
            <a role="button" id="imgBestScore" class="iconChange bestWrd" data-icon="best"></a>
            <p class="displayBest textFuncional">?</p>
            </div>

            <span></span>

            <div>
            <a role="button" id="imgPosition" class="iconChange positionWrd" data-icon="position"></a>
            <p class="displayPosition textFuncional">?</p>
            </div>

            <span></span>

            <div>
            <a role="button" class="abuget"></a>
            <p class="noFuncional">Abuget</p>
            </div>

            <span></span>

            <div class="esconderDos">
            <a role="button" class="llama" ></a>
            <p class="noFuncional">Encuentra</p>
            </div>

            <span class="esconderDos"></span>

            <div>
            <a role="button" class="carpeta"></a>
            <p class="noFuncional" id="displayPrincess">Peach</p>
            </div>

            <span></span>

            <div>
            <a role="button" class="invertir"></a>
            <p class="noFuncional">Invertir</p>
            </div>

            <span></span>

            <aside class="esconderTres"></aside>

            <span class="esconderTresSpan"></span>

            <div class="esconderDos">
            <a role="button" class="cambiar"></a>
            <p class="noFuncional">Cambiar</p>
            </div>

            <span class="esconderDosSpan"></span>

            <div class="esconderUno">
            <a role="button" class="digital"></a>
            <p class="noFuncional">Digital</p>
            </div>

            <span class="esconderUnoSpan"></span>

            <div class="esconderUno">
            <a role="button" class="vinculos"></a>
            <p class="noFuncional">Vinculos</p>
            </div>

            <span class="esconderUnoSpan"></span>

            <div class="esconderUno">
            <a role="button" class="formas"></a>
            <p class="noFuncional">Formas</p>
            </div>

            <span class="esconderUnoSpan"></span>

            <div>
            <a role="button" onclick="mute();" id="imgInstructions" class="iconChange audioWrd" data-icon="audio"></a>
            <p class="textFuncional">Audio</p>
            </div>

            <span></span>

            <div>
            <a role="button" id="imgHide" class="iconChange evasionWrd" data-icon="evasion" onclick="buttonPausa()"></a>
            <p class="textFuncional">Modo Evasión</p>
            </div>

            <span></span>

            <div>
            <a role="button" id="imgFull" onclick="fullscreen();" class="iconChange fullWrd" data-icon="full"></a>
            <p class="textFuncional">Pantalla Completa</p>
            </div>

            <span></span>

            <div>
            <a role="button" id="imgQuit" onclick="principal();" class="iconChange quitWrd" data-icon="quit"></a>
            <p class="textFuncional">Menú Principal</p>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <footer id="footer" class="flexDisplay trans7">
            <p>Bud Light Docs | Día Gamer | Bud Light © 2018</p>
            <div class="flexDisplay">
              <img src="img/footer/zoom.svg">
              <p>100%</p>
              <img src="img/footer/text1.svg">
              <a href="assets/terminos_condiciones_dia_gamer.pdf" target="_blank">Términos y condiciones</a>
              <img src="img/footer/text2.svg">
              <a href="politica_privacidad_budlight.pdf" target="_blank">Política de privacidad</a>
            </div>
        </footer>

        <!-- Menú lateral -->
        <div id="menulateral" class="trans7" onclick="hideMenu(this)">
          <a role="button" >
            <p>Ocultar Menú</p>
            <img src="img/bar/arrowhide.svg" width="18">
          </a>
        </div>

        <div id="general">
          <!-- <button hidden id="login" onclick="getPermitionsFB();">Registrarse</button> -->
        </div>
        <div id="lookLevelPpt" style="opacity:0">
          <div id="reglaTop"></div>
          <div id="reglaRight"></div>
          <ul class="flexDisplay">
            <li class="flexDisplay">
              <p class="diapositivaNum">1</p>
              <span></span>
            </li>
            <li class="flexDisplay">
              <p class="diapositivaNum">2</p>
              <span></span>
            </li>
            <li class="flexDisplay">
              <p class="diapositivaNum">3</p>
              <span></span>
            </li>
          </ul>
        </div>
        <div id="lookLevelExc" style="opacity:0">
          <div id="lookLevelExcCeldas" style="opacity:0"></div>
          <ul id="lookLevelExcRegla" style="opacity:0">
            <li><img src="img/look/cornerExc.svg"></li>
            <li>
              <p>1</p>
            </li>
            <li>
              <p>2</p>
            </li>
            <li>
              <p>3</p>
            </li>
            <li>
              <p>4</p>
            </li>
            <li>
              <p>5</p>
            </li>
            <li>
              <p>6</p>
            </li>
            <li>
              <p>7</p>
            </li>
            <li>
              <p>8</p>
            </li>
            <li>
              <p>9</p>
            </li>
            <li>
              <p>10</p>
            </li>
            <li>
              <p>11</p>
            </li>
            <li>
              <p>12</p>
            </li>
            <li>
              <p>13</p>
            </li>
            <li>
              <p>14</p>
            </li>
            <li>
              <p>15</p>
            </li>
            <li>
              <p>16</p>
            </li>
            <li>
              <p>17</p>
            </li>
            <li>
              <p>18</p>
            </li>
            <li>
              <p>19</p>
            </li>
            <li>
              <p>20</p>
            </li>
            <li>
              <p>21</p>
            </li>
            <li>
              <p>22</p>
            </li>
            <li>
              <p>23</p>
            </li>
            <li>
              <p>24</p>
            </li>
            <li>
              <p>25</p>
            </li>
            <li>
              <p>26</p>
            </li>
            <li>
              <p>27</p>
            </li>
            <li>
              <p>28</p>
            </li>
            <li>
              <p>29</p>
            </li>
            <li>
              <p>30</p>
            </li>
          </ul>
        </div>

        <!-- -->
        <div id="cuponUno" class="cupon trans7">
          <div>
            <h2>¡Felicidades!</h2>
            <h3>Ganaste un cupón de <span id="combo"></span>.</h3>
            <!-- <h4>Este cupón es valido por: </h4> -->
            <img src="img/cupon.svg"/>
            <p id="cgenerado"></p>
            <h5>Solo tienes que entrar a Rappi, ingresar tu codigo de cupón; te aparecerá en ese momento la promoción para que la pidas y llegue en minutos a tu casa.</br>*Cupón válido solo para un uso, vigencia del 24 al 30 de Agosto del 2018</br>Sigue jugando para poder ganar una consola.</h5>
          </div>
          <a role="button" class="trans7" onclick="cuponOpacity(this)"><p>Listo</p> <span class="trans7"></span></a>
        </div>

        <!-- Logotipo Bud Light -->
        <a id="logotipobudlight" href="#" class="trans7">
          <img src="img/budlight-logo-blue.svg">
        </a>

        <div id="messagesGame" class="flexDisplay back_word"> <!-- style="display:none"  -->
          <!-- flexDisplay -->
          <div class="flexDisplay"><!-- alto -->
            <div id="content">
              <!-- DISCLAIMER -->
              <section id="disclaimer">
                <section id="back"></section>
                <img src="img/budlight-logo-white.svg">
                <h3>¿Eres mayor de edad?</h3>
                <div class="flexDisplay">
                  <a role="button" class="trans7" onclick="checkAge('true')"><p class="trans7">Sí</p><span class="trans7"></span> </a>
                  <a role="button" class="trans7" onclick="checkAge('false')"><p class="trans7">No</p><span class="trans7"></span></a>
                </div>
                <p>
                  Al confirmar ser mayor de edad manifiestas
                  tu conformidad con nuestros <a href="assets/terminos_condiciones_dia_gamer.pdf" class="trans7" target="_blank">Términos y Condiciones</a>.
                </p>
                <br>
                <p>
                  También puedes ver nuestra <a href="politica_privacidad_budlight.pdf" target="_blank" class="trans7">política de
                  privacidad</a>.
                </p>

              </section>
              <div id="footerprovisional">
                <div>
                  Bud Light Docs | Día Gamer | Bud Light © 2018
                </div>
                <div>
                  Siguenos en: <a href="https://www.facebook.com/BudLightMX/?ref=br_rs" target="_blank"> Facebook </a> y <a href="https://twitter.com/budlightmex" target="_blank"> Twitter </a>
                </div>
              </div>
              <section id="edadnovalida" class="noneDisplay">
                <div id="back"></div>
                <div>
                  <img src="img/404.svg">
                  <p> Lo sentimos, tienes que ser <b>mayor de 18 años</b> para ingresar a este sitio. </p>
                </div>
              </section>
              <section id="emergentes" class="noneDisplay">
                <div id="back"></div>
                <div>
                  <img src="img/404.svg">
<<<<<<< HEAD
                  <p>Se detectó que tienes las ventanas emergentes de tu navegador bloqueadas, para el funcionamiento del Juego se requiere que las habilites.</p>
                  <p>Puedes ver el proceso como habilitarlas:</p></br>
                  <a href="https://www.google.com.mx/search?q=como+desbloquear+ventanas+emergentes+en+escritorio&amp;oq=Como+desbloquear+ventanas+en+escritorio=chrome.1.69i57j0.7635j0j4&amp;sourceid=chrome&amp;ie=UTF-8" target="_blank">Escritorio</a>
=======
                  <p>Se detectó que tienes las ventanas emergentes de tu navegador bloqueadas, para el funcionamiento del juego se requiere que las habilites.</p>
                  <p>Puedes ver el proceso para habilitarlas aqui:</p></br>
                  <a href="https://www.google.com.mx/search?q=como+desbloquear+ventanas+emergentes+en+escritorio&amp;oq=Como+desbloquear+ventanas+en+escritorio=chrome.1.69i57j0.7635j0j4&amp;sourceid=chrome&amp;ie=UTF-8" target="_blank">Escritorio</a> 
>>>>>>> 8168f7851f4f65327771d406d1530f37acde1c07
                   </br><a target="_blank" href="https://www.google.com.mx/search?q=como+desbloquear+ventanas+emergentes+en+celular&amp;oq=Como+desbloquear+ventanas+en+celu&amp;aqs=chrome.1.69i57j0.7635j0j4&amp;sourceid=chrome&amp;ie=UTF-8">Movil</a>
                </div>
              </section>
               <section id="paisnovalido" class="noneDisplay">
                <div id="back"></div>
                <div>
                  <img src="img/404.svg">
                  <p> Lo sentimos, esta promocion <b>no es valida</b> para tu pais. </p>
                </div>
              </section>

              <section id="mensajebienvenida" class="noneDisplay" style="opacity:0">
                <img src="img/budlightdocs.png">
                <h1>Bud Light Docs</h1>
                <p>
                  Festeja el día gamer jugando. No te preocupes entendemos que no siempre es el mejor momento para jugar, especialmente si estás en tu trabajo.
                  <br><br>
                  Pero Bud Light ha encontrado la solución: hackear las herramientas de trabajo. Juega sin ser descubierto, <span>esta es tu oportunidad de ganar una consola</span> y cupones de descuento en Rappi.
                </p>

                <a id="registro" class="registrocss flexDisplay" role="button" onclick="quitarregistrogetpermisions();">
                  <span class="trans7"></span>
                  <p>Regístrate con Facebook</p>
                  <svg viewBox="0 0 240 240"> <path d="M128,240H9l-9-9V9L9,0H231l9,9V231l-9,9H165c.16-2,.47-3.95.47-5.92q0-40.47,0-80.94v-6.29h31.18c1.55-12,3-23.69,4.6-35.9H165.49c0-8.13,0-15.76,0-23.39.09-12.72,4.88-17.49,17.55-17.55,6.29,0,12.58,0,19.43,0,0-9.61-.14-18.73.08-27.84.08-3.44-1.15-4.81-4.46-4.92-7.65-.24-15.3-.79-23-.89-21.32-.29-37.81,10.09-43.62,28.27-2.14,6.69-2.79,14-3.25,21.07-.53,8.24-.12,16.55-.12,25.32H97.31v36.14H128Z"/> </svg>
                </a>
                <!-- <a id="quitarFront" role="button" onclick="quitarRegistroFrontsinRegistro()">
                  Quitar (botón demo)
                </a> -->
              </section>
            </div>
          </div>
        </div>

        <!-- Tabs -->
        <!-- Mi Cupón -->
      <div class="tabsContent">

      </div>
      <!-- Cupones -->
      <div class="tabsContent">
        <p>Falta definir combos</p>
      </div>
      <!-- Instrucciones -->
      <div class="tabsContent">
        <h2>Instrucciones</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>


        <div id="pausaWrap">
          <header id="headerPausa" style="background-image:url('img/pausa/textura-mob-wrd.jpg')">
            <div id="headerImgPausaM">
                <div class="flexDisplay">
                  <a id="" role="button" class="flexDisplay" ontouchstart="buttonPausa()">
                    <img src="img/mobile/bandeja.svg" alt="">
                    <p>Bandeja</p>
                  </a>
                  <p>
                    <span id="hidedocumobile">Documento </span> <span class="displayUserName">sin titulo</span>
                  </p>
                  <a id="" role="button" class="flexDisplay">
                    <img src="img/mobile/corcholata.svg" alt="">
                    <p>Bud Light</p>
                  </a>
                </div>
            </div>
            <img id="headerImgPausaD" src="img/pausa/barra-pausa-wrd.jpg">
          </header>
          <!-- PAUSA MOBILE -->
          <div id="areatrabajoMobile" class="pausaArea noneDisplay">
            <img src="img/pausa/pausa-mobile.svg">
          </div>
          <!-- PAUSA WRD -->
          <div id="areatrabajoWRD" class="pausaArea noneDisplay">
            <textarea name="name" rows="8" cols="80">
Título 1:

Tranquilo, aquí te dejamos un área de texto para que puedas escribir
hasta que dejen de rondar detrás de ti.

Después quita la pausa y sigue jugando Bud Light Docs ©.
            </textarea>
          </div>
          <!-- PAUSA PPT -->
          <div id="areatrabajoPPT" class="pausaArea noneDisplay">
            <div id="tools"></div>
            <div id="diapositiva" class="flexDisplay">
              <img src="img/pausa/infografia-ppt.svg">
            </div>
          </div>
          <!-- PAUSA EXC -->
          <div id="areatrabajoEXC" class="pausaArea noneDisplay">
            <div id="celdas">
              <ul class="flexDisplay">
                <li id="tituloCeldas"><textarea>El documento con los números que nadie entiende</textarea></li>
              </ul>
            </div>
          </div>
        </div>
       <script>
              $(document).ready(function () {
              if(checkPopUp())
               {
                 paisvalido();
               }
          });
        </script>

        <!-- Globales Front -->
        <script type="text/javascript">
          /* Tabs */
          var tabsContent = document.getElementsByClassName("tabsContent");
          /* Display Data */
          var displayUserName = document.getElementsByClassName("displayUserName");
          var displayLives = document.getElementsByClassName("displayLives");
          var displayScore = document.getElementsByClassName("displayScore");
          var displayBest = document.getElementsByClassName("displayBest");
          var displayPosition = document.getElementsByClassName("displayPosition");
          /* Custom */
          var _FRONTButExit = document.getElementById('imgQuit');

          var imgLevel = document.getElementById("imgLevel");
          var imgLives = document.getElementById("imgLives");
          var iconChange = document.getElementsByClassName("iconChange");
          var textFuncional = document.getElementsByClassName("textFuncional");
          var tabSelect = document.getElementsByClassName("tabSelect");
          var tabButts = document.getElementsByClassName("tabButts");
          var gamermood = document.getElementById("gamermood");
          var searchBar = document.getElementById("searchBar");
          var messagesGame = document.getElementById("messagesGame");

          var footer = document.getElementById("footer");
          var logotipobudlight = document.getElementById("logotipobudlight");
          var lookLevelPpt = document.getElementById("lookLevelPpt");


          var lookLevelExc = document.getElementById("lookLevelExc");
          var lookLevelExcCeldas = document.getElementById("lookLevelExcCeldas");
          var lookLevelExcRegla = document.getElementById("lookLevelExcRegla");

          var footerprovisional = document.getElementById("footerprovisional");
          /* mensajes */
          var disclaimer = document.getElementById("disclaimer");
          var edadnovalida = document.getElementById("edadnovalida");
          var paisnovalido=document.getElementById("paisnovalido");
          var emergentes=document.getElementById("emergentes");
          var mensajebienvenida = document.getElementById("mensajebienvenida");
          var frontMenu = document.getElementById("menu");
          var barmenumobile = document.getElementById("barmenumobile");
          var menuIsHidden = false;
          var pauseIsOn = false;
          var pauseIsOnPpt = false;
          var pausaWrap = document.getElementById("pausaWrap");
          var pausaArea = document.getElementsByClassName("pausaArea");
          var headerImgPausaM = document.getElementById("headerImgPausaM");
          var headerImgPausaD = document.getElementById("headerImgPausaD");
          var headerPausa = document.getElementById("headerPausa");
          // Menu
          var menuInit = false;
          var menuFull = false;
          var isPausePressed = false;
          var frontBarMenu = document.getElementById("head");
          var frontToolsBar = document.getElementById("bar");
          var menumobile = document.getElementById("menumobile");
          function quitarRegistroFrontsinRegistro(){
            quitarRegistroFront();
            sinregistro();
          };
          var w = window.innerWidth;

          window.onkeypress = function(e){
            e = e || window.event;
            if(e.keyCode === 13){
              isPausePressed = !isPausePressed;
              pausaEvent(nivelInterno, w);
            }
          }


          window.onresize = function(){
            w = window.innerWidth;
            pausaEvent(nivelInterno, w);
            menuDeployment(w);
            changeLook(nivelInterno+1);
          };
        </script>
    </body>
</html>
