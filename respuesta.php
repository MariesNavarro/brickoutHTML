<?php
  require_once('lib/db.php');
  $htmlresult='';
  if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
  }
  elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
  }
  else {
    $ip = $_SERVER['REMOTE_ADDR'];
  }
  $tipo=$_POST['param4'];
  if($tipo==1)
  {
    $nombre=$_POST['param1'];
    $usuario=$_POST['param2'];
    $idfb=$_POST['param3'];
    registrar_php($nombre,$usuario,$idfb,$ip);
  }
  else if($tipo==2)
  {
    sinregistrar_php();
  }
  else if($tipo==3)
  {
    jugar_php();
  }
  else if($tipo==4)
  {
    $ban=false;
    if($ban)
    {
      redirect("index.php");
    }
    else
    {
      
      $idreg=$_POST['param1'];
      participacion_php($idreg,$ip);
    }
    
  }
  else if($tipo==5)
  {
    $score=$_POST['param1'];
    $idreg=$_POST['param2'];
    $idpart=$_POST['param3'];
    participacionupd_php($score,$idreg,$idpart);
    

  }
  else if($tipo==6)
  {
    $cads;
    $val=validafechas($cads);
    if($val[0]>0.000001&&$val[1]<0.00000001)
    {
      echo "SI";
    }
    else
    {
      echo "NO";
    }
  }
  else if($tipo==7){
    cuponespromo();
  }
  else if($tipo==8){
    $idreg=$_POST['param1'];
    cuponesusuario($idreg);
  }
   else if($tipo==9){
    validapais_php($ip);
  }
   else if($tipo==10){
    $compartio=$_POST['param1'];
    logcompartir_php($compartio);
  }
  function ante(){
    $findip=getpromoestado($ip,$promo);
    if(mysql_num_rows($findip)>0)
    {
      while($datos1 = mysql_fetch_array($findip)) {
        if($datos1['PromoValid']=='1')
        {
          $result=getcodigo($ip,$idClient,$idprom);
          if (mysql_num_rows($result)>0) {
            while($datos = mysql_fetch_array($result)) {
              if($datos['codigo']!='')
              {
                echo '<img src="lib/barcode.php?text='.$datos['codigo'].'&size=150&orientation=horizontal&codetype=Code128&print=true&sizefactor=1"/><br/>';
                update_codigos($datos['codigo'],$ip,$idClient);
              }
             else
             {
                echo 'Ya has recibido un codigo,debes esperar un lapso de 24 horas para solicitar otro. Tiempo Transcurrido desde tu ultima solicitud '.$datos['TiempoTranscurrido'].' aun deves esperar '.$datos['TiempoRestante'].'<br/>';
             }
            }
          }
          else
          {
           echo 'La promocion o los codigos se han agotado.<br/>';
          }
        }
        else
        {
          echo 'Esta promocion no es valida en tu ubicacion<br/>';
        }
      }
    }
    else
    {
     echo 'Ocurrio un error al solicitar el codigo<br/>';
    }
  }
  function registrar_php($nombre,$usuario,$idfb,$ip)
  {
    $reg=insertupdateregistro($nombre,$usuario,$idfb,$ip,$cuponinicial,$ejecutar,$codstado,$city);
    $obtenido=cuponesus($reg);
    if($reg>0)
    {
      echo '<p>Bienvenido las reglas '.$nombre.' son</p><p>1.-Regla1</p><p>2.-Regla2</p><button id="btnjugar" onclick="but_jugar();">Jugar</button><br><button id="btnvercuponespromo" onclick="cuponesenpromocion();">Cupones en la promocion</button><br><button id="btncuponesobtenidos" onclick="cuponesobtenidos();">Mis cupones</button>&'.$reg.$cuponinicial.'&'.$nombre.'&'.$ejecutar.'&'.$codstado.'&'.$city.$obtenido;
    }
    else
    {
      echo '<p>Ocurrio un error</p>';
    }
  }
  function sinregistrar_php()
  {
    $reg=2028;
    echo '<p>Bienvenido las reglas son</p><p>1.-Regla1</p><p>2.-Regla2</p><button id="btnjugar" onclick="but_jugar();">Jugar</button><br><button id="btnvercuponespromo" onclick="cuponesenpromocion();">Cupones en la promocion</button><br><button id="btncuponesobtenidos" onclick="cuponesobtenidos();">Mis cupones</button>&'.$reg;
  }
  function jugar_php()
  {
    $reg=jugar_db($life);
     echo '<script>$.getScript("./js/CInterface.js", function(data, textStatus, jqxhr){});registrado();function createdatagame(){sett._life=(sett._life!='.$life.')?'.$life.':sett._life; return new CMain({ball_speed: sett._ball_speed,bricks_score: sett._bricks_score,bricks_resistance: sett._bricks_resistance,bricks_destructible: sett._bricks_destructible, bonus_speed: sett._bonus_speed, bonus_time: sett._bonus_time, bonus_score: sett._bonus_score, life: sett._life,bullet_speed: sett._bullet_speed, speed_down_ball: sett._speed_down_ball, speed_up_ball: sett._speed_up_ball, fullscreen:sett._fullscreen, check_orientation:sett._check_orientation,num_levels_for_ads: sett._num_levels_for_ads });} </script><div style="position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%"></div><canvas id="canvas" class="ani_hack canvasWrd" width="840" height="1024"> </canvas><div data-orientation="portrait" class="orientation-msg-container"><p class="orientation-msg-text">Favor de rotar tu dispositivo</p></div><div id="block_game" style="position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%; display:block"></div><script>jugar();desbloqueo();var canvasFront = document.getElementById("canvas");</script><div id="div2"><button hidden id="salir">Salir</button></div><script>'.$reg;

  }
  function participacion_php($idregistro,$ip)
  {
    $part=participacion($idregistro,$ip);
    echo $part;
  }
  function participacionupd_php($score,$idreg,$idpart)
  {
    $cad=updateparticipacion($score,$idreg,$idpart);
    echo $cad;
  }
  function cuponesusuario($idreg)
  {
    $table=cuponesus($idreg);
    echo $table;
  }
  function cuponespromo()
  {
    $table=cuponesprom();
    echo $table;
  }
  function validapais_php($ip)
  {
    $pais=validapaisint($ip,$estado);
    if(true)//if($pais=="Mexico")
    {
      echo "SI";
    }
    else
    {
      echo "NO";
    }
  }
  function logcompartir_php($compartio)
  {
     compartiodb($compartio);
  }
  function redirect($url) {
    ob_start();
    header('Location: '.$url);
    ob_end_flush();
    die();
  }
?>
