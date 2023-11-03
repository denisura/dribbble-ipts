import { createContext, useContext, useMemo, useState } from 'react';
import invariant from 'invariant';

export interface ArticleProps {
  title: string;
  url: string;
}

export interface SharedDataBulletinProviderProps {
  children?: React.ReactNode;
  articles: ArticleProps[];
  showMore: () => void;
}

export interface BulletinContext {
  items: ArticleProps[];
  loadMore: () => void;
  showMore: () => void;
  hasMore: boolean;
}

export const BulletinContext = createContext<BulletinContext>({
  items: [],
  hasMore: true,
  loadMore: () => {},
  showMore: () => {},
});

export const useBulletinContext = () => {
  const context = useContext(BulletinContext);
  invariant(
    context,
    'BulletinContext must be used within SharedDataBulletinProvider'
  );
  return context;
};

export const SharedDataBulletinProvider = ({
  children,
  articles,
  showMore,
}: SharedDataBulletinProviderProps) => {
  const [items, setItems] = useState<ArticleProps[]>(articles.slice(0, 5));
  const [nextIndex, setNextIndex] = useState<number>(5);

  const loadMore = () => {
    const nextItems: ArticleProps[] = articles.slice(nextIndex, nextIndex + 5);
    setItems([...items, ...nextItems]);
    setNextIndex(nextIndex + 5);
  };

  const hasMore = useMemo(() => nextIndex < articles.length, [nextIndex]);
  const value = {
    items,
    loadMore,
    hasMore,
    showMore,
  };
  return (
    <BulletinContext.Provider value={value}>
      {children}
    </BulletinContext.Provider>
  );
};

export default SharedDataBulletinProvider;
