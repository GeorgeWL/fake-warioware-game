import Checkbox from '../components/inputs/Checkbox';
import { IconNameTypes } from '../constants/IconNameTypes';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  argTypes: {
    accentColor: { control: 'color' },
    iconColor: { control: 'color' },
    size: {
      control: {
        type: 'radio',
        options: [ 'small', 'medium', 'large' ]
      },
    },
    iconName: {
      control: {
        type: 'select',
        options: Object.values(IconNameTypes)
      }
    },
  },
  args: {
    size: 'medium',
    accentColor: '#61dafb',
    iconColor: 'white',
    disabled: false,
    iconName: IconNameTypes.CHECK
  }
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});



