import{j as e}from"./iframe-C_4swsKb.js";import{P as t}from"./Popover-jmMDKh5A.js";import{B as a}from"./Button-C9JEJH5Z.js";import{T as s}from"./Text-t34OpoT8.js";import{S as y}from"./Stack-CVO5A7FN.js";import"./preload-helper-Dp1pzeXC.js";import"./Popover-D7n6PVR4.js";import"./OptionalPortal-DbFWPKzU.js";import"./is-element-CE6DCRht.js";import"./factory-Be_iQE9J.js";import"./index-BUbnQStI.js";import"./index-CcnPCoet.js";import"./use-merged-ref-CpCy7Rny.js";import"./get-size-CxHuhukp.js";import"./use-resolved-styles-api-BrCoB-v5.js";import"./DirectionProvider-BMPYQy1y.js";import"./get-floating-position-DcVGjabh.js";import"./FocusTrap-DP6PBnAc.js";import"./use-reduced-motion-YpqN9xh-.js";import"./polymorphic-factory-D-IoGH-G.js";import"./Transition-CUj5uHvU.js";import"./create-safe-context-DSCTvs5S.js";import"./floating-ui.react-26RgnmV6.js";import"./use-uncontrolled-CWXuz0OD.js";import"./use-id-Dvl9IUTT.js";import"./use-click-outside-D_wzOpMg.js";import"./Loader-D3n8hXz1.js";import"./Loader-ooKme9s2.js";import"./UnstyledButton-DavK4yfv.js";import"./Text-DZwGBSFS.js";const X={title:"UI-Kit/Popover",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The `Popover` component is a composable wrapper around Mantine's Popover. It displays a dropdown panel when the user clicks or interacts with a target element."}}},argTypes:{withBeak:{control:"boolean",description:"Whether to display a beak (arrow) pointing from the dropdown to the target."},position:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],description:"Dropdown position relative to target"},defaultOpened:{control:"boolean",description:"Initial opened state"}}},r={args:{withBeak:!0,position:"top"},render:({withLayer:p,layer:d,...o})=>e.jsxs(t,{width:250,...o,children:[e.jsx(t.Target,{children:e.jsx(a,{variant:"solid",children:"Toggle Popover"})}),e.jsx(t.Dropdown,{children:e.jsx(s,{size:"rec-sm",children:"This is the popover content. It can contain any elements you want to display when the user clicks the target."})})]})},n={args:{withBeak:!0,position:"top",defaultOpened:!0},parameters:{controls:{disable:!0}},render:({withLayer:p,layer:d,...o})=>e.jsx(y,{align:"center",justify:"center",style:{padding:"100px"},children:e.jsxs(t,{width:200,...o,children:[e.jsx(t.Target,{children:e.jsx(a,{variant:"solid",children:"Toggle Popover"})}),e.jsx(t.Dropdown,{children:e.jsx(s,{size:"rec-sm",children:"This is a static representation of an opened popover with a beak."})})]})})},i={args:{withBeak:!1,position:"bottom",defaultOpened:!0},parameters:{controls:{disable:!0}},render:({withLayer:p,layer:d,...o})=>e.jsx(y,{align:"center",justify:"center",style:{padding:"100px"},children:e.jsxs(t,{width:200,...o,children:[e.jsx(t.Target,{children:e.jsx(a,{variant:"outline",children:"Bottom Popover"})}),e.jsx(t.Dropdown,{children:e.jsx(s,{size:"rec-sm",children:"This popover is positioned at the bottom and has no beak."})})]})})};var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
