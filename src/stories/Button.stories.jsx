import Button from '../components/inputs/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    primaryColor: { control: 'color' },
    secondaryColor: { control: 'color' },
  },
  args: {
    size: 'medium',
    primary: true
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Button'
};

export const Secondary = Template.bind({});

Secondary.args = {
  primary: false,
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
