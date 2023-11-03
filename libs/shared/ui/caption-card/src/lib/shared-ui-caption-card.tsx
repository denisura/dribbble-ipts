import Box from '@mui/material/Box';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const SharedUiCaptionCard = ({ title }: { title: string }) => (
  <Box sx={{ width: '100%', height: '100%' }}>
    <Card
      variant="outlined"
      color="secondary"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          pr: '10%',
        }}
      >
        <Typography variant="h3" color="text.secondary" gutterBottom>
          {title}
          <ArrowForwardRoundedIcon color="secondary" />
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default SharedUiCaptionCard;
