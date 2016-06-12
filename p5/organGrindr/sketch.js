//1.) get the grindr user profiles as JSON

var profiles = 

//2.) p5 script to play the profiles

var d = new Date();
var time = d.getTime();

var oscillators = [];

var decay = 1;

var cur = 0;

var tones = {
  1: 130.813, //format is (tribe : hertz value) for each valid char key.
  2: 138.591,
  3: 146.832,
  4: 155.563,
  5: 164.814,
  6: 174.614,
  7: 184.997,
  8: 195.998,
  9: 207.652,
  10: 220.000,
  11: 233.082,
  12: 246.942,
  0: 261.626
}

var tribes = {
  0: 0, // increased by data input, decreased by 
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0
}

function setup() {
  frameRate(2);
}

/*
  goes through the input array, profiles, one at a time.
*/
function draw() {
  
  if (cur > profiles.length) {
    // we're at the end of the input file!
    noLoop();
    fadeOut();
  }
  
  else {
    // we have more stuff to go!
    

    // start/update sound
    for (var i = 0; i < tribes.length; i++) { // update the situation for each key
      controlKeys(i);
    }

    // increment tribe values based on current profile!
    var profile = profiles[cur];
    var seen = profile[seen];
    if ()
    tribe += time - seen; //currently makes users who were last online least recently the longest

  

    // cool! move onto the next profile!
    cur++;
  }
}

function controlKeys(t) {
  if (t === null || typeof t === "undefined") {
    t = 0;
  }
  if (tribes[t] > 0) {
    oscillators[t].amp(tribes[t], decay);
    tribes[t]--;
  } else {
    if (typeof oscillators[t] === "undefined") {
      oscillators[t] = new p5.Oscillator();
      oscillators[t].setType('sine');
      oscillators[t].amp(0);
      oscillators[t].start();
      oscillators[t].freq(tones[t]);
    } else {
      oscillators[t].amp(0, decay);
    }
  }
}

function fadeOut() {
  for (int i = 0; i < oscillators.length; i++) {
    if (tribes[t] > 1) {
      oscillators[t].amp(0, tribes[t]);
    } else {
      oscillators[t].amp(0, 2);
    }
  }
}