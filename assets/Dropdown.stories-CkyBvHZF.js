import{j as e}from"./iframe-Bc0UFa-l.js";import{D as K}from"./Dropdown-BgTIdxwT.js";import{f as Y}from"./commonArgTypes-DcjzA9l3.js";import{r as q}from"./renderRichOption-Pep8osGo.js";import{s as a}from"./Dropdown.module-B9RmNxy-.js";import"./preload-helper-Dp1pzeXC.js";import"./WithReadOnlyWrapper-CIk9Bczf.js";import"./FormControlWrapper-CgCkq9-7.js";import"./Label-D3IZQlB5.js";import"./get-size-qeoxSUl5.js";import"./factory-Dw1G0akI.js";import"./polymorphic-factory-BohRqFly.js";import"./create-optional-context-ISNyT1nQ.js";import"./use-resolved-styles-api-DpSZ7Iyq.js";import"./CloseButton-_dZSQMR0.js";import"./UnstyledButton-B2WDcAR9.js";import"./use-id-BTRl37KS.js";import"./AssistiveElement-DBvV5FrT.js";import"./ReadOnlyField-lWCisUHw.js";import"./OptionsDropdown-CyQd-YVF.js";import"./CheckIcon-BPrRhdXL.js";import"./ScrollArea-C-XQq5W1.js";import"./floating-ui.react-tpRwQyzH.js";import"./index-BYacZthj.js";import"./index-xI2lJJUX.js";import"./create-safe-context-B7kvzlIl.js";import"./use-merged-ref-8ijBxMPS.js";import"./DirectionProvider-Coc1rZnk.js";import"./to-int-PQE0s6ay.js";import"./Popover-CNKZafbS.js";import"./OptionalPortal-BYf5xDt_.js";import"./is-element-Bs2dxsBK.js";import"./get-floating-position-kJg3Rj0g.js";import"./FocusTrap-D6YSU3NH.js";import"./use-reduced-motion-gPrZ7SiT.js";import"./Transition-CK-67IS2.js";import"./use-uncontrolled-GUKs6t7-.js";import"./use-click-outside-D0Ws4Gai.js";import"./InputBase-lVdCRxXf.js";import"./use-input-props-BWVjUG1m.js";const Ne={title:"UI-Kit/Dropdown",component:K,tags:["autodocs"],parameters:{docs:{description:{component:"Dropdown provides a selectable list of options, mapping natively over Mantine's Select component encapsulated within the standardized FormControlWrapper."}}},args:{label:"Country Selection",assistiveText:"Select your country of origin.",placeholder:"Pick value",data:["United States","Canada","Mexico","United Kingdom","France"],disabled:!1,required:!1,readOnly:!1,clearable:!1},argTypes:{disabled:{control:"boolean"},...Y,readOnly:{control:"boolean"},clearable:{control:"boolean"},wrapItemText:{control:"boolean",description:"Wraps option label/supportingText onto additional lines instead of truncating with an ellipsis."},containerWidth:{table:{disable:!0}}}},o={args:{}},t={args:{label:"Clearable Options",clearable:!0}},n={args:{label:"Destination",leftSection:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),e.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}},r=e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),i={args:{label:"Assignee",placeholder:"Pick a team member",assistiveText:"Each option can show a leading icon and supporting text — see MANTINE_ADAPTER_RICH_OPTION_DATA.md.",data:[{value:"jdoe",label:"Jane Doe",leadingIcon:r,supportingText:"jane.doe@example.com"},{value:"asmith",label:"Alex Smith",leadingIcon:r,supportingText:"alex.smith@example.com"},{value:"unassigned",label:"Unassigned"}]}},s={args:{label:"Assignee",placeholder:"Pick a team member",wrapItemText:!0,data:[{value:"jdoe",label:"Jane Doe, Senior Staff Engineer, Platform Infrastructure",leadingIcon:r,supportingText:"jane.doe@example.com — Platform Infrastructure team, on-call rotation lead"},{value:"unassigned",label:"Unassigned"}],assistiveText:"wrapItemText=true — long label/supportingText wrap instead of truncating."}},G={optionContent:a.optionContent,optionIcon:a.optionIcon,optionText:a.optionText,optionTextWrap:a.optionTextWrap,optionSupportingText:a.optionSupportingText},Q=[{value:"icon-and-supporting",label:"Jane Doe",leadingIcon:r,supportingText:"jane.doe@example.com"},{value:"no-icon",label:"Alex Smith",supportingText:"No leadingIcon — label/supportingText shift left, no reserved icon space"},{value:"no-supporting-text",label:"Taylor Rivera",leadingIcon:r},{value:"plain",label:"Plain option — no leadingIcon, no supportingText"},{value:"long-text",label:"A very long option label that, with wrapItemText, wraps onto a second line instead of overflowing the fixed-width dropdown — otherwise it truncates with an ellipsis",leadingIcon:r,supportingText:"A similarly long supporting text string, to confirm the same wrap-or-truncate behavior applies to it too"}],V=F=>e.jsx("div",{className:a.dropdown,style:{width:"var(--recursica_ui-kit_components_dropdown_variants_layouts_stacked_properties_max-width)"},children:Q.map(u=>e.jsx("div",{className:a.option,children:q({option:u},G,F)},u.value))}),l={parameters:{controls:{disable:!0}},render:()=>V(!1)},p={parameters:{controls:{disable:!0}},render:()=>V(!0)},c={args:{error:"You must choose a valid destination.",value:"Invalid Island"}},d={args:{disabled:!0,value:"United States"}},m={args:{label:"Read Only View",readOnly:!0,value:"Canada"}};var g,x,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {}
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,v,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Clearable Options",
    clearable: true
  }
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var f,T,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Destination",
    leftSection: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
  }
}`,...(I=(T=n.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var S,O,R;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(R=(O=i.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var P,y,j;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(j=(y=s.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var _,A,W;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => renderOptionRowPreview(false)
}`,...(W=(A=l.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var k,D,C;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => renderOptionRowPreview(true)
}`,...(C=(D=p.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var E,U,N;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(B=m.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const Le=["Default","Clearable","WithLeadingIcon","WithRichOptions","WithRichOptionsWrapped","RichOptionRowPreview","RichOptionRowPreviewWrapped","StaticError","StaticDisabled","StaticReadOnly"];export{t as Clearable,o as Default,l as RichOptionRowPreview,p as RichOptionRowPreviewWrapped,d as StaticDisabled,c as StaticError,m as StaticReadOnly,n as WithLeadingIcon,i as WithRichOptions,s as WithRichOptionsWrapped,Le as __namedExportsOrder,Ne as default};
