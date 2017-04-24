/************************** The Godfather Script **********************************************/ 
var number = document.querySelector('.userInput');
var btn = document.querySelector('.button');
btn.addEventListener("click", corleone);

function corleone()	{
	
	var display = "";

	var donQuotes = [
		"I'm gonna make him an offer he can't refuse.  - Don Corleone",
		"No Sicilian can refuse any request on his daughter's wedding day.  - Tom Hagen",
		"Leave the gun. Take the cannoli.  - Peter Clemenza",
		"Fredo, you're my big brother, and I love you. But don't ever take sides against the family again. Ever.  - Michael Corleone",
		"It's a Sicilian message. It means Luca Basi sleeps with the fishes.  - Peter Clemenza",
		"My father is no different than any other powerful man, any man who's responsible for other people, like a senator or president.  - Michael Corleone",
		"Some day, and that day may never come, I will call upon you to do a service for me. But until that day, accept this justice as a gift on my daughter's wedding day.  - Don Corleone",
		"Don Corleone, I am honored and grateful that you have invited me to your home on the wedding day of your daughter. May their first child be a masculine child.  - Luca Brasi",
		"Just when I thought I was out, they pull me back in.  - Michael Corleone",
		"Finance is a gun. Politics is knowing when to pull the trigger.  - Don Lucchesi",
		"In today's world, the power to absolve debt is greater than the power of forgiveness.  - Archbishop Gilday",
		"Your enemies always get strong on what you leave behind.  - Don Tommasino",
		"I spent my life protecting my son. I spent my life protecting my FAMILY!  - Michael Corleone",
		"All my life I was trying to get up in society...where everything is legal, but the higher I go the more crooked it becomes.  - Michael Corleone",
		"What do you think that happenned when they put me in a room with Joey Zasa? I bit the guy's ear off!  - Vincent Mancini"

	];

	var count = number.value > donQuotes.length ? donQuotes.length : number.value;


	for(var i = 0; i < count; i++)	{
		
		var random = Math.floor(Math.random() * donQuotes.length);
			display += donQuotes[random] + '<br><br>';
		}	
			document.querySelector('#godfatherQuotes').innerHTML = display;

}


