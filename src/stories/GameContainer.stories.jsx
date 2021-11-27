import { Provider } from 'react-redux';
import { store } from '../app/store';
import GameContainer from '../components/gameControl/GameContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Game/GameContainer',
  component: GameContainer,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  args: {
    children: <canvas/>,
    gameDuration: 60
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <GameContainer {...args} />;

export const Default = Template.bind({});
