import { useNavigationContext } from '@ipts/shared-data-navigation-provider';
import { SharedUiNavigationList } from '@ipts/shared-ui-navigation-list';
import { SharedUiPrimaryContainer } from '@ipts/shared-ui-primary-container';

export interface RailUiFooterProps {
  onClick?: () => void;
}

export const RailUiFooter = ({ onClick }: RailUiFooterProps) => {
  const { secondary } = useNavigationContext();

  return (
    <SharedUiPrimaryContainer
      sx={{
        textAlign: 'start',
        pb: 4,
        pt: 2,
      }}
      onClick={onClick}
    >
      <SharedUiNavigationList navItems={secondary} color="inherit" />
    </SharedUiPrimaryContainer>
  );
};

export default RailUiFooter;
