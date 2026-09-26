const messages = [
  "Tell your momma you love her! <3",
  "Tell your dad you love him! <3",
  "Christ loves you!",
  "R.I.P. Akira Toriyama",
  "my internet is the bane of my existence",
  "R.I.P. MF DOOM",
  "R.I.P. Donda West",
  "iPhones suck, I'm sorry it's just true",
  `"I can rhyme orange with banana... ornana!" - Marshall Mathers`,
  "404 - message not found ):",
  "No one actually reads these, do they?",
  "I ran outta messages",
  "where (and why) are you people finding these diabolical discord gifs",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "billie jean is not my lover / she's just a girl, who claims i am the one",
  "",
  "I know what kind of man you are.",
  "segmentation fault (core dumped)",
  "it was working fine yesterday, i changed nothing",
  `"Software is like sex: it's better when it's free." - Linus Torvalds`,
  `R.I.P. Scott, we miss ya! Wish I coulda said goodbye one more time, but I guess there's no point in getting sad about it.
  Besides, you're in a better place now.`
]

const element = document.getElementById("random-message");

let message = messages[Math.floor(Math.random() * messages.length)];

element.textContent = message;
