import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";


import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Showcase */}
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}