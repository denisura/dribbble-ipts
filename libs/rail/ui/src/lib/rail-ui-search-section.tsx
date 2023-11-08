import { SharedUiSearchHeader } from '@ipts/shared-ui-search-header';
import { PrimaryContainer } from '@ipts/shared/ui/container';

export const RailUiSearchSection = () => {
  return (
    <PrimaryContainer
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
    </PrimaryContainer>
  );
};

export default RailUiSearchSection;
