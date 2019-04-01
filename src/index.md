---
title: "Weeks of hacking can save you hours of planning"
---

<img alt="￼ " src="https://www.gravatar.com/avatar/4451e54155ab77af0bfcaf74d21b0de3?s=200">

<p>
  Hello, world! Find the following pages in this SGML
  <font color="green">w</font><font color="red">o</font><font color="blue">n</font><font color="olive">d</font><font color="purple">e</font><font color="green">r</font><font color="fuchsia">w</font><font color="gray">o</font><font color="black">r</font><font color="salmon">l</font><font color="rebeccapurple">d</font>
</p>

<ul>
  {% for page in site.pages %}
  {% if page.title and page.url != "/" %}
    <li>
      <a href="{{ page.url }}">{{ page.title }}</a> {{ page.subtitle }}
    </li>
  {% endif %}
  {% endfor %}
  <li>
    <a href="https://idlewords.com/talks/website_obesity.htm">Why</a>
    is this
    <a href="https://idlewords.com/talks/website_obesity.htm">page</a>
    so
    <a href="https://idlewords.com/talks/website_obesity.htm">incredibly beautiful</a>?
  </li>
</ul>

<p>Elsewhere on the web:</p>

<ul>
  <li>
    public <a href="{{ site.github_url }}" target="_blank">code and stuff</a> (github.com)
  </li>
  <li>
    short <a href="{{ site.twitter_url }}" target="_blank">rants and things</a> of little importance (twitter.com)
  </li>
  <li>
    you can <a href="mailto:{{ site.email }}">send me mail</a> if you want - I promise I won't read it!
  </li>
</ul>

:wq
