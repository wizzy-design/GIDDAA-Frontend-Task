"use client";

import React, { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import Cookies from "js-cookie";

export interface UserContextType {
  accessToken: string | null;
  refreshToken: string | null;
  loggedIn: boolean;
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  logout: () => void;
  loading: boolean;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [accessToken, setAccessTokenState] = useState<string | null>(null);
  const [refreshToken, setRefreshTokenState] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Load tokens from cookies on initial render and set loggedIn state
  useEffect(() => {
    const savedAccessToken = Cookies.get("accessToken");
    const savedRefreshToken = Cookies.get("refreshToken");
    if (savedAccessToken) setAccessTokenState(savedAccessToken);
    if (savedRefreshToken) setRefreshTokenState(savedRefreshToken);
    setLoggedIn(!!savedAccessToken); // Update loggedIn based on accessToken
    setLoading(false);
  }, []);

  useEffect(() => {
    const savedAccessToken = Cookies.get("accessToken");
    if (savedAccessToken) setAccessTokenState(savedAccessToken);
  }, [loggedIn]);

  // Function to update and set the access token
  const setAccessToken = (token: string) => {
    setAccessTokenState(token);
    Cookies.set("accessToken", token, {
      secure: true,
      sameSite: "Strict",
      expires: 1,
    }); // Expires in 1 hour
    setLoggedIn(true); // User is logged in if accessToken is set
  };

  // Function to update and set the refresh token
  const setRefreshToken = (token: string) => {
    setRefreshTokenState(token);
    Cookies.set("refreshToken", token, { secure: true, sameSite: "Strict" });
  };

  // Function to remove tokens and update loggedIn state
  const clearTokens = () => {
    setAccessTokenState(null);
    setRefreshTokenState(null);
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    setLoggedIn(false); // User is logged out if tokens are cleared
  };

  const logout = () => {
    setLoading(true);
    clearTokens();
  };

  // Context value
  const contextValue: UserContextType = {
    accessToken,
    refreshToken,
    loggedIn,
    setAccessToken,
    setRefreshToken,
    logout,
    loading,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

const useUser = (): UserContextType => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
};

export default useUser;
