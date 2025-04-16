import { useState, useCallback, useEffect } from 'react';
import { User } from '../types';
import api from '../utils/api';

interface AuthState {
  token: string | null;
  user: User | null;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return {
      token,
      user: user ? JSON.parse(user) : null,
    };
  });

  const login = useCallback(async (email: string, password: string) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      setAuthState({ token, user });
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAuthState({ token: null, user: null });
  }, []);

  const updateUser = useCallback((user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
    setAuthState(prev => ({ ...prev, user }));
  }, []);

  useEffect(() => {
    // Verificar token expirado ou inválido
    if (authState.token) {
      api.get('/auth/validate')
        .catch(() => {
          logout();
        });
    }
  }, [authState.token, logout]);

  return {
    token: authState.token,
    user: authState.user,
    isAuthenticated: !!authState.token,
    login,
    logout,
    updateUser,
  };
} 