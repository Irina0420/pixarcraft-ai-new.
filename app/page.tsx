import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Шапка сайта */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-[#1e293b]',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>🎨</span> PixarCraft AI
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Link 
            href="/login" 
            style={{
              padding: '8px 20px',
              borderRadius: '8px',
              color: '#fff',
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: '0.2s'
            }}
          >
            Войти
          </Link>
          <Link 
            href="/register" 
            style={{
              padding: '8px 20px',
              borderRadius: '8px',
              backgroundColor: '#6366f1',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: '600'
            }}
          >
            Регистрация
          </Link>
        </div>
      </header>

      {/* Главный блок */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: '800', 
          marginBottom: '1.5rem',
          background: 'linear-gradient(to right, #818cf8, #c084fc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Создавайте арты в стиле Pixar
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: '#94a3b8', 
          maxWidth: '650px', 
          lineHeight: '1.6',
          marginBottom: '2.5rem' 
        }}>
          Превращайте ваши идеи и фотографии в невероятные 3D-персонажи и иллюстрации за считанные секунды с помощью ИИ.
        </p>

        <div style={{ display: 'flex', gap: '20px' }}>
          <Link 
            href="/register" 
            style={{
              padding: '14px 32px',
              borderRadius: '10px',
              backgroundColor: '#6366f1',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)'
            }}
          >
            Попробовать бесплатно
          </Link>
        </div>
      </main>
    </div>
  );
}
