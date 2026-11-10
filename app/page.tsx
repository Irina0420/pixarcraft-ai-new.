'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [selectedChar, setSelectedChar] = useState('barnaby');
  const [fidelity, setFidelity] = useState('75');

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
            <span style={{ fontSize: '1.5rem' }}>🎬</span> PixarCraft AI
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
              onClick={() => window.location.reload()}
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

        {/* Менеджер персонажей */}
        <section style={{
          backgroundColor: '#151c2c',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #1e293b'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
              👥 Менеджер персонажей (Consistency Hub)
            </h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{
                backgroundColor: '#f97316',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 16px',
                fontWeight: '600',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}>
                + Создать персонажа
              </button>
              <button style={{
                backgroundColor: '#1e293b',
                color: '#e2e8f0',
                border: '1px solid #334155',
                borderRadius: '6px',
                padding: '8px 16px',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}>
                📁 Загрузить референсы
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            {/* Барнаби */}
            <div 
              onClick={() => setSelectedChar('barnaby')}
              style={{
                width: '140px',
                backgroundColor: '#0f172a',
                borderRadius: '8px',
                overflow: 'hidden',
                border: selectedChar === 'barnaby' ? '2px solid #f97316' : '1px solid #1e293b',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <div style={{ height: '120px', backgroundColor: '#1e293b', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url("https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300")' }} />
              <div style={{ padding: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '600' }}>@Барнаби</div>
                <div style={{ fontSize: '0.7rem', color: '#22c55e', marginTop: '2px' }}>★ Face Lock</div>
              </div>
            </div>

            {/* Лили */}
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

        {/* Атрибуты и сходство */}
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
              style={{
                padding: '10px',
                borderRadius: '6px',
                border: fidelity === '50' ? '1px solid #3b82f6' : '1px solid #1e293b',
                backgroundColor: fidelity === '50' ? '#1d4ed8' : '#0f172a',
                color: '#fff',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              Мягко (50%)
            </button>
            <button 
              onClick={() => setFidelity('75')}
              style={{
                padding: '10px',
                borderRadius: '6px',
                border: fidelity === '75' ? '1px solid #3b82f6' : '1px solid #1e293b',
                backgroundColor: fidelity === '75' ? '#2563eb' : '#0f172a',
                color: '#fff',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              Сбалансировано (75%)
            </button>
            <button 
              onClick={() => setFidelity('100')}
              style={{
                padding: '10px',
                borderRadius: '6px',
                border: fidelity === '100' ? '1px solid #3b82f6' : '1px solid #1e293b',
                backgroundColor: fidelity === '100' ? '#1d4ed8' : '#0f172a',
                color: '#fff',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              🔒 Жесткая фиксация (100%)
            </button>
          </div>
        </section>

        {/* Описание сцены */}
        <section style={{
          backgroundColor: '#151c2c',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #1e293b'
        }}>
          <h2 style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ✍️ Описание сцены & Камера
          </h2>
          <div style={{
            backgroundColor: '#0f172a',
            padding: '12px',
            borderRadius: '6px',
            border: '1px solid #1e293b',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.9rem',
            color: '#94a3b8'
          }}>
            👤 Привязать: <span style={{ color: '#38bdf8' }}>@{selectedChar === 'barnaby' ? 'Барнаби' : 'Лили'}</span>
          </div>
        </section>

      </div>
    </div>
  );
}
