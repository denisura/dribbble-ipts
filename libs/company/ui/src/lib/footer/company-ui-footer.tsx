import { useNavigationContext } from '@ipts/core-data-navigation-provider';
import {
  PrimaryContainer,
  SharedUiNavigationList,
  SharedUiNavigationStack,
} from '@ipts/core/ui';

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
