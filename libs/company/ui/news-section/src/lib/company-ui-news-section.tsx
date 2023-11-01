import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { useNewsContext } from '@ipts/company-data-news-provider';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  ListItemButton,
} from '@mui/material';

/* eslint-disable-next-line */
export interface CompanyUiNewsSectionProps {}

export function CompanyUiNewsSection(props: CompanyUiNewsSectionProps) {
  const { news, loadMoreNews, hasMoreNews } = useNewsContext();
  return (
    <Container sx={{ pt: 4, pb: 8 }}>
      <Typography variant="h6" gutterBottom>
        Latest News
      </Typography>
      <List>
        {news.map((item, index) => (
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
            {index < news.length - 1 && <Divider />}
          </div>
        ))}
      </List>
      {hasMoreNews && (
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          onClick={loadMoreNews}
        >
          Load More News
        </Button>
      )}
      {!hasMoreNews && (
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          onClick={loadMoreNews}
        >
          View All News
        </Button>
      )}
    </Container>
  );
}

export default CompanyUiNewsSection;
