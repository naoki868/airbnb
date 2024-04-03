import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../app/components/Modals/Modal'; 
import React from 'react';

describe('Modal Component', () => {
  // モック関数の作成
  const onCloseMock = jest.fn();
  const onSubmitMock = jest.fn();
  const secondaryActionMock = jest.fn();

  beforeEach(() => {
    onCloseMock.mockClear();
    onSubmitMock.mockClear();
    secondaryActionMock.mockClear();
  });

  it('初期状態でモーダルが非表示であること', () => {
    // isOpen が指定されていないケース
    render(<Modal onClose={onCloseMock} onSubmit={onSubmitMock} actionLabel="Save" />);

  });

  it('isOpen propによってモーダルが表示されること', () => {
    render(<Modal
      isOpen={true} 
      onClose={onCloseMock} 
      onSubmit={onSubmitMock} 
      actionLabel="Save" 
     />);

  });
    
});
