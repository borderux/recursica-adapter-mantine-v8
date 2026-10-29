import{j as e}from"./iframe-Cfnz2xsz.js";import{D as I}from"./DatePicker-BE-U8OJI.js";import{f as W}from"./commonArgTypes-DcjzA9l3.js";import"./preload-helper-Dp1pzeXC.js";import"./WithReadOnlyWrapper-CtIZc7ON.js";import"./FormControlWrapper-r7904NJk.js";import"./Label-C-itJ1Wp.js";import"./get-size-CbrrOF1g.js";import"./factory-BHQ4Qo3a.js";import"./polymorphic-factory-s-Vro545.js";import"./create-optional-context-B-F57d76.js";import"./use-resolved-styles-api-UdNco40i.js";import"./CloseButton-C7hyMXrA.js";import"./UnstyledButton-Cx0Bg5TE.js";import"./use-id-BduFPUOI.js";import"./AssistiveElement-avVLvjyy.js";import"./ReadOnlyField-ewki8xy5.js";import"./use-uncontrolled-CIQQYSfn.js";import"./use-disclosure-CR15PtUo.js";import"./AccordionChevron-pYikOgHt.js";import"./clamp-DTmYCdls.js";import"./use-input-props-C9r1PY9-.js";import"./Modal-ASQaWoe1.js";import"./OptionalPortal-g-Oos-_6.js";import"./is-element-CXpHC_Wt.js";import"./index-DMDajLrY.js";import"./index-BvBWpxuS.js";import"./use-merged-ref-BrLDbdAJ.js";import"./NativeScrollArea-uSwTpxuf.js";import"./use-reduced-motion-DtYds3A5.js";import"./FocusTrap-DX-Mn7uM.js";import"./Paper-xCEndryf.js";import"./Transition-BcKjRt-R.js";import"./create-safe-context-C3IE9yGh.js";import"./ScrollArea-DRBchcM_.js";import"./floating-ui.react-BicbFjUb.js";import"./DirectionProvider-DloNZTxj.js";import"./to-int-PQE0s6ay.js";import"./Popover-Dt3NLbJF.js";import"./get-floating-position-BIkLOtO6.js";import"./use-click-outside-DZ0RPPWr.js";const De={title:"UI-Kit/DatePicker",component:I,tags:["autodocs"],parameters:{docs:{description:{component:`
The \`DatePicker\` primitive provides a unified calendar date selection input integrated directly into the \`FormControlWrapper\` architecture.

### Architectural Decoupling
Recursica overrides the internal Mantine \`DatePickerInput\` wrapper defaults, safely injecting the date picker into our rigid structural layout systems. State modifiers (e.g. Focus, Errors, ReadOnly) hook seamlessly back onto our native CSS mapping architecture.

### Examples
Always structure horizontal architectures via the generic \`formLayout\` parameter.
\`\`\`tsx
<DatePicker 
  label="Start Date" 
  assistiveText="Select the deployment kick-off date." 
  formLayout="stacked" 
/>
\`\`\`
`}}},argTypes:{...W,disabled:{control:"boolean",description:"Maps the formal disabled variable states structurally to the input core."},error:{control:"text",description:"Applies the strict error string boundary rendering invalid structures seamlessly."},required:{control:"boolean"},label:{control:"text"},assistiveText:{control:"text"},readOnly:{control:"boolean",description:"Toggles structural read-only data presentation explicitly blocking standard component bindings."}}},r={args:{disabled:!1,label:"Project Deadline",assistiveText:"Specify the absolute cutoff for code submission."}},t={args:{label:"Incident Start Date",assistiveText:"When did the incident originally occur?",formLayout:"side-by-side"}},a={args:{label:"Launch Date",leftSection:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]})}},o={args:{label:"Disabled Date Range",disabled:!0}},n={args:{label:"Execution Date",error:"The chosen date conflicts with an existing deployment freeze.",required:!0}},i={args:{label:"Meeting Date",assistiveText:"Calendar rendered open by default for styling review.",popoverProps:{opened:!0},defaultValue:new Date(2026,7,26)},parameters:{docs:{description:{story:"The calendar dropdown renders open by default so its styling can be reviewed without a click interaction."}}}},s={args:{label:"Static ReadOnly Review",value:new Date("2026-05-21"),readOnly:!0}},l={args:{label:"Editable ReadOnly Review",defaultValue:new Date("2026-06-01"),readOnly:!0,labelWithEditIcon:!0}};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: "Project Deadline",
    assistiveText: "Specify the absolute cutoff for code submission."
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Incident Start Date",
    assistiveText: "When did the incident originally occur?",
    formLayout: "side-by-side"
  }
}`,...(y=(m=t.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,h,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Launch Date",
    leftSection: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,x,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Disabled Date Range",
    disabled: true
  }
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var w,D,S;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Execution Date",
    error: "The chosen date conflicts with an existing deployment freeze.",
    required: true
  }
}`,...(S=(D=n.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var k,O,T;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "Meeting Date",
    assistiveText: "Calendar rendered open by default for styling review.",
    // \`popoverProps.opened\` overrides Mantine's own internal disclosure state (see
    // PickerInputBase's \`opened: dropdownOpened, ...popoverProps\` spread order), so the
    // dropdown stays open with no click interaction needed — same convention as Menu's
    // \`opened: true\` stories.
    popoverProps: {
      opened: true
    },
    // Fixed (not computed) so the selected-day fill is visible on load, alongside the
    // today marker, for styling review. Local-component constructor, not an ISO date
    // string — \`new Date("2026-08-26")\` parses as UTC midnight, which renders as the
    // 25th in any timezone behind UTC.
    defaultValue: new Date(2026, 7, 26)
  },
  parameters: {
    docs: {
      description: {
        story: "The calendar dropdown renders open by default so its styling can be reviewed without a click interaction."
      }
    }
  }
}`,...(T=(O=i.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var R,E,L;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: "Static ReadOnly Review",
    value: new Date("2026-05-21"),
    readOnly: true
  }
}`,...(L=(E=s.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var j,P,C;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Editable ReadOnly Review",
    defaultValue: new Date("2026-06-01"),
    readOnly: true,
    labelWithEditIcon: true
  }
}`,...(C=(P=l.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const Se=["Default","FormsSideBySide","WithLeadingIcon","Disabled","ErrorState","OpenedCalendar","StaticReadOnly","EditableReadOnly"];export{r as Default,o as Disabled,l as EditableReadOnly,n as ErrorState,t as FormsSideBySide,i as OpenedCalendar,s as StaticReadOnly,a as WithLeadingIcon,Se as __namedExportsOrder,De as default};
