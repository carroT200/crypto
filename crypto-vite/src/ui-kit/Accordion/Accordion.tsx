import { forwardRef } from 'react';

import classNames from 'classnames';

import * as AccordionPrimitive from '@radix-ui/react-accordion';

import styles from './Accordion.module.css';

export const AccordionRoot = AccordionPrimitive.Root;
export const AccordionItem = AccordionPrimitive.Item;
export const AccordionContent = ({
  children,
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content className={styles.content}>
    {children}
  </AccordionPrimitive.Content>
);

interface AccordionProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  size?: 'large' | 'medium';
}

export const AccordionTrigger = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionProps
>(({ value, children, size = 'large', className, ...props }, ref) => (
  <AccordionPrimitive.Trigger
    ref={ref}
    value={value}
    className={classNames(
      styles.accordion__trigger,
      {
        [styles['accordion__trigger--large']]: size === 'large',
        [styles['accordion__trigger--medium']]: size === 'medium',
      },
      className
    )}
    {...props}
  >
    <div className={styles.trigger__content}>
      {children}
      <div className={styles.accordion__trigger__icon} />
    </div>
  </AccordionPrimitive.Trigger>
));
