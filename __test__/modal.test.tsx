import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
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
    expect(screen.getByRole('button', { name: '送信'})).toBeInTheDocument();
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

  it('閉じるボタンがクリックされると onClose が呼び出される', () => {
    render(
        <Modal 
        isOpen={false} 
        onClose={mockOnClose} 
        onSubmit={mockOnSubmit} 
        actionLabel="送信"  
    />
    );

    const closeButton = screen.getByRole('button', { name: /close/i }); 
    userEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalled();
  });

});

