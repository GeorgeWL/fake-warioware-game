import TimeDisplay from '../components/timeTracking/TimeDisplay';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TimeTracking/TimeDisplay',
  component: TimeDisplay,
  argTypes: {
    faceBorderColor: { control: 'color' },
    handColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TimeDisplay {...args} />;

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  totalTime: 10
};
