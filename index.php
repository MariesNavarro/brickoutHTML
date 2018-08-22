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
    </head>
     <body ondragstart="return false;" ondrop="return false;" >
       <!-- Menu mobile -->
       <div id="menumobile" class="trans7">
        <div id="barmenumobile" class="flexDisplay back_word">
          <a id="" role="button" class="flexDisplay">
            <img src="img/mobile/bandeja.svg" alt="">
            <p>Bandeja</p>
          </a>
          <p>
            Documento de <span class="displayUserName">Itzel León</span>
          </p>
          <a id="" role="button" class="flexDisplay">
            <img src="img/mobile/pausamobile.svg" alt="">
            <p>Escóndete!</p>
          </a>
        </div>
       </div>
       <!-- menu outter -->
       <div id="menuMobileOutter">

       </div>
        <!-- Menu Desktop -->
        <div id="menu" class="trans7">
          <div id="head" class="back_word" style="opacity:0;top:-200px">
            <p>Documento de <span class="displayUserName">Itzel León</span></p>
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
              <li class="tabButts"><a role="button" style="cursor:not-allowed" title="Necesitas estar registrado">Créditos</a></li>
              <a id="facebookShare" href="#" class="trans7">
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
            <p class="displayLives" class="textFuncional">23</p>
            </div>

            <span></span>

            <div>
            <a role="button" id="imgScore" class="iconChange scoreWrd" data-icon="score"></a>
            <p class="displayScore" class="textFuncional">233</p>
            </div>

            <span></span>

            <div>
            <a role="button" id="imgBestScore" class="iconChange bestWrd" data-icon="best"></a>
            <p class="displayBest" class="textFuncional">4723</p>
            </div>

            <span></span>

            <div>
            <a role="button" id="imgPosition" class="iconChange positionWrd" data-icon="position"></a>
            <p class="displayPosition" class="textFuncional">74</p>
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
            <a role="button" id="imgInstructions" class="iconChange audioWrd" data-icon="audio"></a>
            <p class="textFuncional">Audio</p>
            </div>

            <span></span>

            <div>
            <a role="button" id="imgHide" class="iconChange evasionWrd" data-icon="evasion"></a>
            <p class="textFuncional">Modo Evasión</p>
            </div>

            <span></span>

            <div>
            <a role="button" id="imgFull" class="iconChange fullWrd" data-icon="full"></a>
            <p class="textFuncional">Pantalla Completa</p>
            </div>

            <span></span>

            <div>
            <a role="button" id="imgQuit" class="iconChange quitWrd" data-icon="quit"></a>
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
              <a href="#">Términos y condiciones</a>
              <img src="img/footer/text2.svg">
              <a href="#">Política de privacidad</a>
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
                  tu conformidad con nuestros <a href="#" class="trans7">Términos y Condiciones</a>.
                </p>
                <br>
                <p>
                  También puedes ver nuestra <a href="#" class="trans7">política de
                  privacidad</a>.
                </p>

              </section>
              <div id="footerprovisional">
                <div>
                  Bud light Docs | Día Gamer | Bud Light © 2018
                </div>
                <div>
                  Siguenos en: <a href="#"> Facebook </a> y <a href="#"> Twitter </a>
                </div>
              </div>
              <section id="edadnovalida" class="noneDisplay">
                <div id="back"></div>
                <div>
                  <img src="img/404.svg">
                  <p> Lo sentimos, tienes que ser <b>mayor de 18 años</b> para ingresar a este sitio. </p>
                </div>
              </section>

              <section id="mensajebienvenida" class="noneDisplay" style="opacity:0">
                <img src="img/budlightdocs.png">
                <h1>Bud Light Docs</h1>
                <p>
                  Para festejar al gamer que todos llevamos dentro
                  te invitamos a celebrarlo jugando todo el día y ganando premios
                  increibles.
                </p>

                <a id="registro" class="registrocss flexDisplay" role="button" onclick="quitarregistrogetpermisions();">
                  <span class="trans7"></span>
                  <p>Regístrate con Facebook</p>
                  <svg viewBox="0 0 240 240"> <path d="M128,240H9l-9-9V9L9,0H231l9,9V231l-9,9H165c.16-2,.47-3.95.47-5.92q0-40.47,0-80.94v-6.29h31.18c1.55-12,3-23.69,4.6-35.9H165.49c0-8.13,0-15.76,0-23.39.09-12.72,4.88-17.49,17.55-17.55,6.29,0,12.58,0,19.43,0,0-9.61-.14-18.73.08-27.84.08-3.44-1.15-4.81-4.46-4.92-7.65-.24-15.3-.79-23-.89-21.32-.29-37.81,10.09-43.62,28.27-2.14,6.69-2.79,14-3.25,21.07-.53,8.24-.12,16.55-.12,25.32H97.31v36.14H128Z"/> </svg>
                </a>
                <a id="quitarFront" role="button" onclick="quitarRegistroFrontsinRegistro()">
                  Quitar (botón demo)
                </a>
              </section>
            </div>
          </div>
        </div>

        <div id="pausaWrap">
          <header>
            <img id="mobile" src="img/pausa/menu-mobile-buttons.svg">
            <img id="desktop" src="img/pausa/barra-pausa-wrd.jpg">
          </header>
          <!-- PAUSA MOBILE -->
          <div id="areatrabajoMobile" class="flexDisplay">
            <img src="img/pausa/pausa-mobile.png" alt="">
          </div>
          <!-- PAUSA WRD -->
          <div id="areatrabajoWRD" class="noneDisplay">
            <textarea name="name" rows="8" cols="80">
            Título 1:
            Tranquilo, aquí te dejamos un área de texto para que puedas escribir hasta que dejen de rondar detrás de ti.
            Después quita la pausa y sigue jugando Bud Light Docs ©.
            </textarea>
          </div>
          <!-- PAUSA PPT -->
          <div id="areatrabajoPPT" class="noneDisplay">
            <div id="tools"></div>
            <div id="diapositiva" class="flexDisplay">
              <img src="img/pausa/infografia-ppt.svg">
            </div>
          </div>
          <!-- PAUSA EXC -->
          <div id="areatrabajoEXC" class="noneDisplay">
            <div id="celdas">
              <ul class="flexDisplay">
                <li id="tituloCeldas"><textarea>El documento con los números que nadie entiende</textarea></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Globales Front -->
        <script type="text/javascript">
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
          var mensajebienvenida = document.getElementById("mensajebienvenida");
          var frontMenu = document.getElementById("menu");
          var barmenumobile = document.getElementById("barmenumobile");
          var menuIsHidden = false;
          var pauseIsOn = false;
          var pauseIsOnPpt = false;
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


          window.onkeypress = function(e){
            e = e || window.event;
            if(e.keyCode === 13){
              pausaEvent(nivelInterno+1);
            }
          }

          var w = window.innerWidth;
          window.onresize = function(){
            w = window.innerWidth;
            menuDeployment(w);
            changeLook(nivelInterno+1);
            console.log(w);
          };
        </script>
    </body>
</html>
