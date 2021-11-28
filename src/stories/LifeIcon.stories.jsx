import LifeIcon from '../components/lifeTracking/LifeIcon';
import { IconNameTypes } from '../constants/IconNameTypes';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LifeTracking/LifeIcon',
  component: LifeIcon,
  args: {
    iconName: IconNameTypes.HEART,
    size: 'medium',
    backgroundColor: '#fe1943',
    hardcoreBorderColor: 'gold',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: [ 'small', 'medium', 'large' ]
      },
    },
    backgroundColor: { control: 'color' },
    hardcoreBorderColor: { control: 'color' },
    iconName: {
      control: {
        type: 'select',
        options: Object.values(IconNameTypes)
      }
    },
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LifeIcon {...args} />;

export const Primary = Template.bind({});

export const Small = Template.bind({});

Small.args = {
  size: 'small',
};

export const Large = Template.bind({});

Large.args = {
  size: 'large',
};
