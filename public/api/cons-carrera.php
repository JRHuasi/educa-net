<?php 
	// session_cache_limiter('nocache');
	// header('Expires: ' . gmdate('r', 0));
	
	header('Content-type: application/json');
	extract($_POST);
	
	$to = "uaa.tucconcepcion@ufasta.edu.ar";
	// $to = "julianra@gmail.com";
	
	$subject = "Pedido de información - {$curso} - EDUCANET";
	
	//envio de datos a la base de datos
	// $cadena = "INSERT INTO correos SET
	// 	nombre = '$nombre', 	
	// 	email = '$email', 
	// 	telefono = '$phone', 
	// 	asunto = '$subject', 
	// 	mensaje = '$message' ";
	// $mysqli->query($cadena);
	$from = 'From: ' . $nombre .' <' . $email . '>' . "\r\n";

	$fields = array(
		0 => array(
			'text' => 'Nombre',
			'val' => $nombre
		),
		1 => array(
			'text' => 'Apellido',
			'val' => $apellido
		),
		2 => array(
			'text' => 'Email',
			'val' => $email
		),
		3 => array(
			'text' => 'Celular',
			'val' => $codCelular." ".$celular
		),
		4 => array(
			'text' => 'Localidad',
			'val' => $localidad
		),
		5 => array(
			'text' => 'Provincia',
			'val' => $provincia
		),
		6 => array(
			'text' => 'Curso',
			'val' => $curso
		),
		7 => array(
			'text' => 'Consulta',
			'val' => $consulta
		)
	);

	$message = "";

	foreach($fields as $field) {
		$message .= $field['text'].": " . htmlspecialchars($field['val'], ENT_QUOTES) . "<br>\n<br>\n";
	}

	$headers = '';
	$headers .= $from;
	$headers .= "Reply-To: " .  $to . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

	ini_set('sendmail_from','consultas@educa.net.ar');

	if($_SERVER['DOCUMENT_ROOT']!="F:/Usuarios/Julian/www"){
		if(mail($to, $subject, $message, $headers)){
			print json_encode("Tu mensaje fue enviado exitosamente");
		}else{
			print json_encode("Ha ocurrido un error en el envío");		
		}
	}else{
		print json_encode("Your message was delivered successfully, as soon as posible we'll contact you.<br>Thank you");
	}
?>

