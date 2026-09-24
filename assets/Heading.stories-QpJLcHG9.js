import{j as e}from"./iframe-BVOQcIem.js";import{H as n}from"./Heading-B8HLOYqA.js";import"./preload-helper-Dp1pzeXC.js";import"./factory-DLkggyGX.js";const S={title:"UI-Kit/Heading",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"The semantic `<Heading>` abstraction intrinsically links pure `h1-h6` tag generation with exact Recursica design boundaries to preserve SEO and screen reader trees uniformly globally."}}},argTypes:{order:{control:"select",options:[1,2,3,4,5,6],description:"Controls the `h` tag and the resultant typographical weighting natively mapped to Recursica."},color:{control:"select",options:["default","warning","alert","success"],description:"Semantic text color, bound to the active layer's text-element tokens via `data-color`."},emphasis:{control:"inline-radio",options:["high","low"],description:"Emphasis level, bound to the theme's text-emphasis opacity tokens via `data-emphasis`."}}},r={args:{order:1,children:"Semantic H1 Document Boundary"},render:({...y})=>e.jsx(n,{...y})},a={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(n,{order:1,children:"H1 Heading"}),e.jsx(n,{order:2,children:"H2 Heading"}),e.jsx(n,{order:3,children:"H3 Heading"}),e.jsx(n,{order:4,children:"H4 Heading"}),e.jsx(n,{order:5,children:"H5 Heading"}),e.jsx(n,{order:6,children:"H6 Heading"})]})},s={args:{},parameters:{docs:{description:{story:"Semantic colors map to the active layer's text-element tokens. `default` follows the layer's base text color; `warning`, `alert`, and `success` pull their respective semantic tones."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{order:2,color:"default",children:"Default heading"}),e.jsx(n,{order:2,color:"warning",children:"Warning heading"}),e.jsx(n,{order:2,color:"alert",children:"Alert heading"}),e.jsx(n,{order:2,color:"success",children:"Success heading"})]})},i={args:{},parameters:{docs:{description:{story:"Emphasis controls text opacity via the theme's text-emphasis tokens. `high` (the default) is solid; `low` dims the heading for secondary content."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{order:2,emphasis:"high",children:"High emphasis heading"}),e.jsx(n,{order:2,emphasis:"low",children:"Low emphasis heading"})]})};var o,t,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    order: 1,
    children: "Semantic H1 Document Boundary"
  },
  render: ({
    ...args
  }) => <Heading {...args} />
}`,...(d=(t=r.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var c,l,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>
      <Heading order={1}>H1 Heading</Heading>
      <Heading order={2}>H2 Heading</Heading>
      <Heading order={3}>H3 Heading</Heading>
      <Heading order={4}>H4 Heading</Heading>
      <Heading order={5}>H5 Heading</Heading>
      <Heading order={6}>H6 Heading</Heading>
    </div>
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var p,h,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Semantic colors map to the active layer's text-element tokens. \`default\` follows the layer's base text color; \`warning\`, \`alert\`, and \`success\` pull their respective semantic tones."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Heading order={2} color="default">
        Default heading
      </Heading>
      <Heading order={2} color="warning">
        Warning heading
      </Heading>
      <Heading order={2} color="alert">
        Alert heading
      </Heading>
      <Heading order={2} color="success">
        Success heading
      </Heading>
    </div>
}`,...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var H,u,x;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Emphasis controls text opacity via the theme's text-emphasis tokens. \`high\` (the default) is solid; \`low\` dims the heading for secondary content."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Heading order={2} emphasis="high">
        High emphasis heading
      </Heading>
      <Heading order={2} emphasis="low">
        Low emphasis heading
      </Heading>
    </div>
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const D=["Default","StaticVariations","Colors","Emphasis"];export{s as Colors,r as Default,i as Emphasis,a as StaticVariations,D as __namedExportsOrder,S as default};
