import { SharedDataBulletinProvider } from '@ipts/shared-data-bulletin-provider';

export interface CompanyDataNewsProviderProps {
  children?: React.ReactNode;
}

export const CompanyDataNewsProvider = ({
  children,
}: CompanyDataNewsProviderProps) => {
  const initialNews = [
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

  return (
    <SharedDataBulletinProvider articles={initialNews} showMore={() => {}}>
      {children}
    </SharedDataBulletinProvider>
  );
};

export default CompanyDataNewsProvider;
