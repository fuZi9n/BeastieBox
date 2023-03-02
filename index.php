<?php
// Start the session
session_start();

// Check if the user is already logged in, redirect to dashboard if true
if (isset($_SESSION['username'])) {
  header("location: dashboard.php");
  exit();
}

// Check if the login form has been submitted
if (isset($_POST['login'])) {
  // Get the username and password from the form
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Check if the username and password are correct
  // In this example, we are using hardcoded values for the username and password
  if ($username == 'test' && $password == 'test') {
    // Set the session variable
    $_SESSION['username'] = $username;

    // Redirect to the dashboard
    header("location: index.html");
    exit();
  } else {
    // If the username and password are not correct, show an error message
    $error = "Invalid username or password";
  }
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    input[type=text], input[type=password] {
      padding: 10px;
      margin: 10px 0;
      border: none;
      border-radius: 5px;
      background-color: #f2f2f2;
    }
    input[type=submit] {
      padding: 10px 20px;
      margin-top: 10px;
      border: none;
      border-radius: 5px;
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
    }
    .error {
      color: red;
      font-weight: bold;
      margin: 10px 0;
    }
  </style>
</head>
<body>

<h2>Login</h2>

<?php
// If an error message exists, show it
if (isset($error)) {
  echo '<p class="error">' . $error . '</p>';
}
?>

<form method="post">
  <label for="username">Username:</label><br>
  <input type="text" id="username" name="username"><br>

  <label for="password">Password:</label><br>
  <input type="password" id="password" name="password"><br>

  <input type="submit" name="login" value="Login">
</form>

</body>
</html>