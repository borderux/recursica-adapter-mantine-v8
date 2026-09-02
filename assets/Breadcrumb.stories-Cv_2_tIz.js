import{j as e}from"./iframe-ZcXixS9d.js";import{B as c}from"./Breadcrumb-BIeFqg8J.js";import{L as a}from"./Link-PeeCTcNk.js";import"./preload-helper-Dp1pzeXC.js";import"./is-element-BZ8ZI854.js";import"./get-size-CvmK56z6.js";import"./factory-DcCQHX1d.js";import"./polymorphic-factory-wbV0Y1xi.js";import"./Text-DpgESdzF.js";const w={title:"UI-Kit/Breadcrumb",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"**Proper usage** (see `Default`): every crumb except the last is a `Link`; the last crumb — the current page — is plain text (e.g. a `<span>`), not a link. `Breadcrumb` does its best to neutralize a `Link` passed as the last item anyway (see `LastItemAsLink`), but that's a safety net, not something to rely on — see BREADCRUMB_IMPLEMENTATION_NOTES.md."}}},argTypes:{children:{table:{disable:!0}},items:{control:"object",description:"Array of string labels used to dynamically generate the interactive Breadcrumb nodes.",table:{category:"Story Controls"}},separator:{control:"text",description:"Custom separator between items"}},args:{items:["Home","Components","Breadcrumbs"]},render:({items:n,children:f,...L})=>{const k=n?n.map((i,o)=>o===n.length-1?e.jsx("span",{children:i},o):e.jsx(a,{href:"#",children:i},o)):f;return e.jsx(c,{children:k,...L})}},r={args:{items:["Dashboard","Settings","Security"]}},t={args:{items:["Root","Branch","Leaf"],separator:"→"}},s={name:"Last Item As Link (Incorrect Usage)",args:{items:void 0,children:[e.jsx(a,{href:"#",children:"Dashboard"},"dashboard"),e.jsx(a,{href:"#",children:"Settings"},"settings"),e.jsx(a,{href:"#",children:"Security"},"security")]},parameters:{docs:{description:{story:"Incorrect usage, kept as a story to prove Breadcrumb still handles it: the last crumb is a `Link`, but Breadcrumb adds `aria-current=\"page\"`, strips its `href`/`onClick`, drops it from the tab order, and the CSS reset removes Link's color/underline — it renders identically to `Default`'s plain-text current item. Don't rely on this; pass plain text for the last crumb instead."}}}};var m,d,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: ["Dashboard", "Settings", "Security"]
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,u,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: ["Root", "Branch", "Leaf"],
    separator: "→"
  }
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,g,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Last Item As Link (Incorrect Usage)",
  args: {
    // Bypass the \`items\` convenience prop (which always renders the last crumb as a span) to
    // demonstrate what happens if a caller wraps every crumb, including the last, in a \`Link\`.
    items: undefined,
    children: [<Link href="#" key="dashboard">
        Dashboard
      </Link>, <Link href="#" key="settings">
        Settings
      </Link>, <Link href="#" key="security">
        Security
      </Link>]
  },
  parameters: {
    docs: {
      description: {
        story: "Incorrect usage, kept as a story to prove Breadcrumb still handles it: the last " + 'crumb is a \`Link\`, but Breadcrumb adds \`aria-current="page"\`, strips its \`href\`/' + "\`onClick\`, drops it from the tab order, and the CSS reset removes Link's color/" + "underline — it renders identically to \`Default\`'s plain-text current item. Don't " + "rely on this; pass plain text for the last crumb instead."
      }
    }
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const E=["Default","CustomSeparator","LastItemAsLink"];export{t as CustomSeparator,r as Default,s as LastItemAsLink,E as __namedExportsOrder,w as default};
