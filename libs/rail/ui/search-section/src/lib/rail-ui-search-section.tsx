import { SharedUiSearchHeader } from '@ipts/shared-ui-search-header';
import { SharedUiPrimaryContainer } from '@ipts/shared-ui-primary-container';

export const RailUiSearchSection = () => {
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
        title="Flights schedule"
        from={{ label: 'EAT', description: 'Florida' }}
        to={{ label: 'TO', description: 'Any Destination' }}
      />
    </SharedUiPrimaryContainer>
  );
};

export default RailUiSearchSection;
