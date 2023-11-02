import Container from '@mui/material/Container';
import { styled } from '@ipts/shared-ui-theme';

export const SharedUiSecondaryContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.neutral.main,
}));

import { SharedUiSubscriptionForm } from '@ipts/shared-ui-subscription-form';

export const TravelUiDealSubscriptionSection = () => {
  return (
    <SharedUiSecondaryContainer
      sx={{ minHeight: '20vh', pt: 2, pb: 4 }}
      maxWidth={false}
    >
      <SharedUiSubscriptionForm
        title="Subscribe to our deals"
        body="Be the the first to know about discounts and upcoming promotions."
        ctaLabel="Subscribe"
      />
    </SharedUiSecondaryContainer>
  );
};

export default TravelUiDealSubscriptionSection;
