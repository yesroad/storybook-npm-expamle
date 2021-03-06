import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
	title: 'Example/Button',
	component: Button,
	argTypes: {
		theme: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'tertiary'],
		},
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
		},
		radiusType: {
			control: { type: 'select' },
			options: ['default', 'round', 'sharp'],
		},
		radiusSize: {
			control: { type: 'select' },
			options: ['xs', 'sm', 'md', 'lg', 'xl', 'circle'],
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const defaultArgs: {} = {
	theme: 'primary',
	disabled: false,
	size: 'medium',
	radiusType: 'default',
	radiusSize: 'xs',
};
export const Primary = Template.bind({});
Primary.args = {
	...defaultArgs,
	theme: 'primary',
	children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	...defaultArgs,
	theme: 'secondary',
	children: 'Secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	...defaultArgs,
	theme: 'tertiary',
	children: 'Tertiary',
};
