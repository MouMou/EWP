<!doctype html>
<html>
<head>
	<title>WebRTC</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<script src="http://10.24.68.11:8888/socket.io/socket.io.js" type="text/javascript" charset="utf-8"></script>
	<script src="js/jquery-1.7.1.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="js/webrtc.js" type="text/javascript" charset="utf-8"></script>
  
</head>
<body>
	<div class="navbar navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container-fluid">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href="#">WebRTC Sample</a>
          <div class="nav-collapse">
            <ul class="nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <p class="navbar-text pull-right">Logged in as <a href="#">username</a></p>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>
    <div class="container">

      <!-- Header -->
      <div class="hero-unit">
        <p>This is a demo for testing WebRTC in a LAN between two clients with WebRTC support.</p>
      </div>

      <!-- Main Core -->
      <div class="row">
        <div class="span6">
          <h2>Local</h2>
          <video width="100%" height="100%" id="localVideo" autoplay="autoplay" onclick="onClick()" 
          		style="opacity: 0;
				-webkit-transition-property: opacity;
				-webkit-transition-duration: 2s;">
        </div>
        <div class="span6">
          <h2>Remote</h2>
          <video width="100%" height="100%" id="remoteVideo" autoplay="autoplay"
				style="opacity: 0; 
				-webkit-transition-property: opacity;
				-webkit-transition-duration: 2s;">

    </video>

       </div>
      </div>

      <hr>

      <footer>
        <p>&copy; Atos Worldline 2012</p>
        <div id="footer">    
  		</div>
      </footer>

    </div> <!-- /container -->
</body>
</html>