<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];
    
    $destinatario = "elwilli175@gmail.com";
    $asunto = "Nuevo mensaje de contacto";
    
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo: $email\n";
    $contenido .= "Mensaje:\n$mensaje\n";
    
    $headers = "From: $email";

    if (mail($destinatario, $asunto, $contenido, $headers)) {
        header("Location: gracias.html");
    } else {
        echo "Hubo un error al enviar el mensaje.";
    }
}
?>