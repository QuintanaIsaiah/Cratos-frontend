<?php
    header("Access-Control_Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: POST");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-Width");
    
    //Cogemos el archivo JSON que nos envian del formulario, lo decodificamos y lo guardamos en una variable data
    //Imprimimos todo el contenido que nos llega del input (mirar en la consola:network:insertar.php    ahi se ven todos los movimientos de ida y de vuelta)
        //print_r(file_get_contents('php://input'));

    //Guardamos en una variable el contenido decodificado (parseado) de JSON a Objeto
    $inputRecibido = json_decode(file_get_contents('php://input'));
        //print_r($inputRecibido);
    $nombre = $inputRecibido->nombre;   //Guardamos en una variable nombre el objeto inputrecibido -> nombreForm
        //print_r($nombre);                   //Hacemos print_r para ver en consola los datos guardados en esta variable
    $correo = $inputRecibido->correo;    //Guardamos en una variable nombre el objeto inputrecibido -> emailForm
        //print_r($correo);                   //Hacemos print_r para ver en consola los datos guardados en esta variable (console/network/insertar[el nombre del archivo php local])
    $edad = $inputRecibido->edad;
        //print_r($edad);
    $contrasenya = $inputRecibido->contrasenya;
        //print_r($contrasenya);

    $method = $_SERVER["REQUEST_METHOD"];   //Guardamos en una variable un array de todas las peticiones (Method) que se han hecho.(Esto lo hacemos porue sino se crean usuarios en blanco si se actualiza la pagina, de esta manera nos aseguramos de que solo cuando haya una peticion post ejecute el insert)
    switch($method){                        //Con el switch le decimos que si en ese array hay una petición "POST" haga los siguiente:
        case "POST":
    
        //Importamos el datos.php    
        include("datos.php");

        //Guardamos en una variable ña conexion a la BD
        $conexion = $GLOBALS["conexion"];

        $consulta = 'INSERT INTO Usuarios(nombre,correo,edad,contrasenya)VALUES("'.$nombre.'","'.$correo.'",'.$edad.',"'.$contrasenya.'");';  //Guardamos en una variable la consulta
        $result = mysqli_query($conexion,$consulta);                                            //Ejecutamos la consulta mediante query
            print_r($result);
                                //printamos lo que queremo devolver al cliente (1) de que la sentencia mysql se ha efectuado correctamente
    }    
?>