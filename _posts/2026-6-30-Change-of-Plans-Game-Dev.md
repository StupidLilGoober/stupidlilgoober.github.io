---
title: "Change of Plans"
layout: post
category: "dev"
tags: ["game", "plans"]
date: 2026-6-30
---

> The post *really* starts at the next section.

Previously, I stated a plan to make a custom engine. This plan, in hindsight,
wasn't realistic. So, I switched to using the `pygame-ce` PyPi module, but I will
still be making *some* things custom.

So, why did I make the change? To put it simply, it was unrealistic. And,
PyGame already has a somewhat similar philosophy to what I described. 

The next question, what am I working on now? Frankly, All I know is that I am 
working on a 2D (and probably side-scrolling) game. In my previous experience, I 
have learned making a huge plan for the game often leads to that work being completely 
wasted when I either procrastinate to the point where I stop working on it or when I 
realize it's unrealistic. If I simply come up with it as I go, it will be a lot easier.

I have also decided to only work on my project when I have extensive freetime, as if I do 
it every hour of my day, it won't be fun anymore, and will start to feel like a *real job* 
(and unemployment is definitely less stressful than employment, assuming you have
the funds).

Anyway, if you are planning to read a technical blog post about a really simple
sprite format I made, then the rest of this post is for you. Otherwise, probably
click off this.

## The Format

The format is very, very simple, therefore why this is a very short post. Basically,
you have a list of numbered sprites, i.e:

1. `0000.png`
2. `0001.png`
3. `0002.png`
4. `0003.png`

Then, a `META.json` file. The json file does as you'd expect, it just defines some
configuration rules. These rules are:

* Sprite name
* Animations and their frames

Then, these files are repackaged as a zip file with a `.spr` extension.

---

That's it. I'll give more updates, hopefully bigger updates, next time!
