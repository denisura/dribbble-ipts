import styles from './travel-ui-search-section.module.scss';

/* eslint-disable-next-line */
export interface TravelUiSearchSectionProps {}

export function TravelUiSearchSection(props: TravelUiSearchSectionProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TravelUiSearchSection!</h1>
    </div>
  );
}

export default TravelUiSearchSection;
