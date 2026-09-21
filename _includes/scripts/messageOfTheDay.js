const messages = [
  "Tell your momma you love her! <3",
  "Tell your dad you love him! <3",
  "Christ loves you!",
  "R.I.P. Akira Toriyama",
  "my internet is the bane of my existence",
  "I *love* playing spy (in tf2)!!!",
  "R.I.P. MF DOOM",
  "R.I.P. Donda West",
  "iPhones suck, I'm sorry it's just true",
  `"I can rhyme orange with banana... ornana!" - Marshall Mathers`,
  "404 - message not found ):",
  "No one actually reads these, do they?",
  "I ran outta messages",
  "straight outta ideas",
  "where (and why) are you people finding these diabolical discord gifs",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "billie jean is not my lover / she's just a girl, who claims i am the one",
  "",
  "this is some CRAZY thundering outside rn",
  "I know what kind of man you are.",
  "once i licked an outlet",
  "segmentation fault (core dumped)",
  "it was working fine yesterday, i changed nothing",
  `"Software is like sex: it's better when it's free." - Linus Torvalds`
]

const element = document.getElementById("random-message");

let message = messages[Math.floor(Math.random() * messages.length)];

element.textContent = message;
