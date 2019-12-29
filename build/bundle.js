var app=function(){"use strict";function t(){}const e=t=>t;function i(t){return t()}function o(){return Object.create(null)}function n(t){t.forEach(i)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const a="undefined"!=typeof window;let c=a?()=>window.performance.now():()=>Date.now(),d=a?t=>requestAnimationFrame(t):t;const l=new Set;function h(t){l.forEach(e=>{e.c(t)||(l.delete(e),e.f())}),0!==l.size&&d(h)}function u(t,e){t.appendChild(e)}function p(t,e,i){t.insertBefore(e,i||null)}function f(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(t){return document.createTextNode(t)}function w(){return $(" ")}function x(){return $("")}function y(t,e,i,o){return t.addEventListener(e,i,o),()=>t.removeEventListener(e,i,o)}function z(t,e,i){null==i?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function b(t,e,i){e in t?t[e]=i:z(t,e,i)}function v(t,e){(null!=e||t.value)&&(t.value=e)}let R,k,E=0,C={};function O(t,e,i,o,n,s,r,a=0){const c=16.666/o;let d="{\n";for(let t=0;t<=1;t+=c){const o=e+(i-e)*s(t);d+=100*t+`%{${r(o,1-o)}}\n`}const l=d+`100% {${r(i,1-i)}}\n}`,h=`__svelte_${function(t){let e=5381,i=t.length;for(;i--;)e=(e<<5)-e^t.charCodeAt(i);return e>>>0}(l)}_${a}`;if(!C[h]){if(!R){const t=g("style");document.head.appendChild(t),R=t.sheet}C[h]=!0,R.insertRule(`@keyframes ${h} ${l}`,R.cssRules.length)}const u=t.style.animation||"";return t.style.animation=`${u?`${u}, `:""}${h} ${o}ms linear ${n}ms 1 both`,E+=1,h}function L(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--E&&d(()=>{if(E)return;let t=R.cssRules.length;for(;t--;)R.deleteRule(t);C={}})}function T(t){k=t}function j(t){(function(){if(!k)throw new Error("Function called outside component initialization");return k})().$$.on_mount.push(t)}const B=[],I=[],_=[],S=[],A=Promise.resolve();let M,P=!1;function V(t){_.push(t)}function F(){const t=new Set;do{for(;B.length;){const t=B.shift();T(t),D(t.$$)}for(;I.length;)I.pop()();for(let e=0;e<_.length;e+=1){const i=_[e];t.has(i)||(i(),t.add(i))}_.length=0}while(B.length);for(;S.length;)S.pop()();P=!1}function D(t){null!==t.fragment&&(t.update(),n(t.before_update),t.fragment&&t.fragment.p(t.ctx,t.dirty),t.dirty=[-1],t.after_update.forEach(V))}function q(t,e,i){t.dispatchEvent(function(t,e){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,!1,!1,e),i}(`${e?"intro":"outro"}${i}`))}const H=new Set;let N;function U(){N={r:0,c:[],p:N}}function G(){N.r||n(N.c),N=N.p}function J(t,e){t&&t.i&&(H.delete(t),t.i(e))}function K(t,e,i,o){if(t&&t.o){if(H.has(t))return;H.add(t),N.c.push(()=>{H.delete(t),o&&(i&&t.d(1),o())}),t.o(e)}}const W={duration:0};function Y(i,o,r,a){let u=o(i,r),p=a?0:1,f=null,g=null,m=null;function $(){m&&L(i,m)}function w(t,e){const i=t.b-p;return e*=Math.abs(i),{a:p,b:t.b,d:i,duration:e,start:t.start,end:t.start+e,group:t.group}}function x(o){const{delay:s=0,duration:r=300,easing:a=e,tick:x=t,css:y}=u||W,z={start:c()+s,b:o};o||(z.group=N,N.r+=1),f?g=z:(y&&($(),m=O(i,p,o,r,s,a,y)),o&&x(0,1),f=w(z,r),V(()=>q(i,o,"start")),function(t){let e;0===l.size&&d(h),new Promise(i=>{l.add(e={c:t,f:i})})}(t=>{if(g&&t>g.start&&(f=w(g,r),g=null,q(i,f.b,"start"),y&&($(),m=O(i,p,f.b,f.duration,0,a,u.css))),f)if(t>=f.end)x(p=f.b,1-p),q(i,f.b,"end"),g||(f.b?$():--f.group.r||n(f.group.c)),f=null;else if(t>=f.start){const e=t-f.start;p=f.a+f.d*a(e/f.duration),x(p,1-p)}return!(!f&&!g)}))}return{run(t){s(u)?(M||(M=Promise.resolve(),M.then(()=>{M=null})),M).then(()=>{u=u(),x(t)}):x(t)},end(){$(),f=g=null}}}function Q(t){t&&t.c()}function X(t,e,o){const{fragment:r,on_mount:a,on_destroy:c,after_update:d}=t.$$;r&&r.m(e,o),V(()=>{const e=a.map(i).filter(s);c?c.push(...e):n(e),t.$$.on_mount=[]}),d.forEach(V)}function Z(t,e){const i=t.$$;null!==i.fragment&&(n(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function tt(t,e){-1===t.$$.dirty[0]&&(B.push(t),P||(P=!0,A.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(e,i,s,r,a,c,d=[-1]){const l=k;T(e);const h=i.props||{},u=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:o(),dirty:d};let p=!1;u.ctx=s?s(e,h,(t,i,o=i)=>(u.ctx&&a(u.ctx[t],u.ctx[t]=o)&&(u.bound[t]&&u.bound[t](o),p&&tt(e,t)),i)):[],u.update(),p=!0,n(u.before_update),u.fragment=!!r&&r(u.ctx),i.target&&(i.hydrate?u.fragment&&u.fragment.l(function(t){return Array.from(t.childNodes)}(i.target)):u.fragment&&u.fragment.c(),i.intro&&J(e.$$.fragment),X(e,i.target,i.anchor),F()),T(l)}class it{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const t=i.indexOf(e);-1!==t&&i.splice(t,1)}}$set(){}}function ot(t){let e,i;return{c(){e=g("input"),z(e,"type","range"),z(e,"id","volume-range"),z(e,"class","range vertical-heighest-first round svelte-uryj0d"),i=[y(e,"change",t[10]),y(e,"input",t[10]),y(e,"change",t[8]),y(e,"blur",t[11])]},m(i,o){p(i,e,o),v(e,t[6])},p(t,i){64&i[0]&&v(e,t[6])},d(t){t&&f(e),n(i)}}}function nt(t){let e,i,o,n;return{c(){e=m("svg"),i=m("circle"),o=m("rect"),n=m("rect"),z(i,"cx","30"),z(i,"cy","30"),z(i,"r","29.5"),z(i,"fill","#C4C4C4"),z(i,"stroke","white"),z(o,"x","21"),z(o,"y","16"),z(o,"width","5"),z(o,"height","26"),z(o,"fill","#161616"),z(n,"x","34"),z(n,"y","16"),z(n,"width","5"),z(n,"height","26"),z(n,"fill","#161616"),z(e,"class","icon svelte-uryj0d"),z(e,"viewBox","0 0 60 60"),z(e,"fill","none"),z(e,"xmlns","http://www.w3.org/2000/svg")},m(t,s){p(t,e,s),u(e,i),u(e,o),u(e,n)},d(t){t&&f(e)}}}function st(t){let e,i,o;return{c(){e=m("svg"),i=m("circle"),o=m("path"),z(i,"cx","30"),z(i,"cy","30"),z(i,"r","29.5"),z(i,"fill","#C4C4C4"),z(i,"stroke","#fff"),z(o,"d","M45 30L22.5 42.9904V17.0096L45 30z"),z(o,"fill","#161616"),z(e,"fill","none"),z(e,"class","icon svelte-uryj0d"),z(e,"xmlns","http://www.w3.org/2000/svg"),z(e,"viewBox","0 0 60 60")},m(t,n){p(t,e,n),u(e,i),u(e,o)},d(t){t&&f(e)}}}function rt(e){let i,o,n,s,r,a,c,d,l,h,$,x,v,R,k,E,C,O,L=e[5]&&ot(e);function T(t,e){return t[7]?nt:st}let j=T(e),B=j(e);return{c(){i=g("a-video"),r=w(),a=g("div"),c=g("button"),d=m("svg"),l=m("circle"),h=m("path"),$=m("path"),x=m("path"),v=w(),L&&L.c(),R=w(),k=g("button"),B.c(),E=w(),C=g("button"),C.innerHTML='<svg fill="none" class="icon svelte-uryj0d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M28.81 12.6944l1.0168-.6159c.3457-.2092.5522-.5849.5417-.9856-.0105-.4007-.2363-.7654-.5923-.9568-.356-.19132-.7884-.18027-1.1342.029l-3.7182 2.251c-.0232.0141-.0354.0391-.0573.0547-.0903.0633-.1705.1397-.2378.2267-.0913.1635-.1697.3336-.2346.5089-.0037.0246.0072.048.005.0726-.0024.0302-.0178.0562-.0178.0873.0069.0605.0192.1203.0366.1787.0557.2011.1394.3935.2483.5721l3.0067 3.3601c.4165.4601 1.1307.5011 1.5984.0917.4676-.4093.5131-1.1153.1016-1.5799l-.9692-1.0827c4.644 1.3603 7.6809 5.7614 7.2683 10.5334-.4125 4.772-4.1607 8.5997-8.9708 9.1609-4.8099.5611-9.3562-2.2987-10.8805-6.8448-1.5244-4.546.3932-9.5252 4.5896-11.9169.5423-.3105.7273-.9969.4133-1.5332-.314-.5363-1.0082-.7193-1.5506-.4088-5.166 2.9355-7.5183 9.0686-5.6204 14.6534 1.898 5.5848 7.5184 9.0685 13.4287 8.3234 5.9104-.7451 10.4671-5.5118 10.8873-11.3889.4202-5.8773-3.413-11.2306-9.1586-12.7904z" fill="#E9E9E9"></path><circle cx="25" cy="25" r="24.5" stroke="#fff"></circle></svg>',b(i,"height",e[2]),b(i,"rotation",o=`${e[1].x} ${e[1].y} ${e[1].z}`),b(i,"width",e[3]),b(i,"video-controls",""),b(i,"position",n=`${e[0].x} ${e[0].y} ${e[0].z}`),i.src!==(s=`#${e[4]}`)&&b(i,"src",s),z(l,"cx","25"),z(l,"cy","25"),z(l,"r","24.5"),z(l,"stroke","#fff"),z(h,"d","M16.4919 20.6124H13v7.7752h3.4919l6.5979 4.8933s1.2101 1.0148 1.2101-.0329V15.5999c0-.8227-1.0644-.0192-1.0644-.0192l-6.7436 5.0317zM28.0591 19.095c-.349-.3474-.91-.3474-1.255 0-.3489.3473-.3489.9107 0 1.2549 1.1413 1.1452 1.7071 2.6299 1.7087 4.1273-.0016 1.5006-.5674 2.9948-1.7087 4.1345-.3489.3474-.3489.9092 0 1.2589.1721.1745.3986.2593.6283.2593.2249 0 .453-.0848.6267-.2593 1.4846-1.4878 2.2305-3.4462 2.2289-5.3934.0024-1.9488-.7435-3.8968-2.2289-5.3822z"),z(h,"fill","#E9E9E9"),z($,"d","M30.4665 16.2978c-.3506-.349-.9116-.349-1.2581 0-.3442.3481-.3442.91 0 1.2581 1.9192 1.9176 2.8747 4.4178 2.878 6.9285-.0033 2.5242-.9548 5.0357-2.878 6.9645-.3458.3473-.3442.9068 0 1.2565.1752.1697.4017.2577.6298.2577.2265 0 .4546-.088.6283-.2577 2.2665-2.2729 3.395-5.2518 3.395-8.221 0-2.9596-1.1373-5.9265-3.395-8.1866z"),z($,"fill","#E9E9E9"),z(x,"d","M33.4149 13.4326c-.3458-.349-.9084-.349-1.2565 0-.3442.3473-.3442.9108 0 1.2549 2.7107 2.7107 4.064 6.2498 4.064 9.8001 0 3.5607-1.3493 7.1102-4.064 9.8265-.3474.3465-.3442.9116 0 1.2565.1752.1721.4033.2577.6314.2577.2249 0 .4514-.0856.6251-.2577 3.0589-3.0613 4.5859-7.0789 4.5851-11.0838.0008-3.9977-1.5343-8.0033-4.5851-11.0542z"),z(x,"fill","#E9E9E9"),z(d,"fill","none"),z(d,"class","icon svelte-uryj0d"),z(d,"xmlns","http://www.w3.org/2000/svg"),z(d,"viewBox","0 0 50 50"),z(c,"id","volume-btn"),z(c,"class","svelte-uryj0d"),z(k,"id","play-btn"),z(k,"class","svelte-uryj0d"),z(C,"id","reset-btn"),z(C,"class","svelte-uryj0d"),z(a,"id","video-controls"),z(a,"class","svelte-uryj0d"),O=y(c,"click",e[12])},m(t,e){p(t,i,e),p(t,r,e),p(t,a,e),u(a,c),u(c,d),u(d,l),u(d,h),u(d,$),u(d,x),u(c,v),L&&L.m(c,null),u(a,R),u(a,k),B.m(k,null),u(a,E),u(a,C)},p(t,e){4&e[0]&&b(i,"height",t[2]),2&e[0]&&o!==(o=`${t[1].x} ${t[1].y} ${t[1].z}`)&&b(i,"rotation",o),8&e[0]&&b(i,"width",t[3]),1&e[0]&&n!==(n=`${t[0].x} ${t[0].y} ${t[0].z}`)&&b(i,"position",n),16&e[0]&&i.src!==(s=`#${t[4]}`)&&b(i,"src",s),t[5]?L?L.p(t,e):(L=ot(t),L.c(),L.m(c,null)):L&&(L.d(1),L=null),j!==(j=T(t))&&(B.d(1),B=j(t),B&&(B.c(),B.m(k,null)))},i:t,o:t,d(t){t&&f(i),t&&f(r),t&&f(a),L&&L.d(),B.d(),O()}}}function at(t,e,i){let{position:o=""}=e,{rotation:n=""}=e,{videoId:s=""}=e,{height:r="1.5"}=e,{width:a="2"}=e,{imageId:c=""}=e,d=!1,l=50,h=!1;AFRAME.registerComponent("video-controls",{init(){const t=this.el,e=document.getElementById("video_1");this.isPlaying=h,e.addEventListener("ended",(function(){e.currentTime=0}));const o=document.getElementById("play-btn");document.querySelector("a-image");o.addEventListener("click",(function(){t.getAttribute("src")!==`#${s}`&&t.setAttribute("src",`#${s}`),!1===h?(i(7,h=!0),e.play()):!0===h&&(i(7,h=!1),e.pause())})),document.getElementById("reset-btn").addEventListener("click",(function(){t.setAttribute("src",`#${c}`),e.pause(),e.currentTime=0,i(7,h=!1)}))},handleClick(t){t.stopPropagation(),t.preventDefault();const e=t.detail.intersection&&t.detail.intersection.object.el;e&&e===t.target&&(!1===this.isPlaying?(this.isPlaying=!0,document.getElementById("video_1").play()):!0===this.isPlaying&&(this.isPlaying=!1,document.getElementById("video_1").pause()))}});return t.$set=t=>{"position"in t&&i(0,o=t.position),"rotation"in t&&i(1,n=t.rotation),"videoId"in t&&i(9,s=t.videoId),"height"in t&&i(2,r=t.height),"width"in t&&i(3,a=t.width),"imageId"in t&&i(4,c=t.imageId)},[o,n,r,a,c,d,l,h,function(){document.querySelector("#video_1").volume=l/100},s,function(){var t;t=this.value,l=""===t?void 0:+t,i(6,l)},()=>i(5,d=!1),()=>i(5,d=!d)]}class ct extends it{constructor(t){super(),et(this,t,at,rt,r,{position:0,rotation:1,videoId:9,height:2,width:3,imageId:4})}}function dt(e){let i,o,n,s,r,a,c,d,l;return{c(){i=g("a-rounded"),b(i,"position",o=`${e[1]} ${e[2]} ${e[3]}`),b(i,"rotation",e[4]),b(i,"width",n=e[0].size.width),b(i,"height",s=e[0].size.height),b(i,"color",r=e[0].color),b(i,"top-left-radius",a=e[0].borderRadius.topLeft),b(i,"top-right-radius",c=e[0].borderRadius.topRight),b(i,"bottom-left-radius",d=e[0].borderRadius.bottomLeft),b(i,"bottom-right-radius",l=e[0].borderRadius.bottomRight)},m(t,e){p(t,i,e)},p(t,e){1&e[0]&&n!==(n=t[0].size.width)&&b(i,"width",n),1&e[0]&&s!==(s=t[0].size.height)&&b(i,"height",s),1&e[0]&&r!==(r=t[0].color)&&b(i,"color",r),1&e[0]&&a!==(a=t[0].borderRadius.topLeft)&&b(i,"top-left-radius",a),1&e[0]&&c!==(c=t[0].borderRadius.topRight)&&b(i,"top-right-radius",c),1&e[0]&&d!==(d=t[0].borderRadius.bottomLeft)&&b(i,"bottom-left-radius",d),1&e[0]&&l!==(l=t[0].borderRadius.bottomRight)&&b(i,"bottom-right-radius",l)},i:t,o:t,d(t){t&&f(i)}}}function lt(t,e,i){let{params:o}=e,n=o.position.x,s=o.position.y,r=o.position.z,a=`${o.rotation.x} ${o.rotation.y} ${o.rotation.z}`;return t.$set=t=>{"params"in t&&i(0,o=t.params)},[o,n,s,r,a]}AFRAME.registerComponent("rounded",{schema:{enabled:{default:!0},width:{type:"number",default:1},height:{type:"number",default:1},radius:{type:"number",default:.3},topLeftRadius:{type:"number",default:-1},topRightRadius:{type:"number",default:-1},bottomLeftRadius:{type:"number",default:-1},bottomRightRadius:{type:"number",default:-1},color:{type:"color",default:"#F0F0F0"},opacity:{type:"number",default:1}},init:function(){this.rounded=new THREE.Mesh(this.draw(),new THREE.MeshPhongMaterial({color:new THREE.Color(this.data.color),side:THREE.DoubleSide})),this.updateOpacity(),this.el.setObject3D("mesh",this.rounded)},update:function(){this.data.enabled?this.rounded&&(this.rounded.visible=!0,this.rounded.geometry=this.draw(),this.rounded.material.color=new THREE.Color(this.data.color),this.updateOpacity()):this.rounded.visible=!1},updateOpacity:function(){this.data.opacity<0&&(this.data.opacity=0),this.data.opacity>1&&(this.data.opacity=1),this.data.opacity<1?this.rounded.material.transparent=!0:this.rounded.material.transparent=!1,this.rounded.material.opacity=this.data.opacity},tick:function(){},remove:function(){this.rounded&&(this.el.object3D.remove(this.rounded),this.rounded=null)},draw:function(){var t=new THREE.Shape;var e,i,o,n,s,r,a,c,d,l=[this.data.radius,this.data.radius,this.data.radius,this.data.radius];return-1!=this.data.topLeftRadius&&(l[0]=this.data.topLeftRadius),-1!=this.data.topRightRadius&&(l[1]=this.data.topRightRadius),-1!=this.data.bottomLeftRadius&&(l[2]=this.data.bottomLeftRadius),-1!=this.data.bottomRightRadius&&(l[3]=this.data.bottomRightRadius),e=t,i=0,o=0,n=this.data.width,s=this.data.height,r=l[0],a=l[1],c=l[2],d=l[3],r||(r=1e-5),a||(a=1e-5),c||(c=1e-5),d||(d=1e-5),e.moveTo(i,o+r),e.lineTo(i,o+s-r),e.quadraticCurveTo(i,o+s,i+r,o+s),e.lineTo(i+n-a,o+s),e.quadraticCurveTo(i+n,o+s,i+n,o+s-a),e.lineTo(i+n,o+d),e.quadraticCurveTo(i+n,o,i+n-d,o),e.lineTo(i+c,o),e.quadraticCurveTo(i,o,i,o+c),new THREE.ShapeBufferGeometry(t)},pause:function(){},play:function(){}}),AFRAME.registerPrimitive("a-rounded",{defaultComponents:{rounded:{}},mappings:{enabled:"rounded.enabled",width:"rounded.width",height:"rounded.height",radius:"rounded.radius","top-left-radius":"rounded.topLeftRadius","top-right-radius":"rounded.topRightRadius","bottom-left-radius":"rounded.bottomLeftRadius","bottom-right-radius":"rounded.bottomRightRadius",color:"rounded.color",opacity:"rounded.opacity"}});class ht extends it{constructor(t){super(),et(this,t,lt,dt,r,{params:0})}}function ut(t){let e,i,o,n,s,r,a,c,d,l,h,u,m,$,x,y,z,v,R,k,E,C,O,L,T,j,B,I,_,S,A;const M=new ht({props:{params:t[1]}}),P=new ct({props:{position:t[0].position,rotation:t[0].rotation,videoId:t[0].videoId,imageId:t[0].imageId,height:t[0].size.height,width:t[0].size.width,markerVisible:t[5]}}),V=new ht({props:{params:t[2]}});return{c(){Q(M.$$.fragment),e=w(),i=g("a-text"),y=w(),Q(P.$$.fragment),z=w(),Q(V.$$.fragment),v=w(),R=g("a-text"),b(i,"wrap-count",o=t[3].wrapCount),b(i,"value",n=t[3].text),b(i,"rotation",s=`${t[3].rotation.x} ${t[3].rotation.y} ${t[3].rotation.z}`),b(i,"width",r=t[3].size.width),b(i,"height",a=t[3].size.height),b(i,"color",c=t[3].color),b(i,"position",d=`${t[3].position.x} ${t[3].position.y} ${t[3].position.z}`),b(i,"z-offset",l=t[3].zOffset),b(i,"x-offset",h=t[3].xOffset),b(i,"letter-spacing",u=t[3].letterSpacing),b(i,"font",m=t[3].font),b(i,"align",$=t[3].align),b(i,"anchor",x=t[3].anchor),b(R,"color",k=t[4].color),b(R,"value",E=t[4].text),b(R,"rotation",C=`${t[4].rotation.x} ${t[4].rotation.y} ${t[4].rotation.z}`),b(R,"width",O=t[4].size.width),b(R,"height",L=t[4].size.height),b(R,"position",T=`${t[4].position.x} ${t[4].position.y} ${t[4].position.z}`),b(R,"wrap-count",j=t[4].wrapCount),b(R,"z-offset",B=t[4].zOffset),b(R,"x-offset",I=t[4].xOffset),b(R,"letter-spacing",_=t[4].letterSpacing),b(R,"font",S=t[4].font)},m(t,o){X(M,t,o),p(t,e,o),p(t,i,o),p(t,y,o),X(P,t,o),p(t,z,o),X(V,t,o),p(t,v,o),p(t,R,o),A=!0},p(t,e){const p={};2&e[0]&&(p.params=t[1]),M.$set(p),(!A||8&e[0]&&o!==(o=t[3].wrapCount))&&b(i,"wrap-count",o),(!A||8&e[0]&&n!==(n=t[3].text))&&b(i,"value",n),(!A||8&e[0]&&s!==(s=`${t[3].rotation.x} ${t[3].rotation.y} ${t[3].rotation.z}`))&&b(i,"rotation",s),(!A||8&e[0]&&r!==(r=t[3].size.width))&&b(i,"width",r),(!A||8&e[0]&&a!==(a=t[3].size.height))&&b(i,"height",a),(!A||8&e[0]&&c!==(c=t[3].color))&&b(i,"color",c),(!A||8&e[0]&&d!==(d=`${t[3].position.x} ${t[3].position.y} ${t[3].position.z}`))&&b(i,"position",d),(!A||8&e[0]&&l!==(l=t[3].zOffset))&&b(i,"z-offset",l),(!A||8&e[0]&&h!==(h=t[3].xOffset))&&b(i,"x-offset",h),(!A||8&e[0]&&u!==(u=t[3].letterSpacing))&&b(i,"letter-spacing",u),(!A||8&e[0]&&m!==(m=t[3].font))&&b(i,"font",m),(!A||8&e[0]&&$!==($=t[3].align))&&b(i,"align",$),(!A||8&e[0]&&x!==(x=t[3].anchor))&&b(i,"anchor",x);const f={};1&e[0]&&(f.position=t[0].position),1&e[0]&&(f.rotation=t[0].rotation),1&e[0]&&(f.videoId=t[0].videoId),1&e[0]&&(f.imageId=t[0].imageId),1&e[0]&&(f.height=t[0].size.height),1&e[0]&&(f.width=t[0].size.width),32&e[0]&&(f.markerVisible=t[5]),P.$set(f);const g={};4&e[0]&&(g.params=t[2]),V.$set(g),(!A||16&e[0]&&k!==(k=t[4].color))&&b(R,"color",k),(!A||16&e[0]&&E!==(E=t[4].text))&&b(R,"value",E),(!A||16&e[0]&&C!==(C=`${t[4].rotation.x} ${t[4].rotation.y} ${t[4].rotation.z}`))&&b(R,"rotation",C),(!A||16&e[0]&&O!==(O=t[4].size.width))&&b(R,"width",O),(!A||16&e[0]&&L!==(L=t[4].size.height))&&b(R,"height",L),(!A||16&e[0]&&T!==(T=`${t[4].position.x} ${t[4].position.y} ${t[4].position.z}`))&&b(R,"position",T),(!A||16&e[0]&&j!==(j=t[4].wrapCount))&&b(R,"wrap-count",j),(!A||16&e[0]&&B!==(B=t[4].zOffset))&&b(R,"z-offset",B),(!A||16&e[0]&&I!==(I=t[4].xOffset))&&b(R,"x-offset",I),(!A||16&e[0]&&_!==(_=t[4].letterSpacing))&&b(R,"letter-spacing",_),(!A||16&e[0]&&S!==(S=t[4].font))&&b(R,"font",S)},i(t){A||(J(M.$$.fragment,t),J(P.$$.fragment,t),J(V.$$.fragment,t),A=!0)},o(t){K(M.$$.fragment,t),K(P.$$.fragment,t),K(V.$$.fragment,t),A=!1},d(t){Z(M,t),t&&f(e),t&&f(i),t&&f(y),Z(P,t),t&&f(z),Z(V,t),t&&f(v),t&&f(R)}}}function pt(t,e,i){let{videoParams:o={}}=e,{titleBlock:n={}}=e,{descriptionBlock:s={}}=e,{titleText:r={}}=e,{descriptionText:a={}}=e,{markerVisible:c}=e;return t.$set=t=>{"videoParams"in t&&i(0,o=t.videoParams),"titleBlock"in t&&i(1,n=t.titleBlock),"descriptionBlock"in t&&i(2,s=t.descriptionBlock),"titleText"in t&&i(3,r=t.titleText),"descriptionText"in t&&i(4,a=t.descriptionText),"markerVisible"in t&&i(5,c=t.markerVisible)},[o,n,s,r,a,c]}class ft extends it{constructor(t){super(),et(this,t,pt,ut,r,{videoParams:0,titleBlock:1,descriptionBlock:2,titleText:3,descriptionText:4,markerVisible:5})}}function gt(e){let i,o,n,s,r,a,c,d,l,h,u,m,$,x,y,z,v,R,k,E,C,O,L,T,j,B,I,_,S,A,M,P,V,F,D,q,H;const N=new ht({props:{params:e[1]}}),U=new ht({props:{params:e[2]}});return{c(){Q(N.$$.fragment),i=w(),o=g("a-text"),z=w(),v=g("a-image"),L=w(),Q(U.$$.fragment),T=w(),j=g("a-text"),b(o,"wrap-count",n=e[3].wrapCount),b(o,"value",s=e[3].text),b(o,"rotation",r=`${e[3].rotation.x} ${e[3].rotation.y} ${e[3].rotation.z}`),b(o,"width",a=e[3].size.width),b(o,"height",c=e[3].size.height),b(o,"color",d=e[3].color),b(o,"position",l=`${e[3].position.x} ${e[3].position.y} ${e[3].position.z}`),b(o,"z-offset",h=e[3].zOffset),b(o,"x-offset",u=e[3].xOffset),b(o,"letter-spacing",m=e[3].letterSpacing),b(o,"font",$=e[3].font),b(o,"align",x=e[3].align),b(o,"anchor",y=e[3].anchor),b(v,"position",R=`${e[0].position.x} ${e[0].position.y} ${e[0].position.z}`),b(v,"rotation",k=`${e[0].rotation.x} ${e[0].rotation.y} ${e[0].rotation.z}`),b(v,"height",E=e[0].size.height),b(v,"width",C=e[0].size.width),v.src!==(O=e[0].src)&&b(v,"src",O),b(j,"color",B=e[4].color),b(j,"value",I=e[4].text),b(j,"rotation",_=`${e[4].rotation.x} ${e[4].rotation.y} ${e[4].rotation.z}`),b(j,"width",S=e[4].size.width),b(j,"height",A=e[4].size.height),b(j,"position",M=`${e[4].position.x} ${e[4].position.y} ${e[4].position.z}`),b(j,"wrap-count",P=e[4].wrapCount),b(j,"z-offset",V=e[4].zOffset),b(j,"x-offset",F=e[4].xOffset),b(j,"letter-spacing",D=e[4].letterSpacing),b(j,"font",q=e[4].font)},m(t,e){X(N,t,e),p(t,i,e),p(t,o,e),p(t,z,e),p(t,v,e),p(t,L,e),X(U,t,e),p(t,T,e),p(t,j,e),H=!0},p:t,i(t){H||(J(N.$$.fragment,t),J(U.$$.fragment,t),H=!0)},o(t){K(N.$$.fragment,t),K(U.$$.fragment,t),H=!1},d(t){Z(N,t),t&&f(i),t&&f(o),t&&f(z),t&&f(v),t&&f(L),Z(U,t),t&&f(T),t&&f(j)}}}function mt(t){const e={position:{x:0,y:0,z:0},rotation:{x:-90,y:0,z:0},size:{height:1.5,width:2},src:"./static/images/chicken_salad.png"},i={position:{x:e.position.x-e.size.width/2,y:e.position.y,z:e.position.z-e.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:e.size.height/3,width:e.size.width},borderRadius:{topLeft:.05,topRight:.05,bottomLeft:0,bottomRight:0},color:"#7AE3D0"},o={size:{height:e.size.height,width:e.size.width},position:{x:e.position.x-e.size.width/2,y:e.position.y,get z(){return e.position.z+e.size.height+o.size.height/2}},rotation:{x:-90,y:0,z:0},borderRadius:{topLeft:0,topRight:0,bottomLeft:.05,bottomRight:.05},color:"#2B2B2B"},n={text:"Jerk Chicken Salad",padding:.1,position:{x:i.position.x,y:i.position.y+.05,z:i.position.z-i.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:i.size.height,width:i.size.width-.2},font:"https://cdn.aframe.io/fonts/Roboto-msdf.json",color:"white",wrapCount:"20",xOffset:.1,zOffset:.001,height:1,align:"center",baseline:"center",letterSpacing:2,anchor:"left"},s={text:"A fragment Thai inspired chicken salad dish that is light to the mouth and refreshing to the tongue.\n\n Contains roasted chicken, pineapple, breadcrumbs, lime, chilli, coriander and black beams.",padding:.1,size:{height:o.size.height,width:o.size.width-.2},position:{x:o.position.x,y:o.position.y+.05,z:o.position.z-o.size.height/2},rotation:{x:-90,y:0,z:0},font:"https://cdn.aframe.io/fonts/Roboto-msdf.json",color:"white",wrapCount:"30",xOffset:.1,zOffset:.001,height:1,align:"left",baseline:"center",letterSpacing:2};return[e,i,o,n,s]}class $t extends it{constructor(t){super(),et(this,t,mt,gt,r,{})}}function wt(t){const e=t-1;return e*e*e+1}function xt(t,{delay:e=0,duration:i=400,easing:o=wt,x:n=0,y:s=0,opacity:r=0}){const a=getComputedStyle(t),c=+a.opacity,d="none"===a.transform?"":a.transform,l=c*(1-r);return{delay:e,duration:i,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${d} translate(${(1-t)*n}px, ${(1-t)*s}px);\n\t\t\topacity: ${c-l*e}`}}function yt(e){let i,o,n,s,r;return{c(){i=g("section"),o=g("button"),o.textContent="Buy Product",z(o,"class","svelte-w7f3j6"),z(i,"id","cta-section"),z(i,"class","svelte-w7f3j6"),r=y(o,"click",e[7])},m(t,e){p(t,i,e),u(i,o),s=!0},p:t,i(t){s||(V(()=>{n||(n=Y(i,xt,{y:100,duration:200},!0)),n.run(1)}),s=!0)},o(t){n||(n=Y(i,xt,{y:100,duration:200},!1)),n.run(0),s=!1},d(t){t&&f(i),t&&n&&n.end(),r()}}}function zt(t){let e,i,o,n,s,r,a,c,d,l,h,u,m,$,y,v,R,k,E,C,O,L,T,j,B,I,_,S,A,M,P,V,F,D,q,H,N,W,Y,tt,et,it,ot,nt;const st=new ht({props:{params:t[3]}}),rt=new ht({props:{params:t[4]}});let at=t[0]&&yt(t);return{c(){Q(st.$$.fragment),e=w(),i=g("a-text"),y=w(),v=g("a-image"),L=w(),Q(rt.$$.fragment),T=w(),j=g("a-text"),H=w(),N=g("img"),Y=w(),tt=g("img"),it=w(),at&&at.c(),ot=x(),b(i,"wrap-count",o=t[5].wrapCount),b(i,"id","title-text"),b(i,"position",n=`${t[5].position.x} ${t[5].position.y} ${t[5].position.z}`),b(i,"rotation",s=`${t[5].rotation.x} ${t[5].rotation.y} ${t[5].rotation.z}`),b(i,"width",r=t[5].size.width),b(i,"height",a=t[5].size.height),b(i,"color",c=t[5].color),b(i,"value",d=t[5].text[t[1]]),b(i,"z-offset",l=t[5].zOffset),b(i,"x-offset",h=t[5].xOffset),b(i,"letter-spacing",u=t[5].letterSpacing),b(i,"font",m=t[5].font),b(i,"align",$=t[5].align),b(i,"anchor","left"),b(v,"gallery-controls",""),b(v,"id","image-gallery"),b(v,"position",R=`${t[2].position.x} ${t[2].position.y} ${t[2].position.z}`),b(v,"rotation",k=`${t[2].rotation.x} ${t[2].rotation.y} ${t[2].rotation.z}`),b(v,"height",E=t[2].size.height),b(v,"width",C=t[2].size.width),v.src!==(O=t[2].src[t[1]])&&b(v,"src",O),b(j,"color",B=t[6].color),b(j,"id","description-text"),b(j,"position",I=`${t[6].position.x} ${t[6].position.y} ${t[6].position.z}`),b(j,"rotation",_=`${t[6].rotation.x} ${t[6].rotation.y} ${t[6].rotation.z}`),b(j,"width",S=t[6].size.width),b(j,"height",A=t[6].size.height),b(j,"value",M=t[6].text[t[1]]),b(j,"wrap-count",P=t[6].wrapCount),b(j,"z-offset",V=t[6].zOffset),b(j,"x-offset",F=t[6].xOffset),b(j,"letter-spacing",D=t[6].letterSpacing),b(j,"font",q=t[6].font),b(j,"anchor","left"),z(N,"id","prev"),N.src!==(W="./static/icons/left_button.svg")&&z(N,"src","./static/icons/left_button.svg"),z(N,"alt","left button"),z(N,"class","svelte-w7f3j6"),z(tt,"id","next"),tt.src!==(et="./static/icons/right_button.svg")&&z(tt,"src","./static/icons/right_button.svg"),z(tt,"alt","right button"),z(tt,"class","svelte-w7f3j6")},m(t,o){X(st,t,o),p(t,e,o),p(t,i,o),p(t,y,o),p(t,v,o),p(t,L,o),X(rt,t,o),p(t,T,o),p(t,j,o),p(t,H,o),p(t,N,o),p(t,Y,o),p(t,tt,o),p(t,it,o),at&&at.m(t,o),p(t,ot,o),nt=!0},p(t,e){(!nt||2&e[0]&&d!==(d=t[5].text[t[1]]))&&b(i,"value",d),(!nt||2&e[0]&&v.src!==(O=t[2].src[t[1]]))&&b(v,"src",O),(!nt||2&e[0]&&M!==(M=t[6].text[t[1]]))&&b(j,"value",M),t[0]?at?(at.p(t,e),J(at,1)):(at=yt(t),at.c(),J(at,1),at.m(ot.parentNode,ot)):at&&(U(),K(at,1,1,()=>{at=null}),G())},i(t){nt||(J(st.$$.fragment,t),J(rt.$$.fragment,t),J(at),nt=!0)},o(t){K(st.$$.fragment,t),K(rt.$$.fragment,t),K(at),nt=!1},d(t){Z(st,t),t&&f(e),t&&f(i),t&&f(y),t&&f(v),t&&f(L),Z(rt,t),t&&f(T),t&&f(j),t&&f(H),t&&f(N),t&&f(Y),t&&f(tt),t&&f(it),at&&at.d(t),t&&f(ot)}}}function bt(t,e,i){let{markerVisible:o}=e,n=0;const s={position:{x:0,y:0,z:0},rotation:{x:-90,y:0,z:0},size:{height:1.5,width:2},src:["./static/images/shoe_1.jpg","./static/images/shoe_2.jpg","./static/images/shoe_3.jpg"],link:["https://www.adidas.com.au/ultraboost-19-shoes/EF1339.html","https://www.adidas.com.au/ultraboost-19-shoes/EF1340.html","https://www.adidas.com.au/ultraboost-19-shoes/EF1341.html"]},r={position:{x:s.position.x-s.size.width/2,y:s.position.y,z:s.position.z-s.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:s.size.height/3,width:s.size.width},borderRadius:{topLeft:.05,topRight:.05,bottomLeft:0,bottomRight:0},color:"#2B2B2B"},a={size:{height:s.size.height,width:s.size.width},position:{x:s.position.x-s.size.width/2,y:s.position.y,get z(){return s.position.z+s.size.height+a.size.height/2}},rotation:{x:-90,y:0,z:0},borderRadius:{topLeft:0,topRight:0,bottomLeft:.05,bottomRight:.05},color:"#2B2B2B"},c={text:["Ultraboost 19 Core Black","Ultraboost 19 Cloud Blue","Ultraboost 19 Core Red"],padding:.1,position:{x:r.position.x,y:r.position.y+.05,z:r.position.z-r.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:r.size.height,width:r.size.width-.2},font:"https://cdn.aframe.io/fonts/Roboto-msdf.json",color:"white",wrapCount:"20",xOffset:.1,zOffset:.001,height:1,align:"center",baseline:"center",letterSpacing:2,anchor:"left"},d={text:["ULTRABOOST 19 SHOES RESPONSIVE RUNNING SHOES WITH AN ADAPTIVE KNIT UPPER.","To create the next iteration of Ultraboost, we streamlined the original silhouette to four key components. The result is our most responsive shoe: Ultraboost 19. Now, a pack of new Ultraboost 19 colorways are about to hit the streets—remixing iconic Boost style with the latest running tech. Experience the performance running shoe that returns more energy than ever thanks to its new components.","Ultraboost reinvented. These running shoes reboot key performance technologies to give you a confident and energy-filled run. The knit upper has a second-skin fit and is built with motion-weave technology for adaptive stretch and support. Dual-density cushioning delivers medial support and an energised ride."],padding:.1,position:{x:a.position.x,y:a.position.y+.05,z:a.position.z-a.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:a.size.height,width:a.size.width-.2},font:"https://cdn.aframe.io/fonts/Roboto-msdf.json",color:"white",wrapCount:"30",xOffset:.1,zOffset:.001,height:1,align:"left",baseline:"center",letterSpacing:2};return AFRAME.registerComponent("gallery-controls",{init(){const t=document.getElementById("prev"),e=document.getElementById("next"),i=s.src;this.imageLength=i.length,this.index=0;let o=this;t.addEventListener("click",(function(){o.nextImage("prev")})),e.addEventListener("click",(function(){o.nextImage("next")}))},handleClick(t){t.stopPropagation(),t.preventDefault();const e=t.target.getAttribute("id"),i=t.detail.intersection&&t.detail.intersection.object.el;i&&i===t.target&&(this.nextImage(e),t.target.setAttribute("src",s.src[n]))},nextImage(t){"next"===t?(this.index=this.index+1,this.index>this.imageLength-1&&(this.index=0)):"prev"===t&&(this.index=this.index-1,this.index<0&&(this.index=this.imageLength-1));let e=document.getElementById("title-text"),i=document.getElementById("description-text");this.el.setAttribute("src",s.src[this.index]),e.setAttribute("value",c.text[this.index]),i.setAttribute("value",d.text[this.index])}}),t.$set=t=>{"markerVisible"in t&&i(0,o=t.markerVisible)},[o,n,s,r,a,c,d,function(){window.location.href=s.link[n]}]}class vt extends it{constructor(t){super(),et(this,t,bt,zt,r,{markerVisible:0})}}function Rt(t){let e,i,o,n,s;return{c(){e=g("a-text"),o=w(),n=g("a-entity"),b(e,"value","Model Loading"),b(e,"visible",i="component loaded"===t[0]),b(e,"rotation","-90 0 0"),b(e,"width","1"),b(e,"height","1"),b(e,"positon","-0.5 0 0"),b(n,"visible",s="model loaded"===t[0]),b(n,"model-click",""),b(n,"obj-model",Et),b(n,"scale","1 1 1"),b(n,"rotation","-90 0 0")},m(t,i){p(t,e,i),p(t,o,i),p(t,n,i)},p(t,o){1&o[0]&&i!==(i="component loaded"===t[0])&&b(e,"visible",i),1&o[0]&&s!==(s="model loaded"===t[0])&&b(n,"visible",s)},d(t){t&&f(e),t&&f(o),t&&f(n)}}}function kt(e){let i;let o=Rt&&Rt(e);return{c(){o&&o.c(),i=x()},m(t,e){o&&o.m(t,e),p(t,i,e)},p(t,e){o.p(t,e)},i:t,o:t,d(t){o&&o.d(t),t&&f(i)}}}const Et="obj: url(./static/models/chair/jean_obj.obj); mtl: url(./static/models/chair/jean_obj.mtl)";function Ct(t,e,i){let o="component loaded";return AFRAME.registerComponent("model-click",{init(){const t=this.el;t.addEventListener("model-loaded",(function(){i(0,o="model loaded")})),"model loaded"===o&&t.addEventListener("click",this.handleClick)},handleClick(t){t.stopPropagation(),t.preventDefault();const e=t.detail.intersection&&t.detail.intersection.object.el;e&&e===t.target&&console.log("click")}}),[o]}class Ot extends it{constructor(t){super(),et(this,t,Ct,kt,r,{})}}function Lt(e){let i;return{c(){i=g("p"),i.textContent="Your Browser is not supported"},m(t,e){p(t,i,e)},p:t,i:t,o:t,d(t){t&&f(i)}}}function Tt(t){let e,i,o,n,s,r,a,c,d,l,h,x,y,v,R,k,E,C;const O=[_t,It,Bt,jt],L=[];function T(t,e){return"video"===t[2]?0:"image"===t[2]?1:"imagegallery"===t[2]?2:"3dmodel"===t[2]?3:-1}return~(v=T(t))&&(R=L[v]=O[v](t)),{c(){e=g("a-scene"),i=g("a-assets"),o=g("video"),a=w(),c=m("image"),h=$(" --\x3e"),x=w(),y=g("a-marker"),R&&R.c(),k=w(),E=g("a-entity"),z(o,"id",n=t[4].videoId),z(o,"crossorigin","anonymous"),o.loop=s=t[4].loop,z(o,"webkit-playsinline",""),o.playsInline=!0,o.src!==(r=t[4].videoSrc)&&z(o,"src",r),z(c,"id",d=t[4].imageId),c.src!==(l=t[4].imageSrc)&&z(c,"src",l),b(y,"marker-visible",""),b(y,"preset","custom"),b(y,"type","pattern"),b(y,"url",t[3]),b(E,"camera",""),b(e,"embedded",""),b(e,"vr-mode-ui","enabled: false"),b(e,"arjs","debugUIEnabled: false; patternRatio:0.8"),b(e,"emitevents","true"),b(e,"cursor","rayOrigin: mouse; fuse: true; fuseTimeout: 0;"),b(e,"raycaster","objects: [clickable];")},m(t,n){p(t,e,n),u(e,i),u(i,o),u(i,a),u(i,c),u(i,h),u(e,x),u(e,y),~v&&L[v].m(y,null),u(e,k),u(e,E),C=!0},p(t,e){let i=v;v=T(t),v===i?~v&&L[v].p(t,e):(R&&(U(),K(L[i],1,1,()=>{L[i]=null}),G()),~v?(R=L[v],R||(R=L[v]=O[v](t),R.c()),J(R,1),R.m(y,null)):R=null),(!C||8&e[0])&&b(y,"url",t[3])},i(t){C||(J(R),C=!0)},o(t){K(R),C=!1},d(t){t&&f(e),~v&&L[v].d()}}}function jt(e){let i;const o=new Ot({});return{c(){Q(o.$$.fragment)},m(t,e){X(o,t,e),i=!0},p:t,i(t){i||(J(o.$$.fragment,t),i=!0)},o(t){K(o.$$.fragment,t),i=!1},d(t){Z(o,t)}}}function Bt(t){let e;const i=new vt({props:{markerVisible:t[1]}});return{c(){Q(i.$$.fragment)},m(t,o){X(i,t,o),e=!0},p(t,e){const o={};2&e[0]&&(o.markerVisible=t[1]),i.$set(o)},i(t){e||(J(i.$$.fragment,t),e=!0)},o(t){K(i.$$.fragment,t),e=!1},d(t){Z(i,t)}}}function It(e){let i;const o=new $t({});return{c(){Q(o.$$.fragment)},m(t,e){X(o,t,e),i=!0},p:t,i(t){i||(J(o.$$.fragment,t),i=!0)},o(t){K(o.$$.fragment,t),i=!1},d(t){Z(o,t)}}}function _t(t){let e;const i=new ft({props:{titleBlock:t[5],videoParams:t[4],descriptionBlock:t[6],titleText:t[7],descriptionText:t[8],markerVisible:t[1]}});return{c(){Q(i.$$.fragment)},m(t,o){X(i,t,o),e=!0},p(t,e){const o={};2&e[0]&&(o.markerVisible=t[1]),i.$set(o)},i(t){e||(J(i.$$.fragment,t),e=!0)},o(t){K(i.$$.fragment,t),e=!1},d(t){Z(i,t)}}}function St(t){let e,i,o,n;const s=[Tt,Lt],r=[];function a(t,e){return t[0]?0:1}return e=a(t),i=r[e]=s[e](t),{c(){i.c(),o=x()},m(t,i){r[e].m(t,i),p(t,o,i),n=!0},p(t,n){let c=e;e=a(t),e===c?r[e].p(t,n):(U(),K(r[c],1,1,()=>{r[c]=null}),G(),i=r[e],i||(i=r[e]=s[e](t),i.c()),J(i,1),i.m(o.parentNode,o))},i(t){n||(J(i),n=!0)},o(t){K(i),n=!1},d(t){r[e].d(t),t&&f(o)}}}function At(){navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"environment"}}}).then((function(t){document.getElementsByTagName("video")[0].srcObject=t})).catch((function(t){console.log(t)}))}function Mt(t,e,i){let o,n=!0,s=!1,r="",a="";j(()=>{switch(i(0,n=null!=navigator.mediaDevices&&null!=navigator.mediaDevices.enumerateDevices&&null!=navigator.mediaDevices.getUserMedia),void 0!==document.hidden?o="visibilitychange":void 0!==document.msHidden?o="msvisibilitychange":void 0!==document.webkitHidden&&(o="webkitvisibilitychange"),document.addEventListener(o,At,!1),i(2,r=function(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var e=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(location.search);return null===e?"":decodeURIComponent(e[1].replace(/\+/g," "))}("template")),r){case"video":i(3,a="./static/pattern/pattern-video-qr-code.patt");break;case"image":i(3,a="./static/pattern/pattern-image-qr-code.patt");break;case"imagegallery":i(3,a="./static/pattern/pattern-imagegallery-qr-code.patt");break;case"3dmodel":i(3,a="./static/pattern/pattern-3dmodel-qr-code.patt");break;case"article":i(3,a="./static/pattern/pattern-article-qr-code.patt");break;default:i(3,a="./static/pattern/pattern-video-qr-code.patt")}});const c={position:{x:0,y:0,z:0},rotation:{x:-90,y:0,z:0},size:{height:1.5,width:2},videoId:"video_1",videoSrc:"./static/videos/coffee_video.mp4",imageId:"image_1",imageSrc:"./static/images/coffee_cover.png",videoOpts:{loop:"true"}},d={position:{x:c.position.x-c.size.width/2,y:c.position.y,z:c.position.z-c.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:c.size.height/3,width:c.size.width},borderRadius:{topLeft:.05,topRight:.05,bottomLeft:0,bottomRight:0},color:"#333"},l={position:{x:c.position.x-c.size.width/2,y:c.position.y,z:c.position.z+c.size.height},rotation:{x:-90,y:0,z:0},size:{height:c.size.height/2,width:c.size.width},borderRadius:{topLeft:0,topRight:0,bottomLeft:.05,bottomRight:.05},color:"#26869F"},h={text:"Learn how to create a special coffee brew",padding:.1,position:{x:c.position.x-c.size.width/2,y:c.position.y+.05,z:c.position.z-c.size.height/2-d.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:d.size.height,width:d.size.width-.2},font:"https://cdn.aframe.io/fonts/Roboto-msdf.json",color:"white",wrapCount:"20",xOffset:.1,zOffset:.001,height:1,align:"center",baseline:"center",letterSpacing:2,anchor:"left"},u={text:"Find out the secret sauce to creating awesome tasting coffee in a simple 3 step process.",padding:.1,position:{x:c.position.x-c.size.width/2,y:c.position.y+.05,z:c.position.z+c.size.height/2+d.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:l.size.height,width:l.size.width-.2},font:"https://cdn.aframe.io/fonts/Roboto-msdf.json",color:"white",wrapCount:"30",xOffset:.1,zOffset:.001,height:1,align:"left",baseline:"center",letterSpacing:2};return AFRAME.registerComponent("marker-visible",{init(){this.tick=AFRAME.utils.throttleTick(this.tick,500,this)},tick(){1==document.querySelector("a-marker").object3D.visible?i(1,s=!0):i(1,s=!1)}}),[n,s,r,a,c,d,l,h,u]}return new class extends it{constructor(t){super(),et(this,t,Mt,St,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
