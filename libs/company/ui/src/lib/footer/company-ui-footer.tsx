import { useNavigationContext } from '@ipts/shared-data-navigation-provider';
import { PrimaryContainer } from '@ipts/shared/ui/container';
import { SharedUiNavigationList } from '@ipts/shared-ui-navigation-list';
import { SharedUiNavigationStack } from '@ipts/shared-ui-navigation-stack';

export interface CompanyUiFooterProps {
  onClick?: () => void;
}

export const CompanyUiFooter = ({ onClick }: CompanyUiFooterProps) => {
  const { secondary, social } = useNavigationContext();

  return (
    <PrimaryContainer
      onClick={onClick}
      sx={{
        textAlign: 'start',
        pb: 4,
        pt: 2,
      }}
    >
      <SharedUiNavigationList navItems={secondary} color="inherit" />
      <SharedUiNavigationStack subtitle="Find us" navItems={social} />
    </PrimaryContainer>
  );
};

export default CompanyUiFooter;
