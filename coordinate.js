function coordinate(x, y) {
    this.x = x;
    this.y = y;
}

var coordinates = [];

function add_coord(x, y, arr){
	arr.push(new coordinate(x, y));
}

add_coord(1, 1, coordinates);
console.log(coordinates[0]);