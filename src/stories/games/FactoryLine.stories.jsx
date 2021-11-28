import GameWrapper from '../../components/gameControl/GameWrapper';
import FactoryLineGame from '../../components/games/FactoryLineGame';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Game/FactoryLine',
  component: FactoryLineGame,
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
const Template = (args) => <FactoryLineGame {...args} />;

export const Default = Template.bind({});
