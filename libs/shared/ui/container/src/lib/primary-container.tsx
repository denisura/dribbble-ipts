import { styled } from '@ipts/shared-ui-theme';
import Container, { ContainerProps } from '@mui/material/Container';

const SolidBackgroundContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

export const PrimaryContainer = ({
  children,
  ...containerProps
}: ContainerProps) => {
  return (
    <SolidBackgroundContainer maxWidth={false} disableGutters>
      <Container {...containerProps}>{children}</Container>
    </SolidBackgroundContainer>
  );
};

export default PrimaryContainer;
