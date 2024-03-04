import type { Meta, StoryObj } from '@storybook/react';

import z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormFieldWrapper,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ui-kit/Form/Form';

import Input from '@src/ui-kit/Input/Input';

const meta = {
  title: 'Example/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

const checkboxScheama = z.object({
  available: z.string().default(''),
});

type TCheckboxSchema = z.infer<typeof checkboxScheama>;

const FormCheckbox = () => {
  const form = useForm<TCheckboxSchema>({
    resolver: zodResolver(checkboxScheama),
    defaultValues: {
      available: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((values) => console.log(values))}>
        <FormField
          control={form.control}
          name="available"
          render={({ field, fieldState }) => (
            <FormFieldWrapper label={<p>123</p>}>
              <Input
                placeholder="Password"
                type="password"
                invalid={fieldState.invalid}
                {...field}
              />
            </FormFieldWrapper>
          )}
        />
      </form>
    </Form>
  );
};

export const Primary: Partial<Story> = { render: () => <FormCheckbox /> };

const FormWithFieldWrapper = () => {
  const form = useForm<TCheckboxSchema>({
    resolver: zodResolver(checkboxScheama),
    defaultValues: {
      available: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((values) => console.log(values))}>
        <FormField
          control={form.control}
          name="available"
          render={() => (
            <FormItem>
              <FormControl>
                <Input placeholder="test" type="password" />
              </FormControl>
              <FormLabel>password</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export const Secondary: Partial<Story> = {
  render: () => <FormWithFieldWrapper />,
};
