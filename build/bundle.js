var app=function(){"use strict";function t(){}function e(t){return t()}function i(){return Object.create(null)}function o(t){t.forEach(e)}function n(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e){t.appendChild(e)}function a(t,e,i){t.insertBefore(e,i||null)}function d(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function h(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function l(t){return document.createTextNode(t)}function p(){return l(" ")}function u(t,e,i,o){return t.addEventListener(e,i,o),()=>t.removeEventListener(e,i,o)}function f(t,e,i){null==i?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function g(t,e,i){e in t?t[e]=i:f(t,e,i)}function m(t,e){(null!=e||t.value)&&(t.value=e)}let z;function $(t){z=t}function x(t){(function(){if(!z)throw new Error("Function called outside component initialization");return z})().$$.on_mount.push(t)}const w=[],y=[],b=[],v=[],R=Promise.resolve();let E=!1;function k(t){b.push(t)}function C(){const t=new Set;do{for(;w.length;){const t=w.shift();$(t),L(t.$$)}for(;y.length;)y.pop()();for(let e=0;e<b.length;e+=1){const i=b[e];t.has(i)||(i(),t.add(i))}b.length=0}while(w.length);for(;v.length;)v.pop()();E=!1}function L(t){null!==t.fragment&&(t.update(),o(t.before_update),t.fragment&&t.fragment.p(t.ctx,t.dirty),t.dirty=[-1],t.after_update.forEach(k))}const O=new Set;let T;function B(){T={r:0,c:[],p:T}}function I(){T.r||o(T.c),T=T.p}function _(t,e){t&&t.i&&(O.delete(t),t.i(e))}function S(t,e,i,o){if(t&&t.o){if(O.has(t))return;O.add(t),T.c.push(()=>{O.delete(t),o&&(i&&t.d(1),o())}),t.o(e)}}function j(t){t&&t.c()}function A(t,i,s){const{fragment:r,on_mount:a,on_destroy:d,after_update:c}=t.$$;r&&r.m(i,s),k(()=>{const i=a.map(e).filter(n);d?d.push(...i):o(i),t.$$.on_mount=[]}),c.forEach(k)}function M(t,e){const i=t.$$;null!==i.fragment&&(o(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function P(t,e){-1===t.$$.dirty[0]&&(w.push(t),E||(E=!0,R.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(e,n,s,r,a,d,c=[-1]){const h=z;$(e);const l=n.props||{},p=e.$$={fragment:null,ctx:null,props:d,update:t,not_equal:a,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:i(),dirty:c};let u=!1;p.ctx=s?s(e,l,(t,i,o=i)=>(p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),u&&P(e,t)),i)):[],p.update(),u=!0,o(p.before_update),p.fragment=!!r&&r(p.ctx),n.target&&(n.hydrate?p.fragment&&p.fragment.l(function(t){return Array.from(t.childNodes)}(n.target)):p.fragment&&p.fragment.c(),n.intro&&_(e.$$.fragment),A(e,n.target,n.anchor),C()),$(h)}class D{$destroy(){M(this,1),this.$destroy=t}$on(t,e){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const t=i.indexOf(e);-1!==t&&i.splice(t,1)}}$set(){}}function H(t){let e,i;return{c(){e=c("input"),f(e,"type","range"),f(e,"id","volume-range"),f(e,"class","range vertical-heighest-first round svelte-uryj0d"),i=[u(e,"change",t[10]),u(e,"input",t[10]),u(e,"change",t[8]),u(e,"blur",t[11])]},m(i,o){a(i,e,o),m(e,t[6])},p(t,i){64&i[0]&&m(e,t[6])},d(t){t&&d(e),o(i)}}}function F(t){let e,i,o,n;return{c(){e=h("svg"),i=h("circle"),o=h("rect"),n=h("rect"),f(i,"cx","30"),f(i,"cy","30"),f(i,"r","29.5"),f(i,"fill","#C4C4C4"),f(i,"stroke","white"),f(o,"x","21"),f(o,"y","16"),f(o,"width","5"),f(o,"height","26"),f(o,"fill","#161616"),f(n,"x","34"),f(n,"y","16"),f(n,"width","5"),f(n,"height","26"),f(n,"fill","#161616"),f(e,"class","icon svelte-uryj0d"),f(e,"viewBox","0 0 60 60"),f(e,"fill","none"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(t,s){a(t,e,s),r(e,i),r(e,o),r(e,n)},d(t){t&&d(e)}}}function N(t){let e,i,o;return{c(){e=h("svg"),i=h("circle"),o=h("path"),f(i,"cx","30"),f(i,"cy","30"),f(i,"r","29.5"),f(i,"fill","#C4C4C4"),f(i,"stroke","#fff"),f(o,"d","M45 30L22.5 42.9904V17.0096L45 30z"),f(o,"fill","#161616"),f(e,"fill","none"),f(e,"class","icon svelte-uryj0d"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"viewBox","0 0 60 60")},m(t,n){a(t,e,n),r(e,i),r(e,o)},d(t){t&&d(e)}}}function U(e){let i,o,n,s,l,m,z,$,x,w,y,b,v,R,E,k,C,L,O=e[5]&&H(e);function T(t,e){return t[7]?F:N}let B=T(e),I=B(e);return{c(){i=c("a-video"),l=p(),m=c("div"),z=c("button"),$=h("svg"),x=h("circle"),w=h("path"),y=h("path"),b=h("path"),v=p(),O&&O.c(),R=p(),E=c("button"),I.c(),k=p(),C=c("button"),C.innerHTML='<svg fill="none" class="icon svelte-uryj0d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M28.81 12.6944l1.0168-.6159c.3457-.2092.5522-.5849.5417-.9856-.0105-.4007-.2363-.7654-.5923-.9568-.356-.19132-.7884-.18027-1.1342.029l-3.7182 2.251c-.0232.0141-.0354.0391-.0573.0547-.0903.0633-.1705.1397-.2378.2267-.0913.1635-.1697.3336-.2346.5089-.0037.0246.0072.048.005.0726-.0024.0302-.0178.0562-.0178.0873.0069.0605.0192.1203.0366.1787.0557.2011.1394.3935.2483.5721l3.0067 3.3601c.4165.4601 1.1307.5011 1.5984.0917.4676-.4093.5131-1.1153.1016-1.5799l-.9692-1.0827c4.644 1.3603 7.6809 5.7614 7.2683 10.5334-.4125 4.772-4.1607 8.5997-8.9708 9.1609-4.8099.5611-9.3562-2.2987-10.8805-6.8448-1.5244-4.546.3932-9.5252 4.5896-11.9169.5423-.3105.7273-.9969.4133-1.5332-.314-.5363-1.0082-.7193-1.5506-.4088-5.166 2.9355-7.5183 9.0686-5.6204 14.6534 1.898 5.5848 7.5184 9.0685 13.4287 8.3234 5.9104-.7451 10.4671-5.5118 10.8873-11.3889.4202-5.8773-3.413-11.2306-9.1586-12.7904z" fill="#E9E9E9"></path><circle cx="25" cy="25" r="24.5" stroke="#fff"></circle></svg>',g(i,"height",e[2]),g(i,"rotation",o=`${e[1].x} ${e[1].y} ${e[1].z}`),g(i,"width",e[3]),g(i,"video-controls",""),g(i,"position",n=`${e[0].x} ${e[0].y} ${e[0].z}`),i.src!==(s=`#${e[4]}`)&&g(i,"src",s),f(x,"cx","25"),f(x,"cy","25"),f(x,"r","24.5"),f(x,"stroke","#fff"),f(w,"d","M16.4919 20.6124H13v7.7752h3.4919l6.5979 4.8933s1.2101 1.0148 1.2101-.0329V15.5999c0-.8227-1.0644-.0192-1.0644-.0192l-6.7436 5.0317zM28.0591 19.095c-.349-.3474-.91-.3474-1.255 0-.3489.3473-.3489.9107 0 1.2549 1.1413 1.1452 1.7071 2.6299 1.7087 4.1273-.0016 1.5006-.5674 2.9948-1.7087 4.1345-.3489.3474-.3489.9092 0 1.2589.1721.1745.3986.2593.6283.2593.2249 0 .453-.0848.6267-.2593 1.4846-1.4878 2.2305-3.4462 2.2289-5.3934.0024-1.9488-.7435-3.8968-2.2289-5.3822z"),f(w,"fill","#E9E9E9"),f(y,"d","M30.4665 16.2978c-.3506-.349-.9116-.349-1.2581 0-.3442.3481-.3442.91 0 1.2581 1.9192 1.9176 2.8747 4.4178 2.878 6.9285-.0033 2.5242-.9548 5.0357-2.878 6.9645-.3458.3473-.3442.9068 0 1.2565.1752.1697.4017.2577.6298.2577.2265 0 .4546-.088.6283-.2577 2.2665-2.2729 3.395-5.2518 3.395-8.221 0-2.9596-1.1373-5.9265-3.395-8.1866z"),f(y,"fill","#E9E9E9"),f(b,"d","M33.4149 13.4326c-.3458-.349-.9084-.349-1.2565 0-.3442.3473-.3442.9108 0 1.2549 2.7107 2.7107 4.064 6.2498 4.064 9.8001 0 3.5607-1.3493 7.1102-4.064 9.8265-.3474.3465-.3442.9116 0 1.2565.1752.1721.4033.2577.6314.2577.2249 0 .4514-.0856.6251-.2577 3.0589-3.0613 4.5859-7.0789 4.5851-11.0838.0008-3.9977-1.5343-8.0033-4.5851-11.0542z"),f(b,"fill","#E9E9E9"),f($,"fill","none"),f($,"class","icon svelte-uryj0d"),f($,"xmlns","http://www.w3.org/2000/svg"),f($,"viewBox","0 0 50 50"),f(z,"id","volume-btn"),f(z,"class","svelte-uryj0d"),f(E,"id","play-btn"),f(E,"class","svelte-uryj0d"),f(C,"id","reset-btn"),f(C,"class","svelte-uryj0d"),f(m,"id","video-controls"),f(m,"class","svelte-uryj0d"),L=u(z,"click",e[12])},m(t,e){a(t,i,e),a(t,l,e),a(t,m,e),r(m,z),r(z,$),r($,x),r($,w),r($,y),r($,b),r(z,v),O&&O.m(z,null),r(m,R),r(m,E),I.m(E,null),r(m,k),r(m,C)},p(t,e){4&e[0]&&g(i,"height",t[2]),2&e[0]&&o!==(o=`${t[1].x} ${t[1].y} ${t[1].z}`)&&g(i,"rotation",o),8&e[0]&&g(i,"width",t[3]),1&e[0]&&n!==(n=`${t[0].x} ${t[0].y} ${t[0].z}`)&&g(i,"position",n),16&e[0]&&i.src!==(s=`#${t[4]}`)&&g(i,"src",s),t[5]?O?O.p(t,e):(O=H(t),O.c(),O.m(z,null)):O&&(O.d(1),O=null),B!==(B=T(t))&&(I.d(1),I=B(t),I&&(I.c(),I.m(E,null)))},i:t,o:t,d(t){t&&d(i),t&&d(l),t&&d(m),O&&O.d(),I.d(),L()}}}function J(t,e,i){let{position:o=""}=e,{rotation:n=""}=e,{videoId:s=""}=e,{height:r="1.5"}=e,{width:a="2"}=e,{imageId:d=""}=e,c=!1,h=50,l=!1;AFRAME.registerComponent("video-controls",{init(){const t=this.el,e=document.getElementById("video_1");this.isPlaying=l,e.addEventListener("ended",(function(){e.currentTime=0}));const o=document.getElementById("play-btn");document.querySelector("a-image");o.addEventListener("click",(function(){t.getAttribute("src")!==`#${s}`&&t.setAttribute("src",`#${s}`),!1===l?(i(7,l=!0),e.play()):!0===l&&(i(7,l=!1),e.pause())})),document.getElementById("reset-btn").addEventListener("click",(function(){t.setAttribute("src",`#${d}`),e.pause(),e.currentTime=0,i(7,l=!1)}))},handleClick(t){t.stopPropagation(),t.preventDefault();const e=t.detail.intersection&&t.detail.intersection.object.el;e&&e===t.target&&(!1===this.isPlaying?(this.isPlaying=!0,document.getElementById("video_1").play()):!0===this.isPlaying&&(this.isPlaying=!1,document.getElementById("video_1").pause()))}});return t.$set=t=>{"position"in t&&i(0,o=t.position),"rotation"in t&&i(1,n=t.rotation),"videoId"in t&&i(9,s=t.videoId),"height"in t&&i(2,r=t.height),"width"in t&&i(3,a=t.width),"imageId"in t&&i(4,d=t.imageId)},[o,n,r,a,d,c,h,l,function(){document.querySelector("#video_1").volume=h/100},s,function(){var t;t=this.value,h=""===t?void 0:+t,i(6,h)},()=>i(5,c=!1),()=>i(5,c=!c)]}class V extends D{constructor(t){super(),q(this,t,J,U,s,{position:0,rotation:1,videoId:9,height:2,width:3,imageId:4})}}function G(e){let i,o,n,s,r,h,l,p,u;return{c(){i=c("a-rounded"),g(i,"position",o=`${e[1]} ${e[2]} ${e[3]}`),g(i,"rotation",e[4]),g(i,"width",n=e[0].size.width),g(i,"height",s=e[0].size.height),g(i,"color",r=e[0].color),g(i,"top-left-radius",h=e[0].borderRadius.topLeft),g(i,"top-right-radius",l=e[0].borderRadius.topRight),g(i,"bottom-left-radius",p=e[0].borderRadius.bottomLeft),g(i,"bottom-right-radius",u=e[0].borderRadius.bottomRight)},m(t,e){a(t,i,e)},p(t,e){1&e[0]&&n!==(n=t[0].size.width)&&g(i,"width",n),1&e[0]&&s!==(s=t[0].size.height)&&g(i,"height",s),1&e[0]&&r!==(r=t[0].color)&&g(i,"color",r),1&e[0]&&h!==(h=t[0].borderRadius.topLeft)&&g(i,"top-left-radius",h),1&e[0]&&l!==(l=t[0].borderRadius.topRight)&&g(i,"top-right-radius",l),1&e[0]&&p!==(p=t[0].borderRadius.bottomLeft)&&g(i,"bottom-left-radius",p),1&e[0]&&u!==(u=t[0].borderRadius.bottomRight)&&g(i,"bottom-right-radius",u)},i:t,o:t,d(t){t&&d(i)}}}function Y(t,e,i){let{params:o}=e,n=o.position.x,s=o.position.y,r=o.position.z,a=`${o.rotation.x} ${o.rotation.y} ${o.rotation.z}`;return t.$set=t=>{"params"in t&&i(0,o=t.params)},[o,n,s,r,a]}AFRAME.registerComponent("rounded",{schema:{enabled:{default:!0},width:{type:"number",default:1},height:{type:"number",default:1},radius:{type:"number",default:.3},topLeftRadius:{type:"number",default:-1},topRightRadius:{type:"number",default:-1},bottomLeftRadius:{type:"number",default:-1},bottomRightRadius:{type:"number",default:-1},color:{type:"color",default:"#F0F0F0"},opacity:{type:"number",default:1}},init:function(){this.rounded=new THREE.Mesh(this.draw(),new THREE.MeshPhongMaterial({color:new THREE.Color(this.data.color),side:THREE.DoubleSide})),this.updateOpacity(),this.el.setObject3D("mesh",this.rounded)},update:function(){this.data.enabled?this.rounded&&(this.rounded.visible=!0,this.rounded.geometry=this.draw(),this.rounded.material.color=new THREE.Color(this.data.color),this.updateOpacity()):this.rounded.visible=!1},updateOpacity:function(){this.data.opacity<0&&(this.data.opacity=0),this.data.opacity>1&&(this.data.opacity=1),this.data.opacity<1?this.rounded.material.transparent=!0:this.rounded.material.transparent=!1,this.rounded.material.opacity=this.data.opacity},tick:function(){},remove:function(){this.rounded&&(this.el.object3D.remove(this.rounded),this.rounded=null)},draw:function(){var t=new THREE.Shape;var e,i,o,n,s,r,a,d,c,h=[this.data.radius,this.data.radius,this.data.radius,this.data.radius];return-1!=this.data.topLeftRadius&&(h[0]=this.data.topLeftRadius),-1!=this.data.topRightRadius&&(h[1]=this.data.topRightRadius),-1!=this.data.bottomLeftRadius&&(h[2]=this.data.bottomLeftRadius),-1!=this.data.bottomRightRadius&&(h[3]=this.data.bottomRightRadius),e=t,i=0,o=0,n=this.data.width,s=this.data.height,r=h[0],a=h[1],d=h[2],c=h[3],r||(r=1e-5),a||(a=1e-5),d||(d=1e-5),c||(c=1e-5),e.moveTo(i,o+r),e.lineTo(i,o+s-r),e.quadraticCurveTo(i,o+s,i+r,o+s),e.lineTo(i+n-a,o+s),e.quadraticCurveTo(i+n,o+s,i+n,o+s-a),e.lineTo(i+n,o+c),e.quadraticCurveTo(i+n,o,i+n-c,o),e.lineTo(i+d,o),e.quadraticCurveTo(i,o,i,o+d),new THREE.ShapeBufferGeometry(t)},pause:function(){},play:function(){}}),AFRAME.registerPrimitive("a-rounded",{defaultComponents:{rounded:{}},mappings:{enabled:"rounded.enabled",width:"rounded.width",height:"rounded.height",radius:"rounded.radius","top-left-radius":"rounded.topLeftRadius","top-right-radius":"rounded.topRightRadius","bottom-left-radius":"rounded.bottomLeftRadius","bottom-right-radius":"rounded.bottomRightRadius",color:"rounded.color",opacity:"rounded.opacity"}});class K extends D{constructor(t){super(),q(this,t,Y,G,s,{params:0})}}function Q(t){let e,i,o,n,s,r,h,l,u,f,m,z,$,x,w,y,b,v,R,E,k,C,L,O,T,B,I,P,q,D,H;const F=new K({props:{params:t[1]}}),N=new V({props:{position:t[0].position,rotation:t[0].rotation,videoId:t[0].videoId,imageId:t[0].imageId,height:t[0].size.height,width:t[0].size.width}}),U=new K({props:{params:t[2]}});return{c(){j(F.$$.fragment),e=p(),i=c("a-text"),y=p(),j(N.$$.fragment),b=p(),j(U.$$.fragment),v=p(),R=c("a-text"),g(i,"wrap-count",o=t[3].wrapCount),g(i,"value",n=t[3].text),g(i,"rotation",s=`${t[3].rotation.x} ${t[3].rotation.y} ${t[3].rotation.z}`),g(i,"width",r=t[3].size.width),g(i,"height",h=t[3].size.height),g(i,"color",l=t[3].color),g(i,"position",u=`${t[3].position.x} ${t[3].position.y} ${t[3].position.z}`),g(i,"z-offset",f=t[3].zOffset),g(i,"x-offset",m=t[3].xOffset),g(i,"letter-spacing",z=t[3].letterSpacing),g(i,"font",$=t[3].font),g(i,"align",x=t[3].align),g(i,"anchor",w=t[3].anchor),g(R,"color",E=t[4].color),g(R,"value",k=t[4].text),g(R,"rotation",C=`${t[4].rotation.x} ${t[4].rotation.y} ${t[4].rotation.z}`),g(R,"width",L=t[4].size.width),g(R,"height",O=t[4].size.height),g(R,"position",T=`${t[4].position.x} ${t[4].position.y} ${t[4].position.z}`),g(R,"wrap-count",B=t[4].wrapCount),g(R,"z-offset",I=t[4].zOffset),g(R,"x-offset",P=t[4].xOffset),g(R,"letter-spacing",q=t[4].letterSpacing),g(R,"font",D=t[4].font)},m(t,o){A(F,t,o),a(t,e,o),a(t,i,o),a(t,y,o),A(N,t,o),a(t,b,o),A(U,t,o),a(t,v,o),a(t,R,o),H=!0},p(t,e){const a={};2&e[0]&&(a.params=t[1]),F.$set(a),(!H||8&e[0]&&o!==(o=t[3].wrapCount))&&g(i,"wrap-count",o),(!H||8&e[0]&&n!==(n=t[3].text))&&g(i,"value",n),(!H||8&e[0]&&s!==(s=`${t[3].rotation.x} ${t[3].rotation.y} ${t[3].rotation.z}`))&&g(i,"rotation",s),(!H||8&e[0]&&r!==(r=t[3].size.width))&&g(i,"width",r),(!H||8&e[0]&&h!==(h=t[3].size.height))&&g(i,"height",h),(!H||8&e[0]&&l!==(l=t[3].color))&&g(i,"color",l),(!H||8&e[0]&&u!==(u=`${t[3].position.x} ${t[3].position.y} ${t[3].position.z}`))&&g(i,"position",u),(!H||8&e[0]&&f!==(f=t[3].zOffset))&&g(i,"z-offset",f),(!H||8&e[0]&&m!==(m=t[3].xOffset))&&g(i,"x-offset",m),(!H||8&e[0]&&z!==(z=t[3].letterSpacing))&&g(i,"letter-spacing",z),(!H||8&e[0]&&$!==($=t[3].font))&&g(i,"font",$),(!H||8&e[0]&&x!==(x=t[3].align))&&g(i,"align",x),(!H||8&e[0]&&w!==(w=t[3].anchor))&&g(i,"anchor",w);const d={};1&e[0]&&(d.position=t[0].position),1&e[0]&&(d.rotation=t[0].rotation),1&e[0]&&(d.videoId=t[0].videoId),1&e[0]&&(d.imageId=t[0].imageId),1&e[0]&&(d.height=t[0].size.height),1&e[0]&&(d.width=t[0].size.width),N.$set(d);const c={};4&e[0]&&(c.params=t[2]),U.$set(c),(!H||16&e[0]&&E!==(E=t[4].color))&&g(R,"color",E),(!H||16&e[0]&&k!==(k=t[4].text))&&g(R,"value",k),(!H||16&e[0]&&C!==(C=`${t[4].rotation.x} ${t[4].rotation.y} ${t[4].rotation.z}`))&&g(R,"rotation",C),(!H||16&e[0]&&L!==(L=t[4].size.width))&&g(R,"width",L),(!H||16&e[0]&&O!==(O=t[4].size.height))&&g(R,"height",O),(!H||16&e[0]&&T!==(T=`${t[4].position.x} ${t[4].position.y} ${t[4].position.z}`))&&g(R,"position",T),(!H||16&e[0]&&B!==(B=t[4].wrapCount))&&g(R,"wrap-count",B),(!H||16&e[0]&&I!==(I=t[4].zOffset))&&g(R,"z-offset",I),(!H||16&e[0]&&P!==(P=t[4].xOffset))&&g(R,"x-offset",P),(!H||16&e[0]&&q!==(q=t[4].letterSpacing))&&g(R,"letter-spacing",q),(!H||16&e[0]&&D!==(D=t[4].font))&&g(R,"font",D)},i(t){H||(_(F.$$.fragment,t),_(N.$$.fragment,t),_(U.$$.fragment,t),H=!0)},o(t){S(F.$$.fragment,t),S(N.$$.fragment,t),S(U.$$.fragment,t),H=!1},d(t){M(F,t),t&&d(e),t&&d(i),t&&d(y),M(N,t),t&&d(b),M(U,t),t&&d(v),t&&d(R)}}}function W(t,e,i){let{videoParams:o={}}=e,{titleBlock:n={}}=e,{descriptionBlock:s={}}=e,{titleText:r={}}=e,{descriptionText:a={}}=e;return t.$set=t=>{"videoParams"in t&&i(0,o=t.videoParams),"titleBlock"in t&&i(1,n=t.titleBlock),"descriptionBlock"in t&&i(2,s=t.descriptionBlock),"titleText"in t&&i(3,r=t.titleText),"descriptionText"in t&&i(4,a=t.descriptionText)},[o,n,s,r,a]}class X extends D{constructor(t){super(),q(this,t,W,Q,s,{videoParams:0,titleBlock:1,descriptionBlock:2,titleText:3,descriptionText:4})}}function Z(e){let i,o,n,s,r,h,l,u,f,m,z,$,x,w,y,b,v,R,E,k,C,L,O,T,B,I,P,q,D,H,F,N,U,J,V,G,Y;const Q=new K({props:{params:e[1]}}),W=new K({props:{params:e[2]}});return{c(){j(Q.$$.fragment),i=p(),o=c("a-text"),b=p(),v=c("a-image"),O=p(),j(W.$$.fragment),T=p(),B=c("a-text"),g(o,"wrap-count",n=e[3].wrapCount),g(o,"value",s=e[3].text),g(o,"rotation",r=`${e[3].rotation.x} ${e[3].rotation.y} ${e[3].rotation.z}`),g(o,"width",h=e[3].size.width),g(o,"height",l=e[3].size.height),g(o,"color",u=e[3].color),g(o,"position",f=`${e[3].position.x} ${e[3].position.y} ${e[3].position.z}`),g(o,"z-offset",m=e[3].zOffset),g(o,"x-offset",z=e[3].xOffset),g(o,"letter-spacing",$=e[3].letterSpacing),g(o,"font",x=e[3].font),g(o,"align",w=e[3].align),g(o,"anchor",y=e[3].anchor),g(v,"position",R=`${e[0].position.x} ${e[0].position.y} ${e[0].position.z}`),g(v,"rotation",E=`${e[0].rotation.x} ${e[0].rotation.y} ${e[0].rotation.z}`),g(v,"height",k=e[0].size.height),g(v,"width",C=e[0].size.width),v.src!==(L=e[0].src)&&g(v,"src",L),g(B,"color",I=e[4].color),g(B,"value",P=e[4].text),g(B,"rotation",q=`${e[4].rotation.x} ${e[4].rotation.y} ${e[4].rotation.z}`),g(B,"width",D=e[4].size.width),g(B,"height",H=e[4].size.height),g(B,"position",F=`${e[4].position.x} ${e[4].position.y} ${e[4].position.z}`),g(B,"wrap-count",N=e[4].wrapCount),g(B,"z-offset",U=e[4].zOffset),g(B,"x-offset",J=e[4].xOffset),g(B,"letter-spacing",V=e[4].letterSpacing),g(B,"font",G=e[4].font)},m(t,e){A(Q,t,e),a(t,i,e),a(t,o,e),a(t,b,e),a(t,v,e),a(t,O,e),A(W,t,e),a(t,T,e),a(t,B,e),Y=!0},p:t,i(t){Y||(_(Q.$$.fragment,t),_(W.$$.fragment,t),Y=!0)},o(t){S(Q.$$.fragment,t),S(W.$$.fragment,t),Y=!1},d(t){M(Q,t),t&&d(i),t&&d(o),t&&d(b),t&&d(v),t&&d(O),M(W,t),t&&d(T),t&&d(B)}}}function tt(t){const e={position:{x:0,y:0,z:0},rotation:{x:-90,y:0,z:0},size:{height:1.5,width:2},src:"./static/images/chicken_salad.png"},i={position:{x:e.position.x-e.size.width/2,y:e.position.y,z:e.position.z-e.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:e.size.height/3,width:e.size.width},borderRadius:{topLeft:.05,topRight:.05,bottomLeft:0,bottomRight:0},color:"#7AE3D0"},o={size:{height:e.size.height,width:e.size.width},position:{x:e.position.x-e.size.width/2,y:e.position.y,get z(){return e.position.z+e.size.height+o.size.height/2}},rotation:{x:-90,y:0,z:0},borderRadius:{topLeft:0,topRight:0,bottomLeft:.05,bottomRight:.05},color:"#2B2B2B"},n={text:"Jerk Chicken Salad",padding:.1,position:{x:i.position.x,y:i.position.y+.05,z:i.position.z-i.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:i.size.height,width:i.size.width-.2},font:"https://cdn.aframe.io/fonts/Roboto-msdf.json",color:"white",wrapCount:"20",xOffset:.1,zOffset:.001,height:1,align:"center",baseline:"center",letterSpacing:2,anchor:"left"},s={text:"A fragment Thai inspired chicken salad dish that is light to the mouth and refreshing to the tongue.\n\n Contains roasted chicken, pineapple, breadcrumbs, lime, chilli, coriander and black beams.",padding:.1,size:{height:o.size.height,width:o.size.width-.2},position:{x:o.position.x,y:o.position.y+.05,z:o.position.z-o.size.height/2},rotation:{x:-90,y:0,z:0},font:"https://cdn.aframe.io/fonts/Roboto-msdf.json",color:"white",wrapCount:"30",xOffset:.1,zOffset:.001,height:1,align:"left",baseline:"center",letterSpacing:2};return[e,i,o,n,s]}class et extends D{constructor(t){super(),q(this,t,tt,Z,s,{})}}function it(t){let e,i,o,n,s,h,l,m,z,$,x,w,y,b,v,R,E,k,C,L,O,T,B,I,P,q,D,H,F,N,U,J,V,G,Y,Q,W,X,Z,tt,et,it,ot,nt,st,rt;const at=new K({props:{params:t[2]}}),dt=new K({props:{params:t[3]}});return{c(){j(at.$$.fragment),e=p(),i=c("a-text"),v=p(),R=c("a-image"),T=p(),j(dt.$$.fragment),B=p(),I=c("a-text"),Q=p(),W=c("a-image"),Z=p(),tt=c("a-image"),it=p(),ot=c("section"),nt=c("button"),nt.textContent="Buy Product",g(i,"wrap-count",o=t[4].wrapCount),g(i,"value",n=t[4].text[t[0]]),g(i,"rotation",s=`${t[4].rotation.x} ${t[4].rotation.y} ${t[4].rotation.z}`),g(i,"width",h=t[4].size.width),g(i,"height",l=t[4].size.height),g(i,"color",m=t[4].color),g(i,"position",z=`${t[4].position.x} ${t[4].position.y} ${t[4].position.z}`),g(i,"z-offset",$=t[4].zOffset),g(i,"x-offset",x=t[4].xOffset),g(i,"letter-spacing",w=t[4].letterSpacing),g(i,"font",y=t[4].font),g(i,"align",b=t[4].align),g(i,"anchor","left"),g(R,"id","image-gallery"),g(R,"position",E=`${t[1].position.x} ${t[1].position.y} ${t[1].position.z}`),g(R,"rotation",k=`${t[1].rotation.x} ${t[1].rotation.y} ${t[1].rotation.z}`),g(R,"height",C=t[1].size.height),g(R,"width",L=t[1].size.width),R.src!==(O=t[1].src[t[0]])&&g(R,"src",O),g(I,"wrap-count",P=t[5].wrapCount),g(I,"value",q=t[5].text),g(I,"rotation",D=`${t[5].rotation.x} ${t[5].rotation.y} ${t[5].rotation.z}`),g(I,"width",H=t[5].size.width),g(I,"height",F=t[5].size.height),g(I,"color",N=t[5].color),g(I,"position",U=`${t[5].position.x} ${t[5].position.y} ${t[5].position.z}`),g(I,"z-offset",J=t[5].zOffset),g(I,"x-offset",V=t[5].xOffset),g(I,"letter-spacing",G=t[5].letterSpacing),g(I,"font",Y=t[5].font),g(I,"anchor","left"),g(W,"gallery-controls",""),g(W,"clickable",""),g(W,"id","prev"),W.src!==(X="./static/icons/left_button.svg")&&g(W,"src","./static/icons/left_button.svg"),g(W,"height","0.4"),g(W,"width","0.4"),g(W,"position","-1.3 0.1 0"),g(W,"rotation","-90 0 0"),g(tt,"gallery-controls",""),g(tt,"clickable",""),g(tt,"id","next"),tt.src!==(et="./static/icons/right_button.svg")&&g(tt,"src","./static/icons/right_button.svg"),g(tt,"height","0.4"),g(tt,"width","0.4"),g(tt,"position","1.3 0.1 0"),g(tt,"rotation","-90 0 0"),f(nt,"class","svelte-15r03jn"),f(ot,"id","cta-section"),f(ot,"class","svelte-15r03jn"),rt=u(nt,"click",t[6])},m(t,o){A(at,t,o),a(t,e,o),a(t,i,o),a(t,v,o),a(t,R,o),a(t,T,o),A(dt,t,o),a(t,B,o),a(t,I,o),a(t,Q,o),a(t,W,o),a(t,Z,o),a(t,tt,o),a(t,it,o),a(t,ot,o),r(ot,nt),st=!0},p(t,e){(!st||1&e[0]&&n!==(n=t[4].text[t[0]]))&&g(i,"value",n),(!st||1&e[0]&&R.src!==(O=t[1].src[t[0]]))&&g(R,"src",O)},i(t){st||(_(at.$$.fragment,t),_(dt.$$.fragment,t),st=!0)},o(t){S(at.$$.fragment,t),S(dt.$$.fragment,t),st=!1},d(t){M(at,t),t&&d(e),t&&d(i),t&&d(v),t&&d(R),t&&d(T),M(dt,t),t&&d(B),t&&d(I),t&&d(Q),t&&d(W),t&&d(Z),t&&d(tt),t&&d(it),t&&d(ot),rt()}}}function ot(t,e,i){const o={position:{x:0,y:0,z:0},rotation:{x:-90,y:0,z:0},size:{height:1.5,width:2},src:["./static/images/shoe_1.png","./static/images/chicken_salad.png"],link:["https://google.com","https://google.com"]},n={position:{x:o.position.x-o.size.width/2,y:o.position.y,z:o.position.z-o.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:o.size.height/3,width:o.size.width},borderRadius:{topLeft:.05,topRight:.05,bottomLeft:0,bottomRight:0},color:"#7AE3D0"},s={size:{height:o.size.height,width:o.size.width},position:{x:o.position.x-o.size.width/2,y:o.position.y,get z(){return o.position.z+o.size.height+s.size.height/2}},rotation:{x:-90,y:0,z:0},borderRadius:{topLeft:0,topRight:0,bottomLeft:.05,bottomRight:.05},color:"#2B2B2B"},r={text:["Awesome Sneakers","Jerk Chicken Salad"],padding:.1,position:{x:n.position.x,y:n.position.y+.05,z:n.position.z-n.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:n.size.height,width:n.size.width-.2},font:"https://cdn.aframe.io/fonts/Roboto-msdf.json",color:"white",wrapCount:"20",xOffset:.1,zOffset:.001,height:1,align:"center",baseline:"center",letterSpacing:2,anchor:"left"},a={text:"A fragment Thai inspired chicken salad dish that is light to the mouth and refreshing to the tongue.\n\n Contains roasted chicken, pineapple, breadcrumbs, lime, chilli, coriander and black beams.",padding:.1,position:{x:s.position.x,y:s.position.y+.05,z:s.position.z-s.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:s.size.height,width:s.size.width-.2},font:"https://cdn.aframe.io/fonts/Roboto-msdf.json",color:"white",wrapCount:"30",xOffset:.1,zOffset:.001,height:1,align:"left",baseline:"center",letterSpacing:2};let d;return AFRAME.registerComponent("gallery-controls",{init(){const t=this.el;this.index=0,this.imagesArray=o.src,this.imageLength=this.imagesArray.length,this.aimage=document.getElementById("image-gallery"),t.addEventListener("click",this.handleClick)},update(){this.aimage.setAttribute("src",this.imagesArray[this.index])},handleClick(t){t.stopPropagation(),t.preventDefault();const e=t.target.getAttribute("id"),i=t.detail.intersection&&t.detail.intersection.object.el;i&&i===t.target&&this.nextImage(e)},nextImage(t){"next"===t?(this.index=this.index+1,this.index>this.imageLength&&(this.index=0)):"prev"===t&&(this.index=this.index-1,this.index<0&&(this.index=this.imageLength-1)),console.log(this.index)}}),i(0,d=0),[d,o,n,s,r,a,function(){window.location.href=o.link[d]}]}class nt extends D{constructor(t){super(),q(this,t,ot,it,s,{})}}function st(e){let i;return{c(){i=c("p"),i.textContent="Your Browser is not supported"},m(t,e){a(t,i,e)},p:t,i:t,o:t,d(t){t&&d(i)}}}function rt(t){let e,i,o,n,s,u,m,z,$,x,w,y,b,v,R,E,k,C;const L=[ct,dt,at],O=[];function T(t,e){return"video"===t[1]?0:"image"===t[1]?1:"imagegallery"===t[1]?2:-1}return~(v=T(t))&&(R=O[v]=L[v](t)),{c(){e=c("a-scene"),i=c("a-assets"),o=c("video"),m=p(),z=h("image"),w=l(" --\x3e"),y=p(),b=c("a-marker"),R&&R.c(),E=p(),k=c("a-entity"),f(o,"id",n=t[3].videoId),f(o,"crossorigin","anonymous"),o.loop=s=t[3].loop,f(o,"webkit-playsinline",""),o.playsInline=!0,o.src!==(u=t[3].videoSrc)&&f(o,"src",u),f(z,"id",$=t[3].imageId),z.src!==(x=t[3].imageSrc)&&f(z,"src",x),g(b,"preset","custom"),g(b,"type","pattern"),g(b,"url",t[2]),g(k,"camera",""),g(e,"embedded",""),g(e,"vr-mode-ui","enabled: false"),g(e,"arjs","debugUIEnabled: false; patternRatio:0.8"),g(e,"cursor","rayOrigin: mouse; fuse: true; fuseTimeout: 0;"),g(e,"raycaster","objects: [clickable];")},m(t,n){a(t,e,n),r(e,i),r(i,o),r(i,m),r(i,z),r(i,w),r(e,y),r(e,b),~v&&O[v].m(b,null),r(e,E),r(e,k),C=!0},p(t,e){let i=v;v=T(t),v===i?~v&&O[v].p(t,e):(R&&(B(),S(O[i],1,1,()=>{O[i]=null}),I()),~v?(R=O[v],R||(R=O[v]=L[v](t),R.c()),_(R,1),R.m(b,null)):R=null),(!C||4&e[0])&&g(b,"url",t[2])},i(t){C||(_(R),C=!0)},o(t){S(R),C=!1},d(t){t&&d(e),~v&&O[v].d()}}}function at(e){let i;const o=new nt({});return{c(){j(o.$$.fragment)},m(t,e){A(o,t,e),i=!0},p:t,i(t){i||(_(o.$$.fragment,t),i=!0)},o(t){S(o.$$.fragment,t),i=!1},d(t){M(o,t)}}}function dt(e){let i;const o=new et({});return{c(){j(o.$$.fragment)},m(t,e){A(o,t,e),i=!0},p:t,i(t){i||(_(o.$$.fragment,t),i=!0)},o(t){S(o.$$.fragment,t),i=!1},d(t){M(o,t)}}}function ct(e){let i;const o=new X({props:{titleBlock:e[4],videoParams:e[3],descriptionBlock:e[5],titleText:e[6],descriptionText:e[7]}});return{c(){j(o.$$.fragment)},m(t,e){A(o,t,e),i=!0},p:t,i(t){i||(_(o.$$.fragment,t),i=!0)},o(t){S(o.$$.fragment,t),i=!1},d(t){M(o,t)}}}function ht(t){let e,i,o,n;const s=[rt,st],r=[];function c(t,e){return t[0]?0:1}return e=c(t),i=r[e]=s[e](t),{c(){i.c(),o=l("")},m(t,i){r[e].m(t,i),a(t,o,i),n=!0},p(t,n){let a=e;e=c(t),e===a?r[e].p(t,n):(B(),S(r[a],1,1,()=>{r[a]=null}),I(),i=r[e],i||(i=r[e]=s[e](t),i.c()),_(i,1),i.m(o.parentNode,o))},i(t){n||(_(i),n=!0)},o(t){S(i),n=!1},d(t){r[e].d(t),t&&d(o)}}}function lt(){navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"environment"}}}).then((function(t){document.getElementsByTagName("video")[0].srcObject=t})).catch((function(t){console.log(t)}))}function pt(t,e,i){let o,n=!0,s="",r="";x(()=>{switch(i(0,n=null!=navigator.mediaDevices&&null!=navigator.mediaDevices.enumerateDevices&&null!=navigator.mediaDevices.getUserMedia),void 0!==document.hidden?o="visibilitychange":void 0!==document.msHidden?o="msvisibilitychange":void 0!==document.webkitHidden&&(o="webkitvisibilitychange"),document.addEventListener(o,lt,!1),i(1,s=function(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var e=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(location.search);return null===e?"":decodeURIComponent(e[1].replace(/\+/g," "))}("template")),s){case"video":i(2,r="pattern-video-qr-code.patt");break;case"image":i(2,r="pattern-image-qr-code.patt");break;case"imagegallery":i(2,r="pattern-imagegallery-qr-code.patt");break;case"3dmodel":i(2,r="pattern-3dmodel-qr-code.patt");break;case"article":i(2,r="pattern-article-qr-code.patt");break;default:i(2,r="pattern-video-qr-code.patt")}});const a={position:{x:0,y:0,z:0},rotation:{x:-90,y:0,z:0},size:{height:1.5,width:2},videoId:"video_1",videoSrc:"./static/videos/coffee_video.mp4",imageId:"image_1",imageSrc:"./static/images/coffee_cover.png",videoOpts:{loop:"true"}},d={position:{x:a.position.x-a.size.width/2,y:a.position.y,z:a.position.z-a.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:a.size.height/3,width:a.size.width},borderRadius:{topLeft:.05,topRight:.05,bottomLeft:0,bottomRight:0},color:"#333"},c={position:{x:a.position.x-a.size.width/2,y:a.position.y,z:a.position.z+a.size.height},rotation:{x:-90,y:0,z:0},size:{height:a.size.height/2,width:a.size.width},borderRadius:{topLeft:0,topRight:0,bottomLeft:.05,bottomRight:.05},color:"#26869F"},h={text:"Learn how to create a special coffee brew",padding:.1,position:{x:a.position.x-a.size.width/2,y:a.position.y+.05,z:a.position.z-a.size.height/2-d.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:d.size.height,width:d.size.width-.2},font:"https://cdn.aframe.io/fonts/Roboto-msdf.json",color:"white",wrapCount:"20",xOffset:.1,zOffset:.001,height:1,align:"center",baseline:"center",letterSpacing:2,anchor:"left"},l={text:"Find out the secret sauce to creating awesome tasting coffee in a simple 3 step process.",padding:.1,position:{x:a.position.x-a.size.width/2,y:a.position.y+.05,z:a.position.z+a.size.height/2+d.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:c.size.height,width:c.size.width-.2},font:"https://cdn.aframe.io/fonts/Roboto-msdf.json",color:"white",wrapCount:"30",xOffset:.1,zOffset:.001,height:1,align:"left",baseline:"center",letterSpacing:2};return[n,s,r,a,d,c,h,l]}return new class extends D{constructor(t){super(),q(this,t,pt,ht,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
