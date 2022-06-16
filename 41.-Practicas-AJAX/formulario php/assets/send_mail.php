<?php
    if (isset ($_POST)) {
        /* error_reporting no envia errores de php  */
        error_reporting(0);

        $name = $_POST['nombre'];
        $email = $_POST['email'];
        $subject = $_POST['asunto'];
        $comments = $_POST['comentarios'];

        $domain = $_SERVER['HTTP_HOST'];
        $subject_mail = "Contacto desde el formulario".$domain;
        $to = "f4casanovarosasraziel@gmail.com";
        $message = "
            <p>Datos enviados desde el sitio $domain</p>
            <ul>
                <li>Nombre : $name</li>
                <li>Email : $email</li>
                <li>Asunto : $subject</li>
                <li>Comentarios : $comments</li>
            </ul>
            ";
        $headers = "MIME-Version : 1.0\r\n"."Content-Type: text/html; charset=utf8\r\n"."From : Envío Automático No Responder <no-reply@$domain>";


        $send_mail = mail($to, $subject_mail, $message, $headers);

        if ($send_mail) {
            $respuesta = array('error' => false, 'message' => "Tus datos han sido enviados");
        }else{
            $respuesta = array('error' => true, 'message' => "Error al enviar los datos");   
        }
        // header("Access-Control-Allow-Origin : *");
        header("Access-Control-Allow-Origin : dominio");
        header("Content-Type: application/json");
        echo json_encode($respuesta);
    }
?>