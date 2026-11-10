'use client';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const supabase = createClientComponentClient();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${location.origin}/auth/callback` },
    });
    setLoading(false);
    if (error) setMessage(`Ошибка: ${error.message}`);
    else setMessage('Успешно! Проверьте почту или войдите.');
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setMessage(`Ошибка: ${error.message}`);
    else window.location.href = '/';
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', background: '#111', color: '#fff', borderRadius: '8px' }}>
      <h2>Вход / Регистрация в PixarCraft AI</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '10px' }} />
        <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '10px' }} />
        <button type="button" onClick={handleSignIn} disabled={loading} style={{ padding: '10px', cursor: 'pointer' }}>Войти</button>
        <button type="button" onClick={handleSignUp} disabled={loading} style={{ padding: '10px', cursor: 'pointer', background: '#333', color: '#fff' }}>Зарегистрироваться</button>
      </form>
      {message && <p style={{ marginTop: '10px' }}>{message}</p>}
    </div>
  );
}
