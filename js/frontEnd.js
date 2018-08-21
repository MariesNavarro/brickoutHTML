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
    frontBarMenu.setAttribute("class", " ");
    frontBarMenu.setAttribute("class", "back_word");
    gamermood.setAttribute("src", "img/head/gamermood-wrd.png");
    searchBar.setAttribute("src", "img/head/search-wrd.png");
    lookLevelExcBool = false;
    lookLevelPptBool = false;
    changeLook("wrd");
  } else if(lvl === 1 || lvl === 4 || lvl === 7){
    frontBarMenu.setAttribute("class", " ");
    frontBarMenu.setAttribute("class", "back_ppt");
    gamermood.setAttribute("src", "img/head/gamermood-ppt.png");
    searchBar.setAttribute("src", "img/head/search-ppt.png");
    lookLevelExcBool = false;
    lookLevelPptBool = true;
    changeLook("ppt");
  } else if(lvl === 2 || lvl === 5 || lvl === 8 || lvl === 9){
    frontBarMenu.setAttribute("class", " ");
    frontBarMenu.setAttribute("class", "back_excel");
    gamermood.setAttribute("src", "img/head/gamermood-exc.png");
    searchBar.setAttribute("src", "img/head/search-exc.png");
    lookLevelExcBool = true;
    lookLevelPptBool = false;
    changeLook("exc");
  } else {
    frontBarMenu.setAttribute("class", " ");
    frontBarMenu.setAttribute("class", "back_word");
    gamermood.setAttribute("src", "img/head/gamermood-wrd.png");
    searchBar.setAttribute("src", "img/head/search-wrd.png");
    lookLevelExcBool = false;
    lookLevelPptBool = false;
    changeLook("wrd");
  }
}

function displayLevel(lvl){
  switch (lvl) {
  case 0: //1 Wrd
  nivelDocumento.innerHTML = "Documento 1";
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
  nivelDocumento.innerHTML = "Documento 2";
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
  nivelDocumento.innerHTML = "Documento 3";
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
  nivelDocumento.innerHTML = "Documento 4";
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
  nivelDocumento.innerHTML = "Documento 5";
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
  nivelDocumento.innerHTML = "Documento 6";
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
  nivelDocumento.innerHTML = "Documento 7";
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
  nivelDocumento.innerHTML = "Documento 8";
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
  nivelDocumento.innerHTML = "Documento 9";
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
  nivelDocumento.innerHTML = "Documento 10";
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

function checkAge(c){
  if(c === "true"){
    messagesGame.setAttribute("class", "flexDisplay"); 
    disclaimer.style.opacity = "0";
    setTimeout(function(){
      disclaimer.style.display = "none";
      mensajebienvenida.setAttribute("class", "flexDisplay");

      footer.style.opacity = "1";
      frontMenu.style.opacity = "1";

      setTimeout(function(){
        mensajebienvenida.style.opacity = "1";

        messagesGame.children[0].setAttribute("class", "flexDisplay canvasWrd");
      },300)
    },700);
  }else if(c === "false"){
    disclaimer.style.display = "none";
    edadnovalida.setAttribute("class", "flexDisplay");
  }
}


function quitarRegistroFront(){
  messagesGame.setAttribute("class", "noneDisplay");
}


function cuponUnoOk(){
  cuponUno.style.opacity = "0";
   but_jugar();
  setTimeout(function(){
    canvasFront.setAttribute("class", "canvasWrd");
    cuponUno.style.display = "none";
  },800);
}
