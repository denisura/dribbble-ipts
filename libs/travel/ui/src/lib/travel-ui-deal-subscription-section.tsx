import { NeutralContainer } from '@ipts/shared/ui/container';
import { SharedUiSubscriptionForm } from '@ipts/shared-ui-subscription-form';

export const TravelUiDealSubscriptionSection = () => {
  return (
    <NeutralContainer sx={{ minHeight: '20vh', pt: 2, pb: 4 }}>
      <SharedUiSubscriptionForm
        title="Subscribe to our deals"
        body="Be the the first to know about discounts and upcoming promotions."
        ctaLabel="Subscribe"
      />
    </NeutralContainer>
  );
};

export default TravelUiDealSubscriptionSection;
