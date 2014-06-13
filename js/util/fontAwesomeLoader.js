function fontAwesomeLoader(pagePath) {
	$(document).ready(function () {
		var faDisplay = $('.fa').css('display');
		if (faDisplay === 'inline-block') {
			// console.log('fa display: ' + faDisplay);
			console.log('BootstrapCDN Font Awesome load Successful');
		} else {
			// console.log('fa display: ' + faDisplay);
			// console.log('Function Arg: ' + typeof(pagePath));
			console.log('BootstrapCDN Font Awesome load Failed; Switching to fallback');
			if (typeof(pagePath) === "string") {
				$("head").append('<link rel="stylesheet" type="text/css" href="' + pagePath + 'bower_components/fontawesome/css/font-awesome.min.css" />');
			} else {
				$("head").append('<link rel="stylesheet" type="text/css" href="bower_components/fontawesome/css/font-awesome.min.css" />');
			}
		}
	});
}