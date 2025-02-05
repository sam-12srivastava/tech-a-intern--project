 <?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_GET['Name'];
    $email = $_POST['Email'];
    $phoneno=$_POST['Subject'];
    $message = $_POST['Message'];
    
    $to = "samriddhisrivastava788@gmail.com"; // Enter your email address here
    $subject = "New message from Portfolio Contact Form";
    $body = "Name: $name\nEmail: $email\nPhone no:$phoneno\nMessage: $message";
    
    // Send email
    if (mail($to, $subject,$body)) {
        echo "Thank you for your message!";
    } else {
        echo "Oops! Something went wrong.";
    }
}



// $to = "samriddhisrivastava788@gmail.com"; // Enter your email address here
// $subject = "Test Email";
// $body = "This is a test email to check if email sending is working correctly.";
// $headers = "From:sk75043@gmail.com\r\n"; // Enter a sender email address here

// // Send email
// if (mail($to, $subject, $body, $headers)) {
//     echo "Test email sent successfully!";
// } else {
//     echo "Failed to send test email.";
// }



// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     // Sanitize input data to prevent injection attacks
//     $name = isset($_POST['Name']) ? htmlspecialchars($_POST['Name']) : '';
//     $email = isset($_POST['Email']) ? filter_var($_POST['Email'], FILTER_SANITIZE_EMAIL) : '';
//     $phoneno = isset($_POST['Subject']) ? htmlspecialchars($_POST['Subject']) : '';
//     $message = isset($_POST['Message']) ? htmlspecialchars($_POST['Message']) : '';
    
//     // Validate email
//     if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
//         echo "Invalid email format!";
//         exit; // Stop further execution
//     }
    
//     // Email setup
//     $to = "samriddhisrivastava788@gmail.com"; // Enter your email address here
//     $subject = "New message from Portfolio Contact Form";
//     $body = "Name: $name\nEmail: $email\nPhone no: $phoneno\nMessage: $message";
//     $headers = "From: $email"; // Add a 'From' header to indicate sender's email
    
//     // Send email
//     if (mail($to, $subject, $body, $headers)) {
//         echo "Thank you for your message!";
//     } else {
//         echo "Oops! Something went wrong.";
//     }
// }

?>