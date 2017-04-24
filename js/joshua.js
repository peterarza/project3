/******************************** WarGames Script *********************************************/
var number = document.querySelector('.userInput');
var btn = document.querySelector('.button');
btn.addEventListener("click", joshua);



function joshua()	{

	var display = "";

	var wopr = [
		 "Greetings Professor Falken. - Joshua",
 		 "A strange game. The only winning move is not to play. How about a nice game of chess? - Joshua",
 		 "The whole point was to find a way to practice nuclear war without destroying ourselves. To get the computers to learn from mistakes we couldn't afford to make. Except, I never could get Joshua to learn the most important lesson. Futility. That there's a time when you should just give up. - Professor Steven Falken",
		 "Let's play Global Thermonuclear War. - David Lightman",
		 "General, the machine has locked us out. It's sending random numbers to the silos. - McKittrick",
 		 "Mr. McKittrick, after very careful consideration, sir, I've come to the conclusion that your new defense system sucks. - General Beringer",
 		 "I wish I didn't know about any of this! I wish I was like everybody else in the world, and tomorrow it would just be over. There wouldn't be any time to be sorry... about anything. - David Lightman",
 		 "You are a hard man to reach. Could not find you in Seattle and no terminal is in operation at your classified address. - Joshua",
		 "General, do you really believe that the enemy would attack without provocation, using so many missiles, bombers, and subs so that we would have no choice but to totally annihilate them? - Professor Steven Falken",
		 "What you see on these screens up here is a fantasy; a computer enhanced hallucination! - Professor Steven Falken",
		 "General, you are listening to a machine. Do the world a favor and don't act like one.  - Professor Steven Falken",
		 "Shall we play a game?  -  Joshua",
		 "Goddammit, I'd piss on a spark plug if I thought it'd do any good!  - General Beringer",
		 "Mister Potato Head! MISTER POTATO HEAD!! Back doors are not secrets!  - Jim Sting",
		 "Sir, the WOPR indicates initial impact points as the 43rd Bomb Wing at Loring, the 319th at Grand Forks, and Alaskan Air Command headquarters at Elmendorf.  - Major Lem"
	];

var count = number.value > wopr.length ? wopr.length : number.value;

for(var i = 0; i < count; i++)	{
		
		var random = Math.floor(Math.random() * wopr.length);
			display += wopr[random] + '<br><br>';
		}	
			document.querySelector('#wargamesQuotes').innerHTML = display;

}
