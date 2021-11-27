import LivesContainer from '../components/lifeTracking/LivesContainer';
import LifeIconStories from './LifeIcon.stories';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LifeTracking/LivesContainer',
  component: LivesContainer,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: [ 'small', 'medium', 'large' ]
      }
    },
    iconName: {
      control: {
        type: 'radio',
        options: [ 'heart', 'star' ]
      }
    },
    backgroundColor: { control: 'color' },
    hardcoreBorderColor: { control: 'color' },
  },
  args: {
    count: 3,
    isHardCore: false,
    ...LifeIconStories.args
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LivesContainer {...args} />;

export const Default = Template.bind({});

