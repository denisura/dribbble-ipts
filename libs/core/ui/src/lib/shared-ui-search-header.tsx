import { Button, IconButton, Typography, styled } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

export interface SharedUiSearchHeaderLocationProps {
  label: string;
  description: string;
}

export interface SharedUiSearchHeaderProps {
  title: string;
  from: SharedUiSearchHeaderLocationProps;
  to: SharedUiSearchHeaderLocationProps;
}

const ExpanderButton = styled(Button)({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translate(-50%,50%)',
  borderTopLeftRadius: '50%',
  borderTopRightRadius: '50%',
  borderBottomRightRadius: '0',
  borderBottomLeftRadius: '0',
  borderBottom: 0,
  width: '64px',
  height: '64px',
  boxShadow: 'none',
  alignItems: 'start',
});

export const SharedUiSearchHeader = ({
  title,
  from,
  to,
}: SharedUiSearchHeaderProps) => {
  return (
    <Box>
      <Typography variant="overline">{title}</Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 2fr',
          gridTemplateRows: '72px 24px',
          gridColumnGap: '16px',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        <Typography variant="h2">{from.label}</Typography>
        <IconButton
          color="inherit"
          aria-label="Reverse origin and destination city or airport"
          size="large"
        >
          <SwapHorizIcon fontSize="inherit" />
        </IconButton>
        <Typography variant="h2">{to.label}</Typography>
        <Typography variant="body2">{from.description}</Typography>
        <span />
        <Typography variant="body2">{to.description}</Typography>
      </Box>
      <ExpanderButton variant="outlined" color="inherit">
        <ExpandMoreIcon />
      </ExpanderButton>
    </Box>
  );
};

export default SharedUiSearchHeader;
