import { styled } from '@ipts/shared-ui-theme';
import Container, { ContainerProps } from '@mui/material/Container';
// import { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';

export const SolidBackgroundContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

export const SharedUiPrimaryContainer = ({
  children,
  ...containerProps
}: ContainerProps) => {
  return (
    <SolidBackgroundContainer maxWidth={false}>
      <Container {...containerProps}>{children}</Container>
    </SolidBackgroundContainer>
  );
};

export default SharedUiPrimaryContainer;
