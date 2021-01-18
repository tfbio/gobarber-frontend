import React from 'react';
import { render } from '@testing-library/react';
import LogIn from '../../pages/LogIn';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('LogIn Page', () => {
  it('should be able to Login', () => {
    const { debug } = render(<LogIn />);

    debug();
  });
});
