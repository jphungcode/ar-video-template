var app=function(){"use strict";function t(){}function e(t){return t()}function i(){return Object.create(null)}function o(t){t.forEach(e)}function n(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function a(t,e,i){t.insertBefore(e,i||null)}function d(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function l(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function u(t){return document.createTextNode(t)}function h(){return u(" ")}function p(t,e,i,o){return t.addEventListener(e,i,o),()=>t.removeEventListener(e,i,o)}function f(t,e,i){null==i?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function g(t,e,i){e in t?t[e]=i:f(t,e,i)}function m(t,e){(null!=e||t.value)&&(t.value=e)}let $;function w(t){$=t}function z(t){(function(){if(!$)throw new Error("Function called outside component initialization");return $})().$$.on_mount.push(t)}const y=[],x=[],v=[],b=[],R=Promise.resolve();let E=!1;function k(t){v.push(t)}function C(){const t=new Set;do{for(;y.length;){const t=y.shift();w(t),T(t.$$)}for(;x.length;)x.pop()();for(let e=0;e<v.length;e+=1){const i=v[e];t.has(i)||(i(),t.add(i))}v.length=0}while(y.length);for(;b.length;)b.pop()();E=!1}function T(t){null!==t.fragment&&(t.update(),o(t.before_update),t.fragment&&t.fragment.p(t.ctx,t.dirty),t.dirty=[-1],t.after_update.forEach(k))}const L=new Set;let I;function O(){I={r:0,c:[],p:I}}function B(){I.r||o(I.c),I=I.p}function _(t,e){t&&t.i&&(L.delete(t),t.i(e))}function S(t,e,i,o){if(t&&t.o){if(L.has(t))return;L.add(t),I.c.push(()=>{L.delete(t),o&&(i&&t.d(1),o())}),t.o(e)}}function j(t){t&&t.c()}function M(t,i,r){const{fragment:s,on_mount:a,on_destroy:d,after_update:c}=t.$$;s&&s.m(i,r),k(()=>{const i=a.map(e).filter(n);d?d.push(...i):o(i),t.$$.on_mount=[]}),c.forEach(k)}function A(t,e){const i=t.$$;null!==i.fragment&&(o(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function P(t,e){-1===t.$$.dirty[0]&&(y.push(t),E||(E=!0,R.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(e,n,r,s,a,d,c=[-1]){const l=$;w(e);const u=n.props||{},h=e.$$={fragment:null,ctx:null,props:d,update:t,not_equal:a,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:i(),dirty:c};let p=!1;h.ctx=r?r(e,u,(t,i,o=i)=>(h.ctx&&a(h.ctx[t],h.ctx[t]=o)&&(h.bound[t]&&h.bound[t](o),p&&P(e,t)),i)):[],h.update(),p=!0,o(h.before_update),h.fragment=!!s&&s(h.ctx),n.target&&(n.hydrate?h.fragment&&h.fragment.l(function(t){return Array.from(t.childNodes)}(n.target)):h.fragment&&h.fragment.c(),n.intro&&_(e.$$.fragment),M(e,n.target,n.anchor),C()),w(l)}class q{$destroy(){A(this,1),this.$destroy=t}$on(t,e){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const t=i.indexOf(e);-1!==t&&i.splice(t,1)}}$set(){}}function D(t){let e,i;return{c(){e=c("input"),f(e,"type","range"),f(e,"id","volume-range"),f(e,"class","range vertical-heighest-first round svelte-uryj0d"),i=[p(e,"change",t[10]),p(e,"input",t[10]),p(e,"change",t[8]),p(e,"blur",t[11])]},m(i,o){a(i,e,o),m(e,t[6])},p(t,i){64&i[0]&&m(e,t[6])},d(t){t&&d(e),o(i)}}}function F(t){let e,i,o,n;return{c(){e=l("svg"),i=l("circle"),o=l("rect"),n=l("rect"),f(i,"cx","30"),f(i,"cy","30"),f(i,"r","29.5"),f(i,"fill","#C4C4C4"),f(i,"stroke","white"),f(o,"x","21"),f(o,"y","16"),f(o,"width","5"),f(o,"height","26"),f(o,"fill","#161616"),f(n,"x","34"),f(n,"y","16"),f(n,"width","5"),f(n,"height","26"),f(n,"fill","#161616"),f(e,"class","icon svelte-uryj0d"),f(e,"viewBox","0 0 60 60"),f(e,"fill","none"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(t,r){a(t,e,r),s(e,i),s(e,o),s(e,n)},d(t){t&&d(e)}}}function N(t){let e,i,o;return{c(){e=l("svg"),i=l("circle"),o=l("path"),f(i,"cx","30"),f(i,"cy","30"),f(i,"r","29.5"),f(i,"fill","#C4C4C4"),f(i,"stroke","#fff"),f(o,"d","M45 30L22.5 42.9904V17.0096L45 30z"),f(o,"fill","#161616"),f(e,"fill","none"),f(e,"class","icon svelte-uryj0d"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"viewBox","0 0 60 60")},m(t,n){a(t,e,n),s(e,i),s(e,o)},d(t){t&&d(e)}}}function U(e){let i,o,n,r,u,m,$,w,z,y,x,v,b,R,E,k,C,T,L=e[5]&&D(e);function I(t,e){return t[7]?F:N}let O=I(e),B=O(e);return{c(){i=c("a-video"),u=h(),m=c("div"),$=c("button"),w=l("svg"),z=l("circle"),y=l("path"),x=l("path"),v=l("path"),b=h(),L&&L.c(),R=h(),E=c("button"),B.c(),k=h(),C=c("button"),C.innerHTML='<svg fill="none" class="icon svelte-uryj0d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M28.81 12.6944l1.0168-.6159c.3457-.2092.5522-.5849.5417-.9856-.0105-.4007-.2363-.7654-.5923-.9568-.356-.19132-.7884-.18027-1.1342.029l-3.7182 2.251c-.0232.0141-.0354.0391-.0573.0547-.0903.0633-.1705.1397-.2378.2267-.0913.1635-.1697.3336-.2346.5089-.0037.0246.0072.048.005.0726-.0024.0302-.0178.0562-.0178.0873.0069.0605.0192.1203.0366.1787.0557.2011.1394.3935.2483.5721l3.0067 3.3601c.4165.4601 1.1307.5011 1.5984.0917.4676-.4093.5131-1.1153.1016-1.5799l-.9692-1.0827c4.644 1.3603 7.6809 5.7614 7.2683 10.5334-.4125 4.772-4.1607 8.5997-8.9708 9.1609-4.8099.5611-9.3562-2.2987-10.8805-6.8448-1.5244-4.546.3932-9.5252 4.5896-11.9169.5423-.3105.7273-.9969.4133-1.5332-.314-.5363-1.0082-.7193-1.5506-.4088-5.166 2.9355-7.5183 9.0686-5.6204 14.6534 1.898 5.5848 7.5184 9.0685 13.4287 8.3234 5.9104-.7451 10.4671-5.5118 10.8873-11.3889.4202-5.8773-3.413-11.2306-9.1586-12.7904z" fill="#E9E9E9"></path><circle cx="25" cy="25" r="24.5" stroke="#fff"></circle></svg>',g(i,"height",e[2]),g(i,"rotation",o=`${e[1].x} ${e[1].y} ${e[1].z}`),g(i,"width",e[3]),g(i,"video-controls",""),g(i,"position",n=`${e[0].x} ${e[0].y} ${e[0].z}`),i.src!==(r=`#${e[4]}`)&&g(i,"src",r),f(z,"cx","25"),f(z,"cy","25"),f(z,"r","24.5"),f(z,"stroke","#fff"),f(y,"d","M16.4919 20.6124H13v7.7752h3.4919l6.5979 4.8933s1.2101 1.0148 1.2101-.0329V15.5999c0-.8227-1.0644-.0192-1.0644-.0192l-6.7436 5.0317zM28.0591 19.095c-.349-.3474-.91-.3474-1.255 0-.3489.3473-.3489.9107 0 1.2549 1.1413 1.1452 1.7071 2.6299 1.7087 4.1273-.0016 1.5006-.5674 2.9948-1.7087 4.1345-.3489.3474-.3489.9092 0 1.2589.1721.1745.3986.2593.6283.2593.2249 0 .453-.0848.6267-.2593 1.4846-1.4878 2.2305-3.4462 2.2289-5.3934.0024-1.9488-.7435-3.8968-2.2289-5.3822z"),f(y,"fill","#E9E9E9"),f(x,"d","M30.4665 16.2978c-.3506-.349-.9116-.349-1.2581 0-.3442.3481-.3442.91 0 1.2581 1.9192 1.9176 2.8747 4.4178 2.878 6.9285-.0033 2.5242-.9548 5.0357-2.878 6.9645-.3458.3473-.3442.9068 0 1.2565.1752.1697.4017.2577.6298.2577.2265 0 .4546-.088.6283-.2577 2.2665-2.2729 3.395-5.2518 3.395-8.221 0-2.9596-1.1373-5.9265-3.395-8.1866z"),f(x,"fill","#E9E9E9"),f(v,"d","M33.4149 13.4326c-.3458-.349-.9084-.349-1.2565 0-.3442.3473-.3442.9108 0 1.2549 2.7107 2.7107 4.064 6.2498 4.064 9.8001 0 3.5607-1.3493 7.1102-4.064 9.8265-.3474.3465-.3442.9116 0 1.2565.1752.1721.4033.2577.6314.2577.2249 0 .4514-.0856.6251-.2577 3.0589-3.0613 4.5859-7.0789 4.5851-11.0838.0008-3.9977-1.5343-8.0033-4.5851-11.0542z"),f(v,"fill","#E9E9E9"),f(w,"fill","none"),f(w,"class","icon svelte-uryj0d"),f(w,"xmlns","http://www.w3.org/2000/svg"),f(w,"viewBox","0 0 50 50"),f($,"id","volume-btn"),f($,"class","svelte-uryj0d"),f(E,"id","play-btn"),f(E,"class","svelte-uryj0d"),f(C,"id","reset-btn"),f(C,"class","svelte-uryj0d"),f(m,"id","video-controls"),f(m,"class","svelte-uryj0d"),T=p($,"click",e[12])},m(t,e){a(t,i,e),a(t,u,e),a(t,m,e),s(m,$),s($,w),s(w,z),s(w,y),s(w,x),s(w,v),s($,b),L&&L.m($,null),s(m,R),s(m,E),B.m(E,null),s(m,k),s(m,C)},p(t,e){4&e[0]&&g(i,"height",t[2]),2&e[0]&&o!==(o=`${t[1].x} ${t[1].y} ${t[1].z}`)&&g(i,"rotation",o),8&e[0]&&g(i,"width",t[3]),1&e[0]&&n!==(n=`${t[0].x} ${t[0].y} ${t[0].z}`)&&g(i,"position",n),16&e[0]&&i.src!==(r=`#${t[4]}`)&&g(i,"src",r),t[5]?L?L.p(t,e):(L=D(t),L.c(),L.m($,null)):L&&(L.d(1),L=null),O!==(O=I(t))&&(B.d(1),B=O(t),B&&(B.c(),B.m(E,null)))},i:t,o:t,d(t){t&&d(i),t&&d(u),t&&d(m),L&&L.d(),B.d(),T()}}}function V(t,e,i){let{position:o=""}=e,{rotation:n=""}=e,{videoId:r=""}=e,{height:s="1.5"}=e,{width:a="2"}=e,{imageId:d=""}=e,c=!1,l=50,u=!1;AFRAME.registerComponent("video-controls",{init(){const t=this.el,e=document.getElementById("video_1");this.isPlaying=u,e.addEventListener("ended",(function(){e.currentTime=0}));const o=document.getElementById("play-btn");document.querySelector("a-image");o.addEventListener("click",(function(){t.getAttribute("src")!==`#${r}`&&t.setAttribute("src",`#${r}`),!1===u?(i(7,u=!0),e.play()):!0===u&&(i(7,u=!1),e.pause())})),document.getElementById("reset-btn").addEventListener("click",(function(){t.setAttribute("src",`#${d}`),e.pause(),e.currentTime=0,i(7,u=!1)}))},handleClick(t){t.stopPropagation(),t.preventDefault();const e=t.detail.intersection&&t.detail.intersection.object.el;e&&e===t.target&&(!1===this.isPlaying?(this.isPlaying=!0,document.getElementById("video_1").play()):!0===this.isPlaying&&(this.isPlaying=!1,document.getElementById("video_1").pause()))}});return t.$set=t=>{"position"in t&&i(0,o=t.position),"rotation"in t&&i(1,n=t.rotation),"videoId"in t&&i(9,r=t.videoId),"height"in t&&i(2,s=t.height),"width"in t&&i(3,a=t.width),"imageId"in t&&i(4,d=t.imageId)},[o,n,s,a,d,c,l,u,function(){document.querySelector("#video_1").volume=l/100},r,function(){var t;t=this.value,l=""===t?void 0:+t,i(6,l)},()=>i(5,c=!1),()=>i(5,c=!c)]}class G extends q{constructor(t){super(),H(this,t,V,U,r,{position:0,rotation:1,videoId:9,height:2,width:3,imageId:4})}}function J(e){let i,o,n,r,s,l,u,h,p;return{c(){i=c("a-rounded"),g(i,"position",o=`${e[1]} ${e[2]} ${e[3]}`),g(i,"rotation",e[4]),g(i,"width",n=e[0].size.width),g(i,"height",r=e[0].size.height),g(i,"color",s=e[0].color),g(i,"top-left-radius",l=e[0].borderRadius.topLeft),g(i,"top-right-radius",u=e[0].borderRadius.topRight),g(i,"bottom-left-radius",h=e[0].borderRadius.bottomLeft),g(i,"bottom-right-radius",p=e[0].borderRadius.bottomRight)},m(t,e){a(t,i,e)},p(t,e){1&e[0]&&n!==(n=t[0].size.width)&&g(i,"width",n),1&e[0]&&r!==(r=t[0].size.height)&&g(i,"height",r),1&e[0]&&s!==(s=t[0].color)&&g(i,"color",s),1&e[0]&&l!==(l=t[0].borderRadius.topLeft)&&g(i,"top-left-radius",l),1&e[0]&&u!==(u=t[0].borderRadius.topRight)&&g(i,"top-right-radius",u),1&e[0]&&h!==(h=t[0].borderRadius.bottomLeft)&&g(i,"bottom-left-radius",h),1&e[0]&&p!==(p=t[0].borderRadius.bottomRight)&&g(i,"bottom-right-radius",p)},i:t,o:t,d(t){t&&d(i)}}}function Y(t,e,i){let{params:o}=e,n=o.position.x,r=o.position.y,s=o.position.z,a=`${o.rotation.x} ${o.rotation.y} ${o.rotation.z}`;return t.$set=t=>{"params"in t&&i(0,o=t.params)},[o,n,r,s,a]}AFRAME.registerComponent("rounded",{schema:{enabled:{default:!0},width:{type:"number",default:1},height:{type:"number",default:1},radius:{type:"number",default:.3},topLeftRadius:{type:"number",default:-1},topRightRadius:{type:"number",default:-1},bottomLeftRadius:{type:"number",default:-1},bottomRightRadius:{type:"number",default:-1},color:{type:"color",default:"#F0F0F0"},opacity:{type:"number",default:1}},init:function(){this.rounded=new THREE.Mesh(this.draw(),new THREE.MeshPhongMaterial({color:new THREE.Color(this.data.color),side:THREE.DoubleSide})),this.updateOpacity(),this.el.setObject3D("mesh",this.rounded)},update:function(){this.data.enabled?this.rounded&&(this.rounded.visible=!0,this.rounded.geometry=this.draw(),this.rounded.material.color=new THREE.Color(this.data.color),this.updateOpacity()):this.rounded.visible=!1},updateOpacity:function(){this.data.opacity<0&&(this.data.opacity=0),this.data.opacity>1&&(this.data.opacity=1),this.data.opacity<1?this.rounded.material.transparent=!0:this.rounded.material.transparent=!1,this.rounded.material.opacity=this.data.opacity},tick:function(){},remove:function(){this.rounded&&(this.el.object3D.remove(this.rounded),this.rounded=null)},draw:function(){var t=new THREE.Shape;var e,i,o,n,r,s,a,d,c,l=[this.data.radius,this.data.radius,this.data.radius,this.data.radius];return-1!=this.data.topLeftRadius&&(l[0]=this.data.topLeftRadius),-1!=this.data.topRightRadius&&(l[1]=this.data.topRightRadius),-1!=this.data.bottomLeftRadius&&(l[2]=this.data.bottomLeftRadius),-1!=this.data.bottomRightRadius&&(l[3]=this.data.bottomRightRadius),e=t,i=0,o=0,n=this.data.width,r=this.data.height,s=l[0],a=l[1],d=l[2],c=l[3],s||(s=1e-5),a||(a=1e-5),d||(d=1e-5),c||(c=1e-5),e.moveTo(i,o+s),e.lineTo(i,o+r-s),e.quadraticCurveTo(i,o+r,i+s,o+r),e.lineTo(i+n-a,o+r),e.quadraticCurveTo(i+n,o+r,i+n,o+r-a),e.lineTo(i+n,o+c),e.quadraticCurveTo(i+n,o,i+n-c,o),e.lineTo(i+d,o),e.quadraticCurveTo(i,o,i,o+d),new THREE.ShapeBufferGeometry(t)},pause:function(){},play:function(){}}),AFRAME.registerPrimitive("a-rounded",{defaultComponents:{rounded:{}},mappings:{enabled:"rounded.enabled",width:"rounded.width",height:"rounded.height",radius:"rounded.radius","top-left-radius":"rounded.topLeftRadius","top-right-radius":"rounded.topRightRadius","bottom-left-radius":"rounded.bottomLeftRadius","bottom-right-radius":"rounded.bottomRightRadius",color:"rounded.color",opacity:"rounded.opacity"}});class K extends q{constructor(t){super(),H(this,t,Y,J,r,{params:0})}}function Q(t){let e,i,o,n,r,s,l,u,p,f,m,$,w,z,y,x,v,b,R,E,k,C,T,L,I,O,B,P,H,q,D;const F=new K({props:{params:t[1]}}),N=new G({props:{position:t[0].position,rotation:t[0].rotation,videoId:t[0].videoId,imageId:t[0].imageId,height:t[0].size.height,width:t[0].size.width}}),U=new K({props:{params:t[2]}});return{c(){j(F.$$.fragment),e=h(),i=c("a-text"),x=h(),j(N.$$.fragment),v=h(),j(U.$$.fragment),b=h(),R=c("a-text"),g(i,"wrap-count",o=t[3].wrapCount),g(i,"value",n=t[3].text),g(i,"rotation",r=`${t[3].rotation.x} ${t[3].rotation.y} ${t[3].rotation.z}`),g(i,"width",s=t[3].size.width),g(i,"height",l=t[3].size.height),g(i,"color",u=t[3].color),g(i,"position",p=`${t[3].position.x} ${t[3].position.y} ${t[3].position.z}`),g(i,"z-offset",f=t[3].zOffset),g(i,"x-offset",m=t[3].xOffset),g(i,"letter-spacing",$=t[3].letterSpacing),g(i,"font",w=t[3].font),g(i,"align",z=t[3].align),g(i,"anchor",y=t[3].anchor),g(R,"color",E=t[4].color),g(R,"value",k=t[4].text),g(R,"rotation",C=`${t[4].rotation.x} ${t[4].rotation.y} ${t[4].rotation.z}`),g(R,"width",T=t[4].size.width),g(R,"height",L=t[4].size.height),g(R,"position",I=`${t[4].position.x} ${t[4].position.y} ${t[4].position.z}`),g(R,"wrap-count",O=t[4].wrapCount),g(R,"z-offset",B=t[4].zOffset),g(R,"x-offset",P=t[4].xOffset),g(R,"letter-spacing",H=t[4].letterSpacing),g(R,"font",q=t[4].font)},m(t,o){M(F,t,o),a(t,e,o),a(t,i,o),a(t,x,o),M(N,t,o),a(t,v,o),M(U,t,o),a(t,b,o),a(t,R,o),D=!0},p(t,e){const a={};2&e[0]&&(a.params=t[1]),F.$set(a),(!D||8&e[0]&&o!==(o=t[3].wrapCount))&&g(i,"wrap-count",o),(!D||8&e[0]&&n!==(n=t[3].text))&&g(i,"value",n),(!D||8&e[0]&&r!==(r=`${t[3].rotation.x} ${t[3].rotation.y} ${t[3].rotation.z}`))&&g(i,"rotation",r),(!D||8&e[0]&&s!==(s=t[3].size.width))&&g(i,"width",s),(!D||8&e[0]&&l!==(l=t[3].size.height))&&g(i,"height",l),(!D||8&e[0]&&u!==(u=t[3].color))&&g(i,"color",u),(!D||8&e[0]&&p!==(p=`${t[3].position.x} ${t[3].position.y} ${t[3].position.z}`))&&g(i,"position",p),(!D||8&e[0]&&f!==(f=t[3].zOffset))&&g(i,"z-offset",f),(!D||8&e[0]&&m!==(m=t[3].xOffset))&&g(i,"x-offset",m),(!D||8&e[0]&&$!==($=t[3].letterSpacing))&&g(i,"letter-spacing",$),(!D||8&e[0]&&w!==(w=t[3].font))&&g(i,"font",w),(!D||8&e[0]&&z!==(z=t[3].align))&&g(i,"align",z),(!D||8&e[0]&&y!==(y=t[3].anchor))&&g(i,"anchor",y);const d={};1&e[0]&&(d.position=t[0].position),1&e[0]&&(d.rotation=t[0].rotation),1&e[0]&&(d.videoId=t[0].videoId),1&e[0]&&(d.imageId=t[0].imageId),1&e[0]&&(d.height=t[0].size.height),1&e[0]&&(d.width=t[0].size.width),N.$set(d);const c={};4&e[0]&&(c.params=t[2]),U.$set(c),(!D||16&e[0]&&E!==(E=t[4].color))&&g(R,"color",E),(!D||16&e[0]&&k!==(k=t[4].text))&&g(R,"value",k),(!D||16&e[0]&&C!==(C=`${t[4].rotation.x} ${t[4].rotation.y} ${t[4].rotation.z}`))&&g(R,"rotation",C),(!D||16&e[0]&&T!==(T=t[4].size.width))&&g(R,"width",T),(!D||16&e[0]&&L!==(L=t[4].size.height))&&g(R,"height",L),(!D||16&e[0]&&I!==(I=`${t[4].position.x} ${t[4].position.y} ${t[4].position.z}`))&&g(R,"position",I),(!D||16&e[0]&&O!==(O=t[4].wrapCount))&&g(R,"wrap-count",O),(!D||16&e[0]&&B!==(B=t[4].zOffset))&&g(R,"z-offset",B),(!D||16&e[0]&&P!==(P=t[4].xOffset))&&g(R,"x-offset",P),(!D||16&e[0]&&H!==(H=t[4].letterSpacing))&&g(R,"letter-spacing",H),(!D||16&e[0]&&q!==(q=t[4].font))&&g(R,"font",q)},i(t){D||(_(F.$$.fragment,t),_(N.$$.fragment,t),_(U.$$.fragment,t),D=!0)},o(t){S(F.$$.fragment,t),S(N.$$.fragment,t),S(U.$$.fragment,t),D=!1},d(t){A(F,t),t&&d(e),t&&d(i),t&&d(x),A(N,t),t&&d(v),A(U,t),t&&d(b),t&&d(R)}}}function W(t,e,i){let{videoParams:o={}}=e,{titleBlock:n={}}=e,{descriptionBlock:r={}}=e,{titleText:s={}}=e,{descriptionText:a={}}=e;return t.$set=t=>{"videoParams"in t&&i(0,o=t.videoParams),"titleBlock"in t&&i(1,n=t.titleBlock),"descriptionBlock"in t&&i(2,r=t.descriptionBlock),"titleText"in t&&i(3,s=t.titleText),"descriptionText"in t&&i(4,a=t.descriptionText)},[o,n,r,s,a]}class X extends q{constructor(t){super(),H(this,t,W,Q,r,{videoParams:0,titleBlock:1,descriptionBlock:2,titleText:3,descriptionText:4})}}function Z(e){let i,o,n,r,s,l,u,p,f,m,$,w,z,y,x,v,b,R,E,k,C,T,L,I,O,B,P,H,q,D,F,N,U,V,G,J,Y;const Q=new K({props:{params:e[1]}}),W=new K({props:{params:e[2]}});return{c(){j(Q.$$.fragment),i=h(),o=c("a-text"),v=h(),b=c("a-image"),L=h(),j(W.$$.fragment),I=h(),O=c("a-text"),g(o,"wrap-count",n=e[3].wrapCount),g(o,"value",r=e[3].text),g(o,"rotation",s=`${e[3].rotation.x} ${e[3].rotation.y} ${e[3].rotation.z}`),g(o,"width",l=e[3].size.width),g(o,"height",u=e[3].size.height),g(o,"color",p=e[3].color),g(o,"position",f=`${e[3].position.x} ${e[3].position.y} ${e[3].position.z}`),g(o,"z-offset",m=e[3].zOffset),g(o,"x-offset",$=e[3].xOffset),g(o,"letter-spacing",w=e[3].letterSpacing),g(o,"font",z=e[3].font),g(o,"align",y=e[3].align),g(o,"anchor",x=e[3].anchor),g(b,"position",R=`${e[0].position.x} ${e[0].position.y} ${e[0].position.z}`),g(b,"rotation",E=`${e[0].rotation.x} ${e[0].rotation.y} ${e[0].rotation.z}`),g(b,"height",k=e[0].size.height),g(b,"width",C=e[0].size.width),b.src!==(T=e[0].src)&&g(b,"src",T),g(O,"color",B=e[4].color),g(O,"value",P=e[4].text),g(O,"rotation",H=`${e[4].rotation.x} ${e[4].rotation.y} ${e[4].rotation.z}`),g(O,"width",q=e[4].size.width),g(O,"height",D=e[4].size.height),g(O,"position",F=`${e[4].position.x} ${e[4].position.y} ${e[4].position.z}`),g(O,"wrap-count",N=e[4].wrapCount),g(O,"z-offset",U=e[4].zOffset),g(O,"x-offset",V=e[4].xOffset),g(O,"letter-spacing",G=e[4].letterSpacing),g(O,"font",J=e[4].font)},m(t,e){M(Q,t,e),a(t,i,e),a(t,o,e),a(t,v,e),a(t,b,e),a(t,L,e),M(W,t,e),a(t,I,e),a(t,O,e),Y=!0},p:t,i(t){Y||(_(Q.$$.fragment,t),_(W.$$.fragment,t),Y=!0)},o(t){S(Q.$$.fragment,t),S(W.$$.fragment,t),Y=!1},d(t){A(Q,t),t&&d(i),t&&d(o),t&&d(v),t&&d(b),t&&d(L),A(W,t),t&&d(I),t&&d(O)}}}function tt(t){const e={position:{x:0,y:0,z:0},rotation:{x:-90,y:0,z:0},size:{height:1.5,width:2},src:"./static/images/chicken_salad.png"},i={position:{x:e.position.x-e.size.width/2,y:e.position.y,z:e.position.z-e.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:e.size.height/3,width:e.size.width},borderRadius:{topLeft:.05,topRight:.05,bottomLeft:0,bottomRight:0},color:"#7AE3D0"},o={size:{height:e.size.height,width:e.size.width},position:{x:e.position.x-e.size.width/2,y:e.position.y,z:e.position.z+e.size.height+o.size.height/2},rotation:{x:-90,y:0,z:0},borderRadius:{topLeft:0,topRight:0,bottomLeft:.05,bottomRight:.05},color:"#2B2B2B"};return[e,i,o,{text:"Jerk Chicken Salad",padding:.1,position:{x:i.position.x,y:i.position.y+.05,z:i.position.z-i.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:i.size.height,width:i.size.width-.2},font:"https://cdn.aframe.io/fonts/Roboto-msdf.json",color:"white",wrapCount:"20",xOffset:.1,zOffset:.001,height:1,align:"center",baseline:"center",letterSpacing:2,anchor:"left"},{text:"A fragment Thai inspired chicken salad dish that is light to the mouth and refreshing to the tongue.\n\n Contains roasted chicken, pineapple, breadcrumbs, lime, chilli, coriander and black beams.",padding:.1,position:{x:o.position.x,y:o.position.y+.05,z:o.position.z+o.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:o.size.height,width:o.size.width-.2},font:"https://cdn.aframe.io/fonts/Roboto-msdf.json",color:"white",wrapCount:"30",xOffset:.1,zOffset:.001,height:1,align:"left",baseline:"center",letterSpacing:2}]}class et extends q{constructor(t){super(),H(this,t,tt,Z,r,{})}}function it(e){let i;return{c(){i=c("p"),i.textContent="Your Browser is not supported"},m(t,e){a(t,i,e)},p:t,i:t,o:t,d(t){t&&d(i)}}}function ot(t){let e,i,o,n,r,p,m,$,w,z,y,x,v,b,R,E,k,C;const T=[rt,nt],L=[];function I(t,e){return"video"===t[1]?0:"image"===t[1]?1:-1}return~(b=I(t))&&(R=L[b]=T[b](t)),{c(){e=c("a-scene"),i=c("a-assets"),o=c("video"),m=h(),$=l("image"),y=u(" --\x3e"),x=h(),v=c("a-marker"),R&&R.c(),E=h(),k=c("a-entity"),f(o,"id",n=t[3].videoId),f(o,"crossorigin","anonymous"),o.loop=r=t[3].loop,f(o,"webkit-playsinline",""),o.playsInline=!0,o.src!==(p=t[3].videoSrc)&&f(o,"src",p),f($,"id",w=t[3].imageId),$.src!==(z=t[3].imageSrc)&&f($,"src",z),g(v,"preset","custom"),g(v,"type","pattern"),g(v,"url",t[2]),g(k,"camera",""),g(e,"embedded",""),g(e,"vr-mode-ui","enabled: false"),g(e,"arjs","debugUIEnabled: false; patternRatio:0.8")},m(t,n){a(t,e,n),s(e,i),s(i,o),s(i,m),s(i,$),s(i,y),s(e,x),s(e,v),~b&&L[b].m(v,null),s(e,E),s(e,k),C=!0},p(t,e){let i=b;b=I(t),b===i?~b&&L[b].p(t,e):(R&&(O(),S(L[i],1,1,()=>{L[i]=null}),B()),~b?(R=L[b],R||(R=L[b]=T[b](t),R.c()),_(R,1),R.m(v,null)):R=null),(!C||4&e[0])&&g(v,"url",t[2])},i(t){C||(_(R),C=!0)},o(t){S(R),C=!1},d(t){t&&d(e),~b&&L[b].d()}}}function nt(e){let i;const o=new et({});return{c(){j(o.$$.fragment)},m(t,e){M(o,t,e),i=!0},p:t,i(t){i||(_(o.$$.fragment,t),i=!0)},o(t){S(o.$$.fragment,t),i=!1},d(t){A(o,t)}}}function rt(e){let i;const o=new X({props:{titleBlock:e[4],videoParams:e[3],descriptionBlock:e[5],titleText:e[6],descriptionText:e[7]}});return{c(){j(o.$$.fragment)},m(t,e){M(o,t,e),i=!0},p:t,i(t){i||(_(o.$$.fragment,t),i=!0)},o(t){S(o.$$.fragment,t),i=!1},d(t){A(o,t)}}}function st(t){let e,i,o,n;const r=[ot,it],s=[];function c(t,e){return t[0]?0:1}return e=c(t),i=s[e]=r[e](t),{c(){i.c(),o=u("")},m(t,i){s[e].m(t,i),a(t,o,i),n=!0},p(t,n){let a=e;e=c(t),e===a?s[e].p(t,n):(O(),S(s[a],1,1,()=>{s[a]=null}),B(),i=s[e],i||(i=s[e]=r[e](t),i.c()),_(i,1),i.m(o.parentNode,o))},i(t){n||(_(i),n=!0)},o(t){S(i),n=!1},d(t){s[e].d(t),t&&d(o)}}}function at(){navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"environment"}}}).then((function(t){document.getElementsByTagName("video")[0].srcObject=t})).catch((function(t){console.log(t)}))}function dt(t,e,i){let o,n=!0,r="",s="";z(()=>{switch(i(0,n=null!=navigator.mediaDevices&&null!=navigator.mediaDevices.enumerateDevices&&null!=navigator.mediaDevices.getUserMedia),void 0!==document.hidden?o="visibilitychange":void 0!==document.msHidden?o="msvisibilitychange":void 0!==document.webkitHidden&&(o="webkitvisibilitychange"),document.addEventListener(o,at,!1),i(1,r=function(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var e=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(location.search);return null===e?"":decodeURIComponent(e[1].replace(/\+/g," "))}("template")),r){case"video":i(2,s="pattern-video-qr-code.patt");break;case"image":i(2,s="pattern-image-qr-code.patt");break;default:i(2,s="pattern-video-qr-code.patt")}});const a={position:{x:0,y:0,z:0},rotation:{x:-90,y:0,z:0},size:{height:1.5,width:2},videoId:"video_1",videoSrc:"./static/videos/coffee_video.mp4",imageId:"image_1",imageSrc:"./static/images/coffee_cover.png",videoOpts:{loop:"true"}},d={position:{x:a.position.x-a.size.width/2,y:a.position.y,z:a.position.z-a.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:a.size.height/3,width:a.size.width},borderRadius:{topLeft:.05,topRight:.05,bottomLeft:0,bottomRight:0},color:"#333"},c={position:{x:a.position.x-a.size.width/2,y:a.position.y,z:a.position.z+a.size.height},rotation:{x:-90,y:0,z:0},size:{height:a.size.height/2,width:a.size.width},borderRadius:{topLeft:0,topRight:0,bottomLeft:.05,bottomRight:.05},color:"#26869F"},l={text:"Learn how to create a special coffee brew",padding:.1,position:{x:a.position.x-a.size.width/2,y:a.position.y+.01,z:a.position.z-a.size.height/2-d.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:d.size.height,width:d.size.width-.2},font:"https://cdn.aframe.io/fonts/Roboto-msdf.json",color:"white",wrapCount:"20",xOffset:.1,zOffset:.001,height:1,align:"center",baseline:"center",letterSpacing:2,anchor:"left"},u={text:"Find out the secret sauce to creating awesome tasting coffee in a simple 3 step process.",padding:.1,position:{x:a.position.x-a.size.width/2,y:a.position.y+.01,z:a.position.z+a.size.height/2+d.size.height/2},rotation:{x:-90,y:0,z:0},size:{height:c.size.height,width:c.size.width-.2},font:"https://cdn.aframe.io/fonts/Roboto-msdf.json",color:"white",wrapCount:"30",xOffset:.1,zOffset:.001,height:1,align:"left",baseline:"center",letterSpacing:2};return[n,r,s,a,d,c,l,u]}return new class extends q{constructor(t){super(),H(this,t,dt,st,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
