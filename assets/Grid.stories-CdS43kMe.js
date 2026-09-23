import{j as n}from"./iframe-rwlJBPMh.js";import{G as s}from"./Grid-BSDD7d6L.js";import{C as h}from"./Card-BLeBXTvg.js";import{T as H}from"./Text-bijuYCGB.js";import"./preload-helper-Dp1pzeXC.js";import"./factory-Blbler1g.js";import"./create-safe-context-CoDBLWnf.js";import"./get-base-value-DiG4ro11.js";import"./get-size-C5PqAgQ7.js";import"./polymorphic-factory-Baw3LseO.js";import"./Paper-C8qRqZ8P.js";import"./Text-wNCw2pQ6.js";const Q={title:"UI-Kit/Grid",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Grid is a responsive grid layout mapped to Mantine's Grid/Grid.Col, providing column spans, offsets, ordering, and breakpoint-based visibility. Defaults to the design system's own layout-grid tokens: 6 columns, with design-system-managed column-gutter/row-gutter/margin values applied automatically (not integrator-configurable)."}}},args:{grow:!1},argTypes:{columns:{control:"number",description:"Number of columns in each row. Defaults to the design system's default column count (6)."},grow:{control:"boolean",description:"Columns in the last row expand to fill available space"},justify:{control:"select",options:["flex-start","center","flex-end","space-between","space-around"],description:"Justify-content property"},align:{control:"select",options:["flex-start","center","flex-end","stretch"],description:"Align-items property"}}},r=({children:a})=>n.jsx(h,{children:n.jsx(h.Content,{children:n.jsx(H,{children:a})})}),o={render:({withLayer:a,layer:i,...e})=>n.jsxs(s,{...e,children:[n.jsx(s.Col,{span:2,children:n.jsx(r,{children:"span 2 of 6 (default)"})}),n.jsx(s.Col,{span:2,children:n.jsx(r,{children:"span 2 of 6 (default)"})}),n.jsx(s.Col,{span:2,children:n.jsx(r,{children:"span 2 of 6 (default)"})})]})},t={args:{columns:12},render:({withLayer:a,layer:i,...e})=>n.jsxs(s,{...e,children:[n.jsx(s.Col,{span:{xs:12,sm:6,md:3},children:n.jsx(r,{children:"xs 12 / sm 6 / md 3"})}),n.jsx(s.Col,{span:{xs:12,sm:6,md:3},children:n.jsx(r,{children:"xs 12 / sm 6 / md 3"})}),n.jsx(s.Col,{span:{xs:12,sm:6,md:3},children:n.jsx(r,{children:"xs 12 / sm 6 / md 3"})}),n.jsx(s.Col,{span:{xs:12,sm:6,md:3},children:n.jsx(r,{children:"xs 12 / sm 6 / md 3"})})]})},d={args:{columns:12},render:({withLayer:a,layer:i,...e})=>n.jsxs(s,{...e,children:[n.jsx(s.Col,{span:{xs:12,sm:6,md:3},children:n.jsx(r,{children:"xs 12 / sm 6 / md 3"})}),n.jsx(s.Col,{span:{xs:12,sm:6,md:3},children:n.jsx(r,{children:"xs 12 / sm 6 / md 3"})}),n.jsx(s.Col,{span:{xs:12,sm:6,md:3},children:n.jsx(r,{children:"xs 12 / sm 6 / md 3"})}),n.jsx(s.Col,{span:{xs:12,sm:6,md:3},children:n.jsx(r,{children:"xs 12 / sm 6 / md 3"})})]})},l={render:({withLayer:a,layer:i,...e})=>n.jsxs(s,{...e,children:[n.jsx(s.Col,{span:2,offset:2,children:n.jsx(r,{children:"span 2, offset 2 (of 6)"})}),n.jsx(s.Col,{span:2,children:n.jsx(r,{children:"span 2 (of 6)"})})]})},c={args:{grow:!0},render:({withLayer:a,layer:i,...e})=>n.jsxs(s,{...e,children:[n.jsx(s.Col,{span:3,children:n.jsx(r,{children:"span 3 (of 6)"})}),n.jsx(s.Col,{span:3,children:n.jsx(r,{children:"span 3 (of 6)"})}),n.jsx(s.Col,{span:3,children:n.jsx(r,{children:"span 3 (grows to fill row)"})})]})},p={args:{columns:4},render:({withLayer:a,layer:i,...e})=>n.jsxs(s,{...e,children:[n.jsx(s.Col,{span:2,children:n.jsx(r,{children:"span 2 of 4"})}),n.jsx(s.Col,{span:2,children:n.jsx(r,{children:"span 2 of 4"})})]})},m={render:({withLayer:a,layer:i,...e})=>n.jsxs(s,{...e,children:[n.jsx(s.Col,{span:3,hiddenFrom:"sm",children:n.jsx(r,{children:"hidden from sm and up"})}),n.jsx(s.Col,{span:3,visibleFrom:"sm",children:n.jsx(r,{children:"visible from sm and up"})})]})};var x,u,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Grid {...args}>
      <Grid.Col span={2}>
        <Swatch>span 2 of 6 (default)</Swatch>
      </Grid.Col>
      <Grid.Col span={2}>
        <Swatch>span 2 of 6 (default)</Swatch>
      </Grid.Col>
      <Grid.Col span={2}>
        <Swatch>span 2 of 6 (default)</Swatch>
      </Grid.Col>
    </Grid>
}`,...(w=(u=o.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var C,y,f;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    columns: 12
  },
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
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var G,g,j;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    columns: 12
  },
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
}`,...(j=(g=d.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var S,b,v;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Grid {...args}>
      <Grid.Col span={2} offset={2}>
        <Swatch>span 2, offset 2 (of 6)</Swatch>
      </Grid.Col>
      <Grid.Col span={2}>
        <Swatch>span 2 (of 6)</Swatch>
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
        <Swatch>span 3 (of 6)</Swatch>
      </Grid.Col>
      <Grid.Col span={3}>
        <Swatch>span 3 (of 6)</Swatch>
      </Grid.Col>
      <Grid.Col span={3}>
        <Swatch>span 3 (grows to fill row)</Swatch>
      </Grid.Col>
    </Grid>
}`,...(R=(F=c.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var D,O,T;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    columns: 4
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Grid {...args}>
      <Grid.Col span={2}>
        <Swatch>span 2 of 4</Swatch>
      </Grid.Col>
      <Grid.Col span={2}>
        <Swatch>span 2 of 4</Swatch>
      </Grid.Col>
    </Grid>
}`,...(T=(O=p.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var k,z,E;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Grid {...args}>
      <Grid.Col span={3} hiddenFrom="sm">
        <Swatch>hidden from sm and up</Swatch>
      </Grid.Col>
      <Grid.Col span={3} visibleFrom="sm">
        <Swatch>visible from sm and up</Swatch>
      </Grid.Col>
    </Grid>
}`,...(E=(z=m.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};const W=["Default","ResponsiveSpans","ResponsiveSizes","Offset","Grow","CustomColumnCount","VisibleHiddenFrom"];export{p as CustomColumnCount,o as Default,c as Grow,l as Offset,d as ResponsiveSizes,t as ResponsiveSpans,m as VisibleHiddenFrom,W as __namedExportsOrder,Q as default};
