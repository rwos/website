---
title: Blog
subtitle: "(last update: 1970-01-01 00:00:00�! Undefined control sequence.)"
permalink: /blog
---
<ul>
  {% for post in site.posts %}
    <li>
      {{ post.date | split: ' ' | first }} <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
