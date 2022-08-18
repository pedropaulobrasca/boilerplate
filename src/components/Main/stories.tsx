import { Meta, Story } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'title basic',
  description: 'description basic'
}

export const Teste: Story = (args) => <Main {...args} />
Teste.args = {
  title: 'title teste',
  description: 'description teste'
}

export const Default: Story = (args) => <Main {...args} />
