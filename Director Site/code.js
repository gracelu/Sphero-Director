var coord = []

function enter_coordinate()
{
    var text_box = document.getElementById('type_box');

    var results_box = document.getElementById('output');
    var text = text_box.value;
    coord.push('(' + text + ')');
    var message = "Coordinates: \n"; //+ text;

    message += coord; //text + "\n";
    console.log(coord);
    results_box.innerHTML = message;

    document.getElementById('type_box').value = "";
}
