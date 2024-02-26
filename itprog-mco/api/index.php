<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

    include("DBConnect.php");
    $conn = new DbConnect();
    $db = $conn->connect();

    $method = $_SERVER['REQUEST_METHOD'];
    switch($method) {
        case 'GET':
            $sql = "SELECT * FROM item";
            $stmt = $db->prepare($sql);
            $stmt->execute();
            $item = $stmt->fetchAll(PDO::FETCH_ASSOC);        
            echo json_encode($item);
            break;
    }

?>