const messages = [
  "Tell your momma you love her! <3",
  "Tell your dad you love him! <3",
  "Christ loves you!",
  "R.I.P. Akira Toriyama",
  "my internet is the bane of my existence",
  "I *love* playing spy (in tf2)!!!",
  "R.I.P. MF DOOM",
  "R.I.P. Donda West",
  "If you are a little uninspired, take a break",
  "iPhones suck, I'm sorry it's just true",
  "Is this the real life? Is this just fantasy?",
  `"What if you put fudge in ramen?" - my fascinating step-brother`,
  `"I can rhyme orange with banana... ornana!" - Marshall Mathers`,
  "404 - message not found ):",
  "No one actually reads these, do they?",
  "I ran outta messages",
  "straight outta ideas",
  "what happens if you put salt on Ice Cube?",
  "where (and why) are you people finding these diabolical discord gifs",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "billie jean is not my lover / she's just a girl, who claims i am the one",
  "",
  "i want to put a rap quote here but i dont know how many i can put before i have to start censoring em",
  "this is some CRAZY thundering outside rn",
  "I know what kind of man you are.",
  `email me "hippity hoppity" and ill respond with absolutely nothing!`,
  "once i licked an outlet",
  `How about I quote "The Story of O.J."? That's a good song... nevermind`,
  "algebra class is rough rn",
  "segmentation fault (core dumped)",
  "it was working fine yesterday, i changed nothing",
  
]

const element = document.getElementById("random-message");

let message = messages[Math.floor(Math.random() * messages.length)];

element.textContent = "Message of the day: " + message;
