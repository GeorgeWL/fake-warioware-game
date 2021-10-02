import Link from '../components/Link';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Generic/Link',
  component: Link,
  args:{
    children:'Link Text',
    href:'https://example.org',
    disabled:false
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Link {...args} />;

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type:'primary'
};

export const Secondary = Template.bind({});

Secondary.args = {
  type: 'secondary',
};

