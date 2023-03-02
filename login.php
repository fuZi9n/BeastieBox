<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
</head>
<body>
    <h2>Login</h2>
    <?php
        if(isset($_POST['submit'])) {
            $username = $_POST['username'];
            $password = $_POST['password'];
            if($username == "myusername" && $password == "mypassword") {
                header("Location: index.html");
                exit();
            } else {
                echo "Invalid username or password.";
            }
        }
    ?>
    <form method="post" action="">
        <label>Username:</label><br>
        <input type="text" name="username"><br>
        <label>Password:</label><br>
        <input type="password" name="password"><br><br>
        <input type="submit" name="submit" value="Login">
    </form>
</body>
</html>