<?php
date_default_timezone_set('America/Mexico_City');

require_once('conexion.php');
require_once('funciones.php');


//mysql_set_charset('utf8');	

function registrar($nombre,$usuario,$idfb,$link)
{
	$reg=0;
    $consulta = "insert into bdlt_registro(nombre,usuario,idfb,fecha_registro,fecha_update) values('".$nombre."','".$usuario."','".$idfb."',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)";
    $ip= ($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 0;
    $date= date("Y-m-d H:i:s");
    $comple='IP:['.$ip.'] Fecha['.$date.'] ejecucion:['.$consulta.']';
    writelog($comple);
  
    if (mysqli_query($link, $consulta)) {
      $reg=mysqli_insert_id($link);
    }
    return $reg;
    
}
function update_registro($usuario,$idfb,$link)
{
	$query ="UPDATE  bdlt_registro SET fecha_update =CURRENT_TIMESTAMP WHERE usuario = '".$usuario."' or idfb='".$idfb."'";
  $ip= ($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 0;
    $date= date("Y-m-d H:i:s");
    $comple='IP:['.$ip.'] Fecha['.$date.'] ejecucion:['.$query.']';
    writelog($comple);
    if (mysqli_query($link, $query)) {
      //echo "Updated record successfully<br>";
    } 
}
function checkregistro($usuario,$idfb,$link) {
	/* recuperar todas las filas de myCity */
   $reg=0;
   $consulta = "SELECT * FROM bdlt_registro where usuario='".$usuario."' or idfb='".$idfb."'";
    $ip= ($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 0;
    $date= date("Y-m-d H:i:s");
    writelog($comple);
    $comple='IP:['.$ip.'] Fecha['.$date.'] ejecucion:['.$consulta.']';
   if ($resultado = mysqli_query($link, $consulta)) {
     while ($fila = mysqli_fetch_row($resultado)) {
         $reg=$fila[0];
      }
      /* liberar el conjunto de resultados */
      mysqli_free_result($resultado);
    }
    return $reg;
}
function insertupdateregistro($nombre,$usuario,$idfb,$ip,&$cuponinicial,&$ejecutar,&$codstado,&$city)
{
  $cuponinicial="";
	$link=connect();
	mysqli_autocommit($link, FALSE);
	$registro=checkregistro($usuario,$idfb,$link);
	if($registro>0)
	{
    $ejecutar='NO';
    $codstado='NoNuevo';
    $city='NoNuevo';
		update_registro($usuario,$idfb,$link);
    $contador=0;
    $particip=0;
    $maxscore=maxscoreobtenido($registro,$link,$particip);
    if($maxscore>0)
    {
      $cuponinicial=$cuponinicial."&".$maxscore;
    }
    else
    {

      $cuponinicial=$cuponinicial."&?";
    }
    $posicion=posicionactual($registro,$link,$contador);
    if($posicion==0&&$contador==0)
    {
      $cuponinicial=$cuponinicial."&?";
    }
    else if($posicion==0)
    {
      
      $cuponinicial=$cuponinicial."&".($contador+1);
    }
    else
    {
      $cuponinicial=$cuponinicial."&".$posicion;
    }
    //$res=true;
	}
	else
	{
		$registro=registrar($nombre,$usuario,$idfb,$link);
    $cuponinicial=$cuponinicial."&?&?";
    $country_code    = '';
    $ip_address      = $ip;
    $country_region  = '';
    $salida = get_country_api($country_code,$ip_address,$country_region,$codpais);
    $ejecutar='SI';
    $codstado=$codpais;
    $city=$country_region;
    //  
    // if (!mysqli_commit($link)) {
    //   //echo "Falló la consignación de la transacción<br>";
    //  exit();
    // }
    // else
    // {
    //  $country_code    = '';
    //  $ip_address      = $ip;
    //  $country_region  = '';
    //  $salida = get_country_api($country_code,$ip_address,$country_region);
    //  $consulta = "insert into bdlt_participacion(id_registro,fecha,ip,Pais,Estado) values(".$registro.",CURRENT_TIMESTAMP,'".$ip."','".$country_code."','".$country_region."')";
    //  if (mysqli_query($link, $consulta)) {
    //    $participacion=mysqli_insert_id($link);
    //    if (!mysqli_commit($link)) {
    //      //echo "Falló la consignación de la transacción<br>";
    //      exit();
    //     }
    //     else
    //     {
    //       $idcodigo=cuponobtenido(1,$registro,$link,$cup,$url,$idcup);
    //       $obtenido=cuponyaobtenido($registro,$idcup,$link);
    //       $query ="UPDATE  bdlt_participacion SET score =2 WHERE id =".$idpart.";";
    //       if($obtenido==0)
    //       {
    //        if($idcodigo>0)
    //         {
    //           $query ="UPDATE bdlt_participacion SET score =2,id_codigo=".$idcodigo." WHERE id =".$participacion.";";
    //           $cuponinicial="&Te has registrado con exito y ganaste un cupon :Cupon ".$cup." con codigo: ".$url;
    //         }
    //         else
    //         {
    //         }
    //       }
    //       else{
    //       }
    //       if (mysqli_query($link, $query)) {
    //       } 
    //       else
    //       {
    //       }
    //       if (!mysqli_commit($link)) {
    //         //exit();
    //       }
    //       else
    //       {
    //       }
    //     }
    //   }
    //   else
    //   {
    //   }
    // }
	}
	if (!mysqli_commit($link)) {
    //echo "Falló la consignación de la transacción<br>";
    exit();
  }
  else
  {
  }

	Close($link);
	return $registro;
}
function participacion($idregistro,$ip)
{
	$reg=0;
	$salida          = 0;
    $country_code    = '';
    $ip_address      = $ip;
    $country_region  = '';
    $link=connect();
	  mysqli_autocommit($link, FALSE);
    $salida = get_country_api($country_code,$ip_address,$country_region,$codpais);
    $consulta = "insert into bdlt_participacion(id_registro,fecha,ip,Pais,Estado,fecha_inicio) values(".$idregistro.",CURRENT_TIMESTAMP,'".$ip."','".$country_code."','".$country_region."',CURRENT_TIMESTAMP)";
     $ip= ($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 0;
    $date= date("Y-m-d H:i:s");
    $comple='IP:['.$ip.'] Fecha['.$date.'] ejecucion:['.$consulta.']';
    writelog($comple);
    if (mysqli_query($link, $consulta)) {
      $reg=mysqli_insert_id($link);
    }
    if (!mysqli_commit($link)) {
     //echo "Falló la consignación de la transacción<br>";
     exit();
    }
	Close($link);
  return $reg;
    
}

function cuponobtenido($score,$idreg,$link,&$cup,&$url,&$idcup,&$descripcion) {
   $reg=0;
   $transaction_start="start transaction";
   if (mysqli_query($link, $transaction_start)) {
      $consulta = "select min(b.id),a.id,a.cupon,b.codigo,a.descripcion from bdlt_cupones a inner join bdlt_codigos b on a.id=b.id_cupon where id_cupon=(select Id from bdlt_cupones where score<=".$score." and id not in (select distinct b.id_cupon  from bdlt_participacion a inner join bdlt_codigos b on a.id_codigo=b.id where a.id_registro=".$idreg." and a.id_codigo is not null) order by score desc LIMIT 1) and entregado=0 FOR UPDATE;";
        $ip= ($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 0;
        $date= date("Y-m-d H:i:s");
        $comple='IP:['.$ip.'] Fecha['.$date.'] ejecucion:['.$consulta.']';
        writelog($comple);
     if ($resultado = mysqli_query($link, $consulta)) {
        while ($fila = mysqli_fetch_row($resultado)) {

         $reg=$fila[0];
         $idcup=$fila[1];
         $cup=$fila[2];
         $url=$fila[3];
         $descripcion=$fila[4];
         if($reg!='')
         {
           $update="update bdlt_codigos set entregado=1 where id=".$reg.";";
            $ip= ($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 0;
            $date= date("Y-m-d H:i:s");
            $comple='IP:['.$ip.'] Fecha['.$date.'] ejecucion:['.$update.']';
            writelog($comple);
           if (mysqli_query($link, $update)) {
           } 
           else
           {
             $reg=0;
           }
         } 
        }
        /* liberar el conjunto de resultados */
        mysqli_free_result($resultado);
        $transaction_start="commit";
        if (mysqli_query($link, $transaction_start)) {}
          else
          {
            $ip= ($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 0;
            $date= date("Y-m-d H:i:s");
            $comple='IP:['.$ip.'] Fecha['.$date.'] ejecucion:['.$transaction_start.' Id Registro:'.$idreg.' Score:'.$score.']';
            writelog($comple);
          }
      }
    } 
    else
    {
      $ip= ($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 0;
        $date= date("Y-m-d H:i:s");
        $comple='IP:['.$ip.'] Fecha['.$date.'] ejecucion:['.$transaction_start.' Id Registro:'.$idreg.' Score:'.$score.']';
        writelog($comple);
    }
    return $reg;
}
function maxscoreobtenido($idreg,$link,&$part) {
	/* recuperar todas las filas de myCity */
   $score=0;
   $consulta = "select * from bdlt_participacion where id_registro=".$idreg." order by score desc LIMIT 1;";
   $ip= ($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 0;
   $date= date("Y-m-d H:i:s");
   $comple='IP:['.$ip.'] Fecha['.$date.'] ejecucion:['.$consulta.']';
   writelog($comple);
   if ($resultado = mysqli_query($link, $consulta)) {
     while ($fila = mysqli_fetch_row($resultado)) {
         $part=$fila[0];
         $score=$fila[3];
      }
      /* liberar el conjunto de resultados */
      mysqli_free_result($resultado);
    }
    return $score;
}
function maxscoreobtenidonocdmxedomex($idreg,$link,&$part) {
  /* recuperar todas las filas de myCity */
   $score=0;
   $consulta = "select * from bdlt_participacion where id_registro=".$idreg." and Estado not in('Mexico City','Estado de Mexico') order by score desc LIMIT 1;";
   $ip= ($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 0;
   $date= date("Y-m-d H:i:s");
   $comple='IP:['.$ip.'] Fecha['.$date.'] ejecucion:['.$consulta.']';
   writelog($comple);
   if ($resultado = mysqli_query($link, $consulta)) {
     while ($fila = mysqli_fetch_row($resultado)) {
         $part=$fila[0];
         $score=$fila[3];
      }
      /* liberar el conjunto de resultados */
      mysqli_free_result($resultado);
    }
    return $score;
}
function cuponyaobtenido($idreg,$idcupon,$link) {
	/* recuperar todas las filas de myCity */
   $obten=0;
   $consulta = "select * from bdlt_participacion a inner join bdlt_codigos b on a.id_codigo=b.id where a.id_registro=".$idreg." and b.id_cupon=".$idcupon." LIMIT 1;";
   if ($resultado = mysqli_query($link, $consulta)) {
     while ($fila = mysqli_fetch_row($resultado)) {
         $obten=1;
      }
      /* liberar el conjunto de resultados */
      mysqli_free_result($resultado);
    }
    return $obten;
}
function cuponunicoobtenido($idreg,$link) {
  /* recuperar todas las filas de myCity select * from bdlt_participacion where id_registro=25 and id_codigo is not null    */
   $obten=0;
   $consulta = "select * from bdlt_participacion where id_registro=".$idreg." and id_codigo is not null LIMIT 1;";
   if ($resultado = mysqli_query($link, $consulta)) {
     while ($fila = mysqli_fetch_row($resultado)) {
         $obten=1;
      }
      /* liberar el conjunto de resultados */
      mysqli_free_result($resultado);
    }
    return $obten;
}
function numparticipacionesalacanzado($idreg,$link)
{
  $consulta = "select COUNT(*) NumeroParticipaciones,(select CONVERT(value,UNSIGNED INTEGER) AS num from bdlt_settings where Module='Participaciones' and setting='MinimoRequerido') NumeroNecesario from bdlt_participacion where id_registro=".$idreg." and score>0 and Estado not in('Mexico City','Estado de Mexico');";
   if ($resultado = mysqli_query($link, $consulta)) {
     while ($fila = mysqli_fetch_row($resultado)) {
         $part=$fila[0];
         $req=$fila[1];
      }
      /* liberar el conjunto de resultados */
      mysqli_free_result($resultado);
    }
    if($part>=$req)
    {
      return true;
    }
    else
    {
      return false;
    }
}
function posicionactual($idreg,$link,&$contador) {
	/* recuperar todas las filas de myCity */
   $pos=0;
   $ban=0;
   $contador=0;
   //$consulta = "select * from (select id_registro,MAX(score) MaxScore,fecha  from bdlt_participacion group by id_registro) P order by MaxScore desc;";


   $consulta = "select * from (select a.id_registro,a.score,MIN(fecha) fecha from (select id_registro,MAX(score) MaxScore from bdlt_participacion group by id_registro) P inner join bdlt_participacion a on a.id_registro=P.id_registro and a.score=P.MaxScore group by a.id_registro,a.score) Res order by  score desc,fecha asc;";
   if ($resultado = mysqli_query($link, $consulta)) {
     while ($fila = mysqli_fetch_row($resultado)) {
     	 $contador++;
         $idregenbd=$fila[0];
         if($idregenbd==$idreg&&$ban==0)
         {
         	$pos=$contador;
         	$ban=1;
         }
      }
      /* liberar el conjunto de resultados */
      mysqli_free_result($resultado);
    }
    return $pos;
}
function updateparticipacion($score,$idreg,$idpart)
{
	$maxscore=0;
	$reg=0;
    $cup= '';
    $url= '';
    $obtenido=0;
    $contador=0;
    $link=connect();
    $parti=0;
    mysqli_autocommit($link, FALSE);
    $val=validafechas($cads);
    if($val[0]>0.000001&&$val[1]<0.00000001)
    {
      $score=$score*2;
    }
    else
    {
    }
    if($val[2]>0.000001&&$val[3]<0.00000001)
    {
      
    }
    else
    {
      $score=0;
    }
    $query ="UPDATE  bdlt_participacion SET score =".$score.", fecha=CURRENT_TIMESTAMP WHERE id =".$idpart.";";
    $ip= ($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 0;
    $date= date("Y-m-d H:i:s");
    $comple='IP:['.$ip.'] Fecha['.$date.'] ejecucion:['.$query.']';
    writelog($comple);
    if (mysqli_query($link, $query)) {
    } 
    if (!mysqli_commit($link)) {
     //exit();
      $ip= ($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 0;
      $date= date("Y-m-d H:i:s");
      $comple='IP:['.$ip.'] Fecha['.$date.'] ejecucion:['.$query.' Fallo commit puntaje]';
    }
    $maxscore=maxscoreobtenido($idreg,$link,$parti);
    $maxscoreparacupon=maxscoreobtenidonocdmxedomex($idreg,$link,$parti);
    if($idreg!='2028')
    {
      if(numparticipacionesalacanzado($idreg,$link))
       {
       $obtenido=cuponunicoobtenido($idreg,$link);
       if($obtenido==0)
        {
         $reg=cuponobtenido($maxscoreparacupon,$idreg,$link,$cup,$url,$idcup,$descripcion);
        }
      }
    }
    if($obtenido==0)
    {
    	if($reg>0)
    	{
    	  $query ="UPDATE  bdlt_participacion SET id_codigo=".$reg." WHERE id =".$parti.";";
        $ip= ($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 0;
        $date= date("Y-m-d H:i:s");
        $comple='IP:['.$ip.'] Fecha['.$date.'] ejecucion:['.$query.']';
        writelog($comple);
    	}
    	
    }
    if (mysqli_query($link, $query)) {
    } 
    if (!mysqli_commit($link)) {
     //exit();
      $ip= ($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 0;
        $date= date("Y-m-d H:i:s");
        $comple='IP:['.$ip.'] Fecha['.$date.'] ejecucion:['.$query.' Fallo commit asignar cupon]';
        writelog($comple);
    }
    $posicion=posicionactual($idreg,$link,$contador);
    Close($link);
	$cadena='';
	$intscore=(int)$score;
	if($maxscore<$intscore)
	{
		$cadena=$cadena.'Felicidades has obtenido un nuevo record con un score de '.$score;
		$maxscore=$intscore;
	}
	else
	{
		$cadena=$cadena.'Tu score obtenido es '.$score;
	}
	if($obtenido==0)
    {
    	if($reg>0)
    	{
    	  $cadena=$cadena.'&'.$cup.'@'.$url.'@'.$descripcion;
    	}
    	else
    	{
    		$cadena=$cadena.'&No ganaste cupon sigue participando';
    	}
    	
    }
    else
    {
      $cadena=$cadena.'&No ganaste cupon sigue participando';
    }
    if($idreg!='2028')
    {
      $cadena=$cadena.'&'.$posicion.'&'.$maxscore ;  
    }
    else
    {
      $cadena=$cadena.'&?&?';
    }
    return $cadena;

}
function get_settings($link,&$lifes) {
 $cad='';
 $consulta = "SELECT * from bdlt_settings where Module='Main';";
 if ($resultado = mysqli_query($link, $consulta)) {
   while ($fila = mysqli_fetch_row($resultado)) {
     $cad=$cad."&".$fila[3];
     if($fila[2]=="life")
     {
       
       $lifes=$fila[3];
     }
    }/* liberar el conjunto de resultados */
    mysqli_free_result($resultado);
  }
 return $cad;
}
function jugar_db(&$lifes)
{
  $reg=0;
  $link=connect();
  $salida = get_settings($link,$lifes);
  Close($link);
  return $salida;
    
}

function validafechas(&$cad)
{
  $reg;
  $contador=0;
  $link=connect();
  $consulta = "select setting,value,NOW(),TIME_TO_SEC(TIMEDIFF(NOW(), value)) valor from bdlt_settings where Module='Validez';";
  if ($resultado = mysqli_query($link, $consulta)) {
   while ($fila = mysqli_fetch_row($resultado)) {
     $reg[$contador]=$fila[3];
     $cad[$contador]=$fila[1];
     $contador++;
    }
   /* liberar el conjunto de resultados */
    mysqli_free_result($resultado);
  }
  Close($link);
  return $reg;    
}
// $score=$_GET['score'];
// $idreg=$_GET['idreg'];
// $idpart=$_GET['idpart'];
// if($score!=''&&$idreg!=''&&$idpart!='')
// {
//   echo $score.' '.$idreg.' '.$idpart;
//   updateparticipacion($score,$idreg,$idpart);
// }
function cuponesus($idreg)
{
  $strhtml='';
  $link=connect();
  $consulta = "select c.cupon,c.score requerido,a.score obtenido,b.codigo codigo, c.descripcion from bdlt_participacion a inner join bdlt_codigos b on a.id_codigo=b.id  inner join bdlt_cupones c on b.id_cupon=c.id where a.id_registro=".$idreg." LIMIT 1;";
  if ($resultado = mysqli_query($link, $consulta)) {
   while ($fila = mysqli_fetch_row($resultado)) {
     $strhtml='&'.$fila[3].'&'.$fila[4];
    }
   /* liberar el conjunto de resultados */
    mysqli_free_result($resultado);
  }
  Close($link);
  return $strhtml;       
}
function cuponesprom()
{
  $strhtml='<table><TR><TH>Cupon</TH><TH>Score Requerido</TH></TR>';
  $link=connect();
  $consulta = "select * from bdlt_cupones;";
  if ($resultado = mysqli_query($link, $consulta)) {
   while ($fila = mysqli_fetch_row($resultado)) {
     $strhtml=$strhtml.'<TR><TD>'.$fila[1].'</TD><TD>'.$fila[2].'</TD></TR>';
    }
   /* liberar el conjunto de resultados */
    mysqli_free_result($resultado);
  }
  Close($link);
  $strhtml=$strhtml.'</table><br><button id="btnvercuponespromo" onclick="location.reload();">Regresar</button>';
  return $strhtml;    
}
function validapaisint($ip,&$estado)
{
  $reg=0;
  $salida          = 0;
    $country_code    = '';
    $ip_address      = $ip;
    $country_region  = '';
    $salida = get_country_api($country_code,$ip_address,$country_region,$codpais);
    $estado=$country_region;
    return $country_code;
    
}
function compartiodb($compartio)
{
  $ip= ($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 0;
        $date= date("Y-m-d H:i:s");
        $comple='IP:['.$ip.'] Fecha['.$date.']Se ha realizado un compartir'.$compartio;
     writelog($comple);
}


?>
