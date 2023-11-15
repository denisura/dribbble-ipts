import Box, { BoxProps } from '@mui/material/Box';

export const Placeholder = (props: BoxProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255, 0, 0, 0.3)',
        width: '100%',
        height: '100%',
        minHeight: '32px',
      }}
      {...props}
    />
  );
};

export default Placeholder;
