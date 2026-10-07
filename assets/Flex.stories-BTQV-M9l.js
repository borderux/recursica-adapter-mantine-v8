import{j as e}from"./iframe-_5mOgpL0.js";import{F as i}from"./Flex-DtCyg6xR.js";import{B as t}from"./Button-C-MmHoE8.js";import{T as w}from"./Text-CT3uQj0f.js";import"./preload-helper-Dp1pzeXC.js";import"./factory-CnErkkTv.js";import"./polymorphic-factory-CgZ4sTrW.js";import"./Loader-BGu5DgBC.js";import"./Loader-DwhXG5Jc.js";import"./get-size-BChqdjww.js";import"./Transition-gU1w1aja.js";import"./index-BRi-jA8J.js";import"./index-oACYtkBY.js";import"./use-reduced-motion-Cu67p2z5.js";import"./UnstyledButton-KsA8bYuI.js";import"./Text-CB1ciLm4.js";const E={title:"UI-Kit/Flex",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Flex is a bare-metal flex container that maps directly to Mantine's Flex component, providing unopinionated control over direction, alignment, and wrapping."}}},args:{gap:"rec-default",align:"center",justify:"flex-start",direction:"row",wrap:"wrap"},argTypes:{gap:{control:"select",options:["rec-none","rec-sm","rec-default","rec-md","rec-lg","rec-xl","rec-2xl","xs","sm","md","lg","xl"],description:"Gap between elements"},direction:{control:"select",options:["row","column","row-reverse","column-reverse"],description:"Flex-direction property"},align:{control:"select",options:["flex-start","center","flex-end","stretch"],description:"Align-items property"},justify:{control:"select",options:["flex-start","center","flex-end","space-between","space-around"],description:"Justify-content property"},wrap:{control:"select",options:["wrap","nowrap","wrap-reverse"],description:"Flex-wrap property"},defaultChecked:{table:{disable:!0}},rowGap:{table:{disable:!0}},columnGap:{table:{disable:!0}}}},n={render:({withLayer:s,layer:l,...r})=>e.jsxs(i,{...r,children:[e.jsx(t,{variant:"solid",children:"Block A"}),e.jsx(t,{variant:"outline",children:"Block B"}),e.jsx(w,{children:"Text inside Flex"})]})},o={args:{gap:"rec-sm",direction:"column"},render:({withLayer:s,layer:l,...r})=>e.jsxs(i,{...r,children:[e.jsx(t,{variant:"solid",children:"Item 1"}),e.jsx(t,{variant:"solid",children:"Item 2"}),e.jsx(t,{variant:"solid",children:"Item 3"})]})},a={args:{gap:"rec-xl",direction:"row"},render:({withLayer:s,layer:l,...r})=>e.jsxs(i,{...r,children:[e.jsx(t,{variant:"solid",children:"Item 1"}),e.jsx(t,{variant:"solid",children:"Item 2"}),e.jsx(t,{variant:"solid",children:"Item 3"})]})};var c,p,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Flex {...args}>
      <Button variant="solid">Block A</Button>
      <Button variant="outline">Block B</Button>
      <Text>Text inside Flex</Text>
    </Flex>
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    gap: "rec-sm",
    direction: "column"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Flex {...args}>
      <Button variant="solid">Item 1</Button>
      <Button variant="solid">Item 2</Button>
      <Button variant="solid">Item 3</Button>
    </Flex>
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var y,g,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    gap: "rec-xl",
    direction: "row"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Flex {...args}>
      <Button variant="solid">Item 1</Button>
      <Button variant="solid">Item 2</Button>
      <Button variant="solid">Item 3</Button>
    </Flex>
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const _=["Default","StaticGapSmallColumn","StaticGapLargeRow"];export{n as Default,a as StaticGapLargeRow,o as StaticGapSmallColumn,_ as __namedExportsOrder,E as default};
