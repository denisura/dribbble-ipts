import { NeutralContainer, SharedUiSubscriptionForm } from '@ipts/core/ui';

export const CompanyUiNewsSubscriptionSection = () => {
  return (
    <NeutralContainer sx={{ minHeight: '20vh', pt: 2, pb: 4 }}>
      <SharedUiSubscriptionForm
        title="Subscribe to our news letter"
        body="Get the latest updates and news in your inbox."
        ctaLabel="Subscribe"
      />
    </NeutralContainer>
  );
};

export default CompanyUiNewsSubscriptionSection;
