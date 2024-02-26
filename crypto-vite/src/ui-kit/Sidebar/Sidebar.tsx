import classNames from 'classnames';

import Dialog from '../Dialog/Dialog';

import styles from './Sidebar.module.css';

interface ISideBarProps extends React.ComponentPropsWithoutRef<typeof Dialog> {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({
  children,
  className,
  open,
  onOpenChange,
  ...props
}: ISideBarProps) => (
  <Dialog
    open={open}
    onOpenChange={onOpenChange}
    {...props}
    className={classNames(styles.sidebar, className)}
  >
    {children}
  </Dialog>
);

export default Sidebar;
