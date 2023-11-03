import styles from './rail-ui-search-section.module.scss';

/* eslint-disable-next-line */
export interface RailUiSearchSectionProps {}

export function RailUiSearchSection(props: RailUiSearchSectionProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Search!</h1>
    </div>
  );
}

export default RailUiSearchSection;
