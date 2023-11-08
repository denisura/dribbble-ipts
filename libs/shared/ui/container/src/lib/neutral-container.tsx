import { styled } from '@ipts/shared-ui-theme';
import Container, { ContainerProps } from '@mui/material/Container';

const SolidBackgroundContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.neutral.main,
}));

export const NeutralContainer = ({
  children,
  ...containerProps
}: ContainerProps) => {
  return (
    <SolidBackgroundContainer maxWidth={false} disableGutters>
      <Container {...containerProps}>{children}</Container>
    </SolidBackgroundContainer>
  );
};

export default NeutralContainer;
