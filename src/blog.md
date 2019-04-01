---
title: Blog
subtitle: "(last update: 1970-01-01 00:00:00�ERROR: Date::Manip unable to determine TimeZone.)"
permalink: /blog
---
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> {{ post.subtitle }}
    </li>
  {% endfor %}
</ul>
