This doesn't seem safe to me
2013-01-10

Recently, in a conversation about the Gentoo Linux distribution, I jokingly
suggested to a colleague (and Gentoo user) that Gentoo sucks because they still
only provide the very first version of [gti](http://r-wos.org/hacks/gti) and
are missing out on all the new features (the car's speed now depends on the
terminal width).

Turns out I was wrong, as they *do* provide the newest version. What they do is
they pull directly from the repository.

$POST_TITLE

I don't have any knowledge of Gentoos package system but apparently my
silly little hack is in it as a
"[live ebuild](http://sources.gentoo.org/cgi-bin/viewvc.cgi/gentoo-x86/dev-vcs/gti/gti-9999.ebuild?view=markup)",
recognizable by the 9999 version number. This "stable" version number
also results in the fact that those packages are not re-pulled/updated
on a normal system update.

But, apparently, if you do an `emerge --update @live-rebuild`, all those "live" packages
do get updated. And they get built in a sandbox. And they get installed. And you run them.

And you can trust them, more or less - it's obviously not stable release software,
so it might crash from time to time. But there are so many eyeballs on the
repos that you can be pretty sure it won't make your machine explode.

Except that you can't. Because Mozilla is a name you'd recognize, KDE is another,
Subversion, yeah - one can trust those guys. But I, too, have a repository that your
machine pulls from. And it builds and installs whatever I throw at it. You don't
trust me.

You *should not* trust me. I may not be root, but I could do an `rm -rf ~/*` just fine.

What bothers me the most about all that is that I'm obviously missing something here.
Gentoo's devs aren't idiots, I suppose - I'm sure they can see that pulling
from random repos is quite a security issue. Maybe Gentoo users have a
different relationship to their package system. Maybe they *are* careful in
what they install from it. And maybe they do go through the diffs before they
update.  Maybe there are warnings about the issues with 9999-ebuilds all over
the documentation.  And maybe nobody runs 9999-ebuilds on production
machines.

Because otherwise maybe I'll delete all your photos tomorrow.

