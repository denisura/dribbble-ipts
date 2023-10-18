import styles from './company-ui-header.module.scss';

/* eslint-disable-next-line */
export interface CompanyUiHeaderProps {}

export function CompanyUiHeader(props: CompanyUiHeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CompanyUiHeader!</h1>
    </div>
  );
}

export default CompanyUiHeader;
