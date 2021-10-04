import Button from '../components/generic/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Generic/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  children: 'Button',
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'Button',
};

export const Large = Template.bind({});

Large.args = {
  size: 'large',
  children: 'Button',
};

export const Small = Template.bind({});

Small.args = {
  size: 'small',
  children: 'Button',
};
