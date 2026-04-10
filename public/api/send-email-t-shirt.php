<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data['name'];
    $email = $data['email'];
    $mobile = $data['mobile'];
    $item = $data['item'];
    $size = ($item == 'tshirt') ? $data['size'] : 'N/A';
    $address = $data['address'];

    // Yahan apna email id dalein
    $to = "your-email@gmail.com"; 
    $subject = "New Swag Request: " . $item;

    $message = "
    <h3>New Swag Request from GIW Portal</h3>
    <p><b>Name:</b> $name</p>
    <p><b>Email:</b> $email</p>
    <p><b>Mobile:</b> $mobile</p>
    <p><b>Item:</b> " . ucfirst($item) . "</p>
    <p><b>Size:</b> $size</p>
    <p><b>Address:</b> $address</p>
    ";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: <noreply@theglobalimpactwelfarefoundation.com>' . "\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true, "message" => "Mail Sent"]);
    } else {
        echo json_encode(["success" => false, "message" => "Mail Failed"]);
    }
}
?>