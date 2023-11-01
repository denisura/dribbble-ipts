import Box from '@mui/material/Box';
import { useTheme } from '@ipts/shared-ui-theme';

export interface SharedUiLinearLayoutProps {
  backgroundUrl?: string;
  children?: React.ReactNode;
}

export const SharedUiLinearLayout = ({
  backgroundUrl,
  children,
}: SharedUiLinearLayoutProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        paddingBottom: '200px',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 16,
          left: 0,
          right: 0,
          width: '100%',
          maxHeight: '200px',
          backgroundColor: theme.palette.primary.light,
          mask: `url(${backgroundUrl})`,
          maskRepeat: 'repeat-x',
          maskPosition: 'bottom',
          backgroundSize: 'contain',
          minHeight: '180px',
        },
      }}
    >
      {children}
    </Box>
  );
};

export default SharedUiLinearLayout;
