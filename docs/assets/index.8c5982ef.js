var x=Object.defineProperty;var g=(e,t,o)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var d=(e,t,o)=>(g(e,typeof t!="symbol"?t+"":t,o),o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const h of n.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();class m{constructor(t,o){this.x=t,this.y=o,this.x=typeof t=="number"?t:0,this.y=typeof o=="number"?o:0}}class a extends m{constructor(t,o,s){super(t,o),this.x=t,this.y=o,this.z=s,this.z=typeof s=="number"?s:0}}class b{constructor(t,o){d(this,"vertices");d(this,"faces");this.center=t,this.size=o;const s=o/2;this.vertices=[new a(t.x-s,t.y-s,t.z+s),new a(t.x-s,t.y-s,t.z-s),new a(t.x+s,t.y-s,t.z-s),new a(t.x+s,t.y-s,t.z+s),new a(t.x+s,t.y+s,t.z+s),new a(t.x+s,t.y+s,t.z-s),new a(t.x-s,t.y+s,t.z-s),new a(t.x-s,t.y+s,t.z+s)],this.faces=[[this.vertices[0],this.vertices[1],this.vertices[2],this.vertices[3]],[this.vertices[3],this.vertices[2],this.vertices[5],this.vertices[4]],[this.vertices[4],this.vertices[5],this.vertices[6],this.vertices[7]],[this.vertices[7],this.vertices[6],this.vertices[1],this.vertices[0]],[this.vertices[7],this.vertices[0],this.vertices[3],this.vertices[4]],[this.vertices[1],this.vertices[6],this.vertices[5],this.vertices[2]]]}render(t,o,s){t.innerHTML="";for(let i=0,n=this.faces.length;i<n;i++){const h=this.faces[i];let r=y(h[0]),l=`<path d="M${r.x+o} ${-r.y+s}`;for(let c=1,u=h.length;c<u;c++)r=y(h[c]),l+=` L ${r.x+o} ${-r.y+s}`;l+=' Z" fill="rgba(10, 10, 10, .1)" stroke="rgba(0, 0, 0, .1)">',t.innerHTML+=l}}}const y=({x:e,z:t})=>new m(e,t);function z(e,t=document.body){return t.querySelector(e)}const v=(e,t,o,s)=>{const i=Math.cos(o),n=Math.sin(o),h=Math.cos(s),r=Math.sin(s),l=e.x-t.x,c=e.y-t.y,u=e.z-t.z;e.x=i*l-n*h*c+n*r*u+t.x,e.y=n*l+i*h*c-i*r*u+t.y,e.z=r*c+h*u+t.z};onload=()=>{const e=z("svg"),t=e.width.baseVal.value,o=e.height.baseVal.value,s=t/2,i=o/2,n=new a(0,i,0),h=new b(n,i),r={down:!1,x:0,y:0},l=()=>{for(let c=0,u=8;c<u;c++)v(h.vertices[c],n,Math.PI/270,Math.PI/450);h.render(e,s,i),r.down||requestAnimationFrame(l)};h.render(e,s,i),e.onmousedown=c=>{r.down=!0,r.x=c.clientX,r.y=c.clientY},e.onmousemove=c=>{if(r.down){const u=(c.clientX-r.x)*Math.PI/360,p=(c.clientY-r.y)*Math.PI/180;for(let f=0,w=8;f<w;f++)v(h.vertices[f],n,u,p);r.x=c.clientX,r.y=c.clientY,h.render(e,s,i)}},e.onmouseup=()=>{setTimeout(()=>{r.down=!1,requestAnimationFrame(l)},200)},requestAnimationFrame(l)};