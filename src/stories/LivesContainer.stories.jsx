import LivesContainer from '../components/lifeTracking/LivesContainer';
import { IconNameTypes } from '../constants/IconNameTypes';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LifeTracking/LivesContainer',
  component: LivesContainer,
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
    backgroundColor: { control: 'color' },
    hardcoreBorderColor: { control: 'color' },
  },
  args: {
    count: 3,
    isHardCore: false,
    isFlashing: false,
    iconName: IconNameTypes.CHECK
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LivesContainer {...args} />;

export const Default = Template.bind({});

