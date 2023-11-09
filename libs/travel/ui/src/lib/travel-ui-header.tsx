import { useNavigationContext } from '@ipts/core-data-navigation-provider';
import { SharedUiHeader } from '@ipts/core/ui';

export interface TravelUiHeaderProps {
  children: React.ReactElement;
  title: React.ReactElement | string | React.ReactNode;
}

export const TravelUiHeader = ({ title, children }: TravelUiHeaderProps) => {
  const { main } = useNavigationContext();
  return (
    <SharedUiHeader title={title} navItems={main}>
      {children}
    </SharedUiHeader>
  );
};
export default TravelUiHeader;
