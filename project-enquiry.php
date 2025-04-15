<?php

// Step 1: Sanitize and validate input
$name = htmlspecialchars(trim($_POST['name']));
$company = isset($_POST['company']) ? htmlspecialchars(trim($_POST['company'])) : 'Not Provided';
$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$enquiry = strip_tags(trim($_POST['form-project-enquiry']));

 // Validate required fields
 if (empty($name) || empty($email) || empty($enquiry)) {
    die("Please fill in all required fields.");
}

 // Step 3: Email details
 $to = "bprin87@gmail.com";
 $subject = "New Enquiry from $name";
 $headers = "From: benprince.co.uk\r\n";
 $headers .= "Reply-To: $email\r\n";
 $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  // Email body
  $message = "You have received a new website enquiry via benprince.co.uk.\n\n";
  $message .= "Name: $name\n\n";
  $message .= "Company: $company\n\n";
  $message .= "Email Address: $email\n\n";
  $message .= "Enquiry: $enquiry\n";

  // Step 4: Attempt to send the email
  if (mail($to, $subject, $message, $headers)) {
    // Redirect to the thank-you page
    header("Location: email.html");
    exit;
  } else {
    // Redirect back to the form with an error message
    header("Location: contact.html?error=There was an error sending your enquiry. Please try again later.");
    exit;
}

?>