import GameWrapper from '../../components/gameControl/GameWrapper';
import EjectButtonGame from '../../components/games/EjectButtonGame';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Game/EjectButton',
  component: EjectButtonGame,
  decorators: [
    Story=>(
      <GameWrapper>
        <Story/>
      </GameWrapper>
    )
  ]
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <EjectButtonGame {...args} />;

export const Default = Template.bind({});
