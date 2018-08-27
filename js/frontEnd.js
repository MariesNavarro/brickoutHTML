"use strict";
window.console.log("%cCoded by Oet Capital", "color:#fff;  font-size: 10px; background:#000; padding:20px;");
var nivelInterno;
function tC(el, c, t){
  if(el.classList){
    setTimeout(function(){
      el.classList.toggle(c);
    },t);
  }else{
    var n = el.className.split(" "),
        i = n.indexOf(c);
    if(i < 0){
      n.push(c);
      setTimeout(function(){
        el.className = n.join(" ");
      },t);
    } else{
      n.splice(i, 1);
      setTimeout(function(){
        el.className = n.join(" ");
      },t);
    }
  }
}

function changeFrontLevel(lvl){
  nivelInterno = lvl;
  changeColor(lvl);
  displayLevel(lvl);
}


function changeLook(c){
  switch (c) {
    case 1:
    lookNone();
    break;
    case 2:
      if(w<1300)lookNone();
      if(w>1300)lookPpt();
    break;
    case 3:
      if(w<1300)lookExcNoRegla();
      if(w>1300)lookExcRegla();
    break;
  }
}
function lookExcNoRegla(){lookLevelPpt.style.opacity = "0"; lookLevelExc.style.opacity = "1"; lookLevelExcRegla.style.opacity = "0"; lookLevelExcCeldas.style.opacity = "1"; }
function lookExcRegla(){lookLevelPpt.style.opacity = "0"; lookLevelExc.style.opacity = "1"; lookLevelExcRegla.style.opacity = "1"; lookLevelExcCeldas.style.opacity = "1"; }
function lookPpt(){ lookLevelPpt.style.opacity = "1"; lookLevelExcRegla.style.opacity = "0"; }
function lookNone(){ lookLevelPpt.style.opacity = "0"; lookLevelExcRegla.style.opacity = "0"; }


function changeColor(lvl){
  if(lvl === 0 || lvl === 3 || lvl === 6){
    changeLook(1);
    canvasFront.setAttribute("class", "canvasWrd");
    barmenumobile.setAttribute("class", "flexDisplay");
    barmenumobile.setAttribute("class", "flexDisplay back_word");
    frontBarMenu.setAttribute("class", " ");
    frontBarMenu.setAttribute("class", "back_word");
    gamermood.setAttribute("src", "img/head/gamermood-wrd.svg");
    searchBar.setAttribute("src", "img/head/search-wrd.svg");
    lookLevelExcCeldas.style.opacity = "0";
    partidaTab.style.color = "#263270"; //word
  } else if(lvl === 1 || lvl === 4 || lvl === 7){
    changeLook(2);
    canvasFront.setAttribute("class", "canvasPpt");
    barmenumobile.setAttribute("class", "flexDisplay");
    barmenumobile.setAttribute("class", "flexDisplay back_ppt");
    frontBarMenu.setAttribute("class", " ");
    frontBarMenu.setAttribute("class", "back_ppt");
    gamermood.setAttribute("src", "img/head/gamermood-ppt.svg");
    searchBar.setAttribute("src", "img/head/search-ppt.svg");
    lookLevelExcCeldas.style.opacity = "0";
    partidaTab.style.color = "#f45a2a"; //exc
  } else if(lvl === 2 || lvl === 5 || lvl === 8 || lvl === 9){
    changeLook(3);
    canvasFront.setAttribute("class", "canvasExc");
    barmenumobile.setAttribute("class", "flexDisplay");
    barmenumobile.setAttribute("class", "flexDisplay back_excel");
    frontBarMenu.setAttribute("class", " ");
    frontBarMenu.setAttribute("class", "back_excel");
    gamermood.setAttribute("src", "img/head/gamermood-exc.svg");
    searchBar.setAttribute("src", "img/head/search-exc.svg");
    lookLevelExcCeldas.style.opacity = "1";
    partidaTab.style.color = "#1f7448"; //ppt
  } else {
    changeLook(1);
    canvasFront.setAttribute("class", "canvasWrd");
    barmenumobile.setAttribute("class", "flexDisplay");
    barmenumobile.setAttribute("class", "flexDisplay back_word");
    frontBarMenu.setAttribute("class", " ");
    frontBarMenu.setAttribute("class", "back_word");
    gamermood.setAttribute("src", "img/head/gamermood-wrd.svg");
    searchBar.setAttribute("src", "img/head/search-wrd.svg");
    lookLevelExcCeldas.style.opacity = "0";
    partidaTab.style.color = "#263270"; //word
  }
}

function displayLevel(lvl){
  switch (lvl) {
  case 0: //1 Wrd
  imgLevel.setAttribute("class", " ");
  imgLevel.setAttribute("class", "level_1");
  //iconos que cambian de color
  for (var i = 0; i < iconChange.length; i++) {
    var type =  iconChange[i].dataset.icon;
    iconChange[i].setAttribute("class", "iconChange ");
    iconChange[i].setAttribute("class", "iconChange " + type + "Wrd");
  }
  for (var i = 0; i < textFuncional.length; i++) { textFuncional[i].style.color = "#263270"; }
  break;
  case 1: //2 Ppt
  imgLevel.setAttribute("class", " ");
  imgLevel.setAttribute("class", "level_2");
  //iconos que cambian de color
  for (var i = 0; i < iconChange.length; i++) {
    var type =  iconChange[i].dataset.icon;
    iconChange[i].setAttribute("class", "iconChange ");
    iconChange[i].setAttribute("class", "iconChange " + type + "Ppt");
  }
  for (var i = 0; i < textFuncional.length; i++) { textFuncional[i].style.color = "#f45a2a"; }
  break;
  case 2: //3 Exc
  imgLevel.setAttribute("class", " ");
  imgLevel.setAttribute("class", "level_3");
  //iconos que cambian de color
  for (var i = 0; i < iconChange.length; i++) {
    var type =  iconChange[i].dataset.icon;
    iconChange[i].setAttribute("class", "iconChange ");
    iconChange[i].setAttribute("class", "iconChange " + type + "Exc");
  }
  for (var i = 0; i < textFuncional.length; i++) { textFuncional[i].style.color = "#1f7448"; }
  break;
  case 3: //4 Wrd
  imgLevel.setAttribute("class", " ");
  imgLevel.setAttribute("class", "level_4");
  //iconos que cambian de color
  for (var i = 0; i < iconChange.length; i++) {
    var type =  iconChange[i].dataset.icon;
    iconChange[i].setAttribute("class", "iconChange ");
    iconChange[i].setAttribute("class", "iconChange " + type + "Wrd");
  }
  for (var i = 0; i < textFuncional.length; i++) { textFuncional[i].style.color = "#263270"; }
  break;
  case 4: //5 Ppt
  imgLevel.setAttribute("class", " ");
  imgLevel.setAttribute("class", "level_5");
  //iconos que cambian de color
  for (var i = 0; i < iconChange.length; i++) {
    var type =  iconChange[i].dataset.icon;
    iconChange[i].setAttribute("class", "iconChange ");
    iconChange[i].setAttribute("class", "iconChange " + type + "Ppt");
  }
  for (var i = 0; i < textFuncional.length; i++) { textFuncional[i].style.color = "#f45a2a"; }
  break;
  case 5: //6 Exc
  imgLevel.setAttribute("class", " ");
  imgLevel.setAttribute("class", "level_6");
  //iconos que cambian de color
  for (var i = 0; i < iconChange.length; i++) {
    var type =  iconChange[i].dataset.icon;
    iconChange[i].setAttribute("class", "iconChange ");
    iconChange[i].setAttribute("class", "iconChange " + type + "Exc");
  }
  for (var i = 0; i < textFuncional.length; i++) { textFuncional[i].style.color = "#1f7448"; }
  break;
  case 6: //7 Wrd
  imgLevel.setAttribute("class", " ");
  imgLevel.setAttribute("class", "level_7");
  //iconos que cambian de color
  for (var i = 0; i < iconChange.length; i++) {
    var type =  iconChange[i].dataset.icon;
    iconChange[i].setAttribute("class", "iconChange ");
    iconChange[i].setAttribute("class", "iconChange " + type + "Wrd");
  }
  for (var i = 0; i < textFuncional.length; i++) { textFuncional[i].style.color = "#263270"; }
  break;
  case 7: //8 Ppt
  imgLevel.setAttribute("class", " ");
  imgLevel.setAttribute("class", "level_8");
  //iconos que cambian de color
  for (var i = 0; i < iconChange.length; i++) {
    var type =  iconChange[i].dataset.icon;
    iconChange[i].setAttribute("class", "iconChange ");
    iconChange[i].setAttribute("class", "iconChange " + type + "Ppt");
  }
  for (var i = 0; i < textFuncional.length; i++) { textFuncional[i].style.color = "#f45a2a"; }
  break;
  case 8: //9 Exc
  imgLevel.setAttribute("class", " ");
  imgLevel.setAttribute("class", "level_9");
  //iconos que cambian de color
  for (var i = 0; i < iconChange.length; i++) {
    var type =  iconChange[i].dataset.icon;
    iconChange[i].setAttribute("class", "iconChange ");
    iconChange[i].setAttribute("class", "iconChange " + type + "Exc");
  }
  for (var i = 0; i < textFuncional.length; i++) { textFuncional[i].style.color = "#1f7448"; }
  break;
  case 9: //10 Exc
  imgLevel.setAttribute("class", " ");
  imgLevel.setAttribute("class", "level_10");
  //iconos que cambian de color
  for (var i = 0; i < iconChange.length; i++) {
    var type =  iconChange[i].dataset.icon;
    iconChange[i].setAttribute("class", "iconChange ");
    iconChange[i].setAttribute("class", "iconChange " + type + "Exc");
  }
  for (var i = 0; i < textFuncional.length; i++) { textFuncional[i].style.color = "#1f7448"; }
  break;
  }
}


function tabSelectChange(t){
  for (var i = 0; i < tabButts.length; i++) {
    tabButts[i].setAttribute("class", "tabButts ");
  }
  if(nivelInterno === 0 || nivelInterno === 3 || nivelInterno === 6){
    t.setAttribute("class", "tabButts tabSelect tabSelectWord");
  } else if(nivelInterno === 1 || nivelInterno === 4 || nivelInterno === 7){
    t.setAttribute("class", "tabButts tabSelect tabSelectPpt");
  } else if(nivelInterno === 2 || nivelInterno === 5 || nivelInterno === 8 || nivelInterno === 9){
    t.setAttribute("class", "tabButts tabSelect tabSelectExcel");
  } else {
    t.setAttribute("class", "tabButts tabSelect tabSelectWord");
  }
}


function hideMenu(t, c){
  var img = t.children[0].children[1];
  var p = t.children[0].children[0];
  menuIsHidden = !menuIsHidden;
  if(menuIsHidden){
    frontMenu.style.height = "0";
    t.style.top = "0";
    img.setAttribute("class", "rot180");
    p.innerHTML = "Mostrar Menú";
  } else {
    frontMenu.style.height = "120px";
    t.style.top = "120px";
    img.setAttribute("class", " ");
    p.innerHTML = "Ocultar Menú";
  }
}




function getMenu(w){
  if(w <= 960){
    frontMenu.style.top = "-200px";
    frontMenu.style.opacity = "0";
    menumobile.style.top = "0";
    menumobile.style.opacity = "1";
  } else {
    frontMenu.style.top = "0";
    frontMenu.style.opacity = "1";
    menumobile.style.top = "-60px";
    menumobile.style.opacity = "0";
  }
}

function menuDeployment(w){
  if(menuInit && !menuFull){
    if(w < 960){
      menuDisplay("initMobile");
    } else if(w > 960) {
      menuDisplay("initDesktop");
    }
  }
  else if(menuFull && menuInit){
    if(w < 960){
      menuDisplay("fullMobile");
    } else if(w > 960) {
      menuDisplay("fullDesktop");
    }
  }
}


function menuDisplay(c){
  switch (c) {
  case "initMobile":
    menumobile.style.opacity = "1";
    menumobile.style.top = "0";
    frontBarMenu.style.opacity = "0";
    frontBarMenu.style.top = "-200px";
    frontToolsBar.style.opacity = "0";
    frontToolsBar.style.top = "-200px";
  break;
  case "initDesktop":
    menumobile.style.opacity = "0";
    menumobile.style.top = "-60px";
    frontBarMenu.style.opacity = "1";
    frontBarMenu.style.top = "0";
    frontToolsBar.style.opacity = "0";
    frontToolsBar.style.top = "-200px";
  break;
  case "fullMobile":
    menumobile.style.opacity = "1";
    menumobile.style.top = "0";
    frontBarMenu.style.opacity = "0";
    frontBarMenu.style.top = "-200px";
    frontToolsBar.style.opacity = "0";
    frontToolsBar.style.top = "-200px";
  break;
  case "fullDesktop":
    menumobile.style.opacity = "0";
    menumobile.style.top = "-60px";
    frontBarMenu.style.opacity = "1";
    frontBarMenu.style.top = "0";
    frontToolsBar.style.opacity = "1";
    frontToolsBar.style.top = "60px";
  break;
  }
}


function checkAge(c){
  if(c === "true"){
    menuInit = true;
    menuDeployment(w);
    disclaimer.style.opacity = "0";
    disclaimer.style.display = "none";
    footerprovisional.style.display = "none";
    messagesGame.setAttribute("class", "flexDisplay");
    mensajebienvenida.setAttribute("class", "flexDisplay");
    footer.style.bottom = "0";
    logotipobudlight.style.opacity = "1";
    mensajebienvenida.style.opacity = "1";
    // messagesGame.children[0].setAttribute("class", "flexDisplay canvasWrd");
  }else{
    nivelInterno = "no";
    messagesGame.setAttribute("class", "flexDisplay");
    disclaimer.style.display = "none";
    edadnovalida.setAttribute("class", "flexDisplay");
  }
}

function disableEnableTabs(c){
  if(c === "enable"){
    for (var i = 0; i < tabButts.length; i++) { tabButts[i].setAttribute("onclick", "tabSelectChange(this)"); }
    for (var i = 0; i < tabButts.length; i++) { tabButts[i].children[0].style.cursor = "pointer"; }
    for (var i = 0; i < tabButts.length; i++) { tabButts[i].children[0].setAttribute("title", " ")}
    /* new */
    tabButts[0].children[0].setAttribute("onclick", "tabsDisplay(0)"); //Partida
    tabButts[1].children[0].setAttribute("onclick", "tabsDisplay(1)"); //Mi cupon
    tabButts[2].children[0].setAttribute("onclick", "tabsDisplay(2)"); //Cupones
    tabButts[3].children[0].setAttribute("onclick", "tabsDisplay(3)"); //Instrucciones

    tabButts[0].setAttribute("class", "tabButts tabSelect tabSelectWord");
  } else{
    for (var i = 0; i < tabButts.length; i++) { tabButts[i].setAttribute("onclick", " "); }
    for (var i = 0; i < tabButts.length; i++) { tabButts[i].children[0].style.cursor = "not-allowed"; }
    for (var i = 0; i < tabButts.length; i++) { tabButts[i].children[0].setAttribute("title", "Necesitas estar registrado")}
  }
}

function changePartida(c) {
  if(c === 0 || c === 3 || c === 6){
    partidaTab.style.color = "#263270";
  } else if(nivelInterno === 1 || nivelInterno === 4 || c === 7){
    partidaTab.style.color = "#f45a2a";
  } else if(c === 2 || c === 5 || c === 8 || c === 9){
    partidaTab.style.color = "#1f7448";
  } else {
    partidaTab.style.color = "#263270";
  }
}


function tabsDisplay(n){
  switch (n) {
    case 0:
      bodyFront.style.overflowY = "scroll";
      if(nivelInterno != undefined){
        s_oMain.startUpdate();
      }
      tabsContent[0].style.left = "-100vw";
      tabsContent[1].style.left = "-100vw";
      tabsContent[2].style.left = "-100vw";
      changePartida(nivelInterno);
    break;
    case 1:
      bodyFront.style.overflowY = "hidden";
      if(nivelInterno != undefined){
        s_oMain.stopUpdate();
      }
      tabsContent[0].style.left = "0";
      tabsContent[1].style.left = "-100vw";
      tabsContent[2].style.left = "-100vw";
      partidaTab.style.color = "#ffffff";
      if(cupgan!=''&&promgan!='')
      {
        $('#comboTabs').text(promgan);
        $('#cgeneradoTabs').text(cupgan);
        cuponTabs("show");
      }
    break;
    case 2:
      bodyFront.style.overflowY = "hidden";
      if(nivelInterno != undefined){
        s_oMain.stopUpdate();
      }
      tabsContent[0].style.left = "-100vw";
      tabsContent[1].style.left = "0";
      tabsContent[2].style.left = "-100vw";
      partidaTab.style.color = "#ffffff";
    break;
    case 3:
          bodyFront.style.overflowY = "hidden";
      if(nivelInterno != undefined){
        s_oMain.stopUpdate();
      }
      tabsContent[0].style.left = "-100vw";
      tabsContent[1].style.left = "-100vw";
      tabsContent[2].style.left = "0";
      partidaTab.style.color = "#ffffff";
    break;
  }
}

function mute(){
  sonido=!sonido;
  Howler.mute(sonido);
  if(sonido){
    if(nivelInterno === 0 || nivelInterno === 3 || nivelInterno === 6){
      audioButton.setAttribute("class", "iconChange audioWrdMute");
    } else if(nivelInterno === 1 || nivelInterno === 4 || nivelInterno === 7){
      audioButton.setAttribute("class", "iconChange audioPptMute");
    } else if(nivelInterno === 2 || nivelInterno === 5 || nivelInterno === 8 || nivelInterno === 9){
      audioButton.setAttribute("class", "iconChange audioExcMute");
    } else {
      audioButton.setAttribute("class", "iconChange audioWrdMute");
    }
  }else{
    if(nivelInterno === 0 || nivelInterno === 3 || nivelInterno === 6){
      audioButton.setAttribute("class", "iconChange audioWrd");
    } else if(nivelInterno === 1 || nivelInterno === 4 || nivelInterno === 7){
      audioButton.setAttribute("class", "iconChange audioPpt");
    } else if(nivelInterno === 2 || nivelInterno === 5 || nivelInterno === 8 || nivelInterno === 9){
      audioButton.setAttribute("class", "iconChange audioExc");
    } else {
      audioButton.setAttribute("class", "iconChange audioWrd");
    }
  }
}




function cuponTabs(c){
  if(c === "show"){
    sincupon.style.display = "none";
    cuponyagenerado.style.display = "block";
  } else {
    sincupon.style.display = "block";
    cuponyagenerado.style.display = "none";
  }
}


function quitarRegistroFront(){
  messagesGame.setAttribute("class", "noneDisplay");
  menuFull = true;
  menuDeployment(w);
  disableEnableTabs("enable");
}

function pausaEvent(l, w){
  var level = l;
  if(isPausePressed){
    if(level != undefined)toggleGame("pausa");
    if(w < 960)displayPausaMobile(level);
    if(w > 960)displayPausaDesktop(level);
  } else {
    if(level != undefined)toggleGame("play");
    pausaWrap.style.display = "none";
  }
  rebotaIconoAudio();
}


function rebotaIconoAudio(){
  if(nivelInterno === 0 || nivelInterno === 3 || nivelInterno === 6){
    audioButton.setAttribute("class", "iconChange audioWrd");
  } else if(nivelInterno === 1 || nivelInterno === 4 || nivelInterno === 7){
    audioButton.setAttribute("class", "iconChange audioPpt");
  } else if(nivelInterno === 2 || nivelInterno === 5 || nivelInterno === 8 || nivelInterno === 9){
    audioButton.setAttribute("class", "iconChange audioExc");
  } else {
    audioButton.setAttribute("class", "iconChange audioWrd");
  }
}

function toggleGame(){
  if(s_oMain!=undefined){
    //console.log("s_oMain esta definido");
    if(isPausePressed){
      s_oMain.stopUpdate();
    } else {
      s_oMain.startUpdate();
    }
  }
}

function buttonPausa(){
  isPausePressed = !isPausePressed;
  pausaEvent(nivelInterno, w);
}


function displayPausaMobile(l){
  var level = l;
  pausaWrap.style.display = "block";
  switchPausa(0);
  if(level ==  undefined || level == 0) changeHeadMobilePausa(1);
  if(level === 1 || level === 4 || level === 7) changeHeadMobilePausa(2);
  if(nivelInterno === 2 || nivelInterno === 5 || nivelInterno === 8 || nivelInterno === 9) changeHeadMobilePausa(3);
  function changeHeadMobilePausa(c){
    headerImgPausaM.style.display = "block";
    headerImgPausaD.style.display = "none";
    switch (c) {
    case 1:
      headerPausa.style.backgroundImage = "url('img/pausa/textura-mob-wrd.jpg')";
    break;
    case 2:
      headerPausa.style.backgroundImage = "url('img/pausa/textura-mob-ppt.jpg')";
    break;
    case 3:
      headerPausa.style.backgroundImage = "url('img/pausa/textura-mob-exc.jpg')";
    break;
    }
  }
}

function displayPausaDesktop(l){
  if(l == undefined) l = 0;
  var level = l;
  pausaWrap.style.display = "block";
  if(level ==  undefined || level == 0) changeHeadDesktopPausa(1);
  if(level === 1 || level === 4 || level === 7) changeHeadDesktopPausa(2);
  if(nivelInterno === 2 || nivelInterno === 5 || nivelInterno === 8 || nivelInterno === 9) changeHeadDesktopPausa(3);
  function changeHeadDesktopPausa(c){
    // headerImgPausaM.style.display = "none";
    // headerImgPausaD.style.display = "block";
    switch (c) {
      case 1:
        switchPausa(1);
        // headerImgPausaD.setAttribute("src", "img/pausa/barra-pausa-wrd.jpg");
        // headerPausa.style.backgroundImage = "url('img/pausa/textura-desk-wrd.jpg')";
      break;
      case 2:
        switchPausa(2);
        // headerImgPausaD.setAttribute("src", "img/pausa/barra-pausa-ppt.jpg");
        // headerPausa.style.backgroundImage = "url('img/pausa/textura-desk-ppt.jpg')";
      break;
      case 3:
        switchPausa(3);
        generaCeldas();
        // headerImgPausaD.setAttribute("src", "img/pausa/barra-pausa-exc.jpg");
        // headerPausa.style.backgroundImage = "url('img/pausa/textura-desk-exc.jpg')";
      break;
    }
  }
}



function switchPausa(n){
  for (var i = 0; i < pausaArea.length; i++) {
    pausaArea[i].setAttribute("class", "pausaArea noneDisplay");
  }
  pausaArea[n].setAttribute("class", "pausaArea flexDisplay");
}

function generaCeldas(){
  var r, count = 0;
  var celdas = document.getElementById("celdas");
  for (var i = 0; i < 20; i++) {
    var ul = document.createElement("UL");
    ul.setAttribute("class", "flexDisplay");
    celdas.appendChild(ul);
    for (var j = 0; j < 12; j++) {
      var textarea = document.createElement("TEXTAREA");
      var li = document.createElement("LI");
      li.appendChild(textarea);
      ul.appendChild(li)
      r = Math.floor(Math.random() * 12) + 1;
      if(j == r){
        count++;
        if(count === 9) count = 0;
        textarea.value = formulasExcel[count];
      }
    }
  }
}


var formulasExcel = [ "TOTAL=SUMA(A1:A50)", "A3 * A5 * A8", "A2 - A3", "(A1 + C2) * C7 / 10", "PROMEDIO (A2:B2)", "MAX(celdas) / =MIN(celdas)", "MIN(A2,B4,C3,29)", "(MAX(A2:A3)", "CONTARA(A:A)", "{=SUMA ( A1:C20)}"];

function checkPais(c){
  if(c === "NO"){
    nivelInterno = "no";
    disclaimerIndex.setAttribute("class","flexDisplay");
    messagesGame.setAttribute("class", "flexDisplay");
    disclaimer.style.display = "none";
    paisnovalido.setAttribute("class", "flexDisplay");
  }
}
function showPopUp(c){
  if(c === "NO"){
    nivelInterno = "no";
    disclaimerIndex.setAttribute("class","flexDisplay");
    messagesGame.setAttribute("class", "flexDisplay");
    disclaimer.style.display = "none";
    emergentes.setAttribute("class", "flexDisplay");
  }
}


function cuponOpacity(t){
  var parent = t.parentNode;
  parent.style.opacity = "0";
  setTimeout(function(){
    parent.style.display = "none";
  },700);
}

var divsInsDeskt = ['popChromeDesk', 'popSafariDesk', 'popFirefoxDesk'];
var divsInsMob = ['popAndroid', 'popChrome', 'popSafari', 'popFacebook'];
function displayInstructions(){
  if(checkMobile){
    for (var i = 0; i < mobileIns.length; i++) {
      mobileIns[i].style.display = "block";
      mobileIns[i].setAttribute("ontouchstart", "toggleInstructions('"+divsInsMob[i]+"')");
    }
  } else {
    for (var i = 0; i < escritorioIns.length; i++) {
      escritorioIns[i].style.display = "block";
      escritorioIns[i].setAttribute("onclick", "toggleInstructions('"+divsInsDeskt[i]+"')");
    }
  }
}
var count = 0;
var namePopInstruction;
var instructionOpen = false;
function toggleInstructions(el){
  if(namePopInstruction === undefined){
    instructionOpen = !instructionOpen;
  } else {
    if(namePopInstruction != el){
      if(!instructionOpen){
        instructionOpen = true;
      } else {
        instructionOpen = false;
      }
    } else {
      count++;
      if(count == 1)instructionOpen = false;
      if(count > 1){
        instructionOpen = true;
        count = 0;
      }
    }
  }
  namePopInstruction = el;
  if(instructionOpen){
    for (var i = 0; i < instructionDiv.length; i++) {
      instructionDiv[i].style.height = "0";
    }
    var el = document.getElementById(el),
    len = el.children.length-1,
    img = el.children[len];
    el.style.height = "auto";
    img.setAttribute("src", "img/pop/"+namePopInstruction+".gif");
  }

  if(!instructionOpen){
    for (var i = 0; i < instructionDiv.length; i++) {
      instructionDiv[i].style.height = "0";
    }
  }
}
