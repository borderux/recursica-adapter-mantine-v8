import{j as e}from"./iframe-DOAOVpO2.js";import{C as r}from"./Card-Bmlmcuyo.js";import{B as m}from"./Button-DKg-CbDQ.js";import{G as g}from"./Group-CMt2-we-.js";import{H as u}from"./Heading-CSxmjXc9.js";import{T as o}from"./Text-Df52T3uK.js";import"./preload-helper-Dp1pzeXC.js";import"./factory-CkkaIKoh.js";import"./get-size-BB_h7rLx.js";import"./polymorphic-factory-DNffTC-k.js";import"./Paper-C0tarp81.js";import"./create-safe-context-DwIdE321.js";import"./Loader-e2WYQB9k.js";import"./Loader-JI0QCgWE.js";import"./Transition-CmoI2E2J.js";import"./index-b_R7_l65.js";import"./index-CrAlJO-W.js";import"./use-reduced-motion-pNNEtTem.js";import"./UnstyledButton-CI3yv5x3.js";import"./Text-KFal9foE.js";const E={title:"UI-Kit/Card",component:r,subcomponents:{"Card.Header":r.Header,"Card.Content":r.Content,"Card.Footer":r.Footer,"Card.Section":r.Section},tags:["autodocs"],parameters:{docs:{description:{component:"The Card component acts as the foundational padded surface for grouping related information. It relies on standard internal compositional nodes (`Card.Header`, `Card.Content`, `Card.Footer`) mapped directly to the active Recursica design tokens to enforce layout gaps and margins seamlessly. Use the provided dot-notation wrappers rather than building ad-hoc generic sections."}}},argTypes:{}},t={args:{},render:({...a})=>e.jsxs(r,{...a,children:[e.jsx(r.Header,{children:"Customer Activity Report"}),e.jsxs(r.Content,{children:[e.jsx(o,{children:"Card inner section content body. Notice how this acts as padded content natively based on the overarching properties. Recursica's vertical gutter governs vertical spacing between siblings in the flex container."}),e.jsx(o,{children:"Another section showing the vertical gutter spacing."})]}),e.jsx(r.Footer,{children:e.jsxs(g,{justify:"space-between",align:"center",children:[e.jsx(o,{variant:"caption",children:"Generated today"}),e.jsx(m,{variant:"solid",children:"View Details"})]})})]})},n={args:{},render:({...a})=>e.jsx(r,{...a,children:e.jsxs(r.Content,{children:[e.jsx(u,{order:6,children:"Notice"}),e.jsx(o,{children:"This is a completely generic card payload dropping the Header and Footer specific elements, simply acting as a padded elevation boundary box directly mirroring native composability!"}),e.jsx(m,{variant:"solid",children:"Acknowledge"})]})})};var i,s,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
