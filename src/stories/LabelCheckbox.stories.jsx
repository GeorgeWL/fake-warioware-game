import LabelCheckbox from '../components/inputs/LabelCheckbox';
import { IconNameTypes } from '../constants/IconNameTypes';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/LabelCheckbox',
  component: LabelCheckbox,
  args: {
    children: 'Label Text',
    size: 'medium',
    disabled: false
  },
  argTypes: {
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
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LabelCheckbox {...args} />;

export const Default = Template.bind({});
