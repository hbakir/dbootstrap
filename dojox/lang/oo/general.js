//>>built
define("dojox/lang/oo/general",["dojo","dijit","dojox","dojo/require!dojox/lang/oo/Decorator"],function(e,h,g){e.provide("dojox.lang.oo.general");e.require("dojox.lang.oo.Decorator");(function(){var a=g.lang.oo,d=a.makeDecorator,a=a.general,f=e.isFunction;a.augment=d(function(a,c,b){return"undefined"==typeof b?c:b});a.override=d(function(a,c,b){return"undefined"!=typeof b?c:b});a.shuffle=d(function(a,c,b){return f(b)?function(){return b.apply(this,c.apply(this,arguments))}:b});a.wrap=d(function(a,
c,b){return function(){return c.call(this,b,arguments)}});a.tap=d(function(a,c){return function(){c.apply(this,arguments);return this}});a.before=d(function(a,c,b){return f(b)?function(){c.apply(this,arguments);return b.apply(this,arguments)}:c});a.after=d(function(a,c,b){return f(b)?function(){b.apply(this,arguments);return c.apply(this,arguments)}:c})})()});