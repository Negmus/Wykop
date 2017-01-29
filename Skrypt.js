// ==UserScript==
// @name         Wykop
// @namespace    http://www.wykop.pl/ludzie/wpisy/*
// @version      0.1
// @description  Wykop to ciota i chuj
// @require       http://cdn.jsdelivr.net/jquery/2.1.3/jquery.min.js
// @author       Negmus
// @match        http://www.wykop.pl/ludzie/wpisy/*
// ==/UserScript==
$("p.info.m-reset-float").click(function(){
    var all = $(".red").map(function() {
    return this.innerHTML;
}).get();
var wpis=all[0];
wpis = wpis.replace(/\s/g, '');
wpis=parseFloat(wpis);
l=wpis/26;
a=parseFloat(l);
a=Math.ceil(l);
wpis=wpis+a;
c=wpis/26;
c=Math.ceil(c);
var url= window.location.href;
window.location.replace(url+"strona/"+c);
});


