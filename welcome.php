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
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="Styles/main.css">
</head>

<body>
    <nav class="navbar">
        <div class="container">
            <div id="darkModeToggle" class="dark-mode-toggle">
                <div class="circle"></div>
            </div>
            <span class="navbar-brand mx-auto">BeastieBox</span>

            <!--HAMBURGER menu-->
            <div class="hamburger-menu">
                <button id="hamburger-button" class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <!--<span class="navbar-toggler-icon"></span>-->
                    <span class="line first"></span>
                    <span class="line second"></span>
                    <span class="line third"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a id="plugins" class="nav-link" href="plugins.php">Plugins</a>
                        </li>
                        <li class="nav-item">
                            <!--############-->
                            <!--############-->
                            <!--######subscription.php NOT IMPLENTED!######-->
                            <!--############-->
                            <!--############-->
                            <a id="subscription" class="nav-link" href="subscription.php">Subscription</a>
                        </li>
                        <li class="nav-item">
                            <a id="reset-password" class="nav-link" href="password_reset.php">Reset Password</a>
                        </li>
                        <li class="nav-item">
                            <a id="signout" class="nav-link" href="logout.php">Sign out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <header class="container">
        <h3 class="welcome"> Welcome
            <?php echo $_SESSION['username']; ?>!
        </h3>
    </header>

    <main>
        <div class="container">
            <div class="row equal-height">
                <div class="col-md-6 mb-30">
                    <div class="box mb-4 full-height">
                        <h3>Heartbeat Sensors</h3>
                        <div id="sensorContainer" class="sensor-container"></div>
                    </div>
                </div>
                <div class="col-md-6 mb-30">
                    <div class="box full-height">
                        <h3>Feed</h3>
                        <div class="center-vertically">
                            <div class="chart-container" style="position: relative; height: 200px;">
                                <canvas id="foodChart"></canvas>
                            </div>
                            <div class="centerFeeding">
                                <div class="buttonContainer">
                                    <button id="feedingBtn">Feeding time!</button>
                                    <div class="gearsContainer">
                                        <img src="Images/gear.png" id="feedingBigGear" class="hidden" alt="big gear">
                                        <img src="Images/gear.png" id="feedingSmallGear" class="hidden"
                                            alt="small gear">
                                    </div>
                                </div>

                                <div class="buttonContainer">
                                    <button id="waterBtn">Water time!</button>
                                    <div class="gearsContainer">
                                        <img src="Images/gear.png" id="waterBigGear" class="hidden" alt="big gear">
                                        <img src="Images/gear.png" id="waterSmallGear" class="hidden" alt="small gear">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <h3>Live Camera</h3>
                        <p>Live feed from your camera: (Living Room 1)</p>
                        <video id="liveCamera" controls autoplay loop muted>
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