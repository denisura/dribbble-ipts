import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export interface SharedUiSubscriptionFormProps {
  title: string;
  body?: string;
  ctaLabel: string;
}

export const SharedUiSubscriptionForm = ({
  title,
  body,
  ctaLabel,
}: SharedUiSubscriptionFormProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="start"
      margin="auto"
      sx={{ p: 4, background: '#fff' }}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      {body && (
        <Typography variant="body1" gutterBottom>
          {body}
        </Typography>
      )}
      <TextField
        label="Email"
        variant="filled"
        fullWidth
        margin="normal"
        color="secondary"
        size="small"
      />
      <Button variant="contained" color="secondary">
        {ctaLabel}
      </Button>
    </Box>
  );
};

export default SharedUiSubscriptionForm;
