/************************** The Godfather Script **********************************************/ 
var number = document.querySelector('.userInput');
var btn = document.querySelector('.button');
btn.addEventListener("click", corleone);
btn.addEventListener("click", gunny);
btn.addEventListener("click", joshua);



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


function gunny()	{

	var display = "";

	var gunnyTalk = [
		"I am Gunnery Sergeant Hartman, your senior drill instructor. From now on you will speak only when spoken to, and the first and the last words out of your filthy sewers will be 'Sir'. Do you maggots understand that? - Gunnery Sergeant Hartman",
		"Do you think I'm cute, Private Pyle? Do you think I'm funny? - Gunnery Sergeant Hartman",
 		"I wanted to see exotic Vietnam... the crown jewel of Southeast Asia. I wanted to meet interesting and stimulating people of an ancient culture... and kill them.  - Private Joker",
 		"Sir, it is the private's duty to inform the senior drill instructor that Private Pyle has a full magazine that is locked and loaded, Sir! - Private Joker",
 		"I am... in a world... of shit! - Private Gomer Pyle",
 		"We're the Lust Hog Squad. We're life takers and heartbreakers. We shoot 'em full of holes and fill 'em full of lead. - Private Cowboy",
 		"Now you might not believe it, but under fire Animal Mother is one of the... finest human beings in the world. All he needs is somebody to throw hand grenades at him the rest of his life. - Private Eightball",
 		"Come on, Pyle! Pull! Pull! You mean to tell me you can't do one single pull up Pyle? You are a worthless piece of shit, Pyle! Get outta my face! - Gunnery Sergeant Hartman",
 		"Reveille! Reveille! Reveille! Drop your Cocks and grab your socks! Today is Sunday! Divine worship is at 0800. Get your bunks made and get your uniforms on! Police call will commence in two minutes! - Gunnery Sergeant Hartman",
 		"What's your name, scumbag? - Gunnery Sergeant Hartman",
 		"Sir, the private's sixth general order is to receive, obey, and pass on to the sentry who relieves me... all orders - Sir, the private's sixth general order - Sir, the private has been instructed, but he does not know, sir!  - Private Joker",
 		"These are great days we're living, bros. We are jolly green giants, walking the Earth with guns. These people we wasted here today are the finest human beings we will ever know. After we rotate back to the world, we're gonna miss not having anyone around that's worth shooting.  - Crazy Earl",
 		"What do I think about the U.S. involvement in the war? I think we should win it.  - Animal Mother",
 		"You Goddamn communist heathen, you had best sound off that you love the Virgin Mary, or I'm gonna stomp your guts out! Now you DO love the Virgin Mary, don't ya?  - Gunnery Sergeant Hartman",
 		"Private Pyle, if there is one thing in this world that I hate, it is an unlocked footlocker! You know that don't you?   - Gunnery Sergeant Hartman"
 		];

var count = number.value > gunnyTalk.length ? gunnyTalk.length : number.value;

for(var i = 0; i < count; i++)	{
		
		var random = Math.floor(Math.random() * gunnyTalk.length);
			display += gunnyTalk[random] + '<br><br>';
		}	
			document.querySelector('#gunnyQuotes').innerHTML = display;

}


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


