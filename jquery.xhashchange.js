/*!
 * jQuery Plugin: xHashchange - version 0.1
 * http://github.com/hail2u/jquery.xHashchange
 * Add hashchange event to any browser.
 *
 * Copyright (c) 2009 Kyo Nagashima <kyo@hail2u.net>
 * This library licensed under MIT license:
 * http://opensource.org/licenses/mit-license.php
 */
(function ($) {
  $.fn.hashchange = function (handler) {
    $(window).bind("hashchange", handler);

    return this;
  };

  $.xHashchange = function () {
    var o = $.xHashchange.defaults;

    if (hasOnhashchange()) {
      $(window).trigger("hashchange");
    } else {
      var hash = null;
      var intervalID = null;
      var interval = 0;

      if (hash === null) {
        hash = location.hash;
      }

      if (intervalID !== null) {
        clearInterval(intervalID);
      }

      if (interval !== o.interval) {
        intervalID = setInterval(function () {
          if (hash !== location.hash) {
            hash = location.hash;
            $(window).trigger("hashchange");
          }
        }, o.interval);
        interval = o.interval;
      }
    }

    return this;
  };

  // Private: check whether onhashchange event is supported or not
  function hasOnhashchange () {
    return typeof window.onhashchange !== "undefined";
  }

  // Public: default options
  $.xHashchange.defaults = {
    interval: 500
  };

  $.xHashchange();
})(jQuery);
