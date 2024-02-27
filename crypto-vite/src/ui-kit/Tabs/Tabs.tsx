import classNames from 'classnames';

import React, { forwardRef } from 'react';

import * as TabsPrimitive from '@radix-ui/react-tabs';

import styles from './Tabs.module.css';

export const TabsRoot = TabsPrimitive.Root;
export const TabsList = TabsPrimitive.List;
export const TabsContent = TabsPrimitive.Content;

interface ITabsTriggerProps
  extends React.ComponentPropsWithRef<typeof TabsPrimitive.Trigger> {
  size?: 'large' | 'medium';
}

export const TabsTrigger = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  ITabsTriggerProps
>(({ size = 'large', children, value, className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={classNames(
      styles.tabs,
      {
        [styles['tabs__trigger--large']]: size === 'large',
        [styles['tabs__trigger--medium']]: size === 'medium',
      },
      className
    )}
    value={value}
    {...props}
  >
    {children}
  </TabsPrimitive.Trigger>
));
