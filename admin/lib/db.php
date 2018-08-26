<?php
date_default_timezone_set('America/Mexico_City');

require_once('conexion.php');
require_once('funciones.php');

function maxscoreobtenido($link) {
	/* recuperar todas las filas de myCity */
   $score=0;
   $consulta = "select b.nombre,a.score from bdlt_participacion a inner join bdlt_registro b on a.id_registro=b.id order by score desc LIMIT 1;";
   if ($resultado = mysqli_query($link, $consulta)) {
     while ($fila = mysqli_fetch_row($resultado)) {
         $score=$fila[0].' con un score de '.$fila[1];
      }
      /* liberar el conjunto de resultados */
      mysqli_free_result($resultado);
    }
    return $score;
}
function registrosgenerados($link) {
  /* recuperar todas las filas de myCity */
   $score=0;
   $consulta = "select COUNT(*) from bdlt_registro";
   if ($resultado = mysqli_query($link, $consulta)) {
     while ($fila = mysqli_fetch_row($resultado)) {
         $score=$fila[0];
      }
      /* liberar el conjunto de resultados */
      mysqli_free_result($resultado);
    }
    return $score;
}
function cuponesentregados($link) {
  /* recuperar todas las filas de myCity */
   $score=0;
   $consulta = "select COUNT(*) from bdlt_codigos  where entregado=1;";
   if ($resultado = mysqli_query($link, $consulta)) {
     while ($fila = mysqli_fetch_row($resultado)) {
         $score=$fila[0];
      }
      /* liberar el conjunto de resultados */
      mysqli_free_result($resultado);
    }
    return $score;
}
function participaciones($link) {
  /* recuperar todas las filas de myCity */
   $score=0;
   $consulta = "select COUNT(*) from bdlt_participacion order by score desc LIMIT 1;";
   if ($resultado = mysqli_query($link, $consulta)) {
     while ($fila = mysqli_fetch_row($resultado)) {
         $score=$fila[0];
      }
      /* liberar el conjunto de resultados */
      mysqli_free_result($resultado);
    }
    return $score;
}

function posicionactual($link) {
	/* recuperar todas las filas de myCity */
   $pos='';
   $ban=0;
   $contador=1;
   //$consulta = "select * from (select id_registro,MAX(score) MaxScore,fecha  from bdlt_participacion group by id_registro) P order by MaxScore desc;";


   $consulta = "select pu.nombre,pu.usuario,pu.participaciones,pu.score maximoscore,pu.fecha_registro,pu.FechaScore,cg.descripcion,cg.ScoreRequerido,cg.ScoreObtenido,cg.codigo from (select reg.id,reg.nombre,reg.usuario,Res.score,Res.participaciones,reg.fecha_registro,Res.fecha FechaScore from (select a.id_registro,a.score,P.participaciones,MIN(fecha) fecha from (select id_registro,COUNT(id) participaciones,MAX(score) MaxScore from bdlt_participacion group by id_registro) P inner join bdlt_participacion a on a.id_registro=P.id_registro and a.score=P.MaxScore group by a.id_registro,a.score) Res inner join bdlt_registro reg on Res.id_registro=reg.id) pu left join (select a.id_registro,a.score ScoreObtenido,c.descripcion,c.score ScoreRequerido,b.codigo from bdlt_participacion a inner join bdlt_codigos b on  a.id_codigo=b.id inner join bdlt_cupones c on b.id_cupon=c.id where id_codigo is not null) cg on pu.id=cg.id_registro order by maximoscore desc,FechaScore asc  LIMIT 15;";
   if ($resultado = mysqli_query($link, $consulta)) {
     while ($fila = mysqli_fetch_row($resultado)) {
     	  $pos=$pos.'<TR><TH>'.$contador.'</TH><TH>'.$fila[0].'</TH><TH>'.$fila[1].'</TH><TH>'.$fila[2].'</TH><TH>'.$fila[3].'</TH><TH>'.$fila[4].'</TH><TH>'.$fila[5].'</TH><TH>'.$fila[6].'</TH><TH>'.$fila[7].'</TH><TH>'.$fila[8].'</TH></TR>';
        $contador++;
      }
      /* liberar el conjunto de resultados */
      mysqli_free_result($resultado);
    }
    return $pos;
}
function registrosdetalle($link) {
  /* recuperar todas las filas de myCity */
   $pos='';
   $consulta = "select * from bdlt_registro LIMIT 1000000;";
   if ($resultado = mysqli_query($link, $consulta)) {
     while ($fila = mysqli_fetch_row($resultado)) {
        $pos=$pos.'<TR><TH>'.$fila[1].'</TH><TH>'.$fila[2].'</TH><TH>'.$fila[3].'</TH><TH>'.$fila[4].'</TH><TH>'.$fila[5].'</TH></TR>';
      }
      /* liberar el conjunto de resultados */
      mysqli_free_result($resultado);
    }
    return $pos;
}
function cuponesdetalle($link) {
  /* recuperar todas las filas de myCity */
   $pos='';
   $consulta = "select a.cupon,a.descripcion,a.score,COUNT(b.id) entregados from bdlt_cupones a inner join bdlt_codigos b on a.id=b.id_cupon where entregado=1 group by a.cupon,a.descripcion,a.score;";
   if ($resultado = mysqli_query($link, $consulta)) {
     while ($fila = mysqli_fetch_row($resultado)) {
        $pos=$pos.'<TR><TH>'.$fila[0].'</TH><TH>'.$fila[1].'</TH><TH>'.$fila[2].'</TH><TH>'.$fila[3].'</TH><TH>'.$fila[5].'</TH></TR>';
      }
      /* liberar el conjunto de resultados */
      mysqli_free_result($resultado);
    }
    return $pos;
}
//select a.cupon,a.descripcion,a.score,COUNT(b.id) from bdlt_cupones a inner join bdlt_codigos b on a.id=b.id_cupon where entregado=1 group by a.cupon,a.descripcion,a.score
function get_pass($link,$user) {
 $cad='';
 $consulta = "SELECT value from bdlt_settings where Module='Admin' and setting='".$user."';";
 if ($resultado = mysqli_query($link, $consulta)) {
   while ($fila = mysqli_fetch_row($resultado)) {
     $pass=$fila[0];
     
    }/* liberar el conjunto de resultados */
    mysqli_free_result($resultado);
  }
 return $pass;
}
function login($user,$pass)
{
  $reg=0;
  $link=connect();
  $passbd = get_pass($link,$user);
  $passdecode=base64_decode($passbd);
  if($passdecode==$pass&&$passbd!='')
  {
    $salida='<input type="button" name="actualizar" onclick="actualizadiv();" value="Actualizar"><input type="button" name="exit" onclick="salir();" value="Salir">'.createhtml($link).'<script>
document.getElementById("defaultOpen").click();
</script> ';
  }
  else {
    $salida='<label>Error intentar de nuevo</label><br><label>Nombre Usuario:</label><br>
<input name="username" type="text" id="username" required>
<br><br>
<label>Password:</label><br>
<input name="password" type="password" id="password" required>
<br><br>
<input type="button" name="Submit" onclick="ingresar();" value="LOGIN">';
  }
  Close($link);
  return $salida;
    
}
function salir()
{
   $salida='<label>Nombre Usuario:</label><br>
<input name="username" type="text" id="username" required>
<br><br>
<label>Password:</label><br>
<input name="password" type="password" id="password" required>
<br><br>
<input type="button" name="Submit" onclick="ingresar();" value="LOGIN">';
return $salida;
}
function createhtml($link)
{
  echo '
  <!-- Tab links -->
<div class="tab">
  <button class="tablinks" onclick="opentab(event, \'General\')" id="defaultOpen">General</button>
  <button class="tablinks" onclick="opentab(event, \'Posiciones\')">Posiciones</button>
  <button class="tablinks" onclick="opentab(event, \'Registros\')">Registros</button>
  <button class="tablinks" onclick="opentab(event, \'Cupones\')">Cupones</button>
</div>

<!-- Tab content -->
<div id="General" class="tabcontent">
  <h2>General</h2>
  <h3>Registros generados</h3>
  <p>'.registrosgenerados($link).'</p>
  <h3>Numero de veces que se ha jugado</h3>
  <p>'.participaciones($link) .'</p>
  <h3>Cupones que se han entregado</h3>
  <p>'.cuponesentregados($link).'</p>
  <h3>Mejor posicion</h3>
  <p>'.maxscoreobtenido($link).'</p>
</div>

<div id="Posiciones" class="tabcontent">
  <h2>Mejores 15 Posiciones</h2>
  <table><TR><TH>#</TH><TH>Nombre</TH><TH>Usuario</TH><TH>Juegos Realizados</TH><TH>MaximoScore</TH><TH>Fecha Registro</TH><TH>Fecha MaximoScore</TH><TH>Promo Obtenida</TH><TH>Score RequeridoPromo</TH><TH>Score ObtenidoPromo</TH></TR>'.posicionactual($link).'</table>
</div>

<div id="Registros" class="tabcontent">
  <h2>Registros</h2>
  <table><TR><TH>Nombre</TH><TH>Usuario</TH><TH>Id Facebook</TH><TH>Fecha Registro</TH><TH>Fecha Update</TH>'.registrosdetalle($link).'</table>
</div>
<div id="Cupones" class="tabcontent">
  <h2>Cupones por promocion</h2>
  <table><TR><TH>Cupon</TH><TH>Promocion</TH><TH>Score Requerido</TH><TH>Cupones Entregados</TH>'.cuponesdetalle($link).'</table>
 
</div> ';
}
?>
