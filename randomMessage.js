const messages = [
  "Sup nerd",
  "If you laugh at 67, you have no life",
  "I like turtles",
  "My grandma bakes good cookies",
  "THE CAKE IS A LIE",
  "THE BUGS ARE IN YOUR SKIN, THE BUGS ARE IN YOUR SKIN, TEAR YOUR SKIN OFF",
  "Error: 404 Message Not Found",
  "I don't like js",
  "Unironically, dreamberd is better than js",
  "MOMMMMMAAAAAA OOOOOOOOOOOOOO, DIDN'T MEAN TO MAKE YOU CRY",
  "Why are you still on the home page?",
  "Cookie clicker lowkey slaps 🔥🔥🔥🔥",
  "i code this on a chromebook sometimes, that's how you know i am dedicated",
  "this site DOESN'T use cookies. not because i care about your privacy, but because i am too lazy to implement them",
  "my friend won't stop talking about kpop demon hunters and it's making me lose my mind",
  `https://youtu.be/hfmxO-HQ5rU?si=d6bl7zjXhTnN5pRs : Australian National Anthem`
]

const messageDisplay = document.getElementById('random-message');

function generateRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageDisplay.textContent = messages[randomIndex];
}


generateRandomMessage();