import { NeutralContainer, SharedUiSubscriptionForm } from '@ipts/core/ui';

export const TravelUiDealSubscriptionSection = () => {
  return (
    <NeutralContainer sx={{ minHeight: '20vh', pt: 2, pb: 4 }} disableGutters>
      <SharedUiSubscriptionForm
        title="Subscribe to our deals"
        body="Be the the first to know about discounts and upcoming promotions."
        ctaLabel="Subscribe"
      />
    </NeutralContainer>
  );
};

export default TravelUiDealSubscriptionSection;
