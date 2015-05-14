
var defaultgrid = function() {

		for(var i = 1; i < 257; i++) {
		$("<div class='defsquares'></div>").appendTo("#container")
	}

		$(".defsquares").outerWidth(1024 / 16)
		$(".defsquares").outerHeight(1024 / 16)

		$(".defsquares").mouseenter( function() {
		$(this).addClass("red")

	})
};



var changeToBlue = function() {
		$(".defsquares").css("background-color", "white")
		$(".defsquares").mouseenter( function() {
			$(this).css("background-color", "blue")
		})
};

var changeToGreen = function() {
		$(".defsquares").css("background-color", "white")
		$(".defsquares").mouseenter( function() {
			$(this).css("background-color", "green")
		})
};


var resetRed = function() {
		$(".defsquares").css("background-color", "white")
		$(".defsquares").mouseenter( function() {
			$(this).css("background-color", "red")
		})
};


var newGrid = function() {
	
	$(".defsquares").remove()

	var cellsNum = window.prompt
	("How many cells do you want\nto have in a row?(Max. 40)")

	if(cellsNum >= 1 && cellsNum < 41) {

		for(var i = 1; i <= cellsNum * cellsNum; i++) {
		$("<div class='defsquares'></div>").appendTo("#container");
			}
		
		$(".defsquares").outerWidth(1024 / cellsNum)
		$(".defsquares").outerHeight(1024 / cellsNum)

		$(".defsquares").mouseenter( function() {
		$(this).addClass("red")
		})

	}

	else if (cellsNum > 40) {
		alert("Sorry, that's too many cells!")
	}

};


$(document).ready(function() {

	defaultgrid();

	$("#blueButton").click( function() {
		changeToBlue();
	})
		
	$("#greenButton").click( function() {
		changeToGreen();
	})

	$("#resetRed").click( function() {
		resetRed();
	})

	$("#resGrid").click ( function() {
		newGrid();
	})

	});









// valahogy azt kéne elérni, hogy egy adott konténeren belül, adott
// pixelszámon belül akárhány négyzetből áll rácsot tudjunk generálni,
// gombnyomásra.