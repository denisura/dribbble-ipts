import Container from '@mui/material/Container';
import { styled } from '@ipts/shared-ui-theme';

export const SharedUiSecondaryContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.neutral.main,
}));

import { SharedUiSubscriptionForm } from '@ipts/shared-ui-subscription-form';

export const CompanyUiNewsSubscriptionSection = () => {
  return (
    <SharedUiSecondaryContainer
      sx={{ minHeight: '20vh', pt: 2, pb: 4 }}
      maxWidth={false}
    >
      <SharedUiSubscriptionForm
        title="Subscribe to our news letter"
        body="Get the latest updates and news in your inbox."
        ctaLabel="Subscribe"
      />
    </SharedUiSecondaryContainer>
  );
};

export default CompanyUiNewsSubscriptionSection;
