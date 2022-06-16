<?php

    if (isset($_FILES['file'])) {
    	// var_dump($_FILES);

    	$name = $_FILES['file']['name'];
    	$file = $_FILES['file']['tmp_name'];
    	$error = $_FILES['file']['error'];
    	$destination = "../files/".$name;
    	$upload = move_uploaded_file($file, $destination);

    	if ($upload) {
    		$resultado = array(
    			'err' => false , 
    			'status' => http_response_code(200),
    			'statusText' => "Archivo" .$name."subido",
    			'files' => $_FILES['file']
    			);
    	}else{
    		    		$resultado = array(
    			'err' => true , 
    			'status' => http_response_code(400),
    			'statusText' => "Error al subir el archivo".$name,
    			'files' => $_FILES['file']
    			);
    	}

    	echo json_encode($resultado);
    }