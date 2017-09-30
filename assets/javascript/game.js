<script>
$(document).ready(function(){
	var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  	for (var i = 0; i < letters.length; i++) {

        var letterBtn = $("<button>");
        letterBtn.addClass("letter-button letter letter-button-color");
        letterBtn.attr("data-letter", letters[i]);
        letterBtn.text(letters[i]);
        $("#buttons").append(letterBtn);

      }
      $(".letter-button").on("click", function() {

        var fridgeMagnet = $("<div>");
        fridgeMagnet.addClass("letter fridge-color");
        fridgeMagnet.text($(this).attr("data-letter"));
        $("#display").append(fridgeMagnet);

      });

      $("#clear").on("click", function() {
        $("#display").empty();
      });

	var words = ["JAYHAWKS", "BASKETBALL", "ROCKCHALK", "NAISMITH"];
		var word = words[Math.floor(Math.random()*words.length)];
	var answerArray = ["_","_","_","_","_","_","_","_"];
		for (var i=0; i<word.length;i++) {
			answerArray[i]="_";
		}
		var remainingLetters = word.length;
			while (remainingLetters > 0) {
				// Game code goes here
				document.write(answerArray.join(" "));

				for (var j=0; j<word.length; j++) {
					if (word[j] === guess) {
						answerArray[j] = guess;
						remainingLetters--;
					}
				}
			}
    });
}
