import Typography from '@mui/material/Typography';
import { Link, Stack } from '@mui/material';
import { NavigationItem } from '@ipts/core-data-navigation-provider';

export interface SharedUiNavigationStackProps {
  navItems: NavigationItem[];
  subtitle?: string;
}

export const SharedUiNavigationStack = ({
  navItems,
  subtitle,
}: SharedUiNavigationStackProps) => {
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
