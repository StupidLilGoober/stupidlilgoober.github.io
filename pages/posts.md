---
layout: default
title: "Posts"
date: 2026-5-20
permalink: "/posts/"
---

# Posts

{% for post in site.posts %}
  <h2>{{ post.title }} </h2>
  <a href="{{ post.url }}">Link to Page</a> <br>
  <small>{{ post.date | date: "%B %-d, %Y" }} <br></small>
  {{ post.excerpt }}
{% endfor %}
