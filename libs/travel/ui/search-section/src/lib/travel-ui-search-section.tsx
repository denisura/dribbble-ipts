import { SharedUiSearchHeader } from '@ipts/shared-ui-search-header';
import { SharedUiPrimaryContainer } from '@ipts/shared-ui-primary-container';

export const TravelUiSearchSection = () => {
  return (
    <SharedUiPrimaryContainer
      sx={{
        minHeight: '10vh',
        pt: 4,
        pb: 4,
        mb: 6,
        position: 'relative',
      }}
    >
      <SharedUiSearchHeader
        title="Book your trip"
        from={{ label: 'EAT', description: 'Florida' }}
        to={{ label: 'TO', description: 'Your Destination' }}
      />
    </SharedUiPrimaryContainer>
  );
};

export default TravelUiSearchSection;
