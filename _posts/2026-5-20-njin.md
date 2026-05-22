---
title: "Beginning Work on a Game Engine"
layout: post
category: "programming"
tags: ["cpp", "tooling"]
---

As stated in the home page, I have always wanted to make a video game. *However*,
I have never truly been satisfied with the state of game engines. Personally,
I prefer a purely code-based game development environment, with as minimal
GUI as possible, as that moves a lot faster. (Of course, I am not ignorant
of how some parts of game dev objectively require a GUI).

So, I came up with the goal to make a game engine that *feels* like building
everything yourself without having to deal with backends yourself.

This project has already been a major learning experience for me, and I hope
you will follow me through it.

## The Plan

Making this engine comes in two phases:

* The "backend" (in quotations because this isn't usually called a backend)
* The CLI

I have chosen to make the CLI in Python because 1. it doesn't really need to
be highly performant and 2. I don't want to spend a long time working on it. I
have chosen to make the backend in C++ because it's tried and true.

I want distributions of games to be as simple as possible, so I came up with
this:

```
assets.pck
game.exe
```

`assets.pck` is actually just a ZIP (or TGZ) archive with a specific structure.
