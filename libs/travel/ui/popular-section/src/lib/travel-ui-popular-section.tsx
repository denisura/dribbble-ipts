import styles from './travel-ui-popular-section.module.scss';

/* eslint-disable-next-line */
export interface TravelUiPopularSectionProps {}

export function TravelUiPopularSection(props: TravelUiPopularSectionProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TravelUiPopularSection!</h1>
    </div>
  );
}

export default TravelUiPopularSection;
