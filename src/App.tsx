import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Dashboard } from './pages/Dashboard';
import { Members } from './pages/Members';
import { Ministries } from './pages/Ministries';
import { Networks } from './pages/Networks';
import { NewMember } from './pages/NewMember';
import { Education } from './pages/Education';
import { Finance } from './pages/Finance';

const user = {
  name: 'Pastor David',
  role: 'Administrador',
};

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1">
          <Header churchName="Iglesia Principal" user={user} />
          <main className="p-6 bg-gray-50 min-h-[calc(100vh-4rem)]">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/miembros" element={<Members />} />
              <Route path="/ministerios" element={<Ministries />} />
              <Route path="/redes" element={<Networks />} />
              <Route path="/nuevo-miembro" element={<NewMember />} />
              <Route path="/formacion" element={<Education />} />
              <Route path="/finanzas" element={<Finance />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
