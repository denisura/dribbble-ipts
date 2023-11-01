import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigationContext } from '@ipts/shared-data-navigation-provider';
import { Container, Link, Stack } from '@mui/material';
import { styled } from '@ipts/shared-ui-theme';

export const SharedUiPrimaryContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

/* eslint-disable-next-line */
export interface CompanyUiFooterProps {}

export const CompanyUiFooter = (props: CompanyUiFooterProps) => {
  const { secondary, social } = useNavigationContext();

  return (
    <SharedUiPrimaryContainer
      sx={{
        textAlign: 'start',
        pb: 4,
        pt: 2,
      }}
      maxWidth={false}
    >
      <List>
        {secondary &&
          secondary.map(({ label, key, onClick }) => (
            <ListItem key={key} disablePadding>
              <ListItemButton
                disableTouchRipple={true}
                sx={{ textAlign: 'start', p: 0, minHeight: 32 }}
                onClick={onClick}
              >
                <ListItemText color="inherit">{label}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
      </List>

      <Typography variant="subtitle1" color="inherit" gutterBottom>
        Follow Us
      </Typography>

      <Stack gap={1} direction="row" justifyContent="start">
        {social &&
          social.map(({ label, key, to, icon }) => (
            <Link href={to} key={key} color="inherit">
              {icon ? icon : label}
            </Link>
          ))}
      </Stack>
    </SharedUiPrimaryContainer>
  );
};

export default CompanyUiFooter;
