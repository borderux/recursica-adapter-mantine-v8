import{j as e}from"./iframe-CEsH-kge.js";import{S as t}from"./Switch-COt3Nq0H.js";import{S as j}from"./Stack-sFmkkvy7.js";import"./preload-helper-Dp1pzeXC.js";import"./FormControlWrapper-Xu7oOUx6.js";import"./Label-EmwMeXQK.js";import"./get-size-D7IhjDdu.js";import"./factory-DiS_gZDH.js";import"./polymorphic-factory-DGzSkhiw.js";import"./create-optional-context-Bcod_RCS.js";import"./use-resolved-styles-api-BLyL6YZ7.js";import"./CloseButton-BjM2y5j4.js";import"./UnstyledButton-COh892c0.js";import"./use-id-DVCFNE3f.js";import"./AssistiveElement-CPxR5rfY.js";import"./WithReadOnlyWrapper-BSgqDqtu.js";import"./ReadOnlyField-Dxb6UC3_.js";import"./InputsGroupFieldset-6EXT1czp.js";import"./use-uncontrolled-BrH78j6v.js";import"./CheckIcon-BDYnviOU.js";const J={title:"UI-Kit/Switch",component:t,tags:["autodocs"],parameters:{docs:{description:{component:'\nThe `Switch` component is an atomic form primitive representing boolean states, natively aligned to the Recursica design system.\n\n> [!IMPORTANT]  \n> Unlike `Checkbox`, the `Switch` is typically used for standalone settings toggles. It fully supports the universal `ReadOnlyField` boundaries when passed the `readOnly` attribute.\n\n### Usage\nTo render a standard switch:\n```tsx\n<Switch label="Enable Notifications" defaultChecked />\n```\n'}}},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},required:{control:"boolean"},error:{control:"boolean"},defaultChecked:{control:"boolean"},readOnly:{control:"boolean",description:"Toggles structural read-only data presentation bypassing interaction boundaries completely."},controlMaxWidth:{table:{disable:!0}},controlMinWidth:{table:{disable:!0}},emptyValueComponent:{table:{disable:!0}}}},r={args:{disabled:!1,label:"Standard Switch"},render:({withLayer:l,layer:d,...a})=>e.jsx(t,{...a})},n={args:{label:"Opt-in form alignment",formLayout:"side-by-side"},render:({withLayer:l,layer:d,...a})=>e.jsx(t,{...a})},s={args:{},render:()=>e.jsxs(j,{gap:"xl",children:[e.jsx(t,{label:"Default Unchecked State"}),e.jsx(t,{label:"Checked State",defaultChecked:!0}),e.jsx(t,{label:"Disabled Unchecked",disabled:!0}),e.jsx(t,{label:"Disabled Checked",defaultChecked:!0,disabled:!0})]})},o={args:{...r.args,readOnly:!0},render:({withLayer:l,layer:d,...a})=>e.jsx(t,{...a})},i={args:{...r.args,readOnly:!0},render:({withLayer:l,layer:d,...a})=>e.jsx(t,{...a,readOnlyComponent:({checked:c,label:L})=>e.jsxs("span",{style:{fontWeight:"bold",color:c?"green":"red"},children:[L," ",c?"ENABLED":"DISABLED"]})})};var p,u,y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: "Standard Switch"
  },
  // We explicitly destructure global Storybook injected arguments so they do not leak into the DOM natively.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Switch {...args} />
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var m,h,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Opt-in form alignment",
    formLayout: "side-by-side"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Switch {...args} />
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var g,S,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {},
  render: () => <Stack gap="xl">
      <Switch label="Default Unchecked State" />
      <Switch label="Checked State" defaultChecked />
      <Switch label="Disabled Unchecked" disabled />
      <Switch label="Disabled Checked" defaultChecked disabled />
    </Stack>
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var x,w,k;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Switch {...args} />
}`,...(k=(w=o.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var O,D,C;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Switch {...args} readOnlyComponent={({
    checked,
    label
  }) => <span style={{
    fontWeight: "bold",
    color: checked ? "green" : "red"
  }}>
          {label} {checked ? "ENABLED" : "DISABLED"}
        </span>} />
}`,...(C=(D=i.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};const Q=["Default","SideBySideLayout","StaticVariations","ReadOnly","CustomReadOnly"];export{i as CustomReadOnly,r as Default,o as ReadOnly,n as SideBySideLayout,s as StaticVariations,Q as __namedExportsOrder,J as default};
