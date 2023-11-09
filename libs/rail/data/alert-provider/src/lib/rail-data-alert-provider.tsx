import { SharedDataBulletinProvider } from '@ipts/core-data-bulletin-provider';

export interface RailDataAlertProviderProps {
  children?: React.ReactNode;
}

export const RailDataAlertProvider = ({
  children,
}: RailDataAlertProviderProps) => {
  const initialNews = [
    { title: 'Solar storm disrupts Mars communication', url: '#' },
    { title: 'Technical issue affects Earth propulsion', url: '#' },
    { title: 'Debris near Venus orbit detected', url: '#' },
    { title: 'Crew health concern en route to Jupiter', url: '#' },
    { title: "Adverse weather at Saturn's landing site.", url: '#' },
    { title: 'Magnetic field interference near Mercury', url: '#' },
    { title: 'Fuel supply delay for Neptune travel', url: '#' },
    { title: 'Navigation error approaching Uranus', url: '#' },
    { title: 'Resource shortage near asteroid belt', url: '#' },
    { title: 'Radiation spike during Pluto transit', url: '#' },
  ];

  return (
    <SharedDataBulletinProvider articles={initialNews} showMore={() => {}}>
      {children}
    </SharedDataBulletinProvider>
  );
};

export default RailDataAlertProvider;
