import React from 'react';
import { Search, Edit, Trash2, ChevronRight, Users as UsersIcon } from 'lucide-react';
import { GroupMembers } from '../components/groups/GroupMembers';
import { Member } from '../types';
import { sampleMembers, ministryMembers } from '../data/sampleMembers';

interface Ministry {
  id: string;
  name: string;
  description: string;
  leader: {
    name: string;
    avatar?: string;
  };
  memberCount: number;
}

export function Ministries() {
  const [selectedMinistry, setSelectedMinistry] = React.useState<string | null>(null);
  
  const ministries: Ministry[] = [
    {
      id: '1',
      name: 'Ministerio de Alabanza',
      description: 'Ministerio dedicado a la adoración y música',
      leader: {
        name: 'María Rodríguez',
      },
      memberCount: 15,
    },
    {
      id: '2',
      name: 'Ministerio de Niños',
      description: 'Ministerio enfocado en la enseñanza de niños',
      leader: {
        name: 'Juan Pérez',
      },
      memberCount: 20,
    },
  ];

  const getMinistryMembers = (ministryId: string): Member[] => {
    const memberIds = ministryMembers[ministryId] || [];
    return sampleMembers.filter(member => memberIds.includes(member.id));
  };

  const getAvailableMembers = (ministryId: string): Member[] => {
    const currentMemberIds = ministryMembers[ministryId] || [];
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
        <h1 className="text-2xl font-semibold text-gray-900">Ministerios</h1>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar ministerios..."
            className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ministries.map((ministry) => (
          <div key={ministry.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{ministry.name}</h3>
                <p className="text-gray-500 mt-1">{ministry.description}</p>
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
                  {ministry.leader.name[0]}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Líder: {ministry.leader.name}</p>
                <p className="text-sm text-gray-500">{ministry.memberCount} miembros</p>
              </div>
              <button 
                onClick={() => setSelectedMinistry(ministry.id)}
                className="flex items-center text-indigo-600 hover:text-indigo-700"
              >
                <span className="text-sm font-medium">Ver detalles</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {selectedMinistry && (
        <GroupMembers
          groupName={ministries.find(m => m.id === selectedMinistry)?.name || ''}
          members={getMinistryMembers(selectedMinistry)}
          availableMembers={getAvailableMembers(selectedMinistry)}
          onClose={() => setSelectedMinistry(null)}
          onAddMember={handleAddMember}
          onRemoveMember={handleRemoveMember}
        />
      )}
    </div>
  );
}