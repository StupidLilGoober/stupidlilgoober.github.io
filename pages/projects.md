---
layout: default
title: "Projects"
date: 2026-5-20
permalink: "/projects/"
---

# Projects

{% for project in site.projects %}
  <h2>{{ project.title }}</h2>
  <a href="{{ project.url }}">View Project Page</a>
  <p><a href="https://github.com/{{ project.github }}"><img src="https://img.shields.io/badge/GitHub-{{ project.github }}-gray?logo=github&logoColor=white"></a></p>
  <p>{{ project.desc }}</p>
{% endfor %}
