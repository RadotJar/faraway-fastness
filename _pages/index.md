---
layout: page
title: Home
id: home
permalink: /
---

# Welcome to the Faraway Fastness! 

This is my [[digital-gardening|digital garden]]. Please peruse at your leisure.

<strong>🕒 Recently updated notes</strong>

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes limit: 5 %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<strong>🐉 Tabletop Roleplaying Games</strong>

<ul>
  {% for note in recent_notes %}
    {% if note.tags contains "ttrpg" %}
      <li>
        <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>

<a href="https://github.com/RadotJar" rel="me" class="no-arrow">
  <img src="/assets/github-mark.svg" height=30px class="margin-horizontal-none" />
</a>

<style>
  .wrapper {
    max-width: 46em;
  }
</style>
