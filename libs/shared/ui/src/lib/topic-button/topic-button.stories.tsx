import type { Meta } from '@storybook/react';
import { TopicButton } from './topic-button';

const Story: Meta<typeof TopicButton> = {
  component: TopicButton,
  title: 'TopicButton',
  argTypes: {
    onClick: { action: 'onClick executed' }
  },
};

export default Story;

export const Primary = {
  args: {
    topicName: 'Nx Workspaces',
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'white', value: '#fff' },
        { name: 'gray', value: '#999' },
        { name: 'black', value: '#000' },
      ],
    },
  },
};
