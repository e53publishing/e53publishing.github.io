$(document).ready(function() {
	console.log('page loaded');

	function SelectText(element) {
		var doc = document  ,
		text = doc.getElementById(element)  ,
		range, selection ; 
		if (doc.body.createTextRange) {  
			range = document.body.createTextRange();  
			range.moveToElementText(text);  
			range.select(); 
		} else if (window.getSelection) {  
			selection = window.getSelection();  
			range = document.createRange();  
			range.selectNodeContents(text);  
			selection.removeAllRanges();  
			selection.addRange(range); 
		}
	}

	$('#e53-email').mouseover(function() {
		SelectText('e53-email');
	});
});
