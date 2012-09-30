//>>built
define("dijit/Menu","require,dojo/_base/array,dojo/_base/declare,dojo/_base/event,dojo/dom,dojo/dom-attr,dojo/dom-geometry,dojo/dom-style,dojo/keys,dojo/_base/lang,dojo/on,dojo/sniff,dojo/_base/window,dojo/window,./popup,./DropDownMenu,dojo/ready".split(","),function(r,k,s,o,l,i,m,p,t,q,j,h,g,u,n,v,w){h("dijit-legacy-requires")&&w(0,function(){r(["dijit/MenuItem","dijit/PopupMenuItem","dijit/CheckedMenuItem","dijit/MenuSeparator"])});return s("dijit.Menu",v,{constructor:function(){this._bindings=
[]},targetNodeIds:[],selector:"",contextMenuForWindow:!1,leftClickToOpen:!1,refocus:!0,postCreate:function(){this.contextMenuForWindow?this.bindDomNode(this.ownerDocumentBody):k.forEach(this.targetNodeIds,this.bindDomNode,this);this.inherited(arguments)},_iframeContentWindow:function(a){return u.get(this._iframeContentDocument(a))||this._iframeContentDocument(a).__parent__||a.name&&g.doc.frames[a.name]||null},_iframeContentDocument:function(a){return a.contentDocument||a.contentWindow&&a.contentWindow.document||
a.name&&g.doc.frames[a.name]&&g.doc.frames[a.name].document||null},bindDomNode:function(a){var a=l.byId(a,this.ownerDocument),c;if("iframe"==a.tagName.toLowerCase()){var b=a,d=this._iframeContentWindow(b);c=g.body(d.document)}else c=a==g.body(this.ownerDocument)?this.ownerDocument.documentElement:a;var e={node:a,iframe:b};i.set(a,"_dijitMenu"+this.id,this._bindings.push(e));var f=q.hitch(this,function(a){var c=this.selector,d=c?function(a){return j.selector(c,a)}:function(a){return a},e=this;return[j(a,
d(this.leftClickToOpen?"click":"contextmenu"),function(a){o.stop(a);e._scheduleOpen(this,b,{x:a.pageX,y:a.pageY})}),j(a,d("keydown"),function(a){a.shiftKey&&a.keyCode==t.F10&&(o.stop(a),e._scheduleOpen(this,b))})]});e.connects=c?f(c):[];if(b)e.onloadHandler=q.hitch(this,function(){var a=this._iframeContentWindow(b);c=g.body(a.document);e.connects=f(c)}),b.addEventListener?b.addEventListener("load",e.onloadHandler,!1):b.attachEvent("onload",e.onloadHandler)},unBindDomNode:function(a){var c;try{c=l.byId(a,
this.ownerDocument)}catch(b){return}a="_dijitMenu"+this.id;if(c&&i.has(c,a)){for(var d=i.get(c,a)-1,e=this._bindings[d],f;f=e.connects.pop();)f.remove();(f=e.iframe)&&(f.removeEventListener?f.removeEventListener("load",e.onloadHandler,!1):f.detachEvent("onload",e.onloadHandler));i.remove(c,a);delete this._bindings[d]}},_scheduleOpen:function(a,c,b){if(!this._openTimer)this._openTimer=this.defer(function(){delete this._openTimer;this._openMyself({target:a,iframe:c,coords:b})},1)},_openMyself:function(a){function c(){j.refocus&&
k&&k.focus();n.close(j)}var b=a.target,d=a.iframe,a=a.coords;this.currentTarget=b;if(a){if(d){var b=m.position(d,!0),e=this._iframeContentWindow(d),e=m.docScroll(e.document),f=p.getComputedStyle(d),g=p.toPixelValue,i=(h("ie")&&h("quirks")?0:g(d,f.paddingLeft))+(h("ie")&&h("quirks")?g(d,f.borderLeftWidth):0),d=(h("ie")&&h("quirks")?0:g(d,f.paddingTop))+(h("ie")&&h("quirks")?g(d,f.borderTopWidth):0);a.x+=b.x+i-e.x;a.y+=b.y+d-e.y}}else a=m.position(b,!0),a.x+=10,a.y+=10;var j=this,d=this._focusManager.get("prevNode"),
b=this._focusManager.get("curNode"),k=!b||l.isDescendant(b,this.domNode)?d:b;n.open({popup:this,x:a.x,y:a.y,onExecute:c,onCancel:c,orient:this.isLeftToRight()?"L":"R"});this.focus();this._onBlur=function(){this.inherited("_onBlur",arguments);n.close(this)}},destroy:function(){k.forEach(this._bindings,function(a){a&&this.unBindDomNode(a.node)},this);this.inherited(arguments)}})});