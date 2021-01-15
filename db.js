/*
The MIT License

Copyright (c) 2012 Aaron Powell

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

!function(a,b){"use strict";var c=a.indexedDB||a.webkitIndexedDB||a.mozIndexedDB||a.oIndexedDB||a.msIndexedDB,d=a.IDBKeyRange||a.webkitIDBKeyRange,e={readonly:"readonly",readwrite:"readwrite"},f=Object.prototype.hasOwnProperty;if(!c)throw"IndexedDB required";var g=function(a){return a},i=function(a,b){var c=this,d=!1;this.add=function(b){if(d)throw"Database has been closed";for(var f=[],g=0,h=0;h<arguments.length-1;h++)if(Array.isArray(arguments[h+1]))for(var i=0;i<arguments[h+1].length;i++)f[g]=arguments[h+1][i],g++;else f[g]=arguments[h+1],g++;var j=a.transaction(b,e.readwrite),k=j.objectStore(b);return new Promise(function(a,b){f.forEach(function(a){var b;if(a.item&&a.key){var c=a.key;a=a.item,b=k.add(a,c)}else b=k.add(a);b.onsuccess=function(b){var c=b.target,d=c.source.keyPath;null===d&&(d="__id__"),Object.defineProperty(a,d,{value:c.result,enumerable:!0})}}),j.oncomplete=function(){a(f,c)},j.onerror=function(a){b(f,a)},j.onabort=function(a){b(f,a)}})},this.update=function(b){if(d)throw"Database has been closed";for(var f=[],g=0;g<arguments.length-1;g++)f[g]=arguments[g+1];var h=a.transaction(b,e.readwrite),i=h.objectStore(b);i.keyPath;return new Promise(function(a,b){f.forEach(function(a){var b;if(a.item&&a.key){var d=a.key;a=a.item,b=i.put(a,d)}else b=i.put(a);b.onsuccess=function(a){}}),h.oncomplete=function(){a(f,c)},h.onerror=function(a){b(f,a)},h.onabort=function(a){b(f,a)}})},this.remove=function(b,c){if(d)throw"Database has been closed";var f=a.transaction(b,e.readwrite),g=f.objectStore(b);return new Promise(function(a,b){g.delete(c);f.oncomplete=function(){a(c)},f.onerror=function(a){b(a)}})},this.clear=function(b){if(d)throw"Database has been closed";var c=a.transaction(b,e.readwrite),f=c.objectStore(b);f.clear();return new Promise(function(a,b){c.oncomplete=function(){a()},c.onerror=function(a){b(a)}})},this.close=function(){if(d)throw"Database has been closed";a.close(),d=!0,delete m[b]},this.get=function(b,c){if(d)throw"Database has been closed";var e=a.transaction(b),f=e.objectStore(b),g=f.get(c);return new Promise(function(a,b){g.onsuccess=function(b){a(b.target.result)},e.onerror=function(a){b(a)}})},this.query=function(b,c){if(d)throw"Database has been closed";return new j(b,a,c)};for(var g=0,h=a.objectStoreNames.length;g<h;g++)!function(a){c[a]={};for(var b in c)f.call(c,b)&&"close"!==b&&(c[a][b]=function(b){return function(){var d=[a].concat([].slice.call(arguments,0));return c[b].apply(c,d)}}(b))}(a.objectStoreNames[g])},j=function(a,c,f){var h=this,i=!1,j=function(g,h,j,k,l,m,n){var o=c.transaction(a,i?e.readwrite:e.readonly),p=o.objectStore(a),q=f?p.index(f):p,r=g?d[g].apply(null,h):null,s=[],t=[r],l=l?l:null,m=m?m:[],u=0;"count"!==j&&t.push(k||"next");var v=!!i&&Object.keys(i),w=function(a){for(var b=0;b<v.length;b++){var c=v[b],d=i[c];d instanceof Function&&(d=d(a)),a[c]=d}return a};return q[j].apply(q,t).onsuccess=function(a){var c=a.target.result;if("number"==typeof c)s=c;else if(c)if(null!==l&&l[0]>u)u=l[0],c.advance(l[0]);else if(null!==l&&u>=l[0]+l[1]);else{var d=!0,e="value"in c?c.value:c.key;m.forEach(function(a){a&&a.length&&(d=2===a.length?d&&e[a[0]]===a[1]:d&&a[0].apply(b,[e]))}),d&&(u++,s.push(n(e)),i&&(e=w(e),c.update(e))),c.continue()}},new Promise(function(a,b){o.oncomplete=function(){a(s)},o.onerror=function(a){b(a)},o.onabort=function(a){b(a)}})},k=function(a,b){var c="next",d="openCursor",e=[],f=null,h=g,k=!1,l=function(){return j(a,b,d,k?c+"unique":c,f,e,h)},m=function(){return f=Array.prototype.slice.call(arguments,0,2),1==f.length&&f.unshift(0),{execute:l}},n=function(){return c=null,d="count",{execute:l}},o=function(){return d="openKeyCursor",{desc:q,execute:l,filter:p,distinct:r,map:t}},p=function(){return e.push(Array.prototype.slice.call(arguments,0,2)),{keys:o,execute:l,filter:p,desc:q,distinct:r,modify:s,limit:m,map:t}},q=function(){return c="prev",{keys:o,execute:l,filter:p,distinct:r,modify:s,map:t}},r=function(){return k=!0,{keys:o,count:n,execute:l,filter:p,desc:q,modify:s,map:t}},s=function(a){return i=a,{execute:l}},t=function(a){return h=a,{execute:l,count:n,keys:o,filter:p,desc:q,distinct:r,modify:s,limit:m,map:t}};return{execute:l,count:n,keys:o,filter:p,desc:q,distinct:r,modify:s,limit:m,map:t}};"only bound upperBound lowerBound".split(" ").forEach(function(a){h[a]=function(){return new k(a,arguments)}}),this.filter=function(){var a=new k(null,null);return a.filter.apply(a,arguments)},this.all=function(){return this.filter()}},k=function(a,b,c){"function"==typeof b&&(b=b());for(var d in b){var g,e=b[d];g=!f.call(b,d)||c.objectStoreNames.contains(d)?a.currentTarget.transaction.objectStore(d):c.createObjectStore(d,e.key);for(var h in e.indexes){var i=e.indexes[h];try{g.index(h)}catch(a){g.createIndex(h,i.key||h,Object.keys(i).length?i:{unique:!1})}}}},l=function(a,b,c,d){var e=a.target.result,f=new i(e,b);return m[b]=e,Promise.resolve(f)},m={},n={version:"0.9.2",open:function(a){var b;return new Promise(function(d,e){m[a.server]?l({target:{result:m[a.server]}},a.server,a.version,a.schema).then(d,e):(b=c.open(a.server,a.version),b.onsuccess=function(b){l(b,a.server,a.version,a.schema).then(d,e)},b.onupgradeneeded=function(b){k(b,a.schema,b.target.result)},b.onerror=function(a){e(a)})})}};"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=n:"function"==typeof define&&define.amd?define(function(){return n}):a.db=n}(window);
