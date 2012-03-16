# Prototype WebRTC

This project is developed by Clément Mouret and Luc Tribolet during an internship at Atos Worldline.

This prototype is only available for Chrome/Chromium with WebRTC support.
This web application allows you to video chat with someone else by sharing a single link.
There is an embedded chat. But for the moment the chat is using the signalling server for the message transport.
As we can't send any other data than video and voice with WebRTC, the presentation is just a set of images in a carousel which the actions next and prev are shared trhough the signalling server.


## Requirements

You have to install 

- node.js (socket.IO is directly provided with the sources)
- a HTTP server
- Chrome or Chromium (please use the latest version of Chrome/Chromium Dev or Chrome Canary)

## Installation

1. Get the sources
2. Move them in your www directory
3. Change the server address in index.php and webrtc.js if needed
4. Launch index.js in nodejs_server with "node /path/to/your/www/nodejs_server/index.js"
5. Open the page http://yourserver/
6. Then share the link given to your partner
7. Enjoy

# Credits

This project use the differents following projects :

- jQuery
- Bootstrap Twitter

And it's been inspired directly from this application : https://apprtc.appspot.com/