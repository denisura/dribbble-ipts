import { NeutralContainer, SharedUiSubscriptionForm } from '@ipts/core/ui';

export const RailUiSubscriptionSection = () => {
  return (
    <NeutralContainer sx={{ minHeight: '20vh', pt: 2, pb: 4 }}>
      <SharedUiSubscriptionForm
        title="Subscribe to stay alert"
        body="Receive timely alerts about delays and changes in routes."
        ctaLabel="Subscribe"
      />
    </NeutralContainer>
  );
};

export default RailUiSubscriptionSection;
