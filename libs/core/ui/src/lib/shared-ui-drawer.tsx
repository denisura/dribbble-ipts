import { createPortal } from 'react-dom';

import Drawer from '@mui/material/Drawer';
import { createContext, useContext } from 'react';
import invariant from 'invariant';
import { useToggle } from 'react-use';

export interface SharedUiDrawerProps {
  children: (toggle: () => void) => React.ReactNode;
}

export type DrawerStateContextProp = [boolean, (nextValue?: any) => void];

export const DrawerStateContext = createContext<DrawerStateContextProp>([
  false,
  () => {},
]);

export const useDrawerStateContext = () => {
  const context = useContext(DrawerStateContext);
  invariant(
    context,
    'useDrawerStateContext must be used within DrawerStateProvider'
  );
  return context;
};

export interface DrawerStateProviderProps {
  open?: boolean;
  children?: React.ReactNode;
}

export const DrawerStateProvider = ({
  open = false,
  children,
}: DrawerStateProviderProps) => {
  return (
    <DrawerStateContext.Provider value={useToggle(open)}>
      {children}
    </DrawerStateContext.Provider>
  );
};

export const SharedUiDrawer = ({ children }: SharedUiDrawerProps) => {
  const [open, toggle] = useDrawerStateContext();

  return (
    <>
      {createPortal(
        <Drawer
          anchor="right"
          variant="temporary"
          open={open}
          onClose={toggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 'max(60vw,250px)',
            },
          }}
        >
          {children(toggle)}
        </Drawer>,
        document.body
      )}
    </>
  );
};

export default SharedUiDrawer;
