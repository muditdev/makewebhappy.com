/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react';
import { Story } from '@storybook/react';

import { Button, ButtonProps } from 'happyui/Button';
import StyledWrapper from './Wrapper';

// import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
// as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = ({ children, ...args }: ButtonProps) => {
  return (
    <StyledWrapper>
      <Button {...args}>{children || 'Hello world'}</Button>
    </StyledWrapper>
  );
};

export const Main = Template.bind({});
Main.args = {
  primary: true,
  children: 'Button',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
