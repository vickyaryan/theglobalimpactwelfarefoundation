<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$servername = "localhost";
$username = "u552898027_vicky"; // Apna DB User daalein
$password = "Vd5|nqH1D";   // Apna DB Password daalein
$dbname = "u552898027_counter";     // Apna DB Name daalein

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(['error' => "Connection failed"]));
}

// 1. Visit count badhayein
$conn->query("UPDATE visitor_stats SET visit_count = visit_count + 1 WHERE id = 1");

// 2. Latest count fetch karein
$result = $conn->query("SELECT visit_count FROM visitor_stats WHERE id = 1");
$row = $result->fetch_assoc();

echo json_encode(['count' => $row['visit_count']]);

$conn->close();
?>