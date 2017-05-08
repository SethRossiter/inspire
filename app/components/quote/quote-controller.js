function QuoteController() {

	var qs = new QuoteService()

	this.getQuote = function getQuote() {
		qs.getQuote(draw)
	}

	function draw(quote) {
		
		var template =
			`
			<h2>${quote.quote}</h2>
			<h2>${quote.author.hover}</h2>
			
			
			`
		document.getElementById("quote").innerHTML = template
	}

	this.getQuote()
}