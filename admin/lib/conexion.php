<?php

class foo_mysqli extends mysqli {
    public function __construct($host, $usuario, $contraseña, $bd) {
        parent::init();

        if (!parent::options(MYSQLI_INIT_COMMAND, 'SET AUTOCOMMIT = 0')) {
            die('Falló la configuración de MYSQLI_INIT_COMMAND');
        }

        if (!parent::options(MYSQLI_OPT_CONNECT_TIMEOUT, 5)) {
            die('Falló la configuración de MYSQLI_OPT_CONNECT_TIMEOUT');
        }

        if (!parent::real_connect($host, $usuario, $contraseña, $bd)) {
            die('Error de conexión (' . mysqli_connect_errno() . ') '
                    . mysqli_connect_error());
        }
    }
}
function connect()
{
  // PRODUCCION
  $hostname_conexion = "gamer64.com";
  $database_conexion = "gamer65_budlight";
  $username_conexion = "gamer65_budlight";
  $password_conexion = "eh9d+Cxf(3K0";
  $link  = new foo_mysqli($hostname_conexion, $username_conexion, $password_conexion, $database_conexion);
  mysqli_set_charset ($link , 'utf8' );
  mysqli_query($link, 'SET time_zone = "-05:00";');
  return $link;
}
function Close($link)
{
	mysqli_close($link);
}
?>
