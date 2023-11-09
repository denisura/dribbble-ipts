import { PrimaryContainer, SharedUiSearchHeader } from '@ipts/core/ui';

export const TravelUiSearchSection = () => {
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
        title="Book your trip"
        from={{ label: 'EAT', description: 'Florida' }}
        to={{ label: 'TO', description: 'Your Destination' }}
      />
    </PrimaryContainer>
  );
};

export default TravelUiSearchSection;
