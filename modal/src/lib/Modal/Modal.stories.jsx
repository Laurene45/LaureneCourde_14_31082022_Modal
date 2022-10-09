import React from 'react';
import Modal from './Modal';
import './Modal.scss';

export default {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: 'Modal component',
      },
    },
  },
  argTypes: {
    children: {
      description: 'body',
      type: { summary: 'string', required: true },
      defaultValue: <p> [Votre Texte]</p>,
    },
    show: {
      description: 'Show Modal',
      type: { summary: 'boolean', required: true },
      control: {
        type: 'boolean',
      },
    },
    title: {
      description: 'Title',
      type: { summary: 'string', required: true },
      control: {
        type: 'text',
      },
    },
    onClose: {
      description: 'function close Modal',
      type: { summary: 'func', required: true },
      control: {
        type: 'function',
      },
      action: 'onClose',
    },
    footer: {
      description: 'button Modal',
      type: { summary: 'string', required: true },
      defaultValue: <p> [Text button]</p>,
    },
  },
};

const Template = (args) => <Modal {...args} />;

export const ModalStory = Template.bind({});
ModalStory.args = {
  show: false,
  title: 'Success',
};