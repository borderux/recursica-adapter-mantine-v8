import{j as e,b as k}from"./iframe-Cuo_YLYE.js";import{T as t}from"./Text-C-W-PEtZ.js";import"./preload-helper-Dp1pzeXC.js";import"./factory-C1pJTgT6.js";import"./Text-CAgTEuTG.js";import"./get-size-BR9VtkmX.js";import"./polymorphic-factory-CSYE6ViW.js";const w=["body","caption","overline"],D=Object.keys(k.brand.typography).filter(n=>!/^h[1-6]$/.test(n)&&!w.includes(n)).sort(),V={title:"UI-Kit/Text",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The standard `<Text>` component controls common body sizing scales and implicit paragraphs governed by the active theme layer. For semantic headings (`h1` through `h6`), use `<Heading>` instead."}}},argTypes:{variant:{control:"select",options:[...w,...D],description:"Controls the standard logical boundary definitions natively extracted from Figma."},color:{control:"select",options:["default","warning","alert","success"],description:"Semantic text color, bound to the active layer's text-element tokens via `data-color`."},emphasis:{control:"inline-radio",options:["high","low"],description:"Emphasis level, bound to the theme's text-emphasis opacity tokens via `data-emphasis`."}}},s={args:{variant:"body",children:"This is standard body typography controlled by the central UI-kit boundaries exclusively."},render:({...n})=>e.jsx(t,{...n})},a={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{variant:"body",children:"Body (Base paragraph and generic information flow)"}),e.jsx(t,{variant:"caption",children:"Caption (Data table descriptions or micro-labels)"}),e.jsx(t,{variant:"overline",children:"Overline (Card contextual pre-headers and categorical tags)"}),D.map(n=>e.jsxs(t,{variant:n,children:[n," (Custom style from brand.typography)"]},n))]})},r={args:{},parameters:{docs:{description:{story:"Semantic colors map to the active layer's text-element tokens. `default` follows the layer's base text color; `warning`, `alert`, and `success` pull their respective semantic tones."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{color:"default",children:"Default (follows the layer's base text color)"}),e.jsx(t,{color:"warning",children:"Warning (cautionary, non-blocking messaging)"}),e.jsx(t,{color:"alert",children:"Alert (errors and destructive states)"}),e.jsx(t,{color:"success",children:"Success (confirmations and positive states)"})]})},o={args:{},parameters:{docs:{description:{story:"Emphasis controls text opacity via the theme's text-emphasis tokens. `high` (the default) is solid; `low` dims the text for secondary content."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{emphasis:"high",children:"High emphasis (solid — primary reading content)"}),e.jsx(t,{emphasis:"low",children:"Low emphasis (dimmed — secondary or supporting content)"})]})},i={args:{},parameters:{docs:{description:{story:"`component` renders Text as an inline `span`, a `label` or a `div`. `h1` to `h6` throw; use `<Heading>`."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{children:"Default is a block paragraph."}),e.jsxs("div",{children:["Inline text:"," ",e.jsx(t,{component:"span",emphasis:"low",children:"a span inside a line"}),"."]}),e.jsx(t,{component:"label",children:"A label"})]})};var l,c,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "body",
    children: "This is standard body typography controlled by the central UI-kit boundaries exclusively."
  },
  render: ({
    ...args
  }) => <Text {...args} />
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,g,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var u,v,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,T,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: "\`component\` renders Text as an inline \`span\`, a \`label\` or a \`div\`. \`h1\` to \`h6\` throw; use \`<Heading>\`."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Text>Default is a block paragraph.</Text>
      <div>
        Inline text:{" "}
        <Text component="span" emphasis="low">
          a span inside a line
        </Text>
        .
      </div>
      <Text component="label">A label</Text>
    </div>
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const O=["Default","StaticVariations","Colors","Emphasis","AsElement"];export{i as AsElement,r as Colors,s as Default,o as Emphasis,a as StaticVariations,O as __namedExportsOrder,V as default};
