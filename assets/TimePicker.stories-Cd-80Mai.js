import{j as l}from"./iframe-DCBKAceq.js";import{T as C}from"./TimePicker-Dql1m6Nq.js";import{f as P}from"./commonArgTypes-DcjzA9l3.js";import"./preload-helper-Dp1pzeXC.js";import"./WithReadOnlyWrapper-DuufsItc.js";import"./FormControlWrapper-CEUS1Ntj.js";import"./Label-BYWSrTFv.js";import"./get-size-oO83F4Mh.js";import"./factory-BwiUd4nl.js";import"./polymorphic-factory-D2YCJapC.js";import"./create-optional-context-B60w7jdn.js";import"./use-resolved-styles-api-ZiqWARrA.js";import"./CloseButton-DDLaM_Bx.js";import"./UnstyledButton-C0XQpUIK.js";import"./use-id-Bsn1GDqS.js";import"./AssistiveElement-9LTIoz9C.js";import"./ReadOnlyField-BTU-H1qi.js";import"./menuItemOption-DT7bPKcI.js";import"./OptionsDropdown-qUF4C-7r.js";import"./CheckIcon-C_UXDA5u.js";import"./ScrollArea-CP_j_jwW.js";import"./floating-ui.react-BzB6njcl.js";import"./index-DoxcBAa8.js";import"./index-BvRlNObY.js";import"./create-safe-context-8v2Hi7I4.js";import"./use-merged-ref-Lg2NoyOa.js";import"./DirectionProvider-CTW6K5Fb.js";import"./to-int-PQE0s6ay.js";import"./Popover-C8_ZLvzz.js";import"./OptionalPortal-BUFMDHC1.js";import"./is-element-BUCMxD_-.js";import"./get-floating-position-CXh9No83.js";import"./FocusTrap-BITgEFcy.js";import"./use-reduced-motion-Bg3I0eVK.js";import"./Transition-B2vuOjMH.js";import"./use-uncontrolled-DfC0a3BB.js";import"./use-click-outside-BRJX09d3.js";import"./InputBase-D_WXJXum.js";import"./use-input-props-BspxtY7c.js";import"./clamp-DTmYCdls.js";import"./get-base-value-BsMqsx5i.js";const ve={title:"UI-Kit/TimePicker",component:C,tags:["autodocs"],parameters:{docs:{description:{component:'\nThe `TimePicker` primitive provides a segmented hour/minute (optionally seconds) time entry input, paired with a dedicated AM/PM `Dropdown`-style selector, integrated directly into the `FormControlWrapper` architecture. This 12-hour + AM/PM composite is the only way this component operates — a Recursica-specific design, not a user-configurable option.\n\n### Examples\nAlways structure horizontal architectures via the generic `formLayout` parameter.\n```tsx\n<TimePicker\n  label="Start Time"\n  assistiveText="Select the deployment kick-off time."\n  formLayout="stacked"\n/>\n```\n'}}},argTypes:{...P,disabled:{control:"boolean",description:"Maps the formal disabled variable states structurally to the input core."},error:{control:"text",description:"Applies the strict error string boundary rendering invalid structures seamlessly."},required:{control:"boolean"},label:{control:"text"},assistiveText:{control:"text"},readOnly:{control:"boolean",description:"Toggles structural read-only data presentation explicitly blocking standard component bindings."},withSeconds:{control:"boolean",description:"Shows and allows editing the seconds segment."}}},e={args:{disabled:!1,label:"Meeting Time",assistiveText:"Choose the start time in your local timezone."}},t={args:{label:"Incident Start Time",assistiveText:"When did the incident originally occur?",formLayout:"side-by-side"}},r={args:{label:"Precise Execution Time",assistiveText:"Includes a seconds segment for exact scheduling.",withSeconds:!0}},o={args:{label:"Disabled Time Slot",disabled:!0}},i={args:{label:"Deployment Window",error:"The chosen time falls outside the allowed deployment window.",required:!0}},s={args:{label:"Meeting Time",assistiveText:"Choose the start time in your local timezone.",leftSection:l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("polyline",{points:"12 6 12 12 16 14"})]})}},a={args:{label:"Static ReadOnly Review",value:"14:30",readOnly:!0}},n={args:{label:"Editable ReadOnly Review",defaultValue:"09:00",readOnly:!0,labelWithEditIcon:!0}};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: "Meeting Time",
    assistiveText: "Choose the start time in your local timezone."
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Incident Start Time",
    assistiveText: "When did the incident originally occur?",
    formLayout: "side-by-side"
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,y,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Precise Execution Time",
    assistiveText: "Includes a seconds segment for exact scheduling.",
    withSeconds: true
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var T,S,x;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Disabled Time Slot",
    disabled: true
  }
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var f,v,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Deployment Window",
    error: "The chosen time falls outside the allowed deployment window.",
    required: true
  }
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var k,O,R;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "Meeting Time",
    assistiveText: "Choose the start time in your local timezone.",
    leftSection: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
  }
}`,...(R=(O=s.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var E,W,L;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Static ReadOnly Review",
    value: "14:30",
    readOnly: true
  }
}`,...(L=(W=a.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var D,I,M;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "Editable ReadOnly Review",
    defaultValue: "09:00",
    readOnly: true,
    labelWithEditIcon: true
  }
}`,...(M=(I=n.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const we=["Default","FormsSideBySide","WithSeconds","Disabled","ErrorState","WithLeadingIcon","StaticReadOnly","EditableReadOnly"];export{e as Default,o as Disabled,n as EditableReadOnly,i as ErrorState,t as FormsSideBySide,a as StaticReadOnly,s as WithLeadingIcon,r as WithSeconds,we as __namedExportsOrder,ve as default};
