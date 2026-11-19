import{j as e}from"./iframe-BU0eVT3o.js";import{S as r}from"./SegmentedControl-1mbw_i4x.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-C4qpNpfs.js";import"./factory-BPoOonF0.js";import"./OptionalPortal-tFXuth2d.js";import"./is-element-DQyqWXFb.js";import"./index-Axwhym6V.js";import"./index-BjYocIeB.js";import"./use-merged-ref-DaF9L16l.js";import"./get-size-CFvf3Kjl.js";import"./get-floating-position-BD3aueB3.js";import"./DirectionProvider-Bgim75Q3.js";import"./Transition-qjJYMzzz.js";import"./use-reduced-motion-DsgmJ6Xm.js";import"./get-style-object-DUJZA7T_.js";import"./floating-ui.react-DgUKD8r-.js";import"./use-id-u4HAIZj5.js";import"./VisuallyHidden-BnkVb0pd.js";import"./get-env-uyVen0u2.js";import"./to-int-PQE0s6ay.js";import"./use-uncontrolled-DQ0Vck1a.js";const Z={title:"UI-Kit/SegmentedControl",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"SegmentedControl provides a linear set of two or more segments, each of which functions as a mutually exclusive button."}}},argTypes:{orientation:{control:"radio",options:["horizontal","vertical"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"},hideLabels:{control:"boolean"},data:{table:{disable:!0}},defaultChecked:{table:{disable:!0}}}},l={args:{data:["React","Angular","Vue","Svelte"],orientation:"horizontal",fullWidth:!1},render:({withLayer:a,layer:o,...n})=>e.jsx(r,{...n})},s={args:{data:["Daily","Weekly","Monthly"],fullWidth:!0},render:({withLayer:a,layer:o,...n})=>e.jsx(r,{...n})},i={args:{data:["Option 1","Option 2","Option 3"],orientation:"vertical"},render:({withLayer:a,layer:o,...n})=>e.jsx(r,{...n})},c={args:{data:["Preview","Code","Edit"],disabled:!0},render:({withLayer:a,layer:o,...n})=>e.jsx(r,{...n})},t=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),d={args:{data:[{value:"daily",label:"Daily",icon:e.jsx(t,{})},{value:"weekly",label:"Weekly",icon:e.jsx(t,{})},{value:"monthly",label:"Monthly",icon:e.jsx(t,{})}]},render:({withLayer:a,layer:o,...n})=>e.jsx(r,{...n})},p={args:{hideLabels:!0,data:[{value:"daily",label:"Daily",icon:e.jsx(t,{})},{value:"weekly",label:"Weekly",icon:e.jsx(t,{})},{value:"monthly",label:"Monthly",icon:e.jsx(t,{})}]},render:({withLayer:a,layer:o,...n})=>e.jsx(r,{...n})};var u,y,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    data: ["React", "Angular", "Vue", "Svelte"],
    orientation: "horizontal",
    fullWidth: false
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => {
    return <SegmentedControl {...args} />;
  }
}`,...(m=(y=l.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var h,g,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    data: ["Daily", "Weekly", "Monthly"],
    fullWidth: true
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => {
    return <SegmentedControl {...args} />;
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,v,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    data: ["Option 1", "Option 2", "Option 3"],
    orientation: "vertical"
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => {
    return <SegmentedControl {...args} />;
  }
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var k,C,S;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data: ["Preview", "Code", "Edit"],
    disabled: true
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => {
    return <SegmentedControl {...args} />;
  }
}`,...(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var f,j,L;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    data: [{
      value: "daily",
      label: "Daily",
      icon: <CheckIcon />
    }, {
      value: "weekly",
      label: "Weekly",
      icon: <CheckIcon />
    }, {
      value: "monthly",
      label: "Monthly",
      icon: <CheckIcon />
    }]
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => {
    return <SegmentedControl {...args} />;
  }
}`,...(L=(j=d.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var W,I,D;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    hideLabels: true,
    data: [{
      value: "daily",
      label: "Daily",
      icon: <CheckIcon />
    }, {
      value: "weekly",
      label: "Weekly",
      icon: <CheckIcon />
    }, {
      value: "monthly",
      label: "Monthly",
      icon: <CheckIcon />
    }]
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => {
    return <SegmentedControl {...args} />;
  }
}`,...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const $=["Default","FullWidth","Vertical","Disabled","WithIcons","IconOnly"];export{l as Default,c as Disabled,s as FullWidth,p as IconOnly,i as Vertical,d as WithIcons,$ as __namedExportsOrder,Z as default};
