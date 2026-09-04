import{j as e}from"./iframe-CKXE4Sc4.js";import{A as n}from"./Accordion--StY8lG2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-safe-id-Bp3H8K0-.js";import"./get-size-DM0F-aHN.js";import"./factory-DTSbFvJV.js";import"./create-safe-context-BcuibLFQ.js";import"./AccordionChevron-Czz5rGyg.js";import"./create-scoped-keydown-handler-CBeoUl4T.js";import"./find-element-ancestor-Cv-4bSct.js";import"./UnstyledButton-DH8X-hVy.js";import"./polymorphic-factory-CdXM5kO_.js";import"./get-style-object-DUJZA7T_.js";import"./index-CwIF1FeA.js";import"./index-DVw-usxZ.js";import"./use-reduced-motion-J4k_rYe-.js";import"./use-merged-ref-DvZE8g82.js";import"./use-id-CqsRG5z3.js";import"./use-uncontrolled-4Tj58v1m.js";const o=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})}),a=()=>e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M20.0306 9.53062L12.5306 17.0306C12.461 17.1003 12.3783 17.1557 12.2872 17.1934C12.1962 17.2312 12.0986 17.2506 12 17.2506C11.9014 17.2506 11.8038 17.2312 11.7128 17.1934C11.6218 17.1557 11.539 17.1003 11.4694 17.0306L3.96938 9.53062C3.82865 9.38988 3.74959 9.19901 3.74959 8.99999C3.74959 8.80097 3.82865 8.61009 3.96938 8.46936C4.11011 8.32863 4.30098 8.24957 4.50001 8.24957C4.69903 8.24957 4.8899 8.32863 5.03063 8.46936L12 15.4397L18.9694 8.46936C19.0391 8.39968 19.1218 8.34441 19.2128 8.30669C19.3039 8.26898 19.4015 8.24957 19.5 8.24957C19.5986 8.24957 19.6961 8.26898 19.7872 8.30669C19.8782 8.34441 19.9609 8.39968 20.0306 8.46936C20.1003 8.53905 20.1556 8.62177 20.1933 8.71282C20.231 8.80386 20.2504 8.90144 20.2504 8.99999C20.2504 9.09854 20.231 9.19612 20.1933 9.28716C20.1556 9.37821 20.1003 9.46093 20.0306 9.53062Z",fill:"currentColor"})}),F={title:"UI-Kit/Accordion",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"\nThe `Accordion` component intelligently wraps `@mantine/core`'s underlying Accordion layers while applying strict native design system mapping via `recursica_variables_scoped.css`.\n\n### Hybrid Composition API (Smart-Rendering)\nTo maximize flexibility while strictly aligning with the explicit Recursica design logic, the `AccordionItem` operates utilizing a **Hybrid Smart-Rendering Flow**:\n\n1. **Auto-Construction (Explicit Mapping)**:\nIf you supply the explicitly outlined Recursica properties (`title`, `leftIcon`) directly onto `<Accordion.Item>`, the component auto-generates the necessary `<Accordion.Control>` DOM layer inherently bridging the icons and titles visually while leaving the raw `children` wrapped neatly as the `<Accordion.Panel>`.\n\n2. **Graceful Falldown (Raw Composability)**:\nIf you deliberately omit the `title` property, the entire mapping system gracefully falls backward yielding exactly to the raw `@mantine/core` composition model. Under this context, you must inject your localized `<Accordion.Control>` and `<Accordion.Panel>` configurations completely manually.\n\n### Architecture Warning (`open`)\nTo structurally protect the parent wrapper's core transitions tracking architecture (`<Accordion value=\"...\">`), this configuration explicitly rejects mapping isolated `open={true}` object states natively on specific configurations. Use Mantine's inherent sibling arrays matching the corresponding active value map!\n        "}}}},r={render:()=>e.jsxs(n,{defaultValue:"item-1",chevron:e.jsx(a,{}),children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Control,{children:"Billing and Membership"}),e.jsx(n.Panel,{children:"You can manage your billing directly from the dashboard tab. All payments are processed automatically."})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Control,{children:"Refund Policy"}),e.jsx(n.Panel,{children:"We offer a 30-day money-back guarantee for all new subscriptions."})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Control,{children:"Technical Support"}),e.jsx(n.Panel,{children:"Our support team is available 24/7 via live chat or email."})]})]})},t={render:()=>e.jsxs(n,{defaultValue:"security",chevron:e.jsx(a,{}),children:[e.jsxs(n.Item,{value:"security",children:[e.jsx(n.Control,{leftIcon:e.jsx(o,{}),children:"Security Settings"}),e.jsx(n.Panel,{children:"Enable two-factor authentication (2FA) and monitor active sessions below."})]}),e.jsxs(n.Item,{value:"privacy",children:[e.jsx(n.Control,{leftIcon:e.jsx(o,{}),children:"Privacy Configuration"}),e.jsx(n.Panel,{children:"Choose what data is shared with our analytics partners."})]})]})},i={render:()=>e.jsx("div",{style:{maxWidth:320},children:e.jsxs(n,{defaultValue:"long-title",chevron:e.jsx(a,{}),children:[e.jsxs(n.Item,{value:"long-title",children:[e.jsx(n.Control,{leftIcon:e.jsx(o,{}),children:"This is a deliberately very long accordion item title used to verify that overflowing text truncates with a CSS ellipsis instead of wrapping or overflowing the header"}),e.jsx(n.Panel,{children:"The header label above should truncate to a single line with a trailing ellipsis (…) rather than wrapping onto multiple lines or pushing the chevron out of view."})]}),e.jsxs(n.Item,{value:"short-title",children:[e.jsx(n.Control,{leftIcon:e.jsx(o,{}),children:"Short Title"}),e.jsx(n.Panel,{children:"A short title in the same accordion for visual comparison."})]})]})})},c={render:()=>e.jsxs(n,{defaultValue:"expanded-disabled",chevron:e.jsx(a,{}),children:[e.jsxs(n.Item,{value:"expanded-disabled",disabled:!0,children:[e.jsx(n.Control,{leftIcon:e.jsx(o,{}),children:"Expanded and Disabled"}),e.jsx(n.Panel,{children:"This item starts expanded so the panel content's dimming can be verified alongside the control's, not just the collapsed header."})]}),e.jsxs(n.Item,{value:"collapsed-disabled",disabled:!0,children:[e.jsx(n.Control,{leftIcon:e.jsx(o,{}),children:"Collapsed and Disabled"}),e.jsx(n.Panel,{children:"Clicking or tabbing to this control should have no effect."})]}),e.jsxs(n.Item,{value:"enabled",children:[e.jsx(n.Control,{leftIcon:e.jsx(o,{}),children:"Enabled, for Comparison"}),e.jsx(n.Panel,{children:"A normal, interactive item alongside the disabled ones above."})]})]})};var l,s,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <Accordion defaultValue="item-1" chevron={<ChevronIcon />}>
        <Accordion.Item value="item-1">
          <Accordion.Control>Billing and Membership</Accordion.Control>
          <Accordion.Panel>
            You can manage your billing directly from the dashboard tab. All
            payments are processed automatically.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="item-2">
          <Accordion.Control>Refund Policy</Accordion.Control>
          <Accordion.Panel>
            We offer a 30-day money-back guarantee for all new subscriptions.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="item-3">
          <Accordion.Control>Technical Support</Accordion.Control>
          <Accordion.Panel>
            Our support team is available 24/7 via live chat or email.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>;
  }
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var h,u,m;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return <Accordion defaultValue="security" chevron={<ChevronIcon />}>
        <Accordion.Item value="security">
          <Accordion.Control leftIcon={<SVGIcon />}>
            Security Settings
          </Accordion.Control>
          <Accordion.Panel>
            Enable two-factor authentication (2FA) and monitor active sessions
            below.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="privacy">
          <Accordion.Control leftIcon={<SVGIcon />}>
            Privacy Configuration
          </Accordion.Control>
          <Accordion.Panel>
            Choose what data is shared with our analytics partners.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>;
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,A,v;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return (
      // \`style\` is stripped from Accordion itself (only passes through with overStyled);
      // constrain width on a plain wrapper div instead to force truncation.
      <div style={{
        maxWidth: 320
      }}>
        <Accordion defaultValue="long-title" chevron={<ChevronIcon />}>
          <Accordion.Item value="long-title">
            <Accordion.Control leftIcon={<SVGIcon />}>
              This is a deliberately very long accordion item title used to
              verify that overflowing text truncates with a CSS ellipsis instead
              of wrapping or overflowing the header
            </Accordion.Control>
            <Accordion.Panel>
              The header label above should truncate to a single line with a
              trailing ellipsis (…) rather than wrapping onto multiple lines or
              pushing the chevron out of view.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="short-title">
            <Accordion.Control leftIcon={<SVGIcon />}>
              Short Title
            </Accordion.Control>
            <Accordion.Panel>
              A short title in the same accordion for visual comparison.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}`,...(v=(A=i.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var g,f,x;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <Accordion defaultValue="expanded-disabled" chevron={<ChevronIcon />}>
        <Accordion.Item value="expanded-disabled" disabled>
          <Accordion.Control leftIcon={<SVGIcon />}>
            Expanded and Disabled
          </Accordion.Control>
          <Accordion.Panel>
            This item starts expanded so the panel content's dimming can be
            verified alongside the control's, not just the collapsed header.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="collapsed-disabled" disabled>
          <Accordion.Control leftIcon={<SVGIcon />}>
            Collapsed and Disabled
          </Accordion.Control>
          <Accordion.Panel>
            Clicking or tabbing to this control should have no effect.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="enabled">
          <Accordion.Control leftIcon={<SVGIcon />}>
            Enabled, for Comparison
          </Accordion.Control>
          <Accordion.Panel>
            A normal, interactive item alongside the disabled ones above.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>;
  }
}`,...(x=(f=c.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const H=["Default","WithIcons","LongTitleTruncation","Disabled"];export{r as Default,c as Disabled,i as LongTitleTruncation,t as WithIcons,H as __namedExportsOrder,F as default};
