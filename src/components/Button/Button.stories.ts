import type {Meta, StoryObj} from '@storybook/react';

import {Button} from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: [
        'primary',
        'danger',
        'loading',
        'disabled',
        'selected',
        'dashed',
        'link',
      ],
      control: {type: 'radio'},
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    onClick: () => {
      console.log('default');
    },
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
    onClick: () => {
      console.log('danger');
    },
  },
};
