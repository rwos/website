---
title: '&lt;font color="green"&gt;'
date: 2013-01-17 00:00:00 +0000
---

I'm currently looking into adorning this website with a bit of semantic
<strike>bullshit</strike> information. Because that's where the web's heading
isn't it?

Well, I've briefly looked into [schema.org](http://schema.org), which describes
a reasonably simple
set of types of information that can be directly embedded into the various HTML
tags. So that's a plus, but there's something missing: There is neither a type
for "source code" nor a type for "description of software". There's "blog" and
"blog post" and all that - and the format is extensible. But still, that seems
like quite a big omission to me. There's "software application" and "review"
and "article", so you could make it an "article" about a "software
application". Well, yeah. That's not very elegant, is it?

(As an aside I find it rather funny how the programmers designing and
implementing those kind of things - other examples would be XML and most GUIs -
completely forget about their own profession. I mean, obviously *only* catering
to programmers would be bad too, but *not at all* thinking about programmers
when programming something isn't quite right either, is it?)

Also, if you really want to present *all* the information you have about
whatever it is you're publishing, the HTML tag soup gets rather - soupy (well,
that didn't work). Maybe it would be better to a have a scheme where you
basically just provide the site template as an extra page - but instead of the
usual content you just describe what kind of content there would be, if this
was the actual page. Something like:

    <h1>title</h1>
    <div id="foo">
        blog-post-content
        <span id="bar">author</span>
    </div>

And the other side (search engines for example) would fetch this template
and parse it and apply it to your page.
That way, you wouldn't have to rework all your markup if you want to include
semantic information. Also, the question of what to specify would go away,
because you would only say what it is, what you're publishing - and not have to
worry about whether to include the author on every post or only on the main
"blog"-element, or only on the main "website"-element and so on.

Aside from schema.org, there are countless other ways of including semantic
information into HTML pages. And I can't read about them and compare them
because I keep falling asleep. It's so boring.

Sometimes I long for the days of the font tag. Things weren't perfect, but
nobody said they would be. Everything is so *right* in today's web. You
separate semantics from presentation and separate that from that and load
everything asynchronously and everything defers everything somewhere else and
"don't use `<b>`" and it's all so static and it's *still* a huge mess. But now
with stricter rules.

So, fuck semantic tags.

Was that a post that started as a happy story about how I'd *like* to include
semantic tags into my homepage and ended in a somewhat diffuse rant against -
uh - *progress*?

You bet it was.

