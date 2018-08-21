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
        <!-- Menu -->
        <div id="menu" class="trans7" style="opacity:0">
          <div id="head" class="back_word">
            <div id="top" class="flexDisplay">
              <!-- Parte Izq -->
              <div id="izq" class="flexDisplay">
                <img id="closewindow" src="img/head/closewindow.png">
                <p>|</p>
                <p id="gamertit">Gamer mood</p>
                 <img id="gamermood" src="img/head/gamermood-wrd.png">
                <ul class="flexDisplay">
                  <li><img src="img/head/disk.svg"></li>
                  <li><img src="img/head/print.svg"></li>
                  <li><img src="img/head/ccw.svg"></li>
                  <li><img src="img/head/cw.svg"></li>
                  <li><img src="img/head/down.svg"></li>
                </ul>
              </div>
              <p id="nivelDocumento">Documento 1</p>
              <div id="der" class="flexDisplay">
                <img id="searchBar" src="img/head/search-wrd.png">
                <a href="#" class="trans7">
                  <img src="img/head/budlight.svg">
                </a>
              </div>
            </div>
            <ul class="flexDisplay">
              <li class="tabButts tabSelect tabSelectWord" onclick="tabSelectChange(this)"><a role="button">Partida</a></li>
              <li class="tabButts" onclick="tabSelectChange(this)"><a role="button">Cupones</a></li>
              <li class="tabButts" onclick="tabSelectChange(this)"><a role="button">Mis Cupones</a></li>
              <li class="tabButts" onclick="tabSelectChange(this)"><a role="button">Mecánica</a></li>
              <li class="tabButts" onclick="tabSelectChange(this)"><a role="button">Mensaje</a></li>
              <li class="tabButts" onclick="tabSelectChange(this)"><a role="button">Créditos</a></li>
              <li class="tabButts" onclick="tabSelectChange(this)"><a role="button">Pausa</a></li>
              <a id="facebookShare" href="#" class="trans7">
                <img src="img/head/facebookShare.svg">
              </a>
            </ul>
          </div>
          <div id="bar" class="flexDisplay">
            <!-- iconos -->
            <div class="bgBut">
            <a role="button" id="imgLevel" class="level_begin"></a>
            <p class="textFuncional">Nivel</p>
            </div> <!-- Nivel -->

            <span></span>

            <div class="bgBut">
            <a role="button" id="imgLives" class="iconChange livesWrd" data-icon="lives"></a>
            <p id="displayLives" class="textFuncional">23</p>
            </div> <!-- Vidas -->

            <span></span>

            <div class="bgBut">
            <a role="button" id="imgScore" class="iconChange scoreWrd" data-icon="score"></a>
            <p id="displayScore" class="textFuncional">233</p>
            </div> <!-- Puntaje -->

            <span></span>

            <div class="bgBut">
            <a role="button" id="imgBestScore" class="iconChange bestWrd" data-icon="best"></a>
            <p id="displayBest" class="textFuncional">4723</p>
            </div>

            <span></span>

            <div class="bgBut">
            <a role="button" id="imgPosition" class="iconChange positionWrd" data-icon="position"></a>
            <p id="displayPosition" class="textFuncional">74</p>
            </div>

            <span></span>

            <div class="bgBut">
            <a role="button" class="abuget"></a>
            <p class="noFuncional">Abuget</p>
            </div>

            <span></span>

            <div class="bgBut">
            <a role="button" class="llama" ></a>
            <p class="noFuncional">Encuentra</p>
            </div>

            <span></span>

            <div class="bgBut">
            <a role="button" class="carpeta"></a>
            <p class="noFuncional" id="displayPrincess">Peach</p>
            </div> <!-- Null -->

            <span></span>

            <div class="bgBut">
            <a role="button" class="invertir"></a>
            <p class="noFuncional">Invertir</p>
            </div> <!-- Null -->

            <span></span>

            <div class="smButs"></div>

            <span></span>

            <div class="bgBut">
            <a role="button" class="cambiar"></a>
            <p class="noFuncional">Cambiar</p>
            </div> <!-- Null -->

            <span></span>

            <div class="bgBut">
            <a role="button" class="digital"></a>
            <p class="noFuncional">Digital</p>
            </div> <!-- Null -->

            <span></span>

            <div class="bgBut">
            <a role="button" class="vinculos"></a>
            <p class="noFuncional">Vinculos</p>
            </div>

            <span></span>

            <div class="bgBut">
            <a role="button" class="formas"></a>
            <p class="noFuncional">Formas</p>
            </div>

            <span></span>

            <div class="bgBut">
            <a role="button" id="imgInstructions" class="iconChange audioWrd" data-icon="audio"></a>
            <p class="textFuncional">Audio</p>
            </div>

            <span></span>

            <div class="bgBut">
            <a role="button" id="imgHide" class="iconChange evasionWrd" data-icon="evasion"></a>
            <p class="textFuncional">Modo Evasión</p>
            </div>

            <span></span>

            <div class="bgBut">
            <a role="button" id="imgFull" class="iconChange fullWrd" data-icon="full"></a>
            <p class="textFuncional">Pantalla Completa</p>
            </div>

            <span></span>

            <div class="bgBut">
            <a role="button" id="imgQuit" class="iconChange quitWrd" data-icon="quit"></a>
            <p class="textFuncional">Menú Principal</p>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <footer id="footer" class="flexDisplay trans7" style="opacity:0">
            <p>Bud Light Docs | Bud Light © 2018 | Día Gamer</p>
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
          <ul>
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

        <div id="messagesGame" class="flexDisplay"> <!-- style="display:none"  -->
          <!-- flexDisplay -->
          <div class="flexDisplay"><!-- alto -->
            <div id="content">
              <!-- DISCLAIMER -->
              <section id="disclaimer">
                <img src="img/budlightdocs.png">
                <h1>Bud Light Docs</h1>
                <h3>¿Eres mayor de edad?</h3>
                <div class="flexDisplay">
                  <a role="button" class="trans7" onclick="checkAge('true')">Sí</a>
                  <a role="button" class="trans7" onclick="checkAge('false')">No</a>
                </div>
                <p>
                  Al confirmar ser mayor de edad manifiestas
                  tu conformidad con nuestros <a href="#">Términos y Condiciones</a>.
                </p>
                <br>
                <p>
                  También puedes ver nuestra <a href="#">política de
                  privacidad</a>.
                </p>
              </section>

              <section id="edadnovalida" class="noneDisplay">
                <p>
                  Lo sentimos, tienes que ser mayor de 18 años para ingresar a este sitio.
                </p>
              </section>

              <section id="mensajebienvenida" class="noneDisplay" style="opacity:0">
                <img src="img/budlightdocs.png">
                <h1>Bud Light Docs</h1>
                <p>
                  Para festejar al gamer que todos llevamos dentro
                  te invitamos a celebrarlo jugando todo el día y ganando premios
                  increibles.
                </p>
                <a id="tablapdf" href="#" class="trans7"><p>Descarga la tabla de premios</p></a>

                <a id="registro" class="registrocss flexDisplay" role="button" onclick="getPermitionsFB();">
                  <p>Regístrate con Facebook</p>
                  <img src="img/facebook.svg" height="20">
                </a>
                <a id="quitarFront" role="button" onclick="quitarRegistroFrontsinRegistro()">
                  Quitar (FRONT)
                </a>
              </section>
            </div>
          </div>
        </div>

        <!-- Cupón primera vez -->
        <div id="cuponUno" class="flexDisplay trans7">
          <div>
            <p>Felicidades ganaste tu primer cupón de descuento en <b>Rappi!</b></p>
            <br>
            <p>Sigue jugando para ganar más premios.</p>
            <br>
            <img src="img/cupon.svg"/>
            <a role="button" class="trans7" onclick="cuponUnoOk()">Listo</a>
          </div>
        </div>
        <script>

          $(document).ready(function () {
               function mostrarInformacionCaracter(evObject) {
                   var msg = ''; var elCaracter = String.fromCharCode(evObject.which);
                   if (evObject.which!=0 && evObject.which!=13) {
                    }
                    else {
                       jugando=!jugando;
                       ocultarmostrar();
                    }

                 }
              function ocultarmostrar() {
                if(jugando)
                  {
                     if(s_oMain!=undefined)
                       {
                          // $("#block_game").
                          $("#block_game").css("background-color","transparent");
                          $("#block_game").css("background-image","");
                          s_oMain.startUpdate();
                       }
                 }
               else
                {
                  if(s_oMain!=undefined)
                   {
                      $("#block_game").css("background-color","");
                      $("#block_game").css("background-image",'url("./img/back-home.jpg")');
                      s_oMain.stopUpdate();
                   }
                }

              }
              ocultarmostrar();
              window.onload = function() { document.onkeypress = mostrarInformacionCaracter;}
              if(checkPopUp())
               {
                 valido();
               }
          });
        </script>
        <!-- Globales Front -->
        <script type="text/javascript">
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
          var nivelDocumento = document.getElementById("nivelDocumento");
          var lookLevelPpt = document.getElementById("lookLevelPpt");
          var lookLevelExc = document.getElementById("lookLevelExc");
          var footer = document.getElementById("footer");
          var canvasFront = document.getElementById("canvas");
          var lookLevelExcBool = false;
          var lookLevelPptBool = false;
          var cuponUno = document.getElementById("cuponUno");
          /* mensajes */
          var disclaimer = document.getElementById("disclaimer");
          var edadnovalida = document.getElementById("edadnovalida");
          var mensajebienvenida = document.getElementById("mensajebienvenida");
          var frontBarMenu = document.getElementById("head");
          var frontMenu = document.getElementById("menu");
          var menuIsHidden = false;
          function quitarRegistroFrontsinRegistro()
          {
            quitarRegistroFront();
            sinregistro();
          }
        </script>
    </body>
</html>
