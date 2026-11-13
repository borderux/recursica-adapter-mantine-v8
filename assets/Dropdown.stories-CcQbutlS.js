import{j as e}from"./iframe-DCBKAceq.js";import{D as K}from"./Dropdown-CaLMYiCS.js";import{f as Y}from"./commonArgTypes-DcjzA9l3.js";import{r as q}from"./renderRichOption-CWE5gKyI.js";import{s as a,m as G}from"./menuItemOption-DT7bPKcI.js";import"./preload-helper-Dp1pzeXC.js";import"./WithReadOnlyWrapper-DuufsItc.js";import"./FormControlWrapper-CEUS1Ntj.js";import"./Label-BYWSrTFv.js";import"./get-size-oO83F4Mh.js";import"./factory-BwiUd4nl.js";import"./polymorphic-factory-D2YCJapC.js";import"./create-optional-context-B60w7jdn.js";import"./use-resolved-styles-api-ZiqWARrA.js";import"./CloseButton-DDLaM_Bx.js";import"./UnstyledButton-C0XQpUIK.js";import"./use-id-Bsn1GDqS.js";import"./AssistiveElement-9LTIoz9C.js";import"./ReadOnlyField-BTU-H1qi.js";import"./OptionsDropdown-qUF4C-7r.js";import"./CheckIcon-C_UXDA5u.js";import"./ScrollArea-CP_j_jwW.js";import"./floating-ui.react-BzB6njcl.js";import"./index-DoxcBAa8.js";import"./index-BvRlNObY.js";import"./create-safe-context-8v2Hi7I4.js";import"./use-merged-ref-Lg2NoyOa.js";import"./DirectionProvider-CTW6K5Fb.js";import"./to-int-PQE0s6ay.js";import"./Popover-C8_ZLvzz.js";import"./OptionalPortal-BUFMDHC1.js";import"./is-element-BUCMxD_-.js";import"./get-floating-position-CXh9No83.js";import"./FocusTrap-BITgEFcy.js";import"./use-reduced-motion-Bg3I0eVK.js";import"./Transition-B2vuOjMH.js";import"./use-uncontrolled-DfC0a3BB.js";import"./use-click-outside-BRJX09d3.js";import"./InputBase-D_WXJXum.js";import"./use-input-props-BspxtY7c.js";const Le={title:"UI-Kit/Dropdown",component:K,tags:["autodocs"],parameters:{docs:{description:{component:"Dropdown provides a selectable list of options, mapping natively over Mantine's Select component encapsulated within the standardized FormControlWrapper."}}},args:{label:"Country Selection",assistiveText:"Select your country of origin.",placeholder:"Pick value",data:["United States","Canada","Mexico","United Kingdom","France"],disabled:!1,required:!1,readOnly:!1,clearable:!1},argTypes:{disabled:{control:"boolean"},...Y,readOnly:{control:"boolean"},clearable:{control:"boolean"},wrapItemText:{control:"boolean",description:"Wraps option label/supportingText onto additional lines instead of truncating with an ellipsis."},containerWidth:{table:{disable:!0}}}},o={args:{}},t={args:{label:"Clearable Options",clearable:!0}},n={args:{label:"Destination",leftSection:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),e.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}},r=e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),s={args:{label:"Assignee",placeholder:"Pick a team member",assistiveText:"Each option can show a leading icon and supporting text — see MANTINE_ADAPTER_RICH_OPTION_DATA.md.",data:[{value:"jdoe",label:"Jane Doe",leadingIcon:r,supportingText:"jane.doe@example.com"},{value:"asmith",label:"Alex Smith",leadingIcon:r,supportingText:"alex.smith@example.com"},{value:"unassigned",label:"Unassigned"}]}},i={args:{label:"Assignee",placeholder:"Pick a team member",wrapItemText:!0,data:[{value:"jdoe",label:"Jane Doe, Senior Staff Engineer, Platform Infrastructure",leadingIcon:r,supportingText:"jane.doe@example.com — Platform Infrastructure team, on-call rotation lead"},{value:"unassigned",label:"Unassigned"}],assistiveText:"wrapItemText=true — long label/supportingText wrap instead of truncating."}},Q={optionContent:a.optionContent,optionIcon:a.optionIcon,optionText:a.optionText,optionTextWrap:a.optionTextWrap,optionSupportingText:a.optionSupportingText},X=[{value:"icon-and-supporting",label:"Jane Doe",leadingIcon:r,supportingText:"jane.doe@example.com"},{value:"no-icon",label:"Alex Smith",supportingText:"No leadingIcon — label/supportingText shift left, no reserved icon space"},{value:"no-supporting-text",label:"Taylor Rivera",leadingIcon:r},{value:"plain",label:"Plain option — no leadingIcon, no supportingText"},{value:"long-text",label:"A very long option label that, with wrapItemText, wraps onto a second line instead of overflowing the fixed-width dropdown — otherwise it truncates with an ellipsis",leadingIcon:r,supportingText:"A similarly long supporting text string, to confirm the same wrap-or-truncate behavior applies to it too"}],V=F=>e.jsx("div",{className:a.dropdown,"data-recursica":"dropdown","data-recursica-layouts":"stacked",style:{width:"var(--recursica_ui-kit_components_dropdown_properties_max-width)"},children:X.map(u=>e.jsx("div",{className:a.option,children:G(q({option:u},Q,F),!1)},u.value))}),l={parameters:{controls:{disable:!0}},render:()=>V(!1)},p={parameters:{controls:{disable:!0}},render:()=>V(!0)},c={args:{error:"You must choose a valid destination.",value:"Invalid Island"}},d={args:{disabled:!0,value:"United States"}},m={args:{label:"Read Only View",readOnly:!0,value:"Canada"}};var g,x,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {}
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,v,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Clearable Options",
    clearable: true
  }
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var f,I,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Destination",
    leftSection: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
  }
}`,...(T=(I=n.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var S,O,R;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Assignee",
    placeholder: "Pick a team member",
    assistiveText: "Each option can show a leading icon and supporting text — see MANTINE_ADAPTER_RICH_OPTION_DATA.md.",
    data: [{
      value: "jdoe",
      label: "Jane Doe",
      leadingIcon: UserIcon,
      supportingText: "jane.doe@example.com"
    }, {
      value: "asmith",
      label: "Alex Smith",
      leadingIcon: UserIcon,
      supportingText: "alex.smith@example.com"
    }, {
      value: "unassigned",
      label: "Unassigned"
    }]
  }
}`,...(R=(O=s.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var P,y,j;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: "Assignee",
    placeholder: "Pick a team member",
    wrapItemText: true,
    data: [{
      value: "jdoe",
      label: "Jane Doe, Senior Staff Engineer, Platform Infrastructure",
      leadingIcon: UserIcon,
      supportingText: "jane.doe@example.com — Platform Infrastructure team, on-call rotation lead"
    }, {
      value: "unassigned",
      label: "Unassigned"
    }],
    assistiveText: "wrapItemText=true — long label/supportingText wrap instead of truncating."
  }
}`,...(j=(y=i.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var A,W,k;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => renderOptionRowPreview(false)
}`,...(k=(W=l.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var D,C,_;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => renderOptionRowPreview(true)
}`,...(_=(C=p.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var E,U,N;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    error: "You must choose a valid destination.",
    value: "Invalid Island"
  }
}`,...(N=(U=c.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var L,M,J;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: "United States"
  }
}`,...(J=(M=d.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};var z,B,H;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Read Only View",
    readOnly: true,
    value: "Canada"
  }
}`,...(H=(B=m.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const Me=["Default","Clearable","WithLeadingIcon","WithRichOptions","WithRichOptionsWrapped","RichOptionRowPreview","RichOptionRowPreviewWrapped","StaticError","StaticDisabled","StaticReadOnly"];export{t as Clearable,o as Default,l as RichOptionRowPreview,p as RichOptionRowPreviewWrapped,d as StaticDisabled,c as StaticError,m as StaticReadOnly,n as WithLeadingIcon,s as WithRichOptions,i as WithRichOptionsWrapped,Me as __namedExportsOrder,Le as default};
