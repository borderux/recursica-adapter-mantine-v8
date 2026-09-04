import{T as G}from"./TransferList-D3J4OdG7.js";import{f as k}from"./commonArgTypes-DcjzA9l3.js";import"./iframe-CKXE4Sc4.js";import"./preload-helper-Dp1pzeXC.js";import"./WithReadOnlyWrapper-D3i9VHkH.js";import"./FormControlWrapper-px0D9PQu.js";import"./Label-3ScHo753.js";import"./get-size-DM0F-aHN.js";import"./factory-DTSbFvJV.js";import"./polymorphic-factory-CdXM5kO_.js";import"./create-optional-context-xWa03FgL.js";import"./use-resolved-styles-api-DBEVuqsh.js";import"./CloseButton-DolNeL6Z.js";import"./UnstyledButton-DH8X-hVy.js";import"./use-id-CqsRG5z3.js";import"./AssistiveElement-CzYbMoGp.js";import"./ReadOnlyField-DZWFH7MM.js";import"./Badge-BlVWc9hO.js";import"./Button-CFNtWej-.js";import"./Loader-Cl_nnN8n.js";import"./Loader-byEijayc.js";import"./Transition-CNYdXQN0.js";import"./index-CwIF1FeA.js";import"./index-DVw-usxZ.js";import"./use-reduced-motion-J4k_rYe-.js";import"./TextField-bhmXBBsV.js";import"./Checkbox-Ds_MCQ3n.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./InputsGroupFieldset-DR_Uf16_.js";import"./use-uncontrolled-4Tj58v1m.js";import"./CheckIcon-BFRbfslq.js";const i=[[{value:"alpha",label:"Alpha"},{value:"bravo",label:"Bravo"},{value:"charlie",label:"Charlie"},{value:"delta",label:"Delta"},{value:"echo",label:"Echo"}],[{value:"foxtrot",label:"Foxtrot"}]],M=[[{value:"apple",label:"Apple",group:"Fruit"},{value:"banana",label:"Banana",group:"Fruit"},{value:"carrot",label:"Carrot",group:"Vegetable"},{value:"daikon",label:"Daikon",group:"Vegetable"},{value:"eagle",label:"Eagle"}],[]],de={title:"UI-Kit/TransferList",component:G,tags:["autodocs"],parameters:{docs:{description:{component:"TransferList (dual listbox) lets users move items between two lists. Composes FormControlWrapper, TextField, Checkbox, CheckboxGroup, Badge, and Button."}}},args:{label:"Assign users",assistiveText:"Move users into the selected list.",defaultData:i,disabled:!1,required:!1},argTypes:{disabled:{control:"boolean"},...k,sourceLabel:{control:"text"},targetLabel:{control:"text"},searchable:{control:"boolean"},searchPlaceholder:{control:"text"}}},e={},r={args:{label:"Assign ingredients",defaultData:M}},a={args:{formLayout:"side-by-side"}},s={args:{label:"Assign users (no filtering)",searchable:!1}},t={args:{error:"Select at least one user.",defaultData:[[],i[0]]}},o={args:{disabled:!0}},l={args:{label:"Assign users",defaultData:[[],[]]}},n={args:{label:"Assigned users",defaultData:[[],i[0]],readOnly:!0}};var c,p,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,d,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Assign ingredients",
    defaultData: GROUPED_DATA
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var b,f,A;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    formLayout: "side-by-side"
  }
}`,...(A=(f=a.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var S,D,h;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Assign users (no filtering)",
    searchable: false
  }
}`,...(h=(D=s.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var v,y,T;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    error: "Select at least one user.",
    defaultData: [[], SAMPLE_DATA![0]]
  }
}`,...(T=(y=t.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var x,E,L;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(L=(E=o.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var C,O,_;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Assign users",
    defaultData: [[], []]
  }
}`,...(_=(O=l.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var B,P,F;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: "Assigned users",
    defaultData: [[], SAMPLE_DATA![0]],
    readOnly: true
  }
}`,...(F=(P=n.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};const ge=["Default","Grouped","SideBySide","NoSearch","StaticError","StaticDisabled","Empty","ReadOnly"];export{e as Default,l as Empty,r as Grouped,s as NoSearch,n as ReadOnly,a as SideBySide,o as StaticDisabled,t as StaticError,ge as __namedExportsOrder,de as default};
