import Header from '../components/generic/Header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Generic/Header',
  component: Header,
  args: {
    children: 'Label Text',
    headerLevel: 'h1',
  },
  argTypes: {
    headerLevel: {
      control: {
        type: 'select',
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
