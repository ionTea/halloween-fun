var scale = 10;	// capture resolution over motion resolution
var isActivated = false;
var newMotion = true;
var videoVisible = false;

let sounds = ["happy-halloween", 
			  "no", 
			  "godzilla", 
			  "horse", 
			  "wheres-mommy",
			  "make_america_great",
			  "be-gone",
			  "laugh",
			  "leave-now",
			  "leave-now-2",
			  "who-is-knocking",
			  "who-is-knocking-2",
			  "who-is-knocking-3",
			  "bored_with_winning"];

function initSuccess() {
	DiffCamEngine.start();
}

function setAction(s) {
	document.getElementById("action").innerHTML = s;
}

function initError() {
	alert('Something went wrong.');
}

function startComplete() {
    isActivated = true;
	setAction("Activated")
}


function capture(payload) {
	if (!newMotion ||!payload.hasMotion) {
		return;
	}

    setAction("new motion");

    if (newMotion) {
        newMotion = false;
		let s = getSound();
		setAction("playing: " + s);
        play(s);
        setTimeout(() => {
			newMotion = true;
			setAction("timeout done, watching")
		}, 8000)
    }
}

function play(audioId) {
	document.getElementById(audioId).play();
    // $('#audio-' + audioId)[0].play();
}

function getSound() {
  min = Math.ceil(0);
  max = Math.floor(sounds.length);
  return sounds[Math.floor(Math.random() * (max - min)) + min];
}

DiffCamEngine.init({
	video: document.getElementById('video'),
	captureIntervalTime: 50,
	initSuccessCallback: initSuccess,
	initErrorCallback: initError,
	startCompleteCallback: startComplete,
	captureCallback: capture,
	pixelDiffThreshold: 16,
	scoreThreshold: 8
});

function toggleVideo() {
	if (videoVisible) {
		document.getElementById('video').style.display = "none";
	} else {
		document.getElementById('video').style.display = "block";
	}
	videoVisible = !videoVisible;
}

console.log("log pls");