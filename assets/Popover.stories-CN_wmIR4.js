import{j as e}from"./iframe-wbpz4Ofz.js";import{P as t}from"./Popover-BB7xyepS.js";import{B as a}from"./Button-BHHxhqh_.js";import{T as s}from"./Text-tj5IOhay.js";import{S as y}from"./Stack-BR49ckKq.js";import"./preload-helper-Dp1pzeXC.js";import"./Popover-DRzikZMY.js";import"./OptionalPortal-DTmMj3BW.js";import"./is-element-71N0HPOe.js";import"./factory-D0O7M9kb.js";import"./index-BBAGbX6o.js";import"./index-DvWHVT7f.js";import"./use-merged-ref-B4pjC5sE.js";import"./get-size-C8dCT0cm.js";import"./use-resolved-styles-api-DRLGn2JB.js";import"./DirectionProvider-BI6oZLaf.js";import"./get-floating-position-BOHVP1A1.js";import"./FocusTrap-CNr39ZE8.js";import"./use-reduced-motion-Cwnm5-qZ.js";import"./polymorphic-factory-P3pCghZ1.js";import"./Transition-C-cfndJa.js";import"./create-safe-context-Dv0eRFkQ.js";import"./floating-ui.react-wxq6hAZa.js";import"./use-uncontrolled-BOFQ5ag3.js";import"./use-id-CYeRVk7f.js";import"./use-click-outside-CF9u3M-u.js";import"./Loader-DG4utGGv.js";import"./Loader-CIoaKJgu.js";import"./UnstyledButton-B8VDyNbq.js";import"./Text-B8oo6abG.js";const X={title:"UI-Kit/Popover",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The `Popover` component is a composable wrapper around Mantine's Popover. It displays a dropdown panel when the user clicks or interacts with a target element."}}},argTypes:{withBeak:{control:"boolean",description:"Whether to display a beak (arrow) pointing from the dropdown to the target."},position:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],description:"Dropdown position relative to target"},defaultOpened:{control:"boolean",description:"Initial opened state"}}},r={args:{withBeak:!0,position:"top"},render:({withLayer:p,layer:d,...o})=>e.jsxs(t,{width:250,...o,children:[e.jsx(t.Target,{children:e.jsx(a,{variant:"solid",children:"Toggle Popover"})}),e.jsx(t.Dropdown,{children:e.jsx(s,{size:"rec-sm",children:"This is the popover content. It can contain any elements you want to display when the user clicks the target."})})]})},n={args:{withBeak:!0,position:"top",defaultOpened:!0},parameters:{controls:{disable:!0}},render:({withLayer:p,layer:d,...o})=>e.jsx(y,{align:"center",justify:"center",style:{padding:"100px"},children:e.jsxs(t,{width:200,...o,children:[e.jsx(t.Target,{children:e.jsx(a,{variant:"solid",children:"Toggle Popover"})}),e.jsx(t.Dropdown,{children:e.jsx(s,{size:"rec-sm",children:"This is a static representation of an opened popover with a beak."})})]})})},i={args:{withBeak:!1,position:"bottom",defaultOpened:!0},parameters:{controls:{disable:!0}},render:({withLayer:p,layer:d,...o})=>e.jsx(y,{align:"center",justify:"center",style:{padding:"100px"},children:e.jsxs(t,{width:200,...o,children:[e.jsx(t.Target,{children:e.jsx(a,{variant:"outline",children:"Bottom Popover"})}),e.jsx(t.Dropdown,{children:e.jsx(s,{size:"rec-sm",children:"This popover is positioned at the bottom and has no beak."})})]})})};var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
