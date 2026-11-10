'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const [selectedChar, setSelectedChar] = useState('barnaby');
  const [fidelity, setFidelity] = useState('75');
  const [prompt, setPrompt] = useState('Барнаби удивленно смотрит на волшебный светящийся фонарик в темном лесу');
  const [cameraMotion, setCameraMotion] = useState('Zoom In (Медленный наезд на лицо)');
  const [style, setStyle] = useState('3D Pixar Classic');
  const [aspectRatio, setAspectRatio] = useState('9:16 Short');
  
  // Состояния для кадров Frame A & B
  const [frameA, setFrameA] = useState<string | null>(null);
  const [frameB, setFrameB] = useState<string | null>(null);
  
  // Состояния генерации видео
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const fileInputARef = useRef<HTMLInputElement>(null);
  const fileInputBRef = useRef<HTMLInputElement>(null);

  const handleGenerateVideo = () => {
    setIsGenerating(true);
    setVideoUrl(null);
    setTimeout(() => {
      setIsGenerating(false);
      setVideoUrl('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4');
    }, 4000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0e17',
      color: '#e2e8f0',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px'
    }}>
      <input type="file" ref={fileInputARef} style={{ display: 'none' }} accept="image/*" onChange={(e) => e.target.files?.[0] && setFrameA(URL.createObjectURL(e.target.files[0]))} />
      <input type="file" ref={fileInputBRef} style={{ display: 'none' }} accept="image/*" onChange={(e) => e.target.files?.[0] && setFrameB(URL.createObjectURL(e.target.files[0]))} />

      <div style={{ maxWidth: '950px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        
        {/* ШАПКА САЙТА */}
        <header style={{
          backgroundColor: '#111827',
          borderRadius: '10px',
          padding: '14px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid #1f2937'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold', fontSize: '1.2rem' }}>
            <span>🎬 PixarCraft AI</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ fontSize: '0.9rem', color: '#9ca3af' }}>
              Баланс: <span style={{ color: '#38bdf8' }}>~$2.00</span>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <Link href="/login" style={{ padding: '6px 14px', borderRadius: '6px', backgroundColor: '#1f2937', color: '#fff', textDecoration: 'none', fontSize: '0.85rem', border: '1px solid #374151' }}>
                Вход
              </Link>
              <Link href="/register" style={{ padding: '6px 14px', borderRadius: '6px', backgroundColor: '#2563eb', color: '#fff', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600' }}>
                Регистрация
              </Link>
            </div>

            <button 
              onClick={() => window.location.reload()}
              style={{ padding: '6px 12px', borderRadius: '6px', backgroundColor: '#1f2937', color: '#9ca3af', border: '1px solid #374151', cursor: 'pointer', fontSize: '0.8rem' }}
            >
              🔄 Сброс
            </button>
          </div>
        </header>

        {/* МЕНЕДЖЕР ПЕРСОНАЖЕЙ (CONSISTENCY HUB) */}
        <section style={{ backgroundColor: '#111827', borderRadius: '10px', padding: '18px', border: '1px solid #1f2937' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
              👥 Менеджер персонажей (Consistency Hub)
            </h2>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <button style={{ backgroundColor: '#f97316', color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 10px', fontWeight: '600', fontSize: '0.8rem', cursor: 'pointer' }}>
                + Создать персонажа
              </button>
              <button style={{ backgroundColor: '#374151', color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 10px', fontSize: '0.8rem', cursor: 'pointer' }}>
                ✏️ Редактировать
              </button>
              <button style={{ backgroundColor: '#991b1b', color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 10px', fontSize: '0.8rem', cursor: 'pointer' }}>
                🗑️ Удалить
              </button>
              <button style={{ backgroundColor: '#1f2937', color: '#38bdf8', border: '1px solid #374151', borderRadius: '6px', padding: '6px 10px', fontSize: '0.8rem', cursor: 'pointer' }}>
                👁️ Все референсы
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div 
              onClick={() => setSelectedChar('barnaby')}
              style={{
                width: '120px',
                backgroundColor: '#0b0f19',
                borderRadius: '8px',
                overflow: 'hidden',
                border: selectedChar === 'barnaby' ? '2px solid #f97316' : '1px solid #1f2937',
                cursor: 'pointer'
              }}
            >
              <div style={{ height: '90px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url("https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300")' }} />
              <div style={{ padding: '6px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '600' }}>@Барнаби</div>
                <div style={{ fontSize: '0.65rem', color: '#22c55e', marginTop: '2px' }}>★ Face Lock</div>
              </div>
            </div>

            <div 
              onClick={() => setSelectedChar('lily')}
              style={{
                width: '120px',
                backgroundColor: '#0b0f19',
                borderRadius: '8px',
                overflow: 'hidden',
                border: selectedChar === 'lily' ? '2px solid #f97316' : '1px solid #1f2937',
                cursor: 'pointer'
              }}
            >
              <div style={{ height: '90px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url("https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300")' }} />
              <div style={{ padding: '6px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '600' }}>@Лили</div>
                <div style={{ fontSize: '0.65rem', color: '#6b7280', marginTop: '2px' }}>Inactive</div>
              </div>
            </div>
          </div>
        </section>

        {/* АТРИБУТЫ & СХОДСТВО */}
        <section style={{ backgroundColor: '#111827', borderRadius: '10px', padding: '18px', border: '1px solid #1f2937' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '12px' }}>🔒 Заблокировать атрибуты & Сходство</h2>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '12px', fontSize: '0.85rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}><input type="checkbox" defaultChecked /> 👤 Лицо</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}><input type="checkbox" defaultChecked /> 👕 Одежда</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}><input type="checkbox" defaultChecked /> 👩‍🦰 Волосы</label>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
            {['50', '75', '100'].map((f) => (
              <button key={f} onClick={() => setFidelity(f)} style={{ padding: '8px', borderRadius: '6px', border: fidelity === f ? '1px solid #3b82f6' : '1px solid #1f2937', backgroundColor: fidelity === f ? '#1d4ed8' : '#0b0f19', color: '#fff', fontSize: '0.8rem', cursor: 'pointer' }}>
                {f === '50' ? 'Мягко (50%)' : f === '75' ? 'Сбалансировано (75%)' : '🔒 Жестко (100%)'}
              </button>
            ))}
          </div>
        </section>

        {/* ОПИСАНИЕ СЦЕНЫ & КАМЕРА */}
        <section style={{ backgroundColor: '#111827', borderRadius: '10px', padding: '18px', border: '1px solid #1f2937', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: '600' }}>🎨 Описание сцены & Камера</h2>
            <div style={{ fontSize: '0.85rem', backgroundColor: '#1f2937', padding: '4px 10px', borderRadius: '6px' }}>
              👤 Привязать: <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>@{selectedChar === 'barnaby' ? 'Барнаби' : 'Лили'}</span>
            </div>
          </div>
          <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={2} style={{ width: '100%', backgroundColor: '#0b0f19', color: '#fff', padding: '10px', borderRadius: '6px', border: '1px solid #374151', fontSize: '0.9rem' }} />
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: 1, backgroundColor: '#0b0f19', borderRadius: '6px', border: '1px solid #374151', padding: '4px 10px', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: '#9ca3af', marginRight: '6px' }}>🎥 Движение камеры:</span>
              <select value={cameraMotion} onChange={(e) => setCameraMotion(e.target.value)} style={{ width: '100%', backgroundColor: 'transparent', color: '#fff', border: 'none', fontSize: '0.8rem', outline: 'none' }}>
                <option value="Zoom In (Медленный наезд на лицо)">Zoom In (Медленный наезд на лицо)</option>
                <option value="Pan Left (Панорама влево)">Pan Left (Панорама влево)</option>
                <option value="Static (Статичный кадр)">Static (Статичный кадр)</option>
              </select>
            </div>
            <button style={{ padding: '6px 12px', borderRadius: '6px', backgroundColor: '#1f2937', color: '#fff', border: '1px solid #374151', fontSize: '0.8rem', cursor: 'pointer' }}>✨ Авто-улучшение Pixar</button>
          </div>
        </section>

        {/* УПРАВЛЕНИЕ КАДРАМИ (FRAME A & B) СО СКРИНШОТОВ */}
        <section style={{ backgroundColor: '#111827', borderRadius: '10px', padding: '18px', border: '1px solid #1f2937', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: '600' }}>🎬 Управление кадрами (Frame A & B)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            
            {/* Frame A */}
            <div style={{ border: '1px dashed #374151', borderRadius: '8px', padding: '10px', backgroundColor: '#0b0f19', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '110px' }}>
              {frameA ? <img src={frameA} alt="A" style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px', marginBottom: '6px' }} /> : <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '8px' }}>Начальный кадр (Frame A)</div>}
              <div style={{ display: 'flex', gap: '4px' }}>
                <button onClick={() => setFrameA('https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400')} style={{ padding: '3px 6px', backgroundColor: '#d97706', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold', cursor: 'pointer' }}>📷 Создать ($0.02)</button>
                <button onClick={() => fileInputARef.current?.click()} style={{ padding: '3px 6px', backgroundColor: '#1f2937', color: '#fff', border: '1px solid #374151', borderRadius: '4px', fontSize: '0.7rem', cursor: 'pointer' }}>⬆️ Загрузить</button>
                <button onClick={() => setFrameA(null)} style={{ padding: '3px 6px', backgroundColor: '#991b1b', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '0.7rem', cursor: 'pointer' }}>❌ Очистить</button>
              </div>
            </div>

            {/* Frame B */}
            <div style={{ border: '1px dashed #374151', borderRadius: '8px', padding: '10px', backgroundColor: '#0b0f19', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '110px' }}>
              {frameB ? <img src={frameB} alt="B" style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px', marginBottom: '6px' }} /> : <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '8px' }}>Конечный кадр (Frame B)</div>}
              <div style={{ display: 'flex', gap: '4px' }}>
                <button onClick={() => setFrameB('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400')} style={{ padding: '3px 6px', backgroundColor: '#d97706', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold', cursor: 'pointer' }}>📷 Создать ($0.02)</button>
                <button onClick={() => fileInputBRef.current?.click()} style={{ padding: '3px 6px', backgroundColor: '#1f2937', color: '#fff', border: '1px solid #374151', borderRadius: '4px', fontSize: '0.7rem', cursor: 'pointer' }}>⬆️ Загрузить</button>
                <button onClick={() => setFrameB(null)} style={{ padding: '3px 6px', backgroundColor: '#991b1b', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '0.7rem', cursor: 'pointer' }}>❌ Очистить</button>
              </div>
            </div>

          </div>
          <button style={{ width: '100%', padding: '8px', backgroundColor: '#1f2937', color: '#38bdf8', border: '1px solid #374151', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' }}>🔗 Объединить кадры (A ➔ B)</button>
        </section>

        {/* СТИЛЬ, ГЕНЕРАЦИЯ И ПРОСМОТР СО СКРИНШОТОВ */}
        <section style={{ backgroundColor: '#111827', borderRadius: '10px', padding: '18px', border: '1px solid #1f2937', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: '600' }}>🎨 Стиль, генерация и просмотр</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div style={{ backgroundColor: '#0b0f19', borderRadius: '6px', border: '1px solid #374151', padding: '6px 10px', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: '#9ca3af', marginRight: '6px' }}>🎨 Style:</span>
              <select value={style} onChange={(e) => setStyle(e.target.value)} style={{ width: '100%', backgroundColor: 'transparent', color: '#fff', border: 'none', fontSize: '0.8rem', outline: 'none' }}>
                <option value="3D Pixar Classic">3D Pixar Classic</option>
                <option value="Disney Anime 2D">Disney Anime 2D</option>
              </select>
            </div>
            <div style={{ backgroundColor: '#0b0f19', borderRadius: '6px', border: '1px solid #374151', padding: '6px 10px', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: '#9ca3af', marginRight: '6px' }}>📱 Aspect Ratio:</span>
              <select value={aspectRatio} onChange={(e) => setAspectRatio(e.target.value)} style={{ width: '100%', backgroundColor: 'transparent', color: '#fff', border: 'none', fontSize: '0.8rem', outline: 'none' }}>
                <option value="9:16 Short">9:16 Short</option>
                <option value="16:9 Landscape">16:9 Landscape</option>
              </select>
            </div>
          </div>

          <div style={{ textAlign: 'right', fontSize: '0.85rem', fontWeight: 'bold', color: '#f59e0b' }}>Итого за этот клип: $0.18</div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '8px' }}>
            <button onClick={handleGenerateVideo} disabled={isGenerating} style={{ padding: '10px', borderRadius: '6px', backgroundColor: isGenerating ? '#d97706' : '#f97316', color: '#fff', border: 'none', fontWeight: 'bold', fontSize: '0.85rem', cursor: 'pointer' }}>
              {isGenerating ? '⏳ Генерация видео...' : '⚡ Сгенерировать видео'}
            </button>
            <button onClick={handleGenerateVideo} style={{ padding: '10px', borderRadius: '6px', backgroundColor: '#1f2937', color: '#e5e7eb', border: '1px solid #374151', fontSize: '0.8rem', cursor: 'pointer' }}>🔄 Перегенерировать</button>
            <button onClick={() => videoUrl && window.open(videoUrl, '_blank')} style={{ padding: '10px', borderRadius: '6px', backgroundColor: '#1f2937', color: '#e5e7eb', border: '1px solid #374151', fontSize: '0.8rem', cursor: 'pointer' }}>💾 Экспорт MP4</button>
          </div>

          {/* ПЛЕЕР СТАТУСА И РЕЗУЛЬТАТА */}
          <div style={{ backgroundColor: '#0b0f19', borderRadius: '8px', border: '1px solid #1f2937', height: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '15px' }}>
            {isGenerating && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '32px', height: '32px', border: '3px solid #1f2937', borderTop: '3px solid #f97316', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                <div style={{ color: '#f97316', fontWeight: 'bold', fontSize: '0.95rem' }}>Генерация видео...</div>
              </div>
            )}
            {!isGenerating && videoUrl && <video src={videoUrl} controls autoPlay loop style={{ maxHeight: '100%', maxWidth: '100%', borderRadius: '6px' }} />}
            {!isGenerating && !videoUrl && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: '#6b7280' }}>
                <span style={{ fontSize: '1.8rem' }}>🎬</span>
                <div style={{ fontWeight: '600', color: '#e5e7eb', fontSize: '0.9rem' }}>Здесь появится ваше видео</div>
                <div style={{ fontSize: '0.75rem' }}>Задайте описания и нажмите «Сгенерировать видео»</div>
              </div>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
