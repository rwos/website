Modern Programming
2011-12-05

This is the code for a Mozilla Extension
<a href="https://developer.mozilla.org/en/Code_snippets/Miscellaneous#section_8">to get
its version number</a> out of its own configuration:

    try {
      // Firefox 4 and later; Mozilla 2 and later
      Components.utils.import("resource://gre/modules/AddonManager.jsm");
      AddonManager.getAddonByID("extension-guid@example.org", function(addon) {
        alert("My extension's version is " + addon.version);
      });
    } catch (ex) {
      // Firefox 3.6 and before; Mozilla 1.9.2 and before
      var em = Components.classes["@mozilla.org/extensions/manager;1"]
               .getService(Components.interfaces.nsIExtensionManager);
      var addon = em.getItemForID("extension-guid@example.org");
      alert("My extension's version is " + addon.version);
    }

This is one twitter session id:

    _twitter_sess=BAh7CToPY3JlYXRlZF9hdGwrCPrUqQ80AToMY3NyZl9pZCIlZGY5YTE5YWZi%2
    50AYjk1M2FhOTA1ODM2ZTcxZTMwOTU2MTM6B2lkIiU0OTJhZmJhYWY5ODYyMWU5%250AMDNlZTIyNmE5
    YTY2OGQyOCIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6%250ARmxhc2g6OkZsYXNoSGFzaHsABjo
    KQHVzZWR7AA%253D%253D--1f9239b0e651837282ac415b1898e8f68d2bc1f4

This is a part of the <a href="http://en.wikipedia.org/wiki/Jabber">Wikipedia Page
for Jabber</a>:

> Because XMPP is not yet encoded as Efficient XML Interchange but as a single
> long XML document, binary data must be first base64 encoded before it can be
> transmitted in-band. Therefore any significant amount of binary data
> (e.g., file transfers) is best transmitted out-of-band, using in-band messages
> to coordinate. The best example of this is the Jingle XMPP Extension Protocol,
> XEP-0166.

This is Java code that does
<a href="http://en.wikipedia.org/wiki/Inversion_of_control">absolutely nothing at all</a>:

    public class ServerFacade
    {
        public <K, V> V respondToRequest(K request, DAO dao) {
            return dao.getData(request);
        }
    }

This is a new way to implement singletons in PHP 5.4, using a feature
called "<a href="https://wiki.php.net/rfc/horizontalreuse">traits</a>":

    trait Singleton {
      public static function getInstance() { ... }
    }
    class MySingleton extends SomeUnrelatedSuperClass {
      use Singleton;
    }
    MySingleton::getInstance();

----------------------------------------------------------

This is a sane API to retrieve a version number:

    version_number = config.version;

This is a number a hundred times bigger than the current world
population in hexadecimal:

    A27A34FA7C

This picture was transmitted in a binary form, over HTTP:

<img src="http://r-wos.org/media/example.jpg">

This is - among others - Java, Javascript, C and C++ code that does
nothing at all:

    ;

This is a global, stateful object in PHP (any version):

    $foo;

----------------------------------------------------------

People are strange.
