// @AUTHOR      : Luca Leon Happel
// @DATE        : 2020-04-06
// @DESCRIPTION : get URL Variables, similar to PHP's $_GET
export get = (url=location.href) => Object.fromEntries(
	location.href
		.split('?')[1]
		.split('&')
		.map(e => e.split('='))
	)
