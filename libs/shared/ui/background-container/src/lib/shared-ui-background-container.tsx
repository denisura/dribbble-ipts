import Container from '@mui/material/Container';
import { styled } from '@ipts/shared-ui-theme';

export interface SharedUiBackgroundContainerProps {
  backgroundUrl: string;
}

export const SharedUiBackgroundContainer = styled(Container, {
  shouldForwardProp: (prop) => prop !== 'backgroundUrl',
})(({ backgroundUrl }: SharedUiBackgroundContainerProps) => ({
  backgroundImage: `url(${backgroundUrl})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '100% center',
  backgroundSize: 'cover',
  position: 'absolute',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
  zIndex: -1,
}));

export default SharedUiBackgroundContainer;
