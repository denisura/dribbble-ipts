import { PropsWithChildren } from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';

export const DrawerHeader = ({ children }: PropsWithChildren) => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, px: 6 }}>
        {children}
      </Typography>
      <Divider />
    </Box>
  );
};

export default DrawerHeader;
