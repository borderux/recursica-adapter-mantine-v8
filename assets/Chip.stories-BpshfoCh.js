import{j as r}from"./iframe-BrPqJZwI.js";import{C as s}from"./Chip-sb2_dFDK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-size-sSWhVYjg.js";import"./factory-DgkPGsAF.js";import"./CheckIcon-CFSMD4IW.js";import"./create-optional-context-C5cjiGK3.js";import"./use-uncontrolled-C0EZClXR.js";import"./use-id-1Cq0IBKN.js";const H={title:"UI-Kit/Chip",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The Chip component is used to represent interactive selections, descriptive tags, or dynamic filters natively bounded to Recursica variables. It can be used as a toggleable input, can render a custom leading `icon`, and handles close constraints automatically via the `onDelete` property."}}},argTypes:{error:{control:"boolean",description:"Applies the error state styling dynamically."},disabled:{control:"boolean",description:"Applies disabled token states."},checked:{control:"boolean",description:"Forces the visual selected state."}}},n={args:{children:"Default Chip",error:!1,disabled:!1,checked:!1},render:e=>r.jsx(s,{...e})},o={args:{children:"Unselected",checked:!1},render:e=>r.jsx(s,{...e})},a={args:{children:"Selected",checked:!0},render:e=>r.jsx(s,{...e,onChange:()=>{}})},c={args:{children:"Error",error:!0,checked:!1},render:e=>r.jsx(s,{...e})},t={args:{children:"Error Selected",error:!0,checked:!0},render:e=>r.jsx(s,{...e,onChange:()=>{}})},d={args:{children:"Dismissible",checked:!1,onDelete:()=>console.log("Removal Action Triggered")},render:e=>r.jsx(s,{...e})},T=r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("path",{d:"M12 8v4"}),r.jsx("path",{d:"M12 16h.01"})]}),i={args:{children:"Leading Icon",checked:!1,icon:T},render:e=>r.jsx(s,{...e})},l={args:{children:"Leading Icon Selected",checked:!0,icon:T},render:e=>r.jsx(s,{...e,onChange:()=>{}})};var p,h,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: "Default Chip",
    error: false,
    disabled: false,
    checked: false
  },
  render: (args: ChipStoryProps) => <Chip {...args} />
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var m,u,S;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "Unselected",
    checked: false
  },
  render: (args: ChipStoryProps) => <Chip {...args} />
}`,...(S=(u=o.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var C,f,k;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: "Selected",
    checked: true
  },
  render: (args: ChipStoryProps) => <Chip {...args} onChange={() => {}} />
}`,...(k=(f=a.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var x,y,b;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Error",
    error: true,
    checked: false
  },
  render: (args: ChipStoryProps) => <Chip {...args} />
}`,...(b=(y=c.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var j,v,I;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "Error Selected",
    error: true,
    checked: true
  },
  render: (args: ChipStoryProps) => <Chip {...args} onChange={() => {}} />
}`,...(I=(v=t.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,L,D;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: "Dismissible",
    checked: false,
    onDelete: () => console.log("Removal Action Triggered")
  },
  render: (args: ChipStoryProps) => <Chip {...args} />
}`,...(D=(L=d.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var P,R,w;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: "Leading Icon",
    checked: false,
    icon: leadingIcon
  },
  render: (args: ChipStoryProps) => <Chip {...args} />
}`,...(w=(R=i.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var U,W,A;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: "Leading Icon Selected",
    checked: true,
    icon: leadingIcon
  },
  render: (args: ChipStoryProps) => <Chip {...args} onChange={() => {}} />
}`,...(A=(W=l.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const J=["Default","Unselected","Selected","ErrorState","ErrorSelected","Removable","WithLeadingIcon","WithLeadingIconSelected"];export{n as Default,t as ErrorSelected,c as ErrorState,d as Removable,a as Selected,o as Unselected,i as WithLeadingIcon,l as WithLeadingIconSelected,J as __namedExportsOrder,H as default};
