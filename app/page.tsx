'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [selectedChar, setSelectedChar] = useState('barnaby');
  const [fidelity, setFidelity] = useState('75');
  const [style, setStyle] = useState('pixar-3d');
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [prompt, setPrompt] = useState('');
  
  // Состояния загрузки и результата
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setResultUrl(null);
    setTimeout(() => {
      setIsGenerating(false);
      setResultUrl('https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800');
    }, 4000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0b0f19',
      color: '#e2e8f0',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '24px'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Шапка сайта */}
        <header style={{
          backgroundColor: '#151c2c',
          borderRadius: '12px',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid #1e293b'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.25rem', fontWeight: 'bold' }}>
            <span style={{ fontSize: '1.5rem' }}>🎬</span> PixarCraft AI — Video Generator
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
              Баланс: <span style={{ color: '#38bdf8' }}>~$2.00</span>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <Link 
                href="/login" 
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  backgroundColor: '#1e293b',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  border: '1px solid #334155'
                }}
              >
                Вход
              </Link>
              <Link 
                href="/register" 
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  backgroundColor: '#2563eb',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}
              >
                Регистрация
              </Link>
            </div>

            <button 
              onClick={() => {
                setResultUrl(null);
                setIsGenerating(false);
              }}
              style={{
                padding: '8px 14px',
                borderRadius: '6px',
                backgroundColor: '#1e293b',
                color: '#94a3b8',
                border: '1px solid #334155',
                cursor: 'pointer',
                fontSize: '0.85rem'
              }}
            >
              🔄 Начать заново
            </button>
          </div>
        </header>

        {/* Менеджер персонажей с новыми кнопками управления */}
        <section style={{
          backgroundColor: '#151c2c',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #1e293b'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
              👥 Менеджер персонажей (Consistency Hub)
            </h2>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button style={{
                backgroundColor: '#f97316',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 12px',
                fontWeight: '600',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}>
                + Создать персонажа
              </button>
              <button style={{
                backgroundColor: '#334155',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 12px',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}>
                ✏️ Редактировать
              </button>
              <button style={{
                backgroundColor: '#991b1b',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 12px',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}>
                🗑️ Удалить
              </button>
              <button style={{
                backgroundColor: '#1e293b',
                color: '#38bdf8',
                border: '1px solid #334155',
                borderRadius: '6px',
                padding: '8px 12px',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}>
                👁️ Все референсы
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <div 
              onClick={() => setSelectedChar('barnaby')}
              style={{
                width: '140px',
                backgroundColor: '#0f172a',
                borderRadius: '8px',
                overflow: 'hidden',
                border: selectedChar === 'barnaby' ? '2px solid #f97316' : '1px solid #1e293b',
                cursor: 'pointer'
              }}
            >
              <div style={{ height: '120px', backgroundColor: '#1e293b', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url("https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300")' }} />
              <div style={{ padding: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '600' }}>@Барнаби</div>
                <div style={{ fontSize: '0.7rem', color: '#22c55e', marginTop: '2px' }}>★ Face Lock</div>
              </div>
            </div>

            <div 
              onClick={() => setSelectedChar('lily')}
              style={{
                width: '140px',
                backgroundColor: '#0f172a',
                borderRadius: '8px',
                overflow: 'hidden',
                border: selectedChar === 'lily' ? '2px solid #f97316' : '1px solid #1e293b',
                cursor: 'pointer'
              }}
            >
              <div style={{ height: '120px', backgroundColor: '#1e293b', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url("https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300")' }} />
              <div style={{ padding: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '600' }}>@Лили</div>
                <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '2px' }}>Inactive</div>
              </div>
            </div>
          </div>
        </section>

        {/* Заблокировать атрибуты & Сходство */}
        <section style={{
          backgroundColor: '#151c2c',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #1e293b'
        }}>
          <h2 style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🔒 Заблокировать атрибуты & Сходство
          </h2>

          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', fontSize: '0.9rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked /> 👤 Лицо и черты
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked /> 👕 Одежда и стиль
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked /> 👩‍🦰 Волосы и цвет
            </label>
          </div>

          <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '10px' }}>
            Усилить сходство (Reference Fidelity):
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
            <button 
              onClick={() => setFidelity('50')}
              style={{ padding: '10px', borderRadius: '6px', border: fidelity === '50' ? '1px solid #3b82f6' : '1px solid #1e293b', backgroundColor: fidelity === '50' ? '#1d4ed8' : '#0f172a', color: '#fff', fontSize: '0.85rem', cursor: 'pointer' }}
            >
              Мягко (50%)
            </button>
            <button 
              onClick={() => setFidelity('75')}
              style={{ padding: '10px', borderRadius: '6px', border: fidelity === '75' ? '1px solid #3b82f6' : '1px solid #1e293b', backgroundColor: fidelity === '75' ? '#2563eb' : '#0f172a', color: '#fff', fontSize: '0.85rem', cursor: 'pointer' }}
            >
              Сбалансировано (75%)
            </button>
            <button 
              onClick={() => setFidelity('100')}
              style={{ padding: '10px', borderRadius: '6px', border: fidelity === '100' ? '1px solid #3b82f6' : '1px solid #1e293b', backgroundColor: fidelity === '100' ? '#1d4ed8' : '#0f172a', color: '#fff', fontSize: '0.85rem', cursor: 'pointer' }}
            >
              🔒 Жесткая фиксация (100%)
            </button>
          </div>
        </section>

        {/* Выбор стиля и размеров видео */}
        <section style={{
          backgroundColor: '#151c2c',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #1e293b',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px'
        }}>
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '10px' }}>🎨 Стиль анимации</h3>
            <select 
              value={style} 
              onChange={(e) => setStyle(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#0f172a', color: '#fff', border: '1px solid #334155' }}
            >
              <option value="pixar-3d">Pixar 3D Animation Style</option>
              <option value="disney-classic">Disney Classic 2D</option>
              <option value="cinematic">Cinematic 3D Render</option>
            </select>
          </div>

          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '10px' }}>📐 Размеры видео (Aspect Ratio)</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['16:9', '9:16', '1:1'].map((ratio) => (
                <button
                  key={ratio}
                  onClick={() => setAspectRatio(ratio)}
                  style={{
                    flex: 1,
                    padding: '10px',
                    borderRadius: '6px',
                    border: aspectRatio === ratio ? '1px solid #3b82f6' : '1px solid #1e293b',
                    backgroundColor: aspectRatio === ratio ? '#2563eb' : '#0f172a',
                    color: '#fff',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  {ratio}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Описание сцены & Управление кадрами */}
        <section style={{
          backgroundColor: '#151c2c',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #1e293b',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h2 style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ✍️ Описание сцены & Управление кадрами
          </h2>
          
          <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
            👤 Привязать персонажа: <span style={{ color: '#38bdf8', fontWeight: '600' }}>@{selectedChar === 'barnaby' ? 'Барнаби' : 'Лили'}</span>
          </div>

          <textarea 
            placeholder="Опишите действие в кадре, движение камеры и эмоции..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={3}
            style={{
              width: '100%',
              backgroundColor: '#0f172a',
              color: '#fff',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #334155',
              resize: 'vertical',
              fontSize: '0.95rem'
            }}
          />

          <div style={{ display: 'flex', gap: '15px', marginTop: '5px' }}>
            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              style={{
                flex: 1,
                backgroundColor: isGenerating ? '#065f46' : '#059669',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '12px',
                fontWeight: '600',
                cursor: isGenerating ? 'not-allowed' : 'pointer',
                fontSize: '0.95rem'
              }}
            >
              {isGenerating ? '⏳ Обработка...' : '✨ Сгенерировать первый кадр'}
            </button>
            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              style={{
                flex: 1,
                backgroundColor: isGenerating ? '#5b21b6' : '#7c3aed',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '12px',
                fontWeight: '600',
                cursor: isGenerating ? 'not-allowed' : 'pointer',
                fontSize: '0.95rem'
              }}
            >
              {isGenerating ? '⏳ Обработка...' : '🔗 Объединить кадры в видео'}
            </button>
          </div>
        </section>

        {/* Окно результатов и статус процесса */}
        <section style={{
          backgroundColor: '#151c2c',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #1e293b',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '260px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '16px', alignSelf: 'flex-start' }}>
            🎞️ Окно просмотра & Результат
          </h2>

          {isGenerating && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '20px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                border: '4px solid #1e293b',
                borderTop: '4px solid #3b82f6',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
              <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
              <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#38bdf8' }}>
                Генерация видео...
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                Применяем модель Pixar 3D и сохраняем лицо персонажа
              </div>
            </div>
          )}

          {!isGenerating && resultUrl && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
              <div style={{
                maxWidth: '600px',
                width: '100%',
                height: '300px',
                borderRadius: '8px',
                backgroundImage: `url(${resultUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '1px solid #334155'
              }} />
              
              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  onClick={handleGenerate}
                  style={{
                    backgroundColor: '#2563eb',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px 20px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  🔄 Перегенерировать
                </button>
                <button style={{
                  backgroundColor: '#1e293b',
                  color: '#fff',
                  border: '1px solid #334155',
                  borderRadius: '6px',
                  padding: '10px 20px',
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}>
                  ⬇️ Скачать видео
                </button>
              </div>
            </div>
          )}

          {!isGenerating && !resultUrl && (
            <div style={{ color: '#64748b', fontSize: '0.95rem', padding: '30px' }}>
              Нажмите «Сгенерировать первый кадр» или «Объединить кадры в видео», чтобы начать процесс.
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
