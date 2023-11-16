import { useBulletinContext } from '@ipts/core-data-bulletin-provider';
import { SharedUiBulletinSection } from '@ipts/core/ui';

export const CompanyUiNewsSection = () => {
  const data = useBulletinContext();
  return <SharedUiBulletinSection title="Latest News" {...data} />;
};
export default CompanyUiNewsSection;
