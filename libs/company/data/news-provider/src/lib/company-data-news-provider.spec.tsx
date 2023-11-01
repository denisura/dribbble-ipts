import { render } from '@testing-library/react';

import CompanyDataNewsProvider from './company-data-news-provider';

describe('CompanyDataNewsProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompanyDataNewsProvider />);
    expect(baseElement).toBeTruthy();
  });
});
