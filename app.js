var scale = 10;	// capture resolution over motion resolution
var isActivated = false;
var newMotion = true;

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

function initError() {
	alert('Something went wrong.');
}

function startComplete() {
    isActivated = true;
	console.log("Activated")
}


function capture(payload) {
	if (!newMotion ||!payload.hasMotion) {
		return;
	}

    console.log("new motion");

    if (newMotion) {
        newMotion = false;
        play(getSound());
        setTimeout(() => {
			newMotion = true;
			console.log("timeout done")
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
	captureIntervalTime: 50,
	initSuccessCallback: initSuccess,
	initErrorCallback: initError,
	startCompleteCallback: startComplete,
	captureCallback: capture
});

console.log("log pls");