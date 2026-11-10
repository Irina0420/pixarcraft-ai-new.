'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  // Состояния выбора и настроек
  const [selectedChar, setSelectedChar] = useState('Barnaby');
  const [prompt, setPrompt] = useState('Барнаби удивленно смотрит на волшебный светящийся фонарик в темном лесу');
  const [cameraMotion, setCameraMotion] = useState('Zoom In (Медленный наезд на лицо)');
  const [style, setStyle] = useState('3D Pixar Classic');
  const [aspectRatio, setAspectRatio] = useState('9:16 Short');
  
  // Кадры (Frame A & B)
  const [frameA, setFrameA] = useState<string | null>(null);
  const [frameB, setFrameB] = useState<string | null>(null);
  
  // Загрузка и готовое видео
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  // Скрытые инпуты для загрузки картинок
  const fileInputARef = useRef<HTMLInputElement>(null);
  const fileInputBRef = useRef<HTMLInputElement>(null);

  const handleUploadFrameA = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFrameA(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleUploadFrameB = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFrameB(URL.createObjectURL(e.target.files[0]));
    }
  };

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
      {/* Скрытые элементы для выбора файлов */}
      <input type="file" ref={fileInputARef} style={{ display: 'none' }} accept="image/*" onChange={handleUploadFrameA} />
      <input type="file" ref={fileInputBRef} style={{ display: 'none' }} accept="image/*" onChange={handleUploadFrameB} />

      <div style={{ maxWidth: '950px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        
        {/* Шапка с профилем и навигацией */}
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
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link href="/login" style={{ padding: '6px 16px', borderRadius: '6px', border: '1px solid #374151', color: '#fff', textDecoration: 'none', fontSize: '0.85rem' }}>
              Вход
            </Link>
            <Link href="/register" style={{ padding: '6px 16px', borderRadius: '6px', backgroundColor: '#2563eb', color: '#fff', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600' }}>
              Регистрация
            </Link>
          </div>
        </header>

        {/* 1. Блок Описание сцены & Камера */}
        <section style={{
          backgroundColor: '#111827',
          borderRadius: '10px',
          padding: '18px',
          border: '1px solid #1f2937',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
              🎨 Описание сцены & Камера
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', backgroundColor: '#1f2937', padding: '4px 10px', borderRadius: '6px' }}>
              👤 Привязать:
              <select 
                value={selectedChar} 
                onChange={(e) => setSelectedChar(e.target.value)}
                style={{ backgroundColor: 'transparent', color: '#38bdf8', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
              >
                <option value="Barnaby">@Барнаби</option>
                <option value="Lily">@Лили</option>
              </select>
            </div>
          </div>

          <textarea 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={2}
            style={{
              width: '100%',
              backgroundColor: '#0b0f19',
              color: '#fff',
              padding: '10px 12px',
              borderRadius: '6px',
              border: '1px solid #374151',
              resize: 'vertical',
              fontSize: '0.9rem'
            }}
          />

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', backgroundColor: '#0b0f19', borderRadius: '6px', border: '1px solid #374151', padding: '4px 10px' }}>
              <span style={{ fontSize: '0.85rem', color: '#9ca3af', marginRight: '8px' }}>🎥 Движение камеры:</span>
              <select 
                value={cameraMotion}
                onChange={(e) => setCameraMotion(e.target.value)}
                style={{ width: '100%', backgroundColor: 'transparent', color: '#fff', border: 'none', fontSize: '0.85rem', outline: 'none' }}
              >
                <option value="Zoom In (Медленный наезд на лицо)">Zoom In (Медленный наезд на лицо)</option>
                <option value="Pan Left (Панорама влево)">Pan Left (Панорама влево)</option>
                <option value="Pan Right (Панорама вправо)">Pan Right (Панорама вправо)</option>
                <option value="Static (Статичный кадр)">Static (Статичный кадр)</option>
              </select>
            </div>
            <button style={{ padding: '8px 14px', borderRadius: '6px', backgroundColor: '#1f2937', color: '#e5e7eb', border: '1px solid #374151', fontSize: '0.85rem', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              ✨ Авто-улучшение Pixar
            </button>
          </div>
        </section>

        {/* 2. Управление кадрами (Frame A & B) */}
        <section style={{
          backgroundColor: '#111827',
          borderRadius: '10px',
          padding: '18px',
          border: '1px solid #1f2937',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          <h2 style={{ fontSize: '1rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
            🎬 Управление кадрами (Frame A & B)
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            
            {/* Начальный кадр (Frame A) */}
            <div style={{
              border: '1px dashed #374151',
              borderRadius: '8px',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '130px',
              backgroundColor: '#0b0f19',
              position: 'relative'
            }}>
              {frameA ? (
                <img src={frameA} alt="Frame A" style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '6px', marginBottom: '8px' }} />
              ) : (
                <div style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: '12px' }}>Начальный кадр (Frame A)</div>
              )}
              
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button onClick={() => setFrameA('https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400')} style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#d97706', color: '#fff', border: 'none', fontSize: '0.75rem', fontWeight: '600', cursor: 'pointer' }}>
                  📷 Создать ($0.02)
                </button>
                <button onClick={() => fileInputARef.current?.click()} style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#1f2937', color: '#fff', border: '1px solid #374151', fontSize: '0.75rem', cursor: 'pointer' }}>
                  ⬆️ Загрузить
                </button>
                <button onClick={() => setFrameA(null)} style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#991b1b', color: '#fff', border: 'none', fontSize: '0.75rem', cursor: 'pointer' }}>
                  ❌ Очистить
                </button>
              </div>
            </div>

            {/* Конечный кадр (Frame B) */}
            <div style={{
              border: '1px dashed #374151',
              borderRadius: '8px',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '130px',
              backgroundColor: '#0b0f19',
              position: 'relative'
            }}>
              {frameB ? (
                <img src={frameB} alt="Frame B" style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '6px', marginBottom: '8px' }} />
              ) : (
                <div style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: '12px' }}>Конечный кадр (Frame B)</div>
              )}

              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button onClick={() => setFrameB('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400')} style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#d97706', color: '#fff', border: 'none', fontSize: '0.75rem', fontWeight: '600', cursor: 'pointer' }}>
                  📷 Создать ($0.02)
                </button>
                <button onClick={() => fileInputBRef.current?.click()} style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#1f2937', color: '#fff', border: '1px solid #374151', fontSize: '0.75rem', cursor: 'pointer' }}>
                  ⬆️ Загрузить
                </button>
                <button onClick={() => setFrameB(null)} style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#991b1b', color: '#fff', border: 'none', fontSize: '0.75rem', cursor: 'pointer' }}>
                  ❌ Очистить
                </button>
              </div>
            </div>

          </div>

          <button onClick={handleGenerateVideo} style={{ width: '100%', padding: '8px', borderRadius: '6px', backgroundColor: '#1f2937', color: '#38bdf8', border: '1px solid #374151', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer', textAlign: 'center' }}>
            🔗 Объединить кадры (A ➔ B)
          </button>
        </section>

        {/* 3. Стиль, генерация и просмотр */}
        <section style={{
          backgroundColor: '#111827',
          borderRadius: '10px',
          padding: '18px',
          border: '1px solid #1f2937',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          <h2 style={{ fontSize: '1rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
            🎨 Стиль, генерация и просмотр
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#0b0f19', borderRadius: '6px', border: '1px solid #374151', padding: '6px 10px' }}>
              <span style={{ fontSize: '0.85rem', color: '#9ca3af', marginRight: '6px' }}>🎨 Style:</span>
              <select value={style} onChange={(e) => setStyle(e.target.value)} style={{ width: '100%', backgroundColor: 'transparent', color: '#fff', border: 'none', fontSize: '0.85rem', outline: 'none' }}>
                <option value="3D Pixar Classic">3D Pixar Classic</option>
                <option value="Disney Anime 2D">Disney Anime 2D</option>
                <option value="Unreal Engine 5 Realism">Unreal Engine 5 Realism</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#0b0f19', borderRadius: '6px', border: '1px solid #374151', padding: '6px 10px' }}>
              <span style={{ fontSize: '0.85rem', color: '#9ca3af', marginRight: '6px' }}>📱 Aspect Ratio:</span>
              <select value={aspectRatio} onChange={(e) => setAspectRatio(e.target.value)} style={{ width: '100%', backgroundColor: 'transparent', color: '#fff', border: 'none', fontSize: '0.85rem', outline: 'none' }}>
                <option value="9:16 Short">9:16 Short (TikTok / Reels)</option>
                <option value="16:9 Landscape">16:9 Landscape (YouTube)</option>
                <option value="1:1 Square">1:1 Square</option>
              </select>
            </div>
          </div>

          <div style={{ textAlign: 'right', fontSize: '0.85rem', fontWeight: 'bold', color: '#f59e0b' }}>
            Итого за этот клип: $0.18
          </div>

          {/* Панель кнопок генерации */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '10px' }}>
            <button 
              onClick={handleGenerateVideo}
              disabled={isGenerating}
              style={{
                padding: '12px',
                borderRadius: '6px',
                backgroundColor: isGenerating ? '#d97706' : '#f97316',
                color: '#fff',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                cursor: isGenerating ? 'not-allowed' : 'pointer'
              }}
            >
              {isGenerating ? '⏳ Генерация...' : '⚡ Сгенерировать видео'}
            </button>

            <button 
              onClick={handleGenerateVideo}
              style={{ padding: '12px', borderRadius: '6px', backgroundColor: '#1f2937', color: '#e5e7eb', border: '1px solid #374151', fontSize: '0.85rem', cursor: 'pointer' }}
            >
              🔄 Перегенерировать
            </button>

            <button 
              onClick={() => videoUrl && window.open(videoUrl, '_blank')}
              style={{ padding: '12px', borderRadius: '6px', backgroundColor: '#1f2937', color: '#e5e7eb', border: '1px solid #374151', fontSize: '0.85rem', cursor: 'pointer' }}
            >
              💾 Экспорт MP4
            </button>
          </div>

          {/* Плеер просмотра результатов */}
          <div style={{
            backgroundColor: '#0b0f19',
            borderRadius: '8px',
            border: '1px solid #1f2937',
            height: '240px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px',
            position: 'relative'
          }}>
            {isGenerating && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', border: '3px solid #1f2937', borderTop: '3px solid #f97316', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                <div style={{ color: '#f97316', fontWeight: 'bold' }}>Генерация видео...</div>
              </div>
            )}

            {!isGenerating && videoUrl && (
              <video src={videoUrl} controls autoPlay loop style={{ maxHeight: '100%', maxWidth: '100%', borderRadius: '6px' }} />
            )}

            {!isGenerating && !videoUrl && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: '#6b7280' }}>
                <span style={{ fontSize: '2rem' }}>🎬</span>
                <div style={{ fontWeight: '600', color: '#e5e7eb' }}>Здесь появится ваше видео</div>
                <div style={{ fontSize: '0.8rem' }}>Задайте описания и нажмите «Сгенерировать видео»</div>
              </div>
            )}
          </div>

        </section>

      </div>
    </div>
  );
}
