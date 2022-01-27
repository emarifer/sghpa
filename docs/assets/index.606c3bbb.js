import{n as l,L as f,c as h,u as m,j as g,a as e,R as v,b as n,S as b,d as s,e as y,F as x,f as L,g as R}from"./vendor.a0546633.js";const w=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&p(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function p(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}};w();var N="/sghpa/assets/logo.ecc203fb.svg";const S=l(f)`
	color: white;
	font-size: 1.5rem;
	text-decoration: none;
	text-transform: uppercase;
	position: relative;
	/* padding-bottom: 3px;
	border-bottom: 3px solid transparent; */

	:after {
		content: '';
		width: 3.5rem;
		height: 5px;
		background: #01cfa9;
		opacity: 0;
		position: absolute;
		bottom: -8px;
		left: 0;
		transform: translateX(30vw);
		transition: all 0.3s ease-in-out;
	}
`,j=h`
	color: #01cfa9;
	/* border-bottom: 3px solid #01cfa9;
	transition: all 0.8s ease-in-out; */

	:after {
		opacity: 1;
		transform: translateX(0px);
		transition: all 0.2s ease-in-out;
	}
`,d=({href:i,children:r})=>{const[a]=m(i);return g(S,{href:i,css:a&&j,children:r})},u=l.li`
	list-style: none;
	margin: 1rem;
`,A=l.div`
	display: flex;
	flex-direction: row;
`,O=()=>e(v,{base:"/sghpa/",children:n(A,{children:[n("nav",{children:[e("img",{src:N,alt:"React Logo"}),n("ul",{children:[e(u,{children:e(d,{href:"",children:"Home"})}),e(u,{children:e(d,{href:"about",children:"About"})}),e(u,{children:e(d,{href:"developers",children:"Developers"})})]})]}),n(b,{children:[e(s,{path:"/",component:()=>e("h1",{children:"Home Page"})}),e(s,{path:"about",component:()=>e("h1",{children:"About Page"})}),e(s,{path:"developers",component:()=>e("h1",{children:"Developers Page"})}),e(s,{children:e(y,{to:"."})})]})]})}),P=()=>e(x,{children:e(O,{})});L.render(e(R.StrictMode,{children:e(P,{})}),document.getElementById("root"));
