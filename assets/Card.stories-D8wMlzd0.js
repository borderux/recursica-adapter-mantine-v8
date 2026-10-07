import{j as e}from"./iframe-_5mOgpL0.js";import{C as r}from"./Card-OAwmXSWX.js";import{B as m}from"./Button-C-MmHoE8.js";import{G as g}from"./Group-DvI1Akt5.js";import{H as u}from"./Heading-CJcLeCB9.js";import{T as o}from"./Text-CT3uQj0f.js";import"./preload-helper-Dp1pzeXC.js";import"./factory-CnErkkTv.js";import"./get-size-BChqdjww.js";import"./polymorphic-factory-CgZ4sTrW.js";import"./Paper-B4yI_pV9.js";import"./create-safe-context-Dpg7cGo3.js";import"./Loader-BGu5DgBC.js";import"./Loader-DwhXG5Jc.js";import"./Transition-gU1w1aja.js";import"./index-BRi-jA8J.js";import"./index-oACYtkBY.js";import"./use-reduced-motion-Cu67p2z5.js";import"./UnstyledButton-KsA8bYuI.js";import"./Text-CB1ciLm4.js";const E={title:"UI-Kit/Card",component:r,subcomponents:{"Card.Header":r.Header,"Card.Content":r.Content,"Card.Footer":r.Footer,"Card.Section":r.Section},tags:["autodocs"],parameters:{docs:{description:{component:"The Card component acts as the foundational padded surface for grouping related information. It relies on standard internal compositional nodes (`Card.Header`, `Card.Content`, `Card.Footer`) mapped directly to the active Recursica design tokens to enforce layout gaps and margins seamlessly. Use the provided dot-notation wrappers rather than building ad-hoc generic sections."}}},argTypes:{}},t={args:{},render:({...a})=>e.jsxs(r,{...a,children:[e.jsx(r.Header,{children:"Customer Activity Report"}),e.jsxs(r.Content,{children:[e.jsx(o,{children:"Card inner section content body. Notice how this acts as padded content natively based on the overarching properties. Recursica's vertical gutter governs vertical spacing between siblings in the flex container."}),e.jsx(o,{children:"Another section showing the vertical gutter spacing."})]}),e.jsx(r.Footer,{children:e.jsxs(g,{justify:"space-between",align:"center",children:[e.jsx(o,{variant:"caption",children:"Generated today"}),e.jsx(m,{variant:"solid",children:"View Details"})]})})]})},n={args:{},render:({...a})=>e.jsx(r,{...a,children:e.jsxs(r.Content,{children:[e.jsx(u,{order:6,children:"Notice"}),e.jsx(o,{children:"This is a completely generic card payload dropping the Header and Footer specific elements, simply acting as a padded elevation boundary box directly mirroring native composability!"}),e.jsx(m,{variant:"solid",children:"Acknowledge"})]})})};var i,s,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {},
  render: ({
    ...args
  }) => {
    return <Card {...args}>
        <Card.Header>Customer Activity Report</Card.Header>
        <Card.Content>
          <Text>
            Card inner section content body. Notice how this acts as padded
            content natively based on the overarching properties. Recursica's
            vertical gutter governs vertical spacing between siblings in the
            flex container.
          </Text>
          <Text>Another section showing the vertical gutter spacing.</Text>
        </Card.Content>
        <Card.Footer>
          <Group justify="space-between" align="center">
            <Text variant="caption">Generated today</Text>
            <Button variant="solid">View Details</Button>
          </Group>
        </Card.Footer>
      </Card>;
  }
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var c,p,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: ({
    ...args
  }) => {
    return <Card {...args}>
        <Card.Content>
          <Heading order={6}>Notice</Heading>
          <Text>
            This is a completely generic card payload dropping the Header and
            Footer specific elements, simply acting as a padded elevation
            boundary box directly mirroring native composability!
          </Text>
          <Button variant="solid">Acknowledge</Button>
        </Card.Content>
      </Card>;
  }
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const I=["Default","HeaderlessAndFooterless"];export{t as Default,n as HeaderlessAndFooterless,I as __namedExportsOrder,E as default};
