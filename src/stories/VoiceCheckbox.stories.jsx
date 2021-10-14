import { Provider } from 'react-redux';
import { store } from '../app/store';
import VoiceCheckbox from '../components/voice/VoiceCheckbox';

export default {
  title: 'Voice/VoiceCheckbox',
  component: VoiceCheckbox,
  args: {
    size: 'medium',
    accentColor: '#61dafb',
    iconColor: 'white',
    children: 'Enable Voice',
    disabled: false,
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

const Template = (args) => <VoiceCheckbox {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
