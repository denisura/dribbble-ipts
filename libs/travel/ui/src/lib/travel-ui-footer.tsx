import { useNavigationContext } from '@ipts/core-data-navigation-provider';
import { PrimaryContainer, SharedUiNavigationList } from '@ipts/core/ui';

export interface TravelUiFooterProps {
  onClick?: () => void;
}

export const TravelUiFooter = ({ onClick }: TravelUiFooterProps) => {
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

export default TravelUiFooter;
