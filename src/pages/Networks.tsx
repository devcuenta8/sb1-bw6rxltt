import React from 'react';
import { Search, Edit, Trash2, ChevronRight, Users as UsersIcon } from 'lucide-react';
import { GroupMembers } from '../components/groups/GroupMembers';
import { Member } from '../types';
import { sampleMembers, networkMembers } from '../data/sampleMembers';

interface Network {
  id: string;
  name: string;
  description: string;
  leader: {
    name: string;
    avatar?: string;
  };
  memberCount: number;
  meetingTime: string;
}

export function Networks() {
  const [selectedNetwork, setSelectedNetwork] = React.useState<string | null>(null);

  const networks: Network[] = [
    {
      id: '1',
      name: 'Red Norte',
      description: 'Red de células del sector norte',
      leader: {
        name: 'Juan Pérez',
      },
      memberCount: 25,
      meetingTime: 'Miércoles 19:00',
    },
    {
      id: '2',
      name: 'Red Sur',
      description: 'Red de células del sector sur',
      leader: {
        name: 'María Rodríguez',
      },
      memberCount: 30,
      meetingTime: 'Jueves 19:00',
    },
  ];

  const getNetworkMembers = (networkId: string): Member[] => {
    const memberIds = networkMembers[networkId] || [];
    return sampleMembers.filter(member => memberIds.includes(member.id));
  };

  const getAvailableMembers = (networkId: string): Member[] => {
    const currentMemberIds = networkMembers[networkId] || [];
    return sampleMembers.filter(member => !currentMemberIds.includes(member.id));
  };

  const handleAddMember = (memberId: string) => {
    // Implementar lógica para agregar miembro
    console.log('Agregar miembro:', memberId);
  };

  const handleRemoveMember = (memberId: string) => {
    // Implementar lógica para eliminar miembro
    console.log('Eliminar miembro:', memberId);
  };
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Redes</h1>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar redes..."
            className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {networks.map((network) => (
          <div key={network.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{network.name}</h3>
                <p className="text-gray-500 mt-1">{network.description}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <UsersIcon className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Edit className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Trash2 className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-600 font-medium">
                  {network.leader.name[0]}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Líder: {network.leader.name}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>{network.memberCount} miembros</span>
                  <span>•</span>
                  <span>{network.meetingTime}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedNetwork(network.id)}
                className="flex items-center text-indigo-600 hover:text-indigo-700"
              >
                <span className="text-sm font-medium">Ver detalles</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {selectedNetwork && (
        <GroupMembers
          groupName={networks.find(n => n.id === selectedNetwork)?.name || ''}
          members={getNetworkMembers(selectedNetwork)}
          availableMembers={getAvailableMembers(selectedNetwork)}
          onClose={() => setSelectedNetwork(null)}
          onAddMember={handleAddMember}
          onRemoveMember={handleRemoveMember}
        />
      )}
    </div>
  );
}