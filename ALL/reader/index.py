#!/usr/bin/python
import cgitb
cgitb.enable()
print "Content-type: text/html\n"

import feedparser
import os.path, time

cache_life = 60*60*24*100000 # in seconds XXX
urls = [
    'http://commandcenter.blogspot.com/feeds/posts/default',
    'http://feeds.feedburner.com/BillTheLizard',
    'http://feeds.feedburner.com/codinghorror',
    'http://feeds.feedburner.com/EmbeddedInAcademia',
    'http://feeds.feedburner.com/FlyingMachineStudios',
    'http://feeds.feedburner.com/osteele',
    'http://feeds.feedburner.com/SolarianProgrammer',
    'http://feeds.feedburner.com/theexceptioncatcher',
    'http://feeds.feedburner.com/WisdomAndWonder',
    'http://gamedev.sleptlate.org/blog/feed/',
    'http://jeapostrophe.github.com/atom.xml',
    'http://jwz.org/blog/rss',
    'http://lambda-the-ultimate.org/rss.xml',
    'http://norvig.com/rss-feed.xml',
    'http://prog21.dadgum.com/atom.xml',
    'http://research.swtch.com/feed.atom',
    'http://robpike.blogspot.com/feeds/posts/default',
    'http://r-wos.org/blog/rss',
    'http://steve-yegge.blogspot.com/feeds/posts/default',
    'http://williamedwardscoder.tumblr.com/rss',
    'http://www.cforcoding.com/feeds/posts/default',
    'http://www.evanmiller.org/news.xml',
    'http://www.killbodyeatsoul.net/eatsoul.rss',
    'http://www.kroah.com/log/index.rss',
    'http://www.norvig.com/rss-feed.xml',
    'http://www.usrsb.in/rss.xml',
    'http://xkcd.com/atom.xml',
]

def write(fp, *strings):
    for s in strings:
        try:
            fp.write(s)
        except:
            fp.write(s.encode('utf-8'))

def gen_cache():
    fp = open('cache.html', 'w+')
    ### XXX TODO: better use iframe or something -> OR EVEN BETTER: let racket generate a template
    write(fp, """
    <html>
        <head>
            <meta charset="UTF-8">
            <meta content="text/html;charset=UTF-8" http-equiv="Content-type">
            <link href="http://r-wos.org/web.css" type="text/css" rel="stylesheet">
            <link type="text/css" rel="stylesheet" href="http://fonts.googleapis.com/css?family=Josefin+Sans:600">
            <title>public feed reader | r-wos.org</title>
        </head>
        <body>
            <div class="navigation">
                <a href="/">r-wos.org</a>
                <a href="/blog">blog</a>
                <a href="/blog/rss">rss</a>
                <a href="/hacks/">hacks</a>
                <a href="/about">about</a>
                <script type="text/javascript">
                    var state = 0;
                    var expire = new Date();
                    expire.setTime(expire.getTime()+1000*60*60*24*365)
                    var cookie_foot = '; expires='+expire.toUTCString()+'; path=/';
                    function switch_style() {
                        tag = document.getElementsByTagName('link')[0];
                        if (state == 0) {
                            tag.href = tag.href.replace('web.css', 'alt-web.css');
                            document.getElementById('style-switch').innerHTML = 'too much blue';
                            state = 1;
                            document.cookie = 'state=1'+cookie_foot;
                        } else if (state == 1) {
                            tag.href = tag.href.replace('alt-web.css', 'web.css');
                            document.getElementById('style-switch').innerHTML = 'too much green';
                            state = 0;
                            document.cookie = 'state=0'+cookie_foot;
                        }
                    }
                    document.write(' - <a id="style-switch" href="javascript:switch_style()">too much green</a>');
                    var cookies = document.cookie.split(';');
                    for (var i = 0; i < cookies.length; i++) {
                        if (cookies[i].trim() == 'state=1')
                            switch_style();
                    }
                </script>
            </div>
            <div id="content">
                <div class="block">
                    <div class="header">
                        <h1>public feed reader</h1>
                    </div>
    """)
    write(fp, "<p>If you are not me: Hi, how did you find this? It's still very much in development!</p><p>If you are me: Hi!</p>")
    write(fp, "<p><small>next update on " + time.ctime(cache_life + time.time()) + "</small></p>")
    for url in urls:
        ### XXX XXX better sort by title
        data = feedparser.parse(url)
        if not 'feed' in data:
            continue
        link = url
        if 'link' in data['feed']:
            link = data['feed']['link']
        # title
        write(fp, '<h2><a href="', link, '">')
        title = link
        if 'title' in data['feed']:
            title = data['feed']['title']
        write(fp, title)
        write(fp, '</a></h2>')
        # feed link
        write(fp, ' [<a href="', url, '">feed</a>]')
        # subtitle
        #if 'subtitle' in data['feed']:
            #write(fp, ' <div><small>', data['feed']['subtitle'], '</small></div>')
        # entries
        write(fp, '<ul>')
        if len(data['entries']) == 0:
            write(fp, '<li>--</li>')
        else:
            i = 0
            for entry in data['entries']:
                if not 'link' in entry:
                    continue
                write(fp, '<li><a href="', entry.link, '">')
                if 'title' in entry:
                    write(fp, entry.title)
                else:
                    write(fp, entry.link)
                write(fp, '</a></li>')
                i += 1
                if i >= 5: break
        write(fp, '</ul></p>')

    write(fp, """
                </div>
            </div>
        </body>
    </html>
    """)
    fp.close()

### invocation

# check cache
try:
    ctime = os.path.getctime('cache.html')
    if (ctime + cache_life) < time.time():
        # cache expired
        gen_cache()
except:
    # no cache file there
    gen_cache()

# display cache
with open('cache.html') as f:
    print f.read()

