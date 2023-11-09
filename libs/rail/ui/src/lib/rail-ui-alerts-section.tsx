import { useBulletinContext } from '@ipts/core-data-bulletin-provider';
import { SharedUiBulletinSection } from '@ipts/core/ui';

export const RailUiAlertsSection = () => {
  const data = useBulletinContext();
  return (
    <SharedUiBulletinSection title="Latest Alerts" {...data} color="error" />
  );
};
export default RailUiAlertsSection;
