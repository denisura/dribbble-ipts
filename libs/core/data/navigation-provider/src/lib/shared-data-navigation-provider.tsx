import { createContext, useContext } from 'react';
import invariant from 'invariant';

export type NavigationItem = {
  label?: string;
  to?: string;
  icon?: JSX.Element | null;
  key: string;
  onClick: () => void;
};

export type NavigationData = {
  [key: string]: NavigationItem[];
};

export const NavigationContext = createContext<NavigationData>({});

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  invariant(
    context,
    'useNavigationContext must be used within NavigationProvider'
  );
  return context;
};

export interface SharedDataNavigationProviderProps {
  value: NavigationData;
  children?: React.ReactNode;
}

export function SharedDataNavigationProvider({
  value,
  children,
}: SharedDataNavigationProviderProps) {
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export default SharedDataNavigationProvider;
