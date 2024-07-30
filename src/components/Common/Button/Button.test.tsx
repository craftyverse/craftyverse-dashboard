import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from './Button';

describe('<Button />', () => {
  it('should render <Button /> component', () => {
    render(<Button type="primary" size="large" buttonText="Sign up" />);

    expect(screen.getByText('Sign up')).toBeInTheDocument();
  });
});
