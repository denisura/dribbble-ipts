import { useNavigationContext } from '@ipts/core-data-navigation-provider';
import { PrimaryContainer, SharedUiNavigationList } from '@ipts/core/ui';

export interface RailUiFooterProps {
  onClick?: () => void;
}

export const RailUiFooter = ({ onClick }: RailUiFooterProps) => {
  const { secondary } = useNavigationContext();

  return (
    <PrimaryContainer
      sx={{
        textAlign: 'start',
        pb: 4,
        pt: 2,
      }}
      onClick={onClick}
    >
      <SharedUiNavigationList navItems={secondary} color="inherit" />
    </PrimaryContainer>
  );
};

export default RailUiFooter;
