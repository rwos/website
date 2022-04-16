---
title: "No Wordpress, No Cry"
date: 2011-10-12 00:00:00 +0000
---
<p>I finally managed to find the time to hack an engine for this blog.</p>

<p>It's written in Python, and pretty simple: flat-file storage, no frills, around 1700 lines of code.</p>

<p>(Most of which is some really, really bad open source Markdown implementation. Replacing this regexp monster with a proper compiler is the next big TODO on my list...)</p>

<p>The new engine is still a bit rough around the edges, but it's usable and does everything I want from a blog engine. (Well, apart from threaded comments, that's the second big TODO...)</p>

<p>The engine compiles everything down to static html files, so this site should scale pretty good. What? Oh, you need actual <em>readers</em> for that? Ok, it won't scale. But it could.</p>

<p>So here it is.</p>
