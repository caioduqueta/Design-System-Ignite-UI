import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@duqueta-ignite-ui/react'

export default {
  title: 'Data/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/caioduqueta.png',
    alt: 'Caio Duque',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
