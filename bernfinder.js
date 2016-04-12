// ==UserScript==
// @name         bernfinder
// @namespace    https://tampermonkey.net/
// @version      0.1
// @description  bernfinder
// @author       zurlocke
// @include      https://twitter.com/*
// @updateURL    https://raw.githubusercontent.com/zurlocke/bernfinder/master/bernfinder.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    $(".dashboard.dashboard-right").prepend("<div class='bernfinder.main'>Test123</div>");
})();
