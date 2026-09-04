import{j as n}from"./iframe-CKXE4Sc4.js";import{G as s}from"./Grid-DTcxYwTw.js";import{C as h}from"./Card-BiLpvMvA.js";import{T as V}from"./Text-CvISsGfY.js";import"./preload-helper-Dp1pzeXC.js";import"./factory-DTSbFvJV.js";import"./create-safe-context-BcuibLFQ.js";import"./get-base-value-BOaj1ofz.js";import"./get-size-DM0F-aHN.js";import"./polymorphic-factory-CdXM5kO_.js";import"./Paper-C6HgR-FY.js";import"./Text-DdFvhv3D.js";const Q={title:"UI-Kit/Grid",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Grid is a 12-column (by default) responsive grid layout that maps directly to Mantine's Grid/Grid.Col, providing column spans, offsets, ordering, and breakpoint-based visibility."}}},args:{gutter:"rec-default",columns:12,grow:!1},argTypes:{gutter:{control:"select",options:["rec-none","rec-sm","rec-default","rec-md","rec-lg","rec-xl","rec-2xl"],description:"Gutter between columns"},columns:{control:"number",description:"Number of columns in each row"},grow:{control:"boolean",description:"Columns in the last row expand to fill available space"},justify:{control:"select",options:["flex-start","center","flex-end","space-between","space-around"],description:"Justify-content property"},align:{control:"select",options:["flex-start","center","flex-end","stretch"],description:"Align-items property"}}},r=({children:a})=>n.jsx(h,{children:n.jsx(h.Content,{children:n.jsx(V,{children:a})})}),t={render:({withLayer:a,layer:i,...e})=>n.jsxs(s,{...e,children:[n.jsx(s.Col,{span:4,children:n.jsx(r,{children:"span 4"})}),n.jsx(s.Col,{span:4,children:n.jsx(r,{children:"span 4"})}),n.jsx(s.Col,{span:4,children:n.jsx(r,{children:"span 4"})})]})},o={render:({withLayer:a,layer:i,...e})=>n.jsxs(s,{...e,children:[n.jsx(s.Col,{span:{xs:12,sm:6,md:3},children:n.jsx(r,{children:"xs 12 / sm 6 / md 3"})}),n.jsx(s.Col,{span:{xs:12,sm:6,md:3},children:n.jsx(r,{children:"xs 12 / sm 6 / md 3"})}),n.jsx(s.Col,{span:{xs:12,sm:6,md:3},children:n.jsx(r,{children:"xs 12 / sm 6 / md 3"})}),n.jsx(s.Col,{span:{xs:12,sm:6,md:3},children:n.jsx(r,{children:"xs 12 / sm 6 / md 3"})})]})},d={render:({withLayer:a,layer:i,...e})=>n.jsxs(s,{...e,children:[n.jsx(s.Col,{span:{xs:12,sm:6,md:3},children:n.jsx(r,{children:"xs 12 / sm 6 / md 3"})}),n.jsx(s.Col,{span:{xs:12,sm:6,md:3},children:n.jsx(r,{children:"xs 12 / sm 6 / md 3"})}),n.jsx(s.Col,{span:{xs:12,sm:6,md:3},children:n.jsx(r,{children:"xs 12 / sm 6 / md 3"})}),n.jsx(s.Col,{span:{xs:12,sm:6,md:3},children:n.jsx(r,{children:"xs 12 / sm 6 / md 3"})})]})},l={render:({withLayer:a,layer:i,...e})=>n.jsxs(s,{...e,children:[n.jsx(s.Col,{span:4,offset:4,children:n.jsx(r,{children:"span 4, offset 4"})}),n.jsx(s.Col,{span:4,children:n.jsx(r,{children:"span 4"})})]})},c={args:{grow:!0},render:({withLayer:a,layer:i,...e})=>n.jsxs(s,{...e,children:[n.jsx(s.Col,{span:3,children:n.jsx(r,{children:"span 3"})}),n.jsx(s.Col,{span:3,children:n.jsx(r,{children:"span 3"})}),n.jsx(s.Col,{span:3,children:n.jsx(r,{children:"span 3 (grows to fill row)"})})]})},p={args:{columns:6},render:({withLayer:a,layer:i,...e})=>n.jsxs(s,{...e,children:[n.jsx(s.Col,{span:2,children:n.jsx(r,{children:"span 2 of 6"})}),n.jsx(s.Col,{span:2,children:n.jsx(r,{children:"span 2 of 6"})}),n.jsx(s.Col,{span:2,children:n.jsx(r,{children:"span 2 of 6"})})]})},m={render:({withLayer:a,layer:i,...e})=>n.jsxs(s,{...e,children:[n.jsx(s.Col,{span:6,hiddenFrom:"sm",children:n.jsx(r,{children:"hidden from sm and up"})}),n.jsx(s.Col,{span:6,visibleFrom:"sm",children:n.jsx(r,{children:"visible from sm and up"})})]})};var x,C,u;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Grid {...args}>
      <Grid.Col span={4}>
        <Swatch>span 4</Swatch>
      </Grid.Col>
      <Grid.Col span={4}>
        <Swatch>span 4</Swatch>
      </Grid.Col>
      <Grid.Col span={4}>
        <Swatch>span 4</Swatch>
      </Grid.Col>
    </Grid>
}`,...(u=(C=t.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};var w,y,G;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Grid {...args}>
      <Grid.Col span={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
      <Grid.Col span={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
      <Grid.Col span={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
      <Grid.Col span={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
    </Grid>
}`,...(G=(y=o.parameters)==null?void 0:y.docs)==null?void 0:G.source}}};var j,S,f;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Grid {...args}>
      <Grid.Col span={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
      <Grid.Col span={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
      <Grid.Col span={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
      <Grid.Col span={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
    </Grid>
}`,...(f=(S=d.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var g,b,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Grid {...args}>
      <Grid.Col span={4} offset={4}>
        <Swatch>span 4, offset 4</Swatch>
      </Grid.Col>
      <Grid.Col span={4}>
        <Swatch>span 4</Swatch>
      </Grid.Col>
    </Grid>
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var L,F,R;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    grow: true
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Grid {...args}>
      <Grid.Col span={3}>
        <Swatch>span 3</Swatch>
      </Grid.Col>
      <Grid.Col span={3}>
        <Swatch>span 3</Swatch>
      </Grid.Col>
      <Grid.Col span={3}>
        <Swatch>span 3 (grows to fill row)</Swatch>
      </Grid.Col>
    </Grid>
}`,...(R=(F=c.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var O,T,z;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    columns: 6
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Grid {...args}>
      <Grid.Col span={2}>
        <Swatch>span 2 of 6</Swatch>
      </Grid.Col>
      <Grid.Col span={2}>
        <Swatch>span 2 of 6</Swatch>
      </Grid.Col>
      <Grid.Col span={2}>
        <Swatch>span 2 of 6</Swatch>
      </Grid.Col>
    </Grid>
}`,...(z=(T=p.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var D,E,H;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Grid {...args}>
      <Grid.Col span={6} hiddenFrom="sm">
        <Swatch>hidden from sm and up</Swatch>
      </Grid.Col>
      <Grid.Col span={6} visibleFrom="sm">
        <Swatch>visible from sm and up</Swatch>
      </Grid.Col>
    </Grid>
}`,...(H=(E=m.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const W=["Default","ResponsiveSpans","ResponsiveSizes","Offset","Grow","CustomColumnCount","VisibleHiddenFrom"];export{p as CustomColumnCount,t as Default,c as Grow,l as Offset,d as ResponsiveSizes,o as ResponsiveSpans,m as VisibleHiddenFrom,W as __namedExportsOrder,Q as default};
