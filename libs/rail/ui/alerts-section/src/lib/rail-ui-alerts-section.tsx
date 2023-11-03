import styles from './rail-ui-alerts-section.module.scss';

/* eslint-disable-next-line */
export interface RailUiAlertsSectionProps {}

export function RailUiAlertsSection(props: RailUiAlertsSectionProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Alerts!</h1>
    </div>
  );
}

export default RailUiAlertsSection;
