function randomDemand() {
  var text = '';
  switch(rand(0,3)) {
    case 0:
      text = 'fear';
      break;
    case 1:
      text = 'taste';
      break;
    case 2:
      text = 'love';
      break;
    case 3:
      text = 'drink';
      break;
  }
  return text;
}

function randomPronoun() {
  switch(rand(0,4)) {
    case 0:
      text = 'you should';
      break;
    case 1:
      text = 'he will';
      break;
    case 2:
      text = 'she can';
      break;
    case 3:
      text = 'I will';
      break;
    case 4:
      text = 'They won\'t';
      break;
  }
  return text;
}

function randomNoun() {
  switch(rand(0,15)) {
    case 0:
      text = 'toaster';
      break;
    case 1:
      text = 'government';
      break;
    case 2:
      text = 'B-12 Bomber';
      break;
    case 3:
      text = 'dragons';
      break;
    case 4:
      text = 'angels';
      break;
    case 5:
      text = 'feline';
      break;
    case 6:
      text = 'poop';
      break;
    case 7:
      text = 'babies';
      break;
    case 8:
      text = 'cholera';
      break;
    case 9:
      text = 'ham';
      break;
    case 10:
      text = 'corn';
      break;
    case 11:
      text = 'children';
      break;
    case 12:
      text = 'devil';
      break;
    case 13:
      text = 'grain';
      break;
    case 14:
      text = 'hour';
      break;
    case 15:
      text = 'trials';
      break;
  }
  return text;
}

function randomSaying() {
  var text = '';
  switch(rand(0, 4)) {
    case 0:
      text = 'Salvation is ';
      break;
    case 1:
      text = 'Hope is ';
      break;
    case 2:
      text = 'Victory is ';
      break;
    case 3:
      text = 'Life is ';
      break;
    case 4:
      text = 'The end is ';
      break;
  }
  switch(rand(0,4)) {
    case 0:
      text += 'nigh';
      break;
    case 1:
      text += 'ours';
      break;
    case 2:
      text += 'folly';
      break;
    case 3:
      text += 'death';
      break;
    case 4:
      text += 'coming';
      break;
    case 5:
      text += 'now';
      break;
  }
  return text;
}

function generateDrunkenBabble() {
  var saying = randomSaying();
  return randomPronoun() + ' ' + randomDemand() + ' the <b>' + randomNoun() + '!</b> ' + saying + '! <b><i>' + saying + '!!</i></b>';
}

function Point(x, y, id) {
  this.x = x;
  this.y = y;
  this.id = id;
}

function getPointDistance(point1, point2) {
  return Math.hypot(point2.x-point1.x, point2.y-point1.y);
}

function getNearestCoordinates(array, point) {
  var firstDistance = getPointDistance(point, array[0]);
  var closest = array[0];
  for (var i=1; i < array.length; i++) {
    var dist = getPointDistance(point, array[i]);
    if (dist < firstDistance) {
      firstDistance = dist;
      closest = array[i];
    }
  }
  return closest;
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ucwords(str) {
  str = str.toLowerCase();
  return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
  	function(s){
  	  return s.toUpperCase();
	});
}

function generatePedestrianJeer() {
  var text = '';
  var random = rand(0, 4);
  switch(random) {
    case 0:
      text = 'Get a fuckin job.';
      break;
    case 1:
      text = 'You sicken me.';
      break;
    case 2:
      text = 'Beat it, rummy.';
      break;
    case 3:
      text = 'Look at this crazy sack of shit.';
      break;
    case 4:
      text = 'Get out of my way.';
      break;
  }
  return text;
}

function generatePedestrianSympathy() {
  var text = '';
  var random = rand(0, 3);
  switch(random) {
    case 0:
      text = 'Oh you poor man.';
      break;
    case 1:
      text = 'Here, pal, take this.';
      break;
    case 2:
      text = 'Here. Get something to eat, okay?';
      break;
    case 3:
      text = 'That\'s terrible, I\'m sorry.';
      break;
  }
  return text;
}