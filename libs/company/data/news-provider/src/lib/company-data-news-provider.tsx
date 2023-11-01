import { createContext, useContext, useMemo, useState } from 'react';
import invariant from 'invariant';

export interface CompanyDataNewsProviderProps {
  children?: React.ReactNode;
}

type NewsItem = {
  title: string;
  url: string;
};

export interface NewsContext {
  news: NewsItem[];
  hasMoreNews: boolean;
  loadMoreNews: () => void;
}

export const NewsContext = createContext<NewsContext>({
  news: [],
  hasMoreNews: true,
  loadMoreNews: () => {},
});

export const useNewsContext = () => {
  const context = useContext(NewsContext);
  invariant(
    context,
    'useNewsContext must be used within CompanyDataNewsProvider'
  );
  return context;
};

export const CompanyDataNewsProvider = ({
  children,
}: CompanyDataNewsProviderProps) => {
  const initialNews: NewsItem[] = [
    { title: 'IPTS Launches Historic Mars Mission', url: '#' },
    { title: 'Luxurious Orbital Hotels Unveiled by IPTS', url: '#' },
    { title: 'IPTS Plans Manned Mission to Venus', url: '#' },
    { title: 'IPTS to Offer Trips to Gas Giants', url: '#' },
    { title: 'Exploring Uranus and Neptune with IPTS', url: '#' },
    { title: 'Orbital Research Lab to Boost Scientific Discoveries', url: '#' },
    { title: "Book Now: IPTS' Lunar Vacation", url: '#' },
    { title: 'Record Applications for IPTS Astronaut Training', url: '#' },
    { title: 'IPTS and NASA Partner on Moon Base', url: '#' },
    {
      title: 'IPTS Adopts Green Initiatives for Sustainable Space Travel',
      url: '#',
    },
  ];

  const [news, setNews] = useState<NewsItem[]>(initialNews.slice(0, 5));
  const [nextIndex, setNextIndex] = useState<number>(5);

  const loadMoreNews = () => {
    const nextNews: NewsItem[] = initialNews.slice(nextIndex, nextIndex + 5);
    setNews([...news, ...nextNews]);
    setNextIndex(nextIndex + 5);
  };

  const hasMoreNews = useMemo(
    () => nextIndex < initialNews.length,
    [nextIndex]
  );
  const value = {
    news,
    loadMoreNews,
    hasMoreNews,
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

export default CompanyDataNewsProvider;
