import Container from '@mui/material/Container';
import { ArticleProps } from '@ipts/core-data-bulletin-provider';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  ListItemButton,
} from '@mui/material';

export interface SharedUiBulletinSectionProps {
  items: ArticleProps[];
  loadMore: () => void;
  showMore: () => void;
  hasMore: boolean;
  title: string;
  color?: 'primary' | 'error';
}

export function SharedUiBulletinSection({
  items,
  loadMore,
  hasMore,
  showMore,
  title,
  color = 'primary',
}: SharedUiBulletinSectionProps) {
  return (
    <Container sx={{ pt: 4, pb: 8 }}>
      <Typography variant="h6" gutterBottom color={color}>
        {title}
      </Typography>
      <List>
        {items.map((item, index) => (
          <div key={index}>
            <ListItem sx={{ textAlign: 'start', p: 0 }}>
              <ListItemButton
                sx={{
                  textAlign: 'start',
                  p: 0,
                  minHeight: 32,
                }}
              >
                <ListItemText primary={item.title} sx={{ fontWeight: 900 }} />
              </ListItemButton>
            </ListItem>
            {index < items.length - 1 && <Divider />}
          </div>
        ))}
      </List>
      {hasMore && (
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          onClick={loadMore}
        >
          Load More
        </Button>
      )}
      {!hasMore && (
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          onClick={showMore}
        >
          View All
        </Button>
      )}
    </Container>
  );
}

export default SharedUiBulletinSection;
