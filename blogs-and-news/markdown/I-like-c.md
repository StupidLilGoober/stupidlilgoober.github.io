# My Opinion on C thus far
10/5/2025

So far, I have enjoyed the C programming language.
I have been learning it for ~1 month, and it has
genuinely been far less hard than I thought, so
let me talk about my experiences with the language.

Or don't. It's a free country after all, so do
whatever you want.

So for a little background, I actually tried learning
the C++ language first (big mistake). In my opinion,
it is actually worse than C (from what I know thus far).

My main reason for this is it's weird syntax. To print
something in C++ goes like this:

```
std::cout << "this language sucks balls" << std::endl;
```

This (again, in my opinion) sucks ASS. There is no reason
for it to not have the usual ```print()``` function, yet
for some reason it doesn't. Except it does, because why
not I guess.

And that's why I don't like C++. It's just weird. Anyways,
I like C for a few reasons. Namely, these ones:

* More control over what the computer does
* Relatively simple syntax
* No "clutter"

So, I might as well talk about those.

## More control over what the computer does
The main way C gives more control over what the computer
does is by literally just telling you. For instance,
in JavaScript, you can do this:

```
let example = "hi mom";
example = 1;
```

This is, for some reason, entirely allowed. No conversion,
nothing. It just runs. The issue I have with this is, although
it is useful, it feels like black magic. A number is not a word,
that's just not how it works.

Meanwhile in C, you have to **explicitly** tell the C compiler
to convert the variable into the desired format.

```
char str[] = "12345";
int num = atoi(str);
return num; // returns 12345
```

Although there is still a lot that happens under the hood, this is
far more clear on what actually happens.

## Relatively simple syntax
Despite the examples above are written in seperate languages, it is still
clear what they do. Most JavaScript devs would understand the C example,
and most C devs would understand the JavaScript.

I would even bet that a Scratch developer (sort of) understands what's going
on in the C example.

This is because of C's simple syntax. There are no overly complicated yet
useless datatypes (why have many types of strings when you can have an
array of characters, Rust?), no OOP clutter, it's just straight to the point.

And, if you need to use more complex types (such as vectors), you can make
it yourself using the ```typedef``` keyword. Here is an example from a game
I am working on.

```
typedef struct matrixStruct {
  float scale;
  int cellSize;
  int width;
  int height;
  int cell[800][600];
  processPtr Process; // speaking of typedef, processPtr is also it's own custom type
} matrix;
```

> For context, it is being used for a falling sand sim

That way, if you *absolutely* need a more complex type, or some kind of class
to encapsulate functionality, you can just create it yourself, and it's fairly
simple as you saw above.

## No "clutter"
In a language like C++ or Python, the language fixes problems by just adding new
features.

Need a dynamic array? Vectors got your back.

Need a class? Classes got your back.

Need literally anything? Your language of choice almost certainly has your back.

C takes a different approach. If you want your own data type or structure, just
**create it yourself**. Now, this might seem scary, especially for new devs,
but this is actually good, because it means you have full control over how said
type works. And, it also makes the language easier to learn as there are less
words to remember, which is the complete opposite of whatever Java is trying to do.

## Conclusion
In conclusion, I just really like C.