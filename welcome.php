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
	<link href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/cosmo/bootstrap.min.css" rel="stylesheet"
		integrity="sha384-qdQEsAI45WFCO5QwXBelBe1rR9Nwiss4rGEqiszC+9olH1ScrLrMQr1KmDR964uZ" crossorigin="anonymous">
		<link rel="stylesheet" href="Styles/main.css">
</head>

<body>
    <header class="container">
        <h2 class="display-5 text-center">Welcome back
            <?php echo $_SESSION['username']; ?>
        </h2>
        <div class="text-center mb-4">
            <a href="password_reset.php" class="btn btn-outline-warning">Reset Password</a>
            <a href="logout.php" class="btn btn-outline-danger">Sign Out</a>
        </div>
    </header>

    <div id="darkModeToggle" class="dark-mode-toggle">
        <div class="circle"></div>
    </div>

    <main>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="box mb-4">
                        <h3>Heartbeat Sensor</h3>
                        <p>yes</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="box">
                        <h3>Feed</h3>
                        <div class="centerFeeding">
                            <button id="feedingBtn">Feed your animal</button>
                            <div id="gearsContainer">
                                <img src="Images/gear.png" id="bigGear" class="hidden" alt="big gear">
                                <img src="Images/gear.png" id="smallGear" class="hidden" alt="small gear">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <h3>Live Camera</h3>
                        <p>Video of monke coming soon</p>
                        <video id="liveCamera" controls loop muted>
                            <source src="Videos/Dogs.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <h3>Tracking</h3>
                        <p>This is the current location of your pet</p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7599.498421511662!2d11.78619609021041!3d55.42899236355266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465291dc59296cb1%3A0x8d7ff03e471a3f91!2sZBC%20Ringsted!5e1!3m2!1sen!2sdk!4v1681974783613!5m2!1sen!2sdk"
                            width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer>
        <div class="container">
            <center>
                <p>&copy; 2023 BeastieBox</p>
            </center>
        </div>
    </footer>

    <script src="Scripts/main.js"></script>
</body>
</html>
</html>