//Old:
//$('content').prepend('<link href="http://fonts.googleapis.com/css?family=Ubuntu" rel='stylesheet' type='text/css'>');
WebFontConfig = {
	google: { families: [ 'Ubuntu::latin' ] }
};
(function() {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
})();
