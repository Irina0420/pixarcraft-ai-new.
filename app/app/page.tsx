import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', padding: '40px', background: '#0a0a0a', color: '#fff', textAlign: 'center' }}>
      <h1>PixarCraft AI</h1>
      <p>Генерация 3D видео в стиле Pixar</p>
      
      <div style={{ marginTop: '30px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <Link href="/login" style={{ padding: '12px 24px', background: '#0070f3', color: '#fff', borderRadius: '6px', textDecoration: 'none' }}>
          Войти в аккаунт
        </Link>
      </div>
    </main>
  );
}
