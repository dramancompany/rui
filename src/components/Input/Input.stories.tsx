import { ComponentMeta, ComponentStory } from '@storybook/react';
import { createElement } from 'react';

import * as Icons from 'components/Icons';

import Input from '.';
const iconNames = ['none', ...Object.keys(Icons)];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      control: 'select',
      options: [
        'text',
        'email',
        'number',
        'search',
        'tel',
        'url',
        'password',
      ] as Parameters<typeof Input>[0]['type'][],
      defaultValue: 'text',
    },
    hasTogglePasswordVisibilityButton: {
      type: 'boolean',
      defaultValue: false,
      if: {
        arg: 'type',
        eq: 'password',
      },
    },
    placeholder: { defaultValue: 'PlaceHolder', type: 'string' },
    hintText: { type: 'string' },
    hintTextColor: {
      control: 'select',
      options: ['roleRed', 'contents000', 'contents300'],
      defaultValue: 'roleRed',
    },
    leftElement: { control: 'select', options: iconNames },
    rightElement: { control: 'select', options: iconNames },
    label: { type: 'string' },
    required: { type: 'boolean', defaultValue: false },
    errorMessage: { type: 'string' },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = ({
  leftElement,
  rightElement,
  ...args
}) => {
  const renderedLeftElement =
    leftElement && createElement(Icons[String(leftElement)]);
  const renderedRightElement =
    rightElement && createElement(Icons[String(rightElement)]);

  return (
    <Input
      {...args}
      leftElement={leftElement === 'none' ? null : renderedLeftElement}
      rightElement={rightElement === 'none' ? null : renderedRightElement}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
