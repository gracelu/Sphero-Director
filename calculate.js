function distance(x1, y1, x2, y2){
	//console.log(x1);
	s = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
	console.log(s);

}

//distance(1, 1, 2, 2);

/*

orb.connect(function() {
  // roll orb in a random direction, changing direction every second
  setInterval(function() {
    var direction = Math.floor(Math.random() * 360);
    orb.roll(150, direction);
  }, 1000);
});

*/

/*function roll_time(x1, y1, x2, y2, speed){

}*/

function roll_distance(x1, y1, x2, y2, speed){
	d = distance(x1, y1, x2, y2);
	time = d/speed;
	direction = Math.toDegrees(Math.atan2(y2-y1, x2-x1));

	setInterval(function() {
    	orb.roll(speed, direction);
  	}, time);
  	
}