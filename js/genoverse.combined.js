(function () {

/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*! jQuery UI - v1.10.2 - 2013-04-29
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.resizable.js, jquery.ui.sortable.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,m,g,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,m=_.height,g=_.offset,v=t.extend({},g),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=m:"center"===e.at[1]&&(v.top+=m/2),a=i(k.at,p,m),v.left+=a[0],v.top+=a[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,T=d+_+s(this,"marginBottom")+w.height,C=t.extend({},v),M=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?C.left-=u:"center"===e.my[0]&&(C.left-=u/2),"bottom"===e.my[1]?C.top-=d:"center"===e.my[1]&&(C.top-=d/2),C.left+=M[0],C.top+=M[1],t.support.offsetFractions||(C.left=h(C.left),C.top=h(C.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](C,{targetWidth:p,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:T,offset:[a[0]+M[0],a[1]+M[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=g.left-C.left,s=i+p-u,n=g.top-C.top,a=n+m-d,h={target:{element:b,left:g.left,top:g.top,width:p,height:m},element:{element:c,left:C.left,top:C.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>m&&m>r(n+a)&&(h.vertical="middle"),h.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(C,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-o-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-o-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>c?(s=t.top+p+f+m+e.collisionHeight-o-a,t.top+p+f+m>c&&(0>s||r(c)>s)&&(t.top+=p+f+m)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-h,t.top+p+f+m>u&&(i>0||u>r(i))&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),i.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i,s=this,n=!1,a=!1;for(e.ui.ddmanager&&!this.options.dropBehaviour&&(a=e.ui.ddmanager.drop(this,t)),this.dropped&&(a=this.dropped,this.dropped=!1),i=this.element[0];i&&(i=i.parentNode);)i===document&&(n=!0);return n||"original"!==this.options.helper?("invalid"===this.options.revert&&!a||"valid"===this.options.revert&&a||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,a)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){s._trigger("stop",t)!==!1&&s._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1):!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;if("parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=["document"===n.containment?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,"document"===n.containment?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,("document"===n.containment?0:e(window).scrollLeft())+e("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,("document"===n.containment?0:e(window).scrollTop())+(e("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||n.containment.constructor===Array)n.containment.constructor===Array&&(this.containment=n.containment);else{if(i=e(n.containment),s=i[0],!s)return;t="hidden"!==e(s).css("overflow"),this.containment=[(parseInt(e(s).css("borderLeftWidth"),10)||0)+(parseInt(e(s).css("paddingLeft"),10)||0),(parseInt(e(s).css("borderTopWidth"),10)||0)+(parseInt(e(s).css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(e(s).css("borderRightWidth"),10)||0)-(parseInt(e(s).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(e(s).css("borderBottomWidth"),10)||0)-(parseInt(e(s).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i}},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n,a,o=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName),l=t.pageX,u=t.pageY;return this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(u=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(u=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((u-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,u=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,l=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a)),{top:u-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var s=e(this).data("ui-draggable"),n=s.options,a=e.extend({},i,{item:s.element});s.sortables=[],e(n.connectToSortable).each(function(){var i=e.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,a))})},stop:function(t,i){var s=e(this).data("ui-draggable"),n=e.extend({},i,{item:s.element});e.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,n))})},drag:function(t,i){var s=e(this).data("ui-draggable"),n=this;e.each(s.sortables,function(){var a=!1,o=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,e.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",t),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",t),s.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),i=e(this).data("ui-draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor")),t.css("cursor",i.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._opacity&&e(i.helper).css("opacity",s._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var i=e(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-t.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-t.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-e(document).scrollTop()<s.scrollSensitivity?n=e(document).scrollTop(e(document).scrollTop()-s.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<s.scrollSensitivity&&(n=e(document).scrollTop(e(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-e(document).scrollLeft()<s.scrollSensitivity?n=e(document).scrollLeft(e(document).scrollLeft()-s.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<s.scrollSensitivity&&(n=e(document).scrollLeft(e(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),i=t.options;t.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=e(this),s=i.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(t,i){var s,n,a,o,r,h,l,u,c,d,p=e(this).data("ui-draggable"),f=p.options,m=f.snapTolerance,g=i.offset.left,v=g+p.helperProportions.width,y=i.offset.top,b=y+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--)r=p.snapElements[c].left,h=r+p.snapElements[c].width,l=p.snapElements[c].top,u=l+p.snapElements[c].height,g>r-m&&h+m>g&&y>l-m&&u+m>y||g>r-m&&h+m>g&&b>l-m&&u+m>b||v>r-m&&h+m>v&&y>l-m&&u+m>y||v>r-m&&h+m>v&&b>l-m&&u+m>b?("inner"!==f.snapMode&&(s=m>=Math.abs(l-b),n=m>=Math.abs(u-y),a=m>=Math.abs(r-v),o=m>=Math.abs(h-g),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||a||o,"outer"!==f.snapMode&&(s=m>=Math.abs(l-y),n=m>=Math.abs(u-b),a=m>=Math.abs(r-g),o=m>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(s||n||a||o||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=s||n||a||o||d):(p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1)}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,i=this.data("ui-draggable").options,s=e.makeArray(e(i.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});s.length&&(t=parseInt(e(s[0]).css("zIndex"),10)||0,e(s).each(function(i){e(this).css("zIndex",t+i)}),this.css("zIndex",t+s.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._zIndex&&e(i.helper).css("zIndex",s._zIndex)}})})(jQuery);(function(e){function t(e){return parseInt(e,10)||0}function i(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=e(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(i){var s,n,a,o=this.options,r=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=t(this.helper.css("left")),n=t(this.helper.css("top")),o.containment&&(s+=e(o.containment).scrollLeft()||0,n+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,a=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===a?this.axis+"-resize":a),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(t){var i,s=this.helper,n={},a=this.originalMousePosition,o=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,u=this.size.height,c=t.pageX-a.left||0,d=t.pageY-a.top||0,p=this._change[o];return p?(i=p.apply(this,[t,c,d]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==u&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(n)||this._trigger("resize",t,this.ui()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&e.ui.hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,s,n,a,o,r=this.options;o={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||e)&&(t=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,s=o.maxHeight*this.aspectRatio,a=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),n>o.minHeight&&(o.minHeight=n),o.maxWidth>s&&(o.maxWidth=s),o.maxHeight>a&&(o.maxHeight=a)),this._vBoundaries=o},_updateCache:function(e){this.offset=this.helper.offset(),i(e.left)&&(this.position.left=e.left),i(e.top)&&(this.position.top=e.top),i(e.height)&&(this.size.height=e.height),i(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,s=this.size,n=this.axis;return i(e.height)?e.width=e.height*this.aspectRatio:i(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===n&&(e.left=t.left+(s.width-e.width),e.top=null),"nw"===n&&(e.top=t.top+(s.height-e.height),e.left=t.left+(s.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,s=this.axis,n=i(e.width)&&t.maxWidth&&t.maxWidth<e.width,a=i(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=i(e.width)&&t.minWidth&&t.minWidth>e.width,r=i(e.height)&&t.minHeight&&t.minHeight>e.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,u=/sw|nw|w/.test(s),c=/nw|ne|n/.test(s);return o&&(e.width=t.minWidth),r&&(e.height=t.minHeight),n&&(e.width=t.maxWidth),a&&(e.height=t.maxHeight),o&&u&&(e.left=h-t.minWidth),n&&u&&(e.left=h-t.maxWidth),r&&c&&(e.top=l-t.minHeight),a&&c&&(e.top=l-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var e,t,i,s,n,a=this.helper||this.element;for(e=0;this._proportionallyResizeElements.length>e;e++){if(n=this._proportionallyResizeElements[e],!this.borderDif)for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],t=0;i.length>t;t++)this.borderDif[t]=(parseInt(i[t],10)||0)+(parseInt(s[t],10)||0);n.css({height:a.height()-this.borderDif[0]-this.borderDif[2]||0,width:a.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&e.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,a,o,r,h,l=e(this).data("ui-resizable"),u=l.options,c=l.element,d=u.containment,p=d instanceof e?d.get(0):/parent/.test(d)?c.parent().get(0):d;p&&(l.containerElement=e(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(i=e(p),s=[],e(["Top","Right","Left","Bottom"]).each(function(e,n){s[e]=t(i.css("padding"+n))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,a=l.containerSize.height,o=l.containerSize.width,r=e.ui.hasScroll(p,"left")?p.scrollWidth:o,h=e.ui.hasScroll(p)?p.scrollHeight:a,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))},resize:function(t){var i,s,n,a,o=e(this).data("ui-resizable"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,c={top:0,left:0},d=o.containerElement;d[0]!==document&&/static/.test(d.css("position"))&&(c=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-c.left),u&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?h.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,i=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),s=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-h.top)+o.sizeDiff.height),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a&&(i-=o.parentData.left),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)})},resize:function(t,i){var s=e(this).data("ui-resizable"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(t,s){e(t).each(function(){var t=e(this),n=e(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var i=(n[t]||0)+(r[t]||0);i&&i>=0&&(a[t]=i||null)}),t.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):e.each(n.alsoResize,function(e,t){h(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size,n=t.originalSize,a=t.originalPosition,o=t.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,u=Math.round((s.width-n.width)/h)*h,c=Math.round((s.height-n.height)/l)*l,d=n.width+u,p=n.height+c,f=i.maxWidth&&d>i.maxWidth,m=i.maxHeight&&p>i.maxHeight,g=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;i.grid=r,g&&(d+=h),v&&(p+=l),f&&(d-=h),m&&(p-=l),/^(se|s|e)$/.test(o)?(t.size.width=d,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.top=a.top-c):/^(sw)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.left=a.left-u):(t.size.width=d,t.size.height=p,t.position.top=a.top-c,t.position.left=a.left-u)}})})(jQuery);(function(t){function e(t,e,i){return t>e&&e+i>t}function i(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))}t.widget("ui.sortable",t.ui.mouse,{version:"1.10.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===t.axis||i(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_setOption:function(e,i){"disabled"===e?(this.options[e]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):t.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(e,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,a.widgetName+"-item")===a?(s=t(this),!1):undefined}),t.data(e.target,a.widgetName+"-item")===a&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=t("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:e.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:e.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(e.pageY-t(document).scrollTop()<o.scrollSensitivity?r=t(document).scrollTop(t(document).scrollTop()-o.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<o.scrollSensitivity&&(r=t(document).scrollTop(t(document).scrollTop()+o.scrollSpeed)),e.pageX-t(document).scrollLeft()<o.scrollSensitivity?r=t(document).scrollLeft(t(document).scrollLeft()-o.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<o.scrollSensitivity&&(r=t(document).scrollLeft(t(document).scrollLeft()+o.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=t.left,o=a+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u=s+l>r&&h>s+l&&e+c>a&&o>e+c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?u:e+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var i="x"===this.options.axis||e(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||e(this.positionAbs.left+this.offset.click.left,t.left,t.width),n=i&&s,a=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return n?this.floating?o&&"right"===o||"down"===a?2:1:a&&("down"===a?2:1):!1},_intersectsWithSides:function(t){var i=e(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),s=e(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return this.floating&&a?"right"===a&&s||"left"===a&&!s:n&&("down"===n&&i||"up"===n&&!i)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){var i,s,n,a,o=[],r=[],h=this._connectWith();if(h&&e)for(i=h.length-1;i>=0;i--)for(n=t(h[i]),s=n.length-1;s>=0;s--)a=t.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&r.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(r.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),i=r.length-1;i>=0;i--)r[i][0].each(function(){o.push(this)});return t(o)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i]),s=n.length-1;s>=0;s--)a=t.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(u.push([t.isFunction(a.options.items)?a.options.items.call(a.element[0],e,{item:this.currentItem}):t(a.options.items,a.element),a]),this.containers.push(a));for(i=u.length-1;i>=0;i--)for(o=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",o),c.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t(e.document[0].createElement(s)).addClass(i||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?n.append("<td colspan='99'>&#160;</td>"):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_contactContainers:function(s){var n,a,o,r,h,l,c,u,d,p,f=null,m=null;for(n=this.containers.length-1;n>=0;n--)if(!t.contains(this.currentItem[0],this.containers[n].element[0]))if(this._intersectsWith(this.containers[n].containerCache)){if(f&&t.contains(this.containers[n].element[0],f.element[0]))continue;f=this.containers[n],m=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",s,this._uiHash(this)),this.containers[n].containerCache.over=0);if(f)if(1===this.containers.length)this.containers[m].containerCache.over||(this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1);else{for(o=1e4,r=null,p=f.floating||i(this.currentItem),h=p?"left":"top",l=p?"width":"height",c=this.positionAbs[h]+this.offset.click[h],a=this.items.length-1;a>=0;a--)t.contains(this.containers[m].element[0],this.items[a].item[0])&&this.items[a].item[0]!==this.currentItem[0]&&(!p||e(this.positionAbs.top+this.offset.click.top,this.items[a].top,this.items[a].height))&&(u=this.items[a].item.offset()[h],d=!1,Math.abs(u-c)>Math.abs(u+this.items[a][l]-c)&&(d=!0,u+=this.items[a][l]),o>Math.abs(u-c)&&(o=Math.abs(u-c),r=this.items[a],this.direction=d?"up":"down"));if(!r&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[m])return;r?this._rearrange(s,r,null,!0):this._rearrange(s,null,this.containers[m].element,!0),this._trigger("change",s,this._uiHash()),this.containers[m]._trigger("change",s,this._uiHash(this)),this.currentContainer=this.containers[m],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,a=e.pageX,o=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){this.reverting=!1;var i,s=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(i in this._storedCSS)("auto"===this._storedCSS[i]||"static"===this._storedCSS[i])&&(this._storedCSS[i]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&s.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||s.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(s.push(function(t){this._trigger("remove",t,this._uiHash())}),s.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),s.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),i=this.containers.length-1;i>=0;i--)e||s.push(function(t){return function(e){t._trigger("deactivate",e,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over&&(s.push(function(t){return function(e){t._trigger("out",e,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!e){for(this._trigger("beforeStop",t,this._uiHash()),i=0;s.length>i;i++)s[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}if(e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!e){for(i=0;s.length>i;i++)s[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})})(jQuery);

/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);

/**
 * jQuery mousehold plugin - fires an event while the mouse is clicked down.
 * Additionally, the function, when executed, is passed a single
 * argument representing the count of times the event has been fired during
 * this session of the mouse hold.
 *
 * @author Remy Sharp (leftlogic.com)
 * @date 2006-12-15
 * @example $("img").mousehold(200, function(i){  })
 * @desc Repeats firing the passed function while the mouse is clicked down
 *
 * @name mousehold
 * @type jQuery
 * @param Number timeout The frequency to repeat the event in milliseconds
 * @param Function fn A function to execute
 * @cat Plugin
 */

(function($) {

$.fn.mousehold = function(timeout, f) {
  if (timeout && typeof timeout == 'function') {
    f = timeout;
    timeout = 100;
  }
  if (f && typeof f == 'function') {
    var timer = 0;
    var fireStep = 0;
    return this.each(function() {
      $(this).mousedown(function() {
        fireStep = 1;
        var ctr = 0;
        var t = this;
        timer = setInterval(function() {
          ctr++;
          f.call(t, ctr);
          fireStep = 2;
        }, timeout);
      })

      clearMousehold = function() {
        clearInterval(timer);
        if (fireStep == 1) f.call(this, 1);
        fireStep = 0;
      }
      
      $(this).mouseout(clearMousehold);
      $(this).mouseup(clearMousehold);
    })
  }
}

})(jQuery);


// tipsy, facebook style tooltips for jquery
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// released under the MIT license

(function($) {
    
    function maybeCall(thing, ctx) {
        return (typeof thing == 'function') ? (thing.call(ctx)) : thing;
    };
    
    function isElementInDOM(ele) {
      while (ele = ele.parentNode) {
        if (ele == document) return true;
      }
      return false;
    };
    
    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        this.fixTitle();
    };
    
    Tipsy.prototype = {
        show: function() {
            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip();
                
                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy'; // reset classname in case of dynamic gravity
                $tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).prependTo(document.body);
                
                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });
                
                var actualWidth = $tip[0].offsetWidth,
                    actualHeight = $tip[0].offsetHeight,
                    gravity = maybeCall(this.options.gravity, this.$element[0]);
                
                var tp;
                switch (gravity.charAt(0)) {
                    case 'n':
                        tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 's':
                        tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 'e':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset};
                        break;
                    case 'w':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset};
                        break;
                }
                
                if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15;
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                    }
                }
                
                $tip.css(tp).addClass('tipsy-' + gravity);
                $tip.find('.tipsy-arrow')[0].className = 'tipsy-arrow tipsy-arrow-' + gravity.charAt(0);
                if (this.options.className) {
                    $tip.addClass(maybeCall(this.options.className, this.$element[0]));
                }
                
                if (this.options.fade) {
                    $tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: this.options.opacity});
                } else {
                    $tip.css({visibility: 'visible', opacity: this.options.opacity});
                }
            }
        },
        
        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() { $(this).remove(); });
            } else {
                this.tip().remove();
            }
        },
        
        fixTitle: function() {
            var $e = this.$element;
            if ($e.attr('title') || typeof($e.attr('original-title')) != 'string') {
                $e.attr('original-title', $e.attr('title') || '').removeAttr('title');
            }
        },
        
        getTitle: function() {
            var title, $e = this.$element, o = this.options;
            this.fixTitle();
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0]);
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },
        
        tip: function() {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
                this.$tip.data('tipsy-pointee', this.$element[0]);
            }
            return this.$tip;
        },
        
        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },
        
        enable: function() { this.enabled = true; },
        disable: function() { this.enabled = false; },
        toggleEnabled: function() { this.enabled = !this.enabled; }
    };
    
    $.fn.tipsy = function(options) {
        
        if (options === true) {
            return this.data('tipsy');
        } else if (typeof options == 'string') {
            var tipsy = this.data('tipsy');
            if (tipsy) tipsy[options]();
            return this;
        }
        
        options = $.extend({}, $.fn.tipsy.defaults, options);
        
        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
                $.data(ele, 'tipsy', tipsy);
            }
            return tipsy;
        }
        
        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show();
            } else {
                tipsy.fixTitle();
                setTimeout(function() { if (tipsy.hoverState == 'in') tipsy.show(); }, options.delayIn);
            }
        };
        
        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut == 0) {
                tipsy.hide();
            } else {
                setTimeout(function() { if (tipsy.hoverState == 'out') tipsy.hide(); }, options.delayOut);
            }
        };
        
        if (!options.live) this.each(function() { get(this); });
        
        if (options.trigger != 'manual') {
            var binder   = options.live ? 'live' : 'bind',
                eventIn  = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave);
        }
        
        return this;
        
    };
    
    $.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover'
    };
    
    $.fn.tipsy.revalidate = function() {
      $('.tipsy').each(function() {
        var pointee = $.data(this, 'tipsy-pointee');
        if (!pointee || !isElementInDOM(pointee)) {
          $(this).remove();
        }
      });
    };
    
    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function(ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };
    
    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };
    
    $.fn.tipsy.autoWE = function() {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };
    
    /**
     * yields a closure of the supplied parameters, producing a function that takes
     * no arguments and is suitable for use as an autogravity function like so:
     *
     * @param margin (int) - distance from the viewable region edge that an
     *        element should be before setting its tooltip's gravity to be away
     *        from that edge.
     * @param prefer (string, e.g. 'n', 'sw', 'w') - the direction to prefer
     *        if there are no viewable region edges effecting the tooltip's
     *        gravity. It will try to vary from this minimally, for example,
     *        if 'sw' is preferred and an element is near the right viewable 
     *        region edge, but not the top edge, it will set the gravity for
     *        that element's tooltip to be 'se', preserving the southern
     *        component.
     */
     $.fn.tipsy.autoBounds = function(margin, prefer) {
		return function() {
			var dir = {ns: prefer[0], ew: (prefer.length > 1 ? prefer[1] : false)},
			    boundTop = $(document).scrollTop() + margin,
			    boundLeft = $(document).scrollLeft() + margin,
			    $this = $(this);

			if ($this.offset().top < boundTop) dir.ns = 'n';
			if ($this.offset().left < boundLeft) dir.ew = 'w';
			if ($(window).width() + $(document).scrollLeft() - $this.offset().left < margin) dir.ew = 'e';
			if ($(window).height() + $(document).scrollTop() - $this.offset().top < margin) dir.ns = 's';

			return dir.ns + (dir.ew ? dir.ew : '');
		}
	};
    
})(jQuery);

/*
	Base.js, version 1.1
	Copyright 2006-2007, Dean Edwards
	License: http://www.opensource.org/licenses/mit-license.php
*/

var Base = function() {
	// dummy
};

Base.extend = function(_instance, _static) { // subclass
	var extend = Base.prototype.extend;
	
	// build the prototype
	Base._prototyping = true;
	var proto = new this;
	extend.call(proto, _instance);
	delete Base._prototyping;
	
	// create the wrapper for the constructor function
	//var constructor = proto.constructor.valueOf(); //-dean
	var constructor = proto.constructor;
	var klass = proto.constructor = function() {
		if (!Base._prototyping) {
			if (this._constructing || this.constructor == klass) { // instantiation
				this._constructing = true;
				constructor.apply(this, arguments);
				delete this._constructing;
			} else if (arguments[0] != null) { // casting
				return (arguments[0].extend || extend).call(arguments[0], proto);
			}
		}
	};
	
	// build the class interface
	klass.ancestor = this;
	klass.extend = this.extend;
	klass.forEach = this.forEach;
	klass.implement = this.implement;
	klass.prototype = proto;
	klass.toString = this.toString;
	klass.valueOf = function(type) {
		//return (type == "object") ? klass : constructor; //-dean
		return (type == "object") ? klass : constructor.valueOf();
	};
	extend.call(klass, _static);
	// class initialisation
	if (typeof klass.init == "function") klass.init();
	return klass;
};

Base.prototype = {	
	extend: function(source, value) {
		if (arguments.length > 1) { // extending with a name/value pair
			var ancestor = this[source];
			if (ancestor && (typeof value == "function") && // overriding a method?
				// the valueOf() comparison is to avoid circular references
				(!ancestor.valueOf || ancestor.valueOf() != value.valueOf()) &&
				/\bbase\b/.test(value)) {
				// get the underlying method
				var method = value.valueOf();
				// override
				value = function() {
					var previous = this.base || Base.prototype.base;
					this.base = ancestor;
					var returnValue = method.apply(this, arguments);
					this.base = previous;
					return returnValue;
				};
				// point to the underlying method
				value.valueOf = function(type) {
					return (type == "object") ? value : method;
				};
				value.toString = Base.toString;
			}
			this[source] = value;
		} else if (source) { // extending with an object literal
			var extend = Base.prototype.extend;
			// if this object has a customised extend method then use it
			if (!Base._prototyping && typeof this != "function") {
				extend = this.extend || extend;
			}
			var proto = {toSource: null};
			// do the "toString" and other methods manually
			var hidden = ["constructor", "toString", "valueOf"];
			// if we are prototyping then include the constructor
			var i = Base._prototyping ? 0 : 1;
			while (key = hidden[i++]) {
				if (source[key] != proto[key]) {
					extend.call(this, key, source[key]);

				}
			}
			// copy each of the source object's properties to this object
			for (var key in source) {
				if (!proto[key]) extend.call(this, key, source[key]);
			}
		}
		return this;
	},

	base: function() {
		// call this method from any other method to invoke that method's ancestor
	}
};

// initialise
Base = Base.extend({
	constructor: function() {
		this.extend(arguments[0]);
	}
}, {
	ancestor: Object,
	version: "1.1",
	
	forEach: function(object, block, context) {
		for (var key in object) {
			if (this.prototype[key] === undefined) {
				block.call(context, object[key], key, object);
			}
		}
	},
		
	implement: function() {
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == "function") {
				// if it's a function, call it
				arguments[i](this.prototype);
			} else {
				// add the interface using the extend method
				this.prototype.extend(arguments[i]);
			}
		}
		return this;
	},
	
	toString: function() {
		return String(this.valueOf());
	}
});


/****************************************************************************** 
	rtree.js - General-Purpose Non-Recursive Javascript R-Tree Library
	Version 0.6.2, December 5st 2009

  Copyright (c) 2009 Jon-Carlos Rivera
  
  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:
  
  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

	Jon-Carlos Rivera - imbcmdth@hotmail.com
******************************************************************************/

/**
 * RTree - A simple r-tree structure for great results.
 * @constructor
 */
var RTree = function(width){
	// Variables to control tree-dimensions
	var _Min_Width = 3;  // Minimum width of any node before a merge
	var _Max_Width = 6;  // Maximum width of any node before a split
	if(!isNaN(width)){ _Min_Width = Math.floor(width/2.0); _Max_Width = width;}
	// Start with an empty root-tree
	var _T = {x:0, y:0, w:0, h:0, id:"root", nodes:[] };
    
	var isArray = function(o) {
		return Object.prototype.toString.call(o) === '[object Array]'; 
	};

	/* @function
	 * @description Function to generate unique strings for element IDs
	 * @param {String} n			The prefix to use for the IDs generated.
	 * @return {String}				A guarenteed unique ID.
	 */
    var _name_to_id = (function() {
        // hide our idCache inside this closure
        var idCache = {};

        // return the api: our function that returns a unique string with incrementing number appended to given idPrefix
        return function(idPrefix) {
            var idVal = 0;
            if(idPrefix in idCache) {
                idVal = idCache[idPrefix]++;
            } else {
                idCache[idPrefix] = 0;
            }
            return idPrefix + "_" + idVal;
        }
    })();

	// This is my special addition to the world of r-trees
	// every other (simple) method I found produced crap trees
	// this skews insertions to prefering squarer and emptier nodes
	RTree.Rectangle.squarified_ratio = function(l, w, fill) {
	  // Area of new enlarged rectangle
	  var lperi = (l + w) / 2.0; // Average size of a side of the new rectangle
	  var larea = l * w; // Area of new rectangle
	  // return the ratio of the perimeter to the area - the closer to 1 we are, 
	  // the more "square" a rectangle is. conversly, when approaching zero the 
	  // more elongated a rectangle is
	  var lgeo = larea / (lperi*lperi);
	  return(larea * fill / lgeo); 
	};
	
	/* find the best specific node(s) for object to be deleted from
	 * [ leaf node parent ] = _remove_subtree(rectangle, object, root)
	 * @private
	 */
	var _remove_subtree = function(rect, obj, root) {
		var hit_stack = []; // Contains the elements that overlap
		var count_stack = []; // Contains the elements that overlap
		var ret_array = [];
		var current_depth = 1;
		
		if(!rect || !RTree.Rectangle.overlap_rectangle(rect, root))
		 return ret_array;

		var ret_obj = {x:rect.x, y:rect.y, w:rect.w, h:rect.h, target:obj};
		
		count_stack.push(root.nodes.length);
		hit_stack.push(root);

		do {
			var tree = hit_stack.pop();
			var i = count_stack.pop()-1;
			
		  if("target" in ret_obj) { // We are searching for a target
				while(i >= 0)	{
					var ltree = tree.nodes[i];
					if(RTree.Rectangle.overlap_rectangle(ret_obj, ltree)) {
						if( (ret_obj.target && "leaf" in ltree && ltree.leaf === ret_obj.target)
							||(!ret_obj.target && ("leaf" in ltree || RTree.Rectangle.contains_rectangle(ltree, ret_obj)))) { // A Match !!
				  		// Yup we found a match...
				  		// we can cancel search and start walking up the list
				  		if("nodes" in ltree) {// If we are deleting a node not a leaf...
				  			ret_array = _search_subtree(ltree, true, [], ltree);
				  			tree.nodes.splice(i, 1); 
				  		} else {
								ret_array = tree.nodes.splice(i, 1); 
							}
							// Resize MBR down...
							RTree.Rectangle.make_MBR(tree.nodes, tree);
							delete ret_obj.target;
							if(tree.nodes.length < _Min_Width) { // Underflow
								ret_obj.nodes = _search_subtree(tree, true, [], tree);
							}
							break;
			  		}/*	else if("load" in ltree) { // A load
				  	}*/	else if("nodes" in ltree) { // Not a Leaf
				  		current_depth += 1;
				  		count_stack.push(i);
				  		hit_stack.push(tree);
				  		tree = ltree;
				  		i = ltree.nodes.length;
				  	}
				  }
					i -= 1;
				}
			} else if("nodes" in ret_obj) { // We are unsplitting
				tree.nodes.splice(i+1, 1); // Remove unsplit node
				// ret_obj.nodes contains a list of elements removed from the tree so far
				if(tree.nodes.length > 0)
					RTree.Rectangle.make_MBR(tree.nodes, tree);
				for(var t = 0;t<ret_obj.nodes.length;t++)
					_insert_subtree(ret_obj.nodes[t], tree);
				ret_obj.nodes.length = 0;
				if(hit_stack.length == 0 && tree.nodes.length <= 1) { // Underflow..on root!
					ret_obj.nodes = _search_subtree(tree, true, ret_obj.nodes, tree);
					tree.nodes.length = 0;
					hit_stack.push(tree);
					count_stack.push(1);
				} else if(hit_stack.length > 0 && tree.nodes.length < _Min_Width) { // Underflow..AGAIN!
					ret_obj.nodes = _search_subtree(tree, true, ret_obj.nodes, tree);
					tree.nodes.length = 0;						
				}else {
					delete ret_obj.nodes; // Just start resizing
				}
			} else { // we are just resizing
				RTree.Rectangle.make_MBR(tree.nodes, tree);
			}
			current_depth -= 1;
		}while(hit_stack.length > 0);
		
		return(ret_array);
	};

	/* choose the best damn node for rectangle to be inserted into
	 * [ leaf node parent ] = _choose_leaf_subtree(rectangle, root to start search at)
	 * @private
	 */
	var _choose_leaf_subtree = function(rect, root) {
		var best_choice_index = -1;
		var best_choice_stack = [];
		var best_choice_area;
		
		var load_callback = function(local_tree, local_node){
			return(function(data) { 
				local_tree._attach_data(local_node, data);
			});
		};
	
		best_choice_stack.push(root);
		var nodes = root.nodes;	

		do {	
			if(best_choice_index != -1)	{
				best_choice_stack.push(nodes[best_choice_index]);
				nodes = nodes[best_choice_index].nodes;
				best_choice_index = -1;
			}
	
			for(var i = nodes.length-1; i >= 0; i--) {
				var ltree = nodes[i];
				if("leaf" in ltree) {  
					// Bail out of everything and start inserting
					best_choice_index = -1;
					break;
			  } /*else if(ltree.load) {
  				throw( "Can't insert into partially loaded tree ... yet!");
  				//jQuery.getJSON(ltree.load, load_callback(this, ltree));
  				//delete ltree.load;
  			}*/
			  // Area of new enlarged rectangle
			  var old_lratio = RTree.Rectangle.squarified_ratio(ltree.w, ltree.h, ltree.nodes.length+1);

			  // Enlarge rectangle to fit new rectangle
			  var nw = Math.max(ltree.x+ltree.w, rect.x+rect.w) - Math.min(ltree.x, rect.x);
			  var nh = Math.max(ltree.y+ltree.h, rect.y+rect.h) - Math.min(ltree.y, rect.y);
			  
			  // Area of new enlarged rectangle
			  var lratio = RTree.Rectangle.squarified_ratio(nw, nh, ltree.nodes.length+2);
			  
			  if(best_choice_index < 0 || Math.abs(lratio - old_lratio) < best_choice_area) {
			  	best_choice_area = Math.abs(lratio - old_lratio); best_choice_index = i;
			  }
			}
		}while(best_choice_index != -1);

		return(best_choice_stack);
	};

	/* split a set of nodes into two roughly equally-filled nodes
	 * [ an array of two new arrays of nodes ] = linear_split(array of nodes)
	 * @private
	 */
	var _linear_split = function(nodes) {
		var n = _pick_linear(nodes);
		while(nodes.length > 0)	{
			_pick_next(nodes, n[0], n[1]);
		}
		return(n);
	};
	
	/* insert the best source rectangle into the best fitting parent node: a or b
	 * [] = pick_next(array of source nodes, target node array a, target node array b)
	 * @private
	 */
	var _pick_next = function(nodes, a, b) {
	  // Area of new enlarged rectangle
		var area_a = RTree.Rectangle.squarified_ratio(a.w, a.h, a.nodes.length+1);
		var area_b = RTree.Rectangle.squarified_ratio(b.w, b.h, b.nodes.length+1);
		var high_area_delta;
		var high_area_node;
		var lowest_growth_group;
		
		for(var i = nodes.length-1; i>=0;i--) {
			var l = nodes[i];
			var new_area_a = {};
			new_area_a.x = Math.min(a.x, l.x); new_area_a.y = Math.min(a.y, l.y);
			new_area_a.w = Math.max(a.x+a.w, l.x+l.w) - new_area_a.x;	new_area_a.h = Math.max(a.y+a.h, l.y+l.h) - new_area_a.y;
			var change_new_area_a = Math.abs(RTree.Rectangle.squarified_ratio(new_area_a.w, new_area_a.h, a.nodes.length+2) - area_a);
	
			var new_area_b = {};
			new_area_b.x = Math.min(b.x, l.x); new_area_b.y = Math.min(b.y, l.y);
			new_area_b.w = Math.max(b.x+b.w, l.x+l.w) - new_area_b.x;	new_area_b.h = Math.max(b.y+b.h, l.y+l.h) - new_area_b.y;
			var change_new_area_b = Math.abs(RTree.Rectangle.squarified_ratio(new_area_b.w, new_area_b.h, b.nodes.length+2) - area_b);

			if( !high_area_node || !high_area_delta || Math.abs( change_new_area_b - change_new_area_a ) < high_area_delta ) {
				high_area_node = i;
				high_area_delta = Math.abs(change_new_area_b-change_new_area_a);
				lowest_growth_group = change_new_area_b < change_new_area_a ? b : a;
			}
		}
		var temp_node = nodes.splice(high_area_node, 1)[0];
		if(a.nodes.length + nodes.length + 1 <= _Min_Width)	{
			a.nodes.push(temp_node);
			RTree.Rectangle.expand_rectangle(a, temp_node);
		}	else if(b.nodes.length + nodes.length + 1 <= _Min_Width) {
			b.nodes.push(temp_node);
			RTree.Rectangle.expand_rectangle(b, temp_node);
		}
		else {
			lowest_growth_group.nodes.push(temp_node);
			RTree.Rectangle.expand_rectangle(lowest_growth_group, temp_node);
		}
	};

	/* pick the "best" two starter nodes to use as seeds using the "linear" criteria
	 * [ an array of two new arrays of nodes ] = pick_linear(array of source nodes)
	 * @private
	 */
	var _pick_linear = function(nodes) {
		var lowest_high_x = nodes.length-1;
		var highest_low_x = 0;
		var lowest_high_y = nodes.length-1;
		var highest_low_y = 0;
        var t1, t2;
		
		for(var i = nodes.length-2; i>=0;i--)	{
			var l = nodes[i];
			if(l.x > nodes[highest_low_x].x ) highest_low_x = i;
			else if(l.x+l.w < nodes[lowest_high_x].x+nodes[lowest_high_x].w) lowest_high_x = i;
			if(l.y > nodes[highest_low_y].y ) highest_low_y = i;
			else if(l.y+l.h < nodes[lowest_high_y].y+nodes[lowest_high_y].h) lowest_high_y = i;
		}
		var dx = Math.abs((nodes[lowest_high_x].x+nodes[lowest_high_x].w) - nodes[highest_low_x].x);
		var dy = Math.abs((nodes[lowest_high_y].y+nodes[lowest_high_y].h) - nodes[highest_low_y].y);
		if( dx > dy )	{ 
			if(lowest_high_x > highest_low_x)	{
				t1 = nodes.splice(lowest_high_x, 1)[0];
				t2 = nodes.splice(highest_low_x, 1)[0];
			}	else {
				t2 = nodes.splice(highest_low_x, 1)[0];
				t1 = nodes.splice(lowest_high_x, 1)[0];
			}
		}	else {
			if(lowest_high_y > highest_low_y)	{
				t1 = nodes.splice(lowest_high_y, 1)[0];
				t2 = nodes.splice(highest_low_y, 1)[0];
			}	else {
				t2 = nodes.splice(highest_low_y, 1)[0];
				t1 = nodes.splice(lowest_high_y, 1)[0];
			}
		}
		return([{x:t1.x, y:t1.y, w:t1.w, h:t1.h, nodes:[t1]},
			      {x:t2.x, y:t2.y, w:t2.w, h:t2.h, nodes:[t2]} ]);
	};
	
	var _attach_data = function(node, more_tree){
		node.nodes = more_tree.nodes;
		node.x = more_tree.x; node.y = more_tree.y;
		node.w = more_tree.w; node.h = more_tree.h;
		return(node);
	};

	/* non-recursive internal search function 
	 * [ nodes | objects ] = _search_subtree(rectangle, [return node data], [array to fill], root to begin search at)
	 * @private
	 */
	var _search_subtree = function(rect, return_node, return_array, root) {
		var hit_stack = []; // Contains the elements that overlap
	
		if(!RTree.Rectangle.overlap_rectangle(rect, root))
		 return(return_array);
	
		var load_callback = function(local_tree, local_node){
			return(function(data) { 
				local_tree._attach_data(local_node, data);
			});
		};
	
		hit_stack.push(root.nodes);
	
		do {
			var nodes = hit_stack.pop();
	
			for(var i = nodes.length-1; i >= 0; i--) {
				var ltree = nodes[i];
			  if(RTree.Rectangle.overlap_rectangle(rect, ltree)) {
			  	if("nodes" in ltree) { // Not a Leaf
			  		hit_stack.push(ltree.nodes);
			  	} else if("leaf" in ltree) { // A Leaf !!
			  		if(!return_node)
		  				return_array.push(ltree.leaf);
		  			else
		  				return_array.push(ltree);
		  		}/*	else if("load" in ltree) { // We need to fetch a URL for some more tree data
	  				jQuery.getJSON(ltree.load, load_callback(this, ltree));
	  				delete ltree.load;
	  			//	i++; // Replay this entry
	  			}*/
				}
			}
		}while(hit_stack.length > 0);
		
		return(return_array);
	};
	
	/* non-recursive internal insert function
	 * [] = _insert_subtree(rectangle, object to insert, root to begin insertion at)
	 * @private
	 */
	var _insert_subtree = function(node, root) {
		var bc; // Best Current node
		// Initial insertion is special because we resize the Tree and we don't
		// care about any overflow (seriously, how can the first object overflow?)
		if(root.nodes.length == 0) {
			root.x = node.x; root.y = node.y;
			root.w = node.w; root.h = node.h;
			root.nodes.push(node);
			return;
		}
		
		// Find the best fitting leaf node
		// choose_leaf returns an array of all tree levels (including root)
		// that were traversed while trying to find the leaf
		var tree_stack = _choose_leaf_subtree(node, root);
		var ret_obj = node;//{x:rect.x,y:rect.y,w:rect.w,h:rect.h, leaf:obj};
	
		// Walk back up the tree resizing and inserting as needed
		do {
			//handle the case of an empty node (from a split)
			if(bc && "nodes" in bc && bc.nodes.length == 0) {
				var pbc = bc; // Past bc
				bc = tree_stack.pop();
				for(var t=0;t<bc.nodes.length;t++)
					if(bc.nodes[t] === pbc || bc.nodes[t].nodes.length == 0) {
						bc.nodes.splice(t, 1);
						break;
				}
			} else {
				bc = tree_stack.pop();
			}
			
			// If there is data attached to this ret_obj
			if("leaf" in ret_obj || "nodes" in ret_obj || isArray(ret_obj)) { 
				// Do Insert
				if(isArray(ret_obj)) {
					for(var ai = 0; ai < ret_obj.length; ai++) {
						RTree.Rectangle.expand_rectangle(bc, ret_obj[ai]);
					}
					bc.nodes = bc.nodes.concat(ret_obj); 
				} else {
					RTree.Rectangle.expand_rectangle(bc, ret_obj);
					bc.nodes.push(ret_obj); // Do Insert
				}
	
				if(bc.nodes.length <= _Max_Width)	{ // Start Resizeing Up the Tree
					ret_obj = {x:bc.x,y:bc.y,w:bc.w,h:bc.h};
				}	else { // Otherwise Split this Node
					// linear_split() returns an array containing two new nodes
					// formed from the split of the previous node's overflow
					var a = _linear_split(bc.nodes);
					ret_obj = a;//[1];
					
					if(tree_stack.length < 1)	{ // If are splitting the root..
						bc.nodes.push(a[0]);
						tree_stack.push(bc);     // Reconsider the root element
						ret_obj = a[1];
					} /*else {
						delete bc;
					}*/
				}
			}	else { // Otherwise Do Resize
				//Just keep applying the new bounding rectangle to the parents..
				RTree.Rectangle.expand_rectangle(bc, ret_obj);
				ret_obj = {x:bc.x,y:bc.y,w:bc.w,h:bc.h};
			}
		} while(tree_stack.length > 0);
	};

	/* quick 'n' dirty function for plugins or manually drawing the tree
	 * [ tree ] = RTree.get_tree(): returns the raw tree data. useful for adding
	 * @public
	 * !! DEPRECATED !!
	 */
	this.get_tree = function() {
		return _T;
	};
	
	/* quick 'n' dirty function for plugins or manually loading the tree
	 * [ tree ] = RTree.set_tree(sub-tree, where to attach): returns the raw tree data. useful for adding
	 * @public
	 * !! DEPRECATED !!
	 */
	this.set_tree = function(new_tree, where) {
		if(!where)
			where = _T;
		return(_attach_data(where, new_tree));
	};
	
	/* non-recursive search function 
	 * [ nodes | objects ] = RTree.search(rectangle, [return node data], [array to fill])
	 * @public
	 */
	this.search = function(rect, return_node, return_array) {
		if(arguments.length < 1)
			throw "Wrong number of arguments. RT.Search requires at least a bounding rectangle."

		switch(arguments.length) {
			case 1:
				arguments[1] = false;// Add an "return node" flag - may be removed in future
			case 2:
				arguments[2] = []; // Add an empty array to contain results
			case 3:
				arguments[3] = _T; // Add root node to end of argument list
			default:
				arguments.length = 4;
		}
		return(_search_subtree.apply(this, arguments));
	};
		
	/* partially-recursive toJSON function
	 * [ string ] = RTree.toJSON([rectangle], [tree])
	 * @public
	 */
	this.toJSON = function(rect, tree) {
		var hit_stack = []; // Contains the elements that overlap
		var count_stack = []; // Contains the elements that overlap
		var return_stack = {}; // Contains the elements that overlap
		var max_depth = 3;  // This triggers recursion and tree-splitting
		var current_depth = 1;
		var return_string = "";
		
		if(rect && !RTree.Rectangle.overlap_rectangle(rect, _T))
		 return "";
		
		if(!tree)	{
			count_stack.push(_T.nodes.length);
			hit_stack.push(_T.nodes);
			return_string += "var main_tree = {x:"+_T.x.toFixed()+",y:"+_T.y.toFixed()+",w:"+_T.w.toFixed()+",h:"+_T.h.toFixed()+",nodes:[";
		}	else {
			max_depth += 4;
			count_stack.push(tree.nodes.length);
			hit_stack.push(tree.nodes);
			return_string += "var main_tree = {x:"+tree.x.toFixed()+",y:"+tree.y.toFixed()+",w:"+tree.w.toFixed()+",h:"+tree.h.toFixed()+",nodes:[";
		}
	
		do {
			var nodes = hit_stack.pop();
			var i = count_stack.pop()-1;
			
			if(i >= 0 && i < nodes.length-1)
				return_string += ",";
				
			while(i >= 0)	{
				var ltree = nodes[i];
			  if(!rect || RTree.Rectangle.overlap_rectangle(rect, ltree)) {
			  	if(ltree.nodes) { // Not a Leaf
			  		if(current_depth >= max_depth) {
			  			var len = return_stack.length;
			  			var nam = _name_to_id("saved_subtree");
			  			return_string += "{x:"+ltree.x.toFixed()+",y:"+ltree.y.toFixed()+",w:"+ltree.w.toFixed()+",h:"+ltree.h.toFixed()+",load:'"+nam+".js'}";
			  			return_stack[nam] = this.toJSON(rect, ltree);
							if(i > 0)
								return_string += ","
			  		}	else {
				  		return_string += "{x:"+ltree.x.toFixed()+",y:"+ltree.y.toFixed()+",w:"+ltree.w.toFixed()+",h:"+ltree.h.toFixed()+",nodes:[";
				  		current_depth += 1;
				  		count_stack.push(i);
				  		hit_stack.push(nodes);
				  		nodes = ltree.nodes;
				  		i = ltree.nodes.length;
				  	}
			  	}	else if(ltree.leaf) { // A Leaf !!
			  		var data = ltree.leaf.toJSON ? ltree.leaf.toJSON() : JSON.stringify(ltree.leaf);
		  			return_string += "{x:"+ltree.x.toFixed()+",y:"+ltree.y.toFixed()+",w:"+ltree.w.toFixed()+",h:"+ltree.h.toFixed()+",leaf:" + data + "}";
						if(i > 0)
							return_string += ","
		  		}	else if(ltree.load) { // A load
		  			return_string += "{x:"+ltree.x.toFixed()+",y:"+ltree.y.toFixed()+",w:"+ltree.w.toFixed()+",h:"+ltree.h.toFixed()+",load:'" + ltree.load + "'}";
						if(i > 0)
							return_string += ","
			  	}
				}
				i -= 1;
			}
			if(i < 0)	{
					return_string += "]}"; current_depth -= 1;
			}
		}while(hit_stack.length > 0);
		
		return_string+=";";
		
		for(var my_key in return_stack) {
			return_string += "\nvar " + my_key + " = function(){" + return_stack[my_key] + " return(main_tree);};";
		}
		return(return_string);
	};
	
	/* non-recursive function that deletes a specific
	 * [ number ] = RTree.remove(rectangle, obj)
	 */
	this.remove = function(rect, obj) {
		if(arguments.length < 1)
			throw "Wrong number of arguments. RT.remove requires at least a bounding rectangle."

		switch(arguments.length) {
			case 1:
				arguments[1] = false; // obj == false for conditionals
			case 2:
				arguments[2] = _T; // Add root node to end of argument list
			default:
				arguments.length = 3;
		}
		if(arguments[1] === false) { // Do area-wide delete
			var numberdeleted = 0;
			var ret_array = [];
			do { 
				numberdeleted=ret_array.length; 
				ret_array = ret_array.concat(_remove_subtree.apply(this, arguments));
			}while( numberdeleted !=  ret_array.length);
			return ret_array;
		}
		else { // Delete a specific item
			return(_remove_subtree.apply(this, arguments));
		}
	};
		
	/* non-recursive insert function
	 * [] = RTree.insert(rectangle, object to insert)
	 */
	this.insert = function(rect, obj) {
		if(arguments.length < 2)
			throw "Wrong number of arguments. RT.Insert requires at least a bounding rectangle and an object."
		
		return(_insert_subtree({x:rect.x,y:rect.y,w:rect.w,h:rect.h,leaf:obj}, _T));
	};
	
	/* non-recursive delete function
	 * [deleted object] = RTree.remove(rectangle, [object to delete])
	 */

//End of RTree
};

/* Rectangle - Generic rectangle object - Not yet used */

RTree.Rectangle = function(ix, iy, iw, ih) { // new Rectangle(bounds) or new Rectangle(x, y, w, h)
    var x, x2, y, y2, w, h;

    if(ix.x) {
		x = ix.x; y = ix.y;	
			if(ix.w !== 0 && !ix.w && ix.x2){
				w = ix.x2-ix.x;	h = ix.y2-ix.y;
			}	else {
				w = ix.w;	h = ix.h;
			}
		x2 = x + w; y2 = y + h; // For extra fastitude
	} else {
		x = ix; y = iy;	w = iw;	h = ih;
		x2 = x + w; y2 = y + h; // For extra fastitude
	}

	this.x1 = this.x = function(){return x;};
	this.y1 = this.y = function(){return y;};
	this.x2 = function(){return x2;};
	this.y2 = function(){return y2;};		
	this.w = function(){return w;};
	this.h = function(){return h;};
	
	this.toJSON = function() {
		return('{"x":'+x.toString()+', "y":'+y.toString()+', "w":'+w.toString()+', "h":'+h.toString()+'}');
	};
	
	this.overlap = function(a) {
		return(this.x() < a.x2() && this.x2() > a.x() && this.y() < a.y2() && this.y2() > a.y());
	};
	
	this.expand = function(a) {
		var nx = Math.min(this.x(), a.x());
		var ny = Math.min(this.y(), a.y());
		w = Math.max(this.x2(), a.x2()) - nx;
		h = Math.max(this.y2(), a.y2()) - ny;
		x = nx; y = ny;
		return(this);
	};
	
	this.setRect = function(ix, iy, iw, ih) {
        var x, x2, y, y2, w, h;
		if(ix.x) {
			x = ix.x; y = ix.y;	
			if(ix.w !== 0 && !ix.w && ix.x2) {
				w = ix.x2-ix.x;	h = ix.y2-ix.y;
			}	else {
				w = ix.w;	h = ix.h;
			}
			x2 = x + w; y2 = y + h; // For extra fastitude
		} else {
			x = ix; y = iy;	w = iw;	h = ih;
			x2 = x + w; y2 = y + h; // For extra fastitude
		}
	};
//End of RTree.Rectangle
};


/* returns true if rectangle 1 overlaps rectangle 2
 * [ boolean ] = overlap_rectangle(rectangle a, rectangle b)
 * @static function
 */
RTree.Rectangle.overlap_rectangle = function(a, b) {
	return(a.x < (b.x+b.w) && (a.x+a.w) > b.x && a.y < (b.y+b.h) && (a.y+a.h) > b.y);
};

/* returns true if rectangle a is contained in rectangle b
 * [ boolean ] = contains_rectangle(rectangle a, rectangle b)
 * @static function
 */
RTree.Rectangle.contains_rectangle = function(a, b) {
	return((a.x+a.w) <= (b.x+b.w) && a.x >= b.x && (a.y+a.h) <= (b.y+b.h) && a.y >= b.y);
};

/* expands rectangle A to include rectangle B, rectangle B is untouched
 * [ rectangle a ] = expand_rectangle(rectangle a, rectangle b)
 * @static function
 */
RTree.Rectangle.expand_rectangle = function(a, b)	{
	var nx = Math.min(a.x, b.x);
	var ny = Math.min(a.y, b.y);
	a.w = Math.max(a.x+a.w, b.x+b.w) - nx;
	a.h = Math.max(a.y+a.h, b.y+b.h) - ny;
	a.x = nx; a.y = ny;
	return(a);
};

/* generates a minimally bounding rectangle for all rectangles in
 * array "nodes". If rect is set, it is modified into the MBR. Otherwise,
 * a new rectangle is generated and returned.
 * [ rectangle a ] = make_MBR(rectangle array nodes, rectangle rect)
 * @static function
 */
RTree.Rectangle.make_MBR = function(nodes, rect) {
	if(nodes.length < 1)
		return({x:0, y:0, w:0, h:0});
		//throw "make_MBR: nodes must contain at least one rectangle!";
	if(!rect)
		rect = {x:nodes[0].x, y:nodes[0].y, w:nodes[0].w, h:nodes[0].h};
	else
		rect.x = nodes[0].x; rect.y = nodes[0].y; rect.w = nodes[0].w; rect.h = nodes[0].h;
		
	for(var i = nodes.length-1; i>0; i--)
		RTree.Rectangle.expand_rectangle(rect, nodes[i]);
		
	return(rect);
};

var $         = jQuery; // Make sure we have local $ (this is for combined script in a function)
var Genoverse = Base.extend({
  // Defaults
  urlParamTemplate   : 'r=__CHR__:__START__-__END__', // Overwrite this for your URL style
  width              : 1000,
  longestLabel       : 30,
  defaultLength      : 5000,
  defaultScrollDelta : 100,
  tracks             : [],
  plugins            : [],
  dragAction         : 'scroll',         // Options are: scroll, select, off
  wheelAction        : 'off',            // Options are: zoom, off
  isStatic           : false,            // If true, will stop drag, select and zoom actions occurring
  saveable           : false,            // If true, track configuration and ordering will be saved in sessionStorage/localStorage
  saveKey            : '',               // Default key for sessionStorage/localStorage configuration is 'genoverse'. saveKey will be appended to this if it is set
  storageType        : 'sessionStorage', // Set to localStorage for permanence
  autoHideMessages   : true,             // Determines whether to collapse track messages by default
  trackAutoHeight    : false,            // Determines whether to automatically resize tracks to show all their features (can be overridden by track.autoHeight)
  hideEmptyTracks    : true,             // Determines whether to hide an automatically resized tracks if it has no features, or to show it empty (can be overridden by track.hideEmpty)
  genome             : undefined,        // The genome used in the browser - can be an object or a string, which will be used to obtain a javascript file
  useHash            : undefined,        // If true, window.location.hash is changed on navigation. If false, window.history.pushState is used. If undefined, pushState will be used if present in the browser

  // Default coordinates for initial view, overwrite in your config
  chr   : 1,
  start : 1,
  end   : 1000000,

  constructor: function (config) {
    var browser = this;

    if (!this.supported()) {
      return this.die('Your browser does not support this functionality');
    }

    config.container = $(config.container); // Make sure container is a jquery object, jquery recognises itself automatically

    if (!(config.container && config.container.length)) {
      config.container = $('<div>').appendTo('body');
    }

    config.container.addClass('genoverse').data('genoverse', this);

    $.extend(this, config);

    this.eventNamespace = '.genoverse.' + (++Genoverse.id);
    this.events         = { browser: {}, tracks: {} };

    $.when(this.loadGenome(), this.loadPlugins()).always(function () {
      Genoverse.wrapFunctions(browser);
      browser.init();
    });
  },

  loadGenome: function () {
    if (typeof this.genome === 'string') {
      var genomeName = this.genome;

      return $.ajax({
        url      : this.origin + 'js/genomes/' + genomeName + '.js',
        dataType : 'script',
        context  : this,
        success  : function () {
          try {
            this.genome = eval(genomeName);
          } catch (e) {
            console.log(e);
            this.die('Unable to load genome ' + genomeName);
          }
        }
      });
    }
  },

  loadPlugins: function (plugins) {
    var browser         = this;
    var loadPluginsTask = $.Deferred();
    var plugins         = plugins || this.plugins;

    this.loadedPlugins = this.loadedPlugins || {};

    if (typeof plugins === 'string') {
      plugins = [ plugins ];
    }

    function loadPlugin(plugin) {
      var css      = browser.origin + 'css/'        + plugin + '.css';
      var js       = browser.origin + 'js/plugins/' + plugin + '.js';
      var deferred = $.Deferred();

      function getCSS() {
        function done() {
          browser.loadedPlugins[plugin] = browser.loadedPlugins[plugin] || 'script';
          deferred.resolve(plugin);
        }

        if (Genoverse.Plugins[plugin].noCSS || $('link[href="' + css + '"]').length) {
          return done();
        }

        $('<link href="' + css + '" rel="stylesheet">').on('load', done).appendTo('body');
      }

      if (browser.loadedPlugins[plugin] || $('script[src="' + js + '"]').length) {
        getCSS();
      } else {
        $.getScript(js, getCSS);
      }

      return deferred;
    }

    function intializePlugin(plugin) {
      if (typeof Genoverse.Plugins[plugin] !== 'function' || browser.loadedPlugins[plugin] === true) {
        return [];
      }

      var requires = Genoverse.Plugins[plugin].requires;
      var deferred = $.Deferred();

      function init() {
        if (browser.loadedPlugins[plugin] !== true) {
          Genoverse.Plugins[plugin].call(browser);
          browser.container.addClass('gv-' + plugin.replace(/([A-Z])/g, '-$1').toLowerCase() + '-plugin');
          browser.loadedPlugins[plugin] = true;
        }

        deferred.resolve();
      }

      if (requires) {
        $.when(browser.loadPlugins(requires)).done(init);
      } else {
        init();
      }

      return deferred;
    }

    // Load plugins css file
    $.when.apply($, $.map(plugins, loadPlugin)).done(function () {
      var pluginsLoaded = [];
      var plugin;

      for (var i = 0; i < arguments.length; i++) {
        plugin = arguments[i];

        if (browser.loadedPlugins[plugin] !== true) {
          pluginsLoaded.push(intializePlugin(plugin));
        }
      }

      $.when.apply($, pluginsLoaded).always(loadPluginsTask.resolve);
    });

    return loadPluginsTask;
  },

  init: function () {
    var width = this.width;

    this.addDomElements(width);
    this.addUserEventHandlers();

    if (this.isStatic) {
      this.dragAction       = this.wheelAction = 'off';
      this.urlParamTemplate = false;
    }

    this.tracksById       = {};
    this.prev             = {};
    this.saveKey          = this.saveKey ? 'genoverse-' + this.saveKey : 'genoverse';
    this.urlParamTemplate = this.urlParamTemplate || '';
    this.useHash          = typeof this.useHash === 'boolean' ? this.useHash : typeof window.history.pushState !== 'function';
    this.textWidth        = document.createElement('canvas').getContext('2d').measureText('W').width;
    this.labelWidth       = this.labelContainer.outerWidth(true);
    this.width           -= this.labelWidth;
    this.paramRegex       = this.urlParamTemplate ? new RegExp('([?&;])' + this.urlParamTemplate
      .replace(/(\b(\w+=)?__CHR__(.)?)/,   '$2([\\w\\.]+)$3')
      .replace(/(\b(\w+=)?__START__(.)?)/, '$2(\\d+)$3')
      .replace(/(\b(\w+=)?__END__(.)?)/,   '$2(\\d+)$3') + '([;&])'
    ) : '';

    var urlCoords = this.getURLCoords();
    var coords    = urlCoords.chr && urlCoords.start && urlCoords.end ? urlCoords : { chr: this.chr, start: this.start, end: this.end };

    this.chr = coords.chr;

    if (this.genome && !this.chromosomeSize) {
      this.chromosomeSize = this.genome[this.chr].size;
    }

    if (this.saveable) {
      this.loadConfig();
    } else {
      this.addTracks();
    }

    this.setRange(coords.start, coords.end);
  },

  loadConfig: function () {
    this.defaultTracks = $.extend([], true, this.tracks);

    var config = window[this.storageType].getItem(this.saveKey);

    if (config) {
      config = JSON.parse(config);
    } else {
      return this.addTracks();
    }

    var tracksLibrary = this.tracksLibrary || [];
    var tracks        = [];
    var tracksById    = {};
    var tracksByName  = {};
    var savedConfig   = {};
    var i, prop, track;

    function setConfig(track, conf) {
      for (prop in conf) {
        if (prop === 'config') {
          savedConfig[conf.id] = conf[prop];
        } else {
          track.prototype[prop] = conf[prop];
        }
      }
    }

    for (i = 0; i < this.tracks.length; i++) {
      if (this.tracks[i].prototype.id) {
        tracksById[this.tracks[i].prototype.id] = this.tracks[i];
      }
    }

    for (i = 0; i < tracksLibrary.length; i++) {
      if (tracksLibrary[i].prototype.name) {
        tracksByName[tracksLibrary[i].prototype.name] = tracksLibrary[i];
      }
    }

    for (i = 0; i < config.length; i++) {
      track = tracksById[config[i].id];

      if (track) {
        setConfig(track, config[i]);
        track._fromStorage = true;
      } else if (tracksByName[config[i].name]) {
        track = tracksByName[config[i].name];

        this.trackIds = this.trackIds || {};
        this.trackIds[track.prototype.id] = this.trackIds[track.prototype.id] || 1;

        track = track.extend({ id: track.prototype.id + (tracksById[track.prototype.id] ? this.trackIds[track.prototype.id]++ : '') })

        setConfig(track, config[i]);
        tracks.push(track);
      }
    }

    for (i = 0; i < this.tracks.length; i++) {
      if (this.tracks[i].prototype.id && !this.tracks[i]._fromStorage) {
        continue;
      }

      tracks.push(this.tracks[i]);
    }

    this.tracks      = tracks;
    this.savedConfig = savedConfig;

    this.addTracks();
  },

  saveConfig: function () {
    if (this._constructing || !this.saveable) {
      return;
    }

    var config = [];

    for (var i = 0; i < this.tracks.length; i++) {
      if (this.tracks[i].id) {
        config.push({
          id         : this.tracks[i].id,
          name       : this.tracks[i].name,
          order      : this.tracks[i].order,
          height     : this.tracks[i].height,
          autoHeight : this.tracks[i].autoHeight,
          config     : this.tracks[i].config
        });
      }
    }

    window[this.storageType].setItem(this.saveKey, JSON.stringify(config));
  },

  resetConfig: function () {
    window[this.storageType].removeItem(this.saveKey);

    this._constructing = true;
    this.savedConfig   = {};

    this.removeTracks($.extend([], this.tracks)); // Shallow clone to ensure that removeTracks doesn't hit problems when splicing this.tracks
    this.addTracks($.extend([], true, this.defaultTracks));

    this._constructing = false;
  },

  addDomElements: function (width) {
    var browser = this;

    this.menus          = $();
    this.labelContainer = $('<ul class="gv-label-container">').appendTo(this.container).sortable({
      items  : 'li:not(.gv-unsortable)',
      handle : '.gv-handle',
      axis   : 'y',
      helper : 'clone',
      cursor : 'move',
      update : $.proxy(this.updateTrackOrder, this),
      start  : function (e, ui) {
        ui.placeholder.css({ height: ui.item.height(), visibility: 'visible' }).html(ui.item.html());
        ui.helper.hide();
      }
    });

    this.wrapper  = $('<div class="gv-wrapper">').appendTo(this.container);
    this.selector = $('<div class="gv-selector gv-crosshair">').appendTo(this.wrapper);

    this.selectorControls = this.zoomInHighlight = this.zoomOutHighlight = $();

    this.container.addClass('gv-canvas-container').width(width);

    if (!this.isStatic) {
      this.selectorControls = $(
        '<div class="gv-selector-controls">'                +
        '  <button class="gv-zoom-here">Zoom here</button>' +
        '  <button class="gv-center">Center</button>'       +
        '  <button class="gv-cancel">Cancel</button>'       +
        '</div>'
      ).appendTo(this.selector);

      this.zoomInHighlight = $(
        '<div class="gv-canvas-zoom gv-i">' +
        '  <div class="gv-t gv-l gv-h"></div>' +
        '  <div class="gv-t gv-r gv-h"></div>' +
        '  <div class="gv-t gv-l gv-v"></div>' +
        '  <div class="gv-t gv-r gv-v"></div>' +
        '  <div class="gv-b gv-l gv-h"></div>' +
        '  <div class="gv-b gv-r gv-h"></div>' +
        '  <div class="gv-b gv-l gv-v"></div>' +
        '  <div class="gv-b gv-r gv-v"></div>' +
        '</div>'
      ).appendTo('body');

      this.zoomOutHighlight = this.zoomInHighlight.clone().toggleClass('gv-i gv-o').appendTo('body');
    }
  },

  addUserEventHandlers: function () {
    var browser        = this;
    var documentEvents = {};

    this.container.on({
      mousedown: function (e) {
        browser.hideMessages();

        // Only scroll on left click, and do nothing if clicking on a button in selectorControls
        if ((!e.which || e.which === 1) && !(this === browser.selector[0] && e.target !== this)) {
          browser.mousedown(e);
        }

        return false;
      },
      mousewheel: function (e, delta, deltaX, deltaY) {
        if (browser.noWheelZoom) {
          return true;
        }

        browser.hideMessages();

        if (deltaY === 0 && deltaX !== 0) {
          browser.startDragScroll(e);
          browser.move(-deltaX * 10);
          browser.stopDragScroll(false);
        } else if (browser.wheelAction === 'zoom') {
          return browser.mousewheelZoom(e, delta);
        }
      },
      dblclick: function (e) {
        if (browser.isStatic) {
          return true;
        }

        browser.hideMessages();
        browser.mousewheelZoom(e, 1);
      }
    }, '.gv-image-container, .gv-selector');

    this.selectorControls.on('click', function (e) {
      var pos = browser.getSelectorPosition();

      switch (e.target.className) {
        case 'gv-zoom-here' : browser.setRange(pos.start, pos.end, true); break;
        case 'gv-center'    : browser.moveTo(pos.start, pos.end, true, true);
        case 'gv-cancel'    : browser.cancelSelect(); break;
        default             : break;
      }
    });

    documentEvents['mouseup'    + this.eventNamespace] = $.proxy(this.mouseup,   this);
    documentEvents['mousemove'  + this.eventNamespace] = $.proxy(this.mousemove, this);
    documentEvents['keydown'    + this.eventNamespace] = $.proxy(this.keydown,   this);
    documentEvents['keyup'      + this.eventNamespace] = $.proxy(this.keyup,     this);
    documentEvents['mousewheel' + this.eventNamespace] = function (e) {
      if (browser.wheelAction === 'zoom') {
        if (browser.wheelTimeout) {
          clearTimeout(browser.wheelTimeout);
        }

        browser.noWheelZoom  = browser.noWheelZoom || e.target !== browser.container[0];
        browser.wheelTimeout = setTimeout(function () { browser.noWheelZoom = false; }, 300);
      }
    };

    $(document).on(documentEvents);
    $(window).on((this.useHash ? 'hashchange' : 'popstate') + this.eventNamespace, $.proxy(this.popState, this));
  },

  onTracks: function () {
    var args = $.extend([], arguments);
    var func = args.shift();
    var mvc;

    for (var i = 0; i < this.tracks.length; i++) {
      if (this.tracks[i].disabled) {
        continue;
      }

      mvc = this.tracks[i]._interface[func];

      if (mvc) {
        this.tracks[i][mvc][func].apply(this.tracks[i][mvc], args);
      } else if (this.tracks[i][func]) {
        this.tracks[i][func].apply(this.tracks[i], args);
      }
    }
  },

  reset: function () {
    this.onTracks('reset');
    this.scale = 9e99; // arbitrary value so that setScale resets track scales as well
    this.setRange(this.start, this.end);
  },

  setWidth: function (width) {
    this.width  = width;
    this.width -= this.labelWidth;

    this.container.width(width);
    this.onTracks('setWidth', this.width);
    this.reset();
  },

  mousewheelZoom: function (e, delta) {
    var browser = this;

    clearTimeout(this.zoomDeltaTimeout);
    clearTimeout(this.zoomTimeout);

    this.zoomDeltaTimeout = setTimeout(function () {
      if (delta > 0) {
        browser.zoomInHighlight.css({ left: e.pageX - 20, top: e.pageY - 20, display: 'block' }).animate({
          width: 80, height: 80, top: '-=20', left: '-=20'
        }, {
          complete: function () { $(this).css({ width: 40, height: 40, display: 'none' }); }
        });
      } else {
        browser.zoomOutHighlight.css({ left: e.pageX - 40, top: e.pageY - 40, display: 'block' }).animate({
          width: 40, height: 40, top: '+=20', left: '+=20'
        }, {
          complete: function () { $(this).css({ width: 80, height: 80, display: 'none' }); }
        });
      }
    }, 100);

    this.zoomTimeout = setTimeout(function () {
      browser[delta > 0 ? 'zoomIn' : 'zoomOut'](e.pageX - browser.container.offset().left - browser.labelWidth);

      if (browser.dragAction === 'select') {
        browser.moveSelector(e);
      }
    }, 300);

    return false;
  },

  startDragScroll: function (e) {
    this.dragging    = 'scroll';
    this.scrolling   = !e;
    this.dragOffset  = e ? e.pageX - this.left : 0;
    this.dragStart   = this.start;
    this.scrollDelta = Math.max(this.scale, this.defaultScrollDelta);
  },

  stopDragScroll: function (update) {
    this.dragging  = false;
    this.scrolling = false;

    if (update !== false) {
      if (this.start !== this.dragStart) {
        this.updateURL();
      }

      this.checkTrackHeights();
    }
  },

  startDragSelect: function (e) {
    if (!e) {
      return false;
    }

    var x = Math.max(0, e.pageX - this.wrapper.offset().left - 2);

    this.dragging        = 'select';
    this.selectorStalled = false;
    this.selectorStart   = x;

    this.selector.css({ left: x, width: 0 }).removeClass('gv-crosshair');
    this.selectorControls.hide();
  },

  stopDragSelect: function (e) {
    if (!e) {
      return false;
    }

    this.dragging        = false;
    this.selectorStalled = true;

    if (this.selector.outerWidth(true) < 2) {
      return this.cancelSelect();
    }

    // Calculate the position, so that selectorControls appear near the mouse cursor
    var top = Math.min(e.pageY - this.wrapper.offset().top, this.wrapper.outerHeight(true) - 1.2 * this.selectorControls.outerHeight(true));
    var pos = this.getSelectorPosition();

    this.selectorControls.find('.gv-selector-location').html(this.chr + ':' + pos.start + '-' + pos.end).end().css({
      top  : top,
      left : this.selector.outerWidth(true) / 2 - this.selectorControls.outerWidth(true) / 2
    }).show();
  },

  cancelSelect: function (keepDragging) {
    if (!keepDragging) {
      this.dragging = false;
    }

    this.selectorStalled = false;

    this.selector.addClass('gv-crosshair').width(0);
    this.selectorControls.hide();

    if (this.dragAction === 'scroll') {
      this.selector.hide();
    }
  },

  dragSelect: function (e) {
    var x = e.pageX - this.wrapper.offset().left;

    if (x > this.selectorStart) {
      this.selector.css({
        left  : this.selectorStart,
        width : Math.min(x - this.selectorStart, this.width - this.selectorStart - 1)
      });
    } else {
      this.selector.css({
        left  : Math.max(x, 1),
        width : Math.min(this.selectorStart - x, this.selectorStart - 1)
      });
    }
  },

  setDragAction: function (action, keepSelect) {
    this.dragAction = action;

    if (this.dragAction === 'select') {
      this.selector.addClass('gv-crosshair').width(0).show();
    } else if (keepSelect && !this.selector.hasClass('gv-crosshair')) {
      this.selectorStalled = false;
    } else {
      this.cancelSelect();
      this.selector.hide();
    }
  },

  toggleSelect: function (on) {
    if (on) {
      this.prev.dragAction = 'scroll';
      this.setDragAction('select');
    } else {
      this.setDragAction(this.prev.dragAction, true);
      delete this.prev.dragAction;
    }
  },

  setWheelAction: function (action) {
    this.wheelAction = action;
  },

  keydown: function (e) {
    if (e.which === 16 && !this.prev.dragAction && this.dragAction === 'scroll') { // shift key
      this.toggleSelect(true);
    } else if (e.which === 27) { // escape key
      this.cancelSelect();
      this.closeMenus();
    }
  },

  keyup: function (e) {
    if (e.which === 16 && this.prev.dragAction) { // shift key
      this.toggleSelect();
    }
  },

  mousedown: function (e) {
    if (e.shiftKey) {
      if (this.dragAction === 'scroll') {
        this.toggleSelect(true);
      }
    } else if (this.prev.dragAction) {
      this.toggleSelect();
    }

    switch (this.dragAction) {
      case 'select' : this.startDragSelect(e); break;
      case 'scroll' : this.startDragScroll(e); break;
      default       : break;
    }
  },

  mouseup: function (e, update) {
    if (!this.dragging) {
      return false;
    }

    switch (this.dragging) {
      case 'select' : this.stopDragSelect(e);      break;
      case 'scroll' : this.stopDragScroll(update); break;
      default       : break;
    }
  },

  mousemove: function (e) {
    if (this.dragging && !this.scrolling) {
      switch (this.dragAction) {
        case 'scroll' : this.move(e.pageX - this.dragOffset - this.left); break;
        case 'select' : this.dragSelect(e); break;
        default       : break;
      }
    } else if (this.dragAction === 'select') {
      this.moveSelector(e);
    }
  },

  moveSelector: function (e) {
    if (!this.selectorStalled) {
      this.selector.css('left', e.pageX - this.wrapper.offset().left - 2);
    }
  },

  move: function (delta) {
    var scale = this.scale;
    var start, end, left;

    if (scale > 1) {
      delta = Math.round(delta / scale) * scale; // Force stepping by base pair when in small regions
    }

    left = this.left + delta;

    if (left <= this.minLeft) {
      left  = this.minLeft;
      delta = this.minLeft - this.left;
    } else if (left >= this.maxLeft) {
      left  = this.maxLeft;
      delta = this.maxLeft - this.left;
    }

    start = Math.max(Math.round(this.start - delta / scale), 1);
    end   = start + this.length - 1;

    if (end > this.chromosomeSize) {
      end   = this.chromosomeSize;
      start = end - this.length + 1;
    }

    this.left = left;

    if (start !== this.dragStart) {
      this.closeMenus();
      this.cancelSelect(true);
    }

    this.onTracks('move', delta);
    this.setRange(start, end);
  },

  moveTo: function (start, end, update, keepLength) {
    this.setRange(start, end, update, keepLength);

    if (this.prev.scale === this.scale) {
      this.left = Math.max(Math.min(this.left + Math.round((this.prev.start - this.start) * this.scale), this.maxLeft), this.minLeft);
      this.onTracks('moveTo', this.start, this.end, (this.prev.start - this.start) * this.scale);
    }
  },

  setRange: function (start, end, update, keepLength) {
    this.prev.start = this.start;
    this.prev.end   = this.end;
    this.start      = Math.max(typeof start === 'number' ? Math.floor(start) : parseInt(start, 10), 1);
    this.end        = Math.min(typeof end   === 'number' ? Math.floor(end)   : parseInt(end,   10), this.chromosomeSize);

    if (this.end < this.start) {
      this.end = Math.min(this.start + this.defaultLength - 1, this.chromosomeSize);
    }

    if (keepLength && this.end - this.start + 1 !== this.length) {
      if (this.end === this.chromosomeSize) {
        this.start = this.end - this.length + 1;
      } else {
        var center = (this.start + this.end) / 2;
        this.start = Math.max(Math.floor(center - this.length / 2), 1);
        this.end   = this.start + this.length - 1;

        if (this.end > this.chromosomeSize) {
          this.end   = this.chromosomeSize;
          this.start = this.end - this.length + 1;
        }
      }
    } else {
      this.length = this.end - this.start + 1;
    }

    this.setScale();

    if (update === true && (this.prev.start !== this.start || this.prev.end !== this.end)) {
      this.updateURL();
    }
  },

  setScale: function () {
    this.prev.scale  = this.scale;
    this.scale       = this.width / this.length;
    this.scaledStart = this.start * this.scale;

    if (this.prev.scale !== this.scale) {
      this.left        = 0;
      this.minLeft     = Math.round((this.end   - this.chromosomeSize) * this.scale);
      this.maxLeft     = Math.round((this.start - 1) * this.scale);
      this.labelBuffer = Math.ceil(this.textWidth / this.scale) * this.longestLabel;

      if (this.prev.scale) {
        this.cancelSelect();
        this.closeMenus();
      }

      this.onTracks('setScale');
      this.onTracks('makeFirstImage');
    }
  },

  checkTrackHeights: function () {
    if (this.dragging) {
      return;
    }

    this.onTracks('checkHeight');
  },

  resetTrackHeights: function () {
    this.onTracks('resetHeight');
  },

  zoomIn: function (x) {
    if (!x) {
      x = this.width / 2;
    }

    var start = Math.round(this.start + x / (2 * this.scale));
    var end   = this.length === 2 ? start : Math.round(start + (this.length - 1) / 2);

    this.setRange(start, end, true);
  },

  zoomOut: function (x) {
    if (!x) {
      x = this.width / 2;
    }

    var start = Math.round(this.start - x / this.scale);
    var end   = this.length === 1 ? start + 1 : Math.round(start + 2 * (this.length - 1));

    this.setRange(start, end, true);
  },

  addTrack: function (track, index) {
    return this.addTracks([ track ], index)[0];
  },

  addTracks: function (tracks, index) {
    var defaults = {
      browser : this,
      width   : this.width
    };

    var push = !!tracks;
    var j, config;

    tracks = tracks || $.extend([], this.tracks);
    index  = index  || 0;

    for (var i = 0; i < tracks.length; i++) {
      tracks[i] = new tracks[i]($.extend(defaults, { index: i + index, config: this.savedConfig ? $.extend(true, {}, this.savedConfig[tracks[i].prototype.id]) : undefined }));

      if (tracks[i].id) {
        this.tracksById[tracks[i].id] = tracks[i];
      }

      if (push) {
        this.tracks.push(tracks[i]);

        if (this.scale) {
          tracks[i].controller.setScale(); // scale will only be set for tracks added after initalisation
          tracks[i].controller.makeFirstImage();
        }
      } else {
        this.tracks[i] = tracks[i];
      }
    }

    this.sortTracks();
    this.saveConfig();

    return tracks;
  },

  removeTrack: function (track) {
    this.removeTracks([ track ]);
  },

  removeTracks: function (tracks) {
    var i = tracks.length;
    var track, j;

    while (i--) {
      track = tracks[i];
      j     = this.tracks.length;

      while (j--) {
        if (track === this.tracks[j]) {
          this.tracks.splice(j, 1);
          break;
        }
      }

      if (track.id) {
        delete this.tracksById[track.id];
      }

      track.destructor(); // Destroy DOM elements and track itself
    }

    this.saveConfig();
  },

  sortTracks: function () {
    if ($.grep(this.tracks, function (t) { return typeof t !== 'object'; }).length) {
      return;
    }

    var sorted     = $.extend([], this.tracks).sort(function (a, b) { return a.order - b.order; });
    var labels     = $();
    var containers = $();

    for (var i = 0; i < sorted.length; i++) {
      if (!sorted[i].prop('unsortable')) {
        sorted[i].prop('order', i);
      }

      if (sorted[i].prop('menus').length) {
        sorted[i].prop('top', sorted[i].prop('container').position().top);
      }

      labels.push(sorted[i].prop('label')[0]);
      containers.push(sorted[i].prop('container')[0]);
    }

    this.labelContainer.append(labels);
    this.wrapper.append(containers);

    // Correct the order
    this.tracks = sorted;

    labels.map(function () { return $(this).data('track'); }).each(function () {
      if (this.prop('menus').length) {
        var diff = this.prop('container').position().top - this.prop('top');
        this.prop('menus').css('top', function (i, top) { return parseInt(top, 10) + diff; });
        this.prop('top', null);
      }
    });

    sorted = labels = containers = null;
  },

  updateTrackOrder: function (e, ui) {
    var track = ui.item.data('track');
    var prev  = ui.item.prev().data('track');
    var next  = ui.item.next().data('track');
    var p     = prev ? prev.prop('order') : 0;
    var n     = next ? next.prop('order') : 0;
    var o     = p || n;
    var order;

    if (prev && next && Math.floor(n) === Math.floor(p)) {
      order = p + (n - p) / 2;
    } else {
      order = o + (p ? 1 : -1) * Math.abs(Math.round(o) - o || 1) / 2;
    }

    track.prop('order', order);

    this.sortTracks();
    this.saveConfig();
  },

  updateURL: function () {
    if (this.urlParamTemplate) {
      if (this.useHash) {
        window.location.hash = this.getQueryString();
      } else {
        window.history.pushState({}, '', this.getQueryString());
      }
    }
  },

  popState: function () {
    var coords = this.getURLCoords();
    var start  = parseInt(coords.start, 10);
    var end    = parseInt(coords.end,   10);

    if (coords.start && !(start === this.start && end === this.end)) {
      // FIXME: a back action which changes scale or a zoom out will reset tracks, since scrollStart will not be the same as it was before
      this.moveTo(start, end);
    }

    this.closeMenus();
    this.hideMessages();
  },

  getURLCoords: function () {
    var match  = ((this.useHash ? window.location.hash.replace(/^#/, '?') || window.location.search : window.location.search) + '&').match(this.paramRegex);
    var coords = {};
    var i      = 0;

    if (!match) {
      return coords;
    }

    match = match.slice(2, -1);

    $.each(this.urlParamTemplate.split('__'), function () {
      var tmp = this.match(/^(CHR|START|END)$/);

      if (tmp) {
        coords[tmp[1].toLowerCase()] = tmp[1] === 'CHR' ? match[i++] : parseInt(match[i++], 10);
      }
    });

    return coords;
  },

  getQueryString: function () {
    var location = this.urlParamTemplate
      .replace('__CHR__',   this.chr)
      .replace('__START__', this.start)
      .replace('__END__',   this.end);

    return this.useHash ? location : window.location.search ? (window.location.search + '&').replace(this.paramRegex, '$1' + location + '$5').slice(0, -1) : '?' + location;
  },

  supported: function () {
    var el = document.createElement('canvas');
    return !!(el.getContext && el.getContext('2d'));
  },

  die: function (error, el) {
    if (el && el.length) {
      el.html(error);
    } else {
      alert(error);
    }

    this.failed = true;
  },

  menuTemplate: $(
    '<div class="gv-menu">'                               +
      '<div class="gv-close gv-menu-button">&#215;</div>' +
      '<div class="gv-menu-content">'                     +
        '<div class="gv-title"></div>'                    +
        '<a class="gv-focus" href="#">Focus here</a>'     +
        '<table></table>'                                 +
      '</div>'                                            +
    '</div>'
  ).on('click', function (e) {
    if ($(e.target).hasClass('gv-close')) {
      $(this).fadeOut('fast', function () {
        var data = $(this).data();

        if (data.track) {
          data.track.prop('menus', data.track.prop('menus').not(this));
        }

        data.browser.menus = data.browser.menus.not(this);
      });
    }
  }),

  makeMenu: function (feature, event, track) {
    if (!feature.menuEl) {
      var browser = this;
      var menu    = this.menuTemplate.clone(true).data('browser', this);
      var content = $('.gv-menu-content', menu).remove();
      var i, table, el, start, end, key, width, colspan, tdWidth;

      function focus() {
        var data    = $(this).data();
        var length  = data.end - data.start + 1;
        var context = Math.max(Math.round(length / 4), 25);

        browser.moveTo(data.start - context, data.end + context, true);

        return false;
      }

      $.when(track ? track.controller.populateMenu(feature) : feature).done(function (properties) {
        if (Object.prototype.toString.call(properties) !== '[object Array]') {
          properties = [ properties ];
        }

        for (i = 0; i < properties.length; i++) {
          table = '';
          el    = content.clone().appendTo(menu);
          start = parseInt(typeof properties[i].start !== 'undefined' ? properties[i].start : feature.start, 10);
          end   = parseInt(typeof properties[i].end   !== 'undefined' ? properties[i].end   : feature.end,   10);

          $('.gv-title', el)[properties[i].title ? 'html' : 'remove'](properties[i].title);

          if (track && start && end && !browser.isStatic) {
            $('.gv-focus', el).data({ start: start, end: Math.max(end, start) }).on('click', focus);
          } else {
            $('.gv-focus', el).remove();
          }

          for (key in properties[i]) {
            if (/^start|end$/.test(key) && properties[i][key] === false) {
              continue;
            }

            if (key !== 'title') {
              colspan = properties[i][key] === '' ? ' colspan="2"' : '';
              table  += '<tr><td' + colspan + '>' + key + '</td>' + (colspan ? '' : '<td>' + properties[i][key] + '</td></tr>');
            }
          }

          $('table', el).html(table);
        }
      });

      if (track) {
        menu.addClass(track.id).data('track', track);
      }

      feature.menuEl = menu.appendTo(this.superContainer || this.container);

      $('.gv-menu-content', menu).each(function () {
        tdWidth = $('td:first', this).outerWidth();

        $('.gv-title', this).width(function (i, w) {
          width = Math.max(w, tdWidth);

          if (width === w) {
            $(this).addClass('gv-block');
            return 'auto';
          }

          return width;
        });
      });
    }

    this.menus = this.menus.add(feature.menuEl);

    if (track) {
      track.prop('menus', track.prop('menus').add(feature.menuEl));
    }

    feature.menuEl.show(); // Must show before positioning, else position will be wrong

    if (event) {
      feature.menuEl.css({ left: 0, top: 0 }).position({ of: event, my: 'left top', collision: 'flipfit' });
    }

    return feature.menuEl;
  },

  closeMenus: function (obj) {
    obj = obj || this;

    obj.menus.filter(':visible').children('.gv-close').trigger('click');
    obj.menus = $();
  },

  hideMessages: function () {
    if (this.autoHideMessages) {
      this.wrapper.find('.gv-message-container').addClass('gv-collapsed');
    }
  },

  getSelectorPosition: function () {
    var left  = this.selector.position().left;
    var width = this.selector.outerWidth(true);
    var start = Math.round(left / this.scale) + this.start;
    var end   = Math.round((left + width) / this.scale) + this.start - 1;
        end   = end <= start ? start : end;

    return { start: start, end: end, left: left, width: width };
  },

  on: function (events, obj, fn, once) {
    var browser  = this;
    var eventMap = {};
    var i, j, f, fnString, event;

    function makeEventMap(types, handler) {
      types = types.split(' ');

      for (var j = 0; j < types.length; j++) {
        eventMap[types[j]] = (eventMap[types[j]] || []).concat(handler);
      }
    }

    function makeFnString(func) {
      return func.toString();
    }

    function compare(func) {
      f = func.toString();

      for (j = 0; j < fnString.length; j++) {
        if (f === fnString[j]) {
          return true;
        }
      }
    }

    if (typeof events === 'object') {
      for (i in events) {
        makeEventMap(i, events[i]);
      }

      obj = obj || this;
    } else {
      if (typeof fn === 'undefined') {
        fn  = obj;
        obj = this;
      }

      makeEventMap(events, fn);
    }

    var type = obj instanceof Genoverse.Track || obj === 'tracks' ? 'tracks' : 'browser';

    for (i in eventMap) {
      event = i + (once ? '.once' : '');

      browser.events[type][event] = browser.events[type][event] || [];
      fnString = $.map(eventMap[i], makeFnString);

      if (!$.grep(browser.events[type][event], compare).length) {
        browser.events[type][event].push.apply(browser.events[type][event], eventMap[i]);
      }
    }
  },

  once: function (events, obj, fn) {
    this.on(events, obj, fn, true);
  },

  destroy: function () {
    this.onTracks('destructor');
    (this.superContainer || this.container).empty();
    $(window).add(document).off(this.eventNamespace);

    for (var key in this) {
      delete this[key];
    }
  }
}, {
  Plugins: {},

  wrapFunctions: function (obj) {
    for (var key in obj) {
      if (typeof obj[key] === 'function' && typeof obj[key].ancestor !== 'function' && !key.match(/^(base|extend|constructor|on|once|prop|loadPlugins|loadGenome)$/)) {
        Genoverse.functionWrap(key, obj);
      }
    }
  },

  /**
   * functionWrap - wraps event handlers and adds debugging functionality
   **/
  functionWrap: function (key, obj) {
    obj.functions = obj.functions || {};

    if (obj.functions[key] || key.match(/^(before|after)/)) {
      return;
    }

    var func      = key.substring(0, 1).toUpperCase() + key.substring(1);
    var isBrowser = obj instanceof Genoverse;
    var mainObj   = isBrowser || obj instanceof Genoverse.Track ? obj : obj.track;
    var events    = isBrowser ? obj.events.browser : obj.browser.events.tracks;
    var debug     = (isBrowser ? 'Genoverse' : obj.id || obj.name || 'Track') + '.' + key;

    obj.functions[key] = obj[key];

    obj[key] = function () {
      var args = [].slice.call(arguments);
      var rtn;

      // Debugging functionality
      // Enabled by "debug": true || { functionName: true, ...} option
      if (obj.debug === true) {                                     // if "debug": true, simply log function call
        console.log(debug);
      } else if (typeof obj.debug === 'object' && obj.debug[key]) { // if debug: { functionName: true, ...}, log function time
        console.time('time: ' + debug);
      }

      function trigger(when) {
        var once  = events[when + func + '.once'] || [];
        var funcs = (events[when + func] || []).concat(once, typeof mainObj[when + func] === 'function' ? mainObj[when + func] : []);

        if (once.length) {
          delete events[when + func + '.once'];
        }

        for (var i = 0; i < funcs.length; i++) {
          funcs[i].apply(this, args);
        }
      }

      trigger.call(this, 'before');
      rtn = this.functions[key].apply(this, args);
      trigger.call(this, 'after');

      if (typeof obj.debug === 'object' && obj.debug[key]) {
        console.timeEnd('time: ' + debug);
      }

      return rtn;
    };
  }
});

Genoverse.id = 0;
Genoverse.prototype.origin = ($('script[src]:last').attr('src').match(/(.*)js\/\w+/) || [])[1];

$(function () {
  if (!$('link[href="' + Genoverse.prototype.origin + 'css/genoverse.css"]').length) {
    $('<link href="' + Genoverse.prototype.origin + 'css/genoverse.css" rel="stylesheet">').appendTo('body');
  }
});

window.Genoverse = Genoverse;


Genoverse.Track = Base.extend({
  height     : 12,        // The height of the track_container div
  margin     : 2,         // The spacing between this track and the next
  resizable  : true,      // Is the track resizable - can be true, false or 'auto'. Auto means the track will automatically resize to show all features, but the user cannot resize it themselves.
  border     : true,      // Does the track have a bottom border
  unsortable : false,     // Is the track unsortable
  name       : undefined, // The name of the track, which appears in its label
  autoHeight : undefined, // Does the track automatically resize so that all the features are visible
  hideEmpty  : undefined, // If the track automatically resizes, should it be hidden when there are no features, or should an empty track still be shown

  constructor: function (config) {
    if (this.stranded || config.stranded) {
      this.controller = this.controller || Genoverse.Track.Controller.Stranded;
      this.model      = this.model      || Genoverse.Track.Model.Stranded;
    }

    this.setInterface();
    this.extend(config);
    this.setDefaults();
    this.setEvents();

    Genoverse.wrapFunctions(this);

    this.setLengthMap();
    this.setMVC();
  },

  setEvents: $.noop,

  setDefaults: function () {
    this.order             = typeof this.order !== 'undefined' ? this.order : this.index;
    this.defaultHeight     = this.height;
    this.defaultAutoHeight = this.autoHeight;
    this.autoHeight        = typeof this.autoHeight !== 'undefined' ? this.autoHeight : this.browser.trackAutoHeight;
    this.hideEmpty         = typeof this.hideEmpty  !== 'undefined' ? this.hideEmpty  : this.browser.hideEmptyTracks;
    this.height           += this.margin;
    this.initialHeight     = this.height;

    if (this.resizable === 'auto') {
      this.autoHeight = true;
    }
  },

  setInterface: function () {
    var mvc = [ 'Controller', 'Model', 'View', 'controller', 'model', 'view' ];
    var prop;

    this._interface = {};

    for (var i = 0; i < 3; i++) {
      for (prop in Genoverse.Track[mvc[i]].prototype) {
        if (!/^(constructor|init)$/.test(prop)) {
          this._interface[prop] = mvc[i + 3];
        }
      }
    }
  },

  setMVC: function () {
    // FIXME: if you zoom out quickly then hit the back button, the second zoom level (first one you zoomed out to) will not draw if the models/views are the same
    if (this.model && typeof this.model.abort === 'function') { // TODO: don't abort unless model is changed?
      this.model.abort();
    }

    var lengthSettings = this.getSettingsForLength();
    var settings       = $.extend(true, {}, this.constructor.prototype, lengthSettings[1]); // model, view, options
    var mvc            = [ 'model', 'view', 'controller' ];
    var mvcSettings    = {};
    var trackSettings  = {};
    var obj, j;

    settings.controller = settings.controller || this.controller || Genoverse.Track.Controller;
    settings.model      = this.models[lengthSettings[0]] || settings.model || this.model || Genoverse.Track.Model;
    settings.view       = this.views[lengthSettings[0]]  || settings.view  || this.view  || Genoverse.Track.View;

    for (var i = 0; i < 3; i++) {
      mvcSettings[mvc[i]] = { prop: {}, func: {} };
    }

    for (i in settings) {
      if (!/^(constructor|init|reset|setDefaults|base|extend|lengthMap)$/.test(i) && isNaN(i)) {
        if (this._interface[i]) {
          mvcSettings[this._interface[i]][typeof settings[i] === 'function' ? 'func' : 'prop'][i] = settings[i];
        } else if (!Genoverse.Track.prototype.hasOwnProperty(i) && !/^(controller|model|view)$/.test(i)) {
          trackSettings[i] = settings[i];
        }
      }
    }

    this.extend(trackSettings);

    for (i = 0; i < 3; i++) {
      obj = mvc[i];

      if (obj === 'controller') {
        continue;
      }

      if (typeof settings[obj] === 'function' && (!this[obj] || this[obj].constructor.ancestor !== settings[obj])) {
        // Make a new instance of model/view if there isn't one already, or the model/view in lengthSettings is different from the existing model/view
        this[obj] = this.newMVC(settings[obj], mvcSettings[obj].func, mvcSettings[obj].prop);
      } else {
        // Update the model/view with the values in mvcSettings.
        var test = typeof settings[obj] === 'object' && this[obj] !== settings[obj] ? this[obj] = settings[obj] : this[obj + 's'][lengthSettings[0]] && this.lengthMap.length > 1 ? this[obj + 's'][lengthSettings[0]] : false;

        if (test) {
          for (j in mvcSettings[obj].prop) {
            if (typeof test[j] !== 'undefined') {
              this[obj][j] = mvcSettings[obj].prop[j];
            }
          }

          this[obj].constructor.extend(mvcSettings[obj].func);

          if (obj === 'model' && typeof test.url !== 'undefined') {
            this.model.setURL(); // make sure the URL is correct
          }
        }
      }
    }

    if (!this.controller || typeof this.controller === 'function') {
      this.controller = this.newMVC(settings.controller, mvcSettings.controller.func, $.extend(mvcSettings.controller.prop, { model: this.model, view: this.view }));
    } else {
      $.extend(this.controller, { model: this.model, view: this.view, threshold: mvcSettings.controller.prop.threshold || this.controller.constructor.prototype.threshold });
    }

    if (this.strand === -1 && this.orderReverse) {
      this.order = this.orderReverse;
    }

    if (lengthSettings[1]) {
      this.models[lengthSettings[0]] = this.model;
      this.views[lengthSettings[0]]  = this.view;
    }
  },

  newMVC: function (object, functions, properties) {
    return new (object.extend(
      $.extend(true, {}, object.prototype, functions, {
        prop: $.proxy(this.prop, this)
      })
    ))(
      $.extend(properties, {
        browser : this.browser,
        width   : this.width,
        index   : this.index,
        track   : this
      })
    );
  },

  setLengthMap: function () {
    var value, j, deepCopy;

    this.lengthMap = [];
    this.models    = {};
    this.views     = {};

    for (var key in this) { // Find all scale-map like keys
      if (!isNaN(key)) {
        key   = parseInt(key, 10);
        value = this[key];
        delete this[key];
        this.lengthMap.push([ key, value === false ? { threshold: key, resizable: 'auto', featureHeight: 0, model: Genoverse.Track.Model, view: Genoverse.Track.View } : value ]);
      }
    }

    if (this.lengthMap.length) {
      this.lengthMap.push([ -1, $.extend(true, {}, this, { view: this.view || Genoverse.Track.View, model: this.model || Genoverse.Track.Model }) ]);
      this.lengthMap = this.lengthMap.sort(function (a, b) { return b[0] - a[0]; });
    }

    for (var i = 0; i < this.lengthMap.length; i++) {
      if (this.lengthMap[i][1].model && this.lengthMap[i][1].view) {
        continue;
      }

      deepCopy = {};

      if (this.lengthMap[i][0] !== -1) {
        for (j in this.lengthMap[i][1]) {
          if (this._interface[j]) {
            deepCopy[this._interface[j]] = true;
          }
        }
      }

      for (j = i + 1; j < this.lengthMap.length; j++) {
        if (!this.lengthMap[i][1].model && this.lengthMap[j][1].model) {
          this.lengthMap[i][1].model = deepCopy.model ? Genoverse.Track.Model.extend($.extend(true, {}, this.lengthMap[j][1].model.prototype)) : this.lengthMap[j][1].model;
        }

        if (!this.lengthMap[i][1].view && this.lengthMap[j][1].view) {
          this.lengthMap[i][1].view = deepCopy.view ? Genoverse.Track.View.extend($.extend(true, {}, this.lengthMap[j][1].view.prototype)) : this.lengthMap[j][1].view;
        }

        if (this.lengthMap[i][1].model && this.lengthMap[i][1].view) {
          break;
        }
      }
    }
  },

  getSettingsForLength: function () {
    for (var i = 0; i < this.lengthMap.length; i++) {
      if (this.browser.length > this.lengthMap[i][0] || this.browser.length === 1 && this.lengthMap[i][0] === 1) {
        return this.lengthMap[i];
      }
    }

    return [];
  },

  prop: function (key, value) {
    var mvc = [ 'controller', 'model', 'view' ];
    var obj;

    if (this._interface[key]) {
      obj = this[this._interface[key]];
    } else {
      for (var i = 0; i < 3; i++) {
        if (this[mvc[i]] && typeof this[mvc[i]][key] !== 'undefined') {
          obj = this[mvc[i]];
          break;
        }
      }

      obj = obj || this;
    }


    if (typeof value !== 'undefined') {
      if (value === null) {
        delete obj[key];
      } else {
        obj[key] = value;
      }
    }

    return obj ? obj[key] : undefined;
  },

  setHeight: function (height, forceShow) {
    if (this.disabled || (forceShow !== true && height < this.prop('featureHeight')) || (this.prop('threshold') && !this.prop('thresholdMessage') && this.browser.length > this.prop('threshold'))) {
      height = 0;
    } else {
      height = Math.max(height, this.prop('minLabelHeight'));
    }

    this.height = height;

    return height;
  },

  resetHeight: function () {
    if (this.resizable === true) {
      var resizer = this.prop('resizer');

      this.autoHeight = !!([ this.defaultAutoHeight, this.browser.trackAutoHeight ].sort(function (a, b) {
        return (typeof a !== 'undefined' && a !== null ? 0 : 1) - (typeof b !== 'undefined' && b !== null ?  0 : 1);
      })[0]);

      this.controller.resize(this.autoHeight ? this.prop('fullVisibleHeight') : this.defaultHeight + this.margin + (resizer ? resizer.height() : 0));
      this.initialHeight = this.height;
    }
  },

  enable: function () {
    if (this.disabled === true) {
      this.disabled = false;
      this.controller.resize(this.initialHeight);
      this.reset();
    }
  },

  disable: function () {
    if (!this.disabled) {
      this.disabled = true;
      this.controller.resize(0);
    }
  },

  reset: function () {
    if (this.prop('url') !== false) {
      this.model.init(true);
    }

    this.view.init();
    this.setLengthMap();
    this.controller.reset();
  },

  remove: function () {
    this.browser.removeTrack(this);
  },

  destructor: function () {
    this.controller.destroy();

    var objs = [ this.view, this.model, this.controller, this ];

    for (var obj in objs) {
      for (var key in obj) {
        delete obj[key];
      }
    }
  }
});

Genoverse.Track.Controller = Base.extend({
  scrollBuffer : 1.2,       // Number of widths, if left or right closer to the edges of viewpoint than the buffer, start making more images
  threshold    : Infinity,  // Length above which the track is not drawn
  messages     : undefined,

  constructor: function (properties) {
    $.extend(this, properties);
    Genoverse.wrapFunctions(this);
    this.init();
  },

  init: function () {
    this.setDefaults();
    this.addDomElements();
    this.addUserEventHandlers();
  },

  setDefaults: function () {
    this.imgRange    = {};
    this.scrollRange = {};
    this.messages    = this.messages || {
      error     : 'ERROR: ',
      threshold : 'Data for this track is not displayed in regions greater than ',
      resize    : 'Some features are currently hidden, <a class="gv-resize">resize to see all</a>'
    };
  },

  reset: function () {
    this.setDefaults();
    this.resetImages();
    this.browser.closeMenus(this);
    this.setScale();
    this.makeFirstImage();
  },

  resetImages: function () {
    this.scrollContainer.empty();
    this.resetImageRanges();
  },

  resetImageRanges: function () {
    this.left        = 0;
    this.scrollStart = 'ss-' + this.browser.start + '-' + this.browser.end;

    this.imgRange[this.scrollStart]    = this.imgRange[this.scrollStart]    || { left: this.width * -2, right: this.width * 2 };
    this.scrollRange[this.scrollStart] = this.scrollRange[this.scrollStart] || { start: this.browser.start - this.browser.length, end: this.browser.end + this.browser.length };
  },

  setName: function (name) {
    this.track.name = name;
    this.labelName  = this.labelName || $('<span class="gv-name">').appendTo(this.label);

    this.labelName.attr('title', name).html(name);

    this.minLabelHeight = Math.max(this.labelName.outerHeight(true), this.labelName.outerHeight());

    if (this.minLabelHeight) {
      this.label.height(this.prop('disabled') ? 0 : Math.max(this.prop('height'), this.minLabelHeight));
    }
  },

  addDomElements: function () {
    var name = this.track.name || '';

    this.menus            = $();
    this.container        = $('<div class="gv-track-container">').appendTo(this.browser.wrapper);
    this.scrollContainer  = $('<div class="gv-scroll-container">').appendTo(this.container);
    this.imgContainer     = $('<div class="gv-image-container">').width(this.width);
    this.messageContainer = $('<div class="gv-message-container"><div class="gv-messages"></div><span class="gv-control gv-collapse">&laquo;</span><span class="gv-control gv-expand">&raquo;</span></div>').appendTo(this.container);
    this.label            = $('<li>').appendTo(this.browser.labelContainer).height(this.prop('height')).data('track', this.track);
    this.context          = $('<canvas>')[0].getContext('2d');

    if (this.prop('border')) {
      $('<div class="gv-track-border">').appendTo(this.container);
    }

    if (this.prop('unsortable')) {
      this.label.addClass('gv-unsortable');
    } else {
      $('<div class="gv-handle">').appendTo(this.label);
    }

    this.setName(name);

    this.container.height(this.prop('disabled') ? 0 : Math.max(this.prop('height'), this.minLabelHeight));
  },

  addUserEventHandlers: function () {
    var controller = this;
    var browser    = this.browser;

    this.container.on('mouseup', '.gv-image-container', function (e) {
      if ((e.which && e.which !== 1) || (typeof browser.dragStart === 'number' && browser.start !== browser.dragStart) || (browser.dragAction === 'select' && browser.selector.outerWidth(true) > 2)) {
        return; // Only show menus on left click when not dragging and not selecting
      }

      controller.click(e);
    });

    this.messageContainer.children().on('click', function () {
      var collapsed = controller.messageContainer.children('.gv-messages').is(':visible') ? ' gv-collapsed' : '';
      var code      = controller.messageContainer.find('.gv-msg')[0].className.replace('gv-msg', '').replace(' ', '');

      controller.messageContainer.attr('class', 'gv-message-container' + collapsed);
      controller.checkHeight();

      if (code !== 'error') {
        document.cookie = [ 'gv_msg', code, controller.prop('id') ].join('_') + '=1; expires=' + (collapsed ? 'Tue, 19 Jan 2038' : 'Thu, 01 Jan 1970') + ' 00:00:00 GMT; path=/';
      }
    });
  },

  click: function (e) {
    var target = $(e.target);
    var x      = e.pageX - this.container.parent().offset().left + this.browser.scaledStart;
    var y      = e.pageY - target.offset().top;

    if (this.imgContainer.hasClass('gv-flip')) {
      y = target.height() - y;
    }

    var f = this[e.target.className === 'gv-labels' ? 'labelPositions' : 'featurePositions'].search({ x: x, y: y, w: 1, h: 1 }).sort(function (a, b) { return a.sort - b.sort; })[0];

    if (f) {
      this.browser.makeMenu(f, e, this.track);
    }
  },

  // FIXME: messages are now hidden/shown instead of removed/added. This will cause a problem if a new message arrives with the same code as one that already exists.
  showMessage: function (code, additionalText) {
    var messages = this.messageContainer.children('.gv-messages');

    if (!messages.children('.gv-' + code).show().length) {
      var msg = $('<div class="gv-msg gv-' + code + '">' + this.messages[code] + (additionalText || '') + '</div>').prependTo(messages);

      if (code === 'resize') {
        msg.children('a.gv-resize').on('click', $.proxy(function () {
          this.resize(this.fullVisibleHeight);
        }, this));
      }

      this.messageContainer[document.cookie.match([ 'gv_msg', code, this.prop('id') ].join('_') + '=1') ? 'addClass' : 'removeClass']('gv-collapsed');
    }

    var height = this.messageContainer.show().outerHeight(true);

    if (height > this.prop('height')) {
      this.resize(height);
    }

    messages = null;
  },

  hideMessage: function (code) {
    var messages = this.messageContainer.find('.gv-msg');

    if (code) {
      messages = messages.filter('.gv-' + code).hide();

      if (messages.length && !messages.siblings().filter(function () { return this.style.display !== 'none'; }).length) {
        this.messageContainer.hide();
      }
    } else {
      messages.hide();
      this.messageContainer.hide();
    }

    messages = null;
  },

  showError: function (error) {
    this.showMessage('error', error);
  },

  checkHeight: function () {
    if (this.browser.length > this.threshold) {
      if (this.thresholdMessage) {
        this.showMessage('threshold', this.thresholdMessage);
        this.fullVisibleHeight = Math.max(this.messageContainer.outerHeight(true), this.minLabelHeight);
      } else {
        this.fullVisibleHeight = 0;
      }
    } else if (this.thresholdMessage) {
      this.hideMessage('threshold');
    }

    if (!this.prop('resizable')) {
      return;
    }

    var autoHeight;

    if (this.browser.length > this.threshold) {
      autoHeight = this.prop('autoHeight');
      this.prop('autoHeight', true);
    } else {
      var bounds    = { x: this.browser.scaledStart, w: this.width, y: 0, h: 9e99 };
      var scale     = this.scale;
      var features  = this.featurePositions.search(bounds);
      var minHeight = this.prop('hideEmpty') ? 0 : this.minLabelHeight;
      var height    = Math.max.apply(Math, $.map(features, function (feature) { return feature.position[scale].bottom; }).concat(minHeight));

      if (this.prop('labels') === 'separate') {
        this.labelTop = height;
        height += Math.max.apply(Math, $.map(this.labelPositions.search(bounds).concat(this.prop('repeatLabels') ? features : []), function (feature) { return feature.position[scale].label.bottom; }).concat(minHeight));
      }

      this.fullVisibleHeight = height || (this.messageContainer.is(':visible') ? this.messageContainer.outerHeight(true) : minHeight);
    }

    this.autoResize();

    if (typeof autoHeight !== 'undefined') {
      this.prop('autoHeight', autoHeight);
    }
  },

  autoResize: function () {
    var autoHeight = this.prop('autoHeight');

    if (autoHeight || this.prop('labels') === 'separate') {
      this.resize(autoHeight ? this.fullVisibleHeight : this.prop('height'), this.labelTop, false);
    } else {
      this.toggleExpander();
    }
  },

  resize: function (height, arg, saveConfig) {
    height = this.track.setHeight(height, arg);

    if (typeof arg === 'number') {
      this.imgContainers.children('.gv-labels').css('top', arg);
    }

    this.container.add(this.label).height(height)[height ? 'show' : 'hide']();
    this.toggleExpander();

    if (saveConfig !== false) {
      this.browser.saveConfig();
    }
  },

  toggleExpander: function () {
    if (this.prop('resizable') !== true) {
      return;
    }

    var featureMargin = this.prop('featureMargin');
    var height        = this.prop('height');

    // Note: fullVisibleHeight - featureMargin.top - featureMargin.bottom is not actually the correct value to test against, but it's the easiest best guess to obtain.
    // fullVisibleHeight is the maximum bottom position of the track's features in the region, which includes margin at the bottom of each feature and label
    // Therefore fullVisibleHeight includes this margin for the bottom-most feature.
    // The correct value (for a track using the default positionFeatures code) is:
    // fullVisibleHeight - ([there are labels in this region] ? (labels === 'separate' ? 0 : featureMargin.bottom + 1) + 2 : featureMargin.bottom)
    if (this.fullVisibleHeight - featureMargin.top - featureMargin.bottom > height && !this.prop('disabled')) {
      this.showMessage('resize');

      var controller = this;
      var h          = this.messageContainer.outerHeight(true);

      if (h > height) {
        this.resize(h);
      }

      this.expander = (this.expander || $('<div class="gv-expander gv-static">').width(this.width).appendTo(this.container).on('click', function () {
        controller.resize(controller.fullVisibleHeight);
      }))[this.prop('height') === 0 ? 'hide' : 'show']();
    } else if (this.expander) {
      this.hideMessage('resize');
      this.expander.hide();
    }
  },

  setWidth: function (width) {
    var track = this.track;

    $.each([ this, track, track.model, track.view ], function () {
      this.width = width;
    });

    this.imgContainer.add(this.expander).width(width);

  },

  setScale: function () {
    var controller = this;

    this.scale = this.browser.scale;

    this.track.setMVC();
    this.resetImageRanges();

    var labels = this.prop('labels');

    if (labels && labels !== 'overlay') {
      this.model.setLabelBuffer(this.browser.labelBuffer);
    }

    if (this.threshold !== Infinity && this.prop('resizable') !== 'auto') {
      this.thresholdMessage = this.view.formatLabel(this.threshold);
    }

    $.each(this.view.setScaleSettings(this.scale), function (k, v) { controller[k] = v; });

    this.hideMessage();
  },

  move: function (delta) {
    this.left += delta;
    this.scrollContainer.css('left', this.left);

    var scrollStart = this.scrollStart;

    if (this.imgRange[scrollStart].left + this.left > -this.scrollBuffer * this.width) {
      var end = this.scrollRange[scrollStart].start - 1;

      this.makeImage({
        scale : this.scale,
        start : end - this.browser.length + 1,
        end   : end,
        left  : this.imgRange[scrollStart].left,
        cls   : scrollStart
      });

      this.imgRange[scrollStart].left     -= this.width;
      this.scrollRange[scrollStart].start -= this.browser.length;
    }

    if (this.imgRange[scrollStart].right + this.left < this.scrollBuffer * this.width) {
      var start = this.scrollRange[scrollStart].end + 1;

      this.makeImage({
        scale : this.scale,
        start : start,
        end   : start + this.browser.length - 1,
        left  : this.imgRange[scrollStart].right,
        cls   : scrollStart
      });

      this.imgRange[scrollStart].right  += this.width;
      this.scrollRange[scrollStart].end += this.browser.length;
    }
  },

  moveTo: function (start, end, delta) {
    var scrollRange = this.scrollRange[this.scrollStart];
    var scrollStart = 'ss-' + start + '-' + end;

    if (this.scrollRange[scrollStart] || start > scrollRange.end || end < scrollRange.start) {
      this.resetImageRanges();
      this.makeFirstImage(scrollStart);
    } else {
      this.move(typeof delta === 'number' ? delta : (start - this.browser.start) * this.scale);
      this.checkHeight();
    }
  },

  makeImage: function (params) {
    params.scaledStart   = params.scaledStart   || params.start * params.scale;
    params.width         = params.width         || this.width;
    params.height        = params.height        || this.prop('height');
    params.featureHeight = params.featureHeight || 0;
    params.labelHeight   = params.labelHeight   || 0;

    var deferred;
    var controller = this;
    var tooLarge   = this.browser.length > this.threshold;
    var div        = this.imgContainer.clone().addClass((params.cls + ' gv-loading').replace('.', '_')).css({ left: params.left, display: params.cls === this.scrollStart ? 'block' : 'none' });
    var bgImage    = params.background ? $('<img class="gv-bg">').hide().addClass(params.background).data(params).prependTo(div) : false;
    var image      = $('<img class="gv-data">').hide().data(params).appendTo(div).on('load', function () {
      $(this).fadeIn('fast').parent().removeClass('gv-loading');
      $(this).siblings('.gv-bg').show();
    });

    params.container = div;

    this.imgContainers.push(div[0]);
    this.scrollContainer.append(this.imgContainers);

    if (!tooLarge && !this.model.checkDataRange(params.start, params.end)) {
      var buffer = this.prop('dataBuffer');

      params.start -= buffer.start;
      params.end   += buffer.end;
      deferred      = this.model.getData(params.start, params.end);
    }

    if (!deferred) {
      deferred = $.Deferred();
      setTimeout($.proxy(deferred.resolve, this), 1); // This defer makes scrolling A LOT smoother, pushing render call to the end of the exec queue
    }

    return deferred.done(function () {
      var features = tooLarge ? [] : controller.model.findFeatures(params.start, params.end);
      controller.render(features, image);

      if (bgImage) {
        controller.renderBackground(features, bgImage);
      }
    }).fail(function (e) {
      controller.showError(e);
    });
  },

  makeFirstImage: function (moveTo) {
    if (this.scrollContainer.children().hide().filter('.' + (moveTo || this.scrollStart)).show().length) {
      this.scrollContainer.css('left', 0);

      return this.checkHeight();
    }

    var controller = this;
    var start      = this.browser.start;
    var end        = this.browser.end;
    var length     = this.browser.length;
    var scale      = this.scale;
    var cls        = this.scrollStart;
    var images     = [{ start: start, end: end, scale: scale, cls: cls, left: 0 }];
    var left       = 0;
    var width      = this.width;

    if (!this.browser.isStatic) {
      if (start > 1) {
        images.push({ start: start - length, end: start - 1, scale: scale, cls: cls, left: -this.width });
        left   = -this.width;
        width += this.width;
      }

      if (end < this.browser.chromosomeSize) {
        images.push({ start: end + 1, end: end + length, scale: scale, cls: cls, left: this.width });
        width += this.width;
      }
    }

    var loading = this.imgContainer.clone().addClass('gv-loading').css({ left: left, width: width }).prependTo(this.scrollContainer.css('left', 0));

    function makeImages() {
      for (var i = 0; i < images.length; i++) {
        controller.makeImage(images[i]);
      }

      loading.remove();
    }

    // FIXME: on zoom out, making more than 1 request
    if (length > this.threshold || this.model.checkDataRange(start, end)) {
      makeImages();
    } else {
      var buffer = this.prop('dataBuffer');

      this.model.getData(start - buffer.start - length, end + buffer.end + length).done(makeImages).fail(function (e) {
        controller.showError(e);
      });
    }
  },

  render: function (features, img) {
    var params         = img.data();
        features       = this.view.positionFeatures(this.view.scaleFeatures(features, params.scale), params); // positionFeatures alters params.featureHeight, so this must happen before the canvases are created
    var featureCanvas  = $('<canvas>').attr({ width: params.width, height: params.featureHeight || 1 });
    var labelCanvas    = this.prop('labels') === 'separate' && params.labelHeight ? featureCanvas.clone().attr('height', params.labelHeight) : featureCanvas;
    var featureContext = featureCanvas[0].getContext('2d');
    var labelContext   = labelCanvas[0].getContext('2d');

    featureContext.font = labelContext.font = this.prop('font');

    switch (this.prop('labels')) {
      case false     : break;
      case 'overlay' : labelContext.textAlign = 'center'; labelContext.textBaseline = 'middle'; break;
      default        : labelContext.textAlign = 'left';   labelContext.textBaseline = 'top';    break;
    }

    this.view.draw(features, featureContext, labelContext, params.scale);

    img.attr('src', featureCanvas[0].toDataURL());

    if (labelContext !== featureContext) {
      img.clone(true).attr({ 'class': 'gv-labels', src: labelCanvas[0].toDataURL() }).insertAfter(img);
    }

    this.checkHeight();

    featureCanvas = labelCanvas = img = null;
  },

  renderBackground: function (features, img, height) {
    var canvas = $('<canvas>').attr({ width: this.width, height: height || 1 })[0];
    this.view.drawBackground(features, canvas.getContext('2d'), img.data());
    img.attr('src', canvas.toDataURL());
    canvas = img = null;
  },

  populateMenu: function (feature) {
    var f    = $.extend(true, {}, feature);
    var menu = {
      title    : f.label ? f.label[0] : f.id,
      Location : this.browser.chr + ':' + f.start + '-' + f.end
    };

    delete f.start;
    delete f.end;
    delete f.sort;

    for (var i in f) {
      if (typeof f[i] === 'object' || menu.title === f[i]) {
        delete f[i];
      }
    }

    return $.extend(menu, f);
  },

  destroy: function () {
    this.container.add(this.label).add(this.menus).remove();
  }
});


Genoverse.Track.Model = Base.extend({
  dataType   : 'json',
  allData    : false,
  dataBuffer : undefined, // e.g. { start: 0, end: 0 } - basepairs to extend data region for, when getting data from the origin
  xhrFields  : undefined,
  url        : undefined,
  urlParams  : undefined, // hash of URL params

  constructor: function (properties) {
    $.extend(this, properties);
    Genoverse.wrapFunctions(this);
    this.init();
  },

  init: function (reset) {
    this.setDefaults(reset);

    if (reset) {
      for (var i in this.featuresById) {
        delete this.featuresById[i].position;
      }
    } else {
      this.dataRanges   = new RTree();
      this.features     = new RTree();
      this.featuresById = {};
    }

    this.dataLoading = []; // tracks incomplete requests for data
  },

  setDefaults: function (reset) {
    this.dataBuffer = this.dataBuffer || { start: 0, end: 0 }; // basepairs to extend data region for, when getting data from the origin
    this.urlParams  = this.urlParams  || {};                   // hash of URL params
    this.xhrFields  = this.xhrFields  || {};

    if (!this._url) {
      this._url = this.url; // Remember original url
    }

    if (this.url || (this._url && reset)) {
      this.setURL(undefined, reset);
    }
  },

  setURL: function (urlParams, update) {
    urlParams = urlParams || this.urlParams;

    if (update && this._url) {
      this.url = this._url;
    }

    this.url += (this.url.indexOf('?') === -1 ? '?' : '&') + decodeURIComponent($.param(urlParams, true));
    this.url  = this.url.replace(/[&?]$/, '');
  },

  parseURL: function (start, end, url) {
    if (this.allData) {
      start = 1;
      end   = this.browser.chromosomeSize;
    }

    return (url || this.url).replace(/__CHR__/, this.browser.chr).replace(/__START__/, start).replace(/__END__/, end);
  },

  setLabelBuffer: function (buffer) {
    this.dataBuffer.start = Math.max(this.dataBuffer.start, buffer);
  },

  getData: function (start, end, done) {
    start = Math.max(1, start);
    end   = Math.min(this.browser.chromosomeSize, end);

    var model    = this;
    var deferred = $.Deferred();
    var bins     = [];
    var length   = end - start + 1;

    if (!this.url) {
      return deferred.resolveWith(this);
    }

    if (this.dataRequestLimit && length > this.dataRequestLimit) {
      var i = Math.ceil(length / this.dataRequestLimit);

      while (i--) {
        bins.push([ start, i ? start += this.dataRequestLimit - 1 : end ]);
        start++;
      }
    } else {
      bins.push([ start, end ]);
    }

    $.when.apply($, $.map(bins, function (bin) {
      var request = $.ajax({
        url       : model.parseURL(bin[0], bin[1]),
        dataType  : model.dataType,
        context   : model,
        xhrFields : model.xhrFields,
        success   : function (data) { this.receiveData(data, bin[0], bin[1]); },
        error     : function (xhr, statusText) { this.track.controller.showError(statusText + ' while getting the data, see console for more details', arguments); },
        complete  : function (xhr) { this.dataLoading = $.grep(this.dataLoading, function (t) { return xhr !== t; }); }
      });

      request.coords = [ bin[0], bin[1] ]; // store actual start and end on the request, in case they are needed

      if (typeof done === 'function') {
        request.done(done);
      }

      model.dataLoading.push(request);

      return request;
    })).done(function () { deferred.resolveWith(model); });

    return deferred;
  },

  receiveData: function (data, start, end) {
    start = Math.max(start, 1);
    end   = Math.min(end, this.browser.chromosomeSize);

    this.setDataRange(start, end);
    this.parseData(data, start, end);

    if (this.allData) {
      this.url = false;
    }
  },

  /**
  * parseData(data, start, end) - parse raw data from the data source (e.g. online web service)
  * extract features and insert it into the internal features storage (RTree)
  *
  * >> data  - raw data from the data source (e.g. ajax response)
  * >> start - start location of the data
  * >> end   - end   location of the data
  * << nothing
  *
  * every feature extracted this routine must construct a hash with at least 3 values:
  *  {
  *    id    : [unique feature id, string],
  *    start : [chromosomal start position, integer],
  *    end   : [chromosomal end position, integer],
  *    [other optional key/value pairs]
  *  }
  *
  * and call this.insertFeature(feature)
  */
  parseData: function (data, start, end) {
    // Example of parseData function when data is an array of hashes like { start: ..., end: ... }
    for (var i = 0; i < data.length; i++) {
      var feature = data[i];

      feature.sort = start + i;

      this.insertFeature(feature);
    }
  },

  setDataRange: function (start, end) {
    if (this.allData) {
      start = 1;
      end   = this.browser.chromosomeSize;
    }

    this.dataRanges.insert({ x: start, w: end - start + 1, y: 0, h: 1 }, [ start, end ]);
  },

  checkDataRange: function (start, end) {
    start = Math.max(1, start);
    end   = Math.min(this.browser.chromosomeSize, end);

    var ranges = this.dataRanges.search({ x: start, w: end - start + 1, y: 0, h: 1 }).sort(function (a, b) { return a[0] - b[0]; });

    if (!ranges.length) {
      return false;
    }

    var s = ranges.length === 1 ? ranges[0][0] : 9e99;
    var e = ranges.length === 1 ? ranges[0][1] : -9e99;

    for (var i = 0; i < ranges.length - 1; i++) {
      // s0 <= s1 && ((e0 >= e1) || (e0 + 1 >= s1))
      if (ranges[i][0] <= ranges[i + 1][0] && ((ranges[i][1] >= ranges[i + 1][1]) || (ranges[i][1] + 1 >= ranges[i + 1][0]))) {
        s = Math.min(s, ranges[i][0]);
        e = Math.max(e, ranges[i + 1][1]);
      } else {
        return false;
      }
    }

    return start >= s && end <= e;
  },

  insertFeature: function (feature) {
    // Make sure we have a unique ID, this method is not efficient, so better supply your own id
    if (!feature.id) {
      feature.id = feature.ID || this.hashCode(JSON.stringify(feature));
    }

    if (!this.featuresById[feature.id]) {
      this.features.insert({ x: feature.start, y: 0, w: feature.end - feature.start + 1, h: 1 }, feature);
      this.featuresById[feature.id] = feature;
    }
  },

  findFeatures: function (start, end) {
    return this.features.search({ x: start - this.dataBuffer.start, y: 0, w: end - start + this.dataBuffer.start + this.dataBuffer.end + 1, h: 1 }).sort(function (a, b) { return a.sort - b.sort; });
  },

  abort: function () {
    for (var i = 0; i < this.dataLoading.length; i++) {
      this.dataLoading[i].abort();
    }

    this.dataLoading = [];
  },

  hashCode: function (string) {
    var hash = 0;
    var chr;

    if (!string.length) {
      return hash;
    }

    for (var i = 0; i < string.length; i++) {
      chr  = string.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash = hash & hash; // Convert to 32bit integer
    }

    return '' + hash;
  }
});


Genoverse.Track.View = Base.extend({
  fontHeight      : 10,
  fontFamily      : 'sans-serif',
  fontWeight      : 'normal',
  fontColor       : '#000000',
  color           : '#000000',
  minScaledWidth  : 0.5,
  widthCorrection : 1, // Pixels to add to the end of a feature when scale > 1 - ensures that 1bp features are always at least 1px wide
  labels          : true,
  repeatLabels    : false,
  bump            : false,
  depth           : undefined,
  featureHeight   : undefined, // defaults to track height
  featureMargin   : undefined, // e.g. { top: 3, right: 1, bottom: 1, left: 0 }

  constructor: function (properties) {
    $.extend(this, properties);
    Genoverse.wrapFunctions(this);
    this.init();
  },

  // difference between init and constructor: init gets called on reset, if reset is implemented
  init: function () {
    this.setDefaults();
    this.scaleSettings = {};
  },

  setDefaults: function () {
    this.featureMargin = this.featureMargin || { top: 3, right: 1, bottom: 1, left: 0 };

    var margin = [ 'Top', 'Right', 'Bottom', 'Left' ];

    for (var i = 0; i < margin.length; i++) {
      if (typeof this['featureMargin' + margin[i]] === 'number') {
        this.featureMargin[margin[i].toLowerCase()] = this['featureMargin' + margin[i]];
      }
    }

    this.context       = $('<canvas>')[0].getContext('2d');
    this.featureHeight = typeof this.featureHeight !== 'undefined' ? this.featureHeight : this.prop('defaultHeight');
    this.font          = this.fontWeight + ' ' + this.fontHeight + 'px ' + this.fontFamily;
    this.labelUnits    = [ 'bp', 'kb', 'Mb', 'Gb', 'Tb' ];

    if (this.labels && this.labels !== 'overlay' && (this.depth || this.bump === 'labels')) {
      this.labels = 'separate';
    }
  },

  setScaleSettings: function (scale) {
    var featurePositions, labelPositions;

    if (!this.scaleSettings[scale]) {
      featurePositions = featurePositions || new RTree();

      this.scaleSettings[scale] = {
        imgContainers    : $(),
        featurePositions : featurePositions,
        labelPositions   : this.labels === 'separate' ? labelPositions || new RTree() : featurePositions
      };
    }

    return this.scaleSettings[scale];
  },

  scaleFeatures: function (features, scale) {
    var add = Math.max(scale, this.widthCorrection);
    var feature;

    for (var i = 0; i < features.length; i++) {
      feature = features[i];

      if (!feature.position) {
        feature.position = {};
      }

      if (!feature.position[scale]) {
        feature.position[scale] = {
          start  : feature.start * scale,
          width  : Math.max((feature.end - feature.start) * scale + add, this.minScaledWidth),
          height : feature.height || this.featureHeight
        };
      }
    }

    return features;
  },

  positionFeatures: function (features, params) {
    params.margin = this.prop('margin');

    for (var i = 0; i < features.length; i++) {
      this.positionFeature(features[i], params);
    }

    params.width         = Math.ceil(params.width);
    params.height        = Math.ceil(params.height);
    params.featureHeight = Math.max(Math.ceil(params.featureHeight), this.prop('resizable') ? Math.max(this.prop('height'), this.prop('minLabelHeight')) : 0);
    params.labelHeight   = Math.ceil(params.labelHeight);

    return features;
  },

  positionFeature: function (feature, params) {
    var scale = params.scale;

    feature.position[scale].X = feature.position[scale].start - params.scaledStart; // FIXME: always have to reposition for X, in case a feature appears in 2 images. Pass scaledStart around instead?

    if (!feature.position[scale].positioned) {
      feature.position[scale].H = feature.position[scale].height + this.featureMargin.bottom;
      feature.position[scale].W = feature.position[scale].width + (feature.marginRight || this.featureMargin.right);
      feature.position[scale].Y = (typeof feature.y === 'number' ? feature.y * feature.position[scale].H : 0) + this.featureMargin.top;

      if (feature.label) {
        if (typeof feature.label === 'string') {
          feature.label = feature.label.split('\n');
        }

        var context = this.context;

        feature.labelHeight = feature.labelHeight || (this.fontHeight + 2) * feature.label.length;
        feature.labelWidth  = feature.labelWidth  || Math.max.apply(Math, $.map(feature.label, function (l) { return Math.ceil(context.measureText(l).width); })) + 1;

        if (this.labels === true) {
          feature.position[scale].H += feature.labelHeight;
          feature.position[scale].W  = Math.max(feature.labelWidth, feature.position[scale].W);
        } else if (this.labels === 'separate' && !feature.position[scale].label) {
          feature.position[scale].label = {
            x: feature.position[scale].start,
            y: feature.position[scale].Y,
            w: feature.labelWidth,
            h: feature.labelHeight
          };
        }
      }

      var bounds = {
        x: feature.position[scale].start,
        y: feature.position[scale].Y,
        w: feature.position[scale].W,
        h: feature.position[scale].H + this.featureMargin.top
      };

      if (this.bump === true) {
        this.bumpFeature(bounds, feature, scale, this.scaleSettings[scale].featurePositions);
      }

      this.scaleSettings[scale].featurePositions.insert(bounds, feature);

      feature.position[scale].bottom = feature.position[scale].Y + feature.position[scale].H + params.margin;

      if (feature.position[scale].label) {
        var f = $.extend(true, {}, feature); // FIXME: hack to avoid changing feature.position[scale].Y in bumpFeature

        this.bumpFeature(feature.position[scale].label, f, scale, this.scaleSettings[scale].labelPositions);

        f.position[scale].label        = feature.position[scale].label;
        f.position[scale].label.bottom = f.position[scale].label.y + f.position[scale].label.h + params.margin;

        feature = f;

        this.scaleSettings[scale].labelPositions.insert(feature.position[scale].label, feature);

        params.labelHeight = Math.max(params.labelHeight, feature.position[scale].label.bottom);
      }

      feature.position[scale].positioned = true;
    }

    params.featureHeight = Math.max(params.featureHeight, feature.position[scale].bottom);
    params.height        = Math.max(params.height, params.featureHeight + params.labelHeight);
  },

  bumpFeature: function (bounds, feature, scale, tree) {
    var depth = 0;
    var bump;

    do {
      if (this.depth && ++depth >= this.depth) {
        if ($.grep(this.scaleSettings[scale].featurePositions.search(bounds), function (f) { return f.position[scale].visible !== false; }).length) {
          feature.position[scale].visible = false;
        }

        break;
      }

      bump = false;

      if ((tree.search(bounds)[0] || feature).id !== feature.id) {
        bounds.y += bounds.h;
        bump      = true;
      }
    } while (bump);

    feature.position[scale].Y = bounds.y;
  },

  draw: function (features, featureContext, labelContext, scale) {
    var feature;

    for (var i = 0; i < features.length; i++) {
      feature = features[i];

      if (feature.position[scale].visible !== false) {
        // TODO: extend with feature.position[scale], rationalize keys
        this.drawFeature($.extend({}, feature, {
          x             : feature.position[scale].X,
          y             : feature.position[scale].Y,
          width         : feature.position[scale].width,
          height        : feature.position[scale].height,
          labelPosition : feature.position[scale].label
        }), featureContext, labelContext, scale);
      }
    }
  },

  drawFeature: function (feature, featureContext, labelContext, scale) {
    if (feature.x < 0 || feature.x + feature.width > this.width) {
      this.truncateForDrawing(feature);
    }

    if (feature.color !== false) {
      if (!feature.color) {
        this.setFeatureColor(feature);
      }

      featureContext.fillStyle = feature.color;
      featureContext.fillRect(feature.x, feature.y, feature.width, feature.height);
    }

    if (this.labels && feature.label) {
      this.drawLabel(feature, labelContext, scale);
    }

    if (feature.borderColor) {
      featureContext.strokeStyle = feature.borderColor;
      featureContext.strokeRect(feature.x, feature.y + 0.5, feature.width, feature.height);
    }

    if (feature.decorations) {
      this.decorateFeature(feature, featureContext, scale);
    }
  },

  drawLabel: function (feature, context, scale) {
    var original = feature.untruncated;
    var width    = (original || feature).width;

    if (this.labels === 'overlay' && feature.labelWidth >= Math.floor(width)) {
      return;
    }

    if (typeof feature.label === 'string') {
      feature.label = [ feature.label ];
    }

    var x       = (original || feature).x;
    var n       = this.repeatLabels ? Math.ceil((width - Math.max(scale, 1) - (this.labels === 'overlay' ? feature.labelWidth : 0)) / this.width) : 1;
    var spacing = width / n;
    var label, start, j, y, h;

    if (this.repeatLabels && scale > 1) {
      spacing = this.browser.length * scale;
      n = Math.ceil(width / spacing);
    }

    if (!feature.labelColor) {
      this.setLabelColor(feature);
    }

    context.fillStyle = feature.labelColor;

    if (this.labels === 'overlay') {
      label = [ feature.label.join(' ') ];
      y     = feature.y + (feature.height + 1) / 2;
      h     = 0;
    } else {
      label = feature.label;
      y     = feature.labelPosition ? feature.labelPosition.y : feature.y + feature.height + this.featureMargin.bottom;
      h     = this.fontHeight + 2;
    }

    var i      = context.textAlign === 'center' ? 0.5 : 0;
    var offset = feature.labelWidth * i;

    if (n > 1) {
      i += Math.max(Math.floor(-(feature.labelWidth + x) / spacing), 0);
    }

    for (; i < n; i++) {
      start = x + (i * spacing);

      if (start + feature.labelWidth >= 0) {
        if (start - offset > this.width) {
          break;
        }

        for (j = 0; j < label.length; j++) {
          context.fillText(label[j], start, y + (j * h));
        }
      }
    }
  },

  setFeatureColor: function (feature) {
    feature.color = this.color;
  },

  setLabelColor: function (feature) {
    feature.labelColor = feature.color || this.fontColor || this.color;
  },

  // truncate features - make the features start at 1px outside the canvas to ensure no lines are drawn at the borders incorrectly
  truncateForDrawing: function (feature) {
    var start = Math.min(Math.max(feature.x, -1), this.width + 1);
    var width = feature.x - start + feature.width;

    if (width + start > this.width) {
      width = this.width - start + 1;
    }

    feature.untruncated = { x: feature.x, width: feature.width };
    feature.x           = start;
    feature.width       = Math.max(width, 0);
  },

  formatLabel: function (label) {
    var power = Math.floor((label.toString().length - 1) / 3);
    var unit  = this.labelUnits[power];

    label /= Math.pow(10, power * 3);

    return Math.floor(label) + (unit === 'bp' ? '' : '.' + (label.toString().split('.')[1] || '').concat('00').substring(0, 2)) + ' ' + unit;
  },

  drawBackground  : $.noop,
  decorateFeature : $.noop // decoration for the features
});


Genoverse.Track.Controller.Static = Genoverse.Track.Controller.extend({
  addDomElements: function () {
    this.base();
    
    this.image = $('<img>').appendTo(this.imgContainer);
    
    this.container.toggleClass('gv-track-container gv-track-container-static').prepend(this.imgContainer);
    this.scrollContainer.add(this.messageContainer).remove();
  },
  
  reset: $.noop,
  
  setWidth: function (width) {
    this.base(width);
    this.image.width = width;
  },
  
  makeFirstImage: function () {
    this.base.apply(this, arguments);
    this.container.css('left', 0);
    this.imgContainer.show();
  },
  
  makeImage: function (params) {
    if (this.prop('disabled')) {
      return $.Deferred().resolve();
    }
    
    var features = this.view.positionFeatures(this.model.findFeatures(params.start, params.end), params);
    
    if (features) {
      var string = JSON.stringify(features);
      
      if (this.stringified !== string) {
        var height = this.prop('height');
        
        params.width         = this.width;
        params.featureHeight = height;
        
        this.render(features, this.image.data(params));
        this.imgContainer.children(':last').show();
        this.resize(height, undefined, false);

        this.stringified = string;
      }
    }
    
    return $.Deferred().resolve();
  }
});

Genoverse.Track.Model.Static = Genoverse.Track.Model.extend({
  url            : false,
  checkDataRange : function () { return true; }
});

Genoverse.Track.View.Static = Genoverse.Track.View.extend({
  featureMargin : { top: 0, right: 1, bottom: 0, left: 1 },
  
  positionFeature : $.noop,
  scaleFeatures   : function (features) { return features; },
  
  draw: function (features, featureContext, labelContext, scale) {
    for (var i = 0; i < features.length; i++) {
      this.drawFeature(features[i], featureContext, labelContext, scale);
    }
  }
});

Genoverse.Track.Static = Genoverse.Track.extend({
  controls   : 'off',
  resizable  : false,
  controller : Genoverse.Track.Controller.Static,
  model      : Genoverse.Track.Model.Static,
  view       : Genoverse.Track.View.Static
});


Genoverse.Track.Controller.Configurable = Genoverse.Track.Controller.extend({
  addDomElements: function () {
    var controls      = this.prop('controls');
    var defaultConfig = this.prop('defaultConfig');
    var savedConfig   = this.browser.savedConfig ? this.browser.savedConfig[this.prop('id')] || {} : {};
    var prop;

    for (var i in controls) {
      if (typeof controls[i] === 'string') {
        controls[i] = $(controls[i]);

        // TODO: other control types
        if (controls[i].is('select')) {
          prop = controls[i].data('control');

          controls[i].find('option[value=' + (savedConfig[prop] || defaultConfig[prop] || 'all') + ']').attr('selected', true).end().change(function () {
            $(this).data('track').setConfig($(this).data('control'), this.value);
          });
        }
      }
    }

    this.base.apply(this, arguments);
  }
});

Genoverse.Track.Configurable = Genoverse.Track.extend({
  controller     : Genoverse.Track.Controller.Configurable,
  config         : undefined, // {}
  configSettings : undefined, // {}
  defaultConfig  : undefined, // {}
  controls       : undefined, // []

  setDefaults: function () {
    this.base();

    this.config         = this.config         || {};
    this.configSettings = this.configSettings || {};
    this.defaultConfig  = this.defaultConfig  || {};
    this.controls       = this.controls       || [];

    this.setDefaultConfig();
  },

  setDefaultConfig: function () {
    for (var i in this.defaultConfig) {
      if (typeof this.config[i] === 'undefined') {
        this.config[i] = this.defaultConfig[i];
      }
    }
  },

  setLengthMap: function () {
    var args           = [ true, {} ];
    var featureFilters = [];
    var settings;

    for (var i in this.configSettings) {
      settings = this.getConfig(i);

      if (settings) {
        args.push(settings);

        if (settings.featureFilter) {
          featureFilters.push(settings.featureFilter);
        }
      }
    }

    var baseSetting = $.extend.apply($, args.concat({ featureFilters: featureFilters }));

    if (this[1]) {
      $.extend(this[1], baseSetting);
    } else {
      this[1] = baseSetting;
    }

    this.base();
  },

  setConfig: function (type, config) {
    if (this.configSettings[type][config]) {
      this.config[type] = config;

      var features = this.prop('featuresById');

      for (var i in features) {
        delete features[i].menuEl;
      }
    }

    this.reset();
    this.browser.saveConfig();
  },

  getConfig: function (type) {
    return this.configSettings[type][this.config[type]];
  },

  findFeatures: function () {
    var features = this.base.apply(this, arguments);
    var filters  = this.prop('featureFilters');

    for (var i in filters) {
      features = $.grep(features, $.proxy(filters[i], this));
    }

    return features;
  }
});

Genoverse.Track.Controller.Stranded = Genoverse.Track.Controller.extend({
  constructor: function (properties) {
    this.base(properties);
    
    if (typeof this._makeImage === 'function') {
      return;
    }
    
    var strand        = this.prop('strand');
    var featureStrand = this.prop('featureStrand');
    
    if (strand === -1) {
      this._makeImage = this.track.makeReverseImage ? $.proxy(this.track.makeReverseImage, this) : this.makeImage;
      this.makeImage  = $.noop;
    } else {
      strand = this.prop('strand', 1);
      
      this._makeImage   = this.makeImage;
      this.makeImage    = this.makeForwardImage;
      this.reverseTrack = this.browser.addTrack(this.track.constructor.extend({ strand: -1, url: false, forwardTrack: this }), this.browser.tracks.length).controller;
    }
    
    if (!featureStrand) {
      this.prop('featureStrand', strand);
    }
    
    if (!(this.model instanceof Genoverse.Track.Model.Stranded)) {
      this.track.lengthMap.push([ -9e99, { model: Genoverse.Track.Model.Stranded }]);
    }
  },
  
  makeForwardImage: function (params) {
    var reverseTrack = this.prop('reverseTrack');
    var rtn          = this._makeImage(params);
    
    if (rtn && typeof rtn.done === 'function') {
      rtn.done(function () {
        reverseTrack._makeImage(params, rtn);
      });
    } else {
      reverseTrack._makeImage(params, rtn);
    }
  },
  
  destroy: function () {
    if (this.removing) {
      return;
    }
    
    this.removing = true;
    
    this.browser.removeTrack((this.prop('forwardTrack') || this.prop('reverseTrack')).track);
    this.base();
  }
});

Genoverse.Track.Model.Stranded = Genoverse.Track.Model.extend({
  init: function (reset) {
    this.base(reset);
    
    if (!reset) {
      var otherTrack = this.prop('forwardTrack');
      
      if (otherTrack) {
        this.features     = otherTrack.prop('features');
        this.featuresById = otherTrack.prop('featuresById');
      }
    }
  },
  
  setURL: function (urlParams, update) {
    this.base($.extend(urlParams || this.urlParams, { strand: this.track.featureStrand }), update);
  },
  
  findFeatures: function () {
    var strand = this.track.featureStrand;
    return $.grep(this.base.apply(this, arguments), function (feature) { return feature.strand === strand; });
  }
});


Genoverse.Track.Controller.Sequence = Genoverse.Track.Controller.extend({
  click: function (e) {
    var x        = e.pageX - this.container.parent().offset().left + this.browser.scaledStart;
    var y        = e.pageY - $(e.target).offset().top;
    var features = this[e.target.className === 'gv-labels' ? 'labelPositions' : 'featurePositions'].search({ x: x, y: y, w: 1, h: 1 }).sort(function (a, b) { return a.sort - b.sort; });
    var seq;
    
    if (features.length) {
      x = Math.floor(x / this.scale);
      
      for (var i = 0; i < features.length; i++) {
        if (features[i].alt_allele) {
          return this.browser.makeMenu(features[i], e, this.track);
        }
        
        seq = features[i].sequence.charAt(x - features[i].start);
        
        if (seq) {
          return this.browser.makeMenu({
            title    : seq,
            Location : this.browser.chr + ':' + x
          }, e, this.track);
        }
      }
    }
  }
});


// Abstract Sequence model
// assumes that the data source responds with raw sequence text
// see Fasta model for more specific example
Genoverse.Track.Model.Sequence = Genoverse.Track.Model.extend({
  threshold : 100000,  
  chunkSize : 1000,
  buffer    : 0,
  dataType  : 'text',
  
  init: function () {
    this.base();
    this.chunks = {};
  },
  
  getData: function (start, end) {
    start = start - start % this.chunkSize + 1;
    end   = end + this.chunkSize - end % this.chunkSize;
    return this.base(start, end);
  },
  
  parseData: function (data, start, end) {
    data = data.replace(/\n/g, '');
    
    if (this.prop('lowerCase')) {
      data = data.toLowerCase();
    }
    
    for (var i = 0; i < data.length; i += this.chunkSize) {
      if (this.chunks[start + i]) {
        continue;
      }
      
      var feature = {
        id       : start + i,
        start    : start + i,
        end      : start + i + this.chunkSize,
        sequence : data.substr(i, this.chunkSize),
        sort     : start + i
      };
      
      this.chunks[feature.start] = feature;
      this.insertFeature(feature);
    }
  }
});


Genoverse.Track.Model.Sequence.Fasta = Genoverse.Track.Model.Sequence.extend({
  url  : 'http://genoverse.org/data/Homo_sapiens.GRCh37.72.dna.chromosome.1.fa', // Example url
  
  // Following settings could be left undefined and will be detected automatically via .getStartByte()
  startByte  : undefined, // Byte in the file where the sequence actually starts
  lineLength : undefined, // Length of the sequence line in the file
  
  // TODO: Check if URL provided
  
  getData: function (start, end) {
    var deferred = $.Deferred();
    
    $.when(this.getStartByte()).done(function () {
      start = start - start % this.chunkSize + 1;
      end   = end + this.chunkSize - end % this.chunkSize;
      
      var startByte = start - 1 + Math.floor((start - 1) / this.lineLength) + this.startByte;
      var endByte   = end   - 1 + Math.floor((end   - 1) / this.lineLength) + this.startByte;
      
      $.ajax({
        url       : this.parseURL(start, end),
        dataType  : this.dataType,
        context   : this,
        headers   : { 'Range' : 'bytes=' + startByte + '-' + endByte },
        xhrFields : this.xhrFields,
        success   : function (data) { this.receiveData(data, start, end); },
        error     : this.track.controller.showError
      }).done(function () { deferred.resolveWith(this); }).fail(function () { deferred.rejectWith(this); });
    }).fail(function () { deferred.rejectWith(this); });
    
    return deferred;
  },
  
  getStartByte: function () {
    if (this.startByteRequest) {
      return this.startByteRequest;
    }
    
    if (this.startByte === undefined || this.lineLength === undefined) {
      this.startByteRequest = $.ajax({
        url       : this.parseURL(),
        dataType  : 'text',
        context   : this,
        headers   : { 'Range': 'bytes=0-300' },
        xhrFields : this.xhrFields,        
        success   : function (data) {
          if (data.indexOf('>') === 0) {
            this.startByte = data.indexOf('\n') + 1;
          } else {
            this.startByte = 0;
          }
          
          this.lineLength = data.indexOf('\n', this.startByte) - this.startByte;
        }
      });
      
      return this.startByteRequest;
    }
  }
});


Genoverse.Track.Model.Sequence.Ensembl = Genoverse.Track.Model.Sequence.extend({
  url              : '//rest.ensembl.org/sequence/region/human/__CHR__:__START__-__END__?content-type=text/plain', // Example url
  dataRequestLimit : 10000000 // As per e! REST API restrictions
});


Genoverse.Track.Model.Sequence.DAS = Genoverse.Track.Model.Sequence.extend({

  name     : 'DAS Sequence',
  dataType : 'xml',
  url      : 'http://www.ensembl.org/das/Homo_sapiens.GRCh37.reference/sequence?segment=__CHR__:__START__,__END__', // Example url

  parseData: function (data) {
    var track = this;
    $(data).find('SEQUENCE').each(function (index, SEQUENCE) {

      var sequence = $(SEQUENCE).text();
      var start = parseInt(SEQUENCE.getAttribute('start'));

      // Check if the sequence is multi-line or not
      if (track.multiLine === undefined) {
        if (sequence.indexOf("\n") !== -1) {
          track.multiLine = true;
        } else {
          track.multiLine = false;
        }
      }

      if (track.multiLine) {
        sequence = sequence.replace(/\n/g, "");
        sequence = sequence.toUpperCase();
      }

      track.base.apply(track, [ sequence, start ]);
    });
  }
});  

Genoverse.Track.View.Sequence = Genoverse.Track.View.extend({
  featureMargin : { top: 0, right: 0, bottom: 0, left: 0 },
  colors        : { 'default': '#CCCCCC', A: '#00986A', T: '#0772A1', G: '#FF8E00', C: '#FFDD73' },
  labelColors   : { 'default': '#000000', A: '#FFFFFF', T: '#FFFFFF' },
  
  constructor: function () {
    this.base.apply(this, arguments);
    
    var lowerCase = this.prop('lowerCase');
    
    this.labelWidth   = {};
    this.widestLabel  = lowerCase ? 'g' : 'G';
    this.labelYOffset = (this.featureHeight + (lowerCase ? 0 : 1)) / 2;
    
    if (lowerCase) {
      for (var key in this.colors) {
        this.colors[key.toLowerCase()] = this.colors[key];
      }
      
      for (key in this.labelColors) {
        this.colors[key.toLowerCase()] = this.colors[key];
      }      
    }
  },

  draw: function (features, featureContext, labelContext, scale) {
    featureContext.textBaseline = 'middle';
    featureContext.textAlign    = 'left';
    
    if (!this.labelWidth[this.widestLabel]) {
      this.labelWidth[this.widestLabel] = Math.ceil(this.context.measureText(this.widestLabel).width) + 1;
    }
    
    var width = Math.max(scale, this.minScaledWidth);
    
    for (var i = 0; i < features.length; i++) {
      this.drawSequence(features[i], featureContext, scale, width);
    }
  },
  
  drawSequence: function (feature, context, scale, width) {
    var drawLabels = this.labelWidth[this.widestLabel] < width - 1;
    var start, bp;
    
    for (var i = 0; i < feature.sequence.length; i++) {
      start = feature.position[scale].X + i * scale;
      
      if (start < -scale || start > context.canvas.width) {
        continue;
      }
      
      bp = feature.sequence.charAt(i);
      
      context.fillStyle = this.colors[bp] || this.colors['default'];
      context.fillRect(start, feature.position[scale].Y, width, this.featureHeight);
      
      if (!this.labelWidth[bp]) {
        this.labelWidth[bp] = Math.ceil(context.measureText(bp).width) + 1;
      }
      
      if (drawLabels) {
        context.fillStyle = this.labelColors[bp] || this.labelColors['default'];
        context.fillText(bp, start + (width - this.labelWidth[bp]) / 2, feature.position[scale].Y + this.labelYOffset);
      }
    }
  }
});

Genoverse.Track.Model.SequenceVariation = Genoverse.Track.Model.extend({
  seqModel: Genoverse.Track.Model.Sequence.Ensembl,
  
  constructor: function () {
    this.base.apply(this, arguments);
    this.prop('models').seq = this.track.newMVC(this.seqModel);
  },
  
  getData: function (start, end) {
    var deferred = $.Deferred();
    var seqData  = this.prop('models').seq.checkDataRange(start, end);
    
    this.base(start, end).done(function () {
      if (seqData) {
        deferred.resolve();
      } else {
        this.prop('models').seq.getData(start, end).done(deferred.resolve);
      }
    });
    
    return deferred;
  },
  
  checkDataRange: function (start, end) {
    return this.base(start, end) && this.prop('models').seq.checkDataRange(start, end);
  },
  
  findFeatures: function (start, end) {
    return this.prop('models').seq.findFeatures(start, end).concat(this.base(start, end));
  }
});

Genoverse.Track.Model.SequenceVariation.VCF = Genoverse.Track.Model.SequenceVariation.extend({
  dataType: 'text',
  
  parseData: function (text) {
    var lines = text.split('\n');
    
    for (var i = 0; i < lines.length; i++) {
      if (!lines[i].length || lines[i].indexOf('#') === 0) {
        continue;
      }
      
      var fields = lines[i].split('\t');
      
      if (fields.length < 5) {
        continue;
      }
      
      if (fields[0] === this.browser.chr || fields[0] === 'chr' + this.browser.chr) {
        var id      = fields.slice(0, 3).join('|');
        var start   = parseInt(fields[1], 10);
        var alleles = fields[4].split(',');
        
        alleles.unshift(fields[3]);
        
        for (var j = 0; j < alleles.length; j++) {
          var end = start + alleles[j].length - 1;
          
          this.insertFeature({
            id              : id + '|' + alleles[j],
            sort            : j,
            start           : start,
            end             : end,
            width           : end - start,
            allele          : j === 0 ? 'REF' : 'ALT',
            sequence        : alleles[j],
            label           : alleles[j],
            labelColor      : '#FFFFFF',
            originalFeature : fields
          });        
        }
      }
    }
  }
});

// Abstract Gene model
// see sub-models for more specific examples
Genoverse.Track.Model.Gene = Genoverse.Track.Model.extend({

});

// Ensembl REST API Gene model
Genoverse.Track.Model.Gene.Ensembl = Genoverse.Track.Model.Gene.extend({
  url              : '//rest.ensembl.org/overlap/region/human/__CHR__:__START__-__END__?feature=gene;content-type=application/json',
  dataRequestLimit : 5000000, // As per e! REST API restrictions
  
  // The url above responds in json format, data is an array
  // We assume that parents always preceed children in data array, gene -> transcript -> exon
  // See rest.ensembl.org/documentation/info/feature_region for more details
  parseData: function (data) {
    for (var i = 0; i < data.length; i++) {
      var feature = data[i];
      
      if (feature.feature_type === 'gene' && !this.featuresById[feature.id]) {
        feature.label       = feature.external_name || feature.id;
        feature.transcripts = [];
        
        this.insertFeature(feature);
      }
    }
  }
});


Genoverse.Track.View.Gene = Genoverse.Track.View.extend({
  featureHeight : 5,
  labels        : true,
  repeatLabels  : true,
  bump          : true
});


Genoverse.Track.View.Gene.Ensembl = Genoverse.Track.View.Gene.extend({
  setFeatureColor: function (feature) {
    var color = '#000000';
    
    if (feature.logic_name.indexOf('ensembl_havana') === 0) {
      color = '#cd9b1d';
    } else if (feature.biotype.indexOf('RNA') > -1) {
      color = '#8b668b';
    } else switch (feature.biotype) {
      case 'protein_coding'       : color = '#A00000'; break;
      case 'processed_transcript' : color = '#0000FF'; break;
      case 'antisense'            : color = '#0000FF'; break;
      case 'sense_intronic'       : color = '#0000FF'; break;
      case 'pseudogene'           :
      case 'processed_pseudogene' : color = '#666666'; break;
      default                     : color = '#A00000'; break;
    }
    
    feature.color = feature.labelColor = color;
  }
});

// Abstract Transcript model
// see sub-models for more specific examples
Genoverse.Track.Model.Transcript = Genoverse.Track.Model.extend({

});

// Ensembl REST API Transcript model
Genoverse.Track.Model.Transcript.Ensembl = Genoverse.Track.Model.Transcript.extend({
  url              : '//rest.ensembl.org/overlap/region/human/__CHR__:__START__-__END__?feature=transcript;feature=exon;feature=cds;content-type=application/json',
  dataRequestLimit : 5000000, // As per e! REST API restrictions
  
  // The url above responds in json format, data is an array
  // See rest.ensembl.org/documentation/info/feature_region for more details
  parseData: function (data) {
    for (var i = 0; i < data.length; i++) {
      var feature = data[i];
      
      if (feature.feature_type === 'transcript' && !this.featuresById[feature.id]) {
        feature.label = feature.id;
        feature.exons = [];
        feature.cds   = [];
        
        this.insertFeature(feature);
      } else if (feature.feature_type === 'exon' && this.featuresById[feature.Parent]) {
        if (!this.featuresById[feature.Parent].exons[feature.id]) {
          this.featuresById[feature.Parent].exons.push(feature);
          this.featuresById[feature.Parent].exons[feature.id] = feature;
        }
      } else if (feature.feature_type === 'cds' && this.featuresById[feature.Parent]) {
        feature.id = feature.start + '-' + feature.end;
        
        if (!this.featuresById[feature.Parent].cds[feature.id]) {
          this.featuresById[feature.Parent].cds.push(feature);
          this.featuresById[feature.Parent].cds[feature.id] = feature;
        }
      }
    }
  }
});


// Basic GFF3 model for transcripts
// See http://www.broadinstitute.org/annotation/gebo/help/gff3.html 
Genoverse.Track.Model.Transcript.GFF3 = Genoverse.Track.Model.Transcript.extend({
  dataType : 'text',
  
  // Transcript structure map for column 3 (type) 
  typeMap : {
    exon  : 'exon',
    cds   : 'cds'
  },
  
  parseData: function (text) {
    var lines = text.split('\n');
    
    for (var i = 0; i < lines.length; i++) {
      if (!lines[i].length || lines[i].indexOf('#') === 0) {
        continue;
      }
      
      var fields = lines[i].split('\t');
      
      if (fields.length < 5) {
        continue;
      }
      
      if (fields[0] === this.browser.chr || fields[0].toLowerCase() === 'chr' + this.browser.chr || fields[0].match('[^1-9]' + this.browser.chr + '$')) {
        var feature = {};
        
        feature.id     = fields.slice(0, 5).join('|');
        feature.start  = parseInt(fields[3], 10);
        feature.end    = parseInt(fields[4], 10);
        feature.source = fields[1];
        feature.type   = fields[2];
        feature.score  = fields[5];
        feature.strand = fields[6] + '1';
        
        if (fields[8]) {
          var frame = fields[8].split(';');
          
          for (var j = 0; j < frame.length; j++) {
            var keyValue = frame[j].split('=');
            
            if (keyValue.length === 2) {
              feature[keyValue[0].toLowerCase()] = keyValue[1];
            }
          }
        }
        
        // sub-feature came earlier than parent feature
        if (feature.parent && !this.featuresById[feature.parent]) {
          this.featuresById[feature.parent] = {
            exons : [],
            cds   : []
          };
        }
        
        if (feature.parent && feature.type.toLowerCase() === this.typeMap.exon.toLowerCase()) {
          if (!$.grep(this.featuresById[feature.parent].exons, function (exon) { return exon.id === feature.id; }).length) {
            this.featuresById[feature.parent].exons.push(feature);
          }
        } else if (feature.parent && feature.type.toLowerCase() === this.typeMap.cds.toLowerCase()) {
          if (!$.grep(this.featuresById[feature.parent].cds, function (exon) { return exon.id === feature.id; }).length) {
            this.featuresById[feature.parent].cds.push(feature);
          }
        } else if (!feature.parent) {
          feature.label = feature.name || feature.id || '';
          $.extend(feature, { label: feature.name || feature.id || '', exons: [], cds: [] }, this.featuresById[feature.id] || {});
          
          delete this.featuresById[feature.id];
          
          this.insertFeature(feature);
        }
      }
    }
  }
});

Genoverse.Track.View.Transcript = Genoverse.Track.View.extend({
  featureHeight : 10,
  labels        : true,
  repeatLabels  : true,
  bump          : true,
  intronStyle   : 'bezierCurve',
  lineWidth     : 0.5,
  
  drawFeature: function(transcript, featureContext, labelContext, scale) {
    this.setFeatureColor(transcript);
    
    var exons = (transcript.exons || []).sort(function (a, b) { return a.start - b.start; });
    var exon, cds, i;
    
    if (!exons.length || exons[0].start > transcript.start) {
      exons.unshift({ start: transcript.start, end: transcript.start });
    }
    
    if (!exons.length || exons[exons.length - 1].end < transcript.end) {
      exons.push({ start: transcript.end, end: transcript.end  });
    }
    
    for (i = 0; i < exons.length; i++) {
      exon = exons[i];
      
      featureContext.strokeStyle = exon.color || transcript.color || this.color;
      featureContext.lineWidth   = 1;
      
      featureContext.strokeRect(
        transcript.x + (exon.start - transcript.start) * scale,
        transcript.y + 1.5,
        Math.max(1, (exon.end - exon.start) * scale), 
        transcript.height - 3
      );
      
      if (i) {
        this.drawIntron({
          x: transcript.x + (exons[i - 1].end - transcript.start) * scale,
          y: transcript.y + transcript.height / 2 + 0.5,
          width: (exon.start - exons[i - 1].end) * scale,
          height: transcript.strand > 0 ? -transcript.height / 2 : transcript.height / 2
        }, featureContext);
      }
    }

    if (transcript.cds && transcript.cds.length) {
      for (i = 0; i < transcript.cds.length; i++) {
        cds = transcript.cds[i];
        
        featureContext.fillStyle = cds.color || transcript.color || this.color;
        
        featureContext.fillRect(
          transcript.x + (cds.start - transcript.start) * scale,
          transcript.y, 
          Math.max(1, (cds.end - cds.start) * scale),
          transcript.height
        );
      }
    }
    
    if (this.labels && transcript.label) {
      this.drawLabel(transcript, labelContext, scale);
    }
  },  
  
  drawIntron: function (intron, context) {
    context.beginPath();
    context.lineWidth = this.lineWidth;
    
    switch (this.intronStyle) {
      case 'line':
        context.moveTo(intron.x, intron.y);
        context.lineTo(intron.x + intron.width, intron.y);
        break;
      case 'hat':
        context.moveTo(intron.x, intron.y);
        context.lineTo(intron.x + intron.width / 2, intron.y + intron.height);
        context.lineTo(intron.x + intron.width, intron.y);
        break;
      case 'bezierCurve':
        context.moveTo(intron.x, intron.y);
        context.bezierCurveTo(intron.x, intron.y + intron.height, intron.x + intron.width, intron.y + intron.height, intron.x + intron.width, intron.y);
        break;
      default: break;
    }
    
    context.stroke();
    context.closePath();
  }
});


Genoverse.Track.View.Transcript.Ensembl = Genoverse.Track.View.Transcript.extend({
  setFeatureColor: function (feature) {
    Genoverse.Track.View.Gene.Ensembl.prototype.setFeatureColor(feature);
  }
});

Genoverse.Track.Model.File = Genoverse.Track.Model.extend({
  dataType : 'text'
});

Genoverse.Track.Model.File.GFF = Genoverse.Track.Model.File.extend({
  parseData: function (text) {
    var lines = text.split('\n');
    
    for (var i = 0; i < lines.length; i++) {
      if (!lines[i].length || lines[i].indexOf('#') === 0) {
        continue;
      }
      
      var fields = lines[i].split('\t');

      if (fields.length < 5) {
        continue;
      }
      
      if (fields[0] === this.browser.chr || fields[0].toLowerCase() === 'chr' + this.browser.chr || fields[0].match('[^1-9]' + this.browser.chr + '$')) {
        this.insertFeature({
          id     : fields.slice(0, 5).join('|'),
          start  : parseInt(fields[3], 10),
          end    : parseInt(fields[4], 10),
          source : fields[1],
          type   : fields[2],
          score  : fields[5],
          strand : fields[6] + '1',
          label  : fields[1] + ' ' + fields[2] + ' ' + fields[3] + '-' + fields[4]
        });
      }
    }
  }
});

Genoverse.Track.Model.File.GTF = Genoverse.Track.Model.File.GFF;

Genoverse.Track.Model.File.BED = Genoverse.Track.Model.File.extend({
  parseData: function (text) {
    var lines = text.split('\n');
    
    for (var i = 0; i < lines.length; i++) {
      var fields = lines[i].split('\t');
      
      if (fields.length < 3) {
        continue;
      }
      
      if (fields[0] === this.browser.chr || fields[0].toLowerCase() === 'chr' + this.browser.chr || fields[0].match('[^1-9]' + this.browser.chr + '$')) {
        var score = parseFloat(fields[4], 10);
        var color = '#000000';

        if (fields[8]) {
          color = 'rgb(' + fields[8] + ')';
        } else {
          color = this.scoreColor(isNaN(score) ? 1000 : score);
        }

        this.insertFeature({
          start           : parseInt(fields[1], 10),
          end             : parseInt(fields[2], 10),
          id              : fields[1] + '-' + fields[3],
          label           : fields[3],
          color           : color,
          originalFeature : fields
        });
      }
    }
  },  

  // As per https://genome.ucsc.edu/FAQ/FAQformat.html#format1 specification
  scoreColor: function (score) {
    if (score <= 166) { return 'rgb(219,219,219)'; }
    if (score <= 277) { return 'rgb(186,186,186)'; }
    if (score <= 388) { return 'rgb(154,154,154)'; }
    if (score <= 499) { return 'rgb(122,122,122)'; }
    if (score <= 611) { return 'rgb(94,94,94)';    }
    if (score <= 722) { return 'rgb(67,67,67)';    }
    if (score <= 833) { return 'rgb(42,42,42)';    }
    if (score <= 944) { return 'rgb(21,21,21)';    }
    return '#000000';
  }
});  

Genoverse.Track.Chromosome = Genoverse.Track.extend({
  id            : 'chromosome',
  margin        : 1,
  featureMargin : { top: 0, right: 0, bottom: 0, left: 0 },
  labels        : 'overlay',
  url           : false,
  allData       : true,
  colors        : {
    acen    : '#708090',
    gneg    : '#FFFFFF',
    gpos    : '#000000',
    gpos100 : '#000000',
    gpos25  : '#D9D9D9',
    gpos33  : '#BFBFBF',
    gpos50  : '#999999',
    gpos66  : '#7F7F7F',
    gpos75  : '#666666',
    gvar    : '#E0E0E0',
    stalk   : '#708090'
  },
  labelColors: {
    gneg   : '#000000',
    gvar   : '#000000',
    gpos25 : '#000000',
    gpos33 : '#000000'
  },

  getData: function (start, end) {
    this.receiveData($.extend(true, [], this.browser.genome[this.browser.chr].bands), start, end);
    return $.Deferred().resolveWith(this);
  },

  insertFeature: function (feature) {
    feature.label      = feature.type === 'acen' || feature.type === 'stalk' ? false : feature.id;
    feature.menuTitle  = feature.id ? this.browser.chr + feature.id : this.browser.chr + ':' + feature.start + '-' + feature.end;
    feature.color      = this.prop('colors')[feature.type]      || '#FFFFFF';
    feature.labelColor = this.prop('labelColors')[feature.type] || '#FFFFFF';

    this.base(feature);
  },

  drawFeature: function (feature, featureContext, labelContext, scale) {
    featureContext.fillStyle   = feature.color;
    featureContext.strokeStyle = '#000000';

    if (feature.type === 'acen') {
      featureContext.beginPath();

      if (this.drawnAcen) {
        featureContext.moveTo(feature.x + feature.width, 0);
        featureContext.lineTo(feature.x + feature.width, feature.height + 0.5);
        featureContext.lineTo(feature.x, feature.height / 2);
      } else {
        featureContext.moveTo(feature.x, 0);
        featureContext.lineTo(feature.x + feature.width, feature.height / 2);
        featureContext.lineTo(feature.x, feature.height + 0.5);
        this.drawnAcen = true;
      }

      featureContext.closePath();
      featureContext.fill();
      featureContext.stroke();
    } else if (feature.type === 'stalk') {
      for (var i = 0; i < 2; i++) {
        featureContext.beginPath();

        featureContext.moveTo(feature.x, 0);
        featureContext.lineTo(feature.x + feature.width * 0.25, feature.height * 0.25 + 0.5);
        featureContext.lineTo(feature.x + feature.width * 0.75, feature.height * 0.25 + 0.5);
        featureContext.lineTo(feature.x + feature.width, 0);

        featureContext[i ? 'moveTo' : 'lineTo'](feature.x + feature.width, feature.height);
        featureContext.lineTo(feature.x + feature.width * 0.75, feature.height * 0.75 - 0.5);
        featureContext.lineTo(feature.x + feature.width * 0.25, feature.height * 0.75 - 0.5);
        featureContext.lineTo(feature.x, feature.height);

        featureContext[i ? 'stroke' : 'fill']();
      }
    } else {
      this.base(feature, featureContext, labelContext, scale);

      featureContext.beginPath();

      if (feature.start === 1 && feature.end === this.browser.chromosomeSize) {
        featureContext.clearRect(0, 0, 5, this.prop('height'));
        featureContext.clearRect(feature.width - 5, 0, 10, this.prop('height'));

        featureContext.fillStyle = feature.color;
        featureContext.moveTo(5, 0.5);
        featureContext.lineTo(feature.width - 5, 0.5);
        featureContext.bezierCurveTo(this.width + 1, 0.5, this.width + 1, feature.height + 0.5, feature.width - 5, feature.height + 0.5);
        featureContext.lineTo(5, feature.height + 0.5);
        featureContext.bezierCurveTo(-1, feature.height + 0.5, -1, 0.5, 5, 0.5);
        featureContext.fill();
      } else if (feature.start === 1) {
        featureContext.clearRect(0, 0, 5, this.prop('height'));

        featureContext.fillStyle = feature.color;
        featureContext.moveTo(5, 0.5);
        featureContext.lineTo(feature.x + feature.width, 0.5);
        featureContext.moveTo(5, feature.height + 0.5);
        featureContext.lineTo(feature.x + feature.width, feature.height + 0.5);
        featureContext.moveTo(5, 0.5);
        featureContext.bezierCurveTo(-1, 0.5, -1, feature.height + 0.5, 5, feature.height + 0.5);
        featureContext.fill();
      } else if (feature.end === this.browser.chromosomeSize) {
        featureContext.clearRect(feature.x + feature.width - 5, 0, 10, this.prop('height'));

        featureContext.fillStyle = feature.color;
        featureContext.moveTo(feature.x, 0.5);
        featureContext.lineTo(feature.x + feature.width - 5, 0.5);
        featureContext.moveTo(feature.x, feature.height + 0.5);
        featureContext.lineTo(feature.x + feature.width - 5, feature.height + 0.5);
        featureContext.moveTo(feature.x + feature.width - 5, 0.5);
        featureContext.bezierCurveTo(this.width + 1, 0.5, this.width + 1, feature.height + 0.5, feature.x + feature.width - 5, feature.height + 0.5);
        featureContext.fill();
      } else {
        featureContext.moveTo(feature.x, 0.5);
        featureContext.lineTo(feature.x + feature.width, 0.5);
        featureContext.moveTo(feature.x, feature.height + 0.5);
        featureContext.lineTo(feature.x + feature.width, feature.height + 0.5);
      }

      featureContext.stroke();
    }
  },

  drawLabel: function (feature) {
    if ((feature.start === 1 || feature.end === this.browser.chromosomeSize) && feature.labelWidth >= Math.floor(feature.width - 5)) {
      return;
    }

    this.base.apply(this, arguments);
  },

  populateMenu: function (feature) {
    return {
      title    : feature.menuTitle,
      Position : this.browser.chr + ':' + feature.start + '-' + feature.end
    };
  }
});

Genoverse.Track.File = Genoverse.Track.extend({
  setInterface: function () {
    this.base();
    this._interface.data = 'model';
  }
});


Genoverse.Track.File.GFF = Genoverse.Track.File.extend({
  name          : 'GFF',
  model         : Genoverse.Track.Model.File.GFF,
  bump          : true,
  height        : 100,
  featureHeight : 5
});

Genoverse.Track.File.GTF = Genoverse.Track.File.GFF;

Genoverse.Track.File.GFF3 = Genoverse.Track.File.extend({
  name  : 'GFF3',
  model : Genoverse.Track.Model.Transcript.GFF3,
  view  : Genoverse.Track.View.Transcript,
  bump  : true
});

Genoverse.Track.File.BED = Genoverse.Track.File.extend({
  name          : 'BED',
  model         : Genoverse.Track.Model.File.BED,
  bump          : true,
  featureHeight : 6,
  
  populateMenu: function (feature) {
    return {
      title       : '<a target=_blank href="https://genome.ucsc.edu/FAQ/FAQformat.html#format1">BED feature details</a>',
      chrom       : feature.originalFeature[0],
      chromStart  : feature.originalFeature[1],
      chromEnd    : feature.originalFeature[2],
      name        : feature.originalFeature[3],
      score       : feature.originalFeature[4],
      strand      : feature.originalFeature[5],
      thickStart  : feature.originalFeature[6],
      thickEnd    : feature.originalFeature[7],
      itemRgb     : feature.originalFeature[8],
      blockCount  : feature.originalFeature[9],
      blockSizes  : feature.originalFeature[10],
      blockStarts : feature.originalFeature[11]
    };
  }
});

Genoverse.Track.File.VCF = Genoverse.Track.File.extend({
  name       : 'VCF',
  model      : Genoverse.Track.Model.SequenceVariation.VCF,
  autoHeight : false,
  
  populateMenu: function (feature) {
    return {
      title  : '<a target="_blank" href="http://www.1000genomes.org/node/101">VCF feature details</a>',
      CHROM  : feature.originalFeature[0],
      POS    : feature.originalFeature[1],
      ID     : feature.originalFeature[2],
      REF    : feature.originalFeature[3],
      ALT    : feature.originalFeature[4],
      QUAL   : feature.originalFeature[5],
      FILTER : feature.originalFeature[6],
      INFO   : feature.originalFeature[7].split(';').join('<br />')
    };
  },
  
  1: { 
    view: Genoverse.Track.View.Sequence.extend({
      bump          : true,
      labels        : false,
      featureMargin : { top: 0, right: 0, bottom: 0, left: 0 },
      
      draw: function (features, featureContext, labelContext, scale) {
        this.base.apply(this, arguments);
        this.highlightRef(features, featureContext, scale);
      },

      highlightRef: function (features, context, scale) {
        context.strokeStyle = 'black';
        
        for (var i = 0; i < features.length; i++) {
          if (features[i].allele === 'REF') {
            context.strokeRect(features[i].position[scale].X, features[i].position[scale].Y, features[i].position[scale].width, features[i].position[scale].height);
          }
        }
      }
    })
  },
  
  1000: {
    view: Genoverse.Track.View.extend({
      bump   : false,
      labels : false,
      
      drawFeature: function (feature) {
        if (!feature.color) {
          var QUAL  = feature.originalFeature[5];
          var heat  = Math.min(255, Math.floor(255 * QUAL / this.maxQUAL)) - 127;
          var red   = heat > 0 ? 255 : 127 + heat;
          var green = heat < 0 ? 255 : 127 - heat;

          feature.color = 'rgb(' + red + ',' + green + ',0)';
        }
        
        this.base.apply(this, arguments);
      }
    })
  }
});


Genoverse.Track.Gene = Genoverse.Track.extend({
  id     : 'genes',
  name   : 'Genes',
  height : 200,

  populateMenu: function (feature) {
    var url  = 'http://grch37.ensembl.org/Homo_sapiens/' + (feature.feature_type === 'transcript' ? 'Transcript' : 'Gene') + '/Summary?' + (feature.feature_type === 'transcript' ? 't' : 'g') + '=' + feature.id;
    var menu = {
      title    : '<a target="_blank" href="' + url + '">' + (feature.external_name ? feature.external_name + ' (' + feature.id + ')' : feature.id) + '</a>',
      Location : this.browser.chr + ':' + feature.start + '-' + feature.end,
      Source   : feature.source,
      Biotype  : feature.biotype
    };

    if (feature.feature_type === 'transcript') {
      menu.Gene = '<a target="_blank" href="http://grch37.ensembl.org/Homo_sapiens/Gene/Summary?g=' + feature.Parent + '">' + feature.Parent + '</a>';
    }

    return menu;
  },

  // Different settings for different zoom level
  2000000: { // This one applies when > 2M base-pairs per screen
    labels : false
  },
  100000: { // more than 100K but less then 2M
    labels : true,
    model  : Genoverse.Track.Model.Gene.Ensembl,
    view   : Genoverse.Track.View.Gene.Ensembl
  },
  1: { // > 1 base-pair, but less then 100K
    labels : true,
    model  : Genoverse.Track.Model.Transcript.Ensembl,
    view   : Genoverse.Track.View.Transcript.Ensembl,
  }
});


Genoverse.Track.HighlightRegion = Genoverse.Track.extend({
  unsortable    : true,
  repeatLabels  : true,
  resizable     : false,
  border        : false,
  height        : 15,
  featureHeight : 2,
  order         : -1,
  orderReverse  : 9e99,
  controls      : 'off',
  color         : '#555',
  background    : '#DDD',
  labels        : 'separate',
  featureMargin : { top: 13, right: 0, bottom: 0, left: 0 },
  margin        : 0,

  controller: Genoverse.Track.Controller.Stranded.extend({
    setDefaults: function () {
      if (this.prop('strand') === -1) {
        this.prop('labels', false);
        this.prop('border', false);
        this.prop('height', 2);
        this.prop('featureMargin').top = 0;
      }

      this.base();
    },

    setName: function (name) {
      if (this.prop('strand') === -1) {
        this.base('');
        this.minLabelHeight = 0;
        this.label.height(0);
      } else {
        this.base(name);
      }
    },

    makeImage: function (params) {
      if (this.prop('strand') === 1) {
        params.background = 'gv-full-height';
      }

      var rtn = this.base(params);
      params.container.addClass(params.background);
      return rtn;
    },

    render: function (features, img) {
      this.base(features, img);
      img.siblings('.gv-labels').css('top', this.prop('featureHeight') - this.prop('featureMargin').top);
    },

    renderBackground: function (f, img) {
      this.base(f, img);
      img.height(this.browser.wrapper.outerHeight(true));
    },

    click: $.noop
  }),

  model: Genoverse.Track.Model.Stranded.extend({
    findFeatures: function () {
      return Genoverse.Track.Model.prototype.findFeatures.apply(this, arguments);
    }
  }),

  view: Genoverse.Track.View.extend({
    positionFeatures: function (originalFeatures, params) {
      if (this.prop('strand') === -1) {
        var scale    = params.scale;
        var features = $.extend(true, [], originalFeatures);
        var i        = features.length;

        while (i--) {
          delete features[i].position[scale].H;
          delete features[i].position[scale].Y;
          delete features[i].position[scale].bottom;
          delete features[i].position[scale].positioned;
        }

        return this.base(features, params);
      } else {
        return this.base(originalFeatures.reverse(), params);
      }
    },

    draw: function (features, featureContext, labelContext, scale) {
      if (this.prop('strand') === 1) {
        featureContext.fillStyle = '#FFF';
        featureContext.fillRect(0, 0, featureContext.canvas.width, featureContext.canvas.height);
      }

      this.base(features, featureContext, labelContext, scale);
    },

    drawBackground: function (features, context, params) {
      for (var i = 0; i < features.length; i++) {
        this.drawFeature($.extend({}, features[i], {
          x           : features[i].position[params.scale].X,
          y           : 0,
          width       : features[i].position[params.scale].width,
          height      : context.canvas.height,
          color       : this.prop('background'),
          label       : false,
          decorations : true
        }), context, false, params.scale);
      }
    },

    decorateFeature: function (feature, context, scale) {
      var x1 = feature.x + 0.5;
      var x2 = x1 + feature.width;

      context.strokeStyle = this.color;
      context.lineWidth   = 2;

      if (x1 >= 0 && x1 <= this.width) {
        context.moveTo(x1, feature.y);
        context.lineTo(x1, feature.y + feature.height);
      }

      if (x2 >= 0 && x2 <= this.width) {
        context.moveTo(x2, feature.y)
        context.lineTo(x2, feature.y + feature.height)
      }

      context.stroke();

      context.lineWidth = 1;
    }
  })
});

Genoverse.Track.Legend = Genoverse.Track.Static.extend({
  textColor     : '#000000',
  labels        : 'overlay',
  unsortable    : true,
  lockToTrack   : true,  // Always put the legend just below the last track that the legend is for
  featureHeight : 12,

  controller: Genoverse.Track.Controller.Static.extend({
    init: function () {
      this.base();

      this.container.addClass('gv-track-container-legend');

      if (!this.browser.legends) {
        this.browser.legends = {};
      }

      this.browser.legends[this.track.id] = this;
      this.track.setTracks();
    }
  }),

  setEvents: function () {
    this.browser.on({
      'afterInit afterAddTracks afterRemoveTracks': function () {
        for (var i in this.legends) {
          this.legends[i].track.setTracks();
        }
      },
      afterRemoveTracks: function (tracks) {
        for (var i in tracks) {
          if (tracks[i].controller.legend && tracks[i].controller.legend.track.tracks.length === 0) {
            tracks[i].controller.legend.track.remove();
          }
        }

        for (var i in this.legends) {
          this.legends[i].makeImage({});
        }
      },
      afterUpdateTrackOrder: function () {
        for (var i in this.legends) {
          this.legends[i].track.updateOrder();
        }
      }
    });

    this.browser.on({
      afterPositionFeatures: function (features, params) {
        var legend = this.prop('legend');

        if (legend) {
          setTimeout(function () { legend.makeImage(params); }, 1);
        }
      },
      afterResize: function (height, userResize) {
        var legend = this.prop('legend');

        if (legend && userResize === true) {
          legend.makeImage({});
        }
      },
      afterCheckHeight: function () {
        var legend = this.prop('legend');

        if (legend) {
          legend.makeImage({});
        }
      }
    }, this);
  },

  setTracks: function () {
    var legend = this;
    var type   = this.featureType;

    this.tracks = $.grep(this.browser.tracks, function (t) { if (t.type === type && t.controller) { t.controller.legend = legend.controller; return true; } });

    this.updateOrder();

    if (typeof this.controller === 'object') {
      this[this.tracks.length ? 'enable' : 'disable']();
    }
  },

  updateOrder: function () {
    if (!this.tracks.length || this.browser._constructing) {
      return;
    }

    if (this.lockToTrack) {
      this.order = this.tracks[this.tracks.length - 1].order + 0.1;
    }

    this.browser.sortTracks();
  },

  findFeatures: function () {
    var bounds   = { x: this.browser.scaledStart, y: 0, w: this.width };
    var features = {};

    $.each($.map(this.track.tracks, function (track) {
      var featurePositions = track.prop('featurePositions');
      bounds.h = track.prop('height');
      return featurePositions ? featurePositions.search(bounds).concat(track.prop('labelPositions').search(bounds)) : [];
    }), function () {
      if (this.legend) {
        features[this.legend] = this.color;
      }
    });

    // sort legend alphabetically
    return $.map(features, function (color, text) { return [[ text, color ]]; }).sort(function (a, b) {
      var x = a[0].toLowerCase();
      var y = b[0].toLowerCase();
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  },

  positionFeatures: function (f, params) {
    if (params.positioned) {
      return f;
    }

    var cols     = 2;
    var pad      = 5;
    var w        = 20;
    var x        = 0;
    var y        = 0;
    var xScale   = this.width / cols;
    var yScale   = this.fontHeight + pad;
    var features = [];
    var xPos, yPos, labelWidth;

    for (var i = 0; i < f.length; i++) {
      xPos       = (x * xScale) + pad;
      yPos       = (y * yScale) + pad;
      labelWidth = this.context.measureText(f[i][0]).width;

      features.push(
        { x: xPos,           y: yPos, width: w,              height: this.featureHeight, color: f[i][1] },
        { x: xPos + pad + w, y: yPos, width: labelWidth + 1, height: this.featureHeight, color: false, labelColor: this.textColor, labelWidth: labelWidth, label: f[i][0] }
      );

      if (++x === cols) {
        x = 0;
        y++;
      }
    }

    params.height     = this.prop('height', f.length ? ((y + (x ? 1 : 0)) * yScale) + pad : 0);
    params.width      = this.width;
    params.positioned = true;

    return this.base(features, params);
  },

  enable: function () {
    this.base();
    this.controller.makeImage({});
  },

  disable: function () {
    delete this.controller.stringified;
    this.base();
  },

  destroy: function () {
    delete this.browser.legends[this.id];
    this.base();
  }
});


Genoverse.Track.Scaleline = Genoverse.Track.Static.extend({
  strand     : 1,
  color      : '#000000',
  height     : 12,
  labels     : 'overlay',
  unsortable : true,
  
  resize: $.noop,
  
  makeFirstImage: function () {
    this.prop('scaleline', false);
    this.base.apply(this, arguments);
  },
  
  render: function (f, img) {
    this.base(f, img);
    this.prop('drawnScale', img.data('scale'));
  },
  
  positionFeatures: function (features, params) {
    var scaleline = this.prop('scaleline');
    
    if (params.scale === this.drawnScale) {
      return false;
    } else if (scaleline) {
      return scaleline;
    }
    
    var strand = this.prop('strand');
    var height = this.prop('height');
    var text   = this.formatLabel(this.browser.length);
    var text2  = strand === 1 ? 'Forward strand' : 'Reverse strand';
    var width1 = this.context.measureText(text).width;
    var width2 = this.context.measureText(text2).width;
    var bg     = this.prop('imgContainer').css('backgroundColor');
    var x1, x2;
    
    if (strand === 1) {
      x1 = 0;
      x2 = this.width - width2 - 40;
    } else {
      x1 = 25;
      x2 = 30;
    }
    
    scaleline = [
      { x: x1,                             y: height / 2, width: this.width - 25, height: 1, decorations: true },
      { x: (this.width - width1 - 10) / 2, y: 0,          width: width1 + 10,     height: height, color: bg, labelColor: this.color, labelWidth: width1, label: text  },
      { x: x2,                             y: 0,          width: width2 + 10,     height: height, color: bg, labelColor: this.color, labelWidth: width2, label: text2 }
    ];
    
    return this.base(this.prop('scaleline', scaleline), params);
  },
  
  decorateFeature: function (feature, context) {
    var strand = this.prop('strand');
    var height = this.prop('height');
    var x      = strand === 1 ? this.width - 25 : 25;
    
    context.strokeStyle = this.color;
    
    context.beginPath();
    context.moveTo(x,                 height * 0.25);
    context.lineTo(x + (strand * 20), height * 0.5);
    context.lineTo(x,                 height * 0.75);
    context.closePath();
    context.stroke();
    context.fill();
  }
});

Genoverse.Track.Scalebar = Genoverse.Track.extend({
  unsortable     : true,
  order          : 0,
  orderReverse   : 1e5,
  featureStrand  : 1,
  controls       : 'off',
  height         : 20,
  featureHeight  : 3,
  featureMargin  : { top: 0, right: 0, bottom: 2, left: 0 },
  margin         : 0,
  minPixPerMajor : 100, // Least number of pixels per written number
  color          : '#000000',
  autoHeight     : false,
  labels         : true,
  bump           : false,
  resizable      : false,
  click          : $.noop,
  colors         : {
    majorGuideLine : '#CCCCCC',
    minorGuideLine : '#E5E5E5'
  },

  setEvents: function () {
    var browser = this.browser;

    function resize() {
      $('.gv-bg.gv-full-height', browser.container).height(function () {
        return browser.wrapper.outerHeight(true) - $(this).parents('.gv-track-container').position().top;
      });
    }

    browser.on('afterAddTracks', resize);
    browser.on('afterResize', this, resize);
  },

  setScale: function () {
    var max       = this.prop('width') / this.prop('minPixPerMajor');
    var divisor   = 5;
    var majorUnit = -1;
    var fromDigit = ('' + this.browser.start).split(''); // Split into array of digits
    var toDigit   = ('' + this.browser.end).split('');
    var divisions, i;

    for (i = fromDigit.length; i < toDigit.length; i++) {
      fromDigit.unshift('0');
    }

    for (i = toDigit.length; i < fromDigit.length; i++) {
      toDigit.unshift('0');
    }

    // How many divisions would there be if we only kept i digits?
    for (i = 0; i < fromDigit.length; i++) {
      divisions = parseInt(toDigit.slice(0, fromDigit.length - i).join(''), 10) - parseInt(fromDigit.slice(0, fromDigit.length - i).join(''), 10);

      if (divisions && divisions <= max) {
        majorUnit = parseInt('1' + $.map(new Array(i), function () { return '0'; }).join(''), 10);
        break;
      }
    }

    if (majorUnit === -1) {
      majorUnit = this.browser.length === 1 ? 1 : parseInt('1' + $.map(new Array(fromDigit.length), function () { return '0'; }).join(''), 10);
      divisor   = 1;
    } else {
      // Improve things by trying simple multiples of 1<n zeroes>.
      // (eg if 100 will fit will 200, 400, 500).
      if (divisions * 5 <= max) {
        majorUnit /= 5;
        divisor    = 2;
      } else if (divisions * 4 <= max) {
        majorUnit /= 4;
        divisor    = 1;
      } else if (divisions * 2 <= max) {
        majorUnit /= 2;
      }
    }

    majorUnit = Math.max(majorUnit, 1);

    this.prop('minorUnit',    Math.max(majorUnit / divisor, 1));
    this.prop('majorUnit',    majorUnit);
    this.prop('features',     new RTree());
    this.prop('featuresById', {});
    this.prop('seen',         {});

    this.base();
  },

  setFeatures: function (start, end) {
    var minorUnit = this.prop('minorUnit');
    var majorUnit = this.prop('majorUnit');
    var seen      = this.prop('seen');

    start = Math.max(start - (start % minorUnit) - majorUnit, 0);

    var flip  = (start / minorUnit) % 2 ? 1 : -1;
    var feature, major, label;

    for (var x = start; x < end + minorUnit; x += minorUnit) {
      flip *= -1;

      if (seen[x]) {
        continue;
      }

      seen[x] = 1;

      feature = { id: x, strand: 1, sort: x };
      major   = x && x % majorUnit === 0;

      if (flip === 1) {
        feature.start = x;
        feature.end   = x + minorUnit - 1;
      }

      if (major) {
        label = this.track.view.formatLabel(x);

        if (label !== this.lastLabel) {
          feature.label = label;

          if (!feature.end) {
            feature.start = x;
            feature.end   = x - 1;
          }
        }

        this.lastLabel = label;
      }

      if (feature.end) {
        this.insertFeature(feature);
      }
    }
  },

  makeFirstImage: function (moveTo) {
    if (this.prop('strand') === -1) {
      moveTo = this.track.forwardTrack.scrollStart;
    }

    return this.base(moveTo);
  },

  makeImage: function (params) {
    params.background    = 'gv-guidelines gv-full-height';
    params.featureHeight = this.prop('height');

    this.track.setFeatures.apply(this.track.model, [ params.start, params.end ]);

    var rtn = this.base(params);

    params.container.addClass('gv-full-height');

    return rtn;
  },

  makeReverseImage: function (params) {
    this.imgContainers.push(params.container.clone().html(params.container.children('.gv-data').clone(true).css('background', this.browser.wrapper.css('backgroundColor')))[0]);
    this.scrollContainer.append(this.imgContainers);
  },

  renderBackground: function (f, bgImage) {
    this.base(f, bgImage);
    bgImage.height(this.browser.wrapper.outerHeight(true));
  },

  draw: function (features, featureContext, labelContext, scale) {
    var i         = features.length;
    var minorUnit = this.prop('minorUnit');
    var width     = Math.ceil(minorUnit * scale);
    var feature, start;

    featureContext.textBaseline = 'top';
    featureContext.fillStyle    = this.color;

    this.guideLines = { major: {} }; // FIXME: pass params to draw, rather than scale. set guideLines on params

    while (i--) {
      feature = features[i];
      start   = Math.round(feature.position[scale].X);

      this.drawFeature($.extend({}, feature, {
        x      : start,
        y      : 0,
        width  : Math.ceil(feature.position[scale].width),
        height : this.featureHeight
      }), featureContext, labelContext, scale);

      if (feature.label) {
        if (start > -1) {
          featureContext.fillRect(start, this.featureHeight, 1, this.featureHeight);
        }

        this.guideLines.major[feature.start] = true;
      }

      this.guideLines[feature.start] = start;
      this.guideLines[feature.start + minorUnit] = start + width - 1;
    }

    featureContext.fillRect(0, 0, featureContext.canvas.width, 1);
    featureContext.fillRect(0, this.featureHeight, featureContext.canvas.width, 1);
  },

  // Draw guidelines
  drawBackground: function (f, context) {
    for (var i in this.guideLines) {
      if (this.guideLines[i] >= 0 && this.guideLines[i] <= this.width) {
        context.fillStyle = this.track.colors[this.guideLines.major[i] ? 'majorGuideLine' : 'minorGuideLine' ];
        context.fillRect(this.guideLines[i], 0, 1, context.canvas.height);
      }
    }
  },

  formatLabel: function (label) {
    return this.prop('minorUnit') < 1000 ? label.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,') : this.base(label);
  }
});



var config = $('script:last').text();

if (config) {
  try {
    config = eval('('+ config +')');
    $(document).ready(function(){
      window.genoverse = new Genoverse(config);
    });
  } catch (e) {
    throw('Configuration ERROR:' + e);
  };
}
})();
