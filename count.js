(function(){

	function updateCount(){
		var charCount = 0;
		var wordCount = 0;
		var elCountMsg = document.getElementById('count-msg');
		var elComment = document.getElementById('comment');
		var comment = elComment.value;
		var countMsg = "";

		charCount = elComment.value.length;

		//To count words, first trim the comment and remove all newlines chars, then split
		var wordList = elComment.value.trim().replace(/\n/g," ").split(" ");

		//Count if not an empty string
		for (var i = 0; i < wordList.length; i++) {
			if (wordList[i] !== "") {
				wordCount += 1;
			}
		};

		countMsg = "Characters: " + charCount + ", Words: " + wordCount;
		elCountMsg.innerHTML = countMsg;

	}

var elComment = document.getElementById('comment');
elComment.onkeyup = updateCount;

})();