(function(){

	function updateCount(){
		var charCount = 0;
		var wordCount = 0;
		var elCountMsg = document.getElementById('count-msg');
		var elComment = document.getElementById('comment');
		var comment = elComment.value;
		var countMsg = "";

		charCount = elComment.value.length;

		if(charCount > 0) {
			wordCount = elComment.value.split(" ").length;
		}

		countMsg = "Characters: " + charCount + ", Words: " + wordCount;
		elCountMsg.innerHTML = countMsg;

	}

var elComment = document.getElementById('comment');
elComment.onkeyup = updateCount;

})();