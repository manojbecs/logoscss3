window.dotCount = {
	"m" : 74,
	"u" : 44,
	"l" : 19,
	"t" : 26,
	"n" : 44,
	"s" : 52
};
window.Dotted = {
	addDotsToChar: function(letter, colorOrder) {
		colorOrder = typeof colorOrder !== 'undefined' ? colorOrder : "primary";
		var charElement = $("<div class='char'></div>");
		var charClone = charElement.clone();
		charClone.addClass(letter).addClass(colorOrder);
		$(".dotted").append(charClone);
		console.log("append letter: "+letter);
		var dot = $("<div class='dot'></div>");
		for(var index = 1; index < window.dotCount[letter]; index++) {
			var dotClone = dot.clone();
			dotClone.addClass("c"+index);
			$(".dotted .char."+letter).append(dotClone);
		}



	}
};

$(document).ready(function(){
	Dotted.addDotsToChar("m");
	Dotted.addDotsToChar("u");
	Dotted.addDotsToChar("l");
	Dotted.addDotsToChar("t");
	Dotted.addDotsToChar("u", "secondary");
	Dotted.addDotsToChar("n");
	Dotted.addDotsToChar("u", "secondary");
	Dotted.addDotsToChar("s", "secondary");
});