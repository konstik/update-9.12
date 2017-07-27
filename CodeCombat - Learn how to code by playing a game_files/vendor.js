(function(e,t){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=e.document?t(e,true):function(e){if(!e.document){throw new Error("jQuery requires a window with a document")}return t(e)}}else{t(e)}})(typeof window!=="undefined"?window:this,function(e,t){var n=[]
var i=n.slice
var r=n.concat
var s=n.push
var a=n.indexOf
var o={}
var l=o.toString
var u=o.hasOwnProperty
var f={}
var c=e.document,h="2.1.4",d=function(e,t){return new d.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,m=/^-ms-/,v=/-([\da-z])/gi,g=function(e,t){return t.toUpperCase()}
d.fn=d.prototype={jquery:h,constructor:d,selector:"",length:0,toArray:function(){return i.call(this)},get:function(e){return e!=null?e<0?this[e+this.length]:this[e]:i.call(this)},pushStack:function(e){var t=d.merge(this.constructor(),e)
t.prevObject=this
t.context=this.context
return t},each:function(e,t){return d.each(this,e,t)},map:function(e){return this.pushStack(d.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0)
return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:s,sort:n.sort,splice:n.splice}
d.extend=d.fn.extend=function(){var e,t,n,i,r,s,a=arguments[0]||{},o=1,l=arguments.length,u=false
if(typeof a==="boolean"){u=a
a=arguments[o]||{}
o++}if(typeof a!=="object"&&!d.isFunction(a)){a={}}if(o===l){a=this
o--}for(;o<l;o++){if((e=arguments[o])!=null){for(t in e){n=a[t]
i=e[t]
if(a===i){continue}if(u&&i&&(d.isPlainObject(i)||(r=d.isArray(i)))){if(r){r=false
s=n&&d.isArray(n)?n:[]}else{s=n&&d.isPlainObject(n)?n:{}}a[t]=d.extend(u,s,i)}else if(i!==undefined){a[t]=i}}}}return a}
d.extend({expando:"jQuery"+(h+Math.random()).replace(/\D/g,""),isReady:true,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return d.type(e)==="function"},isArray:Array.isArray,isWindow:function(e){return e!=null&&e===e.window},isNumeric:function(e){return!d.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){if(d.type(e)!=="object"||e.nodeType||d.isWindow(e)){return false}if(e.constructor&&!u.call(e.constructor.prototype,"isPrototypeOf")){return false}return true},isEmptyObject:function(e){var t
for(t in e){return false}return true},type:function(e){if(e==null){return e+""}return typeof e==="object"||typeof e==="function"?o[l.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval
e=d.trim(e)
if(e){if(e.indexOf("use strict")===1){t=c.createElement("script")
t.text=e
c.head.appendChild(t).parentNode.removeChild(t)}else{n(e)}}},camelCase:function(e){return e.replace(m,"ms-").replace(v,g)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var i,r=0,s=e.length,a=_(e)
if(n){if(a){for(;r<s;r++){i=t.apply(e[r],n)
if(i===false){break}}}else{for(r in e){i=t.apply(e[r],n)
if(i===false){break}}}}else{if(a){for(;r<s;r++){i=t.call(e[r],r,e[r])
if(i===false){break}}}else{for(r in e){i=t.call(e[r],r,e[r])
if(i===false){break}}}}return e},trim:function(e){return e==null?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[]
if(e!=null){if(_(Object(e))){d.merge(n,typeof e==="string"?[e]:e)}else{s.call(n,e)}}return n},inArray:function(e,t,n){return t==null?-1:a.call(t,e,n)},merge:function(e,t){var n=+t.length,i=0,r=e.length
for(;i<n;i++){e[r++]=t[i]}e.length=r
return e},grep:function(e,t,n){var i,r=[],s=0,a=e.length,o=!n
for(;s<a;s++){i=!t(e[s],s)
if(i!==o){r.push(e[s])}}return r},map:function(e,t,n){var i,s=0,a=e.length,o=_(e),l=[]
if(o){for(;s<a;s++){i=t(e[s],s,n)
if(i!=null){l.push(i)}}}else{for(s in e){i=t(e[s],s,n)
if(i!=null){l.push(i)}}}return r.apply([],l)},guid:1,proxy:function(e,t){var n,r,s
if(typeof t==="string"){n=e[t]
t=e
e=n}if(!d.isFunction(e)){return undefined}r=i.call(arguments,2)
s=function(){return e.apply(t||this,r.concat(i.call(arguments)))}
s.guid=e.guid=e.guid||d.guid++
return s},now:Date.now,support:f})
d.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){o["[object "+t+"]"]=t.toLowerCase()})
function _(e){var t="length"in e&&e.length,n=d.type(e)
if(n==="function"||d.isWindow(e)){return false}if(e.nodeType===1&&t){return true}return n==="array"||t===0||typeof t==="number"&&t>0&&t-1 in e}var y=function(e){var t,n,i,r,s,a,o,l,u,f,c,h,d,p,m,v,g,_,y,b="sizzle"+1*new Date,w=e.document,x=0,k=0,M=ae(),T=ae(),L=ae(),S=function(e,t){if(e===t){c=true}return 0},D=1<<31,C={}.hasOwnProperty,E=[],A=E.pop,Y=E.push,j=E.push,O=E.slice,I=function(e,t){var n=0,i=e.length
for(;n<i;n++){if(e[n]===t){return n}}return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",N="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",F=R.replace("w","w#"),H="\\["+N+"*("+R+")(?:"+N+"*([*^$|!~]?=)"+N+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+F+"))|)"+N+"*\\]",$=":("+R+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+H+")*)|"+".*"+")\\)|)",z=new RegExp(N+"+","g"),W=new RegExp("^"+N+"+|((?:^|[^\\\\])(?:\\\\.)*)"+N+"+$","g"),U=new RegExp("^"+N+"*,"+N+"*"),q=new RegExp("^"+N+"*([>+~]|"+N+")"+N+"*"),B=new RegExp("="+N+"*([^\\]'\"]*?)"+N+"*\\]","g"),V=new RegExp($),J=new RegExp("^"+F+"$"),X={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R.replace("w","w*")+")"),ATTR:new RegExp("^"+H),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+N+"*(even|odd|(([+-]|)(\\d*)n|)"+N+"*(?:([+-]|)"+N+"*(\\d+)|))"+N+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+N+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+N+"*((?:-\\d)?\\d*)"+N+"*\\)|)(?=[^-]|$)","i")},K=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,G=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=/'|\\/g,ne=new RegExp("\\\\([\\da-f]{1,6}"+N+"?|("+N+")|.)","ig"),ie=function(e,t,n){var i="0x"+t-65536
return i!==i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,i&1023|56320)},re=function(){h()}
try{j.apply(E=O.call(w.childNodes),w.childNodes)
E[w.childNodes.length].nodeType}catch(e){j={apply:E.length?function(e,t){Y.apply(e,O.call(t))}:function(e,t){var n=e.length,i=0
while(e[n++]=t[i++]){}e.length=n-1}}}function se(e,t,i,r){var s,o,u,f,c,p,g,_,x,k
if((t?t.ownerDocument||t:w)!==d){h(t)}t=t||d
i=i||[]
f=t.nodeType
if(typeof e!=="string"||!e||f!==1&&f!==9&&f!==11){return i}if(!r&&m){if(f!==11&&(s=Z.exec(e))){if(u=s[1]){if(f===9){o=t.getElementById(u)
if(o&&o.parentNode){if(o.id===u){i.push(o)
return i}}else{return i}}else{if(t.ownerDocument&&(o=t.ownerDocument.getElementById(u))&&y(t,o)&&o.id===u){i.push(o)
return i}}}else if(s[2]){j.apply(i,t.getElementsByTagName(e))
return i}else if((u=s[3])&&n.getElementsByClassName){j.apply(i,t.getElementsByClassName(u))
return i}}if(n.qsa&&(!v||!v.test(e))){_=g=b
x=t
k=f!==1&&e
if(f===1&&t.nodeName.toLowerCase()!=="object"){p=a(e)
if(g=t.getAttribute("id")){_=g.replace(te,"\\$&")}else{t.setAttribute("id",_)}_="[id='"+_+"'] "
c=p.length
while(c--){p[c]=_+ve(p[c])}x=ee.test(e)&&pe(t.parentNode)||t
k=p.join(",")}if(k){try{j.apply(i,x.querySelectorAll(k))
return i}catch(e){}finally{if(!g){t.removeAttribute("id")}}}}}return l(e.replace(W,"$1"),t,i,r)}function ae(){var e=[]
function t(n,r){if(e.push(n+" ")>i.cacheLength){delete t[e.shift()]}return t[n+" "]=r}return t}function oe(e){e[b]=true
return e}function le(e){var t=d.createElement("div")
try{return!!e(t)}catch(e){return false}finally{if(t.parentNode){t.parentNode.removeChild(t)}t=null}}function ue(e,t){var n=e.split("|"),r=e.length
while(r--){i.attrHandle[n[r]]=t}}function fe(e,t){var n=t&&e,i=n&&e.nodeType===1&&t.nodeType===1&&(~t.sourceIndex||D)-(~e.sourceIndex||D)
if(i){return i}if(n){while(n=n.nextSibling){if(n===t){return-1}}}return e?1:-1}function ce(e){return function(t){var n=t.nodeName.toLowerCase()
return n==="input"&&t.type===e}}function he(e){return function(t){var n=t.nodeName.toLowerCase()
return(n==="input"||n==="button")&&t.type===e}}function de(e){return oe(function(t){t=+t
return oe(function(n,i){var r,s=e([],n.length,t),a=s.length
while(a--){if(n[r=s[a]]){n[r]=!(i[r]=n[r])}}})})}function pe(e){return e&&typeof e.getElementsByTagName!=="undefined"&&e}n=se.support={}
s=se.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return t?t.nodeName!=="HTML":false}
h=se.setDocument=function(e){var t,r,a=e?e.ownerDocument||e:w
if(a===d||a.nodeType!==9||!a.documentElement){return d}d=a
p=a.documentElement
r=a.defaultView
if(r&&r!==r.top){if(r.addEventListener){r.addEventListener("unload",re,false)}else if(r.attachEvent){r.attachEvent("onunload",re)}}m=!s(a)
n.attributes=le(function(e){e.className="i"
return!e.getAttribute("className")})
n.getElementsByTagName=le(function(e){e.appendChild(a.createComment(""))
return!e.getElementsByTagName("*").length})
n.getElementsByClassName=G.test(a.getElementsByClassName)
n.getById=le(function(e){p.appendChild(e).id=b
return!a.getElementsByName||!a.getElementsByName(b).length})
if(n.getById){i.find["ID"]=function(e,t){if(typeof t.getElementById!=="undefined"&&m){var n=t.getElementById(e)
return n&&n.parentNode?[n]:[]}}
i.filter["ID"]=function(e){var t=e.replace(ne,ie)
return function(e){return e.getAttribute("id")===t}}}else{delete i.find["ID"]
i.filter["ID"]=function(e){var t=e.replace(ne,ie)
return function(e){var n=typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id")
return n&&n.value===t}}}i.find["TAG"]=n.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!=="undefined"){return t.getElementsByTagName(e)}else if(n.qsa){return t.querySelectorAll(e)}}:function(e,t){var n,i=[],r=0,s=t.getElementsByTagName(e)
if(e==="*"){while(n=s[r++]){if(n.nodeType===1){i.push(n)}}return i}return s}
i.find["CLASS"]=n.getElementsByClassName&&function(e,t){if(m){return t.getElementsByClassName(e)}}
g=[]
v=[]
if(n.qsa=G.test(a.querySelectorAll)){le(function(e){p.appendChild(e).innerHTML="<a id='"+b+"'></a>"+"<select id='"+b+"-\f]' msallowcapture=''>"+"<option selected=''></option></select>"
if(e.querySelectorAll("[msallowcapture^='']").length){v.push("[*^$]="+N+"*(?:''|\"\")")}if(!e.querySelectorAll("[selected]").length){v.push("\\["+N+"*(?:value|"+P+")")}if(!e.querySelectorAll("[id~="+b+"-]").length){v.push("~=")}if(!e.querySelectorAll(":checked").length){v.push(":checked")}if(!e.querySelectorAll("a#"+b+"+*").length){v.push(".#.+[+~]")}})
le(function(e){var t=a.createElement("input")
t.setAttribute("type","hidden")
e.appendChild(t).setAttribute("name","D")
if(e.querySelectorAll("[name=d]").length){v.push("name"+N+"*[*^$|!~]?=")}if(!e.querySelectorAll(":enabled").length){v.push(":enabled",":disabled")}e.querySelectorAll("*,:x")
v.push(",.*:")})}if(n.matchesSelector=G.test(_=p.matches||p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector)){le(function(e){n.disconnectedMatch=_.call(e,"div")
_.call(e,"[s!='']:x")
g.push("!=",$)})}v=v.length&&new RegExp(v.join("|"))
g=g.length&&new RegExp(g.join("|"))
t=G.test(p.compareDocumentPosition)
y=t||G.test(p.contains)?function(e,t){var n=e.nodeType===9?e.documentElement:e,i=t&&t.parentNode
return e===i||!!(i&&i.nodeType===1&&(n.contains?n.contains(i):e.compareDocumentPosition&&e.compareDocumentPosition(i)&16))}:function(e,t){if(t){while(t=t.parentNode){if(t===e){return true}}}return false}
S=t?function(e,t){if(e===t){c=true
return 0}var i=!e.compareDocumentPosition-!t.compareDocumentPosition
if(i){return i}i=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1
if(i&1||!n.sortDetached&&t.compareDocumentPosition(e)===i){if(e===a||e.ownerDocument===w&&y(w,e)){return-1}if(t===a||t.ownerDocument===w&&y(w,t)){return 1}return f?I(f,e)-I(f,t):0}return i&4?-1:1}:function(e,t){if(e===t){c=true
return 0}var n,i=0,r=e.parentNode,s=t.parentNode,o=[e],l=[t]
if(!r||!s){return e===a?-1:t===a?1:r?-1:s?1:f?I(f,e)-I(f,t):0}else if(r===s){return fe(e,t)}n=e
while(n=n.parentNode){o.unshift(n)}n=t
while(n=n.parentNode){l.unshift(n)}while(o[i]===l[i]){i++}return i?fe(o[i],l[i]):o[i]===w?-1:l[i]===w?1:0}
return a}
se.matches=function(e,t){return se(e,null,null,t)}
se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d){h(e)}t=t.replace(B,"='$1']")
if(n.matchesSelector&&m&&(!g||!g.test(t))&&(!v||!v.test(t))){try{var i=_.call(e,t)
if(i||n.disconnectedMatch||e.document&&e.document.nodeType!==11){return i}}catch(e){}}return se(t,d,null,[e]).length>0}
se.contains=function(e,t){if((e.ownerDocument||e)!==d){h(e)}return y(e,t)}
se.attr=function(e,t){if((e.ownerDocument||e)!==d){h(e)}var r=i.attrHandle[t.toLowerCase()],s=r&&C.call(i.attrHandle,t.toLowerCase())?r(e,t,!m):undefined
return s!==undefined?s:n.attributes||!m?e.getAttribute(t):(s=e.getAttributeNode(t))&&s.specified?s.value:null}
se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)}
se.uniqueSort=function(e){var t,i=[],r=0,s=0
c=!n.detectDuplicates
f=!n.sortStable&&e.slice(0)
e.sort(S)
if(c){while(t=e[s++]){if(t===e[s]){r=i.push(s)}}while(r--){e.splice(i[r],1)}}f=null
return e}
r=se.getText=function(e){var t,n="",i=0,s=e.nodeType
if(!s){while(t=e[i++]){n+=r(t)}}else if(s===1||s===9||s===11){if(typeof e.textContent==="string"){return e.textContent}else{for(e=e.firstChild;e;e=e.nextSibling){n+=r(e)}}}else if(s===3||s===4){return e.nodeValue}return n}
i=se.selectors={cacheLength:50,createPseudo:oe,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(ne,ie)
e[3]=(e[3]||e[4]||e[5]||"").replace(ne,ie)
if(e[2]==="~="){e[3]=" "+e[3]+" "}return e.slice(0,4)},CHILD:function(e){e[1]=e[1].toLowerCase()
if(e[1].slice(0,3)==="nth"){if(!e[3]){se.error(e[0])}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"))
e[5]=+(e[7]+e[8]||e[3]==="odd")}else if(e[3]){se.error(e[0])}return e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
if(X["CHILD"].test(e[0])){return null}if(e[3]){e[2]=e[4]||e[5]||""}else if(n&&V.test(n)&&(t=a(n,true))&&(t=n.indexOf(")",n.length-t)-n.length)){e[0]=e[0].slice(0,t)
e[2]=n.slice(0,t)}return e.slice(0,3)}},filter:{TAG:function(e){var t=e.replace(ne,ie).toLowerCase()
return e==="*"?function(){return true}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=M[e+" "]
return t||(t=new RegExp("(^|"+N+")"+e+"("+N+"|$)"))&&M(e,function(e){return t.test(typeof e.className==="string"&&e.className||typeof e.getAttribute!=="undefined"&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(i){var r=se.attr(i,e)
if(r==null){return t==="!="}if(!t){return true}r+=""
return t==="="?r===n:t==="!="?r!==n:t==="^="?n&&r.indexOf(n)===0:t==="*="?n&&r.indexOf(n)>-1:t==="$="?n&&r.slice(-n.length)===n:t==="~="?(" "+r.replace(z," ")+" ").indexOf(n)>-1:t==="|="?r===n||r.slice(0,n.length+1)===n+"-":false}},CHILD:function(e,t,n,i,r){var s=e.slice(0,3)!=="nth",a=e.slice(-4)!=="last",o=t==="of-type"
return i===1&&r===0?function(e){return!!e.parentNode}:function(t,n,l){var u,f,c,h,d,p,m=s!==a?"nextSibling":"previousSibling",v=t.parentNode,g=o&&t.nodeName.toLowerCase(),_=!l&&!o
if(v){if(s){while(m){c=t
while(c=c[m]){if(o?c.nodeName.toLowerCase()===g:c.nodeType===1){return false}}p=m=e==="only"&&!p&&"nextSibling"}return true}p=[a?v.firstChild:v.lastChild]
if(a&&_){f=v[b]||(v[b]={})
u=f[e]||[]
d=u[0]===x&&u[1]
h=u[0]===x&&u[2]
c=d&&v.childNodes[d]
while(c=++d&&c&&c[m]||(h=d=0)||p.pop()){if(c.nodeType===1&&++h&&c===t){f[e]=[x,d,h]
break}}}else if(_&&(u=(t[b]||(t[b]={}))[e])&&u[0]===x){h=u[1]}else{while(c=++d&&c&&c[m]||(h=d=0)||p.pop()){if((o?c.nodeName.toLowerCase()===g:c.nodeType===1)&&++h){if(_){(c[b]||(c[b]={}))[e]=[x,h]}if(c===t){break}}}}h-=r
return h===i||h%i===0&&h/i>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e)
if(r[b]){return r(t)}if(r.length>1){n=[e,e,"",t]
return i.setFilters.hasOwnProperty(e.toLowerCase())?oe(function(e,n){var i,s=r(e,t),a=s.length
while(a--){i=I(e,s[a])
e[i]=!(n[i]=s[a])}}):function(e){return r(e,0,n)}}return r}},pseudos:{not:oe(function(e){var t=[],n=[],i=o(e.replace(W,"$1"))
return i[b]?oe(function(e,t,n,r){var s,a=i(e,null,r,[]),o=e.length
while(o--){if(s=a[o]){e[o]=!(t[o]=s)}}}):function(e,r,s){t[0]=e
i(t,null,s,n)
t[0]=null
return!n.pop()}}),has:oe(function(e){return function(t){return se(e,t).length>0}}),contains:oe(function(e){e=e.replace(ne,ie)
return function(t){return(t.textContent||t.innerText||r(t)).indexOf(e)>-1}}),lang:oe(function(e){if(!J.test(e||"")){se.error("unsupported lang: "+e)}e=e.replace(ne,ie).toLowerCase()
return function(t){var n
do{if(n=m?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang")){n=n.toLowerCase()
return n===e||n.indexOf(e+"-")===0}}while((t=t.parentNode)&&t.nodeType===1)
return false}}),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===false},disabled:function(e){return e.disabled===true},checked:function(e){var t=e.nodeName.toLowerCase()
return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling){if(e.nodeType<6){return false}}return true},parent:function(e){return!i.pseudos["empty"](e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return K.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return t==="input"&&e.type==="button"||t==="button"},text:function(e){var t
return e.nodeName.toLowerCase()==="input"&&e.type==="text"&&((t=e.getAttribute("type"))==null||t.toLowerCase()==="text")},first:de(function(){return[0]}),last:de(function(e,t){return[t-1]}),eq:de(function(e,t,n){return[n<0?n+t:n]}),even:de(function(e,t){var n=0
for(;n<t;n+=2){e.push(n)}return e}),odd:de(function(e,t){var n=1
for(;n<t;n+=2){e.push(n)}return e}),lt:de(function(e,t,n){var i=n<0?n+t:n
for(;--i>=0;){e.push(i)}return e}),gt:de(function(e,t,n){var i=n<0?n+t:n
for(;++i<t;){e.push(i)}return e})}}
i.pseudos["nth"]=i.pseudos["eq"]
for(t in{radio:true,checkbox:true,file:true,password:true,image:true}){i.pseudos[t]=ce(t)}for(t in{submit:true,reset:true}){i.pseudos[t]=he(t)}function me(){}me.prototype=i.filters=i.pseudos
i.setFilters=new me
a=se.tokenize=function(e,t){var n,r,s,a,o,l,u,f=T[e+" "]
if(f){return t?0:f.slice(0)}o=e
l=[]
u=i.preFilter
while(o){if(!n||(r=U.exec(o))){if(r){o=o.slice(r[0].length)||o}l.push(s=[])}n=false
if(r=q.exec(o)){n=r.shift()
s.push({value:n,type:r[0].replace(W," ")})
o=o.slice(n.length)}for(a in i.filter){if((r=X[a].exec(o))&&(!u[a]||(r=u[a](r)))){n=r.shift()
s.push({value:n,type:a,matches:r})
o=o.slice(n.length)}}if(!n){break}}return t?o.length:o?se.error(e):T(e,l).slice(0)}
function ve(e){var t=0,n=e.length,i=""
for(;t<n;t++){i+=e[t].value}return i}function ge(e,t,n){var i=t.dir,r=n&&i==="parentNode",s=k++
return t.first?function(t,n,s){while(t=t[i]){if(t.nodeType===1||r){return e(t,n,s)}}}:function(t,n,a){var o,l,u=[x,s]
if(a){while(t=t[i]){if(t.nodeType===1||r){if(e(t,n,a)){return true}}}}else{while(t=t[i]){if(t.nodeType===1||r){l=t[b]||(t[b]={})
if((o=l[i])&&o[0]===x&&o[1]===s){return u[2]=o[2]}else{l[i]=u
if(u[2]=e(t,n,a)){return true}}}}}}}function _e(e){return e.length>1?function(t,n,i){var r=e.length
while(r--){if(!e[r](t,n,i)){return false}}return true}:e[0]}function ye(e,t,n){var i=0,r=t.length
for(;i<r;i++){se(e,t[i],n)}return n}function be(e,t,n,i,r){var s,a=[],o=0,l=e.length,u=t!=null
for(;o<l;o++){if(s=e[o]){if(!n||n(s,i,r)){a.push(s)
if(u){t.push(o)}}}}return a}function we(e,t,n,i,r,s){if(i&&!i[b]){i=we(i)}if(r&&!r[b]){r=we(r,s)}return oe(function(s,a,o,l){var u,f,c,h=[],d=[],p=a.length,m=s||ye(t||"*",o.nodeType?[o]:o,[]),v=e&&(s||!t)?be(m,h,e,o,l):m,g=n?r||(s?e:p||i)?[]:a:v
if(n){n(v,g,o,l)}if(i){u=be(g,d)
i(u,[],o,l)
f=u.length
while(f--){if(c=u[f]){g[d[f]]=!(v[d[f]]=c)}}}if(s){if(r||e){if(r){u=[]
f=g.length
while(f--){if(c=g[f]){u.push(v[f]=c)}}r(null,g=[],u,l)}f=g.length
while(f--){if((c=g[f])&&(u=r?I(s,c):h[f])>-1){s[u]=!(a[u]=c)}}}}else{g=be(g===a?g.splice(p,g.length):g)
if(r){r(null,a,g,l)}else{j.apply(a,g)}}})}function xe(e){var t,n,r,s=e.length,a=i.relative[e[0].type],o=a||i.relative[" "],l=a?1:0,f=ge(function(e){return e===t},o,true),c=ge(function(e){return I(t,e)>-1},o,true),h=[function(e,n,i){var r=!a&&(i||n!==u)||((t=n).nodeType?f(e,n,i):c(e,n,i))
t=null
return r}]
for(;l<s;l++){if(n=i.relative[e[l].type]){h=[ge(_e(h),n)]}else{n=i.filter[e[l].type].apply(null,e[l].matches)
if(n[b]){r=++l
for(;r<s;r++){if(i.relative[e[r].type]){break}}return we(l>1&&_e(h),l>1&&ve(e.slice(0,l-1).concat({value:e[l-2].type===" "?"*":""})).replace(W,"$1"),n,l<r&&xe(e.slice(l,r)),r<s&&xe(e=e.slice(r)),r<s&&ve(e))}h.push(n)}}return _e(h)}function ke(e,t){var n=t.length>0,r=e.length>0,s=function(s,a,o,l,f){var c,h,p,m=0,v="0",g=s&&[],_=[],y=u,b=s||r&&i.find["TAG"]("*",f),w=x+=y==null?1:Math.random()||.1,k=b.length
if(f){u=a!==d&&a}for(;v!==k&&(c=b[v])!=null;v++){if(r&&c){h=0
while(p=e[h++]){if(p(c,a,o)){l.push(c)
break}}if(f){x=w}}if(n){if(c=!p&&c){m--}if(s){g.push(c)}}}m+=v
if(n&&v!==m){h=0
while(p=t[h++]){p(g,_,a,o)}if(s){if(m>0){while(v--){if(!(g[v]||_[v])){_[v]=A.call(l)}}}_=be(_)}j.apply(l,_)
if(f&&!s&&_.length>0&&m+t.length>1){se.uniqueSort(l)}}if(f){x=w
u=y}return g}
return n?oe(s):s}o=se.compile=function(e,t){var n,i=[],r=[],s=L[e+" "]
if(!s){if(!t){t=a(e)}n=t.length
while(n--){s=xe(t[n])
if(s[b]){i.push(s)}else{r.push(s)}}s=L(e,ke(r,i))
s.selector=e}return s}
l=se.select=function(e,t,r,s){var l,u,f,c,h,d=typeof e==="function"&&e,p=!s&&a(e=d.selector||e)
r=r||[]
if(p.length===1){u=p[0]=p[0].slice(0)
if(u.length>2&&(f=u[0]).type==="ID"&&n.getById&&t.nodeType===9&&m&&i.relative[u[1].type]){t=(i.find["ID"](f.matches[0].replace(ne,ie),t)||[])[0]
if(!t){return r}else if(d){t=t.parentNode}e=e.slice(u.shift().value.length)}l=X["needsContext"].test(e)?0:u.length
while(l--){f=u[l]
if(i.relative[c=f.type]){break}if(h=i.find[c]){if(s=h(f.matches[0].replace(ne,ie),ee.test(u[0].type)&&pe(t.parentNode)||t)){u.splice(l,1)
e=s.length&&ve(u)
if(!e){j.apply(r,s)
return r}break}}}}(d||o(e,p))(s,t,!m,r,ee.test(e)&&pe(t.parentNode)||t)
return r}
n.sortStable=b.split("").sort(S).join("")===b
n.detectDuplicates=!!c
h()
n.sortDetached=le(function(e){return e.compareDocumentPosition(d.createElement("div"))&1})
if(!le(function(e){e.innerHTML="<a href='#'></a>"
return e.firstChild.getAttribute("href")==="#"})){ue("type|href|height|width",function(e,t,n){if(!n){return e.getAttribute(t,t.toLowerCase()==="type"?1:2)}})}if(!n.attributes||!le(function(e){e.innerHTML="<input/>"
e.firstChild.setAttribute("value","")
return e.firstChild.getAttribute("value")===""})){ue("value",function(e,t,n){if(!n&&e.nodeName.toLowerCase()==="input"){return e.defaultValue}})}if(!le(function(e){return e.getAttribute("disabled")==null})){ue(P,function(e,t,n){var i
if(!n){return e[t]===true?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}})}return se}(e)
d.find=y
d.expr=y.selectors
d.expr[":"]=d.expr.pseudos
d.unique=y.uniqueSort
d.text=y.getText
d.isXMLDoc=y.isXML
d.contains=y.contains
var b=d.expr.match.needsContext
var w=/^<(\w+)\s*\/?>(?:<\/\1>|)$/
var x=/^.[^:#\[\.,]*$/
function k(e,t,n){if(d.isFunction(t)){return d.grep(e,function(e,i){return!!t.call(e,i,e)!==n})}if(t.nodeType){return d.grep(e,function(e){return e===t!==n})}if(typeof t==="string"){if(x.test(t)){return d.filter(t,e,n)}t=d.filter(t,e)}return d.grep(e,function(e){return a.call(t,e)>=0!==n})}d.filter=function(e,t,n){var i=t[0]
if(n){e=":not("+e+")"}return t.length===1&&i.nodeType===1?d.find.matchesSelector(i,e)?[i]:[]:d.find.matches(e,d.grep(t,function(e){return e.nodeType===1}))}
d.fn.extend({find:function(e){var t,n=this.length,i=[],r=this
if(typeof e!=="string"){return this.pushStack(d(e).filter(function(){for(t=0;t<n;t++){if(d.contains(r[t],this)){return true}}}))}for(t=0;t<n;t++){d.find(e,r[t],i)}i=this.pushStack(n>1?d.unique(i):i)
i.selector=this.selector?this.selector+" "+e:e
return i},filter:function(e){return this.pushStack(k(this,e||[],false))},not:function(e){return this.pushStack(k(this,e||[],true))},is:function(e){return!!k(this,typeof e==="string"&&b.test(e)?d(e):e||[],false).length}})
var M,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,L=d.fn.init=function(e,t){var n,i
if(!e){return this}if(typeof e==="string"){if(e[0]==="<"&&e[e.length-1]===">"&&e.length>=3){n=[null,e,null]}else{n=T.exec(e)}if(n&&(n[1]||!t)){if(n[1]){t=t instanceof d?t[0]:t
d.merge(this,d.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:c,true))
if(w.test(n[1])&&d.isPlainObject(t)){for(n in t){if(d.isFunction(this[n])){this[n](t[n])}else{this.attr(n,t[n])}}}return this}else{i=c.getElementById(n[2])
if(i&&i.parentNode){this.length=1
this[0]=i}this.context=c
this.selector=e
return this}}else if(!t||t.jquery){return(t||M).find(e)}else{return this.constructor(t).find(e)}}else if(e.nodeType){this.context=this[0]=e
this.length=1
return this}else if(d.isFunction(e)){return typeof M.ready!=="undefined"?M.ready(e):e(d)}if(e.selector!==undefined){this.selector=e.selector
this.context=e.context}return d.makeArray(e,this)}
L.prototype=d.fn
M=d(c)
var S=/^(?:parents|prev(?:Until|All))/,D={children:true,contents:true,next:true,prev:true}
d.extend({dir:function(e,t,n){var i=[],r=n!==undefined
while((e=e[t])&&e.nodeType!==9){if(e.nodeType===1){if(r&&d(e).is(n)){break}i.push(e)}}return i},sibling:function(e,t){var n=[]
for(;e;e=e.nextSibling){if(e.nodeType===1&&e!==t){n.push(e)}}return n}})
d.fn.extend({has:function(e){var t=d(e,this),n=t.length
return this.filter(function(){var e=0
for(;e<n;e++){if(d.contains(this,t[e])){return true}}})},closest:function(e,t){var n,i=0,r=this.length,s=[],a=b.test(e)||typeof e!=="string"?d(e,t||this.context):0
for(;i<r;i++){for(n=this[i];n&&n!==t;n=n.parentNode){if(n.nodeType<11&&(a?a.index(n)>-1:n.nodeType===1&&d.find.matchesSelector(n,e))){s.push(n)
break}}}return this.pushStack(s.length>1?d.unique(s):s)},index:function(e){if(!e){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1}if(typeof e==="string"){return a.call(d(e),this[0])}return a.call(this,e.jquery?e[0]:e)},add:function(e,t){return this.pushStack(d.unique(d.merge(this.get(),d(e,t))))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}})
function C(e,t){while((e=e[t])&&e.nodeType!==1){}return e}d.each({parent:function(e){var t=e.parentNode
return t&&t.nodeType!==11?t:null},parents:function(e){return d.dir(e,"parentNode")},parentsUntil:function(e,t,n){return d.dir(e,"parentNode",n)},next:function(e){return C(e,"nextSibling")},prev:function(e){return C(e,"previousSibling")},nextAll:function(e){return d.dir(e,"nextSibling")},prevAll:function(e){return d.dir(e,"previousSibling")},nextUntil:function(e,t,n){return d.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return d.dir(e,"previousSibling",n)},siblings:function(e){return d.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return d.sibling(e.firstChild)},contents:function(e){return e.contentDocument||d.merge([],e.childNodes)}},function(e,t){d.fn[e]=function(n,i){var r=d.map(this,t,n)
if(e.slice(-5)!=="Until"){i=n}if(i&&typeof i==="string"){r=d.filter(i,r)}if(this.length>1){if(!D[e]){d.unique(r)}if(S.test(e)){r.reverse()}}return this.pushStack(r)}})
var E=/\S+/g
var A={}
function Y(e){var t=A[e]={}
d.each(e.match(E)||[],function(e,n){t[n]=true})
return t}d.Callbacks=function(e){e=typeof e==="string"?A[e]||Y(e):d.extend({},e)
var t,n,i,r,s,a,o=[],l=!e.once&&[],u=function(c){t=e.memory&&c
n=true
a=r||0
r=0
s=o.length
i=true
for(;o&&a<s;a++){if(o[a].apply(c[0],c[1])===false&&e.stopOnFalse){t=false
break}}i=false
if(o){if(l){if(l.length){u(l.shift())}}else if(t){o=[]}else{f.disable()}}},f={add:function(){if(o){var n=o.length;(function t(n){d.each(n,function(n,i){var r=d.type(i)
if(r==="function"){if(!e.unique||!f.has(i)){o.push(i)}}else if(i&&i.length&&r!=="string"){t(i)}})})(arguments)
if(i){s=o.length}else if(t){r=n
u(t)}}return this},remove:function(){if(o){d.each(arguments,function(e,t){var n
while((n=d.inArray(t,o,n))>-1){o.splice(n,1)
if(i){if(n<=s){s--}if(n<=a){a--}}}})}return this},has:function(e){return e?d.inArray(e,o)>-1:!!(o&&o.length)},empty:function(){o=[]
s=0
return this},disable:function(){o=l=t=undefined
return this},disabled:function(){return!o},lock:function(){l=undefined
if(!t){f.disable()}return this},locked:function(){return!l},fireWith:function(e,t){if(o&&(!n||l)){t=t||[]
t=[e,t.slice?t.slice():t]
if(i){l.push(t)}else{u(t)}}return this},fire:function(){f.fireWith(this,arguments)
return this},fired:function(){return!!n}}
return f}
d.extend({Deferred:function(e){var t=[["resolve","done",d.Callbacks("once memory"),"resolved"],["reject","fail",d.Callbacks("once memory"),"rejected"],["notify","progress",d.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){r.done(arguments).fail(arguments)
return this},then:function(){var e=arguments
return d.Deferred(function(n){d.each(t,function(t,s){var a=d.isFunction(e[t])&&e[t]
r[s[1]](function(){var e=a&&a.apply(this,arguments)
if(e&&d.isFunction(e.promise)){e.promise().done(n.resolve).fail(n.reject).progress(n.notify)}else{n[s[0]+"With"](this===i?n.promise():this,a?[e]:arguments)}})})
e=null}).promise()},promise:function(e){return e!=null?d.extend(e,i):i}},r={}
i.pipe=i.then
d.each(t,function(e,s){var a=s[2],o=s[3]
i[s[1]]=a.add
if(o){a.add(function(){n=o},t[e^1][2].disable,t[2][2].lock)}r[s[0]]=function(){r[s[0]+"With"](this===r?i:this,arguments)
return this}
r[s[0]+"With"]=a.fireWith})
i.promise(r)
if(e){e.call(r,r)}return r},when:function(e){var t=0,n=i.call(arguments),r=n.length,s=r!==1||e&&d.isFunction(e.promise)?r:0,a=s===1?e:d.Deferred(),o=function(e,t,n){return function(r){t[e]=this
n[e]=arguments.length>1?i.call(arguments):r
if(n===l){a.notifyWith(t,n)}else if(!--s){a.resolveWith(t,n)}}},l,u,f
if(r>1){l=new Array(r)
u=new Array(r)
f=new Array(r)
for(;t<r;t++){if(n[t]&&d.isFunction(n[t].promise)){n[t].promise().done(o(t,f,n)).fail(a.reject).progress(o(t,u,l))}else{--s}}}if(!s){a.resolveWith(f,n)}return a.promise()}})
var j
d.fn.ready=function(e){d.ready.promise().done(e)
return this}
d.extend({isReady:false,readyWait:1,holdReady:function(e){if(e){d.readyWait++}else{d.ready(true)}},ready:function(e){if(e===true?--d.readyWait:d.isReady){return}d.isReady=true
if(e!==true&&--d.readyWait>0){return}j.resolveWith(c,[d])
if(d.fn.triggerHandler){d(c).triggerHandler("ready")
d(c).off("ready")}}})
function O(){c.removeEventListener("DOMContentLoaded",O,false)
e.removeEventListener("load",O,false)
d.ready()}d.ready.promise=function(t){if(!j){j=d.Deferred()
if(c.readyState==="complete"){setTimeout(d.ready)}else{c.addEventListener("DOMContentLoaded",O,false)
e.addEventListener("load",O,false)}}return j.promise(t)}
d.ready.promise()
var I=d.access=function(e,t,n,i,r,s,a){var o=0,l=e.length,u=n==null
if(d.type(n)==="object"){r=true
for(o in n){d.access(e,t,o,n[o],true,s,a)}}else if(i!==undefined){r=true
if(!d.isFunction(i)){a=true}if(u){if(a){t.call(e,i)
t=null}else{u=t
t=function(e,t,n){return u.call(d(e),n)}}}if(t){for(;o<l;o++){t(e[o],n,a?i:i.call(e[o],o,t(e[o],n)))}}}return r?e:u?t.call(e):l?t(e[0],n):s}
d.acceptData=function(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType}
function P(){Object.defineProperty(this.cache={},0,{get:function(){return{}}})
this.expando=d.expando+P.uid++}P.uid=1
P.accepts=d.acceptData
P.prototype={key:function(e){if(!P.accepts(e)){return 0}var t={},n=e[this.expando]
if(!n){n=P.uid++
try{t[this.expando]={value:n}
Object.defineProperties(e,t)}catch(i){t[this.expando]=n
d.extend(e,t)}}if(!this.cache[n]){this.cache[n]={}}return n},set:function(e,t,n){var i,r=this.key(e),s=this.cache[r]
if(typeof t==="string"){s[t]=n}else{if(d.isEmptyObject(s)){d.extend(this.cache[r],t)}else{for(i in t){s[i]=t[i]}}}return s},get:function(e,t){var n=this.cache[this.key(e)]
return t===undefined?n:n[t]},access:function(e,t,n){var i
if(t===undefined||t&&typeof t==="string"&&n===undefined){i=this.get(e,t)
return i!==undefined?i:this.get(e,d.camelCase(t))}this.set(e,t,n)
return n!==undefined?n:t},remove:function(e,t){var n,i,r,s=this.key(e),a=this.cache[s]
if(t===undefined){this.cache[s]={}}else{if(d.isArray(t)){i=t.concat(t.map(d.camelCase))}else{r=d.camelCase(t)
if(t in a){i=[t,r]}else{i=r
i=i in a?[i]:i.match(E)||[]}}n=i.length
while(n--){delete a[i[n]]}}},hasData:function(e){return!d.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){if(e[this.expando]){delete this.cache[e[this.expando]]}}}
var N=new P
var R=new P
var F=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,H=/([A-Z])/g
function $(e,t,n){var i
if(n===undefined&&e.nodeType===1){i="data-"+t.replace(H,"-$1").toLowerCase()
n=e.getAttribute(i)
if(typeof n==="string"){try{n=n==="true"?true:n==="false"?false:n==="null"?null:+n+""===n?+n:F.test(n)?d.parseJSON(n):n}catch(e){}R.set(e,t,n)}else{n=undefined}}return n}d.extend({hasData:function(e){return R.hasData(e)||N.hasData(e)},data:function(e,t,n){return R.access(e,t,n)},removeData:function(e,t){R.remove(e,t)},_data:function(e,t,n){return N.access(e,t,n)},_removeData:function(e,t){N.remove(e,t)}})
d.fn.extend({data:function(e,t){var n,i,r,s=this[0],a=s&&s.attributes
if(e===undefined){if(this.length){r=R.get(s)
if(s.nodeType===1&&!N.get(s,"hasDataAttrs")){n=a.length
while(n--){if(a[n]){i=a[n].name
if(i.indexOf("data-")===0){i=d.camelCase(i.slice(5))
$(s,i,r[i])}}}N.set(s,"hasDataAttrs",true)}}return r}if(typeof e==="object"){return this.each(function(){R.set(this,e)})}return I(this,function(t){var n,i=d.camelCase(e)
if(s&&t===undefined){n=R.get(s,e)
if(n!==undefined){return n}n=R.get(s,i)
if(n!==undefined){return n}n=$(s,i,undefined)
if(n!==undefined){return n}return}this.each(function(){var n=R.get(this,i)
R.set(this,i,t)
if(e.indexOf("-")!==-1&&n!==undefined){R.set(this,e,t)}})},null,t,arguments.length>1,null,true)},removeData:function(e){return this.each(function(){R.remove(this,e)})}})
d.extend({queue:function(e,t,n){var i
if(e){t=(t||"fx")+"queue"
i=N.get(e,t)
if(n){if(!i||d.isArray(n)){i=N.access(e,t,d.makeArray(n))}else{i.push(n)}}return i||[]}},dequeue:function(e,t){t=t||"fx"
var n=d.queue(e,t),i=n.length,r=n.shift(),s=d._queueHooks(e,t),a=function(){d.dequeue(e,t)}
if(r==="inprogress"){r=n.shift()
i--}if(r){if(t==="fx"){n.unshift("inprogress")}delete s.stop
r.call(e,a,s)}if(!i&&s){s.empty.fire()}},_queueHooks:function(e,t){var n=t+"queueHooks"
return N.get(e,n)||N.access(e,n,{empty:d.Callbacks("once memory").add(function(){N.remove(e,[t+"queue",n])})})}})
d.fn.extend({queue:function(e,t){var n=2
if(typeof e!=="string"){t=e
e="fx"
n--}if(arguments.length<n){return d.queue(this[0],e)}return t===undefined?this:this.each(function(){var n=d.queue(this,e,t)
d._queueHooks(this,e)
if(e==="fx"&&n[0]!=="inprogress"){d.dequeue(this,e)}})},dequeue:function(e){return this.each(function(){d.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=d.Deferred(),s=this,a=this.length,o=function(){if(!--i){r.resolveWith(s,[s])}}
if(typeof e!=="string"){t=e
e=undefined}e=e||"fx"
while(a--){n=N.get(s[a],e+"queueHooks")
if(n&&n.empty){i++
n.empty.add(o)}}o()
return r.promise(t)}})
var z=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
var W=["Top","Right","Bottom","Left"]
var U=function(e,t){e=t||e
return d.css(e,"display")==="none"||!d.contains(e.ownerDocument,e)}
var q=/^(?:checkbox|radio)$/i;(function(){var e=c.createDocumentFragment(),t=e.appendChild(c.createElement("div")),n=c.createElement("input")
n.setAttribute("type","radio")
n.setAttribute("checked","checked")
n.setAttribute("name","t")
t.appendChild(n)
f.checkClone=t.cloneNode(true).cloneNode(true).lastChild.checked
t.innerHTML="<textarea>x</textarea>"
f.noCloneChecked=!!t.cloneNode(true).lastChild.defaultValue})()
var B=typeof undefined
f.focusinBubbles="onfocusin"in e
var V=/^key/,J=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,K=/^([^.]*)(?:\.(.+)|)$/
function Q(){return true}function G(){return false}function Z(){try{return c.activeElement}catch(e){}}d.event={global:{},add:function(e,t,n,i,r){var s,a,o,l,u,f,c,h,p,m,v,g=N.get(e)
if(!g){return}if(n.handler){s=n
n=s.handler
r=s.selector}if(!n.guid){n.guid=d.guid++}if(!(l=g.events)){l=g.events={}}if(!(a=g.handle)){a=g.handle=function(t){return typeof d!==B&&d.event.triggered!==t.type?d.event.dispatch.apply(e,arguments):undefined}}t=(t||"").match(E)||[""]
u=t.length
while(u--){o=K.exec(t[u])||[]
p=v=o[1]
m=(o[2]||"").split(".").sort()
if(!p){continue}c=d.event.special[p]||{}
p=(r?c.delegateType:c.bindType)||p
c=d.event.special[p]||{}
f=d.extend({type:p,origType:v,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&d.expr.match.needsContext.test(r),namespace:m.join(".")},s)
if(!(h=l[p])){h=l[p]=[]
h.delegateCount=0
if(!c.setup||c.setup.call(e,i,m,a)===false){if(e.addEventListener){e.addEventListener(p,a,false)}}}if(c.add){c.add.call(e,f)
if(!f.handler.guid){f.handler.guid=n.guid}}if(r){h.splice(h.delegateCount++,0,f)}else{h.push(f)}d.event.global[p]=true}},remove:function(e,t,n,i,r){var s,a,o,l,u,f,c,h,p,m,v,g=N.hasData(e)&&N.get(e)
if(!g||!(l=g.events)){return}t=(t||"").match(E)||[""]
u=t.length
while(u--){o=K.exec(t[u])||[]
p=v=o[1]
m=(o[2]||"").split(".").sort()
if(!p){for(p in l){d.event.remove(e,p+t[u],n,i,true)}continue}c=d.event.special[p]||{}
p=(i?c.delegateType:c.bindType)||p
h=l[p]||[]
o=o[2]&&new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)")
a=s=h.length
while(s--){f=h[s]
if((r||v===f.origType)&&(!n||n.guid===f.guid)&&(!o||o.test(f.namespace))&&(!i||i===f.selector||i==="**"&&f.selector)){h.splice(s,1)
if(f.selector){h.delegateCount--}if(c.remove){c.remove.call(e,f)}}}if(a&&!h.length){if(!c.teardown||c.teardown.call(e,m,g.handle)===false){d.removeEvent(e,p,g.handle)}delete l[p]}}if(d.isEmptyObject(l)){delete g.handle
N.remove(e,"events")}},trigger:function(t,n,i,r){var s,a,o,l,f,h,p,m=[i||c],v=u.call(t,"type")?t.type:t,g=u.call(t,"namespace")?t.namespace.split("."):[]
a=o=i=i||c
if(i.nodeType===3||i.nodeType===8){return}if(X.test(v+d.event.triggered)){return}if(v.indexOf(".")>=0){g=v.split(".")
v=g.shift()
g.sort()}f=v.indexOf(":")<0&&"on"+v
t=t[d.expando]?t:new d.Event(v,typeof t==="object"&&t)
t.isTrigger=r?2:3
t.namespace=g.join(".")
t.namespace_re=t.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null
t.result=undefined
if(!t.target){t.target=i}n=n==null?[t]:d.makeArray(n,[t])
p=d.event.special[v]||{}
if(!r&&p.trigger&&p.trigger.apply(i,n)===false){return}if(!r&&!p.noBubble&&!d.isWindow(i)){l=p.delegateType||v
if(!X.test(l+v)){a=a.parentNode}for(;a;a=a.parentNode){m.push(a)
o=a}if(o===(i.ownerDocument||c)){m.push(o.defaultView||o.parentWindow||e)}}s=0
while((a=m[s++])&&!t.isPropagationStopped()){t.type=s>1?l:p.bindType||v
h=(N.get(a,"events")||{})[t.type]&&N.get(a,"handle")
if(h){h.apply(a,n)}h=f&&a[f]
if(h&&h.apply&&d.acceptData(a)){t.result=h.apply(a,n)
if(t.result===false){t.preventDefault()}}}t.type=v
if(!r&&!t.isDefaultPrevented()){if((!p._default||p._default.apply(m.pop(),n)===false)&&d.acceptData(i)){if(f&&d.isFunction(i[v])&&!d.isWindow(i)){o=i[f]
if(o){i[f]=null}d.event.triggered=v
i[v]()
d.event.triggered=undefined
if(o){i[f]=o}}}}return t.result},dispatch:function(e){e=d.event.fix(e)
var t,n,r,s,a,o=[],l=i.call(arguments),u=(N.get(this,"events")||{})[e.type]||[],f=d.event.special[e.type]||{}
l[0]=e
e.delegateTarget=this
if(f.preDispatch&&f.preDispatch.call(this,e)===false){return}o=d.event.handlers.call(this,e,u)
t=0
while((s=o[t++])&&!e.isPropagationStopped()){e.currentTarget=s.elem
n=0
while((a=s.handlers[n++])&&!e.isImmediatePropagationStopped()){if(!e.namespace_re||e.namespace_re.test(a.namespace)){e.handleObj=a
e.data=a.data
r=((d.event.special[a.origType]||{}).handle||a.handler).apply(s.elem,l)
if(r!==undefined){if((e.result=r)===false){e.preventDefault()
e.stopPropagation()}}}}}if(f.postDispatch){f.postDispatch.call(this,e)}return e.result},handlers:function(e,t){var n,i,r,s,a=[],o=t.delegateCount,l=e.target
if(o&&l.nodeType&&(!e.button||e.type!=="click")){for(;l!==this;l=l.parentNode||this){if(l.disabled!==true||e.type!=="click"){i=[]
for(n=0;n<o;n++){s=t[n]
r=s.selector+" "
if(i[r]===undefined){i[r]=s.needsContext?d(r,this).index(l)>=0:d.find(r,this,null,[l]).length}if(i[r]){i.push(s)}}if(i.length){a.push({elem:l,handlers:i})}}}}if(o<t.length){a.push({elem:this,handlers:t.slice(o)})}return a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){if(e.which==null){e.which=t.charCode!=null?t.charCode:t.keyCode}return e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,r,s=t.button
if(e.pageX==null&&t.clientX!=null){n=e.target.ownerDocument||c
i=n.documentElement
r=n.body
e.pageX=t.clientX+(i&&i.scrollLeft||r&&r.scrollLeft||0)-(i&&i.clientLeft||r&&r.clientLeft||0)
e.pageY=t.clientY+(i&&i.scrollTop||r&&r.scrollTop||0)-(i&&i.clientTop||r&&r.clientTop||0)}if(!e.which&&s!==undefined){e.which=s&1?1:s&2?3:s&4?2:0}return e}},fix:function(e){if(e[d.expando]){return e}var t,n,i,r=e.type,s=e,a=this.fixHooks[r]
if(!a){this.fixHooks[r]=a=J.test(r)?this.mouseHooks:V.test(r)?this.keyHooks:{}}i=a.props?this.props.concat(a.props):this.props
e=new d.Event(s)
t=i.length
while(t--){n=i[t]
e[n]=s[n]}if(!e.target){e.target=c}if(e.target.nodeType===3){e.target=e.target.parentNode}return a.filter?a.filter(e,s):e},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==Z()&&this.focus){this.focus()
return false}},delegateType:"focusin"},blur:{trigger:function(){if(this===Z()&&this.blur){this.blur()
return false}},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&d.nodeName(this,"input")){this.click()
return false}},_default:function(e){return d.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){if(e.result!==undefined&&e.originalEvent){e.originalEvent.returnValue=e.result}}}},simulate:function(e,t,n,i){var r=d.extend(new d.Event,n,{type:e,isSimulated:true,originalEvent:{}})
if(i){d.event.trigger(r,null,t)}else{d.event.dispatch.call(t,r)}if(r.isDefaultPrevented()){n.preventDefault()}}}
d.removeEvent=function(e,t,n){if(e.removeEventListener){e.removeEventListener(t,n,false)}}
d.Event=function(e,t){if(!(this instanceof d.Event)){return new d.Event(e,t)}if(e&&e.type){this.originalEvent=e
this.type=e.type
this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===undefined&&e.returnValue===false?Q:G}else{this.type=e}if(t){d.extend(this,t)}this.timeStamp=e&&e.timeStamp||d.now()
this[d.expando]=true}
d.Event.prototype={isDefaultPrevented:G,isPropagationStopped:G,isImmediatePropagationStopped:G,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=Q
if(e&&e.preventDefault){e.preventDefault()}},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=Q
if(e&&e.stopPropagation){e.stopPropagation()}},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=Q
if(e&&e.stopImmediatePropagation){e.stopImmediatePropagation()}this.stopPropagation()}}
d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){d.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,s=e.handleObj
if(!r||r!==i&&!d.contains(i,r)){e.type=s.origType
n=s.handler.apply(this,arguments)
e.type=t}return n}}})
if(!f.focusinBubbles){d.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){d.event.simulate(t,e.target,d.event.fix(e),true)}
d.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=N.access(i,t)
if(!r){i.addEventListener(e,n,true)}N.access(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=N.access(i,t)-1
if(!r){i.removeEventListener(e,n,true)
N.remove(i,t)}else{N.access(i,t,r)}}}})}d.fn.extend({on:function(e,t,n,i,r){var s,a
if(typeof e==="object"){if(typeof t!=="string"){n=n||t
t=undefined}for(a in e){this.on(a,t,n,e[a],r)}return this}if(n==null&&i==null){i=t
n=t=undefined}else if(i==null){if(typeof t==="string"){i=n
n=undefined}else{i=n
n=t
t=undefined}}if(i===false){i=G}else if(!i){return this}if(r===1){s=i
i=function(e){d().off(e)
return s.apply(this,arguments)}
i.guid=s.guid||(s.guid=d.guid++)}return this.each(function(){d.event.add(this,e,i,n,t)})},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(e,t,n){var i,r
if(e&&e.preventDefault&&e.handleObj){i=e.handleObj
d(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler)
return this}if(typeof e==="object"){for(r in e){this.off(r,t,e[r])}return this}if(t===false||typeof t==="function"){n=t
t=undefined}if(n===false){n=G}return this.each(function(){d.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){d.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0]
if(n){return d.event.trigger(e,t,n,true)}}})
var ee=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,te=/<([\w:]+)/,ne=/<|&#?\w+;/,ie=/<(?:script|style|link)/i,re=/checked\s*(?:[^=]|=\s*.checked.)/i,se=/^$|\/(?:java|ecma)script/i,ae=/^true\/(.*)/,oe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,le={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
le.optgroup=le.option
le.tbody=le.tfoot=le.colgroup=le.caption=le.thead
le.th=le.td
function ue(e,t){return d.nodeName(e,"table")&&d.nodeName(t.nodeType!==11?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function fe(e){e.type=(e.getAttribute("type")!==null)+"/"+e.type
return e}function ce(e){var t=ae.exec(e.type)
if(t){e.type=t[1]}else{e.removeAttribute("type")}return e}function he(e,t){var n=0,i=e.length
for(;n<i;n++){N.set(e[n],"globalEval",!t||N.get(t[n],"globalEval"))}}function de(e,t){var n,i,r,s,a,o,l,u
if(t.nodeType!==1){return}if(N.hasData(e)){s=N.access(e)
a=N.set(t,s)
u=s.events
if(u){delete a.handle
a.events={}
for(r in u){for(n=0,i=u[r].length;n<i;n++){d.event.add(t,r,u[r][n])}}}}if(R.hasData(e)){o=R.access(e)
l=d.extend({},o)
R.set(t,l)}}function pe(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[]
return t===undefined||t&&d.nodeName(e,t)?d.merge([e],n):n}function me(e,t){var n=t.nodeName.toLowerCase()
if(n==="input"&&q.test(e.type)){t.checked=e.checked}else if(n==="input"||n==="textarea"){t.defaultValue=e.defaultValue}}d.extend({clone:function(e,t,n){var i,r,s,a,o=e.cloneNode(true),l=d.contains(e.ownerDocument,e)
if(!f.noCloneChecked&&(e.nodeType===1||e.nodeType===11)&&!d.isXMLDoc(e)){a=pe(o)
s=pe(e)
for(i=0,r=s.length;i<r;i++){me(s[i],a[i])}}if(t){if(n){s=s||pe(e)
a=a||pe(o)
for(i=0,r=s.length;i<r;i++){de(s[i],a[i])}}else{de(e,o)}}a=pe(o,"script")
if(a.length>0){he(a,!l&&pe(e,"script"))}return o},buildFragment:function(e,t,n,i){var r,s,a,o,l,u,f=t.createDocumentFragment(),c=[],h=0,p=e.length
for(;h<p;h++){r=e[h]
if(r||r===0){if(d.type(r)==="object"){d.merge(c,r.nodeType?[r]:r)}else if(!ne.test(r)){c.push(t.createTextNode(r))}else{s=s||f.appendChild(t.createElement("div"))
a=(te.exec(r)||["",""])[1].toLowerCase()
o=le[a]||le._default
s.innerHTML=o[1]+r.replace(ee,"<$1></$2>")+o[2]
u=o[0]
while(u--){s=s.lastChild}d.merge(c,s.childNodes)
s=f.firstChild
s.textContent=""}}}f.textContent=""
h=0
while(r=c[h++]){if(i&&d.inArray(r,i)!==-1){continue}l=d.contains(r.ownerDocument,r)
s=pe(f.appendChild(r),"script")
if(l){he(s)}if(n){u=0
while(r=s[u++]){if(se.test(r.type||"")){n.push(r)}}}}return f},cleanData:function(e){var t,n,i,r,s=d.event.special,a=0
for(;(n=e[a])!==undefined;a++){if(d.acceptData(n)){r=n[N.expando]
if(r&&(t=N.cache[r])){if(t.events){for(i in t.events){if(s[i]){d.event.remove(n,i)}else{d.removeEvent(n,i,t.handle)}}}if(N.cache[r]){delete N.cache[r]}}}delete R.cache[n[R.expando]]}}})
d.fn.extend({text:function(e){return I(this,function(e){return e===undefined?d.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=e}})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=ue(this,e)
t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=ue(this,e)
t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this)}})},after:function(){return this.domManip(arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this.nextSibling)}})},remove:function(e,t){var n,i=e?d.filter(e,this):this,r=0
for(;(n=i[r])!=null;r++){if(!t&&n.nodeType===1){d.cleanData(pe(n))}if(n.parentNode){if(t&&d.contains(n.ownerDocument,n)){he(pe(n,"script"))}n.parentNode.removeChild(n)}}return this},empty:function(){var e,t=0
for(;(e=this[t])!=null;t++){if(e.nodeType===1){d.cleanData(pe(e,false))
e.textContent=""}}return this},clone:function(e,t){e=e==null?false:e
t=t==null?e:t
return this.map(function(){return d.clone(this,e,t)})},html:function(e){return I(this,function(e){var t=this[0]||{},n=0,i=this.length
if(e===undefined&&t.nodeType===1){return t.innerHTML}if(typeof e==="string"&&!ie.test(e)&&!le[(te.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(ee,"<$1></$2>")
try{for(;n<i;n++){t=this[n]||{}
if(t.nodeType===1){d.cleanData(pe(t,false))
t.innerHTML=e}}t=0}catch(e){}}if(t){this.empty().append(e)}},null,e,arguments.length)},replaceWith:function(){var e=arguments[0]
this.domManip(arguments,function(t){e=this.parentNode
d.cleanData(pe(this))
if(e){e.replaceChild(t,this)}})
return e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,true)},domManip:function(e,t){e=r.apply([],e)
var n,i,s,a,o,l,u=0,c=this.length,h=this,p=c-1,m=e[0],v=d.isFunction(m)
if(v||c>1&&typeof m==="string"&&!f.checkClone&&re.test(m)){return this.each(function(n){var i=h.eq(n)
if(v){e[0]=m.call(this,n,i.html())}i.domManip(e,t)})}if(c){n=d.buildFragment(e,this[0].ownerDocument,false,this)
i=n.firstChild
if(n.childNodes.length===1){n=i}if(i){s=d.map(pe(n,"script"),fe)
a=s.length
for(;u<c;u++){o=n
if(u!==p){o=d.clone(o,true,true)
if(a){d.merge(s,pe(o,"script"))}}t.call(this[u],o,u)}if(a){l=s[s.length-1].ownerDocument
d.map(s,ce)
for(u=0;u<a;u++){o=s[u]
if(se.test(o.type||"")&&!N.access(o,"globalEval")&&d.contains(l,o)){if(o.src){if(d._evalUrl){d._evalUrl(o.src)}}else{d.globalEval(o.textContent.replace(oe,""))}}}}}}return this}})
d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){d.fn[e]=function(e){var n,i=[],r=d(e),a=r.length-1,o=0
for(;o<=a;o++){n=o===a?this:this.clone(true)
d(r[o])[t](n)
s.apply(i,n.get())}return this.pushStack(i)}})
var ve,ge={}
function _e(t,n){var i,r=d(n.createElement(t)).appendTo(n.body),s=e.getDefaultComputedStyle&&(i=e.getDefaultComputedStyle(r[0]))?i.display:d.css(r[0],"display")
r.detach()
return s}function ye(e){var t=c,n=ge[e]
if(!n){n=_e(e,t)
if(n==="none"||!n){ve=(ve||d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement)
t=ve[0].contentDocument
t.write()
t.close()
n=_e(e,t)
ve.detach()}ge[e]=n}return n}var be=/^margin/
var we=new RegExp("^("+z+")(?!px)[a-z%]+$","i")
var xe=function(t){if(t.ownerDocument.defaultView.opener){return t.ownerDocument.defaultView.getComputedStyle(t,null)}return e.getComputedStyle(t,null)}
function ke(e,t,n){var i,r,s,a,o=e.style
n=n||xe(e)
if(n){a=n.getPropertyValue(t)||n[t]}if(n){if(a===""&&!d.contains(e.ownerDocument,e)){a=d.style(e,t)}if(we.test(a)&&be.test(t)){i=o.width
r=o.minWidth
s=o.maxWidth
o.minWidth=o.maxWidth=o.width=a
a=n.width
o.width=i
o.minWidth=r
o.maxWidth=s}}return a!==undefined?a+"":a}function Me(e,t){return{get:function(){if(e()){delete this.get
return}return(this.get=t).apply(this,arguments)}}}(function(){var t,n,i=c.documentElement,r=c.createElement("div"),s=c.createElement("div")
if(!s.style){return}s.style.backgroundClip="content-box"
s.cloneNode(true).style.backgroundClip=""
f.clearCloneStyle=s.style.backgroundClip==="content-box"
r.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;"+"position:absolute"
r.appendChild(s)
function a(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;"+"box-sizing:border-box;display:block;margin-top:1%;top:1%;"+"border:1px;padding:1px;width:4px;position:absolute"
s.innerHTML=""
i.appendChild(r)
var a=e.getComputedStyle(s,null)
t=a.top!=="1%"
n=a.width==="4px"
i.removeChild(r)}if(e.getComputedStyle){d.extend(f,{pixelPosition:function(){a()
return t},boxSizingReliable:function(){if(n==null){a()}return n},reliableMarginRight:function(){var t,n=s.appendChild(c.createElement("div"))
n.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;padding:0"
n.style.marginRight=n.style.width="0"
s.style.width="1px"
i.appendChild(r)
t=!parseFloat(e.getComputedStyle(n,null).marginRight)
i.removeChild(r)
s.removeChild(n)
return t}})}})()
d.swap=function(e,t,n,i){var r,s,a={}
for(s in t){a[s]=e.style[s]
e.style[s]=t[s]}r=n.apply(e,i||[])
for(s in t){e.style[s]=a[s]}return r}
var Te=/^(none|table(?!-c[ea]).+)/,Le=new RegExp("^("+z+")(.*)$","i"),Se=new RegExp("^([+-])=("+z+")","i"),De={position:"absolute",visibility:"hidden",display:"block"},Ce={letterSpacing:"0",fontWeight:"400"},Ee=["Webkit","O","Moz","ms"]
function Ae(e,t){if(t in e){return t}var n=t[0].toUpperCase()+t.slice(1),i=t,r=Ee.length
while(r--){t=Ee[r]+n
if(t in e){return t}}return i}function Ye(e,t,n){var i=Le.exec(t)
return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function je(e,t,n,i,r){var s=n===(i?"border":"content")?4:t==="width"?1:0,a=0
for(;s<4;s+=2){if(n==="margin"){a+=d.css(e,n+W[s],true,r)}if(i){if(n==="content"){a-=d.css(e,"padding"+W[s],true,r)}if(n!=="margin"){a-=d.css(e,"border"+W[s]+"Width",true,r)}}else{a+=d.css(e,"padding"+W[s],true,r)
if(n!=="padding"){a+=d.css(e,"border"+W[s]+"Width",true,r)}}}return a}function Oe(e,t,n){var i=true,r=t==="width"?e.offsetWidth:e.offsetHeight,s=xe(e),a=d.css(e,"boxSizing",false,s)==="border-box"
if(r<=0||r==null){r=ke(e,t,s)
if(r<0||r==null){r=e.style[t]}if(we.test(r)){return r}i=a&&(f.boxSizingReliable()||r===e.style[t])
r=parseFloat(r)||0}return r+je(e,t,n||(a?"border":"content"),i,s)+"px"}function Ie(e,t){var n,i,r,s=[],a=0,o=e.length
for(;a<o;a++){i=e[a]
if(!i.style){continue}s[a]=N.get(i,"olddisplay")
n=i.style.display
if(t){if(!s[a]&&n==="none"){i.style.display=""}if(i.style.display===""&&U(i)){s[a]=N.access(i,"olddisplay",ye(i.nodeName))}}else{r=U(i)
if(n!=="none"||!r){N.set(i,"olddisplay",r?n:d.css(i,"display"))}}}for(a=0;a<o;a++){i=e[a]
if(!i.style){continue}if(!t||i.style.display==="none"||i.style.display===""){i.style.display=t?s[a]||"":"none"}}return e}d.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=ke(e,"opacity")
return n===""?"1":n}}}},cssNumber:{columnCount:true,fillOpacity:true,flexGrow:true,flexShrink:true,fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{float:"cssFloat"},style:function(e,t,n,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style){return}var r,s,a,o=d.camelCase(t),l=e.style
t=d.cssProps[o]||(d.cssProps[o]=Ae(l,o))
a=d.cssHooks[t]||d.cssHooks[o]
if(n!==undefined){s=typeof n
if(s==="string"&&(r=Se.exec(n))){n=(r[1]+1)*r[2]+parseFloat(d.css(e,t))
s="number"}if(n==null||n!==n){return}if(s==="number"&&!d.cssNumber[o]){n+="px"}if(!f.clearCloneStyle&&n===""&&t.indexOf("background")===0){l[t]="inherit"}if(!a||!("set"in a)||(n=a.set(e,n,i))!==undefined){l[t]=n}}else{if(a&&"get"in a&&(r=a.get(e,false,i))!==undefined){return r}return l[t]}},css:function(e,t,n,i){var r,s,a,o=d.camelCase(t)
t=d.cssProps[o]||(d.cssProps[o]=Ae(e.style,o))
a=d.cssHooks[t]||d.cssHooks[o]
if(a&&"get"in a){r=a.get(e,true,n)}if(r===undefined){r=ke(e,t,i)}if(r==="normal"&&t in Ce){r=Ce[t]}if(n===""||n){s=parseFloat(r)
return n===true||d.isNumeric(s)?s||0:r}return r}})
d.each(["height","width"],function(e,t){d.cssHooks[t]={get:function(e,n,i){if(n){return Te.test(d.css(e,"display"))&&e.offsetWidth===0?d.swap(e,De,function(){return Oe(e,t,i)}):Oe(e,t,i)}},set:function(e,n,i){var r=i&&xe(e)
return Ye(e,n,i?je(e,t,i,d.css(e,"boxSizing",false,r)==="border-box",r):0)}}})
d.cssHooks.marginRight=Me(f.reliableMarginRight,function(e,t){if(t){return d.swap(e,{display:"inline-block"},ke,[e,"marginRight"])}})
d.each({margin:"",padding:"",border:"Width"},function(e,t){d.cssHooks[e+t]={expand:function(n){var i=0,r={},s=typeof n==="string"?n.split(" "):[n]
for(;i<4;i++){r[e+W[i]+t]=s[i]||s[i-2]||s[0]}return r}}
if(!be.test(e)){d.cssHooks[e+t].set=Ye}})
d.fn.extend({css:function(e,t){return I(this,function(e,t,n){var i,r,s={},a=0
if(d.isArray(t)){i=xe(e)
r=t.length
for(;a<r;a++){s[t[a]]=d.css(e,t[a],false,i)}return s}return n!==undefined?d.style(e,t,n):d.css(e,t)},e,t,arguments.length>1)},show:function(){return Ie(this,true)},hide:function(){return Ie(this)},toggle:function(e){if(typeof e==="boolean"){return e?this.show():this.hide()}return this.each(function(){if(U(this)){d(this).show()}else{d(this).hide()}})}})
function Pe(e,t,n,i,r){return new Pe.prototype.init(e,t,n,i,r)}d.Tween=Pe
Pe.prototype={constructor:Pe,init:function(e,t,n,i,r,s){this.elem=e
this.prop=n
this.easing=r||"swing"
this.options=t
this.start=this.now=this.cur()
this.end=i
this.unit=s||(d.cssNumber[n]?"":"px")},cur:function(){var e=Pe.propHooks[this.prop]
return e&&e.get?e.get(this):Pe.propHooks._default.get(this)},run:function(e){var t,n=Pe.propHooks[this.prop]
if(this.options.duration){this.pos=t=d.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration)}else{this.pos=t=e}this.now=(this.end-this.start)*t+this.start
if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(n&&n.set){n.set(this)}else{Pe.propHooks._default.set(this)}return this}}
Pe.prototype.init.prototype=Pe.prototype
Pe.propHooks={_default:{get:function(e){var t
if(e.elem[e.prop]!=null&&(!e.elem.style||e.elem.style[e.prop]==null)){return e.elem[e.prop]}t=d.css(e.elem,e.prop,"")
return!t||t==="auto"?0:t},set:function(e){if(d.fx.step[e.prop]){d.fx.step[e.prop](e)}else if(e.elem.style&&(e.elem.style[d.cssProps[e.prop]]!=null||d.cssHooks[e.prop])){d.style(e.elem,e.prop,e.now+e.unit)}else{e.elem[e.prop]=e.now}}}}
Pe.propHooks.scrollTop=Pe.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now}}}
d.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}}
d.fx=Pe.prototype.init
d.fx.step={}
var Ne,Re,Fe=/^(?:toggle|show|hide)$/,He=new RegExp("^(?:([+-])=|)("+z+")([a-z%]*)$","i"),$e=/queueHooks$/,ze=[Ve],We={"*":[function(e,t){var n=this.createTween(e,t),i=n.cur(),r=He.exec(t),s=r&&r[3]||(d.cssNumber[e]?"":"px"),a=(d.cssNumber[e]||s!=="px"&&+i)&&He.exec(d.css(n.elem,e)),o=1,l=20
if(a&&a[3]!==s){s=s||a[3]
r=r||[]
a=+i||1
do{o=o||".5"
a=a/o
d.style(n.elem,e,a+s)}while(o!==(o=n.cur()/i)&&o!==1&&--l)}if(r){a=n.start=+a||+i||0
n.unit=s
n.end=r[1]?a+(r[1]+1)*r[2]:+r[2]}return n}]}
function Ue(){setTimeout(function(){Ne=undefined})
return Ne=d.now()}function qe(e,t){var n,i=0,r={height:e}
t=t?1:0
for(;i<4;i+=2-t){n=W[i]
r["margin"+n]=r["padding"+n]=e}if(t){r.opacity=r.width=e}return r}function Be(e,t,n){var i,r=(We[t]||[]).concat(We["*"]),s=0,a=r.length
for(;s<a;s++){if(i=r[s].call(n,t,e)){return i}}}function Ve(e,t,n){var i,r,s,a,o,l,u,f,c=this,h={},p=e.style,m=e.nodeType&&U(e),v=N.get(e,"fxshow")
if(!n.queue){o=d._queueHooks(e,"fx")
if(o.unqueued==null){o.unqueued=0
l=o.empty.fire
o.empty.fire=function(){if(!o.unqueued){l()}}}o.unqueued++
c.always(function(){c.always(function(){o.unqueued--
if(!d.queue(e,"fx").length){o.empty.fire()}})})}if(e.nodeType===1&&("height"in t||"width"in t)){n.overflow=[p.overflow,p.overflowX,p.overflowY]
u=d.css(e,"display")
f=u==="none"?N.get(e,"olddisplay")||ye(e.nodeName):u
if(f==="inline"&&d.css(e,"float")==="none"){p.display="inline-block"}}if(n.overflow){p.overflow="hidden"
c.always(function(){p.overflow=n.overflow[0]
p.overflowX=n.overflow[1]
p.overflowY=n.overflow[2]})}for(i in t){r=t[i]
if(Fe.exec(r)){delete t[i]
s=s||r==="toggle"
if(r===(m?"hide":"show")){if(r==="show"&&v&&v[i]!==undefined){m=true}else{continue}}h[i]=v&&v[i]||d.style(e,i)}else{u=undefined}}if(!d.isEmptyObject(h)){if(v){if("hidden"in v){m=v.hidden}}else{v=N.access(e,"fxshow",{})}if(s){v.hidden=!m}if(m){d(e).show()}else{c.done(function(){d(e).hide()})}c.done(function(){var t
N.remove(e,"fxshow")
for(t in h){d.style(e,t,h[t])}})
for(i in h){a=Be(m?v[i]:0,i,c)
if(!(i in v)){v[i]=a.start
if(m){a.end=a.start
a.start=i==="width"||i==="height"?1:0}}}}else if((u==="none"?ye(e.nodeName):u)==="inline"){p.display=u}}function Je(e,t){var n,i,r,s,a
for(n in e){i=d.camelCase(n)
r=t[i]
s=e[n]
if(d.isArray(s)){r=s[1]
s=e[n]=s[0]}if(n!==i){e[i]=s
delete e[n]}a=d.cssHooks[i]
if(a&&"expand"in a){s=a.expand(s)
delete e[i]
for(n in s){if(!(n in e)){e[n]=s[n]
t[n]=r}}}else{t[i]=r}}}function Xe(e,t,n){var i,r,s=0,a=ze.length,o=d.Deferred().always(function(){delete l.elem}),l=function(){if(r){return false}var t=Ne||Ue(),n=Math.max(0,u.startTime+u.duration-t),i=n/u.duration||0,s=1-i,a=0,l=u.tweens.length
for(;a<l;a++){u.tweens[a].run(s)}o.notifyWith(e,[u,s,n])
if(s<1&&l){return n}else{o.resolveWith(e,[u])
return false}},u=o.promise({elem:e,props:d.extend({},t),opts:d.extend(true,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Ne||Ue(),duration:n.duration,tweens:[],createTween:function(t,n){var i=d.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing)
u.tweens.push(i)
return i},stop:function(t){var n=0,i=t?u.tweens.length:0
if(r){return this}r=true
for(;n<i;n++){u.tweens[n].run(1)}if(t){o.resolveWith(e,[u,t])}else{o.rejectWith(e,[u,t])}return this}}),f=u.props
Je(f,u.opts.specialEasing)
for(;s<a;s++){i=ze[s].call(u,e,f,u.opts)
if(i){return i}}d.map(f,Be,u)
if(d.isFunction(u.opts.start)){u.opts.start.call(e,u)}d.fx.timer(d.extend(l,{elem:e,anim:u,queue:u.opts.queue}))
return u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}d.Animation=d.extend(Xe,{tweener:function(e,t){if(d.isFunction(e)){t=e
e=["*"]}else{e=e.split(" ")}var n,i=0,r=e.length
for(;i<r;i++){n=e[i]
We[n]=We[n]||[]
We[n].unshift(t)}},prefilter:function(e,t){if(t){ze.unshift(e)}else{ze.push(e)}}})
d.speed=function(e,t,n){var i=e&&typeof e==="object"?d.extend({},e):{complete:n||!n&&t||d.isFunction(e)&&e,duration:e,easing:n&&t||t&&!d.isFunction(t)&&t}
i.duration=d.fx.off?0:typeof i.duration==="number"?i.duration:i.duration in d.fx.speeds?d.fx.speeds[i.duration]:d.fx.speeds._default
if(i.queue==null||i.queue===true){i.queue="fx"}i.old=i.complete
i.complete=function(){if(d.isFunction(i.old)){i.old.call(this)}if(i.queue){d.dequeue(this,i.queue)}}
return i}
d.fn.extend({fadeTo:function(e,t,n,i){return this.filter(U).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=d.isEmptyObject(e),s=d.speed(t,n,i),a=function(){var t=Xe(this,d.extend({},e),s)
if(r||N.get(this,"finish")){t.stop(true)}}
a.finish=a
return r||s.queue===false?this.each(a):this.queue(s.queue,a)},stop:function(e,t,n){var i=function(e){var t=e.stop
delete e.stop
t(n)}
if(typeof e!=="string"){n=t
t=e
e=undefined}if(t&&e!==false){this.queue(e||"fx",[])}return this.each(function(){var t=true,r=e!=null&&e+"queueHooks",s=d.timers,a=N.get(this)
if(r){if(a[r]&&a[r].stop){i(a[r])}}else{for(r in a){if(a[r]&&a[r].stop&&$e.test(r)){i(a[r])}}}for(r=s.length;r--;){if(s[r].elem===this&&(e==null||s[r].queue===e)){s[r].anim.stop(n)
t=false
s.splice(r,1)}}if(t||!n){d.dequeue(this,e)}})},finish:function(e){if(e!==false){e=e||"fx"}return this.each(function(){var t,n=N.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],s=d.timers,a=i?i.length:0
n.finish=true
d.queue(this,e,[])
if(r&&r.stop){r.stop.call(this,true)}for(t=s.length;t--;){if(s[t].elem===this&&s[t].queue===e){s[t].anim.stop(true)
s.splice(t,1)}}for(t=0;t<a;t++){if(i[t]&&i[t].finish){i[t].finish.call(this)}}delete n.finish})}})
d.each(["toggle","show","hide"],function(e,t){var n=d.fn[t]
d.fn[t]=function(e,i,r){return e==null||typeof e==="boolean"?n.apply(this,arguments):this.animate(qe(t,true),e,i,r)}})
d.each({slideDown:qe("show"),slideUp:qe("hide"),slideToggle:qe("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){d.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}})
d.timers=[]
d.fx.tick=function(){var e,t=0,n=d.timers
Ne=d.now()
for(;t<n.length;t++){e=n[t]
if(!e()&&n[t]===e){n.splice(t--,1)}}if(!n.length){d.fx.stop()}Ne=undefined}
d.fx.timer=function(e){d.timers.push(e)
if(e()){d.fx.start()}else{d.timers.pop()}}
d.fx.interval=13
d.fx.start=function(){if(!Re){Re=setInterval(d.fx.tick,d.fx.interval)}}
d.fx.stop=function(){clearInterval(Re)
Re=null}
d.fx.speeds={slow:600,fast:200,_default:400}
d.fn.delay=function(e,t){e=d.fx?d.fx.speeds[e]||e:e
t=t||"fx"
return this.queue(t,function(t,n){var i=setTimeout(t,e)
n.stop=function(){clearTimeout(i)}})};(function(){var e=c.createElement("input"),t=c.createElement("select"),n=t.appendChild(c.createElement("option"))
e.type="checkbox"
f.checkOn=e.value!==""
f.optSelected=n.selected
t.disabled=true
f.optDisabled=!n.disabled
e=c.createElement("input")
e.value="t"
e.type="radio"
f.radioValue=e.value==="t"})()
var Ke,Qe,Ge=d.expr.attrHandle
d.fn.extend({attr:function(e,t){return I(this,d.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){d.removeAttr(this,e)})}})
d.extend({attr:function(e,t,n){var i,r,s=e.nodeType
if(!e||s===3||s===8||s===2){return}if(typeof e.getAttribute===B){return d.prop(e,t,n)}if(s!==1||!d.isXMLDoc(e)){t=t.toLowerCase()
i=d.attrHooks[t]||(d.expr.match.bool.test(t)?Qe:Ke)}if(n!==undefined){if(n===null){d.removeAttr(e,t)}else if(i&&"set"in i&&(r=i.set(e,n,t))!==undefined){return r}else{e.setAttribute(t,n+"")
return n}}else if(i&&"get"in i&&(r=i.get(e,t))!==null){return r}else{r=d.find.attr(e,t)
return r==null?undefined:r}},removeAttr:function(e,t){var n,i,r=0,s=t&&t.match(E)
if(s&&e.nodeType===1){while(n=s[r++]){i=d.propFix[n]||n
if(d.expr.match.bool.test(n)){e[i]=false}e.removeAttribute(n)}}},attrHooks:{type:{set:function(e,t){if(!f.radioValue&&t==="radio"&&d.nodeName(e,"input")){var n=e.value
e.setAttribute("type",t)
if(n){e.value=n}return t}}}}})
Qe={set:function(e,t,n){if(t===false){d.removeAttr(e,n)}else{e.setAttribute(n,n)}return n}}
d.each(d.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Ge[t]||d.find.attr
Ge[t]=function(e,t,i){var r,s
if(!i){s=Ge[t]
Ge[t]=r
r=n(e,t,i)!=null?t.toLowerCase():null
Ge[t]=s}return r}})
var Ze=/^(?:input|select|textarea|button)$/i
d.fn.extend({prop:function(e,t){return I(this,d.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[d.propFix[e]||e]})}})
d.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e,t,n){var i,r,s,a=e.nodeType
if(!e||a===3||a===8||a===2){return}s=a!==1||!d.isXMLDoc(e)
if(s){t=d.propFix[t]||t
r=d.propHooks[t]}if(n!==undefined){return r&&"set"in r&&(i=r.set(e,n,t))!==undefined?i:e[t]=n}else{return r&&"get"in r&&(i=r.get(e,t))!==null?i:e[t]}},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||Ze.test(e.nodeName)||e.href?e.tabIndex:-1}}}})
if(!f.optSelected){d.propHooks.selected={get:function(e){var t=e.parentNode
if(t&&t.parentNode){t.parentNode.selectedIndex}return null}}}d.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){d.propFix[this.toLowerCase()]=this})
var et=/[\t\r\n\f]/g
d.fn.extend({addClass:function(e){var t,n,i,r,s,a,o=typeof e==="string"&&e,l=0,u=this.length
if(d.isFunction(e)){return this.each(function(t){d(this).addClass(e.call(this,t,this.className))})}if(o){t=(e||"").match(E)||[]
for(;l<u;l++){n=this[l]
i=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(et," "):" ")
if(i){s=0
while(r=t[s++]){if(i.indexOf(" "+r+" ")<0){i+=r+" "}}a=d.trim(i)
if(n.className!==a){n.className=a}}}}return this},removeClass:function(e){var t,n,i,r,s,a,o=arguments.length===0||typeof e==="string"&&e,l=0,u=this.length
if(d.isFunction(e)){return this.each(function(t){d(this).removeClass(e.call(this,t,this.className))})}if(o){t=(e||"").match(E)||[]
for(;l<u;l++){n=this[l]
i=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(et," "):"")
if(i){s=0
while(r=t[s++]){while(i.indexOf(" "+r+" ")>=0){i=i.replace(" "+r+" "," ")}}a=e?d.trim(i):""
if(n.className!==a){n.className=a}}}}return this},toggleClass:function(e,t){var n=typeof e
if(typeof t==="boolean"&&n==="string"){return t?this.addClass(e):this.removeClass(e)}if(d.isFunction(e)){return this.each(function(n){d(this).toggleClass(e.call(this,n,this.className,t),t)})}return this.each(function(){if(n==="string"){var t,i=0,r=d(this),s=e.match(E)||[]
while(t=s[i++]){if(r.hasClass(t)){r.removeClass(t)}else{r.addClass(t)}}}else if(n===B||n==="boolean"){if(this.className){N.set(this,"__className__",this.className)}this.className=this.className||e===false?"":N.get(this,"__className__")||""}})},hasClass:function(e){var t=" "+e+" ",n=0,i=this.length
for(;n<i;n++){if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(et," ").indexOf(t)>=0){return true}}return false}})
var tt=/\r/g
d.fn.extend({val:function(e){var t,n,i,r=this[0]
if(!arguments.length){if(r){t=d.valHooks[r.type]||d.valHooks[r.nodeName.toLowerCase()]
if(t&&"get"in t&&(n=t.get(r,"value"))!==undefined){return n}n=r.value
return typeof n==="string"?n.replace(tt,""):n==null?"":n}return}i=d.isFunction(e)
return this.each(function(n){var r
if(this.nodeType!==1){return}if(i){r=e.call(this,n,d(this).val())}else{r=e}if(r==null){r=""}else if(typeof r==="number"){r+=""}else if(d.isArray(r)){r=d.map(r,function(e){return e==null?"":e+""})}t=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()]
if(!t||!("set"in t)||t.set(this,r,"value")===undefined){this.value=r}})}})
d.extend({valHooks:{option:{get:function(e){var t=d.find.attr(e,"value")
return t!=null?t:d.trim(d.text(e))}},select:{get:function(e){var t,n,i=e.options,r=e.selectedIndex,s=e.type==="select-one"||r<0,a=s?null:[],o=s?r+1:i.length,l=r<0?o:s?r:0
for(;l<o;l++){n=i[l]
if((n.selected||l===r)&&(f.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!d.nodeName(n.parentNode,"optgroup"))){t=d(n).val()
if(s){return t}a.push(t)}}return a},set:function(e,t){var n,i,r=e.options,s=d.makeArray(t),a=r.length
while(a--){i=r[a]
if(i.selected=d.inArray(i.value,s)>=0){n=true}}if(!n){e.selectedIndex=-1}return s}}}})
d.each(["radio","checkbox"],function(){d.valHooks[this]={set:function(e,t){if(d.isArray(t)){return e.checked=d.inArray(d(e).val(),t)>=0}}}
if(!f.checkOn){d.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value}}})
d.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(e,t){d.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}})
d.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)}})
var nt=d.now()
var it=/\?/
d.parseJSON=function(e){return JSON.parse(e+"")}
d.parseXML=function(e){var t,n
if(!e||typeof e!=="string"){return null}try{n=new DOMParser
t=n.parseFromString(e,"text/xml")}catch(e){t=undefined}if(!t||t.getElementsByTagName("parsererror").length){d.error("Invalid XML: "+e)}return t}
var rt=/#.*$/,st=/([?&])_=[^&]*/,at=/^(.*?):[ \t]*([^\r\n]*)$/gm,ot=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,lt=/^(?:GET|HEAD)$/,ut=/^\/\//,ft=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,ct={},ht={},dt="*/".concat("*"),pt=e.location.href,mt=ft.exec(pt.toLowerCase())||[]
function vt(e){return function(t,n){if(typeof t!=="string"){n=t
t="*"}var i,r=0,s=t.toLowerCase().match(E)||[]
if(d.isFunction(n)){while(i=s[r++]){if(i[0]==="+"){i=i.slice(1)||"*";(e[i]=e[i]||[]).unshift(n)}else{(e[i]=e[i]||[]).push(n)}}}}}function gt(e,t,n,i){var r={},s=e===ht
function a(o){var l
r[o]=true
d.each(e[o]||[],function(e,o){var u=o(t,n,i)
if(typeof u==="string"&&!s&&!r[u]){t.dataTypes.unshift(u)
a(u)
return false}else if(s){return!(l=u)}})
return l}return a(t.dataTypes[0])||!r["*"]&&a("*")}function _t(e,t){var n,i,r=d.ajaxSettings.flatOptions||{}
for(n in t){if(t[n]!==undefined){(r[n]?e:i||(i={}))[n]=t[n]}}if(i){d.extend(true,e,i)}return e}function yt(e,t,n){var i,r,s,a,o=e.contents,l=e.dataTypes
while(l[0]==="*"){l.shift()
if(i===undefined){i=e.mimeType||t.getResponseHeader("Content-Type")}}if(i){for(r in o){if(o[r]&&o[r].test(i)){l.unshift(r)
break}}}if(l[0]in n){s=l[0]}else{for(r in n){if(!l[0]||e.converters[r+" "+l[0]]){s=r
break}if(!a){a=r}}s=s||a}if(s){if(s!==l[0]){l.unshift(s)}return n[s]}}function bt(e,t,n,i){var r,s,a,o,l,u={},f=e.dataTypes.slice()
if(f[1]){for(a in e.converters){u[a.toLowerCase()]=e.converters[a]}}s=f.shift()
while(s){if(e.responseFields[s]){n[e.responseFields[s]]=t}if(!l&&i&&e.dataFilter){t=e.dataFilter(t,e.dataType)}l=s
s=f.shift()
if(s){if(s==="*"){s=l}else if(l!=="*"&&l!==s){a=u[l+" "+s]||u["* "+s]
if(!a){for(r in u){o=r.split(" ")
if(o[1]===s){a=u[l+" "+o[0]]||u["* "+o[0]]
if(a){if(a===true){a=u[r]}else if(u[r]!==true){s=o[0]
f.unshift(o[1])}break}}}}if(a!==true){if(a&&e["throws"]){t=a(t)}else{try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+s}}}}}}}return{state:"success",data:t}}d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:pt,type:"GET",isLocal:ot.test(mt[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":dt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":d.parseJSON,"text xml":d.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(e,t){return t?_t(_t(e,d.ajaxSettings),t):_t(d.ajaxSettings,e)},ajaxPrefilter:vt(ct),ajaxTransport:vt(ht),ajax:function(e,t){if(typeof e==="object"){t=e
e=undefined}t=t||{}
var n,i,r,s,a,o,l,u,f=d.ajaxSetup({},t),c=f.context||f,h=f.context&&(c.nodeType||c.jquery)?d(c):d.event,p=d.Deferred(),m=d.Callbacks("once memory"),v=f.statusCode||{},g={},_={},y=0,b="canceled",w={readyState:0,getResponseHeader:function(e){var t
if(y===2){if(!s){s={}
while(t=at.exec(r)){s[t[1].toLowerCase()]=t[2]}}t=s[e.toLowerCase()]}return t==null?null:t},getAllResponseHeaders:function(){return y===2?r:null},setRequestHeader:function(e,t){var n=e.toLowerCase()
if(!y){e=_[n]=_[n]||e
g[e]=t}return this},overrideMimeType:function(e){if(!y){f.mimeType=e}return this},statusCode:function(e){var t
if(e){if(y<2){for(t in e){v[t]=[v[t],e[t]]}}else{w.always(e[w.status])}}return this},abort:function(e){var t=e||b
if(n){n.abort(t)}x(0,t)
return this}}
p.promise(w).complete=m.add
w.success=w.done
w.error=w.fail
f.url=((e||f.url||pt)+"").replace(rt,"").replace(ut,mt[1]+"//")
f.type=t.method||t.type||f.method||f.type
f.dataTypes=d.trim(f.dataType||"*").toLowerCase().match(E)||[""]
if(f.crossDomain==null){o=ft.exec(f.url.toLowerCase())
f.crossDomain=!!(o&&(o[1]!==mt[1]||o[2]!==mt[2]||(o[3]||(o[1]==="http:"?"80":"443"))!==(mt[3]||(mt[1]==="http:"?"80":"443"))))}if(f.data&&f.processData&&typeof f.data!=="string"){f.data=d.param(f.data,f.traditional)}gt(ct,f,t,w)
if(y===2){return w}l=d.event&&f.global
if(l&&d.active++===0){d.event.trigger("ajaxStart")}f.type=f.type.toUpperCase()
f.hasContent=!lt.test(f.type)
i=f.url
if(!f.hasContent){if(f.data){i=f.url+=(it.test(i)?"&":"?")+f.data
delete f.data}if(f.cache===false){f.url=st.test(i)?i.replace(st,"$1_="+nt++):i+(it.test(i)?"&":"?")+"_="+nt++}}if(f.ifModified){if(d.lastModified[i]){w.setRequestHeader("If-Modified-Since",d.lastModified[i])}if(d.etag[i]){w.setRequestHeader("If-None-Match",d.etag[i])}}if(f.data&&f.hasContent&&f.contentType!==false||t.contentType){w.setRequestHeader("Content-Type",f.contentType)}w.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+(f.dataTypes[0]!=="*"?", "+dt+"; q=0.01":""):f.accepts["*"])
for(u in f.headers){w.setRequestHeader(u,f.headers[u])}if(f.beforeSend&&(f.beforeSend.call(c,w,f)===false||y===2)){return w.abort()}b="abort"
for(u in{success:1,error:1,complete:1}){w[u](f[u])}n=gt(ht,f,t,w)
if(!n){x(-1,"No Transport")}else{w.readyState=1
if(l){h.trigger("ajaxSend",[w,f])}if(f.async&&f.timeout>0){a=setTimeout(function(){w.abort("timeout")},f.timeout)}try{y=1
n.send(g,x)}catch(e){if(y<2){x(-1,e)}else{throw e}}}function x(e,t,s,o){var u,g,_,b,x,k=t
if(y===2){return}y=2
if(a){clearTimeout(a)}n=undefined
r=o||""
w.readyState=e>0?4:0
u=e>=200&&e<300||e===304
if(s){b=yt(f,w,s)}b=bt(f,b,w,u)
if(u){if(f.ifModified){x=w.getResponseHeader("Last-Modified")
if(x){d.lastModified[i]=x}x=w.getResponseHeader("etag")
if(x){d.etag[i]=x}}if(e===204||f.type==="HEAD"){k="nocontent"}else if(e===304){k="notmodified"}else{k=b.state
g=b.data
_=b.error
u=!_}}else{_=k
if(e||!k){k="error"
if(e<0){e=0}}}w.status=e
w.statusText=(t||k)+""
if(u){p.resolveWith(c,[g,k,w])}else{p.rejectWith(c,[w,k,_])}w.statusCode(v)
v=undefined
if(l){h.trigger(u?"ajaxSuccess":"ajaxError",[w,f,u?g:_])}m.fireWith(c,[w,k])
if(l){h.trigger("ajaxComplete",[w,f])
if(!--d.active){d.event.trigger("ajaxStop")}}}return w},getJSON:function(e,t,n){return d.get(e,t,n,"json")},getScript:function(e,t){return d.get(e,undefined,t,"script")}})
d.each(["get","post"],function(e,t){d[t]=function(e,n,i,r){if(d.isFunction(n)){r=r||i
i=n
n=undefined}return d.ajax({url:e,type:t,dataType:r,data:n,success:i})}})
d._evalUrl=function(e){return d.ajax({url:e,type:"GET",dataType:"script",async:false,global:false,throws:true})}
d.fn.extend({wrapAll:function(e){var t
if(d.isFunction(e)){return this.each(function(t){d(this).wrapAll(e.call(this,t))})}if(this[0]){t=d(e,this[0].ownerDocument).eq(0).clone(true)
if(this[0].parentNode){t.insertBefore(this[0])}t.map(function(){var e=this
while(e.firstElementChild){e=e.firstElementChild}return e}).append(this)}return this},wrapInner:function(e){if(d.isFunction(e)){return this.each(function(t){d(this).wrapInner(e.call(this,t))})}return this.each(function(){var t=d(this),n=t.contents()
if(n.length){n.wrapAll(e)}else{t.append(e)}})},wrap:function(e){var t=d.isFunction(e)
return this.each(function(n){d(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){if(!d.nodeName(this,"body")){d(this).replaceWith(this.childNodes)}}).end()}})
d.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0}
d.expr.filters.visible=function(e){return!d.expr.filters.hidden(e)}
var wt=/%20/g,xt=/\[\]$/,kt=/\r?\n/g,Mt=/^(?:submit|button|image|reset|file)$/i,Tt=/^(?:input|select|textarea|keygen)/i
function Lt(e,t,n,i){var r
if(d.isArray(t)){d.each(t,function(t,r){if(n||xt.test(e)){i(e,r)}else{Lt(e+"["+(typeof r==="object"?t:"")+"]",r,n,i)}})}else if(!n&&d.type(t)==="object"){for(r in t){Lt(e+"["+r+"]",t[r],n,i)}}else{i(e,t)}}d.param=function(e,t){var n,i=[],r=function(e,t){t=d.isFunction(t)?t():t==null?"":t
i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)}
if(t===undefined){t=d.ajaxSettings&&d.ajaxSettings.traditional}if(d.isArray(e)||e.jquery&&!d.isPlainObject(e)){d.each(e,function(){r(this.name,this.value)})}else{for(n in e){Lt(n,e[n],t,r)}}return i.join("&").replace(wt,"+")}
d.fn.extend({serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=d.prop(this,"elements")
return e?d.makeArray(e):this}).filter(function(){var e=this.type
return this.name&&!d(this).is(":disabled")&&Tt.test(this.nodeName)&&!Mt.test(e)&&(this.checked||!q.test(e))}).map(function(e,t){var n=d(this).val()
return n==null?null:d.isArray(n)?d.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}})
d.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}}
var St=0,Dt={},Ct={0:200,1223:204},Et=d.ajaxSettings.xhr()
if(e.attachEvent){e.attachEvent("onunload",function(){for(var e in Dt){Dt[e]()}})}f.cors=!!Et&&"withCredentials"in Et
f.ajax=Et=!!Et
d.ajaxTransport(function(e){var t
if(f.cors||Et&&!e.crossDomain){return{send:function(n,i){var r,s=e.xhr(),a=++St
s.open(e.type,e.url,e.async,e.username,e.password)
if(e.xhrFields){for(r in e.xhrFields){s[r]=e.xhrFields[r]}}if(e.mimeType&&s.overrideMimeType){s.overrideMimeType(e.mimeType)}if(!e.crossDomain&&!n["X-Requested-With"]){n["X-Requested-With"]="XMLHttpRequest"}for(r in n){s.setRequestHeader(r,n[r])}t=function(e){return function(){if(t){delete Dt[a]
t=s.onload=s.onerror=null
if(e==="abort"){s.abort()}else if(e==="error"){i(s.status,s.statusText)}else{i(Ct[s.status]||s.status,s.statusText,typeof s.responseText==="string"?{text:s.responseText}:undefined,s.getAllResponseHeaders())}}}}
s.onload=t()
s.onerror=t("error")
t=Dt[a]=t("abort")
try{s.send(e.hasContent&&e.data||null)}catch(e){if(t){throw e}}},abort:function(){if(t){t()}}}}})
d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){d.globalEval(e)
return e}}})
d.ajaxPrefilter("script",function(e){if(e.cache===undefined){e.cache=false}if(e.crossDomain){e.type="GET"}})
d.ajaxTransport("script",function(e){if(e.crossDomain){var t,n
return{send:function(i,r){t=d("<script>").prop({async:true,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove()
n=null
if(e){r(e.type==="error"?404:200,e.type)}})
c.head.appendChild(t[0])},abort:function(){if(n){n()}}}}})
var At=[],Yt=/(=)\?(?=&|$)|\?\?/
d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=At.pop()||d.expando+"_"+nt++
this[e]=true
return e}})
d.ajaxPrefilter("json jsonp",function(t,n,i){var r,s,a,o=t.jsonp!==false&&(Yt.test(t.url)?"url":typeof t.data==="string"&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(t.data)&&"data")
if(o||t.dataTypes[0]==="jsonp"){r=t.jsonpCallback=d.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback
if(o){t[o]=t[o].replace(Yt,"$1"+r)}else if(t.jsonp!==false){t.url+=(it.test(t.url)?"&":"?")+t.jsonp+"="+r}t.converters["script json"]=function(){if(!a){d.error(r+" was not called")}return a[0]}
t.dataTypes[0]="json"
s=e[r]
e[r]=function(){a=arguments}
i.always(function(){e[r]=s
if(t[r]){t.jsonpCallback=n.jsonpCallback
At.push(r)}if(a&&d.isFunction(s)){s(a[0])}a=s=undefined})
return"script"}})
d.parseHTML=function(e,t,n){if(!e||typeof e!=="string"){return null}if(typeof t==="boolean"){n=t
t=false}t=t||c
var i=w.exec(e),r=!n&&[]
if(i){return[t.createElement(i[1])]}i=d.buildFragment([e],t,r)
if(r&&r.length){d(r).remove()}return d.merge([],i.childNodes)}
var jt=d.fn.load
d.fn.load=function(e,t,n){if(typeof e!=="string"&&jt){return jt.apply(this,arguments)}var i,r,s,a=this,o=e.indexOf(" ")
if(o>=0){i=d.trim(e.slice(o))
e=e.slice(0,o)}if(d.isFunction(t)){n=t
t=undefined}else if(t&&typeof t==="object"){r="POST"}if(a.length>0){d.ajax({url:e,type:r,dataType:"html",data:t}).done(function(e){s=arguments
a.html(i?d("<div>").append(d.parseHTML(e)).find(i):e)}).complete(n&&function(e,t){a.each(n,s||[e.responseText,t,e])})}return this}
d.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){d.fn[t]=function(e){return this.on(t,e)}})
d.expr.filters.animated=function(e){return d.grep(d.timers,function(t){return e===t.elem}).length}
var Ot=e.document.documentElement
function It(e){return d.isWindow(e)?e:e.nodeType===9&&e.defaultView}d.offset={setOffset:function(e,t,n){var i,r,s,a,o,l,u,f=d.css(e,"position"),c=d(e),h={}
if(f==="static"){e.style.position="relative"}o=c.offset()
s=d.css(e,"top")
l=d.css(e,"left")
u=(f==="absolute"||f==="fixed")&&(s+l).indexOf("auto")>-1
if(u){i=c.position()
a=i.top
r=i.left}else{a=parseFloat(s)||0
r=parseFloat(l)||0}if(d.isFunction(t)){t=t.call(e,n,o)}if(t.top!=null){h.top=t.top-o.top+a}if(t.left!=null){h.left=t.left-o.left+r}if("using"in t){t.using.call(e,h)}else{c.css(h)}}}
d.fn.extend({offset:function(e){if(arguments.length){return e===undefined?this:this.each(function(t){d.offset.setOffset(this,e,t)})}var t,n,i=this[0],r={top:0,left:0},s=i&&i.ownerDocument
if(!s){return}t=s.documentElement
if(!d.contains(t,i)){return r}if(typeof i.getBoundingClientRect!==B){r=i.getBoundingClientRect()}n=It(s)
return{top:r.top+n.pageYOffset-t.clientTop,left:r.left+n.pageXOffset-t.clientLeft}},position:function(){if(!this[0]){return}var e,t,n=this[0],i={top:0,left:0}
if(d.css(n,"position")==="fixed"){t=n.getBoundingClientRect()}else{e=this.offsetParent()
t=this.offset()
if(!d.nodeName(e[0],"html")){i=e.offset()}i.top+=d.css(e[0],"borderTopWidth",true)
i.left+=d.css(e[0],"borderLeftWidth",true)}return{top:t.top-i.top-d.css(n,"marginTop",true),left:t.left-i.left-d.css(n,"marginLeft",true)}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||Ot
while(e&&(!d.nodeName(e,"html")&&d.css(e,"position")==="static")){e=e.offsetParent}return e||Ot})}})
d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var i="pageYOffset"===n
d.fn[t]=function(r){return I(this,function(t,r,s){var a=It(t)
if(s===undefined){return a?a[n]:t[r]}if(a){a.scrollTo(!i?s:e.pageXOffset,i?s:e.pageYOffset)}else{t[r]=s}},t,r,arguments.length,null)}})
d.each(["top","left"],function(e,t){d.cssHooks[t]=Me(f.pixelPosition,function(e,n){if(n){n=ke(e,t)
return we.test(n)?d(e).position()[t]+"px":n}})})
d.each({Height:"height",Width:"width"},function(e,t){d.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){d.fn[i]=function(i,r){var s=arguments.length&&(n||typeof i!=="boolean"),a=n||(i===true||r===true?"margin":"border")
return I(this,function(t,n,i){var r
if(d.isWindow(t)){return t.document.documentElement["client"+e]}if(t.nodeType===9){r=t.documentElement
return Math.max(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])}return i===undefined?d.css(t,n,a):d.style(t,n,i,a)},t,s?i:undefined,s,null)}})})
d.fn.size=function(){return this.length}
d.fn.andSelf=d.fn.addBack
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return d})}var Pt=e.jQuery,Nt=e.$
d.noConflict=function(t){if(e.$===d){e.$=Nt}if(t&&e.jQuery===d){e.jQuery=Pt}return d}
if(typeof t===B){e.jQuery=e.$=d}return d});(function(){var e
var t=[],n=[]
var i=0
var r=+new Date+""
var s=75
var a=40
var o=" \t\v\f \ufeff"+"\n\r\u2028\u2029"+" ᠎             　"
var l=/\b__p \+= '';/g,u=/\b(__p \+=) '' \+/g,f=/(__e\(.*?\)|\b__t\)) \+\n'';/g
var c=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g
var h=/\w*$/
var d=/^\s*function[ \n\r\t]+\w/
var p=/<%=([\s\S]+?)%>/g
var m=RegExp("^["+o+"]*0+(?=.$)")
var v=/($^)/
var g=/\bthis\b/
var _=/['\n\r\t\u2028\u2029\\]/g
var y=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"]
var b=0
var w="[object Arguments]",x="[object Array]",k="[object Boolean]",M="[object Date]",T="[object Function]",L="[object Number]",S="[object Object]",D="[object RegExp]",C="[object String]"
var E={}
E[T]=false
E[w]=E[x]=E[k]=E[M]=E[L]=E[S]=E[D]=E[C]=true
var A={leading:false,maxWait:0,trailing:false}
var Y={configurable:false,enumerable:false,value:null,writable:false}
var j={boolean:false,function:true,object:true,number:false,string:false,undefined:false}
var O={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"}
var I=j[typeof window]&&window||this
var P=j[typeof exports]&&exports&&!exports.nodeType&&exports
var N=j[typeof module]&&module&&!module.nodeType&&module
var R=N&&N.exports===P&&P
var F=j[typeof global]&&global
if(F&&(F.global===F||F.window===F)){I=F}function H(e,t,n){var i=(n||0)-1,r=e?e.length:0
while(++i<r){if(e[i]===t){return i}}return-1}function $(e,t){var n=typeof t
e=e.cache
if(n=="boolean"||t==null){return e[t]?0:-1}if(n!="number"&&n!="string"){n="object"}var i=n=="number"?t:r+t
e=(e=e[n])&&e[i]
return n=="object"?e&&H(e,t)>-1?0:-1:e?0:-1}function z(e){var t=this.cache,n=typeof e
if(n=="boolean"||e==null){t[e]=true}else{if(n!="number"&&n!="string"){n="object"}var i=n=="number"?e:r+e,s=t[n]||(t[n]={})
if(n=="object"){(s[i]||(s[i]=[])).push(e)}else{s[i]=true}}}function W(e){return e.charCodeAt(0)}function U(e,t){var n=e.criteria,i=t.criteria,r=-1,s=n.length
while(++r<s){var a=n[r],o=i[r]
if(a!==o){if(a>o||typeof a=="undefined"){return 1}if(a<o||typeof o=="undefined"){return-1}}}return e.index-t.index}function q(e){var t=-1,n=e.length,i=e[0],r=e[n/2|0],s=e[n-1]
if(i&&typeof i=="object"&&r&&typeof r=="object"&&s&&typeof s=="object"){return false}var a=J()
a["false"]=a["null"]=a["true"]=a["undefined"]=false
var o=J()
o.array=e
o.cache=a
o.push=z
while(++t<n){o.push(e[t])}return o}function B(e){return"\\"+O[e]}function V(){return t.pop()||[]}function J(){return n.pop()||{array:null,cache:null,criteria:null,false:false,index:0,null:false,number:null,object:null,push:null,string:null,true:false,undefined:false,value:null}}function X(e){e.length=0
if(t.length<a){t.push(e)}}function K(e){var t=e.cache
if(t){K(t)}e.array=e.cache=e.criteria=e.object=e.number=e.string=e.value=null
if(n.length<a){n.push(e)}}function Q(e,t,n){t||(t=0)
if(typeof n=="undefined"){n=e?e.length:0}var i=-1,r=n-t||0,s=Array(r<0?0:r)
while(++i<r){s[i]=e[t+i]}return s}function G(t){t=t?Z.defaults(I.Object(),t,Z.pick(I,y)):I
var n=t.Array,a=t.Boolean,O=t.Date,P=t.Function,N=t.Math,R=t.Number,F=t.Object,z=t.RegExp,ee=t.String,te=t.TypeError
var ne=[]
var ie=F.prototype
var re=t._
var se=ie.toString
var ae=z("^"+ee(se).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$")
var oe=N.ceil,le=t.clearTimeout,ue=N.floor,fe=P.prototype.toString,ce=Be(ce=F.getPrototypeOf)&&ce,he=ie.hasOwnProperty,de=ne.push,pe=t.setTimeout,me=ne.splice,ve=ne.unshift
var ge=function(){try{var e={},t=Be(t=F.defineProperty)&&t,n=t(e,e,e)&&t}catch(e){}return n}()
var _e=Be(_e=F.create)&&_e,ye=Be(ye=n.isArray)&&ye,be=t.isFinite,we=t.isNaN,xe=Be(xe=F.keys)&&xe,ke=N.max,Me=N.min,Te=t.parseInt,Le=N.random
var Se={}
Se[x]=n
Se[k]=a
Se[M]=O
Se[T]=P
Se[S]=F
Se[L]=R
Se[D]=z
Se[C]=ee
function De(e){return e&&typeof e=="object"&&!Qe(e)&&he.call(e,"__wrapped__")?e:new Ce(e)}function Ce(e,t){this.__chain__=!!t
this.__wrapped__=e}Ce.prototype=De.prototype
var Ee=De.support={}
Ee.funcDecomp=!Be(t.WinRTError)&&g.test(G)
Ee.funcNames=typeof P.name=="string"
De.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:p,variable:"",imports:{_:De}}
function Ae(e){var t=e[0],n=e[2],i=e[4]
function r(){if(n){var e=Q(n)
de.apply(e,arguments)}if(this instanceof r){var s=je(t.prototype),a=t.apply(s,e||arguments)
return Tt(a)?a:s}return t.apply(i,e||arguments)}Ve(r,e)
return r}function Ye(e,t,n,i,r){if(n){var s=n(e)
if(typeof s!="undefined"){return s}}var a=Tt(e)
if(a){var o=se.call(e)
if(!E[o]){return e}var l=Se[o]
switch(o){case k:case M:return new l(+e)
case L:case C:return new l(e)
case D:s=l(e.source,h.exec(e))
s.lastIndex=e.lastIndex
return s}}else{return e}var u=Qe(e)
if(t){var f=!i
i||(i=V())
r||(r=V())
var c=i.length
while(c--){if(i[c]==e){return r[c]}}s=u?l(e.length):{}}else{s=u?Q(e):rt({},e)}if(u){if(he.call(e,"index")){s.index=e.index}if(he.call(e,"input")){s.input=e.input}}if(!t){return s}i.push(e)
r.push(s);(u?Vt:dt)(e,function(e,a){s[a]=Ye(e,t,n,i,r)})
if(f){X(i)
X(r)}return s}function je(e,t){return Tt(e)?_e(e):{}}if(!_e){je=function(){function e(){}return function(n){if(Tt(n)){e.prototype=n
var i=new e
e.prototype=null}return i||t.Object()}}()}function Oe(e,t,n){if(typeof e!="function"){return Zn}if(typeof t=="undefined"||!("prototype"in e)){return e}var i=e.__bindData__
if(typeof i=="undefined"){if(Ee.funcNames){i=!e.name}i=i||!Ee.funcDecomp
if(!i){var r=fe.call(e)
if(!Ee.funcNames){i=!d.test(r)}if(!i){i=g.test(r)
Ve(e,i)}}}if(i===false||i!==true&&i[1]&1){return e}switch(n){case 1:return function(n){return e.call(t,n)}
case 2:return function(n,i){return e.call(t,n,i)}
case 3:return function(n,i,r){return e.call(t,n,i,r)}
case 4:return function(n,i,r,s){return e.call(t,n,i,r,s)}}return Pn(e,t)}function Ie(e){var t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5]
var o=n&1,l=n&2,u=n&4,f=n&8,c=t
function h(){var e=o?s:this
if(i){var d=Q(i)
de.apply(d,arguments)}if(r||u){d||(d=Q(arguments))
if(r){de.apply(d,r)}if(u&&d.length<a){n|=16&~32
return Ie([t,f?n:n&~3,d,null,s,a])}}d||(d=arguments)
if(l){t=e[c]}if(this instanceof h){e=je(t.prototype)
var p=t.apply(e,d)
return Tt(p)?p:e}return t.apply(e,d)}Ve(h,e)
return h}function Pe(e,t){var n=-1,i=qe(),r=e?e.length:0,a=r>=s&&i===H,o=[]
if(a){var l=q(t)
if(l){i=$
t=l}else{a=false}}while(++n<r){var u=e[n]
if(i(t,u)<0){o.push(u)}}if(a){K(t)}return o}function Ne(e,t,n,i){var r=(i||0)-1,s=e?e.length:0,a=[]
while(++r<s){var o=e[r]
if(o&&typeof o=="object"&&typeof o.length=="number"&&(Qe(o)||Ke(o))){if(!t){o=Ne(o,t,n)}var l=-1,u=o.length,f=a.length
a.length+=u
while(++l<u){a[f++]=o[l]}}else if(!n){a.push(o)}}return a}function Re(e,t,n,i,r,s){if(n){var a=n(e,t)
if(typeof a!="undefined"){return!!a}}if(e===t){return e!==0||1/e==1/t}var o=typeof e,l=typeof t
if(e===e&&!(e&&j[o])&&!(t&&j[l])){return false}if(e==null||t==null){return e===t}var u=se.call(e),f=se.call(t)
if(u==w){u=S}if(f==w){f=S}if(u!=f){return false}switch(u){case k:case M:return+e==+t
case L:return e!=+e?t!=+t:e==0?1/e==1/t:e==+t
case D:case C:return e==ee(t)}var c=u==x
if(!c){var h=he.call(e,"__wrapped__"),d=he.call(t,"__wrapped__")
if(h||d){return Re(h?e.__wrapped__:e,d?t.__wrapped__:t,n,i,r,s)}if(u!=S){return false}var p=e.constructor,m=t.constructor
if(p!=m&&!(Mt(p)&&p instanceof p&&Mt(m)&&m instanceof m)&&("constructor"in e&&"constructor"in t)){return false}}var v=!r
r||(r=V())
s||(s=V())
var g=r.length
while(g--){if(r[g]==e){return s[g]==t}}var _=0
a=true
r.push(e)
s.push(t)
if(c){g=e.length
_=t.length
a=_==g
if(a||i){while(_--){var y=g,b=t[_]
if(i){while(y--){if(a=Re(e[y],b,n,i,r,s)){break}}}else if(!(a=Re(e[_],b,n,i,r,s))){break}}}}else{ct(t,function(t,o,l){if(he.call(l,o)){_++
return a=he.call(e,o)&&Re(e[o],t,n,i,r,s)}})
if(a&&!i){ct(e,function(e,t,n){if(he.call(n,t)){return a=--_>-1}})}}r.pop()
s.pop()
if(v){X(r)
X(s)}return a}function Fe(e,t,n,i,r){(Qe(t)?Vt:dt)(t,function(t,s){var a,o,l=t,u=e[s]
if(t&&((o=Qe(t))||Ct(t))){var f=i.length
while(f--){if(a=i[f]==t){u=r[f]
break}}if(!a){var c
if(n){l=n(u,t)
if(c=typeof l!="undefined"){u=l}}if(!c){u=o?Qe(u)?u:[]:Ct(u)?u:{}}i.push(t)
r.push(u)
if(!c){Fe(u,t,n,i,r)}}}else{if(n){l=n(u,t)
if(typeof l=="undefined"){l=t}}if(typeof l!="undefined"){u=l}}e[s]=u})}function He(e,t){return e+ue(Le()*(t-e+1))}function $e(e,t,n){var i=-1,r=qe(),a=e?e.length:0,o=[]
var l=!t&&a>=s&&r===H,u=n||l?V():o
if(l){var f=q(u)
r=$
u=f}while(++i<a){var c=e[i],h=n?n(c,i,e):c
if(t?!i||u[u.length-1]!==h:r(u,h)<0){if(n||l){u.push(h)}o.push(c)}}if(l){X(u.array)
K(u)}else if(n){X(u)}return o}function ze(e){return function(t,n,i){var r={}
n=De.createCallback(n,i,3)
var s=-1,a=t?t.length:0
if(typeof a=="number"){while(++s<a){var o=t[s]
e(r,o,n(o,s,t),t)}}else{dt(t,function(t,i,s){e(r,t,n(t,i,s),s)})}return r}}function We(e,t,n,i,r,s){var a=t&1,o=t&2,l=t&4,u=t&8,f=t&16,c=t&32
if(!o&&!Mt(e)){throw new te}if(f&&!n.length){t&=~16
f=n=false}if(c&&!i.length){t&=~32
c=i=false}var h=e&&e.__bindData__
if(h&&h!==true){h=Q(h)
if(h[2]){h[2]=Q(h[2])}if(h[3]){h[3]=Q(h[3])}if(a&&!(h[1]&1)){h[4]=r}if(!a&&h[1]&1){t|=8}if(l&&!(h[1]&4)){h[5]=s}if(f){de.apply(h[2]||(h[2]=[]),n)}if(c){ve.apply(h[3]||(h[3]=[]),i)}h[1]|=t
return We.apply(null,h)}var d=t==1||t===17?Ae:Ie
return d([e,t,n,i,r,s])}function Ue(e){return et[e]}function qe(){var e=(e=De.indexOf)===yn?H:e
return e}function Be(e){return typeof e=="function"&&ae.test(e)}var Ve=!ge?ni:function(e,t){Y.value=t
ge(e,"__bindData__",Y)
Y.value=null}
function Je(e){var t,n
if(!(e&&se.call(e)==S)||(t=e.constructor,Mt(t)&&!(t instanceof t))){return false}ct(e,function(e,t){n=t})
return typeof n=="undefined"||he.call(e,n)}function Xe(e){return tt[e]}function Ke(e){return e&&typeof e=="object"&&typeof e.length=="number"&&se.call(e)==w||false}var Qe=ye||function(e){return e&&typeof e=="object"&&typeof e.length=="number"&&se.call(e)==x||false}
var Ge=function(e){var t,n=e,i=[]
if(!n)return i
if(!j[typeof e])return i
for(t in n){if(he.call(n,t)){i.push(t)}}return i}
var Ze=!xe?Ge:function(e){if(!Tt(e)){return[]}return xe(e)}
var et={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}
var tt=gt(et)
var nt=z("("+Ze(tt).join("|")+")","g"),it=z("["+Ze(et).join("")+"]","g")
var rt=function(e,t,n){var i,r=e,s=r
if(!r)return s
var a=arguments,o=0,l=typeof n=="number"?2:a.length
if(l>3&&typeof a[l-2]=="function"){var u=Oe(a[--l-1],a[l--],2)}else if(l>2&&typeof a[l-1]=="function"){u=a[--l]}while(++o<l){r=a[o]
if(r&&j[typeof r]){var f=-1,c=j[typeof r]&&Ze(r),h=c?c.length:0
while(++f<h){i=c[f]
s[i]=u?u(s[i],r[i]):r[i]}}}return s}
function st(e,t,n,i){if(typeof t!="boolean"&&t!=null){i=n
n=t
t=false}return Ye(e,t,typeof n=="function"&&Oe(n,i,1))}function at(e,t,n){return Ye(e,true,typeof t=="function"&&Oe(t,n,1))}function ot(e,t){var n=je(e)
return t?rt(n,t):n}var lt=function(e,t,n){var i,r=e,s=r
if(!r)return s
var a=arguments,o=0,l=typeof n=="number"?2:a.length
while(++o<l){r=a[o]
if(r&&j[typeof r]){var u=-1,f=j[typeof r]&&Ze(r),c=f?f.length:0
while(++u<c){i=f[u]
if(typeof s[i]=="undefined")s[i]=r[i]}}}return s}
function ut(e,t,n){var i
t=De.createCallback(t,n,3)
dt(e,function(e,n,r){if(t(e,n,r)){i=n
return false}})
return i}function ft(e,t,n){var i
t=De.createCallback(t,n,3)
pt(e,function(e,n,r){if(t(e,n,r)){i=n
return false}})
return i}var ct=function(e,t,n){var i,r=e,s=r
if(!r)return s
if(!j[typeof r])return s
t=t&&typeof n=="undefined"?t:Oe(t,n,3)
for(i in r){if(t(r[i],i,e)===false)return s}return s}
function ht(e,t,n){var i=[]
ct(e,function(e,t){i.push(t,e)})
var r=i.length
t=Oe(t,n,3)
while(r--){if(t(i[r--],i[r],e)===false){break}}return e}var dt=function(e,t,n){var i,r=e,s=r
if(!r)return s
if(!j[typeof r])return s
t=t&&typeof n=="undefined"?t:Oe(t,n,3)
var a=-1,o=j[typeof r]&&Ze(r),l=o?o.length:0
while(++a<l){i=o[a]
if(t(r[i],i,e)===false)return s}return s}
function pt(e,t,n){var i=Ze(e),r=i.length
t=Oe(t,n,3)
while(r--){var s=i[r]
if(t(e[s],s,e)===false){break}}return e}function mt(e){var t=[]
ct(e,function(e,n){if(Mt(e)){t.push(n)}})
return t.sort()}function vt(e,t){return e?he.call(e,t):false}function gt(e){var t=-1,n=Ze(e),i=n.length,r={}
while(++t<i){var s=n[t]
r[e[s]]=s}return r}function _t(e){return e===true||e===false||e&&typeof e=="object"&&se.call(e)==k||false}function yt(e){return e&&typeof e=="object"&&se.call(e)==M||false}function bt(e){return e&&e.nodeType===1||false}function wt(e){var t=true
if(!e){return t}var n=se.call(e),i=e.length
if(n==x||n==C||n==w||n==S&&typeof i=="number"&&Mt(e.splice)){return!i}dt(e,function(){return t=false})
return t}function xt(e,t,n,i){return Re(e,t,typeof n=="function"&&Oe(n,i,2))}function kt(e){return be(e)&&!we(parseFloat(e))}function Mt(e){return typeof e=="function"}function Tt(e){return!!(e&&j[typeof e])}function Lt(e){return Dt(e)&&e!=+e}function St(e){return e===null}function Dt(e){return typeof e=="number"||e&&typeof e=="object"&&se.call(e)==L||false}var Ct=!ce?Je:function(e){if(!(e&&se.call(e)==S)){return false}var t=e.valueOf,n=Be(t)&&(n=ce(t))&&ce(n)
return n?e==n||ce(e)==n:Je(e)}
function Et(e){return e&&typeof e=="object"&&se.call(e)==D||false}function At(e){return typeof e=="string"||e&&typeof e=="object"&&se.call(e)==C||false}function Yt(e){return typeof e=="undefined"}function jt(e,t,n){var i={}
t=De.createCallback(t,n,3)
dt(e,function(e,n,r){i[n]=t(e,n,r)})
return i}function Ot(e){var t=arguments,n=2
if(!Tt(e)){return e}if(typeof t[2]!="number"){n=t.length}if(n>3&&typeof t[n-2]=="function"){var i=Oe(t[--n-1],t[n--],2)}else if(n>2&&typeof t[n-1]=="function"){i=t[--n]}var r=Q(arguments,1,n),s=-1,a=V(),o=V()
while(++s<n){Fe(e,r[s],i,a,o)}X(a)
X(o)
return e}function It(e,t,n){var i={}
if(typeof t!="function"){var r=[]
ct(e,function(e,t){r.push(t)})
r=Pe(r,Ne(arguments,true,false,1))
var s=-1,a=r.length
while(++s<a){var o=r[s]
i[o]=e[o]}}else{t=De.createCallback(t,n,3)
ct(e,function(e,n,r){if(!t(e,n,r)){i[n]=e}})}return i}function Pt(e){var t=-1,i=Ze(e),r=i.length,s=n(r)
while(++t<r){var a=i[t]
s[t]=[a,e[a]]}return s}function Nt(e,t,n){var i={}
if(typeof t!="function"){var r=-1,s=Ne(arguments,true,false,1),a=Tt(e)?s.length:0
while(++r<a){var o=s[r]
if(o in e){i[o]=e[o]}}}else{t=De.createCallback(t,n,3)
ct(e,function(e,n,r){if(t(e,n,r)){i[n]=e}})}return i}function Rt(e,t,n,i){var r=Qe(e)
if(n==null){if(r){n=[]}else{var s=e&&e.constructor,a=s&&s.prototype
n=je(a)}}if(t){t=De.createCallback(t,i,4);(r?Vt:dt)(e,function(e,i,r){return t(n,e,i,r)})}return n}function Ft(e){var t=-1,i=Ze(e),r=i.length,s=n(r)
while(++t<r){s[t]=e[i[t]]}return s}function Ht(e){var t=arguments,i=-1,r=Ne(t,true,false,1),s=t[2]&&t[2][t[1]]===e?1:r.length,a=n(s)
while(++i<s){a[i]=e[r[i]]}return a}function $t(e,t,n){var i=-1,r=qe(),s=e?e.length:0,a=false
n=(n<0?ke(0,s+n):n)||0
if(Qe(e)){a=r(e,t,n)>-1}else if(typeof s=="number"){a=(At(e)?e.indexOf(t,n):r(e,t,n))>-1}else{dt(e,function(e){if(++i>=n){return!(a=e===t)}})}return a}var zt=ze(function(e,t,n){he.call(e,n)?e[n]++:e[n]=1})
function Wt(e,t,n){var i=true
t=De.createCallback(t,n,3)
var r=-1,s=e?e.length:0
if(typeof s=="number"){while(++r<s){if(!(i=!!t(e[r],r,e))){break}}}else{dt(e,function(e,n,r){return i=!!t(e,n,r)})}return i}function Ut(e,t,n){var i=[]
t=De.createCallback(t,n,3)
var r=-1,s=e?e.length:0
if(typeof s=="number"){while(++r<s){var a=e[r]
if(t(a,r,e)){i.push(a)}}}else{dt(e,function(e,n,r){if(t(e,n,r)){i.push(e)}})}return i}function qt(e,t,n){t=De.createCallback(t,n,3)
var i=-1,r=e?e.length:0
if(typeof r=="number"){while(++i<r){var s=e[i]
if(t(s,i,e)){return s}}}else{var a
dt(e,function(e,n,i){if(t(e,n,i)){a=e
return false}})
return a}}function Bt(e,t,n){var i
t=De.createCallback(t,n,3)
Jt(e,function(e,n,r){if(t(e,n,r)){i=e
return false}})
return i}function Vt(e,t,n){var i=-1,r=e?e.length:0
t=t&&typeof n=="undefined"?t:Oe(t,n,3)
if(typeof r=="number"){while(++i<r){if(t(e[i],i,e)===false){break}}}else{dt(e,t)}return e}function Jt(e,t,n){var i=e?e.length:0
t=t&&typeof n=="undefined"?t:Oe(t,n,3)
if(typeof i=="number"){while(i--){if(t(e[i],i,e)===false){break}}}else{var r=Ze(e)
i=r.length
dt(e,function(e,n,s){n=r?r[--i]:--i
return t(s[n],n,s)})}return e}var Xt=ze(function(e,t,n){(he.call(e,n)?e[n]:e[n]=[]).push(t)})
var Kt=ze(function(e,t,n){e[n]=t})
function Qt(e,t){var i=Q(arguments,2),r=-1,s=typeof t=="function",a=e?e.length:0,o=n(typeof a=="number"?a:0)
Vt(e,function(e){o[++r]=(s?t:e[t]).apply(e,i)})
return o}function Gt(e,t,i){var r=-1,s=e?e.length:0
t=De.createCallback(t,i,3)
if(typeof s=="number"){var a=n(s)
while(++r<s){a[r]=t(e[r],r,e)}}else{a=[]
dt(e,function(e,n,i){a[++r]=t(e,n,i)})}return a}function Zt(e,t,n){var i=-Infinity,r=i
if(typeof t!="function"&&n&&n[t]===e){t=null}if(t==null&&Qe(e)){var s=-1,a=e.length
while(++s<a){var o=e[s]
if(o>r){r=o}}}else{t=t==null&&At(e)?W:De.createCallback(t,n,3)
Vt(e,function(e,n,s){var a=t(e,n,s)
if(a>i){i=a
r=e}})}return r}function en(e,t,n){var i=Infinity,r=i
if(typeof t!="function"&&n&&n[t]===e){t=null}if(t==null&&Qe(e)){var s=-1,a=e.length
while(++s<a){var o=e[s]
if(o<r){r=o}}}else{t=t==null&&At(e)?W:De.createCallback(t,n,3)
Vt(e,function(e,n,s){var a=t(e,n,s)
if(a<i){i=a
r=e}})}return r}var tn=Gt
function nn(e,t,n,i){if(!e)return n
var r=arguments.length<3
t=De.createCallback(t,i,4)
var s=-1,a=e.length
if(typeof a=="number"){if(r){n=e[++s]}while(++s<a){n=t(n,e[s],s,e)}}else{dt(e,function(e,i,s){n=r?(r=false,e):t(n,e,i,s)})}return n}function rn(e,t,n,i){var r=arguments.length<3
t=De.createCallback(t,i,4)
Jt(e,function(e,i,s){n=r?(r=false,e):t(n,e,i,s)})
return n}function sn(e,t,n){t=De.createCallback(t,n,3)
return Ut(e,function(e,n,i){return!t(e,n,i)})}function an(t,n,i){if(t&&typeof t.length!="number"){t=Ft(t)}if(n==null||i){return t?t[He(0,t.length-1)]:e}var r=on(t)
r.length=Me(ke(0,n),r.length)
return r}function on(e){var t=-1,i=e?e.length:0,r=n(typeof i=="number"?i:0)
Vt(e,function(e){var n=He(0,++t)
r[t]=r[n]
r[n]=e})
return r}function ln(e){var t=e?e.length:0
return typeof t=="number"?t:Ze(e).length}function un(e,t,n){var i
t=De.createCallback(t,n,3)
var r=-1,s=e?e.length:0
if(typeof s=="number"){while(++r<s){if(i=t(e[r],r,e)){break}}}else{dt(e,function(e,n,r){return!(i=t(e,n,r))})}return!!i}function fn(e,t,i){var r=-1,s=Qe(t),a=e?e.length:0,o=n(typeof a=="number"?a:0)
if(!s){t=De.createCallback(t,i,3)}Vt(e,function(e,n,i){var a=o[++r]=J()
if(s){a.criteria=Gt(t,function(t){return e[t]})}else{(a.criteria=V())[0]=t(e,n,i)}a.index=r
a.value=e})
a=o.length
o.sort(U)
while(a--){var l=o[a]
o[a]=l.value
if(!s){X(l.criteria)}K(l)}return o}function cn(e){if(e&&typeof e.length=="number"){return Q(e)}return Ft(e)}var hn=Ut
function dn(e){var t=-1,n=e?e.length:0,i=[]
while(++t<n){var r=e[t]
if(r){i.push(r)}}return i}function pn(e){return Pe(e,Ne(arguments,true,true,1))}function mn(e,t,n){var i=-1,r=e?e.length:0
t=De.createCallback(t,n,3)
while(++i<r){if(t(e[i],i,e)){return i}}return-1}function vn(e,t,n){var i=e?e.length:0
t=De.createCallback(t,n,3)
while(i--){if(t(e[i],i,e)){return i}}return-1}function gn(t,n,i){var r=0,s=t?t.length:0
if(typeof n!="number"&&n!=null){var a=-1
n=De.createCallback(n,i,3)
while(++a<s&&n(t[a],a,t)){r++}}else{r=n
if(r==null||i){return t?t[0]:e}}return Q(t,0,Me(ke(0,r),s))}function _n(e,t,n,i){if(typeof t!="boolean"&&t!=null){i=n
n=typeof t!="function"&&i&&i[t]===e?null:t
t=false}if(n!=null){e=Gt(e,n,i)}return Ne(e,t)}function yn(e,t,n){if(typeof n=="number"){var i=e?e.length:0
n=n<0?ke(0,i+n):n||0}else if(n){var r=Dn(e,t)
return e[r]===t?r:-1}return H(e,t,n)}function bn(e,t,n){var i=0,r=e?e.length:0
if(typeof t!="number"&&t!=null){var s=r
t=De.createCallback(t,n,3)
while(s--&&t(e[s],s,e)){i++}}else{i=t==null||n?1:t||i}return Q(e,0,Me(ke(0,r-i),r))}function wn(){var e=[],t=-1,n=arguments.length,i=V(),r=qe(),a=r===H,o=V()
while(++t<n){var l=arguments[t]
if(Qe(l)||Ke(l)){e.push(l)
i.push(a&&l.length>=s&&q(t?e[t]:o))}}var u=e[0],f=-1,c=u?u.length:0,h=[]
e:while(++f<c){var d=i[0]
l=u[f]
if((d?$(d,l):r(o,l))<0){t=n;(d||o).push(l)
while(--t){d=i[t]
if((d?$(d,l):r(e[t],l))<0){continue e}}h.push(l)}}while(n--){d=i[n]
if(d){K(d)}}X(i)
X(o)
return h}function xn(t,n,i){var r=0,s=t?t.length:0
if(typeof n!="number"&&n!=null){var a=s
n=De.createCallback(n,i,3)
while(a--&&n(t[a],a,t)){r++}}else{r=n
if(r==null||i){return t?t[s-1]:e}}return Q(t,ke(0,s-r))}function kn(e,t,n){var i=e?e.length:0
if(typeof n=="number"){i=(n<0?ke(0,i+n):Me(n,i-1))+1}while(i--){if(e[i]===t){return i}}return-1}function Mn(e){var t=arguments,n=0,i=t.length,r=e?e.length:0
while(++n<i){var s=-1,a=t[n]
while(++s<r){if(e[s]===a){me.call(e,s--,1)
r--}}}return e}function Tn(e,t,i){e=+e||0
i=typeof i=="number"?i:+i||1
if(t==null){t=e
e=0}var r=-1,s=ke(0,oe((t-e)/(i||1))),a=n(s)
while(++r<s){a[r]=e
e+=i}return a}function Ln(e,t,n){var i=-1,r=e?e.length:0,s=[]
t=De.createCallback(t,n,3)
while(++i<r){var a=e[i]
if(t(a,i,e)){s.push(a)
me.call(e,i--,1)
r--}}return s}function Sn(e,t,n){if(typeof t!="number"&&t!=null){var i=0,r=-1,s=e?e.length:0
t=De.createCallback(t,n,3)
while(++r<s&&t(e[r],r,e)){i++}}else{i=t==null||n?1:ke(0,t)}return Q(e,i)}function Dn(e,t,n,i){var r=0,s=e?e.length:r
n=n?De.createCallback(n,i,1):Zn
t=n(t)
while(r<s){var a=r+s>>>1
n(e[a])<t?r=a+1:s=a}return r}function Cn(){return $e(Ne(arguments,true,true))}function En(e,t,n,i){if(typeof t!="boolean"&&t!=null){i=n
n=typeof t!="function"&&i&&i[t]===e?null:t
t=false}if(n!=null){n=De.createCallback(n,i,3)}return $e(e,t,n)}function An(e){return Pe(e,Q(arguments,1))}function Yn(){var e=-1,t=arguments.length
while(++e<t){var n=arguments[e]
if(Qe(n)||Ke(n)){var i=i?$e(Pe(i,n).concat(Pe(n,i))):n}}return i||[]}function jn(){var e=arguments.length>1?arguments:arguments[0],t=-1,i=e?Zt(tn(e,"length")):0,r=n(i<0?0:i)
while(++t<i){r[t]=tn(e,t)}return r}function On(e,t){var n=-1,i=e?e.length:0,r={}
if(!t&&i&&!Qe(e[0])){t=[]}while(++n<i){var s=e[n]
if(t){r[s]=t[n]}else if(s){r[s[0]]=s[1]}}return r}function In(e,t){if(!Mt(t)){throw new te}return function(){if(--e<1){return t.apply(this,arguments)}}}function Pn(e,t){return arguments.length>2?We(e,17,Q(arguments,2),null,t):We(e,1,null,null,t)}function Nn(e){var t=arguments.length>1?Ne(arguments,true,false,1):mt(e),n=-1,i=t.length
while(++n<i){var r=t[n]
e[r]=We(e[r],1,null,null,e)}return e}function Rn(e,t){return arguments.length>2?We(t,19,Q(arguments,2),null,e):We(t,3,null,null,e)}function Fn(){var e=arguments,t=e.length
while(t--){if(!Mt(e[t])){throw new te}}return function(){var t=arguments,n=e.length
while(n--){t=[e[n].apply(this,t)]}return t[0]}}function Hn(e,t){t=typeof t=="number"?t:+t||e.length
return We(e,4,null,null,null,t)}function $n(t,n,i){var r,s,a,o,l,u,f,c=0,h=false,d=true
if(!Mt(t)){throw new te}n=ke(0,n)||0
if(i===true){var p=true
d=false}else if(Tt(i)){p=i.leading
h="maxWait"in i&&(ke(n,i.maxWait)||0)
d="trailing"in i?i.trailing:d}var m=function(){var i=n-(ii()-o)
if(i<=0){if(s){le(s)}var h=f
s=u=f=e
if(h){c=ii()
a=t.apply(l,r)
if(!u&&!s){r=l=null}}}else{u=pe(m,i)}}
var v=function(){if(u){le(u)}s=u=f=e
if(d||h!==n){c=ii()
a=t.apply(l,r)
if(!u&&!s){r=l=null}}}
return function(){r=arguments
o=ii()
l=this
f=d&&(u||!p)
if(h===false){var e=p&&!u}else{if(!s&&!p){c=o}var i=h-(o-c),g=i<=0
if(g){if(s){s=le(s)}c=o
a=t.apply(l,r)}else if(!s){s=pe(v,i)}}if(g&&u){u=le(u)}else if(!u&&n!==h){u=pe(m,n)}if(e){g=true
a=t.apply(l,r)}if(g&&!u&&!s){r=l=null}return a}}function zn(t){if(!Mt(t)){throw new te}var n=Q(arguments,1)
return pe(function(){t.apply(e,n)},1)}function Wn(t,n){if(!Mt(t)){throw new te}var i=Q(arguments,2)
return pe(function(){t.apply(e,i)},n)}function Un(e,t){if(!Mt(e)){throw new te}var n=function(){var i=n.cache,s=t?t.apply(this,arguments):r+arguments[0]
return he.call(i,s)?i[s]:i[s]=e.apply(this,arguments)}
n.cache={}
return n}function qn(e){var t,n
if(!Mt(e)){throw new te}return function(){if(t){return n}t=true
n=e.apply(this,arguments)
e=null
return n}}function Bn(e){return We(e,16,Q(arguments,1))}function Vn(e){return We(e,32,null,Q(arguments,1))}function Jn(e,t,n){var i=true,r=true
if(!Mt(e)){throw new te}if(n===false){i=false}else if(Tt(n)){i="leading"in n?n.leading:i
r="trailing"in n?n.trailing:r}A.leading=i
A.maxWait=t
A.trailing=r
return $n(e,t,A)}function Xn(e,t){return We(t,16,[e])}function Kn(e){return function(){return e}}function Qn(e,t,n){var i=typeof e
if(e==null||i=="function"){return Oe(e,t,n)}if(i!="object"){return si(e)}var r=Ze(e),s=r[0],a=e[s]
if(r.length==1&&a===a&&!Tt(a)){return function(e){var t=e[s]
return a===t&&(a!==0||1/a==1/t)}}return function(t){var n=r.length,i=false
while(n--){if(!(i=Re(t[r[n]],e[r[n]],null,true))){break}}return i}}function Gn(e){return e==null?"":ee(e).replace(it,Ue)}function Zn(e){return e}function ei(e,t,n){var i=true,r=t&&mt(t)
if(!t||!n&&!r.length){if(n==null){n=t}s=Ce
t=e
e=De
r=mt(t)}if(n===false){i=false}else if(Tt(n)&&"chain"in n){i=n.chain}var s=e,a=Mt(s)
Vt(r,function(n){var r=e[n]=t[n]
if(a){s.prototype[n]=function(){var t=this.__chain__,n=this.__wrapped__,a=[n]
de.apply(a,arguments)
var o=r.apply(e,a)
if(i||t){if(n===o&&Tt(o)){return this}o=new s(o)
o.__chain__=t}return o}}})}function ti(){t._=re
return this}function ni(){}var ii=Be(ii=O.now)&&ii||function(){return(new O).getTime()}
var ri=Te(o+"08")==8?Te:function(e,t){return Te(At(e)?e.replace(m,""):e,t||0)}
function si(e){return function(t){return t[e]}}function ai(e,t,n){var i=e==null,r=t==null
if(n==null){if(typeof e=="boolean"&&r){n=e
e=1}else if(!r&&typeof t=="boolean"){n=t
r=true}}if(i&&r){t=1}e=+e||0
if(r){t=e
e=0}else{t=+t||0}if(n||e%1||t%1){var s=Le()
return Me(e+s*(t-e+parseFloat("1e-"+((s+"").length-1))),t)}return He(e,t)}function oi(e,t){if(e){var n=e[t]
return Mt(n)?e[t]():n}}function li(t,n,i){var r=De.templateSettings
t=ee(t||"")
i=lt({},i,r)
var s=lt({},i.imports,r.imports),a=Ze(s),o=Ft(s)
var h,d=0,m=i.interpolate||v,g="__p += '"
var y=z((i.escape||v).source+"|"+m.source+"|"+(m===p?c:v).source+"|"+(i.evaluate||v).source+"|$","g")
t.replace(y,function(e,n,i,r,s,a){i||(i=r)
g+=t.slice(d,a).replace(_,B)
if(n){g+="' +\n__e("+n+") +\n'"}if(s){h=true
g+="';\n"+s+";\n__p += '"}if(i){g+="' +\n((__t = ("+i+")) == null ? '' : __t) +\n'"}d=a+e.length
return e})
g+="';\n"
var w=i.variable,x=w
if(!x){w="obj"
g="with ("+w+") {\n"+g+"\n}\n"}g=(h?g.replace(l,""):g).replace(u,"$1").replace(f,"$1;")
g="function("+w+") {\n"+(x?"":w+" || ("+w+" = {});\n")+"var __t, __p = '', __e = _.escape"+(h?", __j = Array.prototype.join;\n"+"function print() { __p += __j.call(arguments, '') }\n":";\n")+g+"return __p\n}"
var k="\n/*\n//# sourceURL="+(i.sourceURL||"/lodash/template/source["+b++ +"]")+"\n*/"
try{var M=P(a,"return "+g+k).apply(e,o)}catch(e){e.source=g
throw e}if(n){return M(n)}M.source=g
return M}function ui(e,t,i){e=(e=+e)>-1?e:0
var r=-1,s=n(e)
t=Oe(t,i,1)
while(++r<e){s[r]=t(r)}return s}function fi(e){return e==null?"":ee(e).replace(nt,Xe)}function ci(e){var t=++i
return ee(e==null?"":e)+t}function hi(e){e=new Ce(e)
e.__chain__=true
return e}function di(e,t){t(e)
return e}function pi(){this.__chain__=true
return this}function mi(){return ee(this.__wrapped__)}function vi(){return this.__wrapped__}De.after=In
De.assign=rt
De.at=Ht
De.bind=Pn
De.bindAll=Nn
De.bindKey=Rn
De.chain=hi
De.compact=dn
De.compose=Fn
De.constant=Kn
De.countBy=zt
De.create=ot
De.createCallback=Qn
De.curry=Hn
De.debounce=$n
De.defaults=lt
De.defer=zn
De.delay=Wn
De.difference=pn
De.filter=Ut
De.flatten=_n
De.forEach=Vt
De.forEachRight=Jt
De.forIn=ct
De.forInRight=ht
De.forOwn=dt
De.forOwnRight=pt
De.functions=mt
De.groupBy=Xt
De.indexBy=Kt
De.initial=bn
De.intersection=wn
De.invert=gt
De.invoke=Qt
De.keys=Ze
De.map=Gt
De.mapValues=jt
De.max=Zt
De.memoize=Un
De.merge=Ot
De.min=en
De.omit=It
De.once=qn
De.pairs=Pt
De.partial=Bn
De.partialRight=Vn
De.pick=Nt
De.pluck=tn
De.property=si
De.pull=Mn
De.range=Tn
De.reject=sn
De.remove=Ln
De.rest=Sn
De.shuffle=on
De.sortBy=fn
De.tap=di
De.throttle=Jn
De.times=ui
De.toArray=cn
De.transform=Rt
De.union=Cn
De.uniq=En
De.values=Ft
De.where=hn
De.without=An
De.wrap=Xn
De.xor=Yn
De.zip=jn
De.zipObject=On
De.collect=Gt
De.drop=Sn
De.each=Vt
De.eachRight=Jt
De.extend=rt
De.methods=mt
De.object=On
De.select=Ut
De.tail=Sn
De.unique=En
De.unzip=jn
ei(De)
De.clone=st
De.cloneDeep=at
De.contains=$t
De.escape=Gn
De.every=Wt
De.find=qt
De.findIndex=mn
De.findKey=ut
De.findLast=Bt
De.findLastIndex=vn
De.findLastKey=ft
De.has=vt
De.identity=Zn
De.indexOf=yn
De.isArguments=Ke
De.isArray=Qe
De.isBoolean=_t
De.isDate=yt
De.isElement=bt
De.isEmpty=wt
De.isEqual=xt
De.isFinite=kt
De.isFunction=Mt
De.isNaN=Lt
De.isNull=St
De.isNumber=Dt
De.isObject=Tt
De.isPlainObject=Ct
De.isRegExp=Et
De.isString=At
De.isUndefined=Yt
De.lastIndexOf=kn
De.mixin=ei
De.noConflict=ti
De.noop=ni
De.now=ii
De.parseInt=ri
De.random=ai
De.reduce=nn
De.reduceRight=rn
De.result=oi
De.runInContext=G
De.size=ln
De.some=un
De.sortedIndex=Dn
De.template=li
De.unescape=fi
De.uniqueId=ci
De.all=Wt
De.any=un
De.detect=qt
De.findWhere=qt
De.foldl=nn
De.foldr=rn
De.include=$t
De.inject=nn
ei(function(){var e={}
dt(De,function(t,n){if(!De.prototype[n]){e[n]=t}})
return e}(),false)
De.first=gn
De.last=xn
De.sample=an
De.take=gn
De.head=gn
dt(De,function(e,t){var n=t!=="sample"
if(!De.prototype[t]){De.prototype[t]=function(t,i){var r=this.__chain__,s=e(this.__wrapped__,t,i)
return!r&&(t==null||i&&!(n&&typeof t=="function"))?s:new Ce(s,r)}}})
De.VERSION="2.4.2"
De.prototype.chain=pi
De.prototype.toString=mi
De.prototype.value=vi
De.prototype.valueOf=vi
Vt(["join","pop","shift"],function(e){var t=ne[e]
De.prototype[e]=function(){var e=this.__chain__,n=t.apply(this.__wrapped__,arguments)
return e?new Ce(n,e):n}})
Vt(["push","reverse","sort","unshift"],function(e){var t=ne[e]
De.prototype[e]=function(){t.apply(this.__wrapped__,arguments)
return this}})
Vt(["concat","slice","splice"],function(e){var t=ne[e]
De.prototype[e]=function(){return new Ce(t.apply(this.__wrapped__,arguments),this.__chain__)}})
return De}var Z=G()
if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){I._=Z
define(function(){return Z})}else if(P&&N){if(R){(N.exports=Z)._=Z}else{P._=Z}}else{I._=Z}}).call(this);(function(){var e=this
var t=e.Backbone
var n=[]
var i=n.push
var r=n.slice
var s=n.splice
var a
if(typeof exports!=="undefined"){a=exports}else{a=e.Backbone={}}a.VERSION="1.1.0"
var o=e._
if(!o&&typeof require!=="undefined")o=require("underscore")
a.$=e.jQuery||e.Zepto||e.ender||e.$
a.noConflict=function(){e.Backbone=t
return this}
a.emulateHTTP=false
a.emulateJSON=false
var l=a.Events={on:function(e,t,n){if(!f(this,"on",e,[t,n])||!t)return this
this._events||(this._events={})
var i=this._events[e]||(this._events[e]=[])
i.push({callback:t,context:n,ctx:n||this})
return this},once:function(e,t,n){if(!f(this,"once",e,[t,n])||!t)return this
var i=this
var r=o.once(function(){i.off(e,r)
t.apply(this,arguments)})
r._callback=t
return this.on(e,r,n)},off:function(e,t,n){var i,r,s,a,l,u,c,h
if(!this._events||!f(this,"off",e,[t,n]))return this
if(!e&&!t&&!n){this._events={}
return this}a=e?[e]:o.keys(this._events)
for(l=0,u=a.length;l<u;l++){e=a[l]
if(s=this._events[e]){this._events[e]=i=[]
if(t||n){for(c=0,h=s.length;c<h;c++){r=s[c]
if(t&&t!==r.callback&&t!==r.callback._callback||n&&n!==r.context){i.push(r)}}}if(!i.length)delete this._events[e]}}return this},trigger:function(e){if(!this._events)return this
var t=r.call(arguments,1)
if(!f(this,"trigger",e,t))return this
var n=this._events[e]
var i=this._events.all
if(n)c(n,t)
if(i)c(i,arguments)
return this},stopListening:function(e,t,n){var i=this._listeningTo
if(!i)return this
var r=!t&&!n
if(!n&&typeof t==="object")n=this
if(e)(i={})[e._listenId]=e
for(var s in i){e=i[s]
e.off(t,n,this)
if(r||o.isEmpty(e._events))delete this._listeningTo[s]}return this}}
var u=/\s+/
var f=function(e,t,n,i){if(!n)return true
if(typeof n==="object"){for(var r in n){e[t].apply(e,[r,n[r]].concat(i))}return false}if(u.test(n)){var s=n.split(u)
for(var a=0,o=s.length;a<o;a++){e[t].apply(e,[s[a]].concat(i))}return false}return true}
var c=function(e,t){var n,i=-1,r=e.length,s=t[0],a=t[1],o=t[2]
switch(t.length){case 0:while(++i<r)(n=e[i]).callback.call(n.ctx)
return
case 1:while(++i<r)(n=e[i]).callback.call(n.ctx,s)
return
case 2:while(++i<r)(n=e[i]).callback.call(n.ctx,s,a)
return
case 3:while(++i<r)(n=e[i]).callback.call(n.ctx,s,a,o)
return
default:while(++i<r)(n=e[i]).callback.apply(n.ctx,t)}}
var h={listenTo:"on",listenToOnce:"once"}
o.each(h,function(e,t){l[t]=function(t,n,i){var r=this._listeningTo||(this._listeningTo={})
var s=t._listenId||(t._listenId=o.uniqueId("l"))
r[s]=t
if(!i&&typeof n==="object")i=this
t[e](n,i,this)
return this}})
l.bind=l.on
l.unbind=l.off
o.extend(a,l)
var d=a.Model=function(e,t){var n=e||{}
t||(t={})
this.cid=o.uniqueId("c")
this.attributes={}
if(t.collection)this.collection=t.collection
if(t.parse)n=this.parse(n,t)||{}
n=o.defaults({},n,o.result(this,"defaults"))
this.set(n,t)
this.changed={}
this.initialize.apply(this,arguments)}
o.extend(d.prototype,l,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(e){return o.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(e){return this.attributes[e]},escape:function(e){return o.escape(this.get(e))},has:function(e){return this.get(e)!=null},set:function(e,t,n){var i,r,s,a,l,u,f,c
if(e==null)return this
if(typeof e==="object"){r=e
n=t}else{(r={})[e]=t}n||(n={})
if(!this._validate(r,n))return false
s=n.unset
l=n.silent
a=[]
u=this._changing
this._changing=true
if(!u){this._previousAttributes=o.clone(this.attributes)
this.changed={}}c=this.attributes,f=this._previousAttributes
if(this.idAttribute in r)this.id=r[this.idAttribute]
for(i in r){t=r[i]
if(!o.isEqual(c[i],t))a.push(i)
if(!o.isEqual(f[i],t)){this.changed[i]=t}else{delete this.changed[i]}s?delete c[i]:c[i]=t}if(!l){if(a.length)this._pending=true
for(var h=0,d=a.length;h<d;h++){this.trigger("change:"+a[h],this,c[a[h]],n)}}if(u)return this
if(!l){while(this._pending){this._pending=false
this.trigger("change",this,n)}}this._pending=false
this._changing=false
return this},unset:function(e,t){return this.set(e,void 0,o.extend({},t,{unset:true}))},clear:function(e){var t={}
for(var n in this.attributes)t[n]=void 0
return this.set(t,o.extend({},e,{unset:true}))},hasChanged:function(e){if(e==null)return!o.isEmpty(this.changed)
return o.has(this.changed,e)},changedAttributes:function(e){if(!e)return this.hasChanged()?o.clone(this.changed):false
var t,n=false
var i=this._changing?this._previousAttributes:this.attributes
for(var r in e){if(o.isEqual(i[r],t=e[r]))continue;(n||(n={}))[r]=t}return n},previous:function(e){if(e==null||!this._previousAttributes)return null
return this._previousAttributes[e]},previousAttributes:function(){return o.clone(this._previousAttributes)},fetch:function(e){e=e?o.clone(e):{}
if(e.parse===void 0)e.parse=true
var t=this
var n=e.success
e.success=function(i){if(!t.set(t.parse(i,e),e))return false
if(n)n(t,i,e)
t.trigger("sync",t,i,e)}
R(this,e)
return this.sync("read",this,e)},save:function(e,t,n){var i,r,s,a=this.attributes
if(e==null||typeof e==="object"){i=e
n=t}else{(i={})[e]=t}n=o.extend({validate:true},n)
if(i&&!n.wait){if(!this.set(i,n))return false}else{if(!this._validate(i,n))return false}if(i&&n.wait){this.attributes=o.extend({},a,i)}if(n.parse===void 0)n.parse=true
var l=this
var u=n.success
n.success=function(e){l.attributes=a
var t=l.parse(e,n)
if(n.wait)t=o.extend(i||{},t)
if(o.isObject(t)&&!l.set(t,n)){return false}if(u)u(l,e,n)
l.trigger("sync",l,e,n)}
R(this,n)
r=this.isNew()?"create":n.patch?"patch":"update"
if(r==="patch")n.attrs=i
s=this.sync(r,this,n)
if(i&&n.wait)this.attributes=a
return s},destroy:function(e){e=e?o.clone(e):{}
var t=this
var n=e.success
var i=function(){t.trigger("destroy",t,t.collection,e)}
e.success=function(r){if(e.wait||t.isNew())i()
if(n)n(t,r,e)
if(!t.isNew())t.trigger("sync",t,r,e)}
if(this.isNew()){e.success()
return false}R(this,e)
var r=this.sync("delete",this,e)
if(!e.wait)i()
return r},url:function(){var e=o.result(this,"urlRoot")||o.result(this.collection,"url")||N()
if(this.isNew())return e
return e+(e.charAt(e.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(e,t){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(e){return this._validate({},o.extend(e||{},{validate:true}))},_validate:function(e,t){if(!t.validate||!this.validate)return true
e=o.extend({},this.attributes,e)
var n=this.validationError=this.validate(e,t)||null
if(!n)return true
this.trigger("invalid",this,n,o.extend(t,{validationError:n}))
return false}})
var p=["keys","values","pairs","invert","pick","omit"]
o.each(p,function(e){d.prototype[e]=function(){var t=r.call(arguments)
t.unshift(this.attributes)
return o[e].apply(o,t)}})
var m=a.Collection=function(e,t){t||(t={})
if(t.model)this.model=t.model
if(t.comparator!==void 0)this.comparator=t.comparator
this._reset()
this.initialize.apply(this,arguments)
if(e)this.reset(e,o.extend({silent:true},t))}
var v={add:true,remove:true,merge:true}
var g={add:true,remove:false}
o.extend(m.prototype,l,{model:d,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return a.sync.apply(this,arguments)},add:function(e,t){return this.set(e,o.extend({merge:false},t,g))},remove:function(e,t){var n=!o.isArray(e)
e=n?[e]:o.clone(e)
t||(t={})
var i,r,s,a
for(i=0,r=e.length;i<r;i++){a=e[i]=this.get(e[i])
if(!a)continue
delete this._byId[a.id]
delete this._byId[a.cid]
s=this.indexOf(a)
this.models.splice(s,1)
this.length--
if(!t.silent){t.index=s
a.trigger("remove",a,this,t)}this._removeReference(a)}return n?e[0]:e},set:function(e,t){t=o.defaults({},t,v)
if(t.parse)e=this.parse(e,t)
var n=!o.isArray(e)
e=n?e?[e]:[]:o.clone(e)
var i,r,s,a,l,u,f
var c=t.at
var h=this.model
var p=this.comparator&&c==null&&t.sort!==false
var m=o.isString(this.comparator)?this.comparator:null
var g=[],_=[],y={}
var b=t.add,w=t.merge,x=t.remove
var k=!p&&b&&x?[]:false
for(i=0,r=e.length;i<r;i++){l=e[i]
if(l instanceof d){s=a=l}else{s=l[h.prototype.idAttribute]}if(u=this.get(s)){if(x)y[u.cid]=true
if(w){l=l===a?a.attributes:l
if(t.parse)l=u.parse(l,t)
u.set(l,t)
if(p&&!f&&u.hasChanged(m))f=true}e[i]=u}else if(b){a=e[i]=this._prepareModel(l,t)
if(!a)continue
g.push(a)
a.on("all",this._onModelEvent,this)
this._byId[a.cid]=a
if(a.id!=null)this._byId[a.id]=a}if(k)k.push(u||a)}if(x){for(i=0,r=this.length;i<r;++i){if(!y[(a=this.models[i]).cid])_.push(a)}if(_.length)this.remove(_,t)}if(g.length||k&&k.length){if(p)f=true
this.length+=g.length
if(c!=null){for(i=0,r=g.length;i<r;i++){this.models.splice(c+i,0,g[i])}}else{if(k)this.models.length=0
var M=k||g
for(i=0,r=M.length;i<r;i++){this.models.push(M[i])}}}if(f)this.sort({silent:true})
if(!t.silent){for(i=0,r=g.length;i<r;i++){(a=g[i]).trigger("add",a,this,t)}if(f||k&&k.length)this.trigger("sort",this,t)}return n?e[0]:e},reset:function(e,t){t||(t={})
for(var n=0,i=this.models.length;n<i;n++){this._removeReference(this.models[n])}t.previousModels=this.models
this._reset()
e=this.add(e,o.extend({silent:true},t))
if(!t.silent)this.trigger("reset",this,t)
return e},push:function(e,t){return this.add(e,o.extend({at:this.length},t))},pop:function(e){var t=this.at(this.length-1)
this.remove(t,e)
return t},unshift:function(e,t){return this.add(e,o.extend({at:0},t))},shift:function(e){var t=this.at(0)
this.remove(t,e)
return t},slice:function(){return r.apply(this.models,arguments)},get:function(e){if(e==null)return void 0
return this._byId[e.id]||this._byId[e.cid]||this._byId[e]},at:function(e){return this.models[e]},where:function(e,t){if(o.isEmpty(e))return t?void 0:[]
return this[t?"find":"filter"](function(t){for(var n in e){if(e[n]!==t.get(n))return false}return true})},findWhere:function(e){return this.where(e,true)},sort:function(e){if(!this.comparator)throw new Error("Cannot sort a set without a comparator")
e||(e={})
if(o.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(o.bind(this.comparator,this))}if(!e.silent)this.trigger("sort",this,e)
return this},pluck:function(e){return o.invoke(this.models,"get",e)},fetch:function(e){e=e?o.clone(e):{}
if(e.parse===void 0)e.parse=true
var t=e.success
var n=this
e.success=function(i){var r=e.reset?"reset":"set"
n[r](i,e)
if(t)t(n,i,e)
n.trigger("sync",n,i,e)}
R(this,e)
return this.sync("read",this,e)},create:function(e,t){t=t?o.clone(t):{}
if(!(e=this._prepareModel(e,t)))return false
if(!t.wait)this.add(e,t)
var n=this
var i=t.success
t.success=function(e,t,r){if(r.wait)n.add(e,r)
if(i)i(e,t,r)}
e.save(null,t)
return e},parse:function(e,t){return e},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0
this.models=[]
this._byId={}},_prepareModel:function(e,t){if(e instanceof d){if(!e.collection)e.collection=this
return e}t=t?o.clone(t):{}
t.collection=this
var n=new this.model(e,t)
if(!n.validationError)return n
this.trigger("invalid",this,n.validationError,t)
return false},_removeReference:function(e){if(this===e.collection)delete e.collection
e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,t,n,i){if((e==="add"||e==="remove")&&n!==this)return
if(e==="destroy")this.remove(t,i)
if(t&&e==="change:"+t.idAttribute){delete this._byId[t.previous(t.idAttribute)]
if(t.id!=null)this._byId[t.id]=t}this.trigger.apply(this,arguments)}})
var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain"]
o.each(_,function(e){m.prototype[e]=function(){var t=r.call(arguments)
t.unshift(this.models)
return o[e].apply(o,t)}})
var y=["groupBy","countBy","sortBy"]
o.each(y,function(e){m.prototype[e]=function(t,n){var i=o.isFunction(t)?t:function(e){return e.get(t)}
return o[e](this.models,i,n)}})
var b=a.View=function(e){this.cid=o.uniqueId("view")
e||(e={})
o.extend(this,o.pick(e,x))
this._ensureElement()
this.initialize.apply(this,arguments)
this.delegateEvents()}
var w=/^(\S+)\s*(.*)$/
var x=["model","collection","el","id","attributes","className","tagName","events"]
o.extend(b.prototype,l,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove()
this.stopListening()
return this},setElement:function(e,t){if(this.$el)this.undelegateEvents()
this.$el=e instanceof a.$?e:a.$(e)
this.el=this.$el[0]
if(t!==false)this.delegateEvents()
return this},delegateEvents:function(e){if(!(e||(e=o.result(this,"events"))))return this
this.undelegateEvents()
for(var t in e){var n=e[t]
if(!o.isFunction(n))n=this[e[t]]
if(!n)continue
var i=t.match(w)
var r=i[1],s=i[2]
n=o.bind(n,this)
r+=".delegateEvents"+this.cid
if(s===""){this.$el.on(r,n)}else{this.$el.on(r,s,n)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid)
return this},_ensureElement:function(){if(!this.el){var e=o.extend({},o.result(this,"attributes"))
if(this.id)e.id=o.result(this,"id")
if(this.className)e["class"]=o.result(this,"className")
var t=a.$("<"+o.result(this,"tagName")+">").attr(e)
this.setElement(t,false)}else{this.setElement(o.result(this,"el"),false)}}})
a.sync=function(e,t,n){var i=M[e]
o.defaults(n||(n={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON})
var r={type:i,dataType:"json"}
if(!n.url){r.url=o.result(t,"url")||N()}if(n.data==null&&t&&(e==="create"||e==="update"||e==="patch")){r.contentType="application/json"
r.data=JSON.stringify(n.attrs||t.toJSON(n))}if(n.emulateJSON){r.contentType="application/x-www-form-urlencoded"
r.data=r.data?{model:r.data}:{}}if(n.emulateHTTP&&(i==="PUT"||i==="DELETE"||i==="PATCH")){r.type="POST"
if(n.emulateJSON)r.data._method=i
var s=n.beforeSend
n.beforeSend=function(e){e.setRequestHeader("X-HTTP-Method-Override",i)
if(s)return s.apply(this,arguments)}}if(r.type!=="GET"&&!n.emulateJSON){r.processData=false}if(r.type==="PATCH"&&k){r.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var l=n.xhr=a.ajax(o.extend(r,n))
t.trigger("request",t,l,n)
return l}
var k=typeof window!=="undefined"&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent)
var M={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"}
a.ajax=function(){return a.$.ajax.apply(a.$,arguments)}
var T=a.Router=function(e){e||(e={})
if(e.routes)this.routes=e.routes
this._bindRoutes()
this.initialize.apply(this,arguments)}
var L=/\((.*?)\)/g
var S=/(\(\?)?:\w+/g
var D=/\*\w+/g
var C=/[\-{}\[\]+?.,\\\^$|#\s]/g
o.extend(T.prototype,l,{initialize:function(){},route:function(e,t,n){if(!o.isRegExp(e))e=this._routeToRegExp(e)
if(o.isFunction(t)){n=t
t=""}if(!n)n=this[t]
var i=this
a.history.route(e,function(r){var s=i._extractParameters(e,r)
n&&n.apply(i,s)
i.trigger.apply(i,["route:"+t].concat(s))
i.trigger("route",t,s)
a.history.trigger("route",i,t,s)})
return this},navigate:function(e,t){a.history.navigate(e,t)
return this},_bindRoutes:function(){if(!this.routes)return
this.routes=o.result(this,"routes")
var e,t=o.keys(this.routes)
while((e=t.pop())!=null){this.route(e,this.routes[e])}},_routeToRegExp:function(e){e=e.replace(C,"\\$&").replace(L,"(?:$1)?").replace(S,function(e,t){return t?e:"([^/]+)"}).replace(D,"(.*?)")
return new RegExp("^"+e+"$")},_extractParameters:function(e,t){var n=e.exec(t).slice(1)
return o.map(n,function(e){return e?decodeURIComponent(e):null})}})
var E=a.History=function(){this.handlers=[]
o.bindAll(this,"checkUrl")
if(typeof window!=="undefined"){this.location=window.location
this.history=window.history}}
var A=/^[#\/]|\s+$/g
var Y=/^\/+|\/+$/g
var j=/msie [\w.]+/
var O=/\/$/
var I=/[?#].*$/
E.started=false
o.extend(E.prototype,l,{interval:50,getHash:function(e){var t=(e||this).location.href.match(/#(.*)$/)
return t?t[1]:""},getFragment:function(e,t){if(e==null){if(this._hasPushState||!this._wantsHashChange||t){e=this.location.pathname
var n=this.root.replace(O,"")
if(!e.indexOf(n))e=e.slice(n.length)}else{e=this.getHash()}}return e.replace(A,"")},start:function(e){if(E.started)throw new Error("Backbone.history has already been started")
E.started=true
this.options=o.extend({root:"/"},this.options,e)
this.root=this.options.root
this._wantsHashChange=this.options.hashChange!==false
this._wantsPushState=!!this.options.pushState
this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState)
var t=this.getFragment()
var n=document.documentMode
var i=j.exec(navigator.userAgent.toLowerCase())&&(!n||n<=7)
this.root=("/"+this.root+"/").replace(Y,"/")
if(i&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow
this.navigate(t)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!i){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=t
var r=this.location
var s=r.pathname.replace(/[^\/]$/,"$&/")===this.root
if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!s){this.fragment=this.getFragment(null,true)
this.location.replace(this.root+this.location.search+"#"+this.fragment)
return true}else if(this._hasPushState&&s&&r.hash){this.fragment=this.getHash().replace(A,"")
this.history.replaceState({},document.title,this.root+this.fragment+r.search)}}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl)
clearInterval(this._checkUrlInterval)
E.started=false},route:function(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(e){var t=this.getFragment()
if(t===this.fragment&&this.iframe){t=this.getFragment(this.getHash(this.iframe))}if(t===this.fragment)return false
if(this.iframe)this.navigate(t)
this.loadUrl()},loadUrl:function(e){e=this.fragment=this.getFragment(e)
return o.any(this.handlers,function(t){if(t.route.test(e)){t.callback(e)
return true}})},navigate:function(e,t){if(!E.started)return false
if(!t||t===true)t={trigger:!!t}
var n=this.root+(e=this.getFragment(e||""))
e=e.replace(I,"")
if(this.fragment===e)return
this.fragment=e
if(e===""&&n!=="/")n=n.slice(0,-1)
if(this._hasPushState){this.history[t.replace?"replaceState":"pushState"]({},document.title,n)}else if(this._wantsHashChange){this._updateHash(this.location,e,t.replace)
if(this.iframe&&e!==this.getFragment(this.getHash(this.iframe))){if(!t.replace)this.iframe.document.open().close()
this._updateHash(this.iframe.location,e,t.replace)}}else{return this.location.assign(n)}if(t.trigger)return this.loadUrl(e)},_updateHash:function(e,t,n){if(n){var i=e.href.replace(/(javascript:|#).*$/,"")
e.replace(i+"#"+t)}else{e.hash="#"+t}}})
a.history=new E
var P=function(e,t){var n=this
var i
if(e&&o.has(e,"constructor")){i=e.constructor}else{i=function(){return n.apply(this,arguments)}}o.extend(i,n,t)
var r=function(){this.constructor=i}
r.prototype=n.prototype
i.prototype=new r
if(e)o.extend(i.prototype,e)
i.__super__=n.prototype
return i}
d.extend=m.extend=T.extend=b.extend=E.extend=P
var N=function(){throw new Error('A "url" property or function must be specified')}
var R=function(e,t){var n=t.error
t.error=function(i){if(n)n(e,i,t)
e.trigger("error",e,i,t)}}}).call(this)
this.createjs=this.createjs||{};(function(){"use strict"
var e=createjs.PreloadJS=createjs.PreloadJS||{}
e.version="NEXT"
e.buildDate="Wed, 22 Oct 2014 16:11:35 GMT"})()
this.createjs=this.createjs||{};(function(){"use strict"
var e=function(e,t,n){this.initialize(e,t,n)}
var t=e.prototype
e.prototype.constructor=e
t.type=null
t.target=null
t.currentTarget=null
t.eventPhase=0
t.bubbles=false
t.cancelable=false
t.timeStamp=0
t.defaultPrevented=false
t.propagationStopped=false
t.immediatePropagationStopped=false
t.removed=false
t.initialize=function(e,t,n){this.type=e
this.bubbles=t
this.cancelable=n
this.timeStamp=(new Date).getTime()}
t.preventDefault=function(){this.defaultPrevented=true}
t.stopPropagation=function(){this.propagationStopped=true}
t.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=true}
t.remove=function(){this.removed=true}
t.clone=function(){return new e(this.type,this.bubbles,this.cancelable)}
t.toString=function(){return"[Event (type="+this.type+")]"}
createjs.Event=e})()
this.createjs=this.createjs||{};(function(){"use strict"
var e=function(){}
var t=e.prototype
e.prototype.constructor=e
e.initialize=function(e){e.addEventListener=t.addEventListener
e.on=t.on
e.removeEventListener=e.off=t.removeEventListener
e.removeAllEventListeners=t.removeAllEventListeners
e.hasEventListener=t.hasEventListener
e.dispatchEvent=t.dispatchEvent
e._dispatchEvent=t._dispatchEvent
e.willTrigger=t.willTrigger}
t._listeners=null
t._captureListeners=null
t.initialize=function(){}
t.addEventListener=function(e,t,n){var i
if(n){i=this._captureListeners=this._captureListeners||{}}else{i=this._listeners=this._listeners||{}}var r=i[e]
if(r){this.removeEventListener(e,t,n)}r=i[e]
if(!r){i[e]=[t]}else{r.push(t)}return t}
t.on=function(e,t,n,i,r,s){if(t.handleEvent){n=n||t
t=t.handleEvent}n=n||this
return this.addEventListener(e,function(e){t.call(n,e,r)
i&&e.remove()},s)}
t.removeEventListener=function(e,t,n){var i=n?this._captureListeners:this._listeners
if(!i){return}var r=i[e]
if(!r){return}for(var s=0,a=r.length;s<a;s++){if(r[s]==t){if(a==1){delete i[e]}else{r.splice(s,1)}break}}}
t.off=t.removeEventListener
t.removeAllEventListeners=function(e){if(!e){this._listeners=this._captureListeners=null}else{if(this._listeners){delete this._listeners[e]}if(this._captureListeners){delete this._captureListeners[e]}}}
t.dispatchEvent=function(e){if(typeof e=="string"){var t=this._listeners
if(!t||!t[e]){return false}e=new createjs.Event(e)}else if(e.target&&e.clone){e=e.clone()}try{e.target=this}catch(e){}if(!e.bubbles||!this.parent){this._dispatchEvent(e,2)}else{var n=this,i=[n]
while(n.parent){i.push(n=n.parent)}var r,s=i.length
for(r=s-1;r>=0&&!e.propagationStopped;r--){i[r]._dispatchEvent(e,1+(r==0))}for(r=1;r<s&&!e.propagationStopped;r++){i[r]._dispatchEvent(e,3)}}return e.defaultPrevented}
t.hasEventListener=function(e){var t=this._listeners,n=this._captureListeners
return!!(t&&t[e]||n&&n[e])}
t.willTrigger=function(e){var t=this
while(t){if(t.hasEventListener(e)){return true}t=t.parent}return false}
t.toString=function(){return"[EventDispatcher]"}
t._dispatchEvent=function(e,t){var n,i=t==1?this._captureListeners:this._listeners
if(e&&i){var r=i[e.type]
if(!r||!(n=r.length)){return}try{e.currentTarget=this}catch(e){}try{e.eventPhase=t}catch(e){}e.removed=false
r=r.slice()
for(var s=0;s<n&&!e.immediatePropagationStopped;s++){var a=r[s]
if(a.handleEvent){a.handleEvent(e)}else{a(e)}if(e.removed){this.off(e.type,a,t==1)
e.removed=false}}}}
createjs.EventDispatcher=e})()
this.createjs=this.createjs||{};(function(){"use strict"
createjs.indexOf=function(e,t){for(var n=0,i=e.length;n<i;n++){if(t===e[n]){return n}}return-1}})()
this.createjs=this.createjs||{};(function(){"use strict"
createjs.proxy=function(e,t){var n=Array.prototype.slice.call(arguments,2)
return function(){return e.apply(t,Array.prototype.slice.call(arguments,0).concat(n))}}})()
this.createjs=this.createjs||{};(function(){"use strict"
var e=function(){this.init()}
var t=e.prototype=new createjs.EventDispatcher
e.prototype.constructor=e
var n=e
n.ABSOLUTE_PATT=/^(?:\w+:)?\/{2}/i
n.RELATIVE_PATT=/^[.\/]*?\//i
n.EXTENSION_PATT=/\/?[^\/]+\.(\w{1,5})$/i
t.loaded=false
t.canceled=false
t.progress=0
t._item=null
t.getItem=function(){return this._item}
t.init=function(){}
t.load=function(){}
t.close=function(){}
t._sendLoadStart=function(){if(this._isCanceled()){return}this.dispatchEvent("loadstart")}
t._sendProgress=function(e){if(this._isCanceled()){return}var t=null
if(typeof e=="number"){this.progress=e
t=new createjs.Event("progress")
t.loaded=this.progress
t.total=1}else{t=e
this.progress=e.loaded/e.total
if(isNaN(this.progress)||this.progress==Infinity){this.progress=0}}t.progress=this.progress
this.hasEventListener("progress")&&this.dispatchEvent(t)}
t._sendComplete=function(){if(this._isCanceled()){return}this.dispatchEvent("complete")}
t._sendError=function(e){if(this._isCanceled()||!this.hasEventListener("error")){return}if(e==null){e=new createjs.Event("error")}this.dispatchEvent(e)}
t._isCanceled=function(){if(window.createjs==null||this.canceled){return true}return false}
t._parseURI=function(e){var t={absolute:false,relative:false}
if(e==null){return t}var i=e.indexOf("?")
if(i>-1){e=e.substr(0,i)}var r
if(n.ABSOLUTE_PATT.test(e)){t.absolute=true}else if(n.RELATIVE_PATT.test(e)){t.relative=true}if(r=e.match(n.EXTENSION_PATT)){t.extension=r[1].toLowerCase()}return t}
t._formatQueryString=function(e,t){if(e==null){throw new Error("You must specify data.")}var n=[]
for(var i in e){n.push(i+"="+escape(e[i]))}if(t){n=n.concat(t)}return n.join("&")}
t.buildPath=function(e,t){if(t==null){return e}var n=[]
var i=e.indexOf("?")
if(i!=-1){var r=e.slice(i+1)
n=n.concat(r.split("&"))}if(i!=-1){return e.slice(0,i)+"?"+this._formatQueryString(t,n)}else{return e+"?"+this._formatQueryString(t,n)}}
t._isCrossDomain=function(e){var t=document.createElement("a")
t.href=e.src
var n=document.createElement("a")
n.href=location.href
var i=t.hostname!=""&&(t.port!=n.port||t.protocol!=n.protocol||t.hostname!=n.hostname)
return i}
t._isLocal=function(e){var t=document.createElement("a")
t.href=e.src
return t.hostname==""&&t.protocol=="file:"}
t.toString=function(){return"[PreloadJS AbstractLoader]"}
createjs.AbstractLoader=e})()
this.createjs=this.createjs||{};(function(){"use strict"
var e=function(e,t,n){this.init(e,t,n)}
var t=e.prototype=new createjs.AbstractLoader
e.prototype.constructor=e
var n=e
n.loadTimeout=8e3
n.LOAD_TIMEOUT=0
n.BINARY="binary"
n.CSS="css"
n.IMAGE="image"
n.JAVASCRIPT="javascript"
n.JSON="json"
n.JSONP="jsonp"
n.MANIFEST="manifest"
n.SOUND="sound"
n.SVG="svg"
n.TEXT="text"
n.XML="xml"
n.POST="POST"
n.GET="GET"
t._basePath=null
t._crossOrigin=""
t.useXHR=true
t.stopOnError=false
t.maintainScriptOrder=true
t.next=null
t._typeCallbacks=null
t._extensionCallbacks=null
t._loadStartWasDispatched=false
t._maxConnections=1
t._currentlyLoadingScript=null
t._currentLoads=null
t._loadQueue=null
t._loadQueueBackup=null
t._loadItemsById=null
t._loadItemsBySrc=null
t._loadedResults=null
t._loadedRawResults=null
t._numItems=0
t._numItemsLoaded=0
t._scriptOrder=null
t._loadedScripts=null
t.init=function(e,t,n){this._numItems=this._numItemsLoaded=0
this._paused=false
this._loadStartWasDispatched=false
this._currentLoads=[]
this._loadQueue=[]
this._loadQueueBackup=[]
this._scriptOrder=[]
this._loadedScripts=[]
this._loadItemsById={}
this._loadItemsBySrc={}
this._loadedResults={}
this._loadedRawResults={}
this._typeCallbacks={}
this._extensionCallbacks={}
this._basePath=t
this.setUseXHR(e)
this._crossOrigin=n===true?"Anonymous":n===false||n==null?"":n}
t.setUseXHR=function(e){this.useXHR=e!=false&&window.XMLHttpRequest!=null
return this.useXHR}
t.removeAll=function(){this.remove()}
t.remove=function(e){var t=null
if(e&&!(e instanceof Array)){t=[e]}else if(e){t=e}else if(arguments.length>0){return}var n=false
if(!t){this.close()
for(var i in this._loadItemsById){this._disposeItem(this._loadItemsById[i])}this.init(this.useXHR,this._basePath,this._crossOrigin)}else{while(t.length){var r=t.pop()
var s=this.getResult(r)
for(a=this._loadQueue.length-1;a>=0;a--){o=this._loadQueue[a].getItem()
if(o.id==r||o.src==r){this._loadQueue.splice(a,1)[0].cancel()
break}}for(a=this._loadQueueBackup.length-1;a>=0;a--){o=this._loadQueueBackup[a].getItem()
if(o.id==r||o.src==r){this._loadQueueBackup.splice(a,1)[0].cancel()
break}}if(s){delete this._loadItemsById[s.id]
delete this._loadItemsBySrc[s.src]
this._disposeItem(s)}else{for(var a=this._currentLoads.length-1;a>=0;a--){var o=this._currentLoads[a].getItem()
if(o.id==r||o.src==r){this._currentLoads.splice(a,1)[0].cancel()
n=true
break}}}}if(n){this._loadNext()}}}
t.reset=function(){this.close()
for(var e in this._loadItemsById){this._disposeItem(this._loadItemsById[e])}var t=[]
for(var n=0,i=this._loadQueueBackup.length;n<i;n++){t.push(this._loadQueueBackup[n].getItem())}this.loadManifest(t,false)}
n.isBinary=function(e){switch(e){case createjs.LoadQueue.IMAGE:case createjs.LoadQueue.BINARY:return true
default:return false}}
n.isText=function(e){switch(e){case createjs.LoadQueue.TEXT:case createjs.LoadQueue.JSON:case createjs.LoadQueue.MANIFEST:case createjs.LoadQueue.XML:case createjs.LoadQueue.HTML:case createjs.LoadQueue.CSS:case createjs.LoadQueue.SVG:case createjs.LoadQueue.JAVASCRIPT:return true
default:return false}}
t.installPlugin=function(e){if(e==null||e.getPreloadHandlers==null){return}var t=e.getPreloadHandlers()
t.scope=e
if(t.types!=null){for(var n=0,i=t.types.length;n<i;n++){this._typeCallbacks[t.types[n]]=t}}if(t.extensions!=null){for(n=0,i=t.extensions.length;n<i;n++){this._extensionCallbacks[t.extensions[n]]=t}}}
t.setMaxConnections=function(e){this._maxConnections=e
if(!this._paused&&this._loadQueue.length>0){this._loadNext()}}
t.loadFile=function(e,t,n){if(e==null){var i=new createjs.Event("error")
i.text="PRELOAD_NO_FILE"
this._sendError(i)
return}this._addItem(e,null,n)
if(t!==false){this.setPaused(false)}else{this.setPaused(true)}}
t.loadManifest=function(e,t,i){var r=null
var s=null
if(e instanceof Array){if(e.length==0){var a=new createjs.Event("error")
a.text="PRELOAD_MANIFEST_EMPTY"
this._sendError(a)
return}r=e}else if(typeof e==="string"){r=[{src:e,type:n.MANIFEST}]}else if(typeof e=="object"){if(e.src!==undefined){if(e.type==null){e.type=n.MANIFEST}else if(e.type!=n.MANIFEST){var a=new createjs.Event("error")
a.text="PRELOAD_MANIFEST_ERROR"
this._sendError(a)}r=[e]}else if(e.manifest!==undefined){r=e.manifest
s=e.path}}else{var a=new createjs.Event("error")
a.text="PRELOAD_MANIFEST_NULL"
this._sendError(a)
return}for(var o=0,l=r.length;o<l;o++){this._addItem(r[o],s,i)}if(t!==false){this.setPaused(false)}else{this.setPaused(true)}}
t.load=function(){this.setPaused(false)}
t.getItem=function(e){return this._loadItemsById[e]||this._loadItemsBySrc[e]}
t.getResult=function(e,t){var n=this._loadItemsById[e]||this._loadItemsBySrc[e]
if(n==null){return null}var i=n.id
if(t&&this._loadedRawResults[i]){return this._loadedRawResults[i]}return this._loadedResults[i]}
t.setPaused=function(e){this._paused=e
if(!this._paused){this._loadNext()}}
t.close=function(){while(this._currentLoads.length){this._currentLoads.pop().cancel()}this._scriptOrder.length=0
this._loadedScripts.length=0
this.loadStartWasDispatched=false}
t._addItem=function(e,t,n){var i=this._createLoadItem(e,t,n)
if(i==null){return}var r=this._createLoader(i)
if(r!=null){i._loader=r
this._loadQueue.push(r)
this._loadQueueBackup.push(r)
this._numItems++
this._updateProgress()
if(this.maintainScriptOrder&&i.type==createjs.LoadQueue.JAVASCRIPT||i.maintainOrder===true){this._scriptOrder.push(i)
this._loadedScripts.push(null)}}}
t._createLoadItem=function(e,t,n){var i=null
switch(typeof e){case"string":i={src:e}
break
case"object":if(window.HTMLAudioElement&&e instanceof window.HTMLAudioElement){i={tag:e,src:i.tag.src,type:createjs.LoadQueue.SOUND}}else{i=e}break
default:return null}var r=this._parseURI(i.src)
if(r.extension){i.ext=r.extension}if(i.type==null){i.type=this._getTypeByExtension(i.ext)}var s=""
var a=n||this._basePath
var o=i.src
if(!r.absolute&&!r.relative){if(t){s=t
var l=this._parseURI(t)
o=t+o
if(a!=null&&!l.absolute&&!l.relative){s=a+s}}else if(a!=null){s=a}}i.src=s+i.src
i.path=s
if(i.type==createjs.LoadQueue.JSON||i.type==createjs.LoadQueue.MANIFEST){i._loadAsJSONP=i.callback!=null}if(i.type==createjs.LoadQueue.JSONP&&i.callback==null){throw new Error("callback is required for loading JSONP requests.")}if(i.tag===undefined||i.tag===null){i.tag=this._createTag(i)}if(i.id===undefined||i.id===null||i.id===""){i.id=o}var u=this._typeCallbacks[i.type]||this._extensionCallbacks[i.ext]
if(u){var f=u.callback.call(u.scope,i.src,i.type,i.id,i.data,s,this)
if(f===false){return null}else if(f===true){}else{if(f.src!=null){i.src=f.src}if(f.id!=null){i.id=f.id}if(f.tag!=null){i.tag=f.tag}if(f.completeHandler!=null){i.completeHandler=f.completeHandler}if(f.type){i.type=f.type}r=this._parseURI(i.src)
if(r.extension!=null){i.ext=r.extension}}}this._loadItemsById[i.id]=i
this._loadItemsBySrc[i.src]=i
return i}
t._createLoader=function(e){var t=this.useXHR
switch(e.type){case createjs.LoadQueue.JSON:case createjs.LoadQueue.MANIFEST:t=!e._loadAsJSONP
break
case createjs.LoadQueue.XML:case createjs.LoadQueue.TEXT:t=true
break
case createjs.LoadQueue.SOUND:case createjs.LoadQueue.JSONP:t=false
break
case null:return null}if(t){return new createjs.XHRLoader(e,this._crossOrigin)}else{return new createjs.TagLoader(e)}}
t._loadNext=function(){if(this._paused){return}if(!this._loadStartWasDispatched){this._sendLoadStart()
this._loadStartWasDispatched=true}if(this._numItems==this._numItemsLoaded){this.loaded=true
this._sendComplete()
if(this.next&&this.next.load){this.next.load()}}else{this.loaded=false}for(var e=0;e<this._loadQueue.length;e++){if(this._currentLoads.length>=this._maxConnections){break}var t=this._loadQueue[e]
if(!this._canStartLoad(t)){continue}this._loadQueue.splice(e,1)
e--
this._loadItem(t)}}
t._loadItem=function(e){e.on("progress",this._handleProgress,this)
e.on("complete",this._handleFileComplete,this)
e.on("error",this._handleFileError,this)
this._currentLoads.push(e)
this._sendFileStart(e.getItem())
e.load()}
t._handleFileError=function(e){var t=e.target
this._numItemsLoaded++
this._finishOrderedItem(t,true)
this._updateProgress()
var n=new createjs.Event("error")
n.text="FILE_LOAD_ERROR"
n.item=t.getItem()
this._sendError(n)
if(!this.stopOnError){this._removeLoadItem(t)
this._loadNext()}}
t._handleFileComplete=function(e){var t=e.target
var n=t.getItem()
this._loadedResults[n.id]=t.getResult()
if(t instanceof createjs.XHRLoader){this._loadedRawResults[n.id]=t.getResult(true)}this._removeLoadItem(t)
if(!this._finishOrderedItem(t)){this._processFinishedLoad(n,t)}}
t._finishOrderedItem=function(e,t){var n=e.getItem()
if(this.maintainScriptOrder&&n.type==createjs.LoadQueue.JAVASCRIPT||n.maintainOrder){if(e instanceof createjs.TagLoader&&n.type==createjs.LoadQueue.JAVASCRIPT){this._currentlyLoadingScript=false}var i=createjs.indexOf(this._scriptOrder,n)
if(i==-1){return false}this._loadedScripts[i]=t===true?true:n
this._checkScriptLoadOrder()
return true}return false}
t._checkScriptLoadOrder=function(){var e=this._loadedScripts.length
for(var t=0;t<e;t++){var n=this._loadedScripts[t]
if(n===null){break}if(n===true){continue}var i=this._loadedResults[n.id]
if(n.type==createjs.LoadQueue.JAVASCRIPT){(document.body||document.getElementsByTagName("body")[0]).appendChild(i)}var r=n._loader
this._processFinishedLoad(n,r)
this._loadedScripts[t]=true}}
t._processFinishedLoad=function(e,t){if(e.type==createjs.LoadQueue.MANIFEST){var n=t.getResult()
if(n!=null&&n.manifest!==undefined){this.loadManifest(n,true)}}this._numItemsLoaded++
this._updateProgress()
this._sendFileComplete(e,t)
this._loadNext()}
t._canStartLoad=function(e){if(!this.maintainScriptOrder||e instanceof createjs.XHRLoader){return true}var t=e.getItem()
if(t.type!=createjs.LoadQueue.JAVASCRIPT){return true}if(this._currentlyLoadingScript){return false}var n=this._scriptOrder.indexOf(t)
var i=0
while(i<n){var r=this._loadedScripts[i]
if(r==null){return false}i++}this._currentlyLoadingScript=true
return true}
t._removeLoadItem=function(e){var t=e.getItem()
delete t._loader
delete t._loadAsJSONP
var n=this._currentLoads.length
for(var i=0;i<n;i++){if(this._currentLoads[i]==e){this._currentLoads.splice(i,1)
break}}}
t._handleProgress=function(e){var t=e.target
this._sendFileProgress(t.getItem(),t.progress)
this._updateProgress()}
t._updateProgress=function(){var e=this._numItemsLoaded/this._numItems
var t=this._numItems-this._numItemsLoaded
if(t>0){var n=0
for(var i=0,r=this._currentLoads.length;i<r;i++){n+=this._currentLoads[i].progress}e+=n/t*(t/this._numItems)}this._sendProgress(e)}
t._disposeItem=function(e){delete this._loadedResults[e.id]
delete this._loadedRawResults[e.id]
delete this._loadItemsById[e.id]
delete this._loadItemsBySrc[e.src]}
t._createTag=function(e){var t=null
switch(e.type){case createjs.LoadQueue.IMAGE:t=document.createElement("img")
if(this._crossOrigin!=""&&!this._isLocal(e)){t.crossOrigin=this._crossOrigin}return t
case createjs.LoadQueue.SOUND:t=document.createElement("audio")
t.autoplay=false
return t
case createjs.LoadQueue.JSON:case createjs.LoadQueue.JSONP:case createjs.LoadQueue.JAVASCRIPT:case createjs.LoadQueue.MANIFEST:t=document.createElement("script")
t.type="text/javascript"
return t
case createjs.LoadQueue.CSS:if(this.useXHR){t=document.createElement("style")}else{t=document.createElement("link")}t.rel="stylesheet"
t.type="text/css"
return t
case createjs.LoadQueue.SVG:if(this.useXHR){t=document.createElement("svg")}else{t=document.createElement("object")
t.type="image/svg+xml"}return t}return null}
t._getTypeByExtension=function(e){if(e==null){return createjs.LoadQueue.TEXT}switch(e.toLowerCase()){case"jpeg":case"jpg":case"gif":case"png":case"webp":case"bmp":return createjs.LoadQueue.IMAGE
case"ogg":case"mp3":case"wav":return createjs.LoadQueue.SOUND
case"json":return createjs.LoadQueue.JSON
case"xml":return createjs.LoadQueue.XML
case"css":return createjs.LoadQueue.CSS
case"js":return createjs.LoadQueue.JAVASCRIPT
case"svg":return createjs.LoadQueue.SVG
default:return createjs.LoadQueue.TEXT}}
t._sendFileProgress=function(e,t){if(this._isCanceled()){this._cleanUp()
return}if(!this.hasEventListener("fileprogress")){return}var n=new createjs.Event("fileprogress")
n.progress=t
n.loaded=t
n.total=1
n.item=e
this.dispatchEvent(n)}
t._sendFileComplete=function(e,t){if(this._isCanceled()){return}var n=new createjs.Event("fileload")
n.loader=t
n.item=e
n.result=this._loadedResults[e.id]
n.rawResult=this._loadedRawResults[e.id]
if(e.completeHandler){e.completeHandler(n)}this.hasEventListener("fileload")&&this.dispatchEvent(n)}
t._sendFileStart=function(e){var t=new createjs.Event("filestart")
t.item=e
this.hasEventListener("filestart")&&this.dispatchEvent(t)}
t.toString=function(){return"[PreloadJS LoadQueue]"}
createjs.LoadQueue=e
var i=function(){}
i.init=function(){var e=navigator.userAgent
i.isFirefox=e.indexOf("Firefox")>-1
i.isOpera=window.opera!=null
i.isChrome=e.indexOf("Chrome")>-1
i.isIOS=e.indexOf("iPod")>-1||e.indexOf("iPhone")>-1||e.indexOf("iPad")>-1}
i.init()
createjs.LoadQueue.BrowserDetect=i})()
this.createjs=this.createjs||{};(function(){"use strict"
var e=function(e){this.init(e)}
var t=e.prototype=new createjs.AbstractLoader
e.prototype.constructor=e
t._loadTimeout=null
t._tagCompleteProxy=null
t._isAudio=false
t._tag=null
t._jsonResult=null
t.init=function(e){this._item=e
this._tag=e.tag
this._isAudio=window.HTMLAudioElement&&e.tag instanceof window.HTMLAudioElement
this._tagCompleteProxy=createjs.proxy(this._handleLoad,this)}
t.getResult=function(){if(this._item.type==createjs.LoadQueue.JSONP||this._item.type==createjs.LoadQueue.MANIFEST){return this._jsonResult}else{return this._tag}}
t.cancel=function(){this.canceled=true
this._clean()}
t.load=function(){var e=this._item
var t=this._tag
clearTimeout(this._loadTimeout)
var n=createjs.LoadQueue.LOAD_TIMEOUT
if(n==0){n=createjs.LoadQueue.loadTimeout}this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),n)
if(this._isAudio){t.src=null
t.preload="auto"}t.onerror=createjs.proxy(this._handleError,this)
if(this._isAudio){t.onstalled=createjs.proxy(this._handleStalled,this)
t.addEventListener("canplaythrough",this._tagCompleteProxy,false)}else{t.onload=createjs.proxy(this._handleLoad,this)
t.onreadystatechange=createjs.proxy(this._handleReadyStateChange,this)}var i=this.buildPath(e.src,e.values)
switch(e.type){case createjs.LoadQueue.CSS:t.href=i
break
case createjs.LoadQueue.SVG:t.data=i
break
default:t.src=i}if(e.type==createjs.LoadQueue.JSONP||e.type==createjs.LoadQueue.JSON||e.type==createjs.LoadQueue.MANIFEST){if(e.callback==null){throw new Error("callback is required for loading JSONP requests.")}if(window[e.callback]!=null){throw new Error('JSONP callback "'+e.callback+'" already exists on window. You need to specify a different callback. Or re-name the current one.')}window[e.callback]=createjs.proxy(this._handleJSONPLoad,this)}if(e.type==createjs.LoadQueue.SVG||e.type==createjs.LoadQueue.JSONP||e.type==createjs.LoadQueue.JSON||e.type==createjs.LoadQueue.MANIFEST||e.type==createjs.LoadQueue.JAVASCRIPT||e.type==createjs.LoadQueue.CSS){this._startTagVisibility=t.style.visibility
t.style.visibility="hidden"
var r=document.body||document.getElementsByTagName("body")[0]
if(r==null){if(e.type==createjs.LoadQueue.SVG){this._handleSVGError()
return}else{r=document.head||document.getElementsByTagName("head")}}r.appendChild(t)}if(t.load!=null){t.load()}}
t._handleSVGError=function(){this._clean()
var e=new createjs.Event("error")
e.text="SVG_NO_BODY"
this._sendError(e)}
t._handleJSONPLoad=function(e){this._jsonResult=e}
t._handleTimeout=function(){this._clean()
var e=new createjs.Event("error")
e.text="PRELOAD_TIMEOUT"
this._sendError(e)}
t._handleStalled=function(){}
t._handleError=function(e){this._clean()
var t=new createjs.Event("error")
this._sendError(t)}
t._handleReadyStateChange=function(){clearTimeout(this._loadTimeout)
var e=this.getItem().tag
if(e.readyState=="loaded"||e.readyState=="complete"){this._handleLoad()}}
t._handleLoad=function(e){if(this._isCanceled()){return}var t=this.getItem()
var n=t.tag
if(this.loaded||this._isAudio&&n.readyState!==4){return}this.loaded=true
switch(t.type){case createjs.LoadQueue.SVG:case createjs.LoadQueue.JSON:case createjs.LoadQueue.JSONP:case createjs.LoadQueue.MANIFEST:case createjs.LoadQueue.CSS:n.style.visibility=this._startTagVisibility
n.parentNode&&n.parentNode.contains(n)&&n.parentNode.removeChild(n)
break
default:}this._clean()
this._sendComplete()}
t._clean=function(){clearTimeout(this._loadTimeout)
var e=this.getItem()
var t=e.tag
if(t!=null){t.onload=null
t.removeEventListener&&t.removeEventListener("canplaythrough",this._tagCompleteProxy,false)
t.onstalled=null
t.onprogress=null
t.onerror=null
if(t.parentNode!=null&&e.type==createjs.LoadQueue.SVG&&e.type==createjs.LoadQueue.JSON&&e.type==createjs.LoadQueue.MANIFEST&&e.type==createjs.LoadQueue.CSS&&e.type==createjs.LoadQueue.JSONP){t.parentNode.removeChild(t)}}var e=this.getItem()
if(e.type==createjs.LoadQueue.JSONP||e.type==createjs.LoadQueue.MANIFEST){window[e.callback]=null}}
t.toString=function(){return"[PreloadJS TagLoader]"}
createjs.TagLoader=e})()
this.createjs=this.createjs||{};(function(){"use strict"
var e=function(e,t){this.init(e,t)}
var t=e
t.ACTIVEX_VERSIONS=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"]
var n=e.prototype=new createjs.AbstractLoader
e.prototype.constructor=e
n._request=null
n._loadTimeout=null
n._xhrLevel=1
n._response=null
n._rawResponse=null
n._crossOrigin=""
n.init=function(e,t){this._item=e
this._crossOrigin=t
if(!this._createXHR(e)){}}
n.getResult=function(e){if(e&&this._rawResponse){return this._rawResponse}return this._response}
n.cancel=function(){this.canceled=true
this._clean()
this._request.abort()}
n.load=function(){if(this._request==null){this._handleError()
return}this._request.onloadstart=createjs.proxy(this._handleLoadStart,this)
this._request.onprogress=createjs.proxy(this._handleProgress,this)
this._request.onabort=createjs.proxy(this._handleAbort,this)
this._request.onerror=createjs.proxy(this._handleError,this)
this._request.ontimeout=createjs.proxy(this._handleTimeout,this)
if(this._xhrLevel==1){var e=createjs.LoadQueue.LOAD_TIMEOUT
if(e==0){e=createjs.LoadQueue.loadTimeout}else{try{console.warn("LoadQueue.LOAD_TIMEOUT has been deprecated in favor of LoadQueue.loadTimeout")}catch(e){}}this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),e)}this._request.onload=createjs.proxy(this._handleLoad,this)
this._request.onreadystatechange=createjs.proxy(this._handleReadyStateChange,this)
try{if(!this._item.values||this._item.method==createjs.LoadQueue.GET){this._request.send()}else if(this._item.method==createjs.LoadQueue.POST){this._request.send(this._formatQueryString(this._item.values))}}catch(e){var t=new createjs.Event("error")
t.error=e
this._sendError(t)}}
n.getAllResponseHeaders=function(){if(this._request.getAllResponseHeaders instanceof Function){return this._request.getAllResponseHeaders()}else{return null}}
n.getResponseHeader=function(e){if(this._request.getResponseHeader instanceof Function){return this._request.getResponseHeader(e)}else{return null}}
n._handleProgress=function(e){if(!e||e.loaded>0&&e.total==0){return}var t=new createjs.Event("progress")
t.loaded=e.loaded
t.total=e.total
this._sendProgress(t)}
n._handleLoadStart=function(e){clearTimeout(this._loadTimeout)
this._sendLoadStart()}
n._handleAbort=function(e){this._clean()
var t=new createjs.Event("error")
t.text="XHR_ABORTED"
this._sendError(t)}
n._handleError=function(e){this._clean()
var t=new createjs.Event("error")
this._sendError(t)}
n._handleReadyStateChange=function(e){if(this._request.readyState==4){this._handleLoad()}}
n._handleLoad=function(e){if(this.loaded){return}this.loaded=true
if(!this._checkError()){this._handleError()
return}this._response=this._getResponse()
this._clean()
var t=this._generateTag()
if(t){this._sendComplete()}}
n._handleTimeout=function(e){this._clean()
var t=new createjs.Event("error")
t.text="PRELOAD_TIMEOUT"
this._sendError(e)}
n._checkError=function(){var e=parseInt(this._request.status)
switch(e){case 404:case 0:return false}return true}
n._getResponse=function(){if(this._response!=null){return this._response}if(this._request.response!=null){return this._request.response}try{if(this._request.responseText!=null){return this._request.responseText}}catch(e){}try{if(this._request.responseXML!=null){return this._request.responseXML}}catch(e){}return null}
n._createXHR=function(e){var n=this._isCrossDomain(e)
var i={}
var r=null
if(window.XMLHttpRequest){r=new XMLHttpRequest
if(n&&r.withCredentials===undefined&&window.XDomainRequest){r=new XDomainRequest}}else{for(var s=0,a=t.ACTIVEX_VERSIONS.length;s<a;s++){var o=t.ACTIVEX_VERSIONS[s]
try{r=new ActiveXObject(axVersions)
break}catch(e){}}if(r==null){return false}}if(createjs.LoadQueue.isText(e.type)&&r.overrideMimeType){r.overrideMimeType("text/plain; charset=utf-8")}this._xhrLevel=typeof r.responseType==="string"?2:1
var l=null
if(e.method==createjs.LoadQueue.GET){l=this.buildPath(e.src,e.values)}else{l=e.src}r.open(e.method||createjs.LoadQueue.GET,l,true)
if(n&&r instanceof XMLHttpRequest&&this._xhrLevel==1){i["Origin"]=location.origin}if(e.values&&e.method==createjs.LoadQueue.POST){i["Content-Type"]="application/x-www-form-urlencoded"}if(!n&&!i["X-Requested-With"]){i["X-Requested-With"]="XMLHttpRequest"}if(e.headers){for(var u in e.headers){i[u]=e.headers[u]}}if(createjs.LoadQueue.isBinary(e.type)){r.responseType="arraybuffer"}for(u in i){r.setRequestHeader(u,i[u])}this._request=r
return true}
n._clean=function(){clearTimeout(this._loadTimeout)
var e=this._request
e.onloadstart=null
e.onprogress=null
e.onabort=null
e.onerror=null
e.onload=null
e.ontimeout=null
e.onloadend=null
e.onreadystatechange=null}
n._generateTag=function(){var e=this._item.type
var t=this._item.tag
switch(e){case createjs.LoadQueue.IMAGE:t.onload=createjs.proxy(this._handleTagReady,this)
if(this._crossOrigin!=""){t.crossOrigin="Anonymous"}t.src=this.buildPath(this._item.src,this._item.values)
this._rawResponse=this._response
this._response=t
return false
case createjs.LoadQueue.JAVASCRIPT:t=document.createElement("script")
t.text=this._response
this._rawResponse=this._response
this._response=t
return true
case createjs.LoadQueue.CSS:var n=document.getElementsByTagName("head")[0]
n.appendChild(t)
if(t.styleSheet){t.styleSheet.cssText=this._response}else{var i=document.createTextNode(this._response)
t.appendChild(i)}this._rawResponse=this._response
this._response=t
return true
case createjs.LoadQueue.XML:var r=this._parseXML(this._response,"text/xml")
this._rawResponse=this._response
this._response=r
return true
case createjs.LoadQueue.SVG:var r=this._parseXML(this._response,"image/svg+xml")
this._rawResponse=this._response
if(r.documentElement!=null){t.appendChild(r.documentElement)
this._response=t}else{this._response=r}return true
case createjs.LoadQueue.JSON:case createjs.LoadQueue.MANIFEST:var s={}
try{s=JSON.parse(this._response)}catch(e){s=e}this._rawResponse=this._response
this._response=s
return true}return true}
n._parseXML=function(e,t){var n=null
try{if(window.DOMParser){var i=new DOMParser
n=i.parseFromString(e,t)}else{n=new ActiveXObject("Microsoft.XMLDOM")
n.async=false
n.loadXML(e)}}catch(e){}return n}
n._handleTagReady=function(){var e=this._item.tag
e&&(e.onload=null)
this._sendComplete()}
n.toString=function(){return"[PreloadJS XHRLoader]"}
createjs.XHRLoader=e})()
if(typeof JSON!=="object"){JSON={}}(function(){"use strict"
function f(e){return e<10?"0"+e:e}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null}
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep
function quote(e){escapable.lastIndex=0
return escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e]
return typeof t==="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,i,r,s,a=gap,o,l=t[e]
if(l&&typeof l==="object"&&typeof l.toJSON==="function"){l=l.toJSON(e)}if(typeof rep==="function"){l=rep.call(t,e,l)}switch(typeof l){case"string":return quote(l)
case"number":return isFinite(l)?String(l):"null"
case"boolean":case"null":return String(l)
case"object":if(!l){return"null"}gap+=indent
o=[]
if(Object.prototype.toString.apply(l)==="[object Array]"){s=l.length
for(n=0;n<s;n+=1){o[n]=str(n,l)||"null"}r=o.length===0?"[]":gap?"[\n"+gap+o.join(",\n"+gap)+"\n"+a+"]":"["+o.join(",")+"]"
gap=a
return r}if(rep&&typeof rep==="object"){s=rep.length
for(n=0;n<s;n+=1){if(typeof rep[n]==="string"){i=rep[n]
r=str(i,l)
if(r){o.push(quote(i)+(gap?": ":":")+r)}}}}else{for(i in l){if(Object.prototype.hasOwnProperty.call(l,i)){r=str(i,l)
if(r){o.push(quote(i)+(gap?": ":":")+r)}}}}r=o.length===0?"{}":gap?"{\n"+gap+o.join(",\n"+gap)+"\n"+a+"}":"{"+o.join(",")+"}"
gap=a
return r}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(e,t,n){var i
gap=""
indent=""
if(typeof n==="number"){for(i=0;i<n;i+=1){indent+=" "}}else if(typeof n==="string"){indent=n}rep=t
if(t&&typeof t!=="function"&&(typeof t!=="object"||typeof t.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":e})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j
function walk(e,t){var n,i,r=e[t]
if(r&&typeof r==="object"){for(n in r){if(Object.prototype.hasOwnProperty.call(r,n)){i=walk(r,n)
if(i!==undefined){r[n]=i}else{delete r[n]}}}}return reviver.call(e,t,r)}text=String(text)
cx.lastIndex=0
if(cx.test(text)){text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")")
return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}})();(function(e,t){if(typeof define==="function"&&define.amd){define([],t)}else if(typeof module!=="undefined"&&module.exports){module.exports=t()}else{e.tv4=t()}})(this,function(){if(!Object.keys){Object.keys=function(){var e=Object.prototype.hasOwnProperty,t=!{toString:null}.propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],i=n.length
return function(r){if(typeof r!=="object"&&typeof r!=="function"||r===null){throw new TypeError("Object.keys called on non-object")}var s=[]
for(var a in r){if(e.call(r,a)){s.push(a)}}if(t){for(var o=0;o<i;o++){if(e.call(r,n[o])){s.push(n[o])}}}return s}}()}if(!Object.create){Object.create=function(){function e(){}return function(t){if(arguments.length!==1){throw new Error("Object.create implementation only accepts one parameter.")}e.prototype=t
return new e}}()}if(!Array.isArray){Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"}}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(e){if(this===null){throw new TypeError}var t=Object(this)
var n=t.length>>>0
if(n===0){return-1}var i=0
if(arguments.length>1){i=Number(arguments[1])
if(i!==i){i=0}else if(i!==0&&i!==Infinity&&i!==-Infinity){i=(i>0||-1)*Math.floor(Math.abs(i))}}if(i>=n){return-1}var r=i>=0?i:Math.max(n-Math.abs(i),0)
for(;r<n;r++){if(r in t&&t[r]===e){return r}}return-1}}if(!Object.isFrozen){Object.isFrozen=function(e){var t="tv4_test_frozen_key"
while(e.hasOwnProperty(t)){t+=Math.random()}try{e[t]=true
delete e[t]
return false}catch(e){return true}}}var e=function e(t,n,i,r,s){this.missing=[]
this.missingMap={}
this.formatValidators=t?Object.create(t.formatValidators):{}
this.schemas=t?Object.create(t.schemas):{}
this.collectMultiple=n
this.errors=[]
this.handleError=n?this.collectError:this.returnError
if(r){this.checkRecursive=true
this.scanned=[]
this.scannedFrozen=[]
this.scannedFrozenSchemas=[]
this.scannedFrozenValidationErrors=[]
this.validatedSchemasKey="tv4_validation_id"
this.validationErrorsKey="tv4_validation_errors_id"}if(s){this.trackUnknownProperties=true
this.knownPropertyPaths={}
this.unknownPropertyPaths={}}this.errorMessages=i
this.definedKeywords={}
if(t){for(var a in t.definedKeywords){this.definedKeywords[a]=t.definedKeywords[a].slice(0)}}}
e.prototype.defineKeyword=function(e,t){this.definedKeywords[e]=this.definedKeywords[e]||[]
this.definedKeywords[e].push(t)}
e.prototype.createError=function(e,t,n,i,r){var s=this.errorMessages[e]||u[e]
if(typeof s!=="string"){return new f(e,"Unknown error code "+e+": "+JSON.stringify(t),n,i,r)}var a=s.replace(/\{([^{}]*)\}/g,function(e,n){var i=t[n]
return typeof i==="string"||typeof i==="number"?i:e})
return new f(e,a,n,i,r)}
e.prototype.returnError=function(e){return e}
e.prototype.collectError=function(e){if(e){this.errors.push(e)}return null}
e.prototype.prefixErrors=function(e,t,n){for(var i=e;i<this.errors.length;i++){this.errors[i]=this.errors[i].prefixWith(t,n)}return this}
e.prototype.banUnknownProperties=function(){for(var e in this.unknownPropertyPaths){var t=this.createError(a.UNKNOWN_PROPERTY,{path:e},e,"")
var n=this.handleError(t)
if(n){return n}}return null}
e.prototype.addFormat=function(e,t){if(typeof e==="object"){for(var n in e){this.addFormat(n,e[n])}return this}this.formatValidators[e]=t}
e.prototype.resolveRefs=function(e,t){if(e["$ref"]!==undefined){t=t||{}
if(t[e["$ref"]]){return this.createError(a.CIRCULAR_REFERENCE,{urls:Object.keys(t).join(", ")},"","")}t[e["$ref"]]=true
e=this.getSchema(e["$ref"],t)}return e}
e.prototype.getSchema=function(e,t){var n
if(this.schemas[e]!==undefined){n=this.schemas[e]
return this.resolveRefs(n,t)}var i=e
var r=""
if(e.indexOf("#")!==-1){r=e.substring(e.indexOf("#")+1)
i=e.substring(0,e.indexOf("#"))}if(typeof this.schemas[i]==="object"){n=this.schemas[i]
var s=decodeURIComponent(r)
if(s===""){return this.resolveRefs(n,t)}else if(s.charAt(0)!=="/"){return undefined}var a=s.split("/").slice(1)
for(var o=0;o<a.length;o++){var l=a[o].replace(/~1/g,"/").replace(/~0/g,"~")
if(n[l]===undefined){n=undefined
break}n=n[l]}if(n!==undefined){return this.resolveRefs(n,t)}}if(this.missing[i]===undefined){this.missing.push(i)
this.missing[i]=i
this.missingMap[i]=i}}
e.prototype.searchSchemas=function(e,t){if(e&&typeof e==="object"){if(typeof e.id==="string"){if(c(t,e.id)){if(this.schemas[e.id]===undefined){this.schemas[e.id]=e}}}for(var n in e){if(n!=="enum"){if(typeof e[n]==="object"){this.searchSchemas(e[n],t)}else if(n==="$ref"){var i=r(e[n])
if(i&&this.schemas[i]===undefined&&this.missingMap[i]===undefined){this.missingMap[i]=i}}}}}}
e.prototype.addSchema=function(e,t){if(typeof e!=="string"||typeof t==="undefined"){if(typeof e==="object"&&typeof e.id==="string"){t=e
e=t.id}else{return}}if(e=r(e)+"#"){e=r(e)}this.schemas[e]=t
delete this.missingMap[e]
s(t,e)
this.searchSchemas(t,e)}
e.prototype.getSchemaMap=function(){var e={}
for(var t in this.schemas){e[t]=this.schemas[t]}return e}
e.prototype.getSchemaUris=function(e){var t=[]
for(var n in this.schemas){if(!e||e.test(n)){t.push(n)}}return t}
e.prototype.getMissingUris=function(e){var t=[]
for(var n in this.missingMap){if(!e||e.test(n)){t.push(n)}}return t}
e.prototype.dropSchemas=function(){this.schemas={}
this.reset()}
e.prototype.reset=function(){this.missing=[]
this.missingMap={}
this.errors=[]}
e.prototype.validateAll=function(e,t,n,i,r){var s
t=this.resolveRefs(t)
if(!t){return null}else if(t instanceof f){this.errors.push(t)
return t}var a=this.errors.length
var o,l=null,u=null
if(this.checkRecursive&&e&&typeof e==="object"){s=!this.scanned.length
if(e[this.validatedSchemasKey]){var c=e[this.validatedSchemasKey].indexOf(t)
if(c!==-1){this.errors=this.errors.concat(e[this.validationErrorsKey][c])
return null}}if(Object.isFrozen(e)){o=this.scannedFrozen.indexOf(e)
if(o!==-1){var h=this.scannedFrozenSchemas[o].indexOf(t)
if(h!==-1){this.errors=this.errors.concat(this.scannedFrozenValidationErrors[o][h])
return null}}}this.scanned.push(e)
if(Object.isFrozen(e)){if(o===-1){o=this.scannedFrozen.length
this.scannedFrozen.push(e)
this.scannedFrozenSchemas.push([])}l=this.scannedFrozenSchemas[o].length
this.scannedFrozenSchemas[o][l]=t
this.scannedFrozenValidationErrors[o][l]=[]}else{if(!e[this.validatedSchemasKey]){try{Object.defineProperty(e,this.validatedSchemasKey,{value:[],configurable:true})
Object.defineProperty(e,this.validationErrorsKey,{value:[],configurable:true})}catch(t){e[this.validatedSchemasKey]=[]
e[this.validationErrorsKey]=[]}}u=e[this.validatedSchemasKey].length
e[this.validatedSchemasKey][u]=t
e[this.validationErrorsKey][u]=[]}}var d=this.errors.length
var p=this.validateBasic(e,t,r)||this.validateNumeric(e,t,r)||this.validateString(e,t,r)||this.validateArray(e,t,r)||this.validateObject(e,t,r)||this.validateCombinations(e,t,r)||this.validateFormat(e,t,r)||this.validateDefinedKeywords(e,t,r)||null
if(s){while(this.scanned.length){var m=this.scanned.pop()
delete m[this.validatedSchemasKey]}this.scannedFrozen=[]
this.scannedFrozenSchemas=[]}if(p||d!==this.errors.length){while(n&&n.length||i&&i.length){var v=n&&n.length?""+n.pop():null
var g=i&&i.length?""+i.pop():null
if(p){p=p.prefixWith(v,g)}this.prefixErrors(d,v,g)}}if(l!==null){this.scannedFrozenValidationErrors[o][l]=this.errors.slice(a)}else if(u!==null){e[this.validationErrorsKey][u]=this.errors.slice(a)}return this.handleError(p)}
e.prototype.validateFormat=function(e,t){if(typeof t.format!=="string"||!this.formatValidators[t.format]){return null}var n=this.formatValidators[t.format].call(null,e,t)
if(typeof n==="string"||typeof n==="number"){return this.createError(a.FORMAT_CUSTOM,{message:n}).prefixWith(null,"format")}else if(n&&typeof n==="object"){return this.createError(a.FORMAT_CUSTOM,{message:n.message||"?"},n.dataPath||null,n.schemaPath||"/format")}return null}
e.prototype.validateDefinedKeywords=function(e,t){for(var n in this.definedKeywords){var i=this.definedKeywords[n]
for(var r=0;r<i.length;r++){var s=i[r]
var o=s(e,t[n],t)
if(typeof o==="string"||typeof o==="number"){return this.createError(a.KEYWORD_CUSTOM,{key:n,message:o}).prefixWith(null,"format")}else if(o&&typeof o==="object"){var l=o.code||a.KEYWORD_CUSTOM
if(typeof l==="string"){if(!a[l]){throw new Error("Undefined error code (use defineError): "+l)}l=a[l]}var u=typeof o.message==="object"?o.message:{key:n,message:o.message||"?"}
var f=o.schemaPath||"/"+n.replace(/~/g,"~0").replace(/\//g,"~1")
return this.createError(l,u,o.dataPath||null,f)}}}return null}
function t(e,n){if(e===n){return true}if(typeof e==="object"&&typeof n==="object"){if(Array.isArray(e)!==Array.isArray(n)){return false}else if(Array.isArray(e)){if(e.length!==n.length){return false}for(var i=0;i<e.length;i++){if(!t(e[i],n[i])){return false}}}else{var r
for(r in e){if(n[r]===undefined&&e[r]!==undefined){return false}}for(r in n){if(e[r]===undefined&&n[r]!==undefined){return false}}for(r in e){if(!t(e[r],n[r])){return false}}}return true}return false}e.prototype.validateBasic=function e(t,n,i){var r
if(r=this.validateType(t,n,i)){return r.prefixWith(null,"type")}if(r=this.validateEnum(t,n,i)){return r.prefixWith(null,"type")}return null}
e.prototype.validateType=function e(t,n){if(n.type===undefined){return null}var i=typeof t
if(t===null){i="null"}else if(Array.isArray(t)){i="array"}var r=n.type
if(typeof r!=="object"){r=[r]}for(var s=0;s<r.length;s++){var o=r[s]
if(o===i||o==="integer"&&i==="number"&&t%1===0){return null}}return this.createError(a.INVALID_TYPE,{type:i,expected:r.join("/")})}
e.prototype.validateEnum=function e(n,i){if(i["enum"]===undefined){return null}for(var r=0;r<i["enum"].length;r++){var s=i["enum"][r]
if(t(n,s)){return null}}return this.createError(a.ENUM_MISMATCH,{value:typeof JSON!=="undefined"?JSON.stringify(n):n})}
e.prototype.validateNumeric=function e(t,n,i){return this.validateMultipleOf(t,n,i)||this.validateMinMax(t,n,i)||null}
e.prototype.validateMultipleOf=function e(t,n){var i=n.multipleOf||n.divisibleBy
if(i===undefined){return null}if(typeof t==="number"){if(t%i!==0){return this.createError(a.NUMBER_MULTIPLE_OF,{value:t,multipleOf:i})}}return null}
e.prototype.validateMinMax=function e(t,n){if(typeof t!=="number"){return null}if(n.minimum!==undefined){if(t<n.minimum){return this.createError(a.NUMBER_MINIMUM,{value:t,minimum:n.minimum}).prefixWith(null,"minimum")}if(n.exclusiveMinimum&&t===n.minimum){return this.createError(a.NUMBER_MINIMUM_EXCLUSIVE,{value:t,minimum:n.minimum}).prefixWith(null,"exclusiveMinimum")}}if(n.maximum!==undefined){if(t>n.maximum){return this.createError(a.NUMBER_MAXIMUM,{value:t,maximum:n.maximum}).prefixWith(null,"maximum")}if(n.exclusiveMaximum&&t===n.maximum){return this.createError(a.NUMBER_MAXIMUM_EXCLUSIVE,{value:t,maximum:n.maximum}).prefixWith(null,"exclusiveMaximum")}}return null}
e.prototype.validateString=function e(t,n,i){return this.validateStringLength(t,n,i)||this.validateStringPattern(t,n,i)||null}
e.prototype.validateStringLength=function e(t,n){if(typeof t!=="string"){return null}if(n.minLength!==undefined){if(t.length<n.minLength){return this.createError(a.STRING_LENGTH_SHORT,{length:t.length,minimum:n.minLength}).prefixWith(null,"minLength")}}if(n.maxLength!==undefined){if(t.length>n.maxLength){return this.createError(a.STRING_LENGTH_LONG,{length:t.length,maximum:n.maxLength}).prefixWith(null,"maxLength")}}return null}
e.prototype.validateStringPattern=function e(t,n){if(typeof t!=="string"||n.pattern===undefined){return null}var i=new RegExp(n.pattern)
if(!i.test(t)){return this.createError(a.STRING_PATTERN,{pattern:n.pattern}).prefixWith(null,"pattern")}return null}
e.prototype.validateArray=function e(t,n,i){if(!Array.isArray(t)){return null}return this.validateArrayLength(t,n,i)||this.validateArrayUniqueItems(t,n,i)||this.validateArrayItems(t,n,i)||null}
e.prototype.validateArrayLength=function e(t,n){var i
if(n.minItems!==undefined){if(t.length<n.minItems){i=this.createError(a.ARRAY_LENGTH_SHORT,{length:t.length,minimum:n.minItems}).prefixWith(null,"minItems")
if(this.handleError(i)){return i}}}if(n.maxItems!==undefined){if(t.length>n.maxItems){i=this.createError(a.ARRAY_LENGTH_LONG,{length:t.length,maximum:n.maxItems}).prefixWith(null,"maxItems")
if(this.handleError(i)){return i}}}return null}
e.prototype.validateArrayUniqueItems=function e(n,i){if(i.uniqueItems){for(var r=0;r<n.length;r++){for(var s=r+1;s<n.length;s++){if(t(n[r],n[s])){var o=this.createError(a.ARRAY_UNIQUE,{match1:r,match2:s}).prefixWith(null,"uniqueItems")
if(this.handleError(o)){return o}}}}}return null}
e.prototype.validateArrayItems=function e(t,n,i){if(n.items===undefined){return null}var r,s
if(Array.isArray(n.items)){for(s=0;s<t.length;s++){if(s<n.items.length){if(r=this.validateAll(t[s],n.items[s],[s],["items",s],i+"/"+s)){return r}}else if(n.additionalItems!==undefined){if(typeof n.additionalItems==="boolean"){if(!n.additionalItems){r=this.createError(a.ARRAY_ADDITIONAL_ITEMS,{}).prefixWith(""+s,"additionalItems")
if(this.handleError(r)){return r}}}else if(r=this.validateAll(t[s],n.additionalItems,[s],["additionalItems"],i+"/"+s)){return r}}}}else{for(s=0;s<t.length;s++){if(r=this.validateAll(t[s],n.items,[s],["items"],i+"/"+s)){return r}}}return null}
e.prototype.validateObject=function e(t,n,i){if(typeof t!=="object"||t===null||Array.isArray(t)){return null}return this.validateObjectMinMaxProperties(t,n,i)||this.validateObjectRequiredProperties(t,n,i)||this.validateObjectProperties(t,n,i)||this.validateObjectDependencies(t,n,i)||null}
e.prototype.validateObjectMinMaxProperties=function e(t,n){var i=Object.keys(t)
var r
if(n.minProperties!==undefined){if(i.length<n.minProperties){r=this.createError(a.OBJECT_PROPERTIES_MINIMUM,{propertyCount:i.length,minimum:n.minProperties}).prefixWith(null,"minProperties")
if(this.handleError(r)){return r}}}if(n.maxProperties!==undefined){if(i.length>n.maxProperties){r=this.createError(a.OBJECT_PROPERTIES_MAXIMUM,{propertyCount:i.length,maximum:n.maxProperties}).prefixWith(null,"maxProperties")
if(this.handleError(r)){return r}}}return null}
e.prototype.validateObjectRequiredProperties=function e(t,n){if(n.required!==undefined){for(var i=0;i<n.required.length;i++){var r=n.required[i]
if(t[r]===undefined){var s=this.createError(a.OBJECT_REQUIRED,{key:r}).prefixWith(null,""+i).prefixWith(null,"required")
if(this.handleError(s)){return s}}}}return null}
e.prototype.validateObjectProperties=function e(t,n,i){var r
for(var s in t){var o=i+"/"+s.replace(/~/g,"~0").replace(/\//g,"~1")
var l=false
if(n.properties!==undefined&&n.properties[s]!==undefined){l=true
if(r=this.validateAll(t[s],n.properties[s],[s],["properties",s],o)){return r}}if(n.patternProperties!==undefined){for(var u in n.patternProperties){var f=new RegExp(u)
if(f.test(s)){l=true
if(r=this.validateAll(t[s],n.patternProperties[u],[s],["patternProperties",u],o)){return r}}}}if(!l){if(n.additionalProperties!==undefined){if(this.trackUnknownProperties){this.knownPropertyPaths[o]=true
delete this.unknownPropertyPaths[o]}if(typeof n.additionalProperties==="boolean"){if(!n.additionalProperties){r=this.createError(a.OBJECT_ADDITIONAL_PROPERTIES,{}).prefixWith(s,"additionalProperties")
if(this.handleError(r)){return r}}}else{if(r=this.validateAll(t[s],n.additionalProperties,[s],["additionalProperties"],o)){return r}}}else if(this.trackUnknownProperties&&!this.knownPropertyPaths[o]){this.unknownPropertyPaths[o]=true}}else if(this.trackUnknownProperties){this.knownPropertyPaths[o]=true
delete this.unknownPropertyPaths[o]}}return null}
e.prototype.validateObjectDependencies=function e(t,n,i){var r
if(n.dependencies!==undefined){for(var s in n.dependencies){if(t[s]!==undefined){var o=n.dependencies[s]
if(typeof o==="string"){if(t[o]===undefined){r=this.createError(a.OBJECT_DEPENDENCY_KEY,{key:s,missing:o}).prefixWith(null,s).prefixWith(null,"dependencies")
if(this.handleError(r)){return r}}}else if(Array.isArray(o)){for(var l=0;l<o.length;l++){var u=o[l]
if(t[u]===undefined){r=this.createError(a.OBJECT_DEPENDENCY_KEY,{key:s,missing:u}).prefixWith(null,""+l).prefixWith(null,s).prefixWith(null,"dependencies")
if(this.handleError(r)){return r}}}}else{if(r=this.validateAll(t,o,[],["dependencies",s],i)){return r}}}}}return null}
e.prototype.validateCombinations=function e(t,n,i){return this.validateAllOf(t,n,i)||this.validateAnyOf(t,n,i)||this.validateOneOf(t,n,i)||this.validateNot(t,n,i)||null}
e.prototype.validateAllOf=function e(t,n,i){if(n.allOf===undefined){return null}var r
for(var s=0;s<n.allOf.length;s++){var a=n.allOf[s]
if(r=this.validateAll(t,a,[],["allOf",s],i)){return r}}return null}
e.prototype.validateAnyOf=function e(t,n,i){if(n.anyOf===undefined){return null}var r=[]
var s=this.errors.length
var o,l
if(this.trackUnknownProperties){o=this.unknownPropertyPaths
l=this.knownPropertyPaths}var u=true
for(var f=0;f<n.anyOf.length;f++){if(this.trackUnknownProperties){this.unknownPropertyPaths={}
this.knownPropertyPaths={}}var c=n.anyOf[f]
var h=this.errors.length
var d=this.validateAll(t,c,[],["anyOf",f],i)
if(d===null&&h===this.errors.length){this.errors=this.errors.slice(0,s)
if(this.trackUnknownProperties){for(var p in this.knownPropertyPaths){l[p]=true
delete o[p]}for(var m in this.unknownPropertyPaths){if(!l[m]){o[m]=true}}u=false
continue}return null}if(d){r.push(d.prefixWith(null,""+f).prefixWith(null,"anyOf"))}}if(this.trackUnknownProperties){this.unknownPropertyPaths=o
this.knownPropertyPaths=l}if(u){r=r.concat(this.errors.slice(s))
this.errors=this.errors.slice(0,s)
return this.createError(a.ANY_OF_MISSING,{},"","/anyOf",r)}}
e.prototype.validateOneOf=function e(t,n,i){if(n.oneOf===undefined){return null}var r=null
var s=[]
var o=this.errors.length
var l,u
if(this.trackUnknownProperties){l=this.unknownPropertyPaths
u=this.knownPropertyPaths}for(var f=0;f<n.oneOf.length;f++){if(this.trackUnknownProperties){this.unknownPropertyPaths={}
this.knownPropertyPaths={}}var c=n.oneOf[f]
var h=this.errors.length
var d=this.validateAll(t,c,[],["oneOf",f],i)
if(d===null&&h===this.errors.length){if(r===null){r=f}else{this.errors=this.errors.slice(0,o)
return this.createError(a.ONE_OF_MULTIPLE,{index1:r,index2:f},"","/oneOf")}if(this.trackUnknownProperties){for(var p in this.knownPropertyPaths){u[p]=true
delete l[p]}for(var m in this.unknownPropertyPaths){if(!u[m]){l[m]=true}}}}else if(d){s.push(d.prefixWith(null,""+f).prefixWith(null,"oneOf"))}}if(this.trackUnknownProperties){this.unknownPropertyPaths=l
this.knownPropertyPaths=u}if(r===null){s=s.concat(this.errors.slice(o))
this.errors=this.errors.slice(0,o)
return this.createError(a.ONE_OF_MISSING,{},"","/oneOf",s)}else{this.errors=this.errors.slice(0,o)}return null}
e.prototype.validateNot=function e(t,n,i){if(n.not===undefined){return null}var r=this.errors.length
var s,o
if(this.trackUnknownProperties){s=this.unknownPropertyPaths
o=this.knownPropertyPaths
this.unknownPropertyPaths={}
this.knownPropertyPaths={}}var l=this.validateAll(t,n.not,null,null,i)
var u=this.errors.slice(r)
this.errors=this.errors.slice(0,r)
if(this.trackUnknownProperties){this.unknownPropertyPaths=s
this.knownPropertyPaths=o}if(l===null&&u.length===0){return this.createError(a.NOT_PASSED,{},"","/not")}return null}
function n(e){var t=String(e).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/)
return t?{href:t[0]||"",protocol:t[1]||"",authority:t[2]||"",host:t[3]||"",hostname:t[4]||"",port:t[5]||"",pathname:t[6]||"",search:t[7]||"",hash:t[8]||""}:null}function i(e,t){function i(e){var t=[]
e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){if(e==="/.."){t.pop()}else{t.push(e)}})
return t.join("").replace(/^\//,e.charAt(0)==="/"?"/":"")}t=n(t||"")
e=n(e||"")
return!t||!e?null:(t.protocol||e.protocol)+(t.protocol||t.authority?t.authority:e.authority)+i(t.protocol||t.authority||t.pathname.charAt(0)==="/"?t.pathname:t.pathname?(e.authority&&!e.pathname?"/":"")+e.pathname.slice(0,e.pathname.lastIndexOf("/")+1)+t.pathname:e.pathname)+(t.protocol||t.authority||t.pathname?t.search:t.search||e.search)+t.hash}function r(e){return e.split("#")[0]}function s(e,t){if(e&&typeof e==="object"){if(t===undefined){t=e.id}else if(typeof e.id==="string"){t=i(t,e.id)
e.id=t}if(Array.isArray(e)){for(var n=0;n<e.length;n++){s(e[n],t)}}else{if(typeof e["$ref"]==="string"){e["$ref"]=i(t,e["$ref"])}for(var r in e){if(r!=="enum"){s(e[r],t)}}}}}var a={INVALID_TYPE:0,ENUM_MISMATCH:1,ANY_OF_MISSING:10,ONE_OF_MISSING:11,ONE_OF_MULTIPLE:12,NOT_PASSED:13,NUMBER_MULTIPLE_OF:100,NUMBER_MINIMUM:101,NUMBER_MINIMUM_EXCLUSIVE:102,NUMBER_MAXIMUM:103,NUMBER_MAXIMUM_EXCLUSIVE:104,STRING_LENGTH_SHORT:200,STRING_LENGTH_LONG:201,STRING_PATTERN:202,OBJECT_PROPERTIES_MINIMUM:300,OBJECT_PROPERTIES_MAXIMUM:301,OBJECT_REQUIRED:302,OBJECT_ADDITIONAL_PROPERTIES:303,OBJECT_DEPENDENCY_KEY:304,ARRAY_LENGTH_SHORT:400,ARRAY_LENGTH_LONG:401,ARRAY_UNIQUE:402,ARRAY_ADDITIONAL_ITEMS:403,FORMAT_CUSTOM:500,KEYWORD_CUSTOM:501,CIRCULAR_REFERENCE:600,UNKNOWN_PROPERTY:1e3}
var o={}
for(var l in a){o[a[l]]=l}var u={INVALID_TYPE:"invalid type: {type} (expected {expected})",ENUM_MISMATCH:"No enum match for: {value}",ANY_OF_MISSING:'Data does not match any schemas from "anyOf"',ONE_OF_MISSING:'Data does not match any schemas from "oneOf"',ONE_OF_MULTIPLE:'Data is valid against more than one schema from "oneOf": indices {index1} and {index2}',NOT_PASSED:'Data matches schema from "not"',NUMBER_MULTIPLE_OF:"Value {value} is not a multiple of {multipleOf}",NUMBER_MINIMUM:"Value {value} is less than minimum {minimum}",NUMBER_MINIMUM_EXCLUSIVE:"Value {value} is equal to exclusive minimum {minimum}",NUMBER_MAXIMUM:"Value {value} is greater than maximum {maximum}",NUMBER_MAXIMUM_EXCLUSIVE:"Value {value} is equal to exclusive maximum {maximum}",STRING_LENGTH_SHORT:"String is too short ({length} chars), minimum {minimum}",STRING_LENGTH_LONG:"String is too long ({length} chars), maximum {maximum}",STRING_PATTERN:"String does not match pattern: {pattern}",OBJECT_PROPERTIES_MINIMUM:"Too few properties defined ({propertyCount}), minimum {minimum}",OBJECT_PROPERTIES_MAXIMUM:"Too many properties defined ({propertyCount}), maximum {maximum}",OBJECT_REQUIRED:"Missing required property: {key}",OBJECT_ADDITIONAL_PROPERTIES:"Additional properties not allowed",OBJECT_DEPENDENCY_KEY:"Dependency failed - key must exist: {missing} (due to key: {key})",ARRAY_LENGTH_SHORT:"Array is too short ({length}), minimum {minimum}",ARRAY_LENGTH_LONG:"Array is too long ({length}), maximum {maximum}",ARRAY_UNIQUE:"Array items are not unique (indices {match1} and {match2})",ARRAY_ADDITIONAL_ITEMS:"Additional items not allowed",FORMAT_CUSTOM:"Format validation failed ({message})",KEYWORD_CUSTOM:"Keyword failed: {key} ({message})",CIRCULAR_REFERENCE:"Circular $refs: {urls}",UNKNOWN_PROPERTY:"Unknown property (not in schema)"}
function f(e,t,n,i,r){Error.call(this)
if(e===undefined){throw new Error("No code supplied for error: "+t)}this.message=t
this.code=e
this.dataPath=n||""
this.schemaPath=i||""
this.subErrors=r||null
var s=new Error(this.message)
this.stack=s.stack||s.stacktrace
if(!this.stack){try{throw s}catch(e){this.stack=e.stack||e.stacktrace}}}f.prototype=Object.create(Error.prototype)
f.prototype.constructor=f
f.prototype.name="ValidationError"
f.prototype.prefixWith=function(e,t){if(e!==null){e=e.replace(/~/g,"~0").replace(/\//g,"~1")
this.dataPath="/"+e+this.dataPath}if(t!==null){t=t.replace(/~/g,"~0").replace(/\//g,"~1")
this.schemaPath="/"+t+this.schemaPath}if(this.subErrors!==null){for(var n=0;n<this.subErrors.length;n++){this.subErrors[n].prefixWith(e,t)}}return this}
function c(e,t){if(t.substring(0,e.length)===e){var n=t.substring(e.length)
if(t.length>0&&t.charAt(e.length-1)==="/"||n.charAt(0)==="#"||n.charAt(0)==="?"){return true}}return false}var h={}
function d(t){var n=new e
var l=t||"en"
var f={addFormat:function(){n.addFormat.apply(n,arguments)},language:function(e){if(!e){return l}if(!h[e]){e=e.split("-")[0]}if(h[e]){l=e
return e}return false},addLanguage:function(e,t){var n
for(n in a){if(t[n]&&!t[a[n]]){t[a[n]]=t[n]}}var i=e.split("-")[0]
if(!h[i]){h[e]=t
h[i]=t}else{h[e]=Object.create(h[i])
for(n in t){if(typeof h[i][n]==="undefined"){h[i][n]=t[n]}h[e][n]=t[n]}}return this},freshApi:function(e){var t=d()
if(e){t.language(e)}return t},validate:function(t,i,r,s){var a=new e(n,false,h[l],r,s)
if(typeof i==="string"){i={$ref:i}}a.addSchema("",i)
var o=a.validateAll(t,i,null,null,"")
if(!o&&s){o=a.banUnknownProperties()}this.error=o
this.missing=a.missing
this.valid=o===null
return this.valid},validateResult:function(){var e={}
this.validate.apply(e,arguments)
return e},validateMultiple:function(t,i,r,s){var a=new e(n,true,h[l],r,s)
if(typeof i==="string"){i={$ref:i}}a.addSchema("",i)
a.validateAll(t,i,null,null,"")
if(s){a.banUnknownProperties()}var o={}
o.errors=a.errors
o.missing=a.missing
o.valid=o.errors.length===0
return o},addSchema:function(){return n.addSchema.apply(n,arguments)},getSchema:function(){return n.getSchema.apply(n,arguments)},getSchemaMap:function(){return n.getSchemaMap.apply(n,arguments)},getSchemaUris:function(){return n.getSchemaUris.apply(n,arguments)},getMissingUris:function(){return n.getMissingUris.apply(n,arguments)},dropSchemas:function(){n.dropSchemas.apply(n,arguments)},defineKeyword:function(){n.defineKeyword.apply(n,arguments)},defineError:function(e,t,n){if(typeof e!=="string"||!/^[A-Z]+(_[A-Z]+)*$/.test(e)){throw new Error("Code name must be a string in UPPER_CASE_WITH_UNDERSCORES")}if(typeof t!=="number"||t%1!==0||t<1e4){throw new Error("Code number must be an integer > 10000")}if(typeof a[e]!=="undefined"){throw new Error("Error already defined: "+e+" as "+a[e])}if(typeof o[t]!=="undefined"){throw new Error("Error code already used: "+o[t]+" as "+t)}a[e]=t
o[t]=e
u[e]=u[t]=n
for(var i in h){var r=h[i]
if(r[e]){r[t]=r[t]||r[e]}}},reset:function(){n.reset()
this.error=null
this.missing=[]
this.valid=true},missing:[],error:null,valid:true,normSchema:s,resolveUrl:i,getDocumentUri:r,errorCodes:a}
return f}var p=d()
p.addLanguage("en-gb",u)
p.tv4=p
return p});(function(){"use strict"
function e(t,i){var r
i=i||{}
this.trackingClick=false
this.trackingClickStart=0
this.targetElement=null
this.touchStartX=0
this.touchStartY=0
this.lastTouchIdentifier=0
this.touchBoundary=i.touchBoundary||10
this.layer=t
this.tapDelay=i.tapDelay||200
this.tapTimeout=i.tapTimeout||700
if(e.notNeeded(t)){return}function s(e,t){return function(){return e.apply(t,arguments)}}var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"]
var o=this
for(var l=0,u=a.length;l<u;l++){o[a[l]]=s(o[a[l]],o)}if(n){t.addEventListener("mouseover",this.onMouse,true)
t.addEventListener("mousedown",this.onMouse,true)
t.addEventListener("mouseup",this.onMouse,true)}t.addEventListener("click",this.onClick,true)
t.addEventListener("touchstart",this.onTouchStart,false)
t.addEventListener("touchmove",this.onTouchMove,false)
t.addEventListener("touchend",this.onTouchEnd,false)
t.addEventListener("touchcancel",this.onTouchCancel,false)
if(!Event.prototype.stopImmediatePropagation){t.removeEventListener=function(e,n,i){var r=Node.prototype.removeEventListener
if(e==="click"){r.call(t,e,n.hijacked||n,i)}else{r.call(t,e,n,i)}}
t.addEventListener=function(e,n,i){var r=Node.prototype.addEventListener
if(e==="click"){r.call(t,e,n.hijacked||(n.hijacked=function(e){if(!e.propagationStopped){n(e)}}),i)}else{r.call(t,e,n,i)}}}if(typeof t.onclick==="function"){r=t.onclick
t.addEventListener("click",function(e){r(e)},false)
t.onclick=null}}var t=navigator.userAgent.indexOf("Windows Phone")>=0
var n=navigator.userAgent.indexOf("Android")>0&&!t
var i=/iP(ad|hone|od)/.test(navigator.userAgent)&&!t
var r=i&&/OS 4_\d(_\d)?/.test(navigator.userAgent)
var s=i&&/OS [6-7]_\d/.test(navigator.userAgent)
var a=navigator.userAgent.indexOf("BB10")>0
e.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled){return true}break
case"input":if(i&&e.type==="file"||e.disabled){return true}break
case"label":case"iframe":case"video":return true}return/\bneedsclick\b/.test(e.className)}
e.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return true
case"select":return!n
case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return!e.disabled&&!e.readOnly
default:return/\bneedsfocus\b/.test(e.className)}}
e.prototype.sendClick=function(e,t){var n,i
if(document.activeElement&&document.activeElement!==e){document.activeElement.blur()}i=t.changedTouches[0]
n=document.createEvent("MouseEvents")
n.initMouseEvent(this.determineEventType(e),true,true,window,1,i.screenX,i.screenY,i.clientX,i.clientY,false,false,false,false,0,null)
n.forwardedTouchEvent=true
e.dispatchEvent(n)}
e.prototype.determineEventType=function(e){if(n&&e.tagName.toLowerCase()==="select"){return"mousedown"}return"click"}
e.prototype.focus=function(e){var t
if(i&&e.setSelectionRange&&e.type.indexOf("date")!==0&&e.type!=="time"&&e.type!=="month"){t=e.value.length
e.setSelectionRange(t,t)}else{e.focus()}}
e.prototype.updateScrollParent=function(e){var t,n
t=e.fastClickScrollParent
if(!t||!t.contains(e)){n=e
do{if(n.scrollHeight>n.offsetHeight){t=n
e.fastClickScrollParent=n
break}n=n.parentElement}while(n)}if(t){t.fastClickLastScrollTop=t.scrollTop}}
e.prototype.getTargetElementFromEventTarget=function(e){if(e.nodeType===Node.TEXT_NODE){return e.parentNode}return e}
e.prototype.onTouchStart=function(e){var t,n,s
if(e.targetTouches.length>1){return true}t=this.getTargetElementFromEventTarget(e.target)
n=e.targetTouches[0]
if(i){s=window.getSelection()
if(s.rangeCount&&!s.isCollapsed){return true}if(!r){if(n.identifier&&n.identifier===this.lastTouchIdentifier){e.preventDefault()
return false}this.lastTouchIdentifier=n.identifier
this.updateScrollParent(t)}}this.trackingClick=true
this.trackingClickStart=e.timeStamp
this.targetElement=t
this.touchStartX=n.pageX
this.touchStartY=n.pageY
if(e.timeStamp-this.lastClickTime<this.tapDelay){e.preventDefault()}return true}
e.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary
if(Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n){return true}return false}
e.prototype.onTouchMove=function(e){if(!this.trackingClick){return true}if(this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e)){this.trackingClick=false
this.targetElement=null}return true}
e.prototype.findControl=function(e){if(e.control!==undefined){return e.control}if(e.htmlFor){return document.getElementById(e.htmlFor)}return e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")}
e.prototype.onTouchEnd=function(e){var t,a,o,l,u,f=this.targetElement
if(!this.trackingClick){return true}if(e.timeStamp-this.lastClickTime<this.tapDelay){this.cancelNextClick=true
return true}if(e.timeStamp-this.trackingClickStart>this.tapTimeout){return true}this.cancelNextClick=false
this.lastClickTime=e.timeStamp
a=this.trackingClickStart
this.trackingClick=false
this.trackingClickStart=0
if(s){u=e.changedTouches[0]
f=document.elementFromPoint(u.pageX-window.pageXOffset,u.pageY-window.pageYOffset)||f
f.fastClickScrollParent=this.targetElement.fastClickScrollParent}o=f.tagName.toLowerCase()
if(o==="label"){t=this.findControl(f)
if(t){this.focus(f)
if(n){return false}f=t}}else if(this.needsFocus(f)){if(e.timeStamp-a>100||i&&window.top!==window&&o==="input"){this.targetElement=null
return false}this.focus(f)
this.sendClick(f,e)
if(!i||o!=="select"){this.targetElement=null
e.preventDefault()}return false}if(i&&!r){l=f.fastClickScrollParent
if(l&&l.fastClickLastScrollTop!==l.scrollTop){return true}}if(!this.needsClick(f)){e.preventDefault()
this.sendClick(f,e)}return false}
e.prototype.onTouchCancel=function(){this.trackingClick=false
this.targetElement=null}
e.prototype.onMouse=function(e){if(!this.targetElement){return true}if(e.forwardedTouchEvent){return true}if(!e.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(e.stopImmediatePropagation){e.stopImmediatePropagation()}else{e.propagationStopped=true}e.stopPropagation()
e.preventDefault()
return false}return true}
e.prototype.onClick=function(e){var t
if(this.trackingClick){this.targetElement=null
this.trackingClick=false
return true}if(e.target.type==="submit"&&e.detail===0){return true}t=this.onMouse(e)
if(!t){this.targetElement=null}return t}
e.prototype.destroy=function(){var e=this.layer
if(n){e.removeEventListener("mouseover",this.onMouse,true)
e.removeEventListener("mousedown",this.onMouse,true)
e.removeEventListener("mouseup",this.onMouse,true)}e.removeEventListener("click",this.onClick,true)
e.removeEventListener("touchstart",this.onTouchStart,false)
e.removeEventListener("touchmove",this.onTouchMove,false)
e.removeEventListener("touchend",this.onTouchEnd,false)
e.removeEventListener("touchcancel",this.onTouchCancel,false)}
e.notNeeded=function(e){var t
var i
var r
var s
if(typeof window.ontouchstart==="undefined"){return true}i=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]
if(i){if(n){t=document.querySelector("meta[name=viewport]")
if(t){if(t.content.indexOf("user-scalable=no")!==-1){return true}if(i>31&&document.documentElement.scrollWidth<=window.outerWidth){return true}}}else{return true}}if(a){r=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/)
if(r[1]>=10&&r[2]>=3){t=document.querySelector("meta[name=viewport]")
if(t){if(t.content.indexOf("user-scalable=no")!==-1){return true}if(document.documentElement.scrollWidth<=window.outerWidth){return true}}}}if(e.style.msTouchAction==="none"||e.style.touchAction==="manipulation"){return true}s=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]
if(s>=27){t=document.querySelector("meta[name=viewport]")
if(t&&(t.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth)){return true}}if(e.style.touchAction==="none"||e.style.touchAction==="manipulation"){return true}return false}
e.attach=function(t,n){return new e(t,n)}
if(typeof define==="function"&&typeof define.amd==="object"&&define.amd){define(function(){return e})}else if(typeof module!=="undefined"&&module.exports){module.exports=e.attach
module.exports.FastClick=e}else{window.FastClick=e}})();(function(){var e={}
var t,n
t=this
if(t!=null){n=t.async}e.noConflict=function(){t.async=n
return e}
function i(e){var n=false
return function(){if(n)throw new Error("Callback was already called.")
n=true
e.apply(t,arguments)}}var r=Object.prototype.toString
var s=Array.isArray||function(e){return r.call(e)==="[object Array]"}
var a=function(e,t){if(e.forEach){return e.forEach(t)}for(var n=0;n<e.length;n+=1){t(e[n],n,e)}}
var o=function(e,t){if(e.map){return e.map(t)}var n=[]
a(e,function(e,i,r){n.push(t(e,i,r))})
return n}
var l=function(e,t,n){if(e.reduce){return e.reduce(t,n)}a(e,function(e,i,r){n=t(n,e,i,r)})
return n}
var u=function(e){if(Object.keys){return Object.keys(e)}var t=[]
for(var n in e){if(e.hasOwnProperty(n)){t.push(n)}}return t}
if(typeof process==="undefined"||!process.nextTick){if(typeof setImmediate==="function"){e.nextTick=function(e){setImmediate(e)}
e.setImmediate=e.nextTick}else{e.nextTick=function(e){setTimeout(e,0)}
e.setImmediate=e.nextTick}}else{e.nextTick=process.nextTick
if(typeof setImmediate!=="undefined"){e.setImmediate=function(e){setImmediate(e)}}else{e.setImmediate=e.nextTick}}e.each=function(e,t,n){n=n||function(){}
if(!e.length){return n()}var r=0
a(e,function(e){t(e,i(s))})
function s(t){if(t){n(t)
n=function(){}}else{r+=1
if(r>=e.length){n()}}}}
e.forEach=e.each
e.eachSeries=function(e,t,n){n=n||function(){}
if(!e.length){return n()}var i=0
var r=function(){t(e[i],function(t){if(t){n(t)
n=function(){}}else{i+=1
if(i>=e.length){n()}else{r()}}})}
r()}
e.forEachSeries=e.eachSeries
e.eachLimit=function(e,t,n,i){var r=f(t)
r.apply(null,[e,n,i])}
e.forEachLimit=e.eachLimit
var f=function(e){return function(t,n,i){i=i||function(){}
if(!t.length||e<=0){return i()}var r=0
var s=0
var a=0;(function o(){if(r>=t.length){return i()}while(a<e&&s<t.length){s+=1
a+=1
n(t[s-1],function(e){if(e){i(e)
i=function(){}}else{r+=1
a-=1
if(r>=t.length){i()}else{o()}}})}})()}}
var c=function(t){return function(){var n=Array.prototype.slice.call(arguments)
return t.apply(null,[e.each].concat(n))}}
var h=function(e,t){return function(){var n=Array.prototype.slice.call(arguments)
return t.apply(null,[f(e)].concat(n))}}
var d=function(t){return function(){var n=Array.prototype.slice.call(arguments)
return t.apply(null,[e.eachSeries].concat(n))}}
var p=function(e,t,n,i){var r=[]
t=o(t,function(e,t){return{index:t,value:e}})
e(t,function(e,t){n(e.value,function(n,i){r[e.index]=i
t(n)})},function(e){i(e,r)})}
e.map=c(p)
e.mapSeries=d(p)
e.mapLimit=function(e,t,n,i){return m(t)(e,n,i)}
var m=function(e){return h(e,p)}
e.reduce=function(t,n,i,r){e.eachSeries(t,function(e,t){i(n,e,function(e,i){n=i
t(e)})},function(e){r(e,n)})}
e.inject=e.reduce
e.foldl=e.reduce
e.reduceRight=function(t,n,i,r){var s=o(t,function(e){return e}).reverse()
e.reduce(s,n,i,r)}
e.foldr=e.reduceRight
var v=function(e,t,n,i){var r=[]
t=o(t,function(e,t){return{index:t,value:e}})
e(t,function(e,t){n(e.value,function(n){if(n){r.push(e)}t()})},function(e){i(o(r.sort(function(e,t){return e.index-t.index}),function(e){return e.value}))})}
e.filter=c(v)
e.filterSeries=d(v)
e.select=e.filter
e.selectSeries=e.filterSeries
var g=function(e,t,n,i){var r=[]
t=o(t,function(e,t){return{index:t,value:e}})
e(t,function(e,t){n(e.value,function(n){if(!n){r.push(e)}t()})},function(e){i(o(r.sort(function(e,t){return e.index-t.index}),function(e){return e.value}))})}
e.reject=c(g)
e.rejectSeries=d(g)
var _=function(e,t,n,i){e(t,function(e,t){n(e,function(n){if(n){i(e)
i=function(){}}else{t()}})},function(e){i()})}
e.detect=c(_)
e.detectSeries=d(_)
e.some=function(t,n,i){e.each(t,function(e,t){n(e,function(e){if(e){i(true)
i=function(){}}t()})},function(e){i(false)})}
e.any=e.some
e.every=function(t,n,i){e.each(t,function(e,t){n(e,function(e){if(!e){i(false)
i=function(){}}t()})},function(e){i(true)})}
e.all=e.every
e.sortBy=function(t,n,i){e.map(t,function(e,t){n(e,function(n,i){if(n){t(n)}else{t(null,{value:e,criteria:i})}})},function(e,t){if(e){return i(e)}else{var n=function(e,t){var n=e.criteria,i=t.criteria
return n<i?-1:n>i?1:0}
i(null,o(t.sort(n),function(e){return e.value}))}})}
e.auto=function(t,n){n=n||function(){}
var i=u(t)
var r=i.length
if(!r){return n()}var o={}
var f=[]
var c=function(e){f.unshift(e)}
var h=function(e){for(var t=0;t<f.length;t+=1){if(f[t]===e){f.splice(t,1)
return}}}
var d=function(){r--
a(f.slice(0),function(e){e()})}
c(function(){if(!r){var e=n
n=function(){}
e(null,o)}})
a(i,function(i){var r=s(t[i])?t[i]:[t[i]]
var f=function(t){var r=Array.prototype.slice.call(arguments,1)
if(r.length<=1){r=r[0]}if(t){var s={}
a(u(o),function(e){s[e]=o[e]})
s[i]=r
n(t,s)
n=function(){}}else{o[i]=r
e.setImmediate(d)}}
var p=r.slice(0,Math.abs(r.length-1))||[]
var m=function(){return l(p,function(e,t){return e&&o.hasOwnProperty(t)},true)&&!o.hasOwnProperty(i)}
if(m()){r[r.length-1](f,o)}else{var v=function(){if(m()){h(v)
r[r.length-1](f,o)}}
c(v)}})}
e.retry=function(t,n,i){var r=5
var s=[]
if(typeof t==="function"){i=n
n=t
t=r}t=parseInt(t,10)||r
var a=function(r,a){var o=function(e,t){return function(n){e(function(e,i){n(!e||t,{err:e,result:i})},a)}}
while(t){s.push(o(n,!(t-=1)))}e.series(s,function(e,t){t=t[t.length-1];(r||i)(t.err,t.result)})}
return i?a():a}
e.waterfall=function(t,n){n=n||function(){}
if(!s(t)){var i=new Error("First argument to waterfall must be an array of functions")
return n(i)}if(!t.length){return n()}var r=function(t){return function(i){if(i){n.apply(null,arguments)
n=function(){}}else{var s=Array.prototype.slice.call(arguments,1)
var a=t.next()
if(a){s.push(r(a))}else{s.push(n)}e.setImmediate(function(){t.apply(null,s)})}}}
r(e.iterator(t))()}
var y=function(e,t,n){n=n||function(){}
if(s(t)){e.map(t,function(e,t){if(e){e(function(e){var n=Array.prototype.slice.call(arguments,1)
if(n.length<=1){n=n[0]}t.call(null,e,n)})}},n)}else{var i={}
e.each(u(t),function(e,n){t[e](function(t){var r=Array.prototype.slice.call(arguments,1)
if(r.length<=1){r=r[0]}i[e]=r
n(t)})},function(e){n(e,i)})}}
e.parallel=function(t,n){y({map:e.map,each:e.each},t,n)}
e.parallelLimit=function(e,t,n){y({map:m(t),each:f(t)},e,n)}
e.series=function(t,n){n=n||function(){}
if(s(t)){e.mapSeries(t,function(e,t){if(e){e(function(e){var n=Array.prototype.slice.call(arguments,1)
if(n.length<=1){n=n[0]}t.call(null,e,n)})}},n)}else{var i={}
e.eachSeries(u(t),function(e,n){t[e](function(t){var r=Array.prototype.slice.call(arguments,1)
if(r.length<=1){r=r[0]}i[e]=r
n(t)})},function(e){n(e,i)})}}
e.iterator=function(e){var t=function(n){var i=function(){if(e.length){e[n].apply(null,arguments)}return i.next()}
i.next=function(){return n<e.length-1?t(n+1):null}
return i}
return t(0)}
e.apply=function(e){var t=Array.prototype.slice.call(arguments,1)
return function(){return e.apply(null,t.concat(Array.prototype.slice.call(arguments)))}}
var b=function(e,t,n,i){var r=[]
e(t,function(e,t){n(e,function(e,n){r=r.concat(n||[])
t(e)})},function(e){i(e,r)})}
e.concat=c(b)
e.concatSeries=d(b)
e.whilst=function(t,n,i){if(t()){n(function(r){if(r){return i(r)}e.whilst(t,n,i)})}else{i()}}
e.doWhilst=function(t,n,i){t(function(r){if(r){return i(r)}var s=Array.prototype.slice.call(arguments,1)
if(n.apply(null,s)){e.doWhilst(t,n,i)}else{i()}})}
e.until=function(t,n,i){if(!t()){n(function(r){if(r){return i(r)}e.until(t,n,i)})}else{i()}}
e.doUntil=function(t,n,i){t(function(r){if(r){return i(r)}var s=Array.prototype.slice.call(arguments,1)
if(!n.apply(null,s)){e.doUntil(t,n,i)}else{i()}})}
e.queue=function(t,n){if(n===undefined){n=1}function r(t,n,i,r){if(!t.started){t.started=true}if(!s(n)){n=[n]}if(n.length==0){return e.setImmediate(function(){if(t.drain){t.drain()}})}a(n,function(n){var s={data:n,callback:typeof r==="function"?r:null}
if(i){t.tasks.unshift(s)}else{t.tasks.push(s)}if(t.saturated&&t.tasks.length===t.concurrency){t.saturated()}e.setImmediate(t.process)})}var o=0
var l={tasks:[],concurrency:n,saturated:null,empty:null,drain:null,started:false,paused:false,push:function(e,t){r(l,e,false,t)},kill:function(){l.drain=null
l.tasks=[]},unshift:function(e,t){r(l,e,true,t)},process:function(){if(!l.paused&&o<l.concurrency&&l.tasks.length){var e=l.tasks.shift()
if(l.empty&&l.tasks.length===0){l.empty()}o+=1
var n=function(){o-=1
if(e.callback){e.callback.apply(e,arguments)}if(l.drain&&l.tasks.length+o===0){l.drain()}l.process()}
var r=i(n)
t(e.data,r)}},length:function(){return l.tasks.length},running:function(){return o},idle:function(){return l.tasks.length+o===0},pause:function(){if(l.paused===true){return}l.paused=true
l.process()},resume:function(){if(l.paused===false){return}l.paused=false
l.process()}}
return l}
e.cargo=function(t,n){var i=false,r=[]
var l={tasks:r,payload:n,saturated:null,empty:null,drain:null,drained:true,push:function(t,i){if(!s(t)){t=[t]}a(t,function(e){r.push({data:e,callback:typeof i==="function"?i:null})
l.drained=false
if(l.saturated&&r.length===n){l.saturated()}})
e.setImmediate(l.process)},process:function e(){if(i)return
if(r.length===0){if(l.drain&&!l.drained)l.drain()
l.drained=true
return}var s=typeof n==="number"?r.splice(0,n):r.splice(0,r.length)
var u=o(s,function(e){return e.data})
if(l.empty)l.empty()
i=true
t(u,function(){i=false
var t=arguments
a(s,function(e){if(e.callback){e.callback.apply(null,t)}})
e()})},length:function(){return r.length},running:function(){return i}}
return l}
var w=function(e){return function(t){var n=Array.prototype.slice.call(arguments,1)
t.apply(null,n.concat([function(t){var n=Array.prototype.slice.call(arguments,1)
if(typeof console!=="undefined"){if(t){if(console.error){console.error(t)}}else if(console[e]){a(n,function(t){console[e](t)})}}}]))}}
e.log=w("log")
e.dir=w("dir")
e.memoize=function(t,n){var i={}
var r={}
n=n||function(e){return e}
var s=function(){var s=Array.prototype.slice.call(arguments)
var a=s.pop()
var o=n.apply(null,s)
if(o in i){e.nextTick(function(){a.apply(null,i[o])})}else if(o in r){r[o].push(a)}else{r[o]=[a]
t.apply(null,s.concat([function(){i[o]=arguments
var e=r[o]
delete r[o]
for(var t=0,n=e.length;t<n;t++){e[t].apply(null,arguments)}}]))}}
s.memo=i
s.unmemoized=t
return s}
e.unmemoize=function(e){return function(){return(e.unmemoized||e).apply(null,arguments)}}
e.times=function(t,n,i){var r=[]
for(var s=0;s<t;s++){r.push(s)}return e.map(r,n,i)}
e.timesSeries=function(t,n,i){var r=[]
for(var s=0;s<t;s++){r.push(s)}return e.mapSeries(r,n,i)}
e.seq=function(){var t=arguments
return function(){var n=this
var i=Array.prototype.slice.call(arguments)
var r=i.pop()
e.reduce(t,i,function(e,t,i){t.apply(n,e.concat([function(){var e=arguments[0]
var t=Array.prototype.slice.call(arguments,1)
i(e,t)}]))},function(e,t){r.apply(n,[e].concat(t))})}}
e.compose=function(){return e.seq.apply(null,Array.prototype.reverse.call(arguments))}
var x=function(e,t){var n=function(){var n=this
var i=Array.prototype.slice.call(arguments)
var r=i.pop()
return e(t,function(e,t){e.apply(n,i.concat([t]))},r)}
if(arguments.length>2){var i=Array.prototype.slice.call(arguments,2)
return n.apply(this,i)}else{return n}}
e.applyEach=c(x)
e.applyEachSeries=d(x)
e.forever=function(e,t){function n(i){if(i){if(t){return t(i)}throw i}e(n)}n()}
if(typeof module!=="undefined"&&module.exports){module.exports=e}else if(typeof define!=="undefined"&&define.amd){define([],function(){return e})}else{t.async=e}})();(function(){var e
e=window.jQuery||window.Zepto||window.$
e.fn.fancySelect=function(t){var n,i
if(t==null){t={}}i=e.extend({forceiOS:false,includeBlank:false},t)
n=!!navigator.userAgent.match(/iP(hone|od|ad)/i)
return this.each(function(){var t,r,s,a,o,l,u
a=e(this)
if(a.hasClass("fancified")||a[0].tagName!=="SELECT"){return}a.addClass("fancified")
a.css({width:1,height:1,display:"block",position:"absolute",top:0,left:0,opacity:0})
a.wrap('<div class="fancy-select">')
u=a.parent()
if(a.data("class")){u.addClass(a.data("class"))}u.append('<div class="trigger">')
if(!(n&&!i.forceiOS)){u.append('<ul class="options">')}o=u.find(".trigger")
s=u.find(".options")
r=a.prop("disabled")
if(r){u.addClass("disabled")}l=function(){return o.text(a.find(":selected").text())}
a.on("blur",function(){if(o.hasClass("open")){return setTimeout(function(){return o.trigger("close")},120)}})
o.on("close",function(){o.removeClass("open")
return s.removeClass("open")})
o.on("click",function(){var t,l
if(!r){o.toggleClass("open")
if(n&&!i.forceiOS){if(o.hasClass("open")){return a.focus()}}else{if(o.hasClass("open")){l=o.parent()
t=l.offsetParent()
if(l.offset().top+l.outerHeight()+s.outerHeight()+20>e(window).height()+e(window).scrollTop()){s.addClass("overflowing")}else{s.removeClass("overflowing")}}s.toggleClass("open")
if(!n){return a.focus()}}}})
a.on("enable",function(){a.prop("disabled",false)
u.removeClass("disabled")
r=false
return t()})
a.on("disable",function(){a.prop("disabled",true)
u.addClass("disabled")
return r=true})
a.on("change",function(e){if(e.originalEvent&&e.originalEvent.isTrusted){return e.stopPropagation()}else{return l()}})
a.on("keydown",function(e){var t,n,i
i=e.which
t=s.find(".hover")
t.removeClass("hover")
if(!s.hasClass("open")){if(i===13||i===32||i===38||i===40){e.preventDefault()
return o.trigger("click")}}else{if(i===38){e.preventDefault()
if(t.length&&t.index()>0){t.prev().addClass("hover")}else{s.find("li:last-child").addClass("hover")}}else if(i===40){e.preventDefault()
if(t.length&&t.index()<s.find("li").length-1){t.next().addClass("hover")}else{s.find("li:first-child").addClass("hover")}}else if(i===27){e.preventDefault()
o.trigger("click")}else if(i===13||i===32){e.preventDefault()
t.trigger("click")}else if(i===9){if(o.hasClass("open")){o.trigger("close")}}n=s.find(".hover")
if(n.length){s.scrollTop(0)
return s.scrollTop(n.position().top-12)}}})
s.on("click","li",function(t){a.val(e(this).data("value"))
if(!n){a.trigger("blur").trigger("focus")}s.find(".selected").removeClass("selected")
e(t.currentTarget).addClass("selected")
return a.val(e(this).data("value")).trigger("change").trigger("blur").trigger("focus")})
s.on("mouseenter","li",function(){var t,n
n=e(this)
t=s.find(".hover")
t.removeClass("hover")
return n.addClass("hover")})
s.on("mouseleave","li",function(){return s.find(".hover").removeClass("hover")})
t=function(){var t
l()
if(n&&!i.forceiOS){return}t=a.find("option")
return a.find("option").each(function(t,n){n=e(n)
if(!n.prop("disabled")&&(n.val()||i.includeBlank)){if(n.prop("selected")){return s.append('<li data-value="'+n.val()+'" class="selected">'+n.text()+"</li>")}else{return s.append('<li data-value="'+n.val()+'">'+n.text()+"</li>")}}})}
a.on("update",function(){u.find(".options").empty()
return t()})
return t()})}}).call(this)
$(document).ready(function(){if(document.getElementById("flying-focus"))return
var e=document.createElement("flying-focus")
e.id="flying-focus"
document.body.appendChild(e)
var t=100
e.style.transitionDuration=e.style.WebkitTransitionDuration=t/1e3+"s"
function n(e){var t=e.getBoundingClientRect()
var n=document.documentElement
var i=document.defaultView
var r=document.body
var s=n.clientTop||r.clientTop||0,a=n.clientLeft||r.clientLeft||0,o=i.pageYOffset||n.scrollTop||r.scrollTop,l=i.pageXOffset||n.scrollLeft||r.scrollLeft,u=t.top+o-s,f=t.left+l-a
return{top:u,left:f}}var i=0
var r=null
var s=true
var a=0
document.documentElement.addEventListener("keydown",function(e){var t=e.which
if(t===9||t>36&&t<41){a=l()}},false)
document.documentElement.addEventListener("focus",function(u){var f=u.target
if(f.id==="flying-focus"){return}var c=n(f)
e.style.left=c.left+"px"
e.style.top=c.top+"px"
e.style.width=f.offsetWidth+"px"
e.style.height=f.offsetHeight+"px"
if(s){s=false
return}if(l()-a>42){return}o()
f.classList.add("flying-focus_target")
e.classList.add("flying-focus_visible")
r=f
i=setTimeout(o,t)},true)
document.documentElement.addEventListener("blur",function(){o()},true)
function o(){if(!i){return}clearTimeout(i)
i=0
e.classList.remove("flying-focus_visible")
r.classList.remove("flying-focus_target")
r=null}function l(){return(new Date).valueOf()}var u=document.createElement("style")
u.textContent="#flying-focus {\tposition: absolute;\tmargin: 0;\tbackground: transparent;\t-webkit-transition-property: left, top, width, height, opacity;\ttransition-property: left, top, width, height, opacity;\t-webkit-transition-timing-function: cubic-bezier(0, 0.2, 0, 1);\ttransition-timing-function: cubic-bezier(0, 0.2, 0, 1);\tvisibility: hidden;\tpointer-events: none;\tbox-shadow: 0 0 2px 3px #78aeda, 0 0 2px #78aeda inset; border-radius: 2px;}#flying-focus.flying-focus_visible {\tvisibility: visible;\tz-index: 9999;}.flying-focus_target {\toutline: none !important; /* Doesn't work in Firefox :( */}/* http://stackoverflow.com/questions/71074/how-to-remove-firefoxs-dotted-outline-on-buttons-as-well-as-links/199319 */.flying-focus_target::-moz-focus-inner {\tborder: 0 !important;}/* Replace it with @supports rule when browsers catch up */@media screen and (-webkit-min-device-pixel-ratio: 0) {\t#flying-focus {\t\tbox-shadow: none;\t\toutline: 5px auto -webkit-focus-ring-color;\t\toutline-offset: -3px;\t}}"
document.body.appendChild(u)});(function e(t,n,i){function r(a,o){if(!n[a]){if(!t[a]){var l=typeof require=="function"&&require
if(!o&&l)return l(a,!0)
if(s)return s(a,!0)
var u=new Error("Cannot find module '"+a+"'")
throw u.code="MODULE_NOT_FOUND",u}var f=n[a]={exports:{}}
t[a][0].call(f.exports,function(e){var n=t[a][1][e]
return r(n?n:e)},f,f.exports,e,t,n,i)}return n[a].exports}var s=typeof require=="function"&&require
for(var a=0;a<i.length;a++)r(i[a])
return r})({1:[function(require,e,t){(function(e){function n(e,t){var n=0
for(var i=e.length-1;i>=0;i--){var r=e[i]
if(r==="."){e.splice(i,1)}else if(r===".."){e.splice(i,1)
n++}else if(n){e.splice(i,1)
n--}}if(t){for(;n--;n){e.unshift("..")}}return e}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
var r=function(e){return i.exec(e).slice(1)}
t.resolve=function(){var t="",i=false
for(var r=arguments.length-1;r>=-1&&!i;r--){var a=r>=0?arguments[r]:e.cwd()
if(typeof a!=="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!a){continue}t=a+"/"+t
i=a.charAt(0)==="/"}t=n(s(t.split("/"),function(e){return!!e}),!i).join("/")
return(i?"/":"")+t||"."}
t.normalize=function(e){var i=t.isAbsolute(e),r=a(e,-1)==="/"
e=n(s(e.split("/"),function(e){return!!e}),!i).join("/")
if(!e&&!i){e="."}if(e&&r){e+="/"}return(i?"/":"")+e}
t.isAbsolute=function(e){return e.charAt(0)==="/"}
t.join=function(){var e=Array.prototype.slice.call(arguments,0)
return t.normalize(s(e,function(e,t){if(typeof e!=="string"){throw new TypeError("Arguments to path.join must be strings")}return e}).join("/"))}
t.relative=function(e,n){e=t.resolve(e).substr(1)
n=t.resolve(n).substr(1)
function i(e){var t=0
for(;t<e.length;t++){if(e[t]!=="")break}var n=e.length-1
for(;n>=0;n--){if(e[n]!=="")break}if(t>n)return[]
return e.slice(t,n-t+1)}var r=i(e.split("/"))
var s=i(n.split("/"))
var a=Math.min(r.length,s.length)
var o=a
for(var l=0;l<a;l++){if(r[l]!==s[l]){o=l
break}}var u=[]
for(var l=o;l<r.length;l++){u.push("..")}u=u.concat(s.slice(o))
return u.join("/")}
t.sep="/"
t.delimiter=":"
t.dirname=function(e){var t=r(e),n=t[0],i=t[1]
if(!n&&!i){return"."}if(i){i=i.substr(0,i.length-1)}return n+i}
t.basename=function(e,t){var n=r(e)[2]
if(t&&n.substr(-1*t.length)===t){n=n.substr(0,n.length-t.length)}return n}
t.extname=function(e){return r(e)[3]}
function s(e,t){if(e.filter)return e.filter(t)
var n=[]
for(var i=0;i<e.length;i++){if(t(e[i],i,e))n.push(e[i])}return n}var a="ab".substr(-1)==="b"?function(e,t,n){return e.substr(t,n)}:function(e,t,n){if(t<0)t=e.length+t
return e.substr(t,n)}}).call(this,require("_process"))},{_process:2}],2:[function(require,e,t){var n=e.exports={}
var i
var r;(function(){try{i=setTimeout}catch(e){i=function(){throw new Error("setTimeout is not defined")}}try{r=clearTimeout}catch(e){r=function(){throw new Error("clearTimeout is not defined")}}})()
var s=[]
var a=false
var o
var l=-1
function u(){if(!a||!o){return}a=false
if(o.length){s=o.concat(s)}else{l=-1}if(s.length){f()}}function f(){if(a){return}var e=i(u)
a=true
var t=s.length
while(t){o=s
s=[]
while(++l<t){if(o){o[l].run()}}l=-1
t=s.length}o=null
a=false
r(e)}n.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1){for(var n=1;n<arguments.length;n++){t[n-1]=arguments[n]}}s.push(new c(e,t))
if(s.length===1&&!a){i(f,0)}}
function c(e,t){this.fun=e
this.array=t}c.prototype.run=function(){this.fun.apply(null,this.array)}
n.title="browser"
n.browser=true
n.env={}
n.argv=[]
n.version=""
n.versions={}
function h(){}n.on=h
n.addListener=h
n.once=h
n.off=h
n.removeListener=h
n.removeAllListeners=h
n.emit=h
n.binding=function(e){throw new Error("process.binding is not supported")}
n.cwd=function(){return"/"}
n.chdir=function(e){throw new Error("process.chdir is not supported")}
n.umask=function(){return 0}},{}],3:[function(require,e,t){(function(){var t,n,i
n=require("./scorer")
t=function(e){return e.candidate}
i=function(e,t){return t.score-e.score}
e.exports=function(e,r,s,a){var o,l,u,f,c,h,d,p,m
m=a!=null?a:{},l=m.key,u=m.maxResults
if(r){c=[]
for(d=0,p=e.length;d<p;d++){o=e[d]
h=l!=null?o[l]:o
if(!h){continue}f=n.score(h,r,s)
if(!s){f=n.basenameScore(h,r,f)}if(f>0){c.push({candidate:o,score:f})}}c.sort(i)
e=c.map(t)}if(u!=null){e=e.slice(0,u)}return e}}).call(this)},{"./scorer":6}],4:[function(require,e,t){(function(){var t,n,i,r,s
s=require("./scorer")
i=require("./filter")
r=require("./matcher")
t=require("path").sep
n=/\ /g
e.exports={filter:function(e,r,s){var a
if(r){a=r.indexOf(t)!==-1
r=r.replace(n,"")}return i(e,r,a,s)},score:function(e,i){var r,a
if(!e){return 0}if(!i){return 0}if(e===i){return 2}r=i.indexOf(t)!==-1
i=i.replace(n,"")
a=s.score(e,i)
if(!r){a=s.basenameScore(e,i,a)}return a},match:function(e,i){var s,a,o,l,u,f,c,h
if(!e){return[]}if(!i){return[]}if(e===i){return function(){h=[]
for(var t=0,n=e.length;0<=n?t<n:t>n;0<=n?t++:t--){h.push(t)}return h}.apply(this)}l=i.indexOf(t)!==-1
i=i.replace(n,"")
o=r.match(e,i)
if(!l){s=r.basenameMatch(e,i)
o=o.concat(s).sort(function(e,t){return e-t})
u=null
a=0
while(a<o.length){if(a&&u===o[a]){o.splice(a,1)}else{u=o[a]
a++}}}return o}}}).call(this)},{"./filter":3,"./matcher":5,"./scorer":6,path:1}],5:[function(require,e,t){(function(){var e
e=require("path").sep
t.basenameMatch=function(n,i){var r,s,a,o
s=n.length-1
while(n[s]===e){s--}o=0
a=s
r=null
while(s>=0){if(n[s]===e){o++
if(r==null){r=n.substring(s+1,a+1)}}else if(s===0){if(a<n.length-1){if(r==null){r=n.substring(0,a+1)}}else{if(r==null){r=n}}}s--}return t.match(r,i,n.length-r.length)}
t.match=function(e,t,n){var i,r,s,a,o,l,u,f,c,h,d,p
if(n==null){n=0}if(e===t){return function(){p=[]
for(var t=n,i=n+e.length;n<=i?t<i:t>i;n<=i?t++:t--){p.push(t)}return p}.apply(this)}u=t.length
f=e.length
r=0
s=0
o=[]
while(r<u){i=t[r++]
a=e.indexOf(i.toLowerCase())
c=e.indexOf(i.toUpperCase())
l=Math.min(a,c)
if(l===-1){l=Math.max(a,c)}s=l
if(s===-1){return[]}o.push(n+s)
n+=s+1
e=e.substring(s+1,f)}return o}}).call(this)},{path:1}],6:[function(require,e,t){(function(){var e,n
e=require("path").sep
t.basenameScore=function(n,i,r){var s,a,o,l,u,f
o=n.length-1
while(n[o]===e){o--}f=0
l=o
s=null
while(o>=0){if(n[o]===e){f++
if(s==null){s=n.substring(o+1,l+1)}}else if(o===0){if(l<n.length-1){if(s==null){s=n.substring(0,l+1)}}else{if(s==null){s=n}}}o--}if(s===n){r*=2}else if(s){r+=t.score(s,i)}u=f+1
a=Math.max(1,10-u)
r*=a*.01
return r}
t.score=function(t,i){var r,s,a,o,l,u,f,c,h,d,p,m
if(t===i){return 1}if(n(t,i)){return 1}d=0
f=i.length
h=t.length
a=0
o=0
while(a<f){r=i[a++]
l=t.indexOf(r.toLowerCase())
p=t.indexOf(r.toUpperCase())
u=Math.min(l,p)
if(u===-1){u=Math.max(l,p)}o=u
if(o===-1){return 0}s=.1
if(t[o]===r){s+=.1}if(o===0||t[o-1]===e){s+=.8}else if((m=t[o-1])==="-"||m==="_"||m===" "){s+=.7}t=t.substring(o+1,h)
d+=s}c=d/f
return(c*(f/h)+c)/2}
n=function(t,n){if(t[t.length-n.length-1]===e){return t.lastIndexOf(n)===t.length-n.length}}}).call(this)},{path:1}],7:[function(require,e,t){(function e(t,n){t["fuzzaldrin"]=n()})(Function("return this")(),function(){var e=require("fuzzaldrin")
return e})},{fuzzaldrin:4}]},{},[7])
function hslToRgb(e,t,n){var i,r,s
if(t==0){i=r=s=n}else{function a(e,t,n){if(n<0)n+=1
if(n>1)n-=1
if(n<1/6)return e+(t-e)*6*n
if(n<1/2)return t
if(n<2/3)return e+(t-e)*(2/3-n)*6
return e}var o=n<.5?n*(1+t):n+t-n*t
var l=2*n-o
i=a(l,o,e+1/3)
r=a(l,o,e)
s=a(l,o,e-1/3)}return[i*255,r*255,s*255]}function rgbToHsl(e,t,n){e/=255,t/=255,n/=255
var i=Math.max(e,t,n),r=Math.min(e,t,n)
var s,a,o=(i+r)/2
if(i==r){s=a=0}else{var l=i-r
a=o>.5?l/(2-i-r):l/(i+r)
switch(i){case e:s=(t-n)/l+(t<n?6:0)
break
case t:s=(n-e)/l+2
break
case n:s=(e-t)/l+4
break}s/=6}return[s,a,o]}(function(){"use strict"
var e
e={}
e=function(){e.isAway=false
e.awayTimeout=3e3
e.awayTimestamp=0
e.awayTimer=null
e.onAway=null
e.onAwayBack=null
e.onVisible=null
e.onHidden=null
function e(e){var t,n
if(e){this.awayTimeout=parseInt(e.awayTimeout,10)
this.onAway=e.onAway
this.onAwayBack=e.onAwayBack
this.onVisible=e.onVisible
this.onHidden=e.onHidden}n=this
t=function(){return n.onActive()}
window.onclick=t
window.onmousemove=t
window.onmouseenter=t
window.onkeydown=t
window.onscroll=t
window.onmousewheel=t
document.addEventListener("visibilitychange",function(){return n.handleVisibilityChange()},false)
document.addEventListener("webkitvisibilitychange",function(){return n.handleVisibilityChange()},false)
document.addEventListener("msvisibilitychange",function(){return n.handleVisibilityChange()},false)}e.prototype.onActive=function(){this.awayTimestamp=(new Date).getTime()+this.awayTimeout
if(this.isAway){if(this.onAwayBack){this.onAwayBack()}this.start()}this.isAway=false
return true}
e.prototype.start=function(){var e
this.awayTimestamp=(new Date).getTime()+this.awayTimeout
if(this.awayTimer!==null){clearTimeout(this.awayTimer)}e=this
this.awayTimer=setTimeout(function(){return e.checkAway()},this.awayTimeout+100)
return this}
e.prototype.setAwayTimeout=function(e){this.awayTimeout=parseInt(e,10)
return this}
e.prototype.checkAway=function(){var e,t
t=(new Date).getTime()
if(t<this.awayTimestamp){this.isAway=false
e=this
this.awayTimer=setTimeout(function(){return e.checkAway()},this.awayTimestamp-t+100)
return}if(this.awayTimer!==null){clearTimeout(this.awayTimer)}this.isAway=true
if(this.onAway){return this.onAway()}}
e.prototype.handleVisibilityChange=function(){if(document.hidden||document.msHidden||document.webkitHidden){if(this.onHidden){return this.onHidden()}}else{if(this.onVisible){return this.onVisible()}}}
return e}()
window.Idle=e}).call(this);(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){e.ui=e.ui||{}
e.extend(e.ui,{version:"1.11.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}})
e.fn.extend({scrollParent:function(t){var n=this.css("position"),i=n==="absolute",r=t?/(auto|scroll|hidden)/:/(auto|scroll)/,s=this.parents().filter(function(){var t=e(this)
if(i&&t.css("position")==="static"){return false}return r.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0)
return n==="fixed"||!s.length?e(this[0].ownerDocument||document):s},uniqueId:function(){var e=0
return function(){return this.each(function(){if(!this.id){this.id="ui-id-"+ ++e}})}}(),removeUniqueId:function(){return this.each(function(){if(/^ui-id-\d+$/.test(this.id)){e(this).removeAttr("id")}})}})
function t(t,i){var r,s,a,o=t.nodeName.toLowerCase()
if("area"===o){r=t.parentNode
s=r.name
if(!t.href||!s||r.nodeName.toLowerCase()!=="map"){return false}a=e("img[usemap='#"+s+"']")[0]
return!!a&&n(a)}return(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return e.css(this,"visibility")==="hidden"}).length}e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,i){return!!e.data(t,i[3])},focusable:function(n){return t(n,!isNaN(e.attr(n,"tabindex")))},tabbable:function(n){var i=e.attr(n,"tabindex"),r=isNaN(i)
return(r||i>=0)&&t(n,!r)}})
if(!e("<a>").outerWidth(1).jquery){e.each(["Width","Height"],function(t,n){var i=n==="Width"?["Left","Right"]:["Top","Bottom"],r=n.toLowerCase(),s={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight}
function a(t,n,r,s){e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0
if(r){n-=parseFloat(e.css(t,"border"+this+"Width"))||0}if(s){n-=parseFloat(e.css(t,"margin"+this))||0}})
return n}e.fn["inner"+n]=function(t){if(t===undefined){return s["inner"+n].call(this)}return this.each(function(){e(this).css(r,a(this,t)+"px")})}
e.fn["outer"+n]=function(t,i){if(typeof t!=="number"){return s["outer"+n].call(this,t)}return this.each(function(){e(this).css(r,a(this,t,true,i)+"px")})}})}if(!e.fn.addBack){e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}if(e("<a>").data("a-b","a").removeData("a-b").data("a-b")){e.fn.removeData=function(t){return function(n){if(arguments.length){return t.call(this,e.camelCase(n))}else{return t.call(this)}}}(e.fn.removeData)}e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
e.fn.extend({focus:function(t){return function(n,i){return typeof n==="number"?this.each(function(){var t=this
setTimeout(function(){e(t).focus()
if(i){i.call(t)}},n)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown"
return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(t!==undefined){return this.css("zIndex",t)}if(this.length){var n=e(this[0]),i,r
while(n.length&&n[0]!==document){i=n.css("position")
if(i==="absolute"||i==="relative"||i==="fixed"){r=parseInt(n.css("zIndex"),10)
if(!isNaN(r)&&r!==0){return r}}n=n.parent()}}return 0}})
e.ui.plugin={add:function(t,n,i){var r,s=e.ui[t].prototype
for(r in i){s.plugins[r]=s.plugins[r]||[]
s.plugins[r].push([n,i[r]])}},call:function(e,t,n,i){var r,s=e.plugins[t]
if(!s){return}if(!i&&(!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)){return}for(r=0;r<s.length;r++){if(e.options[s[r][0]]){s[r][1].apply(e.element,n)}}}}
var i=0,r=Array.prototype.slice
e.cleanData=function(t){return function(n){var i,r,s
for(s=0;(r=n[s])!=null;s++){try{i=e._data(r,"events")
if(i&&i.remove){e(r).triggerHandler("remove")}}catch(e){}}t(n)}}(e.cleanData)
e.widget=function(t,n,i){var r,s,a,o,l={},u=t.split(".")[0]
t=t.split(".")[1]
r=u+"-"+t
if(!i){i=n
n=e.Widget}e.expr[":"][r.toLowerCase()]=function(t){return!!e.data(t,r)}
e[u]=e[u]||{}
s=e[u][t]
a=e[u][t]=function(e,t){if(!this._createWidget){return new a(e,t)}if(arguments.length){this._createWidget(e,t)}}
e.extend(a,s,{version:i.version,_proto:e.extend({},i),_childConstructors:[]})
o=new n
o.options=e.widget.extend({},o.options)
e.each(i,function(t,i){if(!e.isFunction(i)){l[t]=i
return}l[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)}
return function(){var t=this._super,n=this._superApply,s
this._super=e
this._superApply=r
s=i.apply(this,arguments)
this._super=t
this._superApply=n
return s}}()})
a.prototype=e.widget.extend(o,{widgetEventPrefix:s?o.widgetEventPrefix||t:t},l,{constructor:a,namespace:u,widgetName:t,widgetFullName:r})
if(s){e.each(s._childConstructors,function(t,n){var i=n.prototype
e.widget(i.namespace+"."+i.widgetName,a,n._proto)})
delete s._childConstructors}else{n._childConstructors.push(a)}e.widget.bridge(t,a)
return a}
e.widget.extend=function(t){var n=r.call(arguments,1),i=0,s=n.length,a,o
for(;i<s;i++){for(a in n[i]){o=n[i][a]
if(n[i].hasOwnProperty(a)&&o!==undefined){if(e.isPlainObject(o)){t[a]=e.isPlainObject(t[a])?e.widget.extend({},t[a],o):e.widget.extend({},o)}else{t[a]=o}}}}return t}
e.widget.bridge=function(t,n){var i=n.prototype.widgetFullName||t
e.fn[t]=function(s){var a=typeof s==="string",o=r.call(arguments,1),l=this
s=!a&&o.length?e.widget.extend.apply(null,[s].concat(o)):s
if(a){this.each(function(){var n,r=e.data(this,i)
if(s==="instance"){l=r
return false}if(!r){return e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+s+"'")}if(!e.isFunction(r[s])||s.charAt(0)==="_"){return e.error("no such method '"+s+"' for "+t+" widget instance")}n=r[s].apply(r,o)
if(n!==r&&n!==undefined){l=n&&n.jquery?l.pushStack(n.get()):n
return false}})}else{this.each(function(){var t=e.data(this,i)
if(t){t.option(s||{})
if(t._init){t._init()}}else{e.data(this,i,new n(s,this))}})}return l}}
e.Widget=function(){}
e.Widget._childConstructors=[]
e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(t,n){n=e(n||this.defaultElement||this)[0]
this.element=e(n)
this.uuid=i++
this.eventNamespace="."+this.widgetName+this.uuid
this.options=e.widget.extend({},this.options,this._getCreateOptions(),t)
this.bindings=e()
this.hoverable=e()
this.focusable=e()
if(n!==this){e.data(n,this.widgetFullName,this)
this._on(true,this.element,{remove:function(e){if(e.target===n){this.destroy()}}})
this.document=e(n.style?n.ownerDocument:n.document||n)
this.window=e(this.document[0].defaultView||this.document[0].parentWindow)}this._create()
this._trigger("create",null,this._getCreateEventData())
this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy()
this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName))
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled")
this.bindings.unbind(this.eventNamespace)
this.hoverable.removeClass("ui-state-hover")
this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,n){var i=t,r,s,a
if(arguments.length===0){return e.widget.extend({},this.options)}if(typeof t==="string"){i={}
r=t.split(".")
t=r.shift()
if(r.length){s=i[t]=e.widget.extend({},this.options[t])
for(a=0;a<r.length-1;a++){s[r[a]]=s[r[a]]||{}
s=s[r[a]]}t=r.pop()
if(arguments.length===1){return s[t]===undefined?null:s[t]}s[t]=n}else{if(arguments.length===1){return this.options[t]===undefined?null:this.options[t]}i[t]=n}}this._setOptions(i)
return this},_setOptions:function(e){var t
for(t in e){this._setOption(t,e[t])}return this},_setOption:function(e,t){this.options[e]=t
if(e==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled",!!t)
if(t){this.hoverable.removeClass("ui-state-hover")
this.focusable.removeClass("ui-state-focus")}}return this},enable:function(){return this._setOptions({disabled:false})},disable:function(){return this._setOptions({disabled:true})},_on:function(t,n,i){var r,s=this
if(typeof t!=="boolean"){i=n
n=t
t=false}if(!i){i=n
n=this.element
r=this.widget()}else{n=r=e(n)
this.bindings=this.bindings.add(n)}e.each(i,function(i,a){function o(){if(!t&&(s.options.disabled===true||e(this).hasClass("ui-state-disabled"))){return}return(typeof a==="string"?s[a]:a).apply(s,arguments)}if(typeof a!=="string"){o.guid=a.guid=a.guid||o.guid||e.guid++}var l=i.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+s.eventNamespace,f=l[2]
if(f){r.delegate(f,u,o)}else{n.bind(u,o)}})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace
e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e==="string"?i[e]:e).apply(i,arguments)}var i=this
return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t)
this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t)
this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,i){var r,s,a=this.options[t]
i=i||{}
n=e.Event(n)
n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase()
n.target=this.element[0]
s=n.originalEvent
if(s){for(r in s){if(!(r in n)){n[r]=s[r]}}}this.element.trigger(n,i)
return!(e.isFunction(a)&&a.apply(this.element[0],[n].concat(i))===false||n.isDefaultPrevented())}}
e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(i,r,s){if(typeof r==="string"){r={effect:r}}var a,o=!r?t:r===true||typeof r==="number"?n:r.effect||n
r=r||{}
if(typeof r==="number"){r={duration:r}}a=!e.isEmptyObject(r)
r.complete=s
if(r.delay){i.delay(r.delay)}if(a&&e.effects&&e.effects.effect[o]){i[t](r)}else if(o!==t&&i[o]){i[o](r.duration,r.easing,s)}else{i.queue(function(n){e(this)[t]()
if(s){s.call(i[0])}n()})}}})
var s=e.widget
var a=false
e(document).mouseup(function(){a=false})
var o=e.widget("ui.mouse",{version:"1.11.1",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this
this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(true===e.data(n.target,t.widgetName+".preventClickEvent")){e.removeData(n.target,t.widgetName+".preventClickEvent")
n.stopImmediatePropagation()
return false}})
this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)
if(this._mouseMoveDelegate){this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)}},_mouseDown:function(t){if(a){return}this._mouseStarted&&this._mouseUp(t)
this._mouseDownEvent=t
var n=this,i=t.which===1,r=typeof this.options.cancel==="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:false
if(!i||r||!this._mouseCapture(t)){return true}this.mouseDelayMet=!this.options.delay
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){n.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==false
if(!this._mouseStarted){t.preventDefault()
return true}}if(true===e.data(t.target,this.widgetName+".preventClickEvent")){e.removeData(t.target,this.widgetName+".preventClickEvent")}this._mouseMoveDelegate=function(e){return n._mouseMove(e)}
this._mouseUpDelegate=function(e){return n._mouseUp(e)}
this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate)
t.preventDefault()
a=true
return true},_mouseMove:function(t){if(e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button){return this._mouseUp(t)}else if(!t.which){return this._mouseUp(t)}if(this._mouseStarted){this._mouseDrag(t)
return t.preventDefault()}if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==false
this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)}return!this._mouseStarted},_mouseUp:function(t){this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
if(this._mouseStarted){this._mouseStarted=false
if(t.target===this._mouseDownEvent.target){e.data(t.target,this.widgetName+".preventClickEvent",true)}this._mouseStop(t)}a=false
return false},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}});(function(){e.ui=e.ui||{}
var t,n,i=Math.max,r=Math.abs,s=Math.round,a=/left|center|right/,o=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,u=/^\w+/,f=/%$/,c=e.fn.position
function h(e,t,n){return[parseFloat(e[0])*(f.test(e[0])?t/100:1),parseFloat(e[1])*(f.test(e[1])?n/100:1)]}function d(t,n){return parseInt(e.css(t,n),10)||0}function p(t){var n=t[0]
if(n.nodeType===9){return{width:t.width(),height:t.height(),offset:{top:0,left:0}}}if(e.isWindow(n)){return{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}}if(n.preventDefault){return{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}}return{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.position={scrollbarWidth:function(){if(t!==undefined){return t}var n,i,r=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),s=r.children()[0]
e("body").append(r)
n=s.offsetWidth
r.css("overflow","scroll")
i=s.offsetWidth
if(n===i){i=r[0].clientWidth}r.remove()
return t=n-i},getScrollInfo:function(t){var n=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),r=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=i==="scroll"||i==="auto"&&t.height<t.element[0].scrollHeight
return{width:s?e.position.scrollbarWidth():0,height:r?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),i=e.isWindow(n[0]),r=!!n[0]&&n[0].nodeType===9
return{element:n,isWindow:i,isDocument:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:i||r?n.width():n.outerWidth(),height:i||r?n.height():n.outerHeight()}}}
e.fn.position=function(t){if(!t||!t.of){return c.apply(this,arguments)}t=e.extend({},t)
var f,m,v,g,_,y,b=e(t.of),w=e.position.getWithinInfo(t.within),x=e.position.getScrollInfo(w),k=(t.collision||"flip").split(" "),M={}
y=p(b)
if(b[0].preventDefault){t.at="left top"}m=y.width
v=y.height
g=y.offset
_=e.extend({},g)
e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,i
if(e.length===1){e=a.test(e[0])?e.concat(["center"]):o.test(e[0])?["center"].concat(e):["center","center"]}e[0]=a.test(e[0])?e[0]:"center"
e[1]=o.test(e[1])?e[1]:"center"
n=l.exec(e[0])
i=l.exec(e[1])
M[this]=[n?n[0]:0,i?i[0]:0]
t[this]=[u.exec(e[0])[0],u.exec(e[1])[0]]})
if(k.length===1){k[1]=k[0]}if(t.at[0]==="right"){_.left+=m}else if(t.at[0]==="center"){_.left+=m/2}if(t.at[1]==="bottom"){_.top+=v}else if(t.at[1]==="center"){_.top+=v/2}f=h(M.at,m,v)
_.left+=f[0]
_.top+=f[1]
return this.each(function(){var a,o,l=e(this),u=l.outerWidth(),c=l.outerHeight(),p=d(this,"marginLeft"),y=d(this,"marginTop"),T=u+p+d(this,"marginRight")+x.width,L=c+y+d(this,"marginBottom")+x.height,S=e.extend({},_),D=h(M.my,l.outerWidth(),l.outerHeight())
if(t.my[0]==="right"){S.left-=u}else if(t.my[0]==="center"){S.left-=u/2}if(t.my[1]==="bottom"){S.top-=c}else if(t.my[1]==="center"){S.top-=c/2}S.left+=D[0]
S.top+=D[1]
if(!n){S.left=s(S.left)
S.top=s(S.top)}a={marginLeft:p,marginTop:y}
e.each(["left","top"],function(n,i){if(e.ui.position[k[n]]){e.ui.position[k[n]][i](S,{targetWidth:m,targetHeight:v,elemWidth:u,elemHeight:c,collisionPosition:a,collisionWidth:T,collisionHeight:L,offset:[f[0]+D[0],f[1]+D[1]],my:t.my,at:t.at,within:w,elem:l})}})
if(t.using){o=function(e){var n=g.left-S.left,s=n+m-u,a=g.top-S.top,o=a+v-c,f={target:{element:b,left:g.left,top:g.top,width:m,height:v},element:{element:l,left:S.left,top:S.top,width:u,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:o<0?"top":a>0?"bottom":"middle"}
if(m<u&&r(n+s)<m){f.horizontal="center"}if(v<c&&r(a+o)<v){f.vertical="middle"}if(i(r(n),r(s))>i(r(a),r(o))){f.important="horizontal"}else{f.important="vertical"}t.using.call(this,e,f)}}l.offset(e.extend(S,{using:o}))})}
e.ui.position={fit:{left:function(e,t){var n=t.within,r=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,a=e.left-t.collisionPosition.marginLeft,o=r-a,l=a+t.collisionWidth-s-r,u
if(t.collisionWidth>s){if(o>0&&l<=0){u=e.left+o+t.collisionWidth-s-r
e.left+=o-u}else if(l>0&&o<=0){e.left=r}else{if(o>l){e.left=r+s-t.collisionWidth}else{e.left=r}}}else if(o>0){e.left+=o}else if(l>0){e.left-=l}else{e.left=i(e.left-a,e.left)}},top:function(e,t){var n=t.within,r=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,a=e.top-t.collisionPosition.marginTop,o=r-a,l=a+t.collisionHeight-s-r,u
if(t.collisionHeight>s){if(o>0&&l<=0){u=e.top+o+t.collisionHeight-s-r
e.top+=o-u}else if(l>0&&o<=0){e.top=r}else{if(o>l){e.top=r+s-t.collisionHeight}else{e.top=r}}}else if(o>0){e.top+=o}else if(l>0){e.top-=l}else{e.top=i(e.top-a,e.top)}}},flip:{left:function(e,t){var n=t.within,i=n.offset.left+n.scrollLeft,s=n.width,a=n.isWindow?n.scrollLeft:n.offset.left,o=e.left-t.collisionPosition.marginLeft,l=o-a,u=o+t.collisionWidth-s-a,f=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],d,p
if(l<0){d=e.left+f+c+h+t.collisionWidth-s-i
if(d<0||d<r(l)){e.left+=f+c+h}}else if(u>0){p=e.left-t.collisionPosition.marginLeft+f+c+h-a
if(p>0||r(p)<u){e.left+=f+c+h}}},top:function(e,t){var n=t.within,i=n.offset.top+n.scrollTop,s=n.height,a=n.isWindow?n.scrollTop:n.offset.top,o=e.top-t.collisionPosition.marginTop,l=o-a,u=o+t.collisionHeight-s-a,f=t.my[1]==="top",c=f?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,d=-2*t.offset[1],p,m
if(l<0){m=e.top+c+h+d+t.collisionHeight-s-i
if(e.top+c+h+d>l&&(m<0||m<r(l))){e.top+=c+h+d}}else if(u>0){p=e.top-t.collisionPosition.marginTop+c+h+d-a
if(e.top+c+h+d>u&&(p>0||r(p)<u)){e.top+=c+h+d}}}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments)
e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments)
e.ui.position.fit.top.apply(this,arguments)}}};(function(){var t,i,r,s,a,o=document.getElementsByTagName("body")[0],l=document.createElement("div")
t=document.createElement(o?"div":"body")
r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"}
if(o){e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"})}for(a in r){t.style[a]=r[a]}t.appendChild(l)
i=o||document.documentElement
i.insertBefore(t,i.firstChild)
l.style.cssText="position: absolute; left: 10.7432222px;"
s=e(l).offset().left
n=s>10&&s<11
t.innerHTML=""
i.removeChild(t)})()})()
var l=e.ui.position
e.widget("ui.draggable",e.ui.mouse,{version:"1.11.1",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))){this.element[0].style.position="relative"}if(this.options.addClasses){this.element.addClass("ui-draggable")}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")}this._setHandleClassName()
this._mouseInit()},_setOption:function(e,t){this._super(e,t)
if(e==="handle"){this._removeHandleClassName()
this._setHandleClassName()}},_destroy:function(){if((this.helper||this.element).is(".ui-draggable-dragging")){this.destroyOnClear=true
return}this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled")
this._removeHandleClassName()
this._mouseDestroy()},_mouseCapture:function(t){var n=this.document[0],i=this.options
try{if(n.activeElement&&n.activeElement.nodeName.toLowerCase()!=="body"){e(n.activeElement).blur()}}catch(e){}if(this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0){return false}this.handle=this._getHandle(t)
if(!this.handle){return false}e(i.iframeFix===true?"iframe":i.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")})
return true},_mouseStart:function(t){var n=this.options
this.helper=this._createHelper(t)
this.helper.addClass("ui-draggable-dragging")
this._cacheHelperProportions()
if(e.ui.ddmanager){e.ui.ddmanager.current=this}this._cacheMargins()
this.cssPosition=this.helper.css("position")
this.scrollParent=this.helper.scrollParent(true)
this.offsetParent=this.helper.offsetParent()
this.offsetParentCssPosition=this.offsetParent.css("position")
this.offset=this.positionAbs=this.element.offset()
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left}
this.offset.scroll=false
e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()})
this.originalPosition=this.position=this._generatePosition(t,false)
this.originalPageX=t.pageX
this.originalPageY=t.pageY
n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt)
this._setContainment()
if(this._trigger("start",t)===false){this._clear()
return false}this._cacheHelperProportions()
if(e.ui.ddmanager&&!n.dropBehaviour){e.ui.ddmanager.prepareOffsets(this,t)}this._mouseDrag(t,true)
if(e.ui.ddmanager){e.ui.ddmanager.dragStart(this,t)}return true},_mouseDrag:function(t,n){if(this.offsetParentCssPosition==="fixed"){this.offset.parent=this._getParentOffset()}this.position=this._generatePosition(t,true)
this.positionAbs=this._convertPositionTo("absolute")
if(!n){var i=this._uiHash()
if(this._trigger("drag",t,i)===false){this._mouseUp({})
return false}this.position=i.position}this.helper[0].style.left=this.position.left+"px"
this.helper[0].style.top=this.position.top+"px"
if(e.ui.ddmanager){e.ui.ddmanager.drag(this,t)}return false},_mouseStop:function(t){var n=this,i=false
if(e.ui.ddmanager&&!this.options.dropBehaviour){i=e.ui.ddmanager.drop(this,t)}if(this.dropped){i=this.dropped
this.dropped=false}if(this.options.revert==="invalid"&&!i||this.options.revert==="valid"&&i||this.options.revert===true||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,i)){e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(n._trigger("stop",t)!==false){n._clear()}})}else{if(this._trigger("stop",t)!==false){this._clear()}}return false},_mouseUp:function(t){e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})
if(e.ui.ddmanager){e.ui.ddmanager.dragStop(this,t)}this.element.focus()
return e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})}else{this._clear()}return this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:true},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element
this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var n=this.options,i=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper==="clone"?this.element.clone().removeAttr("id"):this.element
if(!i.parents("body").length){i.appendTo(n.appendTo==="parent"?this.element[0].parentNode:n.appendTo)}if(i[0]!==this.element[0]&&!/(fixed|absolute)/.test(i.css("position"))){i.css("position","absolute")}return i},_adjustOffsetFromHelper:function(t){if(typeof t==="string"){t=t.split(" ")}if(e.isArray(t)){t={left:+t[0],top:+t[1]||0}}if("left"in t){this.offset.click.left=t.left+this.margins.left}if("right"in t){this.offset.click.left=this.helperProportions.width-t.right+this.margins.left}if("top"in t){this.offset.click.top=t.top+this.margins.top}if("bottom"in t){this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top}},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),n=this.document[0]
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==n&&e.contains(this.scrollParent[0],this.offsetParent[0])){t.left+=this.scrollParent.scrollLeft()
t.top+=this.scrollParent.scrollTop()}if(this._isRootNode(this.offsetParent[0])){t={top:0,left:0}}return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition!=="relative"){return{top:0,left:0}}var e=this.element.position(),t=this._isRootNode(this.scrollParent[0])
return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(!t?this.scrollParent.scrollTop():0),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(!t?this.scrollParent.scrollLeft():0)}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,i,r=this.options,s=this.document[0]
this.relativeContainer=null
if(!r.containment){this.containment=null
return}if(r.containment==="window"){this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
return}if(r.containment==="document"){this.containment=[0,0,e(s).width()-this.helperProportions.width-this.margins.left,(e(s).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
return}if(r.containment.constructor===Array){this.containment=r.containment
return}if(r.containment==="parent"){r.containment=this.helper[0].parentNode}n=e(r.containment)
i=n[0]
if(!i){return}t=n.css("overflow")!=="hidden"
this.containment=[(parseInt(n.css("borderLeftWidth"),10)||0)+(parseInt(n.css("paddingLeft"),10)||0),(parseInt(n.css("borderTopWidth"),10)||0)+(parseInt(n.css("paddingTop"),10)||0),(t?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(n.css("borderRightWidth"),10)||0)-(parseInt(n.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(n.css("borderBottomWidth"),10)||0)-(parseInt(n.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom]
this.relativeContainer=n},_convertPositionTo:function(e,t){if(!t){t=this.position}var n=e==="absolute"?1:-1,i=this._isRootNode(this.scrollParent[0])
return{top:t.top+this.offset.relative.top*n+this.offset.parent.top*n-(this.cssPosition==="fixed"?-this.offset.scroll.top:i?0:this.offset.scroll.top)*n,left:t.left+this.offset.relative.left*n+this.offset.parent.left*n-(this.cssPosition==="fixed"?-this.offset.scroll.left:i?0:this.offset.scroll.left)*n}},_generatePosition:function(e,t){var n,i,r,s,a=this.options,o=this._isRootNode(this.scrollParent[0]),l=e.pageX,u=e.pageY
if(!o||!this.offset.scroll){this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}}if(t){if(this.containment){if(this.relativeContainer){i=this.relativeContainer.offset()
n=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else{n=this.containment}if(e.pageX-this.offset.click.left<n[0]){l=n[0]+this.offset.click.left}if(e.pageY-this.offset.click.top<n[1]){u=n[1]+this.offset.click.top}if(e.pageX-this.offset.click.left>n[2]){l=n[2]+this.offset.click.left}if(e.pageY-this.offset.click.top>n[3]){u=n[3]+this.offset.click.top}}if(a.grid){r=a.grid[1]?this.originalPageY+Math.round((u-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY
u=n?r-this.offset.click.top>=n[1]||r-this.offset.click.top>n[3]?r:r-this.offset.click.top>=n[1]?r-a.grid[1]:r+a.grid[1]:r
s=a.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX
l=n?s-this.offset.click.left>=n[0]||s-this.offset.click.left>n[2]?s:s-this.offset.click.left>=n[0]?s-a.grid[0]:s+a.grid[0]:s}if(a.axis==="y"){l=this.originalPageX}if(a.axis==="x"){u=this.originalPageY}}return{top:u-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.offset.scroll.top:o?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.offset.scroll.left:o?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging")
if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null
this.cancelHelperRemoval=false
if(this.destroyOnClear){this.destroy()}},_trigger:function(t,n,i){i=i||this._uiHash()
e.ui.plugin.call(this,t,[n,i,this],true)
if(t==="drag"){this.positionAbs=this._convertPositionTo("absolute")}return e.Widget.prototype._trigger.call(this,t,n,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}})
e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n,i){var r=i.options,s=e.extend({},n,{item:i.element})
i.sortables=[]
e(r.connectToSortable).each(function(){var n=e(this).sortable("instance")
if(n&&!n.options.disabled){i.sortables.push({instance:n,shouldRevert:n.options.revert})
n.refreshPositions()
n._trigger("activate",t,s)}})},stop:function(t,n,i){var r=e.extend({},n,{item:i.element})
e.each(i.sortables,function(){if(this.instance.isOver){this.instance.isOver=0
i.cancelHelperRemoval=true
this.instance.cancelHelperRemoval=false
if(this.shouldRevert){this.instance.options.revert=this.shouldRevert}this.instance._mouseStop(t)
this.instance.options.helper=this.instance.options._helper
if(i.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false
this.instance._trigger("deactivate",t,r)}})},drag:function(t,n,i){var r=this
e.each(i.sortables,function(){var s=false,a=this
this.instance.positionAbs=i.positionAbs
this.instance.helperProportions=i.helperProportions
this.instance.offset.click=i.offset.click
if(this.instance._intersectsWith(this.instance.containerCache)){s=true
e.each(i.sortables,function(){this.instance.positionAbs=i.positionAbs
this.instance.helperProportions=i.helperProportions
this.instance.offset.click=i.offset.click
if(this!==a&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(a.instance.element[0],this.instance.element[0])){s=false}return s})}if(s){if(!this.instance.isOver){this.instance.isOver=1
this.instance.currentItem=e(r).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true)
this.instance.options._helper=this.instance.options.helper
this.instance.options.helper=function(){return n.helper[0]}
t.target=this.instance.currentItem[0]
this.instance._mouseCapture(t,true)
this.instance._mouseStart(t,true,true)
this.instance.offset.click.top=i.offset.click.top
this.instance.offset.click.left=i.offset.click.left
this.instance.offset.parent.left-=i.offset.parent.left-this.instance.offset.parent.left
this.instance.offset.parent.top-=i.offset.parent.top-this.instance.offset.parent.top
i._trigger("toSortable",t)
i.dropped=this.instance.element
i.currentItem=i.element
this.instance.fromOutside=i}if(this.instance.currentItem){this.instance._mouseDrag(t)}}else{if(this.instance.isOver){this.instance.isOver=0
this.instance.cancelHelperRemoval=true
this.instance.options.revert=false
this.instance._trigger("out",t,this.instance._uiHash(this.instance))
this.instance._mouseStop(t,true)
this.instance.options.helper=this.instance.options._helper
this.instance.currentItem.remove()
if(this.instance.placeholder){this.instance.placeholder.remove()}i._trigger("fromSortable",t)
i.dropped=false}}})}})
e.ui.plugin.add("draggable","cursor",{start:function(t,n,i){var r=e("body"),s=i.options
if(r.css("cursor")){s._cursor=r.css("cursor")}r.css("cursor",s.cursor)},stop:function(t,n,i){var r=i.options
if(r._cursor){e("body").css("cursor",r._cursor)}}})
e.ui.plugin.add("draggable","opacity",{start:function(t,n,i){var r=e(n.helper),s=i.options
if(r.css("opacity")){s._opacity=r.css("opacity")}r.css("opacity",s.opacity)},stop:function(t,n,i){var r=i.options
if(r._opacity){e(n.helper).css("opacity",r._opacity)}}})
e.ui.plugin.add("draggable","scroll",{start:function(e,t,n){if(!n.scrollParentNotHidden){n.scrollParentNotHidden=n.helper.scrollParent(false)}if(n.scrollParentNotHidden[0]!==n.document[0]&&n.scrollParentNotHidden[0].tagName!=="HTML"){n.overflowOffset=n.scrollParentNotHidden.offset()}},drag:function(t,n,i){var r=i.options,s=false,a=i.scrollParentNotHidden[0],o=i.document[0]
if(a!==o&&a.tagName!=="HTML"){if(!r.axis||r.axis!=="x"){if(i.overflowOffset.top+a.offsetHeight-t.pageY<r.scrollSensitivity){a.scrollTop=s=a.scrollTop+r.scrollSpeed}else if(t.pageY-i.overflowOffset.top<r.scrollSensitivity){a.scrollTop=s=a.scrollTop-r.scrollSpeed}}if(!r.axis||r.axis!=="y"){if(i.overflowOffset.left+a.offsetWidth-t.pageX<r.scrollSensitivity){a.scrollLeft=s=a.scrollLeft+r.scrollSpeed}else if(t.pageX-i.overflowOffset.left<r.scrollSensitivity){a.scrollLeft=s=a.scrollLeft-r.scrollSpeed}}}else{if(!r.axis||r.axis!=="x"){if(t.pageY-e(o).scrollTop()<r.scrollSensitivity){s=e(o).scrollTop(e(o).scrollTop()-r.scrollSpeed)}else if(e(window).height()-(t.pageY-e(o).scrollTop())<r.scrollSensitivity){s=e(o).scrollTop(e(o).scrollTop()+r.scrollSpeed)}}if(!r.axis||r.axis!=="y"){if(t.pageX-e(o).scrollLeft()<r.scrollSensitivity){s=e(o).scrollLeft(e(o).scrollLeft()-r.scrollSpeed)}else if(e(window).width()-(t.pageX-e(o).scrollLeft())<r.scrollSensitivity){s=e(o).scrollLeft(e(o).scrollLeft()+r.scrollSpeed)}}}if(s!==false&&e.ui.ddmanager&&!r.dropBehaviour){e.ui.ddmanager.prepareOffsets(i,t)}}})
e.ui.plugin.add("draggable","snap",{start:function(t,n,i){var r=i.options
i.snapElements=[]
e(r.snap.constructor!==String?r.snap.items||":data(ui-draggable)":r.snap).each(function(){var t=e(this),n=t.offset()
if(this!==i.element[0]){i.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:n.top,left:n.left})}})},drag:function(t,n,i){var r,s,a,o,l,u,f,c,h,d,p=i.options,m=p.snapTolerance,v=n.offset.left,g=v+i.helperProportions.width,_=n.offset.top,y=_+i.helperProportions.height
for(h=i.snapElements.length-1;h>=0;h--){l=i.snapElements[h].left
u=l+i.snapElements[h].width
f=i.snapElements[h].top
c=f+i.snapElements[h].height
if(g<l-m||v>u+m||y<f-m||_>c+m||!e.contains(i.snapElements[h].item.ownerDocument,i.snapElements[h].item)){if(i.snapElements[h].snapping){i.options.snap.release&&i.options.snap.release.call(i.element,t,e.extend(i._uiHash(),{snapItem:i.snapElements[h].item}))}i.snapElements[h].snapping=false
continue}if(p.snapMode!=="inner"){r=Math.abs(f-y)<=m
s=Math.abs(c-_)<=m
a=Math.abs(l-g)<=m
o=Math.abs(u-v)<=m
if(r){n.position.top=i._convertPositionTo("relative",{top:f-i.helperProportions.height,left:0}).top-i.margins.top}if(s){n.position.top=i._convertPositionTo("relative",{top:c,left:0}).top-i.margins.top}if(a){n.position.left=i._convertPositionTo("relative",{top:0,left:l-i.helperProportions.width}).left-i.margins.left}if(o){n.position.left=i._convertPositionTo("relative",{top:0,left:u}).left-i.margins.left}}d=r||s||a||o
if(p.snapMode!=="outer"){r=Math.abs(f-_)<=m
s=Math.abs(c-y)<=m
a=Math.abs(l-v)<=m
o=Math.abs(u-g)<=m
if(r){n.position.top=i._convertPositionTo("relative",{top:f,left:0}).top-i.margins.top}if(s){n.position.top=i._convertPositionTo("relative",{top:c-i.helperProportions.height,left:0}).top-i.margins.top}if(a){n.position.left=i._convertPositionTo("relative",{top:0,left:l}).left-i.margins.left}if(o){n.position.left=i._convertPositionTo("relative",{top:0,left:u-i.helperProportions.width}).left-i.margins.left}}if(!i.snapElements[h].snapping&&(r||s||a||o||d)){i.options.snap.snap&&i.options.snap.snap.call(i.element,t,e.extend(i._uiHash(),{snapItem:i.snapElements[h].item}))}i.snapElements[h].snapping=r||s||a||o||d}}})
e.ui.plugin.add("draggable","stack",{start:function(t,n,i){var r,s=i.options,a=e.makeArray(e(s.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)})
if(!a.length){return}r=parseInt(e(a[0]).css("zIndex"),10)||0
e(a).each(function(t){e(this).css("zIndex",r+t)})
this.css("zIndex",r+a.length)}})
e.ui.plugin.add("draggable","zIndex",{start:function(t,n,i){var r=e(n.helper),s=i.options
if(r.css("zIndex")){s._zIndex=r.css("zIndex")}r.css("zIndex",s.zIndex)},stop:function(t,n,i){var r=i.options
if(r._zIndex){e(n.helper).css("zIndex",r._zIndex)}}})
var u=e.ui.draggable
e.widget("ui.droppable",{version:"1.11.1",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,n=this.options,i=n.accept
this.isover=false
this.isout=true
this.accept=e.isFunction(i)?i:function(e){return e.is(i)}
this.proportions=function(){if(arguments.length){t=arguments[0]}else{return t?t:t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}}}
this._addToManager(n.scope)
n.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(t){e.ui.ddmanager.droppables[t]=e.ui.ddmanager.droppables[t]||[]
e.ui.ddmanager.droppables[t].push(this)},_splice:function(e){var t=0
for(;t<e.length;t++){if(e[t]===this){e.splice(t,1)}}},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope]
this._splice(t)
this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,n){if(t==="accept"){this.accept=e.isFunction(n)?n:function(e){return e.is(n)}}else if(t==="scope"){var i=e.ui.ddmanager.droppables[this.options.scope]
this._splice(i)
this._addToManager(n)}this._super(t,n)},_activate:function(t){var n=e.ui.ddmanager.current
if(this.options.activeClass){this.element.addClass(this.options.activeClass)}if(n){this._trigger("activate",t,this.ui(n))}},_deactivate:function(t){var n=e.ui.ddmanager.current
if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(n){this._trigger("deactivate",t,this.ui(n))}},_over:function(t){var n=e.ui.ddmanager.current
if(!n||(n.currentItem||n.element)[0]===this.element[0]){return}if(this.accept.call(this.element[0],n.currentItem||n.element)){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)}this._trigger("over",t,this.ui(n))}},_out:function(t){var n=e.ui.ddmanager.current
if(!n||(n.currentItem||n.element)[0]===this.element[0]){return}if(this.accept.call(this.element[0],n.currentItem||n.element)){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("out",t,this.ui(n))}},_drop:function(t,n){var i=n||e.ui.ddmanager.current,r=false
if(!i||(i.currentItem||i.element)[0]===this.element[0]){return false}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var n=e(this).droppable("instance")
if(n.options.greedy&&!n.options.disabled&&n.options.scope===i.options.scope&&n.accept.call(n.element[0],i.currentItem||i.element)&&e.ui.intersect(i,e.extend(n,{offset:n.element.offset()}),n.options.tolerance,t)){r=true
return false}})
if(r){return false}if(this.accept.call(this.element[0],i.currentItem||i.element)){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("drop",t,this.ui(i))
return this.element}return false},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}})
e.ui.intersect=function(){function e(e,t,n){return e>=t&&e<t+n}return function(t,n,i,r){if(!n.offset){return false}var s=(t.positionAbs||t.position.absolute).left,a=(t.positionAbs||t.position.absolute).top,o=s+t.helperProportions.width,l=a+t.helperProportions.height,u=n.offset.left,f=n.offset.top,c=u+n.proportions().width,h=f+n.proportions().height
switch(i){case"fit":return u<=s&&o<=c&&f<=a&&l<=h
case"intersect":return u<s+t.helperProportions.width/2&&o-t.helperProportions.width/2<c&&f<a+t.helperProportions.height/2&&l-t.helperProportions.height/2<h
case"pointer":return e(r.pageY,f,n.proportions().height)&&e(r.pageX,u,n.proportions().width)
case"touch":return(a>=f&&a<=h||l>=f&&l<=h||a<f&&l>h)&&(s>=u&&s<=c||o>=u&&o<=c||s<u&&o>c)
default:return false}}}()
e.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(t,n){var i,r,s=e.ui.ddmanager.droppables[t.options.scope]||[],a=n?n.type:null,o=(t.currentItem||t.element).find(":data(ui-droppable)").addBack()
e:for(i=0;i<s.length;i++){if(s[i].options.disabled||t&&!s[i].accept.call(s[i].element[0],t.currentItem||t.element)){continue}for(r=0;r<o.length;r++){if(o[r]===s[i].element[0]){s[i].proportions().height=0
continue e}}s[i].visible=s[i].element.css("display")!=="none"
if(!s[i].visible){continue}if(a==="mousedown"){s[i]._activate.call(s[i],n)}s[i].offset=s[i].element.offset()
s[i].proportions({width:s[i].element[0].offsetWidth,height:s[i].element[0].offsetHeight})}},drop:function(t,n){var i=false
e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){if(!this.options){return}if(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance,n)){i=this._drop.call(this,n)||i}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)){this.isout=true
this.isover=false
this._deactivate.call(this,n)}})
return i},dragStart:function(t,n){t.element.parentsUntil("body").bind("scroll.droppable",function(){if(!t.options.refreshPositions){e.ui.ddmanager.prepareOffsets(t,n)}})},drag:function(t,n){if(t.options.refreshPositions){e.ui.ddmanager.prepareOffsets(t,n)}e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return}var i,r,s,a=e.ui.intersect(t,this,this.options.tolerance,n),o=!a&&this.isover?"isout":a&&!this.isover?"isover":null
if(!o){return}if(this.options.greedy){r=this.options.scope
s=this.element.parents(":data(ui-droppable)").filter(function(){return e(this).droppable("instance").options.scope===r})
if(s.length){i=e(s[0]).droppable("instance")
i.greedyChild=o==="isover"}}if(i&&o==="isover"){i.isover=false
i.isout=true
i._out.call(i,n)}this[o]=true
this[o==="isout"?"isover":"isout"]=false
this[o==="isover"?"_over":"_out"].call(this,n)
if(i&&o==="isout"){i.isout=false
i.isover=true
i._over.call(i,n)}})},dragStop:function(t,n){t.element.parentsUntil("body").unbind("scroll.droppable")
if(!t.options.refreshPositions){e.ui.ddmanager.prepareOffsets(t,n)}}}
var f=e.ui.droppable
e.widget("ui.resizable",e.ui.mouse,{version:"1.11.1",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,n){if(e(t).css("overflow")==="hidden"){return false}var i=n&&n==="left"?"scrollLeft":"scrollTop",r=false
if(t[i]>0){return true}t[i]=1
r=t[i]>0
t[i]=0
return r},_create:function(){var t,n,i,r,s,a=this,o=this.options
this.element.addClass("ui-resizable")
e.extend(this,{_aspectRatio:!!o.aspectRatio,aspectRatio:o.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:o.helper||o.ghost||o.animate?o.helper||"ui-resizable-helper":null})
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}))
this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance"))
this.elementIsWrapper=true
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")})
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0})
this.originalResizeStyle=this.originalElement.css("resize")
this.originalElement.css("resize","none")
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}))
this.originalElement.css({margin:this.originalElement.css("margin")})
this._proportionallyResize()}this.handles=o.handles||(!e(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"})
if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"}t=this.handles.split(",")
this.handles={}
for(n=0;n<t.length;n++){i=e.trim(t[n])
s="ui-resizable-"+i
r=e("<div class='ui-resizable-handle "+s+"'></div>")
r.css({zIndex:o.zIndex})
if("se"===i){r.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}this.handles[i]=".ui-resizable-"+i
this.element.append(r)}}this._renderAxis=function(t){var n,i,r,s
t=t||this.element
for(n in this.handles){if(this.handles[n].constructor===String){this.handles[n]=this.element.children(this.handles[n]).first().show()}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){i=e(this.handles[n],this.element)
s=/sw|ne|nw|se|n|s/.test(n)?i.outerHeight():i.outerWidth()
r=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("")
t.css(r,s)
this._proportionallyResize()}if(!e(this.handles[n]).length){continue}}}
this._renderAxis(this.element)
this._handles=e(".ui-resizable-handle",this.element).disableSelection()
this._handles.mouseover(function(){if(!a.resizing){if(this.className){r=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}a.axis=r&&r[1]?r[1]:"se"}})
if(o.autoHide){this._handles.hide()
e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(o.disabled){return}e(this).removeClass("ui-resizable-autohide")
a._handles.show()}).mouseleave(function(){if(o.disabled){return}if(!a.resizing){e(this).addClass("ui-resizable-autohide")
a._handles.hide()}})}this._mouseInit()},_destroy:function(){this._mouseDestroy()
var t,n=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()}
if(this.elementIsWrapper){n(this.element)
t=this.element
this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t)
t.remove()}this.originalElement.css("resize",this.originalResizeStyle)
n(this.originalElement)
return this},_mouseCapture:function(t){var n,i,r=false
for(n in this.handles){i=e(this.handles[n])[0]
if(i===t.target||e.contains(i,t.target)){r=true}}return!this.options.disabled&&r},_mouseStart:function(t){var n,i,r,s=this.options,a=this.element
this.resizing=true
this._renderProxy()
n=this._num(this.helper.css("left"))
i=this._num(this.helper.css("top"))
if(s.containment){n+=e(s.containment).scrollLeft()||0
i+=e(s.containment).scrollTop()||0}this.offset=this.helper.offset()
this.position={left:n,top:i}
this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()}
this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()}
this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()}
this.originalPosition={left:n,top:i}
this.originalMousePosition={left:t.pageX,top:t.pageY}
this.aspectRatio=typeof s.aspectRatio==="number"?s.aspectRatio:this.originalSize.width/this.originalSize.height||1
r=e(".ui-resizable-"+this.axis).css("cursor")
e("body").css("cursor",r==="auto"?this.axis+"-resize":r)
a.addClass("ui-resizable-resizing")
this._propagate("start",t)
return true},_mouseDrag:function(t){var n,i,r=this.originalMousePosition,s=this.axis,a=t.pageX-r.left||0,o=t.pageY-r.top||0,l=this._change[s]
this._updatePrevProperties()
if(!l){return false}n=l.apply(this,[t,a,o])
this._updateVirtualBoundaries(t.shiftKey)
if(this._aspectRatio||t.shiftKey){n=this._updateRatio(n,t)}n=this._respectSize(n,t)
this._updateCache(n)
this._propagate("resize",t)
i=this._applyChanges()
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}if(!e.isEmptyObject(i)){this._updatePrevProperties()
this._trigger("resize",t,this.ui())
this._applyChanges()}return false},_mouseStop:function(t){this.resizing=false
var n,i,r,s,a,o,l,u=this.options,f=this
if(this._helper){n=this._proportionallyResizeElements
i=n.length&&/textarea/i.test(n[0].nodeName)
r=i&&this._hasScroll(n[0],"left")?0:f.sizeDiff.height
s=i?0:f.sizeDiff.width
a={width:f.helper.width()-s,height:f.helper.height()-r}
o=parseInt(f.element.css("left"),10)+(f.position.left-f.originalPosition.left)||null
l=parseInt(f.element.css("top"),10)+(f.position.top-f.originalPosition.top)||null
if(!u.animate){this.element.css(e.extend(a,{top:l,left:o}))}f.helper.height(f.size.height)
f.helper.width(f.size.width)
if(this._helper&&!u.animate){this._proportionallyResize()}}e("body").css("cursor","auto")
this.element.removeClass("ui-resizable-resizing")
this._propagate("stop",t)
if(this._helper){this.helper.remove()}return false},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left}
this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={}
if(this.position.top!==this.prevPosition.top){e.top=this.position.top+"px"}if(this.position.left!==this.prevPosition.left){e.left=this.position.left+"px"}if(this.size.width!==this.prevSize.width){e.width=this.size.width+"px"}if(this.size.height!==this.prevSize.height){e.height=this.size.height+"px"}this.helper.css(e)
return e},_updateVirtualBoundaries:function(e){var t,n,i,r,s,a=this.options
s={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:Infinity,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:Infinity}
if(this._aspectRatio||e){t=s.minHeight*this.aspectRatio
i=s.minWidth/this.aspectRatio
n=s.maxHeight*this.aspectRatio
r=s.maxWidth/this.aspectRatio
if(t>s.minWidth){s.minWidth=t}if(i>s.minHeight){s.minHeight=i}if(n<s.maxWidth){s.maxWidth=n}if(r<s.maxHeight){s.maxHeight=r}}this._vBoundaries=s},_updateCache:function(e){this.offset=this.helper.offset()
if(this._isNumber(e.left)){this.position.left=e.left}if(this._isNumber(e.top)){this.position.top=e.top}if(this._isNumber(e.height)){this.size.height=e.height}if(this._isNumber(e.width)){this.size.width=e.width}},_updateRatio:function(e){var t=this.position,n=this.size,i=this.axis
if(this._isNumber(e.height)){e.width=e.height*this.aspectRatio}else if(this._isNumber(e.width)){e.height=e.width/this.aspectRatio}if(i==="sw"){e.left=t.left+(n.width-e.width)
e.top=null}if(i==="nw"){e.top=t.top+(n.height-e.height)
e.left=t.left+(n.width-e.width)}return e},_respectSize:function(e){var t=this._vBoundaries,n=this.axis,i=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,r=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,s=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,a=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,o=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,u=/sw|nw|w/.test(n),f=/nw|ne|n/.test(n)
if(s){e.width=t.minWidth}if(a){e.height=t.minHeight}if(i){e.width=t.maxWidth}if(r){e.height=t.maxHeight}if(s&&u){e.left=o-t.minWidth}if(i&&u){e.left=o-t.maxWidth}if(a&&f){e.top=l-t.minHeight}if(r&&f){e.top=l-t.maxHeight}if(!e.width&&!e.height&&!e.left&&e.top){e.top=null}else if(!e.width&&!e.height&&!e.top&&e.left){e.left=null}return e},_getPaddingPlusBorderDimensions:function(e){var t=0,n=[],i=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],r=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")]
for(;t<4;t++){n[t]=parseInt(i[t],10)||0
n[t]+=parseInt(r[t],10)||0}return{height:n[0]+n[2],width:n[1]+n[3]}},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return}var e,t=0,n=this.helper||this.element
for(;t<this._proportionallyResizeElements.length;t++){e=this._proportionallyResizeElements[t]
if(!this.outerDimensions){this.outerDimensions=this._getPaddingPlusBorderDimensions(e)}e.css({height:n.height()-this.outerDimensions.height||0,width:n.width()-this.outerDimensions.width||0})}},_renderProxy:function(){var t=this.element,n=this.options
this.elementOffset=t.offset()
if(this._helper){this.helper=this.helper||e("<div style='overflow:hidden;'></div>")
this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++n.zIndex})
this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var n=this.originalSize,i=this.originalPosition
return{left:i.left+t,width:n.width-t}},n:function(e,t,n){var i=this.originalSize,r=this.originalPosition
return{top:r.top+n,height:i.height-n}},s:function(e,t,n){return{height:this.originalSize.height+n}},se:function(t,n,i){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,n,i]))},sw:function(t,n,i){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,n,i]))},ne:function(t,n,i){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,n,i]))},nw:function(t,n,i){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,n,i]))}},_propagate:function(t,n){e.ui.plugin.call(this,t,[n,this.ui()])
t!=="resize"&&this._trigger(t,n,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}})
e.ui.plugin.add("resizable","animate",{stop:function(t){var n=e(this).resizable("instance"),i=n.options,r=n._proportionallyResizeElements,s=r.length&&/textarea/i.test(r[0].nodeName),a=s&&n._hasScroll(r[0],"left")?0:n.sizeDiff.height,o=s?0:n.sizeDiff.width,l={width:n.size.width-o,height:n.size.height-a},u=parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left)||null,f=parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top)||null
n.element.animate(e.extend(l,f&&u?{top:f,left:u}:{}),{duration:i.animateDuration,easing:i.animateEasing,step:function(){var i={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)}
if(r&&r.length){e(r[0]).css({width:i.width,height:i.height})}n._updateCache(i)
n._propagate("resize",t)}})}})
e.ui.plugin.add("resizable","containment",{start:function(){var t,n,i,r,s,a,o,l=e(this).resizable("instance"),u=l.options,f=l.element,c=u.containment,h=c instanceof e?c.get(0):/parent/.test(c)?f.parent().get(0):c
if(!h){return}l.containerElement=e(h)
if(/document/.test(c)||c===document){l.containerOffset={left:0,top:0}
l.containerPosition={left:0,top:0}
l.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}}else{t=e(h)
n=[]
e(["Top","Right","Left","Bottom"]).each(function(e,i){n[e]=l._num(t.css("padding"+i))})
l.containerOffset=t.offset()
l.containerPosition=t.position()
l.containerSize={height:t.innerHeight()-n[3],width:t.innerWidth()-n[1]}
i=l.containerOffset
r=l.containerSize.height
s=l.containerSize.width
a=l._hasScroll(h,"left")?h.scrollWidth:s
o=l._hasScroll(h)?h.scrollHeight:r
l.parentData={element:h,left:i.left,top:i.top,width:a,height:o}}},resize:function(t){var n,i,r,s,a=e(this).resizable("instance"),o=a.options,l=a.containerOffset,u=a.position,f=a._aspectRatio||t.shiftKey,c={top:0,left:0},h=a.containerElement,d=true
if(h[0]!==document&&/static/.test(h.css("position"))){c=l}if(u.left<(a._helper?l.left:0)){a.size.width=a.size.width+(a._helper?a.position.left-l.left:a.position.left-c.left)
if(f){a.size.height=a.size.width/a.aspectRatio
d=false}a.position.left=o.helper?l.left:0}if(u.top<(a._helper?l.top:0)){a.size.height=a.size.height+(a._helper?a.position.top-l.top:a.position.top)
if(f){a.size.width=a.size.height*a.aspectRatio
d=false}a.position.top=a._helper?l.top:0}r=a.containerElement.get(0)===a.element.parent().get(0)
s=/relative|absolute/.test(a.containerElement.css("position"))
if(r&&s){a.offset.left=a.parentData.left+a.position.left
a.offset.top=a.parentData.top+a.position.top}else{a.offset.left=a.element.offset().left
a.offset.top=a.element.offset().top}n=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-c.left:a.offset.left-l.left))
i=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-c.top:a.offset.top-l.top))
if(n+a.size.width>=a.parentData.width){a.size.width=a.parentData.width-n
if(f){a.size.height=a.size.width/a.aspectRatio
d=false}}if(i+a.size.height>=a.parentData.height){a.size.height=a.parentData.height-i
if(f){a.size.width=a.size.height*a.aspectRatio
d=false}}if(!d){a.position.left=a.prevPosition.left
a.position.top=a.prevPosition.top
a.size.width=a.prevSize.width
a.size.height=a.prevSize.height}},stop:function(){var t=e(this).resizable("instance"),n=t.options,i=t.containerOffset,r=t.containerPosition,s=t.containerElement,a=e(t.helper),o=a.offset(),l=a.outerWidth()-t.sizeDiff.width,u=a.outerHeight()-t.sizeDiff.height
if(t._helper&&!n.animate&&/relative/.test(s.css("position"))){e(this).css({left:o.left-r.left-i.left,width:l,height:u})}if(t._helper&&!n.animate&&/static/.test(s.css("position"))){e(this).css({left:o.left-r.left-i.left,width:l,height:u})}}})
e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),n=t.options,i=function(t){e(t).each(function(){var t=e(this)
t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})}
if(typeof n.alsoResize==="object"&&!n.alsoResize.parentNode){if(n.alsoResize.length){n.alsoResize=n.alsoResize[0]
i(n.alsoResize)}else{e.each(n.alsoResize,function(e){i(e)})}}else{i(n.alsoResize)}},resize:function(t,n){var i=e(this).resizable("instance"),r=i.options,s=i.originalSize,a=i.originalPosition,o={height:i.size.height-s.height||0,width:i.size.width-s.width||0,top:i.position.top-a.top||0,left:i.position.left-a.left||0},l=function(t,i){e(t).each(function(){var t=e(this),r=e(this).data("ui-resizable-alsoresize"),s={},a=i&&i.length?i:t.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"]
e.each(a,function(e,t){var n=(r[t]||0)+(o[t]||0)
if(n&&n>=0){s[t]=n||null}})
t.css(s)})}
if(typeof r.alsoResize==="object"&&!r.alsoResize.nodeType){e.each(r.alsoResize,function(e,t){l(e,t)})}else{l(r.alsoResize)}},stop:function(){e(this).removeData("resizable-alsoresize")}})
e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),n=t.options,i=t.size
t.ghost=t.originalElement.clone()
t.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof n.ghost==="string"?n.ghost:"")
t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance")
if(t.ghost){t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})}},stop:function(){var t=e(this).resizable("instance")
if(t.ghost&&t.helper){t.helper.get(0).removeChild(t.ghost.get(0))}}})
e.ui.plugin.add("resizable","grid",{resize:function(){var t,n=e(this).resizable("instance"),i=n.options,r=n.size,s=n.originalSize,a=n.originalPosition,o=n.axis,l=typeof i.grid==="number"?[i.grid,i.grid]:i.grid,u=l[0]||1,f=l[1]||1,c=Math.round((r.width-s.width)/u)*u,h=Math.round((r.height-s.height)/f)*f,d=s.width+c,p=s.height+h,m=i.maxWidth&&i.maxWidth<d,v=i.maxHeight&&i.maxHeight<p,g=i.minWidth&&i.minWidth>d,_=i.minHeight&&i.minHeight>p
i.grid=l
if(g){d+=u}if(_){p+=f}if(m){d-=u}if(v){p-=f}if(/^(se|s|e)$/.test(o)){n.size.width=d
n.size.height=p}else if(/^(ne)$/.test(o)){n.size.width=d
n.size.height=p
n.position.top=a.top-h}else if(/^(sw)$/.test(o)){n.size.width=d
n.size.height=p
n.position.left=a.left-c}else{if(p-f<=0||d-u<=0){t=n._getPaddingPlusBorderDimensions(this)}if(p-f>0){n.size.height=p
n.position.top=a.top-h}else{p=f-t.height
n.size.height=p
n.position.top=a.top+s.height-p}if(d-u>0){n.size.width=d
n.position.left=a.left-c}else{d=f-t.height
n.size.width=d
n.position.left=a.left+s.width-d}}}})
var c=e.ui.resizable
var h=e.widget("ui.sortable",e.ui.mouse,{version:"1.11.1",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(e,t,n){return e>=t&&e<t+n},_isFloating:function(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))},_create:function(){var e=this.options
this.containerCache={}
this.element.addClass("ui-sortable")
this.refresh()
this.floating=this.items.length?e.axis==="x"||this._isFloating(this.items[0].item):false
this.offset=this.element.offset()
this._mouseInit()
this._setHandleClassName()
this.ready=true},_setOption:function(e,t){this._super(e,t)
if(e==="handle"){this._setHandleClassName()}},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle")
e.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle")
this._mouseDestroy()
for(var e=this.items.length-1;e>=0;e--){this.items[e].item.removeData(this.widgetName+"-item")}return this},_mouseCapture:function(t,n){var i=null,r=false,s=this
if(this.reverting){return false}if(this.options.disabled||this.options.type==="static"){return false}this._refreshItems(t)
e(t.target).parents().each(function(){if(e.data(this,s.widgetName+"-item")===s){i=e(this)
return false}})
if(e.data(t.target,s.widgetName+"-item")===s){i=e(t.target)}if(!i){return false}if(this.options.handle&&!n){e(this.options.handle,i).find("*").addBack().each(function(){if(this===t.target){r=true}})
if(!r){return false}}this.currentItem=i
this._removeCurrentsFromItems()
return true},_mouseStart:function(t,n,i){var r,s,a=this.options
this.currentContainer=this
this.refreshPositions()
this.helper=this._createHelper(t)
this._cacheHelperProportions()
this._cacheMargins()
this.scrollParent=this.helper.scrollParent()
this.offset=this.currentItem.offset()
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left}
e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()})
this.helper.css("position","absolute")
this.cssPosition=this.helper.css("position")
this.originalPosition=this._generatePosition(t)
this.originalPageX=t.pageX
this.originalPageY=t.pageY
a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt)
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]}
if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder()
if(a.containment){this._setContainment()}if(a.cursor&&a.cursor!=="auto"){s=this.document.find("body")
this.storedCursor=s.css("cursor")
s.css("cursor",a.cursor)
this.storedStylesheet=e("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(s)}if(a.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}this.helper.css("opacity",a.opacity)}if(a.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}this.helper.css("zIndex",a.zIndex)}if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()}this._trigger("start",t,this._uiHash())
if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!i){for(r=this.containers.length-1;r>=0;r--){this.containers[r]._trigger("activate",t,this._uiHash(this))}}if(e.ui.ddmanager){e.ui.ddmanager.current=this}if(e.ui.ddmanager&&!a.dropBehaviour){e.ui.ddmanager.prepareOffsets(this,t)}this.dragging=true
this.helper.addClass("ui-sortable-helper")
this._mouseDrag(t)
return true},_mouseDrag:function(t){var n,i,r,s,a=this.options,o=false
this.position=this._generatePosition(t)
this.positionAbs=this._convertPositionTo("absolute")
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}if(this.options.scroll){if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<a.scrollSensitivity){this.scrollParent[0].scrollTop=o=this.scrollParent[0].scrollTop+a.scrollSpeed}else if(t.pageY-this.overflowOffset.top<a.scrollSensitivity){this.scrollParent[0].scrollTop=o=this.scrollParent[0].scrollTop-a.scrollSpeed}if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<a.scrollSensitivity){this.scrollParent[0].scrollLeft=o=this.scrollParent[0].scrollLeft+a.scrollSpeed}else if(t.pageX-this.overflowOffset.left<a.scrollSensitivity){this.scrollParent[0].scrollLeft=o=this.scrollParent[0].scrollLeft-a.scrollSpeed}}else{if(t.pageY-e(document).scrollTop()<a.scrollSensitivity){o=e(document).scrollTop(e(document).scrollTop()-a.scrollSpeed)}else if(e(window).height()-(t.pageY-e(document).scrollTop())<a.scrollSensitivity){o=e(document).scrollTop(e(document).scrollTop()+a.scrollSpeed)}if(t.pageX-e(document).scrollLeft()<a.scrollSensitivity){o=e(document).scrollLeft(e(document).scrollLeft()-a.scrollSpeed)}else if(e(window).width()-(t.pageX-e(document).scrollLeft())<a.scrollSensitivity){o=e(document).scrollLeft(e(document).scrollLeft()+a.scrollSpeed)}}if(o!==false&&e.ui.ddmanager&&!a.dropBehaviour){e.ui.ddmanager.prepareOffsets(this,t)}}this.positionAbs=this._convertPositionTo("absolute")
if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"}for(n=this.items.length-1;n>=0;n--){i=this.items[n]
r=i.item[0]
s=this._intersectsWithPointer(i)
if(!s){continue}if(i.instance!==this.currentContainer){continue}if(r!==this.currentItem[0]&&this.placeholder[s===1?"next":"prev"]()[0]!==r&&!e.contains(this.placeholder[0],r)&&(this.options.type==="semi-dynamic"?!e.contains(this.element[0],r):true)){this.direction=s===1?"down":"up"
if(this.options.tolerance==="pointer"||this._intersectsWithSides(i)){this._rearrange(t,i)}else{break}this._trigger("change",t,this._uiHash())
break}}this._contactContainers(t)
if(e.ui.ddmanager){e.ui.ddmanager.drag(this,t)}this._trigger("sort",t,this._uiHash())
this.lastPositionAbs=this.positionAbs
return false},_mouseStop:function(t,n){if(!t){return}if(e.ui.ddmanager&&!this.options.dropBehaviour){e.ui.ddmanager.drop(this,t)}if(this.options.revert){var i=this,r=this.placeholder.offset(),s=this.options.axis,a={}
if(!s||s==="x"){a.left=r.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)}if(!s||s==="y"){a.top=r.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)}this.reverting=true
e(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){i._clear(t)})}else{this._clear(t,n)}return false},cancel:function(){if(this.dragging){this._mouseUp({target:null})
if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var t=this.containers.length-1;t>=0;t--){this.containers[t]._trigger("deactivate",null,this._uiHash(this))
if(this.containers[t].containerCache.over){this.containers[t]._trigger("out",null,this._uiHash(this))
this.containers[t].containerCache.over=0}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}e.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null})
if(this.domPosition.prev){e(this.domPosition.prev).after(this.currentItem)}else{e(this.domPosition.parent).prepend(this.currentItem)}}return this},serialize:function(t){var n=this._getItemsAsjQuery(t&&t.connected),i=[]
t=t||{}
e(n).each(function(){var n=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/)
if(n){i.push((t.key||n[1]+"[]")+"="+(t.key&&t.expression?n[1]:n[2]))}})
if(!i.length&&t.key){i.push(t.key+"=")}return i.join("&")},toArray:function(t){var n=this._getItemsAsjQuery(t&&t.connected),i=[]
t=t||{}
n.each(function(){i.push(e(t.item||this).attr(t.attribute||"id")||"")})
return i},_intersectsWith:function(e){var t=this.positionAbs.left,n=t+this.helperProportions.width,i=this.positionAbs.top,r=i+this.helperProportions.height,s=e.left,a=s+e.width,o=e.top,l=o+e.height,u=this.offset.click.top,f=this.offset.click.left,c=this.options.axis==="x"||i+u>o&&i+u<l,h=this.options.axis==="y"||t+f>s&&t+f<a,d=c&&h
if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]){return d}else{return s<t+this.helperProportions.width/2&&n-this.helperProportions.width/2<a&&o<i+this.helperProportions.height/2&&r-this.helperProportions.height/2<l}},_intersectsWithPointer:function(e){var t=this.options.axis==="x"||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),n=this.options.axis==="y"||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),i=t&&n,r=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection()
if(!i){return false}return this.floating?s&&s==="right"||r==="down"?2:1:r&&(r==="down"?2:1)},_intersectsWithSides:function(e){var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),n=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),i=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection()
if(this.floating&&r){return r==="right"&&n||r==="left"&&!n}else{return i&&(i==="down"&&t||i==="up"&&!t)}},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top
return e!==0&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left
return e!==0&&(e>0?"right":"left")},refresh:function(e){this._refreshItems(e)
this._setHandleClassName()
this.refreshPositions()
return this},_connectWith:function(){var e=this.options
return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){var n,i,r,s,a=[],o=[],l=this._connectWith()
if(l&&t){for(n=l.length-1;n>=0;n--){r=e(l[n])
for(i=r.length-1;i>=0;i--){s=e.data(r[i],this.widgetFullName)
if(s&&s!==this&&!s.options.disabled){o.push([e.isFunction(s.options.items)?s.options.items.call(s.element):e(s.options.items,s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),s])}}}}o.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this])
function u(){a.push(this)}for(n=o.length-1;n>=0;n--){o[n][0].each(u)}return e(a)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)")
this.items=e.grep(this.items,function(e){for(var n=0;n<t.length;n++){if(t[n]===e.item[0]){return false}}return true})},_refreshItems:function(t){this.items=[]
this.containers=[this]
var n,i,r,s,a,o,l,u,f=this.items,c=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],h=this._connectWith()
if(h&&this.ready){for(n=h.length-1;n>=0;n--){r=e(h[n])
for(i=r.length-1;i>=0;i--){s=e.data(r[i],this.widgetFullName)
if(s&&s!==this&&!s.options.disabled){c.push([e.isFunction(s.options.items)?s.options.items.call(s.element[0],t,{item:this.currentItem}):e(s.options.items,s.element),s])
this.containers.push(s)}}}}for(n=c.length-1;n>=0;n--){a=c[n][1]
o=c[n][0]
for(i=0,u=o.length;i<u;i++){l=e(o[i])
l.data(this.widgetName+"-item",a)
f.push({item:l,instance:a,width:0,height:0,left:0,top:0})}}},refreshPositions:function(t){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}var n,i,r,s
for(n=this.items.length-1;n>=0;n--){i=this.items[n]
if(i.instance!==this.currentContainer&&this.currentContainer&&i.item[0]!==this.currentItem[0]){continue}r=this.options.toleranceElement?e(this.options.toleranceElement,i.item):i.item
if(!t){i.width=r.outerWidth()
i.height=r.outerHeight()}s=r.offset()
i.left=s.left
i.top=s.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(n=this.containers.length-1;n>=0;n--){s=this.containers[n].element.offset()
this.containers[n].containerCache.left=s.left
this.containers[n].containerCache.top=s.top
this.containers[n].containerCache.width=this.containers[n].element.outerWidth()
this.containers[n].containerCache.height=this.containers[n].element.outerHeight()}}return this},_createPlaceholder:function(t){t=t||this
var n,i=t.options
if(!i.placeholder||i.placeholder.constructor===String){n=i.placeholder
i.placeholder={element:function(){var i=t.currentItem[0].nodeName.toLowerCase(),r=e("<"+i+">",t.document[0]).addClass(n||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")
if(i==="tr"){t.currentItem.children().each(function(){e("<td>&#160;</td>",t.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(r)})}else if(i==="img"){r.attr("src",t.currentItem.attr("src"))}if(!n){r.css("visibility","hidden")}return r},update:function(e,r){if(n&&!i.forcePlaceholderSize){return}if(!r.height()){r.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10))}if(!r.width()){r.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10))}}}}t.placeholder=e(i.placeholder.element.call(t.element,t.currentItem))
t.currentItem.after(t.placeholder)
i.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var n,i,r,s,a,o,l,u,f,c,h=null,d=null
for(n=this.containers.length-1;n>=0;n--){if(e.contains(this.currentItem[0],this.containers[n].element[0])){continue}if(this._intersectsWith(this.containers[n].containerCache)){if(h&&e.contains(this.containers[n].element[0],h.element[0])){continue}h=this.containers[n]
d=n}else{if(this.containers[n].containerCache.over){this.containers[n]._trigger("out",t,this._uiHash(this))
this.containers[n].containerCache.over=0}}}if(!h){return}if(this.containers.length===1){if(!this.containers[d].containerCache.over){this.containers[d]._trigger("over",t,this._uiHash(this))
this.containers[d].containerCache.over=1}}else{r=1e4
s=null
f=h.floating||this._isFloating(this.currentItem)
a=f?"left":"top"
o=f?"width":"height"
c=f?"clientX":"clientY"
for(i=this.items.length-1;i>=0;i--){if(!e.contains(this.containers[d].element[0],this.items[i].item[0])){continue}if(this.items[i].item[0]===this.currentItem[0]){continue}l=this.items[i].item.offset()[a]
u=false
if(t[c]-l>this.items[i][o]/2){u=true}if(Math.abs(t[c]-l)<r){r=Math.abs(t[c]-l)
s=this.items[i]
this.direction=u?"up":"down"}}if(!s&&!this.options.dropOnEmpty){return}if(this.currentContainer===this.containers[d]){return}s?this._rearrange(t,s,null,true):this._rearrange(t,null,this.containers[d].element,true)
this._trigger("change",t,this._uiHash())
this.containers[d]._trigger("change",t,this._uiHash(this))
this.currentContainer=this.containers[d]
this.options.placeholder.update(this.currentContainer,this.placeholder)
this.containers[d]._trigger("over",t,this._uiHash(this))
this.containers[d].containerCache.over=1}},_createHelper:function(t){var n=this.options,i=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t,this.currentItem])):n.helper==="clone"?this.currentItem.clone():this.currentItem
if(!i.parents("body").length){e(n.appendTo!=="parent"?n.appendTo:this.currentItem[0].parentNode)[0].appendChild(i[0])}if(i[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(!i[0].style.width||n.forceHelperSize){i.width(this.currentItem.width())}if(!i[0].style.height||n.forceHelperSize){i.height(this.currentItem.height())}return i},_adjustOffsetFromHelper:function(t){if(typeof t==="string"){t=t.split(" ")}if(e.isArray(t)){t={left:+t[0],top:+t[1]||0}}if("left"in t){this.offset.click.left=t.left+this.margins.left}if("right"in t){this.offset.click.left=this.helperProportions.width-t.right+this.margins.left}if("top"in t){this.offset.click.top=t.top+this.margins.top}if("bottom"in t){this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent()
var t=this.offsetParent.offset()
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])){t.left+=this.scrollParent.scrollLeft()
t.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie){t={top:0,left:0}}return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.currentItem.position()
return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,i,r=this.options
if(r.containment==="parent"){r.containment=this.helper[0].parentNode}if(r.containment==="document"||r.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e(r.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e(r.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!/^(document|window|parent)$/.test(r.containment)){t=e(r.containment)[0]
n=e(r.containment).offset()
i=e(t).css("overflow")!=="hidden"
this.containment=[n.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,n.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,n.left+(i?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,n.top+(i?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(t,n){if(!n){n=this.position}var i=t==="absolute"?1:-1,r=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,s=/(html|body)/i.test(r[0].tagName)
return{top:n.top+this.offset.relative.top*i+this.offset.parent.top*i-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:r.scrollTop())*i,left:n.left+this.offset.relative.left*i+this.offset.parent.left*i-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:r.scrollLeft())*i}},_generatePosition:function(t){var n,i,r=this.options,s=t.pageX,a=t.pageY,o=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,l=/(html|body)/i.test(o[0].tagName)
if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}if(this.originalPosition){if(this.containment){if(t.pageX-this.offset.click.left<this.containment[0]){s=this.containment[0]+this.offset.click.left}if(t.pageY-this.offset.click.top<this.containment[1]){a=this.containment[1]+this.offset.click.top}if(t.pageX-this.offset.click.left>this.containment[2]){s=this.containment[2]+this.offset.click.left}if(t.pageY-this.offset.click.top>this.containment[3]){a=this.containment[3]+this.offset.click.top}}if(r.grid){n=this.originalPageY+Math.round((a-this.originalPageY)/r.grid[1])*r.grid[1]
a=this.containment?n-this.offset.click.top>=this.containment[1]&&n-this.offset.click.top<=this.containment[3]?n:n-this.offset.click.top>=this.containment[1]?n-r.grid[1]:n+r.grid[1]:n
i=this.originalPageX+Math.round((s-this.originalPageX)/r.grid[0])*r.grid[0]
s=this.containment?i-this.offset.click.left>=this.containment[0]&&i-this.offset.click.left<=this.containment[2]?i:i-this.offset.click.left>=this.containment[0]?i-r.grid[0]:i+r.grid[0]:i}}return{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():l?0:o.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():l?0:o.scrollLeft())}},_rearrange:function(e,t,n,i){n?n[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],this.direction==="down"?t.item[0]:t.item[0].nextSibling)
this.counter=this.counter?++this.counter:1
var r=this.counter
this._delay(function(){if(r===this.counter){this.refreshPositions(!i)}})},_clear:function(e,t){this.reverting=false
var n,i=[]
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)}this._noFinalSort=null
if(this.helper[0]===this.currentItem[0]){for(n in this._storedCSS){if(this._storedCSS[n]==="auto"||this._storedCSS[n]==="static"){this._storedCSS[n]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.fromOutside&&!t){i.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))})}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!t){i.push(function(e){this._trigger("update",e,this._uiHash())})}if(this!==this.currentContainer){if(!t){i.push(function(e){this._trigger("remove",e,this._uiHash())})
i.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer))
i.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer))}}function r(e,t,n){return function(i){n._trigger(e,i,t._uiHash(t))}}for(n=this.containers.length-1;n>=0;n--){if(!t){i.push(r("deactivate",this,this.containers[n]))}if(this.containers[n].containerCache.over){i.push(r("out",this,this.containers[n]))
this.containers[n].containerCache.over=0}}if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor)
this.storedStylesheet.remove()}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)}this.dragging=false
if(this.cancelHelperRemoval){if(!t){this._trigger("beforeStop",e,this._uiHash())
for(n=0;n<i.length;n++){i[n].call(this,e)}this._trigger("stop",e,this._uiHash())}this.fromOutside=false
return false}if(!t){this._trigger("beforeStop",e,this._uiHash())}this.placeholder[0].parentNode.removeChild(this.placeholder[0])
if(this.helper[0]!==this.currentItem[0]){this.helper.remove()}this.helper=null
if(!t){for(n=0;n<i.length;n++){i[n].call(this,e)}this._trigger("stop",e,this._uiHash())}this.fromOutside=false
return true},_trigger:function(){if(e.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()}},_uiHash:function(t){var n=t||this
return{helper:n.helper,placeholder:n.placeholder||e([]),position:n.position,originalPosition:n.originalPosition,offset:n.positionAbs,item:n.currentItem,sender:t?t.element:null}}})
var d=e.widget("ui.menu",{version:"1.11.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element
this.mouseHandled=false
this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0})
if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")}this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var n=e(t.target)
if(!this.mouseHandled&&n.not(".ui-state-disabled").length){this.select(t)
if(!t.isPropagationStopped()){this.mouseHandled=true}if(n.has(".ui-menu").length){this.expand(t)}else if(!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length){this.element.trigger("focus",[true])
if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)}}}},"mouseenter .ui-menu-item":function(t){var n=e(t.currentTarget)
n.siblings(".ui-state-active").removeClass("ui-state-active")
this.focus(t,n)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var n=this.active||this.element.find(this.options.items).eq(0)
if(!t){this.focus(e,n)}},blur:function(t){this._delay(function(){if(!e.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(t)}})},keydown:"_keydown"})
this.refresh()
this._on(this.document,{click:function(e){if(this._closeOnDocumentClick(e)){this.collapseAll(e)}this.mouseHandled=false}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show()
this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this)
if(t.data("ui-menu-submenu-carat")){t.remove()}})
this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var n,i,r,s,a,o=true
function l(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t)
break
case e.ui.keyCode.PAGE_DOWN:this.nextPage(t)
break
case e.ui.keyCode.HOME:this._move("first","first",t)
break
case e.ui.keyCode.END:this._move("last","last",t)
break
case e.ui.keyCode.UP:this.previous(t)
break
case e.ui.keyCode.DOWN:this.next(t)
break
case e.ui.keyCode.LEFT:this.collapse(t)
break
case e.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(t)}break
case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t)
break
case e.ui.keyCode.ESCAPE:this.collapse(t)
break
default:o=false
i=this.previousFilter||""
r=String.fromCharCode(t.keyCode)
s=false
clearTimeout(this.filterTimer)
if(r===i){s=true}else{r=i+r}a=new RegExp("^"+l(r),"i")
n=this.activeMenu.find(this.options.items).filter(function(){return a.test(e(this).text())})
n=s&&n.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):n
if(!n.length){r=String.fromCharCode(t.keyCode)
a=new RegExp("^"+l(r),"i")
n=this.activeMenu.find(this.options.items).filter(function(){return a.test(e(this).text())})}if(n.length){this.focus(t,n)
if(n.length>1){this.previousFilter=r
this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)}else{delete this.previousFilter}}else{delete this.previousFilter}}if(o){t.preventDefault()}},_activate:function(e){if(!this.active.is(".ui-state-disabled")){if(this.active.is("[aria-haspopup='true']")){this.expand(e)}else{this.select(e)}}},refresh:function(){var t,n,i=this,r=this.options.icons.submenu,s=this.element.find(this.options.menus)
this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length)
s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),n=t.parent(),i=e("<span>").addClass("ui-menu-icon ui-icon "+r).data("ui-menu-submenu-carat",true)
n.attr("aria-haspopup","true").prepend(i)
t.attr("aria-labelledby",n.attr("id"))})
t=s.add(this.element)
n=t.find(this.options.items)
n.not(".ui-menu-item").each(function(){var t=e(this)
if(i._isDivider(t)){t.addClass("ui-widget-content ui-menu-divider")}})
n.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()})
n.filter(".ui-state-disabled").attr("aria-disabled","true")
if(this.active&&!e.contains(this.element[0],this.active[0])){this.blur()}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){if(e==="icons"){this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu)}if(e==="disabled"){this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t)}this._super(e,t)},focus:function(e,t){var n,i
this.blur(e,e&&e.type==="focus")
this._scrollIntoView(t)
this.active=t.first()
i=this.active.addClass("ui-state-focus").removeClass("ui-state-active")
if(this.options.role){this.element.attr("aria-activedescendant",i.attr("id"))}this.active.parent().closest(".ui-menu-item").addClass("ui-state-active")
if(e&&e.type==="keydown"){this._close()}else{this.timer=this._delay(function(){this._close()},this.delay)}n=t.children(".ui-menu")
if(n.length&&e&&/^mouse/.test(e.type)){this._startOpening(n)}this.activeMenu=t.parent()
this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var n,i,r,s,a,o
if(this._hasScroll()){n=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0
i=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0
r=t.offset().top-this.activeMenu.offset().top-n-i
s=this.activeMenu.scrollTop()
a=this.activeMenu.height()
o=t.outerHeight()
if(r<0){this.activeMenu.scrollTop(s+r)}else if(r+o>a){this.activeMenu.scrollTop(s+r-a+o)}}},blur:function(e,t){if(!t){clearTimeout(this.timer)}if(!this.active){return}this.active.removeClass("ui-state-focus")
this.active=null
this._trigger("blur",e,{item:this.active})},_startOpening:function(e){clearTimeout(this.timer)
if(e.attr("aria-hidden")!=="true"){return}this.timer=this._delay(function(){this._close()
this._open(e)},this.delay)},_open:function(t){var n=e.extend({of:this.active},this.options.position)
clearTimeout(this.timer)
this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true")
t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(n)},collapseAll:function(t,n){clearTimeout(this.timer)
this.timer=this._delay(function(){var i=n?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"))
if(!i.length){i=this.element}this._close(i)
this.blur(t)
this.activeMenu=i},this.delay)},_close:function(e){if(!e){e=this.active?this.active.parent():this.element}e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element)
if(t&&t.length){this._close()
this.focus(e,t)}},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first()
if(t&&t.length){this._open(t.parent())
this._delay(function(){this.focus(e,t)})}},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,n){var i
if(this.active){if(e==="first"||e==="last"){i=this.active[e==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)}else{i=this.active[e+"All"](".ui-menu-item").eq(0)}}if(!i||!i.length||!this.active){i=this.activeMenu.find(this.options.items)[t]()}this.focus(n,i)},nextPage:function(t){var n,i,r
if(!this.active){this.next(t)
return}if(this.isLastItem()){return}if(this._hasScroll()){i=this.active.offset().top
r=this.element.height()
this.active.nextAll(".ui-menu-item").each(function(){n=e(this)
return n.offset().top-i-r<0})
this.focus(t,n)}else{this.focus(t,this.activeMenu.find(this.options.items)[!this.active?"first":"last"]())}},previousPage:function(t){var n,i,r
if(!this.active){this.next(t)
return}if(this.isFirstItem()){return}if(this._hasScroll()){i=this.active.offset().top
r=this.element.height()
this.active.prevAll(".ui-menu-item").each(function(){n=e(this)
return n.offset().top-i+r>0})
this.focus(t,n)}else{this.focus(t,this.activeMenu.find(this.options.items).first())}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item")
var n={item:this.active}
if(!this.active.has(".ui-menu").length){this.collapseAll(t,true)}this._trigger("select",t,n)}})
e.widget("ui.autocomplete",{version:"1.11.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,n,i,r=this.element[0].nodeName.toLowerCase(),s=r==="textarea",a=r==="input"
this.isMultiLine=s?true:a?false:this.element.prop("isContentEditable")
this.valueMethod=this.element[s||a?"val":"text"]
this.isNewMenu=true
this.element.addClass("ui-autocomplete-input").attr("autocomplete","off")
this._on(this.element,{keydown:function(r){if(this.element.prop("readOnly")){t=true
i=true
n=true
return}t=false
i=false
n=false
var s=e.ui.keyCode
switch(r.keyCode){case s.PAGE_UP:t=true
this._move("previousPage",r)
break
case s.PAGE_DOWN:t=true
this._move("nextPage",r)
break
case s.UP:t=true
this._keyEvent("previous",r)
break
case s.DOWN:t=true
this._keyEvent("next",r)
break
case s.ENTER:if(this.menu.active){t=true
r.preventDefault()
this.menu.select(r)}break
case s.TAB:if(this.menu.active){this.menu.select(r)}break
case s.ESCAPE:if(this.menu.element.is(":visible")){if(!this.isMultiLine){this._value(this.term)}this.close(r)
r.preventDefault()}break
default:n=true
this._searchTimeout(r)
break}},keypress:function(i){if(t){t=false
if(!this.isMultiLine||this.menu.element.is(":visible")){i.preventDefault()}return}if(n){return}var r=e.ui.keyCode
switch(i.keyCode){case r.PAGE_UP:this._move("previousPage",i)
break
case r.PAGE_DOWN:this._move("nextPage",i)
break
case r.UP:this._keyEvent("previous",i)
break
case r.DOWN:this._keyEvent("next",i)
break}},input:function(e){if(i){i=false
e.preventDefault()
return}this._searchTimeout(e)},focus:function(){this.selectedItem=null
this.previous=this._value()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur
return}clearTimeout(this.searching)
this.close(e)
this._change(e)}})
this._initSource()
this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance")
this._on(this.menu.element,{mousedown:function(t){t.preventDefault()
this.cancelBlur=true
this._delay(function(){delete this.cancelBlur})
var n=this.menu.element[0]
if(!e(t.target).closest(".ui-menu-item").length){this._delay(function(){var t=this
this.document.one("mousedown",function(i){if(i.target!==t.element[0]&&i.target!==n&&!e.contains(n,i.target)){t.close()}})})}},menufocus:function(t,n){var i,r
if(this.isNewMenu){this.isNewMenu=false
if(t.originalEvent&&/^mouse/.test(t.originalEvent.type)){this.menu.blur()
this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)})
return}}r=n.item.data("ui-autocomplete-item")
if(false!==this._trigger("focus",t,{item:r})){if(t.originalEvent&&/^key/.test(t.originalEvent.type)){this._value(r.value)}}i=n.item.attr("aria-label")||r.value
if(i&&e.trim(i).length){this.liveRegion.children().hide()
e("<div>").text(i).appendTo(this.liveRegion)}},menuselect:function(e,t){var n=t.item.data("ui-autocomplete-item"),i=this.previous
if(this.element[0]!==this.document[0].activeElement){this.element.focus()
this.previous=i
this._delay(function(){this.previous=i
this.selectedItem=n})}if(false!==this._trigger("select",e,{item:n})){this._value(n.value)}this.term=this._value()
this.close(e)
this.selectedItem=n}})
this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching)
this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete")
this.menu.element.remove()
this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t)
if(e==="source"){this._initSource()}if(e==="appendTo"){this.menu.element.appendTo(this._appendTo())}if(e==="disabled"&&t&&this.xhr){this.xhr.abort()}},_appendTo:function(){var t=this.options.appendTo
if(t){t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)}if(!t||!t[0]){t=this.element.closest(".ui-front")}if(!t.length){t=this.document[0].body}return t},_initSource:function(){var t,n,i=this
if(e.isArray(this.options.source)){t=this.options.source
this.source=function(n,i){i(e.ui.autocomplete.filter(t,n.term))}}else if(typeof this.options.source==="string"){n=this.options.source
this.source=function(t,r){if(i.xhr){i.xhr.abort()}i.xhr=e.ajax({url:n,data:t,dataType:"json",success:function(e){r(e)},error:function(){r([])}})}}else{this.source=this.options.source}},_searchTimeout:function(e){clearTimeout(this.searching)
this.searching=this._delay(function(){var t=this.term===this._value(),n=this.menu.element.is(":visible"),i=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey
if(!t||t&&!n&&!i){this.selectedItem=null
this.search(null,e)}},this.options.delay)},search:function(e,t){e=e!=null?e:this._value()
this.term=this._value()
if(e.length<this.options.minLength){return this.close(t)}if(this._trigger("search",t)===false){return}return this._search(e)},_search:function(e){this.pending++
this.element.addClass("ui-autocomplete-loading")
this.cancelSearch=false
this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex
return e.proxy(function(e){if(t===this.requestIndex){this.__response(e)}this.pending--
if(!this.pending){this.element.removeClass("ui-autocomplete-loading")}},this)},__response:function(e){if(e){e=this._normalize(e)}this._trigger("response",null,{content:e})
if(!this.options.disabled&&e&&e.length&&!this.cancelSearch){this._suggest(e)
this._trigger("open")}else{this._close()}},close:function(e){this.cancelSearch=true
this._close(e)},_close:function(e){if(this.menu.element.is(":visible")){this.menu.element.hide()
this.menu.blur()
this.isNewMenu=true
this._trigger("close",e)}},_change:function(e){if(this.previous!==this._value()){this._trigger("change",e,{item:this.selectedItem})}},_normalize:function(t){if(t.length&&t[0].label&&t[0].value){return t}return e.map(t,function(t){if(typeof t==="string"){return{label:t,value:t}}return e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var n=this.menu.element.empty()
this._renderMenu(n,t)
this.isNewMenu=true
this.menu.refresh()
n.show()
this._resizeMenu()
n.position(e.extend({of:this.element},this.options.position))
if(this.options.autoFocus){this.menu.next()}},_resizeMenu:function(){var e=this.menu.element
e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,n){var i=this
e.each(n,function(e,n){i._renderItemData(t,n)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,n){return e("<li>").text(n.label).appendTo(t)},_move:function(e,t){if(!this.menu.element.is(":visible")){this.search(null,t)
return}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){if(!this.isMultiLine){this._value(this.term)}this.menu.blur()
return}this.menu[e](t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(e,t)
t.preventDefault()}}})
e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,n){var i=new RegExp(e.ui.autocomplete.escapeRegex(n),"i")
return e.grep(t,function(e){return i.test(e.label||e.value||e)})}})
e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var n
this._superApply(arguments)
if(this.options.disabled||this.cancelSearch){return}if(t&&t.length){n=this.options.messages.results(t.length)}else{n=this.options.messages.noResults}this.liveRegion.children().hide()
e("<div>").text(n).appendTo(this.liveRegion)}})
var p=e.ui.autocomplete
var m=e.widget("ui.slider",e.ui.mouse,{version:"1.11.1",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=false
this._mouseSliding=false
this._animateOff=true
this._handleIndex=null
this._detectOrientation()
this._mouseInit()
this.element.addClass("ui-slider"+" ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all")
this._refresh()
this._setOption("disabled",this.options.disabled)
this._animateOff=false},_refresh:function(){this._createRange()
this._createHandles()
this._setupEvents()
this._refreshValue()},_createHandles:function(){var t,n,i=this.options,r=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),s="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",a=[]
n=i.values&&i.values.length||1
if(r.length>n){r.slice(n).remove()
r=r.slice(0,n)}for(t=r.length;t<n;t++){a.push(s)}this.handles=r.add(e(a.join("")).appendTo(this.element))
this.handle=this.handles.eq(0)
this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,n=""
if(t.range){if(t.range===true){if(!t.values){t.values=[this._valueMin(),this._valueMin()]}else if(t.values.length&&t.values.length!==2){t.values=[t.values[0],t.values[0]]}else if(e.isArray(t.values)){t.values=t.values.slice(0)}}if(!this.range||!this.range.length){this.range=e("<div></div>").appendTo(this.element)
n="ui-slider-range"+" ui-widget-header ui-corner-all"}else{this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""})}this.range.addClass(n+(t.range==="min"||t.range==="max"?" ui-slider-range-"+t.range:""))}else{if(this.range){this.range.remove()}this.range=null}},_setupEvents:function(){this._off(this.handles)
this._on(this.handles,this._handleEvents)
this._hoverable(this.handles)
this._focusable(this.handles)},_destroy:function(){this.handles.remove()
if(this.range){this.range.remove()}this.element.removeClass("ui-slider"+" ui-slider-horizontal"+" ui-slider-vertical"+" ui-widget"+" ui-widget-content"+" ui-corner-all")
this._mouseDestroy()},_mouseCapture:function(t){var n,i,r,s,a,o,l,u,f=this,c=this.options
if(c.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()}
this.elementOffset=this.element.offset()
n={x:t.pageX,y:t.pageY}
i=this._normValueFromMouse(n)
r=this._valueMax()-this._valueMin()+1
this.handles.each(function(t){var n=Math.abs(i-f.values(t))
if(r>n||r===n&&(t===f._lastChangedValue||f.values(t)===c.min)){r=n
s=e(this)
a=t}})
o=this._start(t,a)
if(o===false){return false}this._mouseSliding=true
this._handleIndex=a
s.addClass("ui-state-active").focus()
l=s.offset()
u=!e(t.target).parents().addBack().is(".ui-slider-handle")
this._clickOffset=u?{left:0,top:0}:{left:t.pageX-l.left-s.width()/2,top:t.pageY-l.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)}
if(!this.handles.hasClass("ui-state-hover")){this._slide(t,a,i)}this._animateOff=true
return true},_mouseStart:function(){return true},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(t)
this._slide(e,this._handleIndex,n)
return false},_mouseStop:function(e){this.handles.removeClass("ui-state-active")
this._mouseSliding=false
this._stop(e,this._handleIndex)
this._change(e,this._handleIndex)
this._handleIndex=null
this._clickOffset=null
this._animateOff=false
return false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,n,i,r,s
if(this.orientation==="horizontal"){t=this.elementSize.width
n=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{t=this.elementSize.height
n=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}i=n/t
if(i>1){i=1}if(i<0){i=0}if(this.orientation==="vertical"){i=1-i}r=this._valueMax()-this._valueMin()
s=this._valueMin()+i*r
return this._trimAlignValue(s)},_start:function(e,t){var n={handle:this.handles[t],value:this.value()}
if(this.options.values&&this.options.values.length){n.value=this.values(t)
n.values=this.values()}return this._trigger("start",e,n)},_slide:function(e,t,n){var i,r,s
if(this.options.values&&this.options.values.length){i=this.values(t?0:1)
if(this.options.values.length===2&&this.options.range===true&&(t===0&&n>i||t===1&&n<i)){n=i}if(n!==this.values(t)){r=this.values()
r[t]=n
s=this._trigger("slide",e,{handle:this.handles[t],value:n,values:r})
i=this.values(t?0:1)
if(s!==false){this.values(t,n)}}}else{if(n!==this.value()){s=this._trigger("slide",e,{handle:this.handles[t],value:n})
if(s!==false){this.value(n)}}}},_stop:function(e,t){var n={handle:this.handles[t],value:this.value()}
if(this.options.values&&this.options.values.length){n.value=this.values(t)
n.values=this.values()}this._trigger("stop",e,n)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var n={handle:this.handles[t],value:this.value()}
if(this.options.values&&this.options.values.length){n.value=this.values(t)
n.values=this.values()}this._lastChangedValue=t
this._trigger("change",e,n)}},value:function(e){if(arguments.length){this.options.value=this._trimAlignValue(e)
this._refreshValue()
this._change(null,0)
return}return this._value()},values:function(t,n){var i,r,s
if(arguments.length>1){this.options.values[t]=this._trimAlignValue(n)
this._refreshValue()
this._change(null,t)
return}if(arguments.length){if(e.isArray(arguments[0])){i=this.options.values
r=arguments[0]
for(s=0;s<i.length;s+=1){i[s]=this._trimAlignValue(r[s])
this._change(null,s)}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(t)}else{return this.value()}}}else{return this._values()}},_setOption:function(t,n){var i,r=0
if(t==="range"&&this.options.range===true){if(n==="min"){this.options.value=this._values(0)
this.options.values=null}else if(n==="max"){this.options.value=this._values(this.options.values.length-1)
this.options.values=null}}if(e.isArray(this.options.values)){r=this.options.values.length}if(t==="disabled"){this.element.toggleClass("ui-state-disabled",!!n)}this._super(t,n)
switch(t){case"orientation":this._detectOrientation()
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation)
this._refreshValue()
this.handles.css(n==="horizontal"?"bottom":"left","")
break
case"value":this._animateOff=true
this._refreshValue()
this._change(null,0)
this._animateOff=false
break
case"values":this._animateOff=true
this._refreshValue()
for(i=0;i<r;i+=1){this._change(null,i)}this._animateOff=false
break
case"min":case"max":this._animateOff=true
this._refreshValue()
this._animateOff=false
break
case"range":this._animateOff=true
this._refresh()
this._animateOff=false
break}},_value:function(){var e=this.options.value
e=this._trimAlignValue(e)
return e},_values:function(e){var t,n,i
if(arguments.length){t=this.options.values[e]
t=this._trimAlignValue(t)
return t}else if(this.options.values&&this.options.values.length){n=this.options.values.slice()
for(i=0;i<n.length;i+=1){n[i]=this._trimAlignValue(n[i])}return n}else{return[]}},_trimAlignValue:function(e){if(e<=this._valueMin()){return this._valueMin()}if(e>=this._valueMax()){return this._valueMax()}var t=this.options.step>0?this.options.step:1,n=(e-this._valueMin())%t,i=e-n
if(Math.abs(n)*2>=t){i+=n>0?t:-t}return parseFloat(i.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,n,i,r,s,a=this.options.range,o=this.options,l=this,u=!this._animateOff?o.animate:false,f={}
if(this.options.values&&this.options.values.length){this.handles.each(function(i){n=(l.values(i)-l._valueMin())/(l._valueMax()-l._valueMin())*100
f[l.orientation==="horizontal"?"left":"bottom"]=n+"%"
e(this).stop(1,1)[u?"animate":"css"](f,o.animate)
if(l.options.range===true){if(l.orientation==="horizontal"){if(i===0){l.range.stop(1,1)[u?"animate":"css"]({left:n+"%"},o.animate)}if(i===1){l.range[u?"animate":"css"]({width:n-t+"%"},{queue:false,duration:o.animate})}}else{if(i===0){l.range.stop(1,1)[u?"animate":"css"]({bottom:n+"%"},o.animate)}if(i===1){l.range[u?"animate":"css"]({height:n-t+"%"},{queue:false,duration:o.animate})}}}t=n})}else{i=this.value()
r=this._valueMin()
s=this._valueMax()
n=s!==r?(i-r)/(s-r)*100:0
f[this.orientation==="horizontal"?"left":"bottom"]=n+"%"
this.handle.stop(1,1)[u?"animate":"css"](f,o.animate)
if(a==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[u?"animate":"css"]({width:n+"%"},o.animate)}if(a==="max"&&this.orientation==="horizontal"){this.range[u?"animate":"css"]({width:100-n+"%"},{queue:false,duration:o.animate})}if(a==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[u?"animate":"css"]({height:n+"%"},o.animate)}if(a==="max"&&this.orientation==="vertical"){this.range[u?"animate":"css"]({height:100-n+"%"},{queue:false,duration:o.animate})}}},_handleEvents:{keydown:function(t){var n,i,r,s,a=e(t.target).data("ui-slider-handle-index")
switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:t.preventDefault()
if(!this._keySliding){this._keySliding=true
e(t.target).addClass("ui-state-active")
n=this._start(t,a)
if(n===false){return}}break}s=this.options.step
if(this.options.values&&this.options.values.length){i=r=this.values(a)}else{i=r=this.value()}switch(t.keyCode){case e.ui.keyCode.HOME:r=this._valueMin()
break
case e.ui.keyCode.END:r=this._valueMax()
break
case e.ui.keyCode.PAGE_UP:r=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/this.numPages)
break
case e.ui.keyCode.PAGE_DOWN:r=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/this.numPages)
break
case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax()){return}r=this._trimAlignValue(i+s)
break
case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i===this._valueMin()){return}r=this._trimAlignValue(i-s)
break}this._slide(t,a,r)},keyup:function(t){var n=e(t.target).data("ui-slider-handle-index")
if(this._keySliding){this._keySliding=false
this._stop(t,n)
this._change(t,n)
e(t.target).removeClass("ui-state-active")}}}})
var v="ui-effects-",g=e
e.effects={effect:{}};(function(e,t){var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",i=/^([\-+])=\s*(\d+\.?\d*)/,r=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],s=e.Color=function(t,n,i,r){return new e.Color.fn.parse(t,n,i,r)},a={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},o={byte:{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},l=s.support={},u=e("<p>")[0],f,c=e.each
u.style.cssText="background-color:rgba(1,1,1,.5)"
l.rgba=u.style.backgroundColor.indexOf("rgba")>-1
c(a,function(e,t){t.cache="_"+e
t.props.alpha={idx:3,type:"percent",def:1}})
function h(e,t,n){var i=o[t.type]||{}
if(e==null){return n||!t.def?null:t.def}e=i.floor?~~e:parseFloat(e)
if(isNaN(e)){return t.def}if(i.mod){return(e+i.mod)%i.mod}return 0>e?0:i.max<e?i.max:e}function d(t){var n=s(),i=n._rgba=[]
t=t.toLowerCase()
c(r,function(e,r){var s,o=r.re.exec(t),l=o&&r.parse(o),u=r.space||"rgba"
if(l){s=n[u](l)
n[a[u].cache]=s[a[u].cache]
i=n._rgba=s._rgba
return false}})
if(i.length){if(i.join()==="0,0,0,0"){e.extend(i,f.transparent)}return n}return f[t]}s.fn=e.extend(s.prototype,{parse:function(n,i,r,o){if(n===t){this._rgba=[null,null,null,null]
return this}if(n.jquery||n.nodeType){n=e(n).css(i)
i=t}var l=this,u=e.type(n),p=this._rgba=[]
if(i!==t){n=[n,i,r,o]
u="array"}if(u==="string"){return this.parse(d(n)||f._default)}if(u==="array"){c(a.rgba.props,function(e,t){p[t.idx]=h(n[t.idx],t)})
return this}if(u==="object"){if(n instanceof s){c(a,function(e,t){if(n[t.cache]){l[t.cache]=n[t.cache].slice()}})}else{c(a,function(t,i){var r=i.cache
c(i.props,function(e,t){if(!l[r]&&i.to){if(e==="alpha"||n[e]==null){return}l[r]=i.to(l._rgba)}l[r][t.idx]=h(n[e],t,true)})
if(l[r]&&e.inArray(null,l[r].slice(0,3))<0){l[r][3]=1
if(i.from){l._rgba=i.from(l[r])}}})}return this}},is:function(e){var t=s(e),n=true,i=this
c(a,function(e,r){var s,a=t[r.cache]
if(a){s=i[r.cache]||r.to&&r.to(i._rgba)||[]
c(r.props,function(e,t){if(a[t.idx]!=null){n=a[t.idx]===s[t.idx]
return n}})}return n})
return n},_space:function(){var e=[],t=this
c(a,function(n,i){if(t[i.cache]){e.push(n)}})
return e.pop()},transition:function(e,t){var n=s(e),i=n._space(),r=a[i],l=this.alpha()===0?s("transparent"):this,u=l[r.cache]||r.to(l._rgba),f=u.slice()
n=n[r.cache]
c(r.props,function(e,i){var r=i.idx,s=u[r],a=n[r],l=o[i.type]||{}
if(a===null){return}if(s===null){f[r]=a}else{if(l.mod){if(a-s>l.mod/2){s+=l.mod}else if(s-a>l.mod/2){s-=l.mod}}f[r]=h((a-s)*t+s,i)}})
return this[i](f)},blend:function(t){if(this._rgba[3]===1){return this}var n=this._rgba.slice(),i=n.pop(),r=s(t)._rgba
return s(e.map(n,function(e,t){return(1-i)*r[t]+i*e}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(e,t){return e==null?t>2?1:0:e})
if(n[3]===1){n.pop()
t="rgb("}return t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(e,t){if(e==null){e=t>2?1:0}if(t&&t<3){e=Math.round(e*100)+"%"}return e})
if(n[3]===1){n.pop()
t="hsl("}return t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),i=n.pop()
if(t){n.push(~~(i*255))}return"#"+e.map(n,function(e){e=(e||0).toString(16)
return e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}})
s.fn.parse.prototype=s.fn
function p(e,t,n){n=(n+1)%1
if(n*6<1){return e+(t-e)*n*6}if(n*2<1){return t}if(n*3<2){return e+(t-e)*(2/3-n)*6}return e}a.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null){return[null,null,null,e[3]]}var t=e[0]/255,n=e[1]/255,i=e[2]/255,r=e[3],s=Math.max(t,n,i),a=Math.min(t,n,i),o=s-a,l=s+a,u=l*.5,f,c
if(a===s){f=0}else if(t===s){f=60*(n-i)/o+360}else if(n===s){f=60*(i-t)/o+120}else{f=60*(t-n)/o+240}if(o===0){c=0}else if(u<=.5){c=o/l}else{c=o/(2-l)}return[Math.round(f)%360,c,u,r==null?1:r]}
a.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null){return[null,null,null,e[3]]}var t=e[0]/360,n=e[1],i=e[2],r=e[3],s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s
return[Math.round(p(a,s,t+1/3)*255),Math.round(p(a,s,t)*255),Math.round(p(a,s,t-1/3)*255),r]}
c(a,function(n,r){var a=r.props,o=r.cache,l=r.to,u=r.from
s.fn[n]=function(n){if(l&&!this[o]){this[o]=l(this._rgba)}if(n===t){return this[o].slice()}var i,r=e.type(n),f=r==="array"||r==="object"?n:arguments,d=this[o].slice()
c(a,function(e,t){var n=f[r==="object"?e:t.idx]
if(n==null){n=d[t.idx]}d[t.idx]=h(n,t)})
if(u){i=s(u(d))
i[o]=d
return i}else{return s(d)}}
c(a,function(t,r){if(s.fn[t]){return}s.fn[t]=function(s){var a=e.type(s),o=t==="alpha"?this._hsla?"hsla":"rgba":n,l=this[o](),u=l[r.idx],f
if(a==="undefined"){return u}if(a==="function"){s=s.call(this,u)
a=e.type(s)}if(s==null&&r.empty){return this}if(a==="string"){f=i.exec(s)
if(f){s=u+parseFloat(f[2])*(f[1]==="+"?1:-1)}}l[r.idx]=s
return this[o](l)}})})
s.hook=function(t){var n=t.split(" ")
c(n,function(t,n){e.cssHooks[n]={set:function(t,i){var r,a,o=""
if(i!=="transparent"&&(e.type(i)!=="string"||(r=d(i)))){i=s(r||i)
if(!l.rgba&&i._rgba[3]!==1){a=n==="backgroundColor"?t.parentNode:t
while((o===""||o==="transparent")&&a&&a.style){try{o=e.css(a,"backgroundColor")
a=a.parentNode}catch(e){}}i=i.blend(o&&o!=="transparent"?o:"_default")}i=i.toRgbaString()}try{t.style[n]=i}catch(e){}}}
e.fx.step[n]=function(t){if(!t.colorInit){t.start=s(t.elem,n)
t.end=s(t.end)
t.colorInit=true}e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})}
s.hook(n)
e.cssHooks.borderColor={expand:function(e){var t={}
c(["Top","Right","Bottom","Left"],function(n,i){t["border"+i+"Color"]=e})
return t}}
f=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(g);(function(){var t=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1}
e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr){g.style(e.elem,n,e.end)
e.setAttr=true}}})
function i(t){var n,i,r=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,s={}
if(r&&r.length&&r[0]&&r[r[0]]){i=r.length
while(i--){n=r[i]
if(typeof r[n]==="string"){s[e.camelCase(n)]=r[n]}}}else{for(n in r){if(typeof r[n]==="string"){s[n]=r[n]}}}return s}function r(t,i){var r={},s,a
for(s in i){a=i[s]
if(t[s]!==a){if(!n[s]){if(e.fx.step[s]||!isNaN(parseFloat(a))){r[s]=a}}}}return r}if(!e.fn.addBack){e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}e.effects.animateClass=function(n,s,a,o){var l=e.speed(s,a,o)
return this.queue(function(){var s=e(this),a=s.attr("class")||"",o,u=l.children?s.find("*").addBack():s
u=u.map(function(){var t=e(this)
return{el:t,start:i(this)}})
o=function(){e.each(t,function(e,t){if(n[t]){s[t+"Class"](n[t])}})}
o()
u=u.map(function(){this.end=i(this.el[0])
this.diff=r(this.start,this.end)
return this})
s.attr("class",a)
u=u.map(function(){var t=this,n=e.Deferred(),i=e.extend({},l,{queue:false,complete:function(){n.resolve(t)}})
this.el.animate(this.diff,i)
return n.promise()})
e.when.apply(e,u.get()).done(function(){o()
e.each(arguments,function(){var t=this.el
e.each(this.diff,function(e){t.css(e,"")})})
l.complete.call(s[0])})})}
e.fn.extend({addClass:function(t){return function(n,i,r,s){return i?e.effects.animateClass.call(this,{add:n},i,r,s):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(n,i,r,s){return arguments.length>1?e.effects.animateClass.call(this,{remove:n},i,r,s):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(n,i,r,s,a){if(typeof i==="boolean"||i===undefined){if(!r){return t.apply(this,arguments)}else{return e.effects.animateClass.call(this,i?{add:n}:{remove:n},r,s,a)}}else{return e.effects.animateClass.call(this,{toggle:n},i,r,s)}}}(e.fn.toggleClass),switchClass:function(t,n,i,r,s){return e.effects.animateClass.call(this,{add:n,remove:t},i,r,s)}})})();(function(){e.extend(e.effects,{version:"1.11.1",save:function(e,t){for(var n=0;n<t.length;n++){if(t[n]!==null){e.data(v+t[n],e[0].style[t[n]])}}},restore:function(e,t){var n,i
for(i=0;i<t.length;i++){if(t[i]!==null){n=e.data(v+t[i])
if(n===undefined){n=""}e.css(t[i],n)}}},setMode:function(e,t){if(t==="toggle"){t=e.is(":hidden")?"show":"hide"}return t},getBaseline:function(e,t){var n,i
switch(e[0]){case"top":n=0
break
case"middle":n=.5
break
case"bottom":n=1
break
default:n=e[0]/t.height}switch(e[1]){case"left":i=0
break
case"center":i=.5
break
case"right":i=1
break
default:i=e[1]/t.width}return{x:i,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper")){return t.parent()}var n={width:t.outerWidth(true),height:t.outerHeight(true),float:t.css("float")},i=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),r={width:t.width(),height:t.height()},s=document.activeElement
try{s.id}catch(e){s=document.body}t.wrap(i)
if(t[0]===s||e.contains(t[0],s)){e(s).focus()}i=t.parent()
if(t.css("position")==="static"){i.css({position:"relative"})
t.css({position:"relative"})}else{e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")})
e.each(["top","left","bottom","right"],function(e,i){n[i]=t.css(i)
if(isNaN(parseInt(n[i],10))){n[i]="auto"}})
t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}t.css(r)
return i.css(n).show()},removeWrapper:function(t){var n=document.activeElement
if(t.parent().is(".ui-effects-wrapper")){t.parent().replaceWith(t)
if(t[0]===n||e.contains(t[0],n)){e(n).focus()}}return t},setTransition:function(t,n,i,r){r=r||{}
e.each(n,function(e,n){var s=t.cssUnit(n)
if(s[0]>0){r[n]=s[0]*i+s[1]}})
return r}})
function t(t,n,i,r){if(e.isPlainObject(t)){n=t
t=t.effect}t={effect:t}
if(n==null){n={}}if(e.isFunction(n)){r=n
i=null
n={}}if(typeof n==="number"||e.fx.speeds[n]){r=i
i=n
n={}}if(e.isFunction(i)){r=i
i=null}if(n){e.extend(t,n)}i=i||n.duration
t.duration=e.fx.off?0:typeof i==="number"?i:i in e.fx.speeds?e.fx.speeds[i]:e.fx.speeds._default
t.complete=r||n.complete
return t}function n(t){if(!t||typeof t==="number"||e.fx.speeds[t]){return true}if(typeof t==="string"&&!e.effects.effect[t]){return true}if(e.isFunction(t)){return true}if(typeof t==="object"&&!t.effect){return true}return false}e.fn.extend({effect:function(){var n=t.apply(this,arguments),i=n.mode,r=n.queue,s=e.effects.effect[n.effect]
if(e.fx.off||!s){if(i){return this[i](n.duration,n.complete)}else{return this.each(function(){if(n.complete){n.complete.call(this)}})}}function a(t){var i=e(this),r=n.complete,a=n.mode
function o(){if(e.isFunction(r)){r.call(i[0])}if(e.isFunction(t)){t()}}if(i.is(":hidden")?a==="hide":a==="show"){i[a]()
o()}else{s.call(i[0],n,o)}}return r===false?this.each(a):this.queue(r||"fx",a)},show:function(e){return function(i){if(n(i)){return e.apply(this,arguments)}else{var r=t.apply(this,arguments)
r.mode="show"
return this.effect.call(this,r)}}}(e.fn.show),hide:function(e){return function(i){if(n(i)){return e.apply(this,arguments)}else{var r=t.apply(this,arguments)
r.mode="hide"
return this.effect.call(this,r)}}}(e.fn.hide),toggle:function(e){return function(i){if(n(i)||typeof i==="boolean"){return e.apply(this,arguments)}else{var r=t.apply(this,arguments)
r.mode="toggle"
return this.effect.call(this,r)}}}(e.fn.toggle),cssUnit:function(t){var n=this.css(t),i=[]
e.each(["em","px","%","pt"],function(e,t){if(n.indexOf(t)>0){i=[parseFloat(n),t]}})
return i}})})();(function(){var t={}
e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}})
e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4
while(e<((t=Math.pow(2,--n))-1)/11){}return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}})
e.each(t,function(t,n){e.easing["easeIn"+t]=n
e.easing["easeOut"+t]=function(e){return 1-n(1-e)}
e.easing["easeInOut"+t]=function(e){return e<.5?n(e*2)/2:1-n(e*-2+2)/2}})})()
var _=e.effects
var y=e.effects.effect.bounce=function(t,n){var i=e(this),r=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(i,t.mode||"effect"),a=s==="hide",o=s==="show",l=t.direction||"up",u=t.distance,f=t.times||5,c=f*2+(o||a?1:0),h=t.duration/c,d=t.easing,p=l==="up"||l==="down"?"top":"left",m=l==="up"||l==="left",v,g,_,y=i.queue(),b=y.length
if(o||a){r.push("opacity")}e.effects.save(i,r)
i.show()
e.effects.createWrapper(i)
if(!u){u=i[p==="top"?"outerHeight":"outerWidth"]()/3}if(o){_={opacity:1}
_[p]=0
i.css("opacity",0).css(p,m?-u*2:u*2).animate(_,h,d)}if(a){u=u/Math.pow(2,f-1)}_={}
_[p]=0
for(v=0;v<f;v++){g={}
g[p]=(m?"-=":"+=")+u
i.animate(g,h,d).animate(_,h,d)
u=a?u*2:u/2}if(a){g={opacity:0}
g[p]=(m?"-=":"+=")+u
i.animate(g,h,d)}i.queue(function(){if(a){i.hide()}e.effects.restore(i,r)
e.effects.removeWrapper(i)
n()})
if(b>1){y.splice.apply(y,[1,0].concat(y.splice(b,c+1)))}i.dequeue()}
var b=e.effects.effect.highlight=function(t,n){var i=e(this),r=["backgroundImage","backgroundColor","opacity"],s=e.effects.setMode(i,t.mode||"show"),a={backgroundColor:i.css("backgroundColor")}
if(s==="hide"){a.opacity=0}e.effects.save(i,r)
i.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(a,{queue:false,duration:t.duration,easing:t.easing,complete:function(){if(s==="hide"){i.hide()}e.effects.restore(i,r)
n()}})}
var w=e.effects.effect.pulsate=function(t,n){var i=e(this),r=e.effects.setMode(i,t.mode||"show"),s=r==="show",a=r==="hide",o=s||r==="hide",l=(t.times||5)*2+(o?1:0),u=t.duration/l,f=0,c=i.queue(),h=c.length,d
if(s||!i.is(":visible")){i.css("opacity",0).show()
f=1}for(d=1;d<l;d++){i.animate({opacity:f},u,t.easing)
f=1-f}i.animate({opacity:f},u,t.easing)
i.queue(function(){if(a){i.hide()}n()})
if(h>1){c.splice.apply(c,[1,0].concat(c.splice(h,l+1)))}i.dequeue()}
var x=e.effects.effect.shake=function(t,n){var i=e(this),r=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(i,t.mode||"effect"),a=t.direction||"left",o=t.distance||20,l=t.times||3,u=l*2+1,f=Math.round(t.duration/u),c=a==="up"||a==="down"?"top":"left",h=a==="up"||a==="left",d={},p={},m={},v,g=i.queue(),_=g.length
e.effects.save(i,r)
i.show()
e.effects.createWrapper(i)
d[c]=(h?"-=":"+=")+o
p[c]=(h?"+=":"-=")+o*2
m[c]=(h?"-=":"+=")+o*2
i.animate(d,f,t.easing)
for(v=1;v<l;v++){i.animate(p,f,t.easing).animate(m,f,t.easing)}i.animate(p,f,t.easing).animate(d,f/2,t.easing).queue(function(){if(s==="hide"){i.hide()}e.effects.restore(i,r)
e.effects.removeWrapper(i)
n()})
if(_>1){g.splice.apply(g,[1,0].concat(g.splice(_,u+1)))}i.dequeue()}
var k=e.effects.effect.transfer=function(t,n){var i=e(this),r=e(t.to),s=r.css("position")==="fixed",a=e("body"),o=s?a.scrollTop():0,l=s?a.scrollLeft():0,u=r.offset(),f={top:u.top-o,left:u.left-l,height:r.innerHeight(),width:r.innerWidth()},c=i.offset(),h=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:c.top-o,left:c.left-l,height:i.innerHeight(),width:i.innerWidth(),position:s?"fixed":"absolute"}).animate(f,t.duration,t.easing,function(){h.remove()
n()})}
e.extend(e.ui,{datepicker:{version:"1.12.1"}})
var M
function T(e){var t,n
while(e.length&&e[0]!==document){t=e.css("position")
if(t==="absolute"||t==="relative"||t==="fixed"){n=parseInt(e.css("zIndex"),10)
if(!isNaN(n)&&n!==0){return n}}e=e.parent()}return 0}function L(){this._curInst=null
this._keyEvent=false
this._disabledInputs=[]
this._datepickerShowing=false
this._inDialog=false
this._mainDivId="ui-datepicker-div"
this._inlineClass="ui-datepicker-inline"
this._appendClass="ui-datepicker-append"
this._triggerClass="ui-datepicker-trigger"
this._dialogClass="ui-datepicker-dialog"
this._disableClass="ui-datepicker-disabled"
this._unselectableClass="ui-datepicker-unselectable"
this._currentClass="ui-datepicker-current-day"
this._dayOverClass="ui-datepicker-days-cell-over"
this.regional=[]
this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""}
this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false}
e.extend(this._defaults,this.regional[""])
this.regional.en=e.extend(true,{},this.regional[""])
this.regional["en-US"]=e.extend(true,{},this.regional.en)
this.dpDiv=S(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}e.extend(L.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){C(this._defaults,e||{})
return this},_attachDatepicker:function(t,n){var i,r,s
i=t.nodeName.toLowerCase()
r=i==="div"||i==="span"
if(!t.id){this.uuid+=1
t.id="dp"+this.uuid}s=this._newInst(e(t),r)
s.settings=e.extend({},n||{})
if(i==="input"){this._connectDatepicker(t,s)}else if(r){this._inlineDatepicker(t,s)}},_newInst:function(t,n){var i=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1")
return{id:i,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:n,dpDiv:!n?this.dpDiv:S(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}},_connectDatepicker:function(t,n){var i=e(t)
n.append=e([])
n.trigger=e([])
if(i.hasClass(this.markerClassName)){return}this._attachments(i,n)
i.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp)
this._autoSize(n)
e.data(t,"datepicker",n)
if(n.settings.disabled){this._disableDatepicker(t)}},_attachments:function(t,n){var i,r,s,a=this._get(n,"appendText"),o=this._get(n,"isRTL")
if(n.append){n.append.remove()}if(a){n.append=e("<span class='"+this._appendClass+"'>"+a+"</span>")
t[o?"before":"after"](n.append)}t.off("focus",this._showDatepicker)
if(n.trigger){n.trigger.remove()}i=this._get(n,"showOn")
if(i==="focus"||i==="both"){t.on("focus",this._showDatepicker)}if(i==="button"||i==="both"){r=this._get(n,"buttonText")
s=this._get(n,"buttonImage")
n.trigger=e(this._get(n,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:s,alt:r,title:r}):e("<button type='button'></button>").addClass(this._triggerClass).html(!s?r:e("<img/>").attr({src:s,alt:r,title:r})))
t[o?"before":"after"](n.trigger)
n.trigger.on("click",function(){if(e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]){e.datepicker._hideDatepicker()}else if(e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]){e.datepicker._hideDatepicker()
e.datepicker._showDatepicker(t[0])}else{e.datepicker._showDatepicker(t[0])}return false})}},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,n,i,r,s=new Date(2009,12-1,20),a=this._get(e,"dateFormat")
if(a.match(/[DM]/)){t=function(e){n=0
i=0
for(r=0;r<e.length;r++){if(e[r].length>n){n=e[r].length
i=r}}return i}
s.setMonth(t(this._get(e,a.match(/MM/)?"monthNames":"monthNamesShort")))
s.setDate(t(this._get(e,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-s.getDay())}e.input.attr("size",this._formatDate(e,s).length)}},_inlineDatepicker:function(t,n){var i=e(t)
if(i.hasClass(this.markerClassName)){return}i.addClass(this.markerClassName).append(n.dpDiv)
e.data(t,"datepicker",n)
this._setDate(n,this._getDefaultDate(n),true)
this._updateDatepicker(n)
this._updateAlternate(n)
if(n.settings.disabled){this._disableDatepicker(t)}n.dpDiv.css("display","block")},_dialogDatepicker:function(t,n,i,r,s){var a,o,l,u,f,c=this._dialogInst
if(!c){this.uuid+=1
a="dp"+this.uuid
this._dialogInput=e("<input type='text' id='"+a+"' style='position: absolute; top: -100px; width: 0px;'/>")
this._dialogInput.on("keydown",this._doKeyDown)
e("body").append(this._dialogInput)
c=this._dialogInst=this._newInst(this._dialogInput,false)
c.settings={}
e.data(this._dialogInput[0],"datepicker",c)}C(c.settings,r||{})
n=n&&n.constructor===Date?this._formatDate(c,n):n
this._dialogInput.val(n)
this._pos=s?s.length?s:[s.pageX,s.pageY]:null
if(!this._pos){o=document.documentElement.clientWidth
l=document.documentElement.clientHeight
u=document.documentElement.scrollLeft||document.body.scrollLeft
f=document.documentElement.scrollTop||document.body.scrollTop
this._pos=[o/2-100+u,l/2-150+f]}this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px")
c.settings.onSelect=i
this._inDialog=true
this.dpDiv.addClass(this._dialogClass)
this._showDatepicker(this._dialogInput[0])
if(e.blockUI){e.blockUI(this.dpDiv)}e.data(this._dialogInput[0],"datepicker",c)
return this},_destroyDatepicker:function(t){var n,i=e(t),r=e.data(t,"datepicker")
if(!i.hasClass(this.markerClassName)){return}n=t.nodeName.toLowerCase()
e.removeData(t,"datepicker")
if(n==="input"){r.append.remove()
r.trigger.remove()
i.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)}else if(n==="div"||n==="span"){i.removeClass(this.markerClassName).empty()}if(M===r){M=null}},_enableDatepicker:function(t){var n,i,r=e(t),s=e.data(t,"datepicker")
if(!r.hasClass(this.markerClassName)){return}n=t.nodeName.toLowerCase()
if(n==="input"){t.disabled=false
s.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(n==="div"||n==="span"){i=r.children("."+this._inlineClass)
i.children().removeClass("ui-state-disabled")
i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)}this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e})},_disableDatepicker:function(t){var n,i,r=e(t),s=e.data(t,"datepicker")
if(!r.hasClass(this.markerClassName)){return}n=t.nodeName.toLowerCase()
if(n==="input"){t.disabled=true
s.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(n==="div"||n==="span"){i=r.children("."+this._inlineClass)
i.children().addClass("ui-state-disabled")
i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)}this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e})
this._disabledInputs[this._disabledInputs.length]=t},_isDisabledDatepicker:function(e){if(!e){return false}for(var t=0;t<this._disabledInputs.length;t++){if(this._disabledInputs[t]===e){return true}}return false},_getInst:function(t){try{return e.data(t,"datepicker")}catch(e){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,n,i){var r,s,a,o,l=this._getInst(t)
if(arguments.length===2&&typeof n==="string"){return n==="defaults"?e.extend({},e.datepicker._defaults):l?n==="all"?e.extend({},l.settings):this._get(l,n):null}r=n||{}
if(typeof n==="string"){r={}
r[n]=i}if(l){if(this._curInst===l){this._hideDatepicker()}s=this._getDateDatepicker(t,true)
a=this._getMinMaxDate(l,"min")
o=this._getMinMaxDate(l,"max")
C(l.settings,r)
if(a!==null&&r.dateFormat!==undefined&&r.minDate===undefined){l.settings.minDate=this._formatDate(l,a)}if(o!==null&&r.dateFormat!==undefined&&r.maxDate===undefined){l.settings.maxDate=this._formatDate(l,o)}if("disabled"in r){if(r.disabled){this._disableDatepicker(t)}else{this._enableDatepicker(t)}}this._attachments(e(t),l)
this._autoSize(l)
this._setDate(l,s)
this._updateAlternate(l)
this._updateDatepicker(l)}},_changeDatepicker:function(e,t,n){this._optionDatepicker(e,t,n)},_refreshDatepicker:function(e){var t=this._getInst(e)
if(t){this._updateDatepicker(t)}},_setDateDatepicker:function(e,t){var n=this._getInst(e)
if(n){this._setDate(n,t)
this._updateDatepicker(n)
this._updateAlternate(n)}},_getDateDatepicker:function(e,t){var n=this._getInst(e)
if(n&&!n.inline){this._setDateFromField(n,t)}return n?this._getDate(n):null},_doKeyDown:function(t){var n,i,r,s=e.datepicker._getInst(t.target),a=true,o=s.dpDiv.is(".ui-datepicker-rtl")
s._keyEvent=true
if(e.datepicker._datepickerShowing){switch(t.keyCode){case 9:e.datepicker._hideDatepicker()
a=false
break
case 13:r=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",s.dpDiv)
if(r[0]){e.datepicker._selectDay(t.target,s.selectedMonth,s.selectedYear,r[0])}n=e.datepicker._get(s,"onSelect")
if(n){i=e.datepicker._formatDate(s)
n.apply(s.input?s.input[0]:null,[i,s])}else{e.datepicker._hideDatepicker()}return false
case 27:e.datepicker._hideDatepicker()
break
case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(s,"stepBigMonths"):-e.datepicker._get(s,"stepMonths"),"M")
break
case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(s,"stepBigMonths"):+e.datepicker._get(s,"stepMonths"),"M")
break
case 35:if(t.ctrlKey||t.metaKey){e.datepicker._clearDate(t.target)}a=t.ctrlKey||t.metaKey
break
case 36:if(t.ctrlKey||t.metaKey){e.datepicker._gotoToday(t.target)}a=t.ctrlKey||t.metaKey
break
case 37:if(t.ctrlKey||t.metaKey){e.datepicker._adjustDate(t.target,o?+1:-1,"D")}a=t.ctrlKey||t.metaKey
if(t.originalEvent.altKey){e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(s,"stepBigMonths"):-e.datepicker._get(s,"stepMonths"),"M")}break
case 38:if(t.ctrlKey||t.metaKey){e.datepicker._adjustDate(t.target,-7,"D")}a=t.ctrlKey||t.metaKey
break
case 39:if(t.ctrlKey||t.metaKey){e.datepicker._adjustDate(t.target,o?-1:+1,"D")}a=t.ctrlKey||t.metaKey
if(t.originalEvent.altKey){e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(s,"stepBigMonths"):+e.datepicker._get(s,"stepMonths"),"M")}break
case 40:if(t.ctrlKey||t.metaKey){e.datepicker._adjustDate(t.target,+7,"D")}a=t.ctrlKey||t.metaKey
break
default:a=false}}else if(t.keyCode===36&&t.ctrlKey){e.datepicker._showDatepicker(this)}else{a=false}if(a){t.preventDefault()
t.stopPropagation()}},_doKeyPress:function(t){var n,i,r=e.datepicker._getInst(t.target)
if(e.datepicker._get(r,"constrainInput")){n=e.datepicker._possibleChars(e.datepicker._get(r,"dateFormat"))
i=String.fromCharCode(t.charCode==null?t.keyCode:t.charCode)
return t.ctrlKey||t.metaKey||(i<" "||!n||n.indexOf(i)>-1)}},_doKeyUp:function(t){var n,i=e.datepicker._getInst(t.target)
if(i.input.val()!==i.lastVal){try{n=e.datepicker.parseDate(e.datepicker._get(i,"dateFormat"),i.input?i.input.val():null,e.datepicker._getFormatConfig(i))
if(n){e.datepicker._setDateFromField(i)
e.datepicker._updateAlternate(i)
e.datepicker._updateDatepicker(i)}}catch(e){}}return true},_showDatepicker:function(t){t=t.target||t
if(t.nodeName.toLowerCase()!=="input"){t=e("input",t.parentNode)[0]}if(e.datepicker._isDisabledDatepicker(t)||e.datepicker._lastInput===t){return}var n,i,r,s,a,o,l
n=e.datepicker._getInst(t)
if(e.datepicker._curInst&&e.datepicker._curInst!==n){e.datepicker._curInst.dpDiv.stop(true,true)
if(n&&e.datepicker._datepickerShowing){e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])}}i=e.datepicker._get(n,"beforeShow")
r=i?i.apply(t,[t,n]):{}
if(r===false){return}C(n.settings,r)
n.lastVal=null
e.datepicker._lastInput=t
e.datepicker._setDateFromField(n)
if(e.datepicker._inDialog){t.value=""}if(!e.datepicker._pos){e.datepicker._pos=e.datepicker._findPos(t)
e.datepicker._pos[1]+=t.offsetHeight}s=false
e(t).parents().each(function(){s|=e(this).css("position")==="fixed"
return!s})
a={left:e.datepicker._pos[0],top:e.datepicker._pos[1]}
e.datepicker._pos=null
n.dpDiv.empty()
n.dpDiv.css({position:"absolute",display:"block",top:"-1000px"})
e.datepicker._updateDatepicker(n)
a=e.datepicker._checkOffset(n,a,s)
n.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":s?"fixed":"absolute",display:"none",left:a.left+"px",top:a.top+"px"})
if(!n.inline){o=e.datepicker._get(n,"showAnim")
l=e.datepicker._get(n,"duration")
n.dpDiv.css("z-index",T(e(t))+1)
e.datepicker._datepickerShowing=true
if(e.effects&&e.effects.effect[o]){n.dpDiv.show(o,e.datepicker._get(n,"showOptions"),l)}else{n.dpDiv[o||"show"](o?l:null)}if(e.datepicker._shouldFocusInput(n)){n.input.trigger("focus")}e.datepicker._curInst=n}},_updateDatepicker:function(t){this.maxRows=4
M=t
t.dpDiv.empty().append(this._generateHTML(t))
this._attachHandlers(t)
var n,i=this._getNumberOfMonths(t),r=i[1],s=17,a=t.dpDiv.find("."+this._dayOverClass+" a")
if(a.length>0){D.apply(a.get(0))}t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("")
if(r>1){t.dpDiv.addClass("ui-datepicker-multi-"+r).css("width",s*r+"em")}t.dpDiv[(i[0]!==1||i[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi")
t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl")
if(t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)){t.input.trigger("focus")}if(t.yearshtml){n=t.yearshtml
setTimeout(function(){if(n===t.yearshtml&&t.yearshtml){t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml)}n=t.yearshtml=null},0)}},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,n,i){var r=t.dpDiv.outerWidth(),s=t.dpDiv.outerHeight(),a=t.input?t.input.outerWidth():0,o=t.input?t.input.outerHeight():0,l=document.documentElement.clientWidth+(i?0:e(document).scrollLeft()),u=document.documentElement.clientHeight+(i?0:e(document).scrollTop())
n.left-=this._get(t,"isRTL")?r-a:0
n.left-=i&&n.left===t.input.offset().left?e(document).scrollLeft():0
n.top-=i&&n.top===t.input.offset().top+o?e(document).scrollTop():0
n.left-=Math.min(n.left,n.left+r>l&&l>r?Math.abs(n.left+r-l):0)
n.top-=Math.min(n.top,n.top+s>u&&u>s?Math.abs(s+o):0)
return n},_findPos:function(t){var n,i=this._getInst(t),r=this._get(i,"isRTL")
while(t&&(t.type==="hidden"||t.nodeType!==1||e.expr.filters.hidden(t))){t=t[r?"previousSibling":"nextSibling"]}n=e(t).offset()
return[n.left,n.top]},_hideDatepicker:function(t){var n,i,r,s,a=this._curInst
if(!a||t&&a!==e.data(t,"datepicker")){return}if(this._datepickerShowing){n=this._get(a,"showAnim")
i=this._get(a,"duration")
r=function(){e.datepicker._tidyDialog(a)}
if(e.effects&&(e.effects.effect[n]||e.effects[n])){a.dpDiv.hide(n,e.datepicker._get(a,"showOptions"),i,r)}else{a.dpDiv[n==="slideDown"?"slideUp":n==="fadeIn"?"fadeOut":"hide"](n?i:null,r)}if(!n){r()}this._datepickerShowing=false
s=this._get(a,"onClose")
if(s){s.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a])}this._lastInput=null
if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"})
if(e.blockUI){e.unblockUI()
e("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(!e.datepicker._curInst){return}var n=e(t.target),i=e.datepicker._getInst(n[0])
if(n[0].id!==e.datepicker._mainDivId&&n.parents("#"+e.datepicker._mainDivId).length===0&&!n.hasClass(e.datepicker.markerClassName)&&!n.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&!(e.datepicker._inDialog&&e.blockUI)||n.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==i){e.datepicker._hideDatepicker()}},_adjustDate:function(t,n,i){var r=e(t),s=this._getInst(r[0])
if(this._isDisabledDatepicker(r[0])){return}this._adjustInstDate(s,n+(i==="M"?this._get(s,"showCurrentAtPos"):0),i)
this._updateDatepicker(s)},_gotoToday:function(t){var n,i=e(t),r=this._getInst(i[0])
if(this._get(r,"gotoCurrent")&&r.currentDay){r.selectedDay=r.currentDay
r.drawMonth=r.selectedMonth=r.currentMonth
r.drawYear=r.selectedYear=r.currentYear}else{n=new Date
r.selectedDay=n.getDate()
r.drawMonth=r.selectedMonth=n.getMonth()
r.drawYear=r.selectedYear=n.getFullYear()}this._notifyChange(r)
this._adjustDate(i)},_selectMonthYear:function(t,n,i){var r=e(t),s=this._getInst(r[0])
s["selected"+(i==="M"?"Month":"Year")]=s["draw"+(i==="M"?"Month":"Year")]=parseInt(n.options[n.selectedIndex].value,10)
this._notifyChange(s)
this._adjustDate(r)},_selectDay:function(t,n,i,r){var s,a=e(t)
if(e(r).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])){return}s=this._getInst(a[0])
s.selectedDay=s.currentDay=e("a",r).html()
s.selectedMonth=s.currentMonth=n
s.selectedYear=s.currentYear=i
this._selectDate(t,this._formatDate(s,s.currentDay,s.currentMonth,s.currentYear))},_clearDate:function(t){var n=e(t)
this._selectDate(n,"")},_selectDate:function(t,n){var i,r=e(t),s=this._getInst(r[0])
n=n!=null?n:this._formatDate(s)
if(s.input){s.input.val(n)}this._updateAlternate(s)
i=this._get(s,"onSelect")
if(i){i.apply(s.input?s.input[0]:null,[n,s])}else if(s.input){s.input.trigger("change")}if(s.inline){this._updateDatepicker(s)}else{this._hideDatepicker()
this._lastInput=s.input[0]
if(typeof s.input[0]!=="object"){s.input.trigger("focus")}this._lastInput=null}},_updateAlternate:function(t){var n,i,r,s=this._get(t,"altField")
if(s){n=this._get(t,"altFormat")||this._get(t,"dateFormat")
i=this._getDate(t)
r=this.formatDate(n,i,this._getFormatConfig(t))
e(s).val(r)}},noWeekends:function(e){var t=e.getDay()
return[t>0&&t<6,""]},iso8601Week:function(e){var t,n=new Date(e.getTime())
n.setDate(n.getDate()+4-(n.getDay()||7))
t=n.getTime()
n.setMonth(0)
n.setDate(1)
return Math.floor(Math.round((t-n)/864e5)/7)+1},parseDate:function(t,n,i){if(t==null||n==null){throw"Invalid arguments"}n=typeof n==="object"?n.toString():n+""
if(n===""){return null}var r,s,a,o=0,l=(i?i.shortYearCutoff:null)||this._defaults.shortYearCutoff,u=typeof l!=="string"?l:(new Date).getFullYear()%100+parseInt(l,10),f=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,c=(i?i.dayNames:null)||this._defaults.dayNames,h=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,d=(i?i.monthNames:null)||this._defaults.monthNames,p=-1,m=-1,v=-1,g=-1,_=false,y,b=function(e){var n=r+1<t.length&&t.charAt(r+1)===e
if(n){r++}return n},w=function(e){var t=b(e),i=e==="@"?14:e==="!"?20:e==="y"&&t?4:e==="o"?3:2,r=e==="y"?i:1,s=new RegExp("^\\d{"+r+","+i+"}"),a=n.substring(o).match(s)
if(!a){throw"Missing number at position "+o}o+=a[0].length
return parseInt(a[0],10)},x=function(t,i,r){var s=-1,a=e.map(b(t)?r:i,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)})
e.each(a,function(e,t){var i=t[1]
if(n.substr(o,i.length).toLowerCase()===i.toLowerCase()){s=t[0]
o+=i.length
return false}})
if(s!==-1){return s+1}else{throw"Unknown name at position "+o}},k=function(){if(n.charAt(o)!==t.charAt(r)){throw"Unexpected literal at position "+o}o++}
for(r=0;r<t.length;r++){if(_){if(t.charAt(r)==="'"&&!b("'")){_=false}else{k()}}else{switch(t.charAt(r)){case"d":v=w("d")
break
case"D":x("D",f,c)
break
case"o":g=w("o")
break
case"m":m=w("m")
break
case"M":m=x("M",h,d)
break
case"y":p=w("y")
break
case"@":y=new Date(w("@"))
p=y.getFullYear()
m=y.getMonth()+1
v=y.getDate()
break
case"!":y=new Date((w("!")-this._ticksTo1970)/1e4)
p=y.getFullYear()
m=y.getMonth()+1
v=y.getDate()
break
case"'":if(b("'")){k()}else{_=true}break
default:k()}}}if(o<n.length){a=n.substr(o)
if(!/^\s+/.test(a)){throw"Extra/unparsed characters found in date: "+a}}if(p===-1){p=(new Date).getFullYear()}else if(p<100){p+=(new Date).getFullYear()-(new Date).getFullYear()%100+(p<=u?0:-100)}if(g>-1){m=1
v=g
do{s=this._getDaysInMonth(p,m-1)
if(v<=s){break}m++
v-=s}while(true)}y=this._daylightSavingAdjust(new Date(p,m-1,v))
if(y.getFullYear()!==p||y.getMonth()+1!==m||y.getDate()!==v){throw"Invalid date"}return y},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*1e7,formatDate:function(e,t,n){if(!t){return""}var i,r=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,s=(n?n.dayNames:null)||this._defaults.dayNames,a=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,o=(n?n.monthNames:null)||this._defaults.monthNames,l=function(t){var n=i+1<e.length&&e.charAt(i+1)===t
if(n){i++}return n},u=function(e,t,n){var i=""+t
if(l(e)){while(i.length<n){i="0"+i}}return i},f=function(e,t,n,i){return l(e)?i[t]:n[t]},c="",h=false
if(t){for(i=0;i<e.length;i++){if(h){if(e.charAt(i)==="'"&&!l("'")){h=false}else{c+=e.charAt(i)}}else{switch(e.charAt(i)){case"d":c+=u("d",t.getDate(),2)
break
case"D":c+=f("D",t.getDay(),r,s)
break
case"o":c+=u("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3)
break
case"m":c+=u("m",t.getMonth()+1,2)
break
case"M":c+=f("M",t.getMonth(),a,o)
break
case"y":c+=l("y")?t.getFullYear():(t.getFullYear()%100<10?"0":"")+t.getFullYear()%100
break
case"@":c+=t.getTime()
break
case"!":c+=t.getTime()*1e4+this._ticksTo1970
break
case"'":if(l("'")){c+="'"}else{h=true}break
default:c+=e.charAt(i)}}}}return c},_possibleChars:function(e){var t,n="",i=false,r=function(n){var i=t+1<e.length&&e.charAt(t+1)===n
if(i){t++}return i}
for(t=0;t<e.length;t++){if(i){if(e.charAt(t)==="'"&&!r("'")){i=false}else{n+=e.charAt(t)}}else{switch(e.charAt(t)){case"d":case"m":case"y":case"@":n+="0123456789"
break
case"D":case"M":return null
case"'":if(r("'")){n+="'"}else{i=true}break
default:n+=e.charAt(t)}}}return n},_get:function(e,t){return e.settings[t]!==undefined?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()===e.lastVal){return}var n=this._get(e,"dateFormat"),i=e.lastVal=e.input?e.input.val():null,r=this._getDefaultDate(e),s=r,a=this._getFormatConfig(e)
try{s=this.parseDate(n,i,a)||r}catch(e){i=t?"":i}e.selectedDay=s.getDate()
e.drawMonth=e.selectedMonth=s.getMonth()
e.drawYear=e.selectedYear=s.getFullYear()
e.currentDay=i?s.getDate():0
e.currentMonth=i?s.getMonth():0
e.currentYear=i?s.getFullYear():0
this._adjustInstDate(e)},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,n,i){var r=function(e){var t=new Date
t.setDate(t.getDate()+e)
return t},s=function(n){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),n,e.datepicker._getFormatConfig(t))}catch(e){}var i=(n.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,r=i.getFullYear(),s=i.getMonth(),a=i.getDate(),o=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=o.exec(n)
while(l){switch(l[2]||"d"){case"d":case"D":a+=parseInt(l[1],10)
break
case"w":case"W":a+=parseInt(l[1],10)*7
break
case"m":case"M":s+=parseInt(l[1],10)
a=Math.min(a,e.datepicker._getDaysInMonth(r,s))
break
case"y":case"Y":r+=parseInt(l[1],10)
a=Math.min(a,e.datepicker._getDaysInMonth(r,s))
break}l=o.exec(n)}return new Date(r,s,a)},a=n==null||n===""?i:typeof n==="string"?s(n):typeof n==="number"?isNaN(n)?i:r(n):new Date(n.getTime())
a=a&&a.toString()==="Invalid Date"?i:a
if(a){a.setHours(0)
a.setMinutes(0)
a.setSeconds(0)
a.setMilliseconds(0)}return this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(e){if(!e){return null}e.setHours(e.getHours()>12?e.getHours()+2:0)
return e},_setDate:function(e,t,n){var i=!t,r=e.selectedMonth,s=e.selectedYear,a=this._restrictMinMax(e,this._determineDate(e,t,new Date))
e.selectedDay=e.currentDay=a.getDate()
e.drawMonth=e.selectedMonth=e.currentMonth=a.getMonth()
e.drawYear=e.selectedYear=e.currentYear=a.getFullYear()
if((r!==e.selectedMonth||s!==e.selectedYear)&&!n){this._notifyChange(e)}this._adjustInstDate(e)
if(e.input){e.input.val(i?"":this._formatDate(e))}},_getDate:function(e){var t=!e.currentYear||e.input&&e.input.val()===""?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay))
return t},_attachHandlers:function(t){var n=this._get(t,"stepMonths"),i="#"+t.id.replace(/\\\\/g,"\\")
t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(i,-n,"M")},next:function(){e.datepicker._adjustDate(i,+n,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(i)},selectDay:function(){e.datepicker._selectDay(i,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this)
return false},selectMonth:function(){e.datepicker._selectMonthYear(i,this,"M")
return false},selectYear:function(){e.datepicker._selectMonthYear(i,this,"Y")
return false}}
e(this).on(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,n,i,r,s,a,o,l,u,f,c,h,d,p,m,v,g,_,y,b,w,x,k,M,T,L,S,D,C,E,A,Y,j,O,I,P,N,R,F,H=new Date,$=this._daylightSavingAdjust(new Date(H.getFullYear(),H.getMonth(),H.getDate())),z=this._get(e,"isRTL"),W=this._get(e,"showButtonPanel"),U=this._get(e,"hideIfNoPrevNext"),q=this._get(e,"navigationAsDateFormat"),B=this._getNumberOfMonths(e),V=this._get(e,"showCurrentAtPos"),J=this._get(e,"stepMonths"),X=B[0]!==1||B[1]!==1,K=this._daylightSavingAdjust(!e.currentDay?new Date(9999,9,9):new Date(e.currentYear,e.currentMonth,e.currentDay)),Q=this._getMinMaxDate(e,"min"),G=this._getMinMaxDate(e,"max"),Z=e.drawMonth-V,ee=e.drawYear
if(Z<0){Z+=12
ee--}if(G){t=this._daylightSavingAdjust(new Date(G.getFullYear(),G.getMonth()-B[0]*B[1]+1,G.getDate()))
t=Q&&t<Q?Q:t
while(this._daylightSavingAdjust(new Date(ee,Z,1))>t){Z--
if(Z<0){Z=11
ee--}}}e.drawMonth=Z
e.drawYear=ee
n=this._get(e,"prevText")
n=!q?n:this.formatDate(n,this._daylightSavingAdjust(new Date(ee,Z-J,1)),this._getFormatConfig(e))
i=this._canAdjustMonth(e,-1,ee,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'"+" title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(z?"e":"w")+"'>"+n+"</span></a>":U?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(z?"e":"w")+"'>"+n+"</span></a>"
r=this._get(e,"nextText")
r=!q?r:this.formatDate(r,this._daylightSavingAdjust(new Date(ee,Z+J,1)),this._getFormatConfig(e))
s=this._canAdjustMonth(e,+1,ee,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'"+" title='"+r+"'><span class='ui-icon ui-icon-circle-triangle-"+(z?"w":"e")+"'>"+r+"</span></a>":U?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+r+"'><span class='ui-icon ui-icon-circle-triangle-"+(z?"w":"e")+"'>"+r+"</span></a>"
a=this._get(e,"currentText")
o=this._get(e,"gotoCurrent")&&e.currentDay?K:$
a=!q?a:this.formatDate(a,o,this._getFormatConfig(e))
l=!e.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>":""
u=W?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(z?l:"")+(this._isInRange(e,o)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'"+">"+a+"</button>":"")+(z?"":l)+"</div>":""
f=parseInt(this._get(e,"firstDay"),10)
f=isNaN(f)?0:f
c=this._get(e,"showWeek")
h=this._get(e,"dayNames")
d=this._get(e,"dayNamesMin")
p=this._get(e,"monthNames")
m=this._get(e,"monthNamesShort")
v=this._get(e,"beforeShowDay")
g=this._get(e,"showOtherMonths")
_=this._get(e,"selectOtherMonths")
y=this._getDefaultDate(e)
b=""
for(x=0;x<B[0];x++){k=""
this.maxRows=4
for(M=0;M<B[1];M++){T=this._daylightSavingAdjust(new Date(ee,Z,e.selectedDay))
L=" ui-corner-all"
S=""
if(X){S+="<div class='ui-datepicker-group"
if(B[1]>1){switch(M){case 0:S+=" ui-datepicker-group-first"
L=" ui-corner-"+(z?"right":"left")
break
case B[1]-1:S+=" ui-datepicker-group-last"
L=" ui-corner-"+(z?"left":"right")
break
default:S+=" ui-datepicker-group-middle"
L=""
break}}S+="'>"}S+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+L+"'>"+(/all|left/.test(L)&&x===0?z?s:i:"")+(/all|right/.test(L)&&x===0?z?i:s:"")+this._generateMonthYearHeader(e,Z,ee,Q,G,x>0||M>0,p,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>"
D=c?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":""
for(w=0;w<7;w++){C=(w+f)%7
D+="<th scope='col'"+((w+f+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+h[C]+"'>"+d[C]+"</span></th>"}S+=D+"</tr></thead><tbody>"
E=this._getDaysInMonth(ee,Z)
if(ee===e.selectedYear&&Z===e.selectedMonth){e.selectedDay=Math.min(e.selectedDay,E)}A=(this._getFirstDayOfMonth(ee,Z)-f+7)%7
Y=Math.ceil((A+E)/7)
j=X?this.maxRows>Y?this.maxRows:Y:Y
this.maxRows=j
O=this._daylightSavingAdjust(new Date(ee,Z,1-A))
for(I=0;I<j;I++){S+="<tr>"
P=!c?"":"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(O)+"</td>"
for(w=0;w<7;w++){N=v?v.apply(e.input?e.input[0]:null,[O]):[true,""]
R=O.getMonth()!==Z
F=R&&!_||!N[0]||Q&&O<Q||G&&O>G
P+="<td class='"+((w+f+6)%7>=5?" ui-datepicker-week-end":"")+(R?" ui-datepicker-other-month":"")+(O.getTime()===T.getTime()&&Z===e.selectedMonth&&e._keyEvent||y.getTime()===O.getTime()&&y.getTime()===T.getTime()?" "+this._dayOverClass:"")+(F?" "+this._unselectableClass+" ui-state-disabled":"")+(R&&!g?"":" "+N[1]+(O.getTime()===K.getTime()?" "+this._currentClass:"")+(O.getTime()===$.getTime()?" ui-datepicker-today":""))+"'"+((!R||g)&&N[2]?" title='"+N[2].replace(/'/g,"&#39;")+"'":"")+(F?"":" data-handler='selectDay' data-event='click' data-month='"+O.getMonth()+"' data-year='"+O.getFullYear()+"'")+">"+(R&&!g?"&#xa0;":F?"<span class='ui-state-default'>"+O.getDate()+"</span>":"<a class='ui-state-default"+(O.getTime()===$.getTime()?" ui-state-highlight":"")+(O.getTime()===K.getTime()?" ui-state-active":"")+(R?" ui-priority-secondary":"")+"' href='#'>"+O.getDate()+"</a>")+"</td>"
O.setDate(O.getDate()+1)
O=this._daylightSavingAdjust(O)}S+=P+"</tr>"}Z++
if(Z>11){Z=0
ee++}S+="</tbody></table>"+(X?"</div>"+(B[0]>0&&M===B[1]-1?"<div class='ui-datepicker-row-break'></div>":""):"")
k+=S}b+=k}b+=u
e._keyEvent=false
return b},_generateMonthYearHeader:function(e,t,n,i,r,s,a,o){var l,u,f,c,h,d,p,m,v=this._get(e,"changeMonth"),g=this._get(e,"changeYear"),_=this._get(e,"showMonthAfterYear"),y="<div class='ui-datepicker-title'>",b=""
if(s||!v){b+="<span class='ui-datepicker-month'>"+a[t]+"</span>"}else{l=i&&i.getFullYear()===n
u=r&&r.getFullYear()===n
b+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>"
for(f=0;f<12;f++){if((!l||f>=i.getMonth())&&(!u||f<=r.getMonth())){b+="<option value='"+f+"'"+(f===t?" selected='selected'":"")+">"+o[f]+"</option>"}}b+="</select>"}if(!_){y+=b+(s||!(v&&g)?"&#xa0;":"")}if(!e.yearshtml){e.yearshtml=""
if(s||!g){y+="<span class='ui-datepicker-year'>"+n+"</span>"}else{c=this._get(e,"yearRange").split(":")
h=(new Date).getFullYear()
d=function(e){var t=e.match(/c[+\-].*/)?n+parseInt(e.substring(1),10):e.match(/[+\-].*/)?h+parseInt(e,10):parseInt(e,10)
return isNaN(t)?h:t}
p=d(c[0])
m=Math.max(p,d(c[1]||""))
p=i?Math.max(p,i.getFullYear()):p
m=r?Math.min(m,r.getFullYear()):m
e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"
for(;p<=m;p++){e.yearshtml+="<option value='"+p+"'"+(p===n?" selected='selected'":"")+">"+p+"</option>"}e.yearshtml+="</select>"
y+=e.yearshtml
e.yearshtml=null}}y+=this._get(e,"yearSuffix")
if(_){y+=(s||!(v&&g)?"&#xa0;":"")+b}y+="</div>"
return y},_adjustInstDate:function(e,t,n){var i=e.selectedYear+(n==="Y"?t:0),r=e.selectedMonth+(n==="M"?t:0),s=Math.min(e.selectedDay,this._getDaysInMonth(i,r))+(n==="D"?t:0),a=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(i,r,s)))
e.selectedDay=a.getDate()
e.drawMonth=e.selectedMonth=a.getMonth()
e.drawYear=e.selectedYear=a.getFullYear()
if(n==="M"||n==="Y"){this._notifyChange(e)}},_restrictMinMax:function(e,t){var n=this._getMinMaxDate(e,"min"),i=this._getMinMaxDate(e,"max"),r=n&&t<n?n:t
return i&&r>i?i:r},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear")
if(t){t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])}},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths")
return t==null?[1,1]:typeof t==="number"?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,n,i){var r=this._getNumberOfMonths(e),s=this._daylightSavingAdjust(new Date(n,i+(t<0?t:r[0]*r[1]),1))
if(t<0){s.setDate(this._getDaysInMonth(s.getFullYear(),s.getMonth()))}return this._isInRange(e,s)},_isInRange:function(e,t){var n,i,r=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),a=null,o=null,l=this._get(e,"yearRange")
if(l){n=l.split(":")
i=(new Date).getFullYear()
a=parseInt(n[0],10)
o=parseInt(n[1],10)
if(n[0].match(/[+\-].*/)){a+=i}if(n[1].match(/[+\-].*/)){o+=i}}return(!r||t.getTime()>=r.getTime())&&(!s||t.getTime()<=s.getTime())&&(!a||t.getFullYear()>=a)&&(!o||t.getFullYear()<=o)},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff")
t=typeof t!=="string"?t:(new Date).getFullYear()%100+parseInt(t,10)
return{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,n,i){if(!t){e.currentDay=e.selectedDay
e.currentMonth=e.selectedMonth
e.currentYear=e.selectedYear}var r=t?typeof t==="object"?t:this._daylightSavingAdjust(new Date(i,n,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay))
return this.formatDate(this._get(e,"dateFormat"),r,this._getFormatConfig(e))}})
function S(t){var n="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"
return t.on("mouseout",n,function(){e(this).removeClass("ui-state-hover")
if(this.className.indexOf("ui-datepicker-prev")!==-1){e(this).removeClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!==-1){e(this).removeClass("ui-datepicker-next-hover")}}).on("mouseover",n,D)}function D(){if(!e.datepicker._isDisabledDatepicker(M.inline?M.dpDiv.parent()[0]:M.input[0])){e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover")
e(this).addClass("ui-state-hover")
if(this.className.indexOf("ui-datepicker-prev")!==-1){e(this).addClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!==-1){e(this).addClass("ui-datepicker-next-hover")}}}function C(t,n){e.extend(t,n)
for(var i in n){if(n[i]==null){t[i]=n[i]}}return t}e.fn.datepicker=function(t){if(!this.length){return this}if(!e.datepicker.initialized){e(document).on("mousedown",e.datepicker._checkExternalClick)
e.datepicker.initialized=true}if(e("#"+e.datepicker._mainDivId).length===0){e("body").append(e.datepicker.dpDiv)}var n=Array.prototype.slice.call(arguments,1)
if(typeof t==="string"&&(t==="isDisabled"||t==="getDate"||t==="widget")){return e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(n))}if(t==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(n))}return this.each(function(){typeof t==="string"?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(n)):e.datepicker._attachDatepicker(this,t)})}
e.datepicker=new L
e.datepicker.initialized=false
e.datepicker.uuid=(new Date).getTime()
e.datepicker.version="1.12.1"
var E=e.datepicker});(function(e){e.attrFn=e.attrFn||{}
var t=navigator.userAgent.toLowerCase(),n=t.indexOf("chrome")>-1&&(t.indexOf("windows")>-1||t.indexOf("macintosh")>-1||t.indexOf("linux")>-1)&&t.indexOf("mobile")<0&&t.indexOf("nexus")<0,i={tap_pixel_range:5,swipe_h_threshold:50,swipe_v_threshold:50,taphold_threshold:750,doubletap_int:500,touch_capable:"ontouchstart"in document.documentElement&&!n,orientation_support:"orientation"in window&&"onorientationchange"in window,startevent:"ontouchstart"in document.documentElement&&!n?"touchstart":"mousedown",endevent:"ontouchstart"in document.documentElement&&!n?"touchend":"mouseup",moveevent:"ontouchstart"in document.documentElement&&!n?"touchmove":"mousemove",tapevent:"ontouchstart"in document.documentElement&&!n?"tap":"click",scrollevent:"ontouchstart"in document.documentElement&&!n?"touchmove":"scroll",hold_timer:null,tap_timer:null}
e.isTouchCapable=function(){return i.touch_capable}
e.getStartEvent=function(){return i.startevent}
e.getEndEvent=function(){return i.endevent}
e.getMoveEvent=function(){return i.moveevent}
e.getTapEvent=function(){return i.tapevent}
e.getScrollEvent=function(){return i.scrollevent}
e.each(["tapstart","tapend","tap","singletap","doubletap","taphold","swipe","swipeup","swiperight","swipedown","swipeleft","swipeend","scrollstart","scrollend","orientationchange"],function(t,n){e.fn[n]=function(e){return e?this.on(n,e):this.trigger(n)}
e.attrFn[n]=true})
e.event.special.tapstart={setup:function(){var t=this,n=e(t)
n.on(i.startevent,function(e){n.data("callee",arguments.callee)
if(e.which&&e.which!==1){return false}var r=e.originalEvent,s={position:{x:i.touch_capable?r.touches[0].screenX:e.screenX,y:i.touch_capable?r.touches[0].screenY:e.screenY},offset:{x:i.touch_capable?r.touches[0].pageX-r.touches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?r.touches[0].pageY-r.touches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target}
w(t,"tapstart",e,s)
return true})},remove:function(){e(this).off(i.startevent,e(this).data.callee)}}
e.event.special.tapmove={setup:function(){var t=this,n=e(t)
n.on(i.moveevent,function(e){n.data("callee",arguments.callee)
var r=e.originalEvent,s={position:{x:i.touch_capable?r.touches[0].screenX:e.screenX,y:i.touch_capable?r.touches[0].screenY:e.screenY},offset:{x:i.touch_capable?r.touches[0].pageX-r.touches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?r.touches[0].pageY-r.touches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target}
w(t,"tapmove",e,s)
return true})},remove:function(){e(this).off(i.moveevent,e(this).data.callee)}}
e.event.special.tapend={setup:function(){var t=this,n=e(t)
n.on(i.endevent,function(e){n.data("callee",arguments.callee)
var r=e.originalEvent
var s={position:{x:i.touch_capable?r.changedTouches[0].screenX:e.screenX,y:i.touch_capable?r.changedTouches[0].screenY:e.screenY},offset:{x:i.touch_capable?r.changedTouches[0].pageX-r.changedTouches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?r.changedTouches[0].pageY-r.changedTouches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target}
w(t,"tapend",e,s)
return true})},remove:function(){e(this).off(i.endevent,e(this).data.callee)}}
e.event.special.taphold={setup:function(){var t=this,n=e(t),r,s,a={x:0,y:0}
n.on(i.startevent,function(e){if(e.which&&e.which!==1){return false}else{n.data("tapheld",false)
r=e.target
var s=e.originalEvent
var o=(new Date).getTime(),l={x:i.touch_capable?s.touches[0].screenX:e.screenX,y:i.touch_capable?s.touches[0].screenY:e.screenY},u={x:i.touch_capable?s.touches[0].pageX-s.touches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?s.touches[0].pageY-s.touches[0].target.offsetTop:e.offsetY}
a.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX
a.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY
i.hold_timer=window.setTimeout(function(){var f=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,c=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY
if(e.target==r&&(a.x==f&&a.y==c)){n.data("tapheld",true)
var h=(new Date).getTime(),d={x:i.touch_capable?s.touches[0].screenX:e.screenX,y:i.touch_capable?s.touches[0].screenY:e.screenY},p={x:i.touch_capable?s.touches[0].pageX-s.touches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?s.touches[0].pageY-s.touches[0].target.offsetTop:e.offsetY}
duration=h-o
var m={startTime:o,endTime:h,startPosition:l,startOffset:u,endPosition:d,endOffset:p,duration:duration,target:e.target}
n.data("callee1",arguments.callee)
w(t,"taphold",e,m)}},i.taphold_threshold)
return true}}).on(i.endevent,function(){n.data("callee2",arguments.callee)
n.data("tapheld",false)
window.clearTimeout(i.hold_timer)})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2)}}
e.event.special.doubletap={setup:function(){var t=this,n=e(t),r,s,a,o
n.on(i.startevent,function(e){if(e.which&&e.which!==1){return false}n.data("doubletapped",false)
r=e.target
n.data("callee1",arguments.callee)
o=e.originalEvent
a={position:{x:i.touch_capable?o.touches[0].screenX:e.screenX,y:i.touch_capable?o.touches[0].screenY:e.screenY},offset:{x:i.touch_capable?o.touches[0].pageX-o.touches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?o.touches[0].pageY-o.touches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target}
return true}).on(i.endevent,function(e){var o=(new Date).getTime()
var l=n.data("lastTouch")||o+1
var u=o-l
window.clearTimeout(s)
n.data("callee2",arguments.callee)
if(u<i.doubletap_int&&e.target==r&&u>100){n.data("doubletapped",true)
window.clearTimeout(i.tap_timer)
var f={position:{x:i.touch_capable?e.originalEvent.changedTouches[0].screenX:e.screenX,y:i.touch_capable?e.originalEvent.changedTouches[0].screenY:e.screenY},offset:{x:i.touch_capable?e.originalEvent.changedTouches[0].pageX-e.originalEvent.changedTouches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?e.originalEvent.changedTouches[0].pageY-e.originalEvent.changedTouches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target}
var c={firstTap:a,secondTap:f,interval:f.time-a.time}
w(t,"doubletap",e,c)}else{n.data("lastTouch",o)
s=window.setTimeout(function(e){window.clearTimeout(s)},i.doubletap_int,[e])}n.data("lastTouch",o)})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2)}}
e.event.special.singletap={setup:function(){var t=this,n=e(t),r=null,s=null,a={x:0,y:0}
n.on(i.startevent,function(e){if(e.which&&e.which!==1){return false}else{s=(new Date).getTime()
r=e.target
n.data("callee1",arguments.callee)
a.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX
a.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY
return true}}).on(i.endevent,function(e){n.data("callee2",arguments.callee)
if(e.target==r){end_pos_x=e.originalEvent.changedTouches?e.originalEvent.changedTouches[0].pageX:e.pageX
end_pos_y=e.originalEvent.changedTouches?e.originalEvent.changedTouches[0].pageY:e.pageY
i.tap_timer=window.setTimeout(function(){if(!n.data("doubletapped")&&!n.data("tapheld")&&a.x==end_pos_x&&a.y==end_pos_y){var r=e.originalEvent
var o={position:{x:i.touch_capable?r.changedTouches[0].screenX:e.screenX,y:i.touch_capable?r.changedTouches[0].screenY:e.screenY},offset:{x:i.touch_capable?r.changedTouches[0].pageX-r.changedTouches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?r.changedTouches[0].pageY-r.changedTouches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target}
if(o.time-s<i.taphold_threshold){w(t,"singletap",e,o)}}},i.doubletap_int)}})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2)}}
e.event.special.tap={setup:function(){var t=this,n=e(t),r=false,s=null,a,o={x:0,y:0}
n.on(i.startevent,function(e){n.data("callee1",arguments.callee)
if(e.which&&e.which!==1){return false}else{r=true
o.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX
o.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY
a=(new Date).getTime()
s=e.target
return true}}).on(i.endevent,function(e){n.data("callee2",arguments.callee)
var l=e.originalEvent.targetTouches?e.originalEvent.changedTouches[0].pageX:e.pageX,u=e.originalEvent.targetTouches?e.originalEvent.changedTouches[0].pageY:e.pageY
diff_x=o.x-l,diff_y=o.y-u
if(s==e.target&&r&&(new Date).getTime()-a<i.taphold_threshold&&(o.x==l&&o.y==u||diff_x>=-i.tap_pixel_range&&diff_x<=i.tap_pixel_range&&diff_y>=-i.tap_pixel_range&&diff_y<=i.tap_pixel_range)){var f=e.originalEvent
var c={position:{x:i.touch_capable?f.changedTouches[0].screenX:e.screenX,y:i.touch_capable?f.changedTouches[0].screenY:e.screenY},offset:{x:i.touch_capable?f.changedTouches[0].pageX-f.changedTouches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?f.changedTouches[0].pageY-f.changedTouches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target}
w(t,"tap",e,c)}})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2)}}
e.event.special.swipe={setup:function(){var t=this,n=e(t),r=false,s=false,a={x:0,y:0},o={x:0,y:0},l
function u(t){n=e(t.target)
n.data("callee1",arguments.callee)
a.x=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageX:t.pageX
a.y=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageY:t.pageY
o.x=a.x
o.y=a.y
r=true
var s=t.originalEvent
l={position:{x:i.touch_capable?s.touches[0].screenX:t.screenX,y:i.touch_capable?s.touches[0].screenY:t.screenY},offset:{x:i.touch_capable?s.touches[0].pageX-s.touches[0].target.offsetLeft:t.offsetX,y:i.touch_capable?s.touches[0].pageY-s.touches[0].target.offsetTop:t.offsetY},time:(new Date).getTime(),target:t.target}
var u=new Date
while(new Date-u<100){}}function f(t){n=e(t.target)
n.data("callee2",arguments.callee)
o.x=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageX:t.pageX
o.y=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageY:t.pageY
window.clearTimeout(i.hold_timer)
var u
var f=n.data("xthreshold"),c=n.data("ythreshold"),h=typeof f!=="undefined"&&f!==false&&parseInt(f)?parseInt(f):i.swipe_h_threshold,d=typeof c!=="undefined"&&c!==false&&parseInt(c)?parseInt(c):i.swipe_v_threshold
if(a.y>o.y&&a.y-o.y>d){u="swipeup"}if(a.x<o.x&&o.x-a.x>h){u="swiperight"}if(a.y<o.y&&o.y-a.y>d){u="swipedown"}if(a.x>o.x&&a.x-o.x>h){u="swipeleft"}if(u!=undefined&&r){a.x=0
a.y=0
o.x=0
o.y=0
r=false
var p=t.originalEvent
endEvnt={position:{x:i.touch_capable?p.touches[0].screenX:t.screenX,y:i.touch_capable?p.touches[0].screenY:t.screenY},offset:{x:i.touch_capable?p.touches[0].pageX-p.touches[0].target.offsetLeft:t.offsetX,y:i.touch_capable?p.touches[0].pageY-p.touches[0].target.offsetTop:t.offsetY},time:(new Date).getTime(),target:t.target}
var m=Math.abs(l.position.x-endEvnt.position.x),v=Math.abs(l.position.y-endEvnt.position.y)
var g={startEvnt:l,endEvnt:endEvnt,direction:u.replace("swipe",""),xAmount:m,yAmount:v,duration:endEvnt.time-l.time}
s=true
n.trigger("swipe",g).trigger(u,g)}}function c(t){n=e(t.target)
var a=""
n.data("callee3",arguments.callee)
if(s){var o=n.data("xthreshold"),u=n.data("ythreshold"),f=typeof o!=="undefined"&&o!==false&&parseInt(o)?parseInt(o):i.swipe_h_threshold,c=typeof u!=="undefined"&&u!==false&&parseInt(u)?parseInt(u):i.swipe_v_threshold
var h=t.originalEvent
endEvnt={position:{x:i.touch_capable?h.changedTouches[0].screenX:t.screenX,y:i.touch_capable?h.changedTouches[0].screenY:t.screenY},offset:{x:i.touch_capable?h.changedTouches[0].pageX-h.changedTouches[0].target.offsetLeft:t.offsetX,y:i.touch_capable?h.changedTouches[0].pageY-h.changedTouches[0].target.offsetTop:t.offsetY},time:(new Date).getTime(),target:t.target}
if(l.position.y>endEvnt.position.y&&l.position.y-endEvnt.position.y>c){a="swipeup"}if(l.position.x<endEvnt.position.x&&endEvnt.position.x-l.position.x>f){a="swiperight"}if(l.position.y<endEvnt.position.y&&endEvnt.position.y-l.position.y>c){a="swipedown"}if(l.position.x>endEvnt.position.x&&l.position.x-endEvnt.position.x>f){a="swipeleft"}var d=Math.abs(l.position.x-endEvnt.position.x),p=Math.abs(l.position.y-endEvnt.position.y)
var m={startEvnt:l,endEvnt:endEvnt,direction:a.replace("swipe",""),xAmount:d,yAmount:p,duration:endEvnt.time-l.time}
n.trigger("swipeend",m)}r=false
s=false}n.on(i.startevent,u)
n.on(i.moveevent,f)
n.on(i.endevent,c)},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.moveevent,e(this).data.callee2).off(i.endevent,e(this).data.callee3)}}
e.event.special.scrollstart={setup:function(){var t=this,n=e(t),r,s
function a(e,n){r=n
w(t,r?"scrollstart":"scrollend",e)}n.on(i.scrollevent,function(e){n.data("callee",arguments.callee)
if(!r){a(e,true)}clearTimeout(s)
s=setTimeout(function(){a(e,false)},50)})},remove:function(){e(this).off(i.scrollevent,e(this).data.callee)}}
var r=e(window),s,a,o,l,u,f={0:true,180:true}
if(i.orientation_support){var c=window.innerWidth||e(window).width(),h=window.innerHeight||e(window).height(),d=50
l=c>h&&c-h>d
u=f[window.orientation]
if(l&&u||!l&&!u){f={"-90":true,90:true}}}e.event.special.orientationchange=s={setup:function(){if(i.orientation_support){return false}o=a()
r.on("throttledresize",p)
return true},teardown:function(){if(i.orientation_support){return false}r.off("throttledresize",p)
return true},add:function(e){var t=e.handler
e.handler=function(e){e.orientation=a()
return t.apply(this,arguments)}}}
function p(){var e=a()
if(e!==o){o=e
r.trigger("orientationchange")}}e.event.special.orientationchange.orientation=a=function(){var e=true,t=document.documentElement
if(i.orientation_support){e=f[window.orientation]}else{e=t&&t.clientWidth/t.clientHeight<1.1}return e?"portrait":"landscape"}
e.event.special.throttledresize={setup:function(){e(this).on("resize",v)},teardown:function(){e(this).off("resize",v)}}
var m=250,v=function(){y=(new Date).getTime()
b=y-g
if(b>=m){g=y
e(this).trigger("throttledresize")}else{if(_){window.clearTimeout(_)}_=window.setTimeout(p,m-b)}},g=0,_,y,b
function w(t,n,i,r){var s=i.type
i.type=n
e.event.dispatch.call(t,i,r)
i.type=s}e.each({scrollend:"scrollstart",swipeup:"swipe",swiperight:"swipe",swipedown:"swipe",swipeleft:"swipe",swipeend:"swipe"},function(t,n,i){e.event.special[t]={setup:function(){e(this).on(n,e.noop)}}})})(jQuery)
"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),function(e){var t={init:function(t){return this.options=e.extend({},e.noty.defaults,t),this.options.layout=this.options.custom?e.noty.layouts.inline:e.noty.layouts[this.options.layout],e.noty.themes[this.options.theme]?this.options.theme=e.noty.themes[this.options.theme]:t.themeClassName=this.options.theme,delete t.layout,delete t.theme,this.options=e.extend({},this.options,this.options.layout.options),this.options.id="noty_"+(new Date).getTime()*Math.floor(1e6*Math.random()),this.options=e.extend({},this.options,t),this._build(),this},_build:function(){var t=e('<div class="noty_bar noty_type_'+this.options.type+'"></div>').attr("id",this.options.id)
if(t.append(this.options.template).find(".noty_text").html(this.options.text),this.$bar=null!==this.options.layout.parent.object?e(this.options.layout.parent.object).css(this.options.layout.parent.css).append(t):t,this.options.themeClassName&&this.$bar.addClass(this.options.themeClassName).addClass("noty_container_type_"+this.options.type),this.options.buttons){this.options.closeWith=[],this.options.timeout=!1
var n=e("<div/>").addClass("noty_buttons")
null!==this.options.layout.parent.object?this.$bar.find(".noty_bar").append(n):this.$bar.append(n)
var i=this
e.each(this.options.buttons,function(t,n){var r=e("<button/>").addClass(n.addClass?n.addClass:"gray").html(n.text).attr("id",n.id?n.id:"button-"+t).appendTo(i.$bar.find(".noty_buttons")).bind("click",function(){e.isFunction(n.onClick)&&n.onClick.call(r,i)})})}this.$message=this.$bar.find(".noty_message"),this.$closeButton=this.$bar.find(".noty_close"),this.$buttons=this.$bar.find(".noty_buttons"),e.noty.store[this.options.id]=this},show:function(){var t=this
return t.options.custom?t.options.custom.find(t.options.layout.container.selector).append(t.$bar):e(t.options.layout.container.selector).append(t.$bar),t.options.theme&&t.options.theme.style&&t.options.theme.style.apply(t),"function"===e.type(t.options.layout.css)?this.options.layout.css.apply(t.$bar):t.$bar.css(this.options.layout.css||{}),t.$bar.addClass(t.options.layout.addClass),t.options.layout.container.style.apply(e(t.options.layout.container.selector)),t.showing=!0,t.options.theme&&t.options.theme.style&&t.options.theme.callback.onShow.apply(this),e.inArray("click",t.options.closeWith)>-1&&t.$bar.css("cursor","pointer").one("click",function(e){t.stopPropagation(e),t.options.callback.onCloseClick&&t.options.callback.onCloseClick.apply(t),t.close()}),e.inArray("hover",t.options.closeWith)>-1&&t.$bar.one("mouseenter",function(){t.close()}),e.inArray("button",t.options.closeWith)>-1&&t.$closeButton.one("click",function(e){t.stopPropagation(e),t.close()}),-1==e.inArray("button",t.options.closeWith)&&t.$closeButton.remove(),t.options.callback.onShow&&t.options.callback.onShow.apply(t),t.$bar.animate(t.options.animation.open,t.options.animation.speed,t.options.animation.easing,function(){t.options.callback.afterShow&&t.options.callback.afterShow.apply(t),t.showing=!1,t.shown=!0}),t.options.timeout&&t.$bar.delay(t.options.timeout).promise().done(function(){t.close()}),this},close:function(){if(!(this.closed||this.$bar&&this.$bar.hasClass("i-am-closing-now"))){var t=this
if(this.showing)return t.$bar.queue(function(){t.close.apply(t)}),void 0
if(!this.shown&&!this.showing){var n=[]
return e.each(e.noty.queue,function(e,i){i.options.id!=t.options.id&&n.push(i)}),e.noty.queue=n,void 0}t.$bar.addClass("i-am-closing-now"),t.options.callback.onClose&&t.options.callback.onClose.apply(t),t.$bar.clearQueue().stop().animate(t.options.animation.close,t.options.animation.speed,t.options.animation.easing,function(){t.options.callback.afterClose&&t.options.callback.afterClose.apply(t)}).promise().done(function(){t.options.modal&&(e.notyRenderer.setModalCount(-1),0==e.notyRenderer.getModalCount()&&e(".noty_modal").fadeOut("fast",function(){e(this).remove()})),e.notyRenderer.setLayoutCountFor(t,-1),0==e.notyRenderer.getLayoutCountFor(t)&&e(t.options.layout.container.selector).remove(),"undefined"!=typeof t.$bar&&null!==t.$bar&&(t.$bar.remove(),t.$bar=null,t.closed=!0),delete e.noty.store[t.options.id],t.options.theme.callback&&t.options.theme.callback.onClose&&t.options.theme.callback.onClose.apply(t),t.options.dismissQueue||(e.noty.ontap=!0,e.notyRenderer.render()),t.options.maxVisible>0&&t.options.dismissQueue&&e.notyRenderer.render()})}},setText:function(e){return this.closed||(this.options.text=e,this.$bar.find(".noty_text").html(e)),this},setType:function(e){return this.closed||(this.options.type=e,this.options.theme.style.apply(this),this.options.theme.callback.onShow.apply(this)),this},setTimeout:function(e){if(!this.closed){var t=this
this.options.timeout=e,t.$bar.delay(t.options.timeout).promise().done(function(){t.close()})}return this},stopPropagation:function(e){e=e||window.event,"undefined"!=typeof e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},closed:!1,showing:!1,shown:!1}
e.notyRenderer={},e.notyRenderer.init=function(n){var i=Object.create(t).init(n)
return i.options.killer&&e.noty.closeAll(),i.options.force?e.noty.queue.unshift(i):e.noty.queue.push(i),e.notyRenderer.render(),"object"==e.noty.returns?i:i.options.id},e.notyRenderer.render=function(){var t=e.noty.queue[0]
"object"===e.type(t)?t.options.dismissQueue?t.options.maxVisible>0?e(t.options.layout.container.selector+" li").length<t.options.maxVisible&&e.notyRenderer.show(e.noty.queue.shift()):e.notyRenderer.show(e.noty.queue.shift()):e.noty.ontap&&(e.notyRenderer.show(e.noty.queue.shift()),e.noty.ontap=!1):e.noty.ontap=!0},e.notyRenderer.show=function(t){t.options.modal&&(e.notyRenderer.createModalFor(t),e.notyRenderer.setModalCount(1)),t.options.custom?0==t.options.custom.find(t.options.layout.container.selector).length?t.options.custom.append(e(t.options.layout.container.object).addClass("i-am-new")):t.options.custom.find(t.options.layout.container.selector).removeClass("i-am-new"):0==e(t.options.layout.container.selector).length?e("body").append(e(t.options.layout.container.object).addClass("i-am-new")):e(t.options.layout.container.selector).removeClass("i-am-new"),e.notyRenderer.setLayoutCountFor(t,1),t.show()},e.notyRenderer.createModalFor=function(t){if(0==e(".noty_modal").length){var n=e("<div/>").addClass("noty_modal").addClass(t.options.theme).data("noty_modal_count",0)
t.options.theme.modal&&t.options.theme.modal.css&&n.css(t.options.theme.modal.css),n.prependTo(e("body")).fadeIn("fast")}},e.notyRenderer.getLayoutCountFor=function(t){return e(t.options.layout.container.selector).data("noty_layout_count")||0},e.notyRenderer.setLayoutCountFor=function(t,n){return e(t.options.layout.container.selector).data("noty_layout_count",e.notyRenderer.getLayoutCountFor(t)+n)},e.notyRenderer.getModalCount=function(){return e(".noty_modal").data("noty_modal_count")||0},e.notyRenderer.setModalCount=function(t){return e(".noty_modal").data("noty_modal_count",e.notyRenderer.getModalCount()+t)},e.fn.noty=function(t){return t.custom=e(this),e.notyRenderer.init(t)},e.noty={},e.noty.queue=[],e.noty.ontap=!0,e.noty.layouts={},e.noty.themes={},e.noty.returns="object",e.noty.store={},e.noty.get=function(t){return e.noty.store.hasOwnProperty(t)?e.noty.store[t]:!1},e.noty.close=function(t){return e.noty.get(t)?e.noty.get(t).close():!1},e.noty.setText=function(t,n){return e.noty.get(t)?e.noty.get(t).setText(n):!1},e.noty.setType=function(t,n){return e.noty.get(t)?e.noty.get(t).setType(n):!1},e.noty.clearQueue=function(){e.noty.queue=[]},e.noty.closeAll=function(){e.noty.clearQueue(),e.each(e.noty.store,function(e,t){t.close()})}
var n=window.alert
e.noty.consumeAlert=function(t){window.alert=function(n){t?t.text=n:t={text:n},e.notyRenderer.init(t)}},e.noty.stopConsumeAlert=function(){window.alert=n},e.noty.defaults={layout:"top",theme:"defaultTheme",type:"alert",text:"",dismissQueue:!0,template:'<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',animation:{open:{height:"toggle"},close:{height:"toggle"},easing:"swing",speed:500},timeout:!1,force:!1,modal:!1,maxVisible:5,killer:!1,closeWith:["click"],callback:{onShow:function(){},afterShow:function(){},onClose:function(){},afterClose:function(){},onCloseClick:function(){}},buttons:!1},e(window).resize(function(){e.each(e.noty.layouts,function(t,n){n.container.style.apply(e(n.container.selector))})})}(jQuery),window.noty=function(e){return jQuery.notyRenderer.init(e)},function(e){e.noty.layouts.bottom={name:"bottom",options:{},container:{object:'<ul id="noty_bottom_layout_container" />',selector:"ul#noty_bottom_layout_container",style:function(){e(this).css({bottom:0,left:"5%",position:"fixed",width:"90%",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:9999999})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none"},addClass:""}}(jQuery),function(e){e.noty.layouts.bottomCenter={name:"bottomCenter",options:{},container:{object:'<ul id="noty_bottomCenter_layout_container" />',selector:"ul#noty_bottomCenter_layout_container",style:function(){e(this).css({bottom:20,left:0,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),e(this).css({left:(e(window).width()-e(this).outerWidth(!1))/2+"px"})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(e){e.noty.layouts.bottomLeft={name:"bottomLeft",options:{},container:{object:'<ul id="noty_bottomLeft_layout_container" />',selector:"ul#noty_bottomLeft_layout_container",style:function(){e(this).css({bottom:20,left:20,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),window.innerWidth<600&&e(this).css({left:5})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(e){e.noty.layouts.bottomRight={name:"bottomRight",options:{},container:{object:'<ul id="noty_bottomRight_layout_container" />',selector:"ul#noty_bottomRight_layout_container",style:function(){e(this).css({bottom:20,right:20,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),window.innerWidth<600&&e(this).css({right:5})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(e){e.noty.layouts.center={name:"center",options:{},container:{object:'<ul id="noty_center_layout_container" />',selector:"ul#noty_center_layout_container",style:function(){e(this).css({position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7})
var t=e(this).clone().css({visibility:"hidden",display:"block",position:"absolute",top:0,left:0}).attr("id","dupe")
e("body").append(t),t.find(".i-am-closing-now").remove(),t.find("li").css("display","block")
var n=t.height()
t.remove(),e(this).hasClass("i-am-new")?e(this).css({left:(e(window).width()-e(this).outerWidth(!1))/2+"px",top:(e(window).height()-n)/2+"px"}):e(this).animate({left:(e(window).width()-e(this).outerWidth(!1))/2+"px",top:(e(window).height()-n)/2+"px"},500)}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(e){e.noty.layouts.centerLeft={name:"centerLeft",options:{},container:{object:'<ul id="noty_centerLeft_layout_container" />',selector:"ul#noty_centerLeft_layout_container",style:function(){e(this).css({left:20,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7})
var t=e(this).clone().css({visibility:"hidden",display:"block",position:"absolute",top:0,left:0}).attr("id","dupe")
e("body").append(t),t.find(".i-am-closing-now").remove(),t.find("li").css("display","block")
var n=t.height()
t.remove(),e(this).hasClass("i-am-new")?e(this).css({top:(e(window).height()-n)/2+"px"}):e(this).animate({top:(e(window).height()-n)/2+"px"},500),window.innerWidth<600&&e(this).css({left:5})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(e){e.noty.layouts.centerRight={name:"centerRight",options:{},container:{object:'<ul id="noty_centerRight_layout_container" />',selector:"ul#noty_centerRight_layout_container",style:function(){e(this).css({right:20,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7})
var t=e(this).clone().css({visibility:"hidden",display:"block",position:"absolute",top:0,left:0}).attr("id","dupe")
e("body").append(t),t.find(".i-am-closing-now").remove(),t.find("li").css("display","block")
var n=t.height()
t.remove(),e(this).hasClass("i-am-new")?e(this).css({top:(e(window).height()-n)/2+"px"}):e(this).animate({top:(e(window).height()-n)/2+"px"},500),window.innerWidth<600&&e(this).css({right:5})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(e){e.noty.layouts.inline={name:"inline",options:{},container:{object:'<ul class="noty_inline_layout_container" />',selector:"ul.noty_inline_layout_container",style:function(){e(this).css({width:"100%",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:9999999})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none"},addClass:""}}(jQuery),function(e){e.noty.layouts.top={name:"top",options:{},container:{object:'<ul id="noty_top_layout_container" />',selector:"ul#noty_top_layout_container",style:function(){e(this).css({top:0,left:"5%",position:"fixed",width:"90%",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:9999999})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none"},addClass:""}}(jQuery),function(e){e.noty.layouts.topCenter={name:"topCenter",options:{},container:{object:'<ul id="noty_topCenter_layout_container" />',selector:"ul#noty_topCenter_layout_container",style:function(){e(this).css({top:20,left:0,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),e(this).css({left:(e(window).width()-e(this).outerWidth(!1))/2+"px"})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(e){e.noty.layouts.topLeft={name:"topLeft",options:{},container:{object:'<ul id="noty_topLeft_layout_container" />',selector:"ul#noty_topLeft_layout_container",style:function(){e(this).css({top:20,left:20,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),window.innerWidth<600&&e(this).css({left:5})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(e){e.noty.layouts.topRight={name:"topRight",options:{},container:{object:'<ul id="noty_topRight_layout_container" />',selector:"ul#noty_topRight_layout_container",style:function(){e(this).css({top:20,right:20,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),window.innerWidth<600&&e(this).css({right:5})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(e){e.noty.themes.defaultTheme={name:"defaultTheme",helpers:{borderFix:function(){if(this.options.dismissQueue){var t=this.options.layout.container.selector+" "+this.options.layout.parent.selector
switch(this.options.layout.name){case"top":e(t).css({borderRadius:"0px 0px 0px 0px"}),e(t).last().css({borderRadius:"0px 0px 5px 5px"})
break
case"topCenter":case"topLeft":case"topRight":case"bottomCenter":case"bottomLeft":case"bottomRight":case"center":case"centerLeft":case"centerRight":case"inline":e(t).css({borderRadius:"0px 0px 0px 0px"}),e(t).first().css({"border-top-left-radius":"5px","border-top-right-radius":"5px"}),e(t).last().css({"border-bottom-left-radius":"5px","border-bottom-right-radius":"5px"})
break
case"bottom":e(t).css({borderRadius:"0px 0px 0px 0px"}),e(t).first().css({borderRadius:"5px 5px 0px 0px"})}}}},modal:{css:{position:"fixed",width:"100%",height:"100%",backgroundColor:"#000",zIndex:1e4,opacity:.6,display:"none",left:0,top:0}},style:function(){switch(this.$bar.css({overflow:"hidden",background:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAYAAAAPOoFWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPZJREFUeNq81tsOgjAMANB2ov7/7ypaN7IlIwi9rGuT8QSc9EIDAsAznxvY4pXPKr05RUE5MEVB+TyWfCEl9LZApYopCmo9C4FKSMtYoI8Bwv79aQJU4l6hXXCZrQbokJEksxHo9KMOgc6w1atHXM8K9DVC7FQnJ0i8iK3QooGgbnyKgMDygBWyYFZoqx4qS27KqLZJjA1D0jK6QJcYEQEiWv9PGkTsbqxQ8oT+ZtZB6AkdsJnQDnMoHXHLGKOgDYuCWmYhEERCI5gaamW0bnHdA3k2ltlIN+2qKRyCND0bhqSYCyTB3CAOc4WusBEIpkeBuPgJMAAX8Hs1NfqHRgAAAABJRU5ErkJggg==') repeat-x scroll left top #fff"}),this.$message.css({fontSize:"13px",lineHeight:"16px",textAlign:"center",padding:"8px 10px 9px",width:"auto",position:"relative"}),this.$closeButton.css({position:"absolute",top:4,right:4,width:10,height:10,background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAATpJREFUeNoszrFqVFEUheG19zlz7sQ7ijMQBAvfYBqbpJCoZSAQbOwEE1IHGytbLQUJ8SUktW8gCCFJMSGSNxCmFBJO7j5rpXD6n5/P5vM53H3b3T9LOiB5AQDuDjM7BnA7DMPHDGBH0nuSzwHsRcRVRNRSysuU0i6AOwA/02w2+9Fae00SEbEh6SGAR5K+k3zWWptKepCm0+kpyRoRGyRBcpPkDsn1iEBr7drdP2VJZyQXERGSPpiZAViTBACXKaV9kqd5uVzCzO5KKb/d/UZSDwD/eyxqree1VqSu6zKAF2Z2RPJJaw0rAkjOJT0m+SuT/AbgDcmnkmBmfwAsJL1dXQ8lWY6IGwB1ZbrOOb8zs8thGP4COFwx/mE8Ho9Go9ErMzvJOW/1fY/JZIJSypqZfXX3L13X9fcDAKJct1sx3OiuAAAAAElFTkSuQmCC)",display:"none",cursor:"pointer"}),this.$buttons.css({padding:5,textAlign:"right",borderTop:"1px solid #ccc",backgroundColor:"#fff"}),this.$buttons.find("button").css({marginLeft:5}),this.$buttons.find("button:first").css({marginLeft:0}),this.$bar.bind({mouseenter:function(){e(this).find(".noty_close").stop().fadeTo("normal",1)},mouseleave:function(){e(this).find(".noty_close").stop().fadeTo("normal",0)}}),this.options.layout.name){case"top":this.$bar.css({borderRadius:"0px 0px 5px 5px",borderBottom:"2px solid #eee",borderLeft:"2px solid #eee",borderRight:"2px solid #eee",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"})
break
case"topCenter":case"center":case"bottomCenter":case"inline":this.$bar.css({borderRadius:"5px",border:"1px solid #eee",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}),this.$message.css({fontSize:"13px",textAlign:"center"})
break
case"topLeft":case"topRight":case"bottomLeft":case"bottomRight":case"centerLeft":case"centerRight":this.$bar.css({borderRadius:"5px",border:"1px solid #eee",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}),this.$message.css({fontSize:"13px",textAlign:"left"})
break
case"bottom":this.$bar.css({borderRadius:"5px 5px 0px 0px",borderTop:"2px solid #eee",borderLeft:"2px solid #eee",borderRight:"2px solid #eee",boxShadow:"0 -2px 4px rgba(0, 0, 0, 0.1)"})
break
default:this.$bar.css({border:"2px solid #eee",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"})}switch(this.options.type){case"alert":case"notification":this.$bar.css({backgroundColor:"#FFF",borderColor:"#CCC",color:"#444"})
break
case"warning":this.$bar.css({backgroundColor:"#FFEAA8",borderColor:"#FFC237",color:"#826200"}),this.$buttons.css({borderTop:"1px solid #FFC237"})
break
case"error":this.$bar.css({backgroundColor:"red",borderColor:"darkred",color:"#FFF"}),this.$message.css({fontWeight:"bold"}),this.$buttons.css({borderTop:"1px solid darkred"})
break
case"information":this.$bar.css({backgroundColor:"#57B7E2",borderColor:"#0B90C4",color:"#FFF"}),this.$buttons.css({borderTop:"1px solid #0B90C4"})
break
case"success":this.$bar.css({backgroundColor:"lightgreen",borderColor:"#50C24E",color:"darkgreen"}),this.$buttons.css({borderTop:"1px solid #50C24E"})
break
default:this.$bar.css({backgroundColor:"#FFF",borderColor:"#CCC",color:"#444"})}},callback:{onShow:function(){e.noty.themes.defaultTheme.helpers.borderFix.apply(this)},onClose:function(){e.noty.themes.defaultTheme.helpers.borderFix.apply(this)}}}}(jQuery);(function(e){var t,n={},i={16:false,18:false,17:false,91:false},r="all",s={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},a={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220},o=function(e){return a[e]||e.toUpperCase().charCodeAt(0)},l=[]
for(t=1;t<20;t++)a["f"+t]=111+t
function u(e,t){var n=e.length
while(n--)if(e[n]===t)return n
return-1}function f(e,t){if(e.length!=t.length)return false
for(var n=0;n<e.length;n++){if(e[n]!==t[n])return false}return true}var c={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"}
function h(e){for(t in i)i[t]=e[c[t]]}function d(e){var t,r,a,o,f,c
t=e.keyCode
if(u(l,t)==-1){l.push(t)}if(t==93||t==224)t=91
if(t in i){i[t]=true
for(a in s)if(s[a]==t)v[a]=true
return}h(e)
if(!v.filter.call(this,e))return
if(!(t in n))return
c=x()
for(o=0;o<n[t].length;o++){r=n[t][o]
if(true){f=r.mods.length>0
for(a in i)if(!i[a]&&u(r.mods,+a)>-1||i[a]&&u(r.mods,+a)==-1)f=false
if(r.mods.length==0&&!i[16]&&!i[18]&&!i[17]&&!i[91]||f){if(r.method(e,r)===false){if(e.preventDefault)e.preventDefault()
else e.returnValue=false
if(e.stopPropagation)e.stopPropagation()
if(e.cancelBubble)e.cancelBubble=true}}}}}function p(e){var t=e.keyCode,n,r=u(l,t)
if(r>=0){l.splice(r,1)}if(t==93||t==224)t=91
if(t in i){i[t]=false
for(n in s)if(s[n]==t)v[n]=false}}function m(){for(t in i)i[t]=false
for(t in s)v[t]=false}function v(e,t,i){var r,s
r=M(e)
if(i===undefined){i=t
t="all"}for(var a=0;a<r.length;a++){s=[]
e=r[a].split("+")
if(e.length>1){s=T(e)
e=[e[e.length-1]]}e=e[0]
e=o(e)
if(!(e in n))n[e]=[]
n[e].push({shortcut:r[a],scope:t,method:i,key:r[a],mods:s})}}function g(e,t){var i,r,s=[],a,l,u
i=M(e)
for(l=0;l<i.length;l++){r=i[l].split("+")
if(r.length>1){s=T(r)
e=r[r.length-1]}e=o(e)
if(t===undefined){t=x()}if(!n[e]){return}for(a in n[e]){u=n[e][a]
if(u.scope===t&&f(u.mods,s)){n[e][a]={}}}}}function _(e){if(typeof e=="string"){e=o(e)}return u(l,e)!=-1}function y(){return l.slice(0)}function b(e){var t=(e.target||e.srcElement).tagName
return!(t=="INPUT"||t=="SELECT"||t=="TEXTAREA")}for(t in s)v[t]=false
function w(e){r=e||"all"}function x(){return r||"all"}function k(e){var t,i,r
for(t in n){i=n[t]
for(r=0;r<i.length;){if(i[r].scope===e)i.splice(r,1)
else r++}}}function M(e){var t
e=e.replace(/\s/g,"")
t=e.split(",")
if(t[t.length-1]==""){t[t.length-2]+=","}return t}function T(e){var t=e.slice(0,e.length-1)
for(var n=0;n<t.length;n++)t[n]=s[t[n]]
return t}function L(e,t,n){if(e.addEventListener)e.addEventListener(t,n,false)
else if(e.attachEvent)e.attachEvent("on"+t,function(){n(window.event)})}L(document,"keydown",function(e){d(e)})
L(document,"keyup",p)
L(window,"focus",m)
var S=e.key
function D(){var t=e.key
e.key=S
return t}e.key=v
e.key.setScope=w
e.key.getScope=x
e.key.deleteScope=k
e.key.filter=b
e.key.isPressed=_
e.key.getPressedKeyCodes=y
e.key.noConflict=D
e.key.unbind=g
if(typeof module!=="undefined")module.exports=key})(this)
var LZString={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_f:String.fromCharCode,compressToBase64:function(e){if(e==null)return""
var t=""
var n,i,r,s,a,o,l
var u=0
e=LZString.compress(e)
while(u<e.length*2){if(u%2==0){n=e.charCodeAt(u/2)>>8
i=e.charCodeAt(u/2)&255
if(u/2+1<e.length)r=e.charCodeAt(u/2+1)>>8
else r=NaN}else{n=e.charCodeAt((u-1)/2)&255
if((u+1)/2<e.length){i=e.charCodeAt((u+1)/2)>>8
r=e.charCodeAt((u+1)/2)&255}else i=r=NaN}u+=3
s=n>>2
a=(n&3)<<4|i>>4
o=(i&15)<<2|r>>6
l=r&63
if(isNaN(i)){o=l=64}else if(isNaN(r)){l=64}t=t+LZString._keyStr.charAt(s)+LZString._keyStr.charAt(a)+LZString._keyStr.charAt(o)+LZString._keyStr.charAt(l)}return t},decompressFromBase64:function(e){if(e==null)return""
var t="",n=0,i,r,s,a,o,l,u,f,c=0,h=LZString._f
e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"")
while(c<e.length){o=LZString._keyStr.indexOf(e.charAt(c++))
l=LZString._keyStr.indexOf(e.charAt(c++))
u=LZString._keyStr.indexOf(e.charAt(c++))
f=LZString._keyStr.indexOf(e.charAt(c++))
r=o<<2|l>>4
s=(l&15)<<4|u>>2
a=(u&3)<<6|f
if(n%2==0){i=r<<8
if(u!=64){t+=h(i|s)}if(f!=64){i=a<<8}}else{t=t+h(i|r)
if(u!=64){i=s<<8}if(f!=64){t+=h(i|a)}}n+=3}return LZString.decompress(t)},compressToUTF16:function(e){if(e==null)return""
var t="",n,i,r,s=0,a=LZString._f
e=LZString.compress(e)
for(n=0;n<e.length;n++){i=e.charCodeAt(n)
switch(s++){case 0:t+=a((i>>1)+32)
r=(i&1)<<14
break
case 1:t+=a(r+(i>>2)+32)
r=(i&3)<<13
break
case 2:t+=a(r+(i>>3)+32)
r=(i&7)<<12
break
case 3:t+=a(r+(i>>4)+32)
r=(i&15)<<11
break
case 4:t+=a(r+(i>>5)+32)
r=(i&31)<<10
break
case 5:t+=a(r+(i>>6)+32)
r=(i&63)<<9
break
case 6:t+=a(r+(i>>7)+32)
r=(i&127)<<8
break
case 7:t+=a(r+(i>>8)+32)
r=(i&255)<<7
break
case 8:t+=a(r+(i>>9)+32)
r=(i&511)<<6
break
case 9:t+=a(r+(i>>10)+32)
r=(i&1023)<<5
break
case 10:t+=a(r+(i>>11)+32)
r=(i&2047)<<4
break
case 11:t+=a(r+(i>>12)+32)
r=(i&4095)<<3
break
case 12:t+=a(r+(i>>13)+32)
r=(i&8191)<<2
break
case 13:t+=a(r+(i>>14)+32)
r=(i&16383)<<1
break
case 14:t+=a(r+(i>>15)+32,(i&32767)+32)
s=0
break}}return t+a(r+32)},decompressFromUTF16:function(e){if(e==null)return""
var t="",n,i,r=0,s=0,a=LZString._f
while(s<e.length){i=e.charCodeAt(s)-32
switch(r++){case 0:n=i<<1
break
case 1:t+=a(n|i>>14)
n=(i&16383)<<2
break
case 2:t+=a(n|i>>13)
n=(i&8191)<<3
break
case 3:t+=a(n|i>>12)
n=(i&4095)<<4
break
case 4:t+=a(n|i>>11)
n=(i&2047)<<5
break
case 5:t+=a(n|i>>10)
n=(i&1023)<<6
break
case 6:t+=a(n|i>>9)
n=(i&511)<<7
break
case 7:t+=a(n|i>>8)
n=(i&255)<<8
break
case 8:t+=a(n|i>>7)
n=(i&127)<<9
break
case 9:t+=a(n|i>>6)
n=(i&63)<<10
break
case 10:t+=a(n|i>>5)
n=(i&31)<<11
break
case 11:t+=a(n|i>>4)
n=(i&15)<<12
break
case 12:t+=a(n|i>>3)
n=(i&7)<<13
break
case 13:t+=a(n|i>>2)
n=(i&3)<<14
break
case 14:t+=a(n|i>>1)
n=(i&1)<<15
break
case 15:t+=a(n|i)
r=0
break}s++}return LZString.decompress(t)},compress:function(e){if(e==null)return""
var t,n,i={},r={},s="",a="",o="",l=2,u=3,f=2,c="",h=0,d=0,p,m=LZString._f
for(p=0;p<e.length;p+=1){s=e.charAt(p)
if(!Object.prototype.hasOwnProperty.call(i,s)){i[s]=u++
r[s]=true}a=o+s
if(Object.prototype.hasOwnProperty.call(i,a)){o=a}else{if(Object.prototype.hasOwnProperty.call(r,o)){if(o.charCodeAt(0)<256){for(t=0;t<f;t++){h=h<<1
if(d==15){d=0
c+=m(h)
h=0}else{d++}}n=o.charCodeAt(0)
for(t=0;t<8;t++){h=h<<1|n&1
if(d==15){d=0
c+=m(h)
h=0}else{d++}n=n>>1}}else{n=1
for(t=0;t<f;t++){h=h<<1|n
if(d==15){d=0
c+=m(h)
h=0}else{d++}n=0}n=o.charCodeAt(0)
for(t=0;t<16;t++){h=h<<1|n&1
if(d==15){d=0
c+=m(h)
h=0}else{d++}n=n>>1}}l--
if(l==0){l=Math.pow(2,f)
f++}delete r[o]}else{n=i[o]
for(t=0;t<f;t++){h=h<<1|n&1
if(d==15){d=0
c+=m(h)
h=0}else{d++}n=n>>1}}l--
if(l==0){l=Math.pow(2,f)
f++}i[a]=u++
o=String(s)}}if(o!==""){if(Object.prototype.hasOwnProperty.call(r,o)){if(o.charCodeAt(0)<256){for(t=0;t<f;t++){h=h<<1
if(d==15){d=0
c+=m(h)
h=0}else{d++}}n=o.charCodeAt(0)
for(t=0;t<8;t++){h=h<<1|n&1
if(d==15){d=0
c+=m(h)
h=0}else{d++}n=n>>1}}else{n=1
for(t=0;t<f;t++){h=h<<1|n
if(d==15){d=0
c+=m(h)
h=0}else{d++}n=0}n=o.charCodeAt(0)
for(t=0;t<16;t++){h=h<<1|n&1
if(d==15){d=0
c+=m(h)
h=0}else{d++}n=n>>1}}l--
if(l==0){l=Math.pow(2,f)
f++}delete r[o]}else{n=i[o]
for(t=0;t<f;t++){h=h<<1|n&1
if(d==15){d=0
c+=m(h)
h=0}else{d++}n=n>>1}}l--
if(l==0){l=Math.pow(2,f)
f++}}n=2
for(t=0;t<f;t++){h=h<<1|n&1
if(d==15){d=0
c+=m(h)
h=0}else{d++}n=n>>1}while(true){h=h<<1
if(d==15){c+=m(h)
break}else d++}return c},decompress:function(e){if(e==null)return""
if(e=="")return null
var t=[],n,i=4,r=4,s=3,a="",o="",l,u,f,c,h,d,p,m=LZString._f,v={string:e,val:e.charCodeAt(0),position:32768,index:1}
for(l=0;l<3;l+=1){t[l]=l}f=0
h=Math.pow(2,2)
d=1
while(d!=h){c=v.val&v.position
v.position>>=1
if(v.position==0){v.position=32768
v.val=v.string.charCodeAt(v.index++)}f|=(c>0?1:0)*d
d<<=1}switch(n=f){case 0:f=0
h=Math.pow(2,8)
d=1
while(d!=h){c=v.val&v.position
v.position>>=1
if(v.position==0){v.position=32768
v.val=v.string.charCodeAt(v.index++)}f|=(c>0?1:0)*d
d<<=1}p=m(f)
break
case 1:f=0
h=Math.pow(2,16)
d=1
while(d!=h){c=v.val&v.position
v.position>>=1
if(v.position==0){v.position=32768
v.val=v.string.charCodeAt(v.index++)}f|=(c>0?1:0)*d
d<<=1}p=m(f)
break
case 2:return""}t[3]=p
u=o=p
while(true){if(v.index>v.string.length){return""}f=0
h=Math.pow(2,s)
d=1
while(d!=h){c=v.val&v.position
v.position>>=1
if(v.position==0){v.position=32768
v.val=v.string.charCodeAt(v.index++)}f|=(c>0?1:0)*d
d<<=1}switch(p=f){case 0:f=0
h=Math.pow(2,8)
d=1
while(d!=h){c=v.val&v.position
v.position>>=1
if(v.position==0){v.position=32768
v.val=v.string.charCodeAt(v.index++)}f|=(c>0?1:0)*d
d<<=1}t[r++]=m(f)
p=r-1
i--
break
case 1:f=0
h=Math.pow(2,16)
d=1
while(d!=h){c=v.val&v.position
v.position>>=1
if(v.position==0){v.position=32768
v.val=v.string.charCodeAt(v.index++)}f|=(c>0?1:0)*d
d<<=1}t[r++]=m(f)
p=r-1
i--
break
case 2:return o}if(i==0){i=Math.pow(2,s)
s++}if(t[p]){a=t[p]}else{if(p===r){a=u+u.charAt(0)}else{return null}}o+=a
t[r++]=u+a.charAt(0)
i--
u=a
if(i==0){i=Math.pow(2,s)
s++}}}}
if(typeof module!=="undefined"&&module!=null){module.exports=LZString}var Spade=function e(){this.stack=[]
this.playback=[]
this.speed=1}
Spade.prototype={track:function(e){this.target=e
var t=this
var n=document.createElement("div")
keyHook=null
if(e.textInput&&e.textInput.getElement){keyHook=e.textInput.getElement()}else{keyHook=e}keyHook.addEventListener("keydown",function(e){t.createEvent(t.target)})
keyHook.addEventListener("keyup",function(e){t.createEvent(t.target)})
e.addEventListener("mouseup",function(e){t.createEvent(t.target)})},createEvent:function(e){if(e.getValue){this.stack.push({startPos:e.selection.getCursor(),endPos:e.selection.getSelectionAnchor(),content:e.getValue(),timestamp:(new Date).getTime()})}else{this.stack.push({startPos:e.selectionStart,endPos:e.selectionEnd,content:e.value,timestamp:(new Date).getTime()})}},compile:function(){var e=[]
if(this.stack.length>0){var t=this.stack[0].timestamp
var n=0
var i=0
for(var r=0;r<this.stack.length;r++){var s=this.stack[r]
var a=s.timestamp-t
var o=""
var l=null
var u=null
var f=0
if(r>=1){var c=this.stack[r-1]
var h=false
for(var d in c){if(d!="timestamp"){if(typeof c[d]==="string"){if(c[d]!==s[d]){h=true}}else{for(var p in c[d]){if(s[d][p]!==undefined){if(c[d][p]!==s[d][p]){h=true}}else{console.warn("Warning: c[key][key2] doesn't exist, but p[key][key2] does.")
h=true}}}}}if(!h){i++
continue}n++
if(c.content!=s.content){for(var m=0;m<Math.max(c.content.length,s.content.length);m++){if(c.content.charAt(m)===s.content.charAt(m)){if(l!=null){o+=s.content.charAt(m)
f++}}else{o+=s.content.charAt(m)
if(l===null){l=m}f++}}for(var m=0;m<Math.min(c.content.length,s.content.length)-l;m++){if(c.content.charAt(c.content.length-1-m)!==s.content.charAt(s.content.length-1-m)){if(u==null){u=m
break}}}if(u===null){u=Math.min(c.content.length,s.content.length)-l}o=o.substring(0,o.length-u)}}else{o=s.content
l=0
u=o.length}e.push({timestamp:a,difContent:o,difFIndex:l,difEIndex:u,selFIndex:s.startPos,selEIndex:s.endPos})}}else{}return e},renderTime:function(e,t,n){if(e.length===0){console.warn("SPADE: No events to play.")
return}var i=e[e.length-1].timestamp
var r=e[0].difContent
for(var s=1;s<e.length;s++){if(n*i<e[s].timestamp){break}var a=e[s]
var o=r
if(a.difFIndex!==null&&a.difEIndex!==null){r=o.substring(0,a.difFIndex)+a.difContent+o.substring(o.length-a.difEIndex,o.length)}}var l={result:r}
if(a){l["selFIndex"]=a.selFIndex
l["selEIndex"]=a.selEIndex}return l},play:function(e,t,n){n=n||0
if(e.length===0){console.warn("SPADE: No events to play.")
return}if(t.setValue){t.setValue(this.renderTime(e,t,n).result)}else{t.value=this.renderTime(e,t,n).result}e=e.slice()
e.shift()
var i,r
var s=e[e.length-1].timestamp
var a=n*s
this.elapsedTime=a
var o=(new Date).getTime()
this.playback=playbackInterval=setInterval(function(){i=(new Date).getTime()
r=i-o
r*=this.speed
a+=r
var n=e.filter(function(e){return e.timestamp>=a-r&&e.timestamp<a})
this.elapsedTime=a
for(var s=0;s<n.length;s++){var l=n[s]
var u=null
if(t.getValue){u=t.getValue()}else{u=t.value}if(l.difFIndex!==null&&l.difEIndex!==null){if(t.setValue){t.setValue(u.substring(0,l.difFIndex)+l.difContent+u.substring(u.length-l.difEIndex,u.length))}else{t.value=u.substring(0,l.difFIndex)+l.difContent+u.substring(u.length-l.difEIndex,u.length)}}if(t.selection&&t.selection.moveCursorToPosition){t.selection.moveCursorToPosition(l.selFIndex)
t.selection.setSelectionAnchor(l.selEIndex.row,l.selEIndex.column)}else{t.focus()
t.setSelectionRange(l.selFIndex,l.selEIndex)}}if(e[e.length-1]===undefined||a>e[e.length-1].timestamp){clearInterval(playbackInterval)}o=i}.bind(this),10)},debugPlay:function(e){var t=document.createElement("textarea")
t.zIndex=9999
t.style.width="512px"
t.style.height="512px"
t.style.position="absolute"
t.style.left="100px"
t.style.top="100px"
document.body.appendChild(t)
this.play(e,t)},condense:function(e){var t=[]
for(var n=0;n<e.length;n++){var i=e[n]
t.push([i.timestamp,i.difContent,i.difFIndex,i.difEIndex,i.selFIndex.row,i.selFIndex.column,i.selEIndex.row,i.selEIndex.column])}return t},expand:function(e){var t=[]
for(var n=0;n<e.length;n++){var i=e[n]
t.push({timestamp:i[0],difContent:i[1],difFIndex:i[2],difEIndex:i[3],selFIndex:{row:i[4],column:i[5]},selEIndex:{row:i[6],column:i[7]}})}return t}};(function(e,t){"use strict"
if(typeof define==="function"&&define.amd){define(["exports"],t)}else if(typeof exports!=="undefined"){t(exports)}else{t(e.string_score={})}})(this,function(e){"use strict"
function t(e,t,n){if(e==t){return 1}if(t==""){return 0}var i=0,r=t.length,s=e.length,a,o,l=1,u
for(var f=0,c,h,d,p,m,v;f<r;++f){d=t.charAt(f)
p=e.indexOf(d.toLowerCase())
m=e.indexOf(d.toUpperCase())
v=Math.min(p,m)
h=v>-1?v:Math.max(p,m)
if(h===-1){if(n){l+=1-n
continue}else{return 0}}else{c=.1}if(e[h]===d){c+=.1}if(h===0){c+=.6
if(f===0){a=1}}else{if(e.charAt(h-1)===" "){c+=.8}}e=e.substring(h+1,s)
i+=c}o=i/r
u=(o*(r/s)+o)/2
u/=l
if(a&&u+.15<1){u+=.15}return u}e.score=t});(function(e,t){typeof exports==="object"&&typeof module!=="undefined"?module.exports=t():typeof define==="function"&&define.amd?define(t):e.Vue=t()})(this,function(){"use strict"
function e(e){return e==null?"":typeof e==="object"?JSON.stringify(e,null,2):String(e)}function t(e){var t=parseFloat(e,10)
return t||t===0?t:e}function n(e,t){var n=Object.create(null)
var i=e.split(",")
for(var r=0;r<i.length;r++){n[i[r]]=true}return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}var i=n("slot,component",true)
function r(e,t){if(e.length){var n=e.indexOf(t)
if(n>-1){return e.splice(n,1)}}}var s=Object.prototype.hasOwnProperty
function a(e,t){return s.call(e,t)}function o(e){return typeof e==="string"||typeof e==="number"}function l(e){var t=Object.create(null)
return function n(i){var r=t[i]
return r||(t[i]=e(i))}}var u=/-(\w)/g
var f=l(function(e){return e.replace(u,function(e,t){return t?t.toUpperCase():""})})
var c=l(function(e){return e.charAt(0).toUpperCase()+e.slice(1)})
var h=/([^-])([A-Z])/g
var d=l(function(e){return e.replace(h,"$1-$2").replace(h,"$1-$2").toLowerCase()})
function p(e,t){function n(n){var i=arguments.length
return i?i>1?e.apply(t,arguments):e.call(t,n):e.call(t)}n._length=e.length
return n}function m(e,t){t=t||0
var n=e.length-t
var i=new Array(n)
while(n--){i[n]=e[n+t]}return i}function v(e,t){for(var n in t){e[n]=t[n]}return e}function g(e){return e!==null&&typeof e==="object"}var _=Object.prototype.toString
var y="[object Object]"
function b(e){return _.call(e)===y}function w(e){var t={}
for(var n=0;n<e.length;n++){if(e[n]){v(t,e[n])}}return t}function x(){}var k=function(){return false}
var M=function(e){return e}
function T(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}function L(e,t){return e==t||(g(e)&&g(t)?JSON.stringify(e)===JSON.stringify(t):false)}function S(e,t){for(var n=0;n<e.length;n++){if(L(e[n],t)){return n}}return-1}var D={optionMergeStrategies:Object.create(null),silent:false,devtools:"development"!=="production",errorHandler:null,ignoredElements:null,keyCodes:Object.create(null),isReservedTag:k,isUnknownElement:k,getTagNamespace:x,parsePlatformTagName:M,mustUseProp:k,_assetTypes:["component","directive","filter"],_lifecycleHooks:["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],_maxUpdateCount:100}
function C(e){var t=(e+"").charCodeAt(0)
return t===36||t===95}function E(e,t,n,i){Object.defineProperty(e,t,{value:n,enumerable:!!i,writable:true,configurable:true})}var A=/[^\w.$]/
function Y(e){if(A.test(e)){return}else{var t=e.split(".")
return function(e){for(var n=0;n<t.length;n++){if(!e){return}e=e[t[n]]}return e}}}var j="__proto__"in{}
var O=typeof window!=="undefined"
var I=O&&window.navigator.userAgent.toLowerCase()
var P=I&&/msie|trident/.test(I)
var N=I&&I.indexOf("msie 9.0")>0
var R=I&&I.indexOf("edge/")>0
var F=I&&I.indexOf("android")>0
var H=I&&/iphone|ipad|ipod|ios/.test(I)
var $
var z=function(){if($===undefined){if(!O&&typeof global!=="undefined"){$=global["process"].env.VUE_ENV==="server"}else{$=false}}return $}
var W=O&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__
function U(e){return/native code/.test(e.toString())}var q=function(){var e=[]
var t=false
var n
function i(){t=false
var n=e.slice(0)
e.length=0
for(var i=0;i<n.length;i++){n[i]()}}if(typeof Promise!=="undefined"&&U(Promise)){var r=Promise.resolve()
var s=function(e){console.error(e)}
n=function(){r.then(i).catch(s)
if(H){setTimeout(x)}}}else if(typeof MutationObserver!=="undefined"&&(U(MutationObserver)||MutationObserver.toString()==="[object MutationObserverConstructor]")){var a=1
var o=new MutationObserver(i)
var l=document.createTextNode(String(a))
o.observe(l,{characterData:true})
n=function(){a=(a+1)%2
l.data=String(a)}}else{n=function(){setTimeout(i,0)}}return function i(r,s){var a
e.push(function(){if(r){r.call(s)}if(a){a(s)}})
if(!t){t=true
n()}if(!r&&typeof Promise!=="undefined"){return new Promise(function(e){a=e})}}}()
var B
if(typeof Set!=="undefined"&&U(Set)){B=Set}else{B=function(){function e(){this.set=Object.create(null)}e.prototype.has=function e(t){return this.set[t]===true}
e.prototype.add=function e(t){this.set[t]=true}
e.prototype.clear=function e(){this.set=Object.create(null)}
return e}()}var V=x
var J
{var X=typeof console!=="undefined"
V=function(e,t){if(X&&!D.silent){console.error("[Vue warn]: "+e+" "+(t?K(J(t)):""))}}
J=function(e){if(e.$root===e){return"root instance"}var t=e._isVue?e.$options.name||e.$options._componentTag:e.name
return(t?"component <"+t+">":"anonymous component")+(e._isVue&&e.$options.__file?" at "+e.$options.__file:"")}
var K=function(e){if(e==="anonymous component"){e+=' - use the "name" option for better debugging messages.'}return"\n(found in "+e+")"}}var Q=0
var G=function e(){this.id=Q++
this.subs=[]}
G.prototype.addSub=function e(t){this.subs.push(t)}
G.prototype.removeSub=function e(t){r(this.subs,t)}
G.prototype.depend=function e(){if(G.target){G.target.addDep(this)}}
G.prototype.notify=function e(){var t=this.subs.slice()
for(var n=0,i=t.length;n<i;n++){t[n].update()}}
G.target=null
var Z=[]
function ee(e){if(G.target){Z.push(G.target)}G.target=e}function te(){G.target=Z.pop()}var ne=Array.prototype
var ie=Object.create(ne);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=ne[e]
E(ie,e,function n(){var i=arguments
var r=arguments.length
var s=new Array(r)
while(r--){s[r]=i[r]}var a=t.apply(this,s)
var o=this.__ob__
var l
switch(e){case"push":l=s
break
case"unshift":l=s
break
case"splice":l=s.slice(2)
break}if(l){o.observeArray(l)}o.dep.notify()
return a})})
var re=Object.getOwnPropertyNames(ie)
var se={shouldConvert:true,isSettingProps:false}
var ae=function e(t){this.value=t
this.dep=new G
this.vmCount=0
E(t,"__ob__",this)
if(Array.isArray(t)){var n=j?oe:le
n(t,ie,re)
this.observeArray(t)}else{this.walk(t)}}
ae.prototype.walk=function e(t){var n=Object.keys(t)
for(var i=0;i<n.length;i++){fe(t,n[i],t[n[i]])}}
ae.prototype.observeArray=function e(t){for(var n=0,i=t.length;n<i;n++){ue(t[n])}}
function oe(e,t){e.__proto__=t}function le(e,t,n){for(var i=0,r=n.length;i<r;i++){var s=n[i]
E(e,s,t[s])}}function ue(e,t){if(!g(e)){return}var n
if(a(e,"__ob__")&&e.__ob__ instanceof ae){n=e.__ob__}else if(se.shouldConvert&&!z()&&(Array.isArray(e)||b(e))&&Object.isExtensible(e)&&!e._isVue){n=new ae(e)}if(t&&n){n.vmCount++}return n}function fe(e,t,n,i){var r=new G
var s=Object.getOwnPropertyDescriptor(e,t)
if(s&&s.configurable===false){return}var a=s&&s.get
var o=s&&s.set
var l=ue(n)
Object.defineProperty(e,t,{enumerable:true,configurable:true,get:function t(){var i=a?a.call(e):n
if(G.target){r.depend()
if(l){l.dep.depend()}if(Array.isArray(i)){de(i)}}return i},set:function t(s){var u=a?a.call(e):n
if(s===u||s!==s&&u!==u){return}if("development"!=="production"&&i){i()}if(o){o.call(e,s)}else{n=s}l=ue(s)
r.notify()}})}function ce(e,t,n){if(Array.isArray(e)){e.length=Math.max(e.length,t)
e.splice(t,1,n)
return n}if(a(e,t)){e[t]=n
return}var i=e.__ob__
if(e._isVue||i&&i.vmCount){"development"!=="production"&&V("Avoid adding reactive properties to a Vue instance or its root $data "+"at runtime - declare it upfront in the data option.")
return}if(!i){e[t]=n
return}fe(i.value,t,n)
i.dep.notify()
return n}function he(e,t){var n=e.__ob__
if(e._isVue||n&&n.vmCount){"development"!=="production"&&V("Avoid deleting properties on a Vue instance or its root $data "+"- just set it to null.")
return}if(!a(e,t)){return}delete e[t]
if(!n){return}n.dep.notify()}function de(e){for(var t=void 0,n=0,i=e.length;n<i;n++){t=e[n]
t&&t.__ob__&&t.__ob__.dep.depend()
if(Array.isArray(t)){de(t)}}}var pe=D.optionMergeStrategies
{pe.el=pe.propsData=function(e,t,n,i){if(!n){V('option "'+i+'" can only be used during instance '+"creation with the `new` keyword.")}return _e(e,t)}}function me(e,t){if(!t){return e}var n,i,r
var s=Object.keys(t)
for(var o=0;o<s.length;o++){n=s[o]
i=e[n]
r=t[n]
if(!a(e,n)){ce(e,n,r)}else if(b(i)&&b(r)){me(i,r)}}return e}pe.data=function(e,t,n){if(!n){if(!t){return e}if(typeof t!=="function"){"development"!=="production"&&V('The "data" option should be a function '+"that returns a per-instance value in component "+"definitions.",n)
return e}if(!e){return t}return function n(){return me(t.call(this),e.call(this))}}else if(e||t){return function i(){var r=typeof t==="function"?t.call(n):t
var s=typeof e==="function"?e.call(n):undefined
if(r){return me(r,s)}else{return s}}}}
function ve(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}D._lifecycleHooks.forEach(function(e){pe[e]=ve})
function ge(e,t){var n=Object.create(e||null)
return t?v(n,t):n}D._assetTypes.forEach(function(e){pe[e+"s"]=ge})
pe.watch=function(e,t){if(!t){return e}if(!e){return t}var n={}
v(n,e)
for(var i in t){var r=n[i]
var s=t[i]
if(r&&!Array.isArray(r)){r=[r]}n[i]=r?r.concat(s):[s]}return n}
pe.props=pe.methods=pe.computed=function(e,t){if(!t){return e}if(!e){return t}var n=Object.create(null)
v(n,e)
v(n,t)
return n}
var _e=function(e,t){return t===undefined?e:t}
function ye(e){for(var t in e.components){var n=t.toLowerCase()
if(i(n)||D.isReservedTag(n)){V("Do not use built-in or reserved HTML elements as component "+"id: "+t)}}}function be(e){var t=e.props
if(!t){return}var n={}
var i,r,s
if(Array.isArray(t)){i=t.length
while(i--){r=t[i]
if(typeof r==="string"){s=f(r)
n[s]={type:null}}else{V("props must be strings when using array syntax.")}}}else if(b(t)){for(var a in t){r=t[a]
s=f(a)
n[s]=b(r)?r:{type:r}}}e.props=n}function we(e){var t=e.directives
if(t){for(var n in t){var i=t[n]
if(typeof i==="function"){t[n]={bind:i,update:i}}}}}function xe(e,t,n){{ye(t)}be(t)
we(t)
var i=t.extends
if(i){e=typeof i==="function"?xe(e,i.options,n):xe(e,i,n)}if(t.mixins){for(var r=0,s=t.mixins.length;r<s;r++){var o=t.mixins[r]
if(o.prototype instanceof nn){o=o.options}e=xe(e,o,n)}}var l={}
var u
for(u in e){f(u)}for(u in t){if(!a(e,u)){f(u)}}function f(i){var r=pe[i]||_e
l[i]=r(e[i],t[i],n,i)}return l}function ke(e,t,n,i){if(typeof n!=="string"){return}var r=e[t]
if(a(r,n)){return r[n]}var s=f(n)
if(a(r,s)){return r[s]}var o=c(s)
if(a(r,o)){return r[o]}var l=r[n]||r[s]||r[o]
if("development"!=="production"&&i&&!l){V("Failed to resolve "+t.slice(0,-1)+": "+n,e)}return l}function Me(e,t,n,i){var r=t[e]
var s=!a(n,e)
var o=n[e]
if(Ce(r.type)){if(s&&!a(r,"default")){o=false}else if(o===""||o===d(e)){o=true}}if(o===undefined){o=Te(i,r,e)
var l=se.shouldConvert
se.shouldConvert=true
ue(o)
se.shouldConvert=l}{Le(r,e,o,i,s)}return o}function Te(e,t,n){if(!a(t,"default")){return undefined}var i=t.default
if(g(i)){"development"!=="production"&&V('Invalid default value for prop "'+n+'": '+"Props with type Object/Array must use a factory function "+"to return the default value.",e)}if(e&&e.$options.propsData&&e.$options.propsData[n]===undefined&&e[n]!==undefined){return e[n]}return typeof i==="function"&&t.type!==Function?i.call(e):i}function Le(e,t,n,i,r){if(e.required&&r){V('Missing required prop: "'+t+'"',i)
return}if(n==null&&!e.required){return}var s=e.type
var a=!s||s===true
var o=[]
if(s){if(!Array.isArray(s)){s=[s]}for(var l=0;l<s.length&&!a;l++){var u=Se(n,s[l])
o.push(u.expectedType)
a=u.valid}}if(!a){V('Invalid prop: type check failed for prop "'+t+'".'+" Expected "+o.map(c).join(", ")+", got "+Object.prototype.toString.call(n).slice(8,-1)+".",i)
return}var f=e.validator
if(f){if(!f(n)){V('Invalid prop: custom validator check failed for prop "'+t+'".',i)}}}function Se(e,t){var n
var i=De(t)
if(i==="String"){n=typeof e===(i="string")}else if(i==="Number"){n=typeof e===(i="number")}else if(i==="Boolean"){n=typeof e===(i="boolean")}else if(i==="Function"){n=typeof e===(i="function")}else if(i==="Object"){n=b(e)}else if(i==="Array"){n=Array.isArray(e)}else{n=e instanceof t}return{valid:n,expectedType:i}}function De(e){var t=e&&e.toString().match(/^\s*function (\w+)/)
return t&&t[1]}function Ce(e){if(!Array.isArray(e)){return De(e)==="Boolean"}for(var t=0,n=e.length;t<n;t++){if(De(e[t])==="Boolean"){return true}}return false}var Ee=Object.freeze({defineReactive:fe,_toString:e,toNumber:t,makeMap:n,isBuiltInTag:i,remove:r,hasOwn:a,isPrimitive:o,cached:l,camelize:f,capitalize:c,hyphenate:d,bind:p,toArray:m,extend:v,isObject:g,isPlainObject:b,toObject:w,noop:x,no:k,identity:M,genStaticKeys:T,looseEqual:L,looseIndexOf:S,isReserved:C,def:E,parsePath:Y,hasProto:j,inBrowser:O,UA:I,isIE:P,isIE9:N,isEdge:R,isAndroid:F,isIOS:H,isServerRendering:z,devtools:W,nextTick:q,get _Set(){return B},mergeOptions:xe,resolveAsset:ke,get warn(){return V},get formatComponentName(){return J},validateProp:Me})
var Ae
{var Ye=n("Infinity,undefined,NaN,isFinite,isNaN,"+"parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,"+"Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,"+"require")
var je=function(e,t){V('Property or method "'+t+'" is not defined on the instance but '+"referenced during render. Make sure to declare reactive data "+"properties in the data option.",e)}
var Oe=typeof Proxy!=="undefined"&&Proxy.toString().match(/native code/)
if(Oe){var Ie=n("stop,prevent,self,ctrl,shift,alt,meta")
D.keyCodes=new Proxy(D.keyCodes,{set:function e(t,n,i){if(Ie(n)){V("Avoid overwriting built-in modifier in config.keyCodes: ."+n)
return false}else{t[n]=i
return true}}})}var Pe={has:function e(t,n){var e=n in t
var i=Ye(n)||n.charAt(0)==="_"
if(!e&&!i){je(t,n)}return e||!i}}
var Ne={get:function e(t,n){if(typeof n==="string"&&!(n in t)){je(t,n)}return t[n]}}
Ae=function e(t){if(Oe){var n=t.$options
var i=n.render&&n.render._withStripped?Ne:Pe
t._renderProxy=new Proxy(t,i)}else{t._renderProxy=t}}}var Re=[]
var Fe={}
var He={}
var $e=false
var ze=false
var We=0
function Ue(){Re.length=0
Fe={}
{He={}}$e=ze=false}function qe(){ze=true
Re.sort(function(e,t){return e.id-t.id})
for(We=0;We<Re.length;We++){var e=Re[We]
var t=e.id
Fe[t]=null
e.run()
if("development"!=="production"&&Fe[t]!=null){He[t]=(He[t]||0)+1
if(He[t]>D._maxUpdateCount){V("You may have an infinite update loop "+(e.user?'in watcher with expression "'+e.expression+'"':"in a component render function."),e.vm)
break}}}if(W&&D.devtools){W.emit("flush")}Ue()}function Be(e){var t=e.id
if(Fe[t]==null){Fe[t]=true
if(!ze){Re.push(e)}else{var n=Re.length-1
while(n>=0&&Re[n].id>e.id){n--}Re.splice(Math.max(n,We)+1,0,e)}if(!$e){$e=true
q(qe)}}}var Ve=0
var Je=function e(t,n,i,r){this.vm=t
t._watchers.push(this)
if(r){this.deep=!!r.deep
this.user=!!r.user
this.lazy=!!r.lazy
this.sync=!!r.sync}else{this.deep=this.user=this.lazy=this.sync=false}this.cb=i
this.id=++Ve
this.active=true
this.dirty=this.lazy
this.deps=[]
this.newDeps=[]
this.depIds=new B
this.newDepIds=new B
this.expression=n.toString()
if(typeof n==="function"){this.getter=n}else{this.getter=Y(n)
if(!this.getter){this.getter=function(){}
"development"!=="production"&&V('Failed watching path: "'+n+'" '+"Watcher only accepts simple dot-delimited paths. "+"For full control, use a function instead.",t)}}this.value=this.lazy?undefined:this.get()}
Je.prototype.get=function e(){ee(this)
var t=this.getter.call(this.vm,this.vm)
if(this.deep){Ke(t)}te()
this.cleanupDeps()
return t}
Je.prototype.addDep=function e(t){var n=t.id
if(!this.newDepIds.has(n)){this.newDepIds.add(n)
this.newDeps.push(t)
if(!this.depIds.has(n)){t.addSub(this)}}}
Je.prototype.cleanupDeps=function e(){var t=this
var n=this.deps.length
while(n--){var i=t.deps[n]
if(!t.newDepIds.has(i.id)){i.removeSub(t)}}var r=this.depIds
this.depIds=this.newDepIds
this.newDepIds=r
this.newDepIds.clear()
r=this.deps
this.deps=this.newDeps
this.newDeps=r
this.newDeps.length=0}
Je.prototype.update=function e(){if(this.lazy){this.dirty=true}else if(this.sync){this.run()}else{Be(this)}}
Je.prototype.run=function e(){if(this.active){var t=this.get()
if(t!==this.value||g(t)||this.deep){var n=this.value
this.value=t
if(this.user){try{this.cb.call(this.vm,t,n)}catch(e){if(D.errorHandler){D.errorHandler.call(null,e,this.vm)}else{"development"!=="production"&&V('Error in watcher "'+this.expression+'"',this.vm)
throw e}}}else{this.cb.call(this.vm,t,n)}}}}
Je.prototype.evaluate=function e(){this.value=this.get()
this.dirty=false}
Je.prototype.depend=function e(){var t=this
var n=this.deps.length
while(n--){t.deps[n].depend()}}
Je.prototype.teardown=function e(){var t=this
if(this.active){if(!this.vm._isBeingDestroyed&&!this.vm._vForRemoving){r(this.vm._watchers,this)}var n=this.deps.length
while(n--){t.deps[n].removeSub(t)}this.active=false}}
var Xe=new B
function Ke(e){Xe.clear()
Qe(e,Xe)}function Qe(e,t){var n,i
var r=Array.isArray(e)
if(!r&&!g(e)||!Object.isExtensible(e)){return}if(e.__ob__){var s=e.__ob__.dep.id
if(t.has(s)){return}t.add(s)}if(r){n=e.length
while(n--){Qe(e[n],t)}}else{i=Object.keys(e)
n=i.length
while(n--){Qe(e[i[n]],t)}}}function Ge(e){e._watchers=[]
var t=e.$options
if(t.props){et(e,t.props)}if(t.methods){st(e,t.methods)}if(t.data){tt(e)}else{ue(e._data={},true)}if(t.computed){it(e,t.computed)}if(t.watch){at(e,t.watch)}}var Ze={key:1,ref:1,slot:1}
function et(e,t){var n=e.$options.propsData||{}
var i=e.$options._propKeys=Object.keys(t)
var r=!e.$parent
se.shouldConvert=r
var s=function(r){var s=i[r]
{if(Ze[s]){V('"'+s+'" is a reserved attribute and cannot be used as component prop.',e)}fe(e,s,Me(s,t,n,e),function(){if(e.$parent&&!se.isSettingProps){V("Avoid mutating a prop directly since the value will be "+"overwritten whenever the parent component re-renders. "+"Instead, use a data or computed property based on the prop's "+'value. Prop being mutated: "'+s+'"',e)}})}}
for(var a=0;a<i.length;a++)s(a)
se.shouldConvert=true}function tt(e){var t=e.$options.data
t=e._data=typeof t==="function"?t.call(e):t||{}
if(!b(t)){t={}
"development"!=="production"&&V("data functions should return an object:\n"+"https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function",e)}var n=Object.keys(t)
var i=e.$options.props
var r=n.length
while(r--){if(i&&a(i,n[r])){"development"!=="production"&&V('The data property "'+n[r]+'" is already declared as a prop. '+"Use prop default value instead.",e)}else{ut(e,n[r])}}ue(t,true)}var nt={enumerable:true,configurable:true,get:x,set:x}
function it(e,t){for(var n in t){var i=t[n]
if(typeof i==="function"){nt.get=rt(i,e)
nt.set=x}else{nt.get=i.get?i.cache!==false?rt(i.get,e):p(i.get,e):x
nt.set=i.set?p(i.set,e):x}Object.defineProperty(e,n,nt)}}function rt(e,t){var n=new Je(t,e,x,{lazy:true})
return function e(){if(n.dirty){n.evaluate()}if(G.target){n.depend()}return n.value}}function st(e,t){for(var n in t){e[n]=t[n]==null?x:p(t[n],e)
if("development"!=="production"&&t[n]==null){V('method "'+n+'" has an undefined value in the component definition. '+"Did you reference the function correctly?",e)}}}function at(e,t){for(var n in t){var i=t[n]
if(Array.isArray(i)){for(var r=0;r<i.length;r++){ot(e,n,i[r])}}else{ot(e,n,i)}}}function ot(e,t,n){var i
if(b(n)){i=n
n=n.handler}if(typeof n==="string"){n=e[n]}e.$watch(t,n,i)}function lt(e){var t={}
t.get=function(){return this._data}
{t.set=function(e){V("Avoid replacing instance root $data. "+"Use nested data properties instead.",this)}}Object.defineProperty(e.prototype,"$data",t)
e.prototype.$set=ce
e.prototype.$delete=he
e.prototype.$watch=function(e,t,n){var i=this
n=n||{}
n.user=true
var r=new Je(i,e,t,n)
if(n.immediate){t.call(i,r.value)}return function e(){r.teardown()}}}function ut(e,t){if(!C(t)){Object.defineProperty(e,t,{configurable:true,enumerable:true,get:function n(){return e._data[t]},set:function n(i){e._data[t]=i}})}}var ft=function e(t,n,i,r,s,a,o){this.tag=t
this.data=n
this.children=i
this.text=r
this.elm=s
this.ns=undefined
this.context=a
this.functionalContext=undefined
this.key=n&&n.key
this.componentOptions=o
this.child=undefined
this.parent=undefined
this.raw=false
this.isStatic=false
this.isRootInsert=true
this.isComment=false
this.isCloned=false
this.isOnce=false}
var ct=function(){var e=new ft
e.text=""
e.isComment=true
return e}
function ht(e){return new ft(undefined,undefined,undefined,String(e))}function dt(e){var t=new ft(e.tag,e.data,e.children,e.text,e.elm,e.context,e.componentOptions)
t.ns=e.ns
t.isStatic=e.isStatic
t.key=e.key
t.isCloned=true
return t}function pt(e){var t=new Array(e.length)
for(var n=0;n<e.length;n++){t[n]=dt(e[n])}return t}function mt(e,t,n,i){i=i+t
var r=e.__injected||(e.__injected={})
if(!r[i]){r[i]=true
var s=e[t]
if(s){e[t]=function(){s.apply(this,arguments)
n.apply(this,arguments)}}else{e[t]=n}}}function vt(e,t,n,i,r){var s,a,o,l,u,f,c
for(s in e){a=e[s]
o=t[s]
if(!a){"development"!=="production"&&V('Invalid handler for event "'+s+'": got '+String(a),r)}else if(!o){c=s.charAt(0)==="~"
u=c?s.slice(1):s
f=u.charAt(0)==="!"
u=f?u.slice(1):u
if(Array.isArray(a)){n(u,a.invoker=gt(a),c,f)}else{if(!a.invoker){l=a
a=e[s]={}
a.fn=l
a.invoker=_t(a)}n(u,a.invoker,c,f)}}else if(a!==o){if(Array.isArray(o)){o.length=a.length
for(var h=0;h<o.length;h++){o[h]=a[h]}e[s]=o}else{o.fn=a
e[s]=o}}}for(s in t){if(!e[s]){c=s.charAt(0)==="~"
u=c?s.slice(1):s
f=u.charAt(0)==="!"
u=f?u.slice(1):u
i(u,t[s].invoker,f)}}}function gt(e){return function(t){var n=arguments
var i=arguments.length===1
for(var r=0;r<e.length;r++){i?e[r](t):e[r].apply(null,n)}}}function _t(e){return function(t){var n=arguments.length===1
n?e.fn(t):e.fn.apply(null,arguments)}}function yt(e){return o(e)?[ht(e)]:Array.isArray(e)?bt(e):undefined}function bt(e,t){var n=[]
var i,r,s
for(i=0;i<e.length;i++){r=e[i]
if(r==null||typeof r==="boolean"){continue}s=n[n.length-1]
if(Array.isArray(r)){n.push.apply(n,bt(r,(t||"")+"_"+i))}else if(o(r)){if(s&&s.text){s.text+=String(r)}else if(r!==""){n.push(ht(r))}}else{if(r.text&&s&&s.text){n[n.length-1]=ht(s.text+r.text)}else{if(r.tag&&r.key==null&&t!=null){r.key="__vlist"+t+"_"+i+"__"}n.push(r)}}}return n}function wt(e){return e&&e.filter(function(e){return e&&e.componentOptions})[0]}function xt(e){e._events=Object.create(null)
e._hasHookEvent=false
var t=e.$options._parentListeners
if(t){Lt(e,t)}}var kt
function Mt(e,t,n){if(n){kt.$once(e,t)}else{kt.$on(e,t)}}function Tt(e,t){kt.$off(e,t)}function Lt(e,t,n){kt=e
vt(t,n||{},Mt,Tt,e)}function St(e){var t=/^hook:/
e.prototype.$on=function(e,n){var i=this;(i._events[e]||(i._events[e]=[])).push(n)
if(t.test(e)){i._hasHookEvent=true}return i}
e.prototype.$once=function(e,t){var n=this
function i(){n.$off(e,i)
t.apply(n,arguments)}i.fn=t
n.$on(e,i)
return n}
e.prototype.$off=function(e,t){var n=this
if(!arguments.length){n._events=Object.create(null)
return n}var i=n._events[e]
if(!i){return n}if(arguments.length===1){n._events[e]=null
return n}var r
var s=i.length
while(s--){r=i[s]
if(r===t||r.fn===t){i.splice(s,1)
break}}return n}
e.prototype.$emit=function(e){var t=this
var n=t._events[e]
if(n){n=n.length>1?m(n):n
var i=m(arguments,1)
for(var r=0,s=n.length;r<s;r++){n[r].apply(t,i)}}return t}}var Dt=null
function Ct(e){var t=e.$options
var n=t.parent
if(n&&!t.abstract){while(n.$options.abstract&&n.$parent){n=n.$parent}n.$children.push(e)}e.$parent=n
e.$root=n?n.$root:e
e.$children=[]
e.$refs={}
e._watcher=null
e._inactive=false
e._isMounted=false
e._isDestroyed=false
e._isBeingDestroyed=false}function Et(e){e.prototype._mount=function(e,t){var n=this
n.$el=e
if(!n.$options.render){n.$options.render=ct
{if(n.$options.template&&n.$options.template.charAt(0)!=="#"){V("You are using the runtime-only build of Vue where the template "+"option is not available. Either pre-compile the templates into "+"render functions, or use the compiler-included build.",n)}else{V("Failed to mount component: template or render function not defined.",n)}}}At(n,"beforeMount")
n._watcher=new Je(n,function(){n._update(n._render(),t)},x)
t=false
if(n.$vnode==null){n._isMounted=true
At(n,"mounted")}return n}
e.prototype._update=function(e,t){var n=this
if(n._isMounted){At(n,"beforeUpdate")}var i=n.$el
var r=n._vnode
var s=Dt
Dt=n
n._vnode=e
if(!r){n.$el=n.__patch__(n.$el,e,t,false,n.$options._parentElm,n.$options._refElm)}else{n.$el=n.__patch__(r,e)}Dt=s
if(i){i.__vue__=null}if(n.$el){n.$el.__vue__=n}if(n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode){n.$parent.$el=n.$el}if(n._isMounted){At(n,"updated")}}
e.prototype._updateFromParent=function(e,t,n,i){var r=this
var s=!!(r.$options._renderChildren||i)
r.$options._parentVnode=n
r.$vnode=n
if(r._vnode){r._vnode.parent=n}r.$options._renderChildren=i
if(e&&r.$options.props){se.shouldConvert=false
{se.isSettingProps=true}var a=r.$options._propKeys||[]
for(var o=0;o<a.length;o++){var l=a[o]
r[l]=Me(l,r.$options.props,e,r)}se.shouldConvert=true
{se.isSettingProps=false}r.$options.propsData=e}if(t){var u=r.$options._parentListeners
r.$options._parentListeners=t
Lt(r,t,u)}if(s){r.$slots=Qt(i,n.context)
r.$forceUpdate()}}
e.prototype.$forceUpdate=function(){var e=this
if(e._watcher){e._watcher.update()}}
e.prototype.$destroy=function(){var e=this
if(e._isBeingDestroyed){return}At(e,"beforeDestroy")
e._isBeingDestroyed=true
var t=e.$parent
if(t&&!t._isBeingDestroyed&&!e.$options.abstract){r(t.$children,e)}if(e._watcher){e._watcher.teardown()}var n=e._watchers.length
while(n--){e._watchers[n].teardown()}if(e._data.__ob__){e._data.__ob__.vmCount--}e._isDestroyed=true
At(e,"destroyed")
e.$off()
if(e.$el){e.$el.__vue__=null}e.__patch__(e._vnode,null)}}function At(e,t){var n=e.$options[t]
if(n){for(var i=0,r=n.length;i<r;i++){n[i].call(e)}}if(e._hasHookEvent){e.$emit("hook:"+t)}}var Yt={init:Nt,prepatch:Rt,insert:Ft,destroy:Ht}
var jt=Object.keys(Yt)
function Ot(e,t,n,i,r){if(!e){return}var s=n.$options._base
if(g(e)){e=s.extend(e)}if(typeof e!=="function"){{V("Invalid Component definition: "+String(e),n)}return}if(!e.cid){if(e.resolved){e=e.resolved}else{e=$t(e,s,function(){n.$forceUpdate()})
if(!e){return}}}tn(e)
t=t||{}
var a=zt(t,e)
if(e.options.functional){return It(e,a,t,n,i)}var o=t.on
t.on=t.nativeOn
if(e.options.abstract){t={}}Ut(t)
var l=e.options.name||r
var u=new ft("vue-component-"+e.cid+(l?"-"+l:""),t,undefined,undefined,undefined,n,{Ctor:e,propsData:a,listeners:o,tag:r,children:i})
return u}function It(e,t,n,i,r){var s={}
var a=e.options.props
if(a){for(var o in a){s[o]=Me(o,a,t)}}var l=Object.create(i)
var u=function(e,t,n,i){return Bt(l,e,t,n,i,true)}
var f=e.options.render.call(null,u,{props:s,data:n,parent:i,children:r,slots:function(){return Qt(r,i)}})
if(f instanceof ft){f.functionalContext=i
if(n.slot){(f.data||(f.data={})).slot=n.slot}}return f}function Pt(e,t,n,i){var r=e.componentOptions
var s={_isComponent:true,parent:t,propsData:r.propsData,_componentTag:r.tag,_parentVnode:e,_parentListeners:r.listeners,_renderChildren:r.children,_parentElm:n||null,_refElm:i||null}
var a=e.data.inlineTemplate
if(a){s.render=a.render
s.staticRenderFns=a.staticRenderFns}return new r.Ctor(s)}function Nt(e,t,n,i){if(!e.child||e.child._isDestroyed){var r=e.child=Pt(e,Dt,n,i)
r.$mount(t?e.elm:undefined,t)}else if(e.data.keepAlive){var s=e
Rt(s,s)}}function Rt(e,t){var n=t.componentOptions
var i=t.child=e.child
i._updateFromParent(n.propsData,n.listeners,t,n.children)}function Ft(e){if(!e.child._isMounted){e.child._isMounted=true
At(e.child,"mounted")}if(e.data.keepAlive){e.child._inactive=false
At(e.child,"activated")}}function Ht(e){if(!e.child._isDestroyed){if(!e.data.keepAlive){e.child.$destroy()}else{e.child._inactive=true
At(e.child,"deactivated")}}}function $t(e,t,n){if(e.requested){e.pendingCallbacks.push(n)}else{e.requested=true
var i=e.pendingCallbacks=[n]
var r=true
var s=function(n){if(g(n)){n=t.extend(n)}e.resolved=n
if(!r){for(var s=0,a=i.length;s<a;s++){i[s](n)}}}
var a=function(t){"development"!=="production"&&V("Failed to resolve async component: "+String(e)+(t?"\nReason: "+t:""))}
var o=e(s,a)
if(o&&typeof o.then==="function"&&!e.resolved){o.then(s,a)}r=false
return e.resolved}}function zt(e,t){var n=t.options.props
if(!n){return}var i={}
var r=e.attrs
var s=e.props
var a=e.domProps
if(r||s||a){for(var o in n){var l=d(o)
Wt(i,s,o,l,true)||Wt(i,r,o,l)||Wt(i,a,o,l)}}return i}function Wt(e,t,n,i,r){if(t){if(a(t,n)){e[n]=t[n]
if(!r){delete t[n]}return true}else if(a(t,i)){e[n]=t[i]
if(!r){delete t[i]}return true}}return false}function Ut(e){if(!e.hook){e.hook={}}for(var t=0;t<jt.length;t++){var n=jt[t]
var i=e.hook[n]
var r=Yt[n]
e.hook[n]=i?qt(r,i):r}}function qt(e,t){return function(n,i,r,s){e(n,i,r,s)
t(n,i,r,s)}}function Bt(e,t,n,i,r,s){if(Array.isArray(n)||o(n)){r=i
i=n
n=undefined}if(s){r=true}return Vt(e,t,n,i,r)}function Vt(e,t,n,i,r){if(n&&n.__ob__){"development"!=="production"&&V("Avoid using observed data object as vnode data: "+JSON.stringify(n)+"\n"+"Always create fresh vnode data objects in each render!",e)
return ct()}if(!t){return ct()}if(Array.isArray(i)&&typeof i[0]==="function"){n=n||{}
n.scopedSlots={default:i[0]}
i.length=0}if(r){i=yt(i)}var s,a
if(typeof t==="string"){var o
a=D.getTagNamespace(t)
if(D.isReservedTag(t)){s=new ft(D.parsePlatformTagName(t),n,i,undefined,undefined,e)}else if(o=ke(e.$options,"components",t)){s=Ot(o,n,e,i,t)}else{a=t==="foreignObject"?"xhtml":a
s=new ft(t,n,i,undefined,undefined,e)}}else{s=Ot(t,n,e,i)}if(s){if(a){Jt(s,a)}return s}else{return ct()}}function Jt(e,t){e.ns=t
if(e.children){for(var n=0,i=e.children.length;n<i;n++){var r=e.children[n]
if(r.tag&&!r.ns){Jt(r,t)}}}}function Xt(e){e.$vnode=null
e._vnode=null
e._staticTrees=null
var t=e.$options._parentVnode
var n=t&&t.context
e.$slots=Qt(e.$options._renderChildren,n)
e.$scopedSlots={}
e._c=function(t,n,i,r){return Bt(e,t,n,i,r,false)}
e.$createElement=function(t,n,i,r){return Bt(e,t,n,i,r,true)}
if(e.$options.el){e.$mount(e.$options.el)}}function Kt(n){n.prototype.$nextTick=function(e){return q(e,this)}
n.prototype._render=function(){var e=this
var t=e.$options
var n=t.render
var i=t.staticRenderFns
var r=t._parentVnode
if(e._isMounted){for(var s in e.$slots){e.$slots[s]=pt(e.$slots[s])}}if(r&&r.data.scopedSlots){e.$scopedSlots=r.data.scopedSlots}if(i&&!e._staticTrees){e._staticTrees=[]}e.$vnode=r
var a
try{a=n.call(e._renderProxy,e.$createElement)}catch(t){if(D.errorHandler){D.errorHandler.call(null,t,e)}else{{V("Error when rendering "+J(e)+":")}throw t}a=e._vnode}if(!(a instanceof ft)){if("development"!=="production"&&Array.isArray(a)){V("Multiple root nodes returned from render function. Render function "+"should return a single root node.",e)}a=ct()}a.parent=r
return a}
n.prototype._s=e
n.prototype._v=ht
n.prototype._n=t
n.prototype._e=ct
n.prototype._q=L
n.prototype._i=S
n.prototype._m=function e(t,n){var r=this._staticTrees[t]
if(r&&!n){return Array.isArray(r)?pt(r):dt(r)}r=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy)
i(r,"__static__"+t,false)
return r}
n.prototype._o=function e(t,n,r){i(t,"__once__"+n+(r?"_"+r:""),true)
return t}
function i(e,t,n){if(Array.isArray(e)){for(var i=0;i<e.length;i++){if(e[i]&&typeof e[i]!=="string"){r(e[i],t+"_"+i,n)}}}else{r(e,t,n)}}function r(e,t,n){e.isStatic=true
e.key=t
e.isOnce=n}n.prototype._f=function e(t){return ke(this.$options,"filters",t,true)||M}
n.prototype._l=function e(t,n){var i,r,s,a,o
if(Array.isArray(t)){i=new Array(t.length)
for(r=0,s=t.length;r<s;r++){i[r]=n(t[r],r)}}else if(typeof t==="number"){i=new Array(t)
for(r=0;r<t;r++){i[r]=n(r+1,r)}}else if(g(t)){a=Object.keys(t)
i=new Array(a.length)
for(r=0,s=a.length;r<s;r++){o=a[r]
i[r]=n(t[o],o,r)}}return i}
n.prototype._t=function(e,t,n){var i=this.$scopedSlots[e]
if(i){return i(n||{})||t}else{var r=this.$slots[e]
if(r&&"development"!=="production"){r._rendered&&V('Duplicate presence of slot "'+e+'" found in the same render tree '+"- this will likely cause render errors.",this)
r._rendered=true}return r||t}}
n.prototype._b=function e(t,n,i,r){if(i){if(!g(i)){"development"!=="production"&&V("v-bind without argument expects an Object or Array value",this)}else{if(Array.isArray(i)){i=w(i)}for(var s in i){if(s==="class"||s==="style"){t[s]=i[s]}else{var a=r||D.mustUseProp(n,s)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})
a[s]=i[s]}}}}return t}
n.prototype._k=function e(t,n,i){var r=D.keyCodes[n]||i
if(Array.isArray(r)){return r.indexOf(t)===-1}else{return r!==t}}}function Qt(e,t){var n={}
if(!e){return n}var i=[]
var r,s
for(var a=0,o=e.length;a<o;a++){s=e[a]
if((s.context===t||s.functionalContext===t)&&s.data&&(r=s.data.slot)){var l=n[r]||(n[r]=[])
if(s.tag==="template"){l.push.apply(l,s.children)}else{l.push(s)}}else{i.push(s)}}if(i.length&&!(i.length===1&&(i[0].text===" "||i[0].isComment))){n.default=i}return n}var Gt=0
function Zt(e){e.prototype._init=function(e){var t=this
t._uid=Gt++
t._isVue=true
if(e&&e._isComponent){en(t,e)}else{t.$options=xe(tn(t.constructor),e||{},t)}{Ae(t)}t._self=t
Ct(t)
xt(t)
At(t,"beforeCreate")
Ge(t)
At(t,"created")
Xt(t)}}function en(e,t){var n=e.$options=Object.create(e.constructor.options)
n.parent=t.parent
n.propsData=t.propsData
n._parentVnode=t._parentVnode
n._parentListeners=t._parentListeners
n._renderChildren=t._renderChildren
n._componentTag=t._componentTag
n._parentElm=t._parentElm
n._refElm=t._refElm
if(t.render){n.render=t.render
n.staticRenderFns=t.staticRenderFns}}function tn(e){var t=e.options
if(e.super){var n=e.super.options
var i=e.superOptions
var r=e.extendOptions
if(n!==i){e.superOptions=n
r.render=t.render
r.staticRenderFns=t.staticRenderFns
r._scopeId=t._scopeId
t=e.options=xe(n,r)
if(t.name){t.components[t.name]=e}}}return t}function nn(e){if("development"!=="production"&&!(this instanceof nn)){V("Vue is a constructor and should be called with the `new` keyword")}this._init(e)}Zt(nn)
lt(nn)
St(nn)
Et(nn)
Kt(nn)
function rn(e){e.use=function(e){if(e.installed){return}var t=m(arguments,1)
t.unshift(this)
if(typeof e.install==="function"){e.install.apply(e,t)}else{e.apply(null,t)}e.installed=true
return this}}function sn(e){e.mixin=function(e){this.options=xe(this.options,e)}}function an(e){e.cid=0
var t=1
e.extend=function(e){e=e||{}
var n=this
var i=n.cid
var r=e._Ctor||(e._Ctor={})
if(r[i]){return r[i]}var s=e.name||n.options.name
{if(!/^[a-zA-Z][\w-]*$/.test(s)){V('Invalid component name: "'+s+'". Component names '+"can only contain alphanumeric characters and the hyphen, "+"and must start with a letter.")}}var a=function e(t){this._init(t)}
a.prototype=Object.create(n.prototype)
a.prototype.constructor=a
a.cid=t++
a.options=xe(n.options,e)
a["super"]=n
a.extend=n.extend
a.mixin=n.mixin
a.use=n.use
D._assetTypes.forEach(function(e){a[e]=n[e]})
if(s){a.options.components[s]=a}a.superOptions=n.options
a.extendOptions=e
r[i]=a
return a}}function on(e){D._assetTypes.forEach(function(t){e[t]=function(e,n){if(!n){return this.options[t+"s"][e]}else{{if(t==="component"&&D.isReservedTag(e)){V("Do not use built-in or reserved HTML elements as component "+"id: "+e)}}if(t==="component"&&b(n)){n.name=n.name||e
n=this.options._base.extend(n)}if(t==="directive"&&typeof n==="function"){n={bind:n,update:n}}this.options[t+"s"][e]=n
return n}}})}var ln=[String,RegExp]
function un(e,t){if(typeof e==="string"){return e.split(",").indexOf(t)>-1}else{return e.test(t)}}var fn={name:"keep-alive",abstract:true,props:{include:ln,exclude:ln},created:function e(){this.cache=Object.create(null)},render:function e(){var t=wt(this.$slots.default)
if(t&&t.componentOptions){var n=t.componentOptions
var i=n.Ctor.options.name||n.tag
if(i&&(this.include&&!un(this.include,i)||this.exclude&&un(this.exclude,i))){return t}var r=t.key==null?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key
if(this.cache[r]){t.child=this.cache[r].child}else{this.cache[r]=t}t.data.keepAlive=true}return t},destroyed:function e(){var t=this
for(var n in this.cache){var i=t.cache[n]
At(i.child,"deactivated")
i.child.$destroy()}}}
var cn={KeepAlive:fn}
function hn(e){var t={}
t.get=function(){return D}
{t.set=function(){V("Do not replace the Vue.config object, set individual fields instead.")}}Object.defineProperty(e,"config",t)
e.util=Ee
e.set=ce
e.delete=he
e.nextTick=q
e.options=Object.create(null)
D._assetTypes.forEach(function(t){e.options[t+"s"]=Object.create(null)})
e.options._base=e
v(e.options.components,cn)
rn(e)
sn(e)
an(e)
on(e)}hn(nn)
Object.defineProperty(nn.prototype,"$isServer",{get:z})
nn.version="2.1.6"
var dn=n("input,textarea,option,select")
var pn=function(e,t){return t==="value"&&dn(e)||t==="selected"&&e==="option"||t==="checked"&&e==="input"||t==="muted"&&e==="video"}
var mn=n("contenteditable,draggable,spellcheck")
var vn=n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,"+"default,defaultchecked,defaultmuted,defaultselected,defer,disabled,"+"enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,"+"muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,"+"required,reversed,scoped,seamless,selected,sortable,translate,"+"truespeed,typemustmatch,visible")
var gn="http://www.w3.org/1999/xlink"
var _n=function(e){return e.charAt(5)===":"&&e.slice(0,5)==="xlink"}
var yn=function(e){return _n(e)?e.slice(6,e.length):""}
var bn=function(e){return e==null||e===false}
function wn(e){var t=e.data
var n=e
var i=e
while(i.child){i=i.child._vnode
if(i.data){t=xn(i.data,t)}}while(n=n.parent){if(n.data){t=xn(t,n.data)}}return kn(t)}function xn(e,t){return{staticClass:Mn(e.staticClass,t.staticClass),class:e.class?[e.class,t.class]:t.class}}function kn(e){var t=e.class
var n=e.staticClass
if(n||t){return Mn(n,Tn(t))}return""}function Mn(e,t){return e?t?e+" "+t:e:t||""}function Tn(e){var t=""
if(!e){return t}if(typeof e==="string"){return e}if(Array.isArray(e)){var n
for(var i=0,r=e.length;i<r;i++){if(e[i]){if(n=Tn(e[i])){t+=n+" "}}}return t.slice(0,-1)}if(g(e)){for(var s in e){if(e[s]){t+=s+" "}}return t.slice(0,-1)}return t}var Ln={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML",xhtml:"http://www.w3.org/1999/xhtml"}
var Sn=n("html,body,base,head,link,meta,style,title,"+"address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,"+"div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,"+"a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,"+"s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,"+"embed,object,param,source,canvas,script,noscript,del,ins,"+"caption,col,colgroup,table,thead,tbody,td,th,tr,"+"button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,"+"output,progress,select,textarea,"+"details,dialog,menu,menuitem,summary,"+"content,element,shadow,template")
var Dn=n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,"+"font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,"+"polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",true)
var Cn=function(e){return e==="pre"}
var En=function(e){return Sn(e)||Dn(e)}
function An(e){if(Dn(e)){return"svg"}if(e==="math"){return"math"}}var Yn=Object.create(null)
function jn(e){if(!O){return true}if(En(e)){return false}e=e.toLowerCase()
if(Yn[e]!=null){return Yn[e]}var t=document.createElement(e)
if(e.indexOf("-")>-1){return Yn[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement}else{return Yn[e]=/HTMLUnknownElement/.test(t.toString())}}function On(e){if(typeof e==="string"){var t=e
e=document.querySelector(e)
if(!e){"development"!=="production"&&V("Cannot find element: "+t)
return document.createElement("div")}}return e}function In(e,t){var n=document.createElement(e)
if(e!=="select"){return n}if(t.data&&t.data.attrs&&"multiple"in t.data.attrs){n.setAttribute("multiple","multiple")}return n}function Pn(e,t){return document.createElementNS(Ln[e],t)}function Nn(e){return document.createTextNode(e)}function Rn(e){return document.createComment(e)}function Fn(e,t,n){e.insertBefore(t,n)}function Hn(e,t){e.removeChild(t)}function $n(e,t){e.appendChild(t)}function zn(e){return e.parentNode}function Wn(e){return e.nextSibling}function Un(e){return e.tagName}function qn(e,t){e.textContent=t}function Bn(e,t,n){e.setAttribute(t,n)}var Vn=Object.freeze({createElement:In,createElementNS:Pn,createTextNode:Nn,createComment:Rn,insertBefore:Fn,removeChild:Hn,appendChild:$n,parentNode:zn,nextSibling:Wn,tagName:Un,setTextContent:qn,setAttribute:Bn})
var Jn={create:function e(t,n){Xn(n)},update:function e(t,n){if(t.data.ref!==n.data.ref){Xn(t,true)
Xn(n)}},destroy:function e(t){Xn(t,true)}}
function Xn(e,t){var n=e.data.ref
if(!n){return}var i=e.context
var s=e.child||e.elm
var a=i.$refs
if(t){if(Array.isArray(a[n])){r(a[n],s)}else if(a[n]===s){a[n]=undefined}}else{if(e.data.refInFor){if(Array.isArray(a[n])&&a[n].indexOf(s)<0){a[n].push(s)}else{a[n]=[s]}}else{a[n]=s}}}var Kn=new ft("",{},[])
var Qn=["create","activate","update","remove","destroy"]
function Gn(e){return e==null}function Zn(e){return e!=null}function ei(e,t){return e.key===t.key&&e.tag===t.tag&&e.isComment===t.isComment&&!e.data===!t.data}function ti(e,t,n){var i,r
var s={}
for(i=t;i<=n;++i){r=e[i].key
if(Zn(r)){s[r]=i}}return s}function ni(t){var i,r
var s={}
var a=t.modules
var l=t.nodeOps
for(i=0;i<Qn.length;++i){s[Qn[i]]=[]
for(r=0;r<a.length;++r){if(a[r][Qn[i]]!==undefined){s[Qn[i]].push(a[r][Qn[i]])}}}function u(e){return new ft(l.tagName(e).toLowerCase(),{},[],undefined,e)}function f(e,t){function n(){if(--n.listeners===0){c(e)}}n.listeners=t
return n}function c(e){var t=l.parentNode(e)
if(t){l.removeChild(t,e)}}var h=0
function d(e,t,n,i,r){e.isRootInsert=!r
if(p(e,t,n,i)){return}var s=e.data
var a=e.children
var o=e.tag
if(Zn(o)){{if(s&&s.pre){h++}if(!h&&!e.ns&&!(D.ignoredElements&&D.ignoredElements.indexOf(o)>-1)&&D.isUnknownElement(o)){V("Unknown custom element: <"+o+"> - did you "+"register the component correctly? For recursive components, "+'make sure to provide the "name" option.',e.context)}}e.elm=e.ns?l.createElementNS(e.ns,o):l.createElement(o,e)
w(e)
{g(e,a,t)
if(Zn(s)){y(e,t)}v(n,e.elm,i)}if("development"!=="production"&&s&&s.pre){h--}}else if(e.isComment){e.elm=l.createComment(e.text)
v(n,e.elm,i)}else{e.elm=l.createTextNode(e.text)
v(n,e.elm,i)}}function p(e,t,n,i){var r=e.data
if(Zn(r)){var s=Zn(e.child)&&r.keepAlive
if(Zn(r=r.hook)&&Zn(r=r.init)){r(e,false,n,i)}if(Zn(e.child)){b(e,t)
if(s){m(e,t,n,i)}return true}}}function m(e,t,n,i){var r
var a=e
while(a.child){a=a.child._vnode
if(Zn(r=a.data)&&Zn(r=r.transition)){for(r=0;r<s.activate.length;++r){s.activate[r](Kn,a)}t.push(a)
break}}v(n,e.elm,i)}function v(e,t,n){if(e){if(n){l.insertBefore(e,t,n)}else{l.appendChild(e,t)}}}function g(e,t,n){if(Array.isArray(t)){for(var i=0;i<t.length;++i){d(t[i],n,e.elm,null,true)}}else if(o(e.text)){l.appendChild(e.elm,l.createTextNode(e.text))}}function _(e){while(e.child){e=e.child._vnode}return Zn(e.tag)}function y(e,t){for(var n=0;n<s.create.length;++n){s.create[n](Kn,e)}i=e.data.hook
if(Zn(i)){if(i.create){i.create(Kn,e)}if(i.insert){t.push(e)}}}function b(e,t){if(e.data.pendingInsert){t.push.apply(t,e.data.pendingInsert)}e.elm=e.child.$el
if(_(e)){y(e,t)
w(e)}else{Xn(e)
t.push(e)}}function w(e){var t
if(Zn(t=e.context)&&Zn(t=t.$options._scopeId)){l.setAttribute(e.elm,t,"")}if(Zn(t=Dt)&&t!==e.context&&Zn(t=t.$options._scopeId)){l.setAttribute(e.elm,t,"")}}function x(e,t,n,i,r,s){for(;i<=r;++i){d(n[i],s,e,t)}}function k(e){var t,n
var i=e.data
if(Zn(i)){if(Zn(t=i.hook)&&Zn(t=t.destroy)){t(e)}for(t=0;t<s.destroy.length;++t){s.destroy[t](e)}}if(Zn(t=e.children)){for(n=0;n<e.children.length;++n){k(e.children[n])}}}function M(e,t,n,i){for(;n<=i;++n){var r=t[n]
if(Zn(r)){if(Zn(r.tag)){T(r)
k(r)}else{l.removeChild(e,r.elm)}}}}function T(e,t){if(t||Zn(e.data)){var n=s.remove.length+1
if(!t){t=f(e.elm,n)}else{t.listeners+=n}if(Zn(i=e.child)&&Zn(i=i._vnode)&&Zn(i.data)){T(i,t)}for(i=0;i<s.remove.length;++i){s.remove[i](e,t)}if(Zn(i=e.data.hook)&&Zn(i=i.remove)){i(e,t)}else{t()}}else{c(e.elm)}}function L(e,t,n,i,r){var s=0
var a=0
var o=t.length-1
var u=t[0]
var f=t[o]
var c=n.length-1
var h=n[0]
var p=n[c]
var m,v,g,_
var y=!r
while(s<=o&&a<=c){if(Gn(u)){u=t[++s]}else if(Gn(f)){f=t[--o]}else if(ei(u,h)){S(u,h,i)
u=t[++s]
h=n[++a]}else if(ei(f,p)){S(f,p,i)
f=t[--o]
p=n[--c]}else if(ei(u,p)){S(u,p,i)
y&&l.insertBefore(e,u.elm,l.nextSibling(f.elm))
u=t[++s]
p=n[--c]}else if(ei(f,h)){S(f,h,i)
y&&l.insertBefore(e,f.elm,u.elm)
f=t[--o]
h=n[++a]}else{if(Gn(m)){m=ti(t,s,o)}v=Zn(h.key)?m[h.key]:null
if(Gn(v)){d(h,i,e,u.elm)
h=n[++a]}else{g=t[v]
if("development"!=="production"&&!g){V("It seems there are duplicate keys that is causing an update error. "+"Make sure each v-for item has a unique key.")}if(ei(g,h)){S(g,h,i)
t[v]=undefined
y&&l.insertBefore(e,h.elm,u.elm)
h=n[++a]}else{d(h,i,e,u.elm)
h=n[++a]}}}}if(s>o){_=Gn(n[c+1])?null:n[c+1].elm
x(e,_,n,a,c,i)}else if(a>c){M(e,t,s,o)}}function S(e,t,n,i){if(e===t){return}if(t.isStatic&&e.isStatic&&t.key===e.key&&(t.isCloned||t.isOnce)){t.elm=e.elm
t.child=e.child
return}var r
var a=t.data
var o=Zn(a)
if(o&&Zn(r=a.hook)&&Zn(r=r.prepatch)){r(e,t)}var u=t.elm=e.elm
var f=e.children
var c=t.children
if(o&&_(t)){for(r=0;r<s.update.length;++r){s.update[r](e,t)}if(Zn(r=a.hook)&&Zn(r=r.update)){r(e,t)}}if(Gn(t.text)){if(Zn(f)&&Zn(c)){if(f!==c){L(u,f,c,n,i)}}else if(Zn(c)){if(Zn(e.text)){l.setTextContent(u,"")}x(u,null,c,0,c.length-1,n)}else if(Zn(f)){M(u,f,0,f.length-1)}else if(Zn(e.text)){l.setTextContent(u,"")}}else if(e.text!==t.text){l.setTextContent(u,t.text)}if(o){if(Zn(r=a.hook)&&Zn(r=r.postpatch)){r(e,t)}}}function C(e,t,n){if(n&&e.parent){e.parent.data.pendingInsert=t}else{for(var i=0;i<t.length;++i){t[i].data.hook.insert(t[i])}}}var E=false
var A=n("attrs,style,class,staticClass,staticStyle,key")
function Y(e,t,n){{if(!j(e,t)){return false}}t.elm=e
var r=t.tag
var s=t.data
var a=t.children
if(Zn(s)){if(Zn(i=s.hook)&&Zn(i=i.init)){i(t,true)}if(Zn(i=t.child)){b(t,n)
return true}}if(Zn(r)){if(Zn(a)){if(!e.hasChildNodes()){g(t,a,n)}else{var o=true
var l=e.firstChild
for(var u=0;u<a.length;u++){if(!l||!Y(l,a[u],n)){o=false
break}l=l.nextSibling}if(!o||l){if("development"!=="production"&&typeof console!=="undefined"&&!E){E=true
console.warn("Parent: ",e)
console.warn("Mismatching childNodes vs. VNodes: ",e.childNodes,a)}return false}}}if(Zn(s)){for(var f in s){if(!A(f)){y(t,n)
break}}}}return true}function j(t,n){if(n.tag){return n.tag.indexOf("vue-component")===0||n.tag.toLowerCase()===(t.tagName&&t.tagName.toLowerCase())}else{return e(n.text)===t.data}}return function e(t,n,i,r,a,o){if(!n){if(t){k(t)}return}var f,c
var h=false
var p=[]
if(!t){h=true
d(n,p,a,o)}else{var m=Zn(t.nodeType)
if(!m&&ei(t,n)){S(t,n,p,r)}else{if(m){if(t.nodeType===1&&t.hasAttribute("server-rendered")){t.removeAttribute("server-rendered")
i=true}if(i){if(Y(t,n,p)){C(n,p,true)
return t}else{V("The client-side rendered virtual DOM tree is not matching "+"server-rendered content. This is likely caused by incorrect "+"HTML markup, for example nesting block-level elements inside "+"<p>, or missing <tbody>. Bailing hydration and performing "+"full client-side render.")}}t=u(t)}f=t.elm
c=l.parentNode(f)
d(n,p,c,l.nextSibling(f))
if(n.parent){var v=n.parent
while(v){v.elm=n.elm
v=v.parent}if(_(n)){for(var g=0;g<s.create.length;++g){s.create[g](Kn,n.parent)}}}if(c!==null){M(c,[t],0,0)}else if(Zn(t.tag)){k(t)}}}C(n,p,h)
return n.elm}}var ii={create:ri,update:ri,destroy:function e(t){ri(t,Kn)}}
function ri(e,t){if(e.data.directives||t.data.directives){si(e,t)}}function si(e,t){var n=e===Kn
var i=oi(e.data.directives,e.context)
var r=oi(t.data.directives,t.context)
var s=[]
var a=[]
var o,l,u
for(o in r){l=i[o]
u=r[o]
if(!l){ui(u,"bind",t,e)
if(u.def&&u.def.inserted){s.push(u)}}else{u.oldValue=l.value
ui(u,"update",t,e)
if(u.def&&u.def.componentUpdated){a.push(u)}}}if(s.length){var f=function(){for(var n=0;n<s.length;n++){ui(s[n],"inserted",t,e)}}
if(n){mt(t.data.hook||(t.data.hook={}),"insert",f,"dir-insert")}else{f()}}if(a.length){mt(t.data.hook||(t.data.hook={}),"postpatch",function(){for(var n=0;n<a.length;n++){ui(a[n],"componentUpdated",t,e)}},"dir-postpatch")}if(!n){for(o in i){if(!r[o]){ui(i[o],"unbind",e)}}}}var ai=Object.create(null)
function oi(e,t){var n=Object.create(null)
if(!e){return n}var i,r
for(i=0;i<e.length;i++){r=e[i]
if(!r.modifiers){r.modifiers=ai}n[li(r)]=r
r.def=ke(t.$options,"directives",r.name,true)}return n}function li(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function ui(e,t,n,i){var r=e.def&&e.def[t]
if(r){r(n.elm,e,n,i)}}var fi=[Jn,ii]
function ci(e,t){if(!e.data.attrs&&!t.data.attrs){return}var n,i,r
var s=t.elm
var a=e.data.attrs||{}
var o=t.data.attrs||{}
if(o.__ob__){o=t.data.attrs=v({},o)}for(n in o){i=o[n]
r=a[n]
if(r!==i){hi(s,n,i)}}if(N&&o.value!==a.value){hi(s,"value",o.value)}for(n in a){if(o[n]==null){if(_n(n)){s.removeAttributeNS(gn,yn(n))}else if(!mn(n)){s.removeAttribute(n)}}}}function hi(e,t,n){if(vn(t)){if(bn(n)){e.removeAttribute(t)}else{e.setAttribute(t,t)}}else if(mn(t)){e.setAttribute(t,bn(n)||n==="false"?"false":"true")}else if(_n(t)){if(bn(n)){e.removeAttributeNS(gn,yn(t))}else{e.setAttributeNS(gn,t,n)}}else{if(bn(n)){e.removeAttribute(t)}else{e.setAttribute(t,n)}}}var di={create:ci,update:ci}
function pi(e,t){var n=t.elm
var i=t.data
var r=e.data
if(!i.staticClass&&!i.class&&(!r||!r.staticClass&&!r.class)){return}var s=wn(t)
var a=n._transitionClasses
if(a){s=Mn(s,Tn(a))}if(s!==n._prevClass){n.setAttribute("class",s)
n._prevClass=s}}var mi={create:pi,update:pi}
var vi
function gi(e,t,n,i){if(n){var r=t
t=function(n){_i(e,t,i)
arguments.length===1?r(n):r.apply(null,arguments)}}vi.addEventListener(e,t,i)}function _i(e,t,n){vi.removeEventListener(e,t,n)}function yi(e,t){if(!e.data.on&&!t.data.on){return}var n=t.data.on||{}
var i=e.data.on||{}
vi=t.elm
vt(n,i,gi,_i,t.context)}var bi={create:yi,update:yi}
function wi(e,t){if(!e.data.domProps&&!t.data.domProps){return}var n,i
var r=t.elm
var s=e.data.domProps||{}
var a=t.data.domProps||{}
if(a.__ob__){a=t.data.domProps=v({},a)}for(n in s){if(a[n]==null){r[n]=""}}for(n in a){i=a[n]
if(n==="textContent"||n==="innerHTML"){if(t.children){t.children.length=0}if(i===s[n]){continue}}if(n==="value"){r._value=i
var o=i==null?"":String(i)
if(!r.composing&&(document.activeElement!==r&&r.value!==o||xi(t,o))){r.value=o}}else{r[n]=i}}}function xi(e,n){var i=e.elm.value
var r=e.elm._vModifiers
if(r&&r.number||e.elm.type==="number"){return t(i)!==t(n)}if(r&&r.trim){return i.trim()!==n.trim()}return i!==n}var ki={create:wi,update:wi}
var Mi=l(function(e){var t={}
var n=/;(?![^(]*\))/g
var i=/:(.+)/
e.split(n).forEach(function(e){if(e){var n=e.split(i)
n.length>1&&(t[n[0].trim()]=n[1].trim())}})
return t})
function Ti(e){var t=Li(e.style)
return e.staticStyle?v(e.staticStyle,t):t}function Li(e){if(Array.isArray(e)){return w(e)}if(typeof e==="string"){return Mi(e)}return e}function Si(e,t){var n={}
var i
if(t){var r=e
while(r.child){r=r.child._vnode
if(r.data&&(i=Ti(r.data))){v(n,i)}}}if(i=Ti(e.data)){v(n,i)}var s=e
while(s=s.parent){if(s.data&&(i=Ti(s.data))){v(n,i)}}return n}var Di=/^--/
var Ci=/\s*!important$/
var Ei=function(e,t,n){if(Di.test(t)){e.style.setProperty(t,n)}else if(Ci.test(n)){e.style.setProperty(t,n.replace(Ci,""),"important")}else{e.style[ji(t)]=n}}
var Ai=["Webkit","Moz","ms"]
var Yi
var ji=l(function(e){Yi=Yi||document.createElement("div")
e=f(e)
if(e!=="filter"&&e in Yi.style){return e}var t=e.charAt(0).toUpperCase()+e.slice(1)
for(var n=0;n<Ai.length;n++){var i=Ai[n]+t
if(i in Yi.style){return i}}})
function Oi(e,t){var n=t.data
var i=e.data
if(!n.staticStyle&&!n.style&&!i.staticStyle&&!i.style){return}var r,s
var a=t.elm
var o=e.data.staticStyle
var l=e.data.style||{}
var u=o||l
var f=Li(t.data.style)||{}
t.data.style=f.__ob__?v({},f):f
var c=Si(t,true)
for(s in u){if(c[s]==null){Ei(a,s,"")}}for(s in c){r=c[s]
if(r!==u[s]){Ei(a,s,r==null?"":r)}}}var Ii={create:Oi,update:Oi}
function Pi(e,t){if(!t||!t.trim()){return}if(e.classList){if(t.indexOf(" ")>-1){t.split(/\s+/).forEach(function(t){return e.classList.add(t)})}else{e.classList.add(t)}}else{var n=" "+e.getAttribute("class")+" "
if(n.indexOf(" "+t+" ")<0){e.setAttribute("class",(n+t).trim())}}}function Ni(e,t){if(!t||!t.trim()){return}if(e.classList){if(t.indexOf(" ")>-1){t.split(/\s+/).forEach(function(t){return e.classList.remove(t)})}else{e.classList.remove(t)}}else{var n=" "+e.getAttribute("class")+" "
var i=" "+t+" "
while(n.indexOf(i)>=0){n=n.replace(i," ")}e.setAttribute("class",n.trim())}}var Ri=O&&!N
var Fi="transition"
var Hi="animation"
var $i="transition"
var zi="transitionend"
var Wi="animation"
var Ui="animationend"
if(Ri){if(window.ontransitionend===undefined&&window.onwebkittransitionend!==undefined){$i="WebkitTransition"
zi="webkitTransitionEnd"}if(window.onanimationend===undefined&&window.onwebkitanimationend!==undefined){Wi="WebkitAnimation"
Ui="webkitAnimationEnd"}}var qi=O&&window.requestAnimationFrame||setTimeout
function Bi(e){qi(function(){qi(e)})}function Vi(e,t){(e._transitionClasses||(e._transitionClasses=[])).push(t)
Pi(e,t)}function Ji(e,t){if(e._transitionClasses){r(e._transitionClasses,t)}Ni(e,t)}function Xi(e,t,n){var i=Qi(e,t)
var r=i.type
var s=i.timeout
var a=i.propCount
if(!r){return n()}var o=r===Fi?zi:Ui
var l=0
var u=function(){e.removeEventListener(o,f)
n()}
var f=function(t){if(t.target===e){if(++l>=a){u()}}}
setTimeout(function(){if(l<a){u()}},s+1)
e.addEventListener(o,f)}var Ki=/\b(transform|all)(,|$)/
function Qi(e,t){var n=window.getComputedStyle(e)
var i=n[$i+"Delay"].split(", ")
var r=n[$i+"Duration"].split(", ")
var s=Gi(i,r)
var a=n[Wi+"Delay"].split(", ")
var o=n[Wi+"Duration"].split(", ")
var l=Gi(a,o)
var u
var f=0
var c=0
if(t===Fi){if(s>0){u=Fi
f=s
c=r.length}}else if(t===Hi){if(l>0){u=Hi
f=l
c=o.length}}else{f=Math.max(s,l)
u=f>0?s>l?Fi:Hi:null
c=u?u===Fi?r.length:o.length:0}var h=u===Fi&&Ki.test(n[$i+"Property"])
return{type:u,timeout:f,propCount:c,hasTransform:h}}function Gi(e,t){while(e.length<t.length){e=e.concat(e)}return Math.max.apply(null,t.map(function(t,n){return Zi(t)+Zi(e[n])}))}function Zi(e){return Number(e.slice(0,-1))*1e3}function er(e,t){var n=e.elm
if(n._leaveCb){n._leaveCb.cancelled=true
n._leaveCb()}var i=nr(e.data.transition)
if(!i){return}if(n._enterCb||n.nodeType!==1){return}var r=i.css
var s=i.type
var a=i.enterClass
var o=i.enterActiveClass
var l=i.appearClass
var u=i.appearActiveClass
var f=i.beforeEnter
var c=i.enter
var h=i.afterEnter
var d=i.enterCancelled
var p=i.beforeAppear
var m=i.appear
var v=i.afterAppear
var g=i.appearCancelled
var _=Dt
var y=Dt.$vnode
while(y&&y.parent){y=y.parent
_=y.context}var b=!_._isMounted||!e.isRootInsert
if(b&&!m&&m!==""){return}var w=b?l:a
var x=b?u:o
var k=b?p||f:f
var M=b?typeof m==="function"?m:c:c
var T=b?v||h:h
var L=b?g||d:d
var S=r!==false&&!N
var D=M&&(M._length||M.length)>1
var C=n._enterCb=rr(function(){if(S){Ji(n,x)}if(C.cancelled){if(S){Ji(n,w)}L&&L(n)}else{T&&T(n)}n._enterCb=null})
if(!e.data.show){mt(e.data.hook||(e.data.hook={}),"insert",function(){var t=n.parentNode
var i=t&&t._pending&&t._pending[e.key]
if(i&&i.context===e.context&&i.tag===e.tag&&i.elm._leaveCb){i.elm._leaveCb()}M&&M(n,C)},"transition-insert")}k&&k(n)
if(S){Vi(n,w)
Vi(n,x)
Bi(function(){Ji(n,w)
if(!C.cancelled&&!D){Xi(n,s,C)}})}if(e.data.show){t&&t()
M&&M(n,C)}if(!S&&!D){C()}}function tr(e,t){var n=e.elm
if(n._enterCb){n._enterCb.cancelled=true
n._enterCb()}var i=nr(e.data.transition)
if(!i){return t()}if(n._leaveCb||n.nodeType!==1){return}var r=i.css
var s=i.type
var a=i.leaveClass
var o=i.leaveActiveClass
var l=i.beforeLeave
var u=i.leave
var f=i.afterLeave
var c=i.leaveCancelled
var h=i.delayLeave
var d=r!==false&&!N
var p=u&&(u._length||u.length)>1
var m=n._leaveCb=rr(function(){if(n.parentNode&&n.parentNode._pending){n.parentNode._pending[e.key]=null}if(d){Ji(n,o)}if(m.cancelled){if(d){Ji(n,a)}c&&c(n)}else{t()
f&&f(n)}n._leaveCb=null})
if(h){h(v)}else{v()}function v(){if(m.cancelled){return}if(!e.data.show){(n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e}l&&l(n)
if(d){Vi(n,a)
Vi(n,o)
Bi(function(){Ji(n,a)
if(!m.cancelled&&!p){Xi(n,s,m)}})}u&&u(n,m)
if(!d&&!p){m()}}}function nr(e){if(!e){return}if(typeof e==="object"){var t={}
if(e.css!==false){v(t,ir(e.name||"v"))}v(t,e)
return t}else if(typeof e==="string"){return ir(e)}}var ir=l(function(e){return{enterClass:e+"-enter",leaveClass:e+"-leave",appearClass:e+"-enter",enterActiveClass:e+"-enter-active",leaveActiveClass:e+"-leave-active",appearActiveClass:e+"-enter-active"}})
function rr(e){var t=false
return function(){if(!t){t=true
e()}}}function sr(e,t){if(!t.data.show){er(t)}}var ar=O?{create:sr,activate:sr,remove:function e(t,n){if(!t.data.show){tr(t,n)}else{n()}}}:{}
var or=[di,mi,bi,ki,Ii,ar]
var lr=or.concat(fi)
var ur=ni({nodeOps:Vn,modules:lr})
var fr=/^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/
if(N){document.addEventListener("selectionchange",function(){var e=document.activeElement
if(e&&e.vmodel){gr(e,"input")}})}var cr={inserted:function e(t,n,i){{if(!fr.test(i.tag)){V("v-model is not supported on element type: <"+i.tag+">. "+"If you are working with contenteditable, it's recommended to "+"wrap a library dedicated for that purpose inside a custom component.",i.context)}}if(i.tag==="select"){var r=function(){hr(t,n,i.context)}
r()
if(P||R){setTimeout(r,0)}}else if(i.tag==="textarea"||t.type==="text"){t._vModifiers=n.modifiers
if(!n.modifiers.lazy){if(!F){t.addEventListener("compositionstart",mr)
t.addEventListener("compositionend",vr)}if(N){t.vmodel=true}}}},componentUpdated:function e(t,n,i){if(i.tag==="select"){hr(t,n,i.context)
var r=t.multiple?n.value.some(function(e){return dr(e,t.options)}):n.value!==n.oldValue&&dr(n.value,t.options)
if(r){gr(t,"change")}}}}
function hr(e,t,n){var i=t.value
var r=e.multiple
if(r&&!Array.isArray(i)){"development"!=="production"&&V('<select multiple v-model="'+t.expression+'"> '+"expects an Array value for its binding, but got "+Object.prototype.toString.call(i).slice(8,-1),n)
return}var s,a
for(var o=0,l=e.options.length;o<l;o++){a=e.options[o]
if(r){s=S(i,pr(a))>-1
if(a.selected!==s){a.selected=s}}else{if(L(pr(a),i)){if(e.selectedIndex!==o){e.selectedIndex=o}return}}}if(!r){e.selectedIndex=-1}}function dr(e,t){for(var n=0,i=t.length;n<i;n++){if(L(pr(t[n]),e)){return false}}return true}function pr(e){return"_value"in e?e._value:e.value}function mr(e){e.target.composing=true}function vr(e){e.target.composing=false
gr(e.target,"input")}function gr(e,t){var n=document.createEvent("HTMLEvents")
n.initEvent(t,true,true)
e.dispatchEvent(n)}function _r(e){return e.child&&(!e.data||!e.data.transition)?_r(e.child._vnode):e}var yr={bind:function e(t,n,i){var r=n.value
i=_r(i)
var s=i.data&&i.data.transition
var a=t.__vOriginalDisplay=t.style.display==="none"?"":t.style.display
if(r&&s&&!N){i.data.show=true
er(i,function(){t.style.display=a})}else{t.style.display=r?a:"none"}},update:function e(t,n,i){var r=n.value
var s=n.oldValue
if(r===s){return}i=_r(i)
var a=i.data&&i.data.transition
if(a&&!N){i.data.show=true
if(r){er(i,function(){t.style.display=t.__vOriginalDisplay})}else{tr(i,function(){t.style.display="none"})}}else{t.style.display=r?t.__vOriginalDisplay:"none"}}}
var br={model:cr,show:yr}
var wr={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String}
function xr(e){var t=e&&e.componentOptions
if(t&&t.Ctor.options.abstract){return xr(wt(t.children))}else{return e}}function kr(e){var t={}
var n=e.$options
for(var i in n.propsData){t[i]=e[i]}var r=n._parentListeners
for(var s in r){t[f(s)]=r[s].fn}return t}function Mr(e,t){return/\d-keep-alive$/.test(t.tag)?e("keep-alive"):null}function Tr(e){while(e=e.parent){if(e.data.transition){return true}}}var Lr={name:"transition",props:wr,abstract:true,render:function e(t){var n=this
var i=this.$slots.default
if(!i){return}i=i.filter(function(e){return e.tag})
if(!i.length){return}if("development"!=="production"&&i.length>1){V("<transition> can only be used on a single element. Use "+"<transition-group> for lists.",this.$parent)}var r=this.mode
if("development"!=="production"&&r&&r!=="in-out"&&r!=="out-in"){V("invalid <transition> mode: "+r,this.$parent)}var s=i[0]
if(Tr(this.$vnode)){return s}var a=xr(s)
if(!a){return s}if(this._leaving){return Mr(t,s)}var o=a.key=a.key==null||a.isStatic?"__v"+(a.tag+this._uid)+"__":a.key
var l=(a.data||(a.data={})).transition=kr(this)
var u=this._vnode
var f=xr(u)
if(a.data.directives&&a.data.directives.some(function(e){return e.name==="show"})){a.data.show=true}if(f&&f.data&&f.key!==o){var c=f.data.transition=v({},l)
if(r==="out-in"){this._leaving=true
mt(c,"afterLeave",function(){n._leaving=false
n.$forceUpdate()},o)
return Mr(t,s)}else if(r==="in-out"){var h
var d=function(){h()}
mt(l,"afterEnter",d,o)
mt(l,"enterCancelled",d,o)
mt(c,"delayLeave",function(e){h=e},o)}}return s}}
var Sr=v({tag:String,moveClass:String},wr)
delete Sr.mode
var Dr={props:Sr,render:function e(t){var n=this.tag||this.$vnode.data.tag||"span"
var i=Object.create(null)
var r=this.prevChildren=this.children
var s=this.$slots.default||[]
var a=this.children=[]
var o=kr(this)
for(var l=0;l<s.length;l++){var u=s[l]
if(u.tag){if(u.key!=null&&String(u.key).indexOf("__vlist")!==0){a.push(u)
i[u.key]=u;(u.data||(u.data={})).transition=o}else{var f=u.componentOptions
var c=f?f.Ctor.options.name||f.tag:u.tag
V("<transition-group> children must be keyed: <"+c+">")}}}if(r){var h=[]
var d=[]
for(var p=0;p<r.length;p++){var m=r[p]
m.data.transition=o
m.data.pos=m.elm.getBoundingClientRect()
if(i[m.key]){h.push(m)}else{d.push(m)}}this.kept=t(n,null,h)
this.removed=d}return t(n,null,a)},beforeUpdate:function e(){this.__patch__(this._vnode,this.kept,false,true)
this._vnode=this.kept},updated:function e(){var t=this.prevChildren
var n=this.moveClass||(this.name||"v")+"-move"
if(!t.length||!this.hasMove(t[0].elm,n)){return}t.forEach(Cr)
t.forEach(Er)
t.forEach(Ar)
var i=document.body.offsetHeight
t.forEach(function(e){if(e.data.moved){var t=e.elm
var i=t.style
Vi(t,n)
i.transform=i.WebkitTransform=i.transitionDuration=""
t.addEventListener(zi,t._moveCb=function e(i){if(!i||/transform$/.test(i.propertyName)){t.removeEventListener(zi,e)
t._moveCb=null
Ji(t,n)}})}})},methods:{hasMove:function e(t,n){if(!Ri){return false}if(this._hasMove!=null){return this._hasMove}Vi(t,n)
var i=Qi(t)
Ji(t,n)
return this._hasMove=i.hasTransform}}}
function Cr(e){if(e.elm._moveCb){e.elm._moveCb()}if(e.elm._enterCb){e.elm._enterCb()}}function Er(e){e.data.newPos=e.elm.getBoundingClientRect()}function Ar(e){var t=e.data.pos
var n=e.data.newPos
var i=t.left-n.left
var r=t.top-n.top
if(i||r){e.data.moved=true
var s=e.elm.style
s.transform=s.WebkitTransform="translate("+i+"px,"+r+"px)"
s.transitionDuration="0s"}}var Yr={Transition:Lr,TransitionGroup:Dr}
nn.config.isUnknownElement=jn
nn.config.isReservedTag=En
nn.config.getTagNamespace=An
nn.config.mustUseProp=pn
v(nn.options.directives,br)
v(nn.options.components,Yr)
nn.prototype.__patch__=O?ur:x
nn.prototype.$mount=function(e,t){e=e&&O?On(e):undefined
return this._mount(e,t)}
setTimeout(function(){if(D.devtools){if(W){W.emit("init",nn)}else if("development"!=="production"&&O&&!R&&/Chrome\/\d+/.test(window.navigator.userAgent)){console.log("Download the Vue Devtools for a better development experience:\n"+"https://github.com/vuejs/vue-devtools")}}},0)
function jr(e,t){var n=document.createElement("div")
n.innerHTML='<div a="'+e+'">'
return n.innerHTML.indexOf(t)>0}var Or=O?jr("\n","&#10;"):false
var Ir
function Pr(e){Ir=Ir||document.createElement("div")
Ir.innerHTML=e
return Ir.textContent}var Nr=n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,"+"link,meta,param,source,track,wbr",true)
var Rr=n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source",true)
var Fr=n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,"+"details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,"+"h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,"+"optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,"+"title,tr,track",true)
var Hr=/([^\s"'<>\/=]+)/
var $r=/(?:=)/
var zr=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^\s"'=<>`]+)/.source]
var Wr=new RegExp("^\\s*"+Hr.source+"(?:\\s*("+$r.source+")"+"\\s*(?:"+zr.join("|")+"))?")
var Ur="[a-zA-Z_][\\w\\-\\.]*"
var qr="((?:"+Ur+"\\:)?"+Ur+")"
var Br=new RegExp("^<"+qr)
var Vr=/^\s*(\/?)>/
var Jr=new RegExp("^<\\/"+qr+"[^>]*>")
var Xr=/^<!DOCTYPE [^>]+>/i
var Kr=/^<!--/
var Qr=/^<!\[/
var Gr=false
"x".replace(/x(.)?/g,function(e,t){Gr=t===""})
var Zr=n("script,style",true)
var es=function(e){return e.name==="lang"&&e.value!=="html"}
var ts=function(e,t,n){if(Zr(e)){return true}if(t&&n.length===1){if(e==="template"&&!n[0].attrs.some(es)){return false}else{return true}}return false}
var ns={}
var is=/&lt;/g
var rs=/&gt;/g
var ss=/&#10;/g
var as=/&amp;/g
var os=/&quot;/g
function ls(e,t){if(t){e=e.replace(ss,"\n")}return e.replace(is,"<").replace(rs,">").replace(as,"&").replace(os,'"')}function us(e,t){var n=[]
var i=t.expectHTML
var r=t.isUnaryTag||k
var s=0
var a,o
while(e){a=e
if(!o||!ts(o,t.sfc,n)){var l=e.indexOf("<")
if(l===0){if(Kr.test(e)){var u=e.indexOf("-->")
if(u>=0){x(u+3)
continue}}if(Qr.test(e)){var f=e.indexOf("]>")
if(f>=0){x(f+2)
continue}}var c=e.match(Xr)
if(c){x(c[0].length)
continue}var h=e.match(Jr)
if(h){var d=s
x(h[0].length)
L(h[0],h[1],d,s)
continue}var p=M()
if(p){T(p)
continue}}var m=void 0,v=void 0,g=void 0
if(l>0){v=e.slice(l)
while(!Jr.test(v)&&!Br.test(v)&&!Kr.test(v)&&!Qr.test(v)){g=v.indexOf("<",1)
if(g<0){break}l+=g
v=e.slice(l)}m=e.substring(0,l)
x(l)}if(l<0){m=e
e=""}if(t.chars&&m){t.chars(m)}}else{var _=o.toLowerCase()
var y=ns[_]||(ns[_]=new RegExp("([\\s\\S]*?)(</"+_+"[^>]*>)","i"))
var b=0
var w=e.replace(y,function(e,n,i){b=i.length
if(_!=="script"&&_!=="style"&&_!=="noscript"){n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")}if(t.chars){t.chars(n)}return""})
s+=e.length-w.length
e=w
L("</"+_+">",_,s-b,s)}if(e===a&&t.chars){t.chars(e)
break}}L()
function x(t){s+=t
e=e.substring(t)}function M(){var t=e.match(Br)
if(t){var n={tagName:t[1],attrs:[],start:s}
x(t[0].length)
var i,r
while(!(i=e.match(Vr))&&(r=e.match(Wr))){x(r[0].length)
n.attrs.push(r)}if(i){n.unarySlash=i[1]
x(i[0].length)
n.end=s
return n}}}function T(e){var s=e.tagName
var a=e.unarySlash
if(i){if(o==="p"&&Fr(s)){L("",o)}if(Rr(s)&&o===s){L("",s)}}var l=r(s)||s==="html"&&o==="head"||!!a
var u=e.attrs.length
var f=new Array(u)
for(var c=0;c<u;c++){var h=e.attrs[c]
if(Gr&&h[0].indexOf('""')===-1){if(h[3]===""){delete h[3]}if(h[4]===""){delete h[4]}if(h[5]===""){delete h[5]}}var d=h[3]||h[4]||h[5]||""
f[c]={name:h[1],value:ls(d,t.shouldDecodeNewlines)}}if(!l){n.push({tag:s,attrs:f})
o=s
a=""}if(t.start){t.start(s,f,l,e.start,e.end)}}function L(e,i,r,a){var l
if(r==null){r=s}if(a==null){a=s}if(i){var u=i.toLowerCase()
for(l=n.length-1;l>=0;l--){if(n[l].tag.toLowerCase()===u){break}}}else{l=0}if(l>=0){for(var f=n.length-1;f>=l;f--){if(t.end){t.end(n[f].tag,r,a)}}n.length=l
o=l&&n[l-1].tag}else if(i.toLowerCase()==="br"){if(t.start){t.start(i,[],true,r,a)}}else if(i.toLowerCase()==="p"){if(t.start){t.start(i,[],false,r,a)}if(t.end){t.end(i,r,a)}}}}function fs(e){var t=false
var n=false
var i=false
var r=false
var s=0
var a=0
var o=0
var l=0
var u,f,c,h,d
for(c=0;c<e.length;c++){f=u
u=e.charCodeAt(c)
if(t){if(u===39&&f!==92){t=false}}else if(n){if(u===34&&f!==92){n=false}}else if(i){if(u===96&&f!==92){i=false}}else if(r){if(u===47&&f!==92){r=false}}else if(u===124&&e.charCodeAt(c+1)!==124&&e.charCodeAt(c-1)!==124&&!s&&!a&&!o){if(h===undefined){l=c+1
h=e.slice(0,c).trim()}else{v()}}else{switch(u){case 34:n=true
break
case 39:t=true
break
case 96:i=true
break
case 40:o++
break
case 41:o--
break
case 91:a++
break
case 93:a--
break
case 123:s++
break
case 125:s--
break}if(u===47){var p=c-1
var m=void 0
for(;p>=0;p--){m=e.charAt(p)
if(m!==" "){break}}if(!m||!/[\w$]/.test(m)){r=true}}}}if(h===undefined){h=e.slice(0,c).trim()}else if(l!==0){v()}function v(){(d||(d=[])).push(e.slice(l,c).trim())
l=c+1}if(d){for(c=0;c<d.length;c++){h=cs(h,d[c])}}return h}function cs(e,t){var n=t.indexOf("(")
if(n<0){return'_f("'+t+'")('+e+")"}else{var i=t.slice(0,n)
var r=t.slice(n+1)
return'_f("'+i+'")('+e+","+r}}var hs=/\{\{((?:.|\n)+?)\}\}/g
var ds=/[-.*+?^${}()|[\]\/\\]/g
var ps=l(function(e){var t=e[0].replace(ds,"\\$&")
var n=e[1].replace(ds,"\\$&")
return new RegExp(t+"((?:.|\\n)+?)"+n,"g")})
function ms(e,t){var n=t?ps(t):hs
if(!n.test(e)){return}var i=[]
var r=n.lastIndex=0
var s,a
while(s=n.exec(e)){a=s.index
if(a>r){i.push(JSON.stringify(e.slice(r,a)))}var o=fs(s[1].trim())
i.push("_s("+o+")")
r=a+s[0].length}if(r<e.length){i.push(JSON.stringify(e.slice(r)))}return i.join("+")}function vs(e){console.error("[Vue parser]: "+e)}function gs(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function _s(e,t,n){(e.props||(e.props=[])).push({name:t,value:n})}function ys(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n})}function bs(e,t,n,i,r,s){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:i,arg:r,modifiers:s})}function ws(e,t,n,i,r){if(i&&i.capture){delete i.capture
t="!"+t}if(i&&i.once){delete i.once
t="~"+t}var s
if(i&&i.native){delete i.native
s=e.nativeEvents||(e.nativeEvents={})}else{s=e.events||(e.events={})}var a={value:n,modifiers:i}
var o=s[t]
if(Array.isArray(o)){r?o.unshift(a):o.push(a)}else if(o){s[t]=r?[a,o]:[o,a]}else{s[t]=a}}function xs(e,t,n){var i=ks(e,":"+t)||ks(e,"v-bind:"+t)
if(i!=null){return fs(i)}else if(n!==false){var r=ks(e,t)
if(r!=null){return JSON.stringify(r)}}}function ks(e,t){var n
if((n=e.attrsMap[t])!=null){var i=e.attrsList
for(var r=0,s=i.length;r<s;r++){if(i[r].name===t){i.splice(r,1)
break}}}return n}var Ms
var Ts
var Ls
var Ss
var Ds
var Cs
function Es(e){Ts=e
Ms=Ts.length
Ss=Ds=Cs=0
if(e.indexOf("[")<0||e.lastIndexOf("]")<Ms-1){return{exp:e,idx:null}}while(!Ys()){Ls=As()
if(js(Ls)){Is(Ls)}else if(Ls===91){Os(Ls)}}return{exp:e.substring(0,Ds),idx:e.substring(Ds+1,Cs)}}function As(){return Ts.charCodeAt(++Ss)}function Ys(){return Ss>=Ms}function js(e){return e===34||e===39}function Os(e){var t=1
Ds=Ss
while(!Ys()){e=As()
if(js(e)){Is(e)
continue}if(e===91){t++}if(e===93){t--}if(t===0){Cs=Ss
break}}}function Is(e){var t=e
while(!Ys()){e=As()
if(e===t){break}}}var Ps=/^v-|^@|^:/
var Ns=/(.*?)\s+(?:in|of)\s+(.*)/
var Rs=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/
var Fs=/^:|^v-bind:/
var Hs=/^@|^v-on:/
var $s=/:(.*)$/
var zs=/\.[^.]+/g
var Ws=l(Pr)
var Us
var qs
var Bs
var Vs
var Js
var Xs
var Ks
var Qs
function Gs(e,t){Us=t.warn||vs
qs=t.getTagNamespace||k
Bs=t.mustUseProp||k
Vs=t.isPreTag||k
Js=gs(t.modules,"preTransformNode")
Xs=gs(t.modules,"transformNode")
Ks=gs(t.modules,"postTransformNode")
Qs=t.delimiters
var n=[]
var i=t.preserveWhitespace!==false
var r
var s
var a=false
var o=false
var l=false
us(e,{expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,shouldDecodeNewlines:t.shouldDecodeNewlines,start:function i(u,f,c){var h=s&&s.ns||qs(u)
if(P&&h==="svg"){f=_a(f)}var d={type:1,tag:u,attrsList:f,attrsMap:da(f),parent:s,children:[]}
if(h){d.ns=h}if(ma(d)&&!z()){d.forbidden=true
"development"!=="production"&&Us("Templates should only be responsible for mapping the state to the "+"UI. Avoid placing tags with side-effects in your templates, such as "+"<"+u+">.")}for(var p=0;p<Js.length;p++){Js[p](d,t)}if(!a){Zs(d)
if(d.pre){a=true}}if(Vs(d.tag)){o=true}if(a){ea(d)}else{ia(d)
ra(d)
oa(d)
ta(d)
d.plain=!d.key&&!f.length
na(d)
la(d)
ua(d)
for(var m=0;m<Xs.length;m++){Xs[m](d,t)}fa(d)}function v(t){if("development"!=="production"&&!l){if(t.tag==="slot"||t.tag==="template"){l=true
Us("Cannot use <"+t.tag+"> as component root element because it may "+"contain multiple nodes:\n"+e)}if(t.attrsMap.hasOwnProperty("v-for")){l=true
Us("Cannot use v-for on stateful component root element because "+"it renders multiple elements:\n"+e)}}}if(!r){r=d
v(r)}else if(!n.length){if(r.if&&(d.elseif||d.else)){v(d)
aa(r,{exp:d.elseif,block:d})}else if("development"!=="production"&&!l){l=true
Us("Component template should contain exactly one root element:"+"\n\n"+e+"\n\n"+"If you are using v-if on multiple elements, "+"use v-else-if to chain them instead.")}}if(s&&!d.forbidden){if(d.elseif||d.else){sa(d,s)}else if(d.slotScope){s.plain=false
var g=d.slotTarget||"default";(s.scopedSlots||(s.scopedSlots={}))[g]=d}else{s.children.push(d)
d.parent=s}}if(!c){s=d
n.push(d)}for(var _=0;_<Ks.length;_++){Ks[_](d,t)}},end:function e(){var t=n[n.length-1]
var i=t.children[t.children.length-1]
if(i&&i.type===3&&i.text===" "){t.children.pop()}n.length-=1
s=n[n.length-1]
if(t.pre){a=false}if(Vs(t.tag)){o=false}},chars:function t(n){if(!s){if("development"!=="production"&&!l&&n===e){l=true
Us("Component template requires a root element, rather than just text:\n\n"+e)}return}if(P&&s.tag==="textarea"&&s.attrsMap.placeholder===n){return}n=o||n.trim()?Ws(n):i&&s.children.length?" ":""
if(n){var r
if(!a&&n!==" "&&(r=ms(n,Qs))){s.children.push({type:2,expression:r,text:n})}else{s.children.push({type:3,text:n})}}}})
return r}function Zs(e){if(ks(e,"v-pre")!=null){e.pre=true}}function ea(e){var t=e.attrsList.length
if(t){var n=e.attrs=new Array(t)
for(var i=0;i<t;i++){n[i]={name:e.attrsList[i].name,value:JSON.stringify(e.attrsList[i].value)}}}else if(!e.pre){e.plain=true}}function ta(e){var t=xs(e,"key")
if(t){if("development"!=="production"&&e.tag==="template"){Us("<template> cannot be keyed. Place the key on real elements instead.")}e.key=t}}function na(e){var t=xs(e,"ref")
if(t){e.ref=t
e.refInFor=ca(e)}}function ia(e){var t
if(t=ks(e,"v-for")){var n=t.match(Ns)
if(!n){"development"!=="production"&&Us("Invalid v-for expression: "+t)
return}e.for=n[2].trim()
var i=n[1].trim()
var r=i.match(Rs)
if(r){e.alias=r[1].trim()
e.iterator1=r[2].trim()
if(r[3]){e.iterator2=r[3].trim()}}else{e.alias=i}}}function ra(e){var t=ks(e,"v-if")
if(t){e.if=t
aa(e,{exp:t,block:e})}else{if(ks(e,"v-else")!=null){e.else=true}var n=ks(e,"v-else-if")
if(n){e.elseif=n}}}function sa(e,t){var n=pa(t.children)
if(n&&n.if){aa(n,{exp:e.elseif,block:e})}else{Us("v-"+(e.elseif?'else-if="'+e.elseif+'"':"else")+" "+"used on element <"+e.tag+"> without corresponding v-if.")}}function aa(e,t){if(!e.ifConditions){e.ifConditions=[]}e.ifConditions.push(t)}function oa(e){var t=ks(e,"v-once")
if(t!=null){e.once=true}}function la(e){if(e.tag==="slot"){e.slotName=xs(e,"name")
if("development"!=="production"&&e.key){Us("`key` does not work on <slot> because slots are abstract outlets "+"and can possibly expand into multiple elements. "+"Use the key on a wrapping element instead.")}}else{var t=xs(e,"slot")
if(t){e.slotTarget=t==='""'?'"default"':t}if(e.tag==="template"){e.slotScope=ks(e,"scope")}}}function ua(e){var t
if(t=xs(e,"is")){e.component=t}if(ks(e,"inline-template")!=null){e.inlineTemplate=true}}function fa(e){var t=e.attrsList
var n,i,r,s,a,o,l,u
for(n=0,i=t.length;n<i;n++){r=s=t[n].name
a=t[n].value
if(Ps.test(r)){e.hasBindings=true
l=ha(r)
if(l){r=r.replace(zs,"")}if(Fs.test(r)){r=r.replace(Fs,"")
a=fs(a)
u=false
if(l){if(l.prop){u=true
r=f(r)
if(r==="innerHtml"){r="innerHTML"}}if(l.camel){r=f(r)}}if(u||Bs(e.tag,r)){_s(e,r,a)}else{ys(e,r,a)}}else if(Hs.test(r)){r=r.replace(Hs,"")
ws(e,r,a,l)}else{r=r.replace(Ps,"")
var c=r.match($s)
if(c&&(o=c[1])){r=r.slice(0,-(o.length+1))}bs(e,r,s,a,o,l)
if("development"!=="production"&&r==="model"){ya(e,a)}}}else{{var h=ms(a,Qs)
if(h){Us(r+'="'+a+'": '+"Interpolation inside attributes has been removed. "+"Use v-bind or the colon shorthand instead. For example, "+'instead of <div id="{{ val }}">, use <div :id="val">.')}}ys(e,r,JSON.stringify(a))}}}function ca(e){var t=e
while(t){if(t.for!==undefined){return true}t=t.parent}return false}function ha(e){var t=e.match(zs)
if(t){var n={}
t.forEach(function(e){n[e.slice(1)]=true})
return n}}function da(e){var t={}
for(var n=0,i=e.length;n<i;n++){if("development"!=="production"&&t[e[n].name]&&!P){Us("duplicate attribute: "+e[n].name)}t[e[n].name]=e[n].value}return t}function pa(e){var t=e.length
while(t--){if(e[t].tag){return e[t]}}}function ma(e){return e.tag==="style"||e.tag==="script"&&(!e.attrsMap.type||e.attrsMap.type==="text/javascript")}var va=/^xmlns:NS\d+/
var ga=/^NS\d+:/
function _a(e){var t=[]
for(var n=0;n<e.length;n++){var i=e[n]
if(!va.test(i.name)){i.name=i.name.replace(ga,"")
t.push(i)}}return t}function ya(e,t){var n=e
while(n){if(n.for&&n.alias===t){Us("<"+e.tag+' v-model="'+t+'">: '+"You are binding v-model directly to a v-for iteration alias. "+"This will not be able to modify the v-for source array because "+"writing to the alias is like modifying a function local variable. "+"Consider using an array of objects and use v-model on an object property instead.")}n=n.parent}}var ba
var wa
var xa=l(Ma)
function ka(e,t){if(!e){return}ba=xa(t.staticKeys||"")
wa=t.isReservedTag||k
Ta(e)
La(e,false)}function Ma(e){return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}function Ta(e){e.static=Da(e)
if(e.type===1){if(!wa(e.tag)&&e.tag!=="slot"&&e.attrsMap["inline-template"]==null){return}for(var t=0,n=e.children.length;t<n;t++){var i=e.children[t]
Ta(i)
if(!i.static){e.static=false}}}}function La(e,t){if(e.type===1){if(e.static||e.once){e.staticInFor=t}if(e.static&&e.children.length&&!(e.children.length===1&&e.children[0].type===3)){e.staticRoot=true
return}else{e.staticRoot=false}if(e.children){for(var n=0,i=e.children.length;n<i;n++){La(e.children[n],t||!!e.for)}}if(e.ifConditions){Sa(e.ifConditions,t)}}}function Sa(e,t){for(var n=1,i=e.length;n<i;n++){La(e[n].block,t)}}function Da(e){if(e.type===2){return false}if(e.type===3){return true}return!!(e.pre||!e.hasBindings&&!e.if&&!e.for&&!i(e.tag)&&wa(e.tag)&&!Ca(e)&&Object.keys(e).every(ba))}function Ca(e){while(e.parent){e=e.parent
if(e.tag!=="template"){return false}if(e.for){return true}}return false}var Ea=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/
var Aa=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/
var Ya={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]}
var ja={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:"if($event.target !== $event.currentTarget)return;",ctrl:"if(!$event.ctrlKey)return;",shift:"if(!$event.shiftKey)return;",alt:"if(!$event.altKey)return;",meta:"if(!$event.metaKey)return;"}
function Oa(e,t){var n=t?"nativeOn:{":"on:{"
for(var i in e){n+='"'+i+'":'+Ia(i,e[i])+","}return n.slice(0,-1)+"}"}function Ia(e,t){if(!t){return"function(){}"}else if(Array.isArray(t)){return"["+t.map(function(t){return Ia(e,t)}).join(",")+"]"}else if(!t.modifiers){return Ea.test(t.value)||Aa.test(t.value)?t.value:"function($event){"+t.value+"}"}else{var n=""
var i=[]
for(var r in t.modifiers){if(ja[r]){n+=ja[r]}else{i.push(r)}}if(i.length){n=Pa(i)+n}var s=Aa.test(t.value)?t.value+"($event)":t.value
return"function($event){"+n+s+"}"}}function Pa(e){return"if("+e.map(Na).join("&&")+")return;"}function Na(e){var t=parseInt(e,10)
if(t){return"$event.keyCode!=="+t}var n=Ya[e]
return"_k($event.keyCode,"+JSON.stringify(e)+(n?","+JSON.stringify(n):"")+")"}function Ra(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+(t.modifiers&&t.modifiers.prop?",true":"")+")"}}var Fa={bind:Ra,cloak:x}
var Ha
var $a
var za
var Wa
var Ua
var qa
var Ba
function Va(e,t){var n=Ua
var i=Ua=[]
var r=qa
qa=0
Ba=t
Ha=t.warn||vs
$a=gs(t.modules,"transformCode")
za=gs(t.modules,"genData")
Wa=t.directives||{}
var s=e?Ja(e):'_c("div")'
Ua=n
qa=r
return{render:"with(this){return "+s+"}",staticRenderFns:i}}function Ja(e){if(e.staticRoot&&!e.staticProcessed){return Xa(e)}else if(e.once&&!e.onceProcessed){return Ka(e)}else if(e.for&&!e.forProcessed){return Za(e)}else if(e.if&&!e.ifProcessed){return Qa(e)}else if(e.tag==="template"&&!e.slotTarget){return so(e)||"void 0"}else if(e.tag==="slot"){return fo(e)}else{var t
if(e.component){t=co(e.component,e)}else{var n=e.plain?undefined:eo(e)
var i=e.inlineTemplate?null:so(e,true)
t="_c('"+e.tag+"'"+(n?","+n:"")+(i?","+i:"")+")"}for(var r=0;r<$a.length;r++){t=$a[r](e,t)}return t}}function Xa(e){e.staticProcessed=true
Ua.push("with(this){return "+Ja(e)+"}")
return"_m("+(Ua.length-1)+(e.staticInFor?",true":"")+")"}function Ka(e){e.onceProcessed=true
if(e.if&&!e.ifProcessed){return Qa(e)}else if(e.staticInFor){var t=""
var n=e.parent
while(n){if(n.for){t=n.key
break}n=n.parent}if(!t){"development"!=="production"&&Ha("v-once can only be used inside v-for that is keyed. ")
return Ja(e)}return"_o("+Ja(e)+","+qa++ +(t?","+t:"")+")"}else{return Xa(e)}}function Qa(e){e.ifProcessed=true
return Ga(e.ifConditions.slice())}function Ga(e){if(!e.length){return"_e()"}var t=e.shift()
if(t.exp){return"("+t.exp+")?"+n(t.block)+":"+Ga(e)}else{return""+n(t.block)}function n(e){return e.once?Ka(e):Ja(e)}}function Za(e){var t=e.for
var n=e.alias
var i=e.iterator1?","+e.iterator1:""
var r=e.iterator2?","+e.iterator2:""
e.forProcessed=true
return"_l(("+t+"),"+"function("+n+i+r+"){"+"return "+Ja(e)+"})"}function eo(e){var t="{"
var n=to(e)
if(n){t+=n+","}if(e.key){t+="key:"+e.key+","}if(e.ref){t+="ref:"+e.ref+","}if(e.refInFor){t+="refInFor:true,"}if(e.pre){t+="pre:true,"}if(e.component){t+='tag:"'+e.tag+'",'}for(var i=0;i<za.length;i++){t+=za[i](e)}if(e.attrs){t+="attrs:{"+ho(e.attrs)+"},"}if(e.props){t+="domProps:{"+ho(e.props)+"},"}if(e.events){t+=Oa(e.events)+","}if(e.nativeEvents){t+=Oa(e.nativeEvents,true)+","}if(e.slotTarget){t+="slot:"+e.slotTarget+","}if(e.scopedSlots){t+=io(e.scopedSlots)+","}if(e.inlineTemplate){var r=no(e)
if(r){t+=r+","}}t=t.replace(/,$/,"")+"}"
if(e.wrapData){t=e.wrapData(t)}return t}function to(e){var t=e.directives
if(!t){return}var n="directives:["
var i=false
var r,s,a,o
for(r=0,s=t.length;r<s;r++){a=t[r]
o=true
var l=Wa[a.name]||Fa[a.name]
if(l){o=!!l(e,a,Ha)}if(o){i=true
n+='{name:"'+a.name+'",rawName:"'+a.rawName+'"'+(a.value?",value:("+a.value+"),expression:"+JSON.stringify(a.value):"")+(a.arg?',arg:"'+a.arg+'"':"")+(a.modifiers?",modifiers:"+JSON.stringify(a.modifiers):"")+"},"}}if(i){return n.slice(0,-1)+"]"}}function no(e){var t=e.children[0]
if("development"!=="production"&&(e.children.length>1||t.type!==1)){Ha("Inline-template components must have exactly one child element.")}if(t.type===1){var n=Va(t,Ba)
return"inlineTemplate:{render:function(){"+n.render+"},staticRenderFns:["+n.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}function io(e){return"scopedSlots:{"+Object.keys(e).map(function(t){return ro(t,e[t])}).join(",")+"}"}function ro(e,t){return e+":function("+String(t.attrsMap.scope)+"){"+"return "+(t.tag==="template"?so(t)||"void 0":Ja(t))+"}"}function so(e,t){var n=e.children
if(n.length){var i=n[0]
if(n.length===1&&i.for&&i.tag!=="template"&&i.tag!=="slot"){return Ja(i)}return"["+n.map(lo).join(",")+"]"+(t?ao(n)?"":",true":"")}}function ao(e){for(var t=0;t<e.length;t++){var n=e[t]
if(oo(n)||n.if&&n.ifConditions.some(function(e){return oo(e.block)})){return false}}return true}function oo(e){return e.for||e.tag==="template"||e.tag==="slot"}function lo(e){if(e.type===1){return Ja(e)}else{return uo(e)}}function uo(e){return"_v("+(e.type===2?e.expression:po(JSON.stringify(e.text)))+")"}function fo(e){var t=e.slotName||'"default"'
var n=so(e)
return"_t("+t+(n?","+n:"")+(e.attrs?(n?"":",null")+",{"+e.attrs.map(function(e){return f(e.name)+":"+e.value}).join(",")+"}":"")+")"}function co(e,t){var n=t.inlineTemplate?null:so(t,true)
return"_c("+e+","+eo(t)+(n?","+n:"")+")"}function ho(e){var t=""
for(var n=0;n<e.length;n++){var i=e[n]
t+='"'+i.name+'":'+po(i.value)+","}return t.slice(0,-1)}function po(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function mo(e,t){var n=Gs(e.trim(),t)
ka(n,t)
var i=Va(n,t)
return{ast:n,render:i.render,staticRenderFns:i.staticRenderFns}}var vo=new RegExp("\\b"+("do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,"+"super,throw,while,yield,delete,export,import,return,switch,default,"+"extends,finally,continue,debugger,function,arguments").split(",").join("\\b|\\b")+"\\b")
var go=/[A-Za-z_$][\w$]*/
var _o=/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g
function yo(e){var t=[]
if(e){bo(e,t)}return t}function bo(e,t){if(e.type===1){for(var n in e.attrsMap){if(Ps.test(n)){var i=e.attrsMap[n]
if(i){if(n==="v-for"){wo(e,'v-for="'+i+'"',t)}else{ko(i,n+'="'+i+'"',t)}}}}if(e.children){for(var r=0;r<e.children.length;r++){bo(e.children[r],t)}}}else if(e.type===2){ko(e.expression,e.text,t)}}function wo(e,t,n){ko(e.for||"",t,n)
xo(e.alias,"v-for alias",t,n)
xo(e.iterator1,"v-for iterator",t,n)
xo(e.iterator2,"v-for iterator",t,n)}function xo(e,t,n,i){if(typeof e==="string"&&!go.test(e)){i.push("- invalid "+t+' "'+e+'" in expression: '+n)}}function ko(e,t,n){try{new Function("return "+e)}catch(r){var i=e.replace(_o,"").match(vo)
if(i){n.push("- avoid using JavaScript keyword as property name: "+'"'+i[0]+'" in expression '+t)}else{n.push("- invalid expression: "+t)}}}function Mo(e,t){var n=t.warn||vs
var i=ks(e,"class")
if("development"!=="production"&&i){var r=ms(i,t.delimiters)
if(r){n('class="'+i+'": '+"Interpolation inside attributes has been removed. "+"Use v-bind or the colon shorthand instead. For example, "+'instead of <div class="{{ val }}">, use <div :class="val">.')}}if(i){e.staticClass=JSON.stringify(i)}var s=xs(e,"class",false)
if(s){e.classBinding=s}}function To(e){var t=""
if(e.staticClass){t+="staticClass:"+e.staticClass+","}if(e.classBinding){t+="class:"+e.classBinding+","}return t}var Lo={staticKeys:["staticClass"],transformNode:Mo,genData:To}
function So(e,t){var n=t.warn||vs
var i=ks(e,"style")
if(i){{var r=ms(i,t.delimiters)
if(r){n('style="'+i+'": '+"Interpolation inside attributes has been removed. "+"Use v-bind or the colon shorthand instead. For example, "+'instead of <div style="{{ val }}">, use <div :style="val">.')}}e.staticStyle=JSON.stringify(Mi(i))}var s=xs(e,"style",false)
if(s){e.styleBinding=s}}function Do(e){var t=""
if(e.staticStyle){t+="staticStyle:"+e.staticStyle+","}if(e.styleBinding){t+="style:("+e.styleBinding+"),"}return t}var Co={staticKeys:["staticStyle"],transformNode:So,genData:Do}
var Eo=[Lo,Co]
var Ao
function Yo(e,t,n){Ao=n
var i=t.value
var r=t.modifiers
var s=e.tag
var a=e.attrsMap.type
{var o=e.attrsMap["v-bind:type"]||e.attrsMap[":type"]
if(s==="input"&&o){Ao('<input :type="'+o+'" v-model="'+i+'">:\n'+"v-model does not support dynamic input types. Use v-if branches instead.")}}if(s==="select"){Po(e,i,r)}else if(s==="input"&&a==="checkbox"){jo(e,i,r)}else if(s==="input"&&a==="radio"){Oo(e,i,r)}else{Io(e,i,r)}return true}function jo(e,t,n){if("development"!=="production"&&e.attrsMap.checked!=null){Ao("<"+e.tag+' v-model="'+t+'" checked>:\n'+"inline checked attributes will be ignored when using v-model. "+"Declare initial values in the component's data option instead.")}var i=n&&n.number
var r=xs(e,"value")||"null"
var s=xs(e,"true-value")||"true"
var a=xs(e,"false-value")||"false"
_s(e,"checked","Array.isArray("+t+")"+"?_i("+t+","+r+")>-1"+":_q("+t+","+s+")")
ws(e,"change","var $$a="+t+","+"$$el=$event.target,"+"$$c=$$el.checked?("+s+"):("+a+");"+"if(Array.isArray($$a)){"+"var $$v="+(i?"_n("+r+")":r)+","+"$$i=_i($$a,$$v);"+"if($$c){$$i<0&&("+t+"=$$a.concat($$v))}"+"else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}"+"}else{"+t+"=$$c}",null,true)}function Oo(e,t,n){if("development"!=="production"&&e.attrsMap.checked!=null){Ao("<"+e.tag+' v-model="'+t+'" checked>:\n'+"inline checked attributes will be ignored when using v-model. "+"Declare initial values in the component's data option instead.")}var i=n&&n.number
var r=xs(e,"value")||"null"
r=i?"_n("+r+")":r
_s(e,"checked","_q("+t+","+r+")")
ws(e,"change",Ro(t,r),null,true)}function Io(e,t,n){{if(e.tag==="input"&&e.attrsMap.value){Ao("<"+e.tag+' v-model="'+t+'" value="'+e.attrsMap.value+'">:\n'+"inline value attributes will be ignored when using v-model. "+"Declare initial values in the component's data option instead.")}if(e.tag==="textarea"&&e.children.length){Ao('<textarea v-model="'+t+'">:\n'+"inline content inside <textarea> will be ignored when using v-model. "+"Declare initial values in the component's data option instead.")}}var i=e.attrsMap.type
var r=n||{}
var s=r.lazy
var a=r.number
var o=r.trim
var l=s||P&&i==="range"?"change":"input"
var u=!s&&i!=="range"
var f=e.tag==="input"||e.tag==="textarea"
var c=f?"$event.target.value"+(o?".trim()":""):o?"(typeof $event === 'string' ? $event.trim() : $event)":"$event"
c=a||i==="number"?"_n("+c+")":c
var h=Ro(t,c)
if(f&&u){h="if($event.target.composing)return;"+h}if("development"!=="production"&&i==="file"){Ao("<"+e.tag+' v-model="'+t+'" type="file">:\n'+"File inputs are read only. Use a v-on:change listener instead.")}_s(e,"value",f?"_s("+t+")":"("+t+")")
ws(e,l,h,null,true)
if(o||a||i==="number"){ws(e,"blur","$forceUpdate()")}}function Po(e,t,n){{e.children.some(No)}var i=n&&n.number
var r="Array.prototype.filter"+".call($event.target.options,function(o){return o.selected})"+'.map(function(o){var val = "_value" in o ? o._value : o.value;'+"return "+(i?"_n(val)":"val")+"})"+(e.attrsMap.multiple==null?"[0]":"")
var s=Ro(t,r)
ws(e,"change",s,null,true)}function No(e){if(e.type===1&&e.tag==="option"&&e.attrsMap.selected!=null){Ao('<select v-model="'+e.parent.attrsMap["v-model"]+'">:\n'+"inline selected attributes on <option> will be ignored when using v-model. "+"Declare initial values in the component's data option instead.")
return true}return false}function Ro(e,t){var n=Es(e)
if(n.idx===null){return e+"="+t}else{return"var $$exp = "+n.exp+", $$idx = "+n.idx+";"+"if (!Array.isArray($$exp)){"+e+"="+t+"}"+"else{$$exp.splice($$idx, 1, "+t+")}"}}function Fo(e,t){if(t.value){_s(e,"textContent","_s("+t.value+")")}}function Ho(e,t){if(t.value){_s(e,"innerHTML","_s("+t.value+")")}}var $o={model:Yo,text:Fo,html:Ho}
var zo=Object.create(null)
var Wo={expectHTML:true,modules:Eo,staticKeys:T(Eo),directives:$o,isReservedTag:En,isUnaryTag:Nr,mustUseProp:pn,getTagNamespace:An,isPreTag:Cn}
function Uo(e,t){t=t?v(v({},Wo),t):Wo
return mo(e,t)}function qo(e,t,n){var i=t&&t.warn||V
{try{new Function("return 1")}catch(e){if(e.toString().match(/unsafe-eval|CSP/)){i("It seems you are using the standalone build of Vue.js in an "+"environment with Content Security Policy that prohibits unsafe-eval. "+"The template compiler cannot work in this environment. Consider "+"relaxing the policy to allow unsafe-eval or pre-compiling your "+"templates into render functions.")}}}var r=t&&t.delimiters?String(t.delimiters)+e:e
if(zo[r]){return zo[r]}var s={}
var a=Uo(e,t)
s.render=Bo(a.render)
var o=a.staticRenderFns.length
s.staticRenderFns=new Array(o)
for(var l=0;l<o;l++){s.staticRenderFns[l]=Bo(a.staticRenderFns[l])}{if(s.render===x||s.staticRenderFns.some(function(e){return e===x})){i("failed to compile template:\n\n"+e+"\n\n"+yo(a.ast).join("\n")+"\n\n",n)}}return zo[r]=s}function Bo(e){try{return new Function(e)}catch(e){return x}}var Vo=l(function(e){var t=On(e)
return t&&t.innerHTML})
var Jo=nn.prototype.$mount
nn.prototype.$mount=function(e,t){e=e&&On(e)
if(e===document.body||e===document.documentElement){"development"!=="production"&&V("Do not mount Vue to <html> or <body> - mount to normal elements instead.")
return this}var n=this.$options
if(!n.render){var i=n.template
if(i){if(typeof i==="string"){if(i.charAt(0)==="#"){i=Vo(i)
if("development"!=="production"&&!i){V("Template element not found or is empty: "+n.template,this)}}}else if(i.nodeType){i=i.innerHTML}else{{V("invalid template option:"+i,this)}return this}}else if(e){i=Xo(e)}if(i){var r=qo(i,{warn:V,shouldDecodeNewlines:Or,delimiters:n.delimiters},this)
var s=r.render
var a=r.staticRenderFns
n.render=s
n.staticRenderFns=a}}return Jo.call(this,e,t)}
function Xo(e){if(e.outerHTML){return e.outerHTML}else{var t=document.createElement("div")
t.appendChild(e.cloneNode(true))
return t.innerHTML}}nn.compile=qo
return nn});(function(e,t){typeof exports==="object"&&typeof module!=="undefined"?module.exports=t():typeof define==="function"&&define.amd?define(t):e.Vuex=t()})(this,function(){"use strict"
var e=typeof window!=="undefined"&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__
function t(t){if(!e){return}t._devtoolHook=e
e.emit("vuex:init",t)
e.on("vuex:travel-to-state",function(e){t.replaceState(e)})
t.subscribe(function(t,n){e.emit("vuex:mutation",t,n)})}function n(e){var t=Number(e.version.split(".")[0])
if(t>=2){var n=e.config._lifecycleHooks.indexOf("init")>-1
e.mixin(n?{init:r}:{beforeCreate:r})}else{var i=e.prototype._init
e.prototype._init=function(e){if(e===void 0)e={}
e.init=e.init?[r].concat(e.init):r
i.call(this,e)}}function r(){var e=this.$options
if(e.store){this.$store=e.store}else if(e.parent&&e.parent.$store){this.$store=e.parent.$store}}}var i=l(function(e,t){var n={}
o(t).forEach(function(t){var i=t.key
var r=t.val
n[i]=function t(){var n=this.$store.state
var i=this.$store.getters
if(e){var s=this.$store._modulesNamespaceMap[e]
if(!s){u("mapState",e)
return}n=s.state
i=s.context.getters}return typeof r==="function"?r.call(this,n,i):n[r]}})
return n})
var r=l(function(e,t){var n={}
o(t).forEach(function(t){var i=t.key
var r=t.val
r=e+r
n[i]=function e(){var t=[],n=arguments.length
while(n--)t[n]=arguments[n]
return this.$store.commit.apply(this.$store,[r].concat(t))}})
return n})
var s=l(function(e,t){var n={}
o(t).forEach(function(t){var i=t.key
var r=t.val
r=e+r
n[i]=function e(){if(!(r in this.$store.getters)){console.error("[vuex] unknown getter: "+r)}return this.$store.getters[r]}})
return n})
var a=l(function(e,t){var n={}
o(t).forEach(function(t){var i=t.key
var r=t.val
r=e+r
n[i]=function e(){var t=[],n=arguments.length
while(n--)t[n]=arguments[n]
return this.$store.dispatch.apply(this.$store,[r].concat(t))}})
return n})
function o(e){return Array.isArray(e)?e.map(function(e){return{key:e,val:e}}):Object.keys(e).map(function(t){return{key:t,val:e[t]}})}function l(e){return function(t,n){if(typeof t!=="string"){n=t
t=""}else if(t.charAt(t.length-1)!=="/"){t+="/"}return e(t,n)}}function u(e,t){console.error("[vuex] module namespace not found in "+e+"(): "+t)}function f(e,t){Object.keys(e).forEach(function(n){return t(e[n],n)})}function c(e){return e!==null&&typeof e==="object"}function h(e){return e&&typeof e.then==="function"}function d(e,t){if(!e){throw new Error("[vuex] "+t)}}var p=function e(t,n){this.runtime=n
this._children=Object.create(null)
this._rawModule=t}
var m={state:{},namespaced:{}}
m.state.get=function(){return this._rawModule.state||{}}
m.namespaced.get=function(){return!!this._rawModule.namespaced}
p.prototype.addChild=function e(t,n){this._children[t]=n}
p.prototype.removeChild=function e(t){delete this._children[t]}
p.prototype.getChild=function e(t){return this._children[t]}
p.prototype.update=function e(t){this._rawModule.namespaced=t.namespaced
if(t.actions){this._rawModule.actions=t.actions}if(t.mutations){this._rawModule.mutations=t.mutations}if(t.getters){this._rawModule.getters=t.getters}}
p.prototype.forEachChild=function e(t){f(this._children,t)}
p.prototype.forEachGetter=function e(t){if(this._rawModule.getters){f(this._rawModule.getters,t)}}
p.prototype.forEachAction=function e(t){if(this._rawModule.actions){f(this._rawModule.actions,t)}}
p.prototype.forEachMutation=function e(t){if(this._rawModule.mutations){f(this._rawModule.mutations,t)}}
Object.defineProperties(p.prototype,m)
var v=function e(t){var n=this
this.root=new p(t,false)
if(t.modules){f(t.modules,function(e,t){n.register([t],e,false)})}}
v.prototype.get=function e(t){return t.reduce(function(e,t){return e.getChild(t)},this.root)}
v.prototype.getNamespace=function e(t){var n=this.root
return t.reduce(function(e,t){n=n.getChild(t)
return e+(n.namespaced?t+"/":"")},"")}
v.prototype.update=function e(t){g(this.root,t)}
v.prototype.register=function e(t,n,i){var r=this
if(i===void 0)i=true
var s=this.get(t.slice(0,-1))
var a=new p(n,i)
s.addChild(t[t.length-1],a)
if(n.modules){f(n.modules,function(e,n){r.register(t.concat(n),e,i)})}}
v.prototype.unregister=function e(t){var n=this.get(t.slice(0,-1))
var i=t[t.length-1]
if(!n.getChild(i).runtime){return}n.removeChild(i)}
function g(e,t){e.update(t)
if(t.modules){for(var n in t.modules){if(!e.getChild(n)){console.warn("[vuex] trying to add a new module '"+n+"' on hot reloading, "+"manual reload is needed")
return}g(e.getChild(n),t.modules[n])}}}var _
var y=function e(n){var i=this
if(n===void 0)n={}
d(_,"must call Vue.use(Vuex) before creating a store instance.")
d(typeof Promise!=="undefined","vuex requires a Promise polyfill in this browser.")
var r=n.state
if(r===void 0)r={}
var s=n.plugins
if(s===void 0)s=[]
var a=n.strict
if(a===void 0)a=false
this._committing=false
this._actions=Object.create(null)
this._mutations=Object.create(null)
this._wrappedGetters=Object.create(null)
this._modules=new v(n)
this._modulesNamespaceMap=Object.create(null)
this._subscribers=[]
this._watcherVM=new _
var o=this
var l=this
var u=l.dispatch
var f=l.commit
this.dispatch=function e(t,n){return u.call(o,t,n)}
this.commit=function e(t,n,i){return f.call(o,t,n,i)}
this.strict=a
k(this,r,[],this._modules.root)
x(this,r)
s.concat(t).forEach(function(e){return e(i)})}
var b={state:{}}
b.state.get=function(){return this._vm.$data.state}
b.state.set=function(e){d(false,"Use store.replaceState() to explicit replace store state.")}
y.prototype.commit=function e(t,n,i){var r=this
var s=A(t,n,i)
var a=s.type
var o=s.payload
var l=s.options
var u={type:a,payload:o}
var f=this._mutations[a]
if(!f){console.error("[vuex] unknown mutation type: "+a)
return}this._withCommit(function(){f.forEach(function e(t){t(o)})})
this._subscribers.forEach(function(e){return e(u,r.state)})
if(l&&l.silent){console.warn("[vuex] mutation type: "+a+". Silent option has been removed. "+"Use the filter functionality in the vue-devtools")}}
y.prototype.dispatch=function e(t,n){var i=A(t,n)
var r=i.type
var s=i.payload
var a=this._actions[r]
if(!a){console.error("[vuex] unknown action type: "+r)
return}return a.length>1?Promise.all(a.map(function(e){return e(s)})):a[0](s)}
y.prototype.subscribe=function e(t){var n=this._subscribers
if(n.indexOf(t)<0){n.push(t)}return function(){var e=n.indexOf(t)
if(e>-1){n.splice(e,1)}}}
y.prototype.watch=function e(t,n,i){var r=this
d(typeof t==="function","store.watch only accepts a function.")
return this._watcherVM.$watch(function(){return t(r.state,r.getters)},n,i)}
y.prototype.replaceState=function e(t){var n=this
this._withCommit(function(){n._vm.state=t})}
y.prototype.registerModule=function e(t,n){if(typeof t==="string"){t=[t]}d(Array.isArray(t),"module path must be a string or an Array.")
this._modules.register(t,n)
k(this,this.state,t,this._modules.get(t))
x(this,this.state)}
y.prototype.unregisterModule=function e(t){var n=this
if(typeof t==="string"){t=[t]}d(Array.isArray(t),"module path must be a string or an Array.")
this._modules.unregister(t)
this._withCommit(function(){var e=E(n.state,t.slice(0,-1))
_.delete(e,t[t.length-1])})
w(this)}
y.prototype.hotUpdate=function e(t){this._modules.update(t)
w(this)}
y.prototype._withCommit=function e(t){var n=this._committing
this._committing=true
t()
this._committing=n}
Object.defineProperties(y.prototype,b)
function w(e){e._actions=Object.create(null)
e._mutations=Object.create(null)
e._wrappedGetters=Object.create(null)
e._modulesNamespaceMap=Object.create(null)
var t=e.state
k(e,t,[],e._modules.root,true)
x(e,t)}function x(e,t){var n=e._vm
e.getters={}
var i=e._wrappedGetters
var r={}
f(i,function(t,n){r[n]=function(){return t(e)}
Object.defineProperty(e.getters,n,{get:function(){return e._vm[n]},enumerable:true})})
var s=_.config.silent
_.config.silent=true
e._vm=new _({data:{state:t},computed:r})
_.config.silent=s
if(e.strict){C(e)}if(n){e._withCommit(function(){n.state=null})
_.nextTick(function(){return n.$destroy()})}}function k(e,t,n,i,r){var s=!n.length
var a=e._modules.getNamespace(n)
if(a){e._modulesNamespaceMap[a]=i}if(!s&&!r){var o=E(t,n.slice(0,-1))
var l=n[n.length-1]
e._withCommit(function(){_.set(o,l,i.state)})}var u=i.context=M(e,a)
i.forEachMutation(function(t,i){var r=a+i
L(e,r,t,n)})
i.forEachAction(function(t,i){var r=a+i
S(e,r,t,u,n)})
i.forEachGetter(function(t,i){var r=a+i
D(e,r,t,u,n)})
i.forEachChild(function(i,s){k(e,t,n.concat(s),i,r)})}function M(e,t){var n=t===""
var i={dispatch:n?e.dispatch:function(n,i,r){var s=A(n,i,r)
var a=s.payload
var o=s.options
var l=s.type
if(!o||!o.root){l=t+l
if(!e._actions[l]){console.error("[vuex] unknown local action type: "+s.type+", global type: "+l)
return}}return e.dispatch(l,a)},commit:n?e.commit:function(n,i,r){var s=A(n,i,r)
var a=s.payload
var o=s.options
var l=s.type
if(!o||!o.root){l=t+l
if(!e._mutations[l]){console.error("[vuex] unknown local mutation type: "+s.type+", global type: "+l)
return}}e.commit(l,a,o)}}
Object.defineProperty(i,"getters",{get:n?function(){return e.getters}:function(){return T(e,t)}})
return i}function T(e,t){var n={}
var i=t.length
Object.keys(e.getters).forEach(function(r){if(r.slice(0,i)!==t){return}var s=r.slice(i)
Object.defineProperty(n,s,{get:function(){return e.getters[r]},enumerable:true})})
return n}function L(e,t,n,i){var r=e._mutations[t]||(e._mutations[t]=[])
r.push(function t(r){n(E(e.state,i),r)})}function S(e,t,n,i,r){var s=e._actions[t]||(e._actions[t]=[])
s.push(function t(s,a){var o=n({dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:E(e.state,r),rootGetters:e.getters,rootState:e.state},s,a)
if(!h(o)){o=Promise.resolve(o)}if(e._devtoolHook){return o.catch(function(t){e._devtoolHook.emit("vuex:error",t)
throw t})}else{return o}})}function D(e,t,n,i,r){if(e._wrappedGetters[t]){console.error("[vuex] duplicate getter key: "+t)
return}e._wrappedGetters[t]=function e(t){return n(E(t.state,r),i.getters,t.state,t.getters)}}function C(e){e._vm.$watch("state",function(){d(e._committing,"Do not mutate vuex store state outside mutation handlers.")},{deep:true,sync:true})}function E(e,t){return t.length?t.reduce(function(e,t){return e[t]},e):e}function A(e,t,n){if(c(e)&&e.type){n=t
t=e
e=e.type}return{type:e,payload:t,options:n}}function Y(e){if(_){console.error("[vuex] already installed. Vue.use(Vuex) should be called only once.")
return}_=e
n(_)}if(typeof window!=="undefined"&&window.Vue){Y(window.Vue)}var j={Store:y,install:Y,version:"2.1.1",mapState:i,mapMutations:r,mapGetters:s,mapActions:a}
return j});(function(e){var t={}
function n(i){if(t[i])return t[i].exports
var r=t[i]={exports:{},id:i,loaded:false}
e[i].call(r.exports,r,r.exports,n)
r.loaded=true
return r.exports}n.m=e
n.c=t
n.p=""
return n(0)})([function(e,t,n){"use strict"
e.exports=n(1)},function(e,t,n){"use strict"
var i=n(2)
var r=n(3)
i.element=r
var s=n(4)
s.isArray=r.isArray
s.isFunction=r.isFunction
s.isObject=r.isPlainObject
s.bind=r.proxy
s.each=function(e,t){r.each(e,n)
function n(e,n){return t(n,e)}}
s.map=r.map
s.mixin=r.extend
var a=n(5)
var o=n(6)
var l
var u
var f
l=r.fn.autocomplete
u="aaAutocomplete"
f={initialize:function e(t,n){n=s.isArray(n)?n:[].slice.call(arguments,1)
t=t||{}
return this.each(i)
function i(){var e=r(this)
var i=new o({el:e})
var s
s=new a({input:e,eventBus:i,dropdownMenuContainer:t.dropdownMenuContainer,hint:t.hint===undefined?true:!!t.hint,minLength:t.minLength,autoselect:t.autoselect,openOnFocus:t.openOnFocus,templates:t.templates,debug:t.debug,datasets:n})
e.data(u,s)}},open:function e(){return this.each(t)
function t(){var e=r(this)
var t
if(t=e.data(u)){t.open()}}},close:function e(){return this.each(t)
function t(){var e=r(this)
var t
if(t=e.data(u)){t.close()}}},val:function e(t){return!arguments.length?i(this.first()):this.each(n)
function n(){var e=r(this)
var n
if(n=e.data(u)){n.setVal(t)}}function i(e){var t
var n
if(t=e.data(u)){n=t.getVal()}return n}},destroy:function e(){return this.each(t)
function t(){var e=r(this)
var t
if(t=e.data(u)){t.destroy()
e.removeData(u)}}}}
r.fn.autocomplete=function(e){var t
if(f[e]&&e!=="initialize"){t=this.filter(function(){return!!r(this).data(u)})
return f[e].apply(t,[].slice.call(arguments,1))}return f.initialize.apply(this,arguments)}
r.fn.autocomplete.noConflict=function e(){r.fn.autocomplete=l
return this}
r.fn.autocomplete.sources=a.sources
e.exports=r.fn.autocomplete},function(e,t){"use strict"
e.exports={element:null}},function(e,t){e.exports=jQuery},function(e,t,n){"use strict"
var i=n(2)
e.exports={isArray:null,isFunction:null,isObject:null,bind:null,each:null,map:null,mixin:null,isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:false},escapeRegExChars:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isNumber:function(e){return typeof e==="number"},toStr:function e(t){return t===undefined||t===null?"":t+""},cloneDeep:function e(t){var n=this.mixin({},t)
var i=this
this.each(n,function(e,t){if(e){if(i.isArray(e)){n[t]=[].concat(e)}else if(i.isObject(e)){n[t]=i.cloneDeep(e)}}})
return n},error:function(e){throw new Error(e)},every:function(e,t){var n=true
if(!e){return n}this.each(e,function(i,r){n=t.call(null,i,r,e)
if(!n){return false}})
return!!n},getUniqueId:function(){var e=0
return function(){return e++}}(),templatify:function e(t){if(this.isFunction(t)){return t}var n=i.element(t)
if(n.prop("tagName")==="SCRIPT"){return function e(){return n.text()}}return function e(){return String(t)}},defer:function(e){setTimeout(e,0)},noop:function(){}}},function(e,t,n){"use strict"
var i="aaAttrs"
var r=n(4)
var s=n(2)
var a=n(6)
var o=n(7)
var l=n(11)
var u=n(13)
var f=n(14)
function c(e){var t
var n
var i
e=e||{}
if(!e.input){r.error("missing input")}this.isActivated=false
this.debug=!!e.debug
this.autoselect=!!e.autoselect
this.openOnFocus=!!e.openOnFocus
this.minLength=r.isNumber(e.minLength)?e.minLength:1
this.$node=h(e)
t=this.$node.find(".aa-dropdown-menu")
n=this.$node.find(".aa-input")
i=this.$node.find(".aa-hint")
if(e.dropdownMenuContainer){s.element(e.dropdownMenuContainer).css("position","relative").append(t.css("top","0"))}n.on("blur.aa",function(e){var i=document.activeElement
if(r.isMsie()&&(t.is(i)||t.has(i).length>0)){e.preventDefault()
e.stopImmediatePropagation()
r.defer(function(){n.focus()})}})
t.on("mousedown.aa",function(e){e.preventDefault()})
this.eventBus=e.eventBus||new a({el:n})
this.dropdown=new c.Dropdown({menu:t,datasets:e.datasets,templates:e.templates}).onSync("suggestionClicked",this._onSuggestionClicked,this).onSync("cursorMoved",this._onCursorMoved,this).onSync("cursorRemoved",this._onCursorRemoved,this).onSync("opened",this._onOpened,this).onSync("closed",this._onClosed,this).onSync("shown",this._onShown,this).onAsync("datasetRendered",this._onDatasetRendered,this)
this.input=new c.Input({input:n,hint:i}).onSync("focused",this._onFocused,this).onSync("blurred",this._onBlurred,this).onSync("enterKeyed",this._onEnterKeyed,this).onSync("tabKeyed",this._onTabKeyed,this).onSync("escKeyed",this._onEscKeyed,this).onSync("upKeyed",this._onUpKeyed,this).onSync("downKeyed",this._onDownKeyed,this).onSync("leftKeyed",this._onLeftKeyed,this).onSync("rightKeyed",this._onRightKeyed,this).onSync("queryChanged",this._onQueryChanged,this).onSync("whitespaceChanged",this._onWhitespaceChanged,this)
this._setLanguageDirection()}r.mixin(c.prototype,{_onSuggestionClicked:function e(t,n){var i
if(i=this.dropdown.getDatumForSuggestion(n)){this._select(i)}},_onCursorMoved:function e(){var t=this.dropdown.getDatumForCursor()
this.input.setInputValue(t.value,true)
this.eventBus.trigger("cursorchanged",t.raw,t.datasetName)},_onCursorRemoved:function e(){this.input.resetInputValue()
this._updateHint()},_onDatasetRendered:function e(){this._updateHint()
this.eventBus.trigger("updated")},_onOpened:function e(){this._updateHint()
this.eventBus.trigger("opened")},_onShown:function e(){this.eventBus.trigger("shown")},_onClosed:function e(){this.input.clearHint()
this.eventBus.trigger("closed")},_onFocused:function e(){this.isActivated=true
if(this.openOnFocus){var t=this.input.getQuery()
if(t.length>=this.minLength){this.dropdown.update(t)}else{this.dropdown.empty()}this.dropdown.open()}},_onBlurred:function e(){if(!this.debug){this.isActivated=false
this.dropdown.empty()
this.dropdown.close()}},_onEnterKeyed:function e(t,n){var i
var r
i=this.dropdown.getDatumForCursor()
r=this.dropdown.getDatumForTopSuggestion()
if(i){this._select(i)
n.preventDefault()}else if(this.autoselect&&r){this._select(r)
n.preventDefault()}},_onTabKeyed:function e(t,n){var i
if(i=this.dropdown.getDatumForCursor()){this._select(i)
n.preventDefault()}else{this._autocomplete(true)}},_onEscKeyed:function e(){this.dropdown.close()
this.input.resetInputValue()},_onUpKeyed:function e(){var t=this.input.getQuery()
if(this.dropdown.isEmpty&&t.length>=this.minLength){this.dropdown.update(t)}else{this.dropdown.moveCursorUp()}this.dropdown.open()},_onDownKeyed:function e(){var t=this.input.getQuery()
if(this.dropdown.isEmpty&&t.length>=this.minLength){this.dropdown.update(t)}else{this.dropdown.moveCursorDown()}this.dropdown.open()},_onLeftKeyed:function e(){if(this.dir==="rtl"){this._autocomplete()}},_onRightKeyed:function e(){if(this.dir==="ltr"){this._autocomplete()}},_onQueryChanged:function e(t,n){this.input.clearHintIfInvalid()
if(n.length>=this.minLength){this.dropdown.update(n)}else{this.dropdown.empty()}this.dropdown.open()
this._setLanguageDirection()},_onWhitespaceChanged:function e(){this._updateHint()
this.dropdown.open()},_setLanguageDirection:function e(){var t=this.input.getLanguageDirection()
if(this.dir!==t){this.dir=t
this.$node.css("direction",t)
this.dropdown.setLanguageDirection(t)}},_updateHint:function e(){var t
var n
var i
var s
var a
var l
t=this.dropdown.getDatumForTopSuggestion()
if(t&&this.dropdown.isVisible()&&!this.input.hasOverflow()){n=this.input.getInputValue()
i=o.normalizeQuery(n)
s=r.escapeRegExChars(i)
a=new RegExp("^(?:"+s+")(.+$)","i")
l=a.exec(t.value)
if(l){this.input.setHint(n+l[1])}else{this.input.clearHint()}}else{this.input.clearHint()}},_autocomplete:function e(t){var n
var i
var r
var s
n=this.input.getHint()
i=this.input.getQuery()
r=t||this.input.isCursorAtEnd()
if(n&&i!==n&&r){s=this.dropdown.getDatumForTopSuggestion()
if(s){this.input.setInputValue(s.value)}this.eventBus.trigger("autocompleted",s.raw,s.datasetName)}},_select:function e(t){if(typeof t.value!=="undefined"){this.input.setQuery(t.value)}this.input.setInputValue(t.value,true)
this._setLanguageDirection()
this.eventBus.trigger("selected",t.raw,t.datasetName)
this.dropdown.close()
r.defer(r.bind(this.dropdown.empty,this.dropdown))},open:function e(){if(!this.isActivated){var t=this.input.getInputValue()
if(t.length>=this.minLength){this.dropdown.update(t)}else{this.dropdown.empty()}}this.dropdown.open()},close:function e(){this.dropdown.close()},setVal:function e(t){t=r.toStr(t)
if(this.isActivated){this.input.setInputValue(t)}else{this.input.setQuery(t)
this.input.setInputValue(t,true)}this._setLanguageDirection()},getVal:function e(){return this.input.getQuery()},destroy:function e(){this.input.destroy()
this.dropdown.destroy()
p(this.$node)
this.$node=null}})
function h(e){var t
var n
var a
var o
t=s.element(e.input)
n=s.element(u.wrapper).css(f.wrapper)
if(t.css("display")==="block"&&t.parent().css("display")==="table"){n.css("display","table-cell")}a=s.element(u.dropdown).css(f.dropdown)
if(e.templates&&e.templates.dropdownMenu){a.html(r.templatify(e.templates.dropdownMenu)())}o=t.clone().css(f.hint).css(d(t))
o.val("").addClass("aa-hint").removeAttr("id name placeholder required").prop("readonly",true).attr({autocomplete:"off",spellcheck:"false",tabindex:-1})
if(o.removeData){o.removeData()}t.data(i,{dir:t.attr("dir"),autocomplete:t.attr("autocomplete"),spellcheck:t.attr("spellcheck"),style:t.attr("style")})
t.addClass("aa-input").attr({autocomplete:"off",spellcheck:false}).css(e.hint?f.input:f.inputWithNoHint)
try{if(!t.attr("dir")){t.attr("dir","auto")}}catch(e){}return t.wrap(n).parent().prepend(e.hint?o:null).append(a)}function d(e){return{backgroundAttachment:e.css("background-attachment"),backgroundClip:e.css("background-clip"),backgroundColor:e.css("background-color"),backgroundImage:e.css("background-image"),backgroundOrigin:e.css("background-origin"),backgroundPosition:e.css("background-position"),backgroundRepeat:e.css("background-repeat"),backgroundSize:e.css("background-size")}}function p(e){var t=e.find(".aa-input")
r.each(t.data(i),function(e,n){if(e===undefined){t.removeAttr(n)}else{t.attr(n,e)}})
t.detach().removeClass("aa-input").insertAfter(e)
if(t.removeData){t.removeData(i)}e.remove()}c.Dropdown=l
c.Input=o
c.sources=n(15)
e.exports=c},function(e,t,n){"use strict"
var i="autocomplete:"
var r=n(4)
var s=n(2)
function a(e){if(!e||!e.el){r.error("EventBus initialized without el")}this.$el=s.element(e.el)}r.mixin(a.prototype,{trigger:function(e){var t=[].slice.call(arguments,1)
this.$el.trigger(i+e,t)}})
e.exports=a},function(e,t,n){"use strict"
var i
i={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"}
var r=n(4)
var s=n(2)
var a=n(8)
function o(e){var t=this
var n
var a
var o
var u
e=e||{}
if(!e.input){r.error("input is missing")}n=r.bind(this._onBlur,this)
a=r.bind(this._onFocus,this)
o=r.bind(this._onKeydown,this)
u=r.bind(this._onInput,this)
this.$hint=s.element(e.hint)
this.$input=s.element(e.input).on("blur.aa",n).on("focus.aa",a).on("keydown.aa",o)
if(this.$hint.length===0){this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=r.noop}if(!r.isMsie()){this.$input.on("input.aa",u)}else{this.$input.on("keydown.aa keypress.aa cut.aa paste.aa",function(e){if(i[e.which||e.keyCode]){return}r.defer(r.bind(t._onInput,t,e))})}this.query=this.$input.val()
this.$overflowHelper=l(this.$input)}o.normalizeQuery=function(e){return(e||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ")}
r.mixin(o.prototype,a,{_onBlur:function e(){this.resetInputValue()
this.trigger("blurred")},_onFocus:function e(){this.trigger("focused")},_onKeydown:function e(t){var n=i[t.which||t.keyCode]
this._managePreventDefault(n,t)
if(n&&this._shouldTrigger(n,t)){this.trigger(n+"Keyed",t)}},_onInput:function e(){this._checkInputValue()},_managePreventDefault:function e(t,n){var i
var r
var s
switch(t){case"tab":r=this.getHint()
s=this.getInputValue()
i=r&&r!==s&&!f(n)
break
case"up":case"down":i=!f(n)
break
default:i=false}if(i){n.preventDefault()}},_shouldTrigger:function e(t,n){var i
switch(t){case"tab":i=!f(n)
break
default:i=true}return i},_checkInputValue:function e(){var t
var n
var i
t=this.getInputValue()
n=u(t,this.query)
i=n&&this.query?this.query.length!==t.length:false
this.query=t
if(!n){this.trigger("queryChanged",this.query)}else if(i){this.trigger("whitespaceChanged",this.query)}},focus:function e(){this.$input.focus()},blur:function e(){this.$input.blur()},getQuery:function e(){return this.query},setQuery:function e(t){this.query=t},getInputValue:function e(){return this.$input.val()},setInputValue:function e(t,n){if(typeof t==="undefined"){t=this.query}this.$input.val(t)
if(n){this.clearHint()}else{this._checkInputValue()}},resetInputValue:function e(){this.setInputValue(this.query,true)},getHint:function e(){return this.$hint.val()},setHint:function e(t){this.$hint.val(t)},clearHint:function e(){this.setHint("")},clearHintIfInvalid:function e(){var t
var n
var i
var r
t=this.getInputValue()
n=this.getHint()
i=t!==n&&n.indexOf(t)===0
r=t!==""&&i&&!this.hasOverflow()
if(!r){this.clearHint()}},getLanguageDirection:function e(){return(this.$input.css("direction")||"ltr").toLowerCase()},hasOverflow:function e(){var t=this.$input.width()-2
this.$overflowHelper.text(this.getInputValue())
return this.$overflowHelper.width()>=t},isCursorAtEnd:function(){var e
var t
var n
e=this.$input.val().length
t=this.$input[0].selectionStart
if(r.isNumber(t)){return t===e}else if(document.selection){n=document.selection.createRange()
n.moveStart("character",-e)
return e===n.text.length}return true},destroy:function e(){this.$hint.off(".aa")
this.$input.off(".aa")
this.$hint=this.$input=this.$overflowHelper=null}})
function l(e){return s.element('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:e.css("font-family"),fontSize:e.css("font-size"),fontStyle:e.css("font-style"),fontVariant:e.css("font-variant"),fontWeight:e.css("font-weight"),wordSpacing:e.css("word-spacing"),letterSpacing:e.css("letter-spacing"),textIndent:e.css("text-indent"),textRendering:e.css("text-rendering"),textTransform:e.css("text-transform")}).insertAfter(e)}function u(e,t){return o.normalizeQuery(e)===o.normalizeQuery(t)}function f(e){return e.altKey||e.ctrlKey||e.metaKey||e.shiftKey}e.exports=o},function(e,t,n){(function(t){"use strict"
var n=/\s+/
var i=f()
e.exports={onSync:a,onAsync:s,off:o,trigger:l}
function r(e,t,i,r){var s
if(!i){return this}t=t.split(n)
i=r?c(i,r):i
this._callbacks=this._callbacks||{}
while(s=t.shift()){this._callbacks[s]=this._callbacks[s]||{sync:[],async:[]}
this._callbacks[s][e].push(i)}return this}function s(e,t,n){return r.call(this,"async",e,t,n)}function a(e,t,n){return r.call(this,"sync",e,t,n)}function o(e){var t
if(!this._callbacks){return this}e=e.split(n)
while(t=e.shift()){delete this._callbacks[t]}return this}function l(e){var t
var r
var s
var a
var o
if(!this._callbacks){return this}e=e.split(n)
s=[].slice.call(arguments,1)
while((t=e.shift())&&(r=this._callbacks[t])){a=u(r.sync,this,[t].concat(s))
o=u(r.async,this,[t].concat(s))
if(a()){i(o)}}return this}function u(e,t,n){return i
function i(){var i
for(var r=0,s=e.length;!i&&r<s;r+=1){i=e[r].apply(t,n)===false}return!i}}function f(){var e
if(window.setImmediate){e=function e(n){t(function(){n()})}}else{e=function e(t){setTimeout(function(){t()},0)}}return e}function c(e,t){return e.bind?e.bind(t):function(){e.apply(t,[].slice.call(arguments,0))}}}).call(t,n(9).setImmediate)},function(e,t,n){(function(e,i){var r=n(10).nextTick
var s=Function.prototype.apply
var a=Array.prototype.slice
var o={}
var l=0
t.setTimeout=function(){return new u(s.call(setTimeout,window,arguments),clearTimeout)}
t.setInterval=function(){return new u(s.call(setInterval,window,arguments),clearInterval)}
t.clearTimeout=t.clearInterval=function(e){e.close()}
function u(e,t){this._id=e
this._clearFn=t}u.prototype.unref=u.prototype.ref=function(){}
u.prototype.close=function(){this._clearFn.call(window,this._id)}
t.enroll=function(e,t){clearTimeout(e._idleTimeoutId)
e._idleTimeout=t}
t.unenroll=function(e){clearTimeout(e._idleTimeoutId)
e._idleTimeout=-1}
t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId)
var t=e._idleTimeout
if(t>=0){e._idleTimeoutId=setTimeout(function t(){if(e._onTimeout)e._onTimeout()},t)}}
t.setImmediate=typeof e==="function"?e:function(e){var n=l++
var i=arguments.length<2?false:a.call(arguments,1)
o[n]=true
r(function r(){if(o[n]){if(i){e.apply(null,i)}else{e.call(null)}t.clearImmediate(n)}})
return n}
t.clearImmediate=typeof i==="function"?i:function(e){delete o[e]}}).call(t,n(9).setImmediate,n(9).clearImmediate)},function(e,t){var n=e.exports={}
var i=[]
var r=false
var s
var a=-1
function o(){r=false
if(s.length){i=s.concat(i)}else{a=-1}if(i.length){l()}}function l(){if(r){return}var e=setTimeout(o)
r=true
var t=i.length
while(t){s=i
i=[]
while(++a<t){if(s){s[a].run()}}a=-1
t=i.length}s=null
r=false
clearTimeout(e)}n.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1){for(var n=1;n<arguments.length;n++){t[n-1]=arguments[n]}}i.push(new u(e,t))
if(i.length===1&&!r){setTimeout(l,0)}}
function u(e,t){this.fun=e
this.array=t}u.prototype.run=function(){this.fun.apply(null,this.array)}
n.title="browser"
n.browser=true
n.env={}
n.argv=[]
n.version=""
n.versions={}
function f(){}n.on=f
n.addListener=f
n.once=f
n.off=f
n.removeListener=f
n.removeAllListeners=f
n.emit=f
n.binding=function(e){throw new Error("process.binding is not supported")}
n.cwd=function(){return"/"}
n.chdir=function(e){throw new Error("process.chdir is not supported")}
n.umask=function(){return 0}},function(e,t,n){"use strict"
var i=n(4)
var r=n(2)
var s=n(8)
var a=n(12)
var o=n(14)
function l(e){var t=this
var n
var s
var a
e=e||{}
if(!e.menu){i.error("menu is required")}if(!i.isArray(e.datasets)&&!i.isObject(e.datasets)){i.error("1 or more datasets required")}if(!e.datasets){i.error("datasets is required")}this.isOpen=false
this.isEmpty=true
n=i.bind(this._onSuggestionClick,this)
s=i.bind(this._onSuggestionMouseEnter,this)
a=i.bind(this._onSuggestionMouseLeave,this)
this.$menu=r.element(e.menu).on("click.aa",".aa-suggestion",n).on("mouseenter.aa",".aa-suggestion",s).on("mouseleave.aa",".aa-suggestion",a)
if(e.templates&&e.templates.header){this.$menu.prepend(i.templatify(e.templates.header)())}this.datasets=i.map(e.datasets,function(e){return u(t.$menu,e)})
i.each(this.datasets,function(e){var n=e.getRoot()
if(n&&n.parent().length===0){t.$menu.append(n)}e.onSync("rendered",t._onRendered,t)})
if(e.templates&&e.templates.footer){this.$menu.append(i.templatify(e.templates.footer)())}}i.mixin(l.prototype,s,{_onSuggestionClick:function e(t){this.trigger("suggestionClicked",r.element(t.currentTarget))},_onSuggestionMouseEnter:function e(t){this._removeCursor()
this._setCursor(r.element(t.currentTarget),true)},_onSuggestionMouseLeave:function e(){this._removeCursor()},_onRendered:function e(){this.isEmpty=i.every(this.datasets,t)
if(this.isEmpty){this._hide()}else if(this.isOpen){this._show()}this.trigger("datasetRendered")
function t(e){return e.isEmpty()}},_hide:function(){this.$menu.hide()},_show:function(){this.$menu.css("display","block")
this.trigger("shown")},_getSuggestions:function e(){return this.$menu.find(".aa-suggestion")},_getCursor:function e(){return this.$menu.find(".aa-cursor").first()},_setCursor:function e(t,n){t.first().addClass("aa-cursor")
if(!n){this.trigger("cursorMoved")}},_removeCursor:function e(){this._getCursor().removeClass("aa-cursor")},_moveCursor:function e(t){var n
var i
var r
var s
if(!this.isOpen){return}i=this._getCursor()
n=this._getSuggestions()
this._removeCursor()
r=n.index(i)+t
r=(r+1)%(n.length+1)-1
if(r===-1){this.trigger("cursorRemoved")
return}else if(r<-1){r=n.length-1}this._setCursor(s=n.eq(r))
this._ensureVisible(s)},_ensureVisible:function e(t){var n
var i
var r
var s
n=t.position().top
i=n+t.height()+parseInt(t.css("margin-top"),10)+parseInt(t.css("margin-bottom"),10)
r=this.$menu.scrollTop()
s=this.$menu.height()+parseInt(this.$menu.css("paddingTop"),10)+parseInt(this.$menu.css("paddingBottom"),10)
if(n<0){this.$menu.scrollTop(r+n)}else if(s<i){this.$menu.scrollTop(r+(i-s))}},close:function e(){if(this.isOpen){this.isOpen=false
this._removeCursor()
this._hide()
this.trigger("closed")}},open:function e(){if(!this.isOpen){this.isOpen=true
if(!this.isEmpty){this._show()}this.trigger("opened")}},setLanguageDirection:function e(t){this.$menu.css(t==="ltr"?o.ltr:o.rtl)},moveCursorUp:function e(){this._moveCursor(-1)},moveCursorDown:function e(){this._moveCursor(+1)},getDatumForSuggestion:function e(t){var n=null
if(t.length){n={raw:a.extractDatum(t),value:a.extractValue(t),datasetName:a.extractDatasetName(t)}}return n},getDatumForCursor:function e(){return this.getDatumForSuggestion(this._getCursor().first())},getDatumForTopSuggestion:function e(){return this.getDatumForSuggestion(this._getSuggestions().first())},update:function e(t){i.each(this.datasets,n)
function n(e){e.update(t)}},empty:function e(){i.each(this.datasets,t)
this.isEmpty=true
function t(e){e.clear()}},isVisible:function e(){return this.isOpen&&!this.isEmpty},destroy:function e(){this.$menu.off(".aa")
this.$menu=null
i.each(this.datasets,t)
function t(e){e.destroy()}}})
l.Dataset=a
function u(e,t){return new l.Dataset(i.mixin({$menu:e},t))}e.exports=l},function(e,t,n){"use strict"
var i="aaDataset"
var r="aaValue"
var s="aaDatum"
var a=n(4)
var o=n(2)
var l=n(13)
var u=n(14)
var f=n(8)
function c(e){e=e||{}
e.templates=e.templates||{}
if(!e.source){a.error("missing source")}if(e.name&&!p(e.name)){a.error("invalid dataset name: "+e.name)}this.query=null
this.highlight=!!e.highlight
this.name=typeof e.name==="undefined"||e.name===null?a.getUniqueId():e.name
this.source=e.source
this.displayFn=h(e.display||e.displayKey)
this.templates=d(e.templates,this.displayFn)
this.$el=e.$menu&&e.$menu.find(".aa-dataset-"+this.name).length>0?o.element(e.$menu.find(".aa-dataset-"+this.name)[0]):o.element(l.dataset.replace("%CLASS%",this.name))
this.$menu=e.$menu}c.extractDatasetName=function e(t){return o.element(t).data(i)}
c.extractValue=function e(t){return o.element(t).data(r)}
c.extractDatum=function e(t){var n=o.element(t).data(s)
if(typeof n==="string"){n=JSON.parse(n)}return n}
a.mixin(c.prototype,f,{_render:function e(t,n){if(!this.$el){return}var f=this
var c
var h=[].slice.call(arguments,2)
this.$el.empty()
c=n&&n.length
if(!c&&this.templates.empty){this.$el.html(d.apply(this,h)).prepend(f.templates.header?m.apply(this,h):null).append(f.templates.footer?v.apply(this,h):null)}else if(c){this.$el.html(p.apply(this,h)).prepend(f.templates.header?m.apply(this,h):null).append(f.templates.footer?v.apply(this,h):null)}if(this.$menu){this.$menu.addClass("aa-"+(c?"with":"without")+"-"+this.name).removeClass("aa-"+(c?"without":"with")+"-"+this.name)}this.trigger("rendered")
function d(){var e=[].slice.call(arguments,0)
e=[{query:t,isEmpty:true}].concat(e)
return f.templates.empty.apply(this,e)}function p(){var e=[].slice.call(arguments,0)
var t
var c
t=o.element(l.suggestions).css(u.suggestions)
c=a.map(n,h)
t.append.apply(t,c)
return t
function h(t){var n
n=o.element(l.suggestion).append(f.templates.suggestion.apply(this,[t].concat(e)))
n.data(i,f.name)
n.data(r,f.displayFn(t)||undefined)
n.data(s,JSON.stringify(t))
n.children().each(function(){o.element(this).css(u.suggestionChild)})
return n}}function m(){var e=[].slice.call(arguments,0)
e=[{query:t,isEmpty:!c}].concat(e)
return f.templates.header.apply(this,e)}function v(){var e=[].slice.call(arguments,0)
e=[{query:t,isEmpty:!c}].concat(e)
return f.templates.footer.apply(this,e)}},getRoot:function e(){return this.$el},update:function e(t){var n=this
this.query=t
this.canceled=false
this.source(t,i)
function i(e){if(!n.canceled&&t===n.query){var i=[].slice.call(arguments,1)
i=[t,e].concat(i)
n._render.apply(n,i)}}},cancel:function e(){this.canceled=true},clear:function e(){this.cancel()
this.$el.empty()
this.trigger("rendered")},isEmpty:function e(){return this.$el.is(":empty")},destroy:function e(){this.$el=null}})
function h(e){e=e||"value"
return a.isFunction(e)?e:t
function t(t){return t[e]}}function d(e,t){return{empty:e.empty&&a.templatify(e.empty),header:e.header&&a.templatify(e.header),footer:e.footer&&a.templatify(e.footer),suggestion:e.suggestion||n}
function n(e){return"<p>"+t(e)+"</p>"}}function p(e){return/^[_a-zA-Z0-9-]+$/.test(e)}e.exports=c},function(e,t){"use strict"
e.exports={wrapper:'<span class="algolia-autocomplete"></span>',dropdown:'<span class="aa-dropdown-menu"></span>',dataset:'<div class="aa-dataset-%CLASS%"></div>',suggestions:'<span class="aa-suggestions"></span>',suggestion:'<div class="aa-suggestion"></div>'}},function(e,t,n){"use strict"
var i=n(4)
var r={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},suggestions:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:"0"}}
if(i.isMsie()){i.mixin(r.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"})}if(i.isMsie()&&i.isMsie()<=7){i.mixin(r.input,{marginTop:"-1px"})}e.exports=r},function(e,t,n){"use strict"
e.exports={hits:n(16),popularIn:n(17)}},function(e,t,n){"use strict"
var i=n(4)
e.exports=function e(t,n){return r
function r(e,r){t.search(e,n,function(e,t){if(e){i.error(e.message)
return}r(t.hits,t)})}}},function(e,t,n){"use strict"
var i=n(4)
e.exports=function e(t,n,r,s){if(!r.source){return i.error("Missing 'source' key")}var a=i.isFunction(r.source)?r.source:function(e){return e[r.source]}
if(!r.index){return i.error("Missing 'index' key")}var o=r.index
s=s||{}
return l
function l(e,l){t.search(e,n,function(e,t){if(e){i.error(e.message)
return}if(t.hits.length>0){var n=t.hits[0]
var u=i.mixin({hitsPerPage:0},r)
delete u.source
delete u.index
o.search(a(n),u,function(e,r){if(e){i.error(e.message)
return}var a=[]
if(s.includeAll){var o=s.allTitle||"All departments"
a.push(i.mixin({facet:{value:o,count:r.nbHits}},i.cloneDeep(n)))}i.each(r.facets,function(e,t){i.each(e,function(e,r){a.push(i.mixin({facet:{facet:t,value:r,count:e}},i.cloneDeep(n)))})})
for(var u=1;u<t.hits.length;++u){a.push(t.hits[u])}l(a,t)})
return}l([])})}}}]);(function(e){var t
if(typeof window!=="undefined"){t=window}else if(typeof self!=="undefined"){t=self}t.ALGOLIA_MIGRATION_LAYER=e()})(function(){var e,t,n
return function e(t,n,i){function r(a,o){if(!n[a]){if(!t[a]){var l=typeof require=="function"&&require
if(!o&&l)return l(a,!0)
if(s)return s(a,!0)
var u=new Error("Cannot find module '"+a+"'")
throw u.code="MODULE_NOT_FOUND",u}var f=n[a]={exports:{}}
t[a][0].call(f.exports,function(e){var n=t[a][1][e]
return r(n?n:e)},f,f.exports,e,t,n,i)}return n[a].exports}var s=typeof require=="function"&&require
for(var a=0;a<i.length;a++)r(i[a])
return r}({1:[function(require,e,t){e.exports=function e(t,s,a){var o=document.head||document.getElementsByTagName("head")[0]
var l=document.createElement("script")
if(typeof s==="function"){a=s
s={}}s=s||{}
a=a||function(){}
l.type=s.type||"text/javascript"
l.charset=s.charset||"utf8"
l.async="async"in s?!!s.async:true
l.src=t
if(s.attrs){n(l,s.attrs)}if(s.text){l.text=""+s.text}var u="onload"in l?i:r
u(l,a)
if(!l.onload){i(l,a)}o.appendChild(l)}
function n(e,t){for(var n in t){e.setAttribute(n,t[n])}}function i(e,t){e.onload=function(){this.onerror=this.onload=null
t(null,e)}
e.onerror=function(){this.onerror=this.onload=null
t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){if(this.readyState!="complete"&&this.readyState!="loaded")return
this.onreadystatechange=null
t(null,e)}}},{}],2:[function(require,e,t){"use strict"
e.exports=n
function n(e){var t=new RegExp("cdn\\.jsdelivr\\.net/algoliasearch/latest/"+e.replace(".","\\.")+"(?:\\.min)?\\.js$")
var n=document.getElementsByTagName("script")
var i=false
for(var r=0,s=n.length;r<s;r++){if(n[r].src&&t.test(n[r].src)){i=true
break}}return i}},{}],3:[function(require,e,t){"use strict"
e.exports=n
function n(e){var t=require(1)
var n="//cdn.jsdelivr.net/algoliasearch/2/"+e+".min.js"
var r="-- AlgoliaSearch `latest` warning --\n"+"Warning, you are using the `latest` version string from jsDelivr to load the AlgoliaSearch library.\n"+"Using `latest` is no more recommended, you should load //cdn.jsdelivr.net/algoliasearch/2/algoliasearch.min.js\n\n"+"Also, we updated the AlgoliaSearch JavaScript client to V3. If you want to upgrade,\n"+"please read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n"+"-- /AlgoliaSearch  `latest` warning --"
if(window.console){if(window.console.warn){window.console.warn(r)}else if(window.console.log){window.console.log(r)}}try{document.write("<script>window.ALGOLIA_SUPPORTS_DOCWRITE = true</script>")
if(window.ALGOLIA_SUPPORTS_DOCWRITE===true){document.write('<script src="'+n+'"></script>')
i("document.write")()}else{t(n,i("DOMElement"))}}catch(e){t(n,i("DOMElement"))}}function i(e){return function t(){var n="AlgoliaSearch: loaded V2 script using "+e
if(window.console&&window.console.log){window.console.log(n)}}}},{1:1}],4:[function(require,e,t){"use strict"
e.exports=n
function n(){var e="-- AlgoliaSearch V2 => V3 error --\n"+"You are trying to use a new version of the AlgoliaSearch JavaScript client with an old notation.\n"+"Please read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n"+"-- /AlgoliaSearch V2 => V3 error --"
window.AlgoliaSearch=function(){throw new Error(e)}
window.AlgoliaSearchHelper=function(){throw new Error(e)}
window.AlgoliaExplainResults=function(){throw new Error(e)}}},{}],5:[function(require,e,t){"use strict"
n("algoliasearch")
function n(e){var t=require(2)
var n=require(3)
var i=require(4)
if(t(e)){n(e)}else{i()}}},{2:2,3:3,4:4}]},{},[5])(5)});(function(e){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=e()}else if(typeof define==="function"&&define.amd){define([],e)}else{var t
if(typeof window!=="undefined"){t=window}else if(typeof global!=="undefined"){t=global}else if(typeof self!=="undefined"){t=self}else{t=this}t.algoliasearch=e()}})(function(){var e,t,n
return function e(t,n,i){function r(a,o){if(!n[a]){if(!t[a]){var l=typeof require=="function"&&require
if(!o&&l)return l(a,!0)
if(s)return s(a,!0)
var u=new Error("Cannot find module '"+a+"'")
throw u.code="MODULE_NOT_FOUND",u}var f=n[a]={exports:{}}
t[a][0].call(f.exports,function(e){var n=t[a][1][e]
return r(n?n:e)},f,f.exports,e,t,n,i)}return n[a].exports}var s=typeof require=="function"&&require
for(var a=0;a<i.length;a++)r(i[a])
return r}({1:[function(require,e,t){(function(n){t=e.exports=require(2)
t.log=s
t.formatArgs=r
t.save=a
t.load=o
t.useColors=i
t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:l()
t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"]
function i(){if(typeof window!=="undefined"&&window.process&&window.process.type==="renderer"){return true}return typeof document!=="undefined"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window!=="undefined"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator!=="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator!=="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}
function r(e){var n=this.useColors
e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff)
if(!n)return
var i="color: "+this.color
e.splice(1,0,i,"color: inherit")
var r=0
var s=0
e[0].replace(/%[a-zA-Z%]/g,function(e){if("%%"===e)return
r++
if("%c"===e){s=r}})
e.splice(s,0,i)}function s(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(e){try{if(null==e){t.storage.removeItem("debug")}else{t.storage.debug=e}}catch(e){}}function o(){var e
try{e=t.storage.debug}catch(e){}if(!e&&typeof n!=="undefined"&&"env"in n){e=n.env.DEBUG}return e}t.enable(o())
function l(){try{return window.localStorage}catch(e){}}}).call(this,require(12))},{12:12,2:2}],2:[function(require,e,t){t=e.exports=r.debug=r["default"]=r
t.coerce=l
t.disable=a
t.enable=s
t.enabled=o
t.humanize=require(9)
t.names=[]
t.skips=[]
t.formatters={}
var n
function i(e){var n=0,i
for(i in e){n=(n<<5)-n+e.charCodeAt(i)
n|=0}return t.colors[Math.abs(n)%t.colors.length]}function r(e){function r(){if(!r.enabled)return
var e=r
var i=+new Date
var s=i-(n||i)
e.diff=s
e.prev=n
e.curr=i
n=i
var a=new Array(arguments.length)
for(var o=0;o<a.length;o++){a[o]=arguments[o]}a[0]=t.coerce(a[0])
if("string"!==typeof a[0]){a.unshift("%O")}var l=0
a[0]=a[0].replace(/%([a-zA-Z%])/g,function(n,i){if(n==="%%")return n
l++
var r=t.formatters[i]
if("function"===typeof r){var s=a[l]
n=r.call(e,s)
a.splice(l,1)
l--}return n})
t.formatArgs.call(e,a)
var u=r.log||t.log||console.log.bind(console)
u.apply(e,a)}r.namespace=e
r.enabled=t.enabled(e)
r.useColors=t.useColors()
r.color=i(e)
if("function"===typeof t.init){t.init(r)}return r}function s(e){t.save(e)
t.names=[]
t.skips=[]
var n=(typeof e==="string"?e:"").split(/[\s,]+/)
var i=n.length
for(var r=0;r<i;r++){if(!n[r])continue
e=n[r].replace(/\*/g,".*?")
if(e[0]==="-"){t.skips.push(new RegExp("^"+e.substr(1)+"$"))}else{t.names.push(new RegExp("^"+e+"$"))}}}function a(){t.enable("")}function o(e){var n,i
for(n=0,i=t.skips.length;n<i;n++){if(t.skips[n].test(e)){return false}}for(n=0,i=t.names.length;n<i;n++){if(t.names[n].test(e)){return true}}return false}function l(e){if(e instanceof Error)return e.stack||e.message
return e}},{9:9}],3:[function(require,t,n){(function(i,r){(function(i,r){typeof n==="object"&&typeof t!=="undefined"?t.exports=r():typeof e==="function"&&e.amd?e(r):i.ES6Promise=r()})(this,function(){"use strict"
function e(e){return typeof e==="function"||typeof e==="object"&&e!==null}function t(e){return typeof e==="function"}var n=undefined
if(!Array.isArray){n=function(e){return Object.prototype.toString.call(e)==="[object Array]"}}else{n=Array.isArray}var s=n
var a=0
var o=undefined
var l=undefined
var u=function e(t,n){x[a]=t
x[a+1]=n
a+=2
if(a===2){if(l){l(k)}else{T()}}}
function f(e){l=e}function c(e){u=e}var h=typeof window!=="undefined"?window:undefined
var d=h||{}
var p=d.MutationObserver||d.WebKitMutationObserver
var m=typeof self==="undefined"&&typeof i!=="undefined"&&{}.toString.call(i)==="[object process]"
var v=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined"
function g(){return function(){return i.nextTick(k)}}function _(){if(typeof o!=="undefined"){return function(){o(k)}}return w()}function y(){var e=0
var t=new p(k)
var n=document.createTextNode("")
t.observe(n,{characterData:true})
return function(){n.data=e=++e%2}}function b(){var e=new MessageChannel
e.port1.onmessage=k
return function(){return e.port2.postMessage(0)}}function w(){var e=setTimeout
return function(){return e(k,1)}}var x=new Array(1e3)
function k(){for(var e=0;e<a;e+=2){var t=x[e]
var n=x[e+1]
t(n)
x[e]=undefined
x[e+1]=undefined}a=0}function M(){try{var e=require
var t=e("vertx")
o=t.runOnLoop||t.runOnContext
return _()}catch(e){return w()}}var T=undefined
if(m){T=g()}else if(p){T=y()}else if(v){T=b()}else if(h===undefined&&typeof require==="function"){T=M()}else{T=w()}function L(e,t){var n=arguments
var i=this
var r=new this.constructor(C)
if(r[D]===undefined){ee(r)}var s=i._state
if(s){(function(){var e=n[s-1]
u(function(){return K(s,r,e,i._result)})})()}else{q(i,r,e,t)}return r}function S(e){var t=this
if(e&&typeof e==="object"&&e.constructor===t){return e}var n=new t(C)
$(n,e)
return n}var D=Math.random().toString(36).substring(16)
function C(){}var E=void 0
var A=1
var Y=2
var j=new V
function O(){return new TypeError("You cannot resolve a promise with itself")}function I(){return new TypeError("A promises callback cannot return that same promise.")}function P(e){try{return e.then}catch(e){j.error=e
return j}}function N(e,t,n,i){try{e.call(t,n,i)}catch(e){return e}}function R(e,t,n){u(function(e){var i=false
var r=N(n,t,function(n){if(i){return}i=true
if(t!==n){$(e,n)}else{W(e,n)}},function(t){if(i){return}i=true
U(e,t)},"Settle: "+(e._label||" unknown promise"))
if(!i&&r){i=true
U(e,r)}},e)}function F(e,t){if(t._state===A){W(e,t._result)}else if(t._state===Y){U(e,t._result)}else{q(t,undefined,function(t){return $(e,t)},function(t){return U(e,t)})}}function H(e,n,i){if(n.constructor===e.constructor&&i===L&&n.constructor.resolve===S){F(e,n)}else{if(i===j){U(e,j.error)
j.error=null}else if(i===undefined){W(e,n)}else if(t(i)){R(e,n,i)}else{W(e,n)}}}function $(t,n){if(t===n){U(t,O())}else if(e(n)){H(t,n,P(n))}else{W(t,n)}}function z(e){if(e._onerror){e._onerror(e._result)}B(e)}function W(e,t){if(e._state!==E){return}e._result=t
e._state=A
if(e._subscribers.length!==0){u(B,e)}}function U(e,t){if(e._state!==E){return}e._state=Y
e._result=t
u(z,e)}function q(e,t,n,i){var r=e._subscribers
var s=r.length
e._onerror=null
r[s]=t
r[s+A]=n
r[s+Y]=i
if(s===0&&e._state){u(B,e)}}function B(e){var t=e._subscribers
var n=e._state
if(t.length===0){return}var i=undefined,r=undefined,s=e._result
for(var a=0;a<t.length;a+=3){i=t[a]
r=t[a+n]
if(i){K(n,i,r,s)}else{r(s)}}e._subscribers.length=0}function V(){this.error=null}var J=new V
function X(e,t){try{return e(t)}catch(e){J.error=e
return J}}function K(e,n,i,r){var s=t(i),a=undefined,o=undefined,l=undefined,u=undefined
if(s){a=X(i,r)
if(a===J){u=true
o=a.error
a.error=null}else{l=true}if(n===a){U(n,I())
return}}else{a=r
l=true}if(n._state!==E){}else if(s&&l){$(n,a)}else if(u){U(n,o)}else if(e===A){W(n,a)}else if(e===Y){U(n,a)}}function Q(e,t){try{t(function t(n){$(e,n)},function t(n){U(e,n)})}catch(t){U(e,t)}}var G=0
function Z(){return G++}function ee(e){e[D]=G++
e._state=undefined
e._result=undefined
e._subscribers=[]}function te(e,t){this._instanceConstructor=e
this.promise=new e(C)
if(!this.promise[D]){ee(this.promise)}if(s(t)){this._input=t
this.length=t.length
this._remaining=t.length
this._result=new Array(this.length)
if(this.length===0){W(this.promise,this._result)}else{this.length=this.length||0
this._enumerate()
if(this._remaining===0){W(this.promise,this._result)}}}else{U(this.promise,ne())}}function ne(){return new Error("Array Methods must be provided an Array")}te.prototype._enumerate=function(){var e=this.length
var t=this._input
for(var n=0;this._state===E&&n<e;n++){this._eachEntry(t[n],n)}}
te.prototype._eachEntry=function(e,t){var n=this._instanceConstructor
var i=n.resolve
if(i===S){var r=P(e)
if(r===L&&e._state!==E){this._settledAt(e._state,t,e._result)}else if(typeof r!=="function"){this._remaining--
this._result[t]=e}else if(n===le){var s=new n(C)
H(s,e,r)
this._willSettleAt(s,t)}else{this._willSettleAt(new n(function(t){return t(e)}),t)}}else{this._willSettleAt(i(e),t)}}
te.prototype._settledAt=function(e,t,n){var i=this.promise
if(i._state===E){this._remaining--
if(e===Y){U(i,n)}else{this._result[t]=n}}if(this._remaining===0){W(i,this._result)}}
te.prototype._willSettleAt=function(e,t){var n=this
q(e,undefined,function(e){return n._settledAt(A,t,e)},function(e){return n._settledAt(Y,t,e)})}
function ie(e){return new te(this,e).promise}function re(e){var t=this
if(!s(e)){return new t(function(e,t){return t(new TypeError("You must pass an array to race."))})}else{return new t(function(n,i){var r=e.length
for(var s=0;s<r;s++){t.resolve(e[s]).then(n,i)}})}}function se(e){var t=this
var n=new t(C)
U(n,e)
return n}function ae(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function oe(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function le(e){this[D]=Z()
this._result=this._state=undefined
this._subscribers=[]
if(C!==e){typeof e!=="function"&&ae()
this instanceof le?Q(this,e):oe()}}le.all=ie
le.race=re
le.resolve=S
le.reject=se
le._setScheduler=f
le._setAsap=c
le._asap=u
le.prototype={constructor:le,then:L,catch:function e(t){return this.then(null,t)}}
function ue(){var e=undefined
if(typeof r!=="undefined"){e=r}else if(typeof self!=="undefined"){e=self}else{try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}}var t=e.Promise
if(t){var n=null
try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if(n==="[object Promise]"&&!t.cast){return}}e.Promise=le}le.polyfill=ue
le.Promise=le
return le})}).call(this,require(12),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{12:12}],4:[function(require,e,t){function n(){this._events=this._events||{}
this._maxListeners=this._maxListeners||undefined}e.exports=n
n.EventEmitter=n
n.prototype._events=undefined
n.prototype._maxListeners=undefined
n.defaultMaxListeners=10
n.prototype.setMaxListeners=function(e){if(!r(e)||e<0||isNaN(e))throw TypeError("n must be a positive number")
this._maxListeners=e
return this}
n.prototype.emit=function(e){var t,n,r,o,l,u
if(!this._events)this._events={}
if(e==="error"){if(!this._events.error||s(this._events.error)&&!this._events.error.length){t=arguments[1]
if(t instanceof Error){throw t}else{var f=new Error('Uncaught, unspecified "error" event. ('+t+")")
f.context=t
throw f}}}n=this._events[e]
if(a(n))return false
if(i(n)){switch(arguments.length){case 1:n.call(this)
break
case 2:n.call(this,arguments[1])
break
case 3:n.call(this,arguments[1],arguments[2])
break
default:o=Array.prototype.slice.call(arguments,1)
n.apply(this,o)}}else if(s(n)){o=Array.prototype.slice.call(arguments,1)
u=n.slice()
r=u.length
for(l=0;l<r;l++)u[l].apply(this,o)}return true}
n.prototype.addListener=function(e,t){var r
if(!i(t))throw TypeError("listener must be a function")
if(!this._events)this._events={}
if(this._events.newListener)this.emit("newListener",e,i(t.listener)?t.listener:t)
if(!this._events[e])this._events[e]=t
else if(s(this._events[e]))this._events[e].push(t)
else this._events[e]=[this._events[e],t]
if(s(this._events[e])&&!this._events[e].warned){if(!a(this._maxListeners)){r=this._maxListeners}else{r=n.defaultMaxListeners}if(r&&r>0&&this._events[e].length>r){this._events[e].warned=true
console.error("(node) warning: possible EventEmitter memory "+"leak detected. %d listeners added. "+"Use emitter.setMaxListeners() to increase limit.",this._events[e].length)
if(typeof console.trace==="function"){console.trace()}}}return this}
n.prototype.on=n.prototype.addListener
n.prototype.once=function(e,t){if(!i(t))throw TypeError("listener must be a function")
var n=false
function r(){this.removeListener(e,r)
if(!n){n=true
t.apply(this,arguments)}}r.listener=t
this.on(e,r)
return this}
n.prototype.removeListener=function(e,t){var n,r,a,o
if(!i(t))throw TypeError("listener must be a function")
if(!this._events||!this._events[e])return this
n=this._events[e]
a=n.length
r=-1
if(n===t||i(n.listener)&&n.listener===t){delete this._events[e]
if(this._events.removeListener)this.emit("removeListener",e,t)}else if(s(n)){for(o=a;o-- >0;){if(n[o]===t||n[o].listener&&n[o].listener===t){r=o
break}}if(r<0)return this
if(n.length===1){n.length=0
delete this._events[e]}else{n.splice(r,1)}if(this._events.removeListener)this.emit("removeListener",e,t)}return this}
n.prototype.removeAllListeners=function(e){var t,n
if(!this._events)return this
if(!this._events.removeListener){if(arguments.length===0)this._events={}
else if(this._events[e])delete this._events[e]
return this}if(arguments.length===0){for(t in this._events){if(t==="removeListener")continue
this.removeAllListeners(t)}this.removeAllListeners("removeListener")
this._events={}
return this}n=this._events[e]
if(i(n)){this.removeListener(e,n)}else if(n){while(n.length)this.removeListener(e,n[n.length-1])}delete this._events[e]
return this}
n.prototype.listeners=function(e){var t
if(!this._events||!this._events[e])t=[]
else if(i(this._events[e]))t=[this._events[e]]
else t=this._events[e].slice()
return t}
n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e]
if(i(t))return 1
else if(t)return t.length}return 0}
n.listenerCount=function(e,t){return e.listenerCount(t)}
function i(e){return typeof e==="function"}function r(e){return typeof e==="number"}function s(e){return typeof e==="object"&&e!==null}function a(e){return e===void 0}},{}],5:[function(require,e,t){var n=Object.prototype.hasOwnProperty
var i=Object.prototype.toString
e.exports=function e(t,r,s){if(i.call(r)!=="[object Function]"){throw new TypeError("iterator must be a function")}var a=t.length
if(a===+a){for(var o=0;o<a;o++){r.call(s,t[o],o,t)}}else{for(var l in t){if(n.call(t,l)){r.call(s,t[l],l,t)}}}}},{}],6:[function(require,e,t){(function(t){var n
if(typeof window!=="undefined"){n=window}else if(typeof t!=="undefined"){n=t}else if(typeof self!=="undefined"){n=self}else{n={}}e.exports=n}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],7:[function(require,e,t){if(typeof Object.create==="function"){e.exports=function e(t,n){t.super_=n
t.prototype=Object.create(n.prototype,{constructor:{value:t,enumerable:false,writable:true,configurable:true}})}}else{e.exports=function e(t,n){t.super_=n
var i=function(){}
i.prototype=n.prototype
t.prototype=new i
t.prototype.constructor=t}}},{}],8:[function(require,e,t){var n={}.toString
e.exports=Array.isArray||function(e){return n.call(e)=="[object Array]"}},{}],9:[function(require,e,t){var n=1e3
var i=n*60
var r=i*60
var s=r*24
var a=s*365.25
e.exports=function(e,t){t=t||{}
var n=typeof e
if(n==="string"&&e.length>0){return o(e)}else if(n==="number"&&isNaN(e)===false){return t.long?u(e):l(e)}throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}
function o(e){e=String(e)
if(e.length>100){return}var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e)
if(!t){return}var o=parseFloat(t[1])
var l=(t[2]||"ms").toLowerCase()
switch(l){case"years":case"year":case"yrs":case"yr":case"y":return o*a
case"days":case"day":case"d":return o*s
case"hours":case"hour":case"hrs":case"hr":case"h":return o*r
case"minutes":case"minute":case"mins":case"min":case"m":return o*i
case"seconds":case"second":case"secs":case"sec":case"s":return o*n
case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o
default:return undefined}}function l(e){if(e>=s){return Math.round(e/s)+"d"}if(e>=r){return Math.round(e/r)+"h"}if(e>=i){return Math.round(e/i)+"m"}if(e>=n){return Math.round(e/n)+"s"}return e+"ms"}function u(e){return f(e,s,"day")||f(e,r,"hour")||f(e,i,"minute")||f(e,n,"second")||e+" ms"}function f(e,t,n){if(e<t){return}if(e<t*1.5){return Math.floor(e/t)+" "+n}return Math.ceil(e/t)+" "+n+"s"}},{}],10:[function(require,e,t){"use strict"
var n=Object.prototype.hasOwnProperty
var i=Object.prototype.toString
var r=Array.prototype.slice
var s=require(11)
var a=Object.prototype.propertyIsEnumerable
var o=!a.call({toString:null},"toString")
var l=a.call(function(){},"prototype")
var u=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]
var f=function(e){var t=e.constructor
return t&&t.prototype===e}
var c={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true}
var h=function(){if(typeof window==="undefined"){return false}for(var e in window){try{if(!c["$"+e]&&n.call(window,e)&&window[e]!==null&&typeof window[e]==="object"){try{f(window[e])}catch(e){return true}}}catch(e){return true}}return false}()
var d=function(e){if(typeof window==="undefined"||!h){return f(e)}try{return f(e)}catch(e){return false}}
var p=function e(t){var r=t!==null&&typeof t==="object"
var a=i.call(t)==="[object Function]"
var f=s(t)
var c=r&&i.call(t)==="[object String]"
var h=[]
if(!r&&!a&&!f){throw new TypeError("Object.keys called on a non-object")}var p=l&&a
if(c&&t.length>0&&!n.call(t,0)){for(var m=0;m<t.length;++m){h.push(String(m))}}if(f&&t.length>0){for(var v=0;v<t.length;++v){h.push(String(v))}}else{for(var g in t){if(!(p&&g==="prototype")&&n.call(t,g)){h.push(String(g))}}}if(o){var _=d(t)
for(var y=0;y<u.length;++y){if(!(_&&u[y]==="constructor")&&n.call(t,u[y])){h.push(u[y])}}}return h}
p.shim=function e(){if(Object.keys){var t=function(){return(Object.keys(arguments)||"").length===2}(1,2)
if(!t){var n=Object.keys
Object.keys=function e(t){if(s(t)){return n(r.call(t))}else{return n(t)}}}}else{Object.keys=p}return Object.keys||p}
e.exports=p},{11:11}],11:[function(require,e,t){"use strict"
var n=Object.prototype.toString
e.exports=function e(t){var i=n.call(t)
var r=i==="[object Arguments]"
if(!r){r=i!=="[object Array]"&&t!==null&&typeof t==="object"&&typeof t.length==="number"&&t.length>=0&&n.call(t.callee)==="[object Function]"}return r}},{}],12:[function(require,e,t){var n=e.exports={}
var i
var r
function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){i=setTimeout}else{i=s}}catch(e){i=s}try{if(typeof clearTimeout==="function"){r=clearTimeout}else{r=a}}catch(e){r=a}})()
function o(e){if(i===setTimeout){return setTimeout(e,0)}if((i===s||!i)&&setTimeout){i=setTimeout
return setTimeout(e,0)}try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}function l(e){if(r===clearTimeout){return clearTimeout(e)}if((r===a||!r)&&clearTimeout){r=clearTimeout
return clearTimeout(e)}try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}var u=[]
var f=false
var c
var h=-1
function d(){if(!f||!c){return}f=false
if(c.length){u=c.concat(u)}else{h=-1}if(u.length){p()}}function p(){if(f){return}var e=o(d)
f=true
var t=u.length
while(t){c=u
u=[]
while(++h<t){if(c){c[h].run()}}h=-1
t=u.length}c=null
f=false
l(e)}n.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1){for(var n=1;n<arguments.length;n++){t[n-1]=arguments[n]}}u.push(new m(e,t))
if(u.length===1&&!f){o(p)}}
function m(e,t){this.fun=e
this.array=t}m.prototype.run=function(){this.fun.apply(null,this.array)}
n.title="browser"
n.browser=true
n.env={}
n.argv=[]
n.version=""
n.versions={}
function v(){}n.on=v
n.addListener=v
n.once=v
n.off=v
n.removeListener=v
n.removeAllListeners=v
n.emit=v
n.binding=function(e){throw new Error("process.binding is not supported")}
n.cwd=function(){return"/"}
n.chdir=function(e){throw new Error("process.chdir is not supported")}
n.umask=function(){return 0}},{}],13:[function(require,e,t){"use strict"
var n=function(e){switch(typeof e){case"string":return e
case"boolean":return e?"true":"false"
case"number":return isFinite(e)?e:""
default:return""}}
e.exports=function(e,t,a,o){t=t||"&"
a=a||"="
if(e===null){e=undefined}if(typeof e==="object"){return r(s(e),function(s){var o=encodeURIComponent(n(s))+a
if(i(e[s])){return r(e[s],function(e){return o+encodeURIComponent(n(e))}).join(t)}else{return o+encodeURIComponent(n(e[s]))}}).join(t)}if(!o)return""
return encodeURIComponent(n(o))+a+encodeURIComponent(n(e))}
var i=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"}
function r(e,t){if(e.map)return e.map(t)
var n=[]
for(var i=0;i<e.length;i++){n.push(t(e[i],i))}return n}var s=Object.keys||function(e){var t=[]
for(var n in e){if(Object.prototype.hasOwnProperty.call(e,n))t.push(n)}return t}},{}],14:[function(require,e,t){e.exports=l
var n=require(16)
var i=require(26)
var r=require(27)
var s=require(15)
var a=require(7)
var o=require(28)
function l(){s.apply(this,arguments)}a(l,s)
l.prototype.deleteIndex=function(e,t){return this._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(e),hostType:"write",callback:t})}
l.prototype.moveIndex=function(e,t,n){var i={operation:"move",destination:t}
return this._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(e)+"/operation",body:i,hostType:"write",callback:n})}
l.prototype.copyIndex=function(e,t,n){var i={operation:"copy",destination:t}
return this._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(e)+"/operation",body:i,hostType:"write",callback:n})}
l.prototype.getLogs=function(e,t,n){var i=require(25)
var r={}
if(typeof e==="object"){r=i(e)
n=t}else if(arguments.length===0||typeof e==="function"){n=e}else if(arguments.length===1||typeof t==="function"){n=t
r.offset=e}else{r.offset=e
r.length=t}if(r.offset===undefined)r.offset=0
if(r.length===undefined)r.length=10
return this._jsonRequest({method:"GET",url:"/1/logs?"+this._getSearchParams(r,""),hostType:"read",callback:n})}
l.prototype.listIndexes=function(e,t){var n=""
if(e===undefined||typeof e==="function"){t=e}else{n="?page="+e}return this._jsonRequest({method:"GET",url:"/1/indexes"+n,hostType:"read",callback:t})}
l.prototype.initIndex=function(e){return new n(this,e)}
l.prototype.listUserKeys=i(function(e){return this.listApiKeys(e)},r("client.listUserKeys()","client.listApiKeys()"))
l.prototype.listApiKeys=function(e){return this._jsonRequest({method:"GET",url:"/1/keys",hostType:"read",callback:e})}
l.prototype.getUserKeyACL=i(function(e,t){return this.getApiKey(e,t)},r("client.getUserKeyACL()","client.getApiKey()"))
l.prototype.getApiKey=function(e,t){return this._jsonRequest({method:"GET",url:"/1/keys/"+e,hostType:"read",callback:t})}
l.prototype.deleteUserKey=i(function(e,t){return this.deleteApiKey(e,t)},r("client.deleteUserKey()","client.deleteApiKey()"))
l.prototype.deleteApiKey=function(e,t){return this._jsonRequest({method:"DELETE",url:"/1/keys/"+e,hostType:"write",callback:t})}
l.prototype.addUserKey=i(function(e,t,n){return this.addApiKey(e,t,n)},r("client.addUserKey()","client.addApiKey()"))
l.prototype.addApiKey=function(e,t,n){var i=require(8)
var r="Usage: client.addApiKey(arrayOfAcls[, params, callback])"
if(!i(e)){throw new Error(r)}if(arguments.length===1||typeof t==="function"){n=t
t=null}var s={acl:e}
if(t){s.validity=t.validity
s.maxQueriesPerIPPerHour=t.maxQueriesPerIPPerHour
s.maxHitsPerQuery=t.maxHitsPerQuery
s.indexes=t.indexes
s.description=t.description
if(t.queryParameters){s.queryParameters=this._getSearchParams(t.queryParameters,"")}s.referers=t.referers}return this._jsonRequest({method:"POST",url:"/1/keys",body:s,hostType:"write",callback:n})}
l.prototype.addUserKeyWithValidity=i(function(e,t,n){return this.addApiKey(e,t,n)},r("client.addUserKeyWithValidity()","client.addApiKey()"))
l.prototype.updateUserKey=i(function(e,t,n,i){return this.updateApiKey(e,t,n,i)},r("client.updateUserKey()","client.updateApiKey()"))
l.prototype.updateApiKey=function(e,t,n,i){var r=require(8)
var s="Usage: client.updateApiKey(key, arrayOfAcls[, params, callback])"
if(!r(t)){throw new Error(s)}if(arguments.length===2||typeof n==="function"){i=n
n=null}var a={acl:t}
if(n){a.validity=n.validity
a.maxQueriesPerIPPerHour=n.maxQueriesPerIPPerHour
a.maxHitsPerQuery=n.maxHitsPerQuery
a.indexes=n.indexes
a.description=n.description
if(n.queryParameters){a.queryParameters=this._getSearchParams(n.queryParameters,"")}a.referers=n.referers}return this._jsonRequest({method:"PUT",url:"/1/keys/"+e,body:a,hostType:"write",callback:i})}
l.prototype.startQueriesBatch=i(function e(){this._batch=[]},r("client.startQueriesBatch()","client.search()"))
l.prototype.addQueryInBatch=i(function e(t,n,i){this._batch.push({indexName:t,query:n,params:i})},r("client.addQueryInBatch()","client.search()"))
l.prototype.sendQueriesBatch=i(function e(t){return this.search(this._batch,t)},r("client.sendQueriesBatch()","client.search()"))
l.prototype.batch=function(e,t){var n=require(8)
var i="Usage: client.batch(operations[, callback])"
if(!n(e)){throw new Error(i)}return this._jsonRequest({method:"POST",url:"/1/indexes/*/batch",body:{requests:e},hostType:"write",callback:t})}
l.prototype.destroy=u
l.prototype.enableRateLimitForward=u
l.prototype.disableRateLimitForward=u
l.prototype.useSecuredAPIKey=u
l.prototype.disableSecuredAPIKey=u
l.prototype.generateSecuredApiKey=u
function u(){var e="Not implemented in this environment.\n"+"If you feel this is a mistake, write to support@algolia.com"
throw new o.AlgoliaSearchError(e)}},{15:15,16:16,25:25,26:26,27:27,28:28,7:7,8:8}],15:[function(require,e,t){(function(t){e.exports=l
var n=require(28)
var i=require(29)
var r=require(18)
var s=require(34)
var a=500
var o=t.env.RESET_APP_DATA_TIMER&&parseInt(t.env.RESET_APP_DATA_TIMER,10)||60*2*1e3
function l(e,t,i){var r=require(1)("algoliasearch")
var s=require(25)
var a=require(8)
var o=require(30)
var l="Usage: algoliasearch(applicationID, apiKey, opts)"
if(i._allowEmptyCredentials!==true&&!e){throw new n.AlgoliaSearchError("Please provide an application ID. "+l)}if(i._allowEmptyCredentials!==true&&!t){throw new n.AlgoliaSearchError("Please provide an API key. "+l)}this.applicationID=e
this.apiKey=t
this.hosts={read:[],write:[]}
i=i||{}
var f=i.protocol||"https:"
this._timeouts=i.timeouts||{connect:1*1e3,read:2*1e3,write:30*1e3}
if(i.timeout){this._timeouts.connect=this._timeouts.read=this._timeouts.write=i.timeout}if(!/:$/.test(f)){f=f+":"}if(i.protocol!=="http:"&&i.protocol!=="https:"){throw new n.AlgoliaSearchError("protocol must be `http:` or `https:` (was `"+i.protocol+"`)")}this._checkAppIdData()
if(!i.hosts){var c=o(this._shuffleResult,function(t){return e+"-"+t+".algolianet.com"})
this.hosts.read=[this.applicationID+"-dsn.algolia.net"].concat(c)
this.hosts.write=[this.applicationID+".algolia.net"].concat(c)}else if(a(i.hosts)){this.hosts.read=s(i.hosts)
this.hosts.write=s(i.hosts)}else{this.hosts.read=s(i.hosts.read)
this.hosts.write=s(i.hosts.write)}this.hosts.read=o(this.hosts.read,u(f))
this.hosts.write=o(this.hosts.write,u(f))
this.extraHeaders=[]
this.cache=i._cache||{}
this._ua=i._ua
this._useCache=i._useCache===undefined||i._cache?true:i._useCache
this._useFallback=i.useFallback===undefined?true:i.useFallback
this._setTimeout=i._setTimeout
r("init done, %j",this)}l.prototype.initIndex=function(e){return new r(this,e)}
l.prototype.setExtraHeader=function(e,t){this.extraHeaders.push({name:e.toLowerCase(),value:t})}
l.prototype.addAlgoliaAgent=function(e){if(this._ua.indexOf(";"+e)===-1){this._ua+=";"+e}}
l.prototype._jsonRequest=function(e){this._checkAppIdData()
var t=require(1)("algoliasearch:"+e.url)
var r
var s=e.additionalUA||""
var o=e.cache
var l=this
var u=0
var c=false
var d=l._useFallback&&l._request.fallback&&e.fallback
var p
if(this.apiKey.length>a&&e.body!==undefined&&(e.body.params!==undefined||e.body.requests!==undefined)){e.body.apiKey=this.apiKey
p=this._computeRequestHeaders(s,false)}else{p=this._computeRequestHeaders(s)}if(e.body!==undefined){r=f(e.body)}t("request start")
var m=[]
function v(i,a){l._checkAppIdData()
var g=new Date
var _
if(l._useCache){_=e.url}if(l._useCache&&r){_+="_body_"+a.body}if(l._useCache&&o&&o[_]!==undefined){t("serving response from cache")
return l._promise.resolve(JSON.parse(o[_]))}if(u>=l.hosts[e.hostType].length){if(!d||c){t("could not get any response")
return l._promise.reject(new n.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API."+" Send an email to support@algolia.com to report and resolve the issue."+" Application id was: "+l.applicationID,{debugData:m}))}t("switching to fallback")
u=0
a.method=e.fallback.method
a.url=e.fallback.url
a.jsonBody=e.fallback.body
if(a.jsonBody){a.body=f(a.jsonBody)}p=l._computeRequestHeaders(s)
a.timeouts=l._getTimeoutsForRequest(e.hostType)
l._setHostIndexByType(0,e.hostType)
c=true
return v(l._request.fallback,a)}var y=l._getHostByType(e.hostType)
var b=y+a.url
var w={body:a.body,jsonBody:a.jsonBody,method:a.method,headers:p,timeouts:a.timeouts,debug:t}
t("method: %s, url: %s, headers: %j, timeouts: %d",w.method,b,w.headers,w.timeouts)
if(i===l._request.fallback){t("using fallback")}return i.call(l,b,w).then(x,k)
function x(e){var i=e&&e.body&&e.body.message&&e.body.status||e.statusCode||e&&e.body&&200
t("received response: statusCode: %s, computed statusCode: %d, headers: %j",e.statusCode,i,e.headers)
var s=Math.floor(i/100)===2
var f=new Date
m.push({currentHost:y,headers:h(p),content:r||null,contentLength:r!==undefined?r.length:null,method:a.method,timeouts:a.timeouts,url:a.url,startTime:g,endTime:f,duration:f-g,statusCode:i})
if(s){if(l._useCache&&o){o[_]=e.responseText}return e.body}var c=Math.floor(i/100)!==4
if(c){u+=1
return M()}t("unrecoverable error")
var d=new n.AlgoliaSearchError(e.body&&e.body.message,{debugData:m,statusCode:i})
return l._promise.reject(d)}function k(i){t("error: %s, stack: %s",i.message,i.stack)
var s=new Date
m.push({currentHost:y,headers:h(p),content:r||null,contentLength:r!==undefined?r.length:null,method:a.method,timeouts:a.timeouts,url:a.url,startTime:g,endTime:s,duration:s-g})
if(!(i instanceof n.AlgoliaSearchError)){i=new n.Unknown(i&&i.message,i)}u+=1
if(i instanceof n.Unknown||i instanceof n.UnparsableJSON||u>=l.hosts[e.hostType].length&&(c||!d)){i.debugData=m
return l._promise.reject(i)}if(i instanceof n.RequestTimeout){return T()}return M()}function M(){t("retrying request")
l._incrementHostIndex(e.hostType)
return v(i,a)}function T(){t("retrying request with higher timeout")
l._incrementHostIndex(e.hostType)
l._incrementTimeoutMultipler()
a.timeouts=l._getTimeoutsForRequest(e.hostType)
return v(i,a)}}var g=v(l._request,{url:e.url,method:e.method,body:r,jsonBody:e.body,timeouts:l._getTimeoutsForRequest(e.hostType)})
if(e.callback){g.then(function t(n){i(function(){e.callback(null,n)},l._setTimeout||setTimeout)},function t(n){i(function(){e.callback(n)},l._setTimeout||setTimeout)})}else{return g}}
l.prototype._getSearchParams=function(e,t){if(e===undefined||e===null){return t}for(var n in e){if(n!==null&&e[n]!==undefined&&e.hasOwnProperty(n)){t+=t===""?"":"&"
t+=n+"="+encodeURIComponent(Object.prototype.toString.call(e[n])==="[object Array]"?f(e[n]):e[n])}}return t}
l.prototype._computeRequestHeaders=function(e,t){var n=require(5)
var i=e?this._ua+";"+e:this._ua
var r={"x-algolia-agent":i,"x-algolia-application-id":this.applicationID}
if(t!==false){r["x-algolia-api-key"]=this.apiKey}if(this.userToken){r["x-algolia-usertoken"]=this.userToken}if(this.securityTags){r["x-algolia-tagfilters"]=this.securityTags}if(this.extraHeaders){n(this.extraHeaders,function e(t){r[t.name]=t.value})}return r}
l.prototype.search=function(e,t,n){var i=require(8)
var r=require(30)
var s="Usage: client.search(arrayOfQueries[, callback])"
if(!i(e)){throw new Error(s)}if(typeof t==="function"){n=t
t={}}else if(t===undefined){t={}}var a=this
var o={requests:r(e,function e(t){var n=""
if(t.query!==undefined){n+="query="+encodeURIComponent(t.query)}return{indexName:t.indexName,params:a._getSearchParams(t.params,n)}})}
var l=r(o.requests,function e(t,n){return n+"="+encodeURIComponent("/1/indexes/"+encodeURIComponent(t.indexName)+"?"+t.params)}).join("&")
var u="/1/indexes/*/queries"
if(t.strategy!==undefined){u+="?strategy="+t.strategy}return this._jsonRequest({cache:this.cache,method:"POST",url:u,body:o,hostType:"read",fallback:{method:"GET",url:"/1/indexes/*",body:{params:l}},callback:n})}
l.prototype.setSecurityTags=function(e){if(Object.prototype.toString.call(e)==="[object Array]"){var t=[]
for(var n=0;n<e.length;++n){if(Object.prototype.toString.call(e[n])==="[object Array]"){var i=[]
for(var r=0;r<e[n].length;++r){i.push(e[n][r])}t.push("("+i.join(",")+")")}else{t.push(e[n])}}e=t.join(",")}this.securityTags=e}
l.prototype.setUserToken=function(e){this.userToken=e}
l.prototype.clearCache=function(){this.cache={}}
l.prototype.setRequestTimeout=function(e){if(e){this._timeouts.connect=this._timeouts.read=this._timeouts.write=e}}
l.prototype.setTimeouts=function(e){this._timeouts=e}
l.prototype.getTimeouts=function(){return this._timeouts}
l.prototype._getAppIdData=function(){var e=s.get(this.applicationID)
if(e!==null)this._cacheAppIdData(e)
return e}
l.prototype._setAppIdData=function(e){e.lastChange=(new Date).getTime()
this._cacheAppIdData(e)
return s.set(this.applicationID,e)}
l.prototype._checkAppIdData=function(){var e=this._getAppIdData()
var t=(new Date).getTime()
if(e===null||t-e.lastChange>o){return this._resetInitialAppIdData(e)}return e}
l.prototype._resetInitialAppIdData=function(e){var t=e||{}
t.hostIndexes={read:0,write:0}
t.timeoutMultiplier=1
t.shuffleResult=t.shuffleResult||c([1,2,3])
return this._setAppIdData(t)}
l.prototype._cacheAppIdData=function(e){this._hostIndexes=e.hostIndexes
this._timeoutMultiplier=e.timeoutMultiplier
this._shuffleResult=e.shuffleResult}
l.prototype._partialAppIdDataUpdate=function(e){var t=require(5)
var n=this._getAppIdData()
t(e,function(e,t){n[t]=e})
return this._setAppIdData(n)}
l.prototype._getHostByType=function(e){return this.hosts[e][this._getHostIndexByType(e)]}
l.prototype._getTimeoutMultiplier=function(){return this._timeoutMultiplier}
l.prototype._getHostIndexByType=function(e){return this._hostIndexes[e]}
l.prototype._setHostIndexByType=function(e,t){var n=require(25)
var i=n(this._hostIndexes)
i[t]=e
this._partialAppIdDataUpdate({hostIndexes:i})
return e}
l.prototype._incrementHostIndex=function(e){return this._setHostIndexByType((this._getHostIndexByType(e)+1)%this.hosts[e].length,e)}
l.prototype._incrementTimeoutMultipler=function(){var e=Math.max(this._timeoutMultiplier+1,4)
return this._partialAppIdDataUpdate({timeoutMultiplier:e})}
l.prototype._getTimeoutsForRequest=function(e){return{connect:this._timeouts.connect*this._timeoutMultiplier,complete:this._timeouts[e]*this._timeoutMultiplier}}
function u(e){return function t(n){return e+"//"+n.toLowerCase()}}function f(e){if(Array.prototype.toJSON===undefined){return JSON.stringify(e)}var t=Array.prototype.toJSON
delete Array.prototype.toJSON
var n=JSON.stringify(e)
Array.prototype.toJSON=t
return n}function c(e){var t=e.length
var n
var i
while(t!==0){i=Math.floor(Math.random()*t)
t-=1
n=e[t]
e[t]=e[i]
e[i]=n}return e}function h(e){var t={}
for(var n in e){if(Object.prototype.hasOwnProperty.call(e,n)){var i
if(n==="x-algolia-api-key"||n==="x-algolia-application-id"){i="**hidden for security purposes**"}else{i=e[n]}t[n]=i}}return t}}).call(this,require(12))},{1:1,12:12,18:18,25:25,28:28,29:29,30:30,34:34,5:5,8:8}],16:[function(require,e,t){var n=require(7)
var i=require(18)
var r=require(26)
var s=require(27)
var a=require(29)
var o=require(28)
var l=r(function(){},s("forwardToSlaves","forwardToReplicas"))
e.exports=u
function u(){i.apply(this,arguments)}n(u,i)
u.prototype.addObject=function(e,t,n){var i=this
if(arguments.length===1||typeof t==="function"){n=t
t=undefined}return this.as._jsonRequest({method:t!==undefined?"PUT":"POST",url:"/1/indexes/"+encodeURIComponent(i.indexName)+(t!==undefined?"/"+encodeURIComponent(t):""),body:e,hostType:"write",callback:n})}
u.prototype.addObjects=function(e,t){var n=require(8)
var i="Usage: index.addObjects(arrayOfObjects[, callback])"
if(!n(e)){throw new Error(i)}var r=this
var s={requests:[]}
for(var a=0;a<e.length;++a){var o={action:"addObject",body:e[a]}
s.requests.push(o)}return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(r.indexName)+"/batch",body:s,hostType:"write",callback:t})}
u.prototype.partialUpdateObject=function(e,t,n){if(arguments.length===1||typeof t==="function"){n=t
t=undefined}var i=this
var r="/1/indexes/"+encodeURIComponent(i.indexName)+"/"+encodeURIComponent(e.objectID)+"/partial"
if(t===false){r+="?createIfNotExists=false"}return this.as._jsonRequest({method:"POST",url:r,body:e,hostType:"write",callback:n})}
u.prototype.partialUpdateObjects=function(e,t,n){if(arguments.length===1||typeof t==="function"){n=t
t=true}var i=require(8)
var r="Usage: index.partialUpdateObjects(arrayOfObjects[, callback])"
if(!i(e)){throw new Error(r)}var s=this
var a={requests:[]}
for(var o=0;o<e.length;++o){var l={action:t===true?"partialUpdateObject":"partialUpdateObjectNoCreate",objectID:e[o].objectID,body:e[o]}
a.requests.push(l)}return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(s.indexName)+"/batch",body:a,hostType:"write",callback:n})}
u.prototype.saveObject=function(e,t){var n=this
return this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(n.indexName)+"/"+encodeURIComponent(e.objectID),body:e,hostType:"write",callback:t})}
u.prototype.saveObjects=function(e,t){var n=require(8)
var i="Usage: index.saveObjects(arrayOfObjects[, callback])"
if(!n(e)){throw new Error(i)}var r=this
var s={requests:[]}
for(var a=0;a<e.length;++a){var o={action:"updateObject",objectID:e[a].objectID,body:e[a]}
s.requests.push(o)}return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(r.indexName)+"/batch",body:s,hostType:"write",callback:t})}
u.prototype.deleteObject=function(e,t){if(typeof e==="function"||typeof e!=="string"&&typeof e!=="number"){var n=new o.AlgoliaSearchError("Cannot delete an object without an objectID")
t=e
if(typeof t==="function"){return t(n)}return this.as._promise.reject(n)}var i=this
return this.as._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(i.indexName)+"/"+encodeURIComponent(e),hostType:"write",callback:t})}
u.prototype.deleteObjects=function(e,t){var n=require(8)
var i=require(30)
var r="Usage: index.deleteObjects(arrayOfObjectIDs[, callback])"
if(!n(e)){throw new Error(r)}var s=this
var a={requests:i(e,function e(t){return{action:"deleteObject",objectID:t,body:{objectID:t}}})}
return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(s.indexName)+"/batch",body:a,hostType:"write",callback:t})}
u.prototype.deleteByQuery=function(e,t,n){var i=require(25)
var r=require(30)
var s=this
var o=s.as
if(arguments.length===1||typeof t==="function"){n=t
t={}}else{t=i(t)}t.attributesToRetrieve="objectID"
t.hitsPerPage=1e3
t.distinct=false
this.clearCache()
var l=this.search(e,t).then(u)
function u(e){if(e.nbHits===0){return e}var t=r(e.hits,function e(t){return t.objectID})
return s.deleteObjects(t).then(f).then(c)}function f(e){return s.waitTask(e.taskID)}function c(){return s.deleteByQuery(e,t)}if(!n){return l}l.then(h,d)
function h(){a(function e(){n(null)},o._setTimeout||setTimeout)}function d(e){a(function t(){n(e)},o._setTimeout||setTimeout)}}
u.prototype.browseAll=function(e,t){if(typeof e==="object"){t=e
e=undefined}var n=require(31)
var i=require(17)
var r=new i
var s=this.as
var a=this
var o=s._getSearchParams(n({},t||{},{query:e}),"")
l()
function l(e){if(r._stopped){return}var t
if(e!==undefined){t={cursor:e}}else{t={params:o}}s._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(a.indexName)+"/browse",hostType:"read",body:t,callback:u})}function u(e,t){if(r._stopped){return}if(e){r._error(e)
return}r._result(t)
if(t.cursor===undefined){r._end()
return}l(t.cursor)}return r}
u.prototype.ttAdapter=function(e){var t=this
return function n(i,r,s){var a
if(typeof s==="function"){a=s}else{a=r}t.search(i,e,function e(t,n){if(t){a(t)
return}a(n.hits)})}}
u.prototype.waitTask=function(e,t){var n=100
var i=5e3
var r=0
var s=this
var o=s.as
var l=u()
function u(){return o._jsonRequest({method:"GET",hostType:"read",url:"/1/indexes/"+encodeURIComponent(s.indexName)+"/task/"+e}).then(function e(t){r++
var s=n*r*r
if(s>i){s=i}if(t.status!=="published"){return o._promise.delay(s).then(u)}return t})}if(!t){return l}l.then(f,c)
function f(e){a(function n(){t(null,e)},o._setTimeout||setTimeout)}function c(e){a(function n(){t(e)},o._setTimeout||setTimeout)}}
u.prototype.clearIndex=function(e){var t=this
return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(t.indexName)+"/clear",hostType:"write",callback:e})}
u.prototype.getSettings=function(e){var t=this
return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(t.indexName)+"/settings?getVersion=2",hostType:"read",callback:e})}
u.prototype.searchSynonyms=function(e,t){if(typeof e==="function"){t=e
e={}}else if(e===undefined){e={}}return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/search",body:e,hostType:"read",callback:t})}
u.prototype.saveSynonym=function(e,t,n){if(typeof t==="function"){n=t
t={}}else if(t===undefined){t={}}if(t.forwardToSlaves!==undefined)l()
var i=t.forwardToSlaves||t.forwardToReplicas?"true":"false"
return this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/"+encodeURIComponent(e.objectID)+"?forwardToReplicas="+i,body:e,hostType:"write",callback:n})}
u.prototype.getSynonym=function(e,t){return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/"+encodeURIComponent(e),hostType:"read",callback:t})}
u.prototype.deleteSynonym=function(e,t,n){if(typeof t==="function"){n=t
t={}}else if(t===undefined){t={}}if(t.forwardToSlaves!==undefined)l()
var i=t.forwardToSlaves||t.forwardToReplicas?"true":"false"
return this.as._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/"+encodeURIComponent(e)+"?forwardToReplicas="+i,hostType:"write",callback:n})}
u.prototype.clearSynonyms=function(e,t){if(typeof e==="function"){t=e
e={}}else if(e===undefined){e={}}if(e.forwardToSlaves!==undefined)l()
var n=e.forwardToSlaves||e.forwardToReplicas?"true":"false"
return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/clear"+"?forwardToReplicas="+n,hostType:"write",callback:t})}
u.prototype.batchSynonyms=function(e,t,n){if(typeof t==="function"){n=t
t={}}else if(t===undefined){t={}}if(t.forwardToSlaves!==undefined)l()
var i=t.forwardToSlaves||t.forwardToReplicas?"true":"false"
return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/batch"+"?forwardToReplicas="+i+"&replaceExistingSynonyms="+(t.replaceExistingSynonyms?"true":"false"),hostType:"write",body:e,callback:n})}
u.prototype.setSettings=function(e,t,n){if(arguments.length===1||typeof t==="function"){n=t
t={}}if(t.forwardToSlaves!==undefined)l()
var i=t.forwardToSlaves||t.forwardToReplicas?"true":"false"
var r=this
return this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(r.indexName)+"/settings?forwardToReplicas="+i,hostType:"write",body:e,callback:n})}
u.prototype.listUserKeys=r(function(e){return this.listApiKeys(e)},s("index.listUserKeys()","index.listApiKeys()"))
u.prototype.listApiKeys=function(e){var t=this
return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(t.indexName)+"/keys",hostType:"read",callback:e})}
u.prototype.getUserKeyACL=r(function(e,t){return this.getApiKey(e,t)},s("index.getUserKeyACL()","index.getApiKey()"))
u.prototype.getApiKey=function(e,t){var n=this
return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(n.indexName)+"/keys/"+e,hostType:"read",callback:t})}
u.prototype.deleteUserKey=r(function(e,t){return this.deleteApiKey(e,t)},s("index.deleteUserKey()","index.deleteApiKey()"))
u.prototype.deleteApiKey=function(e,t){var n=this
return this.as._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(n.indexName)+"/keys/"+e,hostType:"write",callback:t})}
u.prototype.addUserKey=r(function(e,t,n){return this.addApiKey(e,t,n)},s("index.addUserKey()","index.addApiKey()"))
u.prototype.addApiKey=function(e,t,n){var i=require(8)
var r="Usage: index.addApiKey(arrayOfAcls[, params, callback])"
if(!i(e)){throw new Error(r)}if(arguments.length===1||typeof t==="function"){n=t
t=null}var s={acl:e}
if(t){s.validity=t.validity
s.maxQueriesPerIPPerHour=t.maxQueriesPerIPPerHour
s.maxHitsPerQuery=t.maxHitsPerQuery
s.description=t.description
if(t.queryParameters){s.queryParameters=this.as._getSearchParams(t.queryParameters,"")}s.referers=t.referers}return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/keys",body:s,hostType:"write",callback:n})}
u.prototype.addUserKeyWithValidity=r(function e(t,n,i){return this.addApiKey(t,n,i)},s("index.addUserKeyWithValidity()","index.addApiKey()"))
u.prototype.updateUserKey=r(function(e,t,n,i){return this.updateApiKey(e,t,n,i)},s("index.updateUserKey()","index.updateApiKey()"))
u.prototype.updateApiKey=function(e,t,n,i){var r=require(8)
var s="Usage: index.updateApiKey(key, arrayOfAcls[, params, callback])"
if(!r(t)){throw new Error(s)}if(arguments.length===2||typeof n==="function"){i=n
n=null}var a={acl:t}
if(n){a.validity=n.validity
a.maxQueriesPerIPPerHour=n.maxQueriesPerIPPerHour
a.maxHitsPerQuery=n.maxHitsPerQuery
a.description=n.description
if(n.queryParameters){a.queryParameters=this.as._getSearchParams(n.queryParameters,"")}a.referers=n.referers}return this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/keys/"+e,body:a,hostType:"write",callback:i})}},{17:17,18:18,25:25,26:26,27:27,28:28,29:29,30:30,31:31,7:7,8:8}],17:[function(require,e,t){"use strict"
e.exports=r
var n=require(7)
var i=require(4).EventEmitter
function r(){}n(r,i)
r.prototype.stop=function(){this._stopped=true
this._clean()}
r.prototype._end=function(){this.emit("end")
this._clean()}
r.prototype._error=function(e){this.emit("error",e)
this._clean()}
r.prototype._result=function(e){this.emit("result",e)}
r.prototype._clean=function(){this.removeAllListeners("stop")
this.removeAllListeners("end")
this.removeAllListeners("error")
this.removeAllListeners("result")}},{4:4,7:7}],18:[function(require,e,t){var n=require(24)
var i=require(26)
var r=require(27)
e.exports=s
function s(e,t){this.indexName=t
this.as=e
this.typeAheadArgs=null
this.typeAheadValueOption=null
this.cache={}}s.prototype.clearCache=function(){this.cache={}}
s.prototype.search=n("query")
s.prototype.similarSearch=n("similarQuery")
s.prototype.browse=function(e,t,n){var i=require(31)
var r=this
var s
var a
if(arguments.length===0||arguments.length===1&&typeof arguments[0]==="function"){s=0
n=arguments[0]
e=undefined}else if(typeof arguments[0]==="number"){s=arguments[0]
if(typeof arguments[1]==="number"){a=arguments[1]}else if(typeof arguments[1]==="function"){n=arguments[1]
a=undefined}e=undefined
t=undefined}else if(typeof arguments[0]==="object"){if(typeof arguments[1]==="function"){n=arguments[1]}t=arguments[0]
e=undefined}else if(typeof arguments[0]==="string"&&typeof arguments[1]==="function"){n=arguments[1]
t=undefined}t=i({},t||{},{page:s,hitsPerPage:a,query:e})
var o=this.as._getSearchParams(t,"")
return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(r.indexName)+"/browse",body:{params:o},hostType:"read",callback:n})}
s.prototype.browseFrom=function(e,t){return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/browse",body:{cursor:e},hostType:"read",callback:t})}
s.prototype.searchForFacetValues=function(e,t){var n=require(25)
var i=require(32)
var r="Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])"
if(e.facetName===undefined||e.facetQuery===undefined){throw new Error(r)}var s=e.facetName
var a=i(n(e),function(e){return e==="facetName"})
var o=this.as._getSearchParams(a,"")
return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/facets/"+encodeURIComponent(s)+"/query",hostType:"read",body:{params:o},callback:t})}
s.prototype.searchFacet=i(function(e,t){return this.searchForFacetValues(e,t)},r("index.searchFacet(params[, callback])","index.searchForFacetValues(params[, callback])"))
s.prototype._search=function(e,t,n,i){return this.as._jsonRequest({cache:this.cache,method:"POST",url:t||"/1/indexes/"+encodeURIComponent(this.indexName)+"/query",body:{params:e},hostType:"read",fallback:{method:"GET",url:"/1/indexes/"+encodeURIComponent(this.indexName),body:{params:e}},callback:n,additionalUA:i})}
s.prototype.getObject=function(e,t,n){var i=this
if(arguments.length===1||typeof t==="function"){n=t
t=undefined}var r=""
if(t!==undefined){r="?attributes="
for(var s=0;s<t.length;++s){if(s!==0){r+=","}r+=t[s]}}return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(i.indexName)+"/"+encodeURIComponent(e)+r,hostType:"read",callback:n})}
s.prototype.getObjects=function(e,t,n){var i=require(8)
var r=require(30)
var s="Usage: index.getObjects(arrayOfObjectIDs[, callback])"
if(!i(e)){throw new Error(s)}var a=this
if(arguments.length===1||typeof t==="function"){n=t
t=undefined}var o={requests:r(e,function e(n){var i={indexName:a.indexName,objectID:n}
if(t){i.attributesToRetrieve=t.join(",")}return i})}
return this.as._jsonRequest({method:"POST",url:"/1/indexes/*/objects",hostType:"read",body:o,callback:n})}
s.prototype.as=null
s.prototype.indexName=null
s.prototype.typeAheadArgs=null
s.prototype.typeAheadValueOption=null},{24:24,25:25,26:26,27:27,30:30,31:31,32:32,8:8}],19:[function(require,e,t){"use strict"
var n=require(14)
var i=require(20)
e.exports=i(n)},{14:14,20:20}],20:[function(require,e,t){(function(t){"use strict"
var n=require(6)
var i=n.Promise||require(3).Promise
e.exports=function e(r,s){var a=require(7)
var o=require(28)
var l=require(22)
var u=require(23)
var f=require(33)
s=s||""
if(t.env.NODE_ENV==="debug"){require(1).enable("algoliasearch*")}function c(e,t,n){var i=require(25)
var r=require(21)
n=i(n||{})
if(n.protocol===undefined){n.protocol=r()}n._ua=n._ua||c.ua
return new d(e,t,n)}c.version=require(35)
c.ua="Algolia for vanilla JavaScript "+s+c.version
c.initPlaces=f(c)
n.__algolia={debug:require(1),algoliasearch:c}
var h={hasXMLHttpRequest:"XMLHttpRequest"in n,hasXDomainRequest:"XDomainRequest"in n}
if(h.hasXMLHttpRequest){h.cors="withCredentials"in new XMLHttpRequest}function d(){r.apply(this,arguments)}a(d,r)
d.prototype._request=function e(t,n){return new i(function e(i,r){if(!h.cors&&!h.hasXDomainRequest){r(new o.Network("CORS not supported"))
return}t=l(t,n.headers)
var s=n.body
var a=h.cors?new XMLHttpRequest:new XDomainRequest
var u
var f
var c=false
u=setTimeout(m,n.timeouts.connect)
a.onprogress=g
if("onreadystatechange"in a)a.onreadystatechange=_
a.onload=d
a.onerror=p
if(a instanceof XMLHttpRequest){a.open(n.method,t,true)}else{a.open(n.method,t)}if(h.cors){if(s){if(n.method==="POST"){a.setRequestHeader("content-type","application/x-www-form-urlencoded")}else{a.setRequestHeader("content-type","application/json")}}a.setRequestHeader("accept","application/json")}a.send(s)
function d(){if(f){return}clearTimeout(u)
var e
try{e={body:JSON.parse(a.responseText),responseText:a.responseText,statusCode:a.status,headers:a.getAllResponseHeaders&&a.getAllResponseHeaders()||{}}}catch(t){e=new o.UnparsableJSON({more:a.responseText})}if(e instanceof o.UnparsableJSON){r(e)}else{i(e)}}function p(e){if(f){return}clearTimeout(u)
r(new o.Network({more:e}))}function m(){f=true
a.abort()
r(new o.RequestTimeout)}function v(){c=true
clearTimeout(u)
u=setTimeout(m,n.timeouts.complete)}function g(){if(!c)v()}function _(){if(!c&&a.readyState>1)v()}})}
d.prototype._request.fallback=function e(t,n){t=l(t,n.headers)
return new i(function e(i,r){u(t,n,function e(t,n){if(t){r(t)
return}i(n)})})}
d.prototype._promise={reject:function e(t){return i.reject(t)},resolve:function e(t){return i.resolve(t)},delay:function e(t){return new i(function e(n){setTimeout(n,t)})}}
return c}}).call(this,require(12))},{1:1,12:12,21:21,22:22,23:23,25:25,28:28,3:3,33:33,35:35,6:6,7:7}],21:[function(require,e,t){"use strict"
e.exports=n
function n(){var e=window.document.location.protocol
if(e!=="http:"&&e!=="https:"){e="http:"}return e}},{}],22:[function(require,e,t){"use strict"
e.exports=i
var n=require(13)
function i(e,t){if(/\?/.test(e)){e+="&"}else{e+="?"}return e+n(t)}},{13:13}],23:[function(require,e,t){"use strict"
e.exports=r
var n=require(28)
var i=0
function r(e,t,r){if(t.method!=="GET"){r(new Error("Method "+t.method+" "+e+" is not supported by JSONP."))
return}t.debug("JSONP: start")
var s=false
var a=false
i+=1
var o=document.getElementsByTagName("head")[0]
var l=document.createElement("script")
var u="algoliaJSONP_"+i
var f=false
window[u]=function(e){m()
if(a){t.debug("JSONP: Late answer, ignoring")
return}s=true
p()
r(null,{body:e})}
e+="&callback="+u
if(t.jsonBody&&t.jsonBody.params){e+="&"+t.jsonBody.params}var c=setTimeout(v,t.timeouts.complete)
l.onreadystatechange=d
l.onload=h
l.onerror=g
l.async=true
l.defer=true
l.src=e
o.appendChild(l)
function h(){t.debug("JSONP: success")
if(f||a){return}f=true
if(!s){t.debug("JSONP: Fail. Script loaded but did not call the callback")
p()
r(new n.JSONPScriptFail)}}function d(){if(this.readyState==="loaded"||this.readyState==="complete"){h()}}function p(){clearTimeout(c)
l.onload=null
l.onreadystatechange=null
l.onerror=null
o.removeChild(l)}function m(){try{delete window[u]
delete window[u+"_loaded"]}catch(e){window[u]=window[u+"_loaded"]=undefined}}function v(){t.debug("JSONP: Script timeout")
a=true
p()
r(new n.RequestTimeout)}function g(){t.debug("JSONP: Script error")
if(f||a){return}p()
r(new n.JSONPScriptError)}}},{28:28}],24:[function(require,e,t){e.exports=i
var n=require(28)
function i(e,t){return function i(r,s,a){if(typeof r==="function"&&typeof s==="object"||typeof a==="object"){throw new n.AlgoliaSearchError("index.search usage is index.search(query, params, cb)")}if(arguments.length===0||typeof r==="function"){a=r
r=""}else if(arguments.length===1||typeof s==="function"){a=s
s=undefined}if(typeof r==="object"&&r!==null){s=r
r=undefined}else if(r===undefined||r===null){r=""}var o=""
if(r!==undefined){o+=e+"="+encodeURIComponent(r)}var l
if(s!==undefined){if(s.additionalUA){l=s.additionalUA
delete s.additionalUA}o=this.as._getSearchParams(s,o)}return this._search(o,t,a,l)}}},{28:28}],25:[function(require,e,t){e.exports=function e(t){return JSON.parse(JSON.stringify(t))}},{}],26:[function(require,e,t){e.exports=function e(t,n){var i=false
function r(){if(!i){console.log(n)
i=true}return t.apply(this,arguments)}return r}},{}],27:[function(require,e,t){e.exports=function e(t,n){var i=t.toLowerCase().replace(".","").replace("()","")
return"algoliasearch: `"+t+"` was replaced by `"+n+"`. Please see https://github.com/algolia/algoliasearch-client-js/wiki/Deprecated#"+i}},{}],28:[function(require,e,t){"use strict"
var n=require(7)
function i(e,t){var n=require(5)
var i=this
if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(this,this.constructor)}else{i.stack=(new Error).stack||"Cannot get a stacktrace, browser is too old"}this.name="AlgoliaSearchError"
this.message=e||"Unknown error"
if(t){n(t,function e(t,n){i[n]=t})}}n(i,Error)
function r(e,t){function r(){var n=Array.prototype.slice.call(arguments,0)
if(typeof n[0]!=="string"){n.unshift(t)}i.apply(this,n)
this.name="AlgoliaSearch"+e+"Error"}n(r,i)
return r}e.exports={AlgoliaSearchError:i,UnparsableJSON:r("UnparsableJSON","Could not parse the incoming response as JSON, see err.more for details"),RequestTimeout:r("RequestTimeout","Request timedout before getting a response"),Network:r("Network","Network issue, see err.more for details"),JSONPScriptFail:r("JSONPScriptFail","<script> was loaded but did not call our provided callback"),JSONPScriptError:r("JSONPScriptError","<script> unable to load due to an `error` event on it"),Unknown:r("Unknown","Unknown error occured")}},{5:5,7:7}],29:[function(require,e,t){e.exports=function e(t,n){n(t,0)}},{}],30:[function(require,e,t){var n=require(5)
e.exports=function e(t,i){var r=[]
n(t,function(e,n){r.push(i(e,n,t))})
return r}},{5:5}],31:[function(require,e,t){var n=require(5)
e.exports=function e(t){var i=Array.prototype.slice.call(arguments)
n(i,function(n){for(var i in n){if(n.hasOwnProperty(i)){if(typeof t[i]==="object"&&typeof n[i]==="object"){t[i]=e({},t[i],n[i])}else if(n[i]!==undefined){t[i]=n[i]}}}})
return t}},{5:5}],32:[function(require,e,t){e.exports=function e(t,n){var i=require(10)
var r=require(5)
var s={}
r(i(t),function e(i){if(n(i)!==true){s[i]=t[i]}})
return s}},{10:10,5:5}],33:[function(require,e,t){e.exports=i
var n=require(24)
function i(e){return function t(i,r,s){var a=require(25)
s=s&&a(s)||{}
s.hosts=s.hosts||["places-dsn.algolia.net","places-1.algolianet.com","places-2.algolianet.com","places-3.algolianet.com"]
if(arguments.length===0||typeof i==="object"||i===undefined){i=""
r=""
s._allowEmptyCredentials=true}var o=e(i,r,s)
var l=o.initIndex("places")
l.search=n("query","/1/places/query")
return l}}},{24:24,25:25}],34:[function(require,e,t){(function(t){var n=require(1)("algoliasearch:src/hostIndexState.js")
var i="algoliasearch-client-js"
var r
var s={state:{},set:function(e,t){this.state[e]=t
return this.state[e]},get:function(e){return this.state[e]||null}}
var a={set:function(e,n){s.set(e,n)
try{var r=JSON.parse(t.localStorage[i])
r[e]=n
t.localStorage[i]=JSON.stringify(r)
return r[e]}catch(t){return o(e,t)}},get:function(e){try{return JSON.parse(t.localStorage[i])[e]||null}catch(t){return o(e,t)}}}
function o(e,t){n("localStorage failed with",t)
f()
r=s
return r.get(e)}r=u()?a:s
e.exports={get:l,set:l,supportsLocalStorage:u}
function l(e,t){if(arguments.length===1){return r.get(e)}return r.set(e,t)}function u(){try{if("localStorage"in t&&t.localStorage!==null){if(!t.localStorage[i]){t.localStorage.setItem(i,JSON.stringify({}))}return true}return false}catch(e){return false}}function f(){try{t.localStorage.removeItem(i)}catch(e){}}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{1:1}],35:[function(require,e,t){"use strict"
e.exports="3.22.3"},{}]},{},[19])(19)})
if(typeof jQuery==="undefined"){throw new Error("Bootstrap's JavaScript requires jQuery")}+function(e){"use strict"
function t(){var e=document.createElement("bootstrap")
var t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"}
for(var n in t){if(e.style[n]!==undefined){return{end:t[n]}}}return false}e.fn.emulateTransitionEnd=function(t){var n=false
var i=this
e(this).one("bsTransitionEnd",function(){n=true})
var r=function(){if(!n)e(i).trigger(e.support.transition.end)}
setTimeout(r,t)
return this}
e(function(){e.support.transition=t()
if(!e.support.transition)return
e.event.special.bsTransitionEnd={bindType:e.support.transition.end,delegateType:e.support.transition.end,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}})}(jQuery);+function(e){"use strict"
var t='[data-dismiss="alert"]'
var n=function(n){e(n).on("click",t,this.close)}
n.VERSION="3.2.0"
n.prototype.close=function(t){var n=e(this)
var i=n.attr("data-target")
if(!i){i=n.attr("href")
i=i&&i.replace(/.*(?=#[^\s]*$)/,"")}var r=e(i)
if(t)t.preventDefault()
if(!r.length){r=n.hasClass("alert")?n:n.parent()}r.trigger(t=e.Event("close.bs.alert"))
if(t.isDefaultPrevented())return
r.removeClass("in")
function s(){r.detach().trigger("closed.bs.alert").remove()}e.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",s).emulateTransitionEnd(150):s()}
function i(t){return this.each(function(){var i=e(this)
var r=i.data("bs.alert")
if(!r)i.data("bs.alert",r=new n(this))
if(typeof t=="string")r[t].call(i)})}var r=e.fn.alert
e.fn.alert=i
e.fn.alert.Constructor=n
e.fn.alert.noConflict=function(){e.fn.alert=r
return this}
e(document).on("click.bs.alert.data-api",t,n.prototype.close)}(jQuery);+function(e){"use strict"
var t=function(n,i){this.$element=e(n)
this.options=e.extend({},t.DEFAULTS,i)
this.isLoading=false}
t.VERSION="3.2.0"
t.DEFAULTS={loadingText:"loading..."}
t.prototype.setState=function(t){var n="disabled"
var i=this.$element
var r=i.is("input")?"val":"html"
var s=i.data()
t=t+"Text"
if(s.resetText==null)i.data("resetText",i[r]())
i[r](s[t]==null?this.options[t]:s[t])
setTimeout(e.proxy(function(){if(t=="loadingText"){this.isLoading=true
i.addClass(n).attr(n,n)}else if(this.isLoading){this.isLoading=false
i.removeClass(n).removeAttr(n)}},this),0)}
t.prototype.toggle=function(){var e=true
var t=this.$element.closest('[data-toggle="buttons"]')
if(t.length){var n=this.$element.find("input")
if(n.prop("type")=="radio"){if(n.prop("checked")&&this.$element.hasClass("active"))e=false
else t.find(".active").removeClass("active")}if(e)n.prop("checked",!this.$element.hasClass("active")).trigger("change")}if(e)this.$element.toggleClass("active")}
function n(n){return this.each(function(){var i=e(this)
var r=i.data("bs.button")
var s=typeof n=="object"&&n
if(!r)i.data("bs.button",r=new t(this,s))
if(n=="toggle")r.toggle()
else if(n)r.setState(n)})}var i=e.fn.button
e.fn.button=n
e.fn.button.Constructor=t
e.fn.button.noConflict=function(){e.fn.button=i
return this}
e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var i=e(t.target)
if(!i.hasClass("btn"))i=i.closest(".btn")
n.call(i,"toggle")
t.preventDefault()})}(jQuery);+function(e){"use strict"
var t=function(t,n){this.$element=e(t).on("keydown.bs.carousel",e.proxy(this.keydown,this))
this.$indicators=this.$element.find(".carousel-indicators")
this.options=n
this.paused=this.sliding=this.interval=this.$active=this.$items=null
this.options.pause=="hover"&&this.$element.on("mouseenter.bs.carousel",e.proxy(this.pause,this)).on("mouseleave.bs.carousel",e.proxy(this.cycle,this))}
t.VERSION="3.2.0"
t.DEFAULTS={interval:5e3,pause:"hover",wrap:true}
t.prototype.keydown=function(e){switch(e.which){case 37:this.prev()
break
case 39:this.next()
break
default:return}e.preventDefault()}
t.prototype.cycle=function(t){t||(this.paused=false)
this.interval&&clearInterval(this.interval)
this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval))
return this}
t.prototype.getItemIndex=function(e){this.$items=e.parent().children(".item")
return this.$items.index(e||this.$active)}
t.prototype.to=function(t){var n=this
var i=this.getItemIndex(this.$active=this.$element.find(".item.active"))
if(t>this.$items.length-1||t<0)return
if(this.sliding)return this.$element.one("slid.bs.carousel",function(){n.to(t)})
if(i==t)return this.pause().cycle()
return this.slide(t>i?"next":"prev",e(this.$items[t]))}
t.prototype.pause=function(t){t||(this.paused=true)
if(this.$element.find(".next, .prev").length&&e.support.transition){this.$element.trigger(e.support.transition.end)
this.cycle(true)}this.interval=clearInterval(this.interval)
return this}
t.prototype.next=function(){if(this.sliding)return
return this.slide("next")}
t.prototype.prev=function(){if(this.sliding)return
return this.slide("prev")}
t.prototype.slide=function(t,n){var i=this.$element.find(".item.active")
var r=n||i[t]()
var s=this.interval
var a=t=="next"?"left":"right"
var o=t=="next"?"first":"last"
var l=this
if(!r.length){if(!this.options.wrap)return
r=this.$element.find(".item")[o]()}if(r.hasClass("active"))return this.sliding=false
var u=r[0]
var f=e.Event("slide.bs.carousel",{relatedTarget:u,direction:a})
this.$element.trigger(f)
if(f.isDefaultPrevented())return
this.sliding=true
s&&this.pause()
if(this.$indicators.length){this.$indicators.find(".active").removeClass("active")
var c=e(this.$indicators.children()[this.getItemIndex(r)])
c&&c.addClass("active")}var h=e.Event("slid.bs.carousel",{relatedTarget:u,direction:a})
if(e.support.transition&&this.$element.hasClass("slide")){r.addClass(t)
r[0].offsetWidth
i.addClass(a)
r.addClass(a)
i.one("bsTransitionEnd",function(){r.removeClass([t,a].join(" ")).addClass("active")
i.removeClass(["active",a].join(" "))
l.sliding=false
setTimeout(function(){l.$element.trigger(h)},0)}).emulateTransitionEnd(i.css("transition-duration").slice(0,-1)*1e3)}else{i.removeClass("active")
r.addClass("active")
this.sliding=false
this.$element.trigger(h)}s&&this.cycle()
return this}
function n(n){return this.each(function(){var i=e(this)
var r=i.data("bs.carousel")
var s=e.extend({},t.DEFAULTS,i.data(),typeof n=="object"&&n)
var a=typeof n=="string"?n:s.slide
if(!r)i.data("bs.carousel",r=new t(this,s))
if(typeof n=="number")r.to(n)
else if(a)r[a]()
else if(s.interval)r.pause().cycle()})}var i=e.fn.carousel
e.fn.carousel=n
e.fn.carousel.Constructor=t
e.fn.carousel.noConflict=function(){e.fn.carousel=i
return this}
e(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(t){var i
var r=e(this)
var s=e(r.attr("data-target")||(i=r.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""))
if(!s.hasClass("carousel"))return
var a=e.extend({},s.data(),r.data())
var o=r.attr("data-slide-to")
if(o)a.interval=false
n.call(s,a)
if(o){s.data("bs.carousel").to(o)}t.preventDefault()})
e(window).on("load",function(){e('[data-ride="carousel"]').each(function(){var t=e(this)
n.call(t,t.data())})})}(jQuery);+function(e){"use strict"
var t=function(n,i){this.$element=e(n)
this.options=e.extend({},t.DEFAULTS,i)
this.transitioning=null
if(this.options.parent)this.$parent=e(this.options.parent)
if(this.options.toggle)this.toggle()}
t.VERSION="3.2.0"
t.DEFAULTS={toggle:true}
t.prototype.dimension=function(){var e=this.$element.hasClass("width")
return e?"width":"height"}
t.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in"))return
var t=e.Event("show.bs.collapse")
this.$element.trigger(t)
if(t.isDefaultPrevented())return
var i=this.$parent&&this.$parent.find("> .panel > .in")
if(i&&i.length){var r=i.data("bs.collapse")
if(r&&r.transitioning)return
n.call(i,"hide")
r||i.data("bs.collapse",null)}var s=this.dimension()
this.$element.removeClass("collapse").addClass("collapsing")[s](0)
this.transitioning=1
var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[s]("")
this.transitioning=0
this.$element.trigger("shown.bs.collapse")}
if(!e.support.transition)return a.call(this)
var o=e.camelCase(["scroll",s].join("-"))
this.$element.one("bsTransitionEnd",e.proxy(a,this)).emulateTransitionEnd(350)[s](this.$element[0][o])}
t.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in"))return
var t=e.Event("hide.bs.collapse")
this.$element.trigger(t)
if(t.isDefaultPrevented())return
var n=this.dimension()
this.$element[n](this.$element[n]())[0].offsetHeight
this.$element.addClass("collapsing").removeClass("collapse").removeClass("in")
this.transitioning=1
var i=function(){this.transitioning=0
this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")}
if(!e.support.transition)return i.call(this)
this.$element[n](0).one("bsTransitionEnd",e.proxy(i,this)).emulateTransitionEnd(350)}
t.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()}
function n(n){return this.each(function(){var i=e(this)
var r=i.data("bs.collapse")
var s=e.extend({},t.DEFAULTS,i.data(),typeof n=="object"&&n)
if(!r&&s.toggle&&n=="show")n=!n
if(!r)i.data("bs.collapse",r=new t(this,s))
if(typeof n=="string")r[n]()})}var i=e.fn.collapse
e.fn.collapse=n
e.fn.collapse.Constructor=t
e.fn.collapse.noConflict=function(){e.fn.collapse=i
return this}
e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var i
var r=e(this)
var s=r.attr("data-target")||t.preventDefault()||(i=r.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")
var a=e(s)
var o=a.data("bs.collapse")
var l=o?"toggle":r.data()
var u=r.attr("data-parent")
var f=u&&e(u)
if(!o||!o.transitioning){if(f)f.find('[data-toggle="collapse"][data-parent="'+u+'"]').not(r).addClass("collapsed")
r[a.hasClass("in")?"addClass":"removeClass"]("collapsed")}n.call(a,l)})}(jQuery);+function(e){"use strict"
var t=".dropdown-backdrop"
var n='[data-toggle="dropdown"]'
var i=function(t){e(t).on("click.bs.dropdown",this.toggle)}
i.VERSION="3.2.0"
i.prototype.toggle=function(t){var n=e(this)
if(n.is(".disabled, :disabled"))return
var i=s(n)
var a=i.hasClass("open")
r()
if(!a){if("ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length){e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click",r)}var o={relatedTarget:this}
i.trigger(t=e.Event("show.bs.dropdown",o))
if(t.isDefaultPrevented())return
n.trigger("focus")
i.toggleClass("open").trigger("shown.bs.dropdown",o)}return false}
i.prototype.keydown=function(t){if(!/(38|40|27)/.test(t.keyCode))return
var i=e(this)
t.preventDefault()
t.stopPropagation()
if(i.is(".disabled, :disabled"))return
var r=s(i)
var a=r.hasClass("open")
if(!a||a&&t.keyCode==27){if(t.which==27)r.find(n).trigger("focus")
return i.trigger("click")}var o=" li:not(.divider):visible a"
var l=r.find('[role="menu"]'+o+', [role="listbox"]'+o)
if(!l.length)return
var u=l.index(l.filter(":focus"))
if(t.keyCode==38&&u>0)u--
if(t.keyCode==40&&u<l.length-1)u++
if(!~u)u=0
l.eq(u).trigger("focus")}
function r(i){if(i&&i.which===3)return
e(t).remove()
e(n).each(function(){var t=s(e(this))
var n={relatedTarget:this}
if(!t.hasClass("open"))return
t.trigger(i=e.Event("hide.bs.dropdown",n))
if(i.isDefaultPrevented())return
t.removeClass("open").trigger("hidden.bs.dropdown",n)})}function s(t){var n=t.attr("data-target")
if(!n){n=t.attr("href")
n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")}var i=n&&e(n)
return i&&i.length?i:t.parent()}function a(t){return this.each(function(){var n=e(this)
var r=n.data("bs.dropdown")
if(!r)n.data("bs.dropdown",r=new i(this))
if(typeof t=="string")r[t].call(n)})}var o=e.fn.dropdown
e.fn.dropdown=a
e.fn.dropdown.Constructor=i
e.fn.dropdown.noConflict=function(){e.fn.dropdown=o
return this}
e(document).on("click.bs.dropdown.data-api",r).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",n,i.prototype.toggle).on("keydown.bs.dropdown.data-api",n+', [role="menu"], [role="listbox"]',i.prototype.keydown)}(jQuery);+function(e){"use strict"
var t=function(t,n){this.options=n
this.$body=e(document.body)
this.$element=e(t)
this.$backdrop=this.isShown=null
this.scrollbarWidth=0
if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,e.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}}
t.VERSION="3.2.0"
t.DEFAULTS={backdrop:true,keyboard:true,show:true}
t.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)}
t.prototype.show=function(t){var n=this
var i=e.Event("show.bs.modal",{relatedTarget:t})
this.$element.trigger(i)
if(this.isShown||i.isDefaultPrevented())return
this.isShown=true
this.checkScrollbar()
this.$body.addClass("modal-open")
this.setScrollbar()
this.escape()
this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',e.proxy(this.hide,this))
this.backdrop(function(){var i=e.support.transition&&n.$element.hasClass("fade")
if(!n.$element.parent().length){n.$element.appendTo(n.$body)}n.$element.show().scrollTop(0)
if(i){n.$element[0].offsetWidth}n.$element.addClass("in").attr("aria-hidden",false)
n.enforceFocus()
var r=e.Event("shown.bs.modal",{relatedTarget:t})
i?n.$element.find(".modal-dialog").one("bsTransitionEnd",function(){n.$element.trigger("focus").trigger(r)}).emulateTransitionEnd(300):n.$element.trigger("focus").trigger(r)})}
t.prototype.hide=function(t){if(t)t.preventDefault()
t=e.Event("hide.bs.modal")
this.$element.trigger(t)
if(!this.isShown||t.isDefaultPrevented())return
this.isShown=false
this.$body.removeClass("modal-open")
this.resetScrollbar()
this.escape()
e(document).off("focusin.bs.modal")
this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.bs.modal")
e.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",e.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()}
t.prototype.enforceFocus=function(){e(document).off("focusin.bs.modal").on("focusin.bs.modal",e.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger("focus")}},this))}
t.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.bs.modal",e.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off("keyup.dismiss.bs.modal")}}
t.prototype.hideModal=function(){var e=this
this.$element.hide()
this.backdrop(function(){e.$element.trigger("hidden.bs.modal")})}
t.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null}
t.prototype.backdrop=function(t){var n=this
var i=this.$element.hasClass("fade")?"fade":""
if(this.isShown&&this.options.backdrop){var r=e.support.transition&&i
this.$backdrop=e('<div class="modal-backdrop '+i+'" />').appendTo(this.$body)
this.$element.on("click.dismiss.bs.modal",e.proxy(function(e){if(e.target!==e.currentTarget)return
this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this))
if(r)this.$backdrop[0].offsetWidth
this.$backdrop.addClass("in")
if(!t)return
r?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(150):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in")
var s=function(){n.removeBackdrop()
t&&t()}
e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",s).emulateTransitionEnd(150):s()}else if(t){t()}}
t.prototype.checkScrollbar=function(){if(document.body.clientWidth>=window.innerWidth)return
this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar()}
t.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10)
if(this.scrollbarWidth)this.$body.css("padding-right",e+this.scrollbarWidth)}
t.prototype.resetScrollbar=function(){this.$body.css("padding-right","")}
t.prototype.measureScrollbar=function(){var e=document.createElement("div")
e.className="modal-scrollbar-measure"
this.$body.append(e)
var t=e.offsetWidth-e.clientWidth
this.$body[0].removeChild(e)
return t}
function n(n,i){return this.each(function(){var r=e(this)
var s=r.data("bs.modal")
var a=e.extend({},t.DEFAULTS,r.data(),typeof n=="object"&&n)
if(!s)r.data("bs.modal",s=new t(this,a))
if(typeof n=="string")s[n](i)
else if(a.show)s.show(i)})}var i=e.fn.modal
e.fn.modal=n
e.fn.modal.Constructor=t
e.fn.modal.noConflict=function(){e.fn.modal=i
return this}
e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var i=e(this)
var r=i.attr("href")
var s=e(i.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,""))
var a=s.data("bs.modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},s.data(),i.data())
if(i.is("a"))t.preventDefault()
s.one("show.bs.modal",function(e){if(e.isDefaultPrevented())return
s.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})})
n.call(s,a,this)})}(jQuery);+function(e){"use strict"
var t=function(e,t){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null
this.init("tooltip",e,t)}
t.VERSION="3.2.0"
t.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false,viewport:{selector:"body",padding:0}}
t.prototype.init=function(t,n,i){this.enabled=true
this.type=t
this.$element=e(n)
this.options=this.getOptions(i)
this.$viewport=this.options.viewport&&e(this.options.viewport.selector||this.options.viewport)
var r=this.options.trigger.split(" ")
for(var s=r.length;s--;){var a=r[s]
if(a=="click"){this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this))}else if(a!="manual"){var o=a=="hover"?"mouseenter":"focusin"
var l=a=="hover"?"mouseleave":"focusout"
this.$element.on(o+"."+this.type,this.options.selector,e.proxy(this.enter,this))
this.$element.on(l+"."+this.type,this.options.selector,e.proxy(this.leave,this))}}this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()}
t.prototype.getDefaults=function(){return t.DEFAULTS}
t.prototype.getOptions=function(t){t=e.extend({},this.getDefaults(),this.$element.data(),t)
if(t.delay&&typeof t.delay=="number"){t.delay={show:t.delay,hide:t.delay}}return t}
t.prototype.getDelegateOptions=function(){var t={}
var n=this.getDefaults()
this._options&&e.each(this._options,function(e,i){if(n[e]!=i)t[e]=i})
return t}
t.prototype.enter=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type)
if(!n){n=new this.constructor(t.currentTarget,this.getDelegateOptions())
e(t.currentTarget).data("bs."+this.type,n)}clearTimeout(n.timeout)
n.hoverState="in"
if(!n.options.delay||!n.options.delay.show)return n.show()
n.timeout=setTimeout(function(){if(n.hoverState=="in")n.show()},n.options.delay.show)}
t.prototype.leave=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type)
if(!n){n=new this.constructor(t.currentTarget,this.getDelegateOptions())
e(t.currentTarget).data("bs."+this.type,n)}clearTimeout(n.timeout)
n.hoverState="out"
if(!n.options.delay||!n.options.delay.hide)return n.hide()
n.timeout=setTimeout(function(){if(n.hoverState=="out")n.hide()},n.options.delay.hide)}
t.prototype.show=function(){var t=e.Event("show.bs."+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(t)
var n=e.contains(document.documentElement,this.$element[0])
if(t.isDefaultPrevented()||!n)return
var i=this
var r=this.tip()
var s=this.getUID(this.type)
this.setContent()
r.attr("id",s)
this.$element.attr("aria-describedby",s)
if(this.options.animation)r.addClass("fade")
var a=typeof this.options.placement=="function"?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement
var o=/\s?auto?\s?/i
var l=o.test(a)
if(l)a=a.replace(o,"")||"top"
r.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this)
this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element)
var u=this.getPosition()
var f=r[0].offsetWidth
var c=r[0].offsetHeight
if(l){var h=a
var d=this.$element.parent()
var p=this.getPosition(d)
a=a=="bottom"&&u.top+u.height+c-p.scroll>p.height?"top":a=="top"&&u.top-p.scroll-c<0?"bottom":a=="right"&&u.right+f>p.width?"left":a=="left"&&u.left-f<p.left?"right":a
r.removeClass(h).addClass(a)}var m=this.getCalculatedOffset(a,u,f,c)
this.applyPlacement(m,a)
var v=function(){i.$element.trigger("shown.bs."+i.type)
i.hoverState=null}
e.support.transition&&this.$tip.hasClass("fade")?r.one("bsTransitionEnd",v).emulateTransitionEnd(150):v()}}
t.prototype.applyPlacement=function(t,n){var i=this.tip()
var r=i[0].offsetWidth
var s=i[0].offsetHeight
var a=parseInt(i.css("margin-top"),10)
var o=parseInt(i.css("margin-left"),10)
if(isNaN(a))a=0
if(isNaN(o))o=0
t.top=t.top+a
t.left=t.left+o
e.offset.setOffset(i[0],e.extend({using:function(e){i.css({top:Math.round(e.top),left:Math.round(e.left)})}},t),0)
i.addClass("in")
var l=i[0].offsetWidth
var u=i[0].offsetHeight
if(n=="top"&&u!=s){t.top=t.top+s-u}var f=this.getViewportAdjustedDelta(n,t,l,u)
if(f.left)t.left+=f.left
else t.top+=f.top
var c=f.left?f.left*2-r+l:f.top*2-s+u
var h=f.left?"left":"top"
var d=f.left?"offsetWidth":"offsetHeight"
i.offset(t)
this.replaceArrow(c,i[0][d],h)}
t.prototype.replaceArrow=function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")}
t.prototype.setContent=function(){var e=this.tip()
var t=this.getTitle()
e.find(".tooltip-inner")[this.options.html?"html":"text"](t)
e.removeClass("fade in top bottom left right")}
t.prototype.hide=function(){var t=this
var n=this.tip()
var i=e.Event("hide.bs."+this.type)
this.$element.removeAttr("aria-describedby")
function r(){if(t.hoverState!="in")n.detach()
t.$element.trigger("hidden.bs."+t.type)}this.$element.trigger(i)
if(i.isDefaultPrevented())return
n.removeClass("in")
e.support.transition&&this.$tip.hasClass("fade")?n.one("bsTransitionEnd",r).emulateTransitionEnd(150):r()
this.hoverState=null
return this}
t.prototype.fixTitle=function(){var e=this.$element
if(e.attr("title")||typeof e.attr("data-original-title")!="string"){e.attr("data-original-title",e.attr("title")||"").attr("title","")}}
t.prototype.hasContent=function(){return this.getTitle()}
t.prototype.getPosition=function(t){t=t||this.$element
var n=t[0]
var i=n.tagName=="BODY"
return e.extend({},typeof n.getBoundingClientRect=="function"?n.getBoundingClientRect():null,{scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop(),width:i?e(window).width():t.outerWidth(),height:i?e(window).height():t.outerHeight()},i?{top:0,left:0}:t.offset())}
t.prototype.getCalculatedOffset=function(e,t,n,i){return e=="bottom"?{top:t.top+t.height,left:t.left+t.width/2-n/2}:e=="top"?{top:t.top-i,left:t.left+t.width/2-n/2}:e=="left"?{top:t.top+t.height/2-i/2,left:t.left-n}:{top:t.top+t.height/2-i/2,left:t.left+t.width}}
t.prototype.getViewportAdjustedDelta=function(e,t,n,i){var r={top:0,left:0}
if(!this.$viewport)return r
var s=this.options.viewport&&this.options.viewport.padding||0
var a=this.getPosition(this.$viewport)
if(/right|left/.test(e)){var o=t.top-s-a.scroll
var l=t.top+s-a.scroll+i
if(o<a.top){r.top=a.top-o}else if(l>a.top+a.height){r.top=a.top+a.height-l}}else{var u=t.left-s
var f=t.left+s+n
if(u<a.left){r.left=a.left-u}else if(f>a.width){r.left=a.left+a.width-f}}return r}
t.prototype.getTitle=function(){var e
var t=this.$element
var n=this.options
e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title)
return e}
t.prototype.getUID=function(e){do e+=~~(Math.random()*1e6)
while(document.getElementById(e))
return e}
t.prototype.tip=function(){return this.$tip=this.$tip||e(this.options.template)}
t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")}
t.prototype.validate=function(){if(!this.$element[0].parentNode){this.hide()
this.$element=null
this.options=null}}
t.prototype.enable=function(){this.enabled=true}
t.prototype.disable=function(){this.enabled=false}
t.prototype.toggleEnabled=function(){this.enabled=!this.enabled}
t.prototype.toggle=function(t){var n=this
if(t){n=e(t.currentTarget).data("bs."+this.type)
if(!n){n=new this.constructor(t.currentTarget,this.getDelegateOptions())
e(t.currentTarget).data("bs."+this.type,n)}}n.tip().hasClass("in")?n.leave(n):n.enter(n)}
t.prototype.destroy=function(){clearTimeout(this.timeout)
this.hide().$element.off("."+this.type).removeData("bs."+this.type)}
function n(n){return this.each(function(){var i=e(this)
var r=i.data("bs.tooltip")
var s=typeof n=="object"&&n
if(!r&&n=="destroy")return
if(!r)i.data("bs.tooltip",r=new t(this,s))
if(typeof n=="string")r[n]()})}var i=e.fn.tooltip
e.fn.tooltip=n
e.fn.tooltip.Constructor=t
e.fn.tooltip.noConflict=function(){e.fn.tooltip=i
return this}}(jQuery);+function(e){"use strict"
var t=function(e,t){this.init("popover",e,t)}
if(!e.fn.tooltip)throw new Error("Popover requires tooltip.js")
t.VERSION="3.2.0"
t.DEFAULTS=e.extend({},e.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype)
t.prototype.constructor=t
t.prototype.getDefaults=function(){return t.DEFAULTS}
t.prototype.setContent=function(){var e=this.tip()
var t=this.getTitle()
var n=this.getContent()
e.find(".popover-title")[this.options.html?"html":"text"](t)
e.find(".popover-content").empty()[this.options.html?typeof n=="string"?"html":"append":"text"](n)
e.removeClass("fade top bottom left right in")
if(!e.find(".popover-title").html())e.find(".popover-title").hide()}
t.prototype.hasContent=function(){return this.getTitle()||this.getContent()}
t.prototype.getContent=function(){var e=this.$element
var t=this.options
return e.attr("data-content")||(typeof t.content=="function"?t.content.call(e[0]):t.content)}
t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")}
t.prototype.tip=function(){if(!this.$tip)this.$tip=e(this.options.template)
return this.$tip}
function n(n){return this.each(function(){var i=e(this)
var r=i.data("bs.popover")
var s=typeof n=="object"&&n
if(!r&&n=="destroy")return
if(!r)i.data("bs.popover",r=new t(this,s))
if(typeof n=="string")r[n]()})}var i=e.fn.popover
e.fn.popover=n
e.fn.popover.Constructor=t
e.fn.popover.noConflict=function(){e.fn.popover=i
return this}}(jQuery);+function(e){"use strict"
function t(n,i){var r=e.proxy(this.process,this)
this.$body=e("body")
this.$scrollElement=e(n).is("body")?e(window):e(n)
this.options=e.extend({},t.DEFAULTS,i)
this.selector=(this.options.target||"")+" .nav li > a"
this.offsets=[]
this.targets=[]
this.activeTarget=null
this.scrollHeight=0
this.$scrollElement.on("scroll.bs.scrollspy",r)
this.refresh()
this.process()}t.VERSION="3.2.0"
t.DEFAULTS={offset:10}
t.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)}
t.prototype.refresh=function(){var t="offset"
var n=0
if(!e.isWindow(this.$scrollElement[0])){t="position"
n=this.$scrollElement.scrollTop()}this.offsets=[]
this.targets=[]
this.scrollHeight=this.getScrollHeight()
var i=this
this.$body.find(this.selector).map(function(){var i=e(this)
var r=i.data("target")||i.attr("href")
var s=/^#./.test(r)&&e(r)
return s&&s.length&&s.is(":visible")&&[[s[t]().top+n,r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){i.offsets.push(this[0])
i.targets.push(this[1])})}
t.prototype.process=function(){var e=this.$scrollElement.scrollTop()+this.options.offset
var t=this.getScrollHeight()
var n=this.options.offset+t-this.$scrollElement.height()
var i=this.offsets
var r=this.targets
var s=this.activeTarget
var a
if(this.scrollHeight!=t){this.refresh()}if(e>=n){return s!=(a=r[r.length-1])&&this.activate(a)}if(s&&e<=i[0]){return s!=(a=r[0])&&this.activate(a)}for(a=i.length;a--;){s!=r[a]&&e>=i[a]&&(!i[a+1]||e<=i[a+1])&&this.activate(r[a])}}
t.prototype.activate=function(t){this.activeTarget=t
e(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
var n=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]'
var i=e(n).parents("li").addClass("active")
if(i.parent(".dropdown-menu").length){i=i.closest("li.dropdown").addClass("active")}i.trigger("activate.bs.scrollspy")}
function n(n){return this.each(function(){var i=e(this)
var r=i.data("bs.scrollspy")
var s=typeof n=="object"&&n
if(!r)i.data("bs.scrollspy",r=new t(this,s))
if(typeof n=="string")r[n]()})}var i=e.fn.scrollspy
e.fn.scrollspy=n
e.fn.scrollspy.Constructor=t
e.fn.scrollspy.noConflict=function(){e.fn.scrollspy=i
return this}
e(window).on("load.bs.scrollspy.data-api",function(){e('[data-spy="scroll"]').each(function(){var t=e(this)
n.call(t,t.data())})})}(jQuery);+function(e){"use strict"
var t=function(t){this.element=e(t)}
t.VERSION="3.2.0"
t.prototype.show=function(){var t=this.element
var n=t.closest("ul:not(.dropdown-menu)")
var i=t.data("target")
if(!i){i=t.attr("href")
i=i&&i.replace(/.*(?=#[^\s]*$)/,"")}if(t.parent("li").hasClass("active"))return
var r=n.find(".active:last a")[0]
var s=e.Event("show.bs.tab",{relatedTarget:r})
t.trigger(s)
if(s.isDefaultPrevented())return
var a=e(i)
this.activate(t.closest("li"),n)
this.activate(a,a.parent(),function(){t.trigger({type:"shown.bs.tab",relatedTarget:r})})}
t.prototype.activate=function(t,n,i){var r=n.find("> .active")
var s=i&&e.support.transition&&r.hasClass("fade")
function a(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active")
t.addClass("active")
if(s){t[0].offsetWidth
t.addClass("in")}else{t.removeClass("fade")}if(t.parent(".dropdown-menu")){t.closest("li.dropdown").addClass("active")}i&&i()}s?r.one("bsTransitionEnd",a).emulateTransitionEnd(150):a()
r.removeClass("in")}
function n(n){return this.each(function(){var i=e(this)
var r=i.data("bs.tab")
if(!r)i.data("bs.tab",r=new t(this))
if(typeof n=="string")r[n]()})}var i=e.fn.tab
e.fn.tab=n
e.fn.tab.Constructor=t
e.fn.tab.noConflict=function(){e.fn.tab=i
return this}
e(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault()
n.call(e(this),"show")})}(jQuery);+function(e){"use strict"
var t=function(n,i){this.options=e.extend({},t.DEFAULTS,i)
this.$target=e(this.options.target).on("scroll.bs.affix.data-api",e.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",e.proxy(this.checkPositionWithEventLoop,this))
this.$element=e(n)
this.affixed=this.unpin=this.pinnedOffset=null
this.checkPosition()}
t.VERSION="3.2.0"
t.RESET="affix affix-top affix-bottom"
t.DEFAULTS={offset:0,target:window}
t.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(t.RESET).addClass("affix")
var e=this.$target.scrollTop()
var n=this.$element.offset()
return this.pinnedOffset=n.top-e}
t.prototype.checkPositionWithEventLoop=function(){setTimeout(e.proxy(this.checkPosition,this),1)}
t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return
var n=e(document).height()
var i=this.$target.scrollTop()
var r=this.$element.offset()
var s=this.options.offset
var a=s.top
var o=s.bottom
if(typeof s!="object")o=a=s
if(typeof a=="function")a=s.top(this.$element)
if(typeof o=="function")o=s.bottom(this.$element)
var l=this.unpin!=null&&i+this.unpin<=r.top?false:o!=null&&r.top+this.$element.height()>=n-o?"bottom":a!=null&&i<=a?"top":false
if(this.affixed===l)return
if(this.unpin!=null)this.$element.css("top","")
var u="affix"+(l?"-"+l:"")
var f=e.Event(u+".bs.affix")
this.$element.trigger(f)
if(f.isDefaultPrevented())return
this.affixed=l
this.unpin=l=="bottom"?this.getPinnedOffset():null
this.$element.removeClass(t.RESET).addClass(u).trigger(e.Event(u.replace("affix","affixed")))
if(l=="bottom"){this.$element.offset({top:n-this.$element.height()-o})}}
function n(n){return this.each(function(){var i=e(this)
var r=i.data("bs.affix")
var s=typeof n=="object"&&n
if(!r)i.data("bs.affix",r=new t(this,s))
if(typeof n=="string")r[n]()})}var i=e.fn.affix
e.fn.affix=n
e.fn.affix.Constructor=t
e.fn.affix.noConflict=function(){e.fn.affix=i
return this}
e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this)
var i=t.data()
i.offset=i.offset||{}
if(i.offsetBottom)i.offset.bottom=i.offsetBottom
if(i.offsetTop)i.offset.top=i.offsetTop
n.call(t,i)})})}(jQuery);(function(e){"use strict"
if(e.fetch){return}var t={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{new Blob
return true}catch(e){return false}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e}
if(t.arrayBuffer){var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"]
var i=function(e){return e&&DataView.prototype.isPrototypeOf(e)}
var r=ArrayBuffer.isView||function(e){return e&&n.indexOf(Object.prototype.toString.call(e))>-1}}function s(e){if(typeof e!=="string"){e=String(e)}if(/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)){throw new TypeError("Invalid character in header field name")}return e.toLowerCase()}function a(e){if(typeof e!=="string"){e=String(e)}return e}function o(e){var n={next:function(){var t=e.shift()
return{done:t===undefined,value:t}}}
if(t.iterable){n[Symbol.iterator]=function(){return n}}return n}function l(e){this.map={}
if(e instanceof l){e.forEach(function(e,t){this.append(t,e)},this)}else if(Array.isArray(e)){e.forEach(function(e){this.append(e[0],e[1])},this)}else if(e){Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}}l.prototype.append=function(e,t){e=s(e)
t=a(t)
var n=this.map[e]
this.map[e]=n?n+","+t:t}
l.prototype["delete"]=function(e){delete this.map[s(e)]}
l.prototype.get=function(e){e=s(e)
return this.has(e)?this.map[e]:null}
l.prototype.has=function(e){return this.map.hasOwnProperty(s(e))}
l.prototype.set=function(e,t){this.map[s(e)]=a(t)}
l.prototype.forEach=function(e,t){for(var n in this.map){if(this.map.hasOwnProperty(n)){e.call(t,this.map[n],n,this)}}}
l.prototype.keys=function(){var e=[]
this.forEach(function(t,n){e.push(n)})
return o(e)}
l.prototype.values=function(){var e=[]
this.forEach(function(t){e.push(t)})
return o(e)}
l.prototype.entries=function(){var e=[]
this.forEach(function(t,n){e.push([n,t])})
return o(e)}
if(t.iterable){l.prototype[Symbol.iterator]=l.prototype.entries}function u(e){if(e.bodyUsed){return Promise.reject(new TypeError("Already read"))}e.bodyUsed=true}function f(e){return new Promise(function(t,n){e.onload=function(){t(e.result)}
e.onerror=function(){n(e.error)}})}function c(e){var t=new FileReader
var n=f(t)
t.readAsArrayBuffer(e)
return n}function h(e){var t=new FileReader
var n=f(t)
t.readAsText(e)
return n}function d(e){var t=new Uint8Array(e)
var n=new Array(t.length)
for(var i=0;i<t.length;i++){n[i]=String.fromCharCode(t[i])}return n.join("")}function p(e){if(e.slice){return e.slice(0)}else{var t=new Uint8Array(e.byteLength)
t.set(new Uint8Array(e))
return t.buffer}}function m(){this.bodyUsed=false
this._initBody=function(e){this._bodyInit=e
if(!e){this._bodyText=""}else if(typeof e==="string"){this._bodyText=e}else if(t.blob&&Blob.prototype.isPrototypeOf(e)){this._bodyBlob=e}else if(t.formData&&FormData.prototype.isPrototypeOf(e)){this._bodyFormData=e}else if(t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)){this._bodyText=e.toString()}else if(t.arrayBuffer&&t.blob&&i(e)){this._bodyArrayBuffer=p(e.buffer)
this._bodyInit=new Blob([this._bodyArrayBuffer])}else if(t.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||r(e))){this._bodyArrayBuffer=p(e)}else{throw new Error("unsupported BodyInit type")}if(!this.headers.get("content-type")){if(typeof e==="string"){this.headers.set("content-type","text/plain;charset=UTF-8")}else if(this._bodyBlob&&this._bodyBlob.type){this.headers.set("content-type",this._bodyBlob.type)}else if(t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)){this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8")}}}
if(t.blob){this.blob=function(){var e=u(this)
if(e){return e}if(this._bodyBlob){return Promise.resolve(this._bodyBlob)}else if(this._bodyArrayBuffer){return Promise.resolve(new Blob([this._bodyArrayBuffer]))}else if(this._bodyFormData){throw new Error("could not read FormData body as blob")}else{return Promise.resolve(new Blob([this._bodyText]))}}
this.arrayBuffer=function(){if(this._bodyArrayBuffer){return u(this)||Promise.resolve(this._bodyArrayBuffer)}else{return this.blob().then(c)}}}this.text=function(){var e=u(this)
if(e){return e}if(this._bodyBlob){return h(this._bodyBlob)}else if(this._bodyArrayBuffer){return Promise.resolve(d(this._bodyArrayBuffer))}else if(this._bodyFormData){throw new Error("could not read FormData body as text")}else{return Promise.resolve(this._bodyText)}}
if(t.formData){this.formData=function(){return this.text().then(y)}}this.json=function(){return this.text().then(JSON.parse)}
return this}var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"]
function g(e){var t=e.toUpperCase()
return v.indexOf(t)>-1?t:e}function _(e,t){t=t||{}
var n=t.body
if(e instanceof _){if(e.bodyUsed){throw new TypeError("Already read")}this.url=e.url
this.credentials=e.credentials
if(!t.headers){this.headers=new l(e.headers)}this.method=e.method
this.mode=e.mode
if(!n&&e._bodyInit!=null){n=e._bodyInit
e.bodyUsed=true}}else{this.url=String(e)}this.credentials=t.credentials||this.credentials||"omit"
if(t.headers||!this.headers){this.headers=new l(t.headers)}this.method=g(t.method||this.method||"GET")
this.mode=t.mode||this.mode||null
this.referrer=null
if((this.method==="GET"||this.method==="HEAD")&&n){throw new TypeError("Body not allowed for GET or HEAD requests")}this._initBody(n)}_.prototype.clone=function(){return new _(this,{body:this._bodyInit})}
function y(e){var t=new FormData
e.trim().split("&").forEach(function(e){if(e){var n=e.split("=")
var i=n.shift().replace(/\+/g," ")
var r=n.join("=").replace(/\+/g," ")
t.append(decodeURIComponent(i),decodeURIComponent(r))}})
return t}function b(e){var t=new l
e.split(/\r?\n/).forEach(function(e){var n=e.split(":")
var i=n.shift().trim()
if(i){var r=n.join(":").trim()
t.append(i,r)}})
return t}m.call(_.prototype)
function w(e,t){if(!t){t={}}this.type="default"
this.status="status"in t?t.status:200
this.ok=this.status>=200&&this.status<300
this.statusText="statusText"in t?t.statusText:"OK"
this.headers=new l(t.headers)
this.url=t.url||""
this._initBody(e)}m.call(w.prototype)
w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})}
w.error=function(){var e=new w(null,{status:0,statusText:""})
e.type="error"
return e}
var x=[301,302,303,307,308]
w.redirect=function(e,t){if(x.indexOf(t)===-1){throw new RangeError("Invalid status code")}return new w(null,{status:t,headers:{location:e}})}
e.Headers=l
e.Request=_
e.Response=w
e.fetch=function(e,n){return new Promise(function(i,r){var s=new _(e,n)
var a=new XMLHttpRequest
a.onload=function(){var e={status:a.status,statusText:a.statusText,headers:b(a.getAllResponseHeaders()||"")}
e.url="responseURL"in a?a.responseURL:e.headers.get("X-Request-URL")
var t="response"in a?a.response:a.responseText
i(new w(t,e))}
a.onerror=function(){r(new TypeError("Network request failed"))}
a.ontimeout=function(){r(new TypeError("Network request failed"))}
a.open(s.method,s.url,true)
if(s.credentials==="include"){a.withCredentials=true}if("responseType"in a&&t.blob){a.responseType="blob"}s.headers.forEach(function(e,t){a.setRequestHeader(t,e)})
a.send(typeof s._bodyInit==="undefined"?null:s._bodyInit)})}
e.fetch.polyfill=true})(typeof self!=="undefined"?self:this)
var saveAs=saveAs||function(e){"use strict"
if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},i=t.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in i,s=function(e){var t=new MouseEvent("click")
e.dispatchEvent(t)},a=/constructor/i.test(e.HTMLElement)||e.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent),l=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},u="application/octet-stream",f=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}}
setTimeout(t,f)},h=function(e,t,n){t=[].concat(t)
var i=t.length
while(i--){var r=e["on"+t[i]]
if(typeof r==="function"){try{r.call(e,n||e)}catch(e){l(e)}}}},d=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},p=function(t,l,f){if(!f){t=d(t)}var p=this,m=t.type,v=m===u,g,_=function(){h(p,"writestart progress write writeend".split(" "))},y=function(){if((o||v&&a)&&e.FileReader){var i=new FileReader
i.onloadend=function(){var t=o?i.result:i.result.replace(/^data:[^;]*;/,"data:attachment/file;")
var n=e.open(t,"_blank")
if(!n)e.location.href=t
t=undefined
p.readyState=p.DONE
_()}
i.readAsDataURL(t)
p.readyState=p.INIT
return}if(!g){g=n().createObjectURL(t)}if(v){e.location.href=g}else{var r=e.open(g,"_blank")
if(!r){e.location.href=g}}p.readyState=p.DONE
_()
c(g)}
p.readyState=p.INIT
if(r){g=n().createObjectURL(t)
setTimeout(function(){i.href=g
i.download=l
s(i)
_()
c(g)
p.readyState=p.DONE})
return}y()},m=p.prototype,v=function(e,t,n){return new p(e,t||e.name||"download",n)}
if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download"
if(!n){e=d(e)}return navigator.msSaveOrOpenBlob(e,t)}}m.abort=function(){}
m.readyState=m.INIT=0
m.WRITING=1
m.DONE=2
m.error=m.onwritestart=m.onprogress=m.onwrite=m.onabort=m.onerror=m.onwriteend=null
return v}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content)
if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define("FileSaver.js",function(){return saveAs})}(function(){if(!Array.prototype.indexOf){Array.prototype.indexOf=function(e){"use strict"
if(this==null){throw new TypeError}var t=Object(this)
var n=t.length>>>0
if(n===0){return-1}var i=0
if(arguments.length>0){i=Number(arguments[1])
if(i!=i){i=0}else if(i!=0&&i!=Infinity&&i!=-Infinity){i=(i>0||-1)*Math.floor(Math.abs(i))}}if(i>=n){return-1}var r=i>=0?i:Math.max(n-Math.abs(i),0)
for(;r<n;r++){if(r in t&&t[r]===e){return r}}return-1}}if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function(e){"use strict"
if(this==null){throw new TypeError}var t=Object(this)
var n=t.length>>>0
if(n===0){return-1}var i=n
if(arguments.length>1){i=Number(arguments[1])
if(i!=i){i=0}else if(i!=0&&i!=1/0&&i!=-(1/0)){i=(i>0||-1)*Math.floor(Math.abs(i))}}var r=i>=0?Math.min(i,n-1):n-Math.abs(i)
for(;r>=0;r--){if(r in t&&t[r]===e){return r}}return-1}}if(typeof String.prototype.trim!=="function"){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}}var e=this,t=e.jQuery||e.Zepto,n={},i={},r,s=0,a=[],o=false
if(typeof module!=="undefined"&&module.exports){module.exports=n}else{if(t){t.i18n=t.i18n||n}e.i18n=e.i18n||n}var l={lng:undefined,load:"all",preload:[],lowerCaseLng:false,returnObjectTrees:false,fallbackLng:["dev"],fallbackNS:[],detectLngQS:"setLng",ns:"translation",fallbackOnNull:true,fallbackOnEmpty:false,fallbackToDefaultNS:false,nsseparator:":",keyseparator:".",selectorAttr:"data-i18n",debug:false,resGetPath:"locales/__lng__/__ns__.json",resPostPath:"locales/add/__lng__/__ns__",getAsync:true,postAsync:true,resStore:undefined,useLocalStorage:false,localStorageExpirationTime:7*24*60*60*1e3,dynamicLoad:false,sendMissing:false,sendMissingTo:"fallback",sendType:"POST",interpolationPrefix:"__",interpolationSuffix:"__",reusePrefix:"$t(",reuseSuffix:")",pluralSuffix:"_plural",pluralNotFound:["plural_not_found",Math.random()].join(""),contextNotFound:["context_not_found",Math.random()].join(""),escapeInterpolation:false,setJqueryExt:true,defaultValueFromContent:true,useDataAttrOptions:false,cookieExpirationTime:undefined,useCookie:true,cookieName:"i18next",cookieDomain:undefined,objectTreeKeyHandler:undefined,postProcess:undefined,parseMissingKey:undefined,shortcutFunction:"sprintf"}
function u(e,t){if(!t||typeof t==="function"){return e}for(var n in t){e[n]=t[n]}return e}function f(e,t,n){var i,r=0,s=e.length,a=s===undefined||Object.prototype.toString.apply(e)!=="[object Array]"||typeof e==="function"
if(n){if(a){for(i in e){if(t.apply(e[i],n)===false){break}}}else{for(;r<s;){if(t.apply(e[r++],n)===false){break}}}}else{if(a){for(i in e){if(t.call(e[i],i,e[i])===false){break}}}else{for(;r<s;){if(t.call(e[r],r,e[r++])===false){break}}}}return e}var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"}
function h(e){if(typeof e==="string"){return e.replace(/[&<>"'\/]/g,function(e){return c[e]})}else{return e}}function d(e){var t=function(e){if(window.XMLHttpRequest){return e(null,new XMLHttpRequest)}else if(window.ActiveXObject){try{return e(null,new ActiveXObject("Msxml2.XMLHTTP"))}catch(t){return e(null,new ActiveXObject("Microsoft.XMLHTTP"))}}return e(new Error)}
var n=function(e){if(typeof e==="string"){return e}var t=[]
for(var n in e){if(e.hasOwnProperty(n)){t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]))}}return t.join("&")}
var i=function(e){e=e.replace(/\r\n/g,"\n")
var t=""
for(var n=0;n<e.length;n++){var i=e.charCodeAt(n)
if(i<128){t+=String.fromCharCode(i)}else if(i>127&&i<2048){t+=String.fromCharCode(i>>6|192)
t+=String.fromCharCode(i&63|128)}else{t+=String.fromCharCode(i>>12|224)
t+=String.fromCharCode(i>>6&63|128)
t+=String.fromCharCode(i&63|128)}}return t}
var r=function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
e=i(e)
var n="",r,s,a,o,l,u,f,c=0
do{r=e.charCodeAt(c++)
s=e.charCodeAt(c++)
a=e.charCodeAt(c++)
o=r>>2
l=(r&3)<<4|s>>4
u=(s&15)<<2|a>>6
f=a&63
if(isNaN(s)){u=f=64}else if(isNaN(a)){f=64}n+=t.charAt(o)+t.charAt(l)+t.charAt(u)+t.charAt(f)
r=s=a=""
o=l=u=f=""}while(c<e.length)
return n}
var s=function(){var e=arguments[0]
for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n){if(n.hasOwnProperty(i)){e[i]=n[i]}}}return e}
var a=function(e,i,r,o){if(typeof r==="function"){o=r
r={}}r.cache=r.cache||false
r.data=r.data||{}
r.headers=r.headers||{}
r.jsonp=r.jsonp||false
r.async=r.async===undefined?true:r.async
var l=s({accept:"*/*","content-type":"application/x-www-form-urlencoded;charset=UTF-8"},a.headers,r.headers)
var u
if(l["content-type"]==="application/json"){u=JSON.stringify(r.data)}else{u=n(r.data)}if(e==="GET"){var f=[]
if(u){f.push(u)
u=null}if(!r.cache){f.push("_="+(new Date).getTime())}if(r.jsonp){f.push("callback="+r.jsonp)
f.push("jsonp="+r.jsonp)}f=f.join("&")
if(f.length>1){if(i.indexOf("?")>-1){i+="&"+f}else{i+="?"+f}}if(r.jsonp){var c=document.getElementsByTagName("head")[0]
var h=document.createElement("script")
h.type="text/javascript"
h.src=i
c.appendChild(h)
return}}t(function(t,n){if(t)return o(t)
n.open(e,i,r.async)
for(var s in l){if(l.hasOwnProperty(s)){n.setRequestHeader(s,l[s])}}n.onreadystatechange=function(){if(n.readyState===4){var e=n.responseText||""
if(!o){return}o(n.status,{text:function(){return e},json:function(){return JSON.parse(e)}})}}
n.send(u)})}
var o={authBasic:function(e,t){a.headers["Authorization"]="Basic "+r(e+":"+t)},connect:function(e,t,n){return a("CONNECT",e,t,n)},del:function(e,t,n){return a("DELETE",e,t,n)},get:function(e,t,n){return a("GET",e,t,n)},head:function(e,t,n){return a("HEAD",e,t,n)},headers:function(e){a.headers=e||{}},isAllowed:function(e,t,n){this.options(e,function(e,i){n(i.text().indexOf(t)!==-1)})},options:function(e,t,n){return a("OPTIONS",e,t,n)},patch:function(e,t,n){return a("PATCH",e,t,n)},post:function(e,t,n){return a("POST",e,t,n)},put:function(e,t,n){return a("PUT",e,t,n)},trace:function(e,t,n){return a("TRACE",e,t,n)}}
var l=e.type?e.type.toLowerCase():"get"
o[l](e.url,e,function(t,n){if(t===200){e.success(n.json(),t,null)}else{e.error(n.text(),t,null)}})}var p={create:function(e,t,n,i){var r
if(n){var s=new Date
s.setTime(s.getTime()+n*60*1e3)
r="; expires="+s.toGMTString()}else r=""
i=i?"domain="+i+";":""
document.cookie=e+"="+t+r+";"+i+"path=/"},read:function(e){var t=e+"="
var n=document.cookie.split(";")
for(var i=0;i<n.length;i++){var r=n[i]
while(r.charAt(0)==" ")r=r.substring(1,r.length)
if(r.indexOf(t)===0)return r.substring(t.length,r.length)}return null},remove:function(e){this.create(e,"",-1)}}
var m={create:function(e,t,n,i){},read:function(e){return null},remove:function(e){}}
var v={extend:t?t.extend:u,each:t?t.each:f,ajax:t?t.ajax:typeof document!=="undefined"?d:function(){},cookie:typeof document!=="undefined"?p:m,detectLanguage:N,escape:h,log:function(e){if(l.debug&&typeof console!=="undefined")console.log(e)},toLanguages:function(e){var t=[]
if(typeof e==="string"&&e.indexOf("-")>-1){var n=e.split("-")
e=n[0].toLowerCase()
for(var i=1;i<n.length;++i){e=e+"-"+n[i][l.lowerCaseLng?"toLowerCase":"toUpperCase"]()}if(l.load!=="unspecific")t.push(e)
if(l.load!=="current")t.push(n[0])}else{t.push(e)}for(var r=0;r<l.fallbackLng.length;r++){if(t.indexOf(l.fallbackLng[r])===-1&&l.fallbackLng[r])t.push(l.fallbackLng[r])}return t},regexEscape:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}}
function g(e,s){if(typeof e==="function"){s=e
e={}}e=e||{}
v.extend(l,e)
delete l.fixLng
if(typeof l.ns=="string"){l.ns={namespaces:[l.ns],defaultNs:l.ns}}if(typeof l.fallbackNS=="string"){l.fallbackNS=[l.fallbackNS]}if(typeof l.fallbackLng=="string"||typeof l.fallbackLng=="boolean"){l.fallbackLng=[l.fallbackLng]}l.interpolationPrefixEscaped=v.regexEscape(l.interpolationPrefix)
l.interpolationSuffixEscaped=v.regexEscape(l.interpolationSuffix)
if(!l.lng)l.lng=v.detectLanguage()
if(l.lng){if(l.useCookie)v.cookie.create(l.cookieName,l.lng,l.cookieExpirationTime,l.cookieDomain)}else{l.lng=l.fallbackLng[0]
if(l.useCookie)v.cookie.remove(l.cookieName)}a=v.toLanguages(l.lng)
r=a[0]
v.log("currentLng set to: "+r)
var u=Y
if(e.fixLng){u=function(e,t){t=t||{}
t.lng=t.lng||u.lng
return Y(e,t)}
u.lng=r}F.setCurrentLng(r)
if(t&&l.setJqueryExt)L()
var f
if(t&&t.Deferred){f=t.Deferred()}if(l.resStore){i=l.resStore
o=true
if(s)s(u)
if(f)f.resolve(u)
if(f)return f.promise()
return}var c=v.toLanguages(l.lng)
if(typeof l.preload==="string")l.preload=[l.preload]
for(var h=0,d=l.preload.length;h<d;h++){var p=v.toLanguages(l.preload[h])
for(var m=0,g=p.length;m<g;m++){if(c.indexOf(p[m])<0){c.push(p[m])}}}n.sync.load(c,l,function(e,t){i=t
o=true
if(s)s(u)
if(f)f.resolve(u)})
if(f)return f.promise()}function _(e,t){if(typeof e==="string")e=[e]
for(var n=0,i=e.length;n<i;n++){if(l.preload.indexOf(e[n])<0){l.preload.push(e[n])}}return g(t)}function y(e,t,n){if(typeof t!=="string"){n=t
t=l.ns.defaultNs}else if(l.ns.namespaces.indexOf(t)<0){l.ns.namespaces.push(t)}i[e]=i[e]||{}
i[e][t]=i[e][t]||{}
v.extend(i[e][t],n)}function b(e,t){if(typeof t!=="string"){t=l.ns.defaultNs}i[e]=i[e]||{}
i[e][t]={}}function w(e){l.ns.defaultNs=e}function x(e,t){k([e],t)}function k(e,t){var r={dynamicLoad:l.dynamicLoad,resGetPath:l.resGetPath,getAsync:l.getAsync,customLoad:l.customLoad,ns:{namespaces:e,defaultNs:""}}
var s=v.toLanguages(l.lng)
if(typeof l.preload==="string")l.preload=[l.preload]
for(var a=0,o=l.preload.length;a<o;a++){var u=v.toLanguages(l.preload[a])
for(var f=0,c=u.length;f<c;f++){if(s.indexOf(u[f])<0){s.push(u[f])}}}var h=[]
for(var d=0,p=s.length;d<p;d++){var m=false
var g=i[s[d]]
if(g){for(var _=0,y=e.length;_<y;_++){if(!g[e[_]])m=true}}else{m=true}if(m)h.push(s[d])}if(h.length){n.sync._fetch(h,r,function(r,s){var a=e.length*h.length
v.each(e,function(e,r){if(l.ns.namespaces.indexOf(r)<0){l.ns.namespaces.push(r)}v.each(h,function(e,o){i[o]=i[o]||{}
i[o][r]=s[o][r]
a--
if(a===0&&t){if(l.useLocalStorage)n.sync._storeLocal(i)
t()}})})})}else{if(t)t()}}function M(e,t,n){if(typeof t==="function"){n=t
t={}}else if(!t){t={}}t.lng=e
return g(t,n)}function T(){return r}function L(){t.t=t.t||Y
function e(e,n,i){if(n.length===0)return
var r="text"
if(n.indexOf("[")===0){var s=n.split("]")
n=s[1]
r=s[0].substr(1,s[0].length-1)}if(n.indexOf(";")===n.length-1){n=n.substr(0,n.length-2)}var a
if(r==="html"){a=l.defaultValueFromContent?t.extend({defaultValue:e.html()},i):i
e.html(t.t(n,a))}else if(r==="text"){a=l.defaultValueFromContent?t.extend({defaultValue:e.text()},i):i
e.text(t.t(n,a))}else if(r==="prepend"){a=l.defaultValueFromContent?t.extend({defaultValue:e.html()},i):i
e.prepend(t.t(n,a))}else if(r==="append"){a=l.defaultValueFromContent?t.extend({defaultValue:e.html()},i):i
e.append(t.t(n,a))}else if(r.indexOf("data-")===0){var o=r.substr("data-".length)
a=l.defaultValueFromContent?t.extend({defaultValue:e.data(o)},i):i
var u=t.t(n,a)
e.data(o,u)
e.attr(r,u)}else{a=l.defaultValueFromContent?t.extend({defaultValue:e.attr(r)},i):i
e.attr(r,t.t(n,a))}}function n(n,i){var r=n.attr(l.selectorAttr)
if(!r&&typeof r!=="undefined"&&r!==false)r=n.text()||n.val()
if(!r)return
var s=n,a=n.data("i18n-target")
if(a){s=n.find(a)||n}if(!i&&l.useDataAttrOptions===true){i=n.data("i18n-options")}i=i||{}
if(r.indexOf(";")>=0){var o=r.split(";")
t.each(o,function(t,n){if(n!=="")e(s,n,i)})}else{e(s,r,i)}if(l.useDataAttrOptions===true)n.data("i18n-options",i)}t.fn.i18n=function(e){return this.each(function(){n(t(this),e)
var i=t(this).find("["+l.selectorAttr+"]")
i.each(function(){n(t(this),e)})})}}function S(e,t,n,i){if(!e)return e
i=i||t
if(e.indexOf(i.interpolationPrefix||l.interpolationPrefix)<0)return e
var r=i.interpolationPrefix?v.regexEscape(i.interpolationPrefix):l.interpolationPrefixEscaped,s=i.interpolationSuffix?v.regexEscape(i.interpolationSuffix):l.interpolationSuffixEscaped,a="HTML"+s
v.each(t,function(t,o){var u=n?n+l.keyseparator+t:t
if(typeof o==="object"&&o!==null){e=S(e,o,u,i)}else{if(i.escapeInterpolation||l.escapeInterpolation){e=e.replace(new RegExp([r,u,a].join(""),"g"),o)
e=e.replace(new RegExp([r,u,s].join(""),"g"),v.escape(o))}else{e=e.replace(new RegExp([r,u,s].join(""),"g"),o)}}})
return e}v.applyReplacement=S
function D(e,t){var n=","
var i="{"
var r="}"
var a=v.extend({},t)
delete a.postProcess
while(e.indexOf(l.reusePrefix)!=-1){s++
if(s>l.maxRecursion){break}var o=e.lastIndexOf(l.reusePrefix)
var u=e.indexOf(l.reuseSuffix,o)+l.reuseSuffix.length
var f=e.substring(o,u)
var c=f.replace(l.reusePrefix,"").replace(l.reuseSuffix,"")
if(c.indexOf(n)!=-1){var h=c.indexOf(n)
if(c.indexOf(i,h)!=-1&&c.indexOf(r,h)!=-1){var d=c.indexOf(i,h)
var p=c.indexOf(r,d)+r.length
try{a=v.extend(a,JSON.parse(c.substring(d,p)))
c=c.substring(0,h)}catch(e){}}}var m=I(c,a)
e=e.replace(f,m)}return e}function C(e){return e.context&&(typeof e.context=="string"||typeof e.context=="number")}function E(e){return e.count!==undefined&&typeof e.count!="string"&&e.count!==1}function A(e,t){t=t||{}
var n=j(e,t),i=P(e,t)
return i!==undefined||i===n}function Y(e,t){t=t||{}
if(!o){v.log("i18next not finished initialization. you might have called t function before loading resources finished.")
return t.defaultValue||""}s=0
return I.apply(null,arguments)}function j(e,t){return t.defaultValue!==undefined?t.defaultValue:e}function O(){var e=[]
for(var t=1;t<arguments.length;t++){e.push(arguments[t])}return{postProcess:"sprintf",sprintf:e}}function I(e,t){if(t&&typeof t!=="object"){if(l.shortcutFunction==="sprintf"){t=O.apply(null,arguments)}else if(l.shortcutFunction==="defaultValue"){t={defaultValue:t}}}else{t=t||{}}if(e===undefined||e===null)return""
if(typeof e=="string"){e=[e]}var n=e[0]
if(e.length>1){for(var i=0;i<e.length;i++){n=e[i]
if(A(n,t)){break}}}var r=j(n,t),s=P(n,t),o=t.lng?v.toLanguages(t.lng):a,u=t.ns||l.ns.defaultNs,f
if(n.indexOf(l.nsseparator)>-1){f=n.split(l.nsseparator)
u=f[0]
n=f[1]}if(s===undefined&&l.sendMissing){if(t.lng){R.postMissing(o[0],u,n,r,o)}else{R.postMissing(l.lng,u,n,r,o)}}var c=t.postProcess||l.postProcess
if(s!==undefined&&c){if(H[c]){s=H[c](s,n,t)}}var h=r
if(r.indexOf(l.nsseparator)>-1){f=r.split(l.nsseparator)
h=f[1]}if(h===n&&l.parseMissingKey){r=l.parseMissingKey(r)}if(s===undefined){r=S(r,t)
r=D(r,t)
if(c&&H[c]){var d=j(n,t)
s=H[c](d,n,t)}}return s!==undefined?s:r}function P(e,t){t=t||{}
var r,s,o=j(e,t),u=a
if(!i){return o}if(u[0].toLowerCase()==="cimode")return o
if(t.lng){u=v.toLanguages(t.lng)
if(!i[u[0]]){var f=l.getAsync
l.getAsync=false
n.sync.load(u,l,function(e,t){v.extend(i,t)
l.getAsync=f})}}var c=t.ns||l.ns.defaultNs
if(e.indexOf(l.nsseparator)>-1){var h=e.split(l.nsseparator)
c=h[0]
e=h[1]}if(C(t)){r=v.extend({},t)
delete r.context
r.defaultValue=l.contextNotFound
var d=c+l.nsseparator+e+"_"+t.context
s=Y(d,r)
if(s!=l.contextNotFound){return S(s,{context:t.context})}}if(E(t)){r=v.extend({},t)
delete r.count
r.defaultValue=l.pluralNotFound
var p=c+l.nsseparator+e+l.pluralSuffix
var m=F.get(u[0],t.count)
if(m>=0){p=p+"_"+m}else if(m===1){p=c+l.nsseparator+e}s=Y(p,r)
if(s!=l.pluralNotFound){return S(s,{count:t.count,interpolationPrefix:t.interpolationPrefix,interpolationSuffix:t.interpolationSuffix})}}var g
var _=e.split(l.keyseparator)
for(var y=0,b=u.length;y<b;y++){if(g!==undefined)break
var w=u[y]
var x=0
var k=i[w]&&i[w][c]
while(_[x]){k=k&&k[_[x]]
x++}if(k!==undefined){var M=Object.prototype.toString.apply(k)
if(typeof k==="string"){k=S(k,t)
k=D(k,t)}else if(M==="[object Array]"&&!l.returnObjectTrees&&!t.returnObjectTrees){k=k.join("\n")
k=S(k,t)
k=D(k,t)}else if(k===null&&l.fallbackOnNull===true){k=undefined}else if(k!==null){if(!l.returnObjectTrees&&!t.returnObjectTrees){if(l.objectTreeKeyHandler&&typeof l.objectTreeKeyHandler=="function"){k=l.objectTreeKeyHandler(e,k,w,c,t)}else{k="key '"+c+":"+e+" ("+w+")' "+"returned an object instead of string."
v.log(k)}}else if(M!=="[object Number]"&&M!=="[object Function]"&&M!=="[object RegExp]"){var T=M==="[object Array]"?[]:{}
v.each(k,function(n){T[n]=I(c+l.nsseparator+e+l.keyseparator+n,t)})
k=T}}if(typeof k==="string"&&k.trim()===""&&l.fallbackOnEmpty===true)k=undefined
g=k}}if(g===undefined&&!t.isFallbackLookup&&(l.fallbackToDefaultNS===true||l.fallbackNS&&l.fallbackNS.length>0)){t.isFallbackLookup=true
if(l.fallbackNS.length){for(var L=0,A=l.fallbackNS.length;L<A;L++){g=P(l.fallbackNS[L]+l.nsseparator+e,t)
if(g){var O=g.indexOf(l.nsseparator)>-1?g.split(l.nsseparator)[1]:g,N=o.indexOf(l.nsseparator)>-1?o.split(l.nsseparator)[1]:o
if(O!==N)break}}}else{g=P(e,t)}}return g}function N(){var e
var t=[]
if(typeof window!=="undefined"){(function(){var e=window.location.search.substring(1)
var n=e.split("&")
for(var i=0;i<n.length;i++){var r=n[i].indexOf("=")
if(r>0){var s=n[i].substring(0,r)
var a=n[i].substring(r+1)
t[s]=a}}})()
if(t[l.detectLngQS]){e=t[l.detectLngQS]}}if(!e&&typeof document!=="undefined"&&l.useCookie){var n=v.cookie.read(l.cookieName)
if(n)e=n}if(!e&&typeof navigator!=="undefined"){e=navigator.language?navigator.language:navigator.userLanguage}return e}var R={load:function(e,t,n){if(t.useLocalStorage){R._loadLocal(e,t,function(i,r){var s=[]
for(var a=0,o=e.length;a<o;a++){if(!r[e[a]])s.push(e[a])}if(s.length>0){R._fetch(s,t,function(e,t){v.extend(r,t)
R._storeLocal(t)
n(null,r)})}else{n(null,r)}})}else{R._fetch(e,t,function(e,t){n(null,t)})}},_loadLocal:function(e,t,n){var i={},r=(new Date).getTime()
if(window.localStorage){var s=e.length
v.each(e,function(e,a){var o=window.localStorage.getItem("res_"+a)
if(o){o=JSON.parse(o)
if(o.i18nStamp&&o.i18nStamp+t.localStorageExpirationTime>r){i[a]=o}}s--
if(s===0)n(null,i)})}},_storeLocal:function(e){if(window.localStorage){for(var t in e){e[t].i18nStamp=(new Date).getTime()
window.localStorage.setItem("res_"+t,JSON.stringify(e[t]))}}return},_fetch:function(e,t,n){var i=t.ns,r={}
if(!t.dynamicLoad){var s=i.namespaces.length*e.length,a
v.each(i.namespaces,function(i,o){v.each(e,function(e,i){var l=function(e,t){if(e){a=a||[]
a.push(e)}r[i]=r[i]||{}
r[i][o]=t
s--
if(s===0)n(a,r)}
if(typeof t.customLoad=="function"){t.customLoad(i,o,t,l)}else{R._fetchOne(i,o,t,l)}})})}else{var o=function(e,t){n(null,t)}
if(typeof t.customLoad=="function"){t.customLoad(e,i.namespaces,t,o)}else{var l=S(t.resGetPath,{lng:e.join("+"),ns:i.namespaces.join("+")})
v.ajax({url:l,success:function(e,t,n){v.log("loaded: "+l)
o(null,e)},error:function(e,t,n){v.log("failed loading: "+l)
o("failed loading resource.json error: "+n)},dataType:"json",async:t.getAsync})}}},_fetchOne:function(e,t,n,i){var r=S(n.resGetPath,{lng:e,ns:t})
v.ajax({url:r,success:function(e,t,n){v.log("loaded: "+r)
i(null,e)},error:function(e,t,n){if(t&&t==200||e&&e.status&&e.status==200){v.log("There is a typo in: "+r)}else if(t&&t==404||e&&e.status&&e.status==404){v.log("Does not exist: "+r)}else{var s=t?t:e&&e.status?e.status:null
v.log(s+" when loading "+r)}i(n,{})},dataType:"json",async:n.getAsync})},postMissing:function(e,t,n,r,s){var a={}
a[n]=r
var o=[]
if(l.sendMissingTo==="fallback"&&l.fallbackLng[0]!==false){for(var u=0;u<l.fallbackLng.length;u++){o.push({lng:l.fallbackLng[u],url:S(l.resPostPath,{lng:l.fallbackLng[u],ns:t})})}}else if(l.sendMissingTo==="current"||l.sendMissingTo==="fallback"&&l.fallbackLng[0]===false){o.push({lng:e,url:S(l.resPostPath,{lng:e,ns:t})})}else if(l.sendMissingTo==="all"){for(var u=0,f=s.length;u<f;u++){o.push({lng:s[u],url:S(l.resPostPath,{lng:s[u],ns:t})})}}for(var c=0,h=o.length;c<h;c++){var d=o[c]
v.ajax({url:d.url,type:l.sendType,data:a,success:function(e,s,a){v.log("posted missing key '"+n+"' to: "+d.url)
var o=n.split(".")
var l=0
var u=i[d.lng][t]
while(o[l]){if(l===o.length-1){u=u[o[l]]=r}else{u=u[o[l]]=u[o[l]]||{}}l++}},error:function(e,t,i){v.log("failed posting missing key '"+n+"' to: "+d.url)},dataType:"json",async:l.postAsync})}}}
var F={rules:{ach:{name:"Acholi",numbers:[1,2],plurals:function(e){return Number(e>1)}},af:{name:"Afrikaans",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ak:{name:"Akan",numbers:[1,2],plurals:function(e){return Number(e>1)}},am:{name:"Amharic",numbers:[1,2],plurals:function(e){return Number(e>1)}},an:{name:"Aragonese",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ar:{name:"Arabic",numbers:[0,1,2,3,11,100],plurals:function(e){return Number(e===0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)}},arn:{name:"Mapudungun",numbers:[1,2],plurals:function(e){return Number(e>1)}},ast:{name:"Asturian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ay:{name:"Aymará",numbers:[1],plurals:function(e){return 0}},az:{name:"Azerbaijani",numbers:[1,2],plurals:function(e){return Number(e!=1)}},be:{name:"Belarusian",numbers:[1,2,5],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},bg:{name:"Bulgarian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},bn:{name:"Bengali",numbers:[1,2],plurals:function(e){return Number(e!=1)}},bo:{name:"Tibetan",numbers:[1],plurals:function(e){return 0}},br:{name:"Breton",numbers:[1,2],plurals:function(e){return Number(e>1)}},bs:{name:"Bosnian",numbers:[1,2,5],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},ca:{name:"Catalan",numbers:[1,2],plurals:function(e){return Number(e!=1)}},cgg:{name:"Chiga",numbers:[1],plurals:function(e){return 0}},cs:{name:"Czech",numbers:[1,2,5],plurals:function(e){return Number(e==1?0:e>=2&&e<=4?1:2)}},csb:{name:"Kashubian",numbers:[1,2,5],plurals:function(e){return Number(e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},cy:{name:"Welsh",numbers:[1,2,3,8],plurals:function(e){return Number(e==1?0:e==2?1:e!=8&&e!=11?2:3)}},da:{name:"Danish",numbers:[1,2],plurals:function(e){return Number(e!=1)}},de:{name:"German",numbers:[1,2],plurals:function(e){return Number(e!=1)}},dz:{name:"Dzongkha",numbers:[1],plurals:function(e){return 0}},el:{name:"Greek",numbers:[1,2],plurals:function(e){return Number(e!=1)}},en:{name:"English",numbers:[1,2],plurals:function(e){return Number(e!=1)}},eo:{name:"Esperanto",numbers:[1,2],plurals:function(e){return Number(e!=1)}},es:{name:"Spanish",numbers:[1,2],plurals:function(e){return Number(e!=1)}},es_ar:{name:"Argentinean Spanish",numbers:[1,2],plurals:function(e){return Number(e!=1)}},et:{name:"Estonian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},eu:{name:"Basque",numbers:[1,2],plurals:function(e){return Number(e!=1)}},fa:{name:"Persian",numbers:[1],plurals:function(e){return 0}},fi:{name:"Finnish",numbers:[1,2],plurals:function(e){return Number(e!=1)}},fil:{name:"Filipino",numbers:[1,2],plurals:function(e){return Number(e>1)}},fo:{name:"Faroese",numbers:[1,2],plurals:function(e){return Number(e!=1)}},fr:{name:"French",numbers:[1,2],plurals:function(e){return Number(e>1)}},fur:{name:"Friulian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},fy:{name:"Frisian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ga:{name:"Irish",numbers:[1,2,3,7,11],plurals:function(e){return Number(e==1?0:e==2?1:e<7?2:e<11?3:4)}},gd:{name:"Scottish Gaelic",numbers:[1,2,3,20],plurals:function(e){return Number(e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3)}},gl:{name:"Galician",numbers:[1,2],plurals:function(e){return Number(e!=1)}},gu:{name:"Gujarati",numbers:[1,2],plurals:function(e){return Number(e!=1)}},gun:{name:"Gun",numbers:[1,2],plurals:function(e){return Number(e>1)}},ha:{name:"Hausa",numbers:[1,2],plurals:function(e){return Number(e!=1)}},he:{name:"Hebrew",numbers:[1,2],plurals:function(e){return Number(e!=1)}},hi:{name:"Hindi",numbers:[1,2],plurals:function(e){return Number(e!=1)}},hr:{name:"Croatian",numbers:[1,2,5],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},hu:{name:"Hungarian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},hy:{name:"Armenian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ia:{name:"Interlingua",numbers:[1,2],plurals:function(e){return Number(e!=1)}},id:{name:"Indonesian",numbers:[1],plurals:function(e){return 0}},is:{name:"Icelandic",numbers:[1,2],plurals:function(e){return Number(e%10!=1||e%100==11)}},it:{name:"Italian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ja:{name:"Japanese",numbers:[1],plurals:function(e){return 0}},jbo:{name:"Lojban",numbers:[1],plurals:function(e){return 0}},jv:{name:"Javanese",numbers:[0,1],plurals:function(e){return Number(e!==0)}},ka:{name:"Georgian",numbers:[1],plurals:function(e){return 0}},kk:{name:"Kazakh",numbers:[1],plurals:function(e){return 0}},km:{name:"Khmer",numbers:[1],plurals:function(e){return 0}},kn:{name:"Kannada",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ko:{name:"Korean",numbers:[1],plurals:function(e){return 0}},ku:{name:"Kurdish",numbers:[1,2],plurals:function(e){return Number(e!=1)}},kw:{name:"Cornish",numbers:[1,2,3,4],plurals:function(e){return Number(e==1?0:e==2?1:e==3?2:3)}},ky:{name:"Kyrgyz",numbers:[1],plurals:function(e){return 0}},lb:{name:"Letzeburgesch",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ln:{name:"Lingala",numbers:[1,2],plurals:function(e){return Number(e>1)}},lo:{name:"Lao",numbers:[1],plurals:function(e){return 0}},lt:{name:"Lithuanian",numbers:[1,2,10],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)}},lv:{name:"Latvian",numbers:[1,2,0],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e!==0?1:2)}},mai:{name:"Maithili",numbers:[1,2],plurals:function(e){return Number(e!=1)}},mfe:{name:"Mauritian Creole",numbers:[1,2],plurals:function(e){return Number(e>1)}},mg:{name:"Malagasy",numbers:[1,2],plurals:function(e){return Number(e>1)}},mi:{name:"Maori",numbers:[1,2],plurals:function(e){return Number(e>1)}},mk:{name:"Macedonian",numbers:[1,2],plurals:function(e){return Number(e==1||e%10==1?0:1)}},ml:{name:"Malayalam",numbers:[1,2],plurals:function(e){return Number(e!=1)}},mn:{name:"Mongolian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},mnk:{name:"Mandinka",numbers:[0,1,2],plurals:function(e){return Number(0?0:e==1?1:2)}},mr:{name:"Marathi",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ms:{name:"Malay",numbers:[1],plurals:function(e){return 0}},mt:{name:"Maltese",numbers:[1,2,11,20],plurals:function(e){return Number(e==1?0:e===0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)}},nah:{name:"Nahuatl",numbers:[1,2],plurals:function(e){return Number(e!=1)}},nap:{name:"Neapolitan",numbers:[1,2],plurals:function(e){return Number(e!=1)}},nb:{name:"Norwegian Bokmal",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ne:{name:"Nepali",numbers:[1,2],plurals:function(e){return Number(e!=1)}},nl:{name:"Dutch",numbers:[1,2],plurals:function(e){return Number(e!=1)}},nn:{name:"Norwegian Nynorsk",numbers:[1,2],plurals:function(e){return Number(e!=1)}},no:{name:"Norwegian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},nso:{name:"Northern Sotho",numbers:[1,2],plurals:function(e){return Number(e!=1)}},oc:{name:"Occitan",numbers:[1,2],plurals:function(e){return Number(e>1)}},or:{name:"Oriya",numbers:[2,1],plurals:function(e){return Number(e!=1)}},pa:{name:"Punjabi",numbers:[1,2],plurals:function(e){return Number(e!=1)}},pap:{name:"Papiamento",numbers:[1,2],plurals:function(e){return Number(e!=1)}},pl:{name:"Polish",numbers:[1,2,5],plurals:function(e){return Number(e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},pms:{name:"Piemontese",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ps:{name:"Pashto",numbers:[1,2],plurals:function(e){return Number(e!=1)}},pt:{name:"Portuguese",numbers:[1,2],plurals:function(e){return Number(e!=1)}},pt_br:{name:"Brazilian Portuguese",numbers:[1,2],plurals:function(e){return Number(e!=1)}},rm:{name:"Romansh",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ro:{name:"Romanian",numbers:[1,2,20],plurals:function(e){return Number(e==1?0:e===0||e%100>0&&e%100<20?1:2)}},ru:{name:"Russian",numbers:[1,2,5],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},sah:{name:"Yakut",numbers:[1],plurals:function(e){return 0}},sco:{name:"Scots",numbers:[1,2],plurals:function(e){return Number(e!=1)}},se:{name:"Northern Sami",numbers:[1,2],plurals:function(e){return Number(e!=1)}},si:{name:"Sinhala",numbers:[1,2],plurals:function(e){return Number(e!=1)}},sk:{name:"Slovak",numbers:[1,2,5],plurals:function(e){return Number(e==1?0:e>=2&&e<=4?1:2)}},sl:{name:"Slovenian",numbers:[5,1,2,3],plurals:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)}},so:{name:"Somali",numbers:[1,2],plurals:function(e){return Number(e!=1)}},son:{name:"Songhay",numbers:[1,2],plurals:function(e){return Number(e!=1)}},sq:{name:"Albanian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},sr:{name:"Serbian",numbers:[1,2,5],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},su:{name:"Sundanese",numbers:[1],plurals:function(e){return 0}},sv:{name:"Swedish",numbers:[1,2],plurals:function(e){return Number(e!=1)}},sw:{name:"Swahili",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ta:{name:"Tamil",numbers:[1,2],plurals:function(e){return Number(e!=1)}},te:{name:"Telugu",numbers:[1,2],plurals:function(e){return Number(e!=1)}},tg:{name:"Tajik",numbers:[1,2],plurals:function(e){return Number(e>1)}},th:{name:"Thai",numbers:[1],plurals:function(e){return 0}},ti:{name:"Tigrinya",numbers:[1,2],plurals:function(e){return Number(e>1)}},tk:{name:"Turkmen",numbers:[1,2],plurals:function(e){return Number(e!=1)}},tr:{name:"Turkish",numbers:[1,2],plurals:function(e){return Number(e>1)}},tt:{name:"Tatar",numbers:[1],plurals:function(e){return 0}},ug:{name:"Uyghur",numbers:[1],plurals:function(e){return 0}},uk:{name:"Ukrainian",numbers:[1,2,5],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},ur:{name:"Urdu",numbers:[1,2],plurals:function(e){return Number(e!=1)}},uz:{name:"Uzbek",numbers:[1,2],plurals:function(e){return Number(e>1)}},vi:{name:"Vietnamese",numbers:[1],plurals:function(e){return 0}},wa:{name:"Walloon",numbers:[1,2],plurals:function(e){return Number(e>1)}},wo:{name:"Wolof",numbers:[1],plurals:function(e){return 0}},yo:{name:"Yoruba",numbers:[1,2],plurals:function(e){return Number(e!=1)}},zh:{name:"Chinese",numbers:[1],plurals:function(e){return 0}}},addRule:function(e,t){F.rules[e]=t},setCurrentLng:function(e){if(!F.currentRule||F.currentRule.lng!==e){var t=e.split("-")
F.currentRule={lng:e,rule:F.rules[t[0]]}}},get:function(e,t){var n=e.split("-")
function i(t,n){var i
if(F.currentRule&&F.currentRule.lng===e){i=F.currentRule.rule}else{i=F.rules[t]}if(i){var r=i.plurals(n)
var s=i.numbers[r]
if(i.numbers.length===2&&i.numbers[0]===1){if(s===2){s=-1}else if(s===1){s=1}}return s}else{return n===1?"1":"-1"}}return i(n[0],t)}}
var H={}
var $=function(e,t){H[e]=t}
var z=function(){function e(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function t(e,t){for(var n=[];t>0;n[--t]=e){}return n.join("")}var n=function(){if(!n.cache.hasOwnProperty(arguments[0])){n.cache[arguments[0]]=n.parse(arguments[0])}return n.format.call(null,n.cache[arguments[0]],arguments)}
n.format=function(n,i){var r=1,s=n.length,a="",o,l=[],u,f,c,h,d,p
for(u=0;u<s;u++){a=e(n[u])
if(a==="string"){l.push(n[u])}else if(a==="array"){c=n[u]
if(c[2]){o=i[r]
for(f=0;f<c[2].length;f++){if(!o.hasOwnProperty(c[2][f])){throw z('[sprintf] property "%s" does not exist',c[2][f])}o=o[c[2][f]]}}else if(c[1]){o=i[c[1]]}else{o=i[r++]}if(/[^s]/.test(c[8])&&e(o)!="number"){throw z("[sprintf] expecting number but found %s",e(o))}switch(c[8]){case"b":o=o.toString(2)
break
case"c":o=String.fromCharCode(o)
break
case"d":o=parseInt(o,10)
break
case"e":o=c[7]?o.toExponential(c[7]):o.toExponential()
break
case"f":o=c[7]?parseFloat(o).toFixed(c[7]):parseFloat(o)
break
case"o":o=o.toString(8)
break
case"s":o=(o=String(o))&&c[7]?o.substring(0,c[7]):o
break
case"u":o=Math.abs(o)
break
case"x":o=o.toString(16)
break
case"X":o=o.toString(16).toUpperCase()
break}o=/[def]/.test(c[8])&&c[3]&&o>=0?"+"+o:o
d=c[4]?c[4]=="0"?"0":c[4].charAt(1):" "
p=c[6]-String(o).length
h=c[6]?t(d,p):""
l.push(c[5]?o+h:h+o)}}return l.join("")}
n.cache={}
n.parse=function(e){var t=e,n=[],i=[],r=0
while(t){if((n=/^[^\x25]+/.exec(t))!==null){i.push(n[0])}else if((n=/^\x25{2}/.exec(t))!==null){i.push("%")}else if((n=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t))!==null){if(n[2]){r|=1
var s=[],a=n[2],o=[]
if((o=/^([a-z_][a-z_\d]*)/i.exec(a))!==null){s.push(o[1])
while((a=a.substring(o[0].length))!==""){if((o=/^\.([a-z_][a-z_\d]*)/i.exec(a))!==null){s.push(o[1])}else if((o=/^\[(\d+)\]/.exec(a))!==null){s.push(o[1])}else{throw"[sprintf] huh?"}}}else{throw"[sprintf] huh?"}n[2]=s}else{r|=2}if(r===3){throw"[sprintf] mixing positional and named placeholders is not (yet) supported"}i.push(n)}else{throw"[sprintf] huh?"}t=t.substring(n[0].length)}return i}
return n}()
var W=function(e,t){t.unshift(e)
return z.apply(null,t)}
$("sprintf",function(e,t,n){if(!n.sprintf)return e
if(Object.prototype.toString.apply(n.sprintf)==="[object Array]"){return W(e,n.sprintf)}else if(typeof n.sprintf==="object"){return z(e,n.sprintf)}return e})
n.init=g
n.setLng=M
n.preload=_
n.addResourceBundle=y
n.removeResourceBundle=b
n.loadNamespace=x
n.loadNamespaces=k
n.setDefaultNamespace=w
n.t=Y
n.translate=Y
n.exists=A
n.detectLanguage=v.detectLanguage
n.pluralExtensions=F
n.sync=R
n.functions=v
n.lng=T
n.addPostProcessor=$
n.options=l})();(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e}else{e(jQuery)}})(function(e){var t=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],n="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice,r,s
if(e.event.fixHooks){for(var a=t.length;a;){e.event.fixHooks[t[--a]]=e.event.mouseHooks}}var o=e.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener){for(var t=n.length;t;){this.addEventListener(n[--t],l,false)}}else{this.onmousewheel=l}e.data(this,"mousewheel-line-height",o.getLineHeight(this))
e.data(this,"mousewheel-page-height",o.getPageHeight(this))},teardown:function(){if(this.removeEventListener){for(var t=n.length;t;){this.removeEventListener(n[--t],l,false)}}else{this.onmousewheel=null}e.removeData(this,"mousewheel-line-height")
e.removeData(this,"mousewheel-page-height")},getLineHeight:function(t){var n=e(t),i=n["offsetParent"in e.fn?"offsetParent":"parent"]()
if(!i.length){i=e("body")}return parseInt(i.css("fontSize"),10)||parseInt(n.css("fontSize"),10)||16},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:true,normalizeOffset:true}}
e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})
function l(t){var n=t||window.event,a=i.call(arguments,1),l=0,c=0,h=0,d=0,p=0,m=0
t=e.event.fix(n)
t.type="mousewheel"
if("detail"in n){h=n.detail*-1}if("wheelDelta"in n){h=n.wheelDelta}if("wheelDeltaY"in n){h=n.wheelDeltaY}if("wheelDeltaX"in n){c=n.wheelDeltaX*-1}if("axis"in n&&n.axis===n.HORIZONTAL_AXIS){c=h*-1
h=0}l=h===0?c:h
if("deltaY"in n){h=n.deltaY*-1
l=h}if("deltaX"in n){c=n.deltaX
if(h===0){l=c*-1}}if(h===0&&c===0){return}if(n.deltaMode===1){var v=e.data(this,"mousewheel-line-height")
l*=v
h*=v
c*=v}else if(n.deltaMode===2){var g=e.data(this,"mousewheel-page-height")
l*=g
h*=g
c*=g}d=Math.max(Math.abs(h),Math.abs(c))
if(!s||d<s){s=d
if(f(n,d)){s/=40}}if(f(n,d)){l/=40
c/=40
h/=40}l=Math[l>=1?"floor":"ceil"](l/s)
c=Math[c>=1?"floor":"ceil"](c/s)
h=Math[h>=1?"floor":"ceil"](h/s)
if(o.settings.normalizeOffset&&this.getBoundingClientRect){var _=this.getBoundingClientRect()
p=t.clientX-_.left
m=t.clientY-_.top}t.deltaX=c
t.deltaY=h
t.deltaFactor=s
t.offsetX=p
t.offsetY=m
t.deltaMode=0
a.unshift(t,l,c,h)
if(r){clearTimeout(r)}r=setTimeout(u,200)
return(e.event.dispatch||e.event.handle).apply(this,a)}function u(){s=null}function f(e,t){return o.settings.adjustOldDeltas&&e.type==="mousewheel"&&t%120===0}});(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],function(t){return e(t)})}else if(typeof module==="object"&&typeof module.exports==="object"){module.exports=e(require("jquery"))}else{e(window.jQuery)}})(function(e){"use strict"
function t(e){if(e===undefined){e=window.navigator.userAgent}e=e.toLowerCase()
var t=/(edge)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(chrome)[ \/]([\w.]+)/.exec(e)||/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[]
var n=/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(windows phone)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]
var i={},r={browser:t[5]||t[3]||t[1]||"",version:t[2]||t[4]||"0",versionNumber:t[4]||t[2]||"0",platform:n[0]||""}
if(r.browser){i[r.browser]=true
i.version=r.version
i.versionNumber=parseInt(r.versionNumber,10)}if(r.platform){i[r.platform]=true}if(i.android||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"]){i.mobile=true}if(i.cros||i.mac||i.linux||i.win){i.desktop=true}if(i.chrome||i.opr||i.safari){i.webkit=true}if(i.rv||i.edge){var s="msie"
r.browser=s
i[s]=true}if(i.safari&&i.blackberry){var a="blackberry"
r.browser=a
i[a]=true}if(i.safari&&i.playbook){var o="playbook"
r.browser=o
i[o]=true}if(i.bb){var l="blackberry"
r.browser=l
i[l]=true}if(i.opr){var u="opera"
r.browser=u
i[u]=true}if(i.safari&&i.android){var f="android"
r.browser=f
i[f]=true}if(i.safari&&i.kindle){var c="kindle"
r.browser=c
i[c]=true}if(i.safari&&i.silk){var h="silk"
r.browser=h
i[h]=true}i.name=r.browser
i.platform=r.platform
return i}window.jQBrowser=t(window.navigator.userAgent)
window.jQBrowser.uaMatch=t
if(e){e.browser=window.jQBrowser}return window.jQBrowser})
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e()
else if("function"==typeof define&&define.amd)define([],e)
else{var t
"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.jsondiffpatch=e()}}(function(){var e,t,n
return function e(t,n,i){function r(a,o){if(!n[a]){if(!t[a]){var l=typeof require=="function"&&require
if(!o&&l)return l(a,!0)
if(s)return s(a,!0)
var u=new Error("Cannot find module '"+a+"'")
throw u.code="MODULE_NOT_FOUND",u}var f=n[a]={exports:{}}
t[a][0].call(f.exports,function(e){var n=t[a][1][e]
return r(n?n:e)},f,f.exports,e,t,n,i)}return n[a].exports}var s=typeof require=="function"&&require
for(var a=0;a<i.length;a++)r(i[a])
return r}({1:[function(require,e,t){var n=require("./environment")
if(n.isBrowser){window.diff_match_patch=require("../public/external/diff_match_patch_uncompressed")}e.exports=require("./main")},{"../public/external/diff_match_patch_uncompressed":2,"./environment":10,"./main":17}],2:[function(require,e,t){function n(){this.Diff_Timeout=1
this.Diff_EditCost=4
this.Match_Threshold=.5
this.Match_Distance=1e3
this.Patch_DeleteThreshold=.5
this.Patch_Margin=4
this.Match_MaxBits=32}var i=-1
var r=1
var s=0
n.Diff
n.prototype.diff_main=function(e,t,n,i){if(typeof i=="undefined"){if(this.Diff_Timeout<=0){i=Number.MAX_VALUE}else{i=(new Date).getTime()+this.Diff_Timeout*1e3}}var r=i
if(e==null||t==null){throw new Error("Null input. (diff_main)")}if(e==t){if(e){return[[s,e]]}return[]}if(typeof n=="undefined"){n=true}var a=n
var o=this.diff_commonPrefix(e,t)
var l=e.substring(0,o)
e=e.substring(o)
t=t.substring(o)
o=this.diff_commonSuffix(e,t)
var u=e.substring(e.length-o)
e=e.substring(0,e.length-o)
t=t.substring(0,t.length-o)
var f=this.diff_compute_(e,t,a,r)
if(l){f.unshift([s,l])}if(u){f.push([s,u])}this.diff_cleanupMerge(f)
return f}
n.prototype.diff_compute_=function(e,t,n,a){var o
if(!e){return[[r,t]]}if(!t){return[[i,e]]}var l=e.length>t.length?e:t
var u=e.length>t.length?t:e
var f=l.indexOf(u)
if(f!=-1){o=[[r,l.substring(0,f)],[s,u],[r,l.substring(f+u.length)]]
if(e.length>t.length){o[0][0]=o[2][0]=i}return o}if(u.length==1){return[[i,e],[r,t]]}l=u=null
var c=this.diff_halfMatch_(e,t)
if(c){var h=c[0]
var d=c[1]
var p=c[2]
var m=c[3]
var v=c[4]
var g=this.diff_main(h,p,n,a)
var _=this.diff_main(d,m,n,a)
return g.concat([[s,v]],_)}if(n&&e.length>100&&t.length>100){return this.diff_lineMode_(e,t,a)}return this.diff_bisect_(e,t,a)}
n.prototype.diff_lineMode_=function(e,t,n){var a=this.diff_linesToChars_(e,t)
e=a[0]
t=a[1]
var o=a[2]
var l=this.diff_bisect_(e,t,n)
this.diff_charsToLines_(l,o)
this.diff_cleanupSemantic(l)
l.push([s,""])
var u=0
var f=0
var c=0
var h=""
var d=""
while(u<l.length){switch(l[u][0]){case r:c++
d+=l[u][1]
break
case i:f++
h+=l[u][1]
break
case s:if(f>=1&&c>=1){var a=this.diff_main(h,d,false,n)
l.splice(u-f-c,f+c)
u=u-f-c
for(var p=a.length-1;p>=0;p--){l.splice(u,0,a[p])}u=u+a.length}c=0
f=0
h=""
d=""
break}u++}l.pop()
return l}
n.prototype.diff_bisect_=function(e,t,n){var s=e.length
var a=t.length
var o=Math.ceil((s+a)/2)
var l=o
var u=2*o
var f=new Array(u)
var c=new Array(u)
for(var h=0;h<u;h++){f[h]=-1
c[h]=-1}f[l+1]=0
c[l+1]=0
var d=s-a
var p=d%2!=0
var m=0
var v=0
var g=0
var _=0
for(var y=0;y<o;y++){if((new Date).getTime()>n){break}for(var b=-y+m;b<=y-v;b+=2){var w=l+b
var x
if(b==-y||b!=y&&f[w-1]<f[w+1]){x=f[w+1]}else{x=f[w-1]+1}var k=x-b
while(x<s&&k<a&&e.charAt(x)==t.charAt(k)){x++
k++}f[w]=x
if(x>s){v+=2}else if(k>a){m+=2}else if(p){var M=l+d-b
if(M>=0&&M<u&&c[M]!=-1){var T=s-c[M]
if(x>=T){return this.diff_bisectSplit_(e,t,x,k,n)}}}}for(var L=-y+g;L<=y-_;L+=2){var M=l+L
var T
if(L==-y||L!=y&&c[M-1]<c[M+1]){T=c[M+1]}else{T=c[M-1]+1}var S=T-L
while(T<s&&S<a&&e.charAt(s-T-1)==t.charAt(a-S-1)){T++
S++}c[M]=T
if(T>s){_+=2}else if(S>a){g+=2}else if(!p){var w=l+d-L
if(w>=0&&w<u&&f[w]!=-1){var x=f[w]
var k=l+x-w
T=s-T
if(x>=T){return this.diff_bisectSplit_(e,t,x,k,n)}}}}}return[[i,e],[r,t]]}
n.prototype.diff_bisectSplit_=function(e,t,n,i,r){var s=e.substring(0,n)
var a=t.substring(0,i)
var o=e.substring(n)
var l=t.substring(i)
var u=this.diff_main(s,a,false,r)
var f=this.diff_main(o,l,false,r)
return u.concat(f)}
n.prototype.diff_linesToChars_=function(e,t){var n=[]
var i={}
n[0]=""
function r(e){var t=""
var r=0
var s=-1
var a=n.length
while(s<e.length-1){s=e.indexOf("\n",r)
if(s==-1){s=e.length-1}var o=e.substring(r,s+1)
r=s+1
if(i.hasOwnProperty?i.hasOwnProperty(o):i[o]!==undefined){t+=String.fromCharCode(i[o])}else{t+=String.fromCharCode(a)
i[o]=a
n[a++]=o}}return t}var s=r(e)
var a=r(t)
return[s,a,n]}
n.prototype.diff_charsToLines_=function(e,t){for(var n=0;n<e.length;n++){var i=e[n][1]
var r=[]
for(var s=0;s<i.length;s++){r[s]=t[i.charCodeAt(s)]}e[n][1]=r.join("")}}
n.prototype.diff_commonPrefix=function(e,t){if(!e||!t||e.charAt(0)!=t.charAt(0)){return 0}var n=0
var i=Math.min(e.length,t.length)
var r=i
var s=0
while(n<r){if(e.substring(s,r)==t.substring(s,r)){n=r
s=n}else{i=r}r=Math.floor((i-n)/2+n)}return r}
n.prototype.diff_commonSuffix=function(e,t){if(!e||!t||e.charAt(e.length-1)!=t.charAt(t.length-1)){return 0}var n=0
var i=Math.min(e.length,t.length)
var r=i
var s=0
while(n<r){if(e.substring(e.length-r,e.length-s)==t.substring(t.length-r,t.length-s)){n=r
s=n}else{i=r}r=Math.floor((i-n)/2+n)}return r}
n.prototype.diff_commonOverlap_=function(e,t){var n=e.length
var i=t.length
if(n==0||i==0){return 0}if(n>i){e=e.substring(n-i)}else if(n<i){t=t.substring(0,n)}var r=Math.min(n,i)
if(e==t){return r}var s=0
var a=1
while(true){var o=e.substring(r-a)
var l=t.indexOf(o)
if(l==-1){return s}a+=l
if(l==0||e.substring(r-a)==t.substring(0,a)){s=a
a++}}}
n.prototype.diff_halfMatch_=function(e,t){if(this.Diff_Timeout<=0){return null}var n=e.length>t.length?e:t
var i=e.length>t.length?t:e
if(n.length<4||i.length*2<n.length){return null}var r=this
function s(e,t,n){var i=e.substring(n,n+Math.floor(e.length/4))
var s=-1
var a=""
var o,l,u,f
while((s=t.indexOf(i,s+1))!=-1){var c=r.diff_commonPrefix(e.substring(n),t.substring(s))
var h=r.diff_commonSuffix(e.substring(0,n),t.substring(0,s))
if(a.length<h+c){a=t.substring(s-h,s)+t.substring(s,s+c)
o=e.substring(0,n-h)
l=e.substring(n+c)
u=t.substring(0,s-h)
f=t.substring(s+c)}}if(a.length*2>=e.length){return[o,l,u,f,a]}else{return null}}var a=s(n,i,Math.ceil(n.length/4))
var o=s(n,i,Math.ceil(n.length/2))
var l
if(!a&&!o){return null}else if(!o){l=a}else if(!a){l=o}else{l=a[4].length>o[4].length?a:o}var u,f,c,h
if(e.length>t.length){u=l[0]
f=l[1]
c=l[2]
h=l[3]}else{c=l[0]
h=l[1]
u=l[2]
f=l[3]}var d=l[4]
return[u,f,c,h,d]}
n.prototype.diff_cleanupSemantic=function(e){var t=false
var n=[]
var a=0
var o=null
var l=0
var u=0
var f=0
var c=0
var h=0
while(l<e.length){if(e[l][0]==s){n[a++]=l
u=c
f=h
c=0
h=0
o=e[l][1]}else{if(e[l][0]==r){c+=e[l][1].length}else{h+=e[l][1].length}if(o!==null&&o.length<=Math.max(u,f)&&o.length<=Math.max(c,h)){e.splice(n[a-1],0,[i,o])
e[n[a-1]+1][0]=r
a--
a--
l=a>0?n[a-1]:-1
u=0
f=0
c=0
h=0
o=null
t=true}}l++}if(t){this.diff_cleanupMerge(e)}this.diff_cleanupSemanticLossless(e)
l=1
while(l<e.length){if(e[l-1][0]==i&&e[l][0]==r){var d=e[l-1][1]
var p=e[l][1]
var m=this.diff_commonOverlap_(d,p)
if(m>=d.length/2||m>=p.length/2){e.splice(l,0,[s,p.substring(0,m)])
e[l-1][1]=d.substring(0,d.length-m)
e[l+1][1]=p.substring(m)
l++}l++}l++}}
n.prototype.diff_cleanupSemanticLossless=function(e){var t=/[^a-zA-Z0-9]/
var n=/\s/
var i=/[\r\n]/
var r=/\n\r?\n$/
var a=/^\r?\n\r?\n/
function o(e,s){if(!e||!s){return 5}var o=0
if(e.charAt(e.length-1).match(t)||s.charAt(0).match(t)){o++
if(e.charAt(e.length-1).match(n)||s.charAt(0).match(n)){o++
if(e.charAt(e.length-1).match(i)||s.charAt(0).match(i)){o++
if(e.match(r)||s.match(a)){o++}}}}return o}var l=1
while(l<e.length-1){if(e[l-1][0]==s&&e[l+1][0]==s){var u=e[l-1][1]
var f=e[l][1]
var c=e[l+1][1]
var h=this.diff_commonSuffix(u,f)
if(h){var d=f.substring(f.length-h)
u=u.substring(0,u.length-h)
f=d+f.substring(0,f.length-h)
c=d+c}var p=u
var m=f
var v=c
var g=o(u,f)+o(f,c)
while(f.charAt(0)===c.charAt(0)){u+=f.charAt(0)
f=f.substring(1)+c.charAt(0)
c=c.substring(1)
var _=o(u,f)+o(f,c)
if(_>=g){g=_
p=u
m=f
v=c}}if(e[l-1][1]!=p){if(p){e[l-1][1]=p}else{e.splice(l-1,1)
l--}e[l][1]=m
if(v){e[l+1][1]=v}else{e.splice(l+1,1)
l--}}}l++}}
n.prototype.diff_cleanupEfficiency=function(e){var t=false
var n=[]
var a=0
var o=""
var l=0
var u=false
var f=false
var c=false
var h=false
while(l<e.length){if(e[l][0]==s){if(e[l][1].length<this.Diff_EditCost&&(c||h)){n[a++]=l
u=c
f=h
o=e[l][1]}else{a=0
o=""}c=h=false}else{if(e[l][0]==i){h=true}else{c=true}if(o&&(u&&f&&c&&h||o.length<this.Diff_EditCost/2&&u+f+c+h==3)){e.splice(n[a-1],0,[i,o])
e[n[a-1]+1][0]=r
a--
o=""
if(u&&f){c=h=true
a=0}else{a--
l=a>0?n[a-1]:-1
c=h=false}t=true}}l++}if(t){this.diff_cleanupMerge(e)}}
n.prototype.diff_cleanupMerge=function(e){e.push([s,""])
var t=0
var n=0
var a=0
var o=""
var l=""
var u
while(t<e.length){switch(e[t][0]){case r:a++
l+=e[t][1]
t++
break
case i:n++
o+=e[t][1]
t++
break
case s:if(n+a>1){if(n!==0&&a!==0){u=this.diff_commonPrefix(l,o)
if(u!==0){if(t-n-a>0&&e[t-n-a-1][0]==s){e[t-n-a-1][1]+=l.substring(0,u)}else{e.splice(0,0,[s,l.substring(0,u)])
t++}l=l.substring(u)
o=o.substring(u)}u=this.diff_commonSuffix(l,o)
if(u!==0){e[t][1]=l.substring(l.length-u)+e[t][1]
l=l.substring(0,l.length-u)
o=o.substring(0,o.length-u)}}if(n===0){e.splice(t-n-a,n+a,[r,l])}else if(a===0){e.splice(t-n-a,n+a,[i,o])}else{e.splice(t-n-a,n+a,[i,o],[r,l])}t=t-n-a+(n?1:0)+(a?1:0)+1}else if(t!==0&&e[t-1][0]==s){e[t-1][1]+=e[t][1]
e.splice(t,1)}else{t++}a=0
n=0
o=""
l=""
break}}if(e[e.length-1][1]===""){e.pop()}var f=false
t=1
while(t<e.length-1){if(e[t-1][0]==s&&e[t+1][0]==s){if(e[t][1].substring(e[t][1].length-e[t-1][1].length)==e[t-1][1]){e[t][1]=e[t-1][1]+e[t][1].substring(0,e[t][1].length-e[t-1][1].length)
e[t+1][1]=e[t-1][1]+e[t+1][1]
e.splice(t-1,1)
f=true}else if(e[t][1].substring(0,e[t+1][1].length)==e[t+1][1]){e[t-1][1]+=e[t+1][1]
e[t][1]=e[t][1].substring(e[t+1][1].length)+e[t+1][1]
e.splice(t+1,1)
f=true}}t++}if(f){this.diff_cleanupMerge(e)}}
n.prototype.diff_xIndex=function(e,t){var n=0
var s=0
var a=0
var o=0
var l
for(l=0;l<e.length;l++){if(e[l][0]!==r){n+=e[l][1].length}if(e[l][0]!==i){s+=e[l][1].length}if(n>t){break}a=n
o=s}if(e.length!=l&&e[l][0]===i){return o}return o+(t-a)}
n.prototype.diff_prettyHtml=function(e){var t=[]
var n=0
var a=/&/g
var o=/</g
var l=/>/g
var u=/\n/g
for(var f=0;f<e.length;f++){var c=e[f][0]
var h=e[f][1]
var d=h.replace(a,"&amp;").replace(o,"&lt;").replace(l,"&gt;").replace(u,"&para;<br>")
switch(c){case r:t[f]='<ins style="background:#e6ffe6;">'+d+"</ins>"
break
case i:t[f]='<del style="background:#ffe6e6;">'+d+"</del>"
break
case s:t[f]="<span>"+d+"</span>"
break}if(c!==i){n+=h.length}}return t.join("")}
n.prototype.diff_text1=function(e){var t=[]
for(var n=0;n<e.length;n++){if(e[n][0]!==r){t[n]=e[n][1]}}return t.join("")}
n.prototype.diff_text2=function(e){var t=[]
for(var n=0;n<e.length;n++){if(e[n][0]!==i){t[n]=e[n][1]}}return t.join("")}
n.prototype.diff_levenshtein=function(e){var t=0
var n=0
var a=0
for(var o=0;o<e.length;o++){var l=e[o][0]
var u=e[o][1]
switch(l){case r:n+=u.length
break
case i:a+=u.length
break
case s:t+=Math.max(n,a)
n=0
a=0
break}}t+=Math.max(n,a)
return t}
n.prototype.diff_toDelta=function(e){var t=[]
for(var n=0;n<e.length;n++){switch(e[n][0]){case r:t[n]="+"+encodeURI(e[n][1])
break
case i:t[n]="-"+e[n][1].length
break
case s:t[n]="="+e[n][1].length
break}}return t.join("\t").replace(/%20/g," ")}
n.prototype.diff_fromDelta=function(e,t){var n=[]
var a=0
var o=0
var l=t.split(/\t/g)
for(var u=0;u<l.length;u++){var f=l[u].substring(1)
switch(l[u].charAt(0)){case"+":try{n[a++]=[r,decodeURI(f)]}catch(e){throw new Error("Illegal escape in diff_fromDelta: "+f)}break
case"-":case"=":var c=parseInt(f,10)
if(isNaN(c)||c<0){throw new Error("Invalid number in diff_fromDelta: "+f)}var h=e.substring(o,o+=c)
if(l[u].charAt(0)=="="){n[a++]=[s,h]}else{n[a++]=[i,h]}break
default:if(l[u]){throw new Error("Invalid diff operation in diff_fromDelta: "+l[u])}}}if(o!=e.length){throw new Error("Delta length ("+o+") does not equal source text length ("+e.length+").")}return n}
n.prototype.match_main=function(e,t,n){if(e==null||t==null||n==null){throw new Error("Null input. (match_main)")}n=Math.max(0,Math.min(n,e.length))
if(e==t){return 0}else if(!e.length){return-1}else if(e.substring(n,n+t.length)==t){return n}else{return this.match_bitap_(e,t,n)}}
n.prototype.match_bitap_=function(e,t,n){if(t.length>this.Match_MaxBits){throw new Error("Pattern too long for this browser.")}var i=this.match_alphabet_(t)
var r=this
function s(e,i){var s=e/t.length
var a=Math.abs(n-i)
if(!r.Match_Distance){return a?1:s}return s+a/r.Match_Distance}var a=this.Match_Threshold
var o=e.indexOf(t,n)
if(o!=-1){a=Math.min(s(0,o),a)
o=e.lastIndexOf(t,n+t.length)
if(o!=-1){a=Math.min(s(0,o),a)}}var l=1<<t.length-1
o=-1
var u,f
var c=t.length+e.length
var h
for(var d=0;d<t.length;d++){u=0
f=c
while(u<f){if(s(d,n+f)<=a){u=f}else{c=f}f=Math.floor((c-u)/2+u)}c=f
var p=Math.max(1,n-f+1)
var m=Math.min(n+f,e.length)+t.length
var v=Array(m+2)
v[m+1]=(1<<d)-1
for(var g=m;g>=p;g--){var _=i[e.charAt(g-1)]
if(d===0){v[g]=(v[g+1]<<1|1)&_}else{v[g]=(v[g+1]<<1|1)&_|((h[g+1]|h[g])<<1|1)|h[g+1]}if(v[g]&l){var y=s(d,g-1)
if(y<=a){a=y
o=g-1
if(o>n){p=Math.max(1,2*n-o)}else{break}}}}if(s(d+1,n)>a){break}h=v}return o}
n.prototype.match_alphabet_=function(e){var t={}
for(var n=0;n<e.length;n++){t[e.charAt(n)]=0}for(var n=0;n<e.length;n++){t[e.charAt(n)]|=1<<e.length-n-1}return t}
n.prototype.patch_addContext_=function(e,t){if(t.length==0){return}var n=t.substring(e.start2,e.start2+e.length1)
var i=0
while(t.indexOf(n)!=t.lastIndexOf(n)&&n.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin){i+=this.Patch_Margin
n=t.substring(e.start2-i,e.start2+e.length1+i)}i+=this.Patch_Margin
var r=t.substring(e.start2-i,e.start2)
if(r){e.diffs.unshift([s,r])}var a=t.substring(e.start2+e.length1,e.start2+e.length1+i)
if(a){e.diffs.push([s,a])}e.start1-=r.length
e.start2-=r.length
e.length1+=r.length+a.length
e.length2+=r.length+a.length}
n.prototype.patch_make=function(e,t,a){var o,l
if(typeof e=="string"&&typeof t=="string"&&typeof a=="undefined"){o=e
l=this.diff_main(o,t,true)
if(l.length>2){this.diff_cleanupSemantic(l)
this.diff_cleanupEfficiency(l)}}else if(e&&typeof e=="object"&&typeof t=="undefined"&&typeof a=="undefined"){l=e
o=this.diff_text1(l)}else if(typeof e=="string"&&t&&typeof t=="object"&&typeof a=="undefined"){o=e
l=t}else if(typeof e=="string"&&typeof t=="string"&&a&&typeof a=="object"){o=e
l=a}else{throw new Error("Unknown call format to patch_make.")}if(l.length===0){return[]}var u=[]
var f=new n.patch_obj
var c=0
var h=0
var d=0
var p=o
var m=o
for(var v=0;v<l.length;v++){var g=l[v][0]
var _=l[v][1]
if(!c&&g!==s){f.start1=h
f.start2=d}switch(g){case r:f.diffs[c++]=l[v]
f.length2+=_.length
m=m.substring(0,d)+_+m.substring(d)
break
case i:f.length1+=_.length
f.diffs[c++]=l[v]
m=m.substring(0,d)+m.substring(d+_.length)
break
case s:if(_.length<=2*this.Patch_Margin&&c&&l.length!=v+1){f.diffs[c++]=l[v]
f.length1+=_.length
f.length2+=_.length}else if(_.length>=2*this.Patch_Margin){if(c){this.patch_addContext_(f,p)
u.push(f)
f=new n.patch_obj
c=0
p=m
h=d}}break}if(g!==r){h+=_.length}if(g!==i){d+=_.length}}if(c){this.patch_addContext_(f,p)
u.push(f)}return u}
n.prototype.patch_deepCopy=function(e){var t=[]
for(var i=0;i<e.length;i++){var r=e[i]
var s=new n.patch_obj
s.diffs=[]
for(var a=0;a<r.diffs.length;a++){s.diffs[a]=r.diffs[a].slice()}s.start1=r.start1
s.start2=r.start2
s.length1=r.length1
s.length2=r.length2
t[i]=s}return t}
n.prototype.patch_apply=function(e,t){if(e.length==0){return[t,[]]}e=this.patch_deepCopy(e)
var n=this.patch_addPadding(e)
t=n+t+n
this.patch_splitMax(e)
var a=0
var o=[]
for(var l=0;l<e.length;l++){var u=e[l].start2+a
var f=this.diff_text1(e[l].diffs)
var c
var h=-1
if(f.length>this.Match_MaxBits){c=this.match_main(t,f.substring(0,this.Match_MaxBits),u)
if(c!=-1){h=this.match_main(t,f.substring(f.length-this.Match_MaxBits),u+f.length-this.Match_MaxBits)
if(h==-1||c>=h){c=-1}}}else{c=this.match_main(t,f,u)}if(c==-1){o[l]=false
a-=e[l].length2-e[l].length1}else{o[l]=true
a=c-u
var d
if(h==-1){d=t.substring(c,c+f.length)}else{d=t.substring(c,h+this.Match_MaxBits)}if(f==d){t=t.substring(0,c)+this.diff_text2(e[l].diffs)+t.substring(c+f.length)}else{var p=this.diff_main(f,d,false)
if(f.length>this.Match_MaxBits&&this.diff_levenshtein(p)/f.length>this.Patch_DeleteThreshold){o[l]=false}else{this.diff_cleanupSemanticLossless(p)
var m=0
var v
for(var g=0;g<e[l].diffs.length;g++){var _=e[l].diffs[g]
if(_[0]!==s){v=this.diff_xIndex(p,m)}if(_[0]===r){t=t.substring(0,c+v)+_[1]+t.substring(c+v)}else if(_[0]===i){t=t.substring(0,c+v)+t.substring(c+this.diff_xIndex(p,m+_[1].length))}if(_[0]!==i){m+=_[1].length}}}}}}t=t.substring(n.length,t.length-n.length)
return[t,o]}
n.prototype.patch_addPadding=function(e){var t=this.Patch_Margin
var n=""
for(var i=1;i<=t;i++){n+=String.fromCharCode(i)}for(var i=0;i<e.length;i++){e[i].start1+=t
e[i].start2+=t}var r=e[0]
var a=r.diffs
if(a.length==0||a[0][0]!=s){a.unshift([s,n])
r.start1-=t
r.start2-=t
r.length1+=t
r.length2+=t}else if(t>a[0][1].length){var o=t-a[0][1].length
a[0][1]=n.substring(a[0][1].length)+a[0][1]
r.start1-=o
r.start2-=o
r.length1+=o
r.length2+=o}r=e[e.length-1]
a=r.diffs
if(a.length==0||a[a.length-1][0]!=s){a.push([s,n])
r.length1+=t
r.length2+=t}else if(t>a[a.length-1][1].length){var o=t-a[a.length-1][1].length
a[a.length-1][1]+=n.substring(0,o)
r.length1+=o
r.length2+=o}return n}
n.prototype.patch_splitMax=function(e){var t=this.Match_MaxBits
for(var a=0;a<e.length;a++){if(e[a].length1>t){var o=e[a]
e.splice(a--,1)
var l=o.start1
var u=o.start2
var f=""
while(o.diffs.length!==0){var c=new n.patch_obj
var h=true
c.start1=l-f.length
c.start2=u-f.length
if(f!==""){c.length1=c.length2=f.length
c.diffs.push([s,f])}while(o.diffs.length!==0&&c.length1<t-this.Patch_Margin){var d=o.diffs[0][0]
var p=o.diffs[0][1]
if(d===r){c.length2+=p.length
u+=p.length
c.diffs.push(o.diffs.shift())
h=false}else if(d===i&&c.diffs.length==1&&c.diffs[0][0]==s&&p.length>2*t){c.length1+=p.length
l+=p.length
h=false
c.diffs.push([d,p])
o.diffs.shift()}else{p=p.substring(0,t-c.length1-this.Patch_Margin)
c.length1+=p.length
l+=p.length
if(d===s){c.length2+=p.length
u+=p.length}else{h=false}c.diffs.push([d,p])
if(p==o.diffs[0][1]){o.diffs.shift()}else{o.diffs[0][1]=o.diffs[0][1].substring(p.length)}}}f=this.diff_text2(c.diffs)
f=f.substring(f.length-this.Patch_Margin)
var m=this.diff_text1(o.diffs).substring(0,this.Patch_Margin)
if(m!==""){c.length1+=m.length
c.length2+=m.length
if(c.diffs.length!==0&&c.diffs[c.diffs.length-1][0]===s){c.diffs[c.diffs.length-1][1]+=m}else{c.diffs.push([s,m])}}if(!h){e.splice(++a,0,c)}}}}}
n.prototype.patch_toText=function(e){var t=[]
for(var n=0;n<e.length;n++){t[n]=e[n]}return t.join("")}
n.prototype.patch_fromText=function(e){var t=[]
if(!e){return t}var a=e.split("\n")
var o=0
var l=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/
while(o<a.length){var u=a[o].match(l)
if(!u){throw new Error("Invalid patch string: "+a[o])}var f=new n.patch_obj
t.push(f)
f.start1=parseInt(u[1],10)
if(u[2]===""){f.start1--
f.length1=1}else if(u[2]=="0"){f.length1=0}else{f.start1--
f.length1=parseInt(u[2],10)}f.start2=parseInt(u[3],10)
if(u[4]===""){f.start2--
f.length2=1}else if(u[4]=="0"){f.length2=0}else{f.start2--
f.length2=parseInt(u[4],10)}o++
while(o<a.length){var c=a[o].charAt(0)
try{var h=decodeURI(a[o].substring(1))}catch(e){throw new Error("Illegal escape in patch_fromText: "+h)}if(c=="-"){f.diffs.push([i,h])}else if(c=="+"){f.diffs.push([r,h])}else if(c==" "){f.diffs.push([s,h])}else if(c=="@"){break}else if(c===""){}else{throw new Error('Invalid patch mode "'+c+'" in: '+h)}o++}}return t}
n.patch_obj=function(){this.diffs=[]
this.start1=null
this.start2=null
this.length1=0
this.length2=0}
n.patch_obj.prototype.toString=function(){var e,t
if(this.length1===0){e=this.start1+",0"}else if(this.length1==1){e=this.start1+1}else{e=this.start1+1+","+this.length1}if(this.length2===0){t=this.start2+",0"}else if(this.length2==1){t=this.start2+1}else{t=this.start2+1+","+this.length2}var n=["@@ -"+e+" +"+t+" @@\n"]
var a
for(var o=0;o<this.diffs.length;o++){switch(this.diffs[o][0]){case r:a="+"
break
case i:a="-"
break
case s:a=" "
break}n[o+1]=a+encodeURI(this.diffs[o][1])+"\n"}return n.join("").replace(/%20/g," ")}
this["diff_match_patch"]=n
this["DIFF_DELETE"]=i
this["DIFF_INSERT"]=r
this["DIFF_EQUAL"]=s},{}],3:[function(require,e,t){var n=typeof Array.isArray==="function"?Array.isArray:function(e){return e instanceof Array}
function i(e){var t=/^\/(.*)\/([gimyu]*)$/.exec(e.toString())
return new RegExp(t[1],t[2])}function r(e){if(typeof e!=="object"){return e}if(e===null){return null}if(n(e)){return e.map(r)}if(e instanceof Date){return new Date(e.getTime())}if(e instanceof RegExp){return i(e)}var t={}
for(var s in e){if(Object.prototype.hasOwnProperty.call(e,s)){t[s]=r(e[s])}}return t}e.exports=r},{}],4:[function(require,e,t){var n=require("../pipe").Pipe
var i=function e(){}
i.prototype.setResult=function(e){this.result=e
this.hasResult=true
return this}
i.prototype.exit=function(){this.exiting=true
return this}
i.prototype.switchTo=function(e,t){if(typeof e==="string"||e instanceof n){this.nextPipe=e}else{this.next=e
if(t){this.nextPipe=t}}return this}
i.prototype.push=function(e,t){e.parent=this
if(typeof t!=="undefined"){e.childName=t}e.root=this.root||this
e.options=e.options||this.options
if(!this.children){this.children=[e]
this.nextAfterChildren=this.next||null
this.next=e}else{this.children[this.children.length-1].next=e
this.children.push(e)}e.next=this
return this}
t.Context=i},{"../pipe":18}],5:[function(require,e,t){var n=require("./context").Context
var i=require("../clone")
var r=function e(t,n){this.left=t
this.right=n
this.pipe="diff"}
r.prototype=new n
r.prototype.setResult=function(e){if(this.options.cloneDiffValues&&typeof e==="object"){var t=typeof this.options.cloneDiffValues==="function"?this.options.cloneDiffValues:i
if(typeof e[0]==="object"){e[0]=t(e[0])}if(typeof e[1]==="object"){e[1]=t(e[1])}}return n.prototype.setResult.apply(this,arguments)}
t.DiffContext=r},{"../clone":3,"./context":4}],6:[function(require,e,t){var n=require("./context").Context
var i=function e(t,n){this.left=t
this.delta=n
this.pipe="patch"}
i.prototype=new n
t.PatchContext=i},{"./context":4}],7:[function(require,e,t){var n=require("./context").Context
var i=function e(t){this.delta=t
this.pipe="reverse"}
i.prototype=new n
t.ReverseContext=i},{"./context":4}],8:[function(require,e,t){e.exports=function e(t,n){var i
if(typeof n==="string"){i=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d*))?(Z|([+\-])(\d{2}):(\d{2}))$/.exec(n)
if(i){return new Date(Date.UTC(+i[1],+i[2]-1,+i[3],+i[4],+i[5],+i[6],+(i[7]||0)))}}return n}},{}],9:[function(require,e,t){var n=require("./processor").Processor
var i=require("./pipe").Pipe
var r=require("./contexts/diff").DiffContext
var s=require("./contexts/patch").PatchContext
var a=require("./contexts/reverse").ReverseContext
var o=require("./clone")
var l=require("./filters/trivial")
var u=require("./filters/nested")
var f=require("./filters/arrays")
var c=require("./filters/dates")
var h=require("./filters/texts")
var d=function e(t){this.processor=new n(t)
this.processor.pipe(new i("diff").append(u.collectChildrenDiffFilter,l.diffFilter,c.diffFilter,h.diffFilter,u.objectsDiffFilter,f.diffFilter).shouldHaveResult())
this.processor.pipe(new i("patch").append(u.collectChildrenPatchFilter,f.collectChildrenPatchFilter,l.patchFilter,h.patchFilter,u.patchFilter,f.patchFilter).shouldHaveResult())
this.processor.pipe(new i("reverse").append(u.collectChildrenReverseFilter,f.collectChildrenReverseFilter,l.reverseFilter,h.reverseFilter,u.reverseFilter,f.reverseFilter).shouldHaveResult())}
d.prototype.options=function(){return this.processor.options.apply(this.processor,arguments)}
d.prototype.diff=function(e,t){return this.processor.process(new r(e,t))}
d.prototype.patch=function(e,t){return this.processor.process(new s(e,t))}
d.prototype.reverse=function(e){return this.processor.process(new a(e))}
d.prototype.unpatch=function(e,t){return this.patch(e,this.reverse(t))}
d.prototype.clone=function(e){return o(e)}
t.DiffPatcher=d},{"./clone":3,"./contexts/diff":5,"./contexts/patch":6,"./contexts/reverse":7,"./filters/arrays":11,"./filters/dates":12,"./filters/nested":14,"./filters/texts":15,"./filters/trivial":16,"./pipe":18,"./processor":19}],10:[function(require,e,t){t.isBrowser=typeof window!=="undefined"},{}],11:[function(require,e,t){var n=require("../contexts/diff").DiffContext
var i=require("../contexts/patch").PatchContext
var r=require("../contexts/reverse").ReverseContext
var s=require("./lcs")
var a=3
var o=typeof Array.isArray==="function"?Array.isArray:function(e){return e instanceof Array}
var l=typeof Array.prototype.indexOf==="function"?function(e,t){return e.indexOf(t)}:function(e,t){var n=e.length
for(var i=0;i<n;i++){if(e[i]===t){return i}}return-1}
function u(e,t,n,i){for(var r=0;r<n;r++){var s=e[r]
for(var a=0;a<i;a++){var o=t[a]
if(r!==a&&s===o){return true}}}}function f(e,t,n,i,r){var s=e[n]
var a=t[i]
if(s===a){return true}if(typeof s!=="object"||typeof a!=="object"){return false}var o=r.objectHash
if(!o){return r.matchByPosition&&n===i}var l
var u
if(typeof n==="number"){r.hashCache1=r.hashCache1||[]
l=r.hashCache1[n]
if(typeof l==="undefined"){r.hashCache1[n]=l=o(s,n)}}else{l=o(s)}if(typeof l==="undefined"){return false}if(typeof i==="number"){r.hashCache2=r.hashCache2||[]
u=r.hashCache2[i]
if(typeof u==="undefined"){r.hashCache2[i]=u=o(a,i)}}else{u=o(a)}if(typeof u==="undefined"){return false}return l===u}var c=function e(t){if(!t.leftIsArray){return}var i={objectHash:t.options&&t.options.objectHash,matchByPosition:t.options&&t.options.matchByPosition}
var r=0
var o=0
var c
var h
var d
var p=t.left
var m=t.right
var v=p.length
var g=m.length
var _
if(v>0&&g>0&&!i.objectHash&&typeof i.matchByPosition!=="boolean"){i.matchByPosition=!u(p,m,v,g)}while(r<v&&r<g&&f(p,m,r,r,i)){c=r
_=new n(t.left[c],t.right[c])
t.push(_,c)
r++}while(o+r<v&&o+r<g&&f(p,m,v-1-o,g-1-o,i)){h=v-1-o
d=g-1-o
_=new n(t.left[h],t.right[d])
t.push(_,d)
o++}var y
if(r+o===v){if(v===g){t.setResult(undefined).exit()
return}y=y||{_t:"a"}
for(c=r;c<g-o;c++){y[c]=[m[c]]}t.setResult(y).exit()
return}if(r+o===g){y=y||{_t:"a"}
for(c=r;c<v-o;c++){y["_"+c]=[p[c],0,0]}t.setResult(y).exit()
return}delete i.hashCache1
delete i.hashCache2
var b=p.slice(r,v-o)
var w=m.slice(r,g-o)
var x=s.get(b,w,f,i)
var k=[]
y=y||{_t:"a"}
for(c=r;c<v-o;c++){if(l(x.indices1,c-r)<0){y["_"+c]=[p[c],0,0]
k.push(c)}}var M=true
if(t.options&&t.options.arrays&&t.options.arrays.detectMove===false){M=false}var T=false
if(t.options&&t.options.arrays&&t.options.arrays.includeValueOnMove){T=true}var L=k.length
for(c=r;c<g-o;c++){var S=l(x.indices2,c-r)
if(S<0){var D=false
if(M&&L>0){for(var C=0;C<L;C++){h=k[C]
if(f(b,w,h-r,c-r,i)){y["_"+h].splice(1,2,c,a)
if(!T){y["_"+h][0]=""}d=c
_=new n(t.left[h],t.right[d])
t.push(_,d)
k.splice(C,1)
D=true
break}}}if(!D){y[c]=[m[c]]}}else{h=x.indices1[S]+r
d=x.indices2[S]+r
_=new n(t.left[h],t.right[d])
t.push(_,d)}}t.setResult(y).exit()}
c.filterName="arrays"
var h={numerically:function(e,t){return e-t},numericallyBy:function(e){return function(t,n){return t[e]-n[e]}}}
var d=function e(t){if(!t.nested){return}if(t.delta._t!=="a"){return}var n,r
var s=t.delta
var o=t.left
var l=[]
var u=[]
var f=[]
for(n in s){if(n!=="_t"){if(n[0]==="_"){if(s[n][2]===0||s[n][2]===a){l.push(parseInt(n.slice(1),10))}else{throw new Error("only removal or move can be applied at original array indices"+", invalid diff type: "+s[n][2])}}else{if(s[n].length===1){u.push({index:parseInt(n,10),value:s[n][0]})}else{f.push({index:parseInt(n,10),delta:s[n]})}}}}l=l.sort(h.numerically)
for(n=l.length-1;n>=0;n--){r=l[n]
var c=s["_"+r]
var d=o.splice(r,1)[0]
if(c[2]===a){u.push({index:c[1],value:d})}}u=u.sort(h.numericallyBy("index"))
var p=u.length
for(n=0;n<p;n++){var m=u[n]
o.splice(m.index,0,m.value)}var v=f.length
var g
if(v>0){for(n=0;n<v;n++){var _=f[n]
g=new i(t.left[_.index],_.delta)
t.push(g,_.index)}}if(!t.children){t.setResult(t.left).exit()
return}t.exit()}
d.filterName="arrays"
var p=function e(t){if(!t||!t.children){return}if(t.delta._t!=="a"){return}var n=t.children.length
var i
for(var r=0;r<n;r++){i=t.children[r]
t.left[i.childName]=i.result}t.setResult(t.left).exit()}
p.filterName="arraysCollectChildren"
var m=function e(t){if(!t.nested){if(t.delta[2]===a){t.newName="_"+t.delta[1]
t.setResult([t.delta[0],parseInt(t.childName.substr(1),10),a]).exit()}return}if(t.delta._t!=="a"){return}var n,i
for(n in t.delta){if(n==="_t"){continue}i=new r(t.delta[n])
t.push(i,n)}t.exit()}
m.filterName="arrays"
var v=function(e,t,n){if(typeof t==="string"&&t[0]==="_"){return parseInt(t.substr(1),10)}else if(o(n)&&n[2]===0){return"_"+t}var i=+t
for(var r in e){var s=e[r]
if(o(s)){if(s[2]===a){var l=parseInt(r.substr(1),10)
var u=s[1]
if(u===+t){return l}if(l<=i&&u>i){i++}else if(l>=i&&u<i){i--}}else if(s[2]===0){var f=parseInt(r.substr(1),10)
if(f<=i){i++}}else if(s.length===1&&r<=i){i--}}}return i}
var g=function e(t){if(!t||!t.children){return}if(t.delta._t!=="a"){return}var n=t.children.length
var i
var r={_t:"a"}
for(var s=0;s<n;s++){i=t.children[s]
var a=i.newName
if(typeof a==="undefined"){a=v(t.delta,i.childName,i.result)}if(r[a]!==i.result){r[a]=i.result}}t.setResult(r).exit()}
g.filterName="arraysCollectChildren"
t.diffFilter=c
t.patchFilter=d
t.collectChildrenPatchFilter=p
t.reverseFilter=m
t.collectChildrenReverseFilter=g},{"../contexts/diff":5,"../contexts/patch":6,"../contexts/reverse":7,"./lcs":13}],12:[function(require,e,t){var n=function e(t){if(t.left instanceof Date){if(t.right instanceof Date){if(t.left.getTime()!==t.right.getTime()){t.setResult([t.left,t.right])}else{t.setResult(undefined)}}else{t.setResult([t.left,t.right])}t.exit()}else if(t.right instanceof Date){t.setResult([t.left,t.right]).exit()}}
n.filterName="dates"
t.diffFilter=n},{}],13:[function(require,e,t){var n=function(e,t,n,i){return e[n]===t[i]}
var i=function(e,t,n,i){var r=e.length
var s=t.length
var a,o
var l=[r+1]
for(a=0;a<r+1;a++){l[a]=[s+1]
for(o=0;o<s+1;o++){l[a][o]=0}}l.match=n
for(a=1;a<r+1;a++){for(o=1;o<s+1;o++){if(n(e,t,a-1,o-1,i)){l[a][o]=l[a-1][o-1]+1}else{l[a][o]=Math.max(l[a-1][o],l[a][o-1])}}}return l}
var r=function(e,t,n,i,s,a){if(i===0||s===0){return{sequence:[],indices1:[],indices2:[]}}if(e.match(t,n,i-1,s-1,a)){var o=r(e,t,n,i-1,s-1,a)
o.sequence.push(t[i-1])
o.indices1.push(i-1)
o.indices2.push(s-1)
return o}if(e[i][s-1]>e[i-1][s]){return r(e,t,n,i,s-1,a)}else{return r(e,t,n,i-1,s,a)}}
var s=function(e,t,s,a){a=a||{}
var o=i(e,t,s||n,a)
var l=r(o,e,t,e.length,t.length,a)
if(typeof e==="string"&&typeof t==="string"){l.sequence=l.sequence.join("")}return l}
t.get=s},{}],14:[function(require,e,t){var n=require("../contexts/diff").DiffContext
var i=require("../contexts/patch").PatchContext
var r=require("../contexts/reverse").ReverseContext
var s=function e(t){if(!t||!t.children){return}var n=t.children.length
var i
var r=t.result
for(var s=0;s<n;s++){i=t.children[s]
if(typeof i.result==="undefined"){continue}r=r||{}
r[i.childName]=i.result}if(r&&t.leftIsArray){r._t="a"}t.setResult(r).exit()}
s.filterName="collectChildren"
var a=function e(t){if(t.leftIsArray||t.leftType!=="object"){return}var i,r,s=t.options.propertyFilter
for(i in t.left){if(!Object.prototype.hasOwnProperty.call(t.left,i)){continue}if(s&&!s(i,t)){continue}r=new n(t.left[i],t.right[i])
t.push(r,i)}for(i in t.right){if(!Object.prototype.hasOwnProperty.call(t.right,i)){continue}if(s&&!s(i,t)){continue}if(typeof t.left[i]==="undefined"){r=new n(undefined,t.right[i])
t.push(r,i)}}if(!t.children||t.children.length===0){t.setResult(undefined).exit()
return}t.exit()}
a.filterName="objects"
var o=function e(t){if(!t.nested){return}if(t.delta._t){return}var n,r
for(n in t.delta){r=new i(t.left[n],t.delta[n])
t.push(r,n)}t.exit()}
o.filterName="objects"
var l=function e(t){if(!t||!t.children){return}if(t.delta._t){return}var n=t.children.length
var i
for(var r=0;r<n;r++){i=t.children[r]
if(Object.prototype.hasOwnProperty.call(t.left,i.childName)&&i.result===undefined){delete t.left[i.childName]}else if(t.left[i.childName]!==i.result){t.left[i.childName]=i.result}}t.setResult(t.left).exit()}
l.filterName="collectChildren"
var u=function e(t){if(!t.nested){return}if(t.delta._t){return}var n,i
for(n in t.delta){i=new r(t.delta[n])
t.push(i,n)}t.exit()}
u.filterName="objects"
var f=function e(t){if(!t||!t.children){return}if(t.delta._t){return}var n=t.children.length
var i
var r={}
for(var s=0;s<n;s++){i=t.children[s]
if(r[i.childName]!==i.result){r[i.childName]=i.result}}t.setResult(r).exit()}
f.filterName="collectChildren"
t.collectChildrenDiffFilter=s
t.objectsDiffFilter=a
t.patchFilter=o
t.collectChildrenPatchFilter=l
t.reverseFilter=u
t.collectChildrenReverseFilter=f},{"../contexts/diff":5,"../contexts/patch":6,"../contexts/reverse":7}],15:[function(require,e,t){var n=2
var i=60
var r=null
var s=function(e){if(!r){var t
if(typeof diff_match_patch!=="undefined"){t=typeof diff_match_patch==="function"?new diff_match_patch:new diff_match_patch.diff_match_patch}else if(typeof require==="function"){try{var n="diff_match_patch_uncompressed"
var i=require("../../public/external/"+n)
t=new i.diff_match_patch}catch(e){t=null}}if(!t){if(!e){return null}var s=new Error("text diff_match_patch library not found")
s.diff_match_patch_not_found=true
throw s}r={diff:function(e,n){return t.patch_toText(t.patch_make(e,n))},patch:function(e,n){var i=t.patch_apply(t.patch_fromText(n),e)
for(var r=0;r<i[1].length;r++){if(!i[1][r]){var s=new Error("text patch failed")
s.textPatchFailed=true}}return i[0]}}}return r}
var a=function e(t){if(t.leftType!=="string"){return}var r=t.options&&t.options.textDiff&&t.options.textDiff.minLength||i
if(t.left.length<r||t.right.length<r){t.setResult([t.left,t.right]).exit()
return}var a=s()
if(!a){t.setResult([t.left,t.right]).exit()
return}var o=a.diff
t.setResult([o(t.left,t.right),0,n]).exit()}
a.filterName="texts"
var o=function e(t){if(t.nested){return}if(t.delta[2]!==n){return}var i=s(true).patch
t.setResult(i(t.left,t.delta[0])).exit()}
o.filterName="texts"
var l=function(e){var t,n,i,r,s,a=null,o=/^@@ +\-(\d+),(\d+) +\+(\d+),(\d+) +@@$/,l,u,f
i=e.split("\n")
for(t=0,n=i.length;t<n;t++){r=i[t]
var c=r.slice(0,1)
if(c==="@"){a=o.exec(r)
l=t
u=null
f=null
i[l]="@@ -"+a[3]+","+a[4]+" +"+a[1]+","+a[2]+" @@"}else if(c==="+"){u=t
i[t]="-"+i[t].slice(1)
if(i[t-1].slice(0,1)==="+"){s=i[t]
i[t]=i[t-1]
i[t-1]=s}}else if(c==="-"){f=t
i[t]="+"+i[t].slice(1)}}return i.join("\n")}
var u=function e(t){if(t.nested){return}if(t.delta[2]!==n){return}t.setResult([l(t.delta[0]),0,n]).exit()}
u.filterName="texts"
t.diffFilter=a
t.patchFilter=o
t.reverseFilter=u},{}],16:[function(require,e,t){var n=typeof Array.isArray==="function"?Array.isArray:function(e){return e instanceof Array}
var i=function e(t){if(t.left===t.right){t.setResult(undefined).exit()
return}if(typeof t.left==="undefined"){if(typeof t.right==="function"){throw new Error("functions are not supported")}t.setResult([t.right]).exit()
return}if(typeof t.right==="undefined"){t.setResult([t.left,0,0]).exit()
return}if(typeof t.left==="function"||typeof t.right==="function"){throw new Error("functions are not supported")}t.leftType=t.left===null?"null":typeof t.left
t.rightType=t.right===null?"null":typeof t.right
if(t.leftType!==t.rightType){t.setResult([t.left,t.right]).exit()
return}if(t.leftType==="boolean"||t.leftType==="number"){t.setResult([t.left,t.right]).exit()
return}if(t.leftType==="object"){t.leftIsArray=n(t.left)}if(t.rightType==="object"){t.rightIsArray=n(t.right)}if(t.leftIsArray!==t.rightIsArray){t.setResult([t.left,t.right]).exit()
return}if(t.left instanceof RegExp){if(t.right instanceof RegExp){t.setResult([t.left.toString(),t.right.toString()]).exit()}else{t.setResult([t.left,t.right]).exit()
return}}}
i.filterName="trivial"
var r=function e(t){if(typeof t.delta==="undefined"){t.setResult(t.left).exit()
return}t.nested=!n(t.delta)
if(t.nested){return}if(t.delta.length===1){t.setResult(t.delta[0]).exit()
return}if(t.delta.length===2){if(t.left instanceof RegExp){var i=/^\/(.*)\/([gimyu]+)$/.exec(t.delta[1])
if(i){t.setResult(new RegExp(i[1],i[2])).exit()
return}}t.setResult(t.delta[1]).exit()
return}if(t.delta.length===3&&t.delta[2]===0){t.setResult(undefined).exit()
return}}
r.filterName="trivial"
var s=function e(t){if(typeof t.delta==="undefined"){t.setResult(t.delta).exit()
return}t.nested=!n(t.delta)
if(t.nested){return}if(t.delta.length===1){t.setResult([t.delta[0],0,0]).exit()
return}if(t.delta.length===2){t.setResult([t.delta[1],t.delta[0]]).exit()
return}if(t.delta.length===3&&t.delta[2]===0){t.setResult([t.delta[0]]).exit()
return}}
s.filterName="trivial"
t.diffFilter=i
t.patchFilter=r
t.reverseFilter=s},{}],17:[function(require,e,t){var n=require("./environment")
var i=require("./diffpatcher").DiffPatcher
t.DiffPatcher=i
t.create=function(e){return new i(e)}
t.dateReviver=require("./date-reviver")
var r
t.diff=function(){if(!r){r=new i}return r.diff.apply(r,arguments)}
t.patch=function(){if(!r){r=new i}return r.patch.apply(r,arguments)}
t.unpatch=function(){if(!r){r=new i}return r.unpatch.apply(r,arguments)}
t.reverse=function(){if(!r){r=new i}return r.reverse.apply(r,arguments)}
t.clone=function(){if(!r){r=new i}return r.clone.apply(r,arguments)}
if(n.isBrowser){t.homepage="https://github.com/benjamine/jsondiffpatch"
t.version="0.2.3"}else{var s="../package.json"
var a=require(s)
t.homepage=a.homepage
t.version=a.version
var o="./formatters"
var l=require(o)
t.formatters=l
t.console=l.console}},{"./date-reviver":8,"./diffpatcher":9,"./environment":10}],18:[function(require,e,t){var n=function e(t){this.name=t
this.filters=[]}
n.prototype.process=function(e){if(!this.processor){throw new Error("add this pipe to a processor before using it")}var t=this.debug
var n=this.filters.length
var i=e
for(var r=0;r<n;r++){var s=this.filters[r]
if(t){this.log("filter: "+s.filterName)}s(i)
if(typeof i==="object"&&i.exiting){i.exiting=false
break}}if(!i.next&&this.resultCheck){this.resultCheck(i)}}
n.prototype.log=function(e){console.log("[jsondiffpatch] "+this.name+" pipe, "+e)}
n.prototype.append=function(){this.filters.push.apply(this.filters,arguments)
return this}
n.prototype.prepend=function(){this.filters.unshift.apply(this.filters,arguments)
return this}
n.prototype.indexOf=function(e){if(!e){throw new Error("a filter name is required")}for(var t=0;t<this.filters.length;t++){var n=this.filters[t]
if(n.filterName===e){return t}}throw new Error("filter not found: "+e)}
n.prototype.list=function(){var e=[]
for(var t=0;t<this.filters.length;t++){var n=this.filters[t]
e.push(n.filterName)}return e}
n.prototype.after=function(e){var t=this.indexOf(e)
var n=Array.prototype.slice.call(arguments,1)
if(!n.length){throw new Error("a filter is required")}n.unshift(t+1,0)
Array.prototype.splice.apply(this.filters,n)
return this}
n.prototype.before=function(e){var t=this.indexOf(e)
var n=Array.prototype.slice.call(arguments,1)
if(!n.length){throw new Error("a filter is required")}n.unshift(t,0)
Array.prototype.splice.apply(this.filters,n)
return this}
n.prototype.clear=function(){this.filters.length=0
return this}
n.prototype.shouldHaveResult=function(e){if(e===false){this.resultCheck=null
return}if(this.resultCheck){return}var t=this
this.resultCheck=function(e){if(!e.hasResult){console.log(e)
var n=new Error(t.name+" failed")
n.noResult=true
throw n}}
return this}
t.Pipe=n},{}],19:[function(require,e,t){var n=function e(t){this.selfOptions=t||{}
this.pipes={}}
n.prototype.options=function(e){if(e){this.selfOptions=e}return this.selfOptions}
n.prototype.pipe=function(e,t){if(typeof e==="string"){if(typeof t==="undefined"){return this.pipes[e]}else{this.pipes[e]=t}}if(e&&e.name){t=e
if(t.processor===this){return t}this.pipes[t.name]=t}t.processor=this
return t}
n.prototype.process=function(e,t){var n=e
n.options=this.options()
var i=t||e.pipe||"default"
var r,s
while(i){if(typeof n.nextAfterChildren!=="undefined"){n.next=n.nextAfterChildren
n.nextAfterChildren=null}if(typeof i==="string"){i=this.pipe(i)}i.process(n)
s=n
r=i
i=null
if(n){if(n.next){n=n.next
i=s.nextPipe||n.pipe||r}}}return n.hasResult?n.result:undefined}
t.Processor=n},{}]},{},[1])(1)})
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e()
else if("function"==typeof define&&define.amd)define([],e)
else{var t
"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),(t.jsondiffpatch||(t.jsondiffpatch={})).formatters=e()}}(function(){var e,t,n
return function e(t,n,i){function r(a,o){if(!n[a]){if(!t[a]){var l=typeof require=="function"&&require
if(!o&&l)return l(a,!0)
if(s)return s(a,!0)
var u=new Error("Cannot find module '"+a+"'")
throw u.code="MODULE_NOT_FOUND",u}var f=n[a]={exports:{}}
t[a][0].call(f.exports,function(e){var n=t[a][1][e]
return r(n?n:e)},f,f.exports,e,t,n,i)}return n[a].exports}var s=typeof require=="function"&&require
for(var a=0;a<i.length;a++)r(i[a])
return r}({1:[function(require,e,t){e.exports=require("./formatters")},{"./formatters":6}],2:[function(require,e,t){t.isBrowser=typeof window!=="undefined"},{}],3:[function(require,e,t){var n=require("./base")
var i=n.BaseFormatter
var r=function e(){this.includeMoveDestinations=false}
r.prototype=new i
r.prototype.prepareContext=function(e){i.prototype.prepareContext.call(this,e)
e.indent=function(e){this.indentLevel=(this.indentLevel||0)+(typeof e==="undefined"?1:e)
this.indentPad=new Array(this.indentLevel+1).join("&nbsp;&nbsp;")}
e.row=function(t,n){e.out('<tr><td style="white-space: nowrap;">'+'<pre class="jsondiffpatch-annotated-indent" style="display: inline-block">')
e.out(e.indentPad)
e.out('</pre><pre style="display: inline-block">')
e.out(t)
e.out('</pre></td><td class="jsondiffpatch-delta-note"><div>')
e.out(n)
e.out("</div></td></tr>")}}
r.prototype.typeFormattterErrorFormatter=function(e,t){e.row("",'<pre class="jsondiffpatch-error">'+t+"</pre>")}
r.prototype.formatTextDiffString=function(e,t){var n=this.parseTextDiff(t)
e.out('<ul class="jsondiffpatch-textdiff">')
for(var i=0,r=n.length;i<r;i++){var s=n[i]
e.out("<li>"+'<div class="jsondiffpatch-textdiff-location">'+'<span class="jsondiffpatch-textdiff-line-number">'+s.location.line+"</span>"+'<span class="jsondiffpatch-textdiff-char">'+s.location.chr+"</span>"+"</div>"+'<div class="jsondiffpatch-textdiff-line">')
var a=s.pieces
for(var o=0,l=a.length;o<l;o++){var u=a[o]
e.out('<span class="jsondiffpatch-textdiff-'+u.type+'">'+u.text+"</span>")}e.out("</div></li>")}e.out("</ul>")}
r.prototype.rootBegin=function(e,t,n){e.out('<table class="jsondiffpatch-annotated-delta">')
if(t==="node"){e.row("{")
e.indent()}if(n==="array"){e.row('"_t": "a",',"Array delta (member names indicate array indices)")}}
r.prototype.rootEnd=function(e,t){if(t==="node"){e.indent(-1)
e.row("}")}e.out("</table>")}
r.prototype.nodeBegin=function(e,t,n,i,r){e.row("&quot;"+t+"&quot;: {")
if(i==="node"){e.indent()}if(r==="array"){e.row('"_t": "a",',"Array delta (member names indicate array indices)")}}
r.prototype.nodeEnd=function(e,t,n,i,r,s){if(i==="node"){e.indent(-1)}e.row("}"+(s?"":","))}
r.prototype.format_unchanged=function(){return}
r.prototype.format_movedestination=function(){return}
r.prototype.format_node=function(e,t,n){this.formatDeltaChildren(e,t,n)}
var s=function(e){return'<pre style="display:inline-block">&quot;'+e+"&quot;</pre>"}
var a={added:function(e,t,n,i){var r=" <pre>([newValue])</pre>"
if(typeof i==="undefined"){return"new value"+r}if(typeof i==="number"){return"insert at index "+i+r}return"add property "+s(i)+r},modified:function(e,t,n,i){var r=" <pre>([previousValue, newValue])</pre>"
if(typeof i==="undefined"){return"modify value"+r}if(typeof i==="number"){return"modify at index "+i+r}return"modify property "+s(i)+r},deleted:function(e,t,n,i){var r=" <pre>([previousValue, 0, 0])</pre>"
if(typeof i==="undefined"){return"delete value"+r}if(typeof i==="number"){return"remove index "+i+r}return"delete property "+s(i)+r},moved:function(e,t,n,i){return'move from <span title="(position to remove at original state)">index '+i+"</span> to "+'<span title="(position to insert at final state)">index '+e[1]+"</span>"},textdiff:function(e,t,n,i){var r=typeof i==="undefined"?"":typeof i==="number"?" at index "+i:" at property "+s(i)
return"text diff"+r+", format is "+'<a href="https://code.google.com/p/google-diff-match-patch/wiki/Unidiff">'+"a variation of Unidiff</a>"}}
var o=function(e,t){var n=this.getDeltaType(t)
var i=a[n]
var r=i&&i.apply(i,Array.prototype.slice.call(arguments,1))
var s=JSON.stringify(t,null,2)
if(n==="textdiff"){s=s.split("\\n").join('\\n"+\n   "')}e.indent()
e.row(s,r)
e.indent(-1)}
r.prototype.format_added=o
r.prototype.format_modified=o
r.prototype.format_deleted=o
r.prototype.format_moved=o
r.prototype.format_textdiff=o
t.AnnotatedFormatter=r
var l
t.format=function(e,t){if(!l){l=new r}return l.format(e,t)}},{"./base":4}],4:[function(require,e,t){var n=typeof Array.isArray==="function"?Array.isArray:function(e){return e instanceof Array}
var i=typeof Object.keys==="function"?function(e){return Object.keys(e)}:function(e){var t=[]
for(var n in e){if(Object.prototype.hasOwnProperty.call(e,n)){t.push(n)}}return t}
var r=function(e){if(e.substr(0,1)==="_"){return e.slice(1)}return e}
var s=function(e){if(e==="_t"){return-1}else{if(e.substr(0,1)==="_"){return parseInt(e.slice(1),10)}else{return parseInt(e,10)+.1}}}
var a=function(e,t){return s(e)-s(t)}
var o=function e(){}
o.prototype.format=function(e,t){var n={}
this.prepareContext(n)
this.recurse(n,e,t)
return this.finalize(n)}
o.prototype.prepareContext=function(e){e.buffer=[]
e.out=function(){this.buffer.push.apply(this.buffer,arguments)}}
o.prototype.typeFormattterNotFound=function(e,t){throw new Error("cannot format delta type: "+t)}
o.prototype.typeFormattterErrorFormatter=function(e,t){return t.toString()}
o.prototype.finalize=function(e){if(n(e.buffer)){return e.buffer.join("")}}
o.prototype.recurse=function(e,t,n,i,r,s,a){var o=t&&s
var l=o?s.value:n
if(typeof t==="undefined"&&typeof i==="undefined"){return undefined}var u=this.getDeltaType(t,s)
var f=u==="node"?t._t==="a"?"array":"object":""
if(typeof i!=="undefined"){this.nodeBegin(e,i,r,u,f,a)}else{this.rootBegin(e,u,f)}var c
try{c=this["format_"+u]||this.typeFormattterNotFound(e,u)
c.call(this,e,t,l,i,r,s)}catch(n){this.typeFormattterErrorFormatter(e,n,t,l,i,r,s)
if(typeof console!=="undefined"&&console.error){console.error(n.stack)}}if(typeof i!=="undefined"){this.nodeEnd(e,i,r,u,f,a)}else{this.rootEnd(e,u,f)}}
o.prototype.formatDeltaChildren=function(e,t,n){var i=this
this.forEachDeltaKey(t,n,function(r,s,a,o){i.recurse(e,t[r],n?n[s]:undefined,r,s,a,o)})}
o.prototype.forEachDeltaKey=function(e,t,s){var o=i(e)
var l=e._t==="a"
var u={}
var f
if(typeof t!=="undefined"){for(f in t){if(Object.prototype.hasOwnProperty.call(t,f)){if(typeof e[f]==="undefined"&&(!l||typeof e["_"+f]==="undefined")){o.push(f)}}}}for(f in e){if(Object.prototype.hasOwnProperty.call(e,f)){var c=e[f]
if(n(c)&&c[2]===3){u[c[1].toString()]={key:f,value:t&&t[parseInt(f.substr(1))]}
if(this.includeMoveDestinations!==false){if(typeof t==="undefined"&&typeof e[c[1]]==="undefined"){o.push(c[1].toString())}}}}}if(l){o.sort(a)}else{o.sort()}for(var h=0,d=o.length;h<d;h++){var p=o[h]
if(l&&p==="_t"){continue}var m=l?typeof p==="number"?p:parseInt(r(p),10):p
var v=h===d-1
s(p,m,u[m],v)}}
o.prototype.getDeltaType=function(e,t){if(typeof e==="undefined"){if(typeof t!=="undefined"){return"movedestination"}return"unchanged"}if(n(e)){if(e.length===1){return"added"}if(e.length===2){return"modified"}if(e.length===3&&e[2]===0){return"deleted"}if(e.length===3&&e[2]===2){return"textdiff"}if(e.length===3&&e[2]===3){return"moved"}}else if(typeof e==="object"){return"node"}return"unknown"}
o.prototype.parseTextDiff=function(e){var t=[]
var n=e.split("\n@@ ")
for(var i=0,r=n.length;i<r;i++){var s=n[i]
var a={pieces:[]}
var o=/^(?:@@ )?[-+]?(\d+),(\d+)/.exec(s).slice(1)
a.location={line:o[0],chr:o[1]}
var l=s.split("\n").slice(1)
for(var u=0,f=l.length;u<f;u++){var c=l[u]
if(!c.length){continue}var h={type:"context"}
if(c.substr(0,1)==="+"){h.type="added"}else if(c.substr(0,1)==="-"){h.type="deleted"}h.text=c.slice(1)
a.pieces.push(h)}t.push(a)}return t}
t.BaseFormatter=o},{}],5:[function(require,e,t){var n=require("./base")
var i=n.BaseFormatter
var r=function e(){}
r.prototype=new i
function s(e){var t=e
var n=[[/&/g,"&amp;"],[/</g,"&lt;"],[/>/g,"&gt;"],[/'/g,"&apos;"],[/"/g,"&quot;"]]
for(var i=0;i<n.length;i++){t=t.replace(n[i][0],n[i][1])}return t}r.prototype.typeFormattterErrorFormatter=function(e,t){e.out('<pre class="jsondiffpatch-error">'+t+"</pre>")}
r.prototype.formatValue=function(e,t){e.out("<pre>"+s(JSON.stringify(t,null,2))+"</pre>")}
r.prototype.formatTextDiffString=function(e,t){var n=this.parseTextDiff(t)
e.out('<ul class="jsondiffpatch-textdiff">')
for(var i=0,r=n.length;i<r;i++){var a=n[i]
e.out("<li>"+'<div class="jsondiffpatch-textdiff-location">'+'<span class="jsondiffpatch-textdiff-line-number">'+a.location.line+"</span>"+'<span class="jsondiffpatch-textdiff-char">'+a.location.chr+"</span>"+"</div>"+'<div class="jsondiffpatch-textdiff-line">')
var o=a.pieces
for(var l=0,u=o.length;l<u;l++){var f=o[l]
e.out('<span class="jsondiffpatch-textdiff-'+f.type+'">'+s(unescape(f.text))+"</span>")}e.out("</div></li>")}e.out("</ul>")}
var a=function e(t){t=t||document
var n=function(e){return e.textContent||e.innerText}
var i=function(e,t,n){var i=e.querySelectorAll(t)
for(var r=0,s=i.length;r<s;r++){n(i[r])}}
var r=function(e,t){for(var n=0,i=e.children.length;n<i;n++){t(e.children[n],n)}}
i(t,".jsondiffpatch-arrow",function(e){var t=e.parentNode
var i=e.children[0],s=i.children[1]
i.style.display="none"
var a=n(t.querySelector(".jsondiffpatch-moved-destination"))
var o=t.parentNode
var l
r(o,function(e){if(e.getAttribute("data-key")===a){l=e}})
if(!l){return}try{var u=l.offsetTop-t.offsetTop
i.setAttribute("height",Math.abs(u)+6)
e.style.top=-8+(u>0?0:u)+"px"
var f=u>0?"M30,0 Q-10,"+Math.round(u/2)+" 26,"+(u-4):"M30,"+-u+" Q-10,"+Math.round(-u/2)+" 26,4"
s.setAttribute("d",f)
i.style.display=""}catch(e){return}})}
r.prototype.rootBegin=function(e,t,n){var i="jsondiffpatch-"+t+(n?" jsondiffpatch-child-node-type-"+n:"")
e.out('<div class="jsondiffpatch-delta '+i+'">')}
r.prototype.rootEnd=function(e){e.out("</div>"+(e.hasArrows?'<script type="text/javascript">setTimeout('+a.toString()+",10);</script>":""))}
r.prototype.nodeBegin=function(e,t,n,i,r){var s="jsondiffpatch-"+i+(r?" jsondiffpatch-child-node-type-"+r:"")
e.out('<li class="'+s+'" data-key="'+n+'">'+'<div class="jsondiffpatch-property-name">'+n+"</div>")}
r.prototype.nodeEnd=function(e){e.out("</li>")}
r.prototype.format_unchanged=function(e,t,n){if(typeof n==="undefined"){return}e.out('<div class="jsondiffpatch-value">')
this.formatValue(e,n)
e.out("</div>")}
r.prototype.format_movedestination=function(e,t,n){if(typeof n==="undefined"){return}e.out('<div class="jsondiffpatch-value">')
this.formatValue(e,n)
e.out("</div>")}
r.prototype.format_node=function(e,t,n){var i=t._t==="a"?"array":"object"
e.out('<ul class="jsondiffpatch-node jsondiffpatch-node-type-'+i+'">')
this.formatDeltaChildren(e,t,n)
e.out("</ul>")}
r.prototype.format_added=function(e,t){e.out('<div class="jsondiffpatch-value">')
this.formatValue(e,t[0])
e.out("</div>")}
r.prototype.format_modified=function(e,t){e.out('<div class="jsondiffpatch-value jsondiffpatch-left-value">')
this.formatValue(e,t[0])
e.out("</div>"+'<div class="jsondiffpatch-value jsondiffpatch-right-value">')
this.formatValue(e,t[1])
e.out("</div>")}
r.prototype.format_deleted=function(e,t){e.out('<div class="jsondiffpatch-value">')
this.formatValue(e,t[0])
e.out("</div>")}
r.prototype.format_moved=function(e,t){e.out('<div class="jsondiffpatch-value">')
this.formatValue(e,t[0])
e.out('</div><div class="jsondiffpatch-moved-destination">'+t[1]+"</div>")
e.out('<div class="jsondiffpatch-arrow" style="position: relative; left: -34px;">        <svg width="30" height="60" style="position: absolute; display: none;">        <defs>            <marker id="markerArrow" markerWidth="8" markerHeight="8" refx="2" refy="4"                   orient="auto" markerUnits="userSpaceOnUse">                <path d="M1,1 L1,7 L7,4 L1,1" style="fill: #339;" />            </marker>        </defs>        <path d="M30,0 Q-10,25 26,50" style="stroke: #88f; stroke-width: 2px; fill: none;        stroke-opacity: 0.5; marker-end: url(#markerArrow);"></path>        </svg>        </div>')
e.hasArrows=true}
r.prototype.format_textdiff=function(e,t){e.out('<div class="jsondiffpatch-value">')
this.formatTextDiffString(e,t[0])
e.out("</div>")}
var o=function(e,t,n){var i=t||document.body
var r="jsondiffpatch-unchanged-"
var s={showing:r+"showing",hiding:r+"hiding",visible:r+"visible",hidden:r+"hidden"}
var o=i.classList
if(!o){return}if(!n){o.remove(s.showing)
o.remove(s.hiding)
o.remove(s.visible)
o.remove(s.hidden)
if(e===false){o.add(s.hidden)}return}if(e===false){o.remove(s.showing)
o.add(s.visible)
setTimeout(function(){o.add(s.hiding)},10)}else{o.remove(s.hiding)
o.add(s.showing)
o.remove(s.hidden)}var l=setInterval(function(){a(i)},100)
setTimeout(function(){o.remove(s.showing)
o.remove(s.hiding)
if(e===false){o.add(s.hidden)
o.remove(s.visible)}else{o.add(s.visible)
o.remove(s.hidden)}setTimeout(function(){o.remove(s.visible)
clearInterval(l)},n+400)},n)}
var l=function(e,t){return o(false,e,t)}
t.HtmlFormatter=r
t.showUnchanged=o
t.hideUnchanged=l
var u
t.format=function(e,t){if(!u){u=new r}return u.format(e,t)}},{"./base":4}],6:[function(require,e,t){var n=require("../environment")
t.base=require("./base")
t.html=require("./html")
t.annotated=require("./annotated")
t.jsonpatch=require("./jsonpatch")
if(!n.isBrowser){var i="./console"
t.console=require(i)}},{"../environment":2,"./annotated":3,"./base":4,"./html":5,"./jsonpatch":7}],7:[function(require,e,t){(function(){var e=require("./base")
var n=e.BaseFormatter
var i={added:"add",deleted:"remove",modified:"replace",moved:"moved",movedestination:"movedestination",unchanged:"unchanged",error:"error",textDiffLine:"textDiffLine"}
function r(){this.includeMoveDestinations=false}r.prototype=new n
r.prototype.prepareContext=function(e){n.prototype.prepareContext.call(this,e)
e.result=[]
e.path=[]
e.pushCurrentOp=function(e,t){var n={op:e,path:this.currentPath()}
if(typeof t!=="undefined"){n.value=t}this.result.push(n)}
e.currentPath=function(){return"/"+this.path.join("/")}}
r.prototype.typeFormattterErrorFormatter=function(e,t){e.out("[ERROR]"+t)}
r.prototype.rootBegin=function(){}
r.prototype.rootEnd=function(){}
r.prototype.nodeBegin=function(e,t,n){e.path.push(n)}
r.prototype.nodeEnd=function(e){e.path.pop()}
r.prototype.format_unchanged=function(e,t,n){if(typeof n==="undefined"){return}e.pushCurrentOp(i.unchanged,n)}
r.prototype.format_movedestination=function(e,t,n){if(typeof n==="undefined"){return}e.pushCurrentOp(i.movedestination,n)}
r.prototype.format_node=function(e,t,n){this.formatDeltaChildren(e,t,n)}
r.prototype.format_added=function(e,t){e.pushCurrentOp(i.added,t[0])}
r.prototype.format_modified=function(e,t){e.pushCurrentOp(i.modified,t[1])}
r.prototype.format_deleted=function(e){e.pushCurrentOp(i.deleted)}
r.prototype.format_moved=function(e,t){e.pushCurrentOp(i.moved,t[1])}
r.prototype.format_textdiff=function(){throw"not implimented"}
r.prototype.format=function(e,t){var n={}
this.prepareContext(n)
this.recurse(n,e,t)
return n.result}
t.JSONFormatter=r
var s
function a(e){return e[e.length-1]}function o(e,t){e.sort(t)
return e}var l=function(e,t){var n=parseInt(e,10)
var i=parseInt(t,10)
if(!(isNaN(n)||isNaN(i))){return i-n}else{return 0}}
function u(e){return o(e,function(e,t){var n=e.path.split("/")
var i=t.path.split("/")
if(n.length!==i.length){return n.length-i.length}else{return l(a(n),a(i))}})}function f(e,t){var n=[]
var i=[]
e.forEach(function(e){var r=t(e)?n:i
r.push(e)})
return[n,i]}function c(e){var t=f(e,function(e){return e.op==="remove"})
var n=t[0]
var i=t[1]
var r=u(n)
return r.concat(i)}var h=function(e,t){if(!s){s=new r}return c(s.format(e,t))}
t.log=function(e,t){console.log(h(e,t))}
t.format=h})()},{"./base":4}]},{},[1])(1)})
!function(e,t){"function"==typeof define&&define.amd?define([],t):"undefined"!=typeof module&&module.exports?module.exports=t():e.lscache=t()}(this,function(){function e(){var e="__lscachetest__",n=e
if(void 0!==h)return h
try{a(e,n),o(e),h=!0}catch(e){h=t(e)?!0:!1}return h}function t(e){return e&&"QUOTA_EXCEEDED_ERR"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name||"QuotaExceededError"===e.name?!0:!1}function n(){return void 0===d&&(d=null!=window.JSON),d}function i(e){return e+m}function r(){return Math.floor((new Date).getTime()/g)}function s(e){return localStorage.getItem(p+y+e)}function a(e,t){localStorage.removeItem(p+y+e),localStorage.setItem(p+y+e,t)}function o(e){localStorage.removeItem(p+y+e)}function l(e){for(var t=new RegExp("^"+p+y+"(.*)"),n=localStorage.length-1;n>=0;--n){var r=localStorage.key(n)
r=r&&r.match(t),r=r&&r[1],r&&r.indexOf(m)<0&&e(r,i(r))}}function u(e){var t=i(e)
o(e),o(t)}function f(e){var t=i(e),n=s(t)
if(n){var a=parseInt(n,v)
if(r()>=a)return o(e),o(t),!0}}function c(e,t){b&&"console"in window&&"function"==typeof window.console.warn&&(window.console.warn("lscache - "+e),t&&window.console.warn("lscache - The error was: "+t.message))}var h,d,p="lscache-",m="-cacheexpiration",v=10,g=6e4,_=Math.floor(864e13/g),y="",b=!1,w={set:function(f,h,d){if(e()){if("string"!=typeof h){if(!n())return
try{h=JSON.stringify(h)}catch(e){return}}try{a(f,h)}catch(e){if(!t(e))return void c("Could not add item with key '"+f+"'",e)
var p,m=[]
l(function(e,t){var n=s(t)
n=n?parseInt(n,v):_,m.push({key:e,size:(s(e)||"").length,expiration:n})}),m.sort(function(e,t){return t.expiration-e.expiration})
for(var g=(h||"").length;m.length&&g>0;)p=m.pop(),c("Cache is full, removing item with key '"+f+"'"),u(p.key),g-=p.size
try{a(f,h)}catch(e){return void c("Could not add item with key '"+f+"', perhaps it's too big?",e)}}d?a(i(f),(r()+d).toString(v)):o(i(f))}},get:function(t){if(!e())return null
if(f(t))return null
var i=s(t)
if(!i||!n())return i
try{return JSON.parse(i)}catch(e){return i}},remove:function(t){e()&&u(t)},supported:function(){return e()},flush:function(){e()&&l(function(e){u(e)})},flushExpired:function(){e()&&l(function(e){f(e)})},setBucket:function(e){y=e},resetBucket:function(){y=""},enableWarnings:function(e){b=e}}
return w});(function(e,t){if(typeof define==="function"&&define.amd){define([],t)}else if(typeof module!=="undefined"&&module.exports){module.exports=t()}else{e.lscache=t()}})(this,function(){var e="lscache-"
var t="-cacheexpiration"
var n=10
var i=60*1e3
var r=Math.floor(864e13/i)
var s
var a
var o=""
var l=false
function u(){var e="__lscachetest__"
var t=e
if(s!==undefined){return s}try{m(e,t)
v(e)
s=true}catch(e){if(f(e)){s=true}else{s=false}}return s}function f(e){if(e&&e.name==="QUOTA_EXCEEDED_ERR"||e.name==="NS_ERROR_DOM_QUOTA_REACHED"||e.name==="QuotaExceededError"){return true}return false}function c(){if(a===undefined){a=window.JSON!=null}return a}function h(e){return e+t}function d(){return Math.floor((new Date).getTime()/i)}function p(t){return localStorage.getItem(e+o+t)}function m(t,n){localStorage.removeItem(e+o+t)
localStorage.setItem(e+o+t,n)}function v(t){localStorage.removeItem(e+o+t)}function g(n){var i=new RegExp("^"+e+o+"(.*)")
for(var r=localStorage.length-1;r>=0;--r){var s=localStorage.key(r)
s=s&&s.match(i)
s=s&&s[1]
if(s&&s.indexOf(t)<0){n(s,h(s))}}}function _(e){var t=h(e)
v(e)
v(t)}function y(e){var t=h(e)
var i=p(t)
if(i){var r=parseInt(i,n)
if(d()>=r){v(e)
v(t)
return true}}}function b(e,t){if(!l)return
if(!("console"in window)||typeof window.console.warn!=="function")return
window.console.warn("lscache - "+e)
if(t)window.console.warn("lscache - The error was: "+t.message)}var w={set:function(e,t,i){if(!u())return
if(typeof t!=="string"){if(!c())return
try{t=JSON.stringify(t)}catch(e){return}}try{m(e,t)}catch(i){if(f(i)){var s=[]
var a
g(function(e,t){var i=p(t)
if(i){i=parseInt(i,n)}else{i=r}s.push({key:e,size:(p(e)||"").length,expiration:i})})
s.sort(function(e,t){return t.expiration-e.expiration})
var o=(t||"").length
while(s.length&&o>0){a=s.pop()
b("Cache is full, removing item with key '"+e+"'")
_(a.key)
o-=a.size}try{m(e,t)}catch(t){b("Could not add item with key '"+e+"', perhaps it's too big?",t)
return}}else{b("Could not add item with key '"+e+"'",i)
return}}if(i){m(h(e),(d()+i).toString(n))}else{v(h(e))}},get:function(e){if(!u())return null
if(y(e)){return null}var t=p(e)
if(!t||!c()){return t}try{return JSON.parse(t)}catch(e){return t}},remove:function(e){if(!u())return
_(e)},supported:function(){return u()},flush:function(){if(!u())return
g(function(e){_(e)})},flushExpired:function(){if(!u())return
g(function(e){y(e)})},setBucket:function(e){o=e},resetBucket:function(){o=""},enableWarnings:function(e){l=e}}
return w});(function(){var e={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:u,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:u,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:u,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/}
e.bullet=/(?:[*+-]|\d+\.)/
e.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/
e.item=l(e.item,"gm")(/bull/g,e.bullet)()
e.list=l(e.list)(/bull/g,e.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+e.def.source+")")()
e.blockquote=l(e.blockquote)("def",e.def)()
e._tag="(?!(?:"+"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code"+"|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo"+"|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b"
e.html=l(e.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,e._tag)()
e.paragraph=l(e.paragraph)("hr",e.hr)("heading",e.heading)("lheading",e.lheading)("blockquote",e.blockquote)("tag","<"+e._tag)("def",e.def)()
e.normal=f({},e)
e.gfm=f({},e.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/})
e.gfm.paragraph=l(e.paragraph)("(?!","(?!"+e.gfm.fences.source.replace("\\1","\\2")+"|"+e.list.source.replace("\\1","\\3")+"|")()
e.tables=f({},e.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/})
function t(t){this.tokens=[]
this.tokens.links={}
this.options=t||c.defaults
this.rules=e.normal
if(this.options.gfm){if(this.options.tables){this.rules=e.tables}else{this.rules=e.gfm}}}t.rules=e
t.lex=function(e,n){var i=new t(n)
return i.lex(e)}
t.prototype.lex=function(e){e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n")
return this.token(e,true)}
t.prototype.token=function(t,n,i){var t=t.replace(/^ +$/gm,""),r,s,a,o,l,u,f,c,h
while(t){if(a=this.rules.newline.exec(t)){t=t.substring(a[0].length)
if(a[0].length>1){this.tokens.push({type:"space"})}}if(a=this.rules.code.exec(t)){t=t.substring(a[0].length)
a=a[0].replace(/^ {4}/gm,"")
this.tokens.push({type:"code",text:!this.options.pedantic?a.replace(/\n+$/,""):a})
continue}if(a=this.rules.fences.exec(t)){t=t.substring(a[0].length)
this.tokens.push({type:"code",lang:a[2],text:a[3]||""})
continue}if(a=this.rules.heading.exec(t)){t=t.substring(a[0].length)
this.tokens.push({type:"heading",depth:a[1].length,text:a[2]})
continue}if(n&&(a=this.rules.nptable.exec(t))){t=t.substring(a[0].length)
u={type:"table",header:a[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:a[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:a[3].replace(/\n$/,"").split("\n")}
for(c=0;c<u.align.length;c++){if(/^ *-+: *$/.test(u.align[c])){u.align[c]="right"}else if(/^ *:-+: *$/.test(u.align[c])){u.align[c]="center"}else if(/^ *:-+ *$/.test(u.align[c])){u.align[c]="left"}else{u.align[c]=null}}for(c=0;c<u.cells.length;c++){u.cells[c]=u.cells[c].split(/ *\| */)}this.tokens.push(u)
continue}if(a=this.rules.lheading.exec(t)){t=t.substring(a[0].length)
this.tokens.push({type:"heading",depth:a[2]==="="?1:2,text:a[1]})
continue}if(a=this.rules.hr.exec(t)){t=t.substring(a[0].length)
this.tokens.push({type:"hr"})
continue}if(a=this.rules.blockquote.exec(t)){t=t.substring(a[0].length)
this.tokens.push({type:"blockquote_start"})
a=a[0].replace(/^ *> ?/gm,"")
this.token(a,n,true)
this.tokens.push({type:"blockquote_end"})
continue}if(a=this.rules.list.exec(t)){t=t.substring(a[0].length)
o=a[2]
this.tokens.push({type:"list_start",ordered:o.length>1})
a=a[0].match(this.rules.item)
r=false
h=a.length
c=0
for(;c<h;c++){u=a[c]
f=u.length
u=u.replace(/^ *([*+-]|\d+\.) +/,"")
if(~u.indexOf("\n ")){f-=u.length
u=!this.options.pedantic?u.replace(new RegExp("^ {1,"+f+"}","gm"),""):u.replace(/^ {1,4}/gm,"")}if(this.options.smartLists&&c!==h-1){l=e.bullet.exec(a[c+1])[0]
if(o!==l&&!(o.length>1&&l.length>1)){t=a.slice(c+1).join("\n")+t
c=h-1}}s=r||/\n\n(?!\s*$)/.test(u)
if(c!==h-1){r=u.charAt(u.length-1)==="\n"
if(!s)s=r}this.tokens.push({type:s?"loose_item_start":"list_item_start"})
this.token(u,false,i)
this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"})
continue}if(a=this.rules.html.exec(t)){t=t.substring(a[0].length)
this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&(a[1]==="pre"||a[1]==="script"||a[1]==="style"),text:a[0]})
continue}if(!i&&n&&(a=this.rules.def.exec(t))){t=t.substring(a[0].length)
this.tokens.links[a[1].toLowerCase()]={href:a[2],title:a[3]}
continue}if(n&&(a=this.rules.table.exec(t))){t=t.substring(a[0].length)
u={type:"table",header:a[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:a[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:a[3].replace(/(?: *\| *)?\n$/,"").split("\n")}
for(c=0;c<u.align.length;c++){if(/^ *-+: *$/.test(u.align[c])){u.align[c]="right"}else if(/^ *:-+: *$/.test(u.align[c])){u.align[c]="center"}else if(/^ *:-+ *$/.test(u.align[c])){u.align[c]="left"}else{u.align[c]=null}}for(c=0;c<u.cells.length;c++){u.cells[c]=u.cells[c].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)}this.tokens.push(u)
continue}if(n&&(a=this.rules.paragraph.exec(t))){t=t.substring(a[0].length)
this.tokens.push({type:"paragraph",text:a[1].charAt(a[1].length-1)==="\n"?a[1].slice(0,-1):a[1]})
continue}if(a=this.rules.text.exec(t)){t=t.substring(a[0].length)
this.tokens.push({type:"text",text:a[0]})
continue}if(t){throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}}return this.tokens}
var n={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:u,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:u,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/}
n._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/
n._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/
n.link=l(n.link)("inside",n._inside)("href",n._href)()
n.reflink=l(n.reflink)("inside",n._inside)()
n.normal=f({},n)
n.pedantic=f({},n.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/})
n.gfm=f({},n.normal,{escape:l(n.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:l(n.text)("]|","~]|")("|","|https?://|")()})
n.breaks=f({},n.gfm,{br:l(n.br)("{2,}","*")(),text:l(n.gfm.text)("{2,}","*")()})
function i(e,t){this.options=t||c.defaults
this.links=e
this.rules=n.normal
this.renderer=this.options.renderer||new r
this.renderer.options=this.options
if(!this.links){throw new Error("Tokens array requires a `links` property.")}if(this.options.gfm){if(this.options.breaks){this.rules=n.breaks}else{this.rules=n.gfm}}else if(this.options.pedantic){this.rules=n.pedantic}}i.rules=n
i.output=function(e,t,n){var r=new i(t,n)
return r.output(e)}
i.prototype.output=function(e){var t="",n,i,r,s
while(e){if(s=this.rules.escape.exec(e)){e=e.substring(s[0].length)
t+=s[1]
continue}if(s=this.rules.autolink.exec(e)){e=e.substring(s[0].length)
if(s[2]==="@"){i=s[1].charAt(6)===":"?this.mangle(s[1].substring(7)):this.mangle(s[1])
r=this.mangle("mailto:")+i}else{i=a(s[1])
r=i}t+=this.renderer.link(r,null,i)
continue}if(!this.inLink&&(s=this.rules.url.exec(e))){e=e.substring(s[0].length)
i=a(s[1])
r=i
t+=this.renderer.link(r,null,i)
continue}if(s=this.rules.tag.exec(e)){if(!this.inLink&&/^<a /i.test(s[0])){this.inLink=true}else if(this.inLink&&/^<\/a>/i.test(s[0])){this.inLink=false}e=e.substring(s[0].length)
t+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):a(s[0]):s[0]
continue}if(s=this.rules.link.exec(e)){e=e.substring(s[0].length)
this.inLink=true
t+=this.outputLink(s,{href:s[2],title:s[3]})
this.inLink=false
continue}if((s=this.rules.reflink.exec(e))||(s=this.rules.nolink.exec(e))){e=e.substring(s[0].length)
n=(s[2]||s[1]).replace(/\s+/g," ")
n=this.links[n.toLowerCase()]
if(!n||!n.href){t+=s[0].charAt(0)
e=s[0].substring(1)+e
continue}this.inLink=true
t+=this.outputLink(s,n)
this.inLink=false
continue}if(s=this.rules.strong.exec(e)){e=e.substring(s[0].length)
t+=this.renderer.strong(this.output(s[2]||s[1]))
continue}if(s=this.rules.em.exec(e)){e=e.substring(s[0].length)
t+=this.renderer.em(this.output(s[2]||s[1]))
continue}if(s=this.rules.code.exec(e)){e=e.substring(s[0].length)
t+=this.renderer.codespan(a(s[2],true))
continue}if(s=this.rules.br.exec(e)){e=e.substring(s[0].length)
t+=this.renderer.br()
continue}if(s=this.rules.del.exec(e)){e=e.substring(s[0].length)
t+=this.renderer.del(this.output(s[1]))
continue}if(s=this.rules.text.exec(e)){e=e.substring(s[0].length)
t+=this.renderer.text(a(this.smartypants(s[0])))
continue}if(e){throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}}return t}
i.prototype.outputLink=function(e,t){var n=a(t.href),i=t.title?a(t.title):null
return e[0].charAt(0)!=="!"?this.renderer.link(n,i,this.output(e[1])):this.renderer.image(n,i,a(e[1]))}
i.prototype.smartypants=function(e){if(!this.options.smartypants)return e
return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}
i.prototype.mangle=function(e){if(!this.options.mangle)return e
var t="",n=e.length,i=0,r
for(;i<n;i++){r=e.charCodeAt(i)
if(Math.random()>.5){r="x"+r.toString(16)}t+="&#"+r+";"}return t}
function r(e){this.options=e||{}}r.prototype.code=function(e,t,n){if(this.options.highlight){var i=this.options.highlight(e,t)
if(i!=null&&i!==e){n=true
e=i}}if(!t){return"<pre><code>"+(n?e:a(e,true))+"\n</code></pre>"}return'<pre><code class="'+this.options.langPrefix+a(t,true)+'">'+(n?e:a(e,true))+"\n</code></pre>\n"}
r.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"}
r.prototype.html=function(e){return e}
r.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"}
r.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}
r.prototype.list=function(e,t){var n=t?"ol":"ul"
return"<"+n+">\n"+e+"</"+n+">\n"}
r.prototype.listitem=function(e){return"<li>"+e+"</li>\n"}
r.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"}
r.prototype.table=function(e,t){return"<table>\n"+"<thead>\n"+e+"</thead>\n"+"<tbody>\n"+t+"</tbody>\n"+"</table>\n"}
r.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"}
r.prototype.tablecell=function(e,t){var n=t.header?"th":"td"
var i=t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">"
return i+e+"</"+n+">\n"}
r.prototype.strong=function(e){return"<strong>"+e+"</strong>"}
r.prototype.em=function(e){return"<em>"+e+"</em>"}
r.prototype.codespan=function(e){return"<code>"+e+"</code>"}
r.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"}
r.prototype.del=function(e){return"<del>"+e+"</del>"}
r.prototype.link=function(e,t,n){if(this.options.sanitize){try{var i=decodeURIComponent(o(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0){return""}}var r='<a href="'+e+'"'
if(t){r+=' title="'+t+'"'}r+=">"+n+"</a>"
return r}
r.prototype.image=function(e,t,n){var i='<img src="'+e+'" alt="'+n+'"'
if(t){i+=' title="'+t+'"'}i+=this.options.xhtml?"/>":">"
return i}
r.prototype.text=function(e){return e}
function s(e){this.tokens=[]
this.token=null
this.options=e||c.defaults
this.options.renderer=this.options.renderer||new r
this.renderer=this.options.renderer
this.renderer.options=this.options}s.parse=function(e,t,n){var i=new s(t,n)
return i.parse(e)}
s.prototype.parse=function(e){this.inline=new i(e.links,this.options,this.renderer)
this.tokens=e.reverse()
var t=""
while(this.next()){t+=this.tok()}return t}
s.prototype.next=function(){return this.token=this.tokens.pop()}
s.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0}
s.prototype.parseText=function(){var e=this.token.text
while(this.peek().type==="text"){e+="\n"+this.next().text}return this.inline.output(e)}
s.prototype.tok=function(){switch(this.token.type){case"space":{return""}case"hr":{return this.renderer.hr()}case"heading":{return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text)}case"code":{return this.renderer.code(this.token.text,this.token.lang,this.token.escaped)}case"table":{var e="",t="",n,i,r,s,a
r=""
for(n=0;n<this.token.header.length;n++){s={header:true,align:this.token.align[n]}
r+=this.renderer.tablecell(this.inline.output(this.token.header[n]),{header:true,align:this.token.align[n]})}e+=this.renderer.tablerow(r)
for(n=0;n<this.token.cells.length;n++){i=this.token.cells[n]
r=""
for(a=0;a<i.length;a++){r+=this.renderer.tablecell(this.inline.output(i[a]),{header:false,align:this.token.align[a]})}t+=this.renderer.tablerow(r)}return this.renderer.table(e,t)}case"blockquote_start":{var t=""
while(this.next().type!=="blockquote_end"){t+=this.tok()}return this.renderer.blockquote(t)}case"list_start":{var t="",o=this.token.ordered
while(this.next().type!=="list_end"){t+=this.tok()}return this.renderer.list(t,o)}case"list_item_start":{var t=""
while(this.next().type!=="list_item_end"){t+=this.token.type==="text"?this.parseText():this.tok()}return this.renderer.listitem(t)}case"loose_item_start":{var t=""
while(this.next().type!=="list_item_end"){t+=this.tok()}return this.renderer.listitem(t)}case"html":{var l=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text
return this.renderer.html(l)}case"paragraph":{return this.renderer.paragraph(this.inline.output(this.token.text))}case"text":{return this.renderer.paragraph(this.parseText())}}}
function a(e,t){return e.replace(!t?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function o(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(e,t){t=t.toLowerCase()
if(t==="colon")return":"
if(t.charAt(0)==="#"){return t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1))}return""})}function l(e,t){e=e.source
t=t||""
return function n(i,r){if(!i)return new RegExp(e,t)
r=r.source||r
r=r.replace(/(^|[^\[])\^/g,"$1")
e=e.replace(i,r)
return n}}function u(){}u.exec=u
function f(e){var t=1,n,i
for(;t<arguments.length;t++){n=arguments[t]
for(i in n){if(Object.prototype.hasOwnProperty.call(n,i)){e[i]=n[i]}}}return e}function c(e,n,i){if(i||typeof n==="function"){if(!i){i=n
n=null}n=f({},c.defaults,n||{})
var r=n.highlight,o,l,u=0
try{o=t.lex(e,n)}catch(e){return i(e)}l=o.length
var h=function(e){if(e){n.highlight=r
return i(e)}var t
try{t=s.parse(o,n)}catch(t){e=t}n.highlight=r
return e?i(e):i(null,t)}
if(!r||r.length<3){return h()}delete n.highlight
if(!l)return h()
for(;u<o.length;u++){(function(e){if(e.type!=="code"){return--l||h()}return r(e.text,e.lang,function(t,n){if(t)return h(t)
if(n==null||n===e.text){return--l||h()}e.text=n
e.escaped=true;--l||h()})})(o[u])}return}try{if(n)n=f({},c.defaults,n)
return s.parse(t.lex(e,n),n)}catch(e){e.message+="\nPlease report this to https://github.com/chjj/marked."
if((n||c.defaults).silent){return"<p>An error occured:</p><pre>"+a(e.message+"",true)+"</pre>"}throw e}}c.options=c.setOptions=function(e){f(c.defaults,e)
return c}
c.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,sanitizer:null,mangle:true,smartLists:false,silent:false,highlight:null,langPrefix:"lang-",smartypants:false,headerPrefix:"",renderer:new r,xhtml:false}
c.Parser=s
c.parser=s.parse
c.Renderer=r
c.Lexer=t
c.lexer=t.lex
c.InlineLexer=i
c.inlineLexer=i.output
c.parse=c
if(typeof module!=="undefined"&&typeof exports==="object"){module.exports=c}else if(typeof define==="function"&&define.amd){define(function(){return c})}else{this.marked=c}}).call(function(){return this||(typeof window!=="undefined"?window:global)}())
window.Modernizr=function(e,t,n){var i="2.8.3",r={},s=true,a=t.documentElement,o="modernizr",l=t.createElement(o),u=l.style,f=t.createElement("input"),c=":)",h={}.toString,d=" -webkit- -moz- -o- -ms- ".split(" "),p="Webkit Moz O ms",m=p.split(" "),v=p.toLowerCase().split(" "),g={svg:"http://www.w3.org/2000/svg"},_={},y={},b={},w=[],x=w.slice,k,M=function(e,n,i,r){var s,l,u,f,c=t.createElement("div"),h=t.body,d=h||t.createElement("body")
if(parseInt(i,10)){while(i--){u=t.createElement("div")
u.id=r?r[i]:o+(i+1)
c.appendChild(u)}}s=["&#173;",'<style id="s',o,'">',e,"</style>"].join("")
c.id=o;(h?c:d).innerHTML+=s
d.appendChild(c)
if(!h){d.style.background=""
d.style.overflow="hidden"
f=a.style.overflow
a.style.overflow="hidden"
a.appendChild(d)}l=n(c,e)
if(!h){d.parentNode.removeChild(d)
a.style.overflow=f}else{c.parentNode.removeChild(c)}return!!l},T=function(t){var n=e.matchMedia||e.msMatchMedia
if(n){return n(t)&&n(t).matches||false}var i
M("@media "+t+" { #"+o+" { position: absolute; } }",function(t){i=(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle)["position"]=="absolute"})
return i},L=function(){var e={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"}
function i(i,r){r=r||t.createElement(e[i]||"div")
i="on"+i
var s=i in r
if(!s){if(!r.setAttribute){r=t.createElement("div")}if(r.setAttribute&&r.removeAttribute){r.setAttribute(i,"")
s=A(r[i],"function")
if(!A(r[i],"undefined")){r[i]=n}r.removeAttribute(i)}}r=null
return s}return i}(),S={}.hasOwnProperty,D
if(!A(S,"undefined")&&!A(S.call,"undefined")){D=function(e,t){return S.call(e,t)}}else{D=function(e,t){return t in e&&A(e.constructor.prototype[t],"undefined")}}if(!Function.prototype.bind){Function.prototype.bind=function e(t){var n=this
if(typeof n!="function"){throw new TypeError}var i=x.call(arguments,1),r=function(){if(this instanceof r){var e=function(){}
e.prototype=n.prototype
var s=new e
var a=n.apply(s,i.concat(x.call(arguments)))
if(Object(a)===a){return a}return s}else{return n.apply(t,i.concat(x.call(arguments)))}}
return r}}function C(e){u.cssText=e}function E(e,t){return C(d.join(e+";")+(t||""))}function A(e,t){return typeof e===t}function Y(e,t){return!!~(""+e).indexOf(t)}function j(e,t){for(var i in e){var r=e[i]
if(!Y(r,"-")&&u[r]!==n){return t=="pfx"?r:true}}return false}function O(e,t,i){for(var r in e){var s=t[e[r]]
if(s!==n){if(i===false)return e[r]
if(A(s,"function")){return s.bind(i||t)}return s}}return false}function I(e,t,n){var i=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+m.join(i+" ")+i).split(" ")
if(A(t,"string")||A(t,"undefined")){return j(r,t)}else{r=(e+" "+v.join(i+" ")+i).split(" ")
return O(r,t,n)}}_["flexbox"]=function(){return I("flexWrap")}
_["flexboxlegacy"]=function(){return I("boxDirection")}
_["canvas"]=function(){var e=t.createElement("canvas")
return!!(e.getContext&&e.getContext("2d"))}
_["canvastext"]=function(){return!!(r["canvas"]&&A(t.createElement("canvas").getContext("2d").fillText,"function"))}
_["webgl"]=function(){return!!e.WebGLRenderingContext}
_["touch"]=function(){var n
if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch){n=true}else{M(["@media (",d.join("touch-enabled),("),o,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=e.offsetTop===9})}return n}
_["geolocation"]=function(){return"geolocation"in navigator}
_["postmessage"]=function(){return!!e.postMessage}
_["websqldatabase"]=function(){return!!e.openDatabase}
_["indexedDB"]=function(){return!!I("indexedDB",e)}
_["hashchange"]=function(){return L("hashchange",e)&&(t.documentMode===n||t.documentMode>7)}
_["history"]=function(){return!!(e.history&&history.pushState)}
_["draganddrop"]=function(){var e=t.createElement("div")
return"draggable"in e||"ondragstart"in e&&"ondrop"in e}
_["websockets"]=function(){return"WebSocket"in e||"MozWebSocket"in e}
_["rgba"]=function(){C("background-color:rgba(150,255,150,.5)")
return Y(u.backgroundColor,"rgba")}
_["hsla"]=function(){C("background-color:hsla(120,40%,100%,.5)")
return Y(u.backgroundColor,"rgba")||Y(u.backgroundColor,"hsla")}
_["multiplebgs"]=function(){C("background:url(https://),url(https://),red url(https://)")
return/(url\s*\(.*?){3}/.test(u.background)}
_["backgroundsize"]=function(){return I("backgroundSize")}
_["borderimage"]=function(){return I("borderImage")}
_["borderradius"]=function(){return I("borderRadius")}
_["boxshadow"]=function(){return I("boxShadow")}
_["textshadow"]=function(){return t.createElement("div").style.textShadow===""}
_["opacity"]=function(){E("opacity:.55")
return/^0.55$/.test(u.opacity)}
_["cssanimations"]=function(){return I("animationName")}
_["csscolumns"]=function(){return I("columnCount")}
_["cssgradients"]=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);"
C((e+"-webkit- ".split(" ").join(t+e)+d.join(n+e)).slice(0,-e.length))
return Y(u.backgroundImage,"gradient")}
_["cssreflections"]=function(){return I("boxReflect")}
_["csstransforms"]=function(){return!!I("transform")}
_["csstransforms3d"]=function(){var e=!!I("perspective")
if(e&&"webkitPerspective"in a.style){M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=t.offsetLeft===9&&t.offsetHeight===3})}return e}
_["csstransitions"]=function(){return I("transition")}
_["fontface"]=function(){var e
M('@font-face {font-family:"font";src:url("https://")}',function(n,i){var r=t.getElementById("smodernizr"),s=r.sheet||r.styleSheet,a=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":""
e=/src/i.test(a)&&a.indexOf(i.split(" ")[0])===0})
return e}
_["generatedcontent"]=function(){var e
M(["#",o,"{font:0/0 a}#",o,':after{content:"',c,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3})
return e}
_["video"]=function(){var e=t.createElement("video"),n=false
try{if(n=!!e.canPlayType){n=new Boolean(n)
n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"")
n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"")
n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}}catch(e){}return n}
_["audio"]=function(){var e=t.createElement("audio"),n=false
try{if(n=!!e.canPlayType){n=new Boolean(n)
n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"")
n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,"")
n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"")
n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,"")}}catch(e){}return n}
_["localstorage"]=function(){try{localStorage.setItem(o,o)
localStorage.removeItem(o)
return true}catch(e){return false}}
_["sessionstorage"]=function(){try{sessionStorage.setItem(o,o)
sessionStorage.removeItem(o)
return true}catch(e){return false}}
_["webworkers"]=function(){return!!e.Worker}
_["applicationcache"]=function(){return!!e.applicationCache}
_["svg"]=function(){return!!t.createElementNS&&!!t.createElementNS(g.svg,"svg").createSVGRect}
_["inlinesvg"]=function(){var e=t.createElement("div")
e.innerHTML="<svg/>"
return(e.firstChild&&e.firstChild.namespaceURI)==g.svg}
_["smil"]=function(){return!!t.createElementNS&&/SVGAnimate/.test(h.call(t.createElementNS(g.svg,"animate")))}
_["svgclippaths"]=function(){return!!t.createElementNS&&/SVGClipPath/.test(h.call(t.createElementNS(g.svg,"clipPath")))}
function P(){r["input"]=function(n){for(var i=0,r=n.length;i<r;i++){b[n[i]]=!!(n[i]in f)}if(b.list){b.list=!!(t.createElement("datalist")&&e.HTMLDataListElement)}return b}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "))
r["inputtypes"]=function(e){for(var i=0,r,s,o,l=e.length;i<l;i++){f.setAttribute("type",s=e[i])
r=f.type!=="text"
if(r){f.value=c
f.style.cssText="position:absolute;visibility:hidden;"
if(/^range$/.test(s)&&f.style.WebkitAppearance!==n){a.appendChild(f)
o=t.defaultView
r=o.getComputedStyle&&o.getComputedStyle(f,null).WebkitAppearance!=="textfield"&&f.offsetHeight!==0
a.removeChild(f)}else if(/^(search|tel)$/.test(s)){}else if(/^(url|email)$/.test(s)){r=f.checkValidity&&f.checkValidity()===false}else{r=f.value!=c}}y[e[i]]=!!r}return y}("search tel url email datetime date month week time datetime-local number range color".split(" "))}for(var N in _){if(D(_,N)){k=N.toLowerCase()
r[k]=_[N]()
w.push((r[k]?"":"no-")+k)}}r.input||P()
r.addTest=function(e,t){if(typeof e=="object"){for(var i in e){if(D(e,i)){r.addTest(i,e[i])}}}else{e=e.toLowerCase()
if(r[e]!==n){return r}t=typeof t=="function"?t():t
if(typeof s!=="undefined"&&s){a.className+=" "+(t?"":"no-")+e}r[e]=t}return r}
C("")
l=f=null;(function(e,t){var n="3.7.0"
var i=e.html5||{}
var r=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i
var s=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i
var a
var o="_html5shiv"
var l=0
var u={}
var f;(function(){try{var e=t.createElement("a")
e.innerHTML="<xyz></xyz>"
a="hidden"in e
f=e.childNodes.length==1||function(){t.createElement("a")
var e=t.createDocumentFragment()
return typeof e.cloneNode=="undefined"||typeof e.createDocumentFragment=="undefined"||typeof e.createElement=="undefined"}()}catch(e){a=true
f=true}})()
function c(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement
n.innerHTML="x<style>"+t+"</style>"
return i.insertBefore(n.lastChild,i.firstChild)}function h(){var e=_.elements
return typeof e=="string"?e.split(" "):e}function d(e){var t=u[e[o]]
if(!t){t={}
l++
e[o]=l
u[l]=t}return t}function p(e,n,i){if(!n){n=t}if(f){return n.createElement(e)}if(!i){i=d(n)}var a
if(i.cache[e]){a=i.cache[e].cloneNode()}else if(s.test(e)){a=(i.cache[e]=i.createElem(e)).cloneNode()}else{a=i.createElem(e)}return a.canHaveChildren&&!r.test(e)&&!a.tagUrn?i.frag.appendChild(a):a}function m(e,n){if(!e){e=t}if(f){return e.createDocumentFragment()}n=n||d(e)
var i=n.frag.cloneNode(),r=0,s=h(),a=s.length
for(;r<a;r++){i.createElement(s[r])}return i}function v(e,t){if(!t.cache){t.cache={}
t.createElem=e.createElement
t.createFrag=e.createDocumentFragment
t.frag=t.createFrag()}e.createElement=function(n){if(!_.shivMethods){return t.createElem(n)}return p(n,e,t)}
e.createDocumentFragment=Function("h,f","return function(){"+"var n=f.cloneNode(),c=n.createElement;"+"h.shivMethods&&("+h().join().replace(/[\w\-]+/g,function(e){t.createElem(e)
t.frag.createElement(e)
return'c("'+e+'")'})+");return n}")(_,t.frag)}function g(e){if(!e){e=t}var n=d(e)
if(_.shivCSS&&!a&&!n.hasCSS){n.hasCSS=!!c(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}"+"mark{background:#FF0;color:#000}"+"template{display:none}")}if(!f){v(e,n)}return e}var _={elements:i.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:n,shivCSS:i.shivCSS!==false,supportsUnknownElements:f,shivMethods:i.shivMethods!==false,type:"default",shivDocument:g,createElement:p,createDocumentFragment:m}
e.html5=_
g(t)})(this,t)
r._version=i
r._prefixes=d
r._domPrefixes=v
r._cssomPrefixes=m
r.mq=T
r.hasEvent=L
r.testProp=function(e){return j([e])}
r.testAllProps=I
r.testStyles=M
r.prefixed=function(e,t,n){if(!t){return I(e,"pfx")}else{return I(e,t,n)}}
a.className=a.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(s?" js "+w.join(" "):"")
return r}(this,this.document);(function(e){function t(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function n(e,t){return function(n){return f(e.call(this,n),t)}}function i(e,t){return function(n){return this.lang().ordinal(e.call(this,n),t)}}function r(){}function s(e){x(e),o(this,e)}function a(e){var t=v(e),n=t.year||0,i=t.month||0,r=t.week||0,s=t.day||0,a=t.hour||0,o=t.minute||0,l=t.second||0,u=t.millisecond||0
this._milliseconds=+u+1e3*l+6e4*o+36e5*a,this._days=+s+7*r,this._months=+i+12*n,this._data={},this._bubble()}function o(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])
return t.hasOwnProperty("toString")&&(e.toString=t.toString),t.hasOwnProperty("valueOf")&&(e.valueOf=t.valueOf),e}function l(e){var t,n={}
for(t in e)e.hasOwnProperty(t)&&ve.hasOwnProperty(t)&&(n[t]=e[t])
return n}function u(e){return 0>e?Math.ceil(e):Math.floor(e)}function f(e,t,n){for(var i=""+Math.abs(e),r=e>=0;i.length<t;)i="0"+i
return(r?n?"+":"":"-")+i}function c(e,t,n,i){var r,s,a=t._milliseconds,o=t._days,l=t._months
a&&e._d.setTime(+e._d+a*n),(o||l)&&(r=e.minute(),s=e.hour()),o&&e.date(e.date()+o*n),l&&e.month(e.month()+l*n),a&&!i&&ie.updateOffset(e),(o||l)&&(e.minute(r),e.hour(s))}function h(e){return"[object Array]"===Object.prototype.toString.call(e)}function d(e){return"[object Date]"===Object.prototype.toString.call(e)||e instanceof Date}function p(e,t,n){var i,r=Math.min(e.length,t.length),s=Math.abs(e.length-t.length),a=0
for(i=0;r>i;i++)(n&&e[i]!==t[i]||!n&&_(e[i])!==_(t[i]))&&a++
return a+s}function m(e){if(e){var t=e.toLowerCase().replace(/(.)s$/,"$1")
e=qe[e]||Be[t]||t}return e}function v(e){var t,n,i={}
for(n in e)e.hasOwnProperty(n)&&(t=m(n),t&&(i[t]=e[n]))
return i}function g(t){var n,i
if(0===t.indexOf("week"))n=7,i="day"
else{if(0!==t.indexOf("month"))return
n=12,i="month"}ie[t]=function(r,s){var a,o,l=ie.fn._lang[t],u=[]
if("number"==typeof r&&(s=r,r=e),o=function(e){var t=ie().utc().set(i,e)
return l.call(ie.fn._lang,t,r||"")},null!=s)return o(s)
for(a=0;n>a;a++)u.push(o(a))
return u}}function _(e){var t=+e,n=0
return 0!==t&&isFinite(t)&&(n=t>=0?Math.floor(t):Math.ceil(t)),n}function y(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function b(e){return w(e)?366:365}function w(e){return e%4===0&&e%100!==0||e%400===0}function x(e){var t
e._a&&-2===e._pf.overflow&&(t=e._a[ue]<0||e._a[ue]>11?ue:e._a[fe]<1||e._a[fe]>y(e._a[le],e._a[ue])?fe:e._a[ce]<0||e._a[ce]>23?ce:e._a[he]<0||e._a[he]>59?he:e._a[de]<0||e._a[de]>59?de:e._a[pe]<0||e._a[pe]>999?pe:-1,e._pf._overflowDayOfYear&&(le>t||t>fe)&&(t=fe),e._pf.overflow=t)}function k(e){return null==e._isValid&&(e._isValid=!isNaN(e._d.getTime())&&e._pf.overflow<0&&!e._pf.empty&&!e._pf.invalidMonth&&!e._pf.nullInput&&!e._pf.invalidFormat&&!e._pf.userInvalidated,e._strict&&(e._isValid=e._isValid&&0===e._pf.charsLeftOver&&0===e._pf.unusedTokens.length)),e._isValid}function M(e){return e?e.toLowerCase().replace("_","-"):e}function T(e,t){return t._isUTC?ie(e).zone(t._offset||0):ie(e).local()}function L(e,t){return t.abbr=e,me[e]||(me[e]=new r),me[e].set(t),me[e]}function S(e){delete me[e]}function D(e){var t,n,i,r,s=0,a=function(e){if(!me[e]&&ge)try{require("./lang/"+e)}catch(e){}return me[e]}
if(!e)return ie.fn._lang
if(!h(e)){if(n=a(e))return n
e=[e]}for(;s<e.length;){for(r=M(e[s]).split("-"),t=r.length,i=M(e[s+1]),i=i?i.split("-"):null;t>0;){if(n=a(r.slice(0,t).join("-")))return n
if(i&&i.length>=t&&p(r,i,!0)>=t-1)break
t--}s++}return ie.fn._lang}function C(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function E(e){var t,n,i=e.match(we)
for(t=0,n=i.length;n>t;t++)i[t]=Ke[i[t]]?Ke[i[t]]:C(i[t])
return function(r){var s=""
for(t=0;n>t;t++)s+=i[t]instanceof Function?i[t].call(r,e):i[t]
return s}}function A(e,t){return e.isValid()?(t=Y(t,e.lang()),Ve[t]||(Ve[t]=E(t)),Ve[t](e)):e.lang().invalidDate()}function Y(e,t){function n(e){return t.longDateFormat(e)||e}var i=5
for(xe.lastIndex=0;i>=0&&xe.test(e);)e=e.replace(xe,n),xe.lastIndex=0,i-=1
return e}function j(e,t){var n,i=t._strict
switch(e){case"DDDD":return Oe
case"YYYY":case"GGGG":case"gggg":return i?Ie:Te
case"Y":case"G":case"g":return Ne
case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return i?Pe:Le
case"S":if(i)return Ye
case"SS":if(i)return je
case"SSS":if(i)return Oe
case"DDD":return Me
case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return De
case"a":case"A":return D(t._l)._meridiemParse
case"X":return Ae
case"Z":case"ZZ":return Ce
case"T":return Ee
case"SSSS":return Se
case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return i?je:ke
case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return ke
default:return n=new RegExp($(H(e.replace("\\","")),"i"))}}function O(e){e=e||""
var t=e.match(Ce)||[],n=t[t.length-1]||[],i=(n+"").match(ze)||["-",0,0],r=+(60*i[1])+_(i[2])
return"+"===i[0]?-r:r}function I(e,t,n){var i,r=n._a
switch(e){case"M":case"MM":null!=t&&(r[ue]=_(t)-1)
break
case"MMM":case"MMMM":i=D(n._l).monthsParse(t),null!=i?r[ue]=i:n._pf.invalidMonth=t
break
case"D":case"DD":null!=t&&(r[fe]=_(t))
break
case"DDD":case"DDDD":null!=t&&(n._dayOfYear=_(t))
break
case"YY":r[le]=_(t)+(_(t)>68?1900:2e3)
break
case"YYYY":case"YYYYY":case"YYYYYY":r[le]=_(t)
break
case"a":case"A":n._isPm=D(n._l).isPM(t)
break
case"H":case"HH":case"h":case"hh":r[ce]=_(t)
break
case"m":case"mm":r[he]=_(t)
break
case"s":case"ss":r[de]=_(t)
break
case"S":case"SS":case"SSS":case"SSSS":r[pe]=_(1e3*("0."+t))
break
case"X":n._d=new Date(1e3*parseFloat(t))
break
case"Z":case"ZZ":n._useUTC=!0,n._tzm=O(t)
break
case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":e=e.substr(0,1)
case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":e=e.substr(0,2),t&&(n._w=n._w||{},n._w[e]=t)}}function P(e){var t,n,i,r,s,a,o,l,u,f,c=[]
if(!e._d){for(i=R(e),e._w&&null==e._a[fe]&&null==e._a[ue]&&(s=function(t){var n=parseInt(t,10)
return t?t.length<3?n>68?1900+n:2e3+n:n:null==e._a[le]?ie().weekYear():e._a[le]},a=e._w,null!=a.GG||null!=a.W||null!=a.E?o=Q(s(a.GG),a.W||1,a.E,4,1):(l=D(e._l),u=null!=a.d?V(a.d,l):null!=a.e?parseInt(a.e,10)+l._week.dow:0,f=parseInt(a.w,10)||1,null!=a.d&&u<l._week.dow&&f++,o=Q(s(a.gg),f,u,l._week.doy,l._week.dow)),e._a[le]=o.year,e._dayOfYear=o.dayOfYear),e._dayOfYear&&(r=null==e._a[le]?i[le]:e._a[le],e._dayOfYear>b(r)&&(e._pf._overflowDayOfYear=!0),n=B(r,0,e._dayOfYear),e._a[ue]=n.getUTCMonth(),e._a[fe]=n.getUTCDate()),t=0;3>t&&null==e._a[t];++t)e._a[t]=c[t]=i[t]
for(;7>t;t++)e._a[t]=c[t]=null==e._a[t]?2===t?1:0:e._a[t]
c[ce]+=_((e._tzm||0)/60),c[he]+=_((e._tzm||0)%60),e._d=(e._useUTC?B:q).apply(null,c)}}function N(e){var t
e._d||(t=v(e._i),e._a=[t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond],P(e))}function R(e){var t=new Date
return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function F(e){e._a=[],e._pf.empty=!0
var t,n,i,r,s,a=D(e._l),o=""+e._i,l=o.length,u=0
for(i=Y(e._f,a).match(we)||[],t=0;t<i.length;t++)r=i[t],n=(o.match(j(r,e))||[])[0],n&&(s=o.substr(0,o.indexOf(n)),s.length>0&&e._pf.unusedInput.push(s),o=o.slice(o.indexOf(n)+n.length),u+=n.length),Ke[r]?(n?e._pf.empty=!1:e._pf.unusedTokens.push(r),I(r,n,e)):e._strict&&!n&&e._pf.unusedTokens.push(r)
e._pf.charsLeftOver=l-u,o.length>0&&e._pf.unusedInput.push(o),e._isPm&&e._a[ce]<12&&(e._a[ce]+=12),e._isPm===!1&&12===e._a[ce]&&(e._a[ce]=0),P(e),x(e)}function H(e){return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,i,r){return t||n||i||r})}function $(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function z(e){var n,i,r,s,a
if(0===e._f.length)return e._pf.invalidFormat=!0,e._d=new Date(0/0),void 0
for(s=0;s<e._f.length;s++)a=0,n=o({},e),n._pf=t(),n._f=e._f[s],F(n),k(n)&&(a+=n._pf.charsLeftOver,a+=10*n._pf.unusedTokens.length,n._pf.score=a,(null==r||r>a)&&(r=a,i=n))
o(e,i||n)}function W(e){var t,n,i=e._i,r=Re.exec(i)
if(r){for(e._pf.iso=!0,t=0,n=He.length;n>t;t++)if(He[t][1].exec(i)){e._f=He[t][0]+(r[6]||" ")
break}for(t=0,n=$e.length;n>t;t++)if($e[t][1].exec(i)){e._f+=$e[t][0]
break}i.match(Ce)&&(e._f+="Z"),F(e)}else e._d=new Date(i)}function U(t){var n=t._i,i=_e.exec(n)
n===e?t._d=new Date:i?t._d=new Date(+i[1]):"string"==typeof n?W(t):h(n)?(t._a=n.slice(0),P(t)):d(n)?t._d=new Date(+n):"object"==typeof n?N(t):t._d=new Date(n)}function q(e,t,n,i,r,s,a){var o=new Date(e,t,n,i,r,s,a)
return 1970>e&&o.setFullYear(e),o}function B(e){var t=new Date(Date.UTC.apply(null,arguments))
return 1970>e&&t.setUTCFullYear(e),t}function V(e,t){if("string"==typeof e)if(isNaN(e)){if(e=t.weekdaysParse(e),"number"!=typeof e)return null}else e=parseInt(e,10)
return e}function J(e,t,n,i,r){return r.relativeTime(t||1,!!n,e,i)}function X(e,t,n){var i=oe(Math.abs(e)/1e3),r=oe(i/60),s=oe(r/60),a=oe(s/24),o=oe(a/365),l=45>i&&["s",i]||1===r&&["m"]||45>r&&["mm",r]||1===s&&["h"]||22>s&&["hh",s]||1===a&&["d"]||25>=a&&["dd",a]||45>=a&&["M"]||345>a&&["MM",oe(a/30)]||1===o&&["y"]||["yy",o]
return l[2]=t,l[3]=e>0,l[4]=n,J.apply({},l)}function K(e,t,n){var i,r=n-t,s=n-e.day()
return s>r&&(s-=7),r-7>s&&(s+=7),i=ie(e).add("d",s),{week:Math.ceil(i.dayOfYear()/7),year:i.year()}}function Q(e,t,n,i,r){var s,a,o=B(e,0,1).getUTCDay()
return n=null!=n?n:r,s=r-o+(o>i?7:0)-(r>o?7:0),a=7*(t-1)+(n-r)+s+1,{year:a>0?e:e-1,dayOfYear:a>0?a:b(e-1)+a}}function G(e){var t=e._i,n=e._f
return null===t?ie.invalid({nullInput:!0}):("string"==typeof t&&(e._i=t=D().preparse(t)),ie.isMoment(t)?(e=l(t),e._d=new Date(+t._d)):n?h(n)?z(e):F(e):U(e),new s(e))}function Z(e,t){ie.fn[e]=ie.fn[e+"s"]=function(e){var n=this._isUTC?"UTC":""
return null!=e?(this._d["set"+n+t](e),ie.updateOffset(this),this):this._d["get"+n+t]()}}function ee(e){ie.duration.fn[e]=function(){return this._data[e]}}function te(e,t){ie.duration.fn["as"+e]=function(){return+this/t}}function ne(e){var t=!1,n=ie
"undefined"==typeof ender&&(e?(ae.moment=function(){return!t&&console&&console.warn&&(t=!0,console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")),n.apply(null,arguments)},o(ae.moment,n)):ae.moment=ie)}for(var ie,re,se="2.5.1",ae=this,oe=Math.round,le=0,ue=1,fe=2,ce=3,he=4,de=5,pe=6,me={},ve={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_isUTC:null,_offset:null,_pf:null,_lang:null},ge="undefined"!=typeof module&&module.exports&&"undefined"!=typeof require,_e=/^\/?Date\((\-?\d+)/i,ye=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,be=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,we=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,xe=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,ke=/\d\d?/,Me=/\d{1,3}/,Te=/\d{1,4}/,Le=/[+\-]?\d{1,6}/,Se=/\d+/,De=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Ce=/Z|[\+\-]\d\d:?\d\d/gi,Ee=/T/i,Ae=/[\+\-]?\d+(\.\d{1,3})?/,Ye=/\d/,je=/\d\d/,Oe=/\d{3}/,Ie=/\d{4}/,Pe=/[+-]?\d{6}/,Ne=/[+-]?\d+/,Re=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Fe="YYYY-MM-DDTHH:mm:ssZ",He=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],$e=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],ze=/([\+\-]|\d\d)/gi,We="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),Ue={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},qe={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},Be={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},Ve={},Je="DDD w W M D d".split(" "),Xe="M D H h m s w W".split(" "),Ke={M:function(){return this.month()+1},MMM:function(e){return this.lang().monthsShort(this,e)},MMMM:function(e){return this.lang().months(this,e)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){return this.lang().weekdaysMin(this,e)},ddd:function(e){return this.lang().weekdaysShort(this,e)},dddd:function(e){return this.lang().weekdays(this,e)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return f(this.year()%100,2)},YYYY:function(){return f(this.year(),4)},YYYYY:function(){return f(this.year(),5)},YYYYYY:function(){var e=this.year(),t=e>=0?"+":"-"
return t+f(Math.abs(e),6)},gg:function(){return f(this.weekYear()%100,2)},gggg:function(){return f(this.weekYear(),4)},ggggg:function(){return f(this.weekYear(),5)},GG:function(){return f(this.isoWeekYear()%100,2)},GGGG:function(){return f(this.isoWeekYear(),4)},GGGGG:function(){return f(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return _(this.milliseconds()/100)},SS:function(){return f(_(this.milliseconds()/10),2)},SSS:function(){return f(this.milliseconds(),3)},SSSS:function(){return f(this.milliseconds(),3)},Z:function(){var e=-this.zone(),t="+"
return 0>e&&(e=-e,t="-"),t+f(_(e/60),2)+":"+f(_(e)%60,2)},ZZ:function(){var e=-this.zone(),t="+"
return 0>e&&(e=-e,t="-"),t+f(_(e/60),2)+f(_(e)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},Qe=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];Je.length;)re=Je.pop(),Ke[re+"o"]=i(Ke[re],re)
for(;Xe.length;)re=Xe.pop(),Ke[re+re]=n(Ke[re],2)
for(Ke.DDDD=n(Ke.DDD,3),o(r.prototype,{set:function(e){var t,n
for(n in e)t=e[n],"function"==typeof t?this[n]=t:this["_"+n]=t},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(e){return this._monthsShort[e.month()]},monthsParse:function(e){var t,n,i
for(this._monthsParse||(this._monthsParse=[]),t=0;12>t;t++)if(this._monthsParse[t]||(n=ie.utc([2e3,t]),i="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[t]=new RegExp(i.replace(".",""),"i")),this._monthsParse[t].test(e))return t},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(e){return this._weekdaysMin[e.day()]},weekdaysParse:function(e){var t,n,i
for(this._weekdaysParse||(this._weekdaysParse=[]),t=0;7>t;t++)if(this._weekdaysParse[t]||(n=ie([2e3,1]).day(t),i="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[t]=new RegExp(i.replace(".",""),"i")),this._weekdaysParse[t].test(e))return t},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e]
return!t&&this._longDateFormat[e.toUpperCase()]&&(t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e]=t),t},isPM:function(e){return"p"===(e+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(e,t){var n=this._calendar[e]
return"function"==typeof n?n.apply(t):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(e,t,n,i){var r=this._relativeTime[n]
return"function"==typeof r?r(e,t,n,i):r.replace(/%d/i,e)},pastFuture:function(e,t){var n=this._relativeTime[e>0?"future":"past"]
return"function"==typeof n?n(t):n.replace(/%s/i,t)},ordinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",preparse:function(e){return e},postformat:function(e){return e},week:function(e){return K(e,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),ie=function(n,i,r,s){var a
return"boolean"==typeof r&&(s=r,r=e),a={},a._isAMomentObject=!0,a._i=n,a._f=i,a._l=r,a._strict=s,a._isUTC=!1,a._pf=t(),G(a)},ie.utc=function(n,i,r,s){var a
return"boolean"==typeof r&&(s=r,r=e),a={},a._isAMomentObject=!0,a._useUTC=!0,a._isUTC=!0,a._l=r,a._i=n,a._f=i,a._strict=s,a._pf=t(),G(a).utc()},ie.unix=function(e){return ie(1e3*e)},ie.duration=function(e,t){var n,i,r,s=e,o=null
return ie.isDuration(e)?s={ms:e._milliseconds,d:e._days,M:e._months}:"number"==typeof e?(s={},t?s[t]=e:s.milliseconds=e):(o=ye.exec(e))?(n="-"===o[1]?-1:1,s={y:0,d:_(o[fe])*n,h:_(o[ce])*n,m:_(o[he])*n,s:_(o[de])*n,ms:_(o[pe])*n}):(o=be.exec(e))&&(n="-"===o[1]?-1:1,r=function(e){var t=e&&parseFloat(e.replace(",","."))
return(isNaN(t)?0:t)*n},s={y:r(o[2]),M:r(o[3]),d:r(o[4]),h:r(o[5]),m:r(o[6]),s:r(o[7]),w:r(o[8])}),i=new a(s),ie.isDuration(e)&&e.hasOwnProperty("_lang")&&(i._lang=e._lang),i},ie.version=se,ie.defaultFormat=Fe,ie.updateOffset=function(){},ie.lang=function(e,t){var n
return e?(t?L(M(e),t):null===t?(S(e),e="en"):me[e]||D(e),n=ie.duration.fn._lang=ie.fn._lang=D(e),n._abbr):ie.fn._lang._abbr},ie.langData=function(e){return e&&e._lang&&e._lang._abbr&&(e=e._lang._abbr),D(e)},ie.isMoment=function(e){return e instanceof s||null!=e&&e.hasOwnProperty("_isAMomentObject")},ie.isDuration=function(e){return e instanceof a},re=Qe.length-1;re>=0;--re)g(Qe[re])
for(ie.normalizeUnits=function(e){return m(e)},ie.invalid=function(e){var t=ie.utc(0/0)
return null!=e?o(t._pf,e):t._pf.userInvalidated=!0,t},ie.parseZone=function(e){return ie(e).parseZone()},o(ie.fn=s.prototype,{clone:function(){return ie(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var e=ie(this).utc()
return 0<e.year()&&e.year()<=9999?A(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):A(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var e=this
return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds()]},isValid:function(){return k(this)},isDSTShifted:function(){return this._a?this.isValid()&&p(this._a,(this._isUTC?ie.utc(this._a):ie(this._a)).toArray())>0:!1},parsingFlags:function(){return o({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(e){var t=A(this,e||ie.defaultFormat)
return this.lang().postformat(t)},add:function(e,t){var n
return n="string"==typeof e?ie.duration(+t,e):ie.duration(e,t),c(this,n,1),this},subtract:function(e,t){var n
return n="string"==typeof e?ie.duration(+t,e):ie.duration(e,t),c(this,n,-1),this},diff:function(e,t,n){var i,r,s=T(e,this),a=6e4*(this.zone()-s.zone())
return t=m(t),"year"===t||"month"===t?(i=432e5*(this.daysInMonth()+s.daysInMonth()),r=12*(this.year()-s.year())+(this.month()-s.month()),r+=(this-ie(this).startOf("month")-(s-ie(s).startOf("month")))/i,r-=6e4*(this.zone()-ie(this).startOf("month").zone()-(s.zone()-ie(s).startOf("month").zone()))/i,"year"===t&&(r/=12)):(i=this-s,r="second"===t?i/1e3:"minute"===t?i/6e4:"hour"===t?i/36e5:"day"===t?(i-a)/864e5:"week"===t?(i-a)/6048e5:i),n?r:u(r)},from:function(e,t){return ie.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!t)},fromNow:function(e){return this.from(ie(),e)},calendar:function(){var e=T(ie(),this).startOf("day"),t=this.diff(e,"days",!0),n=-6>t?"sameElse":-1>t?"lastWeek":0>t?"lastDay":1>t?"sameDay":2>t?"nextDay":7>t?"nextWeek":"sameElse"
return this.format(this.lang().calendar(n,this))},isLeapYear:function(){return w(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay()
return null!=e?(e=V(e,this.lang()),this.add({d:e-t})):t},month:function(e){var t,n=this._isUTC?"UTC":""
return null!=e?"string"==typeof e&&(e=this.lang().monthsParse(e),"number"!=typeof e)?this:(t=this.date(),this.date(1),this._d["set"+n+"Month"](e),this.date(Math.min(t,this.daysInMonth())),ie.updateOffset(this),this):this._d["get"+n+"Month"]()},startOf:function(e){switch(e=m(e)){case"year":this.month(0)
case"month":this.date(1)
case"week":case"isoWeek":case"day":this.hours(0)
case"hour":this.minutes(0)
case"minute":this.seconds(0)
case"second":this.milliseconds(0)}return"week"===e?this.weekday(0):"isoWeek"===e&&this.isoWeekday(1),this},endOf:function(e){return e=m(e),this.startOf(e).add("isoWeek"===e?"week":e,1).subtract("ms",1)},isAfter:function(e,t){return t="undefined"!=typeof t?t:"millisecond",+this.clone().startOf(t)>+ie(e).startOf(t)},isBefore:function(e,t){return t="undefined"!=typeof t?t:"millisecond",+this.clone().startOf(t)<+ie(e).startOf(t)},isSame:function(e,t){return t=t||"ms",+this.clone().startOf(t)===+T(e,this).startOf(t)},min:function(e){return e=ie.apply(null,arguments),this>e?this:e},max:function(e){return e=ie.apply(null,arguments),e>this?this:e},zone:function(e){var t=this._offset||0
return null==e?this._isUTC?t:this._d.getTimezoneOffset():("string"==typeof e&&(e=O(e)),Math.abs(e)<16&&(e=60*e),this._offset=e,this._isUTC=!0,t!==e&&c(this,ie.duration(t-e,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(e){return e=e?ie(e).zone():0,(this.zone()-e)%60===0},daysInMonth:function(){return y(this.year(),this.month())},dayOfYear:function(e){var t=oe((ie(this).startOf("day")-ie(this).startOf("year"))/864e5)+1
return null==e?t:this.add("d",e-t)},quarter:function(){return Math.ceil((this.month()+1)/3)},weekYear:function(e){var t=K(this,this.lang()._week.dow,this.lang()._week.doy).year
return null==e?t:this.add("y",e-t)},isoWeekYear:function(e){var t=K(this,1,4).year
return null==e?t:this.add("y",e-t)},week:function(e){var t=this.lang().week(this)
return null==e?t:this.add("d",7*(e-t))},isoWeek:function(e){var t=K(this,1,4).week
return null==e?t:this.add("d",7*(e-t))},weekday:function(e){var t=(this.day()+7-this.lang()._week.dow)%7
return null==e?t:this.add("d",e-t)},isoWeekday:function(e){return null==e?this.day()||7:this.day(this.day()%7?e:e-7)},get:function(e){return e=m(e),this[e]()},set:function(e,t){return e=m(e),"function"==typeof this[e]&&this[e](t),this},lang:function(t){return t===e?this._lang:(this._lang=D(t),this)}}),re=0;re<We.length;re++)Z(We[re].toLowerCase().replace(/s$/,""),We[re])
Z("year","FullYear"),ie.fn.days=ie.fn.day,ie.fn.months=ie.fn.month,ie.fn.weeks=ie.fn.week,ie.fn.isoWeeks=ie.fn.isoWeek,ie.fn.toJSON=ie.fn.toISOString,o(ie.duration.fn=a.prototype,{_bubble:function(){var e,t,n,i,r=this._milliseconds,s=this._days,a=this._months,o=this._data
o.milliseconds=r%1e3,e=u(r/1e3),o.seconds=e%60,t=u(e/60),o.minutes=t%60,n=u(t/60),o.hours=n%24,s+=u(n/24),o.days=s%30,a+=u(s/30),o.months=a%12,i=u(a/12),o.years=i},weeks:function(){return u(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*_(this._months/12)},humanize:function(e){var t=+this,n=X(t,!e,this.lang())
return e&&(n=this.lang().pastFuture(t,n)),this.lang().postformat(n)},add:function(e,t){var n=ie.duration(e,t)
return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(e,t){var n=ie.duration(e,t)
return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(e){return e=m(e),this[e.toLowerCase()+"s"]()},as:function(e){return e=m(e),this["as"+e.charAt(0).toUpperCase()+e.slice(1)+"s"]()},lang:ie.fn.lang,toIsoString:function(){var e=Math.abs(this.years()),t=Math.abs(this.months()),n=Math.abs(this.days()),i=Math.abs(this.hours()),r=Math.abs(this.minutes()),s=Math.abs(this.seconds()+this.milliseconds()/1e3)
return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(e?e+"Y":"")+(t?t+"M":"")+(n?n+"D":"")+(i||r||s?"T":"")+(i?i+"H":"")+(r?r+"M":"")+(s?s+"S":""):"P0D"}})
for(re in Ue)Ue.hasOwnProperty(re)&&(te(re,Ue[re]),ee(re.toLowerCase()))
te("Weeks",6048e5),ie.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},ie.lang("en",{ordinal:function(e){var t=e%10,n=1===_(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"
return e+n}}),function(e){e(ie)}(function(e){return e.lang("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,doy:12}})}),function(e){e(ie)}(function(e){return e.lang("ar",{months:"يناير/ كانون الثاني_فبراير/ شباط_مارس/ آذار_أبريل/ نيسان_مايو/ أيار_يونيو/ حزيران_يوليو/ تموز_أغسطس/ آب_سبتمبر/ أيلول_أكتوبر/ تشرين الأول_نوفمبر/ تشرين الثاني_ديسمبر/ كانون الأول".split("_"),monthsShort:"يناير/ كانون الثاني_فبراير/ شباط_مارس/ آذار_أبريل/ نيسان_مايو/ أيار_يونيو/ حزيران_يوليو/ تموز_أغسطس/ آب_سبتمبر/ أيلول_أكتوبر/ تشرين الأول_نوفمبر/ تشرين الثاني_ديسمبر/ كانون الأول".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,doy:12}})}),function(e){e(ie)}(function(e){return e.lang("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[В изминалата] dddd [в] LT"
case 1:case 2:case 4:case 5:return"[В изминалия] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дни",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},ordinal:function(e){var t=e%10,n=e%100
return 0===e?e+"-ев":0===n?e+"-ен":n>10&&20>n?e+"-ти":1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти"},week:{dow:1,doy:7}})}),function(e){e(ie)}(function(t){function n(e,t,n){var i={mm:"munutenn",MM:"miz",dd:"devezh"}
return e+" "+s(i[n],e)}function i(e){switch(r(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz"
default:return e+" vloaz"}}function r(e){return e>9?r(e%10):e}function s(e,t){return 2===t?a(e):e}function a(t){var n={m:"v",b:"v",d:"z"}
return n[t.charAt(0)]===e?t:n[t.charAt(0)]+t.substring(1)}return t.lang("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),longDateFormat:{LT:"h[e]mm A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY LT",LLLL:"dddd, D [a viz] MMMM YYYY LT"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoù",m:"ur vunutenn",mm:n,h:"un eur",hh:"%d eur",d:"un devezh",dd:n,M:"ur miz",MM:n,y:"ur bloaz",yy:i},ordinal:function(e){var t=1===e?"añ":"vet"
return e+t},week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){function t(e,t,n){var i=e+" "
switch(n){case"m":return t?"jedna minuta":"jedne minute"
case"mm":return i+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta"
case"h":return t?"jedan sat":"jednog sata"
case"hh":return i+=1===e?"sat":2===e||3===e||4===e?"sata":"sati"
case"dd":return i+=1===e?"dan":"dana"
case"MM":return i+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci"
case"yy":return i+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}return e.lang("bs",{months:"januar_februar_mart_april_maj_juni_juli_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),longDateFormat:{LT:"H:mm",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT"
case 3:return"[u] [srijedu] [u] LT"
case 6:return"[u] [subotu] [u] LT"
case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT"
case 6:return"[prošle] [subote] [u] LT"
case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:t,mm:t,h:t,hh:t,d:"dan",dd:t,M:"mjesec",MM:t,y:"godinu",yy:t},ordinal:"%d.",week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){return e.lang("ca",{months:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),monthsShort:"gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),longDateFormat:{LT:"H:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[demà a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinal:"%dº",week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){function t(e){return e>1&&5>e&&1!==~~(e/10)}function n(e,n,i,r){var s=e+" "
switch(i){case"s":return n||r?"pár vteřin":"pár vteřinami"
case"m":return n?"minuta":r?"minutu":"minutou"
case"mm":return n||r?s+(t(e)?"minuty":"minut"):s+"minutami"
break
case"h":return n?"hodina":r?"hodinu":"hodinou"
case"hh":return n||r?s+(t(e)?"hodiny":"hodin"):s+"hodinami"
break
case"d":return n||r?"den":"dnem"
case"dd":return n||r?s+(t(e)?"dny":"dní"):s+"dny"
break
case"M":return n||r?"měsíc":"měsícem"
case"MM":return n||r?s+(t(e)?"měsíce":"měsíců"):s+"měsíci"
break
case"y":return n||r?"rok":"rokem"
case"yy":return n||r?s+(t(e)?"roky":"let"):s+"lety"}}var i="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),r="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_")
return e.lang("cs",{months:i,monthsShort:r,monthsParse:function(e,t){var n,i=[]
for(n=0;12>n;n++)i[n]=new RegExp("^"+e[n]+"$|^"+t[n]+"$","i")
return i}(i,r),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT"
case 1:case 2:return"[v] dddd [v] LT"
case 3:return"[ve středu v] LT"
case 4:return"[ve čtvrtek v] LT"
case 5:return"[v pátek v] LT"
case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT"
case 1:case 2:return"[minulé] dddd [v] LT"
case 3:return"[minulou středu v] LT"
case 4:case 5:return"[minulý] dddd [v] LT"
case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},ordinal:"%d.",week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){return e.lang("cv",{months:"кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав".split("_"),monthsShort:"кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш".split("_"),weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кĕç_эрн_шăм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кç_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",L:"DD-MM-YYYY",LL:"YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]",LLL:"YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT",LLLL:"dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT"},calendar:{sameDay:"[Паян] LT [сехетре]",nextDay:"[Ыран] LT [сехетре]",lastDay:"[Ĕнер] LT [сехетре]",nextWeek:"[Çитес] dddd LT [сехетре]",lastWeek:"[Иртнĕ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function(e){var t=/сехет$/i.exec(e)?"рен":/çул$/i.exec(e)?"тан":"ран"
return e+t},past:"%s каялла",s:"пĕр-ик çеккунт",m:"пĕр минут",mm:"%d минут",h:"пĕр сехет",hh:"%d сехет",d:"пĕр кун",dd:"%d кун",M:"пĕр уйăх",MM:"%d уйăх",y:"пĕр çул",yy:"%d çул"},ordinal:"%d-мĕш",week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){return e.lang("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn àl",s:"ychydig eiliadau",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},ordinal:function(e){var t=e,n="",i=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"]
return t>20?n=40===t||50===t||60===t||80===t||100===t?"fed":"ain":t>0&&(n=i[t]),e+n},week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){return e.lang("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D. MMMM, YYYY LT"},calendar:{sameDay:"[I dag kl.] LT",nextDay:"[I morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[I går kl.] LT",lastWeek:"[sidste] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},ordinal:"%d.",week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){function t(e,t,n){var i={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]}
return t?i[n][0]:i[n][1]}return e.lang("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),longDateFormat:{LT:"H:mm [Uhr]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Heute um] LT",sameElse:"L",nextDay:"[Morgen um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gestern um] LT",lastWeek:"[letzten] dddd [um] LT"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,M:t,MM:t,y:t,yy:t},ordinal:"%d.",week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){return e.lang("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(e,t){return/D/.test(t.substring(0,t.indexOf("MMMM")))?this._monthsGenitiveEl[e.month()]:this._monthsNominativeEl[e.month()]},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function(e,t,n){return e>11?n?"μμ":"ΜΜ":n?"πμ":"ΠΜ"},longDateFormat:{LT:"h:mm A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:"[την προηγούμενη] dddd [{}] LT",sameElse:"L"},calendar:function(e,t){var n=this._calendarEl[e],i=t&&t.hours()
return n.replace("{}",i%12===1?"στη":"στις")},relativeTime:{future:"σε %s",past:"%s πριν",s:"δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},ordinal:function(e){return e+"η"},week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){return e.lang("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"
return e+n},week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){return e.lang("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",L:"YYYY-MM-DD",LL:"D MMMM, YYYY",LLL:"D MMMM, YYYY LT",LLLL:"dddd, D MMMM, YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"
return e+n}})}),function(e){e(ie)}(function(e){return e.lang("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"
return e+n},week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){return e.lang("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdays:"Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),weekdaysShort:"Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",L:"YYYY-MM-DD",LL:"D[-an de] MMMM, YYYY",LLL:"D[-an de] MMMM, YYYY LT",LLLL:"dddd, [la] D[-an de] MMMM, YYYY LT"},meridiem:function(e,t,n){return e>11?n?"p.t.m.":"P.T.M.":n?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodiaŭ je] LT",nextDay:"[Morgaŭ je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hieraŭ je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"je %s",past:"antaŭ %s",s:"sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},ordinal:"%da",week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){return e.lang("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:"ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),longDateFormat:{LT:"H:mm",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY LT",LLLL:"dddd, D [de] MMMM [de] YYYY LT"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:"%dº",week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){function t(e,t,n,i){var r={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:[e+" minuti",e+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[e+" tunni",e+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[e+" kuu",e+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[e+" aasta",e+" aastat"]}
return t?r[n][2]?r[n][2]:r[n][1]:i?r[n][0]:r[n][1]}return e.lang("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:"%d päeva",M:t,MM:t,y:t,yy:t},ordinal:"%d.",week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){return e.lang("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),longDateFormat:{LT:"HH:mm",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] LT",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] LT",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] LT",llll:"ddd, YYYY[ko] MMM D[a] LT"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},ordinal:"%d.",week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){var t={1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"},n={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"}
return e.lang("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},meridiem:function(e){return 12>e?"قبل از ظهر":"بعد از ظهر"},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چندین ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(e){return e.replace(/[۰-۹]/g,function(e){return n[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},ordinal:"%dم",week:{dow:6,doy:12}})}),function(e){e(ie)}(function(e){function t(e,t,i,r){var s=""
switch(i){case"s":return r?"muutaman sekunnin":"muutama sekunti"
case"m":return r?"minuutin":"minuutti"
case"mm":s=r?"minuutin":"minuuttia"
break
case"h":return r?"tunnin":"tunti"
case"hh":s=r?"tunnin":"tuntia"
break
case"d":return r?"päivän":"päivä"
case"dd":s=r?"päivän":"päivää"
break
case"M":return r?"kuukauden":"kuukausi"
case"MM":s=r?"kuukauden":"kuukautta"
break
case"y":return r?"vuoden":"vuosi"
case"yy":s=r?"vuoden":"vuotta"}return s=n(e,r)+" "+s}function n(e,t){return 10>e?t?r[e]:i[e]:e}var i="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),r=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",i[7],i[8],i[9]]
return e.lang("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] LT",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] LT",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] LT",llll:"ddd, Do MMM YYYY, [klo] LT"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},ordinal:"%d.",week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){return e.lang("fo",{months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D. MMMM, YYYY LT"},calendar:{sameDay:"[Í dag kl.] LT",nextDay:"[Í morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Í gjár kl.] LT",lastWeek:"[síðstu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",m:"ein minutt",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaði",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},ordinal:"%d.",week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){return e.lang("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinal:function(e){return e+(1===e?"er":"")}})}),function(e){e(ie)}(function(e){return e.lang("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinal:function(e){return e+(1===e?"er":"")},week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){return e.lang("gl",{months:"Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),monthsShort:"Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),weekdays:"Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),weekdaysShort:"Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),weekdaysMin:"Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),longDateFormat:{LT:"H:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"ás":"á")+"] LT"},nextDay:function(){return"[mañá "+(1!==this.hours()?"ás":"á")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"ás":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"á":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"ás":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(e){return"uns segundos"===e?"nuns segundos":"en "+e},past:"hai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},ordinal:"%dº",week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){return e.lang("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY LT",LLLL:"dddd, D [ב]MMMM YYYY LT",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY LT",llll:"ddd, D MMM YYYY LT"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(e){return 2===e?"שעתיים":e+" שעות"},d:"יום",dd:function(e){return 2===e?"יומיים":e+" ימים"},M:"חודש",MM:function(e){return 2===e?"חודשיים":e+" חודשים"},y:"שנה",yy:function(e){return 2===e?"שנתיים":e+" שנים"}}})}),function(e){e(ie)}(function(e){var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"}
return e.lang("hi",{months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiem:function(e){return 4>e?"रात":10>e?"सुबह":17>e?"दोपहर":20>e?"शाम":"रात"},week:{dow:0,doy:6}})}),function(e){e(ie)}(function(e){function t(e,t,n){var i=e+" "
switch(n){case"m":return t?"jedna minuta":"jedne minute"
case"mm":return i+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta"
case"h":return t?"jedan sat":"jednog sata"
case"hh":return i+=1===e?"sat":2===e||3===e||4===e?"sata":"sati"
case"dd":return i+=1===e?"dan":"dana"
case"MM":return i+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci"
case"yy":return i+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}return e.lang("hr",{months:"sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),monthsShort:"sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),longDateFormat:{LT:"H:mm",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT"
case 3:return"[u] [srijedu] [u] LT"
case 6:return"[u] [subotu] [u] LT"
case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT"
case 6:return"[prošle] [subote] [u] LT"
case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:t,mm:t,h:t,hh:t,d:"dan",dd:t,M:"mjesec",MM:t,y:"godinu",yy:t},ordinal:"%d.",week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){function t(e,t,n,i){var r=e
switch(n){case"s":return i||t?"néhány másodperc":"néhány másodperce"
case"m":return"egy"+(i||t?" perc":" perce")
case"mm":return r+(i||t?" perc":" perce")
case"h":return"egy"+(i||t?" óra":" órája")
case"hh":return r+(i||t?" óra":" órája")
case"d":return"egy"+(i||t?" nap":" napja")
case"dd":return r+(i||t?" nap":" napja")
case"M":return"egy"+(i||t?" hónap":" hónapja")
case"MM":return r+(i||t?" hónap":" hónapja")
case"y":return"egy"+(i||t?" év":" éve")
case"yy":return r+(i||t?" év":" éve")}return""}function n(e){return(e?"":"[múlt] ")+"["+i[this.day()]+"] LT[-kor]"}var i="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ")
return e.lang("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D., LT",LLLL:"YYYY. MMMM D., dddd LT"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return n.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return n.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},ordinal:"%d.",week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){function t(e,t){var n={nominative:"հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_"),accusative:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_")},i=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t)?"accusative":"nominative"
return n[i][e.month()]}function n(e){var t="հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_")
return t[e.month()]}function i(e){var t="կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_")
return t[e.day()]}return e.lang("hy-am",{months:t,monthsShort:n,weekdays:i,weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),longDateFormat:{LT:"HH:mm",L:"DD.MM.YYYY",LL:"D MMMM YYYY թ.",LLL:"D MMMM YYYY թ., LT",LLLL:"dddd, D MMMM YYYY թ., LT"},calendar:{sameDay:"[այսօր] LT",nextDay:"[վաղը] LT",lastDay:"[երեկ] LT",nextWeek:function(){return"dddd [օրը ժամը] LT"},lastWeek:function(){return"[անցած] dddd [օրը ժամը] LT"},sameElse:"L"},relativeTime:{future:"%s հետո",past:"%s առաջ",s:"մի քանի վայրկյան",m:"րոպե",mm:"%d րոպե",h:"ժամ",hh:"%d ժամ",d:"օր",dd:"%d օր",M:"ամիս",MM:"%d ամիս",y:"տարի",yy:"%d տարի"},meridiem:function(e){return 4>e?"գիշերվա":12>e?"առավոտվա":17>e?"ցերեկվա":"երեկոյան"},ordinal:function(e,t){switch(t){case"DDD":case"w":case"W":case"DDDo":return 1===e?e+"-ին":e+"-րդ"
default:return e}},week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){return e.lang("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] LT",LLLL:"dddd, D MMMM YYYY [pukul] LT"},meridiem:function(e){return 11>e?"pagi":15>e?"siang":19>e?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){function t(e){return e%100===11?!0:e%10===1?!1:!0}function n(e,n,i,r){var s=e+" "
switch(i){case"s":return n||r?"nokkrar sekúndur":"nokkrum sekúndum"
case"m":return n?"mínúta":"mínútu"
case"mm":return t(e)?s+(n||r?"mínútur":"mínútum"):n?s+"mínúta":s+"mínútu"
case"hh":return t(e)?s+(n||r?"klukkustundir":"klukkustundum"):s+"klukkustund"
case"d":return n?"dagur":r?"dag":"degi"
case"dd":return t(e)?n?s+"dagar":s+(r?"daga":"dögum"):n?s+"dagur":s+(r?"dag":"degi")
case"M":return n?"mánuður":r?"mánuð":"mánuði"
case"MM":return t(e)?n?s+"mánuðir":s+(r?"mánuði":"mánuðum"):n?s+"mánuður":s+(r?"mánuð":"mánuði")
case"y":return n||r?"ár":"ári"
case"yy":return t(e)?s+(n||r?"ár":"árum"):s+(n||r?"ár":"ári")}}return e.lang("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] LT",LLLL:"dddd, D. MMMM YYYY [kl.] LT"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:n,m:n,mm:n,h:"klukkustund",hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},ordinal:"%d.",week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){return e.lang("it",{months:"Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre".split("_"),monthsShort:"Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),weekdays:"Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),weekdaysMin:"D_L_Ma_Me_G_V_S".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:"[lo scorso] dddd [alle] LT",sameElse:"L"},relativeTime:{future:function(e){return(/^[0-9].+$/.test(e)?"tra":"in")+" "+e},past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinal:"%dº",week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){return e.lang("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"Ah時m分",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日LT",LLLL:"YYYY年M月D日LT dddd"},meridiem:function(e){return 12>e?"午前":"午後"},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:"[来週]dddd LT",lastDay:"[昨日] LT",lastWeek:"[前週]dddd LT",sameElse:"L"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}})}),function(e){e(ie)}(function(e){function t(e,t){var n={nominative:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),accusative:"იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")},i=/D[oD] *MMMM?/.test(t)?"accusative":"nominative"
return n[i][e.month()]}function n(e,t){var n={nominative:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),accusative:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_")},i=/(წინა|შემდეგ)/.test(t)?"accusative":"nominative"
return n[i][e.day()]}return e.lang("ka",{months:t,monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekdays:n,weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"h:mm A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function(e){return/(წამი|წუთი|საათი|წელი)/.test(e)?e.replace(/ი$/,"ში"):e+"ში"},past:function(e){return/(წამი|წუთი|საათი|დღე|თვე)/.test(e)?e.replace(/(ი|ე)$/,"ის წინ"):/წელი/.test(e)?e.replace(/წელი$/,"წლის წინ"):void 0},s:"რამდენიმე წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათი",d:"დღე",dd:"%d დღე",M:"თვე",MM:"%d თვე",y:"წელი",yy:"%d წელი"},ordinal:function(e){return 0===e?e:1===e?e+"-ლი":20>e||100>=e&&e%20===0||e%100===0?"მე-"+e:e+"-ე"},week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){return e.lang("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h시 mm분",L:"YYYY.MM.DD",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 LT",LLLL:"YYYY년 MMMM D일 dddd LT"},meridiem:function(e){return 12>e?"오전":"오후"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇초",ss:"%d초",m:"일분",mm:"%d분",h:"한시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한달",MM:"%d달",y:"일년",yy:"%d년"},ordinal:"%d일",meridiemParse:/(오전|오후)/,isPM:function(e){return"오후"===e}})}),function(e){e(ie)}(function(e){function t(e,t,n){var i={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],dd:[e+" Deeg",e+" Deeg"],M:["ee Mount","engem Mount"],MM:[e+" Méint",e+" Méint"],y:["ee Joer","engem Joer"],yy:[e+" Joer",e+" Joer"]}
return t?i[n][0]:i[n][1]}function n(e){var t=e.substr(0,e.indexOf(" "))
return a(t)?"a "+e:"an "+e}function i(e){var t=e.substr(0,e.indexOf(" "))
return a(t)?"viru "+e:"virun "+e}function r(){var e=this.format("d")
return s(e)?"[Leschte] dddd [um] LT":"[Leschten] dddd [um] LT"}function s(e){switch(e=parseInt(e,10)){case 0:case 1:case 3:case 5:case 6:return!0
default:return!1}}function a(e){if(e=parseInt(e,10),isNaN(e))return!1
if(0>e)return!0
if(10>e)return e>=4&&7>=e?!0:!1
if(100>e){var t=e%10,n=e/10
return 0===t?a(n):a(t)}if(1e4>e){for(;e>=10;)e/=10
return a(e)}return e/=1e3,a(e)}return e.lang("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),longDateFormat:{LT:"H:mm [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:r},relativeTime:{future:n,past:i,s:"e puer Sekonnen",m:t,mm:"%d Minutten",h:t,hh:"%d Stonnen",d:t,dd:t,M:t,MM:t,y:t,yy:t},ordinal:"%d.",week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){function t(e,t,n,i){return t?"kelios sekundės":i?"kelių sekundžių":"kelias sekundes"}function n(e,t,n,i){return t?r(n)[0]:i?r(n)[1]:r(n)[2]}function i(e){return e%10===0||e>10&&20>e}function r(e){return o[e].split("_")}function s(e,t,s,a){var o=e+" "
return 1===e?o+n(e,t,s[0],a):t?o+(i(e)?r(s)[1]:r(s)[0]):a?o+r(s)[1]:o+(i(e)?r(s)[1]:r(s)[2])}function a(e,t){var n=-1===t.indexOf("dddd LT"),i=l[e.weekday()]
return n?i:i.substring(0,i.length-2)+"į"}var o={m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"},l="pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis_sekmadienis".split("_")
return e.lang("lt",{months:"sausio_vasario_kovo_balandžio_gegužės_biržėlio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:a,weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),longDateFormat:{LT:"HH:mm",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], LT [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, LT [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], LT [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, LT [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:t,m:n,mm:s,h:n,hh:s,d:n,dd:s,M:n,MM:s,y:n,yy:s},ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){function t(e,t,n){var i=e.split("_")
return n?t%10===1&&11!==t?i[2]:i[3]:t%10===1&&11!==t?i[0]:i[1]}function n(e,n,r){return e+" "+t(i[r],e,n)}var i={mm:"minūti_minūtes_minūte_minūtes",hh:"stundu_stundas_stunda_stundas",dd:"dienu_dienas_diena_dienas",MM:"mēnesi_mēnešus_mēnesis_mēneši",yy:"gadu_gadus_gads_gadi"}
return e.lang("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),longDateFormat:{LT:"HH:mm",L:"DD.MM.YYYY",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, LT",LLLL:"YYYY. [gada] D. MMMM, dddd, LT"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"%s vēlāk",past:"%s agrāk",s:"dažas sekundes",m:"minūti",mm:n,h:"stundu",hh:n,d:"dienu",dd:n,M:"mēnesi",MM:n,y:"gadu",yy:n},ordinal:"%d.",week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){return e.lang("mk",{months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),longDateFormat:{LT:"H:mm",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Денес во] LT",nextDay:"[Утре во] LT",nextWeek:"dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Во изминатата] dddd [во] LT"
case 1:case 2:case 4:case 5:return"[Во изминатиот] dddd [во] LT"}},sameElse:"L"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"},ordinal:function(e){var t=e%10,n=e%100
return 0===e?e+"-ев":0===n?e+"-ен":n>10&&20>n?e+"-ти":1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти"},week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){return e.lang("ml",{months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),longDateFormat:{LT:"A h:mm -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[ഇന്ന്] LT",nextDay:"[നാളെ] LT",nextWeek:"dddd, LT",lastDay:"[ഇന്നലെ] LT",lastWeek:"[കഴിഞ്ഞ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%d ദിവസം",M:"ഒരു മാസം",MM:"%d മാസം",y:"ഒരു വർഷം",yy:"%d വർഷം"},meridiem:function(e){return 4>e?"രാത്രി":12>e?"രാവിലെ":17>e?"ഉച്ച കഴിഞ്ഞ്":20>e?"വൈകുന്നേരം":"രാത്രി"}})}),function(e){e(ie)}(function(e){var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"}
return e.lang("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%s नंतर",past:"%s पूर्वी",s:"सेकंद",m:"एक मिनिट",mm:"%d मिनिटे",h:"एक तास",hh:"%d तास",d:"एक दिवस",dd:"%d दिवस",M:"एक महिना",MM:"%d महिने",y:"एक वर्ष",yy:"%d वर्षे"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiem:function(e){return 4>e?"रात्री":10>e?"सकाळी":17>e?"दुपारी":20>e?"सायंकाळी":"रात्री"},week:{dow:0,doy:6}})}),function(e){e(ie)}(function(e){return e.lang("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] LT",LLLL:"dddd, D MMMM YYYY [pukul] LT"},meridiem:function(e){return 11>e?"pagi":15>e?"tengahari":19>e?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){return e.lang("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"H.mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] LT",LLLL:"dddd D. MMMM YYYY [kl.] LT"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"for %s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},ordinal:"%d.",week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"}
return e.lang("ne",{months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आइ._सो._मङ्_बु._बि._शु._श.".split("_"),longDateFormat:{LT:"Aको h:mm बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiem:function(e){return 3>e?"राती":10>e?"बिहान":15>e?"दिउँसो":18>e?"बेलुका":20>e?"साँझ":"राती"},calendar:{sameDay:"[आज] LT",nextDay:"[भोली] LT",nextWeek:"[आउँदो] dddd[,] LT",lastDay:"[हिजो] LT",lastWeek:"[गएको] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sमा",past:"%s अगाडी",s:"केही समय",m:"एक मिनेट",mm:"%d मिनेट",h:"एक घण्टा",hh:"%d घण्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक बर्ष",yy:"%d बर्ष"},week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){var t="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),n="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
return e.lang("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,i){return/-MMM-/.test(i)?n[e.month()]:t[e.month()]},weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),longDateFormat:{LT:"HH:mm",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){return e.lang("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I går klokka] LT",lastWeek:"[Føregående] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"for %s siden",s:"noen sekund",m:"ett minutt",mm:"%d minutt",h:"en time",hh:"%d timar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},ordinal:"%d.",week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){function t(e){return 5>e%10&&e%10>1&&~~(e/10)%10!==1}function n(e,n,i){var r=e+" "
switch(i){case"m":return n?"minuta":"minutę"
case"mm":return r+(t(e)?"minuty":"minut")
case"h":return n?"godzina":"godzinę"
case"hh":return r+(t(e)?"godziny":"godzin")
case"MM":return r+(t(e)?"miesiące":"miesięcy")
case"yy":return r+(t(e)?"lata":"lat")}}var i="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),r="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_")
return e.lang("pl",{months:function(e,t){return/D MMMM/.test(t)?r[e.month()]:i[e.month()]},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"nie_pon_wt_śr_czw_pt_sb".split("_"),weekdaysMin:"N_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:"[W] dddd [o] LT",lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT"
case 3:return"[W zeszłą środę o] LT"
case 6:return"[W zeszłą sobotę o] LT"
default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:n,mm:n,h:n,hh:n,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:n,y:"rok",yy:n},ordinal:"%d.",week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){return e.lang("pt-br",{months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY LT",LLLL:"dddd, D [de] MMMM [de] YYYY LT"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atrás",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinal:"%dº"})}),function(e){e(ie)}(function(e){return e.lang("pt",{months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY LT",LLLL:"dddd, D [de] MMMM [de] YYYY LT"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atrás",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinal:"%dº",week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){function t(e,t,n){var i={mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"},r=" "
return(e%100>=20||e>=100&&e%100===0)&&(r=" de "),e+r+i[n]}return e.lang("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian_feb_mar_apr_mai_iun_iul_aug_sep_oct_noi_dec".split("_"),weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",m:"un minut",mm:t,h:"o oră",hh:t,d:"o zi",dd:t,M:"o lună",MM:t,y:"un an",yy:t},week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){function t(e,t,n){var i=e+" "
switch(n){case"m":return t?"jedna minuta":"jedne minute"
case"mm":return i+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta"
case"h":return t?"jedan sat":"jednog sata"
case"hh":return i+=1===e?"sat":2===e||3===e||4===e?"sata":"sati"
case"dd":return i+=1===e?"dan":"dana"
case"MM":return i+=1===e?"mesec":2===e||3===e||4===e?"meseca":"meseci"
case"yy":return i+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}return e.lang("rs",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdays:"nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sre._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),longDateFormat:{LT:"H:mm",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT"
case 3:return"[u] [sredu] [u] LT"
case 6:return"[u] [subotu] [u] LT"
case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT"
case 6:return"[prošle] [subote] [u] LT"
case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"par sekundi",m:t,mm:t,h:t,hh:t,d:"dan",dd:t,M:"mesec",MM:t,y:"godinu",yy:t},ordinal:"%d.",week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){function t(e,t){var n=e.split("_")
return t%10===1&&t%100!==11?n[0]:t%10>=2&&4>=t%10&&(10>t%100||t%100>=20)?n[1]:n[2]}function n(e,n,i){var r={mm:"минута_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}
return"m"===i?n?"минута":"минуту":e+" "+t(r[i],+e)}function i(e,t){var n={nominative:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),accusative:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")},i=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t)?"accusative":"nominative"
return n[i][e.month()]}function r(e,t){var n={nominative:"янв_фев_мар_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),accusative:"янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_")},i=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t)?"accusative":"nominative"
return n[i][e.month()]}function s(e,t){var n={nominative:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),accusative:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")},i=/\[ ?[Вв] ?(?:прошлую|следующую)? ?\] ?dddd/.test(t)?"accusative":"nominative"
return n[i][e.day()]}return e.lang("ru",{months:i,monthsShort:r,weekdays:s,weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[й|я]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i],longDateFormat:{LT:"HH:mm",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., LT",LLLL:"dddd, D MMMM YYYY г., LT"},calendar:{sameDay:"[Сегодня в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчера в] LT",nextWeek:function(){return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT"},lastWeek:function(){switch(this.day()){case 0:return"[В прошлое] dddd [в] LT"
case 1:case 2:case 4:return"[В прошлый] dddd [в] LT"
case 3:case 5:case 6:return"[В прошлую] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:n,mm:n,h:"час",hh:n,d:"день",dd:n,M:"месяц",MM:n,y:"год",yy:n},meridiem:function(e){return 4>e?"ночи":12>e?"утра":17>e?"дня":"вечера"},ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":return e+"-й"
case"D":return e+"-го"
case"w":case"W":return e+"-я"
default:return e}},week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){function t(e){return e>1&&5>e}function n(e,n,i,r){var s=e+" "
switch(i){case"s":return n||r?"pár sekúnd":"pár sekundami"
case"m":return n?"minúta":r?"minútu":"minútou"
case"mm":return n||r?s+(t(e)?"minúty":"minút"):s+"minútami"
break
case"h":return n?"hodina":r?"hodinu":"hodinou"
case"hh":return n||r?s+(t(e)?"hodiny":"hodín"):s+"hodinami"
break
case"d":return n||r?"deň":"dňom"
case"dd":return n||r?s+(t(e)?"dni":"dní"):s+"dňami"
break
case"M":return n||r?"mesiac":"mesiacom"
case"MM":return n||r?s+(t(e)?"mesiace":"mesiacov"):s+"mesiacmi"
break
case"y":return n||r?"rok":"rokom"
case"yy":return n||r?s+(t(e)?"roky":"rokov"):s+"rokmi"}}var i="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),r="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_")
return e.lang("sk",{months:i,monthsShort:r,monthsParse:function(e,t){var n,i=[]
for(n=0;12>n;n++)i[n]=new RegExp("^"+e[n]+"$|^"+t[n]+"$","i")
return i}(i,r),weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT"
case 1:case 2:return"[v] dddd [o] LT"
case 3:return"[v stredu o] LT"
case 4:return"[vo štvrtok o] LT"
case 5:return"[v piatok o] LT"
case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT"
case 1:case 2:return"[minulý] dddd [o] LT"
case 3:return"[minulú stredu o] LT"
case 4:case 5:return"[minulý] dddd [o] LT"
case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},ordinal:"%d.",week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){function t(e,t,n){var i=e+" "
switch(n){case"m":return t?"ena minuta":"eno minuto"
case"mm":return i+=1===e?"minuta":2===e?"minuti":3===e||4===e?"minute":"minut"
case"h":return t?"ena ura":"eno uro"
case"hh":return i+=1===e?"ura":2===e?"uri":3===e||4===e?"ure":"ur"
case"dd":return i+=1===e?"dan":"dni"
case"MM":return i+=1===e?"mesec":2===e?"meseca":3===e||4===e?"mesece":"mesecev"
case"yy":return i+=1===e?"leto":2===e?"leti":3===e||4===e?"leta":"let"}}return e.lang("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),longDateFormat:{LT:"H:mm",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT"
case 3:return"[v] [sredo] [ob] LT"
case 6:return"[v] [soboto] [ob] LT"
case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[prejšnja] dddd [ob] LT"
case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"%s nazaj",s:"nekaj sekund",m:t,mm:t,h:t,hh:t,d:"en dan",dd:t,M:"en mesec",MM:t,y:"eno leto",yy:t},ordinal:"%d.",week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){return e.lang("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Marte_E Mërkure_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Neser në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s me parë",s:"disa sekonda",m:"një minut",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"},ordinal:"%d.",week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){return e.lang("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"dddd LT",lastWeek:"[Förra] dddd[en] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"e":1===t?"a":2===t?"a":3===t?"e":"e"
return e+n},week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){return e.lang("ta",{months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[இன்று] LT",nextDay:"[நாளை] LT",nextWeek:"dddd, LT",lastDay:"[நேற்று] LT",lastWeek:"[கடந்த வாரம்] dddd, LT",sameElse:"L"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"},ordinal:function(e){return e+"வது"},meridiem:function(e){return e>=6&&10>=e?" காலை":e>=10&&14>=e?" நண்பகல்":e>=14&&18>=e?" எற்பாடு":e>=18&&20>=e?" மாலை":e>=20&&24>=e?" இரவு":e>=0&&6>=e?" வைகறை":void 0},week:{dow:0,doy:6}})}),function(e){e(ie)}(function(e){return e.lang("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),longDateFormat:{LT:"H นาฬิกา m นาที",L:"YYYY/MM/DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา LT",LLLL:"วันddddที่ D MMMM YYYY เวลา LT"},meridiem:function(e){return 12>e?"ก่อนเที่ยง":"หลังเที่ยง"},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}})}),function(e){e(ie)}(function(e){return e.lang("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM DD, YYYY LT"},calendar:{sameDay:"[Ngayon sa] LT",nextDay:"[Bukas sa] LT",nextWeek:"dddd [sa] LT",lastDay:"[Kahapon sa] LT",lastWeek:"dddd [huling linggo] LT",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},ordinal:function(e){return e},week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){var t={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"}
return e.lang("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[haftaya] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen hafta] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinal:function(e){if(0===e)return e+"'ıncı"
var n=e%10,i=e%100-n,r=e>=100?100:null
return e+(t[n]||t[i]||t[r])},week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){return e.lang("tzm-la",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}})}),function(e){e(ie)}(function(e){return e.lang("tzm",{months:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),monthsShort:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekdays:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysShort:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[ⴰⵙⴷⵅ ⴴ] LT",nextDay:"[ⴰⵙⴽⴰ ⴴ] LT",nextWeek:"dddd [ⴴ] LT",lastDay:"[ⴰⵚⴰⵏⵜ ⴴ] LT",lastWeek:"dddd [ⴴ] LT",sameElse:"L"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",past:"ⵢⴰⵏ %s",s:"ⵉⵎⵉⴽ",m:"ⵎⵉⵏⵓⴺ",mm:"%d ⵎⵉⵏⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:{dow:6,doy:12}})}),function(e){e(ie)}(function(e){function t(e,t){var n=e.split("_")
return t%10===1&&t%100!==11?n[0]:t%10>=2&&4>=t%10&&(10>t%100||t%100>=20)?n[1]:n[2]}function n(e,n,i){var r={mm:"хвилина_хвилини_хвилин",hh:"година_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"}
return"m"===i?n?"хвилина":"хвилину":"h"===i?n?"година":"годину":e+" "+t(r[i],+e)}function i(e,t){var n={nominative:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),accusative:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_")},i=/D[oD]? *MMMM?/.test(t)?"accusative":"nominative"
return n[i][e.month()]}function r(e,t){var n={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")},i=/(\[[ВвУу]\]) ?dddd/.test(t)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)?"genitive":"nominative"
return n[i][e.day()]}function s(e){return function(){return e+"о"+(11===this.hours()?"б":"")+"] LT"}}return e.lang("uk",{months:i,monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:r,weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., LT",LLLL:"dddd, D MMMM YYYY р., LT"},calendar:{sameDay:s("[Сьогодні "),nextDay:s("[Завтра "),lastDay:s("[Вчора "),nextWeek:s("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return s("[Минулої] dddd [").call(this)
case 1:case 2:case 4:return s("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:n,mm:n,h:"годину",hh:n,d:"день",dd:n,M:"місяць",MM:n,y:"рік",yy:n},meridiem:function(e){return 4>e?"ночі":12>e?"ранку":17>e?"дня":"вечора"},ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":case"w":case"W":return e+"-й"
case"D":return e+"-го"
default:return e}},week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){return e.lang("uz",{months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"D MMMM YYYY, dddd LT"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:"L"},relativeTime:{future:"Якин %s ичида",past:"Бир неча %s олдин",s:"фурсат",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"},week:{dow:1,doy:7}})}),function(e){e(ie)}(function(e){return e.lang("vn",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY LT",LLLL:"dddd, D MMMM [năm] YYYY LT",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY LT",llll:"ddd, D MMM YYYY LT"},calendar:{sameDay:"[Hôm nay lúc] LT",nextDay:"[Ngày mai lúc] LT",nextWeek:"dddd [tuần tới lúc] LT",lastDay:"[Hôm qua lúc] LT",lastWeek:"dddd [tuần rồi lúc] LT",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},ordinal:function(e){return e},week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){return e.lang("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah点mm",L:"YYYY-MM-DD",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日LT",LLLL:"YYYY年MMMD日ddddLT",l:"YYYY-MM-DD",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日LT",llll:"YYYY年MMMD日ddddLT"},meridiem:function(e,t){var n=100*e+t
return 600>n?"凌晨":900>n?"早上":1130>n?"上午":1230>n?"中午":1800>n?"下午":"晚上"},calendar:{sameDay:function(){return 0===this.minutes()?"[今天]Ah[点整]":"[今天]LT"},nextDay:function(){return 0===this.minutes()?"[明天]Ah[点整]":"[明天]LT"},lastDay:function(){return 0===this.minutes()?"[昨天]Ah[点整]":"[昨天]LT"},nextWeek:function(){var t,n
return t=e().startOf("week"),n=this.unix()-t.unix()>=604800?"[下]":"[本]",0===this.minutes()?n+"dddAh点整":n+"dddAh点mm"},lastWeek:function(){var t,n
return t=e().startOf("week"),n=this.unix()<t.unix()?"[上]":"[本]",0===this.minutes()?n+"dddAh点整":n+"dddAh点mm"},sameElse:"LL"},ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日"
case"M":return e+"月"
case"w":case"W":return e+"周"
default:return e}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1分钟",mm:"%d分钟",h:"1小时",hh:"%d小时",d:"1天",dd:"%d天",M:"1个月",MM:"%d个月",y:"1年",yy:"%d年"},week:{dow:1,doy:4}})}),function(e){e(ie)}(function(e){return e.lang("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah點mm",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日LT",LLLL:"YYYY年MMMD日ddddLT",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日LT",llll:"YYYY年MMMD日ddddLT"},meridiem:function(e,t){var n=100*e+t
return 900>n?"早上":1130>n?"上午":1230>n?"中午":1800>n?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日"
case"M":return e+"月"
case"w":case"W":return e+"週"
default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"一分鐘",mm:"%d分鐘",h:"一小時",hh:"%d小時",d:"一天",dd:"%d天",M:"一個月",MM:"%d個月",y:"一年",yy:"%d年"}})}),ie.lang("en"),ge?(module.exports=ie,ne(!0)):"function"==typeof define&&define.amd?define("moment",function(t,n,i){return i.config&&i.config()&&i.config().noGlobal!==!0&&ne(i.config().noGlobal===e),ie}):ne()}).call(this);(function(e){if(typeof define==="function"&&define.amd){return define(["jquery"],function(t){return e(t,window,document)})}else if(typeof exports==="object"){return module.exports=e(require("jquery"),window,document)}else{return e(jQuery,window,document)}})(function(e,t,n){"use strict"
var i,r,s,a,o,l,u,f,c,h,d,p,m,v,g,_,y,b,w,x,k,M,T,L,S,D,C,E,A,Y,j
T={paneClass:"nano-pane",sliderClass:"nano-slider",contentClass:"nano-content",iOSNativeScrolling:false,preventPageScrolling:false,disableResize:false,alwaysVisible:false,flashDelay:1500,sliderMinHeight:20,sliderMaxHeight:null,documentContext:null,windowContext:null}
b="scrollbar"
y="scroll"
c="mousedown"
h="mouseenter"
d="mousemove"
m="mousewheel"
p="mouseup"
_="resize"
o="drag"
l="enter"
x="up"
g="panedown"
s="DOMMouseScroll"
a="down"
k="wheel"
u="keydown"
f="keyup"
w="touchmove"
i=t.navigator.appName==="Microsoft Internet Explorer"&&/msie 7./i.test(t.navigator.appVersion)&&t.ActiveXObject
r=null
C=t.requestAnimationFrame
M=t.cancelAnimationFrame
A=n.createElement("div").style
j=function(){var e,t,n,i,r,s
i=["t","webkitT","MozT","msT","OT"]
for(e=r=0,s=i.length;r<s;e=++r){n=i[e]
t=i[e]+"ransform"
if(t in A){return i[e].substr(0,i[e].length-1)}}return false}()
Y=function(e){if(j===false){return false}if(j===""){return e}return j+e.charAt(0).toUpperCase()+e.substr(1)}
E=Y("transform")
S=E!==false
L=function(){var e,t,i
e=n.createElement("div")
t=e.style
t.position="absolute"
t.width="100px"
t.height="100px"
t.overflow=y
t.top="-9999px"
n.body.appendChild(e)
i=e.offsetWidth-e.clientWidth
n.body.removeChild(e)
return i}
D=function(){var e,n,i
n=t.navigator.userAgent
e=/(?=.+Mac OS X)(?=.+Firefox)/.test(n)
if(!e){return false}i=/Firefox\/\d{2}\./.exec(n)
if(i){i=i[0].replace(/\D+/g,"")}return e&&+i>23}
v=function(){function u(i,s){this.el=i
this.options=s
r||(r=L())
this.$el=e(this.el)
this.doc=e(this.options.documentContext||n)
this.win=e(this.options.windowContext||t)
this.body=this.doc.find("body")
this.$content=this.$el.children("."+this.options.contentClass)
this.$content.attr("tabindex",this.options.tabIndex||0)
this.content=this.$content[0]
this.previousPosition=0
if(this.options.iOSNativeScrolling&&this.el.style.WebkitOverflowScrolling!=null){this.nativeScrolling()}else{this.generate()}this.createEvents()
this.addEvents()
this.reset()}u.prototype.preventScrolling=function(e,t){if(!this.isActive){return}if(e.type===s){if(t===a&&e.originalEvent.detail>0||t===x&&e.originalEvent.detail<0){e.preventDefault()}}else if(e.type===m){if(!e.originalEvent||!e.originalEvent.wheelDelta){return}if(t===a&&e.originalEvent.wheelDelta<0||t===x&&e.originalEvent.wheelDelta>0){e.preventDefault()}}}
u.prototype.nativeScrolling=function(){this.$content.css({WebkitOverflowScrolling:"touch"})
this.iOSNativeScrolling=true
this.isActive=true}
u.prototype.updateScrollValues=function(){var e,t
e=this.content
this.maxScrollTop=e.scrollHeight-e.clientHeight
this.prevScrollTop=this.contentScrollTop||0
this.contentScrollTop=e.scrollTop
t=this.contentScrollTop>this.previousPosition?"down":this.contentScrollTop<this.previousPosition?"up":"same"
this.previousPosition=this.contentScrollTop
if(t!=="same"){this.$el.trigger("update",{position:this.contentScrollTop,maximum:this.maxScrollTop,direction:t})}if(!this.iOSNativeScrolling){this.maxSliderTop=this.paneHeight-this.sliderHeight
this.sliderTop=this.maxScrollTop===0?0:this.contentScrollTop*this.maxSliderTop/this.maxScrollTop}}
u.prototype.setOnScrollStyles=function(){var e
if(S){e={}
e[E]="translate(0, "+this.sliderTop+"px)"}else{e={top:this.sliderTop}}if(C){if(M&&this.scrollRAF){M(this.scrollRAF)}this.scrollRAF=C(function(t){return function(){t.scrollRAF=null
return t.slider.css(e)}}(this))}else{this.slider.css(e)}}
u.prototype.createEvents=function(){this.events={down:function(e){return function(t){e.isBeingDragged=true
e.offsetY=t.pageY-e.slider.offset().top
if(!e.slider.is(t.target)){e.offsetY=0}e.pane.addClass("active")
e.doc.bind(d,e.events[o]).bind(p,e.events[x])
e.body.bind(h,e.events[l])
return false}}(this),drag:function(e){return function(t){e.sliderY=t.pageY-e.$el.offset().top-e.paneTop-(e.offsetY||e.sliderHeight*.5)
e.scroll()
if(e.contentScrollTop>=e.maxScrollTop&&e.prevScrollTop!==e.maxScrollTop){e.$el.trigger("scrollend")}else if(e.contentScrollTop===0&&e.prevScrollTop!==0){e.$el.trigger("scrolltop")}return false}}(this),up:function(e){return function(t){e.isBeingDragged=false
e.pane.removeClass("active")
e.doc.unbind(d,e.events[o]).unbind(p,e.events[x])
e.body.unbind(h,e.events[l])
return false}}(this),resize:function(e){return function(t){e.reset()}}(this),panedown:function(e){return function(t){e.sliderY=(t.offsetY||t.originalEvent.layerY)-e.sliderHeight*.5
e.scroll()
e.events.down(t)
return false}}(this),scroll:function(e){return function(t){e.updateScrollValues()
if(e.isBeingDragged){return}if(!e.iOSNativeScrolling){e.sliderY=e.sliderTop
e.setOnScrollStyles()}if(t==null){return}if(e.contentScrollTop>=e.maxScrollTop){if(e.options.preventPageScrolling){e.preventScrolling(t,a)}if(e.prevScrollTop!==e.maxScrollTop){e.$el.trigger("scrollend")}}else if(e.contentScrollTop===0){if(e.options.preventPageScrolling){e.preventScrolling(t,x)}if(e.prevScrollTop!==0){e.$el.trigger("scrolltop")}}}}(this),wheel:function(e){return function(t){var n
if(t==null){return}n=t.delta||t.wheelDelta||t.originalEvent&&t.originalEvent.wheelDelta||-t.detail||t.originalEvent&&-t.originalEvent.detail
if(n){e.sliderY+=-n/3}e.scroll()
return false}}(this),enter:function(e){return function(t){var n
if(!e.isBeingDragged){return}if((t.buttons||t.which)!==1){return(n=e.events)[x].apply(n,arguments)}}}(this)}}
u.prototype.addEvents=function(){var e
this.removeEvents()
e=this.events
if(!this.options.disableResize){this.win.bind(_,e[_])}if(!this.iOSNativeScrolling){this.slider.bind(c,e[a])
this.pane.bind(c,e[g]).bind(""+m+" "+s,e[k])}this.$content.bind(""+y+" "+m+" "+s+" "+w,e[y])}
u.prototype.removeEvents=function(){var e
e=this.events
this.win.unbind(_,e[_])
if(!this.iOSNativeScrolling){this.slider.unbind()
this.pane.unbind()}this.$content.unbind(""+y+" "+m+" "+s+" "+w,e[y])}
u.prototype.generate=function(){var e,n,i,s,a,o,l
s=this.options
o=s.paneClass,l=s.sliderClass,e=s.contentClass
if(!(a=this.$el.children("."+o)).length&&!a.children("."+l).length){this.$el.append('<div class="'+o+'"><div class="'+l+'" /></div>')}this.pane=this.$el.children("."+o)
this.slider=this.pane.find("."+l)
if(r===0&&D()){i=t.getComputedStyle(this.content,null).getPropertyValue("padding-right").replace(/[^0-9.]+/g,"")
n={right:-14,paddingRight:+i+14}}else if(r){n={right:-r}
this.$el.addClass("has-scrollbar")}if(n!=null){this.$content.css(n)}return this}
u.prototype.restore=function(){this.stopped=false
if(!this.iOSNativeScrolling){this.pane.show()}this.addEvents()}
u.prototype.reset=function(){var e,t,n,s,a,o,l,u,f,c,h,d
if(this.iOSNativeScrolling){this.contentHeight=this.content.scrollHeight
return}if(!this.$el.find("."+this.options.paneClass).length){this.generate().stop()}if(this.stopped){this.restore()}e=this.content
s=e.style
a=s.overflowY
if(i){this.$content.css({height:this.$content.height()})}t=e.scrollHeight+r
c=parseInt(this.$el.css("max-height"),10)
if(c>0){this.$el.height("")
this.$el.height(e.scrollHeight>c?c:e.scrollHeight)}l=this.pane.outerHeight(false)
f=parseInt(this.pane.css("top"),10)
o=parseInt(this.pane.css("bottom"),10)
u=l+f+o
d=Math.round(u/t*l)
if(d<this.options.sliderMinHeight){d=this.options.sliderMinHeight}else if(this.options.sliderMaxHeight!=null&&d>this.options.sliderMaxHeight){d=this.options.sliderMaxHeight}if(a===y&&s.overflowX!==y){d+=r}this.maxSliderTop=u-d
this.contentHeight=t
this.paneHeight=l
this.paneOuterHeight=u
this.sliderHeight=d
this.paneTop=f
this.slider.height(d)
this.events.scroll()
this.pane.show()
this.isActive=true
if(e.scrollHeight===e.clientHeight||this.pane.outerHeight(true)>=e.scrollHeight&&a!==y){this.pane.hide()
this.isActive=false}else if(this.el.clientHeight===e.scrollHeight&&a===y){this.slider.hide()}else{this.slider.show()}this.pane.css({opacity:this.options.alwaysVisible?1:"",visibility:this.options.alwaysVisible?"visible":""})
n=this.$content.css("position")
if(n==="static"||n==="relative"){h=parseInt(this.$content.css("right"),10)
if(h){this.$content.css({right:"",marginRight:h})}}return this}
u.prototype.scroll=function(){if(!this.isActive){return}this.sliderY=Math.max(0,this.sliderY)
this.sliderY=Math.min(this.maxSliderTop,this.sliderY)
this.$content.scrollTop(this.maxScrollTop*this.sliderY/this.maxSliderTop)
if(!this.iOSNativeScrolling){this.updateScrollValues()
this.setOnScrollStyles()}return this}
u.prototype.scrollBottom=function(e){if(!this.isActive){return}this.$content.scrollTop(this.contentHeight-this.$content.height()-e).trigger(m)
this.stop().restore()
return this}
u.prototype.scrollTop=function(e){if(!this.isActive){return}this.$content.scrollTop(+e).trigger(m)
this.stop().restore()
return this}
u.prototype.scrollTo=function(e){if(!this.isActive){return}this.scrollTop(this.$el.find(e).get(0).offsetTop)
return this}
u.prototype.stop=function(){if(M&&this.scrollRAF){M(this.scrollRAF)
this.scrollRAF=null}this.stopped=true
this.removeEvents()
if(!this.iOSNativeScrolling){this.pane.hide()}return this}
u.prototype.destroy=function(){if(!this.stopped){this.stop()}if(!this.iOSNativeScrolling&&this.pane.length){this.pane.remove()}if(i){this.$content.height("")}this.$content.removeAttr("tabindex")
if(this.$el.hasClass("has-scrollbar")){this.$el.removeClass("has-scrollbar")
this.$content.css({right:""})}return this}
u.prototype.flash=function(){if(this.iOSNativeScrolling){return}if(!this.isActive){return}this.reset()
this.pane.addClass("flashed")
setTimeout(function(e){return function(){e.pane.removeClass("flashed")}}(this),this.options.flashDelay)
return this}
return u}()
e.fn.nanoScroller=function(t){return this.each(function(){var n,i
if(!(i=this.nanoscroller)){n=e.extend({},T,t)
this.nanoscroller=i=new v(this,n)}if(t&&typeof t==="object"){e.extend(i.options,t)
if(t.scrollBottom!=null){return i.scrollBottom(t.scrollBottom)}if(t.scrollTop!=null){return i.scrollTop(t.scrollTop)}if(t.scrollTo){return i.scrollTo(t.scrollTo)}if(t.scroll==="bottom"){return i.scrollBottom(0)}if(t.scroll==="top"){return i.scrollTop(0)}if(t.scroll&&t.scroll instanceof e){return i.scrollTo(t.scroll)}if(t.stop){return i.stop()}if(t.destroy){return i.destroy()}if(t.flash){return i.flash()}}return i.reset()})}
e.fn.nanoScroller.Constructor=v});(function(e){var t=setTimeout
function n(){}var i=typeof setImmediate==="function"&&setImmediate||function(e){t(e,0)}
var r=function e(t){if(typeof console!=="undefined"&&console){console.warn("Possible Unhandled Promise Rejection:",t)}}
function s(e,t){return function(){e.apply(t,arguments)}}function a(e){if(typeof this!=="object")throw new TypeError("Promises must be constructed via new")
if(typeof e!=="function")throw new TypeError("not a function")
this._state=0
this._handled=false
this._value=undefined
this._deferreds=[]
h(e,this)}function o(e,t){while(e._state===3){e=e._value}if(e._state===0){e._deferreds.push(t)
return}e._handled=true
i(function(){var n=e._state===1?t.onFulfilled:t.onRejected
if(n===null){(e._state===1?l:u)(t.promise,e._value)
return}var i
try{i=n(e._value)}catch(e){u(t.promise,e)
return}l(t.promise,i)})}function l(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&(typeof t==="object"||typeof t==="function")){var n=t.then
if(t instanceof a){e._state=3
e._value=t
f(e)
return}else if(typeof n==="function"){h(s(n,t),e)
return}}e._state=1
e._value=t
f(e)}catch(t){u(e,t)}}function u(e,t){e._state=2
e._value=t
f(e)}function f(e){if(e._state===2&&e._deferreds.length===0){i(function(){if(!e._handled){r(e._value)}})}for(var t=0,n=e._deferreds.length;t<n;t++){o(e,e._deferreds[t])}e._deferreds=null}function c(e,t,n){this.onFulfilled=typeof e==="function"?e:null
this.onRejected=typeof t==="function"?t:null
this.promise=n}function h(e,t){var n=false
try{e(function(e){if(n)return
n=true
l(t,e)},function(e){if(n)return
n=true
u(t,e)})}catch(e){if(n)return
n=true
u(t,e)}}a.prototype["catch"]=function(e){return this.then(null,e)}
a.prototype.then=function(e,t){var i=new this.constructor(n)
o(this,new c(e,t,i))
return i}
a.all=function(e){var t=Array.prototype.slice.call(e)
return new a(function(e,n){if(t.length===0)return e([])
var i=t.length
function r(s,a){try{if(a&&(typeof a==="object"||typeof a==="function")){var o=a.then
if(typeof o==="function"){o.call(a,function(e){r(s,e)},n)
return}}t[s]=a
if(--i===0){e(t)}}catch(e){n(e)}}for(var s=0;s<t.length;s++){r(s,t[s])}})}
a.resolve=function(e){if(e&&typeof e==="object"&&e.constructor===a){return e}return new a(function(t){t(e)})}
a.reject=function(e){return new a(function(t,n){n(e)})}
a.race=function(e){return new a(function(t,n){for(var i=0,r=e.length;i<r;i++){e[i].then(t,n)}})}
a._setImmediateFn=function e(t){i=t}
a._setUnhandledRejectionFn=function e(t){r=t}
if(typeof module!=="undefined"&&module.exports){module.exports=a}else if(!e.Promise){e.Promise=a}})(this)
!function(e,t){"use strict"
var n=t.prototype.trim
var i=t.prototype.trimRight
var r=t.prototype.trimLeft
var s=function(e){return e*1||0}
var a=function(e,t){if(t<1)return""
var n=""
while(t>0){if(t&1)n+=e
t>>=1,e+=e}return n}
var o=[].slice
var l=function(e){if(e==null)return"\\s"
else if(e.source)return e.source
else return"["+p.escapeRegExp(e)+"]"}
function u(e,t){var n,i,r=e.toLowerCase()
t=[].concat(t)
for(n=0;n<t.length;n+=1){i=t[n]
if(!i)continue
if(i.test&&i.test(e))return true
if(i.toLowerCase()===r)return true}}var f={lt:"<",gt:">",quot:'"',amp:"&",apos:"'"}
var c={}
for(var h in f)c[f[h]]=h
c["'"]="#39"
var d=function(){function e(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}var n=a
var i=function(){if(!i.cache.hasOwnProperty(arguments[0])){i.cache[arguments[0]]=i.parse(arguments[0])}return i.format.call(null,i.cache[arguments[0]],arguments)}
i.format=function(i,r){var s=1,a=i.length,o="",l,u=[],f,c,h,p,m,v
for(f=0;f<a;f++){o=e(i[f])
if(o==="string"){u.push(i[f])}else if(o==="array"){h=i[f]
if(h[2]){l=r[s]
for(c=0;c<h[2].length;c++){if(!l.hasOwnProperty(h[2][c])){throw new Error(d('[_.sprintf] property "%s" does not exist',h[2][c]))}l=l[h[2][c]]}}else if(h[1]){l=r[h[1]]}else{l=r[s++]}if(/[^s]/.test(h[8])&&e(l)!="number"){throw new Error(d("[_.sprintf] expecting number but found %s",e(l)))}switch(h[8]){case"b":l=l.toString(2)
break
case"c":l=t.fromCharCode(l)
break
case"d":l=parseInt(l,10)
break
case"e":l=h[7]?l.toExponential(h[7]):l.toExponential()
break
case"f":l=h[7]?parseFloat(l).toFixed(h[7]):parseFloat(l)
break
case"o":l=l.toString(8)
break
case"s":l=(l=t(l))&&h[7]?l.substring(0,h[7]):l
break
case"u":l=Math.abs(l)
break
case"x":l=l.toString(16)
break
case"X":l=l.toString(16).toUpperCase()
break}l=/[def]/.test(h[8])&&h[3]&&l>=0?"+"+l:l
m=h[4]?h[4]=="0"?"0":h[4].charAt(1):" "
v=h[6]-t(l).length
p=h[6]?n(m,v):""
u.push(h[5]?l+p:p+l)}}return u.join("")}
i.cache={}
i.parse=function(e){var t=e,n=[],i=[],r=0
while(t){if((n=/^[^\x25]+/.exec(t))!==null){i.push(n[0])}else if((n=/^\x25{2}/.exec(t))!==null){i.push("%")}else if((n=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t))!==null){if(n[2]){r|=1
var s=[],a=n[2],o=[]
if((o=/^([a-z_][a-z_\d]*)/i.exec(a))!==null){s.push(o[1])
while((a=a.substring(o[0].length))!==""){if((o=/^\.([a-z_][a-z_\d]*)/i.exec(a))!==null){s.push(o[1])}else if((o=/^\[(\d+)\]/.exec(a))!==null){s.push(o[1])}else{throw new Error("[_.sprintf] huh?")}}}else{throw new Error("[_.sprintf] huh?")}n[2]=s}else{r|=2}if(r===3){throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported")}i.push(n)}else{throw new Error("[_.sprintf] huh?")}t=t.substring(n[0].length)}return i}
return i}()
var p={VERSION:"2.3.0",isBlank:function(e){if(e==null)e=""
return/^\s*$/.test(e)},stripTags:function(e){if(e==null)return""
return t(e).replace(/<\/?[^>]+>/g,"")},capitalize:function(e){e=e==null?"":t(e)
return e.charAt(0).toUpperCase()+e.slice(1)},chop:function(e,n){if(e==null)return[]
e=t(e)
n=~~n
return n>0?e.match(new RegExp(".{1,"+n+"}","g")):[e]},clean:function(e){return p.strip(e).replace(/\s+/g," ")},count:function(e,n){if(e==null||n==null)return 0
e=t(e)
n=t(n)
var i=0,r=0,s=n.length
while(true){r=e.indexOf(n,r)
if(r===-1)break
i++
r+=s}return i},chars:function(e){if(e==null)return[]
return t(e).split("")},swapCase:function(e){if(e==null)return""
return t(e).replace(/\S/g,function(e){return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()})},escapeHTML:function(e){if(e==null)return""
return t(e).replace(/[&<>"']/g,function(e){return"&"+c[e]+";"})},unescapeHTML:function(e){if(e==null)return""
return t(e).replace(/\&([^;]+);/g,function(e,n){var i
if(n in f){return f[n]}else if(i=n.match(/^#x([\da-fA-F]+)$/)){return t.fromCharCode(parseInt(i[1],16))}else if(i=n.match(/^#(\d+)$/)){return t.fromCharCode(~~i[1])}else{return e}})},escapeRegExp:function(e){if(e==null)return""
return t(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")},splice:function(e,t,n,i){var r=p.chars(e)
r.splice(~~t,~~n,i)
return r.join("")},insert:function(e,t,n){return p.splice(e,t,0,n)},include:function(e,n){if(n==="")return true
if(e==null)return false
return t(e).indexOf(n)!==-1},join:function(){var e=o.call(arguments),t=e.shift()
if(t==null)t=""
return e.join(t)},lines:function(e){if(e==null)return[]
return t(e).split("\n")},reverse:function(e){return p.chars(e).reverse().join("")},startsWith:function(e,n){if(n==="")return true
if(e==null||n==null)return false
e=t(e)
n=t(n)
return e.length>=n.length&&e.slice(0,n.length)===n},endsWith:function(e,n){if(n==="")return true
if(e==null||n==null)return false
e=t(e)
n=t(n)
return e.length>=n.length&&e.slice(e.length-n.length)===n},succ:function(e){if(e==null)return""
e=t(e)
return e.slice(0,-1)+t.fromCharCode(e.charCodeAt(e.length-1)+1)},titleize:function(e){if(e==null)return""
e=t(e).toLowerCase()
return e.replace(/(?:^|\s|-)\S/g,function(e){return e.toUpperCase()})},camelize:function(e){return p.trim(e).replace(/[-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})},underscored:function(e){return p.trim(e).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()},dasherize:function(e){return p.trim(e).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()},classify:function(e){return p.titleize(t(e).replace(/[\W_]/g," ")).replace(/\s/g,"")},humanize:function(e){return p.capitalize(p.underscored(e).replace(/_id$/,"").replace(/_/g," "))},trim:function(e,i){if(e==null)return""
if(!i&&n)return n.call(e)
i=l(i)
return t(e).replace(new RegExp("^"+i+"+|"+i+"+$","g"),"")},ltrim:function(e,n){if(e==null)return""
if(!n&&r)return r.call(e)
n=l(n)
return t(e).replace(new RegExp("^"+n+"+"),"")},rtrim:function(e,n){if(e==null)return""
if(!n&&i)return i.call(e)
n=l(n)
return t(e).replace(new RegExp(n+"+$"),"")},truncate:function(e,n,i){if(e==null)return""
e=t(e)
i=i||"..."
n=~~n
return e.length>n?e.slice(0,n)+i:e},prune:function(e,n,i){if(e==null)return""
e=t(e)
n=~~n
i=i!=null?t(i):"..."
if(e.length<=n)return e
var r=function(e){return e.toUpperCase()!==e.toLowerCase()?"A":" "},s=e.slice(0,n+1).replace(/.(?=\W*\w*$)/g,r)
if(s.slice(s.length-2).match(/\w\w/))s=s.replace(/\s*\S+$/,"")
else s=p.rtrim(s.slice(0,s.length-1))
return(s+i).length>e.length?e:e.slice(0,s.length)+i},words:function(e,t){if(p.isBlank(e))return[]
return p.trim(e,t).split(t||/\s+/)},pad:function(e,n,i,r){e=e==null?"":t(e)
n=~~n
var s=0
if(!i)i=" "
else if(i.length>1)i=i.charAt(0)
switch(r){case"right":s=n-e.length
return e+a(i,s)
case"both":s=n-e.length
return a(i,Math.ceil(s/2))+e+a(i,Math.floor(s/2))
default:s=n-e.length
return a(i,s)+e}},lpad:function(e,t,n){return p.pad(e,t,n)},rpad:function(e,t,n){return p.pad(e,t,n,"right")},lrpad:function(e,t,n){return p.pad(e,t,n,"both")},sprintf:d,vsprintf:function(e,t){t.unshift(e)
return d.apply(null,t)},toNumber:function(e,t){if(!e)return 0
e=p.trim(e)
if(!e.match(/^-?\d+(?:\.\d+)?$/))return NaN
return s(s(e).toFixed(~~t))},numberFormat:function(e,t,n,i){if(isNaN(e)||e==null)return""
e=e.toFixed(~~t)
i=typeof i=="string"?i:","
var r=e.split("."),s=r[0],a=r[1]?(n||".")+r[1]:""
return s.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+i)+a},strRight:function(e,n){if(e==null)return""
e=t(e)
n=n!=null?t(n):n
var i=!n?-1:e.indexOf(n)
return~i?e.slice(i+n.length,e.length):e},strRightBack:function(e,n){if(e==null)return""
e=t(e)
n=n!=null?t(n):n
var i=!n?-1:e.lastIndexOf(n)
return~i?e.slice(i+n.length,e.length):e},strLeft:function(e,n){if(e==null)return""
e=t(e)
n=n!=null?t(n):n
var i=!n?-1:e.indexOf(n)
return~i?e.slice(0,i):e},strLeftBack:function(e,t){if(e==null)return""
e+=""
t=t!=null?""+t:t
var n=e.lastIndexOf(t)
return~n?e.slice(0,n):e},toSentence:function(e,t,n,i){t=t||", "
n=n||" and "
var r=e.slice(),s=r.pop()
if(e.length>2&&i)n=p.rtrim(t)+n
return r.length?r.join(t)+n+s:s},toSentenceSerial:function(){var e=o.call(arguments)
e[3]=true
return p.toSentence.apply(p,e)},slugify:function(e){if(e==null)return""
var n="ąàáäâãåæăćęèéëêìíïîłńòóöôõøśșțùúüûñçżź",i="aaaaaaaaaceeeeeiiiilnoooooosstuuuunczz",r=new RegExp(l(n),"g")
e=t(e).toLowerCase().replace(r,function(e){var t=n.indexOf(e)
return i.charAt(t)||"-"})
return p.dasherize(e.replace(/[^\w\s-]/g,""))},surround:function(e,t){return[t,e,t].join("")},quote:function(e,t){return p.surround(e,t||'"')},unquote:function(e,t){t=t||'"'
if(e[0]===t&&e[e.length-1]===t)return e.slice(1,e.length-1)
else return e},exports:function(){var e={}
for(var t in this){if(!this.hasOwnProperty(t)||t.match(/^(?:include|contains|reverse)$/))continue
e[t]=this[t]}return e},repeat:function(e,n,i){if(e==null)return""
n=~~n
if(i==null)return a(t(e),n)
for(var r=[];n>0;r[--n]=e){}return r.join(i)},naturalCmp:function(e,n){if(e==n)return 0
if(!e)return-1
if(!n)return 1
var i=/(\.\d+)|(\d+)|(\D+)/g,r=t(e).toLowerCase().match(i),s=t(n).toLowerCase().match(i),a=Math.min(r.length,s.length)
for(var o=0;o<a;o++){var l=r[o],u=s[o]
if(l!==u){var f=parseInt(l,10)
if(!isNaN(f)){var c=parseInt(u,10)
if(!isNaN(c)&&f-c)return f-c}return l<u?-1:1}}if(r.length===s.length)return r.length-s.length
return e<n?-1:1},levenshtein:function(e,n){if(e==null&&n==null)return 0
if(e==null)return t(n).length
if(n==null)return t(e).length
e=t(e)
n=t(n)
var i=[],r,s
for(var a=0;a<=n.length;a++)for(var o=0;o<=e.length;o++){if(a&&o)if(e.charAt(o-1)===n.charAt(a-1))s=r
else s=Math.min(i[o],i[o-1],r)+1
else s=a+o
r=i[o]
i[o]=s}return i.pop()},toBoolean:function(e,t,n){if(typeof e==="number")e=""+e
if(typeof e!=="string")return!!e
e=p.trim(e)
if(u(e,t||["true","1"]))return true
if(u(e,n||["false","0"]))return false}}
p.strip=p.trim
p.lstrip=p.ltrim
p.rstrip=p.rtrim
p.center=p.lrpad
p.rjust=p.lpad
p.ljust=p.rpad
p.contains=p.include
p.q=p.quote
p.toBool=p.toBoolean
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports)module.exports=p
exports._s=p}if(typeof define==="function"&&define.amd)define("underscore.string",[],function(){return p})
e._=e._||{}
e._.string=e._.str=p}(this,String);(function(e){"use strict"
if(typeof define==="function"&&define.amd){define(["underscore","backbone"],e)}else{e(_,Backbone)}})(function(e,t){"use strict"
var n={},i,r=t.View.prototype.delegateEvents,s=t.View.prototype.undelegateEvents
t.Mediator={init:function(){this.setUpValidator()
this.validationEnabled=true
this.channelSchemas={}
this.unvalidatedChannels=[]
n={}},addChannelSchema:function(e,t){if(t&&Object.keys(t).length)this.channelSchemas[e]=t},addDefSchema:function(e){this.tv4.addSchema(e)},addChannelSchemas:function(e){for(var t in e){var n=e[t]
if(n)this.channelSchemas[t]=n}},addDefSchemas:function(e){for(var t in e){this.tv4.addSchema(e[t])}},setUpValidator:function(){this.tv4=window["tv4"].freshApi()},setValidationEnabled:function(e){this.validationEnabled=e},subscribe:function(t,i,r,s){if(!n[t])n[t]=[]
if(this.validationEnabled&&!(t in this.channelSchemas)&&!e.contains(this.unvalidatedChannels,t)){this.unvalidatedChannels.push(t)
console.warn("Missing schema for channel '"+t+"'.")}n[t].push({fn:i,context:r||this,once:s})},publish:function(i,r){if(i in this.channelSchemas){if(this.validationEnabled){var s=this.tv4.validate(r,this.channelSchemas[i])
if(!s){console.error("Dropping publication because of validation error:",this.tv4.error)
return}else if(this.tv4.missing.length){console.warn("Missing schema reference to "+this.tv4.missing[0])}}}else if(this.validationEnabled&&!e.contains(this.unvalidatedChannels,i)){this.unvalidatedChannels.push(i)
console.warn("Missing schema for channel '"+i+"'.")}if(!n[i])return
var a
for(var o=0;o<n[i].length;o++){a=n[i][o]
a.fn.call(a.context,r)
if(a.once){t.Mediator.unsubscribe(i,a.fn,a.context)
o--}}},unsubscribe:function(e,t,i){if(!n[e])return
var r
for(var s=0;s<n[e].length;s++){r=n[e][s]
if(r.fn===t&&r.context===i){n[e].splice(s,1)
s--}}},subscribeOnce:function(e,n,i){t.Mediator.subscribe(e,n,i,true)}}
i={delegateEvents:function(){r.apply(this,arguments)
this.setSubscriptions()},undelegateEvents:function(){s.apply(this,arguments)
this.unsetSubscriptions()},subscriptions:{},setSubscriptions:function(n){if(n)e.extend(this.subscriptions||{},n)
n=n||this.subscriptions
if(!n||e.isEmpty(n))return
this.unsetSubscriptions(n)
e.each(n,function(n,i){var r
if(n.$once){n=n.$once
r=true}if(e.isString(n)){n=this[n]}t.Mediator.subscribe(i,n,this,r)},this)},unsetSubscriptions:function(n){n=n||this.subscriptions
if(!n||e.isEmpty(n))return
e.each(n,function(n,i){if(e.isString(n)){n=this[n]}t.Mediator.unsubscribe(i,n.$once||n,this)},this)}}
e.extend(t.View.prototype,i)
e.extend(t.Mediator,{pub:t.Mediator.publish,sub:t.Mediator.subscribe})
t.Mediator.init()
return t})
var TreemaUtils
TreemaUtils=function(){var e
e={}
e.populateDefaults=function(e,t,n){var i=this
if(t["default"]&&!e){e=this.cloneDeep(t["default"])}this.walk(e,t,n,function(e,t,n){var r,s,a,o
r=n["default"]
if(!(i.type(r)==="object"&&i.type(t)==="object")){return}o=[]
for(s in r){a=r[s]
if(t[s]===void 0){o.push(t[s]=i.cloneDeep(a))}else{o.push(void 0)}}return o})
return e}
e.populateRequireds=function(e,t,n){var i=this
if(e==null){e={}}this.walk(e,t,n,function(e,t,r){var s,a,o,l,u,f,c,h,d,p
if(!(r.required&&i.type(t)==="object")){return}h=r.required
p=[]
for(f=0,c=h.length;f<c;f++){a=h[f]
if(t[a]!=null){continue}if(o=(d=r["default"])!=null?d[a]:void 0){p.push(t[a]=i.cloneDeep(o))}else{s=i.getChildSchema(a,r)
u=i.buildWorkingSchemas(s,n)[0]
o=u["default"]
if(o!=null){p.push(t[a]=i.cloneDeep(o))}else{l=u.type
if(i.type(l)==="array"){l=l[0]}if(!l){l="string"}p.push(t[a]=i.defaultForType(l))}}}return p})
return e}
e.walk=function(e,t,n,i,r){var s,a,o,l,u,f,c,h,d,p,m=this
if(r==null){r=""}if(!n){n=this.getGlobalTv4().freshApi()
n.addSchema("#",t)
if(t.id){n.addSchema(t.id,t)}}f=this.buildWorkingSchemas(t,n)
u=this.chooseWorkingSchema(e,f,n)
i(r,e,u)
s=this.type(e)
if(s==="array"||s==="object"){a=function(t,s){var a,o
s=e[t]
a=r.slice()
if(a){a+="."}a+=t
o=m.getChildSchema(t,u)
return m.walk(s,o,n,i,a)}
if(s==="array"){d=[]
for(o=c=0,h=e.length;c<h;o=++c){l=e[o]
d.push(a(o,l))}return d}else{p=[]
for(o in e){l=e[o]
p.push(a(o,l))}return p}}}
e.getChildSchema=function(e,t){var n,i,r,s,a
if(this.type(e)==="string"){s=t.properties
for(n in s){i=s[n]
if(n===e){return i}}a=t.patternProperties
for(n in a){i=a[n]
if(e.match(new RegExp(n))){return i}}if(typeof t.additionalProperties==="object"){return t.additionalProperties}}if(this.type(e)==="number"){r=e
if(t.items){if(Array.isArray(t.items)){if(r<t.items.length){return t.items[r]}else if(t.additionalItems){return t.additionalItems}}else if(t.items){return t.items}}}return{}}
e.buildWorkingSchemas=function(e,t){var n,i,r,s,a,o,l,u,f,c,h,d
if(e==null){e={}}r=this.resolveReference(e,t)
if(!(e.allOf||e.anyOf||e.oneOf)){return[e]}r=this.cloneSchema(r)
n=r.allOf
i=r.anyOf
a=r.oneOf
if(r.allOf!=null){delete r.allOf}if(r.anyOf!=null){delete r.anyOf}if(r.oneOf!=null){delete r.oneOf}if(n!=null){for(f=0,h=n.length;f<h;f++){e=n[f]
this.combineSchemas(r,this.resolveReference(e,t))}}u=[]
l=[]
if(i!=null){l=l.concat(i)}if(a!=null){l=l.concat(a)}for(c=0,d=l.length;c<d;c++){o=l[c]
o=this.resolveReference(o,t)
s=this.cloneSchema(r)
this.combineSchemas(s,o)
u.push(s)}if(u.length===0){u=[r]}return u}
e.chooseWorkingSchema=function(e,t,n){var i,r,s,a
if(t.length===1){return t[0]}if(n==null){n=this.getGlobalTv4()}for(s=0,a=t.length;s<a;s++){r=t[s]
i=n.validateMultiple(e,r)
if(i.valid){return r}}return t[0]}
e.resolveReference=function(e,t,n){var i
if(n==null){n=false}if(e.$ref==null){return e}if(t==null){t=this.getGlobalTv4()}i=t.getSchema(e.$ref)
if(!i){console.warn("could not resolve reference",e.$ref,t.getMissingUris())}if(i==null){i={}}if(n&&i.title!=null){delete i.title}return i}
e.getGlobalTv4=function(){if(typeof window!=="undefined"){return window.tv4}if(typeof global!=="undefined"){return global.tv4}if(typeof tv4!=="undefined"){return tv4}}
e.cloneSchema=function(e){var t,n,i
t={}
for(n in e){i=e[n]
t[n]=i}return t}
e.combineSchemas=function(e,t){var n,i
for(n in t){i=t[n]
e[n]=i}return e}
e.cloneDeep=function(e){var t,n,i,r
t=e
i=this.type(e)
if(i==="object"){t={}}if(i==="array"){t=[]}if(i==="object"||i==="array"){for(n in e){r=e[n]
t[n]=this.cloneDeep(r)}}return t}
e.type=function(){var e,t,n,i,r
e={}
r="Boolean Number String Function Array Date RegExp Undefined Null".split(" ")
for(n=0,i=r.length;n<i;n++){t=r[n]
e["[object "+t+"]"]=t.toLowerCase()}return function(t){var n
n=Object.prototype.toString.call(t)
return e[n]||"object"}}()
e.defaultForType=function(e){return{string:"",number:0,null:null,object:{},integer:0,boolean:false,array:[]}[e]}
if(typeof TreemaNode!=="undefined"){return TreemaNode.utils=e}else if(typeof module!=="undefined"&&module.exports){return module.exports=e}else{return e}}();(function(e){if("function"==typeof bootstrap)bootstrap("jade",e)
else if("object"==typeof exports)module.exports=e()
else if("function"==typeof define&&define.amd)define(e)
else if("undefined"!=typeof ses){if(!ses.ok())return
ses.makeJade=e}else"undefined"!=typeof window?window.jade=e():global.jade=e()})(function(){var e,t,n,i,r
return function e(t,n,i){function r(a,o){if(!n[a]){if(!t[a]){var l=typeof require=="function"&&require
if(!o&&l)return l(a,!0)
if(s)return s(a,!0)
throw new Error("Cannot find module '"+a+"'")}var u=n[a]={exports:{}}
t[a][0].call(u.exports,function(e){var n=t[a][1][e]
return r(n?n:e)},u,u.exports,e,t,n,i)}return n[a].exports}var s=typeof require=="function"&&require
for(var a=0;a<i.length;a++)r(i[a])
return r}({1:[function(require,e,t){if(!Array.isArray){Array.isArray=function(e){return"[object Array]"==Object.prototype.toString.call(e)}}if(!Object.keys){Object.keys=function(e){var t=[]
for(var n in e){if(e.hasOwnProperty(n)){t.push(n)}}return t}}t.merge=function e(t,i){var r=t["class"]
var s=i["class"]
if(r||s){r=r||[]
s=s||[]
if(!Array.isArray(r))r=[r]
if(!Array.isArray(s))s=[s]
t["class"]=r.concat(s).filter(n)}for(var a in i){if(a!="class"){t[a]=i[a]}}return t}
function n(e){return e!=null&&e!==""}function i(e){return Array.isArray(e)?e.map(i).filter(n).join(" "):e}t.attrs=function e(n,r){var s=[],a=n.terse
delete n.terse
var o=Object.keys(n),l=o.length
if(l){s.push("")
for(var u=0;u<l;++u){var f=o[u],c=n[f]
if("boolean"==typeof c||null==c){if(c){a?s.push(f):s.push(f+'="'+f+'"')}}else if(0==f.indexOf("data")&&"string"!=typeof c){s.push(f+"='"+JSON.stringify(c)+"'")}else if("class"==f){if(r&&r[f]){if(c=t.escape(i(c))){s.push(f+'="'+c+'"')}}else{if(c=i(c)){s.push(f+'="'+c+'"')}}}else if(r&&r[f]){s.push(f+'="'+t.escape(c)+'"')}else{s.push(f+'="'+c+'"')}}}return s.join(" ")}
t.escape=function e(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}
t.rethrow=function e(t,n,i,r){if(!(t instanceof Error))throw t
if((typeof window!="undefined"||!n)&&!r){t.message+=" on line "+i
throw t}try{r=r||require("fs").readFileSync(n,"utf8")}catch(n){e(t,null,i)}var s=3,a=r.split("\n"),o=Math.max(i-s,0),l=Math.min(a.length,i+s)
var s=a.slice(o,l).map(function(e,t){var n=t+o+1
return(n==i?"  > ":"    ")+n+"| "+e}).join("\n")
t.path=n
t.message=(n||"Jade")+":"+i+"\n"+s+"\n\n"+t.message
throw t}},{fs:2}],2:[function(require,e,t){},{}]},{},[1])(1)})
if(jQuery.fn.autocomplete.noConflict){var autocomplete=jQuery.fn.autocomplete.noConflict()
jQuery.fn.algolia_autocomplete=autocomplete}
//# sourceMappingURL=/javascripts/vendor.js.map