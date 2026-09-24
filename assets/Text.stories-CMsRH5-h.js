import{j as e}from"./iframe-6ydpnfbd.js";import{T as t}from"./Text-A_QeGwPQ.js";import"./preload-helper-Dp1pzeXC.js";import"./factory-DwYpOLj6.js";import"./Text-O3AQSDFo.js";import"./get-size-L1030ReY.js";import"./polymorphic-factory-m-f2WGps.js";const D={title:"UI-Kit/Text",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The standard `<Text>` component controls common body sizing scales and implicit paragraphs governed by the active theme layer. For semantic headings (`h1` through `h6`), use `<Heading>` instead."}}},argTypes:{variant:{control:"select",options:["body","body-small","caption","overline","subtitle","subtitle-small"],description:"Controls the standard logical boundary definitions natively extracted from Figma."},color:{control:"select",options:["default","warning","alert","success"],description:"Semantic text color, bound to the active layer's text-element tokens via `data-color`."},emphasis:{control:"inline-radio",options:["high","low"],description:"Emphasis level, bound to the theme's text-emphasis opacity tokens via `data-emphasis`."}}},s={args:{variant:"body",children:"This is standard body typography controlled by the central UI-kit boundaries exclusively."},render:({...v})=>e.jsx(t,{...v})},a={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{variant:"body",children:"Body (Base paragraph and generic information flow)"}),e.jsx(t,{variant:"body-small",children:"Body Small (Compacted list items and helper blocks)"}),e.jsx(t,{variant:"caption",children:"Caption (Data table descriptions or micro-labels)"}),e.jsx(t,{variant:"overline",children:"Overline (Card contextual pre-headers and categorical tags)"}),e.jsx(t,{variant:"subtitle",children:"Subtitle (Minor sub-headers avoiding heavy display weights)"}),e.jsx(t,{variant:"subtitle-small",children:"Subtitle Small (Section anchors deep in hierarchy)"})]})},n={args:{},parameters:{docs:{description:{story:"Semantic colors map to the active layer's text-element tokens. `default` follows the layer's base text color; `warning`, `alert`, and `success` pull their respective semantic tones."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{color:"default",children:"Default (follows the layer's base text color)"}),e.jsx(t,{color:"warning",children:"Warning (cautionary, non-blocking messaging)"}),e.jsx(t,{color:"alert",children:"Alert (errors and destructive states)"}),e.jsx(t,{color:"success",children:"Success (confirmations and positive states)"})]})},r={args:{},parameters:{docs:{description:{story:"Emphasis controls text opacity via the theme's text-emphasis tokens. `high` (the default) is solid; `low` dims the text for secondary content."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{emphasis:"high",children:"High emphasis (solid — primary reading content)"}),e.jsx(t,{emphasis:"low",children:"Low emphasis (dimmed — secondary or supporting content)"})]})};var o,i,l;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "body",
    children: "This is standard body typography controlled by the central UI-kit boundaries exclusively."
  },
  render: ({
    ...args
  }) => <Text {...args} />
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Text variant="body">
        Body (Base paragraph and generic information flow)
      </Text>
      <Text variant="body-small">
        Body Small (Compacted list items and helper blocks)
      </Text>
      <Text variant="caption">
        Caption (Data table descriptions or micro-labels)
      </Text>
      <Text variant="overline">
        Overline (Card contextual pre-headers and categorical tags)
      </Text>
      <Text variant="subtitle">
        Subtitle (Minor sub-headers avoiding heavy display weights)
      </Text>
      <Text variant="subtitle-small">
        Subtitle Small (Section anchors deep in hierarchy)
      </Text>
    </div>
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,h,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      <Text color="default">Default (follows the layer's base text color)</Text>
      <Text color="warning">Warning (cautionary, non-blocking messaging)</Text>
      <Text color="alert">Alert (errors and destructive states)</Text>
      <Text color="success">Success (confirmations and positive states)</Text>
    </div>
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var u,g,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Emphasis controls text opacity via the theme's text-emphasis tokens. \`high\` (the default) is solid; \`low\` dims the text for secondary content."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Text emphasis="high">
        High emphasis (solid — primary reading content)
      </Text>
      <Text emphasis="low">
        Low emphasis (dimmed — secondary or supporting content)
      </Text>
    </div>
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const C=["Default","StaticVariations","Colors","Emphasis"];export{n as Colors,s as Default,r as Emphasis,a as StaticVariations,C as __namedExportsOrder,D as default};
