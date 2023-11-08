import Typography from '@mui/material/Typography';
import { Link, Stack } from '@mui/material';
import { NavigationItem } from '@ipts/shared-data-navigation-provider';

export interface SharedUiNavigationListProps {
  navItems: NavigationItem[];
  subtitle?: string;
}

export const SharedUiNavigationStack = ({
  navItems,
  subtitle,
}: SharedUiNavigationListProps) => {
  return (
    <>
      <Typography variant="subtitle1" color="inherit" gutterBottom>
        {subtitle}
      </Typography>
      <Stack gap={1} direction="row" justifyContent="start">
        {navItems.map(({ label, key, to, icon }) => (
          <Link href={to} key={key} color="inherit">
            {icon ? icon : label}
          </Link>
        ))}
      </Stack>
    </>
  );
};

export default SharedUiNavigationStack;
