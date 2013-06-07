window.dotCount = {
	"m" : 74,
	"u" : 44,
	"l" : 19,
	"t" : 26,
	"n" : 44,
	"s" : 52
};
window.Dotted = {
	addDotsToChar: function(letter, colorOrder, customClass) {
		colorOrder = typeof colorOrder !== 'undefined' ? colorOrder : "primary";
		customClass = typeof customClass !== 'undefined' ? customClass : "";
		var charElement = $("<div class='char'></div>");
		var charClone = charElement.clone();
		charClone.addClass(letter).addClass(colorOrder).addClass(customClass);
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
	writeDottedMultunusLogo();
	bindBulletAnimation();
});
function writeDottedMultunusLogo() {
	Dotted.addDotsToChar("m");
	Dotted.addDotsToChar("u", "primary", "first");
	Dotted.addDotsToChar("l");
	Dotted.addDotsToChar("t");
	Dotted.addDotsToChar("u", "secondary", "second");
	Dotted.addDotsToChar("n");
	Dotted.addDotsToChar("u", "secondary", "third");
	Dotted.addDotsToChar("s", "secondary");
}
function bindBulletAnimation() {
	$(".start-bullets").click(function(){
		var self = this;
		$(".dotted").addClass("inactive");
		setTimeout(function(){
			startAnimation($(self));
		}, 900);

	});
}
function startAnimation(element){
	$(element).removeClass('show').addClass('hide');
	$(".dotted").removeClass("inactive");
	setTimeout(function(){
		$(element).text("PLAY AGAIN").removeClass('hide').addClass('show');
	}, 8000);
}