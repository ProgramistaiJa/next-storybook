import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Box } from './Box'

export default {
    title: 'Components/Box',
    component: Box,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof Box>;

  const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

  export const SimpleBox = Template.bind({});
  SimpleBox.args = {
    title: 'Tytuł box',
    border: true,
    
  };