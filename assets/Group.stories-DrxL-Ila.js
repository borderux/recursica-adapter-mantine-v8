import{j as e}from"./iframe-Bg1Njw7B.js";import{G as s}from"./Group-C89Pe_Jz.js";import{B as t}from"./Button-DPrVxTPk.js";import{T as f}from"./Text-N846MEYa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-size-B5p3rMxv.js";import"./factory-Dubo2MUP.js";import"./Loader-D7XxdyAk.js";import"./Loader-ExgEbOcE.js";import"./polymorphic-factory-Buqythnn.js";import"./Transition-DLoINjT9.js";import"./index-BEawkALm.js";import"./index-xeQza6_-.js";import"./use-reduced-motion-DR_AB917.js";import"./UnstyledButton-DhjY92L6.js";import"./Text-CUQR2ZFi.js";const A={title:"UI-Kit/Group",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Group is a flex horizontal layout container that maps directly to Mantine's Group component allowing safe layout property passing."}}},args:{gap:"rec-default",align:"center",justify:"flex-start",wrap:"wrap"},argTypes:{gap:{control:"select",options:["rec-none","rec-sm","rec-default","rec-md","rec-lg","rec-xl","rec-2xl","xs","sm","md","lg","xl"],description:"Gap between elements"},align:{control:"select",options:["flex-start","center","flex-end","stretch"],description:"Align-items property"},justify:{control:"select",options:["flex-start","center","flex-end","space-between","space-around"],description:"Justify-content property"},wrap:{control:"select",options:["wrap","nowrap","wrap-reverse"],description:"Flex-wrap property"},defaultChecked:{table:{disable:!0}},rowGap:{table:{disable:!0}},columnGap:{table:{disable:!0}}}},n={render:({withLayer:i,layer:l,...r})=>e.jsxs(s,{...r,children:[e.jsx(t,{variant:"solid",children:"Primary"}),e.jsx(t,{variant:"outline",children:"Secondary"}),e.jsx(f,{children:"Text element within Group"})]})},a={args:{gap:"rec-sm"},render:({withLayer:i,layer:l,...r})=>e.jsxs(s,{...r,children:[e.jsx(t,{variant:"solid",children:"Item 1"}),e.jsx(t,{variant:"solid",children:"Item 2"}),e.jsx(t,{variant:"solid",children:"Item 3"})]})},o={args:{gap:"rec-xl"},render:({withLayer:i,layer:l,...r})=>e.jsxs(s,{...r,children:[e.jsx(t,{variant:"solid",children:"Item 1"}),e.jsx(t,{variant:"solid",children:"Item 2"}),e.jsx(t,{variant:"solid",children:"Item 3"})]})};var p,c,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Group {...args}>
      <Button variant="solid">Primary</Button>
      <Button variant="outline">Secondary</Button>
      <Text>Text element within Group</Text>
    </Group>
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    gap: "rec-sm"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Group {...args}>
      <Button variant="solid">Item 1</Button>
      <Button variant="solid">Item 2</Button>
      <Button variant="solid">Item 3</Button>
    </Group>
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var y,g,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    gap: "rec-xl"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Group {...args}>
      <Button variant="solid">Item 1</Button>
      <Button variant="solid">Item 2</Button>
      <Button variant="solid">Item 3</Button>
    </Group>
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const C=["Default","StaticGapSmall","StaticGapLarge"];export{n as Default,o as StaticGapLarge,a as StaticGapSmall,C as __namedExportsOrder,A as default};
