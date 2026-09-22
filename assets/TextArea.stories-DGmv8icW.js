import{T as x}from"./TextArea-KgfBs0A3.js";import{f as S}from"./commonArgTypes-DcjzA9l3.js";import"./iframe-D8acv0cn.js";import"./preload-helper-Dp1pzeXC.js";import"./WithReadOnlyWrapper-B1WNTsSE.js";import"./FormControlWrapper-Bff6Mn7c.js";import"./Label-DiE4TkqT.js";import"./get-size-Tf0LxJHA.js";import"./factory-V71ishic.js";import"./polymorphic-factory-R0tq12bn.js";import"./create-optional-context-DmkTFiaU.js";import"./use-resolved-styles-api-B70Gjgmv.js";import"./CloseButton-DrcNJKG5.js";import"./UnstyledButton-BS3DxYzo.js";import"./use-id-DX8bONeJ.js";import"./AssistiveElement-DdpBuG3p.js";import"./ReadOnlyField-1pYeXfmd.js";import"./get-env-uyVen0u2.js";import"./InputBase-BDq9zPv3.js";import"./use-input-props-nzHR-g98.js";const G={title:"UI-Kit/TextArea",component:x,tags:["autodocs"],parameters:{docs:{description:{component:"TextArea provides a multi-line input field, mapping layout explicitly over the standardized FormControlWrapper."}}},args:{label:"Description",assistiveText:"Enter your full description here.",disabled:!1,required:!1,readOnly:!1,autosize:!1},argTypes:{disabled:{control:"boolean"},...S,readOnly:{control:"boolean"},autosize:{control:"boolean"},minRows:{control:"number"},maxRows:{control:"number"},value:{control:"text"},placeholder:{control:"text"}}},e={args:{placeholder:"Type something long..."}},r={args:{label:"Auto-sizing TextArea",autosize:!0,minRows:2,maxRows:6,placeholder:"Type multiple lines here. Watch it grow!"}},o={args:{error:"This field requires a detailed explanation.",value:"Some bad input."}},a={args:{disabled:!0,value:"This content is locked."}},t={args:{label:"Read Only View",readOnly:!0,value:"This text is safely frozen in read-only form."}};var s,i,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    placeholder: "Type something long..."
  }
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var l,p,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Auto-sizing TextArea",
    autosize: true,
    minRows: 2,
    maxRows: 6,
    placeholder: "Type multiple lines here. Watch it grow!"
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    error: "This field requires a detailed explanation.",
    value: "Some bad input."
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,f,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: "This content is locked."
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,T,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Read Only View",
    readOnly: true,
    value: "This text is safely frozen in read-only form."
  }
}`,...(b=(T=t.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const H=["Default","Autosize","StaticError","StaticDisabled","StaticReadOnly"];export{r as Autosize,e as Default,a as StaticDisabled,o as StaticError,t as StaticReadOnly,H as __namedExportsOrder,G as default};
