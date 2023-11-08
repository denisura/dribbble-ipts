import { useBulletinContext } from '@ipts/shared-data-bulletin-provider';
import { SharedUiBulletinSection } from '@ipts/shared-ui-bulletin-section';

export const RailUiAlertsSection = () => {
  const data = useBulletinContext();
  return (
    <SharedUiBulletinSection title="Latest Alerts" {...data} color="error" />
  );
};
export default RailUiAlertsSection;
