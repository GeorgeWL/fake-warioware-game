import LifeIcon from '../components/lifeTracking/LifeIcon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LifeTracking/LifeIcon',
  component: LifeIcon,
  args: {
    iconName: 'heart',
    size: 'medium',
    backgroundColor: '#fe1943',
    hardcoreBorderColor: 'gold',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    hardcoreBorderColor: { control: 'color' },
  },
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
