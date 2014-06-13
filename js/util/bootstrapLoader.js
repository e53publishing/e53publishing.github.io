function bootstrapLoader(pagePath) {
	$(document).ready(function() {
		var bodyMargin = $('body').css('margin');
		if (bodyMargin === '0px') {
			//console.log('body margin: ' + bodyMargin);
			console.log('BootstrapCDN CSS load Successful');
		} else {
			//console.log('body margin: ' + bodyMargin);
			//console.log('Function Arg: ' + typeof(pagePath));
			console.log('BootstrapCDN CSS load Failed; Switching to fallback');
			if (typeof(pagePath) === "string") {
				$('head').append('<link rel="stylesheet" type="text/css" href="' + pagePath + 'bower_components/bootstrap/dist/css/bootstrap.min.css" />');
				$('head').append('<link rel="stylesheet" type="text/css" href="' + pagePath + 'bower_components/bootstrap/dist/css/bootstrap-theme.min.css" />');
			} else {
				$('head').append('<link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.min.css" />');
				$('head').append('<link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap-theme.min.css" />');
			}
		}
		var bootstrap_loaded = (typeof $().modal == 'function');
		if (bootstrap_loaded === true) {
			if (typeof(pagePath) === "string") {
				$('body').append('<script src="' + pagePath + 'bower_components/bootstrap/dist/js/bootstrap.min.js"><\/script>');
			} else {
				$('body').append('<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"><\/script>');
			}
		}
	});
}
