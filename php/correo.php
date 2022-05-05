
<?php

	$destino = "matias.1993.romero@gmail.com" ;//"19tattoostudiolbck@gmail.com";

	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$asunto =  "Consulta por tatoo";
	$wp = $_POST['whatsapp'];
	$li = $_POST['linkimg'];
	$mensaje = $_POST['mensaje'];

	$header = "Este mensaje proviene de la pagina http://www.facundotaborda.com.ar/ \n De: " . $nombre . "\n E-mail: " . $email . "\n WhatsApp: " . $wp . "\n Link de imagen: " . $li;

	mail($destino, $asunto, $mensaje, $header);

	echo "<script>alert('Su correo a sido enviado con exito');</script>";
	echo "<script>setTimeout(location.href = \"../\",1000)</script>";

?>