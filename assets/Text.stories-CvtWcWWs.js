import{j as e,b as T}from"./iframe-DB9zdNyX.js";import{T as t}from"./Text-BG2sZ7Xq.js";import"./preload-helper-Dp1pzeXC.js";import"./factory-C6GD5JkE.js";import"./Text-BEBlM8sk.js";import"./get-size-CcEVLNv4.js";import"./polymorphic-factory-B8DT0QRI.js";const f=["body","caption","overline"],b=Object.keys(T.brand.typography).filter(s=>!/^h[1-6]$/.test(s)&&!f.includes(s)).sort(),I={title:"UI-Kit/Text",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The standard `<Text>` component controls common body sizing scales and implicit paragraphs governed by the active theme layer. For semantic headings (`h1` through `h6`), use `<Heading>` instead."}}},argTypes:{variant:{control:"select",options:[...f,...b],description:"Controls the standard logical boundary definitions natively extracted from Figma."},color:{control:"select",options:["default","warning","alert","success"],description:"Semantic text color, bound to the active layer's text-element tokens via `data-color`."},emphasis:{control:"inline-radio",options:["high","low"],description:"Emphasis level, bound to the theme's text-emphasis opacity tokens via `data-emphasis`."}}},a={args:{variant:"body",children:"This is standard body typography controlled by the central UI-kit boundaries exclusively."},render:({...s})=>e.jsx(t,{...s})},r={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{variant:"body",children:"Body (Base paragraph and generic information flow)"}),e.jsx(t,{variant:"caption",children:"Caption (Data table descriptions or micro-labels)"}),e.jsx(t,{variant:"overline",children:"Overline (Card contextual pre-headers and categorical tags)"}),b.map(s=>e.jsxs(t,{variant:s,children:[s," (Custom style from brand.typography)"]},s))]})},n={args:{},parameters:{docs:{description:{story:"Semantic colors map to the active layer's text-element tokens. `default` follows the layer's base text color; `warning`, `alert`, and `success` pull their respective semantic tones."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{color:"default",children:"Default (follows the layer's base text color)"}),e.jsx(t,{color:"warning",children:"Warning (cautionary, non-blocking messaging)"}),e.jsx(t,{color:"alert",children:"Alert (errors and destructive states)"}),e.jsx(t,{color:"success",children:"Success (confirmations and positive states)"})]})},o={args:{},parameters:{docs:{description:{story:"Emphasis controls text opacity via the theme's text-emphasis tokens. `high` (the default) is solid; `low` dims the text for secondary content."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{emphasis:"high",children:"High emphasis (solid — primary reading content)"}),e.jsx(t,{emphasis:"low",children:"Low emphasis (dimmed — secondary or supporting content)"})]})};var i,c,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "body",
    children: "This is standard body typography controlled by the central UI-kit boundaries exclusively."
  },
  render: ({
    ...args
  }) => <Text {...args} />
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Text variant="body">
        Body (Base paragraph and generic information flow)
      </Text>
      <Text variant="caption">
        Caption (Data table descriptions or micro-labels)
      </Text>
      <Text variant="overline">
        Overline (Card contextual pre-headers and categorical tags)
      </Text>
      {customVariants.map(name => <Text key={name} variant={name}>
          {name} (Custom style from brand.typography)
        </Text>)}
    </div>
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,x,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var y,u,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(u=o.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const B=["Default","StaticVariations","Colors","Emphasis"];export{n as Colors,a as Default,o as Emphasis,r as StaticVariations,B as __namedExportsOrder,I as default};
