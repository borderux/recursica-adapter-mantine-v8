import{j as e}from"./iframe-3urgjRsG.js";import{P as t}from"./Popover-BVTY2lDH.js";import{B as a}from"./Button-aHv9A_2L.js";import{T as s}from"./Text-0dOjXoBB.js";import{S as y}from"./Stack-BMlOHo3e.js";import"./preload-helper-Dp1pzeXC.js";import"./Popover-BDRdQdOZ.js";import"./OptionalPortal-Cx1V2Nl3.js";import"./is-element-92jRvnoW.js";import"./factory-BBp1U83S.js";import"./index-BIepQzq4.js";import"./index-CPWJV5FU.js";import"./use-merged-ref-K31OQ-w2.js";import"./get-size-BEFPHqa0.js";import"./use-resolved-styles-api-MUSOpHB0.js";import"./DirectionProvider-BkyQoMXC.js";import"./get-floating-position-DflS0H7r.js";import"./FocusTrap-CmMfxaHU.js";import"./use-reduced-motion-BhXtmq8W.js";import"./polymorphic-factory-DLkuYm52.js";import"./Transition-Cl40JJEu.js";import"./create-safe-context-CZQEmgU2.js";import"./floating-ui.react-D03rOlCG.js";import"./use-uncontrolled-DgK4xFLE.js";import"./use-id-BMJB7UbR.js";import"./use-click-outside-CGwHMT4j.js";import"./Loader-MpSuz5Xq.js";import"./Loader-CuTsMAHS.js";import"./UnstyledButton-BAC95255.js";import"./Text-B7sgBlm7.js";const X={title:"UI-Kit/Popover",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The `Popover` component is a composable wrapper around Mantine's Popover. It displays a dropdown panel when the user clicks or interacts with a target element."}}},argTypes:{withBeak:{control:"boolean",description:"Whether to display a beak (arrow) pointing from the dropdown to the target."},position:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],description:"Dropdown position relative to target"},defaultOpened:{control:"boolean",description:"Initial opened state"}}},r={args:{withBeak:!0,position:"top"},render:({withLayer:p,layer:d,...o})=>e.jsxs(t,{width:250,...o,children:[e.jsx(t.Target,{children:e.jsx(a,{variant:"solid",children:"Toggle Popover"})}),e.jsx(t.Dropdown,{children:e.jsx(s,{size:"rec-sm",children:"This is the popover content. It can contain any elements you want to display when the user clicks the target."})})]})},n={args:{withBeak:!0,position:"top",defaultOpened:!0},parameters:{controls:{disable:!0}},render:({withLayer:p,layer:d,...o})=>e.jsx(y,{align:"center",justify:"center",style:{padding:"100px"},children:e.jsxs(t,{width:200,...o,children:[e.jsx(t.Target,{children:e.jsx(a,{variant:"solid",children:"Toggle Popover"})}),e.jsx(t.Dropdown,{children:e.jsx(s,{size:"rec-sm",children:"This is a static representation of an opened popover with a beak."})})]})})},i={args:{withBeak:!1,position:"bottom",defaultOpened:!0},parameters:{controls:{disable:!0}},render:({withLayer:p,layer:d,...o})=>e.jsx(y,{align:"center",justify:"center",style:{padding:"100px"},children:e.jsxs(t,{width:200,...o,children:[e.jsx(t.Target,{children:e.jsx(a,{variant:"outline",children:"Bottom Popover"})}),e.jsx(t.Dropdown,{children:e.jsx(s,{size:"rec-sm",children:"This popover is positioned at the bottom and has no beak."})})]})})};var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    withBeak: true,
    position: "top"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({
    withLayer,
    layer,
    ...args
  }: PopoverStoryArgs) => {
    return <Popover width={250} {...args}>
        <Popover.Target>
          <Button variant="solid">Toggle Popover</Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="rec-sm">
            This is the popover content. It can contain any elements you want to
            display when the user clicks the target.
          </Text>
        </Popover.Dropdown>
      </Popover>;
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var h,u,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    withBeak: true,
    position: "top",
    defaultOpened: true
  },
  parameters: {
    controls: {
      disable: true
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({
    withLayer,
    layer,
    ...args
  }: PopoverStoryArgs) => {
    return <Stack align="center" justify="center" style={{
      padding: "100px"
    }}>
        <Popover width={200} {...args}>
          <Popover.Target>
            <Button variant="solid">Toggle Popover</Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Text size="rec-sm">
              This is a static representation of an opened popover with a beak.
            </Text>
          </Popover.Dropdown>
        </Popover>
      </Stack>;
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,w,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    withBeak: false,
    position: "bottom",
    defaultOpened: true
  },
  parameters: {
    controls: {
      disable: true
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({
    withLayer,
    layer,
    ...args
  }: PopoverStoryArgs) => {
    return <Stack align="center" justify="center" style={{
      padding: "100px"
    }}>
        <Popover width={200} {...args}>
          <Popover.Target>
            <Button variant="outline">Bottom Popover</Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Text size="rec-sm">
              This popover is positioned at the bottom and has no beak.
            </Text>
          </Popover.Dropdown>
        </Popover>
      </Stack>;
  }
}`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const Y=["Default","SolidDefault","WithoutBeak"];export{r as Default,n as SolidDefault,i as WithoutBeak,Y as __namedExportsOrder,X as default};
