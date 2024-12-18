import React from 'react';
import { Home, Users, Church, Network, UserPlus, Settings, GraduationCap, DollarSign } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Miembros', path: '/miembros' },
  { icon: Church, label: 'Ministerios', path: '/ministerios' },
  { icon: Network, label: 'Redes', path: '/redes' },
  { icon: UserPlus, label: 'Nuevo Miembro', path: '/nuevo-miembro' },
  { icon: GraduationCap, label: 'Formación', path: '/formacion' },
  { icon: DollarSign, label: 'Finanzas', path: '/finanzas' },
  { icon: Settings, label: 'Configuración', path: '/configuracion' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-indigo-900 min-h-screen p-4">
      <div className="flex items-center gap-2 text-white mb-8">
        <Users className="h-8 w-8" />
        <h1 className="text-xl font-semibold">Iglesia Dashboard</h1>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-white hover:bg-indigo-800 transition-colors ${
                isActive ? 'bg-indigo-800' : ''
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}