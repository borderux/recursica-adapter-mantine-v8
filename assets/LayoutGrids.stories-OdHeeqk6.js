import{j as p,b as h}from"./iframe-BrPqJZwI.js";import"./preload-helper-Dp1pzeXC.js";const f=/^\{([^}]+)\}$/;function y(s,n){const e=n.split(".");let t=s;for(const l of e){if(t==null||typeof t!="object")return;t=t[l]}return t}function v(s,n,e=0){if(e>5)return s;const t=s.trim().match(f);if(!t)return s;const l=t[1];let o=y(n,l);if(o==null){const a=l.replace(/\.size\./,".sizes.");o=y(n,a)}if(o!=null&&typeof o=="object"&&"$value"in o){const a=o.$value;if(typeof a=="string"&&f.test(a))return v(a,n,e+1)}return o}function b(s){if(s==null||typeof s!="object")return null;const e=s.$value;if(e!=null&&typeof e=="object"&&"value"in e&&"unit"in e){const t=e;if(t.unit==="px")return t.value}return typeof e=="number"?e:null}function $(s,n){const e=s.brand["layout-grids"];return Object.entries(e).filter(([t])=>!t.startsWith("$")).filter(([,t])=>t&&typeof t=="object").map(([t,l])=>{const o=l["max-width"],a=(o==null?void 0:o.$value)!=null&&typeof o.$value=="number"?o.$value:800,r=l.columns,m=(r==null?void 0:r.$value)!=null&&typeof r.$value=="number"?r.$value:6;let d=16;const u=l.gutter,c=u==null?void 0:u.$value;if(typeof c=="string"&&f.test(c)){const x=v(c,n),i=b(x);i!=null&&(d=i)}return{name:t,maxWidthPx:a,columns:m,gutterPx:d}})}function P(s){const n=s.find(i=>i.name==="desktop"),e=s.find(i=>i.name==="tablet"),t=s.find(i=>i.name==="mobile"),l=(n==null?void 0:n.maxWidthPx)??1280,o=(e==null?void 0:e.maxWidthPx)??810,a=(t==null?void 0:t.maxWidthPx)??480,r=(n==null?void 0:n.columns)??6,m=(n==null?void 0:n.gutterPx)??16,d=(e==null?void 0:e.columns)??6,u=(e==null?void 0:e.gutterPx)??16,c=(t==null?void 0:t.columns)??4,x=(t==null?void 0:t.gutterPx)??16;return`
    .layout-grids-responsive-demo {
      display: grid;
      grid-template-columns: repeat(var(--layout-cols), 1fr);
      gap: var(--layout-gutter);
      max-width: var(--layout-max-width);
      margin: 0 auto;
    }
    /* Mobile: default (< 810px) */
    .layout-grids-responsive-demo {
      --layout-cols: ${c};
      --layout-gutter: ${x}px;
      --layout-max-width: ${a}px;
    }
    /* Tablet: 810px to < 1280px */
    @media (min-width: ${o}px) and (max-width: ${l-1}px) {
      .layout-grids-responsive-demo {
        --layout-cols: ${d};
        --layout-gutter: ${u}px;
        --layout-max-width: ${o}px;
      }
    }
    /* Desktop: 1280px and above */
    @media (min-width: ${l}px) {
      .layout-grids-responsive-demo {
        --layout-cols: ${r};
        --layout-gutter: ${m}px;
        --layout-max-width: ${l}px;
      }
    }
  `}function _(){const{brandJson:s,tokensJson:n}=h(),e={...n,brand:s==null?void 0:s.brand},t=$(s,e),l=t.find(i=>i.name==="desktop"),o=t.find(i=>i.name==="tablet"),a=t.find(i=>i.name==="mobile"),r=(l==null?void 0:l.maxWidthPx)??1280,m=(o==null?void 0:o.maxWidthPx)??810,d=(l==null?void 0:l.columns)??6,u=(o==null?void 0:o.columns)??6,c=(a==null?void 0:a.columns)??4,x=Math.max(d*2,u*2,c*2);return p.jsxs("div",{style:{padding:24,fontFamily:"system-ui, sans-serif",display:"flex",flexDirection:"column",gap:24},children:[p.jsx("style",{dangerouslySetInnerHTML:{__html:P(t)}}),p.jsxs("p",{style:{margin:0,fontSize:14,color:"#666"},children:["One responsive grid: desktop ≥",r,"px (",d," ","cols), tablet ",m,"–",r-1,"px (",u," cols), mobile <",m,"px (",c," cols). Resize the viewport to see the grid change."]}),p.jsx("div",{className:"layout-grids-responsive-demo",children:Array.from({length:x},(i,g)=>p.jsx("div",{style:{minHeight:48,backgroundColor:"rgba(0,0,0,0.08)",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"#666"},children:g+1},g))})]})}const k={title:"Theme/Layout Grids",parameters:{layout:"padded"},tags:["autodocs"]},w={render:()=>p.jsx(_,{})},C=["Default"];export{w as Default,C as __namedExportsOrder,k as default};
