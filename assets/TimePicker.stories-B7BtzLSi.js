import{j as l}from"./iframe-X85Ec7Sc.js";import{T as C}from"./TimePicker-CJtCdbsM.js";import{f as P}from"./commonArgTypes-DcjzA9l3.js";import"./preload-helper-Dp1pzeXC.js";import"./WithReadOnlyWrapper-B0BfgXzP.js";import"./FormControlWrapper-oL3G07k6.js";import"./Label-Ch1kkxKe.js";import"./get-size-BOZT9Grt.js";import"./factory-D8h6p7XG.js";import"./polymorphic-factory-YCmkDQBW.js";import"./create-optional-context-DJ-f5qaj.js";import"./use-resolved-styles-api-39vEv_l5.js";import"./CloseButton-_5D9NGaI.js";import"./UnstyledButton-Bpvb3DQd.js";import"./use-id-2Ao4l0Zu.js";import"./AssistiveElement-7iEtnt19.js";import"./ReadOnlyField-UwZW-5zD.js";import"./Dropdown.module-BLoHu1y6.js";import"./OptionsDropdown-SJvdGY5_.js";import"./CheckIcon-Btddk_5v.js";import"./ScrollArea-DWPbPo1t.js";import"./floating-ui.react-BUJvj_wm.js";import"./index-BmloDWyD.js";import"./index-CMcdHt9z.js";import"./create-safe-context-BlyEKlGD.js";import"./use-merged-ref-BDn3pRxo.js";import"./DirectionProvider-YUaP14X0.js";import"./to-int-PQE0s6ay.js";import"./Popover-B83bgVyq.js";import"./OptionalPortal-C3pi6zaf.js";import"./is-element-8xbWA3l7.js";import"./get-floating-position-rOB5Ryho.js";import"./FocusTrap-gAD53QCs.js";import"./use-reduced-motion-iFNcq-AW.js";import"./Transition-COoAobSH.js";import"./use-uncontrolled-Bz4CkD6J.js";import"./use-click-outside-D7TxJylk.js";import"./InputBase-BzrRMNCf.js";import"./use-input-props-D3c-lV7Q.js";import"./clamp-DTmYCdls.js";import"./get-base-value-BZj46acG.js";const ve={title:"UI-Kit/TimePicker",component:C,tags:["autodocs"],parameters:{docs:{description:{component:'\nThe `TimePicker` primitive provides a segmented hour/minute (optionally seconds) time entry input, paired with a dedicated AM/PM `Dropdown`-style selector, integrated directly into the `FormControlWrapper` architecture. This 12-hour + AM/PM composite is the only way this component operates — a Recursica-specific design, not a user-configurable option.\n\n### Examples\nAlways structure horizontal architectures via the generic `formLayout` parameter.\n```tsx\n<TimePicker\n  label="Start Time"\n  assistiveText="Select the deployment kick-off time."\n  formLayout="stacked"\n/>\n```\n'}}},argTypes:{...P,disabled:{control:"boolean",description:"Maps the formal disabled variable states structurally to the input core."},error:{control:"text",description:"Applies the strict error string boundary rendering invalid structures seamlessly."},required:{control:"boolean"},label:{control:"text"},assistiveText:{control:"text"},readOnly:{control:"boolean",description:"Toggles structural read-only data presentation explicitly blocking standard component bindings."},withSeconds:{control:"boolean",description:"Shows and allows editing the seconds segment."}}},e={args:{disabled:!1,label:"Meeting Time",assistiveText:"Choose the start time in your local timezone."}},t={args:{label:"Incident Start Time",assistiveText:"When did the incident originally occur?",formLayout:"side-by-side"}},r={args:{label:"Precise Execution Time",assistiveText:"Includes a seconds segment for exact scheduling.",withSeconds:!0}},o={args:{label:"Disabled Time Slot",disabled:!0}},i={args:{label:"Deployment Window",error:"The chosen time falls outside the allowed deployment window.",required:!0}},s={args:{label:"Meeting Time",assistiveText:"Choose the start time in your local timezone.",leftSection:l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("polyline",{points:"12 6 12 12 16 14"})]})}},a={args:{label:"Static ReadOnly Review",value:"14:30",readOnly:!0}},n={args:{label:"Editable ReadOnly Review",defaultValue:"09:00",readOnly:!0,labelWithEditIcon:!0}};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
