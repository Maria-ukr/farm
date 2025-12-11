import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();


const playButton = document.getElementById("play-pause");
const video = document.getElementById("video");
function togglePlay() {
  if (video.paused) video.play();
  else video.pause();
}
video.addEventListener("click", togglePlay);
playButton.addEventListener("click", togglePlay);

video.addEventListener("play", () => {
  playButton.style.opacity = 0;
});

video.addEventListener("pause", () => {
  playButton.style.opacity = 1;
});