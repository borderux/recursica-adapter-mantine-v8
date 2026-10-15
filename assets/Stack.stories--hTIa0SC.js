import{j as t}from"./iframe-WyAdfSWE.js";import{S as i}from"./Stack-BfCfwJQt.js";import{B as e}from"./Button-dONdEQwY.js";import{T as S}from"./Text-DlW0ZJCQ.js";import"./preload-helper-Dp1pzeXC.js";import"./factory-CmhMXKfj.js";import"./get-size-mDPUu_LF.js";import"./Loader-D4YOIoRh.js";import"./Loader-BeOhnHCa.js";import"./polymorphic-factory-CVZWHG4D.js";import"./Transition-BYQ_R-ib.js";import"./index-Cqboks1q.js";import"./index-BTeLv4DN.js";import"./use-reduced-motion-C39Xs56O.js";import"./UnstyledButton-GuAYVm08.js";import"./Text-L2EylKmv.js";const C={title:"UI-Kit/Stack",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Stack is a flex vertical layout container that maps directly to Mantine's Stack component allowing safe layout property passing."}}},args:{gap:"rec-default",align:"stretch",justify:"flex-start"},argTypes:{gap:{control:"select",options:["rec-none","rec-sm","rec-default","rec-md","rec-lg","rec-xl","rec-2xl","xs","sm","md","lg","xl"],description:"Gap between elements"},align:{control:"select",options:["flex-start","center","flex-end","stretch"],description:"Align-items property"},justify:{control:"select",options:["flex-start","center","flex-end","space-between","space-around"],description:"Justify-content property"},defaultChecked:{table:{disable:!0}}}},n={render:({withLayer:o,layer:c,...r})=>t.jsxs(i,{...r,children:[t.jsx(e,{variant:"solid",children:"Primary Block"}),t.jsx(e,{variant:"outline",children:"Secondary Block"}),t.jsx(S,{children:"Text element within Stack"})]})},a={args:{gap:"rec-sm"},render:({withLayer:o,layer:c,...r})=>t.jsxs(i,{...r,children:[t.jsx(e,{variant:"solid",children:"Item 1"}),t.jsx(e,{variant:"solid",children:"Item 2"}),t.jsx(e,{variant:"solid",children:"Item 3"})]})},s={args:{gap:"rec-xl"},render:({withLayer:o,layer:c,...r})=>t.jsxs(i,{...r,children:[t.jsx(e,{variant:"solid",children:"Item 1"}),t.jsx(e,{variant:"solid",children:"Item 2"}),t.jsx(e,{variant:"solid",children:"Item 3"})]})};var l,p,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Stack {...args}>
      <Button variant="solid">Primary Block</Button>
      <Button variant="outline">Secondary Block</Button>
      <Text>Text element within Stack</Text>
    </Stack>
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    gap: "rec-sm"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Stack {...args}>
      <Button variant="solid">Item 1</Button>
      <Button variant="solid">Item 2</Button>
      <Button variant="solid">Item 3</Button>
    </Stack>
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var y,g,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    gap: "rec-xl"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Stack {...args}>
      <Button variant="solid">Item 1</Button>
      <Button variant="solid">Item 2</Button>
      <Button variant="solid">Item 3</Button>
    </Stack>
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const J=["Default","StaticGapSmall","StaticGapLarge"];export{n as Default,s as StaticGapLarge,a as StaticGapSmall,J as __namedExportsOrder,C as default};
