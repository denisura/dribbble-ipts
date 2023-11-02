import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';
import { useScrolledToTop } from '@ipts/shared-hooks';
import { SharedUiBackgroundContainer } from '@ipts/shared-ui-background-container';
import { useTheme } from '@ipts/shared-ui-theme';

export interface SharedUiHeroProps {
  backgroundUrl: string;
  title: string | React.ReactNode;
  subTitle: string;
}

export const SharedUiHero = ({
  backgroundUrl,
  title,
  subTitle,
}: SharedUiHeroProps) => {
  const isScrolledToTop = useScrolledToTop();
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="md">
        <Collapse in={isScrolledToTop}>
          <Fade in={isScrolledToTop}>
            <Container
              maxWidth={false}
              sx={{
                height: '40vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start',
              }}
            >
              <Typography
                variant="h1"
                component="div"
                sx={{
                  fontWeight: 700,
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  background: theme.palette.primary.main,
                  pr: 1,
                  pl: 1,
                }}
              >
                {subTitle}
              </Typography>
            </Container>
          </Fade>
        </Collapse>
      </Container>
      <Fade in={isScrolledToTop}>
        <SharedUiBackgroundContainer
          maxWidth={false}
          backgroundUrl={backgroundUrl}
        />
      </Fade>
    </>
  );
};

export default SharedUiHero;
