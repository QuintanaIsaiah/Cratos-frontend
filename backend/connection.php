<?php
    $server = "localhost";
    $user = "root";
    $pass = "";
    $db_name = "usuarios";

    //Conectamos con el servidor
    $conexion = mysqli_connect($server,$user,$pass);

    //Conectamos con la base de datos
    $consulta = 'USE '.$db_name.';';
    $result = mysqli_query($conexion,$consulta);
        //echo($result);

    //Creamos la tabla Usuarios si no existe
    $consulta = 'CREATE TABLE IF NOT EXISTS Usuarios(
        id int primary key auto_increment,
        nombre varchar(255),
        correo varchar(255),
        edad int,
        contrasenya varchar(255)
    );';
    $result = mysqli_query($conexion,$consulta);
        //echo($result);
?>