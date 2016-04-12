// ==UserScript==
// @name         bernfinder
// @namespace    https://tampermonkey.net/
// @version      0.2
// @description  bernfinder
// @author       zurlocke
// @include      https://twitter.com/*
// @updateURL    https://raw.githubusercontent.com/zurlocke/bernfinder/master/bernfinder.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    $(".dashboard.dashboard-right").prepend("<div class='bernfinder-main'><div class='bernfinder-outer'><div class='bernfinder-inner'><div class='bernfinder-innersec'><div class='bernfinder-innerthree'><button type='button' class='bernbutton-main'></button></div></div></div></div></div>");
})();

$(function(){
    var destination = $(".bernfinder-main").eq(0);
    var source = $(".Footer.module.roaming-module")[0];

    for (i = 0; i < source.attributes.length; i++)
    {
        var a = source.attributes[i];
        destination.attr(a.name, a.value);
    }
});

$(function(){
    var destination = $(".bernfinder-outer").eq(0);
    var source = $(".flex-module")[0];

    for (i = 0; i < source.attributes.length; i++)
    {
        var a = source.attributes[i];
        destination.attr(a.name, a.value);
    }
});

$(function(){
    var destination = $(".bernfinder-inner").eq(0);
    var source = $(".js-recommended-followers.dashboard-user-recommendations.flex-module-inner")[0];

    for (i = 0; i < source.attributes.length; i++)
    {
        var a = source.attributes[i];
        destination.attr(a.name, a.value);
    }
});

$(function(){
    var destination = $(".bernfinder-innersec").eq(0);
    var source = $(".js-account-summary.account-summary.js-actionable-user ")[0];

    for (i = 0; i < source.attributes.length; i++)
    {
        var a = source.attributes[i];
        destination.attr(a.name, a.value);
    }
});

$(function(){
    var destination = $(".bernfinder-innerthree").eq(0);
    var source = $(".user-actions.not-following.not-muting")[0];

    for (i = 0; i < source.attributes.length; i++)
    {
        var a = source.attributes[i];
        destination.attr(a.name, a.value);
    }
});

$(function(){
    var destination = $(".bernbutton-main").eq(0);
    var source = $(".small-follow-btn.follow-btn.btn.small.follow-button.js-recommended-item")[0];

    for (i = 0; i < source.attributes.length; i++)
    {
        var a = source.attributes[i];
        destination.attr(a.name, a.value);
    }
});
