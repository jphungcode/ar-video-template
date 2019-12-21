var app=function(){"use strict";function t(){}function e(t){return t()}function i(){return Object.create(null)}function o(t){t.forEach(e)}function n(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function a(t,e,i){t.insertBefore(e,i||null)}function d(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function u(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function l(t){return document.createTextNode(t)}function h(){return l(" ")}function p(t,e,i,o){return t.addEventListener(e,i,o),()=>t.removeEventListener(e,i,o)}function f(t,e,i){null==i?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function g(t,e,i){e in t?t[e]=i:f(t,e,i)}function m(t,e){(null!=e||t.value)&&(t.value=e)}let y;function $(t){y=t}function v(t){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(t)}const w=[],b=[],x=[],z=[],R=Promise.resolve();let E=!1;function T(t){x.push(t)}function I(){const t=new Set;do{for(;w.length;){const t=w.shift();$(t),k(t.$$)}for(;b.length;)b.pop()();for(let e=0;e<x.length;e+=1){const i=x[e];t.has(i)||(i(),t.add(i))}x.length=0}while(w.length);for(;z.length;)z.pop()();E=!1}function k(t){null!==t.fragment&&(t.update(),o(t.before_update),t.fragment&&t.fragment.p(t.ctx,t.dirty),t.dirty=[-1],t.after_update.forEach(T))}const L=new Set;let C;function B(t,e){t&&t.i&&(L.delete(t),t.i(e))}function _(t,e,i,o){if(t&&t.o){if(L.has(t))return;L.add(t),C.c.push(()=>{L.delete(t),o&&(i&&t.d(1),o())}),t.o(e)}}function O(t){t&&t.c()}function j(t,i,r){const{fragment:s,on_mount:a,on_destroy:d,after_update:c}=t.$$;s&&s.m(i,r),T(()=>{const i=a.map(e).filter(n);d?d.push(...i):o(i),t.$$.on_mount=[]}),c.forEach(T)}function S(t,e){const i=t.$$;null!==i.fragment&&(o(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(w.push(t),E||(E=!0,R.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(e,n,r,s,a,d,c=[-1]){const u=y;$(e);const l=n.props||{},h=e.$$={fragment:null,ctx:null,props:d,update:t,not_equal:a,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:i(),dirty:c};let p=!1;h.ctx=r?r(e,l,(t,i,o=i)=>(h.ctx&&a(h.ctx[t],h.ctx[t]=o)&&(h.bound[t]&&h.bound[t](o),p&&M(e,t)),i)):[],h.update(),p=!0,o(h.before_update),h.fragment=!!s&&s(h.ctx),n.target&&(n.hydrate?h.fragment&&h.fragment.l(function(t){return Array.from(t.childNodes)}(n.target)):h.fragment&&h.fragment.c(),n.intro&&B(e.$$.fragment),j(e,n.target,n.anchor),I()),$(u)}class A{$destroy(){S(this,1),this.$destroy=t}$on(t,e){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const t=i.indexOf(e);-1!==t&&i.splice(t,1)}}$set(){}}function H(t){let e,i;return{c(){e=c("input"),f(e,"type","range"),f(e,"id","volume-range"),f(e,"class","range vertical-heighest-first round svelte-uryj0d"),i=[p(e,"change",t[10]),p(e,"input",t[10]),p(e,"change",t[8]),p(e,"blur",t[11])]},m(i,o){a(i,e,o),m(e,t[6])},p(t,i){64&i[0]&&m(e,t[6])},d(t){t&&d(e),o(i)}}}function F(t){let e,i,o,n;return{c(){e=u("svg"),i=u("circle"),o=u("rect"),n=u("rect"),f(i,"cx","30"),f(i,"cy","30"),f(i,"r","29.5"),f(i,"fill","#C4C4C4"),f(i,"stroke","white"),f(o,"x","21"),f(o,"y","16"),f(o,"width","5"),f(o,"height","26"),f(o,"fill","#161616"),f(n,"x","34"),f(n,"y","16"),f(n,"width","5"),f(n,"height","26"),f(n,"fill","#161616"),f(e,"class","icon svelte-uryj0d"),f(e,"viewBox","0 0 60 60"),f(e,"fill","none"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(t,r){a(t,e,r),s(e,i),s(e,o),s(e,n)},d(t){t&&d(e)}}}function q(t){let e,i,o;return{c(){e=u("svg"),i=u("circle"),o=u("path"),f(i,"cx","30"),f(i,"cy","30"),f(i,"r","29.5"),f(i,"fill","#C4C4C4"),f(i,"stroke","#fff"),f(o,"d","M45 30L22.5 42.9904V17.0096L45 30z"),f(o,"fill","#161616"),f(e,"fill","none"),f(e,"class","icon svelte-uryj0d"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"viewBox","0 0 60 60")},m(t,n){a(t,e,n),s(e,i),s(e,o)},d(t){t&&d(e)}}}function D(e){let i,o,n,r,l,m,y,$,v,w,b,x,z,R,E,T,I,k,L=e[5]&&H(e);function C(t,e){return t[7]?F:q}let B=C(e),_=B(e);return{c(){i=c("a-video"),l=h(),m=c("div"),y=c("button"),$=u("svg"),v=u("circle"),w=u("path"),b=u("path"),x=u("path"),z=h(),L&&L.c(),R=h(),E=c("button"),_.c(),T=h(),I=c("button"),I.innerHTML='<svg fill="none" class="icon svelte-uryj0d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M28.81 12.6944l1.0168-.6159c.3457-.2092.5522-.5849.5417-.9856-.0105-.4007-.2363-.7654-.5923-.9568-.356-.19132-.7884-.18027-1.1342.029l-3.7182 2.251c-.0232.0141-.0354.0391-.0573.0547-.0903.0633-.1705.1397-.2378.2267-.0913.1635-.1697.3336-.2346.5089-.0037.0246.0072.048.005.0726-.0024.0302-.0178.0562-.0178.0873.0069.0605.0192.1203.0366.1787.0557.2011.1394.3935.2483.5721l3.0067 3.3601c.4165.4601 1.1307.5011 1.5984.0917.4676-.4093.5131-1.1153.1016-1.5799l-.9692-1.0827c4.644 1.3603 7.6809 5.7614 7.2683 10.5334-.4125 4.772-4.1607 8.5997-8.9708 9.1609-4.8099.5611-9.3562-2.2987-10.8805-6.8448-1.5244-4.546.3932-9.5252 4.5896-11.9169.5423-.3105.7273-.9969.4133-1.5332-.314-.5363-1.0082-.7193-1.5506-.4088-5.166 2.9355-7.5183 9.0686-5.6204 14.6534 1.898 5.5848 7.5184 9.0685 13.4287 8.3234 5.9104-.7451 10.4671-5.5118 10.8873-11.3889.4202-5.8773-3.413-11.2306-9.1586-12.7904z" fill="#E9E9E9"></path><circle cx="25" cy="25" r="24.5" stroke="#fff"></circle></svg>',g(i,"height",e[2]),g(i,"rotation",o=`${e[1].x} ${e[1].y} ${e[1].z}`),g(i,"width",e[3]),g(i,"video-controls",""),g(i,"position",n=`${e[0].x} ${e[0].y} ${e[0].z}`),i.src!==(r=`#${e[4]}`)&&g(i,"src",r),f(v,"cx","25"),f(v,"cy","25"),f(v,"r","24.5"),f(v,"stroke","#fff"),f(w,"d","M16.4919 20.6124H13v7.7752h3.4919l6.5979 4.8933s1.2101 1.0148 1.2101-.0329V15.5999c0-.8227-1.0644-.0192-1.0644-.0192l-6.7436 5.0317zM28.0591 19.095c-.349-.3474-.91-.3474-1.255 0-.3489.3473-.3489.9107 0 1.2549 1.1413 1.1452 1.7071 2.6299 1.7087 4.1273-.0016 1.5006-.5674 2.9948-1.7087 4.1345-.3489.3474-.3489.9092 0 1.2589.1721.1745.3986.2593.6283.2593.2249 0 .453-.0848.6267-.2593 1.4846-1.4878 2.2305-3.4462 2.2289-5.3934.0024-1.9488-.7435-3.8968-2.2289-5.3822z"),f(w,"fill","#E9E9E9"),f(b,"d","M30.4665 16.2978c-.3506-.349-.9116-.349-1.2581 0-.3442.3481-.3442.91 0 1.2581 1.9192 1.9176 2.8747 4.4178 2.878 6.9285-.0033 2.5242-.9548 5.0357-2.878 6.9645-.3458.3473-.3442.9068 0 1.2565.1752.1697.4017.2577.6298.2577.2265 0 .4546-.088.6283-.2577 2.2665-2.2729 3.395-5.2518 3.395-8.221 0-2.9596-1.1373-5.9265-3.395-8.1866z"),f(b,"fill","#E9E9E9"),f(x,"d","M33.4149 13.4326c-.3458-.349-.9084-.349-1.2565 0-.3442.3473-.3442.9108 0 1.2549 2.7107 2.7107 4.064 6.2498 4.064 9.8001 0 3.5607-1.3493 7.1102-4.064 9.8265-.3474.3465-.3442.9116 0 1.2565.1752.1721.4033.2577.6314.2577.2249 0 .4514-.0856.6251-.2577 3.0589-3.0613 4.5859-7.0789 4.5851-11.0838.0008-3.9977-1.5343-8.0033-4.5851-11.0542z"),f(x,"fill","#E9E9E9"),f($,"fill","none"),f($,"class","icon svelte-uryj0d"),f($,"xmlns","http://www.w3.org/2000/svg"),f($,"viewBox","0 0 50 50"),f(y,"id","volume-btn"),f(y,"class","svelte-uryj0d"),f(E,"id","play-btn"),f(E,"class","svelte-uryj0d"),f(I,"id","reset-btn"),f(I,"class","svelte-uryj0d"),f(m,"id","video-controls"),f(m,"class","svelte-uryj0d"),k=p(y,"click",e[12])},m(t,e){a(t,i,e),a(t,l,e),a(t,m,e),s(m,y),s(y,$),s($,v),s($,w),s($,b),s($,x),s(y,z),L&&L.m(y,null),s(m,R),s(m,E),_.m(E,null),s(m,T),s(m,I)},p(t,e){4&e[0]&&g(i,"height",t[2]),2&e[0]&&o!==(o=`${t[1].x} ${t[1].y} ${t[1].z}`)&&g(i,"rotation",o),8&e[0]&&g(i,"width",t[3]),1&e[0]&&n!==(n=`${t[0].x} ${t[0].y} ${t[0].z}`)&&g(i,"position",n),16&e[0]&&i.src!==(r=`#${t[4]}`)&&g(i,"src",r),t[5]?L?L.p(t,e):(L=H(t),L.c(),L.m(y,null)):L&&(L.d(1),L=null),B!==(B=C(t))&&(_.d(1),_=B(t),_&&(_.c(),_.m(E,null)))},i:t,o:t,d(t){t&&d(i),t&&d(l),t&&d(m),L&&L.d(),_.d(),k()}}}function N(t,e,i){let{position:o=""}=e,{rotation:n=""}=e,{videoId:r=""}=e,{height:s="1.5"}=e,{width:a="2"}=e,{imageId:d=""}=e,c=!1,u=50,l=!1;AFRAME.registerComponent("video-controls",{init(){const t=this.el,e=document.getElementById("video_1");this.isPlaying=l,e.addEventListener("ended",(function(){e.currentTime=0}));const o=document.getElementById("play-btn");document.querySelector("a-image");o.addEventListener("click",(function(){t.getAttribute("src")!==`#${r}`&&t.setAttribute("src",`#${r}`),!1===l?(i(7,l=!0),e.play()):!0===l&&(i(7,l=!1),e.pause())})),document.getElementById("reset-btn").addEventListener("click",(function(){t.setAttribute("src",`#${d}`),e.pause(),e.currentTime=0,i(7,l=!1)}))},handleClick(t){t.stopPropagation(),t.preventDefault();const e=t.detail.intersection&&t.detail.intersection.object.el;e&&e===t.target&&(!1===this.isPlaying?(this.isPlaying=!0,document.getElementById("video_1").play()):!0===this.isPlaying&&(this.isPlaying=!1,document.getElementById("video_1").pause()))}});return t.$set=t=>{"position"in t&&i(0,o=t.position),"rotation"in t&&i(1,n=t.rotation),"videoId"in t&&i(9,r=t.videoId),"height"in t&&i(2,s=t.height),"width"in t&&i(3,a=t.width),"imageId"in t&&i(4,d=t.imageId)},[o,n,s,a,d,c,u,l,function(){document.querySelector("#video_1").volume=u/100},r,function(){var t;t=this.value,u=""===t?void 0:+t,i(6,u)},()=>i(5,c=!1),()=>i(5,c=!c)]}class U extends A{constructor(t){super(),P(this,t,N,D,r,{position:0,rotation:1,videoId:9,height:2,width:3,imageId:4})}}function V(e){let i,o,n,r,s,u,l,h,p;return{c(){i=c("a-rounded"),g(i,"position",o=`${e[1]} ${e[2]} ${e[3]}`),g(i,"rotation",e[4]),g(i,"width",n=e[0].size.width),g(i,"height",r=e[0].size.height),g(i,"color",s=e[0].color),g(i,"top-left-radius",u=e[0].borderRadius.topLeft),g(i,"top-right-radius",l=e[0].borderRadius.topRight),g(i,"bottom-left-radius",h=e[0].borderRadius.bottomLeft),g(i,"bottom-right-radius",p=e[0].borderRadius.bottomRight)},m(t,e){a(t,i,e)},p(t,e){1&e[0]&&n!==(n=t[0].size.width)&&g(i,"width",n),1&e[0]&&r!==(r=t[0].size.height)&&g(i,"height",r),1&e[0]&&s!==(s=t[0].color)&&g(i,"color",s),1&e[0]&&u!==(u=t[0].borderRadius.topLeft)&&g(i,"top-left-radius",u),1&e[0]&&l!==(l=t[0].borderRadius.topRight)&&g(i,"top-right-radius",l),1&e[0]&&h!==(h=t[0].borderRadius.bottomLeft)&&g(i,"bottom-left-radius",h),1&e[0]&&p!==(p=t[0].borderRadius.bottomRight)&&g(i,"bottom-right-radius",p)},i:t,o:t,d(t){t&&d(i)}}}function G(t,e,i){let{params:o}=e,n=o.position.x,r=o.position.y,s=o.position.z,a=`${o.rotation.x} ${o.rotation.y} ${o.rotation.z}`;return t.$set=t=>{"params"in t&&i(0,o=t.params)},[o,n,r,s,a]}AFRAME.registerComponent("rounded",{schema:{enabled:{default:!0},width:{type:"number",default:1},height:{type:"number",default:1},radius:{type:"number",default:.3},topLeftRadius:{type:"number",default:-1},topRightRadius:{type:"number",default:-1},bottomLeftRadius:{type:"number",default:-1},bottomRightRadius:{type:"number",default:-1},color:{type:"color",default:"#F0F0F0"},opacity:{type:"number",default:1}},init:function(){this.rounded=new THREE.Mesh(this.draw(),new THREE.MeshPhongMaterial({color:new THREE.Color(this.data.color),side:THREE.DoubleSide})),this.updateOpacity(),this.el.setObject3D("mesh",this.rounded)},update:function(){this.data.enabled?this.rounded&&(this.rounded.visible=!0,this.rounded.geometry=this.draw(),this.rounded.material.color=new THREE.Color(this.data.color),this.updateOpacity()):this.rounded.visible=!1},updateOpacity:function(){this.data.opacity<0&&(this.data.opacity=0),this.data.opacity>1&&(this.data.opacity=1),this.data.opacity<1?this.rounded.material.transparent=!0:this.rounded.material.transparent=!1,this.rounded.material.opacity=this.data.opacity},tick:function(){},remove:function(){this.rounded&&(this.el.object3D.remove(this.rounded),this.rounded=null)},draw:function(){var t=new THREE.Shape;var e,i,o,n,r,s,a,d,c,u=[this.data.radius,this.data.radius,this.data.radius,this.data.radius];return-1!=this.data.topLeftRadius&&(u[0]=this.data.topLeftRadius),-1!=this.data.topRightRadius&&(u[1]=this.data.topRightRadius),-1!=this.data.bottomLeftRadius&&(u[2]=this.data.bottomLeftRadius),-1!=this.data.bottomRightRadius&&(u[3]=this.data.bottomRightRadius),e=t,i=0,o=0,n=this.data.width,r=this.data.height,s=u[0],a=u[1],d=u[2],c=u[3],s||(s=1e-5),a||(a=1e-5),d||(d=1e-5),c||(c=1e-5),e.moveTo(i,o+s),e.lineTo(i,o+r-s),e.quadraticCurveTo(i,o+r,i+s,o+r),e.lineTo(i+n-a,o+r),e.quadraticCurveTo(i+n,o+r,i+n,o+r-a),e.lineTo(i+n,o+c),e.quadraticCurveTo(i+n,o,i+n-c,o),e.lineTo(i+d,o),e.quadraticCurveTo(i,o,i,o+d),new THREE.ShapeBufferGeometry(t)},pause:function(){},play:function(){}}),AFRAME.registerPrimitive("a-rounded",{defaultComponents:{rounded:{}},mappings:{enabled:"rounded.enabled",width:"rounded.width",height:"rounded.height",radius:"rounded.radius","top-left-radius":"rounded.topLeftRadius","top-right-radius":"rounded.topRightRadius","bottom-left-radius":"rounded.bottomLeftRadius","bottom-right-radius":"rounded.bottomRightRadius",color:"rounded.color",opacity:"rounded.opacity"}});class Y extends A{constructor(t){super(),P(this,t,G,V,r,{params:0})}}function J(t){let e,i,o,n,r,s,u,l,p,f,m,y,$,v,w,b,x,z,R,E,T,I,k,L,C,M,P,A,H,F;const q=new Y({props:{params:t[1]}}),D=new U({props:{position:t[0].position,rotation:t[0].rotation,videoId:t[0].videoId,imageId:t[0].imageId,height:t[0].size.height,width:t[0].size.width}}),N=new Y({props:{params:t[2]}});return{c(){O(q.$$.fragment),e=h(),i=c("a-text"),w=h(),O(D.$$.fragment),b=h(),O(N.$$.fragment),x=h(),z=c("a-text"),g(i,"wrap-count",o=t[3].wrapCount),g(i,"value",n=t[3].text),g(i,"rotation",r=`${t[3].rotation.x} ${t[3].rotation.y} ${t[3].rotation.z}`),g(i,"width",s=t[3].size.width),g(i,"height",u=t[3].size.height),g(i,"color",l=t[3].color),g(i,"position",p=`${t[3].position.x} ${t[3].position.y} ${t[3].position.z}`),g(i,"z-offset",f=t[3].zOffset),g(i,"x-offset",m=t[3].xOffset),g(i,"letter-spacing",y=t[3].letterSpacing),g(i,"font",$=t[3].font),g(i,"align",v=t[3].align),g(i,"anchor","left"),g(z,"wrap-count",R=t[4].wrapCount),g(z,"value",E=t[4].text),g(z,"rotation",T=`${t[4].rotation.x} ${t[4].rotation.y} ${t[4].rotation.z}`),g(z,"width",I=t[4].size.width),g(z,"height",k=t[4].size.height),g(z,"color",L=t[4].color),g(z,"position",C=`${t[4].position.x} ${t[4].position.y} ${t[4].position.z}`),g(z,"z-offset",M=t[4].zOffset),g(z,"x-offset",P=t[4].xOffset),g(z,"letter-spacing",A=t[4].letterSpacing),g(z,"font",H=t[4].font),g(z,"anchor","left")},m(t,o){j(q,t,o),a(t,e,o),a(t,i,o),a(t,w,o),j(D,t,o),a(t,b,o),j(N,t,o),a(t,x,o),a(t,z,o),F=!0},p(t,e){const a={};2&e[0]&&(a.params=t[1]),q.$set(a),(!F||8&e[0]&&o!==(o=t[3].wrapCount))&&g(i,"wrap-count",o),(!F||8&e[0]&&n!==(n=t[3].text))&&g(i,"value",n),(!F||8&e[0]&&r!==(r=`${t[3].rotation.x} ${t[3].rotation.y} ${t[3].rotation.z}`))&&g(i,"rotation",r),(!F||8&e[0]&&s!==(s=t[3].size.width))&&g(i,"width",s),(!F||8&e[0]&&u!==(u=t[3].size.height))&&g(i,"height",u),(!F||8&e[0]&&l!==(l=t[3].color))&&g(i,"color",l),(!F||8&e[0]&&p!==(p=`${t[3].position.x} ${t[3].position.y} ${t[3].position.z}`))&&g(i,"position",p),(!F||8&e[0]&&f!==(f=t[3].zOffset))&&g(i,"z-offset",f),(!F||8&e[0]&&m!==(m=t[3].xOffset))&&g(i,"x-offset",m),(!F||8&e[0]&&y!==(y=t[3].letterSpacing))&&g(i,"letter-spacing",y),(!F||8&e[0]&&$!==($=t[3].font))&&g(i,"font",$),(!F||8&e[0]&&v!==(v=t[3].align))&&g(i,"align",v);const d={};1&e[0]&&(d.position=t[0].position),1&e[0]&&(d.rotation=t[0].rotation),1&e[0]&&(d.videoId=t[0].videoId),1&e[0]&&(d.imageId=t[0].imageId),1&e[0]&&(d.height=t[0].size.height),1&e[0]&&(d.width=t[0].size.width),D.$set(d);const c={};4&e[0]&&(c.params=t[2]),N.$set(c),(!F||16&e[0]&&R!==(R=t[4].wrapCount))&&g(z,"wrap-count",R),(!F||16&e[0]&&E!==(E=t[4].text))&&g(z,"value",E),(!F||16&e[0]&&T!==(T=`${t[4].rotation.x} ${t[4].rotation.y} ${t[4].rotation.z}`))&&g(z,"rotation",T),(!F||16&e[0]&&I!==(I=t[4].size.width))&&g(z,"width",I),(!F||16&e[0]&&k!==(k=t[4].size.height))&&g(z,"height",k),(!F||16&e[0]&&L!==(L=t[4].color))&&g(z,"color",L),(!F||16&e[0]&&C!==(C=`${t[4].position.x} ${t[4].position.y} ${t[4].position.z}`))&&g(z,"position",C),(!F||16&e[0]&&M!==(M=t[4].zOffset))&&g(z,"z-offset",M),(!F||16&e[0]&&P!==(P=t[4].xOffset))&&g(z,"x-offset",P),(!F||16&e[0]&&A!==(A=t[4].letterSpacing))&&g(z,"letter-spacing",A),(!F||16&e[0]&&H!==(H=t[4].font))&&g(z,"font",H)},i(t){F||(B(q.$$.fragment,t),B(D.$$.fragment,t),B(N.$$.fragment,t),F=!0)},o(t){_(q.$$.fragment,t),_(D.$$.fragment,t),_(N.$$.fragment,t),F=!1},d(t){S(q,t),t&&d(e),t&&d(i),t&&d(w),S(D,t),t&&d(b),S(N,t),t&&d(x),t&&d(z)}}}function K(t,e,i){let{videoParams:o={}}=e,{titleBlock:n={}}=e,{descriptionBlock:r={}}=e,{titleText:s={}}=e,{descriptionText:a={}}=e;return t.$set=t=>{"videoParams"in t&&i(0,o=t.videoParams),"titleBlock"in t&&i(1,n=t.titleBlock),"descriptionBlock"in t&&i(2,r=t.descriptionBlock),"titleText"in t&&i(3,s=t.titleText),"descriptionText"in t&&i(4,a=t.descriptionText)},[o,n,r,s,a]}class Q extends A{constructor(t){super(),P(this,t,K,J,r,{videoParams:0,titleBlock:1,descriptionBlock:2,titleText:3,descriptionText:4})}}function W(e){let i;return{c(){i=c("p"),i.textContent="Your Browser is not supported"},m(t,e){a(t,i,e)},p:t,i:t,o:t,d(t){t&&d(i)}}}function X(e){let i,o,n,r,l,p,m,y,$,v,w,b,x,z,R;const E=new Q({props:{titleBlock:e[1],videoParams:e[0],descriptionBlock:e[2],titleText:e[3],descriptionText:e[4]}});return{c(){i=c("a-scene"),o=c("a-assets"),n=c("video"),m=h(),y=u("image"),w=h(),b=c("a-marker"),O(E.$$.fragment),x=h(),z=c("a-entity"),f(n,"id",r=e[0].videoId),f(n,"crossorigin","anonymous"),n.loop=l=e[0].loop,f(n,"webkit-playsinline",""),n.playsInline=!0,n.src!==(p=e[0].videoSrc)&&f(n,"src",p),f(y,"id",$=e[0].imageId),y.src!==(v=e[0].imageSrc)&&f(y,"src",v),g(b,"preset","custom"),g(b,"type","pattern"),g(b,"url","pattern-video-qr-code.patt"),g(z,"camera",""),g(i,"embedded",""),g(i,"vr-mode-ui","enabled: false"),g(i,"arjs","debugUIEnabled: false; patternRatio:0.8")},m(t,e){a(t,i,e),s(i,o),s(o,n),s(o,m),s(o,y),s(i,w),s(i,b),j(E,b,null),s(i,x),s(i,z),R=!0},p:t,i(t){R||(B(E.$$.fragment,t),R=!0)},o(t){_(E.$$.fragment,t),R=!1},d(t){t&&d(i),S(E)}}}function Z(t){let e,i,o,n;const r=[X,W],s=[];return e=0,i=s[0]=r[0](t),{c(){i.c(),o=l("")},m(t,e){s[0].m(t,e),a(t,o,e),n=!0},p(t,e){i.p(t,e)},i(t){n||(B(i),n=!0)},o(t){_(i),n=!1},d(t){s[0].d(t),t&&d(o)}}}function tt(t){let e=null;v(()=>{void 0!==document.hidden?e="visibilitychange":void 0!==document.msHidden?e="msvisibilitychange":void 0!==document.webkitHidden&&(e="webkitvisibilitychange"),document.addEventListener(e,(function(){navigator.mediaDevices.getUserMedia({audio:!0,video:{facingMode:{exact:"environment"}}}).then((function(t){document.getElementsByTagName("video")[0].srcObject=t})).catch((function(t){console.log(t)}))}),!1)});const i={position:{x:0,y:0,z:0},rotation:{x:-90,y:0,z:0},size:{height:1.5,width:2},videoId:"video_1",videoSrc:"./static/videos/coffee_video.mp4",imageId:"image_1",imageSrc:"./static/images/coffee_cover.png",videoOpts:{loop:"true"}},o={position:{x:i.position.x-i.size.width/2,y:i.position.y,z:i.position.z-i.size.height},rotation:{x:-90,y:0,z:0},size:{height:i.size.height/3,width:i.size.width},borderRadius:{topLeft:.05,topRight:.05,bottomLeft:0,bottomRight:0},color:"#333"},n={position:{x:i.position.x-i.size.width/2,y:i.position.y,z:i.position.z+2*i.size.height},rotation:{x:-90,y:0,z:0},size:{height:i.size.height/2,width:i.size.width},borderRadius:{topLeft:0,topRight:0,bottomLeft:.05,bottomRight:.05},color:"#26869F"};return[i,o,n,{text:"Learn how to create a special coffee brew",padding:.1,position:{x:i.position.x-i.size.width/2,y:i.position.y,z:i.position.z-i.size.height/2+o.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:o.size.height,width:o.size.width-.2},font:"https://cdn.aframe.io/fonts/Roboto-msdf.json",color:"white",wrapCount:"20",xOffset:.1,zOffset:.001,height:1,align:"center",baseline:"center",letterSpacing:2},{text:"Find out the secret sauce to creating awesome tasting coffee in a simple 3 step process.",padding:.1,position:{x:i.position.x-i.size.width/2,y:i.position.y,z:i.position.z+i.size.height/2-o.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:n.size.height,width:n.size.width-.2},font:"https://cdn.aframe.io/fonts/Roboto-msdf.json",color:"white",wrapCount:"25",xOffset:.1,zOffset:.001,height:1,align:"left",baseline:"center",letterSpacing:2}]}return new class extends A{constructor(t){super(),P(this,t,tt,Z,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
