import { ReactNode } from 'react';

export const metadata = {
  title: 'PixarCraft AI',
  description: 'AI Video Generation',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body style={{ margin: 0, fontFamily: 'sans-serif' }}>{children}</body>
    </html>
  );
}
