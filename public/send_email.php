<?php
// CORS Headers (React se request allow karne ke liye)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit; // Preflight request handle karne ke liye
}

// React se aane wala data read karein
$formData = json_decode(file_get_contents("php://input"), true);

if ($formData) {
    $name = strip_tags($formData['name']);
    $subject1 = strip_tags($formData['subject']);
    $email = filter_var($formData['email'], FILTER_SANITIZE_EMAIL);
    $message = strip_tags($formData['message']);

    // Email details
    $to = "info@theglobalimpactwelfarefoundation.com"; 
    $subject = "New Inquiry from Website - " . $name;
    
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "subject: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Headers
    $headers = "From: info@theglobalimpactwelfarefoundation.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Mail send karein
    if (mail($to, $subject, $email_content, $headers)) {
        echo json_encode(["status" => "success", "message" => "Email sent successfully!"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Server mail failure."]);
    }
} else {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid data."]);
}
?>