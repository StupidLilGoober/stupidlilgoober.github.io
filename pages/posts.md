---
layout: default
title: "Posts"
date: 2026-9-21
permalink: "/posts/"
---

# Posts

{% for post in site.posts %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <small>{{ post.date | date: "%B %-d, %Y" }} <br></small>
  {{ post.excerpt }}
{% endfor %}
