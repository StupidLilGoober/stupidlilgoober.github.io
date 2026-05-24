---
layout: default
title: "Projects"
date: 2026-5-20
---

# Projects

{% for project in site.projects %}
  <h2>{{ project.title }}</h2>
  <a href="{{ project.url }}">View Project Page</a>
  <p>{{ project.desc }}</p>
  <p>Finished: {{ project.finished }}</p>
{% endfor %}
