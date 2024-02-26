import React, { forwardRef } from 'react';
import classNames from 'classnames';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import styles from './Dialog.module.css';

const DialogRoot = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;

export const DialogClose = DialogPrimitive.Close;

const DialogOverlay = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={classNames(styles.dialog__overlay, className)}
    {...props}
  />
));

const DialogContent = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children, className, ...props }, ref) => (
  <DialogPrimitive.Content
    ref={ref}
    className={classNames(styles.dialog__content, className)}
    {...props}
  >
    {children}
  </DialogPrimitive.Content>
));

export interface DialogProps
  extends React.ComponentPropsWithoutRef<typeof DialogContent> {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dialog = ({
  children,
  open,
  onOpenChange,
  className,
  ...props
}: DialogProps) => (
  <DialogRoot open={open} onOpenChange={onOpenChange}>
    <DialogPortal>
      <DialogOverlay />
      <DialogContent className={className} {...props}>
        <DialogClose asChild>
          <button>x</button>
        </DialogClose>
        {children}
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
);

export default Dialog;
