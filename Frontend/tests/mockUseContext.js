import React from "react";
import { AuthContext } from "../src/contexts/auth";

const mockUseContext = { isLogin: true };

export const wrapper = ({ children }) => (
  <AuthContext.Provider value={mockUseContext}>{children}</AuthContext.Provider>
);
