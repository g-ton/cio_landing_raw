<?php
$remitente = $_POST['email'];
$destinatario = 'juarezdanilo557@gmail.com'; 
$asunto = 'Mensaje enviado desde Basalcapital.mx';
if (!$_POST){
?>
<?php
}else{
    $cuerpo = "Nombre: " . $_POST["nombre"] . "\r\n";
	$cuerpo .= "Teléfono: " . $_POST["tel"] . "\r\n";
    $cuerpo .= "Email: " . $_POST["email"] . "\r\n";
	$cuerpo .= "Estado/Ciuad: " . $_POST["estado"] . "\r\n";
	$cuerpo .= "Empresa: " . $_POST["empresa"] . "\r\n";
	$cuerpo .= "C.P.: " . $_POST["cp"] . "\r\n";
	$cuerpo .= "Mensaje: " . $_POST["mensaje"] . "\r\n";

    $headers  = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/plain; charset=utf-8\n";
    $headers .= "X-Priority: 3\n";
    $headers .= "X-MSMail-Priority: Normal\n";
    $headers .= "X-Mailer: php\n";
    $headers .= "From: \"".$_POST['nombre']."\" <".$remitente.">\n";

    $mail= mail($destinatario, $asunto, $cuerpo, $headers);
    if($mail)
    {
    	echo "Mensaje enviado";
    }
    else{
    	echo $mail;
    }
}
?>
