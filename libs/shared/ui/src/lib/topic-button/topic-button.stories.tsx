import type { Meta } from '@storybook/react';
import { TopicButton } from './topic-button';

const Story: Meta<typeof TopicButton> = {
  component: TopicButton,
  title: 'TopicButton',
};

export default Story;

export const Primary = {
  args: {
    topicName: 'GitHub',
    icon: 'FaGithub',
    href: 'https://github.com/timdoes',
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
