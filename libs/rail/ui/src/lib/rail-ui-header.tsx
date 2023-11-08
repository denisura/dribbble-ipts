import { useNavigationContext } from '@ipts/shared-data-navigation-provider';
import { SharedUiHeader } from '@ipts/shared-ui-header';

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
