import React from 'react';
import { Users, Church, Calendar } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  icon: React.ReactNode;
  trend: 'up' | 'down';
}

function StatCard({ title, value, change, icon, trend }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
        </div>
        <div className="h-12 w-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
          {icon}
        </div>
      </div>
      <p className={`text-sm mt-2 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
        {change}
      </p>
    </div>
  );
}

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Miembros Totales"
          value="324"
          change="+12% vs mes anterior"
          icon={<Users className="h-6 w-6" />}
          trend="up"
        />
        <StatCard
          title="Nuevos Miembros"
          value="24"
          change="+8% vs mes anterior"
          icon={<Users className="h-6 w-6" />}
          trend="up"
        />
        <StatCard
          title="Ministerios Activos"
          value="8"
          change="+5% vs mes anterior"
          icon={<Church className="h-6 w-6" />}
          trend="up"
        />
        <StatCard
          title="Asistencia Promedio"
          value="85%"
          change="-2% vs mes anterior"
          icon={<Calendar className="h-6 w-6" />}
          trend="down"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Miembros Recientes</h2>
          <div className="space-y-4">
            {recentMembers.map((member) => (
              <div key={member.id} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 font-medium">{member.name[0]}</span>
                </div>
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-gray-500">Unido el {member.joinDate}</p>
                </div>
                <span className="ml-auto text-xs font-medium px-2 py-1 rounded-full bg-indigo-50 text-indigo-600">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Redes Activas</h2>
          <div className="space-y-4">
            {activeNetworks.map((network) => (
              <div key={network.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{network.name}</p>
                  <p className="text-sm text-gray-500">
                    Líder: {network.leader} • {network.members} miembros
                  </p>
                </div>
                <span className="text-sm text-gray-500">{network.meetingTime}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const recentMembers = [
  { id: '1', name: 'Pastor David González', role: 'Pastor', joinDate: '2020-01-15' },
  { id: '2', name: 'María Rodríguez', role: 'Líder de Ministerio', joinDate: '2023-03-20' },
  { id: '3', name: 'Juan Pérez', role: 'Líder de Red', joinDate: '2023-05-10' },
];

const activeNetworks = [
  { 
    id: '1', 
    name: 'Red Norte', 
    leader: 'Juan Pérez',
    members: 25,
    meetingTime: 'Miércoles 19:00'
  },
  {
    id: '2',
    name: 'Red Sur',
    leader: 'María Rodríguez',
    members: 30,
    meetingTime: 'Jueves 19:00'
  },
];