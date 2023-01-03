import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconVisibilityS } from '..';

export default {
  title: 'Icons/IconVisibilityS',
  component: IconVisibilityS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconVisibilityS>;

const Template: ComponentStory<typeof IconVisibilityS> = (args) => (
  <IconVisibilityS {...args} />
);

export const Basic = Template.bind({});
