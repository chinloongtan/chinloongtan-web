webpackJsonp([0x620f737b6699],{35:function(r,t,e){function n(r,t){return Math.pow(r[0]-t[0],2)+Math.pow(r[1]-t[1],2)+Math.pow(r[2]-t[2],2)}var a=e(36),o={};for(var l in a)a.hasOwnProperty(l)&&(o[a[l]]=l);var i=r.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var s in i)if(i.hasOwnProperty(s)){if(!("channels"in i[s]))throw new Error("missing channels property: "+s);if(!("labels"in i[s]))throw new Error("missing channel labels property: "+s);if(i[s].labels.length!==i[s].channels)throw new Error("channel and label counts mismatch: "+s);var u=i[s].channels,h=i[s].labels;delete i[s].channels,delete i[s].labels,Object.defineProperty(i[s],"channels",{value:u}),Object.defineProperty(i[s],"labels",{value:h})}i.rgb.hsl=function(r){var t,e,n,a=r[0]/255,o=r[1]/255,l=r[2]/255,i=Math.min(a,o,l),s=Math.max(a,o,l),u=s-i;return s===i?t=0:a===s?t=(o-l)/u:o===s?t=2+(l-a)/u:l===s&&(t=4+(a-o)/u),t=Math.min(60*t,360),t<0&&(t+=360),n=(i+s)/2,e=s===i?0:n<=.5?u/(s+i):u/(2-s-i),[t,100*e,100*n]},i.rgb.hsv=function(r){var t,e,n,a=r[0],o=r[1],l=r[2],i=Math.min(a,o,l),s=Math.max(a,o,l),u=s-i;return e=0===s?0:u/s*1e3/10,s===i?t=0:a===s?t=(o-l)/u:o===s?t=2+(l-a)/u:l===s&&(t=4+(a-o)/u),t=Math.min(60*t,360),t<0&&(t+=360),n=s/255*1e3/10,[t,e,n]},i.rgb.hwb=function(r){var t=r[0],e=r[1],n=r[2],a=i.rgb.hsl(r)[0],o=1/255*Math.min(t,Math.min(e,n));return n=1-1/255*Math.max(t,Math.max(e,n)),[a,100*o,100*n]},i.rgb.cmyk=function(r){var t,e,n,a,o=r[0]/255,l=r[1]/255,i=r[2]/255;return a=Math.min(1-o,1-l,1-i),t=(1-o-a)/(1-a)||0,e=(1-l-a)/(1-a)||0,n=(1-i-a)/(1-a)||0,[100*t,100*e,100*n,100*a]},i.rgb.keyword=function(r){var t=o[r];if(t)return t;var e,l=1/0;for(var i in a)if(a.hasOwnProperty(i)){var s=a[i],u=n(r,s);u<l&&(l=u,e=i)}return e},i.keyword.rgb=function(r){return a[r]},i.rgb.xyz=function(r){var t=r[0]/255,e=r[1]/255,n=r[2]/255;t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var a=.4124*t+.3576*e+.1805*n,o=.2126*t+.7152*e+.0722*n,l=.0193*t+.1192*e+.9505*n;return[100*a,100*o,100*l]},i.rgb.lab=function(r){var t,e,n,a=i.rgb.xyz(r),o=a[0],l=a[1],s=a[2];return o/=95.047,l/=100,s/=108.883,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,t=116*l-16,e=500*(o-l),n=200*(l-s),[t,e,n]},i.hsl.rgb=function(r){var t,e,n,a,o,l=r[0]/360,i=r[1]/100,s=r[2]/100;if(0===i)return o=255*s,[o,o,o];e=s<.5?s*(1+i):s+i-s*i,t=2*s-e,a=[0,0,0];for(var u=0;u<3;u++)n=l+1/3*-(u-1),n<0&&n++,n>1&&n--,o=6*n<1?t+6*(e-t)*n:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t,a[u]=255*o;return a},i.hsl.hsv=function(r){var t,e,n=r[0],a=r[1]/100,o=r[2]/100,l=a,i=Math.max(o,.01);return o*=2,a*=o<=1?o:2-o,l*=i<=1?i:2-i,e=(o+a)/2,t=0===o?2*l/(i+l):2*a/(o+a),[n,100*t,100*e]},i.hsv.rgb=function(r){var t=r[0]/60,e=r[1]/100,n=r[2]/100,a=Math.floor(t)%6,o=t-Math.floor(t),l=255*n*(1-e),i=255*n*(1-e*o),s=255*n*(1-e*(1-o));switch(n*=255,a){case 0:return[n,s,l];case 1:return[i,n,l];case 2:return[l,n,s];case 3:return[l,i,n];case 4:return[s,l,n];case 5:return[n,l,i]}},i.hsv.hsl=function(r){var t,e,n,a=r[0],o=r[1]/100,l=r[2]/100,i=Math.max(l,.01);return n=(2-o)*l,t=(2-o)*i,e=o*i,e/=t<=1?t:2-t,e=e||0,n/=2,[a,100*e,100*n]},i.hwb.rgb=function(r){var t,e,n,a,o=r[0]/360,l=r[1]/100,i=r[2]/100,s=l+i;s>1&&(l/=s,i/=s),t=Math.floor(6*o),e=1-i,n=6*o-t,0!==(1&t)&&(n=1-n),a=l+n*(e-l);var u,h,c;switch(t){default:case 6:case 0:u=e,h=a,c=l;break;case 1:u=a,h=e,c=l;break;case 2:u=l,h=e,c=a;break;case 3:u=l,h=a,c=e;break;case 4:u=a,h=l,c=e;break;case 5:u=e,h=l,c=a}return[255*u,255*h,255*c]},i.cmyk.rgb=function(r){var t,e,n,a=r[0]/100,o=r[1]/100,l=r[2]/100,i=r[3]/100;return t=1-Math.min(1,a*(1-i)+i),e=1-Math.min(1,o*(1-i)+i),n=1-Math.min(1,l*(1-i)+i),[255*t,255*e,255*n]},i.xyz.rgb=function(r){var t,e,n,a=r[0]/100,o=r[1]/100,l=r[2]/100;return t=3.2406*a+o*-1.5372+l*-.4986,e=a*-.9689+1.8758*o+.0415*l,n=.0557*a+o*-.204+1.057*l,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,t=Math.min(Math.max(0,t),1),e=Math.min(Math.max(0,e),1),n=Math.min(Math.max(0,n),1),[255*t,255*e,255*n]},i.xyz.lab=function(r){var t,e,n,a=r[0],o=r[1],l=r[2];return a/=95.047,o/=100,l/=108.883,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,t=116*o-16,e=500*(a-o),n=200*(o-l),[t,e,n]},i.lab.xyz=function(r){var t,e,n,a=r[0],o=r[1],l=r[2];e=(a+16)/116,t=o/500+e,n=e-l/200;var i=Math.pow(e,3),s=Math.pow(t,3),u=Math.pow(n,3);return e=i>.008856?i:(e-16/116)/7.787,t=s>.008856?s:(t-16/116)/7.787,n=u>.008856?u:(n-16/116)/7.787,t*=95.047,e*=100,n*=108.883,[t,e,n]},i.lab.lch=function(r){var t,e,n,a=r[0],o=r[1],l=r[2];return t=Math.atan2(l,o),e=360*t/2/Math.PI,e<0&&(e+=360),n=Math.sqrt(o*o+l*l),[a,n,e]},i.lch.lab=function(r){var t,e,n,a=r[0],o=r[1],l=r[2];return n=l/360*2*Math.PI,t=o*Math.cos(n),e=o*Math.sin(n),[a,t,e]},i.rgb.ansi16=function(r){var t=r[0],e=r[1],n=r[2],a=1 in arguments?arguments[1]:i.rgb.hsv(r)[2];if(a=Math.round(a/50),0===a)return 30;var o=30+(Math.round(n/255)<<2|Math.round(e/255)<<1|Math.round(t/255));return 2===a&&(o+=60),o},i.hsv.ansi16=function(r){return i.rgb.ansi16(i.hsv.rgb(r),r[2])},i.rgb.ansi256=function(r){var t=r[0],e=r[1],n=r[2];if(t===e&&e===n)return t<8?16:t>248?231:Math.round((t-8)/247*24)+232;var a=16+36*Math.round(t/255*5)+6*Math.round(e/255*5)+Math.round(n/255*5);return a},i.ansi16.rgb=function(r){var t=r%10;if(0===t||7===t)return r>50&&(t+=3.5),t=t/10.5*255,[t,t,t];var e=.5*(~~(r>50)+1),n=(1&t)*e*255,a=(t>>1&1)*e*255,o=(t>>2&1)*e*255;return[n,a,o]},i.ansi256.rgb=function(r){if(r>=232){var t=10*(r-232)+8;return[t,t,t]}r-=16;var e,n=Math.floor(r/36)/5*255,a=Math.floor((e=r%36)/6)/5*255,o=e%6/5*255;return[n,a,o]},i.rgb.hex=function(r){var t=((255&Math.round(r[0]))<<16)+((255&Math.round(r[1]))<<8)+(255&Math.round(r[2])),e=t.toString(16).toUpperCase();return"000000".substring(e.length)+e},i.hex.rgb=function(r){var t=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];var e=t[0];3===t[0].length&&(e=e.split("").map(function(r){return r+r}).join(""));var n=parseInt(e,16),a=n>>16&255,o=n>>8&255,l=255&n;return[a,o,l]},i.rgb.hcg=function(r){var t,e,n=r[0]/255,a=r[1]/255,o=r[2]/255,l=Math.max(Math.max(n,a),o),i=Math.min(Math.min(n,a),o),s=l-i;return t=s<1?i/(1-s):0,e=s<=0?0:l===n?(a-o)/s%6:l===a?2+(o-n)/s:4+(n-a)/s+4,e/=6,e%=1,[360*e,100*s,100*t]},i.hsl.hcg=function(r){var t=r[1]/100,e=r[2]/100,n=1,a=0;return n=e<.5?2*t*e:2*t*(1-e),n<1&&(a=(e-.5*n)/(1-n)),[r[0],100*n,100*a]},i.hsv.hcg=function(r){var t=r[1]/100,e=r[2]/100,n=t*e,a=0;return n<1&&(a=(e-n)/(1-n)),[r[0],100*n,100*a]},i.hcg.rgb=function(r){var t=r[0]/360,e=r[1]/100,n=r[2]/100;if(0===e)return[255*n,255*n,255*n];var a=[0,0,0],o=t%1*6,l=o%1,i=1-l,s=0;switch(Math.floor(o)){case 0:a[0]=1,a[1]=l,a[2]=0;break;case 1:a[0]=i,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=l;break;case 3:a[0]=0,a[1]=i,a[2]=1;break;case 4:a[0]=l,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=i}return s=(1-e)*n,[255*(e*a[0]+s),255*(e*a[1]+s),255*(e*a[2]+s)]},i.hcg.hsv=function(r){var t=r[1]/100,e=r[2]/100,n=t+e*(1-t),a=0;return n>0&&(a=t/n),[r[0],100*a,100*n]},i.hcg.hsl=function(r){var t=r[1]/100,e=r[2]/100,n=e*(1-t)+.5*t,a=0;return n>0&&n<.5?a=t/(2*n):n>=.5&&n<1&&(a=t/(2*(1-n))),[r[0],100*a,100*n]},i.hcg.hwb=function(r){var t=r[1]/100,e=r[2]/100,n=t+e*(1-t);return[r[0],100*(n-t),100*(1-n)]},i.hwb.hcg=function(r){var t=r[1]/100,e=r[2]/100,n=1-e,a=n-t,o=0;return a<1&&(o=(n-a)/(1-a)),[r[0],100*a,100*o]},i.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},i.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},i.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},i.gray.hsl=i.gray.hsv=function(r){return[0,0,r[0]]},i.gray.hwb=function(r){return[0,100,r[0]]},i.gray.cmyk=function(r){return[0,0,0,r[0]]},i.gray.lab=function(r){return[r[0],0,0]},i.gray.hex=function(r){var t=255&Math.round(r[0]/100*255),e=(t<<16)+(t<<8)+t,n=e.toString(16).toUpperCase();return"000000".substring(n.length)+n},i.rgb.gray=function(r){var t=(r[0]+r[1]+r[2])/3;return[t/255*100]}},81:function(r,t,e){function n(r){var t=function(t){return void 0===t||null===t?t:(arguments.length>1&&(t=Array.prototype.slice.call(arguments)),r(t))};return"conversion"in r&&(t.conversion=r.conversion),t}function a(r){var t=function(t){if(void 0===t||null===t)return t;arguments.length>1&&(t=Array.prototype.slice.call(arguments));var e=r(t);if("object"==typeof e)for(var n=e.length,a=0;a<n;a++)e[a]=Math.round(e[a]);return e};return"conversion"in r&&(t.conversion=r.conversion),t}var o=e(35),l=e(82),i={},s=Object.keys(o);s.forEach(function(r){i[r]={},Object.defineProperty(i[r],"channels",{value:o[r].channels}),Object.defineProperty(i[r],"labels",{value:o[r].labels});var t=l(r),e=Object.keys(t);e.forEach(function(e){var o=t[e];i[r][e]=a(o),i[r][e].raw=n(o)})}),r.exports=i},82:function(r,t,e){function n(){for(var r={},t=Object.keys(i),e=t.length,n=0;n<e;n++)r[t[n]]={distance:-1,parent:null};return r}function a(r){var t=n(),e=[r];for(t[r].distance=0;e.length;)for(var a=e.pop(),o=Object.keys(i[a]),l=o.length,s=0;s<l;s++){var u=o[s],h=t[u];h.distance===-1&&(h.distance=t[a].distance+1,h.parent=a,e.unshift(u))}return t}function o(r,t){return function(e){return t(r(e))}}function l(r,t){for(var e=[t[r].parent,r],n=i[t[r].parent][r],a=t[r].parent;t[a].parent;)e.unshift(t[a].parent),n=o(i[t[a].parent][a],n),a=t[a].parent;return n.conversion=e,n}var i=e(35);r.exports=function(r){for(var t=a(r),e={},n=Object.keys(t),o=n.length,i=0;i<o;i++){var s=n[i],u=t[s];null!==u.parent&&(e[s]=l(s,t))}return e}},36:function(r,t){"use strict";r.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},83:function(r,t,e){"use strict";function n(r,t){if(!(this instanceof n))return new n(r,t);if(t&&t in g&&(t=null),t&&!(t in c))throw new Error("Unknown model: "+t);var e,a;if("undefined"==typeof r)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(r instanceof n)this.model=r.model,this.color=r.color.slice(),this.valpha=r.valpha;else if("string"==typeof r){var o=h.get(r);if(null===o)throw new Error("Unable to parse color from string: "+r);this.model=o.model,a=c[this.model].channels,this.color=o.value.slice(0,a),this.valpha="number"==typeof o.value[a]?o.value[a]:1}else if(r.length){this.model=t||"rgb",a=c[this.model].channels;var l=f.call(r,0,a);this.color=u(l,a),this.valpha="number"==typeof r[a]?r[a]:1}else if("number"==typeof r)r&=16777215,this.model="rgb",this.color=[r>>16&255,r>>8&255,255&r],this.valpha=1;else{this.valpha=1;var i=Object.keys(r);"alpha"in r&&(i.splice(i.indexOf("alpha"),1),this.valpha="number"==typeof r.alpha?r.alpha:0);var s=i.sort().join("");if(!(s in d))throw new Error("Unable to parse color from object: "+JSON.stringify(r));this.model=d[s];var p=c[this.model].labels,v=[];for(e=0;e<p.length;e++)v.push(r[p[e]]);this.color=u(v)}if(b[this.model])for(a=c[this.model].channels,e=0;e<a;e++){var m=b[this.model][e];m&&(this.color[e]=m(this.color[e]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function a(r,t){return Number(r.toFixed(t))}function o(r){return function(t){return a(t,r)}}function l(r,t,e){return r=Array.isArray(r)?r:[r],r.forEach(function(r){(b[r]||(b[r]=[]))[t]=e}),r=r[0],function(n){var a;return arguments.length?(e&&(n=e(n)),a=this[r](),a.color[t]=n,a):(a=this[r]().color[t],e&&(a=e(a)),a)}}function i(r){return function(t){return Math.max(0,Math.min(r,t))}}function s(r){return Array.isArray(r)?r:[r]}function u(r,t){for(var e=0;e<t;e++)"number"!=typeof r[e]&&(r[e]=0);return r}var h=e(84),c=e(81),f=[].slice,g=["keyword","gray","hex"],d={};Object.keys(c).forEach(function(r){d[f.call(c[r].labels).sort().join("")]=r});var b={};n.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(r){var t=this.model in h.to?this:this.rgb();t=t.round("number"==typeof r?r:1);var e=1===t.valpha?t.color:t.color.concat(this.valpha);return h.to[t.model](e)},percentString:function(r){var t=this.rgb().round("number"==typeof r?r:1),e=1===t.valpha?t.color:t.color.concat(this.valpha);return h.to.rgb.percent(e)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var r={},t=c[this.model].channels,e=c[this.model].labels,n=0;n<t;n++)r[e[n]]=this.color[n];return 1!==this.valpha&&(r.alpha=this.valpha),r},unitArray:function(){var r=this.rgb().color;return r[0]/=255,r[1]/=255,r[2]/=255,1!==this.valpha&&r.push(this.valpha),r},unitObject:function(){var r=this.rgb().object();return r.r/=255,r.g/=255,r.b/=255,1!==this.valpha&&(r.alpha=this.valpha),r},round:function(r){return r=Math.max(r||0,0),new n(this.color.map(o(r)).concat(this.valpha),this.model)},alpha:function(r){return arguments.length?new n(this.color.concat(Math.max(0,Math.min(1,r))),this.model):this.valpha},red:l("rgb",0,i(255)),green:l("rgb",1,i(255)),blue:l("rgb",2,i(255)),hue:l(["hsl","hsv","hsl","hwb","hcg"],0,function(r){return(r%360+360)%360}),saturationl:l("hsl",1,i(100)),lightness:l("hsl",2,i(100)),saturationv:l("hsv",1,i(100)),value:l("hsv",2,i(100)),chroma:l("hcg",1,i(100)),gray:l("hcg",2,i(100)),white:l("hwb",1,i(100)),wblack:l("hwb",2,i(100)),cyan:l("cmyk",0,i(100)),magenta:l("cmyk",1,i(100)),yellow:l("cmyk",2,i(100)),black:l("cmyk",3,i(100)),x:l("xyz",0,i(100)),y:l("xyz",1,i(100)),z:l("xyz",2,i(100)),l:l("lab",0,i(100)),a:l("lab",1),b:l("lab",2),keyword:function(r){return arguments.length?new n(r):c[this.model].keyword(this.color)},hex:function(r){return arguments.length?new n(r):h.to.hex(this.rgb().round().color)},rgbNumber:function(){var r=this.rgb().color;return(255&r[0])<<16|(255&r[1])<<8|255&r[2]},luminosity:function(){for(var r=this.rgb().color,t=[],e=0;e<r.length;e++){var n=r[e]/255;t[e]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast:function(r){var t=this.luminosity(),e=r.luminosity();return t>e?(t+.05)/(e+.05):(e+.05)/(t+.05)},level:function(r){var t=this.contrast(r);return t>=7.1?"AAA":t>=4.5?"AA":""},isDark:function(){var r=this.rgb().color,t=(299*r[0]+587*r[1]+114*r[2])/1e3;return t<128},isLight:function(){return!this.isDark()},negate:function(){for(var r=this.rgb(),t=0;t<3;t++)r.color[t]=255-r.color[t];return r},lighten:function(r){var t=this.hsl();return t.color[2]+=t.color[2]*r,t},darken:function(r){var t=this.hsl();return t.color[2]-=t.color[2]*r,t},saturate:function(r){var t=this.hsl();return t.color[1]+=t.color[1]*r,t},desaturate:function(r){var t=this.hsl();return t.color[1]-=t.color[1]*r,t},whiten:function(r){var t=this.hwb();return t.color[1]+=t.color[1]*r,t},blacken:function(r){var t=this.hwb();return t.color[2]+=t.color[2]*r,t},grayscale:function(){var r=this.rgb().color,t=.3*r[0]+.59*r[1]+.11*r[2];return n.rgb(t,t,t)},fade:function(r){return this.alpha(this.valpha-this.valpha*r)},opaquer:function(r){return this.alpha(this.valpha+this.valpha*r)},rotate:function(r){var t=this.hsl(),e=t.color[0];return e=(e+r)%360,e=e<0?360+e:e,t.color[0]=e,t},mix:function(r,t){var e=r.rgb(),a=this.rgb(),o=void 0===t?.5:t,l=2*o-1,i=e.alpha()-a.alpha(),s=((l*i===-1?l:(l+i)/(1+l*i))+1)/2,u=1-s;return n.rgb(s*e.red()+u*a.red(),s*e.green()+u*a.green(),s*e.blue()+u*a.blue(),e.alpha()*o+a.alpha()*(1-o))}},Object.keys(c).forEach(function(r){if(g.indexOf(r)===-1){var t=c[r].channels;n.prototype[r]=function(){if(this.model===r)return new n(this);if(arguments.length)return new n(arguments,r);var e="number"==typeof arguments[t]?t:this.valpha;return new n(s(c[this.model][r].raw(this.color)).concat(e),r)},n[r]=function(e){return"number"==typeof e&&(e=u(f.call(arguments),t)),new n(e,r)}}}),r.exports=n},84:function(r,t,e){function n(r,t,e){return Math.min(Math.max(t,r),e)}function a(r){var t=r.toString(16).toUpperCase();return t.length<2?"0"+t:t}var o=e(36),l=e(118),i={};for(var s in o)o.hasOwnProperty(s)&&(i[o[s]]=s);var u=r.exports={to:{}};u.get=function(r){var t,e,n=r.substring(0,3).toLowerCase();switch(n){case"hsl":t=u.get.hsl(r),e="hsl";break;case"hwb":t=u.get.hwb(r),e="hwb";break;default:t=u.get.rgb(r),e="rgb"}return t?{model:e,value:t}:null},u.get.rgb=function(r){if(!r)return null;var t,e,a,l=/^#([a-f0-9]{3,4})$/i,i=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,s=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,u=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,h=/(\D+)/,c=[0,0,0,1];if(t=r.match(i)){for(a=t[2],t=t[1],e=0;e<3;e++){var f=2*e;c[e]=parseInt(t.slice(f,f+2),16)}a&&(c[3]=Math.round(parseInt(a,16)/255*100)/100)}else if(t=r.match(l)){for(t=t[1],a=t[3],e=0;e<3;e++)c[e]=parseInt(t[e]+t[e],16);a&&(c[3]=Math.round(parseInt(a+a,16)/255*100)/100)}else if(t=r.match(s)){for(e=0;e<3;e++)c[e]=parseInt(t[e+1],0);t[4]&&(c[3]=parseFloat(t[4]))}else{if(!(t=r.match(u)))return(t=r.match(h))?"transparent"===t[1]?[0,0,0,0]:(c=o[t[1]])?(c[3]=1,c):null:null;for(e=0;e<3;e++)c[e]=Math.round(2.55*parseFloat(t[e+1]));t[4]&&(c[3]=parseFloat(t[4]))}for(e=0;e<3;e++)c[e]=n(c[e],0,255);return c[3]=n(c[3],0,1),c},u.get.hsl=function(r){if(!r)return null;var t=/^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,e=r.match(t);if(e){var a=parseFloat(e[4]),o=(parseFloat(e[1])%360+360)%360,l=n(parseFloat(e[2]),0,100),i=n(parseFloat(e[3]),0,100),s=n(isNaN(a)?1:a,0,1);return[o,l,i,s]}return null},u.get.hwb=function(r){if(!r)return null;var t=/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,e=r.match(t);if(e){var a=parseFloat(e[4]),o=(parseFloat(e[1])%360+360)%360,l=n(parseFloat(e[2]),0,100),i=n(parseFloat(e[3]),0,100),s=n(isNaN(a)?1:a,0,1);return[o,l,i,s]}return null},u.to.hex=function(){var r=l(arguments);return"#"+a(r[0])+a(r[1])+a(r[2])+(r[3]<1?a(Math.round(255*r[3])):"")},u.to.rgb=function(){var r=l(arguments);return r.length<4||1===r[3]?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"},u.to.rgb.percent=function(){var r=l(arguments),t=Math.round(r[0]/255*100),e=Math.round(r[1]/255*100),n=Math.round(r[2]/255*100);return r.length<4||1===r[3]?"rgb("+t+"%, "+e+"%, "+n+"%)":"rgba("+t+"%, "+e+"%, "+n+"%, "+r[3]+")"},u.to.hsl=function(){var r=l(arguments);return r.length<4||1===r[3]?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"},u.to.hwb=function(){var r=l(arguments),t="";return r.length>=4&&1!==r[3]&&(t=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+t+")"},u.to.keyword=function(r){return i[r.slice(0,3)]}},118:function(r,t,e){"use strict";var n=e(119),a=Array.prototype.concat,o=Array.prototype.slice,l=r.exports=function(r){for(var t=[],e=0,l=r.length;e<l;e++){var i=r[e];n(i)?t=a.call(t,o.call(i)):t.push(i)}return t};l.wrap=function(r){return function(){return r(l(arguments))}}},119:function(r,t){"use strict";r.exports=function(r){return!(!r||"string"==typeof r)&&(r instanceof Array||Array.isArray(r)||r.length>=0&&(r.splice instanceof Function||Object.getOwnPropertyDescriptor(r,r.length-1)&&"String"!==r.constructor.name))}},78:function(r,t,e){"use strict";function n(r){if(r&&r.__esModule)return r;var t={};if(null!=r)for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);return t.default=r,t}function a(r){return r&&r.__esModule?r:{default:r}}function o(r){var t=r.data;return s.default.createElement("div",{style:c.tagsContainer},(t||[]).map(function(r,t){var e=h.tags[r],n=l({},c.tag);return e&&(n.color=e,n.backgroundColor=h.alpha(e,.3)),s.default.createElement("div",{style:n,key:"tag-"+t},r)}))}t.__esModule=!0;var l=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r};t.default=o;var i=e(1),s=a(i),u=e(43),h=n(u),c={tagsContainer:{flexDirection:"row",display:"flex",marginTop:10,fontSize:14},tag:{marginRight:10,backgroundColor:"grey",padding:5,paddingLeft:8,paddingRight:8,borderRadius:6,fontWeight:"bold"}};r.exports=t.default},43:function(r,t,e){"use strict";function n(r){return r&&r.__esModule?r:{default:r}}t.__esModule=!0,t.alpha=t.tags=void 0;var a=e(83),o=n(a);t.tags={"realm-db":"#f5595e","offline-first":"#a047d9","e-commerce":"#00a0ff",tool:"#40407a",payment:"#00b960",aws:"#ffa502",docker:"#aaa69d",gps:"#fdcb6e"},t.alpha=function(r,t){return t?(0,o.default)(r).alpha(t):r}},308:function(r,t,e){"use strict";function n(r){return r&&r.__esModule?r:{default:r}}function a(r){var t=r.data,e=t.markdownRemark;return l.default.createElement("div",{className:"blog-post-container content"},l.default.createElement(s.default,{title:""+e.frontmatter.title}),l.default.createElement(h.default,{title:"BLOG",canGoBack:!0,backToUrl:"/blog"}),l.default.createElement("div",{className:"blog-post col-md-8 offset-md-2"},l.default.createElement("h2",null,e.frontmatter.title),l.default.createElement("h6",{style:b.description},e.frontmatter.date),l.default.createElement("h6",{style:b.description},e.frontmatter.excerpt),l.default.createElement(d.default,{data:e.frontmatter.tags}),l.default.createElement("hr",null),l.default.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:e.html}})),l.default.createElement(f.default,null))}t.__esModule=!0,t.pageQuery=void 0,t.default=a;var o=e(1),l=n(o),i=e(68),s=n(i),u=e(33),h=n(u),c=e(51),f=n(c),g=e(78),d=n(g),b={description:{color:"#576366"}};t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-blog-post-js-f4d48348e97cb46315d4.js.map