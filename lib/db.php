<?php
date_default_timezone_set('America/Mexico_City');

require_once('conexion.php');
require_once('funciones.php');


//mysql_set_charset('utf8');	

function registrar($nombre,$usuario,$idfb,$link)
{
	$reg=0;
    $consulta = "insert into bdlt_registro(nombre,usuario,idfb,fecha_registro,fecha_update) values('".$nombre."','".$usuario."','".$idfb."',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)";
    if (mysqli_query($link, $consulta)) {
      $reg=mysqli_insert_id($link);
    }
    return $reg;
    
}
function update_registro($usuario,$idfb,$link)
{
	$query ="UPDATE  bdlt_registro SET fecha_update =CURRENT_TIMESTAMP WHERE usuario = '".$usuario."' or idfb='".$idfb."'";
    if (mysqli_query($link, $query)) {
      //echo "Updated record successfully<br>";
    } 
}
function checkregistro($usuario,$idfb,$link) {
	/* recuperar todas las filas de myCity */
   $reg=0;
   $consulta = "SELECT * FROM bdlt_registro where usuario='".$usuario."' or idfb='".$idfb."'";
   if ($resultado = mysqli_query($link, $consulta)) {
     while ($fila = mysqli_fetch_row($resultado)) {
         $reg=$fila[0];
      }
      /* liberar el conjunto de resultados */
      mysqli_free_result($resultado);
    }
    return $reg;
}
function insertupdateregistro($nombre,$usuario,$idfb,$ip,&$cuponinicial)
{
  $textoextra='';
	$link=connect();
	mysqli_autocommit($link, FALSE);
	$registro=checkregistro($usuario,$idfb,$link);
	if($registro>0)
	{
		update_registro($usuario,$idfb,$link);
    //$res=true;
	}
	else
	{
		$registro=registrar($nombre,$usuario,$idfb,$link);
    if (!mysqli_commit($link)) {
      //echo "Falló la consignación de la transacción<br>";
     exit();
    }
    else
    {
     $country_code    = '';
     $ip_address      = $ip;
     $country_region  = '';
     $salida = get_country_api($country_code,$ip_address,$country_region);
     $consulta = "insert into bdlt_participacion(id_registro,fecha,ip,Pais,Estado) values(".$registro.",CURRENT_TIMESTAMP,'".$ip."','".$country_code."','".$country_region."')";
     if (mysqli_query($link, $consulta)) {
       $participacion=mysqli_insert_id($link);
       if (!mysqli_commit($link)) {
         //echo "Falló la consignación de la transacción<br>";
         exit();
        }
        else
        {
          $idcodigo=cuponobtenido(1,$registro,$link,$cup,$url,$idcup);
          $obtenido=cuponyaobtenido($registro,$idcup,$link);
          $query ="UPDATE  bdlt_participacion SET score =2 WHERE id =".$idpart.";";
          if($obtenido==0)
          {
           if($idcodigo>0)
            {
              $query ="UPDATE bdlt_participacion SET score =2,id_codigo=".$idcodigo." WHERE id =".$participacion.";";
              $cuponinicial="&Te has registrado con exito y ganaste un cupon :Cupon ".$cup." con codigo: ".$url;
            }
            else
            {
            }
          }
          else{
          }
          if (mysqli_query($link, $query)) {
          } 
          else
          {
          }
          if (!mysqli_commit($link)) {
            //exit();
          }
          else
          {
          }
        }
      }
      else
      {
      }
    }
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
    $salida = get_country_api($country_code,$ip_address,$country_region);
    $consulta = "insert into bdlt_participacion(id_registro,fecha,ip,Pais,Estado) values(".$idregistro.",CURRENT_TIMESTAMP,'".$ip."','".$country_code."','".$country_region."')";
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

function cuponobtenido($score,$idreg,$link,&$cup,&$url,&$idcup) {
   $reg=0;
   $transaction_start="start transaction";
   if (mysqli_query($link, $transaction_start)) {
      $consulta = "select min(b.id),a.id,a.cupon,b.url from bdlt_cupones a inner join bdlt_codigos b on a.id=b.id_cupon where id_cupon=(select Id from bdlt_cupones where score<=".$score." and id not in (select distinct b.id_cupon  from bdlt_participacion a inner join bdlt_codigos b on a.id_codigo=b.id where a.id_registro=".$idreg." and a.id_codigo is not null) order by score desc LIMIT 1) and entregado=0 FOR UPDATE;";
     if ($resultado = mysqli_query($link, $consulta)) {
        while ($fila = mysqli_fetch_row($resultado)) {

         $reg=$fila[0];
         $idcup=$fila[1];
         $cup=$fila[2];
         $url=$fila[3];
         if($reg!='')
         {
           $update="update bdlt_codigos set entregado=1 where id=".$reg.";";
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
      }
    } 
    return $reg;
}
function maxscoreobtenido($idreg,$link) {
	/* recuperar todas las filas de myCity */
   $score=0;
   $consulta = "select * from bdlt_participacion where id_registro=".$idreg." order by score desc LIMIT 1;";
   if ($resultado = mysqli_query($link, $consulta)) {
     while ($fila = mysqli_fetch_row($resultado)) {
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
   
    $maxscore=maxscoreobtenido($idreg,$link);
    $reg=cuponobtenido($score,$idreg,$link,$cup,$url,$idcup);
    $obtenido=cuponyaobtenido($idreg,$idcup,$link);

    mysqli_autocommit($link, FALSE);
    $query ="UPDATE  bdlt_participacion SET score =".$score." WHERE id =".$idpart.";";
    if($obtenido==0)
    {
    	if($reg>0)
    	{
    	  $query ="UPDATE  bdlt_participacion SET score =".$score.",id_codigo=".$reg." WHERE id =".$idpart.";";
    	}
    	
    }
    if (mysqli_query($link, $query)) {
    } 
    if (!mysqli_commit($link)) {
     //exit();
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
    	  $cadena=$cadena.'&Felicidades has obtenido el cupon='.$cup.' link='.$url;
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
    $cadena=$cadena.'&'.$posicion.'&'.$maxscore ;  
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
  $strhtml='<table><TR><TH>Cupon</TH><TH>Score Requerido</TH><TH>Score Obtenido</TH><TH>Codigo del Cupon</TH></TR>';
  $link=connect();
  $consulta = "select c.cupon,c.score requerido,a.score obtenido,b.url codigo from bdlt_participacion a inner join bdlt_codigos b on a.id_codigo=b.id  inner join bdlt_cupones c on b.id_cupon=c.id where a.id_registro=".$idreg.";";
  if ($resultado = mysqli_query($link, $consulta)) {
   while ($fila = mysqli_fetch_row($resultado)) {
     $strhtml=$strhtml.'<TR><TD>'.$fila[0].'</TD><TD>'.$fila[1].'</TD><TD>'.$fila[2].'</TD><TD>'.$fila[3].'</TD></TR>';
    }
   /* liberar el conjunto de resultados */
    mysqli_free_result($resultado);
  }
  Close($link);
  $strhtml=$strhtml.'</table></br><button id="btnvercuponespromo" onclick="location.reload();">Regresar</button>';
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
  $strhtml=$strhtml.'</table></br><button id="btnvercuponespromo" onclick="location.reload();">Regresar</button>';
  return $strhtml;    
}
?>
