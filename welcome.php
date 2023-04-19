<?php
	// Initialize session
	session_start();

	if (!isset($_SESSION['loggedin']) && $_SESSION['loggedin'] !== false) {
		header('location: login.php');
		exit;
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
	<title>BeastieBox Feed & Watch</title>
	<link href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/cosmo/bootstrap.min.css" rel="stylesheet" integrity="sha384-qdQEsAI45WFCO5QwXBelBe1rR9Nwiss4rGEqiszC+9olH1ScrLrMQr1KmDR964uZ" crossorigin="anonymous">
	<style>
        .wrapper{ 
        	width: 500px; 
        	padding: 20px; 
        }
        .wrapper h2 {text-align: center}
        .wrapper form .form-group span {color: red;}

		.ribbon {
   		position: relative;
   		top: -16px;
   		right: -706px;
		}
	</style>
</head>
<body>
	<main>
		<section class="container wrapper">
			<div class="page-header">
			<h2 class="display-5">Welcome back <?php echo $_SESSION['username']; ?></h2>
			</div>
			<a href="password_reset.php" class="btn btn-block btn-outline-warning">Reset Password</a>
			<a href="logout.php" class="btn btn-block btn-outline-danger">Sign Out</a>
		</section>
	</main>

    <div class="container">
      
		<div class="box">
        	<h3>Feed</h3>
        	<button type="button" class="btn btn-outline-primary">Feed your animal</button>
		</div>
	
		<div class="box">        
        	<h3>Live Camera</h3>
        	<p>Video of monke coming soon</p>
    	</div>

    	<div class="box">
        	<h3>Tracking</h3>
    		<p>Does Something</p>
    	</div>

		<div class="box">
        	<h3>Heartbeat Sensor</h3>
    		<p>yes</p>
    	</div>
    </div>

</body>
</html>