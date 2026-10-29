import{j as e,w as oe}from"./iframe-Cfnz2xsz.js";import{B as n}from"./Button-B2cpGYoK.js";import{L as ae}from"./Loader-pLBNb1mU.js";import"./preload-helper-Dp1pzeXC.js";import"./factory-BHQ4Qo3a.js";import"./get-size-CbrrOF1g.js";import"./polymorphic-factory-s-Vro545.js";import"./Loader-DyrqvQyG.js";import"./Transition-BcKjRt-R.js";import"./index-DMDajLrY.js";import"./index-BvBWpxuS.js";import"./use-reduced-motion-DtYds3A5.js";import"./UnstyledButton-Cx0Bg5TE.js";const fe={title:"UI-Kit/Button",component:n,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},variant:{control:"select",options:["solid","outline","text"],description:"The visual variant of the button"},size:{control:"radio",options:["default","small"],description:"The size of the button"},loading:{control:"boolean",description:"Sets the button to a loading state"},fullWidth:{control:"boolean",description:"Stretches the button to fill its container; the icon stays grouped with the label"},useRecursicaLoader:{control:"boolean",description:"Use the Recursica Loader component instead of the default Mantine loader"},loaderVariant:{control:"select",options:["oval","bars","dots"],description:"The visual variant of the Recursica Loader"},loaderSize:{control:"select",options:[void 0,"sm","md","lg","small","default","large"],description:"The size variant for the loader"}},args:{useRecursicaLoader:!0,loaderVariant:"oval",loaderSize:void 0}},o={args:{children:"Explore Button",variant:"solid",size:"default",disabled:!1},render:({withLayer:t,layer:r,...re})=>e.jsx(n,{...re})},a={args:{children:"Solid Default",variant:"solid",size:"default"}},s={args:{children:"Outline Small",variant:"outline",size:"small"}},i={args:{children:"Text With Icon",variant:"text",size:"default",icon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}},l={args:{variant:"solid",size:"default","aria-label":"Search",icon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}},ne=e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),d={args:{children:"Full Width",variant:"solid",size:"default",fullWidth:!0},render:t=>e.jsx("div",{style:{width:"400px"},children:e.jsx(n,{...t})})},c={args:{children:"Full Width With Icon",variant:"solid",size:"default",fullWidth:!0,icon:ne},render:t=>e.jsx("div",{style:{width:"400px"},children:e.jsx(n,{...t})}),parameters:{docs:{description:{story:"With `fullWidth`, the button stretches to its container while the icon stays next to the label, and the pair is centered together — the icon is not pinned to the button's edge."}}}},u={render:()=>e.jsx("div",{style:{width:"400px",display:"flex",flexDirection:"column",gap:"16px"},children:["solid","outline","text"].map(t=>["default","small"].map(r=>e.jsx(n,{variant:t,size:r,icon:ne,fullWidth:!0,children:`${t} ${r}`},`${t}-${r}`)))})},h={args:{children:"Layer 1 Solid",variant:"solid",size:"default"},render:t=>e.jsx(oe,{layer:1,style:{padding:"24px"},children:e.jsx(n,{...t})})},p={args:{children:"Disabled Solid",variant:"solid",size:"default",disabled:!0}},m={args:{children:"Button as Link",variant:"solid",size:"default",component:"a",href:"https://example.com",target:"_blank"}},g={args:{children:"This is an exceptionally long button label designed to demonstrate how the component handles text overflow by applying an ellipsis rather than breaking the layout or wrapping to multiple lines.",variant:"solid",size:"default"},render:t=>e.jsx(n,{...t})},x={args:{children:"Saving Changes",variant:"solid",size:"default",loading:!0,loaderProps:{children:e.jsx(ae,{size:"default",overStyled:!0,color:"var(--button-color)",animate:!1})}},parameters:{docs:{description:{story:"When `loading={true}` is applied, the Button injects the Recursica `<Loader />` component. Per Recursica design rules, placing a Button in a loading state automatically forces the `disabled={true}` state on the underlying element. This ensures the button immediately receives the brand theme disabled opacities without relying solely on semantic logic."}}}};var y,v,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Explore Button",
    variant: "solid",
    size: "default",
    disabled: false
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => {
    return <Button {...args} />;
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,w,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: "Solid Default",
    variant: "solid",
    size: "default"
  }
}`,...(S=(w=a.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var W,z,L;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: "Outline Small",
    variant: "outline",
    size: "small"
  }
}`,...(L=(z=s.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var j,k,B;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "Text With Icon",
    variant: "text",
    size: "default",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
  }
}`,...(B=(k=i.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var T,I,D;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    size: "default",
    "aria-label": "Search",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
  }
}`,...(D=(I=l.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var F,P,O;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: "Full Width",
    variant: "solid",
    size: "default",
    fullWidth: true
  },
  render: (args: ButtonStoryProps) => <div style={{
    width: "400px"
  }}>
      <Button {...args} />
    </div>
}`,...(O=(P=d.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var R,$,C;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: "Full Width With Icon",
    variant: "solid",
    size: "default",
    fullWidth: true,
    icon: searchIcon
  },
  render: (args: ButtonStoryProps) => <div style={{
    width: "400px"
  }}>
      <Button {...args} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "With \`fullWidth\`, the button stretches to its container while the icon stays next to the label, and the pair is centered together — the icon is not pinned to the button's edge."
      }
    }
  }
}`,...(C=($=c.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var E,V,_;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      {(["solid", "outline", "text"] as const).map(variant => (["default", "small"] as const).map(size => <Button key={\`\${variant}-\${size}\`} variant={variant} size={size} icon={searchIcon} fullWidth>
            {\`\${variant} \${size}\`}
          </Button>))}
    </div>
}`,...(_=(V=u.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var A,U,K;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: "Layer 1 Solid",
    variant: "solid",
    size: "default"
  },
  render: (args: ButtonStoryProps) => <Layer layer={1} style={{
    padding: "24px"
  }}>
      <Button {...args} />
    </Layer>
}`,...(K=(U=h.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var M,q,G;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: "Disabled Solid",
    variant: "solid",
    size: "default",
    disabled: true
  }
}`,...(G=(q=p.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,J,N;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: "Button as Link",
    variant: "solid",
    size: "default",
    component: "a",
    href: "https://example.com",
    target: "_blank"
  }
}`,...(N=(J=m.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var Q,X,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    children: "This is an exceptionally long button label designed to demonstrate how the component handles text overflow by applying an ellipsis rather than breaking the layout or wrapping to multiple lines.",
    variant: "solid",
    size: "default"
  },
  render: (args: ButtonStoryProps) => <Button {...args} />
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: "Saving Changes",
    variant: "solid",
    size: "default",
    loading: true,
    // Frozen spinner so the visual-regression snapshot is deterministic.
    loaderProps: {
      children: <Loader size="default" overStyled color="var(--button-color)" animate={false} />
    }
  },
  parameters: {
    docs: {
      description: {
        story: "When \`loading={true}\` is applied, the Button injects the Recursica \`<Loader />\` component. Per Recursica design rules, placing a Button in a loading state automatically forces the \`disabled={true}\` state on the underlying element. This ensures the button immediately receives the brand theme disabled opacities without relying solely on semantic logic."
      }
    }
  }
}`,...(te=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const be=["Default","SolidDefault","OutlineSmall","TextWithIcon","IconOnly","FullWidth","FullWidthWithIcon","FullWidthVariants","LayerOneSolid","DisabledSolid","PolymorphicAsLink","TruncatedLabel","Loading"];export{o as Default,p as DisabledSolid,d as FullWidth,u as FullWidthVariants,c as FullWidthWithIcon,l as IconOnly,h as LayerOneSolid,x as Loading,s as OutlineSmall,m as PolymorphicAsLink,a as SolidDefault,i as TextWithIcon,g as TruncatedLabel,be as __namedExportsOrder,fe as default};
