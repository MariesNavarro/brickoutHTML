<!DOCTYPE html>
<html>
    <head>
        <title>Bud Light Docs | Día Gamer</title>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400" rel="stylesheet">
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
    </head>
    <body ondragstart="return false;" ondrop="return false;" >
        <div style="position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%"></div>
        <script>
            $(document).ready(function () {
                var oMain = new CMain({
                    ball_speed: 12, //SPEED OF BALL IN PIXEL
                    bricks_score: [5, 10, 15, 20, 50, 40], //SCORE ASSIGNED TO EVERY BRICK (brick0 to brickN)
                    bricks_resistance: [0, 0, 0, 0, 0, 1], //HOW MANY TIME THE BALL COLLISION THE BRICK UNTIL IT IS DESTROYED (brick0 to brickN)
                    bricks_destructible: [true, true, true, true, false, true], //INDICATES THAT A BRICK IS DESTRUCTABLE BY BALL IN NORMAL STATE (brick0 to brick5)
                    bonus_speed: 2, //SPEED OF BONUS IN PIXEL
                    bonus_time: {t0: 15, t1: 150, t2: 15, t3: 15, t6: 15}, //DURATION OF EVERY BONUS IN THIS ORDER (IN SECONDS) t0=LargePad,t1=FireBall,t2=Floor,t3=Magnetic,t6=Shot
                    bonus_score: {s0: 15, s1: 10, s2: 10, s3: 15, s4: 100, s5: 20, s6: 15, s7: 10, s8: 30, s9: 30}, //SCORE OF EVERY BONUS IN THIS ORDER s0=LargePad,s1=FireBall,s2=Floor,s3=Magnetic,s4=extra life,s5=multiBall,s6=Shot,s7=ball speed down,s8ball speed up,s9=smallPad
                    life: 300, //LIVES ASSIGNED AT THE BEGIN OF THE GAME
                    bullet_speed: 0.5, //SPEED OF THE BULLET OF THE SHOT BONUS
                    speed_down_ball: 0.25, //DECREASE SPEED TO BALL EVERY TIME TAKES THE POWER UP SPEED DOWN BALL
                    speed_up_ball: 0.25, //INCREASE SPEED TO BALL EVERY TIME TAKES THE POWER UP SPEED UP BALL
                    fullscreen:true, //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
                    check_orientation:true,     //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES
                    num_levels_for_ads: 3 //NUMBER OF LEVELS TO COMPLETE BEFORE TRIGGERING SAVE_SCORE EVENT. USEFUL FOR INTER-LEVEL AD EVENTUALLY.
                });

                $(oMain).on("start_session", function (evt) {
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
                                    + iScore + TEXT_SHARE_SHARE1});
                    }
                });

                if (isIOS()) {
                    setTimeout(function () {
                        sizeHandler();
                    }, 200);
                } else {
                    sizeHandler();
                }
            });

        </script>

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



        <canvas id="canvas" class='ani_hack' width="840" height="1024"></canvas>
        <div data-orientation="portrait" class="orientation-msg-container"><p class="orientation-msg-text">Please rotate your device</p></div>
        <div id="block_game" style="position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%; display:none"></div>

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

                <a id="registro" class="registrocss flexDisplay" role="button" onclick="">
                  <p>Regístrate con Facebook</p>
                  <img src="img/facebook.svg" height="20">
                </a>
                <a id="quitarFront" role="button" onclick="quitarRegistroFront()">
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

        </script>
    </body>
</html>
