<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 <link rel="stylesheet" href="css/main.css" type="text/css">
 <script src="https://code.jquery.com/jquery-latest.min.js"></script>
 <script type="text/javascript" src="js/app.js"></script>
 
</head>
<body>
<div id="general">
<label>Nombre Usuario:</label><br>
<input name="username" type="text" id="username" required>
<br><br>
<label>Password:</label><br>
<input name="password" type="password" id="password" required>
<br><br>
<input type="button" name="Submit" onclick="ingresar();" value="LOGIN">
<!-- <?php
$texto = "Hola mundo";
$codificado = base64_encode('037c@p17@l123d45hb04rd@dm1n');
$decodificado = base64_decode('TURNM1kwQndNVGRBYkRFeU0yUTBOV2hpTURSeVpFQmtiVEZ1');
echo $decodificado."<br />"; //Se muestra Hola mundo
echo $codificado; //Se muestra SG9sYSBtdW5kbw==
?> -->
</div>
<script>

$(document).ready(function () {

});
</script>
</body>
</html>