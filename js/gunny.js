/**************************** Full Metal Jacket Script ****************************************/
var number = document.querySelector('.userInput');
var btn = document.querySelector('.button');
btn.addEventListener("click", gunny);



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
