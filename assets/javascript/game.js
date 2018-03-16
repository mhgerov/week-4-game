//Declare Game class
function Game() {

	//generate inital properties
	this.targetScore = Math.floor(Math.random()*102+19);
	this.currentScore = 0;
	for (var i=1;i<=4;i++) {
		this['crystal'+i] = Math.floor(Math.random()*12+1);
	}

	//method constructors for game modification
	this.over = function () {
		if (this.currentScore>this.targetScore) {
			return 'loss';
		}
		else if (this.currentScore == this.targetScore) {
			return 'win';
		}
		else {
			return false;
		}
	}

	this.add = function (crystal) {
			this.currentScore+=this[crystal];
	}
}

//Initialize variables
var obj = new Game();
var wins = 0;
var losses = 0;

$(document).ready(function () {
	update();	
	$("button[id*='crystal']").click(function() {
		obj.add($(this).attr('id'));
		if(obj.over()) {
			if(obj.over() == 'win') {
				wins++;
			}
			else {
				losses++;
			}
			obj = new Game();
		}
		update();

	});
});

function update() {
	$('#wins').text(wins);
	$('#losses').text(losses);
	$('#targetScore').text(obj.targetScore);
	$('#currentScore').text(obj.currentScore);
}
