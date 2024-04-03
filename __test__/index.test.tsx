import { render, screen } from '@testing-library/react'
import fs from 'fs';
import React from 'react';
import Logo from '../app/components/Navbar/Logo'
import path from 'path';


describe("Logo", () => {
  it("コンポーネントのレンダリングのテスト", async () => {
      render(<Logo/>);
  });

  const imagePath = path.join(process.cwd(), './public/images/logo.png');
  const file = fs.readFileSync(imagePath);
  
  // 読み込んだ画像データを比較
  expect(file).toMatchSnapshot();
});

