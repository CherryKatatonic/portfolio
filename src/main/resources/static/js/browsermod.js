// Detect browser with duck-typing
// Opera 8.0+
var opera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var firefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]"
var safari = /constructor/i.test(window.HTMLElement)
        || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari']
        || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var explorer = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var edge = !explorer && !!window.StyleMedia;

// Chrome 1+
var chrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var blink = (chrome || opera) && !!window.CSS;

// Apply different styles in FireFox for parallax scrolling
if (firefox) {
    $('.section').css('transform-style', 'preserve-3d');
    $('.static').css({'z-index': 1, 'height': '100vh'});
    $('.static-main').css('background', 'none');
}