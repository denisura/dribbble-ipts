import styles from './company-ui-footer.module.scss';

/* eslint-disable-next-line */
export interface CompanyUiFooterProps {}

export function CompanyUiFooter(props: CompanyUiFooterProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CompanyUiFooter!</h1>
    </div>
  );
}

export default CompanyUiFooter;
