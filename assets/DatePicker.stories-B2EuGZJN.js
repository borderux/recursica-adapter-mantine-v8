import{j as e}from"./iframe-ik_Gc7yw.js";import{D as I}from"./DatePicker-reNW8yIw.js";import{f as W}from"./commonArgTypes-DcjzA9l3.js";import"./preload-helper-Dp1pzeXC.js";import"./WithReadOnlyWrapper-B0obfN4B.js";import"./FormControlWrapper-BaBzJUVh.js";import"./Label-B6pMrx5C.js";import"./get-size-DjP5yE3b.js";import"./factory-BsjJNMmP.js";import"./polymorphic-factory-Ck5l_-gZ.js";import"./create-optional-context-BoCK2RIR.js";import"./use-resolved-styles-api-D2VM2fN1.js";import"./CloseButton-CJOzzLdG.js";import"./UnstyledButton-D184pOVw.js";import"./use-id-BSgPDZ8c.js";import"./AssistiveElement-BcXWyzGG.js";import"./ReadOnlyField-BCvaZd4r.js";import"./use-uncontrolled-Ddu2DsBz.js";import"./use-disclosure-CZ_S7Wq1.js";import"./AccordionChevron-Dq2Q0O1b.js";import"./clamp-DTmYCdls.js";import"./use-input-props-CPROl8q1.js";import"./Modal-BZMhISWg.js";import"./OptionalPortal-2g9pQOIk.js";import"./is-element-ClCchnrP.js";import"./index-BSA_yx61.js";import"./index-B5-Tt3Ee.js";import"./use-merged-ref-BoPlrRo5.js";import"./NativeScrollArea-CO9LbPtD.js";import"./use-reduced-motion-BuM0xDYX.js";import"./FocusTrap-Aq3ctpHk.js";import"./VisuallyHidden-Beyr-1zC.js";import"./Paper-B-UKo0KW.js";import"./Transition-DCNgwaPT.js";import"./create-safe-context-CuTQeHvJ.js";import"./ScrollArea-FEkVo2SV.js";import"./floating-ui.react-CLM2paGI.js";import"./DirectionProvider-CzK9Xs2Y.js";import"./to-int-PQE0s6ay.js";import"./Popover-Dtm01Sdp.js";import"./get-floating-position-BdgJy0KK.js";import"./use-click-outside-D3jsVZr2.js";const Se={title:"UI-Kit/DatePicker",component:I,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,y;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Incident Start Date",
    assistiveText: "When did the incident originally occur?",
    formLayout: "side-by-side"
  }
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,h,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(P=l.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const ke=["Default","FormsSideBySide","WithLeadingIcon","Disabled","ErrorState","OpenedCalendar","StaticReadOnly","EditableReadOnly"];export{r as Default,o as Disabled,l as EditableReadOnly,n as ErrorState,t as FormsSideBySide,i as OpenedCalendar,s as StaticReadOnly,a as WithLeadingIcon,ke as __namedExportsOrder,Se as default};
