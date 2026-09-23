import{j as e}from"./iframe-X85Ec7Sc.js";import{C as t}from"./Card-B-QIY0h4.js";import{B as m}from"./Button-CNmmBgyA.js";import{G as g}from"./Group-pbjNFlW1.js";import{T as r}from"./Text-DbMVbG73.js";import"./preload-helper-Dp1pzeXC.js";import"./factory-D8h6p7XG.js";import"./get-size-BOZT9Grt.js";import"./polymorphic-factory-YCmkDQBW.js";import"./Paper-LaLTWc0P.js";import"./create-safe-context-BlyEKlGD.js";import"./Loader-DCllQpBJ.js";import"./Loader-BpbZzwxC.js";import"./Transition-COoAobSH.js";import"./index-BmloDWyD.js";import"./index-CMcdHt9z.js";import"./use-reduced-motion-iFNcq-AW.js";import"./UnstyledButton-Bpvb3DQd.js";import"./Group-DU1Wunqh.js";import"./Text-HGPIVlYh.js";const k={title:"UI-Kit/Card",component:t,subcomponents:{"Card.Header":t.Header,"Card.Content":t.Content,"Card.Footer":t.Footer,"Card.Section":t.Section},tags:["autodocs"],parameters:{docs:{description:{component:"The Card component acts as the foundational padded surface for grouping related information. It relies on standard internal compositional nodes (`Card.Header`, `Card.Content`, `Card.Footer`) mapped directly to the active Recursica design tokens to enforce layout gaps and margins seamlessly. Use the provided dot-notation wrappers rather than building ad-hoc generic sections."}}},argTypes:{}},n={args:{},render:({...o})=>e.jsxs(t,{...o,children:[e.jsx(t.Header,{children:"Customer Activity Report"}),e.jsxs(t.Content,{children:[e.jsx(r,{children:"Card inner section content body. Notice how this acts as padded content natively based on the overarching properties. Recursica's vertical gutter governs vertical spacing between siblings in the flex container."}),e.jsx(r,{children:"Another section showing the vertical gutter spacing."})]}),e.jsx(t.Footer,{children:e.jsxs(g,{justify:"space-between",align:"center",children:[e.jsx(r,{variant:"caption",children:"Generated today"}),e.jsx(m,{variant:"solid",children:"View Details"})]})})]})},a={args:{},render:({...o})=>e.jsx(t,{...o,children:e.jsxs(t.Content,{children:[e.jsx(r,{variant:"subtitle",children:"Notice"}),e.jsx(r,{children:"This is a completely generic card payload dropping the Header and Footer specific elements, simply acting as a padded elevation boundary box directly mirroring native composability!"}),e.jsx(m,{variant:"solid",children:"Acknowledge"})]})})};var i,s,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(s=n.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var c,p,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: ({
    ...args
  }) => {
    return <Card {...args}>
        <Card.Content>
          <Text variant="subtitle">Notice</Text>
          <Text>
            This is a completely generic card payload dropping the Header and
            Footer specific elements, simply acting as a padded elevation
            boundary box directly mirroring native composability!
          </Text>
          <Button variant="solid">Acknowledge</Button>
        </Card.Content>
      </Card>;
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const E=["Default","HeaderlessAndFooterless"];export{n as Default,a as HeaderlessAndFooterless,E as __namedExportsOrder,k as default};
