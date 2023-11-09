import { useNavigationContext } from '@ipts/core-data-navigation-provider';
import { SharedUiHeader } from '@ipts/core/ui';

export interface RailUiHeaderProps {
  children: React.ReactElement;
  title: React.ReactElement | string | React.ReactNode;
}

export const RailUiHeader = ({ title, children }: RailUiHeaderProps) => {
  const { main } = useNavigationContext();
  return (
    <SharedUiHeader title={title} navItems={main}>
      {children}
    </SharedUiHeader>
  );
};

export default RailUiHeader;
