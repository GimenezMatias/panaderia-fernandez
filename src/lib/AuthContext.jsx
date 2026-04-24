import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ role: 'user' }); // Mock user
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Always authenticated
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [authChecked, setAuthChecked] = useState(true);
  const [appPublicSettings, setAppPublicSettings] = useState({ id: 'mock-app' }); // Mock settings

  useEffect(() => {
    // No need to check app state, always ready
  }, []);

  const logout = (shouldRedirect = true) => {
    // Mock logout, do nothing
  };

  const navigateToLogin = () => {
    // Mock login, do nothing
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated,
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      authChecked,
      logout,
      navigateToLogin,
      checkUserAuth: () => {},
      checkAppState: () => {}
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
