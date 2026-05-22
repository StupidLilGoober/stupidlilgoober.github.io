---
layout: default
title: "Projects"
date: 2026-5-20
---

# Projects

{% for project in site.projects %}
  <h2>{{ project.title }}</h2>
  <a href="{{ project.url }}">View Project Page</a>
  <p>{{ project.description }}</p>
  <a href="github.com/{{ project.github }}"><img src="https://img.shields.io/badge/GitHub-{{ project.github }}-gray?logo=github&logoColor=white"></a> <br>
{% endfor %}
