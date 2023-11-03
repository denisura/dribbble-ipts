import { useBulletinContext } from '@ipts/shared-data-bulletin-provider';
import { SharedUiBulletinSection } from '@ipts/shared-ui-bulletin-section';

export const CompanyUiNewsSection = () => {
  const data = useBulletinContext();
  return <SharedUiBulletinSection title="Latest News" {...data} />;
};
export default CompanyUiNewsSection;
