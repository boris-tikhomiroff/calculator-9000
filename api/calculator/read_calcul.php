<?php
header("Access-Control-Allow-Origin: *");

require '../config/Database.php';

$db_connection = new Database();
$conn = $db_connection->dbConnection();

$url = $_GET['test'];

$query = $conn->prepare("SELECT `operation`, `result` FROM `calcul` WHERE `uniqId` = '$url'");
$query->execute();
$result = $query->fetchAll();

echo json_encode($result);
