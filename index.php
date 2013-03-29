<!doctype html>
<html>
    <head>

        <title>WebRTC</title>

        <!-- Stylesheet Ressources -->
        <link rel="stylesheet" href="css/global.css">
        <link rel="stylesheet" href="css/bootstrap.min.css">

        <!-- JavaScript Ressources -->
        <script src="js/jquery-1.7.1.min.js" type="text/javascript" charset="utf-8"></script>
        <script src="js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
        <script src="js/global.js" type="text/javascript" charset="utf-8"></script>
        <script src="js/adapt.js" type="text/javascript" charset="utf-8"></script>
        <script src="js/webrtc.js" type="text/javascript" charset="utf-8"></script>


    </head>

    <body>

        <!-- Modal Connection -->
        <div class="modal hide fade" id="ModalConnection">

            <div class="modal-header">
              <h3>WebRTC Sample Connection</h3>
            </div>

            <div class="modal-body">
              <div class="control-group">
                <label>Nickname :</label>
                <input id="nickname" type="text" class="span2">
                <span class="help-inline hide">Not empty !</span>
              </div>
            </div>

            <div class="modal-footer">
            <button id="loginSub" class="btn btn-primary">Login</button>
            </div>

        </div>
        <!-- End of the Modal Connection -->

        <!-- Modal About -->
        <div class="modal hide fade" id="ModalAbout">

            <div class="modal-header">
              <h3>About WebRTC</h3>
            </div>

            <div class="modal-body">
              <blockquote>
                <p align="justify">WebRTC is an open source project that allows web browsers to communicate with one another using the protocol Real-Time Communications (RTC) via a simple Javascript API. WebRTC components were optimized to better serve this purpose.</p>
                <p align="justify">WebRTC initiative is a project supported primarily by Google, Mozilla and Opera.</p>
                <small class="pull-right">Project WebRTC</small>
              </blockquote>
            </div>

            <div class="modal-footer">
            <button id="close" class="btn btn-primary">Close</button>
            <a class="btn btn-small btn-info" target="_blank" href="http://www.webrtc.org/">
            <i class="icon-info-sign icon-white"></i>More Info</a>
            </div>

        </div>
        <!-- End of the Modal About -->

        <!-- Navbar -->
        <div class="navbar navbar-fixed-top">
          <div class="navbar-inner">
            <div class="container-fluid">
              <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </a>
              <a class="brand" href="./index.php">WebRTC Sample</a>
              <div class="nav-collapse">
                <ul class="nav">
                  <li class="active"><a href="./index.php">Home</a></li>
                  <li><a href="https://github.com/ltribolet/webrtc-example" target="_blank">Project GitHub</a></li>
                  <li><a href="http://wiki.tribolet.fr/" target="_blank">Wiki</a></li>
                  <li><span id="about" class="about">About webRTC</span></li>
                </ul>
                <p class="navbar-text pull-right">Logged in as <a id="username" href="#">username</a></p>
              </div>
            </div>
          </div>
        </div>
        <!-- End of the Navbar -->

        <!-- Content -->
        <div class="container-fluid">

            <!-- Introduction -->
            <div class="hero-unit">
              <p>This is a demo for testing WebRTC in a LAN between two clients with WebRTC support.</p>
            </div>
            <!-- End of Introduction -->

            <div class="row-fluid">

                <div class="span6">
                  <!-- Local Video -->
                  <div class="row-fluid">
                    <div style="position: relative;" class="span12">
                      <h2 align="left">Local</h2>
                      <span id="locallive" class="live hide">LIVE</span>
                      <video width="100%" height="100%" id="localVideo" autoplay="autoplay"
                      style="opacity: 0;
                      -webkit-transition-property: opacity;
                      -webkit-transition-duration: 2s;">
                      </video>
                    </div>
                  </div>
                  <!-- End of Local Video -->
                </div>
                <div class="span6">
                  <!-- Remote Video -->
                  <div class="row-fluid">
                    <div style="position: relative;" class="span12">
                      <h2 align="left">Remote</h2>
                      <span id="remotelive" class="live hide">LIVE</span>
                      <video width="100%" height="100%" id="remoteVideo" autoplay="autoplay"
                      style="opacity: 0;
                      -webkit-transition-property: opacity;
                      -webkit-transition-duration: 2s;">
                      </video>
                    </div>
                  </div>
                  <!-- End of Remote Video -->
                </div>

            </div>

            <!-- Statut of the visio call -->
            <div id="footer"></div>

            <hr>

            <!-- Footer -->
            <footer><p>&copy; Atos Worldline 2012</p></footer>

        </div>
        <!-- End of the Content -->

    </body>
</html>
