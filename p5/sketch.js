var leor = 0;

var speaker = new p5.Speech();

var pitch = 1.0;

var verbose = false;

//1.) get the grindr user profiles as JSON

var profiles = [{
    "profileId" : "removed for confidentiality", //a long (can be - or +)
    "status" : 1,
    "seen" : 1466526821139,
    "displayName" : "NYC ",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 31,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466528349471,
    "displayName" : "",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 31,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466528960633,
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 26,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466528879271,
   "displayName" : "Observer",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 36,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466528162425,
    "displayName" : "\uD83C\uDDE9\uD83C\uDDF4",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 28,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466529051025,
    "displayName" : "DL",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 23,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466529299336,
    "displayName" : "Oral Discretion",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 54,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466528815087,
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 27,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466529337970,
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 34,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466527375719,
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 24,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466529325776,
    "displayName" : "\uD83D\uDE0E\uD83D\uDE0E",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 25,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466529274390,
    "displayName" : "NSFW",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 42,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466528331594,
    "displayName" : "removed for confidentiality",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 33,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466529083877,
    "displayName" : "Steph",
    "profileImageMediaHash" : "removed for confidentiality",
    "showAge" : false
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466526858858,
    "age" : 38,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466527278792,
    "displayName" : "Mostly harmless",
    "profileImageMediaHash" : "removed for confidentiality",
    "showAge" : false
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466529295831,
  "displayName" : " \uD83C\uDDEC\uD83C\uDDE7 u host",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 35,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466527528716,
    "displayName" : "VERS \uD83C\uDDEC\uD83C\uDDE7",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 35,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466527230802,
    "displayName" : "NYC4older",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 57,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466528108464,
    "displayName" : "P",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 49,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466528949984,
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 99,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466527912008,
    "displayName" : "Hosting ",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 26,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466526702639,
    "displayName" : "H",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 28,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466526361745,
    "displayName" : "SOY PASIVO",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 26,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466526600938,
    "displayName" : "DL Rican",
    "profileImageMediaHash" : "removed for confidentiality",
    "showAge" : false
  }, {
    "profileId" : 572979395,
    "status" : 1,
    "seen" : 1466527623499,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466529205202,
    "profileImageMediaHash" :  "removed for confidentiality",
    "age" : 29,
    "showAge" : true
  }, {
    "profileId" :  "removed for confidentiality",
    "status" : 1,
    "seen" : 1466529347712,
    "displayName" : ".",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 30,
    "showAge" : true
  }, {
    "profileId" :  "removed for confidentiality",
    "status" : 1,
    "seen" : 1466528599252,
    "displayName" : "\uD83C\uDFE1\uD83D\uDC68     \uD83D\uDEB6",
    "profileImageMediaHash" :  "removed for confidentiality",
    "age" : 26,
    "showAge" : true
  }, {
    "profileId":  "removed for confidentiality",
    "status" : 1,
    "seen" : 1466529336611,
    "displayName" : "Masc College",
    "profileImageMediaHash" :  "removed for confidentiality",
    "age" : 23,
    "showAge" : true
  }, {
    "profileId" :  "removed for confidentiality",
    "status" : 1,
    "seen" : 1466526984048,
    "displayName" : "Brazguy",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 33,
    "showAge" : true
  }, {
    "profileId" :  "removed for confidentiality",
    "status" : 1,
    "seen" : 1466528057116,
    "displayName" : "Top",
    "profileImageMediaHash" :  "removed for confidentiality",
    "age" : 25,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466529270394,
    "displayName" : "ZL",
    "profileImageMediaHash" :  "removed for confidentiality",
    "age" : 25,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466529024129,
    "displayName" : "Str8 ",
    "profileImageMediaHash" :  "removed for confidentiality",
    "age" : 27,
    "showAge" : true
  }, {
    "profileId" :  "removed for confidentiality",
    "status" : 1,
    "seen" : 1466527345988,
    "displayName" : "Good \uD83C\uDF46\uD83C\uDF51 vibes",
    "profileImageMediaHash" :  "removed for confidentiality",
    "age" : 44,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466529312371,
    "displayName" : "\uD83C\uDF46",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 35,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466527449781,
    "displayName" : "\uD83D\uDE80",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 30,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466528544631,
    "displayName" : "CantgetwutIwant",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 52,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466527907299,
    "displayName" : "Friends",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 28,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466526718944,
    "displayName" : "M",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 38,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466529338016,
    "displayName" : "Chill'n  Here\uD83D\uDCCD",
    "profileImageMediaHash" : "removed for confidentiality",
    "showAge" : false
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466529178611,
    "displayName" : "\uD83D\uDE08\uD83D\uDE08\uD83D\uDE08",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 25,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466527750339,
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 34,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466527576629,
    "displayName" : "Chantar",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 29,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466528521629,
    "displayName" : "\uD83D\uDE01\uD83D\uDE0F\uD83D\uDC45",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 21,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466528637542,
    "displayName" : "JO/Wrkout Buddy",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 26,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466527089033,
    "displayName" : "Vs",
    "profileImageMediaHash" : "removed for confidentiality",

"age" : 27,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466529335554,
    "displayName" : "...",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 33,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466527783688,
    "displayName" : " NYC",
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 25,
    "showAge" : true
  }, {
    "profileId" : "removed for confidentiality",
    "status" : 1,
    "seen" : 1466527994160,
    "profileImageMediaHash" : "removed for confidentiality",
    "age" : 32,
    "showAge" : true
  } ];

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

var tribes = [];
for (var i = 0; i < 13; i++){
  tribes[i] = 0;
}

function setup() {
  frameRate(0.5);
  //createCanvas(window.innerWidth,window.innerHeight, WEBGL);
}

// function windowResized() {
//   createCanvas(window.innerWidth,window.innerHeight, WEBGL);
// }

/*
  goes through the input array, profiles, one at a time.
*/
function draw() {
  //background(0);
  if (cur >= profiles.length) {
    // we're at the end of the input file!
    if (verbose) console.log("cur >= profiles.length!");
    noLoop();
    fadeOut();
  }
  else {
    // we have more stuff to go!
    if (verbose) console.log("in else clause!");
    // start/update sound
    if (verbose) console.log(tribes);
    for (var i = 0; i < tribes.length; i++) { // update the situation for each key
      if (verbose) console.log("at "+i+"in for loop");
      controlKeys(i);
    }
    // increment tribe values based on current profile!
    var profile = profiles[cur];
    if (profile['displayName'] !== undefined){
      speaker.setPitch(pitch);
      speaker.speak(profile['displayName']);
    }
    var seen = profile['seen'];
    tribes[ leor % 13] += (time - seen) / (100000 * 60); //currently makes users who were last online least recently the longest
    leor = leor +1;
    // cool! move onto the next profile!
    cur++;
  }
}

function controlKeys(t) {
  if (t === null || typeof t === "undefined") {
    t = 0;
  }
  if (typeof oscillators[t] !== "undefined" && tribes[t] > 0) {
    oscillators[t].amp(1, decay);
    tribes[t]--;
    if (verbose) console.log("amped");
  } else {
    if (typeof oscillators[t] === "undefined") {
      if (verbose) console.log("setting oscillator: "+t);
      oscillators[t] = new p5.Oscillator();
      oscillators[t].setType('sine');
      oscillators[t].amp(0);
      oscillators[t].start();
      oscillators[t].freq(tones[t]);
    } else {
      if (verbose) console.log("keeping oscillator "+t+" quiet.");
      oscillators[t].amp(0, decay);
    }
  }
}


function fadeOut() {
  for (var i = 0; i < oscillators.length; i++) {
    if (tribes[i] > 1) {
      oscillators[i].amp(0, tribes[i]);
    }
    else{
      oscillators[i].amp(0, 2);
    }
  }
  console.log("done!");
}