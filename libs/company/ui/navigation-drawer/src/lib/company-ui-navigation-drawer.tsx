import styles from './company-ui-navigation-drawer.module.scss';

/* eslint-disable-next-line */
export interface CompanyUiNavigationDrawerProps {}

export function CompanyUiNavigationDrawer(
  props: CompanyUiNavigationDrawerProps
) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CompanyUiNavigationDrawer!</h1>
    </div>
  );
}

export default CompanyUiNavigationDrawer;
