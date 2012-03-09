<!doctype html>
<html>
    <head>
    
      	<title>WebRTC</title>

        <!-- Stylesheet Ressources -->
        <link rel="stylesheet" href="css/global.css">
      	<link rel="stylesheet" href="css/bootstrap.min.css">

        <!-- Call the socket.io Ressources of the server -->
      	<script src="http://localhost:8888/socket.io/socket.io.js" type="text/javascript" charset="utf-8"></script>

        <!-- JavaScript Ressources -->
      	<script src="js/jquery-1.7.1.min.js" type="text/javascript" charset="utf-8"></script>
      	<script src="js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
        <script src="js/global.js" type="text/javascript" charset="utf-8"></script>
        <script src="js/tchat.js" type="text/javascript" charset="utf-8"></script>
      	<script src="js/webrtc.js" type="text/javascript" charset="utf-8"></script>
        <script src="js/slide.js" type="text/javascript" charset="utf-8"></script>

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
                  <li><a href="https://github.com/MouMou/EWP" target="_blank">Project GitHub</a></li>
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

                <div class="span3">
                  
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

                <div class="span9">
                  
                  <!-- Carousel -->
                  <div class="row-fluid" align="center">
                    <div class="span12">
                      <div id="myCarousel" class="carousel">
                        <div class="carousel-inner">
                          <div class="active item">
                              <img src="img/carousel/diapositive1.jpg" width="450" alt="Slide 1">
                          </div>
                          <div class="item">
                              <img src="img/carousel/diapositive2.jpg" width="450" alt="Slide 2">
                          </div>
                          <div class="item">
                              <img src="img/carousel/diapositive3.jpg" width="450" alt="Slide 3">
                          </div>
                          <div class="item">
                              <img src="img/carousel/diapositive4.jpg" width="450" alt="Slide 4">
                          </div>
                          <div class="item">
                              <img src="img/carousel/diapositive5.jpg" width="450" alt="Slide 5">
                          </div>
                          <div class="item">
                              <img src="img/carousel/diapositive6.jpg" width="450" alt="Slide 6">
                          </div>
                          <div class="item">
                              <img src="img/carousel/diapositive7.jpg" width="450" alt="Slide 7">
                          </div>
                          <div class="item">
                              <img src="img/carousel/diapositive8.jpg" width="450" alt="Slide 8">
                          </div>
                          <div class="item">
                              <img src="img/carousel/diapositive9.jpg" width="450" alt="Slide 9">
                          </div>
                          <div class="item">
                              <img src="img/carousel/diapositive10.jpg" width="450" alt="Slide 10">
                          </div>
                          <div class="item">
                              <img src="img/carousel/diapositive11.jpg" width="450" alt="Slide 11">
                          </div>
                          <div class="item">
                              <img src="img/carousel/diapositive12.jpg" width="450" alt="Slide 12">
                          </div>
                          <div class="item">
                              <img src="img/carousel/diapositive13.jpg" width="450" alt="Slide 13">
                          </div>
                          <div class="item">
                              <img src="img/carousel/diapositive14.jpg" width="450" alt="Slide 14">
                          </div>
                          <div class="item">
                              <img src="img/carousel/diapositive15.jpg" width="450" alt="Slide 15">
                          </div>
                          <div class="item">
                              <img src="img/carousel/diapositive16.jpg" width="450" alt="Slide 16">
                          </div>
                          <div class="item">
                              <img src="img/carousel/diapositive17.jpg" width="450" alt="Slide 17">
                          </div>
                        </div>
                        <a id="prevSlide" class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
                        <a  id="nextSlide" class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
                      </div>
                    </div>
                  </div>
                  <!-- End of Carousel -->

                  <!-- Chat -->
                  <div class="row-fluid">
                    <div class="span12">
                        <h2 align="left">Chat</h2>
                        <div class="well">
                            <div id="tchat" class="tchat"></div>
                            <hr>
                            <form align="center" class="form-inline">
                                <input id="mess" type="text" class="input span8" autocomplete="off" placeholder="Message">
                                <button id="send" class="btn btn-primary">Send</button>
                            </form>
                        </div>
                    </div>
                  </div>
                  <!-- End of Chat -->

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