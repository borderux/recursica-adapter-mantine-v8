import{r as u,j as e}from"./iframe--KGMDk5t.js";import{P as r}from"./Panel-DbZzVQyH.js";import{B as n}from"./Button-D6QFJhbQ.js";import{T as h}from"./Text-BhXL0kqB.js";import"./preload-helper-Dp1pzeXC.js";import"./OptionalPortal-CLn0gE28.js";import"./is-element-x2vLHK_3.js";import"./factory-ABgsRkWH.js";import"./index-DScwokdD.js";import"./index-CkA7vTuO.js";import"./use-merged-ref-b3hYp62x.js";import"./NativeScrollArea-ajt1SAtJ.js";import"./get-size-DCmSQVoI.js";import"./use-reduced-motion-CmRrxXe2.js";import"./use-id-DPEkXaR1.js";import"./FocusTrap-BpwzGsYy.js";import"./polymorphic-factory-CnyjHH4V.js";import"./CloseButton-CdwyAK9I.js";import"./UnstyledButton-DvmmGyPS.js";import"./Paper-jeIrGhWs.js";import"./Transition-Con9tBlC.js";import"./create-safe-context-CObDfbLR.js";import"./DirectionProvider-DIiVyXav.js";import"./ScrollArea-BSMqDDqW.js";import"./floating-ui.react-Zc0nxDfu.js";import"./to-int-PQE0s6ay.js";import"./create-optional-context-WDtF8Ecc.js";import"./Loader-DQAk73Re.js";import"./Loader-BARjouV9.js";import"./Text-Czyx6kRQ.js";const re={title:"UI-Kit/Panel",component:r,tags:["autodocs"],argTypes:{placement:{control:"select",options:["left","right","top","bottom"],description:"Side of the screen the panel slides in from."},title:{control:"text",description:"Panel title displayed in the header."},withCloseButton:{control:"boolean",description:"Whether to display the close button in the header."},wrapHeaderText:{control:"boolean",description:"If true, forces the header text to a single line and truncates with an ellipsis."},defaultChecked:{table:{disable:!0}},defaultValue:{table:{disable:!0}},suppressContentEditableWarning:{table:{disable:!0}},suppressHydrationWarning:{table:{disable:!0}}},parameters:{layout:"fullscreen",docs:{description:{component:`
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
        `}}}},i={args:{placement:"right",title:"Panel Title",withCloseButton:!0,wrapHeaderText:!1},render:({wrapHeaderText:s,...l})=>{const[t,o]=u.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"solid",onClick:()=>o(!0),children:"Open Panel"}),e.jsxs(r,{...l,opened:t,onClose:()=>o(!1),title:"Panel Title",placement:"right",wrapHeaderText:s,children:[e.jsx(h,{children:"This is the panel body content area. Panels slide in from the edge of the screen to reveal supplementary information, navigation options, or toolsets."}),e.jsxs(r.Footer,{children:[e.jsx(n,{variant:"outline",onClick:()=>o(!1),children:"Cancel"}),e.jsx(n,{variant:"solid",children:"Save"})]})]})]})}},d={args:{placement:"left",title:"Navigation",withCloseButton:!0,wrapHeaderText:!1},render:({withLayer:s,layer:l,...t})=>{const[o,a]=u.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",onClick:()=>a(!0),children:"Open Left Panel"}),e.jsx(r,{...t,opened:o,onClose:()=>a(!1),children:e.jsx(h,{children:"A panel sliding in from the left, commonly used for navigation menus or sidebars."})})]})}},p={args:{placement:"right",title:"Scrollable Panel",withCloseButton:!0,wrapHeaderText:!1},render:({withLayer:s,layer:l,...t})=>{const[o,a]=u.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"solid",onClick:()=>a(!0),children:"Open Scrollable Panel"}),e.jsxs(r,{...t,opened:o,onClose:()=>a(!1),children:[Array.from({length:20}).map((k,m)=>e.jsxs("p",{style:{marginBottom:"1rem"},children:["Paragraph ",m+1,": This is sample content to demonstrate the scrollable behavior of the panel when content exceeds the viewport height."]},m)),e.jsxs(r.Footer,{children:[e.jsx(n,{variant:"outline",onClick:()=>a(!1),children:"Close"}),e.jsx(n,{variant:"solid",children:"Apply"})]})]})]})}},c={args:{placement:"right",title:"This is a ridiculously long panel title designed to test how the header CSS handles text overflow and whether it truncates correctly or breaks the layout",withCloseButton:!0,wrapHeaderText:!0},render:({...s})=>{const[l,t]=u.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"solid",onClick:()=>t(!0),children:"Open Long Title Panel"}),e.jsx(r,{...s,opened:l,onClose:()=>t(!1),children:e.jsx(h,{children:"Check the header to see if the long title is handled gracefully without pushing the close button off screen."})})]})}};var g,f,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placement: "right",
    title: "Panel Title",
    withCloseButton: true,
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
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var P,C,y;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placement: "left",
    title: "Navigation",
    withCloseButton: true,
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
}`,...(y=(C=d.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var b,v,w;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placement: "right",
    title: "Scrollable Panel",
    withCloseButton: true,
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
}`,...(w=(v=p.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var B,T,S;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placement: "right",
    title: "This is a ridiculously long panel title designed to test how the header CSS handles text overflow and whether it truncates correctly or breaks the layout",
    withCloseButton: true,
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
}`,...(S=(T=c.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const ae=["Default","LeftPlacement","ScrollableContent","LongTitle"];export{i as Default,d as LeftPlacement,c as LongTitle,p as ScrollableContent,ae as __namedExportsOrder,re as default};
