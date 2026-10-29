import{r as u,j as e}from"./iframe-Cfnz2xsz.js";import{P as o}from"./Panel-TGrABd3_.js";import{B as t}from"./Button-B2cpGYoK.js";import{T as h}from"./Text-DIC6fhXx.js";import"./preload-helper-Dp1pzeXC.js";import"./OptionalPortal-g-Oos-_6.js";import"./is-element-CXpHC_Wt.js";import"./factory-BHQ4Qo3a.js";import"./index-DMDajLrY.js";import"./index-BvBWpxuS.js";import"./use-merged-ref-BrLDbdAJ.js";import"./NativeScrollArea-uSwTpxuf.js";import"./get-size-CbrrOF1g.js";import"./use-reduced-motion-DtYds3A5.js";import"./use-id-BduFPUOI.js";import"./FocusTrap-DX-Mn7uM.js";import"./polymorphic-factory-s-Vro545.js";import"./CloseButton-C7hyMXrA.js";import"./UnstyledButton-Cx0Bg5TE.js";import"./Paper-xCEndryf.js";import"./Transition-BcKjRt-R.js";import"./create-safe-context-C3IE9yGh.js";import"./DirectionProvider-DloNZTxj.js";import"./ScrollArea-DRBchcM_.js";import"./floating-ui.react-BicbFjUb.js";import"./to-int-PQE0s6ay.js";import"./create-optional-context-B-F57d76.js";import"./Loader-pLBNb1mU.js";import"./Loader-DyrqvQyG.js";import"./Text-BA6O7kY1.js";const oe={title:"UI-Kit/Panel",component:o,tags:["autodocs"],argTypes:{placement:{control:"select",options:["left","right","top","bottom"],description:"Side of the screen the panel slides in from."},title:{control:"text",description:"Panel title displayed in the header."},wrapHeaderText:{control:"boolean",description:"If true, forces the header text to a single line and truncates with an ellipsis."},defaultChecked:{table:{disable:!0}},defaultValue:{table:{disable:!0}},suppressContentEditableWarning:{table:{disable:!0}},suppressHydrationWarning:{table:{disable:!0}}},parameters:{layout:"fullscreen",docs:{description:{component:`
The \`Panel\` component slides in or expands from the edge of the screen to reveal additional content or functionality. Built on Mantine's \`Drawer\`, it enforces Recursica design tokens for styling.

### Anatomy
1. **Header** — Title and close icon, remains fixed on scroll
2. **Divider** — Separates header/footer from content
3. **Body (Slot)** — Scrollable content area for custom content
4. **Footer** — Fixed action buttons (Recursica-specific)

### Usage
\`\`\`tsx
const [opened, { open, close }] = useDisclosure(false);

<Button onClick={open}>Open Panel</Button>
<Panel opened={opened} onClose={close} title="Settings" placement="right">
  Content goes here
  <Panel.Footer>
    <Button variant="outline">Cancel</Button>
    <Button variant="solid">Save</Button>
  </Panel.Footer>
</Panel>
\`\`\`
        `}}}},i={args:{placement:"right",title:"Panel Title",wrapHeaderText:!1},render:({wrapHeaderText:s,...l})=>{const[n,r]=u.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"solid",onClick:()=>r(!0),children:"Open Panel"}),e.jsxs(o,{...l,opened:n,onClose:()=>r(!1),title:"Panel Title",placement:"right",wrapHeaderText:s,children:[e.jsx(h,{children:"This is the panel body content area. Panels slide in from the edge of the screen to reveal supplementary information, navigation options, or toolsets."}),e.jsxs(o.Footer,{children:[e.jsx(t,{variant:"outline",onClick:()=>r(!1),children:"Cancel"}),e.jsx(t,{variant:"solid",children:"Save"})]})]})]})}},d={args:{placement:"left",title:"Navigation",wrapHeaderText:!1},render:({withLayer:s,layer:l,...n})=>{const[r,a]=u.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"outline",onClick:()=>a(!0),children:"Open Left Panel"}),e.jsx(o,{...n,opened:r,onClose:()=>a(!1),children:e.jsx(h,{children:"A panel sliding in from the left, commonly used for navigation menus or sidebars."})})]})}},p={args:{placement:"right",title:"Scrollable Panel",wrapHeaderText:!1},render:({withLayer:s,layer:l,...n})=>{const[r,a]=u.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"solid",onClick:()=>a(!0),children:"Open Scrollable Panel"}),e.jsxs(o,{...n,opened:r,onClose:()=>a(!1),children:[Array.from({length:20}).map((B,m)=>e.jsxs("p",{style:{marginBottom:"1rem"},children:["Paragraph ",m+1,": This is sample content to demonstrate the scrollable behavior of the panel when content exceeds the viewport height."]},m)),e.jsxs(o.Footer,{children:[e.jsx(t,{variant:"outline",onClick:()=>a(!1),children:"Close"}),e.jsx(t,{variant:"solid",children:"Apply"})]})]})]})}},c={args:{placement:"right",title:"This is a ridiculously long panel title designed to test how the header CSS handles text overflow and whether it truncates correctly or breaks the layout",wrapHeaderText:!0},render:({...s})=>{const[l,n]=u.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"solid",onClick:()=>n(!0),children:"Open Long Title Panel"}),e.jsx(o,{...s,opened:l,onClose:()=>n(!1),children:e.jsx(h,{children:"Check the header to see if the long title is handled gracefully without pushing the close button off screen."})})]})}};var g,f,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placement: "right",
    title: "Panel Title",
    wrapHeaderText: false
  },
  render: ({
    wrapHeaderText,
    ...args
  }: PanelStoryArgs) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [opened, setOpened] = useState(true);
    return <>
        <Button variant="solid" onClick={() => setOpened(true)}>
          Open Panel
        </Button>
        <Panel {...args as PanelProps} opened={opened} onClose={() => setOpened(false)} title="Panel Title" placement="right" wrapHeaderText={wrapHeaderText}>
          <Text>
            This is the panel body content area. Panels slide in from the edge
            of the screen to reveal supplementary information, navigation
            options, or toolsets.
          </Text>
          <Panel.Footer>
            <Button variant="outline" onClick={() => setOpened(false)}>
              Cancel
            </Button>
            <Button variant="solid">Save</Button>
          </Panel.Footer>
        </Panel>
      </>;
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var P,y,v;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placement: "left",
    title: "Navigation",
    wrapHeaderText: false
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({
    withLayer,
    layer,
    ...args
  }: PanelStoryArgs) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [opened, setOpened] = useState(true);
    return <>
        <Button variant="outline" onClick={() => setOpened(true)}>
          Open Left Panel
        </Button>
        <Panel {...args as PanelProps} opened={opened} onClose={() => setOpened(false)}>
          <Text>
            A panel sliding in from the left, commonly used for navigation menus
            or sidebars.
          </Text>
        </Panel>
      </>;
  }
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var b,T,C;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placement: "right",
    title: "Scrollable Panel",
    wrapHeaderText: false
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({
    withLayer,
    layer,
    ...args
  }: PanelStoryArgs) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [opened, setOpened] = useState(true);
    return <>
        <Button variant="solid" onClick={() => setOpened(true)}>
          Open Scrollable Panel
        </Button>
        <Panel {...args as PanelProps} opened={opened} onClose={() => setOpened(false)}>
          {Array.from({
          length: 20
        }).map((_, i) => <p key={i} style={{
          marginBottom: "1rem"
        }}>
              Paragraph {i + 1}: This is sample content to demonstrate the
              scrollable behavior of the panel when content exceeds the viewport
              height.
            </p>)}
          <Panel.Footer>
            <Button variant="outline" onClick={() => setOpened(false)}>
              Close
            </Button>
            <Button variant="solid">Apply</Button>
          </Panel.Footer>
        </Panel>
      </>;
  }
}`,...(C=(T=p.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var S,w,k;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placement: "right",
    title: "This is a ridiculously long panel title designed to test how the header CSS handles text overflow and whether it truncates correctly or breaks the layout",
    wrapHeaderText: true
  },
  render: ({
    ...args
  }: PanelStoryArgs) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [opened, setOpened] = useState(true);
    return <>
        <Button variant="solid" onClick={() => setOpened(true)}>
          Open Long Title Panel
        </Button>
        <Panel {...args as PanelProps} opened={opened} onClose={() => setOpened(false)}>
          <Text>
            Check the header to see if the long title is handled gracefully
            without pushing the close button off screen.
          </Text>
        </Panel>
      </>;
  }
}`,...(k=(w=c.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const ae=["Default","LeftPlacement","ScrollableContent","LongTitle"];export{i as Default,d as LeftPlacement,c as LongTitle,p as ScrollableContent,ae as __namedExportsOrder,oe as default};
