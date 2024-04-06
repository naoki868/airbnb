import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../app/components/Modals/Modal'; 
import React from 'react';


// テスト用のモック関数
const mockOnClose = jest.fn();
const mockOnSubmit = jest.fn();
const mockSecondaryAction = jest.fn();

describe('Modal コンポーネント', () => {
  it('isOpen が true の場合、正しくレンダリングされる', () => {
    render(
      <Modal
        isOpen={true}
        title="テストモーダル"
        body={<p>これはモーダルコンテンツです</p>}
        actionLabel="送信"
        onSubmit={mockOnSubmit}
        onClose={mockOnClose}
      />
    );

    expect(screen.getByText('テストモーダル')).toBeInTheDocument();
    expect(screen.getByText('これはモーダルコンテンツです')).toBeInTheDocument();

  });

  it('isOpen が false の場合、レンダリングされない', () => {
    render(
        <Modal 
        isOpen={false} 
        onClose={mockOnClose} 
        onSubmit={mockOnSubmit} // 必要な props を追加 
        actionLabel="送信"  // 必要な props を追加
    />
    );

    // モーダル要素が存在しないことを確認
    expect(screen.queryByText('テストモーダル')).not.toBeInTheDocument(); 
  });
    
  it('should call onClose when the close button is clicked', async () => {
    const onCloseMock = jest.fn();
    const { findByRole } = render(
      <Modal isOpen={true} onClose={onCloseMock} onSubmit={() => {}} actionLabel="Submit" />
    );
    fireEvent.click(await findByRole('button', { name: /close/i }));
    await waitFor(() => expect(onCloseMock).toHaveBeenCalledTimes(1));
  });

  it('should call onSubmit when the submit button is clicked', async () => {
    const onSubmitMock = jest.fn();
    const { getByText } = render(
      <Modal isOpen={true} onClose={() => {}} onSubmit={onSubmitMock} actionLabel="Submit" />
    );
    fireEvent.click(getByText("Submit"));
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });

  it('handles secondary action when provided', () => {
    const secondaryActionMock = jest.fn();
    const { getByText } = render(
      <Modal
        isOpen={true}
        onClose={() => {}}
        onSubmit={() => {}}
        actionLabel="Submit"
        secondaryActionLabel="Secondary Action"
        secondaryAction={secondaryActionMock}
      />
    );
    fireEvent.click(getByText("Secondary Action"));
    expect(secondaryActionMock).toHaveBeenCalledTimes(1);
  });


});

