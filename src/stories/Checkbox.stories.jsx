import Checkbox from '../components/inputs/Checkbox';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  argTypes: {
    accentColor: { control: 'color' },
    iconColor: { control: 'color' },
  },
  args: {
    size: 'medium',
    accentColor: '#61dafb',
    iconColor: 'white',
    disabled: false,
  }
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
};


