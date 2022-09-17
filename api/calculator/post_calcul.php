<?php
header("Access-Control-Allow-Origin: *");

require '../config/Database.php';

function response($success, $status, $message, $extra = [])
{
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message
    ], $extra);
}

$db_connection = new Database();
$conn = $db_connection->dbConnection();

$returnData = [''];

// GOOD
$content = trim(file_get_contents("php://input"));
$data = json_decode($content, true);

// var_dump($data['result']);

// $queryInsert = $conn->prepare("INSERT INTO `calcul`(`operation`, `result`) VALUES (:operation, :result)");
// $queryInsert->execute(array(
//     ":operation" => $data['inProgress'],
//     ":result" => $data['result'],
// ));

if (!empty($data) || isset($data)) {
    $queryInsert = $conn->prepare("INSERT INTO `calcul`(`uniqId`,`operation`, `result`) VALUES (:uniqId, :operation, :result)");
    $queryInsert->execute(array(
        ":uniqId" => $data['uniqId'],
        ":operation" => $data['inProgress'],
        ":result" => $data['result'],
    ));
    $returnData = response(1, 200, 'Backup sucess');
} else {
    $returnData = response(0, 422, 'Backup failed');
}


echo json_encode($returnData);
