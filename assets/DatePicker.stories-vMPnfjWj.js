import{j as e}from"./iframe-DCBKAceq.js";import{D as I}from"./DatePicker-As5qCHAo.js";import{f as W}from"./commonArgTypes-DcjzA9l3.js";import"./preload-helper-Dp1pzeXC.js";import"./WithReadOnlyWrapper-DuufsItc.js";import"./FormControlWrapper-CEUS1Ntj.js";import"./Label-BYWSrTFv.js";import"./get-size-oO83F4Mh.js";import"./factory-BwiUd4nl.js";import"./polymorphic-factory-D2YCJapC.js";import"./create-optional-context-B60w7jdn.js";import"./use-resolved-styles-api-ZiqWARrA.js";import"./CloseButton-DDLaM_Bx.js";import"./UnstyledButton-C0XQpUIK.js";import"./use-id-Bsn1GDqS.js";import"./AssistiveElement-9LTIoz9C.js";import"./ReadOnlyField-BTU-H1qi.js";import"./use-uncontrolled-DfC0a3BB.js";import"./use-disclosure-DA0ux7bA.js";import"./AccordionChevron-Dqzrg2n5.js";import"./clamp-DTmYCdls.js";import"./use-input-props-BspxtY7c.js";import"./Modal-Dps2oMrh.js";import"./OptionalPortal-BUFMDHC1.js";import"./is-element-BUCMxD_-.js";import"./index-DoxcBAa8.js";import"./index-BvRlNObY.js";import"./use-merged-ref-Lg2NoyOa.js";import"./NativeScrollArea-BneXpRl2.js";import"./use-reduced-motion-Bg3I0eVK.js";import"./FocusTrap-BITgEFcy.js";import"./Paper-kSii9Qr3.js";import"./Transition-B2vuOjMH.js";import"./create-safe-context-8v2Hi7I4.js";import"./ScrollArea-CP_j_jwW.js";import"./floating-ui.react-BzB6njcl.js";import"./DirectionProvider-CTW6K5Fb.js";import"./to-int-PQE0s6ay.js";import"./Popover-C8_ZLvzz.js";import"./get-floating-position-CXh9No83.js";import"./use-click-outside-BRJX09d3.js";const De={title:"UI-Kit/DatePicker",component:I,tags:["autodocs"],parameters:{docs:{description:{component:`
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
