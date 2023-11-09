import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const SharedUiActionCard = ({
  title,
  background,
  ctaLabel,
}: {
  title: string;
  background: string;
  ctaLabel: string;
}) => (
  <Box sx={{ width: '100%', height: '100%' }}>
    <Card
      sx={{
        background: `url(${background})`,
        backgroundSize: 'cover',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent
        sx={{
          pr: '20%',
          alignItems: 'end',
          background: 'linear-gradient(128deg, rgba(0,0,0,1), rgba(0,0,0,0))', // Dark gradient background
          flexGrow: 1,
        }}
      >
        <Typography variant="h5" color="white" gutterBottom>
          {title}
        </Typography>
        <Button size="small" color="secondary" variant="contained">
          {ctaLabel}
        </Button>
      </CardContent>
    </Card>
  </Box>
);

export default SharedUiActionCard;
