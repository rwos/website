


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>pdf.js/web/compatibility.js at gh-pages · mozilla/pdf.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe131-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.36) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="57B9A616:78F3:1339AAE6:52658647" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="y4P9s4EWeGXVCv6eHHSYG7Iq5ZBJgiX0odGngO+8owI=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-d6774860c472c858fefc70ae054086830bd30176.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-0fc5f35702af7272c39fbb8026a50323e9dd1952.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-8a61e23841d9e5ecc084748ec552e548cd05c977.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-67645d395525c8bccdbfe625a31c629b80881519.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="5774135ff337936246d18d84c14e05d9">

        <link data-pjax-transient rel='permalink' href='/mozilla/pdf.js/blob/ff43d836a0b0bb93203534391ed7318df66aa707/web/compatibility.js'>
  <meta property="og:title" content="pdf.js"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/mozilla/pdf.js"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="pdf.js - PDF Reader in JavaScript"/>

  <meta name="description" content="pdf.js - PDF Reader in JavaScript" />

  <meta content="131524" name="octolytics-dimension-user_id" /><meta content="mozilla" name="octolytics-dimension-user_login" /><meta content="1663468" name="octolytics-dimension-repository_id" /><meta content="mozilla/pdf.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1663468" name="octolytics-dimension-repository_network_root_id" /><meta content="mozilla/pdf.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/mozilla/pdf.js/commits/gh-pages.atom" rel="alternate" title="Recent Commits to pdf.js:gh-pages" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production  vis-public  page-blob">
    <div class="wrapper">
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/signup">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fmozilla%2Fpdf.js%2Fblob%2Fgh-pages%2Fweb%2Fcompatibility.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="mozilla/pdf.js"
      data-branch="gh-pages"
      data-sha="355fd3b3fbc82ab06790fefb61f5fc0ae73de707"
  >

    <input type="hidden" name="nwo" value="mozilla/pdf.js" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
  <a href="/login?return_to=%2Fmozilla%2Fpdf.js"
  class="minibutton with-count js-toggler-target star-button entice tooltipped upwards"
  title="You must be signed in to use this feature" rel="nofollow">
  <span class="octicon octicon-star"></span>Star
</a>
<a class="social-count js-social-count" href="/mozilla/pdf.js/stargazers">
  7,069
</a>

  </li>

    <li>
      <a href="/login?return_to=%2Fmozilla%2Fpdf.js"
        class="minibutton with-count js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/mozilla/pdf.js/network" class="social-count">
        1,271
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/mozilla" class="url fn" itemprop="url" rel="author"><span itemprop="title">mozilla</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/mozilla/pdf.js" class="js-current-repository js-repo-home-link">pdf.js</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/mozilla/pdf.js/tree/gh-pages" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /mozilla/pdf.js/tree/gh-pages">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/mozilla/pdf.js/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /mozilla/pdf.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>438</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/mozilla/pdf.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /mozilla/pdf.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>19</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/mozilla/pdf.js/wiki" aria-label="Wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /mozilla/pdf.js/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/mozilla/pdf.js/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /mozilla/pdf.js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/mozilla/pdf.js/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /mozilla/pdf.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/mozilla/pdf.js/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /mozilla/pdf.js/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/mozilla/pdf.js.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mozilla/pdf.js.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/mozilla/pdf.js" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mozilla/pdf.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



              <a href="/mozilla/pdf.js/archive/gh-pages.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:c9b88ed311c3caaed0f26302e3333a1e -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/mozilla/pdf.js/find/gh-pages" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="gh-pages"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">gh-pages</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mozilla/pdf.js/blob/gh-pages/web/compatibility.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mozilla/pdf.js/blob/master/web/compatibility.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mozilla/pdf.js/tree/v0.5.5/web/compatibility.js"
                 data-name="v0.5.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.5.5">v0.5.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mozilla/pdf.js/tree/v0.4.11/web/compatibility.js"
                 data-name="v0.4.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.4.11">v0.4.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mozilla/pdf.js/tree/v0.3.459/web/compatibility.js"
                 data-name="v0.3.459"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.3.459">v0.3.459</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mozilla/pdf.js/tree/v0.1.0/web/compatibility.js"
                 data-name="v0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.0">v0.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mozilla/pdf.js/tree/milestone-0.2/web/compatibility.js"
                 data-name="milestone-0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="milestone-0.2">milestone-0.2</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mozilla/pdf.js/tree/gh-pages" data-branch="gh-pages" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">pdf.js</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mozilla/pdf.js/tree/gh-pages/web" data-branch="gh-pages" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">web</span></a></span><span class="separator"> / </span><strong class="final-path">compatibility.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="web/compatibility.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://2.gravatar.com/avatar/e05382aa67ec592c3eb32e9cd9edd65e?d=https%3A%2F%2Fidenticons.github.com%2F2ec4a264884db9980afb345d875c3a4f.png&amp;s=140" width="24" />
    <span class="author"><a href="/Snuffleupagus" rel="author">Snuffleupagus</a></span>
    <time class="js-relative-date" datetime="2013-08-28T16:53:57-07:00" title="2013-08-28 16:53:57">August 28, 2013</time>
    <div class="commit-title">
        <a href="/mozilla/pdf.js/commit/f61d27275473c6fbf1bf73388ffd96c1d8ed16f0" class="message" data-pjax="true" title="Disable range requests in old Android versions">Disable range requests in old Android versions</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>14</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="yurydelendik" href="/mozilla/pdf.js/commits/master/web/compatibility.js?author=yurydelendik"><img height="20" src="https://1.gravatar.com/avatar/f7eb863c56bacae29914b31012ae3674?d=https%3A%2F%2Fidenticons.github.com%2Fef00ae91c386386893db90740c34e888.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="notmasteryet" href="/mozilla/pdf.js/commits/master/web/compatibility.js?author=notmasteryet"><img height="20" src="https://0.gravatar.com/avatar/194a5ca5f2ada3125fdea6ec9dfa5fe4?d=https%3A%2F%2Fidenticons.github.com%2Fc332942f60d33b30c3389ebb528113e8.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="brendandahl" href="/mozilla/pdf.js/commits/master/web/compatibility.js?author=brendandahl"><img height="20" src="https://0.gravatar.com/avatar/d33a62b635bb5d4f87235b86d853cb8a?d=https%3A%2F%2Fidenticons.github.com%2Fc9e67c767ed63814c7b491081a4085f6.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jwagner79" href="/mozilla/pdf.js/commits/master/web/compatibility.js?author=jwagner79"><img height="20" src="https://0.gravatar.com/avatar/bdd4d70baef8c9a5c381735b03d90d19?d=https%3A%2F%2Fidenticons.github.com%2Fc517de478cfe90ced0c0f5dbedf4dcab.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="merkste" href="/mozilla/pdf.js/commits/master/web/compatibility.js?author=merkste"><img height="20" src="https://0.gravatar.com/avatar/c436ae2ca66d6f0d0d51052f70dae53c?d=https%3A%2F%2Fidenticons.github.com%2F6cf9379a089c5e4e80df9277f3f8ad7a.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="Rob--W" href="/mozilla/pdf.js/commits/master/web/compatibility.js?author=Rob--W"><img height="20" src="https://1.gravatar.com/avatar/c916d92c098426d84778a7910cc32b39?d=https%3A%2F%2Fidenticons.github.com%2Ffa390125ecd6a3f22d01712909ce84ae.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="Snuffleupagus" href="/mozilla/pdf.js/commits/master/web/compatibility.js?author=Snuffleupagus"><img height="20" src="https://2.gravatar.com/avatar/e05382aa67ec592c3eb32e9cd9edd65e?d=https%3A%2F%2Fidenticons.github.com%2F2ec4a264884db9980afb345d875c3a4f.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="kkujala" href="/mozilla/pdf.js/commits/master/web/compatibility.js?author=kkujala"><img height="20" src="https://2.gravatar.com/avatar/aecc75d15f9f64240292465b9977f209?d=https%3A%2F%2Fidenticons.github.com%2F5f9639079b3230e1322af1f5be2c0705.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="ofirdev" href="/mozilla/pdf.js/commits/master/web/compatibility.js?author=ofirdev"><img height="20" src="https://2.gravatar.com/avatar/57f548f2a93c4843fbc0a465e6e19ab7?d=https%3A%2F%2Fidenticons.github.com%2F09bdd13f364746f41a7dea31da26cdbe.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="sayrer" href="/mozilla/pdf.js/commits/master/web/compatibility.js?author=sayrer"><img height="20" src="https://1.gravatar.com/avatar/440d092ddf3e2c8e0c8c18eb12b36a0d?d=https%3A%2F%2Fidenticons.github.com%2F39e728602cda7d318ed9adca268fa71d.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="benbro" href="/mozilla/pdf.js/commits/master/web/compatibility.js?author=benbro"><img height="20" src="https://0.gravatar.com/avatar/d28a92da008203ef4f5bdcc78c60f3c0?d=https%3A%2F%2Fidenticons.github.com%2Fae18d256295126191154e5bceb2023df.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="vyv03354" href="/mozilla/pdf.js/commits/master/web/compatibility.js?author=vyv03354"><img height="20" src="https://2.gravatar.com/avatar/e9388eb9cf1a0eb509c4dc3686e66ca5?d=https%3A%2F%2Fidenticons.github.com%2Fcc9f82a0487fbf2d1da8091cbf7aaaf5.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="arturadib" href="/mozilla/pdf.js/commits/master/web/compatibility.js?author=arturadib"><img height="20" src="https://1.gravatar.com/avatar/1e79769843eb2b1146834c762ae5f3da?d=https%3A%2F%2Fidenticons.github.com%2F6ccabccc69cec99b5cd7d5d9fed12b4f.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="vingtetun" href="/mozilla/pdf.js/commits/master/web/compatibility.js?author=vingtetun"><img height="20" src="https://2.gravatar.com/avatar/c4742babf5ea2268e923e1fec874a2d2?d=https%3A%2F%2Fidenticons.github.com%2F0ba5effb6a351c675eea107807f14e2c.png&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/f7eb863c56bacae29914b31012ae3674?d=https%3A%2F%2Fidenticons.github.com%2Fef00ae91c386386893db90740c34e888.png&amp;s=140" width="24" />
            <a href="/yurydelendik">yurydelendik</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/194a5ca5f2ada3125fdea6ec9dfa5fe4?d=https%3A%2F%2Fidenticons.github.com%2Fc332942f60d33b30c3389ebb528113e8.png&amp;s=140" width="24" />
            <a href="/notmasteryet">notmasteryet</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/d33a62b635bb5d4f87235b86d853cb8a?d=https%3A%2F%2Fidenticons.github.com%2Fc9e67c767ed63814c7b491081a4085f6.png&amp;s=140" width="24" />
            <a href="/brendandahl">brendandahl</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/bdd4d70baef8c9a5c381735b03d90d19?d=https%3A%2F%2Fidenticons.github.com%2Fc517de478cfe90ced0c0f5dbedf4dcab.png&amp;s=140" width="24" />
            <a href="/jwagner79">jwagner79</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/c436ae2ca66d6f0d0d51052f70dae53c?d=https%3A%2F%2Fidenticons.github.com%2F6cf9379a089c5e4e80df9277f3f8ad7a.png&amp;s=140" width="24" />
            <a href="/merkste">merkste</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/c916d92c098426d84778a7910cc32b39?d=https%3A%2F%2Fidenticons.github.com%2Ffa390125ecd6a3f22d01712909ce84ae.png&amp;s=140" width="24" />
            <a href="/Rob--W">Rob--W</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/e05382aa67ec592c3eb32e9cd9edd65e?d=https%3A%2F%2Fidenticons.github.com%2F2ec4a264884db9980afb345d875c3a4f.png&amp;s=140" width="24" />
            <a href="/Snuffleupagus">Snuffleupagus</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/aecc75d15f9f64240292465b9977f209?d=https%3A%2F%2Fidenticons.github.com%2F5f9639079b3230e1322af1f5be2c0705.png&amp;s=140" width="24" />
            <a href="/kkujala">kkujala</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/57f548f2a93c4843fbc0a465e6e19ab7?d=https%3A%2F%2Fidenticons.github.com%2F09bdd13f364746f41a7dea31da26cdbe.png&amp;s=140" width="24" />
            <a href="/ofirdev">ofirdev</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/440d092ddf3e2c8e0c8c18eb12b36a0d?d=https%3A%2F%2Fidenticons.github.com%2F39e728602cda7d318ed9adca268fa71d.png&amp;s=140" width="24" />
            <a href="/sayrer">sayrer</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/d28a92da008203ef4f5bdcc78c60f3c0?d=https%3A%2F%2Fidenticons.github.com%2Fae18d256295126191154e5bceb2023df.png&amp;s=140" width="24" />
            <a href="/benbro">benbro</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/e9388eb9cf1a0eb509c4dc3686e66ca5?d=https%3A%2F%2Fidenticons.github.com%2Fcc9f82a0487fbf2d1da8091cbf7aaaf5.png&amp;s=140" width="24" />
            <a href="/vyv03354">vyv03354</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/1e79769843eb2b1146834c762ae5f3da?d=https%3A%2F%2Fidenticons.github.com%2F6ccabccc69cec99b5cd7d5d9fed12b4f.png&amp;s=140" width="24" />
            <a href="/arturadib">arturadib</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/c4742babf5ea2268e923e1fec874a2d2?d=https%3A%2F%2Fidenticons.github.com%2F0ba5effb6a351c675eea107807f14e2c.png&amp;s=140" width="24" />
            <a href="/vingtetun">vingtetun</a>
          </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>480 lines (430 sloc)</span>
        <span>14.784 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton disabled js-entice" href=""
                 data-entice="You must be signed in to make or propose changes">Edit</a>
          <a href="/mozilla/pdf.js/raw/gh-pages/web/compatibility.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/mozilla/pdf.js/blame/gh-pages/web/compatibility.js" class="button minibutton ">Blame</a>
          <a href="/mozilla/pdf.js/commits/gh-pages/web/compatibility.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon js-entice" href=""
             data-entice="You must be signed in and on a branch to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */</span></div><div class='line' id='LC2'><span class="cm">/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */</span></div><div class='line' id='LC3'><span class="cm">/* Copyright 2012 Mozilla Foundation</span></div><div class='line' id='LC4'><span class="cm"> *</span></div><div class='line' id='LC5'><span class="cm"> * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></div><div class='line' id='LC6'><span class="cm"> * you may not use this file except in compliance with the License.</span></div><div class='line' id='LC7'><span class="cm"> * You may obtain a copy of the License at</span></div><div class='line' id='LC8'><span class="cm"> *</span></div><div class='line' id='LC9'><span class="cm"> *     http://www.apache.org/licenses/LICENSE-2.0</span></div><div class='line' id='LC10'><span class="cm"> *</span></div><div class='line' id='LC11'><span class="cm"> * Unless required by applicable law or agreed to in writing, software</span></div><div class='line' id='LC12'><span class="cm"> * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></div><div class='line' id='LC13'><span class="cm"> * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></div><div class='line' id='LC14'><span class="cm"> * See the License for the specific language governing permissions and</span></div><div class='line' id='LC15'><span class="cm"> * limitations under the License.</span></div><div class='line' id='LC16'><span class="cm"> */</span></div><div class='line' id='LC17'><span class="cm">/* globals VBArray, PDFJS */</span></div><div class='line' id='LC18'><br/></div><div class='line' id='LC19'><span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC20'><br/></div><div class='line' id='LC21'><span class="c1">// Initializing PDFJS global object here, it case if we need to change/disable</span></div><div class='line' id='LC22'><span class="c1">// some PDF.js features, e.g. range requests</span></div><div class='line' id='LC23'><span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">PDFJS</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC24'>&nbsp;&nbsp;<span class="p">(</span><span class="k">typeof</span> <span class="nb">window</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">?</span> <span class="nb">window</span> <span class="o">:</span> <span class="k">this</span><span class="p">).</span><span class="nx">PDFJS</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC25'><span class="p">}</span></div><div class='line' id='LC26'><br/></div><div class='line' id='LC27'><span class="c1">// Checking if the typed arrays are supported</span></div><div class='line' id='LC28'><span class="p">(</span><span class="kd">function</span> <span class="nx">checkTypedArrayCompatibility</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC29'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">Uint8Array</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// some mobile versions do not support subarray (e.g. safari 5 / iOS)</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">Uint8Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">subarray</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Uint8Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">subarray</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">subarray</span><span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">Uint8Array</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">));</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Float32Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">subarray</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">subarray</span><span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">Float32Array</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">));</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// some mobile version might not support Float64Array</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">Float64Array</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">Float64Array</span> <span class="o">=</span> <span class="nx">Float32Array</span><span class="p">;</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC45'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">subarray</span><span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">TypedArray</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">));</span></div><div class='line' id='LC49'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">setArrayOffset</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">offset</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="mi">2</span><span class="p">)</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">offset</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">,</span> <span class="o">++</span><span class="nx">offset</span><span class="p">)</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">[</span><span class="nx">offset</span><span class="p">]</span> <span class="o">=</span> <span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0xFF</span><span class="p">;</span></div><div class='line' id='LC56'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">TypedArray</span><span class="p">(</span><span class="nx">arg1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">arg1</span> <span class="o">===</span> <span class="s1">&#39;number&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">arg1</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="s1">&#39;slice&#39;</span> <span class="k">in</span> <span class="nx">arg1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">arg1</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">arg1</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">arg1</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">.</span><span class="nx">subarray</span> <span class="o">=</span> <span class="nx">subarray</span><span class="p">;</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">.</span><span class="nx">buffer</span> <span class="o">=</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">.</span><span class="nx">byteLength</span> <span class="o">=</span> <span class="nx">result</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">.</span><span class="nx">set</span> <span class="o">=</span> <span class="nx">setArrayOffset</span><span class="p">;</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">arg1</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">arg1</span><span class="p">.</span><span class="nx">buffer</span><span class="p">)</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">.</span><span class="nx">buffer</span> <span class="o">=</span> <span class="nx">arg1</span><span class="p">.</span><span class="nx">buffer</span><span class="p">;</span></div><div class='line' id='LC80'><br/></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC82'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC83'><br/></div><div class='line' id='LC84'>&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">Uint8Array</span> <span class="o">=</span> <span class="nx">TypedArray</span><span class="p">;</span></div><div class='line' id='LC85'><br/></div><div class='line' id='LC86'>&nbsp;&nbsp;<span class="c1">// we don&#39;t need support for set, byteLength for 32-bit array</span></div><div class='line' id='LC87'>&nbsp;&nbsp;<span class="c1">// so we can use the TypedArray as well</span></div><div class='line' id='LC88'>&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">Uint32Array</span> <span class="o">=</span> <span class="nx">TypedArray</span><span class="p">;</span></div><div class='line' id='LC89'>&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">Int32Array</span> <span class="o">=</span> <span class="nx">TypedArray</span><span class="p">;</span></div><div class='line' id='LC90'>&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">Uint16Array</span> <span class="o">=</span> <span class="nx">TypedArray</span><span class="p">;</span></div><div class='line' id='LC91'>&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">Float32Array</span> <span class="o">=</span> <span class="nx">TypedArray</span><span class="p">;</span></div><div class='line' id='LC92'>&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">Float64Array</span> <span class="o">=</span> <span class="nx">TypedArray</span><span class="p">;</span></div><div class='line' id='LC93'><span class="p">})();</span></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'><span class="c1">// URL = URL || webkitURL</span></div><div class='line' id='LC96'><span class="p">(</span><span class="kd">function</span> <span class="nx">normalizeURLObject</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC97'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">URL</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">URL</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">webkitURL</span><span class="p">;</span></div><div class='line' id='LC99'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC100'><span class="p">})();</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'><span class="c1">// Object.create() ?</span></div><div class='line' id='LC103'><span class="p">(</span><span class="kd">function</span> <span class="nx">checkObjectCreateCompatibility</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC104'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">create</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'>&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">create</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">objectCreate</span><span class="p">(</span><span class="nx">proto</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">Constructor</span><span class="p">()</span> <span class="p">{}</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="nx">proto</span><span class="p">;</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">Constructor</span><span class="p">();</span></div><div class='line' id='LC111'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC112'><span class="p">})();</span></div><div class='line' id='LC113'><br/></div><div class='line' id='LC114'><span class="c1">// Object.defineProperty() ?</span></div><div class='line' id='LC115'><span class="p">(</span><span class="kd">function</span> <span class="nx">checkObjectDefinePropertyCompatibility</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC116'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">definePropertyPossible</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// some browsers (e.g. safari) cannot use defineProperty() on DOM objects</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// and thus the native version is not sufficient</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="k">new</span> <span class="nx">Image</span><span class="p">(),</span> <span class="s1">&#39;id&#39;</span><span class="p">,</span> <span class="p">{</span> <span class="nx">value</span><span class="o">:</span> <span class="s1">&#39;test&#39;</span> <span class="p">});</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// ... another test for android gb browser for non-DOM objects</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">Test</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">Test</span><span class="p">()</span> <span class="p">{};</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Test</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">get</span> <span class="nx">id</span><span class="p">()</span> <span class="p">{</span> <span class="p">}</span> <span class="p">};</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="k">new</span> <span class="nx">Test</span><span class="p">(),</span> <span class="s1">&#39;id&#39;</span><span class="p">,</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span> <span class="nx">value</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="nx">configurable</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">enumerable</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">writable</span><span class="o">:</span> <span class="kc">false</span> <span class="p">});</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">definePropertyPossible</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">definePropertyPossible</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC131'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC132'><br/></div><div class='line' id='LC133'>&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">objectDefineProperty</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">def</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;get&#39;</span> <span class="k">in</span> <span class="nx">def</span><span class="p">)</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">.</span><span class="nx">__defineGetter__</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">def</span><span class="p">[</span><span class="s1">&#39;get&#39;</span><span class="p">]);</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;set&#39;</span> <span class="k">in</span> <span class="nx">def</span><span class="p">)</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">.</span><span class="nx">__defineSetter__</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">def</span><span class="p">[</span><span class="s1">&#39;set&#39;</span><span class="p">]);</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;value&#39;</span> <span class="k">in</span> <span class="nx">def</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">.</span><span class="nx">__defineSetter__</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="kd">function</span> <span class="nx">objectDefinePropertySetter</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">__defineGetter__</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="kd">function</span> <span class="nx">objectDefinePropertyGetter</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">def</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC148'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC149'><span class="p">})();</span></div><div class='line' id='LC150'><br/></div><div class='line' id='LC151'><span class="c1">// Object.keys() ?</span></div><div class='line' id='LC152'><span class="p">(</span><span class="kd">function</span> <span class="nx">checkObjectKeysCompatibility</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC153'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'>&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">objectKeys</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">i</span><span class="p">))</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC163'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC164'><span class="p">})();</span></div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'><span class="c1">// No readAsArrayBuffer ?</span></div><div class='line' id='LC167'><span class="p">(</span><span class="kd">function</span> <span class="nx">checkFileReaderReadAsArrayBuffer</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC168'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">FileReader</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span> <span class="c1">// FileReader is not implemented</span></div><div class='line' id='LC170'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">frPrototype</span> <span class="o">=</span> <span class="nx">FileReader</span><span class="p">.</span><span class="nx">prototype</span><span class="p">;</span></div><div class='line' id='LC171'>&nbsp;&nbsp;<span class="c1">// Older versions of Firefox might not have readAsArrayBuffer</span></div><div class='line' id='LC172'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;readAsArrayBuffer&#39;</span> <span class="k">in</span> <span class="nx">frPrototype</span><span class="p">)</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span> <span class="c1">// readAsArrayBuffer is implemented</span></div><div class='line' id='LC174'>&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">frPrototype</span><span class="p">,</span> <span class="s1">&#39;readAsArrayBuffer&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">fileReaderReadAsArrayBuffer</span><span class="p">(</span><span class="nx">blob</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fileReader</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">FileReader</span><span class="p">();</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">originalReader</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fileReader</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">fileReaderOnload</span><span class="p">(</span><span class="nx">evt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">evt</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">buffer</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">ArrayBuffer</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">uint8Array</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Uint8Array</span><span class="p">(</span><span class="nx">buffer</span><span class="p">);</span></div><div class='line' id='LC182'><br/></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">ii</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">ii</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">uint8Array</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC185'><br/></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">originalReader</span><span class="p">,</span> <span class="s1">&#39;result&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="o">:</span> <span class="nx">buffer</span><span class="p">,</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">enumerable</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">writable</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">configurable</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC192'><br/></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">event</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createEvent</span><span class="p">(</span><span class="s1">&#39;HTMLEvents&#39;</span><span class="p">);</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">event</span><span class="p">.</span><span class="nx">initEvent</span><span class="p">(</span><span class="s1">&#39;load&#39;</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">originalReader</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fileReader</span><span class="p">.</span><span class="nx">readAsBinaryString</span><span class="p">(</span><span class="nx">blob</span><span class="p">);</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC199'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC200'><span class="p">})();</span></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'><span class="c1">// No XMLHttpRequest.response ?</span></div><div class='line' id='LC203'><span class="p">(</span><span class="kd">function</span> <span class="nx">checkXMLHttpRequestResponseCompatibility</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC204'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">xhrPrototype</span> <span class="o">=</span> <span class="nx">XMLHttpRequest</span><span class="p">.</span><span class="nx">prototype</span><span class="p">;</span></div><div class='line' id='LC205'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="s1">&#39;overrideMimeType&#39;</span> <span class="k">in</span> <span class="nx">xhrPrototype</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// IE10 might have response, but not overrideMimeType</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">xhrPrototype</span><span class="p">,</span> <span class="s1">&#39;overrideMimeType&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">xmlHttpRequestOverrideMimeType</span><span class="p">(</span><span class="nx">mimeType</span><span class="p">)</span> <span class="p">{}</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC210'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC211'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;response&#39;</span> <span class="k">in</span> <span class="nx">xhrPrototype</span> <span class="o">||</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;mozResponseArrayBuffer&#39;</span> <span class="k">in</span> <span class="nx">xhrPrototype</span> <span class="o">||</span></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;mozResponse&#39;</span> <span class="k">in</span> <span class="nx">xhrPrototype</span> <span class="o">||</span></div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;responseArrayBuffer&#39;</span> <span class="k">in</span> <span class="nx">xhrPrototype</span><span class="p">)</span></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC216'>&nbsp;&nbsp;<span class="c1">// IE9 ?</span></div><div class='line' id='LC217'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">VBArray</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">xhrPrototype</span><span class="p">,</span> <span class="s1">&#39;response&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">get</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">xmlHttpRequestResponseGet</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">Uint8Array</span><span class="p">(</span><span class="k">new</span> <span class="nx">VBArray</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">responseBody</span><span class="p">).</span><span class="nx">toArray</span><span class="p">());</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC224'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC225'><br/></div><div class='line' id='LC226'>&nbsp;&nbsp;<span class="c1">// other browsers</span></div><div class='line' id='LC227'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">responseTypeSetter</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// will be only called to set &quot;arraybuffer&quot;</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">overrideMimeType</span><span class="p">(</span><span class="s1">&#39;text/plain; charset=x-user-defined&#39;</span><span class="p">);</span></div><div class='line' id='LC230'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC231'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">xhrPrototype</span><span class="p">.</span><span class="nx">overrideMimeType</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">xhrPrototype</span><span class="p">,</span> <span class="s1">&#39;responseType&#39;</span><span class="p">,</span></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span> <span class="nx">set</span><span class="o">:</span> <span class="nx">responseTypeSetter</span> <span class="p">});</span></div><div class='line' id='LC234'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC235'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">responseGetter</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">text</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">responseText</span><span class="p">;</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Uint8Array</span><span class="p">(</span><span class="nx">n</span><span class="p">);</span></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xFF</span><span class="p">;</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC242'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC243'>&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">xhrPrototype</span><span class="p">,</span> <span class="s1">&#39;response&#39;</span><span class="p">,</span> <span class="p">{</span> <span class="nx">get</span><span class="o">:</span> <span class="nx">responseGetter</span> <span class="p">});</span></div><div class='line' id='LC244'><span class="p">})();</span></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'><span class="c1">// window.btoa (base64 encode function) ?</span></div><div class='line' id='LC247'><span class="p">(</span><span class="kd">function</span> <span class="nx">checkWindowBtoaCompatibility</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC248'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;btoa&#39;</span> <span class="k">in</span> <span class="nb">window</span><span class="p">)</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC250'><br/></div><div class='line' id='LC251'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">digits</span> <span class="o">=</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=&#39;</span><span class="p">;</span></div><div class='line' id='LC253'><br/></div><div class='line' id='LC254'>&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">btoa</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">windowBtoa</span><span class="p">(</span><span class="nx">chars</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">buffer</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">n</span><span class="p">;</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">chars</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">3</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b1</span> <span class="o">=</span> <span class="nx">chars</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xFF</span><span class="p">;</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b2</span> <span class="o">=</span> <span class="nx">chars</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xFF</span><span class="p">;</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b3</span> <span class="o">=</span> <span class="nx">chars</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">2</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xFF</span><span class="p">;</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">d1</span> <span class="o">=</span> <span class="nx">b1</span> <span class="o">&gt;&gt;</span> <span class="mi">2</span><span class="p">,</span> <span class="nx">d2</span> <span class="o">=</span> <span class="p">((</span><span class="nx">b1</span> <span class="o">&amp;</span> <span class="mi">3</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="mi">4</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">b2</span> <span class="o">&gt;&gt;</span> <span class="mi">4</span><span class="p">);</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">d3</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span> <span class="o">&lt;</span> <span class="nx">n</span> <span class="o">?</span> <span class="p">((</span><span class="nx">b2</span> <span class="o">&amp;</span> <span class="mh">0xF</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="mi">2</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">b3</span> <span class="o">&gt;&gt;</span> <span class="mi">6</span><span class="p">)</span> <span class="o">:</span> <span class="mi">64</span><span class="p">;</span></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">d4</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">2</span> <span class="o">&lt;</span> <span class="nx">n</span> <span class="o">?</span> <span class="p">(</span><span class="nx">b3</span> <span class="o">&amp;</span> <span class="mh">0x3F</span><span class="p">)</span> <span class="o">:</span> <span class="mi">64</span><span class="p">;</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">buffer</span> <span class="o">+=</span> <span class="p">(</span><span class="nx">digits</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">d1</span><span class="p">)</span> <span class="o">+</span> <span class="nx">digits</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">d2</span><span class="p">)</span> <span class="o">+</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">digits</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">d3</span><span class="p">)</span> <span class="o">+</span> <span class="nx">digits</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">d4</span><span class="p">));</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">buffer</span><span class="p">;</span></div><div class='line' id='LC268'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC269'><span class="p">})();</span></div><div class='line' id='LC270'><br/></div><div class='line' id='LC271'><span class="c1">// window.atob (base64 encode function) ?</span></div><div class='line' id='LC272'><span class="p">(</span><span class="kd">function</span> <span class="nx">checkWindowAtobCompatibility</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC273'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;atob&#39;</span> <span class="k">in</span> <span class="nb">window</span><span class="p">)</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC275'><br/></div><div class='line' id='LC276'>&nbsp;&nbsp;<span class="c1">// https://github.com/davidchambers/Base64.js</span></div><div class='line' id='LC277'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">digits</span> <span class="o">=</span></div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=&#39;</span><span class="p">;</span></div><div class='line' id='LC279'>&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">atob</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">input</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">input</span> <span class="o">=</span> <span class="nx">input</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/=+$/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">input</span><span class="p">.</span><span class="nx">length</span> <span class="o">%</span> <span class="mi">4</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;bad atob input&#39;</span><span class="p">);</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// initialize result and counters</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">bc</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">bs</span><span class="p">,</span> <span class="nx">buffer</span><span class="p">,</span> <span class="nx">idx</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">output</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// get next character</span></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">buffer</span> <span class="o">=</span> <span class="nx">input</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">idx</span><span class="o">++</span><span class="p">);</span></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// character found in table?</span></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// initialize bit storage and add its ascii value</span></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">~</span><span class="nx">buffer</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">bs</span> <span class="o">=</span> <span class="nx">bc</span> <span class="o">%</span> <span class="mi">4</span> <span class="o">?</span> <span class="nx">bs</span> <span class="o">*</span> <span class="mi">64</span> <span class="o">+</span> <span class="nx">buffer</span> <span class="o">:</span> <span class="nx">buffer</span><span class="p">,</span></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// and if not first of each 4 characters,</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// convert the first 8 bits to one ascii character</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bc</span><span class="o">++</span> <span class="o">%</span> <span class="mi">4</span><span class="p">)</span> <span class="o">?</span> <span class="nx">output</span> <span class="o">+=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mi">255</span> <span class="o">&amp;</span> <span class="nx">bs</span> <span class="o">&gt;&gt;</span> <span class="p">(</span><span class="o">-</span><span class="mi">2</span> <span class="o">*</span> <span class="nx">bc</span> <span class="o">&amp;</span> <span class="mi">6</span><span class="p">))</span> <span class="o">:</span> <span class="mi">0</span></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// try to find character in table (0-63, not found =&gt; -1)</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">buffer</span> <span class="o">=</span> <span class="nx">digits</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">buffer</span><span class="p">);</span></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC297'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">output</span><span class="p">;</span></div><div class='line' id='LC298'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC299'><span class="p">})();</span></div><div class='line' id='LC300'><br/></div><div class='line' id='LC301'><span class="c1">// Function.prototype.bind ?</span></div><div class='line' id='LC302'><span class="p">(</span><span class="kd">function</span> <span class="nx">checkFunctionPrototypeBindCompatibility</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC303'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nb">Function</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">bind</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC305'><br/></div><div class='line' id='LC306'>&nbsp;&nbsp;<span class="nb">Function</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">bind</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">functionPrototypeBind</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fn</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">headArgs</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">bound</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">functionPrototypeBindBound</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">concat</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">headArgs</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">fn</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">bound</span><span class="p">;</span></div><div class='line' id='LC313'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC314'><span class="p">})();</span></div><div class='line' id='LC315'><br/></div><div class='line' id='LC316'><span class="c1">// HTMLElement dataset property</span></div><div class='line' id='LC317'><span class="p">(</span><span class="kd">function</span> <span class="nx">checkDatasetProperty</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC318'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">div</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">);</span></div><div class='line' id='LC319'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;dataset&#39;</span> <span class="k">in</span> <span class="nx">div</span><span class="p">)</span></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span> <span class="c1">// dataset property exists</span></div><div class='line' id='LC321'><br/></div><div class='line' id='LC322'>&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">HTMLElement</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="s1">&#39;dataset&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">get</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_dataset</span><span class="p">)</span></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_dataset</span><span class="p">;</span></div><div class='line' id='LC326'><br/></div><div class='line' id='LC327'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dataset</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">jj</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">attributes</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">jj</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">attribute</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">attributes</span><span class="p">[</span><span class="nx">j</span><span class="p">];</span></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">attribute</span><span class="p">.</span><span class="nx">name</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">5</span><span class="p">)</span> <span class="o">!=</span> <span class="s1">&#39;data-&#39;</span><span class="p">)</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">attribute</span><span class="p">.</span><span class="nx">name</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">5</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\-([a-z])/g</span><span class="p">,</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span><span class="p">(</span><span class="nx">all</span><span class="p">,</span> <span class="nx">ch</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">ch</span><span class="p">.</span><span class="nx">toUpperCase</span><span class="p">();</span> <span class="p">});</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dataset</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">attribute</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC336'><br/></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;_dataset&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="o">:</span> <span class="nx">dataset</span><span class="p">,</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">writable</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">enumerable</span><span class="o">:</span> <span class="kc">false</span></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">dataset</span><span class="p">;</span></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">enumerable</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC345'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC346'><span class="p">})();</span></div><div class='line' id='LC347'><br/></div><div class='line' id='LC348'><span class="c1">// HTMLElement classList property</span></div><div class='line' id='LC349'><span class="p">(</span><span class="kd">function</span> <span class="nx">checkClassListProperty</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC350'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">div</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">);</span></div><div class='line' id='LC351'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;classList&#39;</span> <span class="k">in</span> <span class="nx">div</span><span class="p">)</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span> <span class="c1">// classList property exists</span></div><div class='line' id='LC353'><br/></div><div class='line' id='LC354'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">changeList</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">itemName</span><span class="p">,</span> <span class="nx">add</span><span class="p">,</span> <span class="nx">remove</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">className</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">list</span> <span class="o">=</span> <span class="nx">s</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="sr">/\s+/g</span><span class="p">);</span></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">list</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="nx">list</span><span class="p">.</span><span class="nx">shift</span><span class="p">();</span></div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="nx">list</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">itemName</span><span class="p">);</span></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">index</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">add</span><span class="p">)</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">list</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">itemName</span><span class="p">);</span></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">index</span> <span class="o">&gt;=</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">remove</span><span class="p">)</span></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">list</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="nx">list</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39; &#39;</span><span class="p">);</span></div><div class='line' id='LC364'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC365'><br/></div><div class='line' id='LC366'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">classListPrototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">add</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">changeList</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="kc">true</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">remove</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">changeList</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toggle</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">changeList</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="kc">true</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC376'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC377'><br/></div><div class='line' id='LC378'>&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">HTMLElement</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="s1">&#39;classList&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">get</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_classList</span><span class="p">)</span></div><div class='line' id='LC381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_classList</span><span class="p">;</span></div><div class='line' id='LC382'><br/></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">classList</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">create</span><span class="p">(</span><span class="nx">classListPrototype</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="o">:</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">writable</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">enumerable</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC388'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC390'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;_classList&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC391'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="o">:</span> <span class="nx">classList</span><span class="p">,</span></div><div class='line' id='LC392'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">writable</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC393'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">enumerable</span><span class="o">:</span> <span class="kc">false</span></div><div class='line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC395'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">classList</span><span class="p">;</span></div><div class='line' id='LC396'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC397'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">enumerable</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC398'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC399'><span class="p">})();</span></div><div class='line' id='LC400'><br/></div><div class='line' id='LC401'><span class="c1">// Check console compatibility</span></div><div class='line' id='LC402'><span class="p">(</span><span class="kd">function</span> <span class="nx">checkConsoleCompatibility</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC403'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="s1">&#39;console&#39;</span> <span class="k">in</span> <span class="nb">window</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC404'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">console</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC405'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">log</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{},</span></div><div class='line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{},</span></div><div class='line' id='LC407'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">warn</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{}</span></div><div class='line' id='LC408'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC409'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="s1">&#39;bind&#39;</span> <span class="k">in</span> <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC410'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// native functions in IE9 might not have bind</span></div><div class='line' id='LC411'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">log</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC412'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">msg</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">fn</span><span class="p">(</span><span class="nx">msg</span><span class="p">);</span> <span class="p">};</span></div><div class='line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})(</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">);</span></div><div class='line' id='LC414'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">error</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">msg</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">fn</span><span class="p">(</span><span class="nx">msg</span><span class="p">);</span> <span class="p">};</span></div><div class='line' id='LC416'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})(</span><span class="nx">console</span><span class="p">.</span><span class="nx">error</span><span class="p">);</span></div><div class='line' id='LC417'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">warn</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">msg</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">fn</span><span class="p">(</span><span class="nx">msg</span><span class="p">);</span> <span class="p">};</span></div><div class='line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})(</span><span class="nx">console</span><span class="p">.</span><span class="nx">warn</span><span class="p">);</span></div><div class='line' id='LC420'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC421'><span class="p">})();</span></div><div class='line' id='LC422'><br/></div><div class='line' id='LC423'><span class="c1">// Check onclick compatibility in Opera</span></div><div class='line' id='LC424'><span class="p">(</span><span class="kd">function</span> <span class="nx">checkOnClickCompatibility</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC425'>&nbsp;&nbsp;<span class="c1">// workaround for reported Opera bug DSK-354448:</span></div><div class='line' id='LC426'>&nbsp;&nbsp;<span class="c1">// onclick fires on disabled buttons with opaque content</span></div><div class='line' id='LC427'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">ignoreIfTargetDisabled</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC428'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isDisabled</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC429'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">event</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line' id='LC430'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC431'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC432'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">isDisabled</span><span class="p">(</span><span class="nx">node</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC433'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">node</span><span class="p">.</span><span class="nx">disabled</span> <span class="o">||</span> <span class="p">(</span><span class="nx">node</span><span class="p">.</span><span class="nx">parentNode</span> <span class="o">&amp;&amp;</span> <span class="nx">isDisabled</span><span class="p">(</span><span class="nx">node</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">));</span></div><div class='line' id='LC434'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC435'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;Opera&#39;</span><span class="p">)</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC436'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// use browser detection since we cannot feature-check this bug</span></div><div class='line' id='LC437'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">document</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="nx">ignoreIfTargetDisabled</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC438'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC439'><span class="p">})();</span></div><div class='line' id='LC440'><br/></div><div class='line' id='LC441'><span class="c1">// Checks if navigator.language is supported</span></div><div class='line' id='LC442'><span class="p">(</span><span class="kd">function</span> <span class="nx">checkNavigatorLanguage</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC443'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;language&#39;</span> <span class="k">in</span> <span class="nx">navigator</span><span class="p">)</span></div><div class='line' id='LC444'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC445'>&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">navigator</span><span class="p">,</span> <span class="s1">&#39;language&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC446'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">get</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">navigatorLanguage</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC447'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">language</span> <span class="o">=</span> <span class="nx">navigator</span><span class="p">.</span><span class="nx">userLanguage</span> <span class="o">||</span> <span class="s1">&#39;en-US&#39;</span><span class="p">;</span></div><div class='line' id='LC448'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">language</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">2</span><span class="p">).</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">+</span></div><div class='line' id='LC449'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">language</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">2</span><span class="p">).</span><span class="nx">toUpperCase</span><span class="p">();</span></div><div class='line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC451'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">enumerable</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC452'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC453'><span class="p">})();</span></div><div class='line' id='LC454'><br/></div><div class='line' id='LC455'><span class="p">(</span><span class="kd">function</span> <span class="nx">checkRangeRequests</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC456'>&nbsp;&nbsp;<span class="c1">// Safari has issues with cached range requests see:</span></div><div class='line' id='LC457'>&nbsp;&nbsp;<span class="c1">// https://github.com/mozilla/pdf.js/issues/3260</span></div><div class='line' id='LC458'>&nbsp;&nbsp;<span class="c1">// Last tested with version 6.0.4.</span></div><div class='line' id='LC459'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">isSafari</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span></div><div class='line' id='LC460'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">HTMLElement</span><span class="p">).</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;Constructor&#39;</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC461'><br/></div><div class='line' id='LC462'>&nbsp;&nbsp;<span class="c1">// Older versions of Android (pre 3.0) has issues with range requests, see:</span></div><div class='line' id='LC463'>&nbsp;&nbsp;<span class="c1">// https://github.com/mozilla/pdf.js/issues/3381.</span></div><div class='line' id='LC464'>&nbsp;&nbsp;<span class="c1">// Make sure that we only match webkit-based Android browsers,</span></div><div class='line' id='LC465'>&nbsp;&nbsp;<span class="c1">// since Firefox/Fennec works as expected.</span></div><div class='line' id='LC466'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">regex</span> <span class="o">=</span> <span class="sr">/Android\s[0-2][^\d]/</span><span class="p">;</span></div><div class='line' id='LC467'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">isOldAndroid</span> <span class="o">=</span> <span class="nx">regex</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">);</span></div><div class='line' id='LC468'><br/></div><div class='line' id='LC469'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isSafari</span> <span class="o">||</span> <span class="nx">isOldAndroid</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC470'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">PDFJS</span><span class="p">.</span><span class="nx">disableRange</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC471'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC472'><span class="p">})();</span></div><div class='line' id='LC473'><br/></div><div class='line' id='LC474'><span class="c1">// Check if the browser supports manipulation of the history.</span></div><div class='line' id='LC475'><span class="p">(</span><span class="kd">function</span> <span class="nx">checkHistoryManipulation</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC476'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">history</span><span class="p">.</span><span class="nx">pushState</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC477'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">PDFJS</span><span class="p">.</span><span class="nx">disableHistory</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC478'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC479'><span class="p">})();</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.02990s from github-fe131-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/mozilla/pdf.js/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

