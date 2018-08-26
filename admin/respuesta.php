<?php
  require_once('lib/db.php');
  $tipo=$_POST['param3'];
  if($tipo==1)
  {
    $user=$_POST['param1'];
    $pass=$_POST['param2'];

    $result=login($user,$pass);
    echo $result;
  }
  else if($tipo==2)
  {
    $user='';
    $pass='';

    $result=salir();
    echo $result;
  }
?>
  
  