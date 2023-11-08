import Typography from '@mui/material/Typography';
import { useNavigationContext } from '@ipts/shared-data-navigation-provider';
import { Link, Stack } from '@mui/material';
import { PrimaryContainer } from '@ipts/shared/ui/container';
import { SharedUiNavigationList } from '@ipts/shared-ui-navigation-list';

export interface CompanyUiFooterProps {
  onClick?: () => void;
}

export const CompanyUiFooter = ({ onClick }: CompanyUiFooterProps) => {
  const { secondary, social } = useNavigationContext();

  return (
    <PrimaryContainer
      onClick={onClick}
      sx={{
        textAlign: 'start',
        pb: 4,
        pt: 2,
      }}
    >
      <SharedUiNavigationList navItems={secondary} color="inherit" />

      <Typography variant="subtitle1" color="inherit" gutterBottom>
        Follow Us
      </Typography>
      <Stack gap={1} direction="row" justifyContent="start">
        {social.map(({ label, key, to, icon }) => (
          <Link href={to} key={key} color="inherit">
            {icon ? icon : label}
          </Link>
        ))}
      </Stack>
    </PrimaryContainer>
  );
};

export default CompanyUiFooter;
