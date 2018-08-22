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
  if(c === "wrd"){
    lookLevelPpt.style.opacity = "0";
    lookLevelExc.style.opacity = "0";
    if(menuIsHidden){
      //cerrado
    } else {
      //abierto
    }
  } else if (c === "ppt") {
    lookLevelPpt.style.opacity = "1";
    lookLevelExc.style.opacity = "0";
    if(menuIsHidden){
      //cerrado
    } else {
      //abierto
    }
  } else if (c === "exc") {
    lookLevelPpt.style.opacity = "0";
    lookLevelExc.style.opacity = "1";
    if(menuIsHidden){
      //cerrado
    } else {
      //abierto
    }
  }
}

function changeColor(lvl){
  if(lvl === 0 || lvl === 3 || lvl === 6){
    canvasFront.setAttribute("class", "canvasWrd");
    barmenumobile.setAttribute("class", "flexDisplay");
    barmenumobile.setAttribute("class", "flexDisplay back_word");
    frontBarMenu.setAttribute("class", " ");
    frontBarMenu.setAttribute("class", "back_word");
    gamermood.setAttribute("src", "img/head/gamermood-wrd.svg");
    searchBar.setAttribute("src", "img/head/search-wrd.svg");
    lookLevelExcBool = false;
    lookLevelPptBool = false;
    changeLook("wrd");
  } else if(lvl === 1 || lvl === 4 || lvl === 7){
    canvasFront.setAttribute("class", "canvasPpt");
    barmenumobile.setAttribute("class", "flexDisplay");
    barmenumobile.setAttribute("class", "flexDisplay back_ppt");
    frontBarMenu.setAttribute("class", " ");
    frontBarMenu.setAttribute("class", "back_ppt");
    gamermood.setAttribute("src", "img/head/gamermood-ppt.svg");
    searchBar.setAttribute("src", "img/head/search-ppt.svg");
    lookLevelExcBool = false;
    lookLevelPptBool = true;
    changeLook("ppt");
  } else if(lvl === 2 || lvl === 5 || lvl === 8 || lvl === 9){
    canvasFront.setAttribute("class", "canvasExc");
    barmenumobile.setAttribute("class", "flexDisplay");
    barmenumobile.setAttribute("class", "flexDisplay back_excel");
    frontBarMenu.setAttribute("class", " ");
    frontBarMenu.setAttribute("class", "back_excel");
    gamermood.setAttribute("src", "img/head/gamermood-exc.svg");
    searchBar.setAttribute("src", "img/head/search-exc.svg");
    lookLevelExcBool = true;
    lookLevelPptBool = false;
    changeLook("exc");
  } else {
    canvasFront.setAttribute("class", "canvasWrd");
    barmenumobile.setAttribute("class", "flexDisplay");
    barmenumobile.setAttribute("class", "flexDisplay back_word");
    frontBarMenu.setAttribute("class", " ");
    frontBarMenu.setAttribute("class", "back_word");
    gamermood.setAttribute("src", "img/head/gamermood-wrd.svg");
    searchBar.setAttribute("src", "img/head/search-wrd.svg");
    lookLevelExcBool = false;
    lookLevelPptBool = false;
    changeLook("wrd");
  }
}

function displayLevel(lvl){
  switch (lvl) {
  case 0: //1 Wrd
  tabSelect[0].setAttribute("class", "tabSelect ");
  tabSelect[0].setAttribute("class", "tabSelect tabSelectWord");
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
  tabSelect[0].setAttribute("class", "tabSelect ");
  tabSelect[0].setAttribute("class", "tabSelect tabSelectPpt");
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
  tabSelect[0].setAttribute("class", "tabSelect ");
  tabSelect[0].setAttribute("class", "tabSelect tabSelectExcel");
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
  tabSelect[0].setAttribute("class", "tabSelect ");
  tabSelect[0].setAttribute("class", "tabSelect tabSelectWord");
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
  tabSelect[0].setAttribute("class", "tabSelect ");
  tabSelect[0].setAttribute("class", "tabSelect tabSelectPpt");
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
  tabSelect[0].setAttribute("class", "tabSelect ");
  tabSelect[0].setAttribute("class", "tabSelect tabSelectExcel");
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
  tabSelect[0].setAttribute("class", "tabSelect ");
  tabSelect[0].setAttribute("class", "tabSelect tabSelectWord");
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
  tabSelect[0].setAttribute("class", "tabSelect ");
  tabSelect[0].setAttribute("class", "tabSelect tabSelectPpt");
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
  tabSelect[0].setAttribute("class", "tabSelect ");
  tabSelect[0].setAttribute("class", "tabSelect tabSelectExcel");
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
  tabSelect[0].setAttribute("class", "tabSelect ");
  tabSelect[0].setAttribute("class", "tabSelect tabSelectExcel");
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
    messagesGame.children[0].setAttribute("class", "flexDisplay canvasWrd");
    mensajebienvenida.style.opacity = "1";
  }else{
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
    tabButts[0].setAttribute("class", "tabButts tabSelect tabSelectWord");
  } else{
    for (var i = 0; i < tabButts.length; i++) { tabButts[i].setAttribute("onclick", " "); }
    for (var i = 0; i < tabButts.length; i++) { tabButts[i].children[0].style.cursor = "not-allowed"; }
    for (var i = 0; i < tabButts.length; i++) { tabButts[i].children[0].setAttribute("title", "Necesitas estar registrado")}
  }
}


function quitarRegistroFront(){
  messagesGame.setAttribute("class", "noneDisplay");
  menuFull = true;
  menuDeployment(w);
  disableEnableTabs("enable");
}
function checkPais(c){
  if(c === "NO"){
    messagesGame.setAttribute("class", "flexDisplay");
    disclaimer.style.display = "none";
    paisnovalido.setAttribute("class", "flexDisplay");
  }
}