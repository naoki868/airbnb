import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react'; 
import userEvent from '@testing-library/user-event';
import RegisterModal from '../app/components/Modals/RegisterModal';
import useRegisterModal from '../app/hooks/useRegistaterModal'; 

jest.mock('../app/hooks/useRegistaterModal.tsx', () => ({
    __esModule: true, 
    default: () => ({
      isOpen: true, // 必ず isOpen プロパティを持たせる
      onClose: jest.fn(), 
    }),
  }));

describe('RegisterModal コンポーネント', () => {
    useRegisterModal(() => ({
        isOpen: true,
        onClose: jest.fn(),
    }));

    it('should render the registration form', () => {
        render(<RegisterModal />);
    });


})
