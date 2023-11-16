import { useNavigationContext } from '@ipts/core-data-navigation-provider';
import { SharedUiHeader } from '@ipts/core/ui';

export interface CompanyUiHeaderProps {
  children: React.ReactElement;
  title: React.ReactElement | string | React.ReactNode;
}

export const CompanyUiHeader = ({ title, children }: CompanyUiHeaderProps) => {
  const { main } = useNavigationContext();
  return (
    <SharedUiHeader title={title} navItems={main}>
      {children}
    </SharedUiHeader>
  );
};
export default CompanyUiHeader;
