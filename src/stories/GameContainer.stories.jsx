import GameContainer from '../components/gameControl/GameContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Game/GameContainer',
  component: GameContainer
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <GameContainer {...args} />;

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  totalTime: 10
};
