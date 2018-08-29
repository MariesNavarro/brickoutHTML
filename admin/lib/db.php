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
         $score=$fila[0].'<br /> score '.number_format($fila[1], 0, '.', ',');
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


   $consulta = "select pu.nombre,pu.usuario,pu.participaciones,pu.score maximoscore,pu.fecha_registro,pu.FechaScore,cg.descripcion,cg.ScoreRequerido,cg.ScoreObtenido,cg.codigo from (select reg.id,reg.nombre,reg.usuario,Res.score,Res.participaciones,reg.fecha_registro,Res.fecha FechaScore from (select a.id_registro,a.score,P.participaciones,MIN(fecha) fecha from (select id_registro,COUNT(id) participaciones,MAX(score) MaxScore from bdlt_participacion group by id_registro) P inner join bdlt_participacion a on a.id_registro=P.id_registro and a.score=P.MaxScore group by a.id_registro,a.score) Res inner join bdlt_registro reg on Res.id_registro=reg.id) pu left join (select a.id_registro,a.score ScoreObtenido,c.descripcion,c.score ScoreRequerido,b.codigo from bdlt_participacion a inner join bdlt_codigos b on  a.id_codigo=b.id inner join bdlt_cupones c on b.id_cupon=c.id where id_codigo is not null) cg on pu.id=cg.id_registro order by maximoscore desc,FechaScore asc  LIMIT 10000000;";
   if ($resultado = mysqli_query($link, $consulta)) {
     while ($fila = mysqli_fetch_row($resultado)) {
     	  $pos=$pos.'<TR><TD>'.$contador.'</TD><TD>'.$fila[0].'</TD><TD>'.$fila[1].'</TD><TD class="centrado">'.$fila[2].'</TD><TD class="derecha">'.number_format($fila[3], 0, '.', ',').'</TD><TD>'.$fila[4].'</TD><TD>'.$fila[5].'</TD><TD>'.$fila[6].'</TD><TD class="derecha">'.number_format($fila[7], 0, '.', ',').'</TD><TD class="derecha">'.number_format($fila[8], 0, '.', ',').'</TD></TR>';
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
        $pos=$pos.'<TR><TD>'.$fila[1].'</TD><TD>'.$fila[2].'</TD><TD>'.$fila[3].'</TD><TD>'.$fila[4].'</TD><TD>'.$fila[5].'</TD></TR>';
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
        $pos=$pos.'<TR><TD>'.$fila[0].'</TD><TD>'.$fila[1].'</TD><TD class="centrado">'.$fila[2].'</TD><TD class="centrado"> '.$fila[3].' de 1,000</TD></TR>';
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
    $salida='
        <div id="interface" class="flexDisplay">
            <a role="button"onclick="actualizadiv();"><p>Actualizar</p><span class="trans7"></span> </a>
            <a role="button"onclick="salir();"><p>Salir</p><span class="trans7"></span> </a>
        </div>'.createhtml($link).'<script>
      document.getElementById("defaultOpen").click();
      </script> ';
  }
  else {
    $salida=loginhtml(true);
  }
  Close($link);
  return $salida;

}
function loginhtml($error) {
     $salida='<div id="disclaimerIndex" class="flexDisplay back_word">
    <div id="content">
      <section id="disclaimer">
        <img src="img/budlight-logo-white.svg">
        <h3>Usuario:</h3>
        <input name="username" type="text" id="username" required>
        <h3>Password:</h3>
        <input name="password" type="password" id="password" required>
        <div class="flexDisplay">
                    <a role="button"onclick="ingresar();"><p class="trans7">Login</p><span class="trans7"></span> </a>
        </div>';
        if($error)
       {
          $salida=$salida.'<span class="error">Usuario o conraseña incorrecta, vuelva a intentarlo.<span>';
       }

       $salida=$salida.'</section>
    </div>
  </div>';
  return $salida;
}

function salir()
{
   $salida=loginhtml(false);
  return $salida;
}
function createhtml($link)
{
  $registros = registrosgenerados($link);

  echo '
  <!-- Tab links -->
<div class="tab">
  <button class="tablinks" onclick="opentab(event, \'Consolidados\')" id="defaultOpen">General</button>
  <button class="tablinks" onclick="opentab(event, \'Posiciones\')">Posiciones</button>
  <button class="tablinks" onclick="opentab(event, \'Registros\')">Registros</button>
  <button class="tablinks" onclick="opentab(event, \'Cupones\')">Cupones</button>
</div>

<!-- Tab content -->
<div id="Consolidados" class="tabcontent">
  <h1>General</h1>
  <br /><br />
  <h3>Registros generados</h3>
  <h2>'.number_format($registros, 0, '.', ',').'</h2>
  <br />
  <h3>Número de veces que se ha jugado</h3>
  <h2>'.number_format(participaciones($link), 0, '.', ',') .'</h2>
  <br />
  <h3>Cupones que se han entregado</h3>
  <h2>'.number_format(cuponesentregados($link), 0, '.', ',').'</h2>
  <br />
  <h3>Mejor posición</h3>
  <h2>'.maxscoreobtenido($link).'</h2>
</div>

<div id="Posiciones" class="tabcontent">
  <h1>Posiciones</h1>
  <br />
  <table><TR><TH>#</TH><TH>Nombre</TH><TH>Usuario</TH><TH>Juegos Realizados</TH><TH>Máximo Score</TH><TH>Fecha Registro</TH><TH>Fecha Máximo Score</TH><TH>Promo Obtenida</TH><TH>Score Requerido Promo</TH><TH>Score Obtenido Promo</TH></TR>'.posicionactual($link).'</table>
</div>

<div id="Registros" class="tabcontent">
  <h1>Registros '.number_format($registros, 0, '.', ',').'</h1>
  <br />
  <table><TR><TH>Nombre</TH><TH>Usuario</TH><TH>Id Facebook</TH><TH>Fecha Registro</TH><TH>Fecha Update</TH>'.registrosdetalle($link).'</table>
</div>
<div id="Cupones" class="tabcontent">
  <h1>Cupones por promoción</h1>
  <br />
  <table><TR><TH>Cupón</TH><TH>Promoción</TH><TH>Score Requerido</TH><TH>Cupones Entregados</TH>'.cuponesdetalle($link).'</table>

</div> ';
}
?>
